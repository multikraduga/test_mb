import{a as s}from"./QTable.263e13be.js";import{a3 as i,a as l,P as m,V as u,U as p,X as d}from"./index.d6eda52b.js";import"./use-key-composition.a1293189.js";import"./uid.937d8ee7.js";import"./rtl.9b74d7c8.js";const f=i("account",{state:()=>({rows:[]}),getters:{},actions:{async fetchAccountData(){try{const t=await fetch("https://my-json-server.typicode.com/plushevy/demo/meetings");if(!t.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 HTTP: ${t.status}`);const n=await t.json();this.rows=n}catch(t){console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438 \u0434\u0430\u043D\u043D\u044B\u0445:",t)}}}}),b={__name:"AccountPage",setup(t){const n=f(),o=[{name:"client_city",label:"\u0413\u043E\u0440\u043E\u0434",field:"client_city"},{name:"client_name",label:"\u0418\u043C\u044F",field:"client_name"},{name:"bank_name",label:"\u0411\u0430\u043D\u043A",field:"bank_name"},{name:"stg",label:"\u041F\u0440\u043E\u0434\u0443\u043A\u0442",field:e=>Array.isArray(e.stg)?e.stg.join(", "):e.stg},{name:"meetingDatePlace",label:"\u0414\u0430\u0442\u0430 \u0438 \u043C\u0435\u0441\u0442\u043E \u0432\u0441\u0442\u0440\u0435\u0447\u0438",field:e=>`${e.meeting_place} ${c(e.meeting_date)}`,align:"left",style:"white-space: pre-line;"},{name:"person_phone",label:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D",field:"person_phone"}],c=e=>{const a=new Date(e),r={year:"numeric",month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"};return a.toLocaleDateString("ru-RU",r)};return l(()=>{n.rows.length<=0&&n.fetchAccountData()}),(e,a)=>(m(),u("div",null,[p(s,{rows:d(n).rows,columns:o,"row-key":"id"},null,8,["rows"])]))}};export{b as default};
