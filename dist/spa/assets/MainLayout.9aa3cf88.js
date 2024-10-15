import{i as fe,e as E,r as _,c as b,o as U,a as G,t as ze,w as Je,R as Ye,h as w,s as Re,d as Ze,f as et,Q as te,g as Be,j as W,k as tt,l as D,u as nt,m as at,n as I,p as Ie,q as Me,v as _e,x as de,y as ve,z as ot,A as lt,B as he,C as rt,D as be,E as it,F as st,G as ut,H as ct,I as dt,J as ie,K as ee,L as ft,M as vt,N as ht,O as bt,P as se,S as xe,T as K,U as F,V as gt,W as mt,X as yt,Y as wt,Z as Tt,_ as qt}from"./index.cd7df6ac.js";import{u as Ct}from"./uid.937d8ee7.js";import{u as ue,a as $e,r as St}from"./rtl.cae19a08.js";import{u as Lt}from"./requests.a62274c3.js";let Rt=0;const _t=["click","keydown"],xt={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${Rt++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function $t(e,T,l,a){const n=fe(ze,E);if(n===E)return console.error("QTab/QRouteTab component needs to be child of QTabs"),E;const{proxy:v}=W(),d=_(null),C=_(null),u=_(null),f=b(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),x=b(()=>n.currentModel.value===e.name),k=b(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(x.value===!0?" q-tab--active"+(n.tabProps.value.activeClass?" "+n.tabProps.value.activeClass:"")+(n.tabProps.value.activeColor?` text-${n.tabProps.value.activeColor}`:"")+(n.tabProps.value.activeBgColor?` bg-${n.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&n.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||n.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(a!==void 0?a.linkClass.value:"")),P=b(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(n.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),h=b(()=>e.disable===!0||n.hasFocus.value===!0||x.value===!1&&n.hasActiveTab.value===!0?-1:e.tabindex||0);function S(r,i){if(i!==!0&&d.value!==null&&d.value.focus(),e.disable===!0){a!==void 0&&a.hasRouterLink.value===!0&&Re(r);return}if(a===void 0){n.updateModel({name:e.name}),l("click",r);return}if(a.hasRouterLink.value===!0){const m=(q={})=>{let $;const B=q.to===void 0||tt(q.to,e.to)===!0?n.avoidRouteWatcher=Ct():null;return a.navigateToRouterLink(r,{...q,returnRouterError:!0}).catch(p=>{$=p}).then(p=>{if(B===n.avoidRouteWatcher&&(n.avoidRouteWatcher=!1,$===void 0&&(p===void 0||p.message!==void 0&&p.message.startsWith("Avoided redundant navigation")===!0)&&n.updateModel({name:e.name})),q.returnRouterError===!0)return $!==void 0?Promise.reject($):p})};l("click",r,m),r.defaultPrevented!==!0&&m();return}l("click",r)}function M(r){Ze(r,[13,32])?S(r,!0):et(r)!==!0&&r.keyCode>=35&&r.keyCode<=40&&r.altKey!==!0&&r.metaKey!==!0&&n.onKbdNavigate(r.keyCode,v.$el)===!0&&Re(r),l("keydown",r)}function Q(){const r=n.tabProps.value.narrowIndicator,i=[],m=w("div",{ref:u,class:["q-tab__indicator",n.tabProps.value.indicatorClass]});e.icon!==void 0&&i.push(w(te,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&i.push(w("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&i.push(e.alertIcon!==void 0?w(te,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):w("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),r===!0&&i.push(m);const q=[w("div",{class:"q-focus-helper",tabindex:-1,ref:d}),w("div",{class:P.value},Be(T.default,i))];return r===!1&&q.push(m),q}const A={name:b(()=>e.name),rootRef:C,tabIndicatorRef:u,routeData:a};U(()=>{n.unregisterTab(A)}),G(()=>{n.registerTab(A)});function s(r,i){const m={ref:C,class:k.value,tabindex:h.value,role:"tab","aria-selected":x.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:S,onKeydown:M,...i};return Je(w(r,m,Q()),[[Ye,f.value]])}return{renderTab:s,$tabs:n}}var ce=D({name:"QRouteTab",props:{...nt,...xt},emits:_t,setup(e,{slots:T,emit:l}){const a=at({useDisableForRouterLinkProps:!1}),{renderTab:n,$tabs:v}=$t(e,T,l,{exact:b(()=>e.exact),...a});return I(()=>`${e.name} | ${e.exact} | ${(a.resolvedLink.value||{}).href}`,()=>{v.verifyRouteModel()}),()=>n(a.linkTag.value,a.linkAttrs.value)}});function Pt(){const e=_(!Ie.value);return e.value===!1&&G(()=>{e.value=!0}),{isHydrated:e}}const Ae=typeof ResizeObserver!="undefined",Pe=Ae===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var ne=D({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:T}){let l=null,a,n={width:-1,height:-1};function v(u){u===!0||e.debounce===0||e.debounce==="0"?d():l===null&&(l=setTimeout(d,e.debounce))}function d(){if(l!==null&&(clearTimeout(l),l=null),a){const{offsetWidth:u,offsetHeight:f}=a;(u!==n.width||f!==n.height)&&(n={width:u,height:f},T("resize",n))}}const{proxy:C}=W();if(C.trigger=v,Ae===!0){let u;const f=x=>{a=C.$el.parentNode,a?(u=new ResizeObserver(v),u.observe(a),d()):x!==!0&&_e(()=>{f(!0)})};return G(()=>{f()}),U(()=>{l!==null&&clearTimeout(l),u!==void 0&&(u.disconnect!==void 0?u.disconnect():a&&u.unobserve(a))}),Me}else{let x=function(){l!==null&&(clearTimeout(l),l=null),f!==void 0&&(f.removeEventListener!==void 0&&f.removeEventListener("resize",v,de.passive),f=void 0)},k=function(){x(),a&&a.contentDocument&&(f=a.contentDocument.defaultView,f.addEventListener("resize",v,de.passive),d())};const{isHydrated:u}=Pt();let f;return G(()=>{_e(()=>{a=C.$el,a&&k()})}),U(x),()=>{if(u.value===!0)return w("object",{class:"q--avoid-card-border",style:Pe.style,tabindex:-1,type:"text/html",data:Pe.url,"aria-hidden":"true",onLoad:k})}}}});function kt(e,T,l){const a=l===!0?["left","right"]:["top","bottom"];return`absolute-${T===!0?a[0]:a[1]}${e?` text-${e}`:""}`}const zt=["left","center","right","justify"];var Bt=D({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>zt.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:T,emit:l}){const{proxy:a}=W(),{$q:n}=a,{registerTick:v}=ue(),{registerTick:d}=ue(),{registerTick:C}=ue(),{registerTimeout:u,removeTimeout:f}=$e(),{registerTimeout:x,removeTimeout:k}=$e(),P=_(null),h=_(null),S=_(e.modelValue),M=_(!1),Q=_(!0),A=_(!1),s=_(!1),r=[],i=_(0),m=_(!1);let q=null,$=null,B;const p=b(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:kt(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),pe=b(()=>{const t=i.value,o=S.value;for(let c=0;c<t;c++)if(r[c].name.value===o)return!0;return!1}),Qe=b(()=>`q-tabs__content--align-${M.value===!0?"left":s.value===!0?"justify":e.align}`),He=b(()=>`q-tabs row no-wrap items-center q-tabs--${M.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),Ee=b(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+Qe.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),X=b(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),J=b(()=>e.vertical!==!0&&n.lang.rtl===!0),ae=b(()=>St===!1&&J.value===!0);I(J,N),I(()=>e.modelValue,t=>{oe({name:t,setCurrent:!0,skipEmit:!0})}),I(()=>e.outsideArrows,Y);function oe({name:t,setCurrent:o,skipEmit:c}){S.value!==t&&(c!==!0&&e["onUpdate:modelValue"]!==void 0&&l("update:modelValue",t),(o===!0||e["onUpdate:modelValue"]===void 0)&&(Oe(S.value,t),S.value=t))}function Y(){v(()=>{ge({width:P.value.offsetWidth,height:P.value.offsetHeight})})}function ge(t){if(X.value===void 0||h.value===null)return;const o=t[X.value.container],c=Math.min(h.value[X.value.scroll],Array.prototype.reduce.call(h.value.children,(R,y)=>R+(y[X.value.content]||0),0)),L=o>0&&c>o;M.value=L,L===!0&&d(N),s.value=o<parseInt(e.breakpoint,10)}function Oe(t,o){const c=t!=null&&t!==""?r.find(R=>R.name.value===t):null,L=o!=null&&o!==""?r.find(R=>R.name.value===o):null;if(c&&L){const R=c.tabIndicatorRef.value,y=L.tabIndicatorRef.value;q!==null&&(clearTimeout(q),q=null),R.style.transition="none",R.style.transform="none",y.style.transition="none",y.style.transform="none";const g=R.getBoundingClientRect(),z=y.getBoundingClientRect();y.style.transform=e.vertical===!0?`translate3d(0,${g.top-z.top}px,0) scale3d(1,${z.height?g.height/z.height:1},1)`:`translate3d(${g.left-z.left}px,0,0) scale3d(${z.width?g.width/z.width:1},1,1)`,C(()=>{q=setTimeout(()=>{q=null,y.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",y.style.transform="none"},70)})}L&&M.value===!0&&j(L.rootRef.value)}function j(t){const{left:o,width:c,top:L,height:R}=h.value.getBoundingClientRect(),y=t.getBoundingClientRect();let g=e.vertical===!0?y.top-L:y.left-o;if(g<0){h.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(g),N();return}g+=e.vertical===!0?y.height-R:y.width-c,g>0&&(h.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(g),N())}function N(){const t=h.value;if(t===null)return;const o=t.getBoundingClientRect(),c=e.vertical===!0?t.scrollTop:Math.abs(t.scrollLeft);J.value===!0?(Q.value=Math.ceil(c+o.width)<t.scrollWidth-1,A.value=c>0):(Q.value=c>0,A.value=e.vertical===!0?Math.ceil(c+o.height)<t.scrollHeight:Math.ceil(c+o.width)<t.scrollWidth)}function me(t){$!==null&&clearInterval($),$=setInterval(()=>{De(t)===!0&&O()},5)}function ye(){me(ae.value===!0?Number.MAX_SAFE_INTEGER:0)}function we(){me(ae.value===!0?0:Number.MAX_SAFE_INTEGER)}function O(){$!==null&&(clearInterval($),$=null)}function Ve(t,o){const c=Array.prototype.filter.call(h.value.children,z=>z===o||z.matches&&z.matches(".q-tab.q-focusable")===!0),L=c.length;if(L===0)return;if(t===36)return j(c[0]),c[0].focus(),!0;if(t===35)return j(c[L-1]),c[L-1].focus(),!0;const R=t===(e.vertical===!0?38:37),y=t===(e.vertical===!0?40:39),g=R===!0?-1:y===!0?1:void 0;if(g!==void 0){const z=J.value===!0?-1:1,H=c.indexOf(o)+g*z;return H>=0&&H<L&&(j(c[H]),c[H].focus({preventScroll:!0})),!0}}const Fe=b(()=>ae.value===!0?{get:t=>Math.abs(t.scrollLeft),set:(t,o)=>{t.scrollLeft=-o}}:e.vertical===!0?{get:t=>t.scrollTop,set:(t,o)=>{t.scrollTop=o}}:{get:t=>t.scrollLeft,set:(t,o)=>{t.scrollLeft=o}});function De(t){const o=h.value,{get:c,set:L}=Fe.value;let R=!1,y=c(o);const g=t<y?-1:1;return y+=g*5,y<0?(R=!0,y=0):(g===-1&&y<=t||g===1&&y>=t)&&(R=!0,y=t),L(o,y),N(),R}function Te(t,o){for(const c in t)if(t[c]!==o[c])return!1;return!0}function We(){let t=null,o={matchedLen:0,queryDiff:9999,hrefLen:0};const c=r.filter(g=>g.routeData!==void 0&&g.routeData.hasRouterLink.value===!0),{hash:L,query:R}=a.$route,y=Object.keys(R).length;for(const g of c){const z=g.routeData.exact.value===!0;if(g.routeData[z===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:H,query:le,matched:Ge,href:Xe}=g.routeData.resolvedLink.value,re=Object.keys(le).length;if(z===!0){if(H!==L||re!==y||Te(R,le)===!1)continue;t=g.name.value;break}if(H!==""&&H!==L||re!==0&&Te(le,R)===!1)continue;const V={matchedLen:Ge.length,queryDiff:y-re,hrefLen:Xe.length-H.length};if(V.matchedLen>o.matchedLen){t=g.name.value,o=V;continue}else if(V.matchedLen!==o.matchedLen)continue;if(V.queryDiff<o.queryDiff)t=g.name.value,o=V;else if(V.queryDiff!==o.queryDiff)continue;V.hrefLen>o.hrefLen&&(t=g.name.value,o=V)}t===null&&r.some(g=>g.routeData===void 0&&g.name.value===S.value)===!0||oe({name:t,setCurrent:!0})}function je(t){if(f(),m.value!==!0&&P.value!==null&&t.target&&typeof t.target.closest=="function"){const o=t.target.closest(".q-tab");o&&P.value.contains(o)===!0&&(m.value=!0,M.value===!0&&j(o))}}function Ne(){u(()=>{m.value=!1},30)}function Z(){Ce.avoidRouteWatcher===!1?x(We):k()}function qe(){if(B===void 0){const t=I(()=>a.$route.fullPath,Z);B=()=>{t(),B=void 0}}}function Ke(t){r.push(t),i.value++,Y(),t.routeData===void 0||a.$route===void 0?x(()=>{if(M.value===!0){const o=S.value,c=o!=null&&o!==""?r.find(L=>L.name.value===o):null;c&&j(c.rootRef.value)}}):(qe(),t.routeData.hasRouterLink.value===!0&&Z())}function Ue(t){r.splice(r.indexOf(t),1),i.value--,Y(),B!==void 0&&t.routeData!==void 0&&(r.every(o=>o.routeData===void 0)===!0&&B(),Z())}const Ce={currentModel:S,tabProps:p,hasFocus:m,hasActiveTab:pe,registerTab:Ke,unregisterTab:Ue,verifyRouteModel:Z,updateModel:oe,onKbdNavigate:Ve,avoidRouteWatcher:!1};ve(ze,Ce);function Se(){q!==null&&clearTimeout(q),O(),B!==void 0&&B()}let Le;return U(Se),ot(()=>{Le=B!==void 0,Se()}),lt(()=>{Le===!0&&qe(),Y()}),()=>w("div",{ref:P,class:He.value,role:"tablist",onFocusin:je,onFocusout:Ne},[w(ne,{onResize:ge}),w("div",{ref:h,class:Ee.value,onScroll:N},he(T.default)),w(te,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(Q.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||n.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:ye,onTouchstartPassive:ye,onMouseupPassive:O,onMouseleavePassive:O,onTouchendPassive:O}),w(te,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(A.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||n.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:we,onTouchstartPassive:we,onMouseupPassive:O,onMouseleavePassive:O,onTouchendPassive:O})])}}),It=D({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:T}){const l=b(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>w("div",{class:l.value,role:"toolbar"},he(T.default))}}),Mt=D({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:T,emit:l}){const{proxy:{$q:a}}=W(),n=fe(be,E);if(n===E)return console.error("QHeader needs to be child of QLayout"),E;const v=_(parseInt(e.heightHint,10)),d=_(!0),C=b(()=>e.reveal===!0||n.view.value.indexOf("H")!==-1||a.platform.is.ios&&n.isContainer.value===!0),u=b(()=>{if(e.modelValue!==!0)return 0;if(C.value===!0)return d.value===!0?v.value:0;const s=v.value-n.scroll.value.position;return s>0?s:0}),f=b(()=>e.modelValue!==!0||C.value===!0&&d.value!==!0),x=b(()=>e.modelValue===!0&&f.value===!0&&e.reveal===!0),k=b(()=>"q-header q-layout__section--marginal "+(C.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(f.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),P=b(()=>{const s=n.rows.value.top,r={};return s[0]==="l"&&n.left.space===!0&&(r[a.lang.rtl===!0?"right":"left"]=`${n.left.size}px`),s[2]==="r"&&n.right.space===!0&&(r[a.lang.rtl===!0?"left":"right"]=`${n.right.size}px`),r});function h(s,r){n.update("header",s,r)}function S(s,r){s.value!==r&&(s.value=r)}function M({height:s}){S(v,s),h("size",s)}function Q(s){x.value===!0&&S(d,!0),l("focusin",s)}I(()=>e.modelValue,s=>{h("space",s),S(d,!0),n.animate()}),I(u,s=>{h("offset",s)}),I(()=>e.reveal,s=>{s===!1&&S(d,e.modelValue)}),I(d,s=>{n.animate(),l("reveal",s)}),I(n.scroll,s=>{e.reveal===!0&&S(d,s.direction==="up"||s.position<=e.revealOffset||s.position-s.inflectionPoint<100)});const A={};return n.instances.header=A,e.modelValue===!0&&h("size",v.value),h("space",e.modelValue),h("offset",u.value),U(()=>{n.instances.header===A&&(n.instances.header=void 0,h("size",0),h("offset",0),h("space",!1))}),()=>{const s=rt(T.default,[]);return e.elevated===!0&&s.push(w("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),s.push(w(ne,{debounce:0,onResize:M})),w("header",{class:k.value,style:P.value,onFocusin:Q},s)}}}),At=D({name:"QPageContainer",setup(e,{slots:T}){const{proxy:{$q:l}}=W(),a=fe(be,E);if(a===E)return console.error("QPageContainer needs to be child of QLayout"),E;ve(it,!0);const n=b(()=>{const v={};return a.header.space===!0&&(v.paddingTop=`${a.header.size}px`),a.right.space===!0&&(v[`padding${l.lang.rtl===!0?"Left":"Right"}`]=`${a.right.size}px`),a.footer.space===!0&&(v.paddingBottom=`${a.footer.size}px`),a.left.space===!0&&(v[`padding${l.lang.rtl===!0?"Right":"Left"}`]=`${a.left.size}px`),v});return()=>w("div",{class:"q-page-container",style:n.value},he(T.default))}});const{passive:ke}=de,pt=["both","horizontal","vertical"];var Qt=D({name:"QScrollObserver",props:{axis:{type:String,validator:e=>pt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:st},emits:["scroll"],setup(e,{emit:T}){const l={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let a=null,n,v;I(()=>e.scrollTarget,()=>{u(),C()});function d(){a!==null&&a();const k=Math.max(0,ct(n)),P=dt(n),h={top:k-l.position.top,left:P-l.position.left};if(e.axis==="vertical"&&h.top===0||e.axis==="horizontal"&&h.left===0)return;const S=Math.abs(h.top)>=Math.abs(h.left)?h.top<0?"up":"down":h.left<0?"left":"right";l.position={top:k,left:P},l.directionChanged=l.direction!==S,l.delta=h,l.directionChanged===!0&&(l.direction=S,l.inflectionPoint=l.position),T("scroll",{...l})}function C(){n=ut(v,e.scrollTarget),n.addEventListener("scroll",f,ke),f(!0)}function u(){n!==void 0&&(n.removeEventListener("scroll",f,ke),n=void 0)}function f(k){if(k===!0||e.debounce===0||e.debounce==="0")d();else if(a===null){const[P,h]=e.debounce?[setTimeout(d,e.debounce),clearTimeout]:[requestAnimationFrame(d),cancelAnimationFrame];a=()=>{h(P),a=null}}}const{proxy:x}=W();return I(()=>x.$q.lang.rtl,d),G(()=>{v=x.$el.parentNode,C()}),U(()=>{a!==null&&a(),u()}),Object.assign(x,{trigger:f,getPosition:()=>l}),Me}}),Ht=D({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:T,emit:l}){const{proxy:{$q:a}}=W(),n=_(null),v=_(a.screen.height),d=_(e.container===!0?0:a.screen.width),C=_({position:0,direction:"down",inflectionPoint:0}),u=_(0),f=_(Ie.value===!0?0:ie()),x=b(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),k=b(()=>e.container===!1?{minHeight:a.screen.height+"px"}:null),P=b(()=>f.value!==0?{[a.lang.rtl===!0?"left":"right"]:`${f.value}px`}:null),h=b(()=>f.value!==0?{[a.lang.rtl===!0?"right":"left"]:0,[a.lang.rtl===!0?"left":"right"]:`-${f.value}px`,width:`calc(100% + ${f.value}px)`}:null);function S(i){if(e.container===!0||document.qScrollPrevented!==!0){const m={position:i.position.top,direction:i.direction,directionChanged:i.directionChanged,inflectionPoint:i.inflectionPoint.top,delta:i.delta.top};C.value=m,e.onScroll!==void 0&&l("scroll",m)}}function M(i){const{height:m,width:q}=i;let $=!1;v.value!==m&&($=!0,v.value=m,e.onScrollHeight!==void 0&&l("scrollHeight",m),A()),d.value!==q&&($=!0,d.value=q),$===!0&&e.onResize!==void 0&&l("resize",i)}function Q({height:i}){u.value!==i&&(u.value=i,A())}function A(){if(e.container===!0){const i=v.value>u.value?ie():0;f.value!==i&&(f.value=i)}}let s=null;const r={instances:{},view:b(()=>e.view),isContainer:b(()=>e.container),rootRef:n,height:v,containerHeight:u,scrollbarWidth:f,totalWidth:b(()=>d.value+f.value),rows:b(()=>{const i=e.view.toLowerCase().split(" ");return{top:i[0].split(""),middle:i[1].split(""),bottom:i[2].split("")}}),header:ee({size:0,offset:0,space:!1}),right:ee({size:300,offset:0,space:!1}),footer:ee({size:0,offset:0,space:!1}),left:ee({size:300,offset:0,space:!1}),scroll:C,animate(){s!==null?clearTimeout(s):document.body.classList.add("q-body--layout-animate"),s=setTimeout(()=>{s=null,document.body.classList.remove("q-body--layout-animate")},155)},update(i,m,q){r[i][m]=q}};if(ve(be,r),ie()>0){let q=function(){i=null,m.classList.remove("hide-scrollbar")},$=function(){if(i===null){if(m.scrollHeight>a.screen.height)return;m.classList.add("hide-scrollbar")}else clearTimeout(i);i=setTimeout(q,300)},B=function(p){i!==null&&p==="remove"&&(clearTimeout(i),q()),window[`${p}EventListener`]("resize",$)},i=null;const m=document.body;I(()=>e.container!==!0?"add":"remove",B),e.container!==!0&&B("add"),ft(()=>{B("remove")})}return()=>{const i=Be(T.default,[w(Qt,{onScroll:S}),w(ne,{onResize:M})]),m=w("div",{class:x.value,style:k.value,ref:e.container===!0?void 0:n,tabindex:-1},i);return e.container===!0?w("div",{class:"q-layout-container overflow-hidden",ref:n},[w(ne,{onResize:Q}),w("div",{class:"absolute-full",style:P.value},[w("div",{class:"scroll",style:h.value},[m])])]):m}}});const Dt=Object.assign({name:"MainLayout"},{__name:"MainLayout",setup(e){const T=Lt(),l=vt(),a=ht();I(()=>l.name,v=>{if(v==="ReqDetails"){const d=l.params.id,C=T.rows.find(u=>u.id===d);T.tabIsOpen(d)||T.addTab({id:d,label:`\u0417\u0430\u044F\u0432\u043A\u0430 \u2116${C.num}`,name:d})}},{immediate:!0});const n=v=>{T.removeTab(v),l.path!=="/request"&&a.push("/request").catch(d=>{console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438:",d)})};return(v,d)=>{const C=bt("router-view");return se(),xe(Ht,{view:"lHh Lpr lFf"},{default:K(()=>[F(Mt,{elevated:""},{default:K(()=>[F(It,null,{default:K(()=>[F(Bt,{"inline-label":""},{default:K(()=>[F(ce,{name:"requests",label:"\u0417\u0430\u044F\u0432\u043A\u0438",to:"/request"}),F(ce,{name:"accounts",label:"\u0421\u0447\u0435\u0442\u0430",to:"/account"}),(se(!0),gt(wt,null,mt(yt(T).tabs,u=>(se(),xe(ce,{key:u.id,name:u.name,label:u.label,to:`/request/${u.id}`},{default:K(()=>[F(Tt,{flat:"",dense:"",round:"",icon:"close",class:"q-ml-xs",onClick:qt(f=>n(u.id),["prevent"])},null,8,["onClick"])]),_:2},1032,["name","label","to"]))),128))]),_:1})]),_:1})]),_:1}),F(At,null,{default:K(()=>[F(C)]),_:1})]),_:1})}}});export{Dt as default};
