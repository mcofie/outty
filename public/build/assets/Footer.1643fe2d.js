import{aj as ot,G as z,u as W,ak as ct,I as it,l as Ge,z as at,C as j,p as Ve,H as le,r as lt,x as ut,a as Ke,c as De,b as $,t as be}from"./store.aaf64c50.js";/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const G=typeof window<"u";function ft(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const S=Object.assign;function ue(e,t){const n={};for(const r in t){const s=t[r];n[r]=N(s)?s.map(e):e(s)}return n}const Y=()=>{},N=Array.isArray,ht=/\/$/,dt=e=>e.replace(ht,"");function fe(e,t,n="/"){let r,s={},l="",d="";const m=t.indexOf("#");let i=t.indexOf("?");return m<i&&m>=0&&(i=-1),i>-1&&(r=t.slice(0,i),l=t.slice(i+1,m>-1?m:t.length),s=e(l)),m>-1&&(r=r||t.slice(0,m),d=t.slice(m,t.length)),r=vt(r!=null?r:t,n),{fullPath:r+(l&&"?")+l+d,path:r,query:s,hash:d}}function pt(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function ke(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function mt(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&V(t.matched[r],n.matched[s])&&Ue(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function V(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ue(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!gt(e[n],t[n]))return!1;return!0}function gt(e,t){return N(e)?Ce(e,t):N(t)?Ce(t,e):e===t}function Ce(e,t){return N(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function vt(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let l=n.length-1,d,m;for(d=0;d<r.length;d++)if(m=r[d],m!==".")if(m==="..")l>1&&l--;else break;return n.slice(0,l).join("/")+"/"+r.slice(d-(d===r.length?1:0)).join("/")}var Z;(function(e){e.pop="pop",e.push="push"})(Z||(Z={}));var X;(function(e){e.back="back",e.forward="forward",e.unknown=""})(X||(X={}));function yt(e){if(!e)if(G){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),dt(e)}const Rt=/^[^#]+#/;function Et(e,t){return e.replace(Rt,"#")+t}function wt(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const ne=()=>({left:window.pageXOffset,top:window.pageYOffset});function Pt(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=wt(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Ae(e,t){return(history.state?history.state.position-t:-1)+e}const de=new Map;function St(e,t){de.set(e,t)}function _t(e){const t=de.get(e);return de.delete(e),t}let bt=()=>location.protocol+"//"+location.host;function Fe(e,t){const{pathname:n,search:r,hash:s}=t,l=e.indexOf("#");if(l>-1){let m=s.includes(e.slice(l))?e.slice(l).length:1,i=s.slice(m);return i[0]!=="/"&&(i="/"+i),ke(i,"")}return ke(n,e)+r+s}function kt(e,t,n,r){let s=[],l=[],d=null;const m=({state:u})=>{const g=Fe(e,location),R=n.value,k=t.value;let b=0;if(u){if(n.value=g,t.value=u,d&&d===R){d=null;return}b=k?u.position-k.position:0}else r(g);s.forEach(E=>{E(n.value,R,{delta:b,type:Z.pop,direction:b?b>0?X.forward:X.back:X.unknown})})};function i(){d=n.value}function f(u){s.push(u);const g=()=>{const R=s.indexOf(u);R>-1&&s.splice(R,1)};return l.push(g),g}function o(){const{history:u}=window;!u.state||u.replaceState(S({},u.state,{scroll:ne()}),"")}function a(){for(const u of l)u();l=[],window.removeEventListener("popstate",m),window.removeEventListener("beforeunload",o)}return window.addEventListener("popstate",m),window.addEventListener("beforeunload",o,{passive:!0}),{pauseListeners:i,listen:f,destroy:a}}function Oe(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?ne():null}}function Ct(e){const{history:t,location:n}=window,r={value:Fe(e,n)},s={value:t.state};s.value||l(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function l(i,f,o){const a=e.indexOf("#"),u=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+i:bt()+e+i;try{t[o?"replaceState":"pushState"](f,"",u),s.value=f}catch(g){console.error(g),n[o?"replace":"assign"](u)}}function d(i,f){const o=S({},t.state,Oe(s.value.back,i,s.value.forward,!0),f,{position:s.value.position});l(i,o,!0),r.value=i}function m(i,f){const o=S({},s.value,t.state,{forward:i,scroll:ne()});l(o.current,o,!0);const a=S({},Oe(r.value,i,null),{position:o.position+1},f);l(i,a,!1),r.value=i}return{location:r,state:s,push:m,replace:d}}function Sn(e){e=yt(e);const t=Ct(e),n=kt(e,t.state,t.location,t.replace);function r(l,d=!0){d||n.pauseListeners(),history.go(l)}const s=S({location:"",base:e,go:r,createHref:Et.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function At(e){return typeof e=="string"||e&&typeof e=="object"}function Qe(e){return typeof e=="string"||typeof e=="symbol"}const B={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},We=Symbol("");var xe;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(xe||(xe={}));function K(e,t){return S(new Error,{type:e,[We]:!0},t)}function L(e,t){return e instanceof Error&&We in e&&(t==null||!!(e.type&t))}const $e="[^/]+?",Ot={sensitive:!1,strict:!1,start:!0,end:!0},xt=/[.+*?^${}()[\]/\\]/g;function $t(e,t){const n=S({},Ot,t),r=[];let s=n.start?"^":"";const l=[];for(const f of e){const o=f.length?[]:[90];n.strict&&!f.length&&(s+="/");for(let a=0;a<f.length;a++){const u=f[a];let g=40+(n.sensitive?.25:0);if(u.type===0)a||(s+="/"),s+=u.value.replace(xt,"\\$&"),g+=40;else if(u.type===1){const{value:R,repeatable:k,optional:b,regexp:E}=u;l.push({name:R,repeatable:k,optional:b});const P=E||$e;if(P!==$e){g+=10;try{new RegExp(`(${P})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${R}" (${P}): `+M.message)}}let O=k?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;a||(O=b&&f.length<2?`(?:/${O})`:"/"+O),b&&(O+="?"),s+=O,g+=20,b&&(g+=-8),k&&(g+=-20),P===".*"&&(g+=-50)}o.push(g)}r.push(o)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const d=new RegExp(s,n.sensitive?"":"i");function m(f){const o=f.match(d),a={};if(!o)return null;for(let u=1;u<o.length;u++){const g=o[u]||"",R=l[u-1];a[R.name]=g&&R.repeatable?g.split("/"):g}return a}function i(f){let o="",a=!1;for(const u of e){(!a||!o.endsWith("/"))&&(o+="/"),a=!1;for(const g of u)if(g.type===0)o+=g.value;else if(g.type===1){const{value:R,repeatable:k,optional:b}=g,E=R in f?f[R]:"";if(N(E)&&!k)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const P=N(E)?E.join("/"):E;if(!P)if(b)u.length<2&&(o.endsWith("/")?o=o.slice(0,-1):a=!0);else throw new Error(`Missing required param "${R}"`);o+=P}}return o||"/"}return{re:d,score:r,keys:l,parse:m,stringify:i}}function Mt(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Nt(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const l=Mt(r[n],s[n]);if(l)return l;n++}if(Math.abs(s.length-r.length)===1){if(Me(r))return 1;if(Me(s))return-1}return s.length-r.length}function Me(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const jt={type:0,value:""},It=/[a-zA-Z0-9_]/;function Lt(e){if(!e)return[[]];if(e==="/")return[[jt]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${f}": ${g}`)}let n=0,r=n;const s=[];let l;function d(){l&&s.push(l),l=[]}let m=0,i,f="",o="";function a(){!f||(n===0?l.push({type:0,value:f}):n===1||n===2||n===3?(l.length>1&&(i==="*"||i==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:f,regexp:o,repeatable:i==="*"||i==="+",optional:i==="*"||i==="?"})):t("Invalid state to consume buffer"),f="")}function u(){f+=i}for(;m<e.length;){if(i=e[m++],i==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:i==="/"?(f&&a(),d()):i===":"?(a(),n=1):u();break;case 4:u(),n=r;break;case 1:i==="("?n=2:It.test(i)?u():(a(),n=0,i!=="*"&&i!=="?"&&i!=="+"&&m--);break;case 2:i===")"?o[o.length-1]=="\\"?o=o.slice(0,-1)+i:n=3:o+=i;break;case 3:a(),n=0,i!=="*"&&i!=="?"&&i!=="+"&&m--,o="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),a(),d(),s}function Bt(e,t,n){const r=$t(Lt(e.path),n),s=S(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Tt(e,t){const n=[],r=new Map;t=Ie({strict:!1,end:!0,sensitive:!1},t);function s(o){return r.get(o)}function l(o,a,u){const g=!u,R=Ht(o);R.aliasOf=u&&u.record;const k=Ie(t,o),b=[R];if("alias"in o){const O=typeof o.alias=="string"?[o.alias]:o.alias;for(const M of O)b.push(S({},R,{components:u?u.record.components:R.components,path:M,aliasOf:u?u.record:R}))}let E,P;for(const O of b){const{path:M}=O;if(a&&M[0]!=="/"){const H=a.record.path,I=H[H.length-1]==="/"?"":"/";O.path=a.record.path+(M&&I+M)}if(E=Bt(O,a,k),u?u.alias.push(E):(P=P||E,P!==E&&P.alias.push(E),g&&o.name&&!je(E)&&d(o.name)),R.children){const H=R.children;for(let I=0;I<H.length;I++)l(H[I],E,u&&u.children[I])}u=u||E,(E.record.components&&Object.keys(E.record.components).length||E.record.name||E.record.redirect)&&i(E)}return P?()=>{d(P)}:Y}function d(o){if(Qe(o)){const a=r.get(o);a&&(r.delete(o),n.splice(n.indexOf(a),1),a.children.forEach(d),a.alias.forEach(d))}else{const a=n.indexOf(o);a>-1&&(n.splice(a,1),o.record.name&&r.delete(o.record.name),o.children.forEach(d),o.alias.forEach(d))}}function m(){return n}function i(o){let a=0;for(;a<n.length&&Nt(o,n[a])>=0&&(o.record.path!==n[a].record.path||!Ye(o,n[a]));)a++;n.splice(a,0,o),o.record.name&&!je(o)&&r.set(o.record.name,o)}function f(o,a){let u,g={},R,k;if("name"in o&&o.name){if(u=r.get(o.name),!u)throw K(1,{location:o});k=u.record.name,g=S(Ne(a.params,u.keys.filter(P=>!P.optional).map(P=>P.name)),o.params&&Ne(o.params,u.keys.map(P=>P.name))),R=u.stringify(g)}else if("path"in o)R=o.path,u=n.find(P=>P.re.test(R)),u&&(g=u.parse(R),k=u.record.name);else{if(u=a.name?r.get(a.name):n.find(P=>P.re.test(a.path)),!u)throw K(1,{location:o,currentLocation:a});k=u.record.name,g=S({},a.params,o.params),R=u.stringify(g)}const b=[];let E=u;for(;E;)b.unshift(E.record),E=E.parent;return{name:k,path:R,params:g,matched:b,meta:qt(b)}}return e.forEach(o=>l(o)),{addRoute:l,resolve:f,removeRoute:d,getRoutes:m,getRecordMatcher:s}}function Ne(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Ht(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:zt(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function zt(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function je(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function qt(e){return e.reduce((t,n)=>S(t,n.meta),{})}function Ie(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Ye(e,t){return t.children.some(n=>n===e||Ye(e,n))}const Xe=/#/g,Gt=/&/g,Vt=/\//g,Kt=/=/g,Dt=/\?/g,Ze=/\+/g,Ut=/%5B/g,Ft=/%5D/g,Je=/%5E/g,Qt=/%60/g,et=/%7B/g,Wt=/%7C/g,tt=/%7D/g,Yt=/%20/g;function ge(e){return encodeURI(""+e).replace(Wt,"|").replace(Ut,"[").replace(Ft,"]")}function Xt(e){return ge(e).replace(et,"{").replace(tt,"}").replace(Je,"^")}function pe(e){return ge(e).replace(Ze,"%2B").replace(Yt,"+").replace(Xe,"%23").replace(Gt,"%26").replace(Qt,"`").replace(et,"{").replace(tt,"}").replace(Je,"^")}function Zt(e){return pe(e).replace(Kt,"%3D")}function Jt(e){return ge(e).replace(Xe,"%23").replace(Dt,"%3F")}function en(e){return e==null?"":Jt(e).replace(Vt,"%2F")}function te(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function tn(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const l=r[s].replace(Ze," "),d=l.indexOf("="),m=te(d<0?l:l.slice(0,d)),i=d<0?null:te(l.slice(d+1));if(m in t){let f=t[m];N(f)||(f=t[m]=[f]),f.push(i)}else t[m]=i}return t}function Le(e){let t="";for(let n in e){const r=e[n];if(n=Zt(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(N(r)?r.map(l=>l&&pe(l)):[r&&pe(r)]).forEach(l=>{l!==void 0&&(t+=(t.length?"&":"")+n,l!=null&&(t+="="+l))})}return t}function nn(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=N(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const rn=Symbol(""),Be=Symbol(""),re=Symbol(""),ve=Symbol(""),me=Symbol("");function Q(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function T(e,t,n,r,s){const l=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((d,m)=>{const i=a=>{a===!1?m(K(4,{from:n,to:t})):a instanceof Error?m(a):At(a)?m(K(2,{from:t,to:a})):(l&&r.enterCallbacks[s]===l&&typeof a=="function"&&l.push(a),d())},f=e.call(r&&r.instances[s],t,n,i);let o=Promise.resolve(f);e.length<3&&(o=o.then(i)),o.catch(a=>m(a))})}function he(e,t,n,r){const s=[];for(const l of e)for(const d in l.components){let m=l.components[d];if(!(t!=="beforeRouteEnter"&&!l.instances[d]))if(sn(m)){const f=(m.__vccOpts||m)[t];f&&s.push(T(f,n,r,l,d))}else{let i=m();s.push(()=>i.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${d}" at "${l.path}"`));const o=ft(f)?f.default:f;l.components[d]=o;const u=(o.__vccOpts||o)[t];return u&&T(u,n,r,l,d)()}))}}return s}function sn(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Te(e){const t=z(re),n=z(ve),r=j(()=>t.resolve(W(e.to))),s=j(()=>{const{matched:i}=r.value,{length:f}=i,o=i[f-1],a=n.matched;if(!o||!a.length)return-1;const u=a.findIndex(V.bind(null,o));if(u>-1)return u;const g=He(i[f-2]);return f>1&&He(o)===g&&a[a.length-1].path!==g?a.findIndex(V.bind(null,i[f-2])):u}),l=j(()=>s.value>-1&&ln(n.params,r.value.params)),d=j(()=>s.value>-1&&s.value===n.matched.length-1&&Ue(n.params,r.value.params));function m(i={}){return an(i)?t[W(e.replace)?"replace":"push"](W(e.to)).catch(Y):Promise.resolve()}return{route:r,href:j(()=>r.value.href),isActive:l,isExactActive:d,navigate:m}}const on=Ge({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Te,setup(e,{slots:t}){const n=at(Te(e)),{options:r}=z(re),s=j(()=>({[ze(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ze(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const l=t.default&&t.default(n);return e.custom?l:Ve("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},l)}}}),cn=on;function an(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function ln(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!N(s)||s.length!==r.length||r.some((l,d)=>l!==s[d]))return!1}return!0}function He(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ze=(e,t,n)=>e!=null?e:t!=null?t:n,un=Ge({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=z(me),s=j(()=>e.route||r.value),l=z(Be,0),d=j(()=>{let f=W(l);const{matched:o}=s.value;let a;for(;(a=o[f])&&!a.components;)f++;return f}),m=j(()=>s.value.matched[d.value]);le(Be,j(()=>d.value+1)),le(rn,m),le(me,s);const i=lt();return ut(()=>[i.value,m.value,e.name],([f,o,a],[u,g,R])=>{o&&(o.instances[a]=f,g&&g!==o&&f&&f===u&&(o.leaveGuards.size||(o.leaveGuards=g.leaveGuards),o.updateGuards.size||(o.updateGuards=g.updateGuards))),f&&o&&(!g||!V(o,g)||!u)&&(o.enterCallbacks[a]||[]).forEach(k=>k(f))},{flush:"post"}),()=>{const f=s.value,o=e.name,a=m.value,u=a&&a.components[o];if(!u)return qe(n.default,{Component:u,route:f});const g=a.props[o],R=g?g===!0?f.params:typeof g=="function"?g(f):g:null,b=Ve(u,S({},R,t,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(a.instances[o]=null)},ref:i}));return qe(n.default,{Component:b,route:f})||b}}});function qe(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const fn=un;function _n(e){const t=Tt(e.routes,e),n=e.parseQuery||tn,r=e.stringifyQuery||Le,s=e.history,l=Q(),d=Q(),m=Q(),i=ot(B);let f=B;G&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const o=ue.bind(null,c=>""+c),a=ue.bind(null,en),u=ue.bind(null,te);function g(c,p){let h,v;return Qe(c)?(h=t.getRecordMatcher(c),v=p):v=c,t.addRoute(v,h)}function R(c){const p=t.getRecordMatcher(c);p&&t.removeRoute(p)}function k(){return t.getRoutes().map(c=>c.record)}function b(c){return!!t.getRecordMatcher(c)}function E(c,p){if(p=S({},p||i.value),typeof c=="string"){const y=fe(n,c,p.path),A=t.resolve({path:y.path},p),F=s.createHref(y.fullPath);return S(y,A,{params:u(A.params),hash:te(y.hash),redirectedFrom:void 0,href:F})}let h;if("path"in c)h=S({},c,{path:fe(n,c.path,p.path).path});else{const y=S({},c.params);for(const A in y)y[A]==null&&delete y[A];h=S({},c,{params:a(y)}),p.params=a(p.params)}const v=t.resolve(h,p),_=c.hash||"";v.params=o(u(v.params));const C=pt(r,S({},c,{hash:Xt(_),path:v.path})),w=s.createHref(C);return S({fullPath:C,hash:_,query:r===Le?nn(c.query):c.query||{}},v,{redirectedFrom:void 0,href:w})}function P(c){return typeof c=="string"?fe(n,c,i.value.path):S({},c)}function O(c,p){if(f!==c)return K(8,{from:p,to:c})}function M(c){return D(c)}function H(c){return M(S(P(c),{replace:!0}))}function I(c){const p=c.matched[c.matched.length-1];if(p&&p.redirect){const{redirect:h}=p;let v=typeof h=="function"?h(c):h;return typeof v=="string"&&(v=v.includes("?")||v.includes("#")?v=P(v):{path:v},v.params={}),S({query:c.query,hash:c.hash,params:"path"in v?{}:c.params},v)}}function D(c,p){const h=f=E(c),v=i.value,_=c.state,C=c.force,w=c.replace===!0,y=I(h);if(y)return D(S(P(y),{state:typeof y=="object"?S({},_,y.state):_,force:C,replace:w}),p||h);const A=h;A.redirectedFrom=p;let F;return!C&&mt(r,v,h)&&(F=K(16,{to:A,from:v}),Se(v,v,!0,!1)),(F?Promise.resolve(F):Re(A,v)).catch(x=>L(x)?L(x,2)?x:ce(x):oe(x,A,v)).then(x=>{if(x){if(L(x,2))return D(S({replace:w},P(x.to),{state:typeof x.to=="object"?S({},_,x.to.state):_,force:C}),p||A)}else x=we(A,v,!0,w,_);return Ee(A,v,x),x})}function nt(c,p){const h=O(c,p);return h?Promise.reject(h):Promise.resolve()}function ye(c){const p=ee.values().next().value;return p&&typeof p.runWithContext=="function"?p.runWithContext(c):c()}function Re(c,p){let h;const[v,_,C]=hn(c,p);h=he(v.reverse(),"beforeRouteLeave",c,p);for(const y of v)y.leaveGuards.forEach(A=>{h.push(T(A,c,p))});const w=nt.bind(null,c,p);return h.push(w),q(h).then(()=>{h=[];for(const y of l.list())h.push(T(y,c,p));return h.push(w),q(h)}).then(()=>{h=he(_,"beforeRouteUpdate",c,p);for(const y of _)y.updateGuards.forEach(A=>{h.push(T(A,c,p))});return h.push(w),q(h)}).then(()=>{h=[];for(const y of C)if(y.beforeEnter)if(N(y.beforeEnter))for(const A of y.beforeEnter)h.push(T(A,c,p));else h.push(T(y.beforeEnter,c,p));return h.push(w),q(h)}).then(()=>(c.matched.forEach(y=>y.enterCallbacks={}),h=he(C,"beforeRouteEnter",c,p),h.push(w),q(h))).then(()=>{h=[];for(const y of d.list())h.push(T(y,c,p));return h.push(w),q(h)}).catch(y=>L(y,8)?y:Promise.reject(y))}function Ee(c,p,h){m.list().forEach(v=>ye(()=>v(c,p,h)))}function we(c,p,h,v,_){const C=O(c,p);if(C)return C;const w=p===B,y=G?history.state:{};h&&(v||w?s.replace(c.fullPath,S({scroll:w&&y&&y.scroll},_)):s.push(c.fullPath,_)),i.value=c,Se(c,p,h,w),ce()}let U;function rt(){U||(U=s.listen((c,p,h)=>{if(!_e.listening)return;const v=E(c),_=I(v);if(_){D(S(_,{replace:!0}),v).catch(Y);return}f=v;const C=i.value;G&&St(Ae(C.fullPath,h.delta),ne()),Re(v,C).catch(w=>L(w,12)?w:L(w,2)?(D(w.to,v).then(y=>{L(y,20)&&!h.delta&&h.type===Z.pop&&s.go(-1,!1)}).catch(Y),Promise.reject()):(h.delta&&s.go(-h.delta,!1),oe(w,v,C))).then(w=>{w=w||we(v,C,!1),w&&(h.delta&&!L(w,8)?s.go(-h.delta,!1):h.type===Z.pop&&L(w,20)&&s.go(-1,!1)),Ee(v,C,w)}).catch(Y)}))}let se=Q(),Pe=Q(),J;function oe(c,p,h){ce(c);const v=Pe.list();return v.length?v.forEach(_=>_(c,p,h)):console.error(c),Promise.reject(c)}function st(){return J&&i.value!==B?Promise.resolve():new Promise((c,p)=>{se.add([c,p])})}function ce(c){return J||(J=!c,rt(),se.list().forEach(([p,h])=>c?h(c):p()),se.reset()),c}function Se(c,p,h,v){const{scrollBehavior:_}=e;if(!G||!_)return Promise.resolve();const C=!h&&_t(Ae(c.fullPath,0))||(v||!h)&&history.state&&history.state.scroll||null;return it().then(()=>_(c,p,C)).then(w=>w&&Pt(w)).catch(w=>oe(w,c,p))}const ie=c=>s.go(c);let ae;const ee=new Set,_e={currentRoute:i,listening:!0,addRoute:g,removeRoute:R,hasRoute:b,getRoutes:k,resolve:E,options:e,push:M,replace:H,go:ie,back:()=>ie(-1),forward:()=>ie(1),beforeEach:l.add,beforeResolve:d.add,afterEach:m.add,onError:Pe.add,isReady:st,install(c){const p=this;c.component("RouterLink",cn),c.component("RouterView",fn),c.config.globalProperties.$router=p,Object.defineProperty(c.config.globalProperties,"$route",{enumerable:!0,get:()=>W(i)}),G&&!ae&&i.value===B&&(ae=!0,M(s.location).catch(_=>{}));const h={};for(const _ in B)Object.defineProperty(h,_,{get:()=>i.value[_],enumerable:!0});c.provide(re,p),c.provide(ve,ct(h)),c.provide(me,i);const v=c.unmount;ee.add(c),c.unmount=function(){ee.delete(c),ee.size<1&&(f=B,U&&U(),U=null,i.value=B,ae=!1,J=!1),v()}}};function q(c){return c.reduce((p,h)=>p.then(()=>ye(h)),Promise.resolve())}return _e}function hn(e,t){const n=[],r=[],s=[],l=Math.max(t.matched.length,e.matched.length);for(let d=0;d<l;d++){const m=t.matched[d];m&&(e.matched.find(f=>V(f,m))?r.push(m):n.push(m));const i=e.matched[d];i&&(t.matched.find(f=>V(f,i))||s.push(i))}return[n,r,s]}function bn(){return z(re)}function kn(){return z(ve)}const dn={class:"row justify-content-center h-100 align-content-center"},pn={class:"col-md-6"},mn={class:"list-unstyled text-center mt-5"},Cn={name:"EmptyState",props:["title","message"],setup(e){return(t,n)=>(Ke(),De("div",dn,[$("div",pn,[$("ul",mn,[$("li",null,[$("h1",null,be(e.title),1)]),$("li",null,[$("p",null,be(e.message),1)])])])]))}},gn=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},vn={name:"Footer"},yn={class:"container"},Rn=$("div",{class:"row justify-content-center text-center mt-5"},[$("ul",{class:"list-unstyled opacity-50"},[$("li",null,[$("h6",null,"outty.co \u{1F1EC}\u{1F1ED}")]),$("li",null,[$("small",null,"\xA9 All Rights Reserved")])])],-1),En=[Rn];function wn(e,t,n,r,s,l){return Ke(),De("div",yn,En)}const An=gn(vn,[["render",wn]]);export{An as F,Cn as _,kn as a,gn as b,_n as c,Sn as d,bn as u};
