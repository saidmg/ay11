import l from"./ProseCode.377acece.js";import{g as n,o as s,j as o,w as i,a as r,s as u,H as g,G as m}from"./entry.155662a4.js";import"./components.0cba67b8.js";import"./vue.f36acd1f.de688afe.js";import"./_plugin-vue_export-helper.c27b6911.js";const S=n({__name:"ProsePre",props:{code:{type:String,default:""},language:{type:String,default:null},filename:{type:String,default:null},highlights:{type:Array,default:()=>[]},meta:{type:String,default:null},class:{type:String,default:null},style:{type:[String,Object],default:null}},setup(e){return(t,c)=>{const a=l;return s(),o(a,{code:e.code,language:e.language,filename:e.filename,highlights:e.highlights,meta:e.meta},{default:i(()=>[r("pre",{class:u(t.$props.class),style:g(e.style)},[m(t.$slots,"default")],6)]),_:3},8,["code","language","filename","highlights","meta"])}}});export{S as default};