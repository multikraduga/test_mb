import{z as n,o as s,v as a,a2 as r,j as l}from"./index.cd7df6ac.js";function d(){let e;const o=l();function t(){e=void 0}return n(t),s(t),{removeTick:t,registerTick(i){e=i,a(()=>{e===i&&(r(o)===!1&&e(),e=void 0)})}}}function f(){let e=null;const o=l();function t(){e!==null&&(clearTimeout(e),e=null)}return n(t),s(t),{removeTimeout:t,registerTimeout(i,c){t(),r(o)===!1&&(e=setTimeout(()=>{e=null,i()},c))}}}let u=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const o=document.createElement("div");Object.assign(o.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(o),e.scrollLeft=-1e3,u=e.scrollLeft>=0,e.remove()}export{f as a,u as r,d as u};
