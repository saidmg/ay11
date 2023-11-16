import{g as u,u as E,h as k,o as r,c as _,b as l,w as c,d as b,i,j as v,r as T,t as D,F as L,k as t,l as o}from"./entry.155662a4.js";import{T as V,H as A}from"./components.0cba67b8.js";import{c as I}from"./componentsData.19b01a45.js";import"./vue.f36acd1f.de688afe.js";const P={key:0},R={key:1,style:{"max-width":"250px"}},w=u({__name:"[optionSlug]",setup(O){const m=E(),a=I.components.find(e=>e.slug===m.params.componentSlug).options.find(e=>e.slug===m.params.optionSlug),n=()=>{let e=null;switch(a.component){case"checkbox-detail":e=t({loader:()=>o(()=>import("./Detail.3e06a506.js"),["./Detail.3e06a506.js","./components.0cba67b8.js","./vue.f36acd1f.de688afe.js","./entry.155662a4.js","./_plugin-vue_export-helper.c27b6911.js","./Detail.a2c110e3.css"],import.meta.url)});break;case"checkbox-default":e=t({loader:()=>o(()=>import("./DefaultCheckbox.481d51f8.js"),["./DefaultCheckbox.481d51f8.js","./components.0cba67b8.js","./vue.f36acd1f.de688afe.js","./entry.155662a4.js","./ContentRenderer.f3a310cc.js","./ContentRendererMarkdown.vue.1a43f801.js","./index.288f722b.js","./preview.7e448e33.js","./ContentDoc.f54b4076.js","./ContentQuery.8d35d140.js","./query.45c792af.js","./_plugin-vue_export-helper.c27b6911.js","./DefaultCheckbox.b7843f81.css"],import.meta.url)});break;case"checkbox-aria":e=t({loader:()=>o(()=>import("./CheckboxGroup.c015d631.js"),["./CheckboxGroup.c015d631.js","./components.0cba67b8.js","./vue.f36acd1f.de688afe.js","./entry.155662a4.js","./_plugin-vue_export-helper.c27b6911.js","./CheckboxGroup.134d99bd.css"],import.meta.url)});break;case"checkbox-code":e=t({loader:()=>o(()=>import("./Code.f42dc552.js"),["./Code.f42dc552.js","./components.0cba67b8.js","./vue.f36acd1f.de688afe.js","./entry.155662a4.js","./nuxt-error-boundary.fe982b2f.js","./ContentRenderer.f3a310cc.js","./ContentRendererMarkdown.vue.1a43f801.js","./index.288f722b.js","./preview.7e448e33.js","./ContentDoc.f54b4076.js","./ContentQuery.8d35d140.js","./query.45c792af.js","./vue3-code-block.es.f75df40a.js","./_commonjsHelpers.725317a4.js","./_plugin-vue_export-helper.c27b6911.js","./Code.19f37a4f.css"],import.meta.url)});break;case"icon-link-detail":e=t({loader:()=>o(()=>import("./Detail.012a7a4e.js"),["./Detail.012a7a4e.js","./components.0cba67b8.js","./vue.f36acd1f.de688afe.js","./entry.155662a4.js","./vue3-code-block.es.f75df40a.js","./_commonjsHelpers.725317a4.js","./_plugin-vue_export-helper.c27b6911.js","./Detail.ecc2131c.css"],import.meta.url)});break;case"icon-link-code":e=t({loader:()=>o(()=>import("./Code.8d3993bf.js"),["./Code.8d3993bf.js","./components.0cba67b8.js","./vue.f36acd1f.de688afe.js","./entry.155662a4.js","./nuxt-error-boundary.fe982b2f.js","./ContentRenderer.f3a310cc.js","./ContentRendererMarkdown.vue.1a43f801.js","./index.288f722b.js","./preview.7e448e33.js","./ContentDoc.f54b4076.js","./ContentQuery.8d35d140.js","./query.45c792af.js","./_plugin-vue_export-helper.c27b6911.js","./Code.e58591ef.css"],import.meta.url)});break;case"lists-detail":e=t({loader:()=>o(()=>import("./Detail.114711f0.js"),["./Detail.114711f0.js","./components.0cba67b8.js","./vue.f36acd1f.de688afe.js","./entry.155662a4.js","./vue3-code-block.es.f75df40a.js","./_commonjsHelpers.725317a4.js","./_plugin-vue_export-helper.c27b6911.js","./Detail.98ed05b4.css"],import.meta.url)});break;case"lists-code":e=t({loader:()=>o(()=>import("./Code.b447c506.js"),["./Code.b447c506.js","./components.0cba67b8.js","./vue.f36acd1f.de688afe.js","./entry.155662a4.js","./nuxt-error-boundary.fe982b2f.js","./ContentRenderer.f3a310cc.js","./ContentRendererMarkdown.vue.1a43f801.js","./index.288f722b.js","./preview.7e448e33.js","./ContentDoc.f54b4076.js","./ContentQuery.8d35d140.js","./query.45c792af.js","./_plugin-vue_export-helper.c27b6911.js","./Code.d48faafa.css"],import.meta.url)});break;case"buttons-detail":e=t({loader:()=>o(()=>import("./Detail.5c20f432.js"),["./Detail.5c20f432.js","./components.0cba67b8.js","./vue.f36acd1f.de688afe.js","./entry.155662a4.js","./vue3-code-block.es.f75df40a.js","./_commonjsHelpers.725317a4.js","./_plugin-vue_export-helper.c27b6911.js","./Detail.8c44ab45.css"],import.meta.url)});break;case"buttons-aria":e=t({loader:()=>o(()=>import("./Aria.ea4c62f4.js"),["./Aria.ea4c62f4.js","./components.0cba67b8.js","./vue.f36acd1f.de688afe.js","./entry.155662a4.js","./vue3-code-block.es.f75df40a.js","./_commonjsHelpers.725317a4.js","./_plugin-vue_export-helper.c27b6911.js","./Aria.01629df6.css"],import.meta.url)});break;case"images-detail":e=t({loader:()=>o(()=>import("./Detail.328f756b.js"),["./Detail.328f756b.js","./components.0cba67b8.js","./vue.f36acd1f.de688afe.js","./entry.155662a4.js","./vue3-code-block.es.f75df40a.js","./_commonjsHelpers.725317a4.js","./_plugin-vue_export-helper.c27b6911.js","./Detail.5d05a4dc.css"],import.meta.url)});break;case"images-guideline":e=t({loader:()=>o(()=>import("./Guideline.3a2460ba.js"),["./Guideline.3a2460ba.js","./components.0cba67b8.js","./vue.f36acd1f.de688afe.js","./entry.155662a4.js","./vue3-code-block.es.f75df40a.js","./_commonjsHelpers.725317a4.js","./_plugin-vue_export-helper.c27b6911.js","./Guideline.c4add0d4.css"],import.meta.url)});break;case"select-aria":e=t({loader:()=>o(()=>import("./Aria.51ef503b.js"),["./Aria.51ef503b.js","./components.0cba67b8.js","./vue.f36acd1f.de688afe.js","./entry.155662a4.js","./vue3-code-block.es.f75df40a.js","./_commonjsHelpers.725317a4.js","./_plugin-vue_export-helper.c27b6911.js","./Aria.3cda40bd.css"],import.meta.url)});break;case"select-detail":e=t({loader:()=>o(()=>import("./Detail.a25d5289.js"),["./Detail.a25d5289.js","./components.0cba67b8.js","./vue.f36acd1f.de688afe.js","./entry.155662a4.js","./vue3-code-block.es.f75df40a.js","./_commonjsHelpers.725317a4.js","./_plugin-vue_export-helper.c27b6911.js","./Detail.59bfcd8c.css"],import.meta.url)});break;case"select-code":e=t({loader:()=>o(()=>import("./Code.7bef3df1.js"),["./Code.7bef3df1.js","./components.0cba67b8.js","./vue.f36acd1f.de688afe.js","./entry.155662a4.js","./nuxt-error-boundary.fe982b2f.js","./ContentRenderer.f3a310cc.js","./ContentRendererMarkdown.vue.1a43f801.js","./index.288f722b.js","./preview.7e448e33.js","./ContentDoc.f54b4076.js","./ContentQuery.8d35d140.js","./query.45c792af.js","./vue3-code-block.es.f75df40a.js","./_commonjsHelpers.725317a4.js","./_plugin-vue_export-helper.c27b6911.js","./Code.755328ac.css"],import.meta.url)});break;case"date-picker-package":e=t({loader:()=>o(()=>import("./Package.329c5b22.js"),["./Package.329c5b22.js","./components.0cba67b8.js","./vue.f36acd1f.de688afe.js","./entry.155662a4.js","./vue3-code-block.es.f75df40a.js","./_commonjsHelpers.725317a4.js","./_plugin-vue_export-helper.c27b6911.js","./Package.5136b67a.css"],import.meta.url)});break;case"date-picker-detail":e=t({loader:()=>o(()=>import("./Detail.6b82aaf8.js"),["./Detail.6b82aaf8.js","./components.0cba67b8.js","./vue.f36acd1f.de688afe.js","./entry.155662a4.js","./vue3-code-block.es.f75df40a.js","./_commonjsHelpers.725317a4.js","./_plugin-vue_export-helper.c27b6911.js","./Detail.b05cdad8.css"],import.meta.url)});break;case"navigation-detail":e=t({loader:()=>o(()=>import("./Detail.5f63519b.js"),["./Detail.5f63519b.js","./components.0cba67b8.js","./vue.f36acd1f.de688afe.js","./entry.155662a4.js","./vue3-code-block.es.f75df40a.js","./_commonjsHelpers.725317a4.js","./_plugin-vue_export-helper.c27b6911.js","./Detail.d38316c1.css"],import.meta.url)});break;case"navigation-aria":e=t({loader:()=>o(()=>import("./Aria.6661206c.js"),["./Aria.6661206c.js","./components.0cba67b8.js","./vue.f36acd1f.de688afe.js","./entry.155662a4.js","./ContentRenderer.f3a310cc.js","./ContentRendererMarkdown.vue.1a43f801.js","./index.288f722b.js","./preview.7e448e33.js","./ContentDoc.f54b4076.js","./ContentQuery.8d35d140.js","./query.45c792af.js","./_plugin-vue_export-helper.c27b6911.js","./Aria.10e0e5ab.css"],import.meta.url)});break}return e},s=k(()=>n());return(e,f)=>{const d=V,p=A;return r(),_(L,null,[l(p,null,{default:c(()=>[l(d,null,{default:c(()=>[b("Components")]),_:1})]),_:1}),i(a).component?(r(),_("div",P,[(r(),v(T(i(s))))])):(r(),_("div",R,D(i(a).text),1))],64)}}});export{w as default};