import{q as f,w as m,h as c,e as v,s as g,j as l,u as d,a as h}from"./query.45c792af.js";import{B as _,l as C,g as y,C as w,h as P,D as $,z as N,A as r,_ as j}from"./entry.155662a4.js";import{u as D}from"./preview.7e448e33.js";const T=async e=>{const{content:t}=_().public;typeof(e==null?void 0:e.params)!="function"&&(e=f(e));const a=e.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${c(a)}.${t.integrity}`}/${v(a)}.json`):m(`/navigation/${c(a)}.${t.integrity}.json`);if(g())return(await C(()=>import("./client-db.d05f3f7b.js"),["./client-db.d05f3f7b.js","./entry.155662a4.js","./query.45c792af.js","./preview.7e448e33.js","./index.288f722b.js","./_commonjsHelpers.725317a4.js"],import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:l(a),previewToken:D().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},E=y({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=w(e),a=P(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&$("dd-navigation").value){const{navigation:n}=d();return{navigation:n}}const{data:s}=await h(`content-navigation-${c(a.value)}`,()=>T(a.value));return{navigation:s}},render(e){const t=N(),{navigation:a}=e,s=o=>r(j,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),p=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):p(a)}}),L=E;export{L as default};
