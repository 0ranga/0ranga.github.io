function _(){}function R(e,t){for(const i in t)e[i]=t[i];return e}function I(e){return e&&typeof e=="object"&&typeof e.then=="function"}function k(e){return e()}function P(){return Object.create(null)}function y(e){e.forEach(k)}function J(e){return typeof e=="function"}function K(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let v;function _t(e,t){return v||(v=document.createElement("a")),v.href=t,e===v.href}function Q(e){return Object.keys(e).length===0}function yt(e,t,i,n){if(e){const s=j(e,t,i,n);return e[0](s)}}function j(e,t,i,n){return e[1]&&n?R(i.ctx.slice(),e[1](n(t))):i.ctx}function bt(e,t,i,n){if(e[2]&&n){const s=e[2](n(i));if(t.dirty===void 0)return s;if(typeof s=="object"){const h=[],r=Math.max(t.dirty.length,s.length);for(let o=0;o<r;o+=1)h[o]=t.dirty[o]|s[o];return h}return t.dirty|s}return t.dirty}function vt(e,t,i,n,s,h){if(s){const r=j(t,i,n,h);e.p(r,s)}}function xt(e){if(e.ctx.length>32){const t=[],i=e.ctx.length/32;for(let n=0;n<i;n++)t[n]=-1;return t}return-1}function Et(e){return e==null?"":e}let x=!1;function U(){x=!0}function V(){x=!1}function Z(e,t,i,n){for(;e<t;){const s=e+(t-e>>1);i(s)<=n?e=s+1:t=s}return e}function tt(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const l=[];for(let a=0;a<t.length;a++){const u=t[a];u.claim_order!==void 0&&l.push(u)}t=l}const i=new Int32Array(t.length+1),n=new Int32Array(t.length);i[0]=-1;let s=0;for(let l=0;l<t.length;l++){const a=t[l].claim_order,u=(s>0&&t[i[s]].claim_order<=a?s+1:Z(1,s,d=>t[i[d]].claim_order,a))-1;n[l]=i[u]+1;const c=u+1;i[c]=l,s=Math.max(c,s)}const h=[],r=[];let o=t.length-1;for(let l=i[s]+1;l!=0;l=n[l-1]){for(h.push(t[l-1]);o>=l;o--)r.push(t[o]);o--}for(;o>=0;o--)r.push(t[o]);h.reverse(),r.sort((l,a)=>l.claim_order-a.claim_order);for(let l=0,a=0;l<r.length;l++){for(;a<h.length&&r[l].claim_order>=h[a].claim_order;)a++;const u=a<h.length?h[a]:null;e.insertBefore(r[l],u)}}function et(e,t){if(x){for(tt(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function it(e,t,i){e.insertBefore(t,i||null)}function nt(e,t,i){x&&!i?et(e,t):(t.parentNode!==e||t.nextSibling!=i)&&e.insertBefore(t,i||null)}function E(e){e.parentNode.removeChild(e)}function wt(e,t){for(let i=0;i<e.length;i+=1)e[i]&&e[i].d(t)}function N(e){return document.createElement(e)}function z(e){return document.createTextNode(e)}function Lt(){return z(" ")}function Mt(){return z("")}function St(e,t,i,n){return e.addEventListener(t,i,n),()=>e.removeEventListener(t,i,n)}function zt(e,t,i){i==null?e.removeAttribute(t):e.getAttribute(t)!==i&&e.setAttribute(t,i)}function st(e){return Array.from(e.childNodes)}function W(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function H(e,t,i,n,s=!1){W(e);const h=(()=>{for(let r=e.claim_info.last_index;r<e.length;r++){const o=e[r];if(t(o)){const l=i(o);return l===void 0?e.splice(r,1):e[r]=l,s||(e.claim_info.last_index=r),o}}for(let r=e.claim_info.last_index-1;r>=0;r--){const o=e[r];if(t(o)){const l=i(o);return l===void 0?e.splice(r,1):e[r]=l,s?l===void 0&&e.claim_info.last_index--:e.claim_info.last_index=r,o}}return n()})();return h.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,h}function lt(e,t,i,n){return H(e,s=>s.nodeName===t,s=>{const h=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];i[o.name]||h.push(o.name)}h.forEach(r=>s.removeAttribute(r))},()=>n(t))}function At(e,t,i){return lt(e,t,i,N)}function rt(e,t){return H(e,i=>i.nodeType===3,i=>{const n=""+t;if(i.data.startsWith(n)){if(i.data.length!==n.length)return i.splitText(n.length)}else i.data=n},()=>z(t),!0)}function Tt(e){return rt(e," ")}function q(e,t,i){for(let n=i;n<e.length;n+=1){const s=e[n];if(s.nodeType===8&&s.textContent.trim()===t)return n}return e.length}function Ct(e){const t=q(e,"HTML_TAG_START",0),i=q(e,"HTML_TAG_END",t);if(t===i)return new G;W(e);const n=e.splice(t,i+1);E(n[0]),E(n[n.length-1]);const s=n.slice(1,n.length-1);for(const h of s)h.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1;return new G(s)}function Yt(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function $t(e,t,i){e.classList[i?"add":"remove"](t)}function Bt(e,t=document.body){return Array.from(t.querySelectorAll(e))}class at{constructor(){this.e=this.n=null}c(t){this.h(t)}m(t,i,n=null){this.e||(this.e=N(i.nodeName),this.t=i,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let i=0;i<this.n.length;i+=1)it(this.t,this.n[i],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(E)}}class G extends at{constructor(t){super();this.e=this.n=null,this.l=t}c(t){this.l?this.n=this.l:super.c(t)}i(t){for(let i=0;i<this.n.length;i+=1)nt(this.t,this.n[i],t)}}let w;function f(e){w=e}function L(){if(!w)throw new Error("Function called outside component initialization");return w}function Xt(e){L().$$.on_mount.push(e)}function kt(e){L().$$.after_update.push(e)}function Pt(e,t){L().$$.context.set(e,t)}const b=[],O=[],M=[],F=[],ot=Promise.resolve();let A=!1;function ht(){A||(A=!0,ot.then($))}function T(e){M.push(e)}let C=!1;const Y=new Set;function $(){if(!C){C=!0;do{for(let e=0;e<b.length;e+=1){const t=b[e];f(t),ct(t.$$)}for(f(null),b.length=0;O.length;)O.pop()();for(let e=0;e<M.length;e+=1){const t=M[e];Y.has(t)||(Y.add(t),t())}M.length=0}while(b.length);for(;F.length;)F.pop()();A=!1,C=!1,Y.clear()}}function ct(e){if(e.fragment!==null){e.update(),y(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(T)}}const S=new Set;let m;function ut(){m={r:0,c:[],p:m}}function dt(){m.r||y(m.c),m=m.p}function D(e,t){e&&e.i&&(S.delete(e),e.i(t))}function ft(e,t,i,n){if(e&&e.o){if(S.has(e))return;S.add(e),m.c.push(()=>{S.delete(e),n&&(i&&e.d(1),n())}),e.o(t)}}function jt(e,t){const i=t.token={};function n(s,h,r,o){if(t.token!==i)return;t.resolved=o;let l=t.ctx;r!==void 0&&(l=l.slice(),l[r]=o);const a=s&&(t.current=s)(l);let u=!1;t.block&&(t.blocks?t.blocks.forEach((c,d)=>{d!==h&&c&&(ut(),ft(c,1,1,()=>{t.blocks[d]===c&&(t.blocks[d]=null)}),dt())}):t.block.d(1),a.c(),D(a,1),a.m(t.mount(),t.anchor),u=!0),t.block=a,t.blocks&&(t.blocks[h]=a),u&&$()}if(I(e)){const s=L();if(e.then(h=>{f(s),n(t.then,1,t.value,h),f(null)},h=>{if(f(s),n(t.catch,2,t.error,h),f(null),!t.hasCatch)throw h}),t.current!==t.pending)return n(t.pending,0),!0}else{if(t.current!==t.then)return n(t.then,1,t.value,e),!0;t.resolved=e}}function Nt(e,t,i){const n=t.slice(),{resolved:s}=e;e.current===e.then&&(n[e.value]=s),e.current===e.catch&&(n[e.error]=s),e.block.p(n,i)}function Wt(e,t){const i={},n={},s={$$scope:1};let h=e.length;for(;h--;){const r=e[h],o=t[h];if(o){for(const l in r)l in o||(n[l]=1);for(const l in o)s[l]||(i[l]=o[l],s[l]=1);e[h]=o}else for(const l in r)s[l]=1}for(const r in n)r in i||(i[r]=void 0);return i}function Ht(e){return typeof e=="object"&&e!==null?e:{}}function qt(e){e&&e.c()}function Gt(e,t){e&&e.l(t)}function gt(e,t,i,n){const{fragment:s,on_mount:h,on_destroy:r,after_update:o}=e.$$;s&&s.m(t,i),n||T(()=>{const l=h.map(k).filter(J);r?r.push(...l):y(l),e.$$.on_mount=[]}),o.forEach(T)}function mt(e,t){const i=e.$$;i.fragment!==null&&(y(i.on_destroy),i.fragment&&i.fragment.d(t),i.on_destroy=i.fragment=null,i.ctx=[])}function pt(e,t){e.$$.dirty[0]===-1&&(b.push(e),ht(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ot(e,t,i,n,s,h,r,o=[-1]){const l=w;f(e);const a=e.$$={fragment:null,ctx:null,props:h,update:_,not_equal:s,bound:P(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:P(),dirty:o,skip_bound:!1,root:t.target||l.$$.root};r&&r(a.root);let u=!1;if(a.ctx=i?i(e,t.props||{},(c,d,...B)=>{const X=B.length?B[0]:d;return a.ctx&&s(a.ctx[c],a.ctx[c]=X)&&(!a.skip_bound&&a.bound[c]&&a.bound[c](X),u&&pt(e,c)),d}):[],a.update(),u=!0,y(a.before_update),a.fragment=n?n(a.ctx):!1,t.target){if(t.hydrate){U();const c=st(t.target);a.fragment&&a.fragment.l(c),c.forEach(E)}else a.fragment&&a.fragment.c();t.intro&&D(e.$$.fragment),gt(e,t.target,t.anchor,t.customElement),V(),$()}f(l)}class Ft{$destroy(){mt(this,1),this.$destroy=_}$on(t,i){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(i),()=>{const s=n.indexOf(i);s!==-1&&n.splice(s,1)}}$set(t){this.$$set&&!Q(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const p=[];function Dt(e,t=_){let i;const n=new Set;function s(o){if(K(e,o)&&(e=o,i)){const l=!p.length;for(const a of n)a[1](),p.push(a,e);if(l){for(let a=0;a<p.length;a+=2)p[a][0](p[a+1]);p.length=0}}}function h(o){s(o(e))}function r(o,l=_){const a=[o,l];return n.add(a),n.size===1&&(i=t(s)||_),o(e),()=>{n.delete(a),n.size===0&&(i(),i=null)}}return{set:s,update:h,subscribe:r}}class g{constructor(t,i={}){if(!(t instanceof Node))throw"Can't initialize VanillaTilt because "+t+" is not a Node.";this.width=null,this.height=null,this.clientWidth=null,this.clientHeight=null,this.left=null,this.top=null,this.gammazero=null,this.betazero=null,this.lastgammazero=null,this.lastbetazero=null,this.transitionTimeout=null,this.updateCall=null,this.event=null,this.updateBind=this.update.bind(this),this.resetBind=this.reset.bind(this),this.element=t,this.settings=this.extendSettings(i),this.reverse=this.settings.reverse?-1:1,this.glare=g.isSettingTrue(this.settings.glare),this.glarePrerender=g.isSettingTrue(this.settings["glare-prerender"]),this.fullPageListening=g.isSettingTrue(this.settings["full-page-listening"]),this.gyroscope=g.isSettingTrue(this.settings.gyroscope),this.gyroscopeSamples=this.settings.gyroscopeSamples,this.elementListener=this.getElementListener(),this.glare&&this.prepareGlare(),this.fullPageListening&&this.updateClientSize(),this.addEventListeners(),this.reset(),this.updateInitialPosition()}static isSettingTrue(t){return t===""||t===!0||t===1}getElementListener(){if(this.fullPageListening)return window.document;if(typeof this.settings["mouse-event-element"]=="string"){const t=document.querySelector(this.settings["mouse-event-element"]);if(t)return t}return this.settings["mouse-event-element"]instanceof Node?this.settings["mouse-event-element"]:this.element}addEventListeners(){this.onMouseEnterBind=this.onMouseEnter.bind(this),this.onMouseMoveBind=this.onMouseMove.bind(this),this.onMouseLeaveBind=this.onMouseLeave.bind(this),this.onWindowResizeBind=this.onWindowResize.bind(this),this.onDeviceOrientationBind=this.onDeviceOrientation.bind(this),this.elementListener.addEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.addEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.addEventListener("mousemove",this.onMouseMoveBind),(this.glare||this.fullPageListening)&&window.addEventListener("resize",this.onWindowResizeBind),this.gyroscope&&window.addEventListener("deviceorientation",this.onDeviceOrientationBind)}removeEventListeners(){this.elementListener.removeEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.removeEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.removeEventListener("mousemove",this.onMouseMoveBind),this.gyroscope&&window.removeEventListener("deviceorientation",this.onDeviceOrientationBind),(this.glare||this.fullPageListening)&&window.removeEventListener("resize",this.onWindowResizeBind)}destroy(){clearTimeout(this.transitionTimeout),this.updateCall!==null&&cancelAnimationFrame(this.updateCall),this.reset(),this.removeEventListeners(),this.element.vanillaTilt=null,delete this.element.vanillaTilt,this.element=null}onDeviceOrientation(t){if(t.gamma===null||t.beta===null)return;this.updateElementPosition(),this.gyroscopeSamples>0&&(this.lastgammazero=this.gammazero,this.lastbetazero=this.betazero,this.gammazero===null?(this.gammazero=t.gamma,this.betazero=t.beta):(this.gammazero=(t.gamma+this.lastgammazero)/2,this.betazero=(t.beta+this.lastbetazero)/2),this.gyroscopeSamples-=1);const i=this.settings.gyroscopeMaxAngleX-this.settings.gyroscopeMinAngleX,n=this.settings.gyroscopeMaxAngleY-this.settings.gyroscopeMinAngleY,s=i/this.width,h=n/this.height,r=t.gamma-(this.settings.gyroscopeMinAngleX+this.gammazero),o=t.beta-(this.settings.gyroscopeMinAngleY+this.betazero),l=r/s,a=o/h;this.updateCall!==null&&cancelAnimationFrame(this.updateCall),this.event={clientX:l+this.left,clientY:a+this.top},this.updateCall=requestAnimationFrame(this.updateBind)}onMouseEnter(){this.updateElementPosition(),this.element.style.willChange="transform",this.setTransition()}onMouseMove(t){this.updateCall!==null&&cancelAnimationFrame(this.updateCall),this.event=t,this.updateCall=requestAnimationFrame(this.updateBind)}onMouseLeave(){this.setTransition(),this.settings.reset&&requestAnimationFrame(this.resetBind)}reset(){this.event={clientX:this.left+this.width/2,clientY:this.top+this.height/2},this.element&&this.element.style&&(this.element.style.transform=`perspective(${this.settings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`),this.resetGlare()}resetGlare(){this.glare&&(this.glareElement.style.transform="rotate(180deg) translate(-50%, -50%)",this.glareElement.style.opacity="0")}updateInitialPosition(){if(this.settings.startX===0&&this.settings.startY===0)return;this.onMouseEnter(),this.fullPageListening?this.event={clientX:(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.clientWidth,clientY:(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.clientHeight}:this.event={clientX:this.left+(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.width,clientY:this.top+(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.height};let t=this.settings.scale;this.settings.scale=1,this.update(),this.settings.scale=t,this.resetGlare()}getValues(){let t,i;this.fullPageListening?(t=this.event.clientX/this.clientWidth,i=this.event.clientY/this.clientHeight):(t=(this.event.clientX-this.left)/this.width,i=(this.event.clientY-this.top)/this.height),t=Math.min(Math.max(t,0),1),i=Math.min(Math.max(i,0),1);let n=(this.reverse*(this.settings.max-t*this.settings.max*2)).toFixed(2),s=(this.reverse*(i*this.settings.max*2-this.settings.max)).toFixed(2),h=Math.atan2(this.event.clientX-(this.left+this.width/2),-(this.event.clientY-(this.top+this.height/2)))*(180/Math.PI);return{tiltX:n,tiltY:s,percentageX:t*100,percentageY:i*100,angle:h}}updateElementPosition(){let t=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=t.left,this.top=t.top}update(){let t=this.getValues();this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX("+(this.settings.axis==="x"?0:t.tiltY)+"deg) rotateY("+(this.settings.axis==="y"?0:t.tiltX)+"deg) scale3d("+this.settings.scale+", "+this.settings.scale+", "+this.settings.scale+")",this.glare&&(this.glareElement.style.transform=`rotate(${t.angle}deg) translate(-50%, -50%)`,this.glareElement.style.opacity=`${t.percentageY*this.settings["max-glare"]/100}`),this.element.dispatchEvent(new CustomEvent("tiltChange",{detail:t})),this.updateCall=null}prepareGlare(){if(!this.glarePrerender){const t=document.createElement("div");t.classList.add("js-tilt-glare");const i=document.createElement("div");i.classList.add("js-tilt-glare-inner"),t.appendChild(i),this.element.appendChild(t)}this.glareElementWrapper=this.element.querySelector(".js-tilt-glare"),this.glareElement=this.element.querySelector(".js-tilt-glare-inner"),!this.glarePrerender&&(Object.assign(this.glareElementWrapper.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden","pointer-events":"none"}),Object.assign(this.glareElement.style,{position:"absolute",top:"50%",left:"50%","pointer-events":"none","background-image":"linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",transform:"rotate(180deg) translate(-50%, -50%)","transform-origin":"0% 0%",opacity:"0"}),this.updateGlareSize())}updateGlareSize(){if(this.glare){const t=(this.element.offsetWidth>this.element.offsetHeight?this.element.offsetWidth:this.element.offsetHeight)*2;Object.assign(this.glareElement.style,{width:`${t}px`,height:`${t}px`})}}updateClientSize(){this.clientWidth=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,this.clientHeight=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}onWindowResize(){this.updateGlareSize(),this.updateClientSize()}setTransition(){clearTimeout(this.transitionTimeout),this.element.style.transition=this.settings.speed+"ms "+this.settings.easing,this.glare&&(this.glareElement.style.transition=`opacity ${this.settings.speed}ms ${this.settings.easing}`),this.transitionTimeout=setTimeout(()=>{this.element.style.transition="",this.glare&&(this.glareElement.style.transition="")},this.settings.speed)}extendSettings(t){let i={reverse:!1,max:15,startX:0,startY:0,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:1,speed:300,transition:!0,axis:null,glare:!1,"max-glare":1,"glare-prerender":!1,"full-page-listening":!1,"mouse-event-element":null,reset:!0,gyroscope:!0,gyroscopeMinAngleX:-45,gyroscopeMaxAngleX:45,gyroscopeMinAngleY:-45,gyroscopeMaxAngleY:45,gyroscopeSamples:10},n={};for(var s in i)if(s in t)n[s]=t[s];else if(this.element.hasAttribute("data-tilt-"+s)){let h=this.element.getAttribute("data-tilt-"+s);try{n[s]=JSON.parse(h)}catch(r){n[s]=h}}else n[s]=i[s];return n}static init(t,i){t instanceof Node&&(t=[t]),t instanceof NodeList&&(t=[].slice.call(t)),t instanceof Array&&t.forEach(n=>{"vanillaTilt"in n||(n.vanillaTilt=new g(n,i))})}}typeof document!="undefined"&&(window.VanillaTilt=g,g.init(document.querySelectorAll("[data-tilt]")));export{Xt as A,R as B,Dt as C,$t as D,et as E,St as F,_ as G,y as H,yt as I,vt as J,xt as K,bt as L,Bt as M,Et as N,_t as O,wt as P,O as Q,jt as R,Ft as S,Nt as T,G as U,g as V,Ct as W,st as a,zt as b,At as c,E as d,N as e,nt as f,rt as g,Yt as h,Ot as i,qt as j,Lt as k,Mt as l,Gt as m,Tt as n,gt as o,Wt as p,Ht as q,ut as r,K as s,z as t,ft as u,mt as v,dt as w,D as x,Pt as y,kt as z};
