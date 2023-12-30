function t(){throw new Error("Cycle detected")}const e=Symbol.for("preact-signals");function o(){if(r>1)return void r--;let t,e=!1;for(;void 0!==n;){let o=n;for(n=void 0,a++;void 0!==o;){const i=o.o;if(o.o=void 0,o.f&=-3,!(8&o.f)&&d(o))try{o.c()}catch(o){e||(t=o,e=!0)}o=i}}if(a=0,r--,e)throw t}let i,n,s=0;let r=0,a=0,l=0;function c(t){if(void 0===i)return;let e=t.n;return void 0===e||e.t!==i?(e={i:0,S:t,p:i.s,n:void 0,t:i,e:void 0,x:void 0,r:e},void 0!==i.s&&(i.s.n=e),i.s=e,t.n=e,32&i.f&&t.S(e),e):-1===e.i?(e.i=0,void 0!==e.n&&(e.n.p=e.p,void 0!==e.p&&(e.p.n=e.n),e.p=i.s,e.n=void 0,i.s.n=e,i.s=e),e):void 0}function h(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}function d(t){for(let e=t.s;void 0!==e;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1}function u(t){for(let e=t.s;void 0!==e;e=e.n){const o=e.S.n;if(void 0!==o&&(e.r=o),e.S.n=e,e.i=-1,void 0===e.n){t.s=e;break}}}function p(t){let e,o=t.s;for(;void 0!==o;){const t=o.p;-1===o.i?(o.S.U(o),void 0!==t&&(t.n=o.n),void 0!==o.n&&(o.n.p=t)):e=o,o.S.n=o.r,void 0!==o.r&&(o.r=void 0),o=t}t.s=e}function f(t){h.call(this,void 0),this.x=t,this.s=void 0,this.g=l-1,this.f=4}function m(t){const e=t.u;if(t.u=void 0,"function"==typeof e){r++;const n=i;i=void 0;try{e()}catch(e){throw t.f&=-2,t.f|=8,b(t),e}finally{i=n,o()}}}function b(t){for(let e=t.s;void 0!==e;e=e.n)e.S.U(e);t.x=void 0,t.s=void 0,m(t)}function g(t){if(i!==this)throw new Error("Out-of-order effect");p(this),i=t,this.f&=-2,8&this.f&&b(this),o()}function v(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}function y(t){const e=new v(t);try{e.c()}catch(t){throw e.d(),t}return e.d.bind(e)}h.prototype.brand=e,h.prototype.h=function(){return!0},h.prototype.S=function(t){this.t!==t&&void 0===t.e&&(t.x=this.t,void 0!==this.t&&(this.t.e=t),this.t=t)},h.prototype.U=function(t){if(void 0!==this.t){const e=t.e,o=t.x;void 0!==e&&(e.x=o,t.e=void 0),void 0!==o&&(o.e=e,t.x=void 0),t===this.t&&(this.t=o)}},h.prototype.subscribe=function(t){const e=this;return y((function(){const o=e.value,i=32&this.f;this.f&=-33;try{t(o)}finally{this.f|=i}}))},h.prototype.valueOf=function(){return this.value},h.prototype.toString=function(){return this.value+""},h.prototype.toJSON=function(){return this.value},h.prototype.peek=function(){return this.v},Object.defineProperty(h.prototype,"value",{get(){const t=c(this);return void 0!==t&&(t.i=this.i),this.v},set(e){if(i instanceof f&&function(){throw new Error("Computed cannot have side-effects")}(),e!==this.v){a>100&&t(),this.v=e,this.i++,l++,r++;try{for(let t=this.t;void 0!==t;t=t.x)t.t.N()}finally{o()}}}}),(f.prototype=new h).h=function(){if(this.f&=-3,1&this.f)return!1;if(32==(36&this.f))return!0;if(this.f&=-5,this.g===l)return!0;if(this.g=l,this.f|=1,this.i>0&&!d(this))return this.f&=-2,!0;const t=i;try{u(this),i=this;const t=this.x();(16&this.f||this.v!==t||0===this.i)&&(this.v=t,this.f&=-17,this.i++)}catch(t){this.v=t,this.f|=16,this.i++}return i=t,p(this),this.f&=-2,!0},f.prototype.S=function(t){if(void 0===this.t){this.f|=36;for(let t=this.s;void 0!==t;t=t.n)t.S.S(t)}h.prototype.S.call(this,t)},f.prototype.U=function(t){if(void 0!==this.t&&(h.prototype.U.call(this,t),void 0===this.t)){this.f&=-33;for(let t=this.s;void 0!==t;t=t.n)t.S.U(t)}},f.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(let t=this.t;void 0!==t;t=t.x)t.t.N()}},f.prototype.peek=function(){if(this.h()||t(),16&this.f)throw this.v;return this.v},Object.defineProperty(f.prototype,"value",{get(){1&this.f&&t();const e=c(this);if(this.h(),void 0!==e&&(e.i=this.i),16&this.f)throw this.v;return this.v}}),v.prototype.c=function(){const t=this.S();try{if(8&this.f)return;if(void 0===this.x)return;const t=this.x();"function"==typeof t&&(this.u=t)}finally{t()}},v.prototype.S=function(){1&this.f&&t(),this.f|=1,this.f&=-9,m(this),u(this),r++;const e=i;return i=this,g.bind(this,e)},v.prototype.N=function(){2&this.f||(this.f|=2,this.o=n,n=this)},v.prototype.d=function(){this.f|=8,1&this.f||b(this)};var w=Object.freeze({__proto__:null,Signal:h,batch:function(t){if(r>0)return t();r++;try{return t()}finally{o()}},computed:function(t){return new f(t)},effect:y,signal:function(t){return new h(t)},untracked:function(t){if(s>0)return t();const e=i;i=void 0,s++;try{return t()}finally{s--,i=e}}});function x(t){var e;return"isSignalWatcherClass"in t&&t.isSignalWatcherClass?t:((e=class extends t{performUpdate(){var t;this.isUpdatePending&&(null===(t=this.__disposeEffect)||void 0===t||t.call(this),this.__disposeEffect=y((()=>{this.isUpdatePending=!0,super.performUpdate()})))}disconnectedCallback(){var t;null===(t=this.__disposeEffect)||void 0===t||t.call(this),this.__disposeEffect=void 0,super.disconnectedCallback()}}).isSignalWatcherClass=!0,e)}function _(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var $=function(t){for(var e=5381,o=t.length;o;)e=33*e^t.charCodeAt(--o);return e>>>0};var k=(t,e,o)=>[[t,e,o],[(t+120)%360,e,o],[(t+240)%360,e,o]];const C=(t,e,o)=>(o<0&&(o+=1),o>1&&(o-=1),o<1/6?t+6*(e-t)*o:o<.5?e:o<2/3?t+(e-t)*(2/3-o)*6:t);var E=(t,e,o)=>{let i,n,s;if(t/=360,0==e)i=n=s=o;else{const r=o<.5?o*(1+e):o+e-o*e,a=2*o-r;i=C(a,r,t+1/3),n=C(a,r,t),s=C(a,r,t-1/3)}return[Math.max(0,Math.min(Math.round(255*i),255)),Math.max(0,Math.min(Math.round(255*n),255)),Math.max(0,Math.min(Math.round(255*s),255))]};const A=$,S=k,L=E;var P=(t,e=1,o=.2,i)=>{const n=A(t),s=S(n%360,e,o),r=L(s[0][0],s[0][1],s[0][2]),a=L(s[1][0],s[1][1],s[1][2]),l=`rgb(${r[0]}, ${r[1]}, ${r[2]})`,c=`rgb(${a[0]}, ${a[1]}, ${a[2]})`,h=Math.floor(Math.random()*Date.now());return`<svg ${void 0!==i?`width="${i}px" height="${i}px"`:""} viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n\t\t<defs>\n\t\t\t<linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="${h}">\n\t\t\t\t<stop stop-color="${l}" offset="0%"></stop>\n\t\t\t\t<stop stop-color="${c}" offset="100%"></stop>\n\t\t\t</linearGradient>\n\t\t</defs>\n\t\t<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n\t\t\t<rect id="Rectangle" fill="url(#${h})" x="0" y="0" width="80" height="80"></rect>\n\t\t</g>\n\t</svg>`},z=_(P);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const O=globalThis,T=O.ShadowRoot&&(void 0===O.ShadyCSS||O.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,M=Symbol(),D=new WeakMap;let R=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==M)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(T&&void 0===t){const o=void 0!==e&&1===e.length;o&&(t=D.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&D.set(e,t))}return t}toString(){return this.cssText}};const N=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,o,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[i+1]),t[0]);return new R(o,t,M)},U=T?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return(t=>new R("string"==typeof t?t:t+"",void 0,M))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:F,defineProperty:B,getOwnPropertyDescriptor:I,getOwnPropertyNames:H,getOwnPropertySymbols:V,getPrototypeOf:j}=Object,W=globalThis,q=W.trustedTypes,K=q?q.emptyScript:"",G=W.reactiveElementPolyfillSupport,Z=(t,e)=>t,X={toAttribute(t,e){switch(e){case Boolean:t=t?K:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},Y=(t,e)=>!F(t,e),J={attribute:!0,type:String,converter:X,reflect:!1,hasChanged:Y};Symbol.metadata??=Symbol("metadata"),W.litPropertyMetadata??=new WeakMap;class Q extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=J){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(t,o,e);void 0!==i&&B(this.prototype,t,i)}}static getPropertyDescriptor(t,e,o){const{get:i,set:n}=I(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return i?.call(this)},set(e){const s=i?.call(this);n.call(this,e),this.requestUpdate(t,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??J}static _$Ei(){if(this.hasOwnProperty(Z("elementProperties")))return;const t=j(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Z("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Z("properties"))){const t=this.properties,e=[...H(t),...V(t)];for(const o of e)this.createProperty(o,t[o])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,o]of e)this.elementProperties.set(t,o)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const o=this._$Eu(t,e);void 0!==o&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(U(t))}else void 0!==t&&e.push(U(t));return e}static _$Eu(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$E_??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$E_?.delete(t)}_$ES(){const t=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(T)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const o of e){const e=document.createElement("style"),i=O.litNonce;void 0!==i&&e.setAttribute("nonce",i),e.textContent=o.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$E_?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EO(t,e){const o=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,o);if(void 0!==i&&!0===o.reflect){const n=(void 0!==o.converter?.toAttribute?o.converter:X).toAttribute(e,o.type);this._$Em=t,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){const o=this.constructor,i=o._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=o.getPropertyOptions(i),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:X;this._$Em=i,this[i]=n.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,o,i=!1,n){if(void 0!==t){if(o??=this.constructor.getPropertyOptions(t),!(o.hasChanged??Y)(i?n:this[t],e))return;this.C(t,e,o)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,o){this._$AL.has(t)||this._$AL.set(t,e),!0===o.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,o]of t)!0!==o.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],o)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$E_?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$ET()}catch(e){throw t=!1,this._$ET(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$E_?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EO(t,this[t]))),this._$ET()}updated(t){}firstUpdated(t){}}Q.elementStyles=[],Q.shadowRootOptions={mode:"open"},Q[Z("elementProperties")]=new Map,Q[Z("finalized")]=new Map,G?.({ReactiveElement:Q}),(W.reactiveElementVersions??=[]).push("2.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const tt=globalThis,et=tt.trustedTypes,ot=et?et.createPolicy("lit-html",{createHTML:t=>t}):void 0,it="$lit$",nt=`lit$${(Math.random()+"").slice(9)}$`,st="?"+nt,rt=`<${st}>`,at=document,lt=()=>at.createComment(""),ct=t=>null===t||"object"!=typeof t&&"function"!=typeof t,ht=Array.isArray,dt="[ \t\n\f\r]",ut=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,pt=/-->/g,ft=/>/g,mt=RegExp(`>|${dt}(?:([^\\s"'>=/]+)(${dt}*=${dt}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),bt=/'/g,gt=/"/g,vt=/^(?:script|style|textarea|title)$/i,yt=(t=>(e,...o)=>({_$litType$:t,strings:e,values:o}))(1),wt=Symbol.for("lit-noChange"),xt=Symbol.for("lit-nothing"),_t=new WeakMap,$t=at.createTreeWalker(at,129);function kt(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==ot?ot.createHTML(e):e}const Ct=(t,e)=>{const o=t.length-1,i=[];let n,s=2===e?"<svg>":"",r=ut;for(let e=0;e<o;e++){const o=t[e];let a,l,c=-1,h=0;for(;h<o.length&&(r.lastIndex=h,l=r.exec(o),null!==l);)h=r.lastIndex,r===ut?"!--"===l[1]?r=pt:void 0!==l[1]?r=ft:void 0!==l[2]?(vt.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=mt):void 0!==l[3]&&(r=mt):r===mt?">"===l[0]?(r=n??ut,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?mt:'"'===l[3]?gt:bt):r===gt||r===bt?r=mt:r===pt||r===ft?r=ut:(r=mt,n=void 0);const d=r===mt&&t[e+1].startsWith("/>")?" ":"";s+=r===ut?o+rt:c>=0?(i.push(a),o.slice(0,c)+it+o.slice(c)+nt+d):o+nt+(-2===c?e:d)}return[kt(t,s+(t[o]||"<?>")+(2===e?"</svg>":"")),i]};class Et{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let n=0,s=0;const r=t.length-1,a=this.parts,[l,c]=Ct(t,e);if(this.el=Et.createElement(l,o),$t.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=$t.nextNode())&&a.length<r;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(it)){const e=c[s++],o=i.getAttribute(t).split(nt),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:r[2],strings:o,ctor:"."===r[1]?zt:"?"===r[1]?Ot:"@"===r[1]?Tt:Pt}),i.removeAttribute(t)}else t.startsWith(nt)&&(a.push({type:6,index:n}),i.removeAttribute(t));if(vt.test(i.tagName)){const t=i.textContent.split(nt),e=t.length-1;if(e>0){i.textContent=et?et.emptyScript:"";for(let o=0;o<e;o++)i.append(t[o],lt()),$t.nextNode(),a.push({type:2,index:++n});i.append(t[e],lt())}}}else if(8===i.nodeType)if(i.data===st)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(nt,t+1));)a.push({type:7,index:n}),t+=nt.length-1}n++}}static createElement(t,e){const o=at.createElement("template");return o.innerHTML=t,o}}function At(t,e,o=t,i){if(e===wt)return e;let n=void 0!==i?o._$Co?.[i]:o._$Cl;const s=ct(e)?void 0:e._$litDirective$;return n?.constructor!==s&&(n?._$AO?.(!1),void 0===s?n=void 0:(n=new s(t),n._$AT(t,o,i)),void 0!==i?(o._$Co??=[])[i]=n:o._$Cl=n),void 0!==n&&(e=At(t,n._$AS(t,e.values),n,i)),e}class St{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:o}=this._$AD,i=(t?.creationScope??at).importNode(e,!0);$t.currentNode=i;let n=$t.nextNode(),s=0,r=0,a=o[0];for(;void 0!==a;){if(s===a.index){let e;2===a.type?e=new Lt(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new Mt(n,this,t)),this._$AV.push(e),a=o[++r]}s!==a?.index&&(n=$t.nextNode(),s++)}return $t.currentNode=at,i}p(t){let e=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class Lt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,o,i){this.type=2,this._$AH=xt,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=At(this,t,e),ct(t)?t===xt||null==t||""===t?(this._$AH!==xt&&this._$AR(),this._$AH=xt):t!==this._$AH&&t!==wt&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>ht(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==xt&&ct(this._$AH)?this._$AA.nextSibling.data=t:this.$(at.createTextNode(t)),this._$AH=t}g(t){const{values:e,_$litType$:o}=t,i="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=Et.createElement(kt(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new St(i,this),o=t.u(this.options);t.p(e),this.$(o),this._$AH=t}}_$AC(t){let e=_t.get(t.strings);return void 0===e&&_t.set(t.strings,e=new Et(t)),e}T(t){ht(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,i=0;for(const n of t)i===e.length?e.push(o=new Lt(this.k(lt()),this.k(lt()),this,this.options)):o=e[i],o._$AI(n),i++;i<e.length&&(this._$AR(o&&o._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Pt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,i,n){this.type=1,this._$AH=xt,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=xt}_$AI(t,e=this,o,i){const n=this.strings;let s=!1;if(void 0===n)t=At(this,t,e,0),s=!ct(t)||t!==this._$AH&&t!==wt,s&&(this._$AH=t);else{const i=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=At(this,i[o+r],e,r),a===wt&&(a=this._$AH[r]),s||=!ct(a)||a!==this._$AH[r],a===xt?t=xt:t!==xt&&(t+=(a??"")+n[r+1]),this._$AH[r]=a}s&&!i&&this.O(t)}O(t){t===xt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class zt extends Pt{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===xt?void 0:t}}class Ot extends Pt{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==xt)}}class Tt extends Pt{constructor(t,e,o,i,n){super(t,e,o,i,n),this.type=5}_$AI(t,e=this){if((t=At(this,t,e,0)??xt)===wt)return;const o=this._$AH,i=t===xt&&o!==xt||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,n=t!==xt&&(o===xt||i);i&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Mt{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){At(this,t)}}const Dt=tt.litHtmlPolyfillSupport;Dt?.(Et,Lt),(tt.litHtmlVersions??=[]).push("3.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let Rt=class extends Q{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,o)=>{const i=o?.renderBefore??e;let n=i._$litPart$;if(void 0===n){const t=o?.renderBefore??null;i._$litPart$=n=new Lt(e.insertBefore(lt(),t),t,void 0,o??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return wt}};Rt._$litElement$=!0,Rt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:Rt});const Nt=globalThis.litElementPolyfillSupport;Nt?.({LitElement:Rt}),(globalThis.litElementVersions??=[]).push("4.0.2");var Ut=N`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,Ft=N`
  ${Ut}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,Bt="";function It(t){Bt=t}var Ht={name:"default",resolver:t=>function(t=""){if(!Bt){const t=[...document.getElementsByTagName("script")],e=t.find((t=>t.hasAttribute("data-shoelace")));if(e)It(e.getAttribute("data-shoelace"));else{const e=t.find((t=>/shoelace(\.min)?\.js($|\?)/.test(t.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(t.src)));let o="";e&&(o=e.getAttribute("src")),It(o.split("/").slice(0,-1).join("/"))}}return Bt.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}(`assets/icons/${t}.svg`)},Vt={caret:'\n    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n      <polyline points="6 9 12 15 18 9"></polyline>\n    </svg>\n  ',check:'\n    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor">\n          <g transform="translate(3.428571, 3.428571)">\n            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>\n            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"chevron-down":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',"chevron-left":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>\n    </svg>\n  ',"chevron-right":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',copy:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>\n    </svg>\n  ',eye:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">\n      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>\n      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>\n    </svg>\n  ',"eye-slash":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">\n      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>\n      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>\n      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>\n    </svg>\n  ',eyedropper:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">\n      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>\n    </svg>\n  ',"grip-vertical":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">\n      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>\n    </svg>\n  ',indeterminate:'\n    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor" stroke-width="2">\n          <g transform="translate(2.285714, 6.857143)">\n            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"person-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">\n      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>\n    </svg>\n  ',"play-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">\n      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>\n    </svg>\n  ',"pause-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">\n      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>\n    </svg>\n  ',radio:'\n    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g fill="currentColor">\n          <circle cx="8" cy="8" r="3.42857143"></circle>\n        </g>\n      </g>\n    </svg>\n  ',"star-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">\n      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>\n    </svg>\n  ',"x-lg":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">\n      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>\n    </svg>\n  ',"x-circle-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">\n      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>\n    </svg>\n  '},jt=[Ht,{name:"system",resolver:t=>t in Vt?`data:image/svg+xml,${encodeURIComponent(Vt[t])}`:""}],Wt=[];function qt(t){return jt.find((e=>e.name===t))}var Kt=Object.defineProperty,Gt=Object.defineProperties,Zt=Object.getOwnPropertyDescriptor,Xt=Object.getOwnPropertyDescriptors,Yt=Object.getOwnPropertySymbols,Jt=Object.prototype.hasOwnProperty,Qt=Object.prototype.propertyIsEnumerable,te=(t,e)=>{if(e=Symbol[t])return e;throw Error("Symbol."+t+" is not defined")},ee=(t,e,o)=>e in t?Kt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,oe=(t,e)=>{for(var o in e||(e={}))Jt.call(e,o)&&ee(t,o,e[o]);if(Yt)for(var o of Yt(e))Qt.call(e,o)&&ee(t,o,e[o]);return t},ie=(t,e)=>Gt(t,Xt(e)),ne=(t,e,o,i)=>{for(var n,s=i>1?void 0:i?Zt(e,o):e,r=t.length-1;r>=0;r--)(n=t[r])&&(s=(i?n(e,o,s):n(s))||s);return i&&s&&Kt(e,o,s),s},se=function(t,e){this[0]=t,this[1]=e},re=t=>{var e,o=t[te("asyncIterator")],i=!1,n={};return null==o?(o=t[te("iterator")](),e=t=>n[t]=e=>o[t](e)):(o=o.call(t),e=t=>n[t]=e=>{if(i){if(i=!1,"throw"===t)throw e;return e}return i=!0,{done:!1,value:new se(new Promise((i=>{var n=o[t](e);if(!(n instanceof Object))throw TypeError("Object expected");i(n)})),1)}}),n[te("iterator")]=()=>n,e("next"),"throw"in o?e("throw"):n.throw=t=>{throw t},"return"in o&&e("return"),n};function ae(t,e){const o=oe({waitUntilFirstUpdate:!1},e);return(e,i)=>{const{update:n}=e,s=Array.isArray(t)?t:[t];e.update=function(t){s.forEach((e=>{const n=e;if(t.has(n)){const e=t.get(n),s=this[n];e!==s&&(o.waitUntilFirstUpdate&&!this.hasUpdated||this[i](e,s))}})),n.call(this,t)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const le={attribute:!0,type:String,converter:X,reflect:!1,hasChanged:Y},ce=(t=le,e,o)=>{const{kind:i,metadata:n}=o;let s=globalThis.litPropertyMetadata.get(n);if(void 0===s&&globalThis.litPropertyMetadata.set(n,s=new Map),s.set(o.name,t),"accessor"===i){const{name:i}=o;return{set(o){const n=e.get.call(this);e.set.call(this,o),this.requestUpdate(i,n,t)},init(e){return void 0!==e&&this.C(i,void 0,t),e}}}if("setter"===i){const{name:i}=o;return function(o){const n=this[i];e.call(this,o),this.requestUpdate(i,n,t)}}throw Error("Unsupported decorator location: "+i)};function he(t){return(e,o)=>"object"==typeof o?ce(t,e,o):((t,e,o)=>{const i=e.hasOwnProperty(o);return e.constructor.createProperty(o,i?{...t,wrapped:!0}:t),i?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function de(t){return he({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ue=(t,e,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,o),o)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function pe(t,e){return(o,i,n)=>{const s=e=>e.renderRoot?.querySelector(t)??null;if(e){const{get:t,set:e}="object"==typeof i?o:n??(()=>{const t=Symbol();return{get(){return this[t]},set(e){this[t]=e}}})();return ue(o,i,{get(){let o=t.call(this);return void 0===o&&(o=s(this),(null!==o||this.hasUpdated)&&e.call(this,o)),o}})}return ue(o,i,{get(){return s(this)}})}}var fe=class extends Rt{constructor(){super(),Object.entries(this.constructor.dependencies).forEach((([t,e])=>{this.constructor.define(t,e)}))}emit(t,e){const o=new CustomEvent(t,oe({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(o),o}static define(t,e=this,o={}){const i=customElements.get(t);if(!i)return void customElements.define(t,class extends e{},o);let n=" (unknown version)",s=n;"version"in e&&e.version&&(n=" v"+e.version),"version"in i&&i.version&&(s=" v"+i.version),n&&s&&n===s||console.warn(`Attempted to register <${t}>${n}, but <${t}>${s} has already been registered.`)}};fe.version="2.12.0",fe.dependencies={},ne([he()],fe.prototype,"dir",2),ne([he()],fe.prototype,"lang",2);var me,be=Symbol(),ge=Symbol(),ve=new Map,ye=class extends fe{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var o;let i;if(null==e?void 0:e.spriteSheet)return yt`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`;try{if(i=await fetch(t,{mode:"cors"}),!i.ok)return 410===i.status?be:ge}catch(t){return ge}try{const t=document.createElement("div");t.innerHTML=await i.text();const e=t.firstElementChild;if("svg"!==(null==(o=null==e?void 0:e.tagName)?void 0:o.toLowerCase()))return be;me||(me=new DOMParser);const n=me.parseFromString(e.outerHTML,"text/html").body.querySelector("svg");return n?(n.part.add("svg"),document.adoptNode(n)):be}catch(t){return be}}connectedCallback(){var t;super.connectedCallback(),t=this,Wt.push(t)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){var t;super.disconnectedCallback(),t=this,Wt=Wt.filter((e=>e!==t))}getIconSource(){const t=qt(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){"string"==typeof this.label&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:o}=this.getIconSource(),i=o?qt(this.library):void 0;if(!e)return void(this.svg=null);let n=ve.get(e);if(n||(n=this.resolveIcon(e,i),ve.set(e,n)),!this.initialRender)return;const s=await n;if(s===ge&&ve.delete(e),e===this.getIconSource().url)if(((t,e)=>void 0===e?void 0!==t?._$litType$:t?._$litType$===e)(s))this.svg=s;else switch(s){case ge:case be:this.svg=null,this.emit("sl-error");break;default:this.svg=s.cloneNode(!0),null==(t=null==i?void 0:i.mutator)||t.call(i,this.svg),this.emit("sl-load")}}render(){return this.svg}};ye.styles=Ft,ne([de()],ye.prototype,"svg",2),ne([he({reflect:!0})],ye.prototype,"name",2),ne([he()],ye.prototype,"src",2),ne([he()],ye.prototype,"label",2),ne([he({reflect:!0})],ye.prototype,"library",2),ne([ae("label")],ye.prototype,"handleLabelChange",1),ne([ae(["name","src","library"])],ye.prototype,"setIcon",1),ye.define("sl-icon");var we=N`
  ${Ut}

  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;function xe(t){const e=t.tagName.toLowerCase();return"-1"!==t.getAttribute("tabindex")&&(!t.hasAttribute("disabled")&&(!("input"===e&&"radio"===t.getAttribute("type")&&!t.hasAttribute("checked"))&&(o=t,!!Boolean(o.offsetParent||o.offsetWidth||o.offsetHeight||o.getClientRects().length)&&("hidden"!==window.getComputedStyle(t).visibility&&(!("audio"!==e&&"video"!==e||!t.hasAttribute("controls"))||(!!t.hasAttribute("tabindex")||(!(!t.hasAttribute("contenteditable")||"false"===t.getAttribute("contenteditable"))||["button","input","select","textarea","a","audio","video","summary"].includes(e))))))));var o}function _e(t){const e=[];return function o(i){if(i instanceof Element){if(i.hasAttribute("inert"))return;!e.includes(i)&&xe(i)&&e.push(i);i instanceof HTMLSlotElement&&(e=>{var o;return(null==(o=e.getRootNode({composed:!0}))?void 0:o.host)!==t})(i)&&i.assignedElements({flatten:!0}).forEach((t=>{o(t)})),null!==i.shadowRoot&&"open"===i.shadowRoot.mode&&o(i.shadowRoot)}[...i.children].forEach((t=>o(t)))}(t),e.sort(((t,e)=>{const o=Number(t.getAttribute("tabindex"))||0;return(Number(e.getAttribute("tabindex"))||0)-o}))}var $e=N`
  ${Ut}

  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }
`;const ke=Math.min,Ce=Math.max,Ee=Math.round,Ae=Math.floor,Se=t=>({x:t,y:t}),Le={left:"right",right:"left",bottom:"top",top:"bottom"},Pe={start:"end",end:"start"};function ze(t,e,o){return Ce(t,ke(e,o))}function Oe(t,e){return"function"==typeof t?t(e):t}function Te(t){return t.split("-")[0]}function Me(t){return t.split("-")[1]}function De(t){return"x"===t?"y":"x"}function Re(t){return"y"===t?"height":"width"}function Ne(t){return["top","bottom"].includes(Te(t))?"y":"x"}function Ue(t){return De(Ne(t))}function Fe(t){return t.replace(/start|end/g,(t=>Pe[t]))}function Be(t){return t.replace(/left|right|bottom|top/g,(t=>Le[t]))}function Ie(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function He(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function Ve(t,e,o){let{reference:i,floating:n}=t;const s=Ne(e),r=Ue(e),a=Re(r),l=Te(e),c="y"===s,h=i.x+i.width/2-n.width/2,d=i.y+i.height/2-n.height/2,u=i[a]/2-n[a]/2;let p;switch(l){case"top":p={x:h,y:i.y-n.height};break;case"bottom":p={x:h,y:i.y+i.height};break;case"right":p={x:i.x+i.width,y:d};break;case"left":p={x:i.x-n.width,y:d};break;default:p={x:i.x,y:i.y}}switch(Me(e)){case"start":p[r]-=u*(o&&c?-1:1);break;case"end":p[r]+=u*(o&&c?-1:1)}return p}async function je(t,e){var o;void 0===e&&(e={});const{x:i,y:n,platform:s,rects:r,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:d="floating",altBoundary:u=!1,padding:p=0}=Oe(e,t),f=Ie(p),m=a[u?"floating"===d?"reference":"floating":d],b=He(await s.getClippingRect({element:null==(o=await(null==s.isElement?void 0:s.isElement(m)))||o?m:m.contextElement||await(null==s.getDocumentElement?void 0:s.getDocumentElement(a.floating)),boundary:c,rootBoundary:h,strategy:l})),g="floating"===d?{...r.floating,x:i,y:n}:r.reference,v=await(null==s.getOffsetParent?void 0:s.getOffsetParent(a.floating)),y=await(null==s.isElement?void 0:s.isElement(v))&&await(null==s.getScale?void 0:s.getScale(v))||{x:1,y:1},w=He(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({rect:g,offsetParent:v,strategy:l}):g);return{top:(b.top-w.top+f.top)/y.y,bottom:(w.bottom-b.bottom+f.bottom)/y.y,left:(b.left-w.left+f.left)/y.x,right:(w.right-b.right+f.right)/y.x}}const We=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var o,i;const{placement:n,middlewareData:s,rects:r,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:h=!0,crossAxis:d=!0,fallbackPlacements:u,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:m=!0,...b}=Oe(t,e);if(null!=(o=s.arrow)&&o.alignmentOffset)return{};const g=Te(n),v=Te(a)===a,y=await(null==l.isRTL?void 0:l.isRTL(c.floating)),w=u||(v||!m?[Be(a)]:function(t){const e=Be(t);return[Fe(t),e,Fe(e)]}(a));u||"none"===f||w.push(...function(t,e,o,i){const n=Me(t);let s=function(t,e,o){const i=["left","right"],n=["right","left"],s=["top","bottom"],r=["bottom","top"];switch(t){case"top":case"bottom":return o?e?n:i:e?i:n;case"left":case"right":return e?s:r;default:return[]}}(Te(t),"start"===o,i);return n&&(s=s.map((t=>t+"-"+n)),e&&(s=s.concat(s.map(Fe)))),s}(a,m,f,y));const x=[a,...w],_=await je(e,b),$=[];let k=(null==(i=s.flip)?void 0:i.overflows)||[];if(h&&$.push(_[g]),d){const t=function(t,e,o){void 0===o&&(o=!1);const i=Me(t),n=Ue(t),s=Re(n);let r="x"===n?i===(o?"end":"start")?"right":"left":"start"===i?"bottom":"top";return e.reference[s]>e.floating[s]&&(r=Be(r)),[r,Be(r)]}(n,r,y);$.push(_[t[0]],_[t[1]])}if(k=[...k,{placement:n,overflows:$}],!$.every((t=>t<=0))){var C,E;const t=((null==(C=s.flip)?void 0:C.index)||0)+1,e=x[t];if(e)return{data:{index:t,overflows:k},reset:{placement:e}};let o=null==(E=k.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:E.placement;if(!o)switch(p){case"bestFit":{var A;const t=null==(A=k.map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:A[0];t&&(o=t);break}case"initialPlacement":o=a}if(n!==o)return{reset:{placement:o}}}return{}}}};const qe=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){var o,i;const{x:n,y:s,placement:r,middlewareData:a}=e,l=await async function(t,e){const{placement:o,platform:i,elements:n}=t,s=await(null==i.isRTL?void 0:i.isRTL(n.floating)),r=Te(o),a=Me(o),l="y"===Ne(o),c=["left","top"].includes(r)?-1:1,h=s&&l?-1:1,d=Oe(e,t);let{mainAxis:u,crossAxis:p,alignmentAxis:f}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return a&&"number"==typeof f&&(p="end"===a?-1*f:f),l?{x:p*h,y:u*c}:{x:u*c,y:p*h}}(e,t);return r===(null==(o=a.offset)?void 0:o.placement)&&null!=(i=a.arrow)&&i.alignmentOffset?{}:{x:n+l.x,y:s+l.y,data:{...l,placement:r}}}}},Ke=function(t){return void 0===t&&(t={}),{name:"size",options:t,async fn(e){const{placement:o,rects:i,platform:n,elements:s}=e,{apply:r=(()=>{}),...a}=Oe(t,e),l=await je(e,a),c=Te(o),h=Me(o),d="y"===Ne(o),{width:u,height:p}=i.floating;let f,m;"top"===c||"bottom"===c?(f=c,m=h===(await(null==n.isRTL?void 0:n.isRTL(s.floating))?"start":"end")?"left":"right"):(m=c,f="end"===h?"top":"bottom");const b=p-l[f],g=u-l[m],v=!e.middlewareData.shift;let y=b,w=g;if(d){const t=u-l.left-l.right;w=h||v?ke(g,t):t}else{const t=p-l.top-l.bottom;y=h||v?ke(b,t):t}if(v&&!h){const t=Ce(l.left,0),e=Ce(l.right,0),o=Ce(l.top,0),i=Ce(l.bottom,0);d?w=u-2*(0!==t||0!==e?t+e:Ce(l.left,l.right)):y=p-2*(0!==o||0!==i?o+i:Ce(l.top,l.bottom))}await r({...e,availableWidth:w,availableHeight:y});const x=await n.getDimensions(s.floating);return u!==x.width||p!==x.height?{reset:{rects:!0}}:{}}}};function Ge(t){return Ye(t)?(t.nodeName||"").toLowerCase():"#document"}function Ze(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function Xe(t){var e;return null==(e=(Ye(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function Ye(t){return t instanceof Node||t instanceof Ze(t).Node}function Je(t){return t instanceof Element||t instanceof Ze(t).Element}function Qe(t){return t instanceof HTMLElement||t instanceof Ze(t).HTMLElement}function to(t){return"undefined"!=typeof ShadowRoot&&(t instanceof ShadowRoot||t instanceof Ze(t).ShadowRoot)}function eo(t){const{overflow:e,overflowX:o,overflowY:i,display:n}=ro(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+o)&&!["inline","contents"].includes(n)}function oo(t){return["table","td","th"].includes(Ge(t))}function io(t){const e=no(),o=ro(t);return"none"!==o.transform||"none"!==o.perspective||!!o.containerType&&"normal"!==o.containerType||!e&&!!o.backdropFilter&&"none"!==o.backdropFilter||!e&&!!o.filter&&"none"!==o.filter||["transform","perspective","filter"].some((t=>(o.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(o.contain||"").includes(t)))}function no(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function so(t){return["html","body","#document"].includes(Ge(t))}function ro(t){return Ze(t).getComputedStyle(t)}function ao(t){return Je(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function lo(t){if("html"===Ge(t))return t;const e=t.assignedSlot||t.parentNode||to(t)&&t.host||Xe(t);return to(e)?e.host:e}function co(t){const e=lo(t);return so(e)?t.ownerDocument?t.ownerDocument.body:t.body:Qe(e)&&eo(e)?e:co(e)}function ho(t,e,o){var i;void 0===e&&(e=[]),void 0===o&&(o=!0);const n=co(t),s=n===(null==(i=t.ownerDocument)?void 0:i.body),r=Ze(n);return s?e.concat(r,r.visualViewport||[],eo(n)?n:[],r.frameElement&&o?ho(r.frameElement):[]):e.concat(n,ho(n,[],o))}function uo(t){const e=ro(t);let o=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const n=Qe(t),s=n?t.offsetWidth:o,r=n?t.offsetHeight:i,a=Ee(o)!==s||Ee(i)!==r;return a&&(o=s,i=r),{width:o,height:i,$:a}}function po(t){return Je(t)?t:t.contextElement}function fo(t){const e=po(t);if(!Qe(e))return Se(1);const o=e.getBoundingClientRect(),{width:i,height:n,$:s}=uo(e);let r=(s?Ee(o.width):o.width)/i,a=(s?Ee(o.height):o.height)/n;return r&&Number.isFinite(r)||(r=1),a&&Number.isFinite(a)||(a=1),{x:r,y:a}}const mo=Se(0);function bo(t){const e=Ze(t);return no()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:mo}function go(t,e,o,i){void 0===e&&(e=!1),void 0===o&&(o=!1);const n=t.getBoundingClientRect(),s=po(t);let r=Se(1);e&&(i?Je(i)&&(r=fo(i)):r=fo(t));const a=function(t,e,o){return void 0===e&&(e=!1),!(!o||e&&o!==Ze(t))&&e}(s,o,i)?bo(s):Se(0);let l=(n.left+a.x)/r.x,c=(n.top+a.y)/r.y,h=n.width/r.x,d=n.height/r.y;if(s){const t=Ze(s),e=i&&Je(i)?Ze(i):i;let o=t.frameElement;for(;o&&i&&e!==t;){const t=fo(o),e=o.getBoundingClientRect(),i=ro(o),n=e.left+(o.clientLeft+parseFloat(i.paddingLeft))*t.x,s=e.top+(o.clientTop+parseFloat(i.paddingTop))*t.y;l*=t.x,c*=t.y,h*=t.x,d*=t.y,l+=n,c+=s,o=Ze(o).frameElement}}return He({width:h,height:d,x:l,y:c})}function vo(t){return go(Xe(t)).left+ao(t).scrollLeft}function yo(t,e,o){let i;if("viewport"===e)i=function(t,e){const o=Ze(t),i=Xe(t),n=o.visualViewport;let s=i.clientWidth,r=i.clientHeight,a=0,l=0;if(n){s=n.width,r=n.height;const t=no();(!t||t&&"fixed"===e)&&(a=n.offsetLeft,l=n.offsetTop)}return{width:s,height:r,x:a,y:l}}(t,o);else if("document"===e)i=function(t){const e=Xe(t),o=ao(t),i=t.ownerDocument.body,n=Ce(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),s=Ce(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let r=-o.scrollLeft+vo(t);const a=-o.scrollTop;return"rtl"===ro(i).direction&&(r+=Ce(e.clientWidth,i.clientWidth)-n),{width:n,height:s,x:r,y:a}}(Xe(t));else if(Je(e))i=function(t,e){const o=go(t,!0,"fixed"===e),i=o.top+t.clientTop,n=o.left+t.clientLeft,s=Qe(t)?fo(t):Se(1);return{width:t.clientWidth*s.x,height:t.clientHeight*s.y,x:n*s.x,y:i*s.y}}(e,o);else{const o=bo(t);i={...e,x:e.x-o.x,y:e.y-o.y}}return He(i)}function wo(t,e){const o=lo(t);return!(o===e||!Je(o)||so(o))&&("fixed"===ro(o).position||wo(o,e))}function xo(t,e,o){const i=Qe(e),n=Xe(e),s="fixed"===o,r=go(t,!0,s,e);let a={scrollLeft:0,scrollTop:0};const l=Se(0);if(i||!i&&!s)if(("body"!==Ge(e)||eo(n))&&(a=ao(e)),i){const t=go(e,!0,s,e);l.x=t.x+e.clientLeft,l.y=t.y+e.clientTop}else n&&(l.x=vo(n));return{x:r.left+a.scrollLeft-l.x,y:r.top+a.scrollTop-l.y,width:r.width,height:r.height}}function _o(t,e){return Qe(t)&&"fixed"!==ro(t).position?e?e(t):t.offsetParent:null}function $o(t,e){const o=Ze(t);if(!Qe(t))return o;let i=_o(t,e);for(;i&&oo(i)&&"static"===ro(i).position;)i=_o(i,e);return i&&("html"===Ge(i)||"body"===Ge(i)&&"static"===ro(i).position&&!io(i))?o:i||function(t){let e=lo(t);for(;Qe(e)&&!so(e);){if(io(e))return e;e=lo(e)}return null}(t)||o}const ko={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:o,strategy:i}=t;const n=Qe(o),s=Xe(o);if(o===s)return e;let r={scrollLeft:0,scrollTop:0},a=Se(1);const l=Se(0);if((n||!n&&"fixed"!==i)&&(("body"!==Ge(o)||eo(s))&&(r=ao(o)),Qe(o))){const t=go(o);a=fo(o),l.x=t.x+o.clientLeft,l.y=t.y+o.clientTop}return{width:e.width*a.x,height:e.height*a.y,x:e.x*a.x-r.scrollLeft*a.x+l.x,y:e.y*a.y-r.scrollTop*a.y+l.y}},getDocumentElement:Xe,getClippingRect:function(t){let{element:e,boundary:o,rootBoundary:i,strategy:n}=t;const s=[..."clippingAncestors"===o?function(t,e){const o=e.get(t);if(o)return o;let i=ho(t,[],!1).filter((t=>Je(t)&&"body"!==Ge(t))),n=null;const s="fixed"===ro(t).position;let r=s?lo(t):t;for(;Je(r)&&!so(r);){const e=ro(r),o=io(r);o||"fixed"!==e.position||(n=null),(s?!o&&!n:!o&&"static"===e.position&&n&&["absolute","fixed"].includes(n.position)||eo(r)&&!o&&wo(t,r))?i=i.filter((t=>t!==r)):n=e,r=lo(r)}return e.set(t,i),i}(e,this._c):[].concat(o),i],r=s[0],a=s.reduce(((t,o)=>{const i=yo(e,o,n);return t.top=Ce(i.top,t.top),t.right=ke(i.right,t.right),t.bottom=ke(i.bottom,t.bottom),t.left=Ce(i.left,t.left),t}),yo(e,r,n));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},getOffsetParent:$o,getElementRects:async function(t){let{reference:e,floating:o,strategy:i}=t;const n=this.getOffsetParent||$o,s=this.getDimensions;return{reference:xo(e,await n(o),i),floating:{x:0,y:0,...await s(o)}}},getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){return uo(t)},getScale:fo,isElement:Je,isRTL:function(t){return"rtl"===ro(t).direction}};function Co(t,e,o,i){void 0===i&&(i={});const{ancestorScroll:n=!0,ancestorResize:s=!0,elementResize:r="function"==typeof ResizeObserver,layoutShift:a="function"==typeof IntersectionObserver,animationFrame:l=!1}=i,c=po(t),h=n||s?[...c?ho(c):[],...ho(e)]:[];h.forEach((t=>{n&&t.addEventListener("scroll",o,{passive:!0}),s&&t.addEventListener("resize",o)}));const d=c&&a?function(t,e){let o,i=null;const n=Xe(t);function s(){clearTimeout(o),i&&i.disconnect(),i=null}return function r(a,l){void 0===a&&(a=!1),void 0===l&&(l=1),s();const{left:c,top:h,width:d,height:u}=t.getBoundingClientRect();if(a||e(),!d||!u)return;const p={rootMargin:-Ae(h)+"px "+-Ae(n.clientWidth-(c+d))+"px "+-Ae(n.clientHeight-(h+u))+"px "+-Ae(c)+"px",threshold:Ce(0,ke(1,l))||1};let f=!0;function m(t){const e=t[0].intersectionRatio;if(e!==l){if(!f)return r();e?r(!1,e):o=setTimeout((()=>{r(!1,1e-7)}),100)}f=!1}try{i=new IntersectionObserver(m,{...p,root:n.ownerDocument})}catch(t){i=new IntersectionObserver(m,p)}i.observe(t)}(!0),s}(c,o):null;let u,p=-1,f=null;r&&(f=new ResizeObserver((t=>{let[i]=t;i&&i.target===c&&f&&(f.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame((()=>{f&&f.observe(e)}))),o()})),c&&!l&&f.observe(c),f.observe(e));let m=l?go(t):null;return l&&function e(){const i=go(t);!m||i.x===m.x&&i.y===m.y&&i.width===m.width&&i.height===m.height||o();m=i,u=requestAnimationFrame(e)}(),o(),()=>{h.forEach((t=>{n&&t.removeEventListener("scroll",o),s&&t.removeEventListener("resize",o)})),d&&d(),f&&f.disconnect(),f=null,l&&cancelAnimationFrame(u)}}const Eo=(t,e,o)=>{const i=new Map,n={platform:ko,...o},s={...n.platform,_c:i};return(async(t,e,o)=>{const{placement:i="bottom",strategy:n="absolute",middleware:s=[],platform:r}=o,a=s.filter(Boolean),l=await(null==r.isRTL?void 0:r.isRTL(e));let c=await r.getElementRects({reference:t,floating:e,strategy:n}),{x:h,y:d}=Ve(c,i,l),u=i,p={},f=0;for(let o=0;o<a.length;o++){const{name:s,fn:m}=a[o],{x:b,y:g,data:v,reset:y}=await m({x:h,y:d,initialPlacement:i,placement:u,strategy:n,middlewareData:p,rects:c,platform:r,elements:{reference:t,floating:e}});h=null!=b?b:h,d=null!=g?g:d,p={...p,[s]:{...p[s],...v}},y&&f<=50&&(f++,"object"==typeof y&&(y.placement&&(u=y.placement),y.rects&&(c=!0===y.rects?await r.getElementRects({reference:t,floating:e,strategy:n}):y.rects),({x:h,y:d}=Ve(c,u,l))),o=-1)}return{x:h,y:d,placement:u,strategy:n,middlewareData:p}})(t,e,{...n,platform:s})},Ao=1,So=2,Lo=t=>(...e)=>({_$litDirective$:t,values:e});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Po{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zo=Lo(class extends Po{constructor(t){if(super(t),t.type!==Ao||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(void 0===this.it){this.it=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!this.st?.has(t)&&this.it.add(t);return this.render(e)}const o=t.element.classList;for(const t of this.it)t in e||(o.remove(t),this.it.delete(t));for(const t in e){const i=!!e[t];i===this.it.has(t)||this.st?.has(t)||(i?(o.add(t),this.it.add(t)):(o.remove(t),this.it.delete(t)))}return wt}});function Oo(t){return function(t){for(let e=t;e;e=To(e))if(e instanceof Element&&"none"===getComputedStyle(e).display)return null;for(let e=To(t);e;e=To(e)){if(!(e instanceof Element))continue;const t=getComputedStyle(e);if("contents"!==t.display){if("static"!==t.position||"none"!==t.filter)return e;if("BODY"===e.tagName)return e}}return null}(t)}function To(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}var Mo=class extends fe{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||function(t){return null!==t&&"object"==typeof t&&"getBoundingClientRect"in t}(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&(this.cleanup=Co(this.anchorEl,this.popup,(()=>{this.reposition()})))}async stop(){return new Promise((t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame((()=>t()))):t()}))}reposition(){if(!this.active||!this.anchorEl)return;const t=[qe({mainAxis:this.distance,crossAxis:this.skidding})];var e;this.sync?t.push(Ke({apply:({rects:t})=>{const e="width"===this.sync||"both"===this.sync,o="height"===this.sync||"both"===this.sync;this.popup.style.width=e?`${t.reference.width}px`:"",this.popup.style.height=o?`${t.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(We({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push((void 0===(e={boundary:this.shiftBoundary,padding:this.shiftPadding})&&(e={}),{name:"shift",options:e,async fn(t){const{x:o,y:i,placement:n}=t,{mainAxis:s=!0,crossAxis:r=!1,limiter:a={fn:t=>{let{x:e,y:o}=t;return{x:e,y:o}}},...l}=Oe(e,t),c={x:o,y:i},h=await je(t,l),d=Ne(Te(n)),u=De(d);let p=c[u],f=c[d];if(s){const t="y"===u?"bottom":"right";p=ze(p+h["y"===u?"top":"left"],p,p-h[t])}if(r){const t="y"===d?"bottom":"right";f=ze(f+h["y"===d?"top":"left"],f,f-h[t])}const m=a.fn({...t,[u]:p,[d]:f});return{...m,data:{x:m.x-o,y:m.y-i}}}})),this.autoSize?t.push(Ke({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:t,availableHeight:e})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${e}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${t}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push((t=>({name:"arrow",options:t,async fn(e){const{x:o,y:i,placement:n,rects:s,platform:r,elements:a,middlewareData:l}=e,{element:c,padding:h=0}=Oe(t,e)||{};if(null==c)return{};const d=Ie(h),u={x:o,y:i},p=Ue(n),f=Re(p),m=await r.getDimensions(c),b="y"===p,g=b?"top":"left",v=b?"bottom":"right",y=b?"clientHeight":"clientWidth",w=s.reference[f]+s.reference[p]-u[p]-s.floating[f],x=u[p]-s.reference[p],_=await(null==r.getOffsetParent?void 0:r.getOffsetParent(c));let $=_?_[y]:0;$&&await(null==r.isElement?void 0:r.isElement(_))||($=a.floating[y]||s.floating[f]);const k=w/2-x/2,C=$/2-m[f]/2-1,E=ke(d[g],C),A=ke(d[v],C),S=E,L=$-m[f]-A,P=$/2-m[f]/2+k,z=ze(S,P,L),O=!l.arrow&&null!=Me(n)&&P!=z&&s.reference[f]/2-(P<S?E:A)-m[f]/2<0,T=O?P<S?P-S:P-L:0;return{[p]:u[p]+T,data:{[p]:z,centerOffset:P-z-T,...O&&{alignmentOffset:T}},reset:O}}}))({element:this.arrowEl,padding:this.arrowPadding}));const o="absolute"===this.strategy?t=>ko.getOffsetParent(t,Oo):ko.getOffsetParent;Eo(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:ie(oe({},ko),{getOffsetParent:o})}).then((({x:t,y:e,middlewareData:o,placement:i})=>{const n="rtl"===getComputedStyle(this).direction,s={top:"bottom",right:"left",bottom:"top",left:"right"}[i.split("-")[0]];if(this.setAttribute("data-current-placement",i),Object.assign(this.popup.style,{left:`${t}px`,top:`${e}px`}),this.arrow){const t=o.arrow.x,e=o.arrow.y;let i="",r="",a="",l="";if("start"===this.arrowPlacement){const o="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";i="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",r=n?o:"",l=n?"":o}else if("end"===this.arrowPlacement){const o="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";r=n?"":o,l=n?o:"",a="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(l="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":"",i="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":""):(l="number"==typeof t?`${t}px`:"",i="number"==typeof e?`${e}px`:"");Object.assign(this.arrowEl.style,{top:i,right:r,bottom:a,left:l,[s]:"calc(var(--arrow-size-diagonal) * -1)"})}})),this.emit("sl-reposition")}render(){return yt`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${zo({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?yt`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};Mo.styles=$e,ne([pe(".popup")],Mo.prototype,"popup",2),ne([pe(".popup__arrow")],Mo.prototype,"arrowEl",2),ne([he()],Mo.prototype,"anchor",2),ne([he({type:Boolean,reflect:!0})],Mo.prototype,"active",2),ne([he({reflect:!0})],Mo.prototype,"placement",2),ne([he({reflect:!0})],Mo.prototype,"strategy",2),ne([he({type:Number})],Mo.prototype,"distance",2),ne([he({type:Number})],Mo.prototype,"skidding",2),ne([he({type:Boolean})],Mo.prototype,"arrow",2),ne([he({attribute:"arrow-placement"})],Mo.prototype,"arrowPlacement",2),ne([he({attribute:"arrow-padding",type:Number})],Mo.prototype,"arrowPadding",2),ne([he({type:Boolean})],Mo.prototype,"flip",2),ne([he({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map((t=>t.trim())).filter((t=>""!==t)),toAttribute:t=>t.join(" ")}})],Mo.prototype,"flipFallbackPlacements",2),ne([he({attribute:"flip-fallback-strategy"})],Mo.prototype,"flipFallbackStrategy",2),ne([he({type:Object})],Mo.prototype,"flipBoundary",2),ne([he({attribute:"flip-padding",type:Number})],Mo.prototype,"flipPadding",2),ne([he({type:Boolean})],Mo.prototype,"shift",2),ne([he({type:Object})],Mo.prototype,"shiftBoundary",2),ne([he({attribute:"shift-padding",type:Number})],Mo.prototype,"shiftPadding",2),ne([he({attribute:"auto-size"})],Mo.prototype,"autoSize",2),ne([he()],Mo.prototype,"sync",2),ne([he({type:Object})],Mo.prototype,"autoSizeBoundary",2),ne([he({attribute:"auto-size-padding",type:Number})],Mo.prototype,"autoSizePadding",2);var Do=new Map,Ro=new WeakMap;function No(t,e){return"rtl"===e.toLowerCase()?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function Uo(t,e){Do.set(t,function(t){return null!=t?t:{keyframes:[],options:{duration:0}}}(e))}function Fo(t,e,o){const i=Ro.get(t);if(null==i?void 0:i[e])return No(i[e],o.dir);const n=Do.get(e);return n?No(n,o.dir):{keyframes:[],options:{duration:0}}}function Bo(t,e){return new Promise((o=>{t.addEventListener(e,(function i(n){n.target===t&&(t.removeEventListener(e,i),o())}))}))}function Io(t,e,o){return new Promise((i=>{if((null==o?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const n=t.animate(e,ie(oe({},o),{duration:Ho()?0:o.duration}));n.addEventListener("cancel",i,{once:!0}),n.addEventListener("finish",i,{once:!0})}))}function Ho(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Vo(t){return Promise.all(t.getAnimations().map((t=>new Promise((e=>{const o=requestAnimationFrame(e);t.addEventListener("cancel",(()=>o),{once:!0}),t.addEventListener("finish",(()=>o),{once:!0}),t.cancel()})))))}const jo=new Set,Wo=new MutationObserver(Yo),qo=new Map;let Ko,Go=document.documentElement.dir||"ltr",Zo=document.documentElement.lang||navigator.language;function Xo(...t){t.map((t=>{const e=t.$code.toLowerCase();qo.has(e)?qo.set(e,Object.assign(Object.assign({},qo.get(e)),t)):qo.set(e,t),Ko||(Ko=t)})),Yo()}function Yo(){Go=document.documentElement.dir||"ltr",Zo=document.documentElement.lang||navigator.language,[...jo.keys()].map((t=>{"function"==typeof t.requestUpdate&&t.requestUpdate()}))}Wo.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});let Jo=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){jo.add(this.host)}hostDisconnected(){jo.delete(this.host)}dir(){return`${this.host.dir||Go}`.toLowerCase()}lang(){return`${this.host.lang||Zo}`.toLowerCase()}getTranslationData(t){var e,o;const i=new Intl.Locale(t.replace(/_/g,"-")),n=null==i?void 0:i.language.toLowerCase(),s=null!==(o=null===(e=null==i?void 0:i.region)||void 0===e?void 0:e.toLowerCase())&&void 0!==o?o:"";return{locale:i,language:n,region:s,primary:qo.get(`${n}-${s}`),secondary:qo.get(n)}}exists(t,e){var o;const{primary:i,secondary:n}=this.getTranslationData(null!==(o=e.lang)&&void 0!==o?o:this.lang());return e=Object.assign({includeFallback:!1},e),!!(i&&i[t]||n&&n[t]||e.includeFallback&&Ko&&Ko[t])}term(t,...e){const{primary:o,secondary:i}=this.getTranslationData(this.lang());let n;if(o&&o[t])n=o[t];else if(i&&i[t])n=i[t];else{if(!Ko||!Ko[t])return console.error(`No translation found for: ${String(t)}`),String(t);n=Ko[t]}return"function"==typeof n?n(...e):n}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(t,e)}};var Qo={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>0===t?"No options selected":1===t?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};Xo(Qo);var ti=Qo,ei=class extends Jo{};Xo(ti);var oi=class extends fe{constructor(){super(...arguments),this.localize=new ei(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.handleKeyDown=t=>{this.open&&"Escape"===t.key&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=t=>{var e;if("Escape"===t.key&&this.open)return t.stopPropagation(),this.focusOnTrigger(),void this.hide();if("Tab"===t.key){if(this.open&&"sl-menu-item"===(null==(e=document.activeElement)?void 0:e.tagName.toLowerCase()))return t.preventDefault(),this.hide(),void this.focusOnTrigger();setTimeout((()=>{var t,e,o;const i=(null==(t=this.containingElement)?void 0:t.getRootNode())instanceof ShadowRoot?null==(o=null==(e=document.activeElement)?void 0:e.shadowRoot)?void 0:o.activeElement:document.activeElement;this.containingElement&&(null==i?void 0:i.closest(this.containingElement.tagName.toLowerCase()))===this.containingElement||this.hide()}))}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=t=>{const e=t.target;this.stayOpenOnSelect||"sl-menu"!==e.tagName.toLowerCase()||(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const t=this.trigger.assignedElements({flatten:!0})[0];"function"==typeof(null==t?void 0:t.focus)&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find((t=>"sl-menu"===t.tagName.toLowerCase()))}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key))return t.preventDefault(),void this.handleTriggerClick();const e=this.getMenu();if(e){const o=e.getAllItems(),i=o[0],n=o[o.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),o.length>0&&this.updateComplete.then((()=>{"ArrowDown"!==t.key&&"Home"!==t.key||(e.setCurrentItem(i),i.focus()),"ArrowUp"!==t.key&&"End"!==t.key||(e.setCurrentItem(n),n.focus())})))}}handleTriggerKeyUp(t){" "===t.key&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find((t=>function(t){var e,o;const i=_e(t);return{start:null!=(e=i[0])?e:null,end:null!=(o=i[i.length-1])?o:null}}(t).start));let e;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":e=t.button;break;default:e=t}e.setAttribute("aria-haspopup","true"),e.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,Bo(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Bo(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener("sl-select",this.handlePanelSelect),this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled)this.open=!1;else if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await Vo(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=Fo(this,"dropdown.show",{dir:this.localize.dir()});await Io(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Vo(this);const{keyframes:t,options:e}=Fo(this,"dropdown.hide",{dir:this.localize.dir()});await Io(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return yt`
      <sl-popup
        part="base"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        class=${zo({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};oi.styles=we,oi.dependencies={"sl-popup":Mo},ne([pe(".dropdown")],oi.prototype,"popup",2),ne([pe(".dropdown__trigger")],oi.prototype,"trigger",2),ne([pe(".dropdown__panel")],oi.prototype,"panel",2),ne([he({type:Boolean,reflect:!0})],oi.prototype,"open",2),ne([he({reflect:!0})],oi.prototype,"placement",2),ne([he({type:Boolean,reflect:!0})],oi.prototype,"disabled",2),ne([he({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],oi.prototype,"stayOpenOnSelect",2),ne([he({attribute:!1})],oi.prototype,"containingElement",2),ne([he({type:Number})],oi.prototype,"distance",2),ne([he({type:Number})],oi.prototype,"skidding",2),ne([he({type:Boolean})],oi.prototype,"hoist",2),ne([ae("open",{waitUntilFirstUpdate:!0})],oi.prototype,"handleOpenChange",1),Uo("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}}),Uo("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}}),oi.define("sl-dropdown");var ii=N`
  ${Ut}

  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,ni=class extends fe{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(t){const e=["menuitem","menuitemcheckbox"],o=t.composedPath().find((t=>{var o;return e.includes((null==(o=null==t?void 0:t.getAttribute)?void 0:o.call(t,"role"))||"")}));if(!o)return;const i=o;"checkbox"===i.type&&(i.checked=!i.checked),this.emit("sl-select",{detail:{item:i}})}handleKeyDown(t){if("Enter"===t.key||" "===t.key){const e=this.getCurrentItem();t.preventDefault(),t.stopPropagation(),null==e||e.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(t.key)){const e=this.getAllItems(),o=this.getCurrentItem();let i=o?e.indexOf(o):0;e.length>0&&(t.preventDefault(),t.stopPropagation(),"ArrowDown"===t.key?i++:"ArrowUp"===t.key?i--:"Home"===t.key?i=0:"End"===t.key&&(i=e.length-1),i<0&&(i=e.length-1),i>e.length-1&&(i=0),this.setCurrentItem(e[i]),e[i].focus())}}handleMouseDown(t){const e=t.target;this.isMenuItem(e)&&this.setCurrentItem(e)}handleSlotChange(){const t=this.getAllItems();t.length>0&&this.setCurrentItem(t[0])}isMenuItem(t){var e;return"sl-menu-item"===t.tagName.toLowerCase()||["menuitem","menuitemcheckbox","menuitemradio"].includes(null!=(e=t.getAttribute("role"))?e:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter((t=>!(t.inert||!this.isMenuItem(t))))}getCurrentItem(){return this.getAllItems().find((t=>"0"===t.getAttribute("tabindex")))}setCurrentItem(t){this.getAllItems().forEach((e=>{e.setAttribute("tabindex",e===t?"0":"-1")}))}render(){return yt`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};ni.styles=ii,ne([pe("slot")],ni.prototype,"defaultSlot",2),ni.define("sl-menu");var si=N`
  ${Ut}

  :host {
    --submenu-offset: -2px;

    /* Private */
    --safe-triangle-cursor-x: 0;
    --safe-triangle-cursor-y: 0;
    --safe-triangle-submenu-start-x: 0;
    --safe-triangle-submenu-start-y: 0;
    --safe-triangle-submenu-end-x: 0;
    --safe-triangle-submenu-end-y: 0;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x) var(--safe-triangle-cursor-y),
      var(--safe-triangle-submenu-start-x) var(--safe-triangle-submenu-start-y),
      var(--safe-triangle-submenu-end-x) var(--safe-triangle-submenu-end-y)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;const ri=(t,e)=>{const o=t._$AN;if(void 0===o)return!1;for(const t of o)t._$AO?.(e,!1),ri(t,e);return!0},ai=t=>{let e,o;do{if(void 0===(e=t._$AM))break;o=e._$AN,o.delete(t),t=e}while(0===o?.size)},li=t=>{for(let e;e=t._$AM;t=e){let o=e._$AN;if(void 0===o)e._$AN=o=new Set;else if(o.has(t))break;o.add(t),di(e)}};function ci(t){void 0!==this._$AN?(ai(this),this._$AM=t,li(this)):this._$AM=t}function hi(t,e=!1,o=0){const i=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(e)if(Array.isArray(i))for(let t=o;t<i.length;t++)ri(i[t],!1),ai(i[t]);else null!=i&&(ri(i,!1),ai(i));else ri(this,t)}const di=t=>{t.type==So&&(t._$AP??=hi,t._$AQ??=ci)};class ui extends Po{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,o){super._$AT(t,e,o),li(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(ri(this,t),ai(this))}setValue(t){if((t=>void 0===t.strings)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class pi{}const fi=new WeakMap,mi=Lo(class extends ui{render(t){return xt}update(t,[e]){const o=e!==this.G;return o&&void 0!==this.G&&this.ot(void 0),(o||this.rt!==this.lt)&&(this.G=e,this.ct=t.options?.host,this.ot(this.lt=t.element)),xt}ot(t){if("function"==typeof this.G){const e=this.ct??globalThis;let o=fi.get(e);void 0===o&&(o=new WeakMap,fi.set(e,o)),void 0!==o.get(this.G)&&this.G.call(this.ct,void 0),o.set(this.G,t),void 0!==t&&this.G.call(this.ct,t)}else this.G.value=t}get rt(){return"function"==typeof this.G?fi.get(this.ct??globalThis)?.get(this.G):this.G?.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var bi=class{constructor(t,e,o){this.popupRef=new pi,this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=t=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${t.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${t.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=t=>{switch(t.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":t.target!==this.host&&(t.preventDefault(),t.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(t)}},this.handleClick=t=>{var e;t.target===this.host?(t.preventDefault(),t.stopPropagation()):t.target instanceof Element&&("sl-menu-item"===t.target.tagName||(null==(e=t.target.role)?void 0:e.startsWith("menuitem")))&&this.disableSubmenu()},this.handleFocusOut=t=>{t.relatedTarget&&t.relatedTarget instanceof Element&&this.host.contains(t.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=t=>{t.stopPropagation()},this.handlePopupReposition=()=>{const t=this.host.renderRoot.querySelector("slot[name='submenu']"),e=null==t?void 0:t.assignedElements({flatten:!0}).filter((t=>"sl-menu"===t.localName))[0],o="rtl"===this.localize.dir();if(!e)return;const{left:i,top:n,width:s,height:r}=e.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${o?i+s:i}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${n}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${o?i+s:i}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${n+r}px`)},(this.host=t).addController(this),this.hasSlotController=e,this.localize=o}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(t){const e=this.host.renderRoot.querySelector("slot[name='submenu']");if(!e)return void console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);let o=null;for(const t of e.assignedElements())if(o=t.querySelectorAll("sl-menu-item, [role^='menuitem']"),0!==o.length)break;if(o&&0!==o.length){o[0].setAttribute("tabindex","0");for(let t=1;t!==o.length;++t)o[t].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?o[0]instanceof HTMLElement&&o[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then((()=>{o[0]instanceof HTMLElement&&o[0].focus()})),this.host.requestUpdate()))}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate())}enableSubmenu(t=!0){t?this.enableSubmenuTimer=window.setTimeout((()=>{this.setSubmenuState(!0)}),this.submenuOpenDelay):this.setSubmenuState(!0)}disableSubmenu(){clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var t;if(!(null==(t=this.host.parentElement)?void 0:t.computedStyleMap))return;const e=this.host.parentElement.computedStyleMap(),o=["padding-top","border-top-width","margin-top"].reduce(((t,o)=>{var i;const n=null!=(i=e.get(o))?i:new CSSUnitValue(0,"px");return t-(n instanceof CSSUnitValue?n:new CSSUnitValue(0,"px")).to("px").value}),0);this.skidding=o}isExpanded(){return!!this.popupRef.value&&this.popupRef.value.active}renderSubmenu(){const t="ltr"===this.localize.dir();return this.isConnected?yt`
      <sl-popup
        ${mi(this.popupRef)}
        placement=${t?"right-start":"left-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:yt` <slot name="submenu" hidden></slot> `}},gi=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=t=>{const e=t.target;(this.slotNames.includes("[default]")&&!e.name||e.name&&this.slotNames.includes(e.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some((t=>{if(t.nodeType===t.TEXT_NODE&&""!==t.textContent.trim())return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if("sl-visually-hidden"===e.tagName.toLowerCase())return!1;if(!e.hasAttribute("slot"))return!0}return!1}))}hasNamedSlot(t){return null!==this.host.querySelector(`:scope > [slot="${t}"]`)}test(t){return"[default]"===t?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};var vi=class extends fe{constructor(){super(...arguments),this.type="normal",this.checked=!1,this.value="",this.disabled=!1,this.localize=new ei(this),this.hasSlotController=new gi(this,"submenu"),this.submenuController=new bi(this,this.hasSlotController,this.localize),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleMouseOver=t=>{this.focus(),t.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const t=this.getTextLabel();void 0!==this.cachedTextLabel?t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1})):this.cachedTextLabel=t}handleCheckedChange(){if(this.checked&&"checkbox"!==this.type)return this.checked=!1,void console.error('The checked attribute can only be used on menu items with type="checkbox"',this);"checkbox"===this.type?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){"checkbox"===this.type?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return function(t){if(!t)return"";const e=t.assignedNodes({flatten:!0});let o="";return[...e].forEach((t=>{t.nodeType===Node.TEXT_NODE&&(o+=t.textContent)})),o}(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const t="rtl"===this.localize.dir(),e=this.submenuController.isExpanded();return yt`
      <div
        id="anchor"
        part="base"
        class=${zo({"menu-item":!0,"menu-item--rtl":t,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":e})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!e}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${t?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
      </div>
    `}};vi.styles=si,vi.dependencies={"sl-icon":ye,"sl-popup":Mo},ne([pe("slot:not([name])")],vi.prototype,"defaultSlot",2),ne([pe(".menu-item")],vi.prototype,"menuItem",2),ne([he()],vi.prototype,"type",2),ne([he({type:Boolean,reflect:!0})],vi.prototype,"checked",2),ne([he()],vi.prototype,"value",2),ne([he({type:Boolean,reflect:!0})],vi.prototype,"disabled",2),ne([ae("checked")],vi.prototype,"handleCheckedChange",1),ne([ae("disabled")],vi.prototype,"handleDisabledChange",1),ne([ae("type")],vi.prototype,"handleTypeChange",1),vi.define("sl-menu-item");var yi=N`
  ${Ut}

  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`,wi=class extends fe{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}render(){const t=yt`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${()=>this.hasError=!0}"
      />
    `;let e=yt``;return e=this.initials?yt`<div part="initials" class="avatar__initials">${this.initials}</div>`:yt`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,yt`
      <div
        part="base"
        class=${zo({avatar:!0,"avatar--circle":"circle"===this.shape,"avatar--rounded":"rounded"===this.shape,"avatar--square":"square"===this.shape})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?t:e}
      </div>
    `}};wi.styles=yi,wi.dependencies={"sl-icon":ye},ne([de()],wi.prototype,"hasError",2),ne([he()],wi.prototype,"image",2),ne([he()],wi.prototype,"label",2),ne([he()],wi.prototype,"initials",2),ne([he()],wi.prototype,"loading",2),ne([he({reflect:!0})],wi.prototype,"shape",2),ne([ae("image")],wi.prototype,"handleImageChange",1),wi.define("sl-avatar");var xi=N`
  ${Ut}

  :host {
    display: contents;
  }
`,_i=class extends fe{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver((t=>{this.emit("sl-resize",{detail:{entries:t}})})),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const t=this.shadowRoot.querySelector("slot");if(null!==t){const e=t.assignedElements({flatten:!0});this.observedElements.forEach((t=>this.resizeObserver.unobserve(t))),this.observedElements=[],e.forEach((t=>{this.resizeObserver.observe(t),this.observedElements.push(t)}))}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return yt` <slot @slotchange=${this.handleSlotChange}></slot> `}};_i.styles=xi,ne([he({type:Boolean,reflect:!0})],_i.prototype,"disabled",2),ne([ae("disabled",{waitUntilFirstUpdate:!0})],_i.prototype,"handleDisabledChange",1),_i.define("sl-resize-observer");var $i=N`
  ${Ut}

  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`,ki=class extends fe{constructor(){super(...arguments),this.effect="none"}render(){return yt`
      <div
        part="base"
        class=${zo({skeleton:!0,"skeleton--pulse":"pulse"===this.effect,"skeleton--sheen":"sheen"===this.effect})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};function*Ci(t=document.activeElement){null!=t&&(yield t,"shadowRoot"in t&&t.shadowRoot&&"closed"!==t.shadowRoot.mode&&(yield*re(Ci(t.shadowRoot.activeElement))))}ki.styles=$i,ne([he()],ki.prototype,"effect",2),ki.define("sl-skeleton");var Ei=[],Ai=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=t=>{var e,o;if("Tab"!==t.key||this.isExternalActivated)return;if(!this.isActive())return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward",t.preventDefault();const i=_e(this.element),n=[...Ci()].pop();let s=i.findIndex((t=>t===n));if(-1===s)return this.currentFocus=i[0],void(null==(e=this.currentFocus)||e.focus({preventScroll:!0}));const r="forward"===this.tabDirection?1:-1;s+r>=i.length?s=0:s+r<0?s=i.length-1:s+=r,this.currentFocus=i[s],null==(o=this.currentFocus)||o.focus({preventScroll:!0}),setTimeout((()=>this.checkFocus()))},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t}activate(){Ei.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Ei=Ei.filter((t=>t!==this.element)),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Ei[Ei.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const t=_e(this.element);if(!this.element.matches(":focus-within")){const e=t[0],o=t[t.length-1],i="forward"===this.tabDirection?e:o;"function"==typeof(null==i?void 0:i.focus)&&(this.currentFocus=i,i.focus({preventScroll:!0}))}}}},Si=new Set;function Li(t){if(Si.add(t),!document.body.classList.contains("sl-scroll-lock")){const t=function(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}();document.body.classList.add("sl-scroll-lock"),document.body.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function Pi(t){Si.delete(t),0===Si.size&&(document.body.classList.remove("sl-scroll-lock"),document.body.style.removeProperty("--sl-scroll-lock-size"))}var zi=N`
  ${Ut}

  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,Oi=N`
  ${Ut}

  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;const Ti=Symbol.for(""),Mi=t=>{if(t?.r===Ti)return t?._$litStatic$},Di=(t,...e)=>({_$litStatic$:e.reduce(((e,o,i)=>e+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(o)+t[i+1]),t[0]),r:Ti}),Ri=new Map,Ni=(t=>(e,...o)=>{const i=o.length;let n,s;const r=[],a=[];let l,c=0,h=!1;for(;c<i;){for(l=e[c];c<i&&void 0!==(s=o[c],n=Mi(s));)l+=n+e[++c],h=!0;c!==i&&a.push(s),r.push(l),c++}if(c===i&&r.push(e[i]),h){const t=r.join("$$lit$$");void 0===(e=Ri.get(t))&&(r.raw=r,Ri.set(t,e=r)),o=a}return t(e,...o)})(yt),Ui=t=>t??xt;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Fi=class extends fe{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?Di`a`:Di`button`;return Ni`
      <${e}
        part="base"
        class=${zo({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${Ui(t?void 0:this.disabled)}
        type=${Ui(t?void 0:"button")}
        href=${Ui(t?this.href:void 0)}
        target=${Ui(t?this.target:void 0)}
        download=${Ui(t?this.download:void 0)}
        rel=${Ui(t&&this.target?"noreferrer noopener":void 0)}
        role=${Ui(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${Ui(this.name)}
          library=${Ui(this.library)}
          src=${Ui(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};Fi.styles=Oi,Fi.dependencies={"sl-icon":ye},ne([pe(".icon-button")],Fi.prototype,"button",2),ne([de()],Fi.prototype,"hasFocus",2),ne([he()],Fi.prototype,"name",2),ne([he()],Fi.prototype,"library",2),ne([he()],Fi.prototype,"src",2),ne([he()],Fi.prototype,"href",2),ne([he()],Fi.prototype,"target",2),ne([he()],Fi.prototype,"download",2),ne([he()],Fi.prototype,"label",2),ne([he({type:Boolean,reflect:!0})],Fi.prototype,"disabled",2);var Bi=class extends fe{constructor(){super(...arguments),this.hasSlotController=new gi(this,"footer"),this.localize=new ei(this),this.modal=new Ai(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{"Escape"===t.key&&this.modal.isActive()&&this.open&&(t.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Li(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),Pi(this)}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const t=Fo(this,"dialog.denyClose",{dir:this.localize.dir()});Io(this.panel,t.keyframes,t.options)}else this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Li(this);const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([Vo(this.dialog),Vo(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame((()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")}));const e=Fo(this,"dialog.show",{dir:this.localize.dir()}),o=Fo(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([Io(this.panel,e.keyframes,e.options),Io(this.overlay,o.keyframes,o.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([Vo(this.dialog),Vo(this.overlay)]);const t=Fo(this,"dialog.hide",{dir:this.localize.dir()}),e=Fo(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([Io(this.overlay,e.keyframes,e.options).then((()=>{this.overlay.hidden=!0})),Io(this.panel,t.keyframes,t.options).then((()=>{this.panel.hidden=!0}))]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Pi(this);const o=this.originalTrigger;"function"==typeof(null==o?void 0:o.focus)&&setTimeout((()=>o.focus())),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,Bo(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Bo(this,"sl-after-hide")}render(){return yt`
      <div
        part="base"
        class=${zo({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${Ui(this.noHeader?this.label:void 0)}
          aria-labelledby=${Ui(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":yt`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <slot part="body" class="dialog__body" tabindex="-1"></slot>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};Bi.styles=zi,Bi.dependencies={"sl-icon-button":Fi},ne([pe(".dialog")],Bi.prototype,"dialog",2),ne([pe(".dialog__panel")],Bi.prototype,"panel",2),ne([pe(".dialog__overlay")],Bi.prototype,"overlay",2),ne([he({type:Boolean,reflect:!0})],Bi.prototype,"open",2),ne([he({reflect:!0})],Bi.prototype,"label",2),ne([he({attribute:"no-header",type:Boolean,reflect:!0})],Bi.prototype,"noHeader",2),ne([ae("open",{waitUntilFirstUpdate:!0})],Bi.prototype,"handleOpenChange",1),Uo("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),Uo("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}}),Uo("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}}),Uo("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),Uo("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}}),Bi.define("sl-dialog");var Ii=N`
  ${Ut}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`,Hi=class extends fe{constructor(){super(...arguments),this.localize=new ei(this)}render(){return yt`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Hi.styles=Ii;var Vi=new WeakMap,ji=new WeakMap,Wi=new WeakMap,qi=new WeakSet,Ki=new WeakMap,Gi=class{constructor(t,e){this.handleFormData=t=>{const e=this.options.disabled(this.host),o=this.options.name(this.host),i=this.options.value(this.host),n="sl-button"===this.host.tagName.toLowerCase();!e&&!n&&"string"==typeof o&&o.length>0&&void 0!==i&&(Array.isArray(i)?i.forEach((e=>{t.formData.append(o,e.toString())})):t.formData.append(o,i.toString()))},this.handleFormSubmit=t=>{var e;const o=this.options.disabled(this.host),i=this.options.reportValidity;this.form&&!this.form.noValidate&&(null==(e=Vi.get(this.form))||e.forEach((t=>{this.setUserInteracted(t,!0)}))),!this.form||this.form.noValidate||o||i(this.host)||(t.preventDefault(),t.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Ki.set(this.host,[])},this.handleInteraction=t=>{const e=Ki.get(this.host);e.includes(t.type)||e.push(t.type),e.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const e of t)if("function"==typeof e.checkValidity&&!e.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const e of t)if("function"==typeof e.reportValidity&&!e.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=oe({form:t=>{const e=t.form;if(e){const o=t.getRootNode().getElementById(e);if(o)return o}return t.closest("form")},name:t=>t.name,value:t=>t.value,defaultValue:t=>t.defaultValue,disabled:t=>{var e;return null!=(e=t.disabled)&&e},reportValidity:t=>"function"!=typeof t.reportValidity||t.reportValidity(),checkValidity:t=>"function"!=typeof t.checkValidity||t.checkValidity(),setValue:(t,e)=>t.value=e,assumeInteractionOn:["sl-input"]},e)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),Ki.set(this.host,[]),this.options.assumeInteractionOn.forEach((t=>{this.host.addEventListener(t,this.handleInteraction)}))}hostDisconnected(){this.detachForm(),Ki.delete(this.host),this.options.assumeInteractionOn.forEach((t=>{this.host.removeEventListener(t,this.handleInteraction)}))}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,Vi.has(this.form)?Vi.get(this.form).add(this.host):Vi.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),ji.has(this.form)||(ji.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Wi.has(this.form)||(Wi.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=Vi.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),ji.has(this.form)&&(this.form.reportValidity=ji.get(this.form),ji.delete(this.form)),Wi.has(this.form)&&(this.form.checkValidity=Wi.get(this.form),Wi.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?qi.add(t):qi.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const o=document.createElement("button");o.type=t,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",e&&(o.name=e.name,o.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach((t=>{e.hasAttribute(t)&&o.setAttribute(t,e.getAttribute(t))}))),this.form.append(o),o.click(),o.remove()}}getForm(){var t;return null!=(t=this.form)?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,o=Boolean(qi.has(e)),i=Boolean(e.required);e.toggleAttribute("data-required",i),e.toggleAttribute("data-optional",!i),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&o),e.toggleAttribute("data-user-valid",t&&o)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||null==t||t.preventDefault()}},Zi=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(ie(oe({},Zi),{valid:!1,valueMissing:!0})),Object.freeze(ie(oe({},Zi),{valid:!1,customError:!0}));var Xi=N`
  ${Ut}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      .sl-button-group__button:not(
          .sl-button-group__button--first,
          .sl-button-group__button--radio,
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`,Yi=class extends fe{constructor(){super(...arguments),this.formControlController=new Gi(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new gi(this,"[default]","prefix","suffix"),this.localize=new ei(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Zi}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){"submit"===this.type&&this.formControlController.submit(this),"reset"===this.type&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return!this.isButton()||this.button.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.isButton()||this.button.reportValidity()}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?Di`a`:Di`button`;return Ni`
      <${e}
        part="base"
        class=${zo({button:!0,"button--default":"default"===this.variant,"button--primary":"primary"===this.variant,"button--success":"success"===this.variant,"button--neutral":"neutral"===this.variant,"button--warning":"warning"===this.variant,"button--danger":"danger"===this.variant,"button--text":"text"===this.variant,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":"rtl"===this.localize.dir(),"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${Ui(t?void 0:this.disabled)}
        type=${Ui(t?void 0:this.type)}
        title=${this.title}
        name=${Ui(t?void 0:this.name)}
        value=${Ui(t?void 0:this.value)}
        href=${Ui(t?this.href:void 0)}
        target=${Ui(t?this.target:void 0)}
        download=${Ui(t?this.download:void 0)}
        rel=${Ui(t?this.rel:void 0)}
        role=${Ui(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?Ni` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Ni`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};Yi.styles=Xi,Yi.dependencies={"sl-icon":ye,"sl-spinner":Hi},ne([pe(".button")],Yi.prototype,"button",2),ne([de()],Yi.prototype,"hasFocus",2),ne([de()],Yi.prototype,"invalid",2),ne([he()],Yi.prototype,"title",2),ne([he({reflect:!0})],Yi.prototype,"variant",2),ne([he({reflect:!0})],Yi.prototype,"size",2),ne([he({type:Boolean,reflect:!0})],Yi.prototype,"caret",2),ne([he({type:Boolean,reflect:!0})],Yi.prototype,"disabled",2),ne([he({type:Boolean,reflect:!0})],Yi.prototype,"loading",2),ne([he({type:Boolean,reflect:!0})],Yi.prototype,"outline",2),ne([he({type:Boolean,reflect:!0})],Yi.prototype,"pill",2),ne([he({type:Boolean,reflect:!0})],Yi.prototype,"circle",2),ne([he()],Yi.prototype,"type",2),ne([he()],Yi.prototype,"name",2),ne([he()],Yi.prototype,"value",2),ne([he()],Yi.prototype,"href",2),ne([he()],Yi.prototype,"target",2),ne([he()],Yi.prototype,"rel",2),ne([he()],Yi.prototype,"download",2),ne([he()],Yi.prototype,"form",2),ne([he({attribute:"formaction"})],Yi.prototype,"formAction",2),ne([he({attribute:"formenctype"})],Yi.prototype,"formEnctype",2),ne([he({attribute:"formmethod"})],Yi.prototype,"formMethod",2),ne([he({attribute:"formnovalidate",type:Boolean})],Yi.prototype,"formNoValidate",2),ne([he({attribute:"formtarget"})],Yi.prototype,"formTarget",2),ne([ae("disabled",{waitUntilFirstUpdate:!0})],Yi.prototype,"handleDisabledChange",1),Yi.define("sl-button"),It("shoelace");export{x as SignalWatcher,z as avatarGradient,w as preactSignals};
