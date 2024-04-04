import{L as j,d as z,M as C,r as a,F as A,t as d,v as f,x as s,N as _,O as m,P as t,y as b,Q as g,R as I,S as k,T as $,C as N,D as B}from"./xU8fNrX6.js";import{_ as D}from"./DlAUqK2U.js";async function F(r){try{const e=await(await fetch(`/artists/${r}`)).text();return e.startsWith("@")?await(await fetch(`/artists/${e.slice(1)}`)).text():new Promise(l=>l(e))}catch{return new Promise((i,e)=>e("error"))}}const P=j("/avatar.svg"),S=r=>(N("data-v-ee5130d6"),r=r(),B(),r),R={class:"fixed -z-10 h-screen w-full scale-125 bg-black blur-2xl brightness-50"},q=["src"],E={src:P,class:"fixed -z-10 size-full object-cover"},T={key:0,class:"mx-auto max-w-96 py-12"},U={class:"flex w-full justify-center"},V=["src"],W={class:"aspect-square w-full max-w-60 animate-pulse rounded-full bg-black shadow-2xl"},M={class:"display-name flex w-full flex-row items-center justify-center gap-3 py-7 text-center text-4xl font-bold text-white"},O={class:"px-1rem flex w-full flex-col gap-3"},Q=["href"],G={key:1,class:"flex h-screen flex-col items-center justify-center gap-5"},H=S(()=>s("span",{class:"text-5xl"},"🤷",-1)),J=S(()=>s("span",{class:"text-xl text-white/85"},"Artist not found in database",-1)),K=[H,J],X=z({__name:"[name]",setup(r){const i=C(),e=a("loading"),l=a("");Array.isArray(i.params.name)?l.value=i.params.name[0].toLowerCase().trim():l.value=i.params.name.toLowerCase().trim();const v=a(""),x=a(""),p=a(""),w=a([]);F(l.value).then(o=>{if(o===""){e.value="error";return}e.value="loaded",v.value=o}).catch(()=>{e.value="error"}),A(()=>{if(v.value==="")return;const o=v.value.split(`
`),n=o[0].split(",");x.value=n[0],n[1]==="_"?p.value="/avatar.svg":p.value=`https://unavatar.io/${n[1]}?size=400&fallback=https://artistdb.delnegend.com/avatar.svg`,w.value=o.slice(1).map(L=>{const[h,y]=L.split(",");return h.startsWith("*")?{isSpecial:!0,link:h.slice(1),desc:y}:{isSpecial:!1,link:h,desc:y}})});const u=a(!1);return(o,n)=>(d(),f(g,null,[s("div",R,[_(s("img",{src:t(p),class:"fixed -z-10 size-full object-cover"},null,8,q),[[m,t(u)]]),_(s("img",E,null,512),[[m,!t(u)]])]),t(e)==="loaded"?(d(),f("div",T,[s("div",U,[_(s("img",{onLoad:n[0]||(n[0]=c=>u.value=!0),src:t(p),class:"aspect-square w-full max-w-60 rounded-full object-cover shadow-2xl"},null,40,V),[[m,t(u)]]),_(s("div",W,null,512),[[m,!t(u)]])]),s("div",M,b(t(x)),1),s("div",O,[(d(!0),f(g,null,I(t(w),c=>(d(),f("a",{key:c.link,href:`https:${c.link}`,target:"_blank",class:$(["both flex w-full justify-center px-6 py-3 text-xl hover:font-bold",c.isSpecial===!0?"special-link":"normal-link"])},b(c.desc),11,Q))),128))])])):k("",!0),t(e)==="error"?(d(),f("div",G,K)):k("",!0)],64))}}),ee=D(X,[["__scopeId","data-v-ee5130d6"]]);export{ee as default};
