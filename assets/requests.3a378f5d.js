import{q as c,$ as m,a0 as d,a1 as _,a2 as b,a3 as p,r as y,a4 as l}from"./index.6bfdeacc.js";function w(t){return m(t)===!0?"__q_date|"+t.getTime():d(t)===!0?"__q_expr|"+t.source:typeof t=="number"?"__q_numb|"+t:typeof t=="boolean"?"__q_bool|"+(t?"1":"0"):typeof t=="string"?"__q_strn|"+t:typeof t=="function"?"__q_strn|"+t.toString():t===Object(t)?"__q_objt|"+JSON.stringify(t):t}function I(t){if(t.length<9)return t;const o=t.substring(0,8),r=t.substring(9);switch(o){case"__q_date":const i=Number(r);return new Date(Number.isNaN(i)===!0?r:i);case"__q_expr":return new RegExp(r);case"__q_numb":return Number(r);case"__q_bool":return Boolean(r==="1");case"__q_strn":return""+r;case"__q_objt":return JSON.parse(r);default:return t}}function q(){const t=()=>null;return{has:()=>!1,hasItem:()=>!1,getLength:()=>0,getItem:t,getIndex:t,getKey:t,getAll:()=>{},getAllKeys:()=>[],set:c,setItem:c,remove:c,removeItem:c,clear:c,isEmpty:()=>!0}}function S(t){const e=window[t+"Storage"],o=s=>{const n=e.getItem(s);return n?I(n):null},r=s=>e.getItem(s)!==null,i=(s,n)=>{e.setItem(s,w(n))},h=s=>{e.removeItem(s)};return{has:r,hasItem:r,getLength:()=>e.length,getItem:o,getIndex:s=>s<e.length?o(e.key(s)):null,getKey:s=>s<e.length?e.key(s):null,getAll:()=>{let s;const n={},a=e.length;for(let u=0;u<a;u++)s=e.key(u),n[s]=o(s);return n},getAllKeys:()=>{const s=[],n=e.length;for(let a=0;a<n;a++)s.push(e.key(a));return s},set:i,setItem:i,remove:h,removeItem:h,clear:()=>{e.clear()},isEmpty:()=>e.length===0}}const f=_.has.webStorage===!1?q():S("local"),g={install({$q:t}){t.localStorage=f}};Object.assign(g,f);function N(t,e={}){b.create({message:t,timeout:3e3,position:"top",...e})}const T=p("request",{state:()=>({rows:y([]),details:{},tabs:g.getItem("tabs")||[],isShow:!1}),getters:{},actions:{async fetchData(){try{l.show();const t=await fetch("https://my-json-server.typicode.com/plushevy/demo/list");if(t.ok)l.hide();else throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 HTTP: ${t.status}`);const e=await t.json();this.rows=e}catch(t){console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438 \u0434\u0430\u043D\u043D\u044B\u0445:",t)}},async getDetails(t){console.log("get det",t);try{l.show();const e=await fetch("https://my-json-server.typicode.com/plushevy/demo/orders/"+t);if(e.ok)l.hide();else throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 HTTP: ${e.status}`);const o=await e.json();this.details[t]=o}catch(e){console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438 \u0434\u0430\u043D\u043D\u044B\u0445:",e)}},deepCopy(t){return JSON.parse(JSON.stringify(t))},addTab(t){this.tabs.push(t)},removeTab(t){this.tabs=this.tabs.filter(e=>e.id!==t)},addNewReq(t){this.rows=[...this.rows,t],this.details[t.id]={...t}},updateRequest(t){const e=t.id;if(e){this.details[e]={...t};const o=this.rows.findIndex(r=>r.id===e);o!==-1?(this.rows.splice(o,1,{...t}),N("\u0417\u0430\u044F\u0432\u043A\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0430",{color:"green"})):console.error("\u041E\u0448\u0438\u0431\u043A\u0430")}},removeRow(t){this.rows=this.rows.filter(e=>e.id!==t)},tabIsOpen(t){return this.tabs.some(e=>e.id===t)},getId(t){return(g.getItem("tabs")||[]).find(r=>r.id==t)||null},updateTab(t,e){console.log("updateTab",t,e);const o=this.tabs.find(r=>r.id==t);o&&Object.assign(o,e),g.setItem("tabs",this.tabs)}}});export{g as P,T as u};