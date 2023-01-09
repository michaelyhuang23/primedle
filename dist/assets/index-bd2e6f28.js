(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Ma(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}function Fa(e){if(H(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=de(r)?Cl(r):Fa(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(de(e))return e;if(ie(e))return e}}const Al=/;(?![^(]*\))/g,Ol=/:([^]+)/,Pl=/\/\*.*?\*\//gs;function Cl(e){const t={};return e.replace(Pl,"").split(Al).forEach(n=>{if(n){const r=n.split(Ol);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function jn(e){let t="";if(de(e))t=e;else if(H(e))for(let n=0;n<e.length;n++){const r=jn(e[n]);r&&(t+=r+" ")}else if(ie(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Sl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Rl=Ma(Sl);function Lo(e){return!!e||e===""}const gn=e=>de(e)?e:e==null?"":H(e)||ie(e)&&(e.toString===zo||!B(e.toString))?JSON.stringify(e,jo,2):String(e),jo=(e,t)=>t&&t.__v_isRef?jo(e,t.value):Yt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:$o(t)?{[`Set(${t.size})`]:[...t.values()]}:ie(t)&&!H(t)&&!Ho(t)?String(t):t,ae={},Wt=[],Be=()=>{},Il=()=>!1,Tl=/^on[^a-z]/,Ar=e=>Tl.test(e),La=e=>e.startsWith("onUpdate:"),we=Object.assign,ja=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Nl=Object.prototype.hasOwnProperty,q=(e,t)=>Nl.call(e,t),H=Array.isArray,Yt=e=>Or(e)==="[object Map]",$o=e=>Or(e)==="[object Set]",B=e=>typeof e=="function",de=e=>typeof e=="string",$a=e=>typeof e=="symbol",ie=e=>e!==null&&typeof e=="object",Do=e=>ie(e)&&B(e.then)&&B(e.catch),zo=Object.prototype.toString,Or=e=>zo.call(e),Ml=e=>Or(e).slice(8,-1),Ho=e=>Or(e)==="[object Object]",Da=e=>de(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,or=Ma(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Pr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Fl=/-(\w)/g,Je=Pr(e=>e.replace(Fl,(t,n)=>n?n.toUpperCase():"")),Ll=/\B([A-Z])/g,an=Pr(e=>e.replace(Ll,"-$1").toLowerCase()),Cr=Pr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Br=Pr(e=>e?`on${Cr(e)}`:""),En=(e,t)=>!Object.is(e,t),Ur=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},pr=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Bo=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let yi;const jl=()=>yi||(yi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ve;class $l{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Ve,!t&&Ve&&(this.index=(Ve.scopes||(Ve.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Ve;try{return Ve=this,t()}finally{Ve=n}}}on(){Ve=this}off(){Ve=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this.active=!1}}}function Dl(e,t=Ve){t&&t.active&&t.effects.push(e)}const za=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Uo=e=>(e.w&bt)>0,Ko=e=>(e.n&bt)>0,zl=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=bt},Hl=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Uo(a)&&!Ko(a)?a.delete(e):t[n++]=a,a.w&=~bt,a.n&=~bt}t.length=n}},na=new WeakMap;let mn=0,bt=1;const ra=30;let Le;const It=Symbol(""),aa=Symbol("");class Ha{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Dl(this,r)}run(){if(!this.active)return this.fn();let t=Le,n=gt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Le,Le=this,gt=!0,bt=1<<++mn,mn<=ra?zl(this):_i(this),this.fn()}finally{mn<=ra&&Hl(this),bt=1<<--mn,Le=this.parent,gt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Le===this?this.deferStop=!0:this.active&&(_i(this),this.onStop&&this.onStop(),this.active=!1)}}function _i(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let gt=!0;const Wo=[];function on(){Wo.push(gt),gt=!1}function sn(){const e=Wo.pop();gt=e===void 0?!0:e}function Se(e,t,n){if(gt&&Le){let r=na.get(e);r||na.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=za()),Yo(a)}}function Yo(e,t){let n=!1;mn<=ra?Ko(e)||(e.n|=bt,n=!Uo(e)):n=!e.has(Le),n&&(e.add(Le),Le.deps.push(e))}function nt(e,t,n,r,a,i){const o=na.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&H(e)){const l=Bo(r);o.forEach((c,f)=>{(f==="length"||f>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":H(e)?Da(n)&&s.push(o.get("length")):(s.push(o.get(It)),Yt(e)&&s.push(o.get(aa)));break;case"delete":H(e)||(s.push(o.get(It)),Yt(e)&&s.push(o.get(aa)));break;case"set":Yt(e)&&s.push(o.get(It));break}if(s.length===1)s[0]&&ia(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);ia(za(l))}}function ia(e,t){const n=H(e)?e:[...e];for(const r of n)r.computed&&wi(r);for(const r of n)r.computed||wi(r)}function wi(e,t){(e!==Le||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Bl=Ma("__proto__,__v_isRef,__isVue"),qo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter($a)),Ul=Ba(),Kl=Ba(!1,!0),Wl=Ba(!0),xi=Yl();function Yl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=V(this);for(let i=0,o=this.length;i<o;i++)Se(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(V)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){on();const r=V(this)[t].apply(this,n);return sn(),r}}),e}function Ba(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?ff:Jo:t?Qo:Xo).get(r))return r;const o=H(r);if(!e&&o&&q(xi,a))return Reflect.get(xi,a,i);const s=Reflect.get(r,a,i);return($a(a)?qo.has(a):Bl(a))||(e||Se(r,"get",a),t)?s:be(s)?o&&Da(a)?s:s.value:ie(s)?e?Zo(s):$n(s):s}}const ql=Vo(),Vl=Vo(!0);function Vo(e=!1){return function(n,r,a,i){let o=n[r];if(Jt(o)&&be(o)&&!be(a))return!1;if(!e&&(!hr(a)&&!Jt(a)&&(o=V(o),a=V(a)),!H(n)&&be(o)&&!be(a)))return o.value=a,!0;const s=H(n)&&Da(r)?Number(r)<n.length:q(n,r),l=Reflect.set(n,r,a,i);return n===V(i)&&(s?En(a,o)&&nt(n,"set",r,a):nt(n,"add",r,a)),l}}function Gl(e,t){const n=q(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&nt(e,"delete",t,void 0),r}function Xl(e,t){const n=Reflect.has(e,t);return(!$a(t)||!qo.has(t))&&Se(e,"has",t),n}function Ql(e){return Se(e,"iterate",H(e)?"length":It),Reflect.ownKeys(e)}const Go={get:Ul,set:ql,deleteProperty:Gl,has:Xl,ownKeys:Ql},Jl={get:Wl,set(e,t){return!0},deleteProperty(e,t){return!0}},Zl=we({},Go,{get:Kl,set:Vl}),Ua=e=>e,Sr=e=>Reflect.getPrototypeOf(e);function Wn(e,t,n=!1,r=!1){e=e.__v_raw;const a=V(e),i=V(t);n||(t!==i&&Se(a,"get",t),Se(a,"get",i));const{has:o}=Sr(a),s=r?Ua:n?Ya:An;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function Yn(e,t=!1){const n=this.__v_raw,r=V(n),a=V(e);return t||(e!==a&&Se(r,"has",e),Se(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function qn(e,t=!1){return e=e.__v_raw,!t&&Se(V(e),"iterate",It),Reflect.get(e,"size",e)}function ki(e){e=V(e);const t=V(this);return Sr(t).has.call(t,e)||(t.add(e),nt(t,"add",e,e)),this}function Ei(e,t){t=V(t);const n=V(this),{has:r,get:a}=Sr(n);let i=r.call(n,e);i||(e=V(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?En(t,o)&&nt(n,"set",e,t):nt(n,"add",e,t),this}function Ai(e){const t=V(this),{has:n,get:r}=Sr(t);let a=n.call(t,e);a||(e=V(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&nt(t,"delete",e,void 0),i}function Oi(){const e=V(this),t=e.size!==0,n=e.clear();return t&&nt(e,"clear",void 0,void 0),n}function Vn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=V(o),l=t?Ua:e?Ya:An;return!e&&Se(s,"iterate",It),o.forEach((c,f)=>r.call(a,l(c),l(f),i))}}function Gn(e,t,n){return function(...r){const a=this.__v_raw,i=V(a),o=Yt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),f=n?Ua:t?Ya:An;return!t&&Se(i,"iterate",l?aa:It),{next(){const{value:d,done:p}=c.next();return p?{value:d,done:p}:{value:s?[f(d[0]),f(d[1])]:f(d),done:p}},[Symbol.iterator](){return this}}}}function ct(e){return function(...t){return e==="delete"?!1:this}}function ef(){const e={get(i){return Wn(this,i)},get size(){return qn(this)},has:Yn,add:ki,set:Ei,delete:Ai,clear:Oi,forEach:Vn(!1,!1)},t={get(i){return Wn(this,i,!1,!0)},get size(){return qn(this)},has:Yn,add:ki,set:Ei,delete:Ai,clear:Oi,forEach:Vn(!1,!0)},n={get(i){return Wn(this,i,!0)},get size(){return qn(this,!0)},has(i){return Yn.call(this,i,!0)},add:ct("add"),set:ct("set"),delete:ct("delete"),clear:ct("clear"),forEach:Vn(!0,!1)},r={get(i){return Wn(this,i,!0,!0)},get size(){return qn(this,!0)},has(i){return Yn.call(this,i,!0)},add:ct("add"),set:ct("set"),delete:ct("delete"),clear:ct("clear"),forEach:Vn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Gn(i,!1,!1),n[i]=Gn(i,!0,!1),t[i]=Gn(i,!1,!0),r[i]=Gn(i,!0,!0)}),[e,n,t,r]}const[tf,nf,rf,af]=ef();function Ka(e,t){const n=t?e?af:rf:e?nf:tf;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(q(n,a)&&a in r?n:r,a,i)}const of={get:Ka(!1,!1)},sf={get:Ka(!1,!0)},lf={get:Ka(!0,!1)},Xo=new WeakMap,Qo=new WeakMap,Jo=new WeakMap,ff=new WeakMap;function cf(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function uf(e){return e.__v_skip||!Object.isExtensible(e)?0:cf(Ml(e))}function $n(e){return Jt(e)?e:Wa(e,!1,Go,of,Xo)}function df(e){return Wa(e,!1,Zl,sf,Qo)}function Zo(e){return Wa(e,!0,Jl,lf,Jo)}function Wa(e,t,n,r,a){if(!ie(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=uf(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function qt(e){return Jt(e)?qt(e.__v_raw):!!(e&&e.__v_isReactive)}function Jt(e){return!!(e&&e.__v_isReadonly)}function hr(e){return!!(e&&e.__v_isShallow)}function es(e){return qt(e)||Jt(e)}function V(e){const t=e&&e.__v_raw;return t?V(t):e}function ts(e){return pr(e,"__v_skip",!0),e}const An=e=>ie(e)?$n(e):e,Ya=e=>ie(e)?Zo(e):e;function ns(e){gt&&Le&&(e=V(e),Yo(e.dep||(e.dep=za())))}function rs(e,t){e=V(e),e.dep&&ia(e.dep)}function be(e){return!!(e&&e.__v_isRef===!0)}function rt(e){return as(e,!1)}function mf(e){return as(e,!0)}function as(e,t){return be(e)?e:new pf(e,t)}class pf{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:V(t),this._value=n?t:An(t)}get value(){return ns(this),this._value}set value(t){const n=this.__v_isShallow||hr(t)||Jt(t);t=n?t:V(t),En(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:An(t),rs(this))}}function fe(e){return be(e)?e.value:e}const hf={get:(e,t,n)=>fe(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return be(a)&&!be(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function is(e){return qt(e)?e:new Proxy(e,hf)}var os;class gf{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[os]=!1,this._dirty=!0,this.effect=new Ha(t,()=>{this._dirty||(this._dirty=!0,rs(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=V(this);return ns(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}os="__v_isReadonly";function vf(e,t,n=!1){let r,a;const i=B(e);return i?(r=e,a=Be):(r=e.get,a=e.set),new gf(r,a,i||!a,n)}function vt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Rr(i,t,n)}return a}function Ue(e,t,n,r){if(B(e)){const i=vt(e,t,n,r);return i&&Do(i)&&i.catch(o=>{Rr(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Ue(e[i],t,n,r));return a}function Rr(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){vt(l,null,10,[e,o,s]);return}}bf(e,n,a,r)}function bf(e,t,n,r=!0){console.error(e)}let On=!1,oa=!1;const ve=[];let Xe=0;const Vt=[];let et=null,Pt=0;const ss=Promise.resolve();let qa=null;function Va(e){const t=qa||ss;return e?t.then(this?e.bind(this):e):t}function yf(e){let t=Xe+1,n=ve.length;for(;t<n;){const r=t+n>>>1;Pn(ve[r])<e?t=r+1:n=r}return t}function Ga(e){(!ve.length||!ve.includes(e,On&&e.allowRecurse?Xe+1:Xe))&&(e.id==null?ve.push(e):ve.splice(yf(e.id),0,e),ls())}function ls(){!On&&!oa&&(oa=!0,qa=ss.then(cs))}function _f(e){const t=ve.indexOf(e);t>Xe&&ve.splice(t,1)}function wf(e){H(e)?Vt.push(...e):(!et||!et.includes(e,e.allowRecurse?Pt+1:Pt))&&Vt.push(e),ls()}function Pi(e,t=On?Xe+1:0){for(;t<ve.length;t++){const n=ve[t];n&&n.pre&&(ve.splice(t,1),t--,n())}}function fs(e){if(Vt.length){const t=[...new Set(Vt)];if(Vt.length=0,et){et.push(...t);return}for(et=t,et.sort((n,r)=>Pn(n)-Pn(r)),Pt=0;Pt<et.length;Pt++)et[Pt]();et=null,Pt=0}}const Pn=e=>e.id==null?1/0:e.id,xf=(e,t)=>{const n=Pn(e)-Pn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function cs(e){oa=!1,On=!0,ve.sort(xf);const t=Be;try{for(Xe=0;Xe<ve.length;Xe++){const n=ve[Xe];n&&n.active!==!1&&vt(n,null,14)}}finally{Xe=0,ve.length=0,fs(),On=!1,qa=null,(ve.length||Vt.length)&&cs()}}function kf(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ae;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:p}=r[f]||ae;p&&(a=n.map(g=>de(g)?g.trim():g)),d&&(a=n.map(Bo))}let s,l=r[s=Br(t)]||r[s=Br(Je(t))];!l&&i&&(l=r[s=Br(an(t))]),l&&Ue(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Ue(c,e,6,a)}}function us(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!B(e)){const l=c=>{const f=us(c,t,!0);f&&(s=!0,we(o,f))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(ie(e)&&r.set(e,null),null):(H(i)?i.forEach(l=>o[l]=null):we(o,i),ie(e)&&r.set(e,o),o)}function Ir(e,t){return!e||!Ar(t)?!1:(t=t.slice(2).replace(/Once$/,""),q(e,t[0].toLowerCase()+t.slice(1))||q(e,an(t))||q(e,t))}let De=null,Tr=null;function gr(e){const t=De;return De=e,Tr=e&&e.type.__scopeId||null,t}function ds(e){Tr=e}function ms(){Tr=null}function sa(e,t=De,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Li(-1);const i=gr(t);let o;try{o=e(...a)}finally{gr(i),r._d&&Li(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Kr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:f,renderCache:d,data:p,setupState:g,ctx:A,inheritAttrs:S}=e;let F,b;const w=gr(e);try{if(n.shapeFlag&4){const D=a||r;F=Ge(f.call(D,D,d,i,g,p,A)),b=l}else{const D=t;F=Ge(D.length>1?D(i,{attrs:l,slots:s,emit:c}):D(i,null)),b=t.props?l:Ef(l)}}catch(D){bn.length=0,Rr(D,e,1),F=pe(Mt)}let O=F;if(b&&S!==!1){const D=Object.keys(b),{shapeFlag:K}=O;D.length&&K&7&&(o&&D.some(La)&&(b=Af(b,o)),O=Zt(O,b))}return n.dirs&&(O=Zt(O),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),F=O,gr(w),F}const Ef=e=>{let t;for(const n in e)(n==="class"||n==="style"||Ar(n))&&((t||(t={}))[n]=e[n]);return t},Af=(e,t)=>{const n={};for(const r in e)(!La(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Of(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ci(r,o,c):!!o;if(l&8){const f=t.dynamicProps;for(let d=0;d<f.length;d++){const p=f[d];if(o[p]!==r[p]&&!Ir(c,p))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Ci(r,o,c):!0:!!o;return!1}function Ci(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Ir(n,i))return!0}return!1}function Pf({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Cf=e=>e.__isSuspense;function Sf(e,t){t&&t.pendingBranch?H(e)?t.effects.push(...e):t.effects.push(e):wf(e)}function sr(e,t){if(ge){let n=ge.provides;const r=ge.parent&&ge.parent.provides;r===n&&(n=ge.provides=Object.create(r)),n[e]=t}}function tt(e,t,n=!1){const r=ge||De;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&B(t)?t.call(r.proxy):t}}const Xn={};function Gt(e,t,n){return ps(e,t,n)}function ps(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=ae){const s=ge;let l,c=!1,f=!1;if(be(e)?(l=()=>e.value,c=hr(e)):qt(e)?(l=()=>e,r=!0):H(e)?(f=!0,c=e.some(O=>qt(O)||hr(O)),l=()=>e.map(O=>{if(be(O))return O.value;if(qt(O))return Bt(O);if(B(O))return vt(O,s,2)})):B(e)?t?l=()=>vt(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return d&&d(),Ue(e,s,3,[p])}:l=Be,t&&r){const O=l;l=()=>Bt(O())}let d,p=O=>{d=b.onStop=()=>{vt(O,s,4)}},g;if(Rn)if(p=Be,t?n&&Ue(t,s,3,[l(),f?[]:void 0,p]):l(),a==="sync"){const O=xc();g=O.__watcherHandles||(O.__watcherHandles=[])}else return Be;let A=f?new Array(e.length).fill(Xn):Xn;const S=()=>{if(b.active)if(t){const O=b.run();(r||c||(f?O.some((D,K)=>En(D,A[K])):En(O,A)))&&(d&&d(),Ue(t,s,3,[O,A===Xn?void 0:f&&A[0]===Xn?[]:A,p]),A=O)}else b.run()};S.allowRecurse=!!t;let F;a==="sync"?F=S:a==="post"?F=()=>Ee(S,s&&s.suspense):(S.pre=!0,s&&(S.id=s.uid),F=()=>Ga(S));const b=new Ha(l,F);t?n?S():A=b.run():a==="post"?Ee(b.run.bind(b),s&&s.suspense):b.run();const w=()=>{b.stop(),s&&s.scope&&ja(s.scope.effects,b)};return g&&g.push(w),w}function Rf(e,t,n){const r=this.proxy,a=de(e)?e.includes(".")?hs(r,e):()=>r[e]:e.bind(r,r);let i;B(t)?i=t:(i=t.handler,n=t);const o=ge;en(this);const s=ps(a,i.bind(r),n);return o?en(o):Tt(),s}function hs(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function Bt(e,t){if(!ie(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),be(e))Bt(e.value,t);else if(H(e))for(let n=0;n<e.length;n++)Bt(e[n],t);else if($o(e)||Yt(e))e.forEach(n=>{Bt(n,t)});else if(Ho(e))for(const n in e)Bt(e[n],t);return e}function Dn(e){return B(e)?{setup:e,name:e.name}:e}const lr=e=>!!e.type.__asyncLoader,gs=e=>e.type.__isKeepAlive;function If(e,t){vs(e,"a",t)}function Tf(e,t){vs(e,"da",t)}function vs(e,t,n=ge){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Nr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)gs(a.parent.vnode)&&Nf(r,t,n,a),a=a.parent}}function Nf(e,t,n,r){const a=Nr(t,e,r,!0);bs(()=>{ja(r[t],a)},n)}function Nr(e,t,n=ge,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;on(),en(n);const s=Ue(t,n,e,o);return Tt(),sn(),s});return r?a.unshift(i):a.push(i),i}}const st=e=>(t,n=ge)=>(!Rn||e==="sp")&&Nr(e,(...r)=>t(...r),n),Mf=st("bm"),Ff=st("m"),Lf=st("bu"),jf=st("u"),$f=st("bum"),bs=st("um"),Df=st("sp"),zf=st("rtg"),Hf=st("rtc");function Bf(e,t=ge){Nr("ec",e,t)}function Et(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(on(),Ue(l,n,8,[e.el,s,e,t]),sn())}}const ys="components";function _s(e,t){return Kf(ys,e,!0,t)||e}const Uf=Symbol();function Kf(e,t,n=!0,r=!1){const a=De||ge;if(a){const i=a.type;if(e===ys){const s=yc(i,!1);if(s&&(s===t||s===Je(t)||s===Cr(Je(t))))return i}const o=Si(a[e]||i[e],t)||Si(a.appContext[e],t);return!o&&r?i:o}}function Si(e,t){return e&&(e[t]||e[Je(t)]||e[Cr(Je(t))])}function ws(e,t,n,r){let a;const i=n&&n[r];if(H(e)||de(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(ie(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const la=e=>e?Ts(e)?Za(e)||e.proxy:la(e.parent):null,vn=we(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>la(e.parent),$root:e=>la(e.root),$emit:e=>e.emit,$options:e=>Xa(e),$forceUpdate:e=>e.f||(e.f=()=>Ga(e.update)),$nextTick:e=>e.n||(e.n=Va.bind(e.proxy)),$watch:e=>Rf.bind(e)}),Wr=(e,t)=>e!==ae&&!e.__isScriptSetup&&q(e,t),Wf={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(Wr(r,t))return o[t]=1,r[t];if(a!==ae&&q(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&q(c,t))return o[t]=3,i[t];if(n!==ae&&q(n,t))return o[t]=4,n[t];fa&&(o[t]=0)}}const f=vn[t];let d,p;if(f)return t==="$attrs"&&Se(e,"get",t),f(e);if((d=s.__cssModules)&&(d=d[t]))return d;if(n!==ae&&q(n,t))return o[t]=4,n[t];if(p=l.config.globalProperties,q(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return Wr(a,t)?(a[t]=n,!0):r!==ae&&q(r,t)?(r[t]=n,!0):q(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==ae&&q(e,o)||Wr(t,o)||(s=i[0])&&q(s,o)||q(r,o)||q(vn,o)||q(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:q(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let fa=!0;function Yf(e){const t=Xa(e),n=e.proxy,r=e.ctx;fa=!1,t.beforeCreate&&Ri(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:f,beforeMount:d,mounted:p,beforeUpdate:g,updated:A,activated:S,deactivated:F,beforeDestroy:b,beforeUnmount:w,destroyed:O,unmounted:D,render:K,renderTracked:re,renderTriggered:se,errorCaptured:Oe,serverPrefetch:ye,expose:Ie,inheritAttrs:ft,components:We,directives:jt,filters:xt}=t;if(c&&qf(c,r,null,e.appContext.config.unwrapInjectedRef),o)for(const Z in o){const Q=o[Z];B(Q)&&(r[Z]=Q.bind(n))}if(a){const Z=a.call(n,n);ie(Z)&&(e.data=$n(Z))}if(fa=!0,i)for(const Z in i){const Q=i[Z],Te=B(Q)?Q.bind(n,n):B(Q.get)?Q.get.bind(n,n):Be,kt=!B(Q)&&B(Q.set)?Q.set.bind(n):Be,Ne=X({get:Te,set:kt});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>Ne.value,set:xe=>Ne.value=xe})}if(s)for(const Z in s)xs(s[Z],r,n,Z);if(l){const Z=B(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(Q=>{sr(Q,Z[Q])})}f&&Ri(f,e,"c");function ce(Z,Q){H(Q)?Q.forEach(Te=>Z(Te.bind(n))):Q&&Z(Q.bind(n))}if(ce(Mf,d),ce(Ff,p),ce(Lf,g),ce(jf,A),ce(If,S),ce(Tf,F),ce(Bf,Oe),ce(Hf,re),ce(zf,se),ce($f,w),ce(bs,D),ce(Df,ye),H(Ie))if(Ie.length){const Z=e.exposed||(e.exposed={});Ie.forEach(Q=>{Object.defineProperty(Z,Q,{get:()=>n[Q],set:Te=>n[Q]=Te})})}else e.exposed||(e.exposed={});K&&e.render===Be&&(e.render=K),ft!=null&&(e.inheritAttrs=ft),We&&(e.components=We),jt&&(e.directives=jt)}function qf(e,t,n=Be,r=!1){H(e)&&(e=ca(e));for(const a in e){const i=e[a];let o;ie(i)?"default"in i?o=tt(i.from||a,i.default,!0):o=tt(i.from||a):o=tt(i),be(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function Ri(e,t,n){Ue(H(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function xs(e,t,n,r){const a=r.includes(".")?hs(n,r):()=>n[r];if(de(e)){const i=t[e];B(i)&&Gt(a,i)}else if(B(e))Gt(a,e.bind(n));else if(ie(e))if(H(e))e.forEach(i=>xs(i,t,n,r));else{const i=B(e.handler)?e.handler.bind(n):t[e.handler];B(i)&&Gt(a,i,e)}}function Xa(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>vr(l,c,o,!0)),vr(l,t,o)),ie(t)&&i.set(t,l),l}function vr(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&vr(e,i,n,!0),a&&a.forEach(o=>vr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Vf[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Vf={data:Ii,props:Ot,emits:Ot,methods:Ot,computed:Ot,beforeCreate:_e,created:_e,beforeMount:_e,mounted:_e,beforeUpdate:_e,updated:_e,beforeDestroy:_e,beforeUnmount:_e,destroyed:_e,unmounted:_e,activated:_e,deactivated:_e,errorCaptured:_e,serverPrefetch:_e,components:Ot,directives:Ot,watch:Xf,provide:Ii,inject:Gf};function Ii(e,t){return t?e?function(){return we(B(e)?e.call(this,this):e,B(t)?t.call(this,this):t)}:t:e}function Gf(e,t){return Ot(ca(e),ca(t))}function ca(e){if(H(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function _e(e,t){return e?[...new Set([].concat(e,t))]:t}function Ot(e,t){return e?we(we(Object.create(null),e),t):t}function Xf(e,t){if(!e)return t;if(!t)return e;const n=we(Object.create(null),e);for(const r in t)n[r]=_e(e[r],t[r]);return n}function Qf(e,t,n,r=!1){const a={},i={};pr(i,Fr,1),e.propsDefaults=Object.create(null),ks(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:df(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Jf(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=V(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=e.vnode.dynamicProps;for(let d=0;d<f.length;d++){let p=f[d];if(Ir(e.emitsOptions,p))continue;const g=t[p];if(l)if(q(i,p))g!==i[p]&&(i[p]=g,c=!0);else{const A=Je(p);a[A]=ua(l,s,A,g,e,!1)}else g!==i[p]&&(i[p]=g,c=!0)}}}else{ks(e,t,a,i)&&(c=!0);let f;for(const d in s)(!t||!q(t,d)&&((f=an(d))===d||!q(t,f)))&&(l?n&&(n[d]!==void 0||n[f]!==void 0)&&(a[d]=ua(l,s,d,void 0,e,!0)):delete a[d]);if(i!==s)for(const d in i)(!t||!q(t,d))&&(delete i[d],c=!0)}c&&nt(e,"set","$attrs")}function ks(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(or(l))continue;const c=t[l];let f;a&&q(a,f=Je(l))?!i||!i.includes(f)?n[f]=c:(s||(s={}))[f]=c:Ir(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=V(n),c=s||ae;for(let f=0;f<i.length;f++){const d=i[f];n[d]=ua(a,l,d,c[d],e,!q(c,d))}}return o}function ua(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=q(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&B(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(en(a),r=c[n]=l.call(null,t),Tt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===an(n))&&(r=!0))}return r}function Es(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!B(e)){const f=d=>{l=!0;const[p,g]=Es(d,t,!0);we(o,p),g&&s.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!i&&!l)return ie(e)&&r.set(e,Wt),Wt;if(H(i))for(let f=0;f<i.length;f++){const d=Je(i[f]);Ti(d)&&(o[d]=ae)}else if(i)for(const f in i){const d=Je(f);if(Ti(d)){const p=i[f],g=o[d]=H(p)||B(p)?{type:p}:Object.assign({},p);if(g){const A=Fi(Boolean,g.type),S=Fi(String,g.type);g[0]=A>-1,g[1]=S<0||A<S,(A>-1||q(g,"default"))&&s.push(d)}}}const c=[o,s];return ie(e)&&r.set(e,c),c}function Ti(e){return e[0]!=="$"}function Ni(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Mi(e,t){return Ni(e)===Ni(t)}function Fi(e,t){return H(t)?t.findIndex(n=>Mi(n,e)):B(t)&&Mi(t,e)?0:-1}const As=e=>e[0]==="_"||e==="$stable",Qa=e=>H(e)?e.map(Ge):[Ge(e)],Zf=(e,t,n)=>{if(t._n)return t;const r=sa((...a)=>Qa(t(...a)),n);return r._c=!1,r},Os=(e,t,n)=>{const r=e._ctx;for(const a in e){if(As(a))continue;const i=e[a];if(B(i))t[a]=Zf(a,i,r);else if(i!=null){const o=Qa(i);t[a]=()=>o}}},Ps=(e,t)=>{const n=Qa(t);e.slots.default=()=>n},ec=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=V(t),pr(t,"_",n)):Os(t,e.slots={})}else e.slots={},t&&Ps(e,t);pr(e.slots,Fr,1)},tc=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=ae;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(we(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Os(t,a)),o=t}else t&&(Ps(e,t),o={default:1});if(i)for(const s in a)!As(s)&&!(s in o)&&delete a[s]};function Cs(){return{app:null,config:{isNativeTag:Il,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let nc=0;function rc(e,t){return function(r,a=null){B(r)||(r=Object.assign({},r)),a!=null&&!ie(a)&&(a=null);const i=Cs(),o=new Set;let s=!1;const l=i.app={_uid:nc++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:kc,get config(){return i.config},set config(c){},use(c,...f){return o.has(c)||(c&&B(c.install)?(o.add(c),c.install(l,...f)):B(c)&&(o.add(c),c(l,...f))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,f){return f?(i.components[c]=f,l):i.components[c]},directive(c,f){return f?(i.directives[c]=f,l):i.directives[c]},mount(c,f,d){if(!s){const p=pe(r,a);return p.appContext=i,f&&t?t(p,c):e(p,c,d),s=!0,l._container=c,c.__vue_app__=l,Za(p.component)||p.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,f){return i.provides[c]=f,l}};return l}}function da(e,t,n,r,a=!1){if(H(e)){e.forEach((p,g)=>da(p,t&&(H(t)?t[g]:t),n,r,a));return}if(lr(r)&&!a)return;const i=r.shapeFlag&4?Za(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,f=s.refs===ae?s.refs={}:s.refs,d=s.setupState;if(c!=null&&c!==l&&(de(c)?(f[c]=null,q(d,c)&&(d[c]=null)):be(c)&&(c.value=null)),B(l))vt(l,s,12,[o,f]);else{const p=de(l),g=be(l);if(p||g){const A=()=>{if(e.f){const S=p?q(d,l)?d[l]:f[l]:l.value;a?H(S)&&ja(S,i):H(S)?S.includes(i)||S.push(i):p?(f[l]=[i],q(d,l)&&(d[l]=f[l])):(l.value=[i],e.k&&(f[e.k]=l.value))}else p?(f[l]=o,q(d,l)&&(d[l]=o)):g&&(l.value=o,e.k&&(f[e.k]=o))};o?(A.id=-1,Ee(A,n)):A()}}}const Ee=Sf;function ac(e){return ic(e)}function ic(e,t){const n=jl();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:f,parentNode:d,nextSibling:p,setScopeId:g=Be,insertStaticContent:A}=e,S=(u,m,h,v=null,_=null,E=null,R=!1,k=null,P=!!m.dynamicChildren)=>{if(u===m)return;u&&!un(u,m)&&(v=C(u),xe(u,_,E,!0),u=null),m.patchFlag===-2&&(P=!1,m.dynamicChildren=null);const{type:x,ref:j,shapeFlag:N}=m;switch(x){case Mr:F(u,m,h,v);break;case Mt:b(u,m,h,v);break;case Yr:u==null&&w(m,h,v,R);break;case Ce:We(u,m,h,v,_,E,R,k,P);break;default:N&1?K(u,m,h,v,_,E,R,k,P):N&6?jt(u,m,h,v,_,E,R,k,P):(N&64||N&128)&&x.process(u,m,h,v,_,E,R,k,P,Y)}j!=null&&_&&da(j,u&&u.ref,E,m||u,!m)},F=(u,m,h,v)=>{if(u==null)r(m.el=s(m.children),h,v);else{const _=m.el=u.el;m.children!==u.children&&c(_,m.children)}},b=(u,m,h,v)=>{u==null?r(m.el=l(m.children||""),h,v):m.el=u.el},w=(u,m,h,v)=>{[u.el,u.anchor]=A(u.children,m,h,v,u.el,u.anchor)},O=({el:u,anchor:m},h,v)=>{let _;for(;u&&u!==m;)_=p(u),r(u,h,v),u=_;r(m,h,v)},D=({el:u,anchor:m})=>{let h;for(;u&&u!==m;)h=p(u),a(u),u=h;a(m)},K=(u,m,h,v,_,E,R,k,P)=>{R=R||m.type==="svg",u==null?re(m,h,v,_,E,R,k,P):ye(u,m,_,E,R,k,P)},re=(u,m,h,v,_,E,R,k)=>{let P,x;const{type:j,props:N,shapeFlag:$,transition:z,dirs:W}=u;if(P=u.el=o(u.type,E,N&&N.is,N),$&8?f(P,u.children):$&16&&Oe(u.children,P,null,v,_,E&&j!=="foreignObject",R,k),W&&Et(u,null,v,"created"),N){for(const J in N)J!=="value"&&!or(J)&&i(P,J,null,N[J],E,u.children,v,_,I);"value"in N&&i(P,"value",null,N.value),(x=N.onVnodeBeforeMount)&&qe(x,v,u)}se(P,u,u.scopeId,R,v),W&&Et(u,null,v,"beforeMount");const ee=(!_||_&&!_.pendingBranch)&&z&&!z.persisted;ee&&z.beforeEnter(P),r(P,m,h),((x=N&&N.onVnodeMounted)||ee||W)&&Ee(()=>{x&&qe(x,v,u),ee&&z.enter(P),W&&Et(u,null,v,"mounted")},_)},se=(u,m,h,v,_)=>{if(h&&g(u,h),v)for(let E=0;E<v.length;E++)g(u,v[E]);if(_){let E=_.subTree;if(m===E){const R=_.vnode;se(u,R,R.scopeId,R.slotScopeIds,_.parent)}}},Oe=(u,m,h,v,_,E,R,k,P=0)=>{for(let x=P;x<u.length;x++){const j=u[x]=k?mt(u[x]):Ge(u[x]);S(null,j,m,h,v,_,E,R,k)}},ye=(u,m,h,v,_,E,R)=>{const k=m.el=u.el;let{patchFlag:P,dynamicChildren:x,dirs:j}=m;P|=u.patchFlag&16;const N=u.props||ae,$=m.props||ae;let z;h&&At(h,!1),(z=$.onVnodeBeforeUpdate)&&qe(z,h,m,u),j&&Et(m,u,h,"beforeUpdate"),h&&At(h,!0);const W=_&&m.type!=="foreignObject";if(x?Ie(u.dynamicChildren,x,k,h,v,W,E):R||Q(u,m,k,null,h,v,W,E,!1),P>0){if(P&16)ft(k,m,N,$,h,v,_);else if(P&2&&N.class!==$.class&&i(k,"class",null,$.class,_),P&4&&i(k,"style",N.style,$.style,_),P&8){const ee=m.dynamicProps;for(let J=0;J<ee.length;J++){const ue=ee[J],Me=N[ue],Dt=$[ue];(Dt!==Me||ue==="value")&&i(k,ue,Me,Dt,_,u.children,h,v,I)}}P&1&&u.children!==m.children&&f(k,m.children)}else!R&&x==null&&ft(k,m,N,$,h,v,_);((z=$.onVnodeUpdated)||j)&&Ee(()=>{z&&qe(z,h,m,u),j&&Et(m,u,h,"updated")},v)},Ie=(u,m,h,v,_,E,R)=>{for(let k=0;k<m.length;k++){const P=u[k],x=m[k],j=P.el&&(P.type===Ce||!un(P,x)||P.shapeFlag&70)?d(P.el):h;S(P,x,j,null,v,_,E,R,!0)}},ft=(u,m,h,v,_,E,R)=>{if(h!==v){if(h!==ae)for(const k in h)!or(k)&&!(k in v)&&i(u,k,h[k],null,R,m.children,_,E,I);for(const k in v){if(or(k))continue;const P=v[k],x=h[k];P!==x&&k!=="value"&&i(u,k,x,P,R,m.children,_,E,I)}"value"in v&&i(u,"value",h.value,v.value)}},We=(u,m,h,v,_,E,R,k,P)=>{const x=m.el=u?u.el:s(""),j=m.anchor=u?u.anchor:s("");let{patchFlag:N,dynamicChildren:$,slotScopeIds:z}=m;z&&(k=k?k.concat(z):z),u==null?(r(x,h,v),r(j,h,v),Oe(m.children,h,j,_,E,R,k,P)):N>0&&N&64&&$&&u.dynamicChildren?(Ie(u.dynamicChildren,$,h,_,E,R,k),(m.key!=null||_&&m===_.subTree)&&Ss(u,m,!0)):Q(u,m,h,j,_,E,R,k,P)},jt=(u,m,h,v,_,E,R,k,P)=>{m.slotScopeIds=k,u==null?m.shapeFlag&512?_.ctx.activate(m,h,v,R,P):xt(m,h,v,_,E,R,P):fn(u,m,P)},xt=(u,m,h,v,_,E,R)=>{const k=u.component=pc(u,v,_);if(gs(u)&&(k.ctx.renderer=Y),hc(k),k.asyncDep){if(_&&_.registerDep(k,ce),!u.el){const P=k.subTree=pe(Mt);b(null,P,m,h)}return}ce(k,u,m,h,_,E,R)},fn=(u,m,h)=>{const v=m.component=u.component;if(Of(u,m,h))if(v.asyncDep&&!v.asyncResolved){Z(v,m,h);return}else v.next=m,_f(v.update),v.update();else m.el=u.el,v.vnode=m},ce=(u,m,h,v,_,E,R)=>{const k=()=>{if(u.isMounted){let{next:j,bu:N,u:$,parent:z,vnode:W}=u,ee=j,J;At(u,!1),j?(j.el=W.el,Z(u,j,R)):j=W,N&&Ur(N),(J=j.props&&j.props.onVnodeBeforeUpdate)&&qe(J,z,j,W),At(u,!0);const ue=Kr(u),Me=u.subTree;u.subTree=ue,S(Me,ue,d(Me.el),C(Me),u,_,E),j.el=ue.el,ee===null&&Pf(u,ue.el),$&&Ee($,_),(J=j.props&&j.props.onVnodeUpdated)&&Ee(()=>qe(J,z,j,W),_)}else{let j;const{el:N,props:$}=m,{bm:z,m:W,parent:ee}=u,J=lr(m);if(At(u,!1),z&&Ur(z),!J&&(j=$&&$.onVnodeBeforeMount)&&qe(j,ee,m),At(u,!0),N&&U){const ue=()=>{u.subTree=Kr(u),U(N,u.subTree,u,_,null)};J?m.type.__asyncLoader().then(()=>!u.isUnmounted&&ue()):ue()}else{const ue=u.subTree=Kr(u);S(null,ue,h,v,u,_,E),m.el=ue.el}if(W&&Ee(W,_),!J&&(j=$&&$.onVnodeMounted)){const ue=m;Ee(()=>qe(j,ee,ue),_)}(m.shapeFlag&256||ee&&lr(ee.vnode)&&ee.vnode.shapeFlag&256)&&u.a&&Ee(u.a,_),u.isMounted=!0,m=h=v=null}},P=u.effect=new Ha(k,()=>Ga(x),u.scope),x=u.update=()=>P.run();x.id=u.uid,At(u,!0),x()},Z=(u,m,h)=>{m.component=u;const v=u.vnode.props;u.vnode=m,u.next=null,Jf(u,m.props,v,h),tc(u,m.children,h),on(),Pi(),sn()},Q=(u,m,h,v,_,E,R,k,P=!1)=>{const x=u&&u.children,j=u?u.shapeFlag:0,N=m.children,{patchFlag:$,shapeFlag:z}=m;if($>0){if($&128){kt(x,N,h,v,_,E,R,k,P);return}else if($&256){Te(x,N,h,v,_,E,R,k,P);return}}z&8?(j&16&&I(x,_,E),N!==x&&f(h,N)):j&16?z&16?kt(x,N,h,v,_,E,R,k,P):I(x,_,E,!0):(j&8&&f(h,""),z&16&&Oe(N,h,v,_,E,R,k,P))},Te=(u,m,h,v,_,E,R,k,P)=>{u=u||Wt,m=m||Wt;const x=u.length,j=m.length,N=Math.min(x,j);let $;for($=0;$<N;$++){const z=m[$]=P?mt(m[$]):Ge(m[$]);S(u[$],z,h,null,_,E,R,k,P)}x>j?I(u,_,E,!0,!1,N):Oe(m,h,v,_,E,R,k,P,N)},kt=(u,m,h,v,_,E,R,k,P)=>{let x=0;const j=m.length;let N=u.length-1,$=j-1;for(;x<=N&&x<=$;){const z=u[x],W=m[x]=P?mt(m[x]):Ge(m[x]);if(un(z,W))S(z,W,h,null,_,E,R,k,P);else break;x++}for(;x<=N&&x<=$;){const z=u[N],W=m[$]=P?mt(m[$]):Ge(m[$]);if(un(z,W))S(z,W,h,null,_,E,R,k,P);else break;N--,$--}if(x>N){if(x<=$){const z=$+1,W=z<j?m[z].el:v;for(;x<=$;)S(null,m[x]=P?mt(m[x]):Ge(m[x]),h,W,_,E,R,k,P),x++}}else if(x>$)for(;x<=N;)xe(u[x],_,E,!0),x++;else{const z=x,W=x,ee=new Map;for(x=W;x<=$;x++){const Pe=m[x]=P?mt(m[x]):Ge(m[x]);Pe.key!=null&&ee.set(Pe.key,x)}let J,ue=0;const Me=$-W+1;let Dt=!1,gi=0;const cn=new Array(Me);for(x=0;x<Me;x++)cn[x]=0;for(x=z;x<=N;x++){const Pe=u[x];if(ue>=Me){xe(Pe,_,E,!0);continue}let Ye;if(Pe.key!=null)Ye=ee.get(Pe.key);else for(J=W;J<=$;J++)if(cn[J-W]===0&&un(Pe,m[J])){Ye=J;break}Ye===void 0?xe(Pe,_,E,!0):(cn[Ye-W]=x+1,Ye>=gi?gi=Ye:Dt=!0,S(Pe,m[Ye],h,null,_,E,R,k,P),ue++)}const vi=Dt?oc(cn):Wt;for(J=vi.length-1,x=Me-1;x>=0;x--){const Pe=W+x,Ye=m[Pe],bi=Pe+1<j?m[Pe+1].el:v;cn[x]===0?S(null,Ye,h,bi,_,E,R,k,P):Dt&&(J<0||x!==vi[J]?Ne(Ye,h,bi,2):J--)}}},Ne=(u,m,h,v,_=null)=>{const{el:E,type:R,transition:k,children:P,shapeFlag:x}=u;if(x&6){Ne(u.component.subTree,m,h,v);return}if(x&128){u.suspense.move(m,h,v);return}if(x&64){R.move(u,m,h,Y);return}if(R===Ce){r(E,m,h);for(let N=0;N<P.length;N++)Ne(P[N],m,h,v);r(u.anchor,m,h);return}if(R===Yr){O(u,m,h);return}if(v!==2&&x&1&&k)if(v===0)k.beforeEnter(E),r(E,m,h),Ee(()=>k.enter(E),_);else{const{leave:N,delayLeave:$,afterLeave:z}=k,W=()=>r(E,m,h),ee=()=>{N(E,()=>{W(),z&&z()})};$?$(E,W,ee):ee()}else r(E,m,h)},xe=(u,m,h,v=!1,_=!1)=>{const{type:E,props:R,ref:k,children:P,dynamicChildren:x,shapeFlag:j,patchFlag:N,dirs:$}=u;if(k!=null&&da(k,null,h,u,!0),j&256){m.ctx.deactivate(u);return}const z=j&1&&$,W=!lr(u);let ee;if(W&&(ee=R&&R.onVnodeBeforeUnmount)&&qe(ee,m,u),j&6)y(u.component,h,v);else{if(j&128){u.suspense.unmount(h,v);return}z&&Et(u,null,m,"beforeUnmount"),j&64?u.type.remove(u,m,h,_,Y,v):x&&(E!==Ce||N>0&&N&64)?I(x,m,h,!1,!0):(E===Ce&&N&384||!_&&j&16)&&I(P,m,h),v&&$t(u)}(W&&(ee=R&&R.onVnodeUnmounted)||z)&&Ee(()=>{ee&&qe(ee,m,u),z&&Et(u,null,m,"unmounted")},h)},$t=u=>{const{type:m,el:h,anchor:v,transition:_}=u;if(m===Ce){Kn(h,v);return}if(m===Yr){D(u);return}const E=()=>{a(h),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(u.shapeFlag&1&&_&&!_.persisted){const{leave:R,delayLeave:k}=_,P=()=>R(h,E);k?k(u.el,E,P):P()}else E()},Kn=(u,m)=>{let h;for(;u!==m;)h=p(u),a(u),u=h;a(m)},y=(u,m,h)=>{const{bum:v,scope:_,update:E,subTree:R,um:k}=u;v&&Ur(v),_.stop(),E&&(E.active=!1,xe(R,u,m,h)),k&&Ee(k,m),Ee(()=>{u.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},I=(u,m,h,v=!1,_=!1,E=0)=>{for(let R=E;R<u.length;R++)xe(u[R],m,h,v,_)},C=u=>u.shapeFlag&6?C(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),L=(u,m,h)=>{u==null?m._vnode&&xe(m._vnode,null,null,!0):S(m._vnode||null,u,m,null,null,null,h),Pi(),fs(),m._vnode=u},Y={p:S,um:xe,m:Ne,r:$t,mt:xt,mc:Oe,pc:Q,pbc:Ie,n:C,o:e};let oe,U;return t&&([oe,U]=t(Y)),{render:L,hydrate:oe,createApp:rc(L,oe)}}function At({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Ss(e,t,n=!1){const r=e.children,a=t.children;if(H(r)&&H(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=mt(a[i]),s.el=o.el),n||Ss(o,s)),s.type===Mr&&(s.el=o.el)}}function oc(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const sc=e=>e.__isTeleport,Ce=Symbol(void 0),Mr=Symbol(void 0),Mt=Symbol(void 0),Yr=Symbol(void 0),bn=[];let ze=null;function Ae(e=!1){bn.push(ze=e?null:[])}function lc(){bn.pop(),ze=bn[bn.length-1]||null}let Cn=1;function Li(e){Cn+=e}function Rs(e){return e.dynamicChildren=Cn>0?ze||Wt:null,lc(),Cn>0&&ze&&ze.push(e),e}function je(e,t,n,r,a,i){return Rs(he(e,t,n,r,a,i,!0))}function ma(e,t,n,r,a){return Rs(pe(e,t,n,r,a,!0))}function pa(e){return e?e.__v_isVNode===!0:!1}function un(e,t){return e.type===t.type&&e.key===t.key}const Fr="__vInternal",Is=({key:e})=>e??null,fr=({ref:e,ref_key:t,ref_for:n})=>e!=null?de(e)||be(e)||B(e)?{i:De,r:e,k:t,f:!!n}:e:null;function he(e,t=null,n=null,r=0,a=null,i=e===Ce?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Is(t),ref:t&&fr(t),scopeId:Tr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:De};return s?(Ja(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=de(n)?8:16),Cn>0&&!o&&ze&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&ze.push(l),l}const pe=fc;function fc(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Uf)&&(e=Mt),pa(e)){const s=Zt(e,t,!0);return n&&Ja(s,n),Cn>0&&!i&&ze&&(s.shapeFlag&6?ze[ze.indexOf(e)]=s:ze.push(s)),s.patchFlag|=-2,s}if(_c(e)&&(e=e.__vccOpts),t){t=cc(t);let{class:s,style:l}=t;s&&!de(s)&&(t.class=jn(s)),ie(l)&&(es(l)&&!H(l)&&(l=we({},l)),t.style=Fa(l))}const o=de(e)?1:Cf(e)?128:sc(e)?64:ie(e)?4:B(e)?2:0;return he(e,t,n,r,a,o,i,!0)}function cc(e){return e?es(e)||Fr in e?we({},e):e:null}function Zt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?uc(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Is(s),ref:t&&t.ref?n&&a?H(a)?a.concat(fr(t)):[a,fr(t)]:fr(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ce?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Zt(e.ssContent),ssFallback:e.ssFallback&&Zt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx}}function Sn(e=" ",t=0){return pe(Mr,null,e,t)}function br(e="",t=!1){return t?(Ae(),ma(Mt,null,e)):pe(Mt,null,e)}function Ge(e){return e==null||typeof e=="boolean"?pe(Mt):H(e)?pe(Ce,null,e.slice()):typeof e=="object"?mt(e):pe(Mr,null,String(e))}function mt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Zt(e)}function Ja(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(H(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Ja(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Fr in t)?t._ctx=De:a===3&&De&&(De.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else B(t)?(t={default:t,_ctx:De},n=32):(t=String(t),r&64?(n=16,t=[Sn(t)]):n=8);e.children=t,e.shapeFlag|=n}function uc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=jn([t.class,r.class]));else if(a==="style")t.style=Fa([t.style,r.style]);else if(Ar(a)){const i=t[a],o=r[a];o&&i!==o&&!(H(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function qe(e,t,n,r=null){Ue(e,t,7,[n,r])}const dc=Cs();let mc=0;function pc(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||dc,i={uid:mc++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new $l(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Es(r,a),emitsOptions:us(r,a),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:r.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=kf.bind(null,i),e.ce&&e.ce(i),i}let ge=null;const en=e=>{ge=e,e.scope.on()},Tt=()=>{ge&&ge.scope.off(),ge=null};function Ts(e){return e.vnode.shapeFlag&4}let Rn=!1;function hc(e,t=!1){Rn=t;const{props:n,children:r}=e.vnode,a=Ts(e);Qf(e,n,a,t),ec(e,r);const i=a?gc(e,t):void 0;return Rn=!1,i}function gc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=ts(new Proxy(e.ctx,Wf));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?bc(e):null;en(e),on();const i=vt(r,e,0,[e.props,a]);if(sn(),Tt(),Do(i)){if(i.then(Tt,Tt),t)return i.then(o=>{ji(e,o,t)}).catch(o=>{Rr(o,e,0)});e.asyncDep=i}else ji(e,i,t)}else Ns(e,t)}function ji(e,t,n){B(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ie(t)&&(e.setupState=is(t)),Ns(e,n)}let $i;function Ns(e,t,n){const r=e.type;if(!e.render){if(!t&&$i&&!r.render){const a=r.template||Xa(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=we(we({isCustomElement:i,delimiters:s},o),l);r.render=$i(a,c)}}e.render=r.render||Be}en(e),on(),Yf(e),sn(),Tt()}function vc(e){return new Proxy(e.attrs,{get(t,n){return Se(e,"get","$attrs"),t[n]}})}function bc(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=vc(e))},slots:e.slots,emit:e.emit,expose:t}}function Za(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(is(ts(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in vn)return vn[n](e)},has(t,n){return n in t||n in vn}}))}function yc(e,t=!0){return B(e)?e.displayName||e.name:e.name||t&&e.__name}function _c(e){return B(e)&&"__vccOpts"in e}const X=(e,t)=>vf(e,t,Rn);function Lr(e,t,n){const r=arguments.length;return r===2?ie(t)&&!H(t)?pa(t)?pe(e,null,[t]):pe(e,t):pe(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&pa(n)&&(n=[n]),pe(e,t,n))}const wc=Symbol(""),xc=()=>tt(wc),kc="3.2.45",Ec="http://www.w3.org/2000/svg",Ct=typeof document<"u"?document:null,Di=Ct&&Ct.createElement("template"),Ac={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?Ct.createElementNS(Ec,e):Ct.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>Ct.createTextNode(e),createComment:e=>Ct.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ct.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Di.innerHTML=r?`<svg>${e}</svg>`:e;const s=Di.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Oc(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Pc(e,t,n){const r=e.style,a=de(n);if(n&&!a){for(const i in n)ha(r,i,n[i]);if(t&&!de(t))for(const i in t)n[i]==null&&ha(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const zi=/\s*!important$/;function ha(e,t,n){if(H(n))n.forEach(r=>ha(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Cc(e,t);zi.test(n)?e.setProperty(an(r),n.replace(zi,""),"important"):e[r]=n}}const Hi=["Webkit","Moz","ms"],qr={};function Cc(e,t){const n=qr[t];if(n)return n;let r=Je(t);if(r!=="filter"&&r in e)return qr[t]=r;r=Cr(r);for(let a=0;a<Hi.length;a++){const i=Hi[a]+r;if(i in e)return qr[t]=i}return t}const Bi="http://www.w3.org/1999/xlink";function Sc(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Bi,t.slice(6,t.length)):e.setAttributeNS(Bi,t,n);else{const i=Rl(t);n==null||i&&!Lo(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Rc(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n??"";(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Lo(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function Ic(e,t,n,r){e.addEventListener(t,n,r)}function Tc(e,t,n,r){e.removeEventListener(t,n,r)}function Nc(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Mc(t);if(r){const c=i[t]=jc(r,a);Ic(e,s,c,l)}else o&&(Tc(e,s,o,l),i[t]=void 0)}}const Ui=/(?:Once|Passive|Capture)$/;function Mc(e){let t;if(Ui.test(e)){t={};let r;for(;r=e.match(Ui);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):an(e.slice(2)),t]}let Vr=0;const Fc=Promise.resolve(),Lc=()=>Vr||(Fc.then(()=>Vr=0),Vr=Date.now());function jc(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ue($c(r,n.value),t,5,[r])};return n.value=e,n.attached=Lc(),n}function $c(e,t){if(H(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Ki=/^on[a-z]/,Dc=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Oc(e,r,a):t==="style"?Pc(e,n,r):Ar(t)?La(t)||Nc(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):zc(e,t,r,a))?Rc(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Sc(e,t,r,a))};function zc(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Ki.test(t)&&B(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ki.test(t)&&de(n)?!1:t in e}const Hc=["ctrl","shift","alt","meta"],Bc={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Hc.some(n=>e[`${n}Key`]&&!t.includes(n))},Xt=(e,t)=>(n,...r)=>{for(let a=0;a<t.length;a++){const i=Bc[t[a]];if(i&&i(n,t))return}return e(n,...r)},Uc=we({patchProp:Dc},Ac);let Wi;function Kc(){return Wi||(Wi=ac(Uc))}const Wc=(...e)=>{const t=Kc().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Yc(r);if(!a)return;const i=t._component;!B(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Yc(e){return de(e)?document.querySelector(e):e}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ht=typeof window<"u";function qc(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const G=Object.assign;function Gr(e,t){const n={};for(const r in t){const a=t[r];n[r]=Ke(a)?a.map(e):e(a)}return n}const yn=()=>{},Ke=Array.isArray,Vc=/\/$/,Gc=e=>e.replace(Vc,"");function Xr(e,t,n="/"){let r,a={},i="",o="";const s=t.indexOf("#");let l=t.indexOf("?");return s<l&&s>=0&&(l=-1),l>-1&&(r=t.slice(0,l),i=t.slice(l+1,s>-1?s:t.length),a=e(i)),s>-1&&(r=r||t.slice(0,s),o=t.slice(s,t.length)),r=Zc(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:a,hash:o}}function Xc(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Yi(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Qc(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&tn(t.matched[r],n.matched[a])&&Ms(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function tn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ms(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Jc(e[n],t[n]))return!1;return!0}function Jc(e,t){return Ke(e)?qi(e,t):Ke(t)?qi(t,e):e===t}function qi(e,t){return Ke(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Zc(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let a=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")a>1&&a--;else break;return n.slice(0,a).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var In;(function(e){e.pop="pop",e.push="push"})(In||(In={}));var _n;(function(e){e.back="back",e.forward="forward",e.unknown=""})(_n||(_n={}));function eu(e){if(!e)if(Ht){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Gc(e)}const tu=/^[^#]+#/;function nu(e,t){return e.replace(tu,"#")+t}function ru(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const jr=()=>({left:window.pageXOffset,top:window.pageYOffset});function au(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=ru(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Vi(e,t){return(history.state?history.state.position-t:-1)+e}const ga=new Map;function iu(e,t){ga.set(e,t)}function ou(e){const t=ga.get(e);return ga.delete(e),t}let su=()=>location.protocol+"//"+location.host;function Fs(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let s=a.includes(e.slice(i))?e.slice(i).length:1,l=a.slice(s);return l[0]!=="/"&&(l="/"+l),Yi(l,"")}return Yi(n,e)+r+a}function lu(e,t,n,r){let a=[],i=[],o=null;const s=({state:p})=>{const g=Fs(e,location),A=n.value,S=t.value;let F=0;if(p){if(n.value=g,t.value=p,o&&o===A){o=null;return}F=S?p.position-S.position:0}else r(g);a.forEach(b=>{b(n.value,A,{delta:F,type:In.pop,direction:F?F>0?_n.forward:_n.back:_n.unknown})})};function l(){o=n.value}function c(p){a.push(p);const g=()=>{const A=a.indexOf(p);A>-1&&a.splice(A,1)};return i.push(g),g}function f(){const{history:p}=window;p.state&&p.replaceState(G({},p.state,{scroll:jr()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",f),{pauseListeners:l,listen:c,destroy:d}}function Gi(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?jr():null}}function fu(e){const{history:t,location:n}=window,r={value:Fs(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,c,f){const d=e.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:su()+e+l;try{t[f?"replaceState":"pushState"](c,"",p),a.value=c}catch(g){console.error(g),n[f?"replace":"assign"](p)}}function o(l,c){const f=G({},t.state,Gi(a.value.back,l,a.value.forward,!0),c,{position:a.value.position});i(l,f,!0),r.value=l}function s(l,c){const f=G({},a.value,t.state,{forward:l,scroll:jr()});i(f.current,f,!0);const d=G({},Gi(r.value,l,null),{position:f.position+1},c);i(l,d,!1),r.value=l}return{location:r,state:a,push:s,replace:o}}function cu(e){e=eu(e);const t=fu(e),n=lu(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const a=G({location:"",base:e,go:r,createHref:nu.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function uu(e){return typeof e=="string"||e&&typeof e=="object"}function Ls(e){return typeof e=="string"||typeof e=="symbol"}const ut={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},js=Symbol("");var Xi;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Xi||(Xi={}));function nn(e,t){return G(new Error,{type:e,[js]:!0},t)}function Ze(e,t){return e instanceof Error&&js in e&&(t==null||!!(e.type&t))}const Qi="[^/]+?",du={sensitive:!1,strict:!1,start:!0,end:!0},mu=/[.+*?^${}()[\]/\\]/g;function pu(e,t){const n=G({},du,t),r=[];let a=n.start?"^":"";const i=[];for(const c of e){const f=c.length?[]:[90];n.strict&&!c.length&&(a+="/");for(let d=0;d<c.length;d++){const p=c[d];let g=40+(n.sensitive?.25:0);if(p.type===0)d||(a+="/"),a+=p.value.replace(mu,"\\$&"),g+=40;else if(p.type===1){const{value:A,repeatable:S,optional:F,regexp:b}=p;i.push({name:A,repeatable:S,optional:F});const w=b||Qi;if(w!==Qi){g+=10;try{new RegExp(`(${w})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${A}" (${w}): `+D.message)}}let O=S?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;d||(O=F&&c.length<2?`(?:/${O})`:"/"+O),F&&(O+="?"),a+=O,g+=20,F&&(g+=-8),S&&(g+=-20),w===".*"&&(g+=-50)}f.push(g)}r.push(f)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const o=new RegExp(a,n.sensitive?"":"i");function s(c){const f=c.match(o),d={};if(!f)return null;for(let p=1;p<f.length;p++){const g=f[p]||"",A=i[p-1];d[A.name]=g&&A.repeatable?g.split("/"):g}return d}function l(c){let f="",d=!1;for(const p of e){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const g of p)if(g.type===0)f+=g.value;else if(g.type===1){const{value:A,repeatable:S,optional:F}=g,b=A in c?c[A]:"";if(Ke(b)&&!S)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const w=Ke(b)?b.join("/"):b;if(!w)if(F)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${A}"`);f+=w}}return f||"/"}return{re:o,score:r,keys:i,parse:s,stringify:l}}function hu(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function gu(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=hu(r[n],a[n]);if(i)return i;n++}if(Math.abs(a.length-r.length)===1){if(Ji(r))return 1;if(Ji(a))return-1}return a.length-r.length}function Ji(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const vu={type:0,value:""},bu=/[a-zA-Z0-9_]/;function yu(e){if(!e)return[[]];if(e==="/")return[[vu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,r=n;const a=[];let i;function o(){i&&a.push(i),i=[]}let s=0,l,c="",f="";function d(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function p(){c+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:bu.test(l)?p():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,f="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),d(),o(),a}function _u(e,t,n){const r=pu(yu(e.path),n),a=G(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function wu(e,t){const n=[],r=new Map;t=to({strict:!1,end:!0,sensitive:!1},t);function a(f){return r.get(f)}function i(f,d,p){const g=!p,A=xu(f);A.aliasOf=p&&p.record;const S=to(t,f),F=[A];if("alias"in f){const O=typeof f.alias=="string"?[f.alias]:f.alias;for(const D of O)F.push(G({},A,{components:p?p.record.components:A.components,path:D,aliasOf:p?p.record:A}))}let b,w;for(const O of F){const{path:D}=O;if(d&&D[0]!=="/"){const K=d.record.path,re=K[K.length-1]==="/"?"":"/";O.path=d.record.path+(D&&re+D)}if(b=_u(O,d,S),p?p.alias.push(b):(w=w||b,w!==b&&w.alias.push(b),g&&f.name&&!eo(b)&&o(f.name)),A.children){const K=A.children;for(let re=0;re<K.length;re++)i(K[re],b,p&&p.children[re])}p=p||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&l(b)}return w?()=>{o(w)}:yn}function o(f){if(Ls(f)){const d=r.get(f);d&&(r.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function s(){return n}function l(f){let d=0;for(;d<n.length&&gu(f,n[d])>=0&&(f.record.path!==n[d].record.path||!$s(f,n[d]));)d++;n.splice(d,0,f),f.record.name&&!eo(f)&&r.set(f.record.name,f)}function c(f,d){let p,g={},A,S;if("name"in f&&f.name){if(p=r.get(f.name),!p)throw nn(1,{location:f});S=p.record.name,g=G(Zi(d.params,p.keys.filter(w=>!w.optional).map(w=>w.name)),f.params&&Zi(f.params,p.keys.map(w=>w.name))),A=p.stringify(g)}else if("path"in f)A=f.path,p=n.find(w=>w.re.test(A)),p&&(g=p.parse(A),S=p.record.name);else{if(p=d.name?r.get(d.name):n.find(w=>w.re.test(d.path)),!p)throw nn(1,{location:f,currentLocation:d});S=p.record.name,g=G({},d.params,f.params),A=p.stringify(g)}const F=[];let b=p;for(;b;)F.unshift(b.record),b=b.parent;return{name:S,path:A,params:g,matched:F,meta:Eu(F)}}return e.forEach(f=>i(f)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:s,getRecordMatcher:a}}function Zi(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function xu(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ku(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function ku(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function eo(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Eu(e){return e.reduce((t,n)=>G(t,n.meta),{})}function to(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function $s(e,t){return t.children.some(n=>n===e||$s(e,n))}const Ds=/#/g,Au=/&/g,Ou=/\//g,Pu=/=/g,Cu=/\?/g,zs=/\+/g,Su=/%5B/g,Ru=/%5D/g,Hs=/%5E/g,Iu=/%60/g,Bs=/%7B/g,Tu=/%7C/g,Us=/%7D/g,Nu=/%20/g;function ei(e){return encodeURI(""+e).replace(Tu,"|").replace(Su,"[").replace(Ru,"]")}function Mu(e){return ei(e).replace(Bs,"{").replace(Us,"}").replace(Hs,"^")}function va(e){return ei(e).replace(zs,"%2B").replace(Nu,"+").replace(Ds,"%23").replace(Au,"%26").replace(Iu,"`").replace(Bs,"{").replace(Us,"}").replace(Hs,"^")}function Fu(e){return va(e).replace(Pu,"%3D")}function Lu(e){return ei(e).replace(Ds,"%23").replace(Cu,"%3F")}function ju(e){return e==null?"":Lu(e).replace(Ou,"%2F")}function yr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function $u(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace(zs," "),o=i.indexOf("="),s=yr(o<0?i:i.slice(0,o)),l=o<0?null:yr(i.slice(o+1));if(s in t){let c=t[s];Ke(c)||(c=t[s]=[c]),c.push(l)}else t[s]=l}return t}function no(e){let t="";for(let n in e){const r=e[n];if(n=Fu(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Ke(r)?r.map(i=>i&&va(i)):[r&&va(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Du(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Ke(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}const zu=Symbol(""),ro=Symbol(""),ti=Symbol(""),Ks=Symbol(""),ba=Symbol("");function dn(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function pt(e,t,n,r,a){const i=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((o,s)=>{const l=d=>{d===!1?s(nn(4,{from:n,to:t})):d instanceof Error?s(d):uu(d)?s(nn(2,{from:t,to:d})):(i&&r.enterCallbacks[a]===i&&typeof d=="function"&&i.push(d),o())},c=e.call(r&&r.instances[a],t,n,l);let f=Promise.resolve(c);e.length<3&&(f=f.then(l)),f.catch(d=>s(d))})}function Qr(e,t,n,r){const a=[];for(const i of e)for(const o in i.components){let s=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(Hu(s)){const c=(s.__vccOpts||s)[t];c&&a.push(pt(c,n,r,i,o))}else{let l=s();a.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=qc(c)?c.default:c;i.components[o]=f;const p=(f.__vccOpts||f)[t];return p&&pt(p,n,r,i,o)()}))}}return a}function Hu(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function ao(e){const t=tt(ti),n=tt(Ks),r=X(()=>t.resolve(fe(e.to))),a=X(()=>{const{matched:l}=r.value,{length:c}=l,f=l[c-1],d=n.matched;if(!f||!d.length)return-1;const p=d.findIndex(tn.bind(null,f));if(p>-1)return p;const g=io(l[c-2]);return c>1&&io(f)===g&&d[d.length-1].path!==g?d.findIndex(tn.bind(null,l[c-2])):p}),i=X(()=>a.value>-1&&Ku(n.params,r.value.params)),o=X(()=>a.value>-1&&a.value===n.matched.length-1&&Ms(n.params,r.value.params));function s(l={}){return Uu(l)?t[fe(e.replace)?"replace":"push"](fe(e.to)).catch(yn):Promise.resolve()}return{route:r,href:X(()=>r.value.href),isActive:i,isExactActive:o,navigate:s}}const Bu=Dn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ao,setup(e,{slots:t}){const n=$n(ao(e)),{options:r}=tt(ti),a=X(()=>({[oo(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[oo(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Lr("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),ya=Bu;function Uu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ku(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!Ke(a)||a.length!==r.length||r.some((i,o)=>i!==a[o]))return!1}return!0}function io(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const oo=(e,t,n)=>e??t??n,Wu=Dn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=tt(ba),a=X(()=>e.route||r.value),i=tt(ro,0),o=X(()=>{let c=fe(i);const{matched:f}=a.value;let d;for(;(d=f[c])&&!d.components;)c++;return c}),s=X(()=>a.value.matched[o.value]);sr(ro,X(()=>o.value+1)),sr(zu,s),sr(ba,a);const l=rt();return Gt(()=>[l.value,s.value,e.name],([c,f,d],[p,g,A])=>{f&&(f.instances[d]=c,g&&g!==f&&c&&c===p&&(f.leaveGuards.size||(f.leaveGuards=g.leaveGuards),f.updateGuards.size||(f.updateGuards=g.updateGuards))),c&&f&&(!g||!tn(f,g)||!p)&&(f.enterCallbacks[d]||[]).forEach(S=>S(c))},{flush:"post"}),()=>{const c=a.value,f=e.name,d=s.value,p=d&&d.components[f];if(!p)return so(n.default,{Component:p,route:c});const g=d.props[f],A=g?g===!0?c.params:typeof g=="function"?g(c):g:null,F=Lr(p,G({},A,t,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(d.instances[f]=null)},ref:l}));return so(n.default,{Component:F,route:c})||F}}});function so(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Ws=Wu;function Yu(e){const t=wu(e.routes,e),n=e.parseQuery||$u,r=e.stringifyQuery||no,a=e.history,i=dn(),o=dn(),s=dn(),l=mf(ut);let c=ut;Ht&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Gr.bind(null,y=>""+y),d=Gr.bind(null,ju),p=Gr.bind(null,yr);function g(y,I){let C,L;return Ls(y)?(C=t.getRecordMatcher(y),L=I):L=y,t.addRoute(L,C)}function A(y){const I=t.getRecordMatcher(y);I&&t.removeRoute(I)}function S(){return t.getRoutes().map(y=>y.record)}function F(y){return!!t.getRecordMatcher(y)}function b(y,I){if(I=G({},I||l.value),typeof y=="string"){const u=Xr(n,y,I.path),m=t.resolve({path:u.path},I),h=a.createHref(u.fullPath);return G(u,m,{params:p(m.params),hash:yr(u.hash),redirectedFrom:void 0,href:h})}let C;if("path"in y)C=G({},y,{path:Xr(n,y.path,I.path).path});else{const u=G({},y.params);for(const m in u)u[m]==null&&delete u[m];C=G({},y,{params:d(y.params)}),I.params=d(I.params)}const L=t.resolve(C,I),Y=y.hash||"";L.params=f(p(L.params));const oe=Xc(r,G({},y,{hash:Mu(Y),path:L.path})),U=a.createHref(oe);return G({fullPath:oe,hash:Y,query:r===no?Du(y.query):y.query||{}},L,{redirectedFrom:void 0,href:U})}function w(y){return typeof y=="string"?Xr(n,y,l.value.path):G({},y)}function O(y,I){if(c!==y)return nn(8,{from:I,to:y})}function D(y){return se(y)}function K(y){return D(G(w(y),{replace:!0}))}function re(y){const I=y.matched[y.matched.length-1];if(I&&I.redirect){const{redirect:C}=I;let L=typeof C=="function"?C(y):C;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=w(L):{path:L},L.params={}),G({query:y.query,hash:y.hash,params:"path"in L?{}:y.params},L)}}function se(y,I){const C=c=b(y),L=l.value,Y=y.state,oe=y.force,U=y.replace===!0,u=re(C);if(u)return se(G(w(u),{state:typeof u=="object"?G({},Y,u.state):Y,force:oe,replace:U}),I||C);const m=C;m.redirectedFrom=I;let h;return!oe&&Qc(r,L,C)&&(h=nn(16,{to:m,from:L}),kt(L,L,!0,!1)),(h?Promise.resolve(h):ye(m,L)).catch(v=>Ze(v)?Ze(v,2)?v:Te(v):Z(v,m,L)).then(v=>{if(v){if(Ze(v,2))return se(G({replace:U},w(v.to),{state:typeof v.to=="object"?G({},Y,v.to.state):Y,force:oe}),I||m)}else v=ft(m,L,!0,U,Y);return Ie(m,L,v),v})}function Oe(y,I){const C=O(y,I);return C?Promise.reject(C):Promise.resolve()}function ye(y,I){let C;const[L,Y,oe]=qu(y,I);C=Qr(L.reverse(),"beforeRouteLeave",y,I);for(const u of L)u.leaveGuards.forEach(m=>{C.push(pt(m,y,I))});const U=Oe.bind(null,y,I);return C.push(U),zt(C).then(()=>{C=[];for(const u of i.list())C.push(pt(u,y,I));return C.push(U),zt(C)}).then(()=>{C=Qr(Y,"beforeRouteUpdate",y,I);for(const u of Y)u.updateGuards.forEach(m=>{C.push(pt(m,y,I))});return C.push(U),zt(C)}).then(()=>{C=[];for(const u of y.matched)if(u.beforeEnter&&!I.matched.includes(u))if(Ke(u.beforeEnter))for(const m of u.beforeEnter)C.push(pt(m,y,I));else C.push(pt(u.beforeEnter,y,I));return C.push(U),zt(C)}).then(()=>(y.matched.forEach(u=>u.enterCallbacks={}),C=Qr(oe,"beforeRouteEnter",y,I),C.push(U),zt(C))).then(()=>{C=[];for(const u of o.list())C.push(pt(u,y,I));return C.push(U),zt(C)}).catch(u=>Ze(u,8)?u:Promise.reject(u))}function Ie(y,I,C){for(const L of s.list())L(y,I,C)}function ft(y,I,C,L,Y){const oe=O(y,I);if(oe)return oe;const U=I===ut,u=Ht?history.state:{};C&&(L||U?a.replace(y.fullPath,G({scroll:U&&u&&u.scroll},Y)):a.push(y.fullPath,Y)),l.value=y,kt(y,I,C,U),Te()}let We;function jt(){We||(We=a.listen((y,I,C)=>{if(!Kn.listening)return;const L=b(y),Y=re(L);if(Y){se(G(Y,{replace:!0}),L).catch(yn);return}c=L;const oe=l.value;Ht&&iu(Vi(oe.fullPath,C.delta),jr()),ye(L,oe).catch(U=>Ze(U,12)?U:Ze(U,2)?(se(U.to,L).then(u=>{Ze(u,20)&&!C.delta&&C.type===In.pop&&a.go(-1,!1)}).catch(yn),Promise.reject()):(C.delta&&a.go(-C.delta,!1),Z(U,L,oe))).then(U=>{U=U||ft(L,oe,!1),U&&(C.delta&&!Ze(U,8)?a.go(-C.delta,!1):C.type===In.pop&&Ze(U,20)&&a.go(-1,!1)),Ie(L,oe,U)}).catch(yn)}))}let xt=dn(),fn=dn(),ce;function Z(y,I,C){Te(y);const L=fn.list();return L.length?L.forEach(Y=>Y(y,I,C)):console.error(y),Promise.reject(y)}function Q(){return ce&&l.value!==ut?Promise.resolve():new Promise((y,I)=>{xt.add([y,I])})}function Te(y){return ce||(ce=!y,jt(),xt.list().forEach(([I,C])=>y?C(y):I()),xt.reset()),y}function kt(y,I,C,L){const{scrollBehavior:Y}=e;if(!Ht||!Y)return Promise.resolve();const oe=!C&&ou(Vi(y.fullPath,0))||(L||!C)&&history.state&&history.state.scroll||null;return Va().then(()=>Y(y,I,oe)).then(U=>U&&au(U)).catch(U=>Z(U,y,I))}const Ne=y=>a.go(y);let xe;const $t=new Set,Kn={currentRoute:l,listening:!0,addRoute:g,removeRoute:A,hasRoute:F,getRoutes:S,resolve:b,options:e,push:D,replace:K,go:Ne,back:()=>Ne(-1),forward:()=>Ne(1),beforeEach:i.add,beforeResolve:o.add,afterEach:s.add,onError:fn.add,isReady:Q,install(y){const I=this;y.component("RouterLink",ya),y.component("RouterView",Ws),y.config.globalProperties.$router=I,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>fe(l)}),Ht&&!xe&&l.value===ut&&(xe=!0,D(a.location).catch(Y=>{}));const C={};for(const Y in ut)C[Y]=X(()=>l.value[Y]);y.provide(ti,I),y.provide(Ks,$n(C)),y.provide(ba,l);const L=y.unmount;$t.add(y),y.unmount=function(){$t.delete(y),$t.size<1&&(c=ut,We&&We(),We=null,l.value=ut,xe=!1,ce=!1),L()}}};return Kn}function zt(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function qu(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const s=t.matched[o];s&&(e.matched.find(c=>tn(c,s))?r.push(s):n.push(s));const l=e.matched[o];l&&(t.matched.find(c=>tn(c,l))||a.push(l))}return[n,r,a]}const zn=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Vu={__name:"App",setup(e){return(t,n)=>(Ae(),je(Ce,null,[he("header",null,[he("nav",null,[pe(fe(ya),{class:"nav-link",to:"/"},{default:sa(()=>[Sn("Home")]),_:1}),pe(fe(ya),{class:"nav-link",to:"/about"},{default:sa(()=>[Sn("About")]),_:1})])]),pe(fe(Ws))],64))}},Gu=zn(Vu,[["__scopeId","data-v-63bef986"]]),Fe=rt(5),Nt=rt(0),cr=rt(6),Xu=[[0,0,0,0,0],[-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1]],ht=rt([]),Qu=[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],ur=rt([]),_a=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997,1009,1013,1019,1021],pn=rt(0);const Ju=["onClick"],Zu={__name:"GameCard",props:["row","col","state"],setup(e){const{row:t,col:n,state:r}=e,a=X(()=>Nt.value===t),i=()=>{a.value&&(ht.value[t][n]=(ht.value[t][n]+1)%4)},o=X(()=>ht.value[t][n]===-1?"":ht.value[t][n]);return(s,l)=>(Ae(),je("div",{class:jn(["box",{active:fe(a),isRight:e.state===1,isWrong:e.state===2}]),onClick:Xt(i,["prevent"]),onMousedown:l[0]||(l[0]=Xt(()=>{},["prevent"])),onMousemove:l[1]||(l[1]=Xt(()=>{},["prevent"]))},gn(fe(o)),43,Ju))}},ed=zn(Zu,[["__scopeId","data-v-e240bf2e"]]);const td={class:"row"},nd={__name:"GameRow",props:["row"],emits:["success, failure"],setup(e,{emit:t}){const{row:n}=e,r=X(()=>Nt.value===n);Gt(r,l=>{if(console.log(l,n),l)for(let c=0;c<Fe.value;c++)ht.value[n][c]=0});const a=X(()=>{if(!r.value)return"";var l=0;for(let c=Fe.value-1;c>=0;c--)l+=ht.value[n][c]*Math.pow(4,Fe.value-1-c);return l}),i=X(()=>_a.includes(a.value)),o=()=>{let l=new Array(Fe.value),c=pn.value;for(let d=Fe.value-1;d>=0;d--)l[d]=c%4,c=Math.floor(c/4);let f=!0;for(let d=0;d<Fe.value;d++)l[d]===ht.value[n][d]?setTimeout(()=>ur.value[n][d]=1,500*d):(setTimeout(()=>ur.value[n][d]=2,500*d),f=!1);if(Nt.value++,f){t("success");return}if(Nt.value>=cr.value){t("failure");return}},s=l=>ur.value[n][l-1];return(l,c)=>{const f=_s("font-awesome-icon");return Ae(),je(Ce,null,[fe(r)?(Ae(),je("span",{key:0,class:jn(["number",{prime:fe(i)}])},gn(fe(a)),3)):br("",!0),he("div",td,[(Ae(!0),je(Ce,null,ws(fe(Fe),d=>(Ae(),ma(ed,{row:e.row,col:d-1,key:d,state:s(d)},null,8,["row","col","state"]))),128))]),fe(r)&&fe(i)?(Ae(),ma(f,{key:1,class:"arrow",icon:"fa-solid fa-chevron-right",onClick:Xt(o,["prevent"])},null,8,["onClick"])):br("",!0)],64)}}},rd=zn(nd,[["__scopeId","data-v-e0d8cb19"]]);const Ys=e=>(ds("data-v-1d293ba3"),e=e(),ms(),e),ad=Ys(()=>he("h1",{class:"title"},"Primedle in base 4",-1)),id={key:0,class:"popup"},od=Ys(()=>he("h3",null,"Congratulations",-1)),sd=["onClick"],ld={key:1,class:"popup"},fd=["onClick"],cd={class:"table"},ud={__name:"HomeView",setup(e){const t=async()=>{r.value=!1,n.value=!1,ht.value=JSON.parse(JSON.stringify(Xu)),Nt.value=0,ur.value=JSON.parse(JSON.stringify(Qu)),await Va();const s=Math.floor(Math.random()*_a.length);pn.value=_a[s]},n=rt(!1),r=rt(!1);t();const a=()=>{Nt.value=cr.value,setTimeout(()=>n.value=!0,500*Fe.value)},i=()=>{Nt.value=cr.value,setTimeout(()=>r.value=!0,500*Fe.value)},o=X(()=>{let s=new Array(Fe.value),l=pn.value;for(let c=Fe.value-1;c>=0;c--)s[c]=l%4,l=Math.floor(l/4);return s.join(" ")});return(s,l)=>(Ae(),je("main",null,[ad,n.value?(Ae(),je("div",id,[he("h1",null,gn(fe(pn)),1),od,he("button",{onClick:Xt(t,["prevent"])},"Another game",8,sd)])):br("",!0),r.value?(Ae(),je("div",ld,[he("h1",null,gn(fe(pn)),1),he("h3",null,gn(fe(o)),1),he("button",{onClick:Xt(t,["prevent"])},"Another game",8,fd)])):br("",!0),he("div",cd,[(Ae(!0),je(Ce,null,ws(fe(cr),c=>(Ae(),je("div",{key:c},[pe(rd,{row:c-1,onSuccess:a,onFailure:i},null,8,["row"])]))),128))])]))}},dd=zn(ud,[["__scopeId","data-v-1d293ba3"]]);const md={},qs=e=>(ds("data-v-d8542cbe"),e=e(),ms(),e),pd={class:"about"},hd=qs(()=>he("h1",null,"Primedle: Wordle for math nerds",-1)),gd=qs(()=>he("p",null,"Want to familiarize yourself with 2 to 3 digit prime numbers? Or to feel home in base 4? Try to guess the prime number I am thinking in its base 4 representation.",-1)),vd={class:"lower"},bd={href:"https://twitter.com/michael_yhuang"};function yd(e,t){const n=_s("font-awesome-icon");return Ae(),je("div",pd,[hd,gd,he("p",vd,[Sn(" Made by "),he("a",bd,[pe(n,{icon:"fa-brands fa-twitter"}),Sn("@michael_yhuang")])])])}const _d=zn(md,[["render",yd],["__scopeId","data-v-d8542cbe"]]),wd=Yu({history:cu("/primedle/"),routes:[{path:"/",name:"home",component:dd},{path:"/about",name:"about",component:_d}]});function lo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?lo(Object(n),!0).forEach(function(r){me(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):lo(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function _r(e){return _r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_r(e)}function xd(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function fo(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function kd(e,t,n){return t&&fo(e.prototype,t),n&&fo(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function me(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ni(e,t){return Ad(e)||Pd(e,t)||Vs(e,t)||Sd()}function Hn(e){return Ed(e)||Od(e)||Vs(e)||Cd()}function Ed(e){if(Array.isArray(e))return wa(e)}function Ad(e){if(Array.isArray(e))return e}function Od(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Pd(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Vs(e,t){if(e){if(typeof e=="string")return wa(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return wa(e,t)}}function wa(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Cd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Sd(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var co=function(){},ri={},Gs={},Xs=null,Qs={mark:co,measure:co};try{typeof window<"u"&&(ri=window),typeof document<"u"&&(Gs=document),typeof MutationObserver<"u"&&(Xs=MutationObserver),typeof performance<"u"&&(Qs=performance)}catch{}var Rd=ri.navigator||{},uo=Rd.userAgent,mo=uo===void 0?"":uo,yt=ri,ne=Gs,po=Xs,Qn=Qs;yt.document;var lt=!!ne.documentElement&&!!ne.head&&typeof ne.addEventListener=="function"&&typeof ne.createElement=="function",Js=~mo.indexOf("MSIE")||~mo.indexOf("Trident/"),Jn,Zn,er,tr,nr,at="___FONT_AWESOME___",xa=16,Zs="fa",el="svg-inline--fa",Ft="data-fa-i2svg",ka="data-fa-pseudo-element",Id="data-fa-pseudo-element-pending",ai="data-prefix",ii="data-icon",ho="fontawesome-i2svg",Td="async",Nd=["HTML","HEAD","STYLE","SCRIPT"],tl=function(){try{return!0}catch{return!1}}(),te="classic",le="sharp",oi=[te,le];function Bn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[te]}})}var Tn=Bn((Jn={},me(Jn,te,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),me(Jn,le,{fa:"solid",fass:"solid","fa-solid":"solid"}),Jn)),Nn=Bn((Zn={},me(Zn,te,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),me(Zn,le,{solid:"fass"}),Zn)),Mn=Bn((er={},me(er,te,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),me(er,le,{fass:"fa-solid"}),er)),Md=Bn((tr={},me(tr,te,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),me(tr,le,{"fa-solid":"fass"}),tr)),Fd=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,nl="fa-layers-text",Ld=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,jd=Bn((nr={},me(nr,te,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),me(nr,le,{900:"fass"}),nr)),rl=[1,2,3,4,5,6,7,8,9,10],$d=rl.concat([11,12,13,14,15,16,17,18,19,20]),Dd=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],St={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Fn=new Set;Object.keys(Nn[te]).map(Fn.add.bind(Fn));Object.keys(Nn[le]).map(Fn.add.bind(Fn));var zd=[].concat(oi,Hn(Fn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",St.GROUP,St.SWAP_OPACITY,St.PRIMARY,St.SECONDARY]).concat(rl.map(function(e){return"".concat(e,"x")})).concat($d.map(function(e){return"w-".concat(e)})),wn=yt.FontAwesomeConfig||{};function Hd(e){var t=ne.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Bd(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ne&&typeof ne.querySelector=="function"){var Ud=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ud.forEach(function(e){var t=ni(e,2),n=t[0],r=t[1],a=Bd(Hd(n));a!=null&&(wn[r]=a)})}var al={styleDefault:"solid",familyDefault:"classic",cssPrefix:Zs,replacementClass:el,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};wn.familyPrefix&&(wn.cssPrefix=wn.familyPrefix);var rn=T(T({},al),wn);rn.autoReplaceSvg||(rn.observeMutations=!1);var M={};Object.keys(al).forEach(function(e){Object.defineProperty(M,e,{enumerable:!0,set:function(n){rn[e]=n,xn.forEach(function(r){return r(M)})},get:function(){return rn[e]}})});Object.defineProperty(M,"familyPrefix",{enumerable:!0,set:function(t){rn.cssPrefix=t,xn.forEach(function(n){return n(M)})},get:function(){return rn.cssPrefix}});yt.FontAwesomeConfig=M;var xn=[];function Kd(e){return xn.push(e),function(){xn.splice(xn.indexOf(e),1)}}var dt=xa,Qe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Wd(e){if(!(!e||!lt)){var t=ne.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ne.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return ne.head.insertBefore(t,r),e}}var Yd="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ln(){for(var e=12,t="";e-- >0;)t+=Yd[Math.random()*62|0];return t}function ln(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function si(e){return e.classList?ln(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function il(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function qd(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(il(e[n]),'" ')},"").trim()}function $r(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function li(e){return e.size!==Qe.size||e.x!==Qe.x||e.y!==Qe.y||e.rotate!==Qe.rotate||e.flipX||e.flipY}function Vd(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Gd(e){var t=e.transform,n=e.width,r=n===void 0?xa:n,a=e.height,i=a===void 0?xa:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Js?l+="translate(".concat(t.x/dt-r/2,"em, ").concat(t.y/dt-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/dt,"em), calc(-50% + ").concat(t.y/dt,"em)) "):l+="translate(".concat(t.x/dt,"em, ").concat(t.y/dt,"em) "),l+="scale(".concat(t.size/dt*(t.flipX?-1:1),", ").concat(t.size/dt*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Xd=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function ol(){var e=Zs,t=el,n=M.cssPrefix,r=M.replacementClass,a=Xd;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var go=!1;function Jr(){M.autoAddCss&&!go&&(Wd(ol()),go=!0)}var Qd={mixout:function(){return{dom:{css:ol,insertCss:Jr}}},hooks:function(){return{beforeDOMElementCreation:function(){Jr()},beforeI2svg:function(){Jr()}}}},it=yt||{};it[at]||(it[at]={});it[at].styles||(it[at].styles={});it[at].hooks||(it[at].hooks={});it[at].shims||(it[at].shims=[]);var He=it[at],sl=[],Jd=function e(){ne.removeEventListener("DOMContentLoaded",e),wr=1,sl.map(function(t){return t()})},wr=!1;lt&&(wr=(ne.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ne.readyState),wr||ne.addEventListener("DOMContentLoaded",Jd));function Zd(e){lt&&(wr?setTimeout(e,0):sl.push(e))}function Un(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?il(e):"<".concat(t," ").concat(qd(r),">").concat(i.map(Un).join(""),"</").concat(t,">")}function vo(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var em=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Zr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?em(n,a):n,l,c,f;for(r===void 0?(l=1,f=t[i[0]]):(l=0,f=r);l<o;l++)c=i[l],f=s(f,t[c],c,t);return f};function tm(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Ea(e){var t=tm(e);return t.length===1?t[0].toString(16):null}function nm(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function bo(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Aa(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=bo(t);typeof He.hooks.addPack=="function"&&!a?He.hooks.addPack(e,bo(t)):He.styles[e]=T(T({},He.styles[e]||{}),i),e==="fas"&&Aa("fa",t)}var rr,ar,ir,Ut=He.styles,rm=He.shims,am=(rr={},me(rr,te,Object.values(Mn[te])),me(rr,le,Object.values(Mn[le])),rr),fi=null,ll={},fl={},cl={},ul={},dl={},im=(ar={},me(ar,te,Object.keys(Tn[te])),me(ar,le,Object.keys(Tn[le])),ar);function om(e){return~zd.indexOf(e)}function sm(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!om(a)?a:null}var ml=function(){var t=function(i){return Zr(Ut,function(o,s,l){return o[l]=Zr(s,i,{}),o},{})};ll=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),fl=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),dl=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Ut||M.autoFetchSvg,r=Zr(rm,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});cl=r.names,ul=r.unicodes,fi=Dr(M.styleDefault,{family:M.familyDefault})};Kd(function(e){fi=Dr(e.styleDefault,{family:M.familyDefault})});ml();function ci(e,t){return(ll[e]||{})[t]}function lm(e,t){return(fl[e]||{})[t]}function Rt(e,t){return(dl[e]||{})[t]}function pl(e){return cl[e]||{prefix:null,iconName:null}}function fm(e){var t=ul[e],n=ci("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function _t(){return fi}var ui=function(){return{prefix:null,iconName:null,rest:[]}};function Dr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?te:n,a=Tn[r][e],i=Nn[r][e]||Nn[r][a],o=e in He.styles?e:null;return i||o||null}var yo=(ir={},me(ir,te,Object.keys(Mn[te])),me(ir,le,Object.keys(Mn[le])),ir);function zr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},me(t,te,"".concat(M.cssPrefix,"-").concat(te)),me(t,le,"".concat(M.cssPrefix,"-").concat(le)),t),o=null,s=te;(e.includes(i[te])||e.some(function(c){return yo[te].includes(c)}))&&(s=te),(e.includes(i[le])||e.some(function(c){return yo[le].includes(c)}))&&(s=le);var l=e.reduce(function(c,f){var d=sm(M.cssPrefix,f);if(Ut[f]?(f=am[s].includes(f)?Md[s][f]:f,o=f,c.prefix=f):im[s].indexOf(f)>-1?(o=f,c.prefix=Dr(f,{family:s})):d?c.iconName=d:f!==M.replacementClass&&f!==i[te]&&f!==i[le]&&c.rest.push(f),!a&&c.prefix&&c.iconName){var p=o==="fa"?pl(c.iconName):{},g=Rt(c.prefix,c.iconName);p.prefix&&(o=null),c.iconName=p.iconName||g||c.iconName,c.prefix=p.prefix||c.prefix,c.prefix==="far"&&!Ut.far&&Ut.fas&&!M.autoFetchSvg&&(c.prefix="fas")}return c},ui());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===le&&(Ut.fass||M.autoFetchSvg)&&(l.prefix="fass",l.iconName=Rt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=_t()||"fas"),l}var cm=function(){function e(){xd(this,e),this.definitions={}}return kd(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=T(T({},n.definitions[s]||{}),o[s]),Aa(s,o[s]);var l=Mn[te][s];l&&Aa(l,o[s]),ml()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,f=c[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(n[s][d]=c)}),n[s][l]=c}),n}}]),e}(),_o=[],Kt={},Qt={},um=Object.keys(Qt);function dm(e,t){var n=t.mixoutsTo;return _o=e,Kt={},Object.keys(Qt).forEach(function(r){um.indexOf(r)===-1&&delete Qt[r]}),_o.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),_r(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Kt[o]||(Kt[o]=[]),Kt[o].push(i[o])})}r.provides&&r.provides(Qt)}),n}function Oa(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Kt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Lt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Kt[e]||[];a.forEach(function(i){i.apply(null,n)})}function ot(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Qt[e]?Qt[e].apply(null,t):void 0}function Pa(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||_t();if(t)return t=Rt(n,t)||t,vo(hl.definitions,n,t)||vo(He.styles,n,t)}var hl=new cm,mm=function(){M.autoReplaceSvg=!1,M.observeMutations=!1,Lt("noAuto")},pm={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return lt?(Lt("beforeI2svg",t),ot("pseudoElements2svg",t),ot("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;M.autoReplaceSvg===!1&&(M.autoReplaceSvg=!0),M.observeMutations=!0,Zd(function(){gm({autoReplaceSvgRoot:n}),Lt("watch",t)})}},hm={icon:function(t){if(t===null)return null;if(_r(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Rt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Dr(t[0]);return{prefix:r,iconName:Rt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(M.cssPrefix,"-"))>-1||t.match(Fd))){var a=zr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||_t(),iconName:Rt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=_t();return{prefix:i,iconName:Rt(i,t)||t}}}},Re={noAuto:mm,config:M,dom:pm,parse:hm,library:hl,findIconDefinition:Pa,toHtml:Un},gm=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ne:n;(Object.keys(He.styles).length>0||M.autoFetchSvg)&&lt&&M.autoReplaceSvg&&Re.dom.i2svg({node:r})};function Hr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Un(r)})}}),Object.defineProperty(e,"node",{get:function(){if(lt){var r=ne.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function vm(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(li(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=$r(T(T({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function bm(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(M.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:T(T({},a),{},{id:o}),children:r}]}]}function di(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,f=e.titleId,d=e.extra,p=e.watchable,g=p===void 0?!1:p,A=r.found?r:n,S=A.width,F=A.height,b=a==="fak",w=[M.replacementClass,i?"".concat(M.cssPrefix,"-").concat(i):""].filter(function(ye){return d.classes.indexOf(ye)===-1}).filter(function(ye){return ye!==""||!!ye}).concat(d.classes).join(" "),O={children:[],attributes:T(T({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:w,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(F)})},D=b&&!~d.classes.indexOf("fa-fw")?{width:"".concat(S/F*16*.0625,"em")}:{};g&&(O.attributes[Ft]=""),l&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(f||Ln())},children:[l]}),delete O.attributes.title);var K=T(T({},O),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:T(T({},D),d.styles)}),re=r.found&&n.found?ot("generateAbstractMask",K)||{children:[],attributes:{}}:ot("generateAbstractIcon",K)||{children:[],attributes:{}},se=re.children,Oe=re.attributes;return K.children=se,K.attributes=Oe,s?bm(K):vm(K)}function wo(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=T(T(T({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[Ft]="");var f=T({},o.styles);li(a)&&(f.transform=Gd({transform:a,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var d=$r(f);d.length>0&&(c.style=d);var p=[];return p.push({tag:"span",attributes:c,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function ym(e){var t=e.content,n=e.title,r=e.extra,a=T(T(T({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=$r(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var ea=He.styles;function Ca(e){var t=e[0],n=e[1],r=e.slice(4),a=ni(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(M.cssPrefix,"-").concat(St.GROUP)},children:[{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(St.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(St.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var _m={found:!1,width:512,height:512};function wm(e,t){!tl&&!M.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Sa(e,t){var n=t;return t==="fa"&&M.styleDefault!==null&&(t=_t()),new Promise(function(r,a){if(ot("missingIconAbstract"),n==="fa"){var i=pl(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&ea[t]&&ea[t][e]){var o=ea[t][e];return r(Ca(o))}wm(e,t),r(T(T({},_m),{},{icon:M.showMissingIcons&&e?ot("missingIconAbstract")||{}:{}}))})}var xo=function(){},Ra=M.measurePerformance&&Qn&&Qn.mark&&Qn.measure?Qn:{mark:xo,measure:xo},hn='FA "6.2.1"',xm=function(t){return Ra.mark("".concat(hn," ").concat(t," begins")),function(){return gl(t)}},gl=function(t){Ra.mark("".concat(hn," ").concat(t," ends")),Ra.measure("".concat(hn," ").concat(t),"".concat(hn," ").concat(t," begins"),"".concat(hn," ").concat(t," ends"))},mi={begin:xm,end:gl},dr=function(){};function ko(e){var t=e.getAttribute?e.getAttribute(Ft):null;return typeof t=="string"}function km(e){var t=e.getAttribute?e.getAttribute(ai):null,n=e.getAttribute?e.getAttribute(ii):null;return t&&n}function Em(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(M.replacementClass)}function Am(){if(M.autoReplaceSvg===!0)return mr.replace;var e=mr[M.autoReplaceSvg];return e||mr.replace}function Om(e){return ne.createElementNS("http://www.w3.org/2000/svg",e)}function Pm(e){return ne.createElement(e)}function vl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Om:Pm:n;if(typeof e=="string")return ne.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(vl(o,{ceFn:r}))}),a}function Cm(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var mr={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(vl(a),n)}),n.getAttribute(Ft)===null&&M.keepOriginalSource){var r=ne.createComment(Cm(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~si(n).indexOf(M.replacementClass))return mr.replace(t);var a=new RegExp("".concat(M.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===M.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Un(s)}).join(`
`);n.setAttribute(Ft,""),n.innerHTML=o}};function Eo(e){e()}function bl(e,t){var n=typeof t=="function"?t:dr;if(e.length===0)n();else{var r=Eo;M.mutateApproach===Td&&(r=yt.requestAnimationFrame||Eo),r(function(){var a=Am(),i=mi.begin("mutate");e.map(a),i(),n()})}}var pi=!1;function yl(){pi=!0}function Ia(){pi=!1}var xr=null;function Ao(e){if(po&&M.observeMutations){var t=e.treeCallback,n=t===void 0?dr:t,r=e.nodeCallback,a=r===void 0?dr:r,i=e.pseudoElementsCallback,o=i===void 0?dr:i,s=e.observeMutationsRoot,l=s===void 0?ne:s;xr=new po(function(c){if(!pi){var f=_t();ln(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!ko(d.addedNodes[0])&&(M.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&M.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&ko(d.target)&&~Dd.indexOf(d.attributeName))if(d.attributeName==="class"&&km(d.target)){var p=zr(si(d.target)),g=p.prefix,A=p.iconName;d.target.setAttribute(ai,g||f),A&&d.target.setAttribute(ii,A)}else Em(d.target)&&a(d.target)})}}),lt&&xr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Sm(){xr&&xr.disconnect()}function Rm(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Im(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=zr(si(e));return a.prefix||(a.prefix=_t()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=lm(a.prefix,e.innerText)||ci(a.prefix,Ea(e.innerText))),!a.iconName&&M.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Tm(e){var t=ln(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return M.autoA11y&&(n?t["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(r||Ln()):(t["aria-hidden"]="true",t.focusable="false")),t}function Nm(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Qe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Oo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Im(e),r=n.iconName,a=n.prefix,i=n.rest,o=Tm(e),s=Oa("parseNodeAttributes",{},e),l=t.styleParser?Rm(e):[];return T({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Qe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Mm=He.styles;function _l(e){var t=M.autoReplaceSvg==="nest"?Oo(e,{styleParser:!1}):Oo(e);return~t.extra.classes.indexOf(nl)?ot("generateLayersText",e,t):ot("generateSvgReplacementMutation",e,t)}var wt=new Set;oi.map(function(e){wt.add("fa-".concat(e))});Object.keys(Tn[te]).map(wt.add.bind(wt));Object.keys(Tn[le]).map(wt.add.bind(wt));wt=Hn(wt);function Po(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!lt)return Promise.resolve();var n=ne.documentElement.classList,r=function(d){return n.add("".concat(ho,"-").concat(d))},a=function(d){return n.remove("".concat(ho,"-").concat(d))},i=M.autoFetchSvg?wt:oi.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Mm));i.includes("fa")||i.push("fa");var o=[".".concat(nl,":not([").concat(Ft,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(Ft,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=ln(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=mi.begin("onTree"),c=s.reduce(function(f,d){try{var p=_l(d);p&&f.push(p)}catch(g){tl||g.name==="MissingIcon"&&console.error(g)}return f},[]);return new Promise(function(f,d){Promise.all(c).then(function(p){bl(p,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),f()})}).catch(function(p){l(),d(p)})})}function Fm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;_l(e).then(function(n){n&&bl([n],t)})}function Lm(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Pa(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Pa(a||{})),e(r,T(T({},n),{},{mask:a}))}}var jm=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Qe:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,f=c===void 0?null:c,d=n.title,p=d===void 0?null:d,g=n.titleId,A=g===void 0?null:g,S=n.classes,F=S===void 0?[]:S,b=n.attributes,w=b===void 0?{}:b,O=n.styles,D=O===void 0?{}:O;if(t){var K=t.prefix,re=t.iconName,se=t.icon;return Hr(T({type:"icon"},t),function(){return Lt("beforeDOMElementCreation",{iconDefinition:t,params:n}),M.autoA11y&&(p?w["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(A||Ln()):(w["aria-hidden"]="true",w.focusable="false")),di({icons:{main:Ca(se),mask:l?Ca(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:K,iconName:re,transform:T(T({},Qe),a),symbol:o,title:p,maskId:f,titleId:A,extra:{attributes:w,styles:D,classes:F}})})}},$m={mixout:function(){return{icon:Lm(jm)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Po,n.nodeCallback=Fm,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?ne:r,i=n.callback,o=i===void 0?function(){}:i;return Po(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,f=r.mask,d=r.maskId,p=r.extra;return new Promise(function(g,A){Promise.all([Sa(a,s),f.iconName?Sa(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var F=ni(S,2),b=F[0],w=F[1];g([n,di({icons:{main:b,mask:w},prefix:s,iconName:a,transform:l,symbol:c,maskId:d,title:i,titleId:o,extra:p,watchable:!0})])}).catch(A)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=$r(s);l.length>0&&(a.style=l);var c;return li(o)&&(c=ot("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Dm={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Hr({type:"layer"},function(){Lt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(M.cssPrefix,"-layers")].concat(Hn(i)).join(" ")},children:o}]})}}}},zm={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,f=r.styles,d=f===void 0?{}:f;return Hr({type:"counter",content:n},function(){return Lt("beforeDOMElementCreation",{content:n,params:r}),ym({content:n.toString(),title:i,extra:{attributes:c,styles:d,classes:["".concat(M.cssPrefix,"-layers-counter")].concat(Hn(s))}})})}}}},Hm={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Qe:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,f=r.attributes,d=f===void 0?{}:f,p=r.styles,g=p===void 0?{}:p;return Hr({type:"text",content:n},function(){return Lt("beforeDOMElementCreation",{content:n,params:r}),wo({content:n,transform:T(T({},Qe),i),title:s,extra:{attributes:d,styles:g,classes:["".concat(M.cssPrefix,"-layers-text")].concat(Hn(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Js){var c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/c,l=f.height/c}return M.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,wo({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Bm=new RegExp('"',"ug"),Co=[1105920,1112319];function Um(e){var t=e.replace(Bm,""),n=nm(t,0),r=n>=Co[0]&&n<=Co[1],a=t.length===2?t[0]===t[1]:!1;return{value:Ea(a?t[0]:t),isSecondary:r||a}}function So(e,t){var n="".concat(Id).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=ln(e.children),o=i.filter(function(se){return se.getAttribute(ka)===t})[0],s=yt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Ld),c=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&f!=="none"&&f!==""){var d=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?le:te,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Nn[p][l[2].toLowerCase()]:jd[p][c],A=Um(d),S=A.value,F=A.isSecondary,b=l[0].startsWith("FontAwesome"),w=ci(g,S),O=w;if(b){var D=fm(S);D.iconName&&D.prefix&&(w=D.iconName,g=D.prefix)}if(w&&!F&&(!o||o.getAttribute(ai)!==g||o.getAttribute(ii)!==O)){e.setAttribute(n,O),o&&e.removeChild(o);var K=Nm(),re=K.extra;re.attributes[ka]=t,Sa(w,g).then(function(se){var Oe=di(T(T({},K),{},{icons:{main:se,mask:ui()},prefix:g,iconName:O,extra:re,watchable:!0})),ye=ne.createElement("svg");t==="::before"?e.insertBefore(ye,e.firstChild):e.appendChild(ye),ye.outerHTML=Oe.map(function(Ie){return Un(Ie)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Km(e){return Promise.all([So(e,"::before"),So(e,"::after")])}function Wm(e){return e.parentNode!==document.head&&!~Nd.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ka)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ro(e){if(lt)return new Promise(function(t,n){var r=ln(e.querySelectorAll("*")).filter(Wm).map(Km),a=mi.begin("searchPseudoElements");yl(),Promise.all(r).then(function(){a(),Ia(),t()}).catch(function(){a(),Ia(),n()})})}var Ym={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ro,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?ne:r;M.searchPseudoElements&&Ro(a)}}},Io=!1,qm={mixout:function(){return{dom:{unwatch:function(){yl(),Io=!0}}}},hooks:function(){return{bootstrap:function(){Ao(Oa("mutationObserverCallbacks",{}))},noAuto:function(){Sm()},watch:function(n){var r=n.observeMutationsRoot;Io?Ia():Ao(Oa("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},To=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Vm={mixout:function(){return{parse:{transform:function(n){return To(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=To(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(c," ").concat(f)},p={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:d,path:p};return{tag:"g",attributes:T({},g.outer),children:[{tag:"g",attributes:T({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:T(T({},r.icon.attributes),g.path)}]}]}}}},ta={x:0,y:0,width:"100%",height:"100%"};function No(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Gm(e){return e.tag==="g"?e.children:[e]}var Xm={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?zr(a.split(" ").map(function(o){return o.trim()})):ui();return i.prefix||(i.prefix=_t()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,f=i.icon,d=o.width,p=o.icon,g=Vd({transform:l,containerWidth:d,iconWidth:c}),A={tag:"rect",attributes:T(T({},ta),{},{fill:"white"})},S=f.children?{children:f.children.map(No)}:{},F={tag:"g",attributes:T({},g.inner),children:[No(T({tag:f.tag,attributes:T(T({},f.attributes),g.path)},S))]},b={tag:"g",attributes:T({},g.outer),children:[F]},w="mask-".concat(s||Ln()),O="clip-".concat(s||Ln()),D={tag:"mask",attributes:T(T({},ta),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,b]},K={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:Gm(p)},D]};return r.push(K,{tag:"rect",attributes:T({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(w,")")},ta)}),{children:r,attributes:a}}}},Qm={provides:function(t){var n=!1;yt.matchMedia&&(n=yt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:T(T({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=T(T({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:T(T({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:T(T({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:T(T({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:T(T({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:T(T({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:T(T({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:T(T({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Jm={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Zm=[Qd,$m,Dm,zm,Hm,Ym,qm,Vm,Xm,Qm,Jm];dm(Zm,{mixoutsTo:Re});Re.noAuto;var wl=Re.config,ep=Re.library;Re.dom;var kr=Re.parse;Re.findIconDefinition;Re.toHtml;var tp=Re.icon;Re.layer;var np=Re.text;Re.counter;var rp={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]},ap={prefix:"fas",iconName:"chevron-right",icon:[384,512,[9002],"f054","M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]};function Mo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function $e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Mo(Object(n),!0).forEach(function(r){ke(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Mo(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Er(e){return Er=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Er(e)}function ke(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ip(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function op(e,t){if(e==null)return{};var n=ip(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Ta(e){return sp(e)||lp(e)||fp(e)||cp()}function sp(e){if(Array.isArray(e))return Na(e)}function lp(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function fp(e,t){if(e){if(typeof e=="string")return Na(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Na(e,t)}}function Na(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function cp(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var up=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},xl={exports:{}};(function(e){(function(t){var n=function(b,w,O){if(!c(w)||d(w)||p(w)||g(w)||l(w))return w;var D,K=0,re=0;if(f(w))for(D=[],re=w.length;K<re;K++)D.push(n(b,w[K],O));else{D={};for(var se in w)Object.prototype.hasOwnProperty.call(w,se)&&(D[b(se,O)]=n(b,w[se],O))}return D},r=function(b,w){w=w||{};var O=w.separator||"_",D=w.split||/(?=[A-Z])/;return b.split(D).join(O)},a=function(b){return A(b)?b:(b=b.replace(/[\-_\s]+(.)?/g,function(w,O){return O?O.toUpperCase():""}),b.substr(0,1).toLowerCase()+b.substr(1))},i=function(b){var w=a(b);return w.substr(0,1).toUpperCase()+w.substr(1)},o=function(b,w){return r(b,w).toLowerCase()},s=Object.prototype.toString,l=function(b){return typeof b=="function"},c=function(b){return b===Object(b)},f=function(b){return s.call(b)=="[object Array]"},d=function(b){return s.call(b)=="[object Date]"},p=function(b){return s.call(b)=="[object RegExp]"},g=function(b){return s.call(b)=="[object Boolean]"},A=function(b){return b=b-0,b===b},S=function(b,w){var O=w&&"process"in w?w.process:w;return typeof O!="function"?b:function(D,K){return O(D,b,K)}},F={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(b,w){return n(S(a,w),b)},decamelizeKeys:function(b,w){return n(S(o,w),b,w)},pascalizeKeys:function(b,w){return n(S(i,w),b)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=F:t.humps=F})(up)})(xl);var dp=xl.exports,mp=["class","style"];function pp(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=dp.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function hp(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function hi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return hi(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var f=e.attributes[c];switch(c){case"class":l.class=hp(f);break;case"style":l.style=pp(f);break;default:l.attrs[c]=f}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=op(n,mp);return Lr(e.tag,$e($e($e({},t),{},{class:a.class,style:$e($e({},a.style),o)},a.attrs),s),r)}var kl=!1;try{kl=!0}catch{}function gp(){if(!kl&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function kn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ke({},e,t):{}}function vp(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ke(t,"fa-".concat(e.size),e.size!==null),ke(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ke(t,"fa-pull-".concat(e.pull),e.pull!==null),ke(t,"fa-swap-opacity",e.swapOpacity),ke(t,"fa-bounce",e.bounce),ke(t,"fa-shake",e.shake),ke(t,"fa-beat",e.beat),ke(t,"fa-fade",e.fade),ke(t,"fa-beat-fade",e.beatFade),ke(t,"fa-flash",e.flash),ke(t,"fa-spin-pulse",e.spinPulse),ke(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Fo(e){if(e&&Er(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(kr.icon)return kr.icon(e);if(e===null)return null;if(Er(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var bp=Dn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=X(function(){return Fo(t.icon)}),i=X(function(){return kn("classes",vp(t))}),o=X(function(){return kn("transform",typeof t.transform=="string"?kr.transform(t.transform):t.transform)}),s=X(function(){return kn("mask",Fo(t.mask))}),l=X(function(){return tp(a.value,$e($e($e($e({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});Gt(l,function(f){if(!f)return gp("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=X(function(){return l.value?hi(l.value.abstract[0],{},r):null});return function(){return c.value}}});Dn({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=wl.familyPrefix,i=X(function(){return["".concat(a,"-layers")].concat(Ta(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return Lr("div",{class:i.value},r.default?r.default():[])}}});Dn({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=wl.familyPrefix,i=X(function(){return kn("classes",[].concat(Ta(t.counter?["".concat(a,"-layers-counter")]:[]),Ta(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=X(function(){return kn("transform",typeof t.transform=="string"?kr.transform(t.transform):t.transform)}),s=X(function(){var c=np(t.value.toString(),$e($e({},o.value),i.value)),f=c.abstract;return t.counter&&(f[0].attributes.class=f[0].attributes.class.replace("fa-layers-text","")),f[0]}),l=X(function(){return hi(s.value,{},r)});return function(){return l.value}}});ep.add(rp,ap);const El=Wc(Gu);El.use(wd);El.component("font-awesome-icon",bp).mount("#app");
