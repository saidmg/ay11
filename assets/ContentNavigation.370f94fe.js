import{C as f,l as v,g,D as l,h as d,E as h,A as _,B as r,_ as C}from"./entry.a2347305.js";import{q as y,w as m,h as c,e as w,s as P,j as $,u as N,a as j}from"./query.20ac30c5.js";import{u as D}from"./preview.d5c7b104.js";const E=async e=>{const{content:t}=f().public;typeof(e==null?void 0:e.params)!="function"&&(e=y(e));const a=e.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${c(a)}.${t.integrity}`}/${w(a)}.json`):m(`/navigation/${c(a)}.${t.integrity}.json`);if(P())return(await v(()=>import("./client-db.d5fb1bfe.js"),["./client-db.d5fb1bfe.js","./entry.a2347305.js","./query.20ac30c5.js","./preview.d5c7b104.js","./index.288f722b.js","./_commonjsHelpers.725317a4.js"],import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:$(a),previewToken:D().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},T=g({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=l(e),a=d(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&h("dd-navigation").value){const{navigation:n}=N();return{navigation:n}}const{data:s}=await j(`content-navigation-${c(a.value)}`,()=>E(a.value));return{navigation:s}},render(e){const t=_(),{navigation:a}=e,s=o=>r(C,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),p=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):p(a)}}),L=T;export{L as default};
