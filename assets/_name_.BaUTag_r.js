import{_ as q}from"./_plugin-vue_export-helper.DlAUqK2U.js";import{t as h,v as y,L as X,d as Y,M as tt,r as k,F as et,x as b,N as S,O as U,P as d,y as R,Q as _t,A as nt,R as E,S as I,T as rt,B as st,U as at,C as it,D as ot}from"./entry.BNasS65_.js";const ct={},lt={style:{"font-family":"'Twemoji Country Flags'"}};function dt(r,t){return h(),y("span",lt,[X(r.$slots,"default")])}const gt=q(ct,[["render",dt]]),wt=""+globalThis.__publicAssetsURL("avatar.svg"),bt=""+new URL("bridge_bg.BGiHTFZF.wasm",import.meta.url).href,ft=async(r={},t)=>{let e;if(t.startsWith("data:")){const _=t.replace(/^data:.*?base64,/,"");let s;if(typeof Buffer=="function"&&typeof Buffer.from=="function")s=Buffer.from(_,"base64");else if(typeof atob=="function"){const c=atob(_);s=new Uint8Array(c.length);for(let a=0;a<c.length;a++)s[a]=c.charCodeAt(a)}else throw new Error("Cannot decode base64-encoded data URL");e=await WebAssembly.instantiate(s,r)}else{const _=await fetch(t),s=_.headers.get("Content-Type")||"";if("instantiateStreaming"in WebAssembly&&s.startsWith("application/wasm"))e=await WebAssembly.instantiateStreaming(_,r);else{const c=await _.arrayBuffer();e=await WebAssembly.instantiate(c,r)}}return e.instance.exports};let n;function ut(r){n=r}const pt=typeof TextDecoder>"u"?(0,module.require)("util").TextDecoder:TextDecoder;let H=new pt("utf-8",{ignoreBOM:!0,fatal:!0});H.decode();let B=null;function x(){return(B===null||B.byteLength===0)&&(B=new Uint8Array(n.memory.buffer)),B}function f(r,t){return r=r>>>0,H.decode(x().subarray(r,r+t))}const u=new Array(128).fill(void 0);u.push(void 0,null,!0,!1);let A=u.length;function M(r){A===u.length&&u.push(u.length+1);const t=A;return A=u[t],u[t]=r,t}function J(r){return u[r]}let l=0;const mt=typeof TextEncoder>"u"?(0,module.require)("util").TextEncoder:TextEncoder;let W=new mt("utf-8");const vt=typeof W.encodeInto=="function"?function(r,t){return W.encodeInto(r,t)}:function(r,t){const e=W.encode(r);return t.set(e),{read:r.length,written:e.length}};function m(r,t,e){if(e===void 0){const g=W.encode(r),w=t(g.length,1)>>>0;return x().subarray(w,w+g.length).set(g),l=g.length,w}let _=r.length,s=t(_,1)>>>0;const c=x();let a=0;for(;a<_;a++){const g=r.charCodeAt(a);if(g>127)break;c[s+a]=g}if(a!==_){a!==0&&(r=r.slice(a)),s=e(s,_,_=a+r.length*3,1)>>>0;const g=x().subarray(s+a,s+_),w=vt(r,g);a+=w.written,s=e(s,_,a,1)>>>0}return l=a,s}function p(r){return r==null}let L=null;function o(){return(L===null||L.byteLength===0)&&(L=new Int32Array(n.memory.buffer)),L}function ht(r){r<132||(u[r]=A,A=r)}function z(r){const t=J(r);return ht(r),t}let C=null;function P(){return(C===null||C.byteLength===0)&&(C=new Uint32Array(n.memory.buffer)),C}function $(r,t){r=r>>>0;const _=P().subarray(r/4,r/4+t),s=[];for(let c=0;c<_.length;c++)s.push(z(_[c]));return s}function D(r,t){const e=t(r.length*4,4)>>>0,_=P();for(let s=0;s<r.length;s++)_[e/4+s]=M(r[s]);return l=r.length,e}function yt(r,t){return r=r>>>0,x().subarray(r/1,r/1+t)}function G(r,t){const e=t(r.length*1,1)>>>0;return x().set(r,e/1),l=r.length,e}function xt(r){try{const _=n.__wbindgen_add_to_stack_pointer(-16),s=G(r,n.__wbindgen_export_0),c=l;n.get_alias(_,s,c);var t=o()[_/4+0],e=o()[_/4+1];let a;return t!==0&&(a=f(t,e).slice(),n.__wbindgen_export_2(t,e*1,1)),a}finally{n.__wbindgen_add_to_stack_pointer(16)}}function kt(r){const t=m(r,n.__wbindgen_export_0,n.__wbindgen_export_1),e=l;return n.is_special(t,e)!==0}const N=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(r=>n.__wbg_artist_free(r>>>0));class T{static __wrap(t){t=t>>>0;const e=Object.create(T.prototype);return e.__wbg_ptr=t,N.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,N.unregister(this),t}free(){const t=this.__destroy_into_raw();n.__wbg_artist_free(t)}get flag(){try{const _=n.__wbindgen_add_to_stack_pointer(-16);n.__wbg_get_artist_flag(_,this.__wbg_ptr);var t=o()[_/4+0],e=o()[_/4+1];let s;return t!==0&&(s=f(t,e).slice(),n.__wbindgen_export_2(t,e*1,1)),s}finally{n.__wbindgen_add_to_stack_pointer(16)}}set flag(t){var e=p(t)?0:m(t,n.__wbindgen_export_0,n.__wbindgen_export_1),_=l;n.__wbg_set_artist_flag(this.__wbg_ptr,e,_)}get avatar(){try{const _=n.__wbindgen_add_to_stack_pointer(-16);n.__wbg_get_artist_avatar(_,this.__wbg_ptr);var t=o()[_/4+0],e=o()[_/4+1];let s;return t!==0&&(s=f(t,e).slice(),n.__wbindgen_export_2(t,e*1,1)),s}finally{n.__wbindgen_add_to_stack_pointer(16)}}set avatar(t){var e=p(t)?0:m(t,n.__wbindgen_export_0,n.__wbindgen_export_1),_=l;n.__wbg_set_artist_avatar(this.__wbg_ptr,e,_)}get name(){try{const _=n.__wbindgen_add_to_stack_pointer(-16);n.__wbg_get_artist_name(_,this.__wbg_ptr);var t=o()[_/4+0],e=o()[_/4+1];let s;return t!==0&&(s=f(t,e).slice(),n.__wbindgen_export_2(t,e*1,1)),s}finally{n.__wbindgen_add_to_stack_pointer(16)}}set name(t){var e=p(t)?0:m(t,n.__wbindgen_export_0,n.__wbindgen_export_1),_=l;n.__wbg_set_artist_name(this.__wbg_ptr,e,_)}get alias(){try{const _=n.__wbindgen_add_to_stack_pointer(-16);n.__wbg_get_artist_alias(_,this.__wbg_ptr);var t=o()[_/4+0],e=o()[_/4+1];let s;return t!==0&&(s=$(t,e).slice(),n.__wbindgen_export_2(t,e*4,4)),s}finally{n.__wbindgen_add_to_stack_pointer(16)}}set alias(t){var e=p(t)?0:D(t,n.__wbindgen_export_0),_=l;n.__wbg_set_artist_alias(this.__wbg_ptr,e,_)}get socials(){try{const _=n.__wbindgen_add_to_stack_pointer(-16);n.__wbg_get_artist_socials(_,this.__wbg_ptr);var t=o()[_/4+0],e=o()[_/4+1];let s;return t!==0&&(s=$(t,e).slice(),n.__wbindgen_export_2(t,e*4,4)),s}finally{n.__wbindgen_add_to_stack_pointer(16)}}set socials(t){var e=p(t)?0:D(t,n.__wbindgen_export_0),_=l;n.__wbg_set_artist_socials(this.__wbg_ptr,e,_)}to_bitcode(){try{const a=n.__wbindgen_add_to_stack_pointer(-16);n.artist_to_bitcode(a,this.__wbg_ptr);var t=o()[a/4+0],e=o()[a/4+1],_=o()[a/4+2],s=o()[a/4+3];if(s)throw z(_);var c=yt(t,e).slice();return n.__wbindgen_export_2(t,e*1,1),c}finally{n.__wbindgen_add_to_stack_pointer(16)}}static from_bitcode(t){const e=G(t,n.__wbindgen_export_0),_=l,s=n.artist_from_bitcode(e,_);return s===0?void 0:T.__wrap(s)}}const V=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(r=>n.__wbg_social_free(r>>>0));class j{static __wrap(t){t=t>>>0;const e=Object.create(j.prototype);return e.__wbg_ptr=t,V.register(e,e.__wbg_ptr,e),e}static __unwrap(t){return t instanceof j?t.__destroy_into_raw():0}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,V.unregister(this),t}free(){const t=this.__destroy_into_raw();n.__wbg_social_free(t)}get code(){let t,e;try{const c=n.__wbindgen_add_to_stack_pointer(-16);n.__wbg_get_social_code(c,this.__wbg_ptr);var _=o()[c/4+0],s=o()[c/4+1];return t=_,e=s,f(_,s)}finally{n.__wbindgen_add_to_stack_pointer(16),n.__wbindgen_export_2(t,e,1)}}set code(t){const e=m(t,n.__wbindgen_export_0,n.__wbindgen_export_1),_=l;n.__wbg_set_social_code(this.__wbg_ptr,e,_)}get name(){try{const _=n.__wbindgen_add_to_stack_pointer(-16);n.__wbg_get_artist_avatar(_,this.__wbg_ptr);var t=o()[_/4+0],e=o()[_/4+1];let s;return t!==0&&(s=f(t,e).slice(),n.__wbindgen_export_2(t,e*1,1)),s}finally{n.__wbindgen_add_to_stack_pointer(16)}}set name(t){var e=p(t)?0:m(t,n.__wbindgen_export_0,n.__wbindgen_export_1),_=l;n.__wbg_set_artist_avatar(this.__wbg_ptr,e,_)}get desc(){try{const _=n.__wbindgen_add_to_stack_pointer(-16);n.__wbg_get_artist_name(_,this.__wbg_ptr);var t=o()[_/4+0],e=o()[_/4+1];let s;return t!==0&&(s=f(t,e).slice(),n.__wbindgen_export_2(t,e*1,1)),s}finally{n.__wbindgen_add_to_stack_pointer(16)}}set desc(t){var e=p(t)?0:m(t,n.__wbindgen_export_0,n.__wbindgen_export_1),_=l;n.__wbg_set_artist_name(this.__wbg_ptr,e,_)}get link(){try{const _=n.__wbindgen_add_to_stack_pointer(-16);n.__wbg_get_social_link(_,this.__wbg_ptr);var t=o()[_/4+0],e=o()[_/4+1];let s;return t!==0&&(s=f(t,e).slice(),n.__wbindgen_export_2(t,e*1,1)),s}finally{n.__wbindgen_add_to_stack_pointer(16)}}set link(t){var e=p(t)?0:m(t,n.__wbindgen_export_0,n.__wbindgen_export_1),_=l;n.__wbg_set_social_link(this.__wbg_ptr,e,_)}}function At(r){const t=j.__wrap(r);return M(t)}function Tt(r){return j.__unwrap(z(r))}function jt(r,t){const e=f(r,t);return M(e)}function Ft(r,t){throw new Error(f(r,t))}function St(r,t){const e=J(t),_=typeof e=="string"?e:void 0;var s=p(_)?0:m(_,n.__wbindgen_export_0,n.__wbindgen_export_1),c=l;o()[r/4+1]=c,o()[r/4+0]=s}function Ut(r){z(r)}URL=globalThis.URL;const i=await ft({"./bridge_bg.js":{__wbg_social_new:At,__wbg_social_unwrap:Tt,__wbindgen_string_new:jt,__wbindgen_throw:Ft,__wbindgen_string_get:St,__wbindgen_object_drop_ref:Ut}},bt),Bt=i.memory,Lt=i.__wbg_social_free,Ct=i.__wbg_get_social_code,Wt=i.__wbg_set_social_code,zt=i.__wbg_get_social_link,Rt=i.__wbg_set_social_link,Et=i.__wbg_artist_free,Mt=i.__wbg_get_artist_flag,Ot=i.__wbg_set_artist_flag,It=i.__wbg_get_artist_avatar,$t=i.__wbg_set_artist_avatar,Dt=i.__wbg_get_artist_name,Nt=i.__wbg_set_artist_name,Vt=i.__wbg_get_artist_alias,qt=i.__wbg_set_artist_alias,Ht=i.__wbg_get_artist_socials,Jt=i.__wbg_set_artist_socials,Pt=i.artist_to_bitcode,Gt=i.artist_from_bitcode,Qt=i.get_alias,Zt=i.is_special,Kt=i.__wbg_set_social_name,Xt=i.__wbg_set_social_desc,Yt=i.__wbg_get_social_name,te=i.__wbg_get_social_desc,ee=i.__wbindgen_export_0,_e=i.__wbindgen_export_1,ne=i.__wbindgen_add_to_stack_pointer,re=i.__wbindgen_export_2,se=Object.freeze(Object.defineProperty({__proto__:null,__wbg_artist_free:Et,__wbg_get_artist_alias:Vt,__wbg_get_artist_avatar:It,__wbg_get_artist_flag:Mt,__wbg_get_artist_name:Dt,__wbg_get_artist_socials:Ht,__wbg_get_social_code:Ct,__wbg_get_social_desc:te,__wbg_get_social_link:zt,__wbg_get_social_name:Yt,__wbg_set_artist_alias:qt,__wbg_set_artist_avatar:$t,__wbg_set_artist_flag:Ot,__wbg_set_artist_name:Nt,__wbg_set_artist_socials:Jt,__wbg_set_social_code:Wt,__wbg_set_social_desc:Xt,__wbg_set_social_link:Rt,__wbg_set_social_name:Kt,__wbg_social_free:Lt,__wbindgen_add_to_stack_pointer:ne,__wbindgen_export_0:ee,__wbindgen_export_1:_e,__wbindgen_export_2:re,artist_from_bitcode:Gt,artist_to_bitcode:Pt,get_alias:Qt,is_special:Zt,memory:Bt},Symbol.toStringTag,{value:"Module"}));ut(se);const Q=r=>(it("data-v-8c5b5f77"),r=r(),ot(),r),ae={class:"fixed -z-10 h-[100vh] w-full scale-125 bg-black blur-2xl brightness-50"},ie=["src"],oe={src:wt,class:"fixed -z-10 size-full object-cover"},ce={key:0,class:"mx-auto max-w-96 py-12"},le={class:"flex w-full justify-center"},de=["src"],ge={class:"aspect-square w-full max-w-60 animate-pulse rounded-full bg-black shadow-2xl"},we={class:"flex w-full flex-row items-center justify-center gap-3 py-7 text-center text-3xl font-bold text-white"},be={class:"px-1rem flex w-full flex-col gap-3"},fe=["href"],ue={key:1,class:"flex h-[100vh] flex-col items-center justify-center gap-5"},pe=Q(()=>b("span",{class:"text-5xl"},"🤷",-1)),me=Q(()=>b("span",{class:"text-xl text-white/85"},"Artist not found in database",-1)),ve=[pe,me],he=Y({__name:"[name]",setup(r){const t=tt(),e=k("loading"),_=k(""),s=k(void 0),c=k("");Array.isArray(t.params.name)?_.value=t.params.name[0].toLowerCase().trim():_.value=t.params.name.toLowerCase().trim(),(async()=>{try{const g=await fetch(`/artists/${_.value}`),w=new Uint8Array(await g.arrayBuffer()),F=T.from_bitcode(w);if(F!==void 0){s.value=F,e.value="loaded";return}const v=xt(w);if(v===void 0){e.value="error";return}const Z=await fetch(`/artists/${v}`),K=new Uint8Array(await Z.arrayBuffer()),O=T.from_bitcode(K);if(O!==void 0){s.value=O,e.value="loaded";return}e.value="error"}catch{e.value="error"}})().catch(()=>{e.value="error"}),et(()=>{s.value!==void 0&&(c.value=s.value.avatar??"/avatar.svg"),document.title=`${s.value?.name??_.value} | Artist DB`});const a=k(!1);return(g,w)=>{const F=gt;return h(),y(I,null,[b("div",ae,[S(b("img",{src:d(c),class:"fixed -z-10 size-full object-cover"},null,8,ie),[[U,d(a)]]),S(b("img",oe,null,512),[[U,!d(a)]])]),d(e)==="loaded"?(h(),y("div",ce,[b("div",le,[S(b("img",{onLoad:w[0]||(w[0]=v=>a.value=!0),src:d(c),class:"aspect-square w-full max-w-60 rounded-full object-cover shadow-2xl"},null,40,de),[[U,d(a)]]),S(b("div",ge,null,512),[[U,!d(a)]])]),b("div",we,[b("div",null,R(d(s)?.name??d(_)),1),d(s)?.flag!==void 0?(h(),_t(F,{key:0},{default:nt(()=>[st(R(d(s)?.flag),1)]),_:1})):E("",!0)]),b("div",be,[(h(!0),y(I,null,rt(d(s)?.socials,v=>(h(),y("a",{key:v.code,href:v.link,target:"_blank",class:at(["both flex w-full justify-center px-6 py-3 text-lg hover:font-bold",d(kt)(v.link??"")?"special-link":"normal-link"])},R(v.desc),11,fe))),128))])])):E("",!0),d(e)==="error"?(h(),y("div",ue,ve)):E("",!0)],64)}}}),ke=q(he,[["__scopeId","data-v-8c5b5f77"]]);export{ke as default};