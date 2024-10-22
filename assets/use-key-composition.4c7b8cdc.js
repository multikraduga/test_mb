import{c as i,p as ue,r as m,a as L,n as q,aw as ae,j as $,i as ie,o as U,aD as se,af as de,an as fe,s as ce,v as ve,z as pe,A as me,h as a,ai as k,Q as W,aE as ge,B as I,as as be,a1 as he}from"./index.35c046d5.js";import{u as T}from"./uid.937d8ee7.js";const Ce={dark:{type:Boolean,default:null}};function ye(e,o){return i(()=>e.dark===null?o.dark.isActive:e.dark)}function qe(e){return e==null?null:e}function J(e,o){return e==null?o===!0?`f_${T()}`:null:e}function _e({getValue:e,required:o=!0}={}){if(ue.value===!0){const l=e!==void 0?m(qe(e())):m(null);return o===!0&&l.value===null&&L(()=>{l.value=`f_${T()}`}),e!==void 0&&q(e,n=>{l.value=J(n,o)}),l}return e!==void 0?i(()=>J(e(),o)):m(`f_${T()}`)}const G=/^on[A-Z]/;function xe(){const{attrs:e,vnode:o}=$(),l={listeners:m({}),attributes:m({})};function n(){const f={},s={};for(const u in e)u!=="class"&&u!=="style"&&G.test(u)===!1&&(f[u]=e[u]);for(const u in o.props)G.test(u)===!0&&(s[u]=o.props[u]);l.attributes.value=f,l.listeners.value=s}return ae(n),n(),l}function Se({validate:e,resetValidation:o,requiresQForm:l}){const n=ie(se,!1);if(n!==!1){const{props:f,proxy:s}=$();Object.assign(s,{validate:e,resetValidation:o}),q(()=>f.disable,u=>{u===!0?(typeof o=="function"&&o(),n.unbindComponent(s)):n.bindComponent(s)}),L(()=>{f.disable!==!0&&n.bindComponent(s)}),U(()=>{f.disable!==!0&&n.unbindComponent(s)})}else l===!0&&console.error("Parent QForm not found on useFormChild()!")}const X=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,Y=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,ee=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,P=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,O=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,j={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>X.test(e),hexaColor:e=>Y.test(e),hexOrHexaColor:e=>ee.test(e),rgbColor:e=>P.test(e),rgbaColor:e=>O.test(e),rgbOrRgbaColor:e=>P.test(e)||O.test(e),hexOrRgbColor:e=>X.test(e)||P.test(e),hexaOrRgbaColor:e=>Y.test(e)||O.test(e),anyColor:e=>ee.test(e)||P.test(e)||O.test(e)},Fe=[!0,!1,"ondemand"],Re={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],default:!1,validator:e=>Fe.includes(e)}};function Be(e,o){const{props:l,proxy:n}=$(),f=m(!1),s=m(null),u=m(!1);Se({validate:F,resetValidation:S});let c=0,g;const A=i(()=>l.rules!==void 0&&l.rules!==null&&l.rules.length!==0),b=i(()=>l.disable!==!0&&A.value===!0&&o.value===!1),x=i(()=>l.error===!0||f.value===!0),D=i(()=>typeof l.errorMessage=="string"&&l.errorMessage.length!==0?l.errorMessage:s.value);q(()=>l.modelValue,()=>{u.value=!0,b.value===!0&&l.lazyRules===!1&&C()});function w(){l.lazyRules!=="ondemand"&&b.value===!0&&u.value===!0&&C()}q(()=>l.reactiveRules,h=>{h===!0?g===void 0&&(g=q(()=>l.rules,w,{immediate:!0,deep:!0})):g!==void 0&&(g(),g=void 0)},{immediate:!0}),q(()=>l.lazyRules,w),q(e,h=>{h===!0?u.value=!0:b.value===!0&&l.lazyRules!=="ondemand"&&C()});function S(){c++,o.value=!1,u.value=!1,f.value=!1,s.value=null,C.cancel()}function F(h=l.modelValue){if(l.disable===!0||A.value===!1)return!0;const R=++c,z=o.value!==!0?()=>{u.value=!0}:()=>{},y=(d,v)=>{d===!0&&z(),f.value=d,s.value=v||null,o.value=!1},B=[];for(let d=0;d<l.rules.length;d++){const v=l.rules[d];let p;if(typeof v=="function"?p=v(h,j):typeof v=="string"&&j[v]!==void 0&&(p=j[v](h)),p===!1||typeof p=="string")return y(!0,p),!1;p!==!0&&p!==void 0&&B.push(p)}return B.length===0?(y(!1),!0):(o.value=!0,Promise.all(B).then(d=>{if(d===void 0||Array.isArray(d)===!1||d.length===0)return R===c&&y(!1),!0;const v=d.find(p=>p===!1||typeof p=="string");return R===c&&y(v!==void 0,v),v===void 0},d=>(R===c&&(console.error(d),y(!0)),!1)))}const C=de(F,0);return U(()=>{g!==void 0&&g(),C.cancel()}),Object.assign(n,{resetValidation:S,validate:F}),fe(n,"hasError",()=>x.value),{isDirtyModel:u,hasRules:A,hasError:x,errorMessage:D,validate:F,resetValidation:S}}let _=[],V=[];function oe(e){V=V.filter(o=>o!==e)}function ze(e){oe(e),V.push(e)}function Me(e){oe(e),V.length===0&&_.length!==0&&(_[_.length-1](),_=[])}function Ae(e){V.length===0?e():_.push(e)}function we(e){_=_.filter(o=>o!==e)}function ke(e){return e!=null&&(""+e).length!==0}const Ve={...Ce,...Re,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String},je={...Ve,maxlength:[Number,String]},Te=["update:modelValue","clear","focus","blur"];function Le({requiredForAttr:e=!0,tagProp:o,changeEvent:l=!1}={}){const{props:n,proxy:f}=$(),s=ye(n,f.$q),u=_e({required:e,getValue:()=>n.for});return{requiredForAttr:e,changeEvent:l,tag:o===!0?i(()=>n.tag):{value:"label"},isDark:s,editable:i(()=>n.disable!==!0&&n.readonly!==!0),innerLoading:m(!1),focused:m(!1),hasPopupOpen:!1,splitAttrs:xe(),targetUid:u,rootRef:m(null),targetRef:m(null),controlRef:m(null)}}function Ue(e){const{props:o,emit:l,slots:n,attrs:f,proxy:s}=$(),{$q:u}=s;let c=null;e.hasValue===void 0&&(e.hasValue=i(()=>ke(o.modelValue))),e.emitValue===void 0&&(e.emitValue=t=>{l("update:modelValue",t)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:H,onFocusout:K}),Object.assign(e,{clearValue:M,onControlFocusin:H,onControlFocusout:K,focus:v}),e.computedCounter===void 0&&(e.computedCounter=i(()=>{if(o.counter!==!1){const t=typeof o.modelValue=="string"||typeof o.modelValue=="number"?(""+o.modelValue).length:Array.isArray(o.modelValue)===!0?o.modelValue.length:0,r=o.maxlength!==void 0?o.maxlength:o.maxValues;return t+(r!==void 0?" / "+r:"")}}));const{isDirtyModel:g,hasRules:A,hasError:b,errorMessage:x,resetValidation:D}=Be(e.focused,e.innerLoading),w=e.floatingLabel!==void 0?i(()=>o.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):i(()=>o.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),S=i(()=>o.bottomSlots===!0||o.hint!==void 0||A.value===!0||o.counter===!0||o.error!==null),F=i(()=>o.filled===!0?"filled":o.outlined===!0?"outlined":o.borderless===!0?"borderless":o.standout?"standout":"standard"),C=i(()=>`q-field row no-wrap items-start q-field--${F.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(o.rounded===!0?" q-field--rounded":"")+(o.square===!0?" q-field--square":"")+(w.value===!0?" q-field--float":"")+(R.value===!0?" q-field--labeled":"")+(o.dense===!0?" q-field--dense":"")+(o.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(b.value===!0?" q-field--error":"")+(b.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(o.hideBottomSpace!==!0&&S.value===!0?" q-field--with-bottom":"")+(o.disable===!0?" q-field--disabled":o.readonly===!0?" q-field--readonly":"")),h=i(()=>"q-field__control relative-position row no-wrap"+(o.bgColor!==void 0?` bg-${o.bgColor}`:"")+(b.value===!0?" text-negative":typeof o.standout=="string"&&o.standout.length!==0&&e.focused.value===!0?` ${o.standout}`:o.color!==void 0?` text-${o.color}`:"")),R=i(()=>o.labelSlot===!0||o.label!==void 0),z=i(()=>"q-field__label no-pointer-events absolute ellipsis"+(o.labelColor!==void 0&&b.value!==!0?` text-${o.labelColor}`:"")),y=i(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:w.value,modelValue:o.modelValue,emitValue:e.emitValue})),B=i(()=>{const t={};return e.targetUid.value&&(t.for=e.targetUid.value),o.disable===!0&&(t["aria-disabled"]="true"),t});function d(){const t=document.activeElement;let r=e.targetRef!==void 0&&e.targetRef.value;r&&(t===null||t.id!==e.targetUid.value)&&(r.hasAttribute("tabindex")===!0||(r=r.querySelector("[tabindex]")),r&&r!==t&&r.focus({preventScroll:!0}))}function v(){Ae(d)}function p(){we(d);const t=document.activeElement;t!==null&&e.rootRef.value.contains(t)&&t.blur()}function H(t){c!==null&&(clearTimeout(c),c=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,l("focus",t))}function K(t,r){c!==null&&clearTimeout(c),c=setTimeout(()=>{c=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,l("blur",t)),r!==void 0&&r())})}function M(t){ce(t),u.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),o.type==="file"&&(e.inputRef.value.value=null),l("update:modelValue",null),e.changeEvent===!0&&l("change",null),l("clear",o.modelValue),ve(()=>{const r=g.value;D(),g.value=r})}function le(t){[13,32].includes(t.keyCode)&&M(t)}function te(){const t=[];return n.prepend!==void 0&&t.push(a("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:k},n.prepend())),t.push(a("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},ne())),b.value===!0&&o.noErrorIcon===!1&&t.push(E("error",[a(W,{name:u.iconSet.field.error,color:"negative"})])),o.loading===!0||e.innerLoading.value===!0?t.push(E("inner-loading-append",n.loading!==void 0?n.loading():[a(ge,{color:o.color})])):o.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&t.push(E("inner-clearable-append",[a(W,{class:"q-field__focusable-action",name:o.clearIcon||u.iconSet.field.clear,tabindex:0,role:"button","aria-hidden":"false","aria-label":u.lang.label.clear,onKeyup:le,onClick:M})])),n.append!==void 0&&t.push(a("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:k},n.append())),e.getInnerAppend!==void 0&&t.push(E("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&t.push(e.getControlChild()),t}function ne(){const t=[];return o.prefix!==void 0&&o.prefix!==null&&t.push(a("div",{class:"q-field__prefix no-pointer-events row items-center"},o.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&t.push(e.getShadowControl()),e.getControl!==void 0?t.push(e.getControl()):n.rawControl!==void 0?t.push(n.rawControl()):n.control!==void 0&&t.push(a("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":o.autofocus===!0||void 0},n.control(y.value))),R.value===!0&&t.push(a("div",{class:z.value},I(n.label,o.label))),o.suffix!==void 0&&o.suffix!==null&&t.push(a("div",{class:"q-field__suffix no-pointer-events row items-center"},o.suffix)),t.concat(I(n.default))}function re(){let t,r;b.value===!0?x.value!==null?(t=[a("div",{role:"alert"},x.value)],r=`q--slot-error-${x.value}`):(t=I(n.error),r="q--slot-error"):(o.hideHint!==!0||e.focused.value===!0)&&(o.hint!==void 0?(t=[a("div",o.hint)],r=`q--slot-hint-${o.hint}`):(t=I(n.hint),r="q--slot-hint"));const Q=o.counter===!0||n.counter!==void 0;if(o.hideBottomSpace===!0&&Q===!1&&t===void 0)return;const Z=a("div",{key:r,class:"q-field__messages col"},t);return a("div",{class:"q-field__bottom row items-start q-field__bottom--"+(o.hideBottomSpace!==!0?"animated":"stale"),onClick:k},[o.hideBottomSpace===!0?Z:a(be,{name:"q-transition--field-message"},()=>Z),Q===!0?a("div",{class:"q-field__counter"},n.counter!==void 0?n.counter():e.computedCounter.value):null])}function E(t,r){return r===null?null:a("div",{key:t,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},r)}let N=!1;return pe(()=>{N=!0}),me(()=>{N===!0&&o.autofocus===!0&&s.focus()}),o.autofocus===!0&&L(()=>{s.focus()}),U(()=>{c!==null&&clearTimeout(c)}),Object.assign(s,{focus:v,blur:p}),function(){const r=e.getControl===void 0&&n.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":o.autofocus===!0||void 0,...B.value}:B.value;return a(e.tag.value,{ref:e.rootRef,class:[C.value,f.class],style:f.style,...r},[n.before!==void 0?a("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:k},n.before()):null,a("div",{class:"q-field__inner relative-position col self-stretch"},[a("div",{ref:e.controlRef,class:h.value,tabindex:-1,...e.controlEvents},te()),S.value===!0?re():null]),n.after!==void 0?a("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:k},n.after()):null])}}const He={name:String};function Ke(e={}){return(o,l,n)=>{o[l](a("input",{class:"hidden"+(n||""),...e.value}))}}function Ne(e){return i(()=>e.name||e.for)}const $e=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,Ee=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,Ie=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,Pe=/[a-z0-9_ -]$/i;function Qe(e){return function(l){if(l.type==="compositionend"||l.type==="change"){if(l.target.qComposing!==!0)return;l.target.qComposing=!1,e(l)}else l.type==="compositionupdate"&&l.target.qComposing!==!0&&typeof l.data=="string"&&(he.is.firefox===!0?Pe.test(l.data)===!1:$e.test(l.data)===!0||Ee.test(l.data)===!0||Ie.test(l.data)===!0)===!0&&(l.target.qComposing=!0)}}export{ye as a,je as b,Te as c,Ue as d,Le as e,ze as f,Ae as g,He as h,Ne as i,ke as j,Qe as k,Ke as l,Me as r,Ce as u};
