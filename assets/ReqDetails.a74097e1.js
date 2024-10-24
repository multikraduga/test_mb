import{Q as x,a as u}from"./QForm.d3c806c7.js";import{r as q,a as _,n as b,N as y,P as f,V as U,aa as a,U as t,T as m,aF as g,Z as r,a6 as p}from"./index.d6eda52b.js";import{u as R}from"./requests.7b083fed.js";import"./use-key-composition.a1293189.js";import"./uid.937d8ee7.js";const C={key:0,class:"q-pa-lg"},T={class:"row"},w={class:"col-12 col-md-6"},N={class:"col-12 col-md-6"},B={class:"col-12 col-md-6"},E={class:"col-12 col-md-6"},Q={class:"col-12 col-md-6"},S={class:"col-12 col-md-6"},k={class:"row"},F={class:"col-12 col-md-6"},j={class:"col-12 col-md-6"},z={class:"col-12 col-md-6"},D={class:"col-12 col-md-6"},Z={__name:"ReqDetails",props:{id:String},setup(c){const d=c,o=R(),s=q(null);_(()=>{if(!o.details[d.id])o.getDetails(d.id).then(()=>{const n=o.details[d.id];n&&o.updateTab(d.id,{label:`\u0417\u0430\u044F\u0432\u043A\u0430 \u2116${n.num}`})});else{const n=o.details[d.id].num;o.updateTab(d.id,{label:`\u0417\u0430\u044F\u0432\u043A\u0430 \u2116${n}`})}}),b(()=>o.details[d.id],n=>{n&&(s.value=o.deepCopy(n))},{immediate:!0});const v=()=>{Object.assign(s,o.deepCopy(o.details[d.id])),o.removeTab(d.id),i.push("/request")},i=y(),V=()=>{o.updateRequest(o.deepCopy(s)),o.removeTab(d.id),i.push("/request")};return(n,e)=>s.value?(f(),U("div",C,[e[13]||(e[13]=a("div",{class:"row items-center justify-start q-mb-md"},[a("div",{class:"text-h4"},"\u0414\u0435\u0442\u0430\u043B\u0438")],-1)),t(x,{onSubmit:V,onReset:v,class:"q-gutter-md"},{default:m(()=>[a("div",T,[a("div",w,[t(u,{class:"q-ma-xs",modelValue:s.value.person_fullname,"onUpdate:modelValue":e[0]||(e[0]=l=>s.value.person_fullname=l),label:"\u0424\u0418\u041E*",rules:[l=>!!l||"\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435!"],outlined:""},null,8,["modelValue","rules"])]),a("div",N,[t(u,{class:"q-ma-xs",modelValue:s.value.person_phone,"onUpdate:modelValue":e[1]||(e[1]=l=>s.value.person_phone=l),label:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D*",rules:[l=>!!l||"\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435!"],outlined:""},null,8,["modelValue","rules"])]),a("div",B,[t(u,{class:"q-ma-xs",modelValue:s.value.person_email,"onUpdate:modelValue":e[2]||(e[2]=l=>s.value.person_email=l),label:"Email",outlined:""},null,8,["modelValue"])]),a("div",E,[t(u,{class:"q-ma-xs",modelValue:s.value.inn,"onUpdate:modelValue":e[3]||(e[3]=l=>s.value.inn=l),label:"\u0418\u041D\u041D",outlined:""},null,8,["modelValue"])]),a("div",Q,[t(u,{class:"q-ma-xs",modelValue:s.value.state,"onUpdate:modelValue":e[4]||(e[4]=l=>s.value.state=l),label:"\u0421\u0442\u0430\u0442\u0443\u0441*",rules:[l=>!!l||"\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435!"],outlined:""},null,8,["modelValue","rules"])]),a("div",S,[t(u,{class:"q-ma-xs",modelValue:s.value.company_type,"onUpdate:modelValue":e[5]||(e[5]=l=>s.value.company_type=l),label:"\u0422\u0438\u043F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438",outlined:""},null,8,["modelValue"])])]),e[12]||(e[12]=a("h5",null,"\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435",-1)),a("div",k,[a("div",F,[t(u,{class:"q-ma-xs",modelValue:s.value.extra.partner.type,"onUpdate:modelValue":e[6]||(e[6]=l=>s.value.extra.partner.type=l),label:"\u0422\u0438\u043F",outlined:""},null,8,["modelValue"])]),a("div",j,[t(u,{class:"q-ma-xs",modelValue:s.value.extra.partner.client_name,"onUpdate:modelValue":e[7]||(e[7]=l=>s.value.extra.partner.client_name=l),label:"\u041A\u043B\u0438\u0435\u043D\u0442",outlined:""},null,8,["modelValue"])]),a("div",z,[t(u,{class:"q-ma-xs",modelValue:s.value.extra.partner.inn,"onUpdate:modelValue":e[8]||(e[8]=l=>s.value.extra.partner.inn=l),label:"\u0418\u041D\u041D",outlined:""},null,8,["modelValue"])]),a("div",D,[t(u,{class:"q-ma-xs",modelValue:s.value.extra.crm_source_type,"onUpdate:modelValue":e[9]||(e[9]=l=>s.value.extra.crm_source_type=l),label:"CRM",outlined:""},null,8,["modelValue"])])]),t(r,{color:"green",icon:"save",class:"q-ml-md",size:"sm",push:"",type:"submit"},{default:m(()=>e[10]||(e[10]=[p("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ")])),_:1}),t(r,{color:"grey",icon:"edit",class:"q-ml-md",size:"sm",push:"",type:"reset"},{default:m(()=>e[11]||(e[11]=[p("\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C ")])),_:1})]),_:1})])):g("",!0)}};export{Z as default};
