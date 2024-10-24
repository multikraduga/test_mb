import{l as z,c as q,h as x,B as U,j as ne,r as M,P as j,S as ge,T as D,U as f,Z as $,a6 as Z,a7 as J,a8 as ae,$ as oe,a9 as De,V as se,aa as g,N as ve,a as pe,X as G}from"./index.e0d50eff.js";import{Q as ye,a as Me,p as h,c as we,b as A,d as Se}from"./QTable.df0aa802.js";import{u as _e,P as Ye}from"./requests.4a0ec2c7.js";import{Q as be,a as Y}from"./QForm.7506f5b7.js";import{u as xe,a as $e}from"./use-key-composition.3ede2247.js";import"./rtl.318342e2.js";import"./uid.937d8ee7.js";var k=z({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(e,{slots:t}){const o=ne(),n=q(()=>"q-td"+(e.autoWidth===!0?" q-table--col-auto-width":"")+(e.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(e.props===void 0)return x("td",{class:n.value},U(t.default));const s=o.vnode.key,a=(e.props.colsMap!==void 0?e.props.colsMap[s]:null)||e.props.col;if(a===void 0)return;const{row:i}=e.props;return x("td",{class:n.value+a.__tdClass(i),style:a.__tdStyle(i)},U(t.default))}}});const qe={__name:"RequestGrid",props:{rows:Array,columns:Array},emits:["click-btn","delete"],setup(e,{emit:t}){const o=M({descending:!1,page:1,rowsPerPage:10}),n={init:{color:"orange",textColor:"white"},waitformeeting:{color:"red",textColor:"white"},meeting:{color:"pink",textColor:"white"},default:{color:"gray",textColor:"white"}},s=a=>n[a]?n[a]:n.default;return(a,i)=>(j(),ge(Me,{rows:e.rows,columns:e.columns,"row-key":"id",pagination:o.value,"onUpdate:pagination":i[0]||(i[0]=r=>o.value=r)},{"body-cell-action":D(r=>[f(k,{props:r},{default:D(()=>[f($,{flat:"",round:"",icon:"arrow_right",onClick:u=>a.$emit("click-btn",r.row.id)},null,8,["onClick"])]),_:2},1032,["props"])]),"body-cell-delete":D(r=>[f(k,{props:r},{default:D(()=>[f($,{flat:"",round:"",icon:"delete",onClick:u=>a.$emit("delete",r.row.id)},null,8,["onClick"])]),_:2},1032,["props"])]),"body-cell-client_name":D(r=>[f(k,{props:r},{default:D(()=>[Z(J(r.row.client_name?r.row.client_name:r.row.person_fullname),1)]),_:2},1032,["props"])]),"body-cell-state":D(r=>[f(k,{props:r},{default:D(()=>[f(ye,{dense:"",color:s(r.row.state).color,"text-color":s(r.row.state).textColor},{default:D(()=>[Z(J(r.row.state),1)]),_:2},1032,["color","text-color"])]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination"]))}};var Ve=z({name:"QSpace",setup(){const e=x("div",{class:"q-space"});return()=>e}}),R=z({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:t}){const o=q(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>x(e.tag,{class:o.value},U(t.default))}}),He=z({name:"QCard",props:{...xe,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:t}){const{proxy:{$q:o}}=ne(),n=$e(e,o),s=q(()=>"q-card"+(n.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>x(e.tag,{class:s.value},U(t.default))}});const O=[-61,9,38,199,426,686,756,818,1111,1181,1210,1635,2060,2097,2192,2262,2324,2394,2456,3178];function Ce(e){return ke(e)===0}function Ie(e,t){return t<=6?31:t<=11||Ce(e)?30:29}function ke(e){const t=O.length;let o=O[0],n,s,a,i,r;if(e<o||e>=O[t-1])throw new Error("Invalid Jalaali year "+e);for(r=1;r<t&&(n=O[r],s=n-o,!(e<n));r+=1)o=n;return i=e-o,s-i<6&&(i=i-s+Oe(s+4,33)*33),a=K(K(i+1,33)-1,4),a===-1&&(a=4),a}function Oe(e,t){return~~(e/t)}function K(e,t){return e-~~(e/t)*t}const re=864e5,Te=36e5,L=6e4,le="YYYY-MM-DDTHH:mm:ss.SSSZ",Qe=/\[((?:[^\]\\]|\\]|\\)*)\]|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g,Fe=/(\[[^\]]*\])|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g,B={};function Ue(e,t){const o="("+t.days.join("|")+")",n=e+o;if(B[n]!==void 0)return B[n];const s="("+t.daysShort.join("|")+")",a="("+t.months.join("|")+")",i="("+t.monthsShort.join("|")+")",r={};let u=0;const S=e.replace(Fe,d=>{switch(u++,d){case"YY":return r.YY=u,"(-?\\d{1,2})";case"YYYY":return r.YYYY=u,"(-?\\d{1,4})";case"M":return r.M=u,"(\\d{1,2})";case"Mo":return r.M=u++,"(\\d{1,2}(st|nd|rd|th))";case"MM":return r.M=u,"(\\d{2})";case"MMM":return r.MMM=u,i;case"MMMM":return r.MMMM=u,a;case"D":return r.D=u,"(\\d{1,2})";case"Do":return r.D=u++,"(\\d{1,2}(st|nd|rd|th))";case"DD":return r.D=u,"(\\d{2})";case"H":return r.H=u,"(\\d{1,2})";case"HH":return r.H=u,"(\\d{2})";case"h":return r.h=u,"(\\d{1,2})";case"hh":return r.h=u,"(\\d{2})";case"m":return r.m=u,"(\\d{1,2})";case"mm":return r.m=u,"(\\d{2})";case"s":return r.s=u,"(\\d{1,2})";case"ss":return r.s=u,"(\\d{2})";case"S":return r.S=u,"(\\d{1})";case"SS":return r.S=u,"(\\d{2})";case"SSS":return r.S=u,"(\\d{3})";case"A":return r.A=u,"(AM|PM)";case"a":return r.a=u,"(am|pm)";case"aa":return r.aa=u,"(a\\.m\\.|p\\.m\\.)";case"ddd":return s;case"dddd":return o;case"Q":case"d":case"E":return"(\\d{1})";case"do":return u++,"(\\d{1}(st|nd|rd|th))";case"Qo":return"(1st|2nd|3rd|4th)";case"DDD":case"DDDD":return"(\\d{1,3})";case"DDDo":return u++,"(\\d{1,3}(st|nd|rd|th))";case"w":return"(\\d{1,2})";case"wo":return u++,"(\\d{1,2}(st|nd|rd|th))";case"ww":return"(\\d{2})";case"Z":return r.Z=u,"(Z|[+-]\\d{2}:\\d{2})";case"ZZ":return r.ZZ=u,"(Z|[+-]\\d{2}\\d{2})";case"X":return r.X=u,"(-?\\d+)";case"x":return r.x=u,"(-?\\d{4,})";default:return u--,d[0]==="["&&(d=d.substring(1,d.length-1)),d.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}}),l={map:r,regex:new RegExp("^"+S)};return B[n]=l,l}function ue(e,t){return e!==void 0?e:t!==void 0?t.date:De.date}function ee(e,t=""){const o=e>0?"-":"+",n=Math.abs(e),s=Math.floor(n/60),a=n%60;return o+h(s)+t+h(a)}function Ze(e,t,o){let n=e.getFullYear(),s=e.getMonth();const a=e.getDate();return t.year!==void 0&&(n+=o*t.year,delete t.year),t.month!==void 0&&(s+=o*t.month,delete t.month),e.setDate(1),e.setMonth(2),e.setFullYear(n),e.setMonth(s),e.setDate(Math.min(a,X(e))),t.date!==void 0&&(e.setDate(e.getDate()+o*t.date),delete t.date),e}function ze(e,t,o){const n=t.year!==void 0?t.year:e[`get${o}FullYear`](),s=t.month!==void 0?t.month-1:e[`get${o}Month`](),a=new Date(n,s+1,0).getDate(),i=Math.min(a,t.date!==void 0?t.date:e[`get${o}Date`]());return e[`set${o}Date`](1),e[`set${o}Month`](2),e[`set${o}FullYear`](n),e[`set${o}Month`](s),e[`set${o}Date`](i),delete t.year,delete t.month,delete t.date,e}function P(e,t,o){const n=ie(t),s=new Date(e),a=n.year!==void 0||n.month!==void 0||n.date!==void 0?Ze(s,n,o):s;for(const i in n){const r=we(i);a[`set${r}`](a[`get${r}`]()+o*n[i])}return a}function ie(e){const t={...e};return e.years!==void 0&&(t.year=e.years,delete t.years),e.months!==void 0&&(t.month=e.months,delete t.months),e.days!==void 0&&(t.date=e.days,delete t.days),e.day!==void 0&&(t.date=e.day,delete t.day),e.hour!==void 0&&(t.hours=e.hour,delete t.hour),e.minute!==void 0&&(t.minutes=e.minute,delete t.minute),e.second!==void 0&&(t.seconds=e.second,delete t.second),e.millisecond!==void 0&&(t.milliseconds=e.millisecond,delete t.millisecond),t}function de(e,t,o){const n=ie(t),s=o===!0?"UTC":"",a=new Date(e),i=n.year!==void 0||n.month!==void 0||n.date!==void 0?ze(a,n,s):a;for(const r in n){const u=r.charAt(0).toUpperCase()+r.slice(1);i[`set${s}${u}`](n[r])}return i}function Ne(e,t,o){const n=Ae(e,t,o),s=new Date(n.year,n.month===null?null:n.month-1,n.day===null?1:n.day,n.hour,n.minute,n.second,n.millisecond),a=s.getTimezoneOffset();return n.timezoneOffset===null||n.timezoneOffset===a?s:P(s,{minutes:n.timezoneOffset-a},1)}function Ae(e,t,o,n,s){const a={year:null,month:null,day:null,hour:null,minute:null,second:null,millisecond:null,timezoneOffset:null,dateHash:null,timeHash:null};if(s!==void 0&&Object.assign(a,s),e==null||e===""||typeof e!="string")return a;t===void 0&&(t=le);const i=ue(o,ae.props),r=i.months,u=i.monthsShort,{regex:S,map:l}=Ue(t,i),d=e.match(S);if(d===null)return a;let y="";if(l.X!==void 0||l.x!==void 0){const p=parseInt(d[l.X!==void 0?l.X:l.x],10);if(isNaN(p)===!0||p<0)return a;const w=new Date(p*(l.X!==void 0?1e3:1));a.year=w.getFullYear(),a.month=w.getMonth()+1,a.day=w.getDate(),a.hour=w.getHours(),a.minute=w.getMinutes(),a.second=w.getSeconds(),a.millisecond=w.getMilliseconds()}else{if(l.YYYY!==void 0)a.year=parseInt(d[l.YYYY],10);else if(l.YY!==void 0){const p=parseInt(d[l.YY],10);a.year=p<0?p:2e3+p}if(l.M!==void 0){if(a.month=parseInt(d[l.M],10),a.month<1||a.month>12)return a}else l.MMM!==void 0?a.month=u.indexOf(d[l.MMM])+1:l.MMMM!==void 0&&(a.month=r.indexOf(d[l.MMMM])+1);if(l.D!==void 0){if(a.day=parseInt(d[l.D],10),a.year===null||a.month===null||a.day<1)return a;const p=n!=="persian"?new Date(a.year,a.month,0).getDate():Ie(a.year,a.month);if(a.day>p)return a}l.H!==void 0?a.hour=parseInt(d[l.H],10)%24:l.h!==void 0&&(a.hour=parseInt(d[l.h],10)%12,(l.A&&d[l.A]==="PM"||l.a&&d[l.a]==="pm"||l.aa&&d[l.aa]==="p.m.")&&(a.hour+=12),a.hour=a.hour%24),l.m!==void 0&&(a.minute=parseInt(d[l.m],10)%60),l.s!==void 0&&(a.second=parseInt(d[l.s],10)%60),l.S!==void 0&&(a.millisecond=parseInt(d[l.S],10)*10**(3-d[l.S].length)),(l.Z!==void 0||l.ZZ!==void 0)&&(y=l.Z!==void 0?d[l.Z].replace(":",""):d[l.ZZ],a.timezoneOffset=(y[0]==="+"?-1:1)*(60*y.slice(1,3)+1*y.slice(3,5)))}return a.dateHash=h(a.year,6)+"/"+h(a.month)+"/"+h(a.day),a.timeHash=h(a.hour)+":"+h(a.minute)+":"+h(a.second)+y,a}function Re(e){return typeof e=="number"?!0:isNaN(Date.parse(e))===!1}function Be(e,t){return de(new Date,e,t)}function Ee(e){const t=new Date(e).getDay();return t===0?7:t}function Q(e){const t=new Date(e.getFullYear(),e.getMonth(),e.getDate());t.setDate(t.getDate()-(t.getDay()+6)%7+3);const o=new Date(t.getFullYear(),0,4);o.setDate(o.getDate()-(o.getDay()+6)%7+3);const n=t.getTimezoneOffset()-o.getTimezoneOffset();t.setHours(t.getHours()-n);const s=(t-o)/(re*7);return 1+Math.floor(s)}function Le(e){return e.getFullYear()*1e4+e.getMonth()*100+e.getDate()}function E(e,t){const o=new Date(e);return t===!0?Le(o):o.getTime()}function je(e,t,o,n={}){const s=E(t,n.onlyDate),a=E(o,n.onlyDate),i=E(e,n.onlyDate);return(i>s||n.inclusiveFrom===!0&&i===s)&&(i<a||n.inclusiveTo===!0&&i===a)}function Pe(e,t){return P(e,t,1)}function Xe(e,t){return P(e,t,-1)}function _(e,t,o){const n=new Date(e),s=`set${o===!0?"UTC":""}`;switch(t){case"year":case"years":n[`${s}Month`](0);case"month":case"months":n[`${s}Date`](1);case"day":case"days":case"date":n[`${s}Hours`](0);case"hour":case"hours":n[`${s}Minutes`](0);case"minute":case"minutes":n[`${s}Seconds`](0);case"second":case"seconds":n[`${s}Milliseconds`](0)}return n}function We(e,t,o){const n=new Date(e),s=`set${o===!0?"UTC":""}`;switch(t){case"year":case"years":n[`${s}Month`](11);case"month":case"months":n[`${s}Date`](X(n));case"day":case"days":case"date":n[`${s}Hours`](23);case"hour":case"hours":n[`${s}Minutes`](59);case"minute":case"minutes":n[`${s}Seconds`](59);case"second":case"seconds":n[`${s}Milliseconds`](999)}return n}function Je(e){let t=new Date(e);return Array.prototype.slice.call(arguments,1).forEach(o=>{t=Math.max(t,new Date(o))}),t}function Ge(e){let t=new Date(e);return Array.prototype.slice.call(arguments,1).forEach(o=>{t=Math.min(t,new Date(o))}),t}function T(e,t,o){return(e.getTime()-e.getTimezoneOffset()*L-(t.getTime()-t.getTimezoneOffset()*L))/o}function ce(e,t,o="days"){const n=new Date(e),s=new Date(t);switch(o){case"years":case"year":return n.getFullYear()-s.getFullYear();case"months":case"month":return(n.getFullYear()-s.getFullYear())*12+n.getMonth()-s.getMonth();case"days":case"day":case"date":return T(_(n,"day"),_(s,"day"),re);case"hours":case"hour":return T(_(n,"hour"),_(s,"hour"),Te);case"minutes":case"minute":return T(_(n,"minute"),_(s,"minute"),L);case"seconds":case"second":return T(_(n,"second"),_(s,"second"),1e3)}}function F(e){return ce(e,_(e,"year"),"days")+1}function Ke(e){return oe(e)===!0?"date":typeof e=="number"?"number":"string"}function et(e,t,o){const n=new Date(e);if(t){const s=new Date(t);if(n<s)return s}if(o){const s=new Date(o);if(n>s)return s}return n}function tt(e,t,o){const n=new Date(e),s=new Date(t);if(o===void 0)return n.getTime()===s.getTime();switch(o){case"second":case"seconds":if(n.getSeconds()!==s.getSeconds())return!1;case"minute":case"minutes":if(n.getMinutes()!==s.getMinutes())return!1;case"hour":case"hours":if(n.getHours()!==s.getHours())return!1;case"day":case"days":case"date":if(n.getDate()!==s.getDate())return!1;case"month":case"months":if(n.getMonth()!==s.getMonth())return!1;case"year":case"years":if(n.getFullYear()!==s.getFullYear())return!1;break;default:throw new Error(`date isSameDate unknown unit ${o}`)}return!0}function X(e){return new Date(e.getFullYear(),e.getMonth()+1,0).getDate()}function b(e){if(e>=11&&e<=13)return`${e}th`;switch(e%10){case 1:return`${e}st`;case 2:return`${e}nd`;case 3:return`${e}rd`}return`${e}th`}const te={YY(e,t,o){const n=this.YYYY(e,t,o)%100;return n>=0?h(n):"-"+h(Math.abs(n))},YYYY(e,t,o){return o!=null?o:e.getFullYear()},M(e){return e.getMonth()+1},Mo(e){return b(e.getMonth()+1)},MM(e){return h(e.getMonth()+1)},MMM(e,t){return t.monthsShort[e.getMonth()]},MMMM(e,t){return t.months[e.getMonth()]},Q(e){return Math.ceil((e.getMonth()+1)/3)},Qo(e){return b(this.Q(e))},D(e){return e.getDate()},Do(e){return b(e.getDate())},DD(e){return h(e.getDate())},DDD(e){return F(e)},DDDo(e){return b(F(e))},DDDD(e){return h(F(e),3)},d(e){return e.getDay()},do(e){return b(e.getDay())},dd(e,t){return t.days[e.getDay()].slice(0,2)},ddd(e,t){return t.daysShort[e.getDay()]},dddd(e,t){return t.days[e.getDay()]},E(e){return e.getDay()||7},w(e){return Q(e)},wo(e){return b(Q(e))},ww(e){return h(Q(e))},H(e){return e.getHours()},HH(e){return h(e.getHours())},h(e){const t=e.getHours();return t===0?12:t>12?t%12:t},hh(e){return h(this.h(e))},m(e){return e.getMinutes()},mm(e){return h(e.getMinutes())},s(e){return e.getSeconds()},ss(e){return h(e.getSeconds())},S(e){return Math.floor(e.getMilliseconds()/100)},SS(e){return h(Math.floor(e.getMilliseconds()/10))},SSS(e){return h(e.getMilliseconds(),3)},A(e){return e.getHours()<12?"AM":"PM"},a(e){return e.getHours()<12?"am":"pm"},aa(e){return e.getHours()<12?"a.m.":"p.m."},Z(e,t,o,n){const s=n==null?e.getTimezoneOffset():n;return ee(s,":")},ZZ(e,t,o,n){const s=n==null?e.getTimezoneOffset():n;return ee(s)},X(e){return Math.floor(e.getTime()/1e3)},x(e){return e.getTime()}};function nt(e,t,o,n,s){if(e!==0&&!e||e===1/0||e===-1/0)return;const a=new Date(e);if(isNaN(a))return;t===void 0&&(t=le);const i=ue(o,ae.props);return t.replace(Qe,(r,u)=>r in te?te[r](a,i,n,s):u===void 0?r:u.split("\\]").join("]"))}function at(e){return oe(e)===!0?new Date(e.getTime()):e}var ot={isValid:Re,extractDate:Ne,buildDate:Be,getDayOfWeek:Ee,getWeekOfYear:Q,isBetweenDates:je,addToDate:Pe,subtractFromDate:Xe,adjustDate:de,startOfDate:_,endOfDate:We,getMaxDate:Je,getMinDate:Ge,getDateDiff:ce,getDayOfYear:F,inferDateFormat:Ke,getDateBetween:et,isSameDate:tt,daysInMonth:X,formatDate:nt,clone:at};const st={class:"row"},rt={class:"col-12 col-md-6"},lt={class:"col-12 col-md-6"},ut={class:"col-12 col-md-6"},it={class:"col-12 col-md-6"},dt={class:"col-12 col-md-6"},ct={class:"col-12 col-md-6"},mt={class:"col-12 col-md-6"},ft={class:"row"},ht={class:"col-12 col-md-6"},gt={class:"col-12 col-md-6"},Dt={class:"col-12 col-md-6"},vt={class:"col-12 col-md-6"},pt={__name:"RequestForm",props:{show:Boolean},emits:["add","close"],setup(e,{emit:t}){const o=M(5),n=t,s=e,a=q(()=>s.show),i=["init","waitformeeting","meeting","waitforcoownersdata","waitforuploaddocs","process","success","decline","client","archive","double","lol"],r=["\u0418\u041F","OOO"],u=["\u041D\u0430\u043B\u043E\u0433\u043E\u0432\u0430\u044F \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F","SMM - \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435","\u041F\u043E\u0438\u0441\u043A \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u043E\u0432"],S=M(""),l=M(""),d=M(""),y=M(""),p=M(""),w=M(""),V=M(""),H=M(""),N=M(""),C=M(""),I=M(""),me=()=>{S.value="",l.value="",d.value="",y.value="",p.value="",w.value="",V.value="",H.value="",C.value="",I.value=""},fe=()=>{n("close")},W=()=>{me(),fe()},he=()=>{const v={},c=Date.now();o.value=o.value+1,v.id=String(o.value),v.num=o.value+5e3,v.dadd=ot.formatDate(c,"YYYY-MM-DDTHH:mm:ss.SSS"),v.state=S.value,v.lastUpd=v.dadd,v.stg=l.value,v.inn=d.value,v.company_name=I.value,v.person_phone=p.value,v.company_type=N.value,v.person_fullname=w.value,v.person_email=V.value,v.extra={partner:{client_name:y.value,inn:C.value},crm_source_type:H.value},n("add",v),W()};return(v,c)=>(j(),se("div",null,[f(Se,{modelValue:a.value,"onUpdate:modelValue":c[11]||(c[11]=m=>a.value=m)},{default:D(()=>[f(He,null,{default:D(()=>[f(R,{class:"row items-center q-pb-none"},{default:D(()=>[c[12]||(c[12]=g("div",{class:"text-h6"},"\u0414\u0430\u043D\u043D\u044B\u0435",-1)),f(Ve)]),_:1}),f(be,{onSubmit:he,onReset:W,class:"q-gutter-md"},{default:D(()=>[f(R,null,{default:D(()=>[g("div",st,[g("div",rt,[f(Y,{class:"q-ma-xs",label:"\u0424\u0418\u041E",outlined:"",modelValue:w.value,"onUpdate:modelValue":c[0]||(c[0]=m=>w.value=m)},null,8,["modelValue"])]),g("div",lt,[f(Y,{class:"q-ma-xs",label:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D*",outlined:"",type:"tel",modelValue:p.value,"onUpdate:modelValue":c[1]||(c[1]=m=>p.value=m),rules:[m=>!!m||"\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435!"],mask:"+7 (###) ###-##-##"},null,8,["modelValue","rules"])]),g("div",ut,[f(Y,{class:"q-ma-xs",label:"Email",outlined:"",modelValue:V.value,"onUpdate:modelValue":c[2]||(c[2]=m=>V.value=m)},null,8,["modelValue"])]),g("div",it,[f(Y,{class:"q-ma-xs",label:"\u0418\u041D\u041D",outlined:"",modelValue:d.value,"onUpdate:modelValue":c[3]||(c[3]=m=>d.value=m),counter:"",maxlength:"12",mask:"############"},null,8,["modelValue"])]),g("div",dt,[f(A,{class:"q-ma-xs",label:"\u0421\u0442\u0430\u0442\u0443\u0441*",outlined:"",modelValue:S.value,"onUpdate:modelValue":c[4]||(c[4]=m=>S.value=m),options:i,rules:[m=>!!m||"\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435!"]},null,8,["modelValue","rules"])]),g("div",ct,[f(A,{class:"q-ma-xs",label:"\u0422\u0438\u043F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438",outlined:"",modelValue:N.value,"onUpdate:modelValue":c[5]||(c[5]=m=>N.value=m),options:r},null,8,["modelValue"])]),g("div",mt,[f(A,{class:"q-ma-xs",label:"\u041F\u0440\u043E\u0434\u0443\u043A\u0442*",rules:[m=>!!m||"\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435!"],outlined:"",modelValue:l.value,"onUpdate:modelValue":c[6]||(c[6]=m=>l.value=m),options:u},null,8,["rules","modelValue"])])]),c[13]||(c[13]=g("h5",null,"\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435",-1)),g("div",ft,[g("div",ht,[f(Y,{class:"q-ma-xs",label:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438*",outlined:"",modelValue:I.value,"onUpdate:modelValue":c[7]||(c[7]=m=>I.value=m),rules:[m=>!!m||"\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435!"]},null,8,["modelValue","rules"])]),g("div",gt,[f(Y,{class:"q-ma-xs",label:"\u041A\u043B\u0438\u0435\u043D\u0442*",outlined:"",modelValue:y.value,"onUpdate:modelValue":c[8]||(c[8]=m=>y.value=m),rules:[m=>!!m||"\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435!"]},null,8,["modelValue","rules"])]),g("div",Dt,[f(Y,{class:"q-ma-xs",label:"\u0418\u041D\u041D \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0430",outlined:"",counter:"",maxlength:"12",mask:"############",modelValue:C.value,"onUpdate:modelValue":c[9]||(c[9]=m=>C.value=m)},null,8,["modelValue"])]),g("div",vt,[f(Y,{class:"q-ma-xs",label:"CRM",outlined:"",modelValue:H.value,"onUpdate:modelValue":c[10]||(c[10]=m=>H.value=m)},null,8,["modelValue"])])])]),_:1}),f(R,null,{default:D(()=>[f($,{color:"primary",class:"q-ml-md",size:"sm",type:"submit"},{default:D(()=>c[14]||(c[14]=[Z("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")])),_:1}),f($,{color:"grey",class:"q-ml-md",size:"sm",type:"reset"},{default:D(()=>c[15]||(c[15]=[Z("\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}},yt={class:"q-pa-md d-flex flex-column"},Mt={class:"q-mb-md"},qt={__name:"RequestPage",setup(e){const t=_e(),o=q(()=>[...t.rows]),n=l=>{t.addNewReq(l)},s=[{name:"num",label:"\u2116 \u0417\u0430\u044F\u0432\u043A\u0438",field:"num"},{name:"stg",label:"\u041F\u0440\u043E\u0434\u0443\u043A\u0442",field:l=>Array.isArray(l.stg)?l.stg.join(", "):l.stg},{name:"dadd",label:"\u0414\u0430\u0442\u0430",field:l=>a(l.dadd)},{name:"client_name",label:"\u041A\u043B\u0438\u0435\u043D\u0442",field:"client_name"},{name:"state",label:"\u0421\u0442\u0430\u0442\u0443\u0441",field:"state"},{name:"person_phone",label:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D",field:"person_phone"},{name:"delete",label:"",field:"id"},{name:"action",label:"\u0414\u0435\u0442\u0430\u043B\u0438",field:"id"}],a=l=>{const d=new Date(l),y={year:"numeric",month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"};return d.toLocaleDateString("ru-RU",y)},i=()=>{t.isShow=!1},r=ve();async function u(l){t.details[l]||await t.getDetails(l),r.push(`/request/${l}`)}const S=l=>{t.removeRow(l),t.tabIsOpen(l)&&t.removeTab(l),Ye.setItem("tabs",t.tabs)};return pe(()=>{t.rows.length<=0&&t.fetchData()}),(l,d)=>(j(),se("div",yt,[g("div",Mt,[f($,{color:"grey-4","text-color":"black",glossy:"",unelevated:"",icon:"add",label:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443",onClick:d[0]||(d[0]=y=>G(t).isShow=!0)})]),g("div",null,[f(qe,{columns:s,rows:o.value,onClickBtn:u,onDelete:S},null,8,["rows"])]),f(pt,{show:G(t).isShow,onAdd:n,onClose:i},null,8,["show"])]))}};export{qt as default};
