import{g as f,m as i,V as _,W as m}from"./entry.bfa10a5a.js";const v=f({emits:{error(a){return!0}},setup(a,{slots:r,emit:p}){const n=i(null),o=m();_((e,u,c)=>{if(!o.isHydrating)return p("error",e),o.hooks.callHook("vue:error",e,u,c),n.value=e,!1});function t(){n.value=null}return()=>{var e,u;return n.value?(e=r.error)==null?void 0:e.call(r,{error:n,clearError:t}):(u=r.default)==null?void 0:u.call(r)}}});export{v as _};
