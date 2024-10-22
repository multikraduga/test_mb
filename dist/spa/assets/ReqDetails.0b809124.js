import{Q as q,a as u}from"./QForm.b18435dc.js";import{r as _,a as y,n as b,N as f,P as U,V as g,aa as o,U as a,T as m,aF as C,Z as i,a6 as p}from"./index.926ccd01.js";import{u as N}from"./requests.2310844a.js";import"./use-key-composition.f0ec1a1e.js";import"./uid.937d8ee7.js";const R={key:0,class:"q-pa-lg"},B={class:"row"},w={class:"col-12 col-md-6"},E={class:"col-12 col-md-6"},Q={class:"col-12 col-md-6"},S={class:"col-12 col-md-6"},T={class:"col-12 col-md-6"},k={class:"col-12 col-md-6"},F={class:"row"},j={class:"col-12 col-md-6"},z={class:"col-12 col-md-6"},D={class:"col-12 col-md-6"},I={class:"col-12 col-md-6"},G={__name:"ReqDetails",props:{num:String},setup(c){const v=c,t=N(),d=t.getIdByNum(v.num),s=_(null);y(()=>{t.details[d]||t.getDetails(d)}),b(()=>t.details[d],n=>{n&&(s.value=t.deepCopy(n))},{immediate:!0});const V=()=>{Object.assign(s,t.deepCopy(t.details[d])),t.removeTab(d),r.push("/request")},r=f(),x=()=>{t.updateRequest(t.deepCopy(s)),t.removeTab(d),r.push("/request")};return(n,e)=>s.value?(U(),g("div",R,[e[13]||(e[13]=o("div",{class:"row items-center justify-start q-mb-md"},[o("div",{class:"text-h4"},"\u0414\u0435\u0442\u0430\u043B\u0438")],-1)),a(q,{onSubmit:x,onReset:V,class:"q-gutter-md"},{default:m(()=>[o("div",B,[o("div",w,[a(u,{class:"q-ma-xs",modelValue:s.value.person_fullname,"onUpdate:modelValue":e[0]||(e[0]=l=>s.value.person_fullname=l),label:"\u0424\u0418\u041E*",rules:[l=>!!l||"\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435!"],outlined:""},null,8,["modelValue","rules"])]),o("div",E,[a(u,{class:"q-ma-xs",modelValue:s.value.person_phone,"onUpdate:modelValue":e[1]||(e[1]=l=>s.value.person_phone=l),label:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D*",rules:[l=>!!l||"\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435!"],outlined:""},null,8,["modelValue","rules"])]),o("div",Q,[a(u,{class:"q-ma-xs",modelValue:s.value.person_email,"onUpdate:modelValue":e[2]||(e[2]=l=>s.value.person_email=l),label:"Email",outlined:""},null,8,["modelValue"])]),o("div",S,[a(u,{class:"q-ma-xs",modelValue:s.value.inn,"onUpdate:modelValue":e[3]||(e[3]=l=>s.value.inn=l),label:"\u0418\u041D\u041D",outlined:""},null,8,["modelValue"])]),o("div",T,[a(u,{class:"q-ma-xs",modelValue:s.value.state,"onUpdate:modelValue":e[4]||(e[4]=l=>s.value.state=l),label:"\u0421\u0442\u0430\u0442\u0443\u0441*",rules:[l=>!!l||"\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435!"],outlined:""},null,8,["modelValue","rules"])]),o("div",k,[a(u,{class:"q-ma-xs",modelValue:s.value.company_type,"onUpdate:modelValue":e[5]||(e[5]=l=>s.value.company_type=l),label:"\u0422\u0438\u043F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438",outlined:""},null,8,["modelValue"])])]),e[12]||(e[12]=o("h5",null,"\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435",-1)),o("div",F,[o("div",j,[a(u,{class:"q-ma-xs",modelValue:s.value.extra.partner.type,"onUpdate:modelValue":e[6]||(e[6]=l=>s.value.extra.partner.type=l),label:"\u0422\u0438\u043F",outlined:""},null,8,["modelValue"])]),o("div",z,[a(u,{class:"q-ma-xs",modelValue:s.value.extra.partner.client_name,"onUpdate:modelValue":e[7]||(e[7]=l=>s.value.extra.partner.client_name=l),label:"\u041A\u043B\u0438\u0435\u043D\u0442",outlined:""},null,8,["modelValue"])]),o("div",D,[a(u,{class:"q-ma-xs",modelValue:s.value.extra.partner.inn,"onUpdate:modelValue":e[8]||(e[8]=l=>s.value.extra.partner.inn=l),label:"\u0418\u041D\u041D",outlined:""},null,8,["modelValue"])]),o("div",I,[a(u,{class:"q-ma-xs",modelValue:s.value.extra.crm_source_type,"onUpdate:modelValue":e[9]||(e[9]=l=>s.value.extra.crm_source_type=l),label:"CRM",outlined:""},null,8,["modelValue"])])]),a(i,{color:"green",icon:"save",class:"q-ml-md",size:"sm",push:"",type:"submit"},{default:m(()=>e[10]||(e[10]=[p("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ")])),_:1}),a(i,{color:"grey",icon:"edit",class:"q-ml-md",size:"sm",push:"",type:"reset"},{default:m(()=>e[11]||(e[11]=[p("\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C ")])),_:1})]),_:1})])):C("",!0)}};export{G as default};
