import{p as c,aE as d,a6 as y}from"./index-CrBq_UzM.js";const p=c({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function f(r,e){let n=()=>{};function t(o){n==null||n();const s=Number(o?r.openDelay:r.closeDelay);return new Promise(l=>{n=d(s,()=>{e==null||e(o),l(o)})})}function u(){return t(!0)}function a(){return t(!1)}return{clearDelay:n,runOpenDelay:u,runCloseDelay:a}}function D(){const e=y("useScopeId").vnode.scopeId;return{scopeId:e?{[e]:""}:void 0}}export{f as a,p as m,D as u};
