import{g as s,u as p,h as d,i as a,o as _,c as m,j as n,r as u,t as E,k as o,l as t}from"./entry.d2b0aafe.js";import{c as k}from"./componentsData.7e14e926.js";const b={key:0},v={key:1,style:{"max-width":"250px"}},R=s({__name:"[optionSlug]",setup(D){const i=p(),r=k.components.find(e=>e.slug===i.params.componentSlug).options.find(e=>e.slug===i.params.optionSlug),c=()=>{let e=null;switch(r.component){case"checkbox-detail":e=o({loader:()=>t(()=>import("./Detail.bf4f2527.js"),["./Detail.bf4f2527.js","./components.a33f8acd.js","./vue.f36acd1f.3171b942.js","./entry.d2b0aafe.js","./_plugin-vue_export-helper.c27b6911.js","./Detail.b5f379a1.css"],import.meta.url)});break;case"checkbox-default":e=o({loader:()=>t(()=>import("./DefaultCheckbox.09905ac9.js"),["./DefaultCheckbox.09905ac9.js","./components.a33f8acd.js","./vue.f36acd1f.3171b942.js","./entry.d2b0aafe.js","./ContentRenderer.107eb873.js","./ContentRendererMarkdown.vue.bc0a981d.js","./index.288f722b.js","./preview.03430bf0.js","./ContentDoc.61b057fd.js","./ContentQuery.4b328af4.js","./query.adbee1b9.js","./_plugin-vue_export-helper.c27b6911.js","./DefaultCheckbox.b7843f81.css"],import.meta.url)});break;case"checkbox-aria":e=o({loader:()=>t(()=>import("./CheckboxGroup.0a2fd42f.js"),["./CheckboxGroup.0a2fd42f.js","./components.a33f8acd.js","./vue.f36acd1f.3171b942.js","./entry.d2b0aafe.js","./Checkbox.342d6735.js","./_plugin-vue_export-helper.c27b6911.js","./CheckboxGroup.134d99bd.css"],import.meta.url)});break;case"checkbox-code":e=o({loader:()=>t(()=>import("./Code.c7fe2786.js"),["./Code.c7fe2786.js","./components.a33f8acd.js","./vue.f36acd1f.3171b942.js","./entry.d2b0aafe.js","./nuxt-error-boundary.8d21e4ce.js","./ContentRenderer.107eb873.js","./ContentRendererMarkdown.vue.bc0a981d.js","./index.288f722b.js","./preview.03430bf0.js","./ContentDoc.61b057fd.js","./ContentQuery.4b328af4.js","./query.adbee1b9.js","./vue3-code-block.es.a02f3b4e.js","./_commonjsHelpers.725317a4.js","./_plugin-vue_export-helper.c27b6911.js","./Code.b9f169f0.css"],import.meta.url)});break;case"icon-link-detail":e=o({loader:()=>t(()=>import("./Detail.297d370d.js"),["./Detail.297d370d.js","./components.a33f8acd.js","./vue.f36acd1f.3171b942.js","./entry.d2b0aafe.js","./vue3-code-block.es.a02f3b4e.js","./_commonjsHelpers.725317a4.js","./_plugin-vue_export-helper.c27b6911.js","./Detail.365af4a7.css"],import.meta.url)});break;case"icon-link-code":e=o({loader:()=>t(()=>import("./Code.15b1b1a3.js"),["./Code.15b1b1a3.js","./components.a33f8acd.js","./vue.f36acd1f.3171b942.js","./entry.d2b0aafe.js","./nuxt-error-boundary.8d21e4ce.js","./ContentRenderer.107eb873.js","./ContentRendererMarkdown.vue.bc0a981d.js","./index.288f722b.js","./preview.03430bf0.js","./ContentDoc.61b057fd.js","./ContentQuery.4b328af4.js","./query.adbee1b9.js","./_plugin-vue_export-helper.c27b6911.js","./Code.6730dabf.css"],import.meta.url)});break;case"lists-detail":e=o({loader:()=>t(()=>import("./Detail.f2b3c61b.js"),["./Detail.f2b3c61b.js","./components.a33f8acd.js","./vue.f36acd1f.3171b942.js","./entry.d2b0aafe.js","./vue3-code-block.es.a02f3b4e.js","./_commonjsHelpers.725317a4.js","./_plugin-vue_export-helper.c27b6911.js","./Detail.7f041265.css"],import.meta.url)});break;case"lists-code":e=o({loader:()=>t(()=>import("./Code.b6673161.js"),["./Code.b6673161.js","./components.a33f8acd.js","./vue.f36acd1f.3171b942.js","./entry.d2b0aafe.js","./nuxt-error-boundary.8d21e4ce.js","./ContentRenderer.107eb873.js","./ContentRendererMarkdown.vue.bc0a981d.js","./index.288f722b.js","./preview.03430bf0.js","./ContentDoc.61b057fd.js","./ContentQuery.4b328af4.js","./query.adbee1b9.js","./_plugin-vue_export-helper.c27b6911.js","./Code.009054dc.css"],import.meta.url)});break;case"buttons-detail":e=o({loader:()=>t(()=>import("./Detail.1287499e.js"),["./Detail.1287499e.js","./components.a33f8acd.js","./vue.f36acd1f.3171b942.js","./entry.d2b0aafe.js","./vue3-code-block.es.a02f3b4e.js","./_commonjsHelpers.725317a4.js","./_plugin-vue_export-helper.c27b6911.js","./Detail.3b6ee14d.css"],import.meta.url)});break;case"buttons-aria":e=o({loader:()=>t(()=>import("./Aria.39662376.js"),["./Aria.39662376.js","./components.a33f8acd.js","./vue.f36acd1f.3171b942.js","./entry.d2b0aafe.js","./vue3-code-block.es.a02f3b4e.js","./_commonjsHelpers.725317a4.js","./_plugin-vue_export-helper.c27b6911.js","./Aria.57f99cd8.css"],import.meta.url)});break;case"images-detail":e=o({loader:()=>t(()=>import("./Detail.3c4276bb.js"),["./Detail.3c4276bb.js","./components.a33f8acd.js","./vue.f36acd1f.3171b942.js","./entry.d2b0aafe.js","./vue3-code-block.es.a02f3b4e.js","./_commonjsHelpers.725317a4.js","./_plugin-vue_export-helper.c27b6911.js","./Detail.74474e3a.css"],import.meta.url)});break;case"images-guideline":e=o({loader:()=>t(()=>import("./Guideline.2b7ce37f.js"),["./Guideline.2b7ce37f.js","./components.a33f8acd.js","./vue.f36acd1f.3171b942.js","./entry.d2b0aafe.js","./vue3-code-block.es.a02f3b4e.js","./_commonjsHelpers.725317a4.js","./_plugin-vue_export-helper.c27b6911.js","./Guideline.1d4d2418.css"],import.meta.url)});break;case"select-aria":e=o({loader:()=>t(()=>import("./Aria.21276855.js"),["./Aria.21276855.js","./components.a33f8acd.js","./vue.f36acd1f.3171b942.js","./entry.d2b0aafe.js","./vue3-code-block.es.a02f3b4e.js","./_commonjsHelpers.725317a4.js","./_plugin-vue_export-helper.c27b6911.js","./Aria.f4ee3827.css"],import.meta.url)});break;case"select-detail":e=o({loader:()=>t(()=>import("./Detail.0010a7af.js"),["./Detail.0010a7af.js","./components.a33f8acd.js","./vue.f36acd1f.3171b942.js","./entry.d2b0aafe.js","./vue3-code-block.es.a02f3b4e.js","./_commonjsHelpers.725317a4.js","./_plugin-vue_export-helper.c27b6911.js","./Detail.b0c9c486.css"],import.meta.url)});break;case"select-code":e=o({loader:()=>t(()=>import("./Code.a67a15e0.js"),["./Code.a67a15e0.js","./components.a33f8acd.js","./vue.f36acd1f.3171b942.js","./entry.d2b0aafe.js","./nuxt-error-boundary.8d21e4ce.js","./ContentRenderer.107eb873.js","./ContentRendererMarkdown.vue.bc0a981d.js","./index.288f722b.js","./preview.03430bf0.js","./ContentDoc.61b057fd.js","./ContentQuery.4b328af4.js","./query.adbee1b9.js","./vue3-code-block.es.a02f3b4e.js","./_commonjsHelpers.725317a4.js","./_plugin-vue_export-helper.c27b6911.js","./Code.0e1b5941.css"],import.meta.url)});break;case"date-picker-package":e=o({loader:()=>t(()=>import("./Package.5140b65d.js"),["./Package.5140b65d.js","./components.a33f8acd.js","./vue.f36acd1f.3171b942.js","./entry.d2b0aafe.js","./vue3-code-block.es.a02f3b4e.js","./_commonjsHelpers.725317a4.js","./_plugin-vue_export-helper.c27b6911.js","./Package.4403c7eb.css"],import.meta.url)});break;case"date-picker-detail":e=o({loader:()=>t(()=>import("./Detail.91beb73d.js"),["./Detail.91beb73d.js","./components.a33f8acd.js","./vue.f36acd1f.3171b942.js","./entry.d2b0aafe.js","./vue3-code-block.es.a02f3b4e.js","./_commonjsHelpers.725317a4.js","./_plugin-vue_export-helper.c27b6911.js","./Detail.274abdd0.css"],import.meta.url)});break}return e},l=d(()=>c());return(e,A)=>a(r).component?(_(),m("div",b,[(_(),n(u(a(l))))])):(_(),m("div",v,E(a(r).text)+" ",1))}});export{R as default};
