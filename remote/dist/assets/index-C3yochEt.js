var gl=Object.defineProperty;var yl=(n,e,t)=>e in n?gl(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Wn=(n,e,t)=>yl(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();function k(){}const vr=n=>n;function Te(n,e){for(const t in e)n[t]=e[t];return n}function vl(n){return!!n&&(typeof n=="object"||typeof n=="function")&&typeof n.then=="function"}function Cr(n){return n()}function ci(){return Object.create(null)}function Ae(n){n.forEach(Cr)}function Ht(n){return typeof n=="function"}function ye(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function Cl(n){return Object.keys(n).length===0}function Er(n,...e){if(n==null){for(const s of e)s(void 0);return k}const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Oe(n,e,t){n.$$.on_destroy.push(Er(e,t))}function wn(n,e,t,s){if(n){const i=br(n,e,t,s);return n[0](i)}}function br(n,e,t,s){return n[1]&&s?Te(t.ctx.slice(),n[1](s(e))):t.ctx}function In(n,e,t,s){if(n[2]&&s){const i=n[2](s(t));if(e.dirty===void 0)return i;if(typeof i=="object"){const r=[],o=Math.max(e.dirty.length,i.length);for(let l=0;l<o;l+=1)r[l]=e.dirty[l]|i[l];return r}return e.dirty|i}return e.dirty}function Sn(n,e,t,s,i,r){if(i){const o=br(e,t,s,r);n.p(o,i)}}function Tn(n){if(n.ctx.length>32){const e=[],t=n.ctx.length/32;for(let s=0;s<t;s++)e[s]=-1;return e}return-1}function ss(n){const e={};for(const t in n)t[0]!=="$"&&(e[t]=n[t]);return e}function ui(n,e){const t={};e=new Set(e);for(const s in n)!e.has(s)&&s[0]!=="$"&&(t[s]=n[s]);return t}const wr=typeof window<"u";let Ir=wr?()=>window.performance.now():()=>Date.now(),Ns=wr?n=>requestAnimationFrame(n):k;const Ke=new Set;function Sr(n){Ke.forEach(e=>{e.c(n)||(Ke.delete(e),e.f())}),Ke.size!==0&&Ns(Sr)}function Tr(n){let e;return Ke.size===0&&Ns(Sr),{promise:new Promise(t=>{Ke.add(e={c:n,f:t})}),abort(){Ke.delete(e)}}}function x(n,e){n.appendChild(e)}function Nr(n){if(!n)return document;const e=n.getRootNode?n.getRootNode():n.ownerDocument;return e&&e.host?e:n.ownerDocument}function El(n){const e=U("style");return e.textContent="/* empty */",bl(Nr(n),e),e.sheet}function bl(n,e){return x(n.head||n,e),e.sheet}function Q(n,e,t){n.insertBefore(e,t||null)}function V(n){n.parentNode&&n.parentNode.removeChild(n)}function wl(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function U(n){return document.createElement(n)}function ot(n){return document.createTextNode(n)}function re(){return ot(" ")}function lt(){return ot("")}function ee(n,e,t,s){return n.addEventListener(e,t,s),()=>n.removeEventListener(e,t,s)}function q(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}const Il=["width","height"];function hi(n,e){const t=Object.getOwnPropertyDescriptors(n.__proto__);for(const s in e)e[s]==null?n.removeAttribute(s):s==="style"?n.style.cssText=e[s]:s==="__value"?n.value=n[s]=e[s]:t[s]&&t[s].set&&Il.indexOf(s)===-1?n[s]=e[s]:q(n,s,e[s])}function Sl(n){return Array.from(n.childNodes)}function Rr(n,e){e=""+e,n.data!==e&&(n.data=e)}function Et(n,e,t,s){t==null?n.style.removeProperty(e):n.style.setProperty(e,t,"")}function di(n,e,t){n.classList.toggle(e,!!t)}function kr(n,e,{bubbles:t=!1,cancelable:s=!1}={}){return new CustomEvent(n,{detail:e,bubbles:t,cancelable:s})}function fi(n,e){return new n(e)}const en=new Map;let tn=0;function Tl(n){let e=5381,t=n.length;for(;t--;)e=(e<<5)-e^n.charCodeAt(t);return e>>>0}function Nl(n,e){const t={stylesheet:El(e),rules:{}};return en.set(n,t),t}function Ar(n,e,t,s,i,r,o,l=0){const a=16.666/s;let c=`{
`;for(let y=0;y<=1;y+=a){const b=e+(t-e)*r(y);c+=y*100+`%{${o(b,1-b)}}
`}const h=c+`100% {${o(t,1-t)}}
}`,u=`__svelte_${Tl(h)}_${l}`,d=Nr(n),{stylesheet:f,rules:_}=en.get(d)||Nl(d,n);_[u]||(_[u]=!0,f.insertRule(`@keyframes ${u} ${h}`,f.cssRules.length));const m=n.style.animation||"";return n.style.animation=`${m?`${m}, `:""}${u} ${s}ms linear ${i}ms 1 both`,tn+=1,u}function is(n,e){const t=(n.style.animation||"").split(", "),s=t.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),i=t.length-s.length;i&&(n.style.animation=s.join(", "),tn-=i,tn||Rl())}function Rl(){Ns(()=>{tn||(en.forEach(n=>{const{ownerNode:e}=n.stylesheet;e&&V(e)}),en.clear())})}let Nt;function fe(n){Nt=n}function at(){if(!Nt)throw new Error("Function called outside component initialization");return Nt}function Nn(n){at().$$.on_mount.push(n)}function kl(n){at().$$.on_destroy.push(n)}function Al(){const n=at();return(e,t,{cancelable:s=!1}={})=>{const i=n.$$.callbacks[e];if(i){const r=kr(e,t,{cancelable:s});return i.slice().forEach(o=>{o.call(n,r)}),!r.defaultPrevented}return!0}}function Un(n,e){return at().$$.context.set(n,e),e}function Qe(n){return at().$$.context.get(n)}const ze=[],Rt=[];let Xe=[];const _i=[],Dl=Promise.resolve();let rs=!1;function Pl(){rs||(rs=!0,Dl.then(Rs))}function tt(n){Xe.push(n)}const Hn=new Set;let $e=0;function Rs(){if($e!==0)return;const n=Nt;do{try{for(;$e<ze.length;){const e=ze[$e];$e++,fe(e),Ol(e.$$)}}catch(e){throw ze.length=0,$e=0,e}for(fe(null),ze.length=0,$e=0;Rt.length;)Rt.pop()();for(let e=0;e<Xe.length;e+=1){const t=Xe[e];Hn.has(t)||(Hn.add(t),t())}Xe.length=0}while(ze.length);for(;_i.length;)_i.pop()();rs=!1,Hn.clear(),fe(n)}function Ol(n){if(n.fragment!==null){n.update(),Ae(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(tt)}}function xl(n){const e=[],t=[];Xe.forEach(s=>n.indexOf(s)===-1?e.push(s):t.push(s)),t.forEach(s=>s()),Xe=e}let mt;function Dr(){return mt||(mt=Promise.resolve(),mt.then(()=>{mt=null})),mt}function nn(n,e,t){n.dispatchEvent(kr(`${e?"intro":"outro"}${t}`))}const Jt=new Set;let Ee;function ct(){Ee={r:0,c:[],p:Ee}}function ut(){Ee.r||Ae(Ee.c),Ee=Ee.p}function L(n,e){n&&n.i&&(Jt.delete(n),n.i(e))}function B(n,e,t,s){if(n&&n.o){if(Jt.has(n))return;Jt.add(n),Ee.c.push(()=>{Jt.delete(n),s&&(t&&n.d(1),s())}),n.o(e)}else s&&s()}const Pr={duration:0};function Ml(n,e,t){const s={direction:"in"};let i=e(n,t,s),r=!1,o,l,a=0;function c(){o&&is(n,o)}function h(){const{delay:d=0,duration:f=300,easing:_=vr,tick:m=k,css:y}=i||Pr;y&&(o=Ar(n,0,1,f,d,_,y,a++)),m(0,1);const b=Ir()+d,T=b+f;l&&l.abort(),r=!0,tt(()=>nn(n,!0,"start")),l=Tr(v=>{if(r){if(v>=T)return m(1,0),nn(n,!0,"end"),c(),r=!1;if(v>=b){const F=_((v-b)/f);m(F,1-F)}}return r})}let u=!1;return{start(){u||(u=!0,is(n),Ht(i)?(i=i(s),Dr().then(h)):h())},invalidate(){u=!1},end(){r&&(c(),r=!1)}}}function Ll(n,e,t){const s={direction:"out"};let i=e(n,t,s),r=!0,o;const l=Ee;l.r+=1;let a;function c(){const{delay:h=0,duration:u=300,easing:d=vr,tick:f=k,css:_}=i||Pr;_&&(o=Ar(n,1,0,u,h,d,_));const m=Ir()+h,y=m+u;tt(()=>nn(n,!1,"start")),"inert"in n&&(a=n.inert,n.inert=!0),Tr(b=>{if(r){if(b>=y)return f(0,1),nn(n,!1,"end"),--l.r||Ae(l.c),!1;if(b>=m){const T=d((b-m)/u);f(1-T,T)}}return r})}return Ht(i)?Dr().then(()=>{i=i(s),c()}):c(),{end(h){h&&"inert"in n&&(n.inert=a),h&&i.tick&&i.tick(1,0),r&&(o&&is(n,o),r=!1)}}}function pi(n,e){const t=e.token={};function s(i,r,o,l){if(e.token!==t)return;e.resolved=l;let a=e.ctx;o!==void 0&&(a=a.slice(),a[o]=l);const c=i&&(e.current=i)(a);let h=!1;e.block&&(e.blocks?e.blocks.forEach((u,d)=>{d!==r&&u&&(ct(),B(u,1,1,()=>{e.blocks[d]===u&&(e.blocks[d]=null)}),ut())}):e.block.d(1),c.c(),L(c,1),c.m(e.mount(),e.anchor),h=!0),e.block=c,e.blocks&&(e.blocks[r]=c),h&&Rs()}if(vl(n)){const i=at();if(n.then(r=>{fe(i),s(e.then,1,e.value,r),fe(null)},r=>{if(fe(i),s(e.catch,2,e.error,r),fe(null),!e.hasCatch)throw r}),e.current!==e.pending)return s(e.pending,0),!0}else{if(e.current!==e.then)return s(e.then,1,e.value,n),!0;e.resolved=n}}function Fl(n,e,t){const s=e.slice(),{resolved:i}=n;n.current===n.then&&(s[n.value]=i),n.current===n.catch&&(s[n.error]=i),n.block.p(s,t)}function mi(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function os(n,e){const t={},s={},i={$$scope:1};let r=n.length;for(;r--;){const o=n[r],l=e[r];if(l){for(const a in o)a in l||(s[a]=1);for(const a in l)i[a]||(t[a]=l[a],i[a]=1);n[r]=l}else for(const a in o)i[a]=1}for(const o in s)o in t||(t[o]=void 0);return t}function Kt(n){return typeof n=="object"&&n!==null?n:{}}function _e(n){n&&n.c()}function ue(n,e,t){const{fragment:s,after_update:i}=n.$$;s&&s.m(e,t),tt(()=>{const r=n.$$.on_mount.map(Cr).filter(Ht);n.$$.on_destroy?n.$$.on_destroy.push(...r):Ae(r),n.$$.on_mount=[]}),i.forEach(tt)}function he(n,e){const t=n.$$;t.fragment!==null&&(xl(t.after_update),Ae(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Bl(n,e){n.$$.dirty[0]===-1&&(ze.push(n),Pl(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function Ue(n,e,t,s,i,r,o=null,l=[-1]){const a=Nt;fe(n);const c=n.$$={fragment:null,ctx:[],props:r,update:k,not_equal:i,bound:ci(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:ci(),dirty:l,skip_bound:!1,root:e.target||a.$$.root};o&&o(c.root);let h=!1;if(c.ctx=t?t(n,e.props||{},(u,d,...f)=>{const _=f.length?f[0]:d;return c.ctx&&i(c.ctx[u],c.ctx[u]=_)&&(!c.skip_bound&&c.bound[u]&&c.bound[u](_),h&&Bl(n,u)),d}):[],c.update(),h=!0,Ae(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const u=Sl(e.target);c.fragment&&c.fragment.l(u),u.forEach(V)}else c.fragment&&c.fragment.c();e.intro&&L(n.$$.fragment),ue(n,e.target,e.anchor),Rs()}fe(a)}class He{constructor(){Wn(this,"$$");Wn(this,"$$set")}$destroy(){he(this,1),this.$destroy=k}$on(e,t){if(!Ht(t))return k;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(t),()=>{const i=s.indexOf(t);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!Cl(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Wl="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Wl);const ls={},sn={},Or={},xr=/^:(.+)/,gi=4,Ul=3,Hl=2,Vl=1,$l=1,kt=n=>n.replace(/(^\/+|\/+$)/g,"").split("/"),Vn=n=>n.replace(/(^\/+|\/+$)/g,""),Gl=(n,e)=>{const t=n.default?0:kt(n.path).reduce((s,i)=>(s+=gi,i===""?s+=$l:xr.test(i)?s+=Hl:i[0]==="*"?s-=gi+Vl:s+=Ul,s),0);return{route:n,score:t,index:e}},jl=n=>n.map(Gl).sort((e,t)=>e.score<t.score?1:e.score>t.score?-1:e.index-t.index),yi=(n,e)=>{let t,s;const[i]=e.split("?"),r=kt(i),o=r[0]==="",l=jl(n);for(let a=0,c=l.length;a<c;a++){const h=l[a].route;let u=!1;if(h.default){s={route:h,params:{},uri:e};continue}const d=kt(h.path),f={},_=Math.max(r.length,d.length);let m=0;for(;m<_;m++){const y=d[m],b=r[m];if(y&&y[0]==="*"){const v=y==="*"?"*":y.slice(1);f[v]=r.slice(m).map(decodeURIComponent).join("/");break}if(typeof b>"u"){u=!0;break}const T=xr.exec(y);if(T&&!o){const v=decodeURIComponent(b);f[T[1]]=v}else if(y!==b){u=!0;break}}if(!u){t={route:h,params:f,uri:"/"+r.slice(0,m).join("/")};break}}return t||s||null},$n=(n,e)=>n+(e?`?${e}`:""),zl=(n,e)=>{if(n.startsWith("/"))return n;const[t,s]=n.split("?"),[i]=e.split("?"),r=kt(t),o=kt(i);if(r[0]==="")return $n(i,s);if(!r[0].startsWith(".")){const c=o.concat(r).join("/");return $n((i==="/"?"":"/")+c,s)}const l=o.concat(r),a=[];return l.forEach(c=>{c===".."?a.pop():c!=="."&&a.push(c)}),$n("/"+a.join("/"),s)},vi=(n,e)=>`${Vn(e==="/"?n:`${Vn(n)}/${Vn(e)}`)}/`,ql=n=>!n.defaultPrevented&&n.button===0&&!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey),Mr=()=>typeof window<"u"&&"document"in window&&"location"in window,Yl=n=>({active:n&4}),Ci=n=>({active:!!n[2]});function Kl(n){let e,t,s,i;const r=n[17].default,o=wn(r,n,n[16],Ci);let l=[{href:n[0]},{"aria-current":n[2]},n[1],n[6]],a={};for(let c=0;c<l.length;c+=1)a=Te(a,l[c]);return{c(){e=U("a"),o&&o.c(),hi(e,a)},m(c,h){Q(c,e,h),o&&o.m(e,null),t=!0,s||(i=ee(e,"click",n[5]),s=!0)},p(c,[h]){o&&o.p&&(!t||h&65540)&&Sn(o,r,c,c[16],t?In(r,c[16],h,Yl):Tn(c[16]),Ci),hi(e,a=os(l,[(!t||h&1)&&{href:c[0]},(!t||h&4)&&{"aria-current":c[2]},h&2&&c[1],h&64&&c[6]]))},i(c){t||(L(o,c),t=!0)},o(c){B(o,c),t=!1},d(c){c&&V(e),o&&o.d(c),s=!1,i()}}}function Ql(n,e,t){let s;const i=["to","replace","state","getProps","preserveScroll"];let r=ui(e,i),o,l,{$$slots:a={},$$scope:c}=e,{to:h="#"}=e,{replace:u=!1}=e,{state:d={}}=e,{getProps:f=()=>({})}=e,{preserveScroll:_=!1}=e;const m=Qe(ls);Oe(n,m,N=>t(14,o=N));const{base:y}=Qe(sn);Oe(n,y,N=>t(15,l=N));const{navigate:b}=Qe(Or),T=Al();let v,F,g,A;const ie=N=>{if(T("click",N),ql(N)){N.preventDefault();const E=o.pathname===v||u;b(v,{state:d,replace:E,preserveScroll:_})}};return n.$$set=N=>{e=Te(Te({},e),ss(N)),t(6,r=ui(e,i)),"to"in N&&t(7,h=N.to),"replace"in N&&t(8,u=N.replace),"state"in N&&t(9,d=N.state),"getProps"in N&&t(10,f=N.getProps),"preserveScroll"in N&&t(11,_=N.preserveScroll),"$$scope"in N&&t(16,c=N.$$scope)},n.$$.update=()=>{n.$$.dirty&32896&&t(0,v=zl(h,l.uri)),n.$$.dirty&16385&&t(12,F=o.pathname.startsWith(v)),n.$$.dirty&16385&&t(13,g=v===o.pathname),n.$$.dirty&8192&&t(2,s=g?"page":void 0),t(1,A=f({location:o,href:v,isPartiallyCurrent:F,isCurrent:g,existingProps:r}))},[v,A,s,m,y,ie,r,h,u,d,f,_,F,g,o,l,c,a]}class as extends He{constructor(e){super(),Ue(this,e,Ql,Kl,ye,{to:7,replace:8,state:9,getProps:10,preserveScroll:11})}}const Xl=n=>({params:n&4}),Ei=n=>({params:n[2]});function bi(n){let e,t,s,i;const r=[Zl,Jl],o=[];function l(a,c){return a[0]?0:1}return e=l(n),t=o[e]=r[e](n),{c(){t.c(),s=lt()},m(a,c){o[e].m(a,c),Q(a,s,c),i=!0},p(a,c){let h=e;e=l(a),e===h?o[e].p(a,c):(ct(),B(o[h],1,1,()=>{o[h]=null}),ut(),t=o[e],t?t.p(a,c):(t=o[e]=r[e](a),t.c()),L(t,1),t.m(s.parentNode,s))},i(a){i||(L(t),i=!0)},o(a){B(t),i=!1},d(a){a&&V(s),o[e].d(a)}}}function Jl(n){let e;const t=n[8].default,s=wn(t,n,n[7],Ei);return{c(){s&&s.c()},m(i,r){s&&s.m(i,r),e=!0},p(i,r){s&&s.p&&(!e||r&132)&&Sn(s,t,i,i[7],e?In(t,i[7],r,Xl):Tn(i[7]),Ei)},i(i){e||(L(s,i),e=!0)},o(i){B(s,i),e=!1},d(i){s&&s.d(i)}}}function Zl(n){let e,t,s,i={ctx:n,current:null,token:null,hasCatch:!1,pending:na,then:ta,catch:ea,value:12,blocks:[,,,]};return pi(t=n[0],i),{c(){e=lt(),i.block.c()},m(r,o){Q(r,e,o),i.block.m(r,i.anchor=o),i.mount=()=>e.parentNode,i.anchor=e,s=!0},p(r,o){n=r,i.ctx=n,o&1&&t!==(t=n[0])&&pi(t,i)||Fl(i,n,o)},i(r){s||(L(i.block),s=!0)},o(r){for(let o=0;o<3;o+=1){const l=i.blocks[o];B(l)}s=!1},d(r){r&&V(e),i.block.d(r),i.token=null,i=null}}}function ea(n){return{c:k,m:k,p:k,i:k,o:k,d:k}}function ta(n){var l;let e,t,s;const i=[n[2],n[3]];var r=((l=n[12])==null?void 0:l.default)||n[12];function o(a,c){let h={};for(let u=0;u<i.length;u+=1)h=Te(h,i[u]);return c!==void 0&&c&12&&(h=Te(h,os(i,[c&4&&Kt(a[2]),c&8&&Kt(a[3])]))),{props:h}}return r&&(e=fi(r,o(n))),{c(){e&&_e(e.$$.fragment),t=lt()},m(a,c){e&&ue(e,a,c),Q(a,t,c),s=!0},p(a,c){var h;if(c&1&&r!==(r=((h=a[12])==null?void 0:h.default)||a[12])){if(e){ct();const u=e;B(u.$$.fragment,1,0,()=>{he(u,1)}),ut()}r?(e=fi(r,o(a,c)),_e(e.$$.fragment),L(e.$$.fragment,1),ue(e,t.parentNode,t)):e=null}else if(r){const u=c&12?os(i,[c&4&&Kt(a[2]),c&8&&Kt(a[3])]):{};e.$set(u)}},i(a){s||(e&&L(e.$$.fragment,a),s=!0)},o(a){e&&B(e.$$.fragment,a),s=!1},d(a){a&&V(t),e&&he(e,a)}}}function na(n){return{c:k,m:k,p:k,i:k,o:k,d:k}}function sa(n){let e,t,s=n[1]&&n[1].route===n[5]&&bi(n);return{c(){s&&s.c(),e=lt()},m(i,r){s&&s.m(i,r),Q(i,e,r),t=!0},p(i,[r]){i[1]&&i[1].route===i[5]?s?(s.p(i,r),r&2&&L(s,1)):(s=bi(i),s.c(),L(s,1),s.m(e.parentNode,e)):s&&(ct(),B(s,1,1,()=>{s=null}),ut())},i(i){t||(L(s),t=!0)},o(i){B(s),t=!1},d(i){i&&V(e),s&&s.d(i)}}}function ia(n,e,t){let s,{$$slots:i={},$$scope:r}=e,{path:o=""}=e,{component:l=null}=e,a={},c={};const{registerRoute:h,unregisterRoute:u,activeRoute:d}=Qe(sn);Oe(n,d,_=>t(1,s=_));const f={path:o,default:o===""};return h(f),kl(()=>{u(f)}),n.$$set=_=>{t(11,e=Te(Te({},e),ss(_))),"path"in _&&t(6,o=_.path),"component"in _&&t(0,l=_.component),"$$scope"in _&&t(7,r=_.$$scope)},n.$$.update=()=>{if(s&&s.route===f){t(2,a=s.params);const{component:_,path:m,...y}=e;t(3,c=y),_&&(_.toString().startsWith("class ")?t(0,l=_):t(0,l=_())),Mr()&&!s.preserveScroll&&(window==null||window.scrollTo(0,0))}},e=ss(e),[l,s,a,c,d,f,o,r,i]}class Gn extends He{constructor(e){super(),Ue(this,e,ia,sa,ye,{path:6,component:0})}}const Ge=[];function ra(n,e){return{subscribe:qe(n,e).subscribe}}function qe(n,e=k){let t;const s=new Set;function i(l){if(ye(n,l)&&(n=l,t)){const a=!Ge.length;for(const c of s)c[1](),Ge.push(c,n);if(a){for(let c=0;c<Ge.length;c+=2)Ge[c][0](Ge[c+1]);Ge.length=0}}}function r(l){i(l(n))}function o(l,a=k){const c=[l,a];return s.add(c),s.size===1&&(t=e(i,r)||k),l(n),()=>{s.delete(c),s.size===0&&t&&(t(),t=null)}}return{set:i,update:r,subscribe:o}}function oa(n,e,t){const s=!Array.isArray(n),i=s?[n]:n;if(!i.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const r=e.length<2;return ra(t,(o,l)=>{let a=!1;const c=[];let h=0,u=k;const d=()=>{if(h)return;u();const _=e(s?c[0]:c,o,l);r?o(_):u=Ht(_)?_:k},f=i.map((_,m)=>Er(_,y=>{c[m]=y,h&=~(1<<m),a&&d()},()=>{h|=1<<m}));return a=!0,d(),function(){Ae(f),u(),a=!1}})}const jn=n=>({...n.location,state:n.history.state,key:n.history.state&&n.history.state.key||"initial"}),la=n=>{const e=[];let t=jn(n);return{get location(){return t},listen(s){e.push(s);const i=()=>{t=jn(n),s({location:t,action:"POP"})};return n.addEventListener("popstate",i),()=>{n.removeEventListener("popstate",i);const r=e.indexOf(s);e.splice(r,1)}},navigate(s,{state:i,replace:r=!1,preserveScroll:o=!1,blurActiveElement:l=!0}={}){i={...i,key:Date.now()+""};try{r?n.history.replaceState(i,"",s):n.history.pushState(i,"",s)}catch{n.location[r?"replace":"assign"](s)}t=jn(n),e.forEach(a=>a({location:t,action:"PUSH",preserveScroll:o})),l&&document.activeElement.blur()}}},aa=(n="/")=>{let e=0;const t=[{pathname:n,search:""}],s=[];return{get location(){return t[e]},addEventListener(i,r){},removeEventListener(i,r){},history:{get entries(){return t},get index(){return e},get state(){return s[e]},pushState(i,r,o){const[l,a=""]=o.split("?");e++,t.push({pathname:l,search:a}),s.push(i)},replaceState(i,r,o){const[l,a=""]=o.split("?");t[e]={pathname:l,search:a},s[e]=i}}}},ca=la(Mr()?window:aa()),ua=n=>({route:n&4,location:n&2}),wi=n=>({route:n[2]&&n[2].uri,location:n[1]}),ha=n=>({route:n&4,location:n&2}),Ii=n=>({route:n[2]&&n[2].uri,location:n[1]});function da(n){let e;const t=n[15].default,s=wn(t,n,n[14],wi);return{c(){s&&s.c()},m(i,r){s&&s.m(i,r),e=!0},p(i,r){s&&s.p&&(!e||r&16390)&&Sn(s,t,i,i[14],e?In(t,i[14],r,ua):Tn(i[14]),wi)},i(i){e||(L(s,i),e=!0)},o(i){B(s,i),e=!1},d(i){s&&s.d(i)}}}function fa(n){let e=n[1].pathname,t,s,i=Si(n);return{c(){i.c(),t=lt()},m(r,o){i.m(r,o),Q(r,t,o),s=!0},p(r,o){o&2&&ye(e,e=r[1].pathname)?(ct(),B(i,1,1,k),ut(),i=Si(r),i.c(),L(i,1),i.m(t.parentNode,t)):i.p(r,o)},i(r){s||(L(i),s=!0)},o(r){B(i),s=!1},d(r){r&&V(t),i.d(r)}}}function Si(n){let e,t,s,i;const r=n[15].default,o=wn(r,n,n[14],Ii);return{c(){e=U("div"),o&&o.c()},m(l,a){Q(l,e,a),o&&o.m(e,null),i=!0},p(l,a){o&&o.p&&(!i||a&16390)&&Sn(o,r,l,l[14],i?In(r,l[14],a,ha):Tn(l[14]),Ii)},i(l){i||(L(o,l),l&&tt(()=>{i&&(s&&s.end(1),t=Ml(e,n[3],{}),t.start())}),i=!0)},o(l){B(o,l),t&&t.invalidate(),l&&(s=Ll(e,n[3],{})),i=!1},d(l){l&&V(e),o&&o.d(l),l&&s&&s.end()}}}function _a(n){let e,t,s,i;const r=[fa,da],o=[];function l(a,c){return a[0]?0:1}return e=l(n),t=o[e]=r[e](n),{c(){t.c(),s=lt()},m(a,c){o[e].m(a,c),Q(a,s,c),i=!0},p(a,[c]){let h=e;e=l(a),e===h?o[e].p(a,c):(ct(),B(o[h],1,1,()=>{o[h]=null}),ut(),t=o[e],t?t.p(a,c):(t=o[e]=r[e](a),t.c()),L(t,1),t.m(s.parentNode,s))},i(a){i||(L(t),i=!0)},o(a){B(t),i=!1},d(a){a&&V(s),o[e].d(a)}}}function pa(n,e,t){let s,i,r,o,{$$slots:l={},$$scope:a}=e,{basepath:c="/"}=e,{url:h=null}=e,{viewtransition:u=null}=e,{history:d=ca}=e;const f=(E,X,j)=>{const H=u(j);return typeof(H==null?void 0:H.fn)=="function"?H.fn(E,H):H};Un(Or,d);const _=Qe(ls),m=Qe(sn),y=qe([]);Oe(n,y,E=>t(12,i=E));const b=qe(null);Oe(n,b,E=>t(2,o=E));let T=!1;const v=_||qe(h?{pathname:h}:d.location);Oe(n,v,E=>t(1,s=E));const F=m?m.routerBase:qe({path:c,uri:c});Oe(n,F,E=>t(13,r=E));const g=oa([F,b],([E,X])=>{if(!X)return E;const{path:j}=E,{route:H,uri:ml}=X;return{path:H.default?j:H.path.replace(/\*.*$/,""),uri:ml}}),A=E=>{const{path:X}=r;let{path:j}=E;if(E._path=j,E.path=vi(X,j),typeof window>"u"){if(T)return;const H=yi([E],s.pathname);H&&(b.set(H),T=!0)}else y.update(H=>[...H,E])},ie=E=>{y.update(X=>X.filter(j=>j!==E))};let N=!1;return _||(Nn(()=>d.listen(X=>{t(11,N=X.preserveScroll||!1),v.set(X.location)})),Un(ls,v)),Un(sn,{activeRoute:b,base:F,routerBase:g,registerRoute:A,unregisterRoute:ie}),n.$$set=E=>{"basepath"in E&&t(8,c=E.basepath),"url"in E&&t(9,h=E.url),"viewtransition"in E&&t(0,u=E.viewtransition),"history"in E&&t(10,d=E.history),"$$scope"in E&&t(14,a=E.$$scope)},n.$$.update=()=>{if(n.$$.dirty&8192){const{path:E}=r;y.update(X=>X.map(j=>Object.assign(j,{path:vi(E,j._path)})))}if(n.$$.dirty&6146){const E=yi(i,s.pathname);b.set(E&&{...E,preserveScroll:N})}},[u,s,o,f,y,b,v,F,c,h,d,N,i,r,a,l]}class ma extends He{constructor(e){super(),Ue(this,e,pa,_a,ye,{basepath:8,url:9,viewtransition:0,history:10})}}var Ti={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p=function(n,e){if(!n)throw ht(e)},ht=function(n){return new Error("Firebase Database ("+Lr.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},ga=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],l=n[t++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},ks={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,l=o?n[i+1]:0,a=i+2<n.length,c=a?n[i+2]:0,h=r>>2,u=(r&3)<<4|l>>4;let d=(l&15)<<2|c>>6,f=c&63;a||(f=64,o||(d=64)),s.push(t[h],t[u],t[d],t[f])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Fr(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):ga(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const u=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||l==null||c==null||u==null)throw new ya;const d=r<<2|l>>4;if(s.push(d),c!==64){const f=l<<4&240|c>>2;if(s.push(f),u!==64){const _=c<<6&192|u;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ya extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Br=function(n){const e=Fr(n);return ks.encodeByteArray(e,!0)},rn=function(n){return Br(n).replace(/\./g,"")},cs=function(n){try{return ks.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(n){return Wr(void 0,n)}function Wr(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Ca(t)||(n[t]=Wr(n[t],e[t]));return n}function Ca(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba=()=>Ea().__FIREBASE_DEFAULTS__,wa=()=>{if(typeof process>"u"||typeof Ti>"u")return;const n=Ti.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ia=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&cs(n[1]);return e&&JSON.parse(e)},Ur=()=>{try{return ba()||wa()||Ia()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Sa=n=>{var e,t;return(t=(e=Ur())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Ta=n=>{const e=Sa(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Hr=()=>{var n;return(n=Ur())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Na(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[rn(JSON.stringify(t)),rn(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vr(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ra())}function ka(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $r(){return Lr.NODE_ADMIN===!0}function Aa(){try{return typeof indexedDB=="object"}catch{return!1}}function Da(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa="FirebaseError";class Vt extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Pa,Object.setPrototypeOf(this,Vt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gr.prototype.create)}}class Gr{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Oa(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Vt(i,l,s)}}function Oa(n,e){return n.replace(xa,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const xa=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(n){return JSON.parse(n)}function $(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=At(cs(r[0])||""),t=At(cs(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},Ma=function(n){const e=jr(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},La=function(n){const e=jr(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function nt(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Ni(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function on(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function us(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(Ri(r)&&Ri(o)){if(!us(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Ri(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)s[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)s[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const d=s[u-3]^s[u-8]^s[u-14]^s[u-16];s[u]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,h;for(let u=0;u<80;u++){u<40?u<20?(c=l^r&(o^l),h=1518500249):(c=r^o^l,h=1859775393):u<60?(c=r&o|l&(r|o),h=2400959708):(c=r^o^l,h=3395469782);const d=(i<<5|i>>>27)+c+a+h+s[u]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function As(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,p(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},kn=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(n){return n&&n._delegate?n._delegate:n}class Dt{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const De="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Rn;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Va(e))try{this.getOrInitializeService({instanceIdentifier:De})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=De){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=De){return this.instances.has(e)}getOptions(e=De){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Ha(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=De){return this.component?this.component.multipleInstances?e:De:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ha(n){return n===De?void 0:n}function Va(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ua(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var P;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(P||(P={}));const Ga={debug:P.DEBUG,verbose:P.VERBOSE,info:P.INFO,warn:P.WARN,error:P.ERROR,silent:P.SILENT},ja=P.INFO,za={[P.DEBUG]:"log",[P.VERBOSE]:"log",[P.INFO]:"info",[P.WARN]:"warn",[P.ERROR]:"error"},qa=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=za[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zr{constructor(e){this.name=e,this._logLevel=ja,this._logHandler=qa,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in P))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ga[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,P.DEBUG,...e),this._logHandler(this,P.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,P.VERBOSE,...e),this._logHandler(this,P.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,P.INFO,...e),this._logHandler(this,P.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,P.WARN,...e),this._logHandler(this,P.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,P.ERROR,...e),this._logHandler(this,P.ERROR,...e)}}const Ya=(n,e)=>e.some(t=>n instanceof t);let ki,Ai;function Ka(){return ki||(ki=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qa(){return Ai||(Ai=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qr=new WeakMap,hs=new WeakMap,Yr=new WeakMap,zn=new WeakMap,Ds=new WeakMap;function Xa(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(be(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&qr.set(t,n)}).catch(()=>{}),Ds.set(e,n),e}function Ja(n){if(hs.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});hs.set(n,e)}let ds={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return hs.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Yr.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return be(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Za(n){ds=n(ds)}function ec(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(qn(this),e,...t);return Yr.set(s,e.sort?e.sort():[e]),be(s)}:Qa().includes(n)?function(...e){return n.apply(qn(this),e),be(qr.get(this))}:function(...e){return be(n.apply(qn(this),e))}}function tc(n){return typeof n=="function"?ec(n):(n instanceof IDBTransaction&&Ja(n),Ya(n,Ka())?new Proxy(n,ds):n)}function be(n){if(n instanceof IDBRequest)return Xa(n);if(zn.has(n))return zn.get(n);const e=tc(n);return e!==n&&(zn.set(n,e),Ds.set(e,n)),e}const qn=n=>Ds.get(n);function nc(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),l=be(o);return s&&o.addEventListener("upgradeneeded",a=>{s(be(o.result),a.oldVersion,a.newVersion,be(o.transaction),a)}),t&&o.addEventListener("blocked",a=>t(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const sc=["get","getKey","getAll","getAllKeys","count"],ic=["put","add","delete","clear"],Yn=new Map;function Di(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Yn.get(e))return Yn.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=ic.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||sc.includes(t)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[t](...l),i&&a.done]))[0]};return Yn.set(e,r),r}Za(n=>({...n,get:(e,t,s)=>Di(e,t)||n.get(e,t,s),has:(e,t)=>!!Di(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(oc(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function oc(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fs="@firebase/app",Pi="0.10.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le=new zr("@firebase/app"),lc="@firebase/app-compat",ac="@firebase/analytics-compat",cc="@firebase/analytics",uc="@firebase/app-check-compat",hc="@firebase/app-check",dc="@firebase/auth",fc="@firebase/auth-compat",_c="@firebase/database",pc="@firebase/database-compat",mc="@firebase/functions",gc="@firebase/functions-compat",yc="@firebase/installations",vc="@firebase/installations-compat",Cc="@firebase/messaging",Ec="@firebase/messaging-compat",bc="@firebase/performance",wc="@firebase/performance-compat",Ic="@firebase/remote-config",Sc="@firebase/remote-config-compat",Tc="@firebase/storage",Nc="@firebase/storage-compat",Rc="@firebase/firestore",kc="@firebase/vertexai-preview",Ac="@firebase/firestore-compat",Dc="firebase",Pc="10.12.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s="[DEFAULT]",Oc={[fs]:"fire-core",[lc]:"fire-core-compat",[cc]:"fire-analytics",[ac]:"fire-analytics-compat",[hc]:"fire-app-check",[uc]:"fire-app-check-compat",[dc]:"fire-auth",[fc]:"fire-auth-compat",[_c]:"fire-rtdb",[pc]:"fire-rtdb-compat",[mc]:"fire-fn",[gc]:"fire-fn-compat",[yc]:"fire-iid",[vc]:"fire-iid-compat",[Cc]:"fire-fcm",[Ec]:"fire-fcm-compat",[bc]:"fire-perf",[wc]:"fire-perf-compat",[Ic]:"fire-rc",[Sc]:"fire-rc-compat",[Tc]:"fire-gcs",[Nc]:"fire-gcs-compat",[Rc]:"fire-fst",[Ac]:"fire-fst-compat",[kc]:"fire-vertex","fire-js":"fire-js",[Dc]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln=new Map,xc=new Map,ps=new Map;function Oi(n,e){try{n.container.addComponent(e)}catch(t){Le.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function an(n){const e=n.name;if(ps.has(e))return Le.debug(`There were multiple attempts to register component ${e}.`),!1;ps.set(e,n);for(const t of ln.values())Oi(t,n);for(const t of xc.values())Oi(t,n);return!0}function Mc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},we=new Gr("app","Firebase",Lc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Dt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw we.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc=Pc;function Kr(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:_s,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw we.create("bad-app-name",{appName:String(i)});if(t||(t=Hr()),!t)throw we.create("no-options");const r=ln.get(i);if(r){if(us(t,r.options)&&us(s,r.config))return r;throw we.create("duplicate-app",{appName:i})}const o=new $a(i);for(const a of ps.values())o.addComponent(a);const l=new Fc(t,s,o);return ln.set(i,l),l}function Wc(n=_s){const e=ln.get(n);if(!e&&n===_s&&Hr())return Kr();if(!e)throw we.create("no-app",{appName:n});return e}function Je(n,e,t){var s;let i=(s=Oc[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Le.warn(l.join(" "));return}an(new Dt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc="firebase-heartbeat-database",Hc=1,Pt="firebase-heartbeat-store";let Kn=null;function Qr(){return Kn||(Kn=nc(Uc,Hc,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Pt)}catch(t){console.warn(t)}}}}).catch(n=>{throw we.create("idb-open",{originalErrorMessage:n.message})})),Kn}async function Vc(n){try{const t=(await Qr()).transaction(Pt),s=await t.objectStore(Pt).get(Xr(n));return await t.done,s}catch(e){if(e instanceof Vt)Le.warn(e.message);else{const t=we.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Le.warn(t.message)}}}async function xi(n,e){try{const s=(await Qr()).transaction(Pt,"readwrite");await s.objectStore(Pt).put(e,Xr(n)),await s.done}catch(t){if(t instanceof Vt)Le.warn(t.message);else{const s=we.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Le.warn(s.message)}}}function Xr(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c=1024,Gc=30*24*60*60*1e3;class jc{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new qc(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Mi();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=Gc}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Mi(),{heartbeatsToSend:s,unsentEntries:i}=zc(this._heartbeatsCache.heartbeats),r=rn(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Mi(){return new Date().toISOString().substring(0,10)}function zc(n,e=$c){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Li(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Li(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class qc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Aa()?Da().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Vc(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return xi(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return xi(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Li(n){return rn(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(n){an(new Dt("platform-logger",e=>new rc(e),"PRIVATE")),an(new Dt("heartbeat",e=>new jc(e),"PRIVATE")),Je(fs,Pi,n),Je(fs,Pi,"esm2017"),Je("fire-js","")}Yc("");var Kc="firebase",Qc="10.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Je(Kc,Qc,"app");var Fi={};const Bi="@firebase/database",Wi="1.0.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jr="";function Xc(n){Jr=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),$(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:At(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return ve(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Jc(e)}}catch{}return new Zc},xe=Zr("localStorage"),eu=Zr("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze=new zr("@firebase/database"),tu=function(){let n=1;return function(){return n++}}(),eo=function(n){const e=Wa(n),t=new Ba;t.update(e);const s=t.digest();return ks.encodeByteArray(s)},$t=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=$t.apply(null,s):typeof s=="object"?e+=$(s):e+=s,e+=" "}return e};let bt=null,Ui=!0;const nu=function(n,e){p(!e,"Can't turn on custom loggers persistently."),Ze.logLevel=P.VERBOSE,bt=Ze.log.bind(Ze)},J=function(...n){if(Ui===!0&&(Ui=!1,bt===null&&eu.get("logging_enabled")===!0&&nu()),bt){const e=$t.apply(null,n);bt(e)}},Gt=function(n){return function(...e){J(n,...e)}},ms=function(...n){const e="FIREBASE INTERNAL ERROR: "+$t(...n);Ze.error(e)},ge=function(...n){const e=`FIREBASE FATAL ERROR: ${$t(...n)}`;throw Ze.error(e),new Error(e)},ne=function(...n){const e="FIREBASE WARNING: "+$t(...n);Ze.warn(e)},su=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ne("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},to=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},iu=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},st="[MIN_NAME]",Fe="[MAX_NAME]",ft=function(n,e){if(n===e)return 0;if(n===st||e===Fe)return-1;if(e===st||n===Fe)return 1;{const t=Hi(n),s=Hi(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},ru=function(n,e){return n===e?0:n<e?-1:1},gt=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+$(e))},Ps=function(n){if(typeof n!="object"||n===null)return $(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=$(e[s]),t+=":",t+=Ps(n[e[s]]);return t+="}",t},no=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function se(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const so=function(n){p(!to(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,l,a;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=l+s,o=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const c=[];for(a=t;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const h=c.join("");let u="";for(a=0;a<64;a+=8){let d=parseInt(h.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},ou=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},lu=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function au(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const cu=new RegExp("^-?(0*)\\d{1,10}$"),uu=-2147483648,hu=2147483647,Hi=function(n){if(cu.test(n)){const e=Number(n);if(e>=uu&&e<=hu)return e}return null},_t=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ne("Exception was thrown by user callback.",t),e},Math.floor(0))}},du=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},wt=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ne(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(J("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ne(e)}}class Zt{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Zt.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os="5",io="v",ro="s",oo="r",lo="f",ao=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,co="ls",uo="p",gs="ac",ho="websocket",fo="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,t,s,i,r=!1,o="",l=!1,a=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=xe.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&xe.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function pu(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function po(n,e,t){p(typeof e=="string","typeof type must == string"),p(typeof t=="object","typeof params must == object");let s;if(e===ho)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===fo)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);pu(n)&&(t.ns=n.namespace);const i=[];return se(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(){this.counters_={}}incrementCounter(e,t=1){ve(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return va(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn={},Xn={};function xs(n){const e=n.toString();return Qn[e]||(Qn[e]=new mu),Qn[e]}function gu(n,e){const t=n.toString();return Xn[t]||(Xn[t]=e()),Xn[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&_t(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi="start",vu="close",Cu="pLPCommand",Eu="pRTLPCB",mo="id",go="pw",yo="ser",bu="cb",wu="seg",Iu="ts",Su="d",Tu="dframe",vo=1870,Co=30,Nu=vo-Co,Ru=25e3,ku=3e4;class Ye{constructor(e,t,s,i,r,o,l){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Gt(e),this.stats_=xs(t),this.urlFn=a=>(this.appCheckToken&&(a[gs]=this.appCheckToken),po(t,fo,a))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new yu(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ku)),iu(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ms((...r)=>{const[o,l,a,c,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Vi)this.id=l,this.password=a;else if(o===vu)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Vi]="t",s[yo]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[bu]=this.scriptTagHolder.uniqueCallbackIdentifier),s[io]=Os,this.transportSessionId&&(s[ro]=this.transportSessionId),this.lastSessionId&&(s[co]=this.lastSessionId),this.applicationId&&(s[uo]=this.applicationId),this.appCheckToken&&(s[gs]=this.appCheckToken),typeof location<"u"&&location.hostname&&ao.test(location.hostname)&&(s[oo]=lo);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ye.forceAllow_=!0}static forceDisallow(){Ye.forceDisallow_=!0}static isAvailable(){return Ye.forceAllow_?!0:!Ye.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ou()&&!lu()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=$(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Br(t),i=no(s,Nu);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[Tu]="t",s[mo]=e,s[go]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=$(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Ms{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=tu(),window[Cu+this.uniqueCallbackIdentifier]=e,window[Eu+this.uniqueCallbackIdentifier]=t,this.myIFrame=Ms.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){J("frame writing exception"),l.stack&&J(l.stack),J(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||J("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[mo]=this.myID,e[go]=this.myPW,e[yo]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Co+s.length<=vo;){const o=this.pendingSegs.shift();s=s+"&"+wu+i+"="+o.seg+"&"+Iu+i+"="+o.ts+"&"+Su+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(Ru)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{J("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au=16384,Du=45e3;let cn=null;typeof MozWebSocket<"u"?cn=MozWebSocket:typeof WebSocket<"u"&&(cn=WebSocket);class oe{constructor(e,t,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Gt(this.connId),this.stats_=xs(t),this.connURL=oe.connectionURL_(t,o,l,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[io]=Os,typeof location<"u"&&location.hostname&&ao.test(location.hostname)&&(o[oo]=lo),t&&(o[ro]=t),s&&(o[co]=s),i&&(o[gs]=i),r&&(o[uo]=r),po(e,ho,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,xe.set("previous_websocket_failure",!0);try{let s;$r(),this.mySock=new cn(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){oe.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&cn!==null&&!oe.forceDisallow_}static previouslyFailed(){return xe.isInMemoryStorage||xe.get("previous_websocket_failure")===!0}markConnectionHealthy(){xe.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=At(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(p(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=$(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=no(t,Au);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Du))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}oe.responsesRequiredToBeHealthy=2;oe.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ye,oe]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=oe&&oe.isAvailable();let s=t&&!oe.previouslyFailed();if(e.webSocketOnly&&(t||ne("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[oe];else{const i=this.transports_=[];for(const r of Ot.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Ot.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ot.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu=6e4,Ou=5e3,xu=10*1024,Mu=100*1024,Jn="t",$i="d",Lu="s",Gi="r",Fu="e",ji="o",zi="a",qi="n",Yi="p",Bu="h";class Wu{constructor(e,t,s,i,r,o,l,a,c,h){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Gt("c:"+this.id+":"),this.transportManager_=new Ot(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=wt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Mu?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>xu?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Jn in e){const t=e[Jn];t===zi?this.upgradeIfSecondaryHealthy_():t===Gi?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===ji&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=gt("t",e),s=gt("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Yi,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:zi,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:qi,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=gt("t",e),s=gt("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=gt(Jn,e);if($i in e){const s=e[$i];if(t===Bu){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===qi){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Lu?this.onConnectionShutdown_(s):t===Gi?this.onReset_(s):t===Fu?ms("Server Error: "+s):t===ji?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ms("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Os!==s&&ne("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),wt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Pu))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):wt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Ou))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Yi,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(xe.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e){this.allowedEvents_=e,this.listeners_={},p(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){p(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un extends bo{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Vr()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new un}getInitialEvent(e){return p(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki=32,Qi=768;class D{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function R(){return new D("")}function S(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Ne(n){return n.pieces_.length-n.pieceNum_}function O(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new D(n.pieces_,e)}function wo(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Uu(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Io(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function So(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new D(e,0)}function G(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof D)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new D(t,0)}function I(n){return n.pieceNum_>=n.pieces_.length}function Z(n,e){const t=S(n),s=S(e);if(t===null)return e;if(t===s)return Z(O(n),O(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function To(n,e){if(Ne(n)!==Ne(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function le(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Ne(n)>Ne(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class Hu{constructor(e,t){this.errorPrefix_=t,this.parts_=Io(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=kn(this.parts_[s]);No(this)}}function Vu(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=kn(e),No(n)}function $u(n){const e=n.parts_.pop();n.byteLength_-=kn(e),n.parts_.length>0&&(n.byteLength_-=1)}function No(n){if(n.byteLength_>Qi)throw new Error(n.errorPrefix_+"has a key path longer than "+Qi+" bytes ("+n.byteLength_+").");if(n.parts_.length>Ki)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ki+") or object contains a cycle "+Pe(n))}function Pe(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls extends bo{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Ls}getInitialEvent(e){return p(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt=1e3,Gu=60*5*1e3,Xi=30*1e3,ju=1.3,zu=3e4,qu="server_kill",Ji=3;class me extends Eo{constructor(e,t,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=me.nextPersistentConnectionId_++,this.log_=Gt("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=yt,this.maxReconnectDelay_=Gu,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!$r())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ls.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&un.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_($(r)),p(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new Rn,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),p(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),p(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;me.warnOnListenWarnings_(a,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&ve(e,"w")){const s=nt(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();ne(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||La(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Xi)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Ma(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),p(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+$(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):ms("Unrecognized action received from server: "+$(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){p(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=yt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=yt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>zu&&(this.reconnectDelay_=yt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*ju)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+me.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(u){p(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(u)};this.realtime_={close:a,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?J("getToken() completed but was canceled"):(J("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,l=new Wu(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,f=>{ne(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(qu)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&ne(u),a())}}}interrupt(e){J("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){J("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ni(this.interruptReasons_)&&(this.reconnectDelay_=yt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>Ps(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new D(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){J("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ji&&(this.reconnectDelay_=Xi,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){J("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ji&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Jr.replace(/\./g,"-")]=1,Vr()?e["framework.cordova"]=1:ka()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=un.getInstance().currentlyOnline();return Ni(this.interruptReasons_)&&e}}me.nextPersistentConnectionId_=0;me.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new w(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new w(st,e),i=new w(st,t);return this.compare(s,i)!==0}minPost(){return w.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qt;class Ro extends An{static get __EMPTY_NODE(){return Qt}static set __EMPTY_NODE(e){Qt=e}compare(e,t){return ft(e.name,t.name)}isDefinedOn(e){throw ht("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return w.MIN}maxPost(){return new w(Fe,Qt)}makePost(e,t){return p(typeof e=="string","KeyIndex indexValue must always be a string."),new w(e,Qt)}toString(){return".key"}}const et=new Ro;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Y{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??Y.RED,this.left=i??te.EMPTY_NODE,this.right=r??te.EMPTY_NODE}copy(e,t,s,i,r){return new Y(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return te.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return te.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Y.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Y.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Y.RED=!0;Y.BLACK=!1;class Yu{copy(e,t,s,i,r){return this}insert(e,t,s){return new Y(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class te{constructor(e,t=te.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new te(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Y.BLACK,null,null))}remove(e){return new te(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Y.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Xt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Xt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Xt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Xt(this.root_,null,this.comparator_,!0,e)}}te.EMPTY_NODE=new Yu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(n,e){return ft(n.name,e.name)}function Fs(n,e){return ft(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ys;function Qu(n){ys=n}const ko=function(n){return typeof n=="number"?"number:"+so(n):"string:"+n},Ao=function(n){if(n.isLeafNode()){const e=n.val();p(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ve(e,".sv"),"Priority must be a string or number.")}else p(n===ys||n.isEmpty(),"priority of unexpected type.");p(n===ys||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zi;class z{constructor(e,t=z.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,p(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ao(this.priorityNode_)}static set __childrenNodeConstructor(e){Zi=e}static get __childrenNodeConstructor(){return Zi}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new z(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:z.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return I(e)?this:S(e)===".priority"?this.priorityNode_:z.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:z.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=S(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(p(s!==".priority"||Ne(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,z.__childrenNodeConstructor.EMPTY_NODE.updateChild(O(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ko(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=so(this.value_):e+=this.value_,this.lazyHash_=eo(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===z.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof z.__childrenNodeConstructor?-1:(p(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=z.VALUE_TYPE_ORDER.indexOf(t),r=z.VALUE_TYPE_ORDER.indexOf(s);return p(i>=0,"Unknown leaf type: "+t),p(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}z.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Do,Po;function Xu(n){Do=n}function Ju(n){Po=n}class Zu extends An{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?ft(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return w.MIN}maxPost(){return new w(Fe,new z("[PRIORITY-POST]",Po))}makePost(e,t){const s=Do(e);return new w(t,new z("[PRIORITY-POST]",s))}toString(){return".priority"}}const W=new Zu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh=Math.log(2);class th{constructor(e){const t=r=>parseInt(Math.log(r)/eh,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const hn=function(n,e,t,s){n.sort(e);const i=function(a,c){const h=c-a;let u,d;if(h===0)return null;if(h===1)return u=n[a],d=t?t(u):u,new Y(d,u.node,Y.BLACK,null,null);{const f=parseInt(h/2,10)+a,_=i(a,f),m=i(f+1,c);return u=n[f],d=t?t(u):u,new Y(d,u.node,Y.BLACK,_,m)}},r=function(a){let c=null,h=null,u=n.length;const d=function(_,m){const y=u-_,b=u;u-=_;const T=i(y+1,b),v=n[y],F=t?t(v):v;f(new Y(F,v.node,m,null,T))},f=function(_){c?(c.left=_,c=_):(h=_,c=_)};for(let _=0;_<a.count;++_){const m=a.nextBitIsOne(),y=Math.pow(2,a.count-(_+1));m?d(y,Y.BLACK):(d(y,Y.BLACK),d(y,Y.RED))}return h},o=new th(n.length),l=r(o);return new te(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zn;const je={};class pe{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return p(je&&W,"ChildrenNode.ts has not been loaded"),Zn=Zn||new pe({".priority":je},{".priority":W}),Zn}get(e){const t=nt(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof te?t:null}hasIndex(e){return ve(this.indexSet_,e.toString())}addIndex(e,t){p(e!==et,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(w.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=hn(s,e.getCompare()):l=je;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const h=Object.assign({},this.indexes_);return h[a]=l,new pe(h,c)}addToIndexes(e,t){const s=on(this.indexes_,(i,r)=>{const o=nt(this.indexSet_,r);if(p(o,"Missing index implementation for "+r),i===je)if(o.isDefinedOn(e.node)){const l=[],a=t.getIterator(w.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),hn(l,o.getCompare())}else return je;else{const l=t.get(e.name);let a=i;return l&&(a=a.remove(new w(e.name,l))),a.insert(e,e.node)}});return new pe(s,this.indexSet_)}removeFromIndexes(e,t){const s=on(this.indexes_,i=>{if(i===je)return i;{const r=t.get(e.name);return r?i.remove(new w(e.name,r)):i}});return new pe(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vt;class C{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Ao(this.priorityNode_),this.children_.isEmpty()&&p(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return vt||(vt=new C(new te(Fs),null,pe.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||vt}updatePriority(e){return this.children_.isEmpty()?this:new C(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?vt:t}}getChild(e){const t=S(e);return t===null?this:this.getImmediateChild(t).getChild(O(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(p(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new w(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?vt:this.priorityNode_;return new C(i,o,r)}}updateChild(e,t){const s=S(e);if(s===null)return t;{p(S(e)!==".priority"||Ne(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(O(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(W,(o,l)=>{t[o]=l.val(e),s++,r&&C.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in t)o[l]=t[l];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ko(this.getPriority().val())+":"),this.forEachChild(W,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":eo(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new w(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new w(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new w(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,w.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,w.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===jt?-1:0}withIndex(e){if(e===et||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new C(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===et||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(W),i=t.getIterator(W);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===et?null:this.indexMap_.get(e.toString())}}C.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class nh extends C{constructor(){super(new te(Fs),C.EMPTY_NODE,pe.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return C.EMPTY_NODE}isEmpty(){return!1}}const jt=new nh;Object.defineProperties(w,{MIN:{value:new w(st,C.EMPTY_NODE)},MAX:{value:new w(Fe,jt)}});Ro.__EMPTY_NODE=C.EMPTY_NODE;z.__childrenNodeConstructor=C;Qu(jt);Ju(jt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh=!0;function K(n,e=null){if(n===null)return C.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),p(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new z(t,K(e))}if(!(n instanceof Array)&&sh){const t=[];let s=!1;if(se(n,(o,l)=>{if(o.substring(0,1)!=="."){const a=K(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),t.push(new w(o,a)))}}),t.length===0)return C.EMPTY_NODE;const r=hn(t,Ku,o=>o.name,Fs);if(s){const o=hn(t,W.getCompare());return new C(r,K(e),new pe({".priority":o},{".priority":W}))}else return new C(r,K(e),pe.Default)}else{let t=C.EMPTY_NODE;return se(n,(s,i)=>{if(ve(n,s)&&s.substring(0,1)!=="."){const r=K(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(K(e))}}Xu(K);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih extends An{constructor(e){super(),this.indexPath_=e,p(!I(e)&&S(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?ft(e.name,t.name):r}makePost(e,t){const s=K(e),i=C.EMPTY_NODE.updateChild(this.indexPath_,s);return new w(t,i)}maxPost(){const e=C.EMPTY_NODE.updateChild(this.indexPath_,jt);return new w(Fe,e)}toString(){return Io(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh extends An{compare(e,t){const s=e.node.compareTo(t.node);return s===0?ft(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return w.MIN}maxPost(){return w.MAX}makePost(e,t){const s=K(e);return new w(t,s)}toString(){return".value"}}const oh=new rh;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(n){return{type:"value",snapshotNode:n}}function it(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function xt(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Mt(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function lh(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){p(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(t);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(xt(t,l)):p(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(it(t,s)):o.trackChildChange(Mt(t,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(W,(i,r)=>{t.hasChild(i)||s.trackChildChange(xt(i,r))}),t.isLeafNode()||t.forEachChild(W,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Mt(i,r,o))}else s.trackChildChange(it(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?C.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.indexedFilter_=new Bs(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Lt.getStartPost_(e),this.endPost_=Lt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new w(t,s))||(s=C.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=C.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(C.EMPTY_NODE);const r=this;return t.forEachChild(W,(o,l)=>{r.matches(new w(o,l))||(i=i.updateImmediateChild(o,C.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Lt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new w(t,s))||(s=C.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=C.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=C.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(C.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,C.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(d,f)=>u(f,d)}else o=this.index_.getCompare();const l=e;p(l.numChildren()===this.limit_,"");const a=new w(t,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),h=this.rangedFilter_.matches(a);if(l.hasChild(t)){const u=l.getImmediateChild(t);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,a);if(h&&!s.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(Mt(t,s,u)),l.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(xt(t,u));const m=l.updateImmediateChild(t,C.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(it(d.name,d.node)),m.updateImmediateChild(d.name,d.node)):m}}else return s.isEmpty()?e:h&&o(c,a)>=0?(r!=null&&(r.trackChildChange(xt(c.name,c.node)),r.trackChildChange(it(t,s))),l.updateImmediateChild(t,s).updateImmediateChild(c.name,C.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=W}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return p(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return p(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:st}hasEnd(){return this.endSet_}getIndexEndValue(){return p(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return p(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Fe}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return p(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===W}copy(){const e=new Ws;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ch(n){return n.loadsAllData()?new Bs(n.getIndex()):n.hasLimit()?new ah(n):new Lt(n)}function er(n){const e={};if(n.isDefault())return e;let t;if(n.index_===W?t="$priority":n.index_===oh?t="$value":n.index_===et?t="$key":(p(n.index_ instanceof ih,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=$(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=$(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+$(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=$(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+$(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function tr(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==W&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends Eo{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Gt("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(p(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=dn.getListenId_(e,s),l={};this.listens_[o]=l;const a=er(e._queryParams);this.restRequest_(r+".json",a,(c,h)=>{let u=h;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(r,u,!1,s),nt(this.listens_,o)===l){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,t){const s=dn.getListenId_(e,t);delete this.listens_[s]}get(e){const t=er(e._queryParams),s=e._path.toString(),i=new Rn;return this.restRequest_(s+".json",t,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Fa(t);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=At(l.responseText)}catch{ne("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&ne("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(){this.rootNode_=C.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(){return{value:null,children:new Map}}function xo(n,e,t){if(I(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=S(e);n.children.has(s)||n.children.set(s,fn());const i=n.children.get(s);e=O(e),xo(i,e,t)}}function vs(n,e,t){n.value!==null?t(e,n.value):hh(n,(s,i)=>{const r=new D(e.toString()+"/"+s);vs(i,r,t)})}function hh(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&se(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr=10*1e3,fh=30*1e3,_h=5*60*1e3;class ph{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new dh(e);const s=nr+(fh-nr)*Math.random();wt(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;se(e,(i,r)=>{r>0&&ve(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),wt(this.reportStats_.bind(this),Math.floor(Math.random()*2*_h))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ae||(ae={}));function Mo(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Us(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Hs(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=ae.ACK_USER_WRITE,this.source=Mo()}operationForChild(e){if(I(this.path)){if(this.affectedTree.value!=null)return p(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new D(e));return new _n(R(),t,this.revert)}}else return p(S(this.path)===e,"operationForChild called for unrelated child."),new _n(O(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,t){this.source=e,this.path=t,this.type=ae.LISTEN_COMPLETE}operationForChild(e){return I(this.path)?new Ft(this.source,R()):new Ft(this.source,O(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=ae.OVERWRITE}operationForChild(e){return I(this.path)?new Be(this.source,R(),this.snap.getImmediateChild(e)):new Be(this.source,O(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=ae.MERGE}operationForChild(e){if(I(this.path)){const t=this.children.subtree(new D(e));return t.isEmpty()?null:t.value?new Be(this.source,R(),t.value):new Bt(this.source,R(),t)}else return p(S(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Bt(this.source,O(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(I(e))return this.isFullyInitialized()&&!this.filtered_;const t=S(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function gh(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(lh(o.childName,o.snapshotNode))}),Ct(n,i,"child_removed",e,s,t),Ct(n,i,"child_added",e,s,t),Ct(n,i,"child_moved",r,s,t),Ct(n,i,"child_changed",e,s,t),Ct(n,i,"value",e,s,t),i}function Ct(n,e,t,s,i,r){const o=s.filter(l=>l.type===t);o.sort((l,a)=>vh(n,l,a)),o.forEach(l=>{const a=yh(n,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,n.query_))})})}function yh(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function vh(n,e,t){if(e.childName==null||t.childName==null)throw ht("Should only compare child_ events.");const s=new w(e.childName,e.snapshotNode),i=new w(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(n,e){return{eventCache:n,serverCache:e}}function It(n,e,t,s){return Dn(new Re(e,t,s),n.serverCache)}function Lo(n,e,t,s){return Dn(n.eventCache,new Re(e,t,s))}function pn(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function We(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let es;const Ch=()=>(es||(es=new te(ru)),es);class M{constructor(e,t=Ch()){this.value=e,this.children=t}static fromObject(e){let t=new M(null);return se(e,(s,i)=>{t=t.set(new D(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:R(),value:this.value};if(I(e))return null;{const s=S(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(O(e),t);return r!=null?{path:G(new D(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(I(e))return this;{const t=S(e),s=this.children.get(t);return s!==null?s.subtree(O(e)):new M(null)}}set(e,t){if(I(e))return new M(t,this.children);{const s=S(e),r=(this.children.get(s)||new M(null)).set(O(e),t),o=this.children.insert(s,r);return new M(this.value,o)}}remove(e){if(I(e))return this.children.isEmpty()?new M(null):new M(null,this.children);{const t=S(e),s=this.children.get(t);if(s){const i=s.remove(O(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new M(null):new M(this.value,r)}else return this}}get(e){if(I(e))return this.value;{const t=S(e),s=this.children.get(t);return s?s.get(O(e)):null}}setTree(e,t){if(I(e))return t;{const s=S(e),r=(this.children.get(s)||new M(null)).setTree(O(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new M(this.value,o)}}fold(e){return this.fold_(R(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(G(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,R(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(I(e))return null;{const r=S(e),o=this.children.get(r);return o?o.findOnPath_(O(e),G(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,R(),t)}foreachOnPath_(e,t,s){if(I(e))return this;{this.value&&s(t,this.value);const i=S(e),r=this.children.get(i);return r?r.foreachOnPath_(O(e),G(t,i),s):new M(null)}}foreach(e){this.foreach_(R(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(G(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.writeTree_=e}static empty(){return new ce(new M(null))}}function St(n,e,t){if(I(e))return new ce(new M(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Z(i,e);return r=r.updateChild(o,t),new ce(n.writeTree_.set(i,r))}else{const i=new M(t),r=n.writeTree_.setTree(e,i);return new ce(r)}}}function sr(n,e,t){let s=n;return se(t,(i,r)=>{s=St(s,G(e,i),r)}),s}function ir(n,e){if(I(e))return ce.empty();{const t=n.writeTree_.setTree(e,new M(null));return new ce(t)}}function Cs(n,e){return Ve(n,e)!=null}function Ve(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Z(t.path,e)):null}function rr(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(W,(s,i)=>{e.push(new w(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new w(s,i.value))}),e}function Ie(n,e){if(I(e))return n;{const t=Ve(n,e);return t!=null?new ce(new M(t)):new ce(n.writeTree_.subtree(e))}}function Es(n){return n.writeTree_.isEmpty()}function rt(n,e){return Fo(R(),n.writeTree_,e)}function Fo(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(p(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=Fo(G(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(G(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(n,e){return Ho(e,n)}function Eh(n,e,t,s,i){p(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=St(n.visibleWrites,e,t)),n.lastWriteId=s}function bh(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function wh(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);p(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const l=n.allWrites[o];l.visible&&(o>=t&&Ih(l,s.path)?i=!1:le(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Sh(n),!0;if(s.snap)n.visibleWrites=ir(n.visibleWrites,s.path);else{const l=s.children;se(l,a=>{n.visibleWrites=ir(n.visibleWrites,G(s.path,a))})}return!0}else return!1}function Ih(n,e){if(n.snap)return le(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&le(G(n.path,t),e))return!0;return!1}function Sh(n){n.visibleWrites=Bo(n.allWrites,Th,R()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Th(n){return n.visible}function Bo(n,e,t){let s=ce.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let l;if(r.snap)le(t,o)?(l=Z(t,o),s=St(s,l,r.snap)):le(o,t)&&(l=Z(o,t),s=St(s,R(),r.snap.getChild(l)));else if(r.children){if(le(t,o))l=Z(t,o),s=sr(s,l,r.children);else if(le(o,t))if(l=Z(o,t),I(l))s=sr(s,R(),r.children);else{const a=nt(r.children,S(l));if(a){const c=a.getChild(O(l));s=St(s,R(),c)}}}else throw ht("WriteRecord should have .snap or .children")}}return s}function Wo(n,e,t,s,i){if(!s&&!i){const r=Ve(n.visibleWrites,e);if(r!=null)return r;{const o=Ie(n.visibleWrites,e);if(Es(o))return t;if(t==null&&!Cs(o,R()))return null;{const l=t||C.EMPTY_NODE;return rt(o,l)}}}else{const r=Ie(n.visibleWrites,e);if(!i&&Es(r))return t;if(!i&&t==null&&!Cs(r,R()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(le(c.path,e)||le(e,c.path))},l=Bo(n.allWrites,o,e),a=t||C.EMPTY_NODE;return rt(l,a)}}}function Nh(n,e,t){let s=C.EMPTY_NODE;const i=Ve(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(W,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=Ie(n.visibleWrites,e);return t.forEachChild(W,(o,l)=>{const a=rt(Ie(r,new D(o)),l);s=s.updateImmediateChild(o,a)}),rr(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Ie(n.visibleWrites,e);return rr(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Rh(n,e,t,s,i){p(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=G(e,t);if(Cs(n.visibleWrites,r))return null;{const o=Ie(n.visibleWrites,r);return Es(o)?i.getChild(t):rt(o,i.getChild(t))}}function kh(n,e,t,s){const i=G(e,t),r=Ve(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=Ie(n.visibleWrites,i);return rt(o,s.getNode().getImmediateChild(t))}else return null}function Ah(n,e){return Ve(n.visibleWrites,e)}function Dh(n,e,t,s,i,r,o){let l;const a=Ie(n.visibleWrites,e),c=Ve(a,R());if(c!=null)l=c;else if(t!=null)l=rt(a,t);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const h=[],u=o.getCompare(),d=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let f=d.getNext();for(;f&&h.length<i;)u(f,s)!==0&&h.push(f),f=d.getNext();return h}else return[]}function Ph(){return{visibleWrites:ce.empty(),allWrites:[],lastWriteId:-1}}function mn(n,e,t,s){return Wo(n.writeTree,n.treePath,e,t,s)}function Vs(n,e){return Nh(n.writeTree,n.treePath,e)}function or(n,e,t,s){return Rh(n.writeTree,n.treePath,e,t,s)}function gn(n,e){return Ah(n.writeTree,G(n.treePath,e))}function Oh(n,e,t,s,i,r){return Dh(n.writeTree,n.treePath,e,t,s,i,r)}function $s(n,e,t){return kh(n.writeTree,n.treePath,e,t)}function Uo(n,e){return Ho(G(n.treePath,e),n.writeTree)}function Ho(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;p(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),p(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,Mt(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,xt(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,it(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,Mt(s,e.snapshotNode,i.oldSnap));else throw ht("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Vo=new Mh;class Gs{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Re(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return $s(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:We(this.viewCache_),r=Oh(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh(n){return{filter:n}}function Fh(n,e){p(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),p(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Bh(n,e,t,s,i){const r=new xh;let o,l;if(t.type===ae.OVERWRITE){const c=t;c.source.fromUser?o=bs(n,e,c.path,c.snap,s,i,r):(p(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!I(c.path),o=yn(n,e,c.path,c.snap,s,i,l,r))}else if(t.type===ae.MERGE){const c=t;c.source.fromUser?o=Uh(n,e,c.path,c.children,s,i,r):(p(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=ws(n,e,c.path,c.children,s,i,l,r))}else if(t.type===ae.ACK_USER_WRITE){const c=t;c.revert?o=$h(n,e,c.path,s,i,r):o=Hh(n,e,c.path,c.affectedTree,s,i,r)}else if(t.type===ae.LISTEN_COMPLETE)o=Vh(n,e,t.path,s,r);else throw ht("Unknown operation type: "+t.type);const a=r.getChanges();return Wh(e,o,a),{viewCache:o,changes:a}}function Wh(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=pn(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(Oo(pn(e)))}}function $o(n,e,t,s,i,r){const o=e.eventCache;if(gn(s,t)!=null)return e;{let l,a;if(I(t))if(p(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=We(e),h=c instanceof C?c:C.EMPTY_NODE,u=Vs(s,h);l=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const c=mn(s,We(e));l=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=S(t);if(c===".priority"){p(Ne(t)===1,"Can't have a priority with additional path components");const h=o.getNode();a=e.serverCache.getNode();const u=or(s,t,h,a);u!=null?l=n.filter.updatePriority(h,u):l=o.getNode()}else{const h=O(t);let u;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const d=or(s,t,o.getNode(),a);d!=null?u=o.getNode().getImmediateChild(c).updateChild(h,d):u=o.getNode().getImmediateChild(c)}else u=$s(s,c,e.serverCache);u!=null?l=n.filter.updateChild(o.getNode(),c,u,h,i,r):l=o.getNode()}}return It(e,l,o.isFullyInitialized()||I(t),n.filter.filtersNodes())}}function yn(n,e,t,s,i,r,o,l){const a=e.serverCache;let c;const h=o?n.filter:n.filter.getIndexedFilter();if(I(t))c=h.updateFullNode(a.getNode(),s,null);else if(h.filtersNodes()&&!a.isFiltered()){const f=a.getNode().updateChild(t,s);c=h.updateFullNode(a.getNode(),f,null)}else{const f=S(t);if(!a.isCompleteForPath(t)&&Ne(t)>1)return e;const _=O(t),y=a.getNode().getImmediateChild(f).updateChild(_,s);f===".priority"?c=h.updatePriority(a.getNode(),y):c=h.updateChild(a.getNode(),f,y,_,Vo,null)}const u=Lo(e,c,a.isFullyInitialized()||I(t),h.filtersNodes()),d=new Gs(i,u,r);return $o(n,u,t,i,d,l)}function bs(n,e,t,s,i,r,o){const l=e.eventCache;let a,c;const h=new Gs(i,e,r);if(I(t))c=n.filter.updateFullNode(e.eventCache.getNode(),s,o),a=It(e,c,!0,n.filter.filtersNodes());else{const u=S(t);if(u===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),s),a=It(e,c,l.isFullyInitialized(),l.isFiltered());else{const d=O(t),f=l.getNode().getImmediateChild(u);let _;if(I(d))_=s;else{const m=h.getCompleteChild(u);m!=null?wo(d)===".priority"&&m.getChild(So(d)).isEmpty()?_=m:_=m.updateChild(d,s):_=C.EMPTY_NODE}if(f.equals(_))a=e;else{const m=n.filter.updateChild(l.getNode(),u,_,d,h,o);a=It(e,m,l.isFullyInitialized(),n.filter.filtersNodes())}}}return a}function lr(n,e){return n.eventCache.isCompleteForChild(e)}function Uh(n,e,t,s,i,r,o){let l=e;return s.foreach((a,c)=>{const h=G(t,a);lr(e,S(h))&&(l=bs(n,l,h,c,i,r,o))}),s.foreach((a,c)=>{const h=G(t,a);lr(e,S(h))||(l=bs(n,l,h,c,i,r,o))}),l}function ar(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function ws(n,e,t,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;I(t)?c=s:c=new M(null).setTree(t,s);const h=e.serverCache.getNode();return c.children.inorderTraversal((u,d)=>{if(h.hasChild(u)){const f=e.serverCache.getNode().getImmediateChild(u),_=ar(n,f,d);a=yn(n,a,new D(u),_,i,r,o,l)}}),c.children.inorderTraversal((u,d)=>{const f=!e.serverCache.isCompleteForChild(u)&&d.value===null;if(!h.hasChild(u)&&!f){const _=e.serverCache.getNode().getImmediateChild(u),m=ar(n,_,d);a=yn(n,a,new D(u),m,i,r,o,l)}}),a}function Hh(n,e,t,s,i,r,o){if(gn(i,t)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(I(t)&&a.isFullyInitialized()||a.isCompleteForPath(t))return yn(n,e,t,a.getNode().getChild(t),i,r,l,o);if(I(t)){let c=new M(null);return a.getNode().forEachChild(et,(h,u)=>{c=c.set(new D(h),u)}),ws(n,e,t,c,i,r,l,o)}else return e}else{let c=new M(null);return s.foreach((h,u)=>{const d=G(t,h);a.isCompleteForPath(d)&&(c=c.set(h,a.getNode().getChild(d)))}),ws(n,e,t,c,i,r,l,o)}}function Vh(n,e,t,s,i){const r=e.serverCache,o=Lo(e,r.getNode(),r.isFullyInitialized()||I(t),r.isFiltered());return $o(n,o,t,s,Vo,i)}function $h(n,e,t,s,i,r){let o;if(gn(s,t)!=null)return e;{const l=new Gs(s,e,i),a=e.eventCache.getNode();let c;if(I(t)||S(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=mn(s,We(e));else{const u=e.serverCache.getNode();p(u instanceof C,"serverChildren would be complete if leaf node"),h=Vs(s,u)}h=h,c=n.filter.updateFullNode(a,h,r)}else{const h=S(t);let u=$s(s,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=a.getImmediateChild(h)),u!=null?c=n.filter.updateChild(a,h,u,O(t),l,r):e.eventCache.getNode().hasChild(h)?c=n.filter.updateChild(a,h,C.EMPTY_NODE,O(t),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=mn(s,We(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||gn(s,R())!=null,It(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Bs(s.getIndex()),r=ch(s);this.processor_=Lh(r);const o=t.serverCache,l=t.eventCache,a=i.updateFullNode(C.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(C.EMPTY_NODE,l.getNode(),null),h=new Re(a,o.isFullyInitialized(),i.filtersNodes()),u=new Re(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Dn(u,h),this.eventGenerator_=new mh(this.query_)}get query(){return this.query_}}function jh(n){return n.viewCache_.serverCache.getNode()}function zh(n){return pn(n.viewCache_)}function qh(n,e){const t=We(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!I(e)&&!t.getImmediateChild(S(e)).isEmpty())?t.getChild(e):null}function cr(n){return n.eventRegistrations_.length===0}function Yh(n,e){n.eventRegistrations_.push(e)}function ur(n,e,t){const s=[];if(t){p(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function hr(n,e,t,s){e.type===ae.MERGE&&e.source.queryId!==null&&(p(We(n.viewCache_),"We should always have a full cache before handling merges"),p(pn(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=Bh(n.processor_,i,e,t,s);return Fh(n.processor_,r.viewCache),p(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Go(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Kh(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(W,(r,o)=>{s.push(it(r,o))}),t.isFullyInitialized()&&s.push(Oo(t.getNode())),Go(n,s,t.getNode(),e)}function Go(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return gh(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vn;class jo{constructor(){this.views=new Map}}function Qh(n){p(!vn,"__referenceConstructor has already been defined"),vn=n}function Xh(){return p(vn,"Reference.ts has not been loaded"),vn}function Jh(n){return n.views.size===0}function js(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return p(r!=null,"SyncTree gave us an op for an invalid query."),hr(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(hr(o,e,t,s));return r}}function zo(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let l=mn(t,i?s:null),a=!1;l?a=!0:s instanceof C?(l=Vs(t,s),a=!1):(l=C.EMPTY_NODE,a=!1);const c=Dn(new Re(l,a,!1),new Re(s,i,!1));return new Gh(e,c)}return o}function Zh(n,e,t,s,i,r){const o=zo(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Yh(o,t),Kh(o,t)}function ed(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const l=ke(n);if(i==="default")for(const[a,c]of n.views.entries())o=o.concat(ur(c,t,s)),cr(c)&&(n.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=n.views.get(i);a&&(o=o.concat(ur(a,t,s)),cr(a)&&(n.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!ke(n)&&r.push(new(Xh())(e._repo,e._path)),{removed:r,events:o}}function qo(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Se(n,e){let t=null;for(const s of n.views.values())t=t||qh(s,e);return t}function Yo(n,e){if(e._queryParams.loadsAllData())return On(n);{const s=e._queryIdentifier;return n.views.get(s)}}function Ko(n,e){return Yo(n,e)!=null}function ke(n){return On(n)!=null}function On(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cn;function td(n){p(!Cn,"__referenceConstructor has already been defined"),Cn=n}function nd(){return p(Cn,"Reference.ts has not been loaded"),Cn}let sd=1;class dr{constructor(e){this.listenProvider_=e,this.syncPointTree_=new M(null),this.pendingWriteTree_=Ph(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Qo(n,e,t,s,i){return Eh(n.pendingWriteTree_,e,t,s,i),i?qt(n,new Be(Mo(),e,t)):[]}function Me(n,e,t=!1){const s=bh(n.pendingWriteTree_,e);if(wh(n.pendingWriteTree_,e)){let r=new M(null);return s.snap!=null?r=r.set(R(),!0):se(s.children,o=>{r=r.set(new D(o),!0)}),qt(n,new _n(s.path,r,t))}else return[]}function zt(n,e,t){return qt(n,new Be(Us(),e,t))}function id(n,e,t){const s=M.fromObject(t);return qt(n,new Bt(Us(),e,s))}function rd(n,e){return qt(n,new Ft(Us(),e))}function od(n,e,t){const s=qs(n,t);if(s){const i=Ys(s),r=i.path,o=i.queryId,l=Z(r,e),a=new Ft(Hs(o),l);return Ks(n,r,a)}else return[]}function Xo(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||Ko(o,e))){const a=ed(o,e,t,s);Jh(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const h=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=n.syncPointTree_.findOnPath(r,(d,f)=>ke(f));if(h&&!u){const d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){const f=ud(d);for(let _=0;_<f.length;++_){const m=f[_],y=m.query,b=tl(n,m);n.listenProvider_.startListening(Tt(y),Wt(n,y),b.hashFn,b.onComplete)}}}!u&&c.length>0&&!s&&(h?n.listenProvider_.stopListening(Tt(e),null):c.forEach(d=>{const f=n.queryToTagMap.get(xn(d));n.listenProvider_.stopListening(Tt(d),f)}))}hd(n,c)}return l}function Jo(n,e,t,s){const i=qs(n,s);if(i!=null){const r=Ys(i),o=r.path,l=r.queryId,a=Z(o,e),c=new Be(Hs(l),a,t);return Ks(n,o,c)}else return[]}function ld(n,e,t,s){const i=qs(n,s);if(i){const r=Ys(i),o=r.path,l=r.queryId,a=Z(o,e),c=M.fromObject(t),h=new Bt(Hs(l),a,c);return Ks(n,o,h)}else return[]}function ad(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(d,f)=>{const _=Z(d,i);r=r||Se(f,_),o=o||ke(f)});let l=n.syncPointTree_.get(i);l?(o=o||ke(l),r=r||Se(l,R())):(l=new jo,n.syncPointTree_=n.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=C.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((f,_)=>{const m=Se(_,R());m&&(r=r.updateImmediateChild(f,m))}));const c=Ko(l,e);if(!c&&!e._queryParams.loadsAllData()){const d=xn(e);p(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=dd();n.queryToTagMap.set(d,f),n.tagToQueryMap.set(f,d)}const h=Pn(n.pendingWriteTree_,i);let u=Zh(l,e,t,h,r,a);if(!c&&!o&&!s){const d=Yo(l,e);u=u.concat(fd(n,e,d))}return u}function zs(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,l)=>{const a=Z(o,e),c=Se(l,a);if(c)return c});return Wo(i,e,r,t,!0)}function cd(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(c,h)=>{const u=Z(c,t);s=s||Se(h,u)});let i=n.syncPointTree_.get(t);i?s=s||Se(i,R()):(i=new jo,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new Re(s,!0,!1):null,l=Pn(n.pendingWriteTree_,e._path),a=zo(i,e,l,r?o.getNode():C.EMPTY_NODE,r);return zh(a)}function qt(n,e){return Zo(e,n.syncPointTree_,null,Pn(n.pendingWriteTree_,R()))}function Zo(n,e,t,s){if(I(n.path))return el(n,e,t,s);{const i=e.get(R());t==null&&i!=null&&(t=Se(i,R()));let r=[];const o=S(n.path),l=n.operationForChild(o),a=e.children.get(o);if(a&&l){const c=t?t.getImmediateChild(o):null,h=Uo(s,o);r=r.concat(Zo(l,a,c,h))}return i&&(r=r.concat(js(i,n,s,t))),r}}function el(n,e,t,s){const i=e.get(R());t==null&&i!=null&&(t=Se(i,R()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=t?t.getImmediateChild(o):null,c=Uo(s,o),h=n.operationForChild(o);h&&(r=r.concat(el(h,l,a,c)))}),i&&(r=r.concat(js(i,n,s,t))),r}function tl(n,e){const t=e.query,s=Wt(n,t);return{hashFn:()=>(jh(e)||C.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?od(n,t._path,s):rd(n,t._path);{const r=au(i,t);return Xo(n,t,null,r)}}}}function Wt(n,e){const t=xn(e);return n.queryToTagMap.get(t)}function xn(n){return n._path.toString()+"$"+n._queryIdentifier}function qs(n,e){return n.tagToQueryMap.get(e)}function Ys(n){const e=n.indexOf("$");return p(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new D(n.substr(0,e))}}function Ks(n,e,t){const s=n.syncPointTree_.get(e);p(s,"Missing sync point for query tag that we're tracking");const i=Pn(n.pendingWriteTree_,e);return js(s,t,i,null)}function ud(n){return n.fold((e,t,s)=>{if(t&&ke(t))return[On(t)];{let i=[];return t&&(i=qo(t)),se(s,(r,o)=>{i=i.concat(o)}),i}})}function Tt(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(nd())(n._repo,n._path):n}function hd(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=xn(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function dd(){return sd++}function fd(n,e,t){const s=e._path,i=Wt(n,e),r=tl(n,t),o=n.listenProvider_.startListening(Tt(e),i,r.hashFn,r.onComplete),l=n.syncPointTree_.subtree(s);if(i)p(!ke(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,h,u)=>{if(!I(c)&&h&&ke(h))return[On(h).query];{let d=[];return h&&(d=d.concat(qo(h).map(f=>f.query))),se(u,(f,_)=>{d=d.concat(_)}),d}});for(let c=0;c<a.length;++c){const h=a[c];n.listenProvider_.stopListening(Tt(h),Wt(n,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Qs(t)}node(){return this.node_}}class Xs{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=G(this.path_,e);return new Xs(this.syncTree_,t)}node(){return zs(this.syncTree_,this.path_)}}const _d=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},fr=function(n,e,t){if(!n||typeof n!="object")return n;if(p(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return pd(n[".sv"],e,t);if(typeof n[".sv"]=="object")return md(n[".sv"],e);p(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},pd=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:p(!1,"Unexpected server value: "+n)}},md=function(n,e,t){n.hasOwnProperty("increment")||p(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&p(!1,"Unexpected increment value: "+s);const i=e.node();if(p(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},gd=function(n,e,t,s){return Js(e,new Xs(t,n),s)},nl=function(n,e,t){return Js(n,new Qs(e),t)};function Js(n,e,t){const s=n.getPriority().val(),i=fr(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,l=fr(o.getValue(),e,t);return l!==o.getValue()||i!==o.getPriority().val()?new z(l,K(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new z(i))),o.forEachChild(W,(l,a)=>{const c=Js(a,e.getImmediateChild(l),t);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function ei(n,e){let t=e instanceof D?e:new D(e),s=n,i=S(t);for(;i!==null;){const r=nt(s.node.children,i)||{children:{},childCount:0};s=new Zs(i,s,r),t=O(t),i=S(t)}return s}function pt(n){return n.node.value}function sl(n,e){n.node.value=e,Is(n)}function il(n){return n.node.childCount>0}function yd(n){return pt(n)===void 0&&!il(n)}function Mn(n,e){se(n.node.children,(t,s)=>{e(new Zs(t,n,s))})}function rl(n,e,t,s){t&&!s&&e(n),Mn(n,i=>{rl(i,e,!0,s)}),t&&s&&e(n)}function vd(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Yt(n){return new D(n.parent===null?n.name:Yt(n.parent)+"/"+n.name)}function Is(n){n.parent!==null&&Cd(n.parent,n.name,n)}function Cd(n,e,t){const s=yd(t),i=ve(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,Is(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,Is(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed=/[\[\].#$\/\u0000-\u001F\u007F]/,bd=/[\[\].#$\u0000-\u001F\u007F]/,ts=10*1024*1024,ol=function(n){return typeof n=="string"&&n.length!==0&&!Ed.test(n)},ll=function(n){return typeof n=="string"&&n.length!==0&&!bd.test(n)},wd=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ll(n)},Id=function(n,e,t,s){ti(As(n,"value"),e,t)},ti=function(n,e,t){const s=t instanceof D?new Hu(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Pe(s));if(typeof e=="function")throw new Error(n+"contains a function "+Pe(s)+" with contents = "+e.toString());if(to(e))throw new Error(n+"contains "+e.toString()+" "+Pe(s));if(typeof e=="string"&&e.length>ts/3&&kn(e)>ts)throw new Error(n+"contains a string greater than "+ts+" utf8 bytes "+Pe(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(se(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!ol(o)))throw new Error(n+" contains an invalid key ("+o+") "+Pe(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Vu(s,o),ti(n,l,s),$u(s)}),i&&r)throw new Error(n+' contains ".value" child '+Pe(s)+" in addition to actual children.")}},al=function(n,e,t,s){if(!ll(t))throw new Error(As(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Sd=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),al(n,e,t)},Td=function(n,e){if(S(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},Nd=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ol(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!wd(t))throw new Error(As(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function cl(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!To(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function de(n,e,t){cl(n,t),kd(n,s=>le(s,e)||le(e,s))}function kd(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(Ad(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Ad(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();bt&&J("event: "+t.toString()),_t(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd="repo_interrupt",Pd=25;class Od{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Rd,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=fn(),this.transactionQueueTree_=new Zs,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function xd(n,e,t){if(n.stats_=xs(n.repoInfo_),n.forceRestClient_||du())n.server_=new dn(n.repoInfo_,(s,i,r,o)=>{_r(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>pr(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{$(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new me(n.repoInfo_,e,(s,i,r,o)=>{_r(n,s,i,r,o)},s=>{pr(n,s)},s=>{Ld(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=gu(n.repoInfo_,()=>new ph(n.stats_,n.server_)),n.infoData_=new uh,n.infoSyncTree_=new dr({startListening:(s,i,r,o)=>{let l=[];const a=n.infoData_.getNode(s._path);return a.isEmpty()||(l=zt(n.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),si(n,"connected",!1),n.serverSyncTree_=new dr({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);de(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function Md(n){const t=n.infoData_.getNode(new D(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function ni(n){return _d({timestamp:Md(n)})}function _r(n,e,t,s,i){n.dataUpdateCount++;const r=new D(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const a=on(t,c=>K(c));o=ld(n.serverSyncTree_,r,a,i)}else{const a=K(t);o=Jo(n.serverSyncTree_,r,a,i)}else if(s){const a=on(t,c=>K(c));o=id(n.serverSyncTree_,r,a)}else{const a=K(t);o=zt(n.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=Fn(n,r)),de(n.eventQueue_,l,o)}function pr(n,e){si(n,"connected",e),e===!1&&Wd(n)}function Ld(n,e){se(e,(t,s)=>{si(n,t,s)})}function si(n,e,t){const s=new D("/.info/"+e),i=K(t);n.infoData_.updateSnapshot(s,i);const r=zt(n.infoSyncTree_,s,i);de(n.eventQueue_,s,r)}function ul(n){return n.nextWriteId_++}function Fd(n,e,t){const s=cd(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=K(i).withIndex(e._queryParams.getIndex());ad(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=zt(n.serverSyncTree_,e._path,r);else{const l=Wt(n.serverSyncTree_,e);o=Jo(n.serverSyncTree_,e._path,r,l)}return de(n.eventQueue_,e._path,o),Xo(n.serverSyncTree_,e,t,null,!0),r},i=>(Ln(n,"get for query "+$(e)+" failed: "+i),Promise.reject(new Error(i))))}function Bd(n,e,t,s,i){Ln(n,"set",{path:e.toString(),value:t,priority:s});const r=ni(n),o=K(t,s),l=zs(n.serverSyncTree_,e),a=nl(o,l,r),c=ul(n),h=Qo(n.serverSyncTree_,e,a,c,!0);cl(n.eventQueue_,h),n.server_.put(e.toString(),o.val(!0),(d,f)=>{const _=d==="ok";_||ne("set at "+e+" failed: "+d);const m=Me(n.serverSyncTree_,c,!_);de(n.eventQueue_,e,m),Hd(n,i,d,f)});const u=pl(n,e);Fn(n,u),de(n.eventQueue_,u,[])}function Wd(n){Ln(n,"onDisconnectEvents");const e=ni(n),t=fn();vs(n.onDisconnect_,R(),(i,r)=>{const o=gd(i,r,n.serverSyncTree_,e);xo(t,i,o)});let s=[];vs(t,R(),(i,r)=>{s=s.concat(zt(n.serverSyncTree_,i,r));const o=pl(n,i);Fn(n,o)}),n.onDisconnect_=fn(),de(n.eventQueue_,R(),s)}function Ud(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Dd)}function Ln(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),J(t,...e)}function Hd(n,e,t,s){e&&_t(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function hl(n,e,t){return zs(n.serverSyncTree_,e,t)||C.EMPTY_NODE}function ii(n,e=n.transactionQueueTree_){if(e||Bn(n,e),pt(e)){const t=fl(n,e);p(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&Vd(n,Yt(e),t)}else il(e)&&Mn(e,t=>{ii(n,t)})}function Vd(n,e,t){const s=t.map(c=>c.currentWriteId),i=hl(n,e,s);let r=i;const o=i.hash();for(let c=0;c<t.length;c++){const h=t[c];p(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=Z(e,h.path);r=r.updateChild(u,h.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;n.server_.put(a.toString(),l,c=>{Ln(n,"transaction put response",{path:a.toString(),status:c});let h=[];if(c==="ok"){const u=[];for(let d=0;d<t.length;d++)t[d].status=2,h=h.concat(Me(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&u.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();Bn(n,ei(n.transactionQueueTree_,e)),ii(n,n.transactionQueueTree_),de(n.eventQueue_,e,h);for(let d=0;d<u.length;d++)_t(u[d])}else{if(c==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{ne("transaction at "+a.toString()+" failed: "+c);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=c}Fn(n,e)}},o)}function Fn(n,e){const t=dl(n,e),s=Yt(t),i=fl(n,t);return $d(n,i,s),s}function $d(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=Z(t,a.path);let h=!1,u;if(p(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)h=!0,u=a.abortReason,i=i.concat(Me(n.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Pd)h=!0,u="maxretry",i=i.concat(Me(n.serverSyncTree_,a.currentWriteId,!0));else{const d=hl(n,a.path,o);a.currentInputSnapshot=d;const f=e[l].update(d.val());if(f!==void 0){ti("transaction failed: Data returned ",f,a.path);let _=K(f);typeof f=="object"&&f!=null&&ve(f,".priority")||(_=_.updatePriority(d.getPriority()));const y=a.currentWriteId,b=ni(n),T=nl(_,d,b);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=T,a.currentWriteId=ul(n),o.splice(o.indexOf(y),1),i=i.concat(Qo(n.serverSyncTree_,a.path,T,a.currentWriteId,a.applyLocally)),i=i.concat(Me(n.serverSyncTree_,y,!0))}else h=!0,u="nodata",i=i.concat(Me(n.serverSyncTree_,a.currentWriteId,!0))}de(n.eventQueue_,t,i),i=[],h&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(u==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(u),!1,null))))}Bn(n,n.transactionQueueTree_);for(let l=0;l<s.length;l++)_t(s[l]);ii(n,n.transactionQueueTree_)}function dl(n,e){let t,s=n.transactionQueueTree_;for(t=S(e);t!==null&&pt(s)===void 0;)s=ei(s,t),e=O(e),t=S(e);return s}function fl(n,e){const t=[];return _l(n,e,t),t.sort((s,i)=>s.order-i.order),t}function _l(n,e,t){const s=pt(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);Mn(e,i=>{_l(n,i,t)})}function Bn(n,e){const t=pt(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,sl(e,t.length>0?t:void 0)}Mn(e,s=>{Bn(n,s)})}function pl(n,e){const t=Yt(dl(n,e)),s=ei(n.transactionQueueTree_,e);return vd(s,i=>{ns(n,i)}),ns(n,s),rl(s,i=>{ns(n,i)}),t}function ns(n,e){const t=pt(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(p(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(p(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(Me(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?sl(e,void 0):t.length=r+1,de(n.eventQueue_,Yt(e),i);for(let o=0;o<s.length;o++)_t(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function jd(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ne(`Invalid query segment '${t}' in query '${n}'`)}return e}const mr=function(n,e){const t=zd(n),s=t.namespace;t.domain==="firebase.com"&&ge(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&ge("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||su();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new _o(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new D(t.pathString)}},zd=function(n){let e="",t="",s="",i="",r="",o=!0,l="https",a=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(l=n.substring(0,c-1),n=n.substring(c+2));let h=n.indexOf("/");h===-1&&(h=n.length);let u=n.indexOf("?");u===-1&&(u=n.length),e=n.substring(0,Math.min(h,u)),h<u&&(i=Gd(n.substring(h,u)));const d=jd(n.substring(Math.min(n.length,u)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const _=e.indexOf(".");s=e.substring(0,_).toLowerCase(),t=e.substring(_+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:a,domain:t,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+$(this.snapshot.exportVal())}}class Yd{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return p(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return I(this._path)?null:wo(this._path)}get ref(){return new Ce(this._repo,this._path)}get _queryIdentifier(){const e=tr(this._queryParams),t=Ps(e);return t==="{}"?"default":t}get _queryObject(){return tr(this._queryParams)}isEqual(e){if(e=dt(e),!(e instanceof ri))return!1;const t=this._repo===e._repo,s=To(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Uu(this._path)}}class Ce extends ri{constructor(e,t){super(e,t,new Ws,!1)}get parent(){const e=So(this._path);return e===null?null:new Ce(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ut{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new D(e),s=Ss(this.ref,e);return new Ut(this._node.getChild(t),s,W)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Ut(i,Ss(this.ref,s),W)))}hasChild(e){const t=new D(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function En(n,e){return n=dt(n),n._checkNotDeleted("ref"),e!==void 0?Ss(n._root,e):n._root}function Ss(n,e){return n=dt(n),S(n._path)===null?Sd("child","path",e):al("child","path",e),new Ce(n._repo,G(n._path,e))}function oi(n,e){n=dt(n),Td("set",n._path),Id("set",e,n._path);const t=new Rn;return Bd(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function Qd(n){n=dt(n);const e=new Kd(()=>{}),t=new li(e);return Fd(n._repo,n,t).then(s=>new Ut(s,new Ce(n._repo,n._path),n._queryParams.getIndex()))}class li{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new qd("value",this,new Ut(e.snapshotNode,new Ce(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Yd(this,e,t):null}matches(e){return e instanceof li?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}Qh(Ce);td(Ce);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd="FIREBASE_DATABASE_EMULATOR_HOST",Ts={};let Jd=!1;function Zd(n,e,t,s){n.repoInfo_=new _o(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),s&&(n.authTokenProvider_=s)}function ef(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||ge("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),J("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=mr(r,i),l=o.repoInfo,a;typeof process<"u"&&Fi&&(a=Fi[Xd]),a?(r=`http://${a}?ns=${l.namespace}`,o=mr(r,i),l=o.repoInfo):o.repoInfo.secure;const c=new _u(n.name,n.options,e);Nd("Invalid Firebase Database URL",o),I(o.path)||ge("Database URL must point to the root of a Firebase Database (not including a child path).");const h=nf(l,n,c,new fu(n.name,t));return new sf(h,n)}function tf(n,e){const t=Ts[e];(!t||t[n.key]!==n)&&ge(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Ud(n),delete t[n.key]}function nf(n,e,t,s){let i=Ts[e.name];i||(i={},Ts[e.name]=i);let r=i[n.toURLString()];return r&&ge("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Od(n,Jd,t,s),i[n.toURLString()]=r,r}class sf{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(xd(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ce(this._repo,R())),this._rootInternal}_delete(){return this._rootInternal!==null&&(tf(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ge("Cannot call "+e+" on a deleted database.")}}function rf(n=Wc(),e){const t=Mc(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Ta("database");s&&of(t,...s)}return t}function of(n,e,t,s={}){n=dt(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&ge("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&ge('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Zt(Zt.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Na(s.mockUserToken,n.app.options.projectId);r=new Zt(o)}Zd(i,e,t,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(n){Xc(Bc),an(new Dt("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return ef(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),Je(Bi,Wi,n),Je(Bi,Wi,"esm2017")}me.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};me.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};lf();const af={type:"service_account",project_id:"remote-led-matrix",private_key_id:"2b79dc93c01d8a755fe0363a824a3721ec921a40",private_key:"-----BEGIN PRIVATE KEY-----\\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCU9Th5NjG4gaUP\\nTLhbNXuIuy0YxFwZIb1UHNo24Vq2U/z8ckAIXeeKFgzabzvyCK4pOlxjxMU+P/Y7\\n/6Nt880hNKmsicnzsQJRMTI+EKWSOAV0w3+eMsOCi3wBI5v0S3Ygig7Hv4y2zxWA\\nNAymnBnxKHhApUtPoCy7LUNXD50Ee621WvZLUEIxjKMeCU9i2B4ZPyclScEhfHxU\\npUexWML0oUqh7PmK610QTuT3zA93fO0m/Y3BHtR+N58usifrfO4KdnxsmXJSXPSi\\nXf6WpxYAh39W0SZGwQeVV8B+0+G/DmMQNM3Tkr2RkhNhPBhFljheZpDfJXeZ27sQ\\nCFIdHpBXAgMBAAECggEAQyBMzkbPWjvGQ+JJdATigigDdxVKAaNUPBrydWfRprer\\nmqHr3DlhFbfBHBCjfXtO7NJZfzZVwqs1Ti1yGyMSjkO6sL+5TAG5LxiR8Sk0S/PF\\n9awCDysGMwajn6nJ5mm5NomwhnB6O4mPwWHzT4OqJySbKFq02RGwBrurjIjDNBjO\\nGs8HXrzwucR+bpyoKgqz8hBDsoQ2L1qcNbCk8au5Zr5AyNjMROeMa5TGy1Bqk9xn\\nRJYtvPlNSihnKniW2UL35t1V78UHEQKJ/hybhfTlJvTfsaDvQiTJ+Y9b91f4vfq+\\njOPSsEQk3bWvtQaTs1ne7zkaFf9TNxMOrFDQ++RjQQKBgQDEFBeHSilVbJ9I8kb8\\nTeKipzFRlpatTFbYsJ6PpdMGFlAcif7VNzDjTvCmcDa5YR6D8LMrN2kQTPj2SUsN\\nU6GJ19wl41YwvJl3i7F++9ARSdGPa8gSNSYb+BjgTArVKpKLQOVcVuLDKlIWbahb\\n9bmt8o7X0byDq4zElNMrsx/blwKBgQDCergtvWmNfwD72igXGd/47WL4Yi0u/lyE\\nPOPNdPXCdseFd6AnX0WH+Wodx9nvzjK7L8StImy2pzHPj7UdPP63h7VzBebnMYmc\\njo/PZPSKhT3SWv8EA8U6e4K+G/Z0096ZQmyRSQkYDcx+p7PaddcaczFjOEL4vP0i\\nMzbxFxyJQQKBgFycSMijpIYuecVQeWqttr+wTEEG6UAM8HAEa7/ZSKR1YX05SF2Y\\nZcTXAh76nT5NusYCp/1ffIYwdN6Om549w+yBQf+7Mnhue+XU2w7pDMs9nHcrJyJC\\nbC+FrOozwGISa4jOLAbDGvOnR4JEZOKaWwrnp8QT0gA2xJQM3vii8AcdAoGAXBAc\\nAAsaXJEytgaf08+75ur5XvuayBRBV5g7fpdPf68a5GOsvPasw6GeSlrBIHRML7B9\\nOjiBnjWnrsoowp6NNfRYQQsaM3eP3Tzfdx4jZS+OBHZvIkdmpjixu60hDkz9oy9+\\nlYgtdeWSWKKq0U/Xc/3z8zQ+/+D3M6lq6NY3/AECgYA7G0qsp2U5isBiruMWmfOj\\ni1vqXJeM3u+DkrDXut4CR5yqWJZ31sSi6plP2vcTcL/nZ9XOJ6b/qgBPyFfk12nA\\nsDQZsfnFS2m9Yad1IK9WWRkL/uB2DeyGeswFCJGAHTmLJmWhto2hMGI0fiAsPSAj\\nGhmOSuC2vqEAuvW8YMFQTw==\\n-----END PRIVATE KEY-----\\n",client_email:"firebase-adminsdk-kcgyd@remote-led-matrix.iam.gserviceaccount.com",client_id:"103277721517390073712",auth_uri:"https://accounts.google.com/o/oauth2/auth",token_uri:"https://oauth2.googleapis.com/token",auth_provider_x509_cert_url:"https://www.googleapis.com/oauth2/v1/certs",client_x509_cert_url:"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-kcgyd@remote-led-matrix.iam.gserviceaccount.com",universe_domain:"googleapis.com",databaseURL:"https://remote-led-matrix-default-rtdb.firebaseio.com/"},cf=Kr(af),uf=rf(cf),ai=qe(uf);function hf(n){let e;return{c(){e=ot("Upload Image")},m(t,s){Q(t,e,s)},d(t){t&&V(e)}}}function df(n){let e;return{c(){e=ot("Draw Image")},m(t,s){Q(t,e,s)},d(t){t&&V(e)}}}function ff(n){let e,t,s,i=n[0]?"Turn Off":"Turn On",r,o,l,a,c,h,u,d;return l=new as({props:{to:"upload",class:"button",$$slots:{default:[hf]},$$scope:{ctx:n}}}),c=new as({props:{to:"draw",class:"button",$$slots:{default:[df]},$$scope:{ctx:n}}}),{c(){e=U("main"),t=U("div"),s=U("button"),r=ot(i),o=re(),_e(l.$$.fragment),a=re(),_e(c.$$.fragment),q(s,"class","button svelte-st2wo2"),q(t,"class","button-container svelte-st2wo2")},m(f,_){Q(f,e,_),x(e,t),x(t,s),x(s,r),x(t,o),ue(l,t,null),x(t,a),ue(c,t,null),h=!0,u||(d=ee(s,"click",n[1]),u=!0)},p(f,[_]){(!h||_&1)&&i!==(i=f[0]?"Turn Off":"Turn On")&&Rr(r,i);const m={};_&8&&(m.$$scope={dirty:_,ctx:f}),l.$set(m);const y={};_&8&&(y.$$scope={dirty:_,ctx:f}),c.$set(y)},i(f){h||(L(l.$$.fragment,f),L(c.$$.fragment,f),h=!0)},o(f){B(l.$$.fragment,f),B(c.$$.fragment,f),h=!1},d(f){f&&V(e),he(l),he(c),u=!1,d()}}}function _f(n,e,t){let s=!1,i;Nn(()=>{const o=ai.subscribe(a=>{i=a});return(async()=>{const a=En(i,"isOn"),c=await Qd(a);t(0,s=c.exists()?c.val():!1)})(),()=>o()});async function r(){const o=En(i,"isOn");t(0,s=!s),await oi(o,s)}return[s,r]}class pf extends He{constructor(e){super(),Ue(this,e,_f,ff,ye,{})}}function mf(n){let e,t,s,i,r,o,l,a;return{c(){e=U("main"),t=U("h1"),t.textContent="Upload a 64x64 Image",s=re(),i=U("input"),r=re(),o=U("canvas"),q(i,"type","file"),q(i,"accept","image/*"),Et(o,"border","1px solid black"),q(o,"class","svelte-qlzz41")},m(c,h){Q(c,e,h),x(e,t),x(e,s),x(e,i),n[3](i),x(e,r),x(e,o),n[4](o),l||(a=ee(i,"change",n[2]),l=!0)},p:k,i:k,o:k,d(c){c&&V(e),n[3](null),n[4](null),l=!1,a()}}}function gf(n,e,t){let s,i,r;Nn(()=>{const c=ai.subscribe(h=>{r=h});return()=>c()});async function o(c){const h=c.target.files[0],u=new FileReader;u.onload=function(d){const f=new Image;f.onload=function(){const _=i.getContext("2d");t(1,i.width=64,i),t(1,i.height=64,i),_.drawImage(f,0,0,64,64);const y=_.getImageData(0,0,64,64).data,b=[];for(let v=0;v<y.length;v+=4){const F=y[v],g=y[v+1],A=y[v+2];b.push([F,g,A])}const T=En(r,"matrixData");oi(T,b)},f.src=d.target.result},u.readAsDataURL(h)}function l(c){Rt[c?"unshift":"push"](()=>{s=c,t(0,s)})}function a(c){Rt[c?"unshift":"push"](()=>{i=c,t(1,i)})}return[s,i,o,l,a]}class yf extends He{constructor(e){super(),Ue(this,e,gf,mf,ye,{})}}function gr(n,e,t){const s=n.slice();return s[18]=e[t],s}function yr(n){let e,t,s;function i(){return n[9](n[18])}return{c(){e=U("button"),q(e,"class","color-button svelte-1qpmcl3"),Et(e,"background-color",n[18])},m(r,o){Q(r,e,o),t||(s=ee(e,"click",i),t=!0)},p(r,o){n=r},d(r){r&&V(e),t=!1,s()}}}function vf(n){let e,t,s,i,r,o,l,a,c,h,u,d,f=n[1]?"Exclude Background":"Include Background",_,m,y,b=mi(["red","orange","yellow","green","blue","indigo","violet"]),T=[];for(let v=0;v<7;v+=1)T[v]=yr(gr(n,b,v));return{c(){e=U("main"),t=U("h1"),t.textContent="Draw on the Canvas",s=re(),i=U("div");for(let v=0;v<7;v+=1)T[v].c();r=re(),o=U("canvas"),l=re(),a=U("button"),a.textContent="Send Drawing",c=re(),h=U("button"),h.textContent="Clear Canvas",u=re(),d=U("button"),_=ot(f),q(i,"class","color-buttons svelte-1qpmcl3"),q(o,"width","64"),q(o,"height","64"),Et(o,"width",64*bn+"px"),Et(o,"height",64*bn+"px"),Et(o,"border","1px solid black"),q(o,"class","svelte-1qpmcl3"),q(a,"class","svelte-1qpmcl3"),q(h,"class","svelte-1qpmcl3"),q(d,"class","svelte-1qpmcl3"),di(d,"active",n[1]),q(e,"class","svelte-1qpmcl3")},m(v,F){Q(v,e,F),x(e,t),x(e,s),x(e,i);for(let g=0;g<7;g+=1)T[g]&&T[g].m(i,null);x(e,r),x(e,o),n[10](o),x(e,l),x(e,a),x(e,c),x(e,h),x(e,u),x(e,d),x(d,_),m||(y=[ee(o,"mousedown",n[2]),ee(o,"mouseup",n[3]),ee(o,"mouseleave",n[3]),ee(o,"mousemove",n[4]),ee(o,"touchstart",n[2]),ee(o,"touchend",n[3],{passive:!0}),ee(o,"touchmove",n[4]),ee(a,"click",n[6]),ee(h,"click",n[5]),ee(d,"click",n[7])],m=!0)},p(v,[F]){if(F&256){b=mi(["red","orange","yellow","green","blue","indigo","violet"]);let g;for(g=0;g<7;g+=1){const A=gr(v,b,g);T[g]?T[g].p(A,F):(T[g]=yr(A),T[g].c(),T[g].m(i,null))}for(;g<7;g+=1)T[g].d(1)}F&2&&f!==(f=v[1]?"Exclude Background":"Include Background")&&Rr(_,f),F&2&&di(d,"active",v[1])},i:k,o:k,d(v){v&&V(e),wl(T,v),n[10](null),m=!1,Ae(y)}}}const bn=5;function Cf(n,e,t){let s,i,r,o=!1,l="red",a=!1,c=null;Nn(()=>{const g=ai.subscribe(A=>{r=A});return i=s.getContext("2d"),m(),()=>g()});function h(g){g.preventDefault(),o=!0,c=_(g),d(g)}function u(){o=!1,c=null}function d(g){if(!o)return;g.preventDefault();const A=_(g);f(c,A),c=A}function f(g,A){const ie=Math.abs(A.x-g.x),N=Math.abs(A.y-g.y),E=g.x<A.x?1:-1,X=g.y<A.y?1:-1;let j=ie-N;for(;i.fillStyle=l,i.fillRect(g.x,g.y,1,1),!(g.x===A.x&&g.y===A.y);){const H=j*2;H>-N&&(j-=N,g.x+=E),H<ie&&(j+=ie,g.y+=X)}}function _(g){const A=s.getBoundingClientRect(),ie=(g.touches?g.touches[0].clientX:g.clientX)-A.left,N=(g.touches?g.touches[0].clientY:g.clientY)-A.top;return{x:Math.floor(ie/bn),y:Math.floor(N/bn)}}function m(){i.fillStyle="white",i.fillRect(0,0,s.width,s.height)}function y(){const A=i.getImageData(0,0,64,64).data,ie=[];for(let E=0;E<A.length;E+=4){const X=A[E],j=A[E+1],H=A[E+2];a||X!==255||j!==255||H!==255?ie.push([X,j,H]):ie.push([0,0,0])}const N=En(r,"matrixData");oi(N,ie)}function b(){t(1,a=!a)}function T(g){l=g}const v=g=>T(g);function F(g){Rt[g?"unshift":"push"](()=>{s=g,t(0,s)})}return[s,a,h,u,d,m,y,b,T,v,F]}class Ef extends He{constructor(e){super(),Ue(this,e,Cf,vf,ye,{})}}function bf(n){let e;return{c(){e=U("button"),e.textContent="Home",q(e,"class","home-button svelte-29592n")},m(t,s){Q(t,e,s)},p:k,d(t){t&&V(e)}}}function wf(n){let e,t,s,i,r,o,l,a,c,h;return t=new as({props:{to:"/",$$slots:{default:[bf]},$$scope:{ctx:n}}}),r=new Gn({props:{path:"/",component:pf}}),l=new Gn({props:{path:"/upload",component:yf}}),c=new Gn({props:{path:"/draw",component:Ef}}),{c(){e=U("div"),_e(t.$$.fragment),s=re(),i=U("div"),_e(r.$$.fragment),o=re(),_e(l.$$.fragment),a=re(),_e(c.$$.fragment),q(e,"class","svelte-29592n"),q(i,"class","svelte-29592n")},m(u,d){Q(u,e,d),ue(t,e,null),Q(u,s,d),Q(u,i,d),ue(r,i,null),x(i,o),ue(l,i,null),x(i,a),ue(c,i,null),h=!0},p(u,d){const f={};d&1&&(f.$$scope={dirty:d,ctx:u}),t.$set(f)},i(u){h||(L(t.$$.fragment,u),L(r.$$.fragment,u),L(l.$$.fragment,u),L(c.$$.fragment,u),h=!0)},o(u){B(t.$$.fragment,u),B(r.$$.fragment,u),B(l.$$.fragment,u),B(c.$$.fragment,u),h=!1},d(u){u&&(V(e),V(s),V(i)),he(t),he(r),he(l),he(c)}}}function If(n){let e,t;return e=new ma({props:{url:Sf,$$slots:{default:[wf]},$$scope:{ctx:n}}}),{c(){_e(e.$$.fragment)},m(s,i){ue(e,s,i),t=!0},p(s,[i]){const r={};i&1&&(r.$$scope={dirty:i,ctx:s}),e.$set(r)},i(s){t||(L(e.$$.fragment,s),t=!0)},o(s){B(e.$$.fragment,s),t=!1},d(s){he(e,s)}}}let Sf="";class Tf extends He{constructor(e){super(),Ue(this,e,null,If,ye,{})}}new Tf({target:document.getElementById("app")});
