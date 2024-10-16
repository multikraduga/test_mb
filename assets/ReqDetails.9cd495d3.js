import{Q as _,a}from"./QForm.3e65cdae.js";import{K as x,N as q,P as v,V as b,U as t,T as m,a8 as o,Z as r,a3 as i}from"./index.4da77f33.js";import{u as y}from"./requests.d134a1e5.js";import"./use-key-composition.5d6a88af.js";import"./uid.937d8ee7.js";const f={class:"q-pa-lg"},U=o("div",{class:"row items-center justify-start q-mb-md"},[o("div",{class:"text-h4"},"\u0414\u0435\u0442\u0430\u043B\u0438")],-1),g={class:"row"},R={class:"col-12 col-md-6"},h={class:"col-12 col-md-6"},C={class:"col-12 col-md-6"},w={class:"col-12 col-md-6"},B={class:"col-12 col-md-6"},E={class:"col-12 col-md-6"},N=o("h5",null,"\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435",-1),Q={class:"row"},S={class:"col-12 col-md-6"},T={class:"col-12 col-md-6"},j={class:"col-12 col-md-6"},k={class:"col-12 col-md-6"},O={__name:"ReqDetails",props:{id:String},setup(p){const n=p,d=y(),l=x(d.deepCopy(d.details[n.id])),c=()=>{Object.assign(l,d.deepCopy(d.details[n.id])),d.removeTab(n.id),u.push("/request")},u=q(),V=()=>{d.updateRequest(d.deepCopy(l)),d.removeTab(n.id),u.push("/request")};return(z,s)=>(v(),b("div",f,[U,t(_,{onSubmit:V,onReset:c,class:"q-gutter-md"},{default:m(()=>[o("div",g,[o("div",R,[t(a,{class:"q-ma-xs",modelValue:l.person_fullname,"onUpdate:modelValue":s[0]||(s[0]=e=>l.person_fullname=e),label:"\u0424\u0418\u041E*",rules:[e=>!!e||"\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435!"],outlined:""},null,8,["modelValue","rules"])]),o("div",h,[t(a,{class:"q-ma-xs",modelValue:l.person_phone,"onUpdate:modelValue":s[1]||(s[1]=e=>l.person_phone=e),label:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D*",rules:[e=>!!e||"\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435!"],outlined:""},null,8,["modelValue","rules"])]),o("div",C,[t(a,{class:"q-ma-xs",modelValue:l.person_email,"onUpdate:modelValue":s[2]||(s[2]=e=>l.person_email=e),label:"Email",outlined:""},null,8,["modelValue"])]),o("div",w,[t(a,{class:"q-ma-xs",modelValue:l.inn,"onUpdate:modelValue":s[3]||(s[3]=e=>l.inn=e),label:"\u0418\u041D\u041D",outlined:""},null,8,["modelValue"])]),o("div",B,[t(a,{class:"q-ma-xs",modelValue:l.state,"onUpdate:modelValue":s[4]||(s[4]=e=>l.state=e),label:"\u0421\u0442\u0430\u0442\u0443\u0441*",rules:[e=>!!e||"\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435!"],outlined:""},null,8,["modelValue","rules"])]),o("div",E,[t(a,{class:"q-ma-xs",modelValue:l.company_type,"onUpdate:modelValue":s[5]||(s[5]=e=>l.company_type=e),label:"\u0422\u0438\u043F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438",outlined:""},null,8,["modelValue"])])]),N,o("div",Q,[o("div",S,[t(a,{class:"q-ma-xs",modelValue:l.extra.partner.type,"onUpdate:modelValue":s[6]||(s[6]=e=>l.extra.partner.type=e),label:"\u0422\u0438\u043F",outlined:""},null,8,["modelValue"])]),o("div",T,[t(a,{class:"q-ma-xs",modelValue:l.extra.partner.client_name,"onUpdate:modelValue":s[7]||(s[7]=e=>l.extra.partner.client_name=e),label:"\u041A\u043B\u0438\u0435\u043D\u0442",outlined:""},null,8,["modelValue"])]),o("div",j,[t(a,{class:"q-ma-xs",modelValue:l.extra.partner.inn,"onUpdate:modelValue":s[8]||(s[8]=e=>l.extra.partner.inn=e),label:"\u0418\u041D\u041D",outlined:""},null,8,["modelValue"])]),o("div",k,[t(a,{class:"q-ma-xs",modelValue:l.extra.crm_source_type,"onUpdate:modelValue":s[9]||(s[9]=e=>l.extra.crm_source_type=e),label:"CRM",outlined:""},null,8,["modelValue"])])]),t(r,{color:"green",icon:"save",class:"q-ml-md",size:"sm",push:"",type:"submit"},{default:m(()=>[i("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ")]),_:1}),t(r,{color:"grey",icon:"edit",class:"q-ml-md",size:"sm",push:"",type:"reset"},{default:m(()=>[i("\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C ")]),_:1})]),_:1})]))}};export{O as default};
