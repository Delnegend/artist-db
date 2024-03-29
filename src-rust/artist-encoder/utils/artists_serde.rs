use std::collections::{BTreeMap, HashMap, HashSet};

use bridge::{Artists, Social};
use toml_edit::Document;
use tracing::{info, warn};

use super::{avatar_parser::avatar_parser, constants::Constants};

pub struct ArtistsSerde<'a> {
    pub artists: Artists,
    constants: &'a Constants,
    avatar: HashMap<String, String>,
    pub content_change_after_post_proc: bool,
}

impl<'a> ArtistsSerde<'a> {
    /// Provide a path to artists.toml and a Constants instance
    pub fn from(path: &'a str, constants: &'a Constants) -> ArtistsSerde<'a> {
        let mut new = ArtistsSerde {
            constants,
            artists: Artists::new(),
            avatar: HashMap::new(),
            content_change_after_post_proc: false,
        };

        let toml_string = match std::fs::read_to_string(path) {
            Ok(toml_string) => toml_string,
            Err(err) => {
                warn!("failed to read artists.toml: {}", err);
                return new;
            }
        };

        let toml_document = match toml_string.parse::<Document>() {
            Ok(toml_document) => toml_document,
            Err(e) => {
                ArtistsSerde::handle_toml_de_err(toml_edit::de::Error::from(e), &toml_string);
                return new;
            }
        };

        let preprocess_artists = match toml_edit::de::from_document::<Artists>(toml_document) {
            Ok(artists) => artists,
            Err(err) => {
                ArtistsSerde::handle_toml_de_err(err, &toml_string);
                return new;
            }
        };
        let pre_proc_hash = super::artists_hasher(&preprocess_artists);

        let post_proc_artists = new.post_processing(preprocess_artists);
        let post_proc_hash = super::artists_hasher(&post_proc_artists);

        let hasher_not_err = pre_proc_hash != 0 && post_proc_hash != 0;

        new.artists = post_proc_artists;
        new.content_change_after_post_proc = hasher_not_err && (pre_proc_hash != post_proc_hash);

