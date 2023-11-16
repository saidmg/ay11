import{T as B,H as N}from"./components.0cba67b8.js";import{m as C,I as V,J as D,K as H,i as y,h as _,L,E as O,M as P,g as z,u as F,o as b,c as h,b as E,w as j,d as I,t as k,a as x,y as S,H as $,G as R,F as W}from"./entry.155662a4.js";import{_ as G}from"./_plugin-vue_export-helper.c27b6911.js";import"./vue.f36acd1f.de688afe.js";function M(e){return D()?(H(e),!0):!1}function w(e){return typeof e=="function"?e():y(e)}const T=typeof window<"u"&&typeof document<"u",J=Object.prototype.toString,K=e=>J.call(e)==="[object Object]",U=()=>{};function q(e,t,n={}){const{immediate:r=!0}=n,s=C(!1);let u=null;function i(){u&&(clearTimeout(u),u=null)}function p(){s.value=!1,i()}function l(...c){i(),s.value=!0,u=setTimeout(()=>{s.value=!1,u=null,e(...c)},w(t))}return r&&(s.value=!0,T&&l()),M(p),{isPending:V(s),start:l,stop:p}}function Q(e){var t;const n=w(e);return(t=n==null?void 0:n.$el)!=null?t:n}const X=T?window:void 0,Y=T?window.navigator:void 0;function Z(...e){let t,n,r,s;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,r,s]=e,t=X):[t,n,r,s]=e,!t)return U;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const u=[],i=()=>{u.forEach(d=>d()),u.length=0},p=(d,f,o,g)=>(d.addEventListener(f,o,g),()=>d.removeEventListener(f,o,g)),l=L(()=>[Q(t),w(s)],([d,f])=>{if(i(),!d)return;const o=K(f)?{...f}:f;u.push(...n.flatMap(g=>r.map(v=>p(d,g,v,o))))},{immediate:!0,flush:"post"}),c=()=>{l(),i()};return M(c),c}function ee(){const e=C(!1);return O()&&P(()=>{e.value=!0}),e}function te(e){const t=ee();return _(()=>(t.value,!!e()))}function oe(e={}){const{navigator:t=Y,read:n=!1,source:r,copiedDuring:s=1500,legacy:u=!1}=e,i=te(()=>t&&"clipboard"in t),p=_(()=>i.value||u),l=C(""),c=C(!1),d=q(()=>c.value=!1,s);function f(){i.value?t.clipboard.readText().then(a=>{l.value=a}):l.value=v()}p.value&&n&&Z(["copy","cut"],f);async function o(a=w(r)){p.value&&a!=null&&(i.value?await t.clipboard.writeText(a):g(a),l.value=a,c.value=!0,d.start())}function g(a){const m=document.createElement("textarea");m.value=a??"",m.style.position="absolute",m.style.opacity="0",document.body.appendChild(m),m.select(),document.execCommand("copy"),m.remove()}function v(){var a,m,A;return(A=(m=(a=document==null?void 0:document.getSelection)==null?void 0:a.call(document))==null?void 0:m.toString())!=null?A:""}return{isSupported:p,text:l,copied:c,copy:o}}const ne={class:"prose-container",style:{background:"#1e1e1e",position:"relative","margin-top":"1rem","margin-bottom":"1rem","padding-top":"1em",overflow:"hidden","border-radius":"0.5rem"}},ae={key:0,class:"filename-text",style:{position:"absolute",top:"0",left:"1em",padding:"0.25em 0.5em",color:"white","font-size":"14px"}},se={class:"bottom-container",style:{display:"flex","justify-content":"flex-end"}},le={class:"copy-container",style:{display:"flex"}},re={key:0,class:"copied-text m-2 p-2",style:{color:"white"}},ue=z({__name:"ProseCode",props:{code:{default:""},language:{default:null},filename:{default:null},highlights:{default:[]}},setup(e){const t=e,n=F(),{copy:r,copied:s,text:u}=oe(),i=n.params.componentSlug,p=i.charAt(0).toUpperCase()+i.slice(1)+" - Code",l={css:{text:"css",background:"#2962ff",color:"white"},vue:{text:"vue",background:"#42b883",color:"white"},js:{text:"js",background:"#f7df1e",color:"black"},html:{text:"html",background:"#dd4b25",color:"white"}},c=_(()=>{var o;return t.language?(o=l[t.language])==null?void 0:o.text:null}),d=_(()=>{var o;return t.language?(o=l[t.language])==null?void 0:o.background:null}),f=_(()=>{var o;return t.language?(o=l[t.language])==null?void 0:o.color:null});return(o,g)=>{const v=B,a=N;return b(),h(W,null,[E(a,null,{default:j(()=>[E(v,null,{default:j(()=>[I(k(p))]),_:1})]),_:1}),x("div",ne,[o.filename?(b(),h("span",ae,k(o.filename),1)):S("",!0),y(c)?(b(),h("span",{key:1,style:$([{background:y(d),color:y(f)},{position:"absolute",top:"0",right:"1em",padding:"0.25em 0.5em","font-size":"14px","text-transform":"uppercase","border-bottom-right-radius":"0.25em","border-bottom-left-radius":"0.25em"}]),class:"language-text"},k(y(c)),5)):S("",!0),R(o.$slots,"default"),x("div",se,[x("div",le,[y(s)?(b(),h("span",re,"Copied code!")):S("",!0),x("button",{onClick:g[0]||(g[0]=m=>y(r)(o.code)),class:"m-2 p-2",style:{color:"white"}}," Copy Code ")])])])],64)}}});const fe=G(ue,[["__scopeId","data-v-f67b4d77"]]);export{fe as default};
