import{b as re,h as ue,c as se,i as fe,e as ce,d as de,g as ae,j as G,k as me}from"./use-key-composition.4c7b8cdc.js";import{r as W,n as z,v as L,f as ve,c as D,l as ne,o as ge,a as le,h as Q,an as he,j as ie,ay as J,y as ke,z as ye,A as xe,B as Me,a5 as we,s as p,aD as be}from"./index.35c046d5.js";const ee={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},X={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},oe=Object.keys(X);oe.forEach(e=>{X[e].regex=new RegExp(X[e].pattern)});const Se=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+oe.join("")+"])|(.)","g"),te=/[.*+?^${}()|[\]\\]/g,x=String.fromCharCode(1),Ce={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function Fe(e,R,B,V){let s,d,b,T,N,h;const w=W(null),f=W(o());function _(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}z(()=>e.type+e.autogrow,O),z(()=>e.mask,l=>{if(l!==void 0)q(f.value,!0);else{const a=P(f.value);O(),e.modelValue!==a&&R("update:modelValue",a)}}),z(()=>e.fillMask+e.reverseFillMask,()=>{w.value===!0&&q(f.value,!0)}),z(()=>e.unmaskedValue,()=>{w.value===!0&&q(f.value)});function o(){if(O(),w.value===!0){const l=F(P(e.modelValue));return e.fillMask!==!1?Y(l):l}return e.modelValue}function S(l){if(l<s.length)return s.slice(-l);let a="",i=s;const n=i.indexOf(x);if(n!==-1){for(let u=l-i.length;u>0;u--)a+=x;i=i.slice(0,n)+a+i.slice(n)}return i}function O(){if(w.value=e.mask!==void 0&&e.mask.length!==0&&_(),w.value===!1){T=void 0,s="",d="";return}const l=ee[e.mask]===void 0?e.mask:ee[e.mask],a=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",i=a.replace(te,"\\$&"),n=[],u=[],r=[];let y=e.reverseFillMask===!0,c="",m="";l.replace(Se,(M,t,g,K,j)=>{if(K!==void 0){const E=X[K];r.push(E),m=E.negate,y===!0&&(u.push("(?:"+m+"+)?("+E.pattern+"+)?(?:"+m+"+)?("+E.pattern+"+)?"),y=!1),u.push("(?:"+m+"+)?("+E.pattern+")?")}else if(g!==void 0)c="\\"+(g==="\\"?"":g),r.push(g),n.push("([^"+c+"]+)?"+c+"?");else{const E=t!==void 0?t:j;c=E==="\\"?"\\\\\\\\":E.replace(te,"\\\\$&"),r.push(E),n.push("([^"+c+"]+)?"+c+"?")}});const $=new RegExp("^"+n.join("")+"("+(c===""?".":"[^"+c+"]")+"+)?"+(c===""?"":"["+c+"]*")+"$"),Z=u.length-1,v=u.map((M,t)=>t===0&&e.reverseFillMask===!0?new RegExp("^"+i+"*"+M):t===Z?new RegExp("^"+M+"("+(m===""?".":m)+"+)?"+(e.reverseFillMask===!0?"$":i+"*")):new RegExp("^"+M));b=r,T=M=>{const t=$.exec(e.reverseFillMask===!0?M:M.slice(0,r.length+1));t!==null&&(M=t.slice(1).join(""));const g=[],K=v.length;for(let j=0,E=M;j<K;j++){const H=v[j].exec(E);if(H===null)break;E=E.slice(H.shift().length),g.push(...H)}return g.length!==0?g.join(""):M},s=r.map(M=>typeof M=="string"?M:x).join(""),d=s.split(x).join(a)}function q(l,a,i){const n=V.value,u=n.selectionEnd,r=n.value.length-u,y=P(l);a===!0&&O();const c=F(y),m=e.fillMask!==!1?Y(c):c,$=f.value!==m;n.value!==m&&(n.value=m),$===!0&&(f.value=m),document.activeElement===n&&L(()=>{if(m===d){const v=e.reverseFillMask===!0?d.length:0;n.setSelectionRange(v,v,"forward");return}if(i==="insertFromPaste"&&e.reverseFillMask!==!0){const v=n.selectionEnd;let M=u-1;for(let t=N;t<=M&&t<v;t++)s[t]!==x&&M++;A.right(n,M);return}if(["deleteContentBackward","deleteContentForward"].indexOf(i)!==-1){const v=e.reverseFillMask===!0?u===0?m.length>c.length?1:0:Math.max(0,m.length-(m===d?0:Math.min(c.length,r)+1))+1:u;n.setSelectionRange(v,v,"forward");return}if(e.reverseFillMask===!0)if($===!0){const v=Math.max(0,m.length-(m===d?0:Math.min(c.length,r+1)));v===1&&u===1?n.setSelectionRange(v,v,"forward"):A.rightReverse(n,v)}else{const v=m.length-r;n.setSelectionRange(v,v,"backward")}else if($===!0){const v=Math.max(0,s.indexOf(x),Math.min(c.length,u)-1);A.right(n,v)}else{const v=u-1;A.right(n,v)}});const Z=e.unmaskedValue===!0?P(m):m;String(e.modelValue)!==Z&&(e.modelValue!==null||Z!=="")&&B(Z,!0)}function U(l,a,i){const n=F(P(l.value));a=Math.max(0,s.indexOf(x),Math.min(n.length,a)),N=a,l.setSelectionRange(a,i,"forward")}const A={left(l,a){const i=s.slice(a-1).indexOf(x)===-1;let n=Math.max(0,a-1);for(;n>=0;n--)if(s[n]===x){a=n,i===!0&&a++;break}if(n<0&&s[a]!==void 0&&s[a]!==x)return A.right(l,0);a>=0&&l.setSelectionRange(a,a,"backward")},right(l,a){const i=l.value.length;let n=Math.min(i,a+1);for(;n<=i;n++)if(s[n]===x){a=n;break}else s[n-1]===x&&(a=n);if(n>i&&s[a-1]!==void 0&&s[a-1]!==x)return A.left(l,i);l.setSelectionRange(a,a,"forward")},leftReverse(l,a){const i=S(l.value.length);let n=Math.max(0,a-1);for(;n>=0;n--)if(i[n-1]===x){a=n;break}else if(i[n]===x&&(a=n,n===0))break;if(n<0&&i[a]!==void 0&&i[a]!==x)return A.rightReverse(l,0);a>=0&&l.setSelectionRange(a,a,"backward")},rightReverse(l,a){const i=l.value.length,n=S(i),u=n.slice(0,a+1).indexOf(x)===-1;let r=Math.min(i,a+1);for(;r<=i;r++)if(n[r-1]===x){a=r,a>0&&u===!0&&a--;break}if(r>i&&n[a-1]!==void 0&&n[a-1]!==x)return A.leftReverse(l,i);l.setSelectionRange(a,a,"forward")}};function k(l){R("click",l),h=void 0}function C(l){if(R("keydown",l),ve(l)===!0||l.altKey===!0)return;const a=V.value,i=a.selectionStart,n=a.selectionEnd;if(l.shiftKey||(h=void 0),l.keyCode===37||l.keyCode===39){l.shiftKey&&h===void 0&&(h=a.selectionDirection==="forward"?i:n);const u=A[(l.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(l.preventDefault(),u(a,h===i?n:i),l.shiftKey){const r=a.selectionStart;a.setSelectionRange(Math.min(h,r),Math.max(h,r),"forward")}}else l.keyCode===8&&e.reverseFillMask!==!0&&i===n?(A.left(a,i),a.setSelectionRange(a.selectionStart,n,"backward")):l.keyCode===46&&e.reverseFillMask===!0&&i===n&&(A.rightReverse(a,n),a.setSelectionRange(i,a.selectionEnd,"forward"))}function F(l){if(l==null||l==="")return"";if(e.reverseFillMask===!0)return I(l);const a=b;let i=0,n="";for(let u=0;u<a.length;u++){const r=l[i],y=a[u];if(typeof y=="string")n+=y,r===y&&i++;else if(r!==void 0&&y.regex.test(r))n+=y.transform!==void 0?y.transform(r):r,i++;else return n}return n}function I(l){const a=b,i=s.indexOf(x);let n=l.length-1,u="";for(let r=a.length-1;r>=0&&n!==-1;r--){const y=a[r];let c=l[n];if(typeof y=="string")u=y+u,c===y&&n--;else if(c!==void 0&&y.regex.test(c))do u=(y.transform!==void 0?y.transform(c):c)+u,n--,c=l[n];while(i===r&&c!==void 0&&y.regex.test(c));else return u}return u}function P(l){return typeof l!="string"||T===void 0?typeof l=="number"?T(""+l):l:T(l)}function Y(l){return d.length-l.length<=0?l:e.reverseFillMask===!0&&l.length!==0?d.slice(0,-l.length)+l:l+d.slice(l.length)}return{innerValue:f,hasMask:w,moveCursorForPaste:U,updateMaskValue:q,onMaskedKeydown:C,onMaskedClick:k}}function Ee(e,R){function B(){const V=e.modelValue;try{const s="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(V)===V&&("length"in V?Array.from(V):[V]).forEach(d=>{s.items.add(d)}),{files:s.files}}catch{return{files:void 0}}}return R===!0?D(()=>{if(e.type==="file")return B()}):D(B)}var Ae=ne({name:"QInput",inheritAttrs:!1,props:{...re,...Ce,...ue,modelValue:[String,Number,FileList],shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...se,"paste","change","keydown","click","animationend"],setup(e,{emit:R,attrs:B}){const{proxy:V}=ie(),{$q:s}=V,d={};let b=NaN,T,N,h=null,w;const f=W(null),_=fe(e),{innerValue:o,hasMask:S,moveCursorForPaste:O,updateMaskValue:q,onMaskedKeydown:U,onMaskedClick:A}=Fe(e,R,c,f),k=Ee(e,!0),C=D(()=>G(o.value)),F=me(r),I=ce({changeEvent:!0}),P=D(()=>e.type==="textarea"||e.autogrow===!0),Y=D(()=>P.value===!0||["text","search","url","tel","password"].includes(e.type)),l=D(()=>{const t={...I.splitAttrs.listeners.value,onInput:r,onPaste:u,onChange:$,onBlur:Z,onFocus:J};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=F,S.value===!0&&(t.onKeydown=U,t.onClick=A),e.autogrow===!0&&(t.onAnimationend=y),t}),a=D(()=>{const t={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:_.value,...I.splitAttrs.attributes.value,id:I.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return P.value===!1&&(t.type=e.type),e.autogrow===!0&&(t.rows=1),t});z(()=>e.type,()=>{f.value&&(f.value.value=e.modelValue)}),z(()=>e.modelValue,t=>{if(S.value===!0){if(N===!0&&(N=!1,String(t)===b))return;q(t)}else o.value!==t&&(o.value=t,e.type==="number"&&d.hasOwnProperty("value")===!0&&(T===!0?T=!1:delete d.value));e.autogrow===!0&&L(m)}),z(()=>e.autogrow,t=>{t===!0?L(m):f.value!==null&&B.rows>0&&(f.value.style.height="auto")}),z(()=>e.dense,()=>{e.autogrow===!0&&L(m)});function i(){ae(()=>{const t=document.activeElement;f.value!==null&&f.value!==t&&(t===null||t.id!==I.targetUid.value)&&f.value.focus({preventScroll:!0})})}function n(){f.value!==null&&f.value.select()}function u(t){if(S.value===!0&&e.reverseFillMask!==!0){const g=t.target;O(g,g.selectionStart,g.selectionEnd)}R("paste",t)}function r(t){if(!t||!t.target)return;if(e.type==="file"){R("update:modelValue",t.target.files);return}const g=t.target.value;if(t.target.qComposing===!0){d.value=g;return}if(S.value===!0)q(g,!1,t.inputType);else if(c(g),Y.value===!0&&t.target===document.activeElement){const{selectionStart:K,selectionEnd:j}=t.target;K!==void 0&&j!==void 0&&L(()=>{t.target===document.activeElement&&g.indexOf(t.target.value)===0&&t.target.setSelectionRange(K,j)})}e.autogrow===!0&&m()}function y(t){R("animationend",t),m()}function c(t,g){w=()=>{h=null,e.type!=="number"&&d.hasOwnProperty("value")===!0&&delete d.value,e.modelValue!==t&&b!==t&&(b=t,g===!0&&(N=!0),R("update:modelValue",t),L(()=>{b===t&&(b=NaN)})),w=void 0},e.type==="number"&&(T=!0,d.value=t),e.debounce!==void 0?(h!==null&&clearTimeout(h),d.value=t,h=setTimeout(w,e.debounce)):w()}function m(){requestAnimationFrame(()=>{const t=f.value;if(t!==null){const g=t.parentNode.style,{scrollTop:K}=t,{overflowY:j,maxHeight:E}=s.platform.is.firefox===!0?{}:window.getComputedStyle(t),H=j!==void 0&&j!=="scroll";H===!0&&(t.style.overflowY="hidden"),g.marginBottom=t.scrollHeight-1+"px",t.style.height="1px",t.style.height=t.scrollHeight+"px",H===!0&&(t.style.overflowY=parseInt(E,10)<t.scrollHeight?"auto":"hidden"),g.marginBottom="",t.scrollTop=K}})}function $(t){F(t),h!==null&&(clearTimeout(h),h=null),w!==void 0&&w(),R("change",t.target.value)}function Z(t){t!==void 0&&J(t),h!==null&&(clearTimeout(h),h=null),w!==void 0&&w(),T=!1,N=!1,delete d.value,e.type!=="file"&&setTimeout(()=>{f.value!==null&&(f.value.value=o.value!==void 0?o.value:"")})}function v(){return d.hasOwnProperty("value")===!0?d.value:o.value!==void 0?o.value:""}ge(()=>{Z()}),le(()=>{e.autogrow===!0&&m()}),Object.assign(I,{innerValue:o,fieldClass:D(()=>`q-${P.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:D(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:f,emitValue:c,hasValue:C,floatingLabel:D(()=>C.value===!0&&(e.type!=="number"||isNaN(o.value)===!1)||G(e.displayValue)),getControl:()=>Q(P.value===!0?"textarea":"input",{ref:f,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...a.value,...l.value,...e.type!=="file"?{value:v()}:k.value}),getShadowControl:()=>Q("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(P.value===!0?"":" text-no-wrap")},[Q("span",{class:"invisible"},v()),Q("span",e.shadowText)])});const M=de(I);return Object.assign(V,{focus:i,select:n,getNativeElement:()=>f.value}),he(V,"nativeEl",()=>f.value),M}}),Pe=ne({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(e,{slots:R,emit:B}){const V=ie(),s=W(null);let d=0;const b=[];function T(o){const S=typeof o=="boolean"?o:e.noErrorFocus!==!0,O=++d,q=(k,C)=>{B(`validation${k===!0?"Success":"Error"}`,C)},U=k=>{const C=k.validate();return typeof C.then=="function"?C.then(F=>({valid:F,comp:k}),F=>({valid:!1,comp:k,err:F})):Promise.resolve({valid:C,comp:k})};return(e.greedy===!0?Promise.all(b.map(U)).then(k=>k.filter(C=>C.valid!==!0)):b.reduce((k,C)=>k.then(()=>U(C).then(F=>{if(F.valid===!1)return Promise.reject(F)})),Promise.resolve()).catch(k=>[k])).then(k=>{if(k===void 0||k.length===0)return O===d&&q(!0),!0;if(O===d){const{comp:C,err:F}=k[0];if(F!==void 0&&console.error(F),q(!1,C),S===!0){const I=k.find(({comp:P})=>typeof P.focus=="function"&&we(P.$)===!1);I!==void 0&&I.comp.focus()}}return!1})}function N(){d++,b.forEach(o=>{typeof o.resetValidation=="function"&&o.resetValidation()})}function h(o){o!==void 0&&p(o);const S=d+1;T().then(O=>{S===d&&O===!0&&(e.onSubmit!==void 0?B("submit",o):o!==void 0&&o.target!==void 0&&typeof o.target.submit=="function"&&o.target.submit())})}function w(o){o!==void 0&&p(o),B("reset"),L(()=>{N(),e.autofocus===!0&&e.noResetFocus!==!0&&f()})}function f(){ae(()=>{if(s.value===null)return;const o=s.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||s.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||s.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(s.value.querySelectorAll("[tabindex]"),S=>S.tabIndex!==-1);o!=null&&o.focus({preventScroll:!0})})}ke(be,{bindComponent(o){b.push(o)},unbindComponent(o){const S=b.indexOf(o);S!==-1&&b.splice(S,1)}});let _=!1;return ye(()=>{_=!0}),xe(()=>{_===!0&&e.autofocus===!0&&f()}),le(()=>{e.autofocus===!0&&f()}),Object.assign(V.proxy,{validate:T,resetValidation:N,submit:h,reset:w,focus:f,getValidationComponents:()=>b}),()=>Q("form",{class:"q-form",ref:s,onSubmit:h,onReset:w},Me(R.default))}});export{Pe as Q,Ae as a};