        new
    }

    /// Add avatar to artists, format description, and name_code_to_link before
    /// serializing to bitcode, for example: the descriptions I want to keep
    /// intact in the toml file, but want to format it into `Social name | Desc`
    /// in the distributed bitcode.
    pub fn pre_bitcode_ser(&self) -> Artists {
        let mut artists = self.artists.clone();

        artists.iter_mut().for_each(|(username, info)| {
            if let Some(avatar) = self.avatar.get(username) {
                info.avatar = Some(avatar.clone());
            }

            if let Some(socials) = info.socials.as_mut() {
                socials.iter_mut().for_each(|social| {
                    let special_empty = social.special.is_none();
                    let code_empty = social.code.is_none();
                    let code_special = social
                        .code
                        .as_ref()
                        .map_or(false, |code| self.constants.special_socials.contains(code));

                    if special_empty && (code_empty || code_special) {
                        social.special = Some(true);
                    }

                    if code_empty {
                        social.desc = social
                            .desc
                            .clone()
                            .or_else(|| Some(self.constants.default_description.clone()));
                        return;
                    }

                    social.desc = self
                        .constants
                        .format_description(&social.code, &social.desc);

                    social.link = social
                        .link
                        .clone()
                        .or_else(|| self.constants.name_code_to_link(&social.code, &social.name));
                });
            }
        });

        artists
    }

    /// Serialize the entire Artists instance to TOML
    pub fn to_toml_string(&self) -> Option<String> {
        let mut encoded = toml_edit::ser::to_document(&self.artists)
            .map_err(|err| warn!("failed to encode artists to document: {}", err))
            .ok()?;

        'next: for (username, info) in encoded.iter_mut() {
            let info_inline_table = match info.as_inline_table_mut() {
                Some(info_inline_table) => info_inline_table,
                None => {
                    warn!("{}: must be a table", username);
                    continue 'next;
                }
            };

            let socials = match info_inline_table
                .get_mut("socials")
                .and_then(|item| item.as_array_mut())
            {
                Some(socials) => socials,
                None => {
                    warn!("{}: socials must be an array", username);
                    continue 'next;
                }
            };

            'scoped: for social in socials.iter_mut() {
                match social.as_inline_table_mut() {
                    Some(social_inline_table) => social_inline_table,
                    None => {
                        warn!("{}: socials must be an inline table", username);
                        continue 'scoped;
                    }
                };
            }

            let info_table = info_inline_table.clone().into_table();
            *info = toml_edit::Item::Table(info_table);
        }

        Some(encoded.to_string())
    }

    /// Run right after .toml deserialize
    fn post_processing(&mut self, artists_: Artists) -> Artists {
        let mut artists = BTreeMap::new();

        // Warning missing fields, normalizes
        artists_.into_iter().for_each(|(username, info)| {
            let username = ArtistsSerde::cleanup_string(username);
            let mut info = info;

            // Duplication
            if artists.get(&username).is_some() {
                warn!("found duplicated: {}", &username);
                artists.insert(format!("__duplicated__{}", &username), info);
                return;
            }

            // Socials cleanup
            if let Some(socials) = info.socials.as_mut() {
                socials.iter_mut().for_each(|social| {
                    self.social_validator(social, &username);
                });
            } else {
                warn!("{}: there is no socials", &username);
            }

            // Alias cleanup
            if let Some(alias) = info.alias.as_mut() {
                alias.iter_mut().for_each(|alias| {
                    *alias = ArtistsSerde::cleanup_string(alias.clone());
                });
                alias.retain(|alias| !alias.is_empty());
                if alias.is_empty() {
                    info.alias = None;
                }
            }

            // Avatar handling
            let avatar = avatar_parser(self.constants, &info.socials, &info.avatar, &username);
            if let Some(avatar) = &avatar {
                self.avatar.insert(username.clone(), avatar.clone());
            }

            artists.insert(username, info);
        });

        /* #region - rm aliases in set of unames & other artists' alias */
        let all_uname: HashSet<String> = artists.keys().cloned().collect();
        let mut all_alias = artists
            .iter()
            .filter_map(|(_, info)| info.alias.as_ref())
            .flatten()
            .cloned()
            .collect::<HashSet<String>>();

        artists.iter_mut().for_each(|(_, info)| {
            if let Some(alias) = info.alias.as_mut() {
                let this_artist_aliases = alias.clone();
                this_artist_aliases.iter().for_each(|alias| {
                    all_alias.remove(alias);
                });

                alias.retain(|alias| !all_uname.contains(alias) && !all_alias.contains(alias));

                this_artist_aliases.iter().for_each(|alias| {
                    all_alias.insert(alias.clone());
                });
            }
        });
        /* #endregion */

        artists
    }

    /// Various checks and warnings for socials.
    /// Only mutate social.code to lowercase.
    fn social_validator(&self, social: &mut Social, username: &String) {
        let code = match &social.code {
            Some(code) => code.to_ascii_lowercase(),
            None => return,
        };

        social.code = Some(code.clone());
        let code_supported = self.constants.extended_socials.contains_key(&code);

        match (
            code_supported,
            &social.code,
            &social.name,
            &social.link,
            &social.desc,
        ) {
            // Best case
            (true, Some(_), Some(_), _, _) => social.link = None,

            // Code not present, enough information -> asume personal website
            // -> automatically remove code and name and continue with life
            (_, None, _, Some(_), Some(_)) => (social.code, social.name) = (None, None),
            // Same as above but missing link or desc
            (_, None, _, None, _) => {
                warn!("{}: missing `link` for personal website", &username);
            }
            (_, None, _, _, None) => {
                warn!("{}: missing `desc` for personal website", &username);
            }

            // Code not supported, but not provide enough information, warn to
            // add support for social
            (false, Some(code), _, _, _) => {
                info!("{}: consider add support for social {}", &username, &code);
            }

            // Code supported but missing name to generate link
            (true, _, None, _, _) => {
                warn!("{}: missing `name` for {}", &username, &code);
            }
        };
    }

    /// Handle toml deserialize error
    fn handle_toml_de_err(err: toml_edit::de::Error, toml_string: &str) {
        let part_where_err = match err.span() {
            Some(span) => &toml_string[span],
            None => "unknown",
        };

        let term_width = match term_size::dimensions() {
            Some((w, _)) => w,
            None => 80,
        };

        warn!("failed to parse artists.toml: {}", err.message());

        let line_max_width = part_where_err
            .lines()
            .map(|line| line.len())
            .max()
            .unwrap_or(0);

        let divider_len = line_max_width.min(term_width);

        println!(
            "{}\n{}\n{}",
            "-".repeat(divider_len),
            part_where_err,
            "-".repeat(divider_len)
        );
    }

    /// Replace non-alphanumeric, non-dash and non-underscore characters with underscore
    ///
    /// Convert non-lowercase to lowercase
    fn cleanup_string(orig: String) -> String {
        orig.chars()
            .map(|c| match c {
                'a'..='z' | '0'..='9' | '-' | '_' => c,
                'A'..='Z' => c.to_ascii_lowercase(),
                _ => '_',
            })
            .collect()
    }
}
