(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();function GT(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ld={exports:{}},Al={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H_;function _b(){if(H_)return Al;H_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var g in o)g!=="key"&&(u[g]=o[g])}else u=o;return o=u.ref,{$$typeof:r,type:s,key:f,ref:o!==void 0?o:null,props:u}}return Al.Fragment=t,Al.jsx=n,Al.jsxs=n,Al}var F_;function vb(){return F_||(F_=1,Ld.exports=_b()),Ld.exports}var G=vb(),zd={exports:{}},Rt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G_;function Tb(){if(G_)return Rt;G_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),b=Symbol.iterator;function D(w){return w===null||typeof w!="object"?null:(w=b&&w[b]||w["@@iterator"],typeof w=="function"?w:null)}var q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,$={};function F(w,Q,st){this.props=w,this.context=Q,this.refs=$,this.updater=st||q}F.prototype.isReactComponent={},F.prototype.setState=function(w,Q){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,Q,"setState")},F.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function tt(){}tt.prototype=F.prototype;function it(w,Q,st){this.props=w,this.context=Q,this.refs=$,this.updater=st||q}var ot=it.prototype=new tt;ot.constructor=it,H(ot,F.prototype),ot.isPureReactComponent=!0;var St=Array.isArray,ct={H:null,A:null,T:null,S:null,V:null},bt=Object.prototype.hasOwnProperty;function O(w,Q,st,nt,ht,It){return st=It.ref,{$$typeof:r,type:w,key:Q,ref:st!==void 0?st:null,props:It}}function S(w,Q){return O(w.type,Q,void 0,void 0,void 0,w.props)}function C(w){return typeof w=="object"&&w!==null&&w.$$typeof===r}function V(w){var Q={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(st){return Q[st]})}var N=/\/+/g;function P(w,Q){return typeof w=="object"&&w!==null&&w.key!=null?V(""+w.key):Q.toString(36)}function I(){}function ne(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(I,I):(w.status="pending",w.then(function(Q){w.status==="pending"&&(w.status="fulfilled",w.value=Q)},function(Q){w.status==="pending"&&(w.status="rejected",w.reason=Q)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function Zt(w,Q,st,nt,ht){var It=typeof w;(It==="undefined"||It==="boolean")&&(w=null);var yt=!1;if(w===null)yt=!0;else switch(It){case"bigint":case"string":case"number":yt=!0;break;case"object":switch(w.$$typeof){case r:case t:yt=!0;break;case E:return yt=w._init,Zt(yt(w._payload),Q,st,nt,ht)}}if(yt)return ht=ht(w),yt=nt===""?"."+P(w,0):nt,St(ht)?(st="",yt!=null&&(st=yt.replace(N,"$&/")+"/"),Zt(ht,Q,st,"",function(kn){return kn})):ht!=null&&(C(ht)&&(ht=S(ht,st+(ht.key==null||w&&w.key===ht.key?"":(""+ht.key).replace(N,"$&/")+"/")+yt)),Q.push(ht)),1;yt=0;var _e=nt===""?".":nt+":";if(St(w))for(var Ft=0;Ft<w.length;Ft++)nt=w[Ft],It=_e+P(nt,Ft),yt+=Zt(nt,Q,st,It,ht);else if(Ft=D(w),typeof Ft=="function")for(w=Ft.call(w),Ft=0;!(nt=w.next()).done;)nt=nt.value,It=_e+P(nt,Ft++),yt+=Zt(nt,Q,st,It,ht);else if(It==="object"){if(typeof w.then=="function")return Zt(ne(w),Q,st,nt,ht);throw Q=String(w),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return yt}function K(w,Q,st){if(w==null)return w;var nt=[],ht=0;return Zt(w,nt,"","",function(It){return Q.call(st,It,ht++)}),nt}function rt(w){if(w._status===-1){var Q=w._result;Q=Q(),Q.then(function(st){(w._status===0||w._status===-1)&&(w._status=1,w._result=st)},function(st){(w._status===0||w._status===-1)&&(w._status=2,w._result=st)}),w._status===-1&&(w._status=0,w._result=Q)}if(w._status===1)return w._result.default;throw w._result}var dt=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)};function Pt(){}return Rt.Children={map:K,forEach:function(w,Q,st){K(w,function(){Q.apply(this,arguments)},st)},count:function(w){var Q=0;return K(w,function(){Q++}),Q},toArray:function(w){return K(w,function(Q){return Q})||[]},only:function(w){if(!C(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},Rt.Component=F,Rt.Fragment=n,Rt.Profiler=o,Rt.PureComponent=it,Rt.StrictMode=s,Rt.Suspense=y,Rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ct,Rt.__COMPILER_RUNTIME={__proto__:null,c:function(w){return ct.H.useMemoCache(w)}},Rt.cache=function(w){return function(){return w.apply(null,arguments)}},Rt.cloneElement=function(w,Q,st){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var nt=H({},w.props),ht=w.key,It=void 0;if(Q!=null)for(yt in Q.ref!==void 0&&(It=void 0),Q.key!==void 0&&(ht=""+Q.key),Q)!bt.call(Q,yt)||yt==="key"||yt==="__self"||yt==="__source"||yt==="ref"&&Q.ref===void 0||(nt[yt]=Q[yt]);var yt=arguments.length-2;if(yt===1)nt.children=st;else if(1<yt){for(var _e=Array(yt),Ft=0;Ft<yt;Ft++)_e[Ft]=arguments[Ft+2];nt.children=_e}return O(w.type,ht,void 0,void 0,It,nt)},Rt.createContext=function(w){return w={$$typeof:f,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:u,_context:w},w},Rt.createElement=function(w,Q,st){var nt,ht={},It=null;if(Q!=null)for(nt in Q.key!==void 0&&(It=""+Q.key),Q)bt.call(Q,nt)&&nt!=="key"&&nt!=="__self"&&nt!=="__source"&&(ht[nt]=Q[nt]);var yt=arguments.length-2;if(yt===1)ht.children=st;else if(1<yt){for(var _e=Array(yt),Ft=0;Ft<yt;Ft++)_e[Ft]=arguments[Ft+2];ht.children=_e}if(w&&w.defaultProps)for(nt in yt=w.defaultProps,yt)ht[nt]===void 0&&(ht[nt]=yt[nt]);return O(w,It,void 0,void 0,null,ht)},Rt.createRef=function(){return{current:null}},Rt.forwardRef=function(w){return{$$typeof:g,render:w}},Rt.isValidElement=C,Rt.lazy=function(w){return{$$typeof:E,_payload:{_status:-1,_result:w},_init:rt}},Rt.memo=function(w,Q){return{$$typeof:p,type:w,compare:Q===void 0?null:Q}},Rt.startTransition=function(w){var Q=ct.T,st={};ct.T=st;try{var nt=w(),ht=ct.S;ht!==null&&ht(st,nt),typeof nt=="object"&&nt!==null&&typeof nt.then=="function"&&nt.then(Pt,dt)}catch(It){dt(It)}finally{ct.T=Q}},Rt.unstable_useCacheRefresh=function(){return ct.H.useCacheRefresh()},Rt.use=function(w){return ct.H.use(w)},Rt.useActionState=function(w,Q,st){return ct.H.useActionState(w,Q,st)},Rt.useCallback=function(w,Q){return ct.H.useCallback(w,Q)},Rt.useContext=function(w){return ct.H.useContext(w)},Rt.useDebugValue=function(){},Rt.useDeferredValue=function(w,Q){return ct.H.useDeferredValue(w,Q)},Rt.useEffect=function(w,Q,st){var nt=ct.H;if(typeof st=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return nt.useEffect(w,Q)},Rt.useId=function(){return ct.H.useId()},Rt.useImperativeHandle=function(w,Q,st){return ct.H.useImperativeHandle(w,Q,st)},Rt.useInsertionEffect=function(w,Q){return ct.H.useInsertionEffect(w,Q)},Rt.useLayoutEffect=function(w,Q){return ct.H.useLayoutEffect(w,Q)},Rt.useMemo=function(w,Q){return ct.H.useMemo(w,Q)},Rt.useOptimistic=function(w,Q){return ct.H.useOptimistic(w,Q)},Rt.useReducer=function(w,Q,st){return ct.H.useReducer(w,Q,st)},Rt.useRef=function(w){return ct.H.useRef(w)},Rt.useState=function(w){return ct.H.useState(w)},Rt.useSyncExternalStore=function(w,Q,st){return ct.H.useSyncExternalStore(w,Q,st)},Rt.useTransition=function(){return ct.H.useTransition()},Rt.version="19.1.1",Rt}var Q_;function Mm(){return Q_||(Q_=1,zd.exports=Tb()),zd.exports}var re=Mm();const Eb=GT(re);var jd={exports:{}},Sl={},Bd={exports:{}},qd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K_;function Ab(){return K_||(K_=1,(function(r){function t(K,rt){var dt=K.length;K.push(rt);t:for(;0<dt;){var Pt=dt-1>>>1,w=K[Pt];if(0<o(w,rt))K[Pt]=rt,K[dt]=w,dt=Pt;else break t}}function n(K){return K.length===0?null:K[0]}function s(K){if(K.length===0)return null;var rt=K[0],dt=K.pop();if(dt!==rt){K[0]=dt;t:for(var Pt=0,w=K.length,Q=w>>>1;Pt<Q;){var st=2*(Pt+1)-1,nt=K[st],ht=st+1,It=K[ht];if(0>o(nt,dt))ht<w&&0>o(It,nt)?(K[Pt]=It,K[ht]=dt,Pt=ht):(K[Pt]=nt,K[st]=dt,Pt=st);else if(ht<w&&0>o(It,dt))K[Pt]=It,K[ht]=dt,Pt=ht;else break t}}return rt}function o(K,rt){var dt=K.sortIndex-rt.sortIndex;return dt!==0?dt:K.id-rt.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var f=Date,g=f.now();r.unstable_now=function(){return f.now()-g}}var y=[],p=[],E=1,b=null,D=3,q=!1,H=!1,$=!1,F=!1,tt=typeof setTimeout=="function"?setTimeout:null,it=typeof clearTimeout=="function"?clearTimeout:null,ot=typeof setImmediate<"u"?setImmediate:null;function St(K){for(var rt=n(p);rt!==null;){if(rt.callback===null)s(p);else if(rt.startTime<=K)s(p),rt.sortIndex=rt.expirationTime,t(y,rt);else break;rt=n(p)}}function ct(K){if($=!1,St(K),!H)if(n(y)!==null)H=!0,bt||(bt=!0,P());else{var rt=n(p);rt!==null&&Zt(ct,rt.startTime-K)}}var bt=!1,O=-1,S=5,C=-1;function V(){return F?!0:!(r.unstable_now()-C<S)}function N(){if(F=!1,bt){var K=r.unstable_now();C=K;var rt=!0;try{t:{H=!1,$&&($=!1,it(O),O=-1),q=!0;var dt=D;try{e:{for(St(K),b=n(y);b!==null&&!(b.expirationTime>K&&V());){var Pt=b.callback;if(typeof Pt=="function"){b.callback=null,D=b.priorityLevel;var w=Pt(b.expirationTime<=K);if(K=r.unstable_now(),typeof w=="function"){b.callback=w,St(K),rt=!0;break e}b===n(y)&&s(y),St(K)}else s(y);b=n(y)}if(b!==null)rt=!0;else{var Q=n(p);Q!==null&&Zt(ct,Q.startTime-K),rt=!1}}break t}finally{b=null,D=dt,q=!1}rt=void 0}}finally{rt?P():bt=!1}}}var P;if(typeof ot=="function")P=function(){ot(N)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,ne=I.port2;I.port1.onmessage=N,P=function(){ne.postMessage(null)}}else P=function(){tt(N,0)};function Zt(K,rt){O=tt(function(){K(r.unstable_now())},rt)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(K){K.callback=null},r.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<K?Math.floor(1e3/K):5},r.unstable_getCurrentPriorityLevel=function(){return D},r.unstable_next=function(K){switch(D){case 1:case 2:case 3:var rt=3;break;default:rt=D}var dt=D;D=rt;try{return K()}finally{D=dt}},r.unstable_requestPaint=function(){F=!0},r.unstable_runWithPriority=function(K,rt){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var dt=D;D=K;try{return rt()}finally{D=dt}},r.unstable_scheduleCallback=function(K,rt,dt){var Pt=r.unstable_now();switch(typeof dt=="object"&&dt!==null?(dt=dt.delay,dt=typeof dt=="number"&&0<dt?Pt+dt:Pt):dt=Pt,K){case 1:var w=-1;break;case 2:w=250;break;case 5:w=1073741823;break;case 4:w=1e4;break;default:w=5e3}return w=dt+w,K={id:E++,callback:rt,priorityLevel:K,startTime:dt,expirationTime:w,sortIndex:-1},dt>Pt?(K.sortIndex=dt,t(p,K),n(y)===null&&K===n(p)&&($?(it(O),O=-1):$=!0,Zt(ct,dt-Pt))):(K.sortIndex=w,t(y,K),H||q||(H=!0,bt||(bt=!0,P()))),K},r.unstable_shouldYield=V,r.unstable_wrapCallback=function(K){var rt=D;return function(){var dt=D;D=rt;try{return K.apply(this,arguments)}finally{D=dt}}}})(qd)),qd}var Y_;function Sb(){return Y_||(Y_=1,Bd.exports=Ab()),Bd.exports}var Hd={exports:{}},Ke={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $_;function bb(){if($_)return Ke;$_=1;var r=Mm();function t(y){var p="https://react.dev/errors/"+y;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)p+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+y+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(y,p,E){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:b==null?null:""+b,children:y,containerInfo:p,implementation:E}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(y,p){if(y==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ke.createPortal=function(y,p){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(y,p,null,E)},Ke.flushSync=function(y){var p=f.T,E=s.p;try{if(f.T=null,s.p=2,y)return y()}finally{f.T=p,s.p=E,s.d.f()}},Ke.preconnect=function(y,p){typeof y=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(y,p))},Ke.prefetchDNS=function(y){typeof y=="string"&&s.d.D(y)},Ke.preinit=function(y,p){if(typeof y=="string"&&p&&typeof p.as=="string"){var E=p.as,b=g(E,p.crossOrigin),D=typeof p.integrity=="string"?p.integrity:void 0,q=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;E==="style"?s.d.S(y,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:b,integrity:D,fetchPriority:q}):E==="script"&&s.d.X(y,{crossOrigin:b,integrity:D,fetchPriority:q,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ke.preinitModule=function(y,p){if(typeof y=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var E=g(p.as,p.crossOrigin);s.d.M(y,{crossOrigin:E,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(y)},Ke.preload=function(y,p){if(typeof y=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var E=p.as,b=g(E,p.crossOrigin);s.d.L(y,E,{crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ke.preloadModule=function(y,p){if(typeof y=="string")if(p){var E=g(p.as,p.crossOrigin);s.d.m(y,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:E,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(y)},Ke.requestFormReset=function(y){s.d.r(y)},Ke.unstable_batchedUpdates=function(y,p){return y(p)},Ke.useFormState=function(y,p,E){return f.H.useFormState(y,p,E)},Ke.useFormStatus=function(){return f.H.useHostTransitionStatus()},Ke.version="19.1.1",Ke}var X_;function wb(){if(X_)return Hd.exports;X_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Hd.exports=bb(),Hd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z_;function Rb(){if(Z_)return Sl;Z_=1;var r=Sb(),t=Mm(),n=wb();function s(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var i=e,a=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(a=i.return),e=i.return;while(e)}return i.tag===3?a:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function g(e){if(u(e)!==e)throw Error(s(188))}function y(e){var i=e.alternate;if(!i){if(i=u(e),i===null)throw Error(s(188));return i!==e?null:e}for(var a=e,l=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return g(h),e;if(d===l)return g(h),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var v=!1,T=h.child;T;){if(T===a){v=!0,a=h,l=d;break}if(T===l){v=!0,l=h,a=d;break}T=T.sibling}if(!v){for(T=d.child;T;){if(T===a){v=!0,a=d,l=h;break}if(T===l){v=!0,l=d,a=h;break}T=T.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:i}function p(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=p(e),i!==null)return i;e=e.sibling}return null}var E=Object.assign,b=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),q=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),tt=Symbol.for("react.provider"),it=Symbol.for("react.consumer"),ot=Symbol.for("react.context"),St=Symbol.for("react.forward_ref"),ct=Symbol.for("react.suspense"),bt=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),V=Symbol.for("react.memo_cache_sentinel"),N=Symbol.iterator;function P(e){return e===null||typeof e!="object"?null:(e=N&&e[N]||e["@@iterator"],typeof e=="function"?e:null)}var I=Symbol.for("react.client.reference");function ne(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===I?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case H:return"Fragment";case F:return"Profiler";case $:return"StrictMode";case ct:return"Suspense";case bt:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case q:return"Portal";case ot:return(e.displayName||"Context")+".Provider";case it:return(e._context.displayName||"Context")+".Consumer";case St:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return i=e.displayName||null,i!==null?i:ne(e.type)||"Memo";case S:i=e._payload,e=e._init;try{return ne(e(i))}catch{}}return null}var Zt=Array.isArray,K=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,rt=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,dt={pending:!1,data:null,method:null,action:null},Pt=[],w=-1;function Q(e){return{current:e}}function st(e){0>w||(e.current=Pt[w],Pt[w]=null,w--)}function nt(e,i){w++,Pt[w]=e.current,e.current=i}var ht=Q(null),It=Q(null),yt=Q(null),_e=Q(null);function Ft(e,i){switch(nt(yt,i),nt(It,e),nt(ht,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?y_(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=y_(i),e=__(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}st(ht),nt(ht,e)}function kn(){st(ht),st(It),st(yt)}function po(e){e.memoizedState!==null&&nt(_e,e);var i=ht.current,a=__(i,e.type);i!==a&&(nt(It,e),nt(ht,a))}function ta(e){It.current===e&&(st(ht),st(It)),_e.current===e&&(st(_e),yl._currentValue=dt)}var ea=Object.prototype.hasOwnProperty,is=r.unstable_scheduleCallback,na=r.unstable_cancelCallback,Lh=r.unstable_shouldYield,yo=r.unstable_requestPaint,rn=r.unstable_now,su=r.unstable_getCurrentPriorityLevel,be=r.unstable_ImmediatePriority,Ne=r.unstable_UserBlockingPriority,Ti=r.unstable_NormalPriority,zh=r.unstable_LowPriority,_o=r.unstable_IdlePriority,jh=r.log,rs=r.unstable_setDisableYieldValue,Zi=null,Fe=null;function Sn(e){if(typeof jh=="function"&&rs(e),Fe&&typeof Fe.setStrictMode=="function")try{Fe.setStrictMode(Zi,e)}catch{}}var Ze=Math.clz32?Math.clz32:ou,Bh=Math.log,au=Math.LN2;function ou(e){return e>>>=0,e===0?32:31-(Bh(e)/au|0)|0}var Jn=256,Ji=4194304;function Un(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function bn(e,i,a){var l=e.pendingLanes;if(l===0)return 0;var h=0,d=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var T=l&134217727;return T!==0?(l=T&~d,l!==0?h=Un(l):(v&=T,v!==0?h=Un(v):a||(a=T&~e,a!==0&&(h=Un(a))))):(T=l&~d,T!==0?h=Un(T):v!==0?h=Un(v):a||(a=l&~e,a!==0&&(h=Un(a)))),h===0?0:i!==0&&i!==h&&(i&d)===0&&(d=h&-h,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:h}function Wi(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function ia(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vo(){var e=Jn;return Jn<<=1,(Jn&4194048)===0&&(Jn=256),e}function tr(){var e=Ji;return Ji<<=1,(Ji&62914560)===0&&(Ji=4194304),e}function ra(e){for(var i=[],a=0;31>a;a++)i.push(e);return i}function ce(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function lu(e,i,a,l,h,d){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,R=e.expirationTimes,L=e.hiddenUpdates;for(a=v&~a;0<a;){var Y=31-Ze(a),J=1<<Y;T[Y]=0,R[Y]=-1;var z=L[Y];if(z!==null)for(L[Y]=null,Y=0;Y<z.length;Y++){var j=z[Y];j!==null&&(j.lane&=-536870913)}a&=~J}l!==0&&er(e,l,0),d!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=d&~(v&~i))}function er(e,i,a){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-Ze(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194090}function nr(e,i){var a=e.entangledLanes|=i;for(e=e.entanglements;a;){var l=31-Ze(a),h=1<<l;h&i|e[l]&i&&(e[l]|=i),a&=~h}}function To(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Eo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ei(){var e=rt.p;return e!==0?e:(e=window.event,e===void 0?32:U_(e.type))}function qh(e,i){var a=rt.p;try{return rt.p=e,i()}finally{rt.p=a}}var Wn=Math.random().toString(36).slice(2),he="__reactFiber$"+Wn,Ue="__reactProps$"+Wn,Ai="__reactContainer$"+Wn,ss="__reactEvents$"+Wn,as="__reactListeners$"+Wn,Hh="__reactHandles$"+Wn,Ln="__reactResources$"+Wn,ir="__reactMarker$"+Wn;function sa(e){delete e[he],delete e[Ue],delete e[ss],delete e[as],delete e[Hh]}function ti(e){var i=e[he];if(i)return i;for(var a=e.parentNode;a;){if(i=a[Ai]||a[he]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(e=A_(e);e!==null;){if(a=e[he])return a;e=A_(e)}return i}e=a,a=e.parentNode}return null}function ei(e){if(e=e[he]||e[Ai]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function rr(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(s(33))}function sr(e){var i=e[Ln];return i||(i=e[Ln]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function fe(e){e[ir]=!0}var uu=new Set,os={};function ni(e,i){ii(e,i),ii(e+"Capture",i)}function ii(e,i){for(os[e]=i,e=0;e<i.length;e++)uu.add(i[e])}var ls=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ri={},aa={};function Fh(e){return ea.call(aa,e)?!0:ea.call(ri,e)?!1:ls.test(e)?aa[e]=!0:(ri[e]=!0,!1)}function us(e,i,a){if(Fh(i))if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+a)}}function cs(e,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+a)}}function wn(e,i,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(i,a,""+l)}}var hs,oa;function Si(e){if(hs===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);hs=i&&i[1]||"",oa=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+hs+e+oa}var la=!1;function ua(e,i){if(!e||la)return"";la=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(j){var z=j}Reflect.construct(e,[],J)}else{try{J.call()}catch(j){z=j}e.call(J.prototype)}}else{try{throw Error()}catch(j){z=j}(J=e())&&typeof J.catch=="function"&&J.catch(function(){})}}catch(j){if(j&&z&&typeof j.stack=="string")return[j.stack,z.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),v=d[0],T=d[1];if(v&&T){var R=v.split(`
`),L=T.split(`
`);for(h=l=0;l<R.length&&!R[l].includes("DetermineComponentFrameRoot");)l++;for(;h<L.length&&!L[h].includes("DetermineComponentFrameRoot");)h++;if(l===R.length||h===L.length)for(l=R.length-1,h=L.length-1;1<=l&&0<=h&&R[l]!==L[h];)h--;for(;1<=l&&0<=h;l--,h--)if(R[l]!==L[h]){if(l!==1||h!==1)do if(l--,h--,0>h||R[l]!==L[h]){var Y=`
`+R[l].replace(" at new "," at ");return e.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",e.displayName)),Y}while(1<=l&&0<=h);break}}}finally{la=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Si(a):""}function Gh(e){switch(e.tag){case 26:case 27:case 5:return Si(e.type);case 16:return Si("Lazy");case 13:return Si("Suspense");case 19:return Si("SuspenseList");case 0:case 15:return ua(e.type,!1);case 11:return ua(e.type.render,!1);case 1:return ua(e.type,!0);case 31:return Si("Activity");default:return""}}function zn(e){try{var i="";do i+=Gh(e),e=e.return;while(e);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function se(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ar(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function fs(e){var i=ar(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),l=""+e[i];if(!e.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(v){l=""+v,d.call(this,v)}}),Object.defineProperty(e,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function or(e){e._valueTracker||(e._valueTracker=fs(e))}function Gt(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return e&&(l=ar(e)?e.checked?"true":"false":e.value),e=l,e!==a?(i.setValue(e),!0):!1}function bi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ds=/[\n"\\]/g;function Oe(e){return e.replace(ds,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Ao(e,i,a,l,h,d,v,T){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),i!=null?v==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+se(i)):e.value!==""+se(i)&&(e.value=""+se(i)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),i!=null?bo(e,v,se(i)):a!=null?bo(e,v,se(a)):l!=null&&e.removeAttribute("value"),h==null&&d!=null&&(e.defaultChecked=!!d),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+se(T):e.removeAttribute("name")}function So(e,i,a,l,h,d,v,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+se(a):"",i=i!=null?""+se(i):a,T||i===e.value||(e.value=i),e.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=T?e.checked:!!l,e.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v)}function bo(e,i,a){i==="number"&&bi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function lr(e,i,a,l){if(e=e.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<e.length;a++)h=i.hasOwnProperty("$"+e[a].value),e[a].selected!==h&&(e[a].selected=h),h&&l&&(e[a].defaultSelected=!0)}else{for(a=""+se(a),i=null,h=0;h<e.length;h++){if(e[h].value===a){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function cu(e,i,a){if(i!=null&&(i=""+se(i),i!==e.value&&(e.value=i),a==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=a!=null?""+se(a):""}function hu(e,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(Zt(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=se(i),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function Rn(e,i){if(i){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=i;return}}e.textContent=i}var wi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wo(e,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,a):typeof a!="number"||a===0||wi.has(i)?i==="float"?e.cssFloat=a:e[i]=(""+a).trim():e[i]=a+"px"}function Ro(e,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&a[h]!==l&&wo(e,h,l)}else for(var d in i)i.hasOwnProperty(d)&&wo(e,d,i[d])}function ca(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fu=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),du=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function jn(e){return du.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Io=null;function Co(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ur=null,Je=null;function mu(e){var i=ei(e);if(i&&(e=i.stateNode)){var a=e[Ue]||null;t:switch(e=i.stateNode,i.type){case"input":if(Ao(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Oe(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==e&&l.form===e.form){var h=l[Ue]||null;if(!h)throw Error(s(90));Ao(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===e.form&&Gt(l)}break t;case"textarea":cu(e,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&lr(e,!!a.multiple,i,!1)}}}var ms=!1;function gs(e,i,a){if(ms)return e(i,a);ms=!0;try{var l=e(i);return l}finally{if(ms=!1,(ur!==null||Je!==null)&&(ic(),ur&&(i=ur,e=Je,Je=ur=null,mu(i),e)))for(i=0;i<e.length;i++)mu(e[i])}}function cr(e,i){var a=e.stateNode;if(a===null)return null;var l=a[Ue]||null;if(l===null)return null;a=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var We=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ri=!1;if(We)try{var hr={};Object.defineProperty(hr,"passive",{get:function(){Ri=!0}}),window.addEventListener("test",hr,hr),window.removeEventListener("test",hr,hr)}catch{Ri=!1}var In=null,Jt=null,ha=null;function gu(){if(ha)return ha;var e,i=Jt,a=i.length,l,h="value"in In?In.value:In.textContent,d=h.length;for(e=0;e<a&&i[e]===h[e];e++);var v=a-e;for(l=1;l<=v&&i[a-l]===h[d-l];l++);return ha=h.slice(e,1<l?1-l:void 0)}function ps(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function ys(){return!0}function Do(){return!1}function we(e){function i(a,l,h,d,v){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ys:Do,this.isPropagationStopped=Do,this}return E(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ys)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ys)},persist:function(){},isPersistent:ys}),i}var Ge={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_s=we(Ge),vs=E({},Ge,{view:0,detail:0}),Ts=we(vs),fa,Es,si,As=E({},vs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ga,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==si&&(si&&e.type==="mousemove"?(fa=e.screenX-si.screenX,Es=e.screenY-si.screenY):Es=fa=0,si=e),fa)},movementY:function(e){return"movementY"in e?e.movementY:Es}}),Ss=we(As),Qh=E({},As,{dataTransfer:0}),pu=we(Qh),bs=E({},vs,{relatedTarget:0}),da=we(bs),yu=E({},Ge,{animationName:0,elapsedTime:0,pseudoElement:0}),No=we(yu),Oo=E({},Ge,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_u=we(Oo),ma=E({},Ge,{data:0}),Mo=we(ma),vu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ii={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Eu(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Tu[e])?!!i[e]:!1}function ga(){return Eu}var Au=E({},vs,{key:function(e){if(e.key){var i=vu[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=ps(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ii[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ga,charCode:function(e){return e.type==="keypress"?ps(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ps(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),pa=we(Au),tn=E({},As,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vo=we(tn),Su=E({},vs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ga}),fr=we(Su),c=E({},Ge,{propertyName:0,elapsedTime:0,pseudoElement:0}),m=we(c),_=E({},As,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),A=we(_),U=E({},Ge,{newState:0,oldState:0}),B=we(U),et=[9,13,27,32],wt=We&&"CompositionEvent"in window,te=null;We&&"documentMode"in document&&(te=document.documentMode);var Bt=We&&"TextEvent"in window&&!te,de=We&&(!wt||te&&8<te&&11>=te),hn=" ",ai=!1;function Bn(e,i){switch(e){case"keyup":return et.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qn(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hn=!1;function xo(e,i){switch(e){case"compositionend":return qn(i);case"keypress":return i.which!==32?null:(ai=!0,hn);case"textInput":return e=i.data,e===hn&&ai?null:e;default:return null}}function GA(e,i){if(Hn)return e==="compositionend"||!wt&&Bn(e,i)?(e=gu(),ha=Jt=In=null,Hn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return de&&i.locale!=="ko"?null:i.data;default:return null}}var QA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Og(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!QA[e.type]:i==="textarea"}function Mg(e,i,a,l){ur?Je?Je.push(l):Je=[l]:ur=l,i=uc(i,"onChange"),0<i.length&&(a=new _s("onChange","change",null,a,l),e.push({event:a,listeners:i}))}var Po=null,ko=null;function KA(e){f_(e,0)}function bu(e){var i=rr(e);if(Gt(i))return e}function Vg(e,i){if(e==="change")return i}var xg=!1;if(We){var Kh;if(We){var Yh="oninput"in document;if(!Yh){var Pg=document.createElement("div");Pg.setAttribute("oninput","return;"),Yh=typeof Pg.oninput=="function"}Kh=Yh}else Kh=!1;xg=Kh&&(!document.documentMode||9<document.documentMode)}function kg(){Po&&(Po.detachEvent("onpropertychange",Ug),ko=Po=null)}function Ug(e){if(e.propertyName==="value"&&bu(ko)){var i=[];Mg(i,ko,e,Co(e)),gs(KA,i)}}function YA(e,i,a){e==="focusin"?(kg(),Po=i,ko=a,Po.attachEvent("onpropertychange",Ug)):e==="focusout"&&kg()}function $A(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bu(ko)}function XA(e,i){if(e==="click")return bu(i)}function ZA(e,i){if(e==="input"||e==="change")return bu(i)}function JA(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var fn=typeof Object.is=="function"?Object.is:JA;function Uo(e,i){if(fn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var a=Object.keys(e),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!ea.call(i,h)||!fn(e[h],i[h]))return!1}return!0}function Lg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zg(e,i){var a=Lg(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=i&&l>=i)return{node:a,offset:i-e};e=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Lg(a)}}function jg(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?jg(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Bg(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=bi(e.document);i instanceof e.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)e=i.contentWindow;else break;i=bi(e.document)}return i}function $h(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var WA=We&&"documentMode"in document&&11>=document.documentMode,ya=null,Xh=null,Lo=null,Zh=!1;function qg(e,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Zh||ya==null||ya!==bi(l)||(l=ya,"selectionStart"in l&&$h(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Lo&&Uo(Lo,l)||(Lo=l,l=uc(Xh,"onSelect"),0<l.length&&(i=new _s("onSelect","select",null,i,a),e.push({event:i,listeners:l}),i.target=ya)))}function ws(e,i){var a={};return a[e.toLowerCase()]=i.toLowerCase(),a["Webkit"+e]="webkit"+i,a["Moz"+e]="moz"+i,a}var _a={animationend:ws("Animation","AnimationEnd"),animationiteration:ws("Animation","AnimationIteration"),animationstart:ws("Animation","AnimationStart"),transitionrun:ws("Transition","TransitionRun"),transitionstart:ws("Transition","TransitionStart"),transitioncancel:ws("Transition","TransitionCancel"),transitionend:ws("Transition","TransitionEnd")},Jh={},Hg={};We&&(Hg=document.createElement("div").style,"AnimationEvent"in window||(delete _a.animationend.animation,delete _a.animationiteration.animation,delete _a.animationstart.animation),"TransitionEvent"in window||delete _a.transitionend.transition);function Rs(e){if(Jh[e])return Jh[e];if(!_a[e])return e;var i=_a[e],a;for(a in i)if(i.hasOwnProperty(a)&&a in Hg)return Jh[e]=i[a];return e}var Fg=Rs("animationend"),Gg=Rs("animationiteration"),Qg=Rs("animationstart"),tS=Rs("transitionrun"),eS=Rs("transitionstart"),nS=Rs("transitioncancel"),Kg=Rs("transitionend"),Yg=new Map,Wh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Wh.push("scrollEnd");function Fn(e,i){Yg.set(e,i),ni(i,[e])}var $g=new WeakMap;function Cn(e,i){if(typeof e=="object"&&e!==null){var a=$g.get(e);return a!==void 0?a:(i={value:e,source:i,stack:zn(i)},$g.set(e,i),i)}return{value:e,source:i,stack:zn(i)}}var Dn=[],va=0,tf=0;function wu(){for(var e=va,i=tf=va=0;i<e;){var a=Dn[i];Dn[i++]=null;var l=Dn[i];Dn[i++]=null;var h=Dn[i];Dn[i++]=null;var d=Dn[i];if(Dn[i++]=null,l!==null&&h!==null){var v=l.pending;v===null?h.next=h:(h.next=v.next,v.next=h),l.pending=h}d!==0&&Xg(a,h,d)}}function Ru(e,i,a,l){Dn[va++]=e,Dn[va++]=i,Dn[va++]=a,Dn[va++]=l,tf|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function ef(e,i,a,l){return Ru(e,i,a,l),Iu(e)}function Ta(e,i){return Ru(e,null,null,i),Iu(e)}function Xg(e,i,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=e.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(h=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,h&&i!==null&&(h=31-Ze(a),e=d.hiddenUpdates,l=e[h],l===null?e[h]=[i]:l.push(i),i.lane=a|536870912),d):null}function Iu(e){if(50<ul)throw ul=0,ld=null,Error(s(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Ea={};function iS(e,i,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dn(e,i,a,l){return new iS(e,i,a,l)}function nf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ci(e,i){var a=e.alternate;return a===null?(a=dn(e.tag,i,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=i,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,i=e.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Zg(e,i){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,i=a.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Cu(e,i,a,l,h,d){var v=0;if(l=e,typeof e=="function")nf(e)&&(v=1);else if(typeof e=="string")v=sb(e,a,ht.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=dn(31,a,i,h),e.elementType=C,e.lanes=d,e;case H:return Is(a.children,h,d,i);case $:v=8,h|=24;break;case F:return e=dn(12,a,i,h|2),e.elementType=F,e.lanes=d,e;case ct:return e=dn(13,a,i,h),e.elementType=ct,e.lanes=d,e;case bt:return e=dn(19,a,i,h),e.elementType=bt,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case tt:case ot:v=10;break t;case it:v=9;break t;case St:v=11;break t;case O:v=14;break t;case S:v=16,l=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),l=null}return i=dn(v,a,i,h),i.elementType=e,i.type=l,i.lanes=d,i}function Is(e,i,a,l){return e=dn(7,e,l,i),e.lanes=a,e}function rf(e,i,a){return e=dn(6,e,null,i),e.lanes=a,e}function sf(e,i,a){return i=dn(4,e.children!==null?e.children:[],e.key,i),i.lanes=a,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var Aa=[],Sa=0,Du=null,Nu=0,Nn=[],On=0,Cs=null,Di=1,Ni="";function Ds(e,i){Aa[Sa++]=Nu,Aa[Sa++]=Du,Du=e,Nu=i}function Jg(e,i,a){Nn[On++]=Di,Nn[On++]=Ni,Nn[On++]=Cs,Cs=e;var l=Di;e=Ni;var h=32-Ze(l)-1;l&=~(1<<h),a+=1;var d=32-Ze(i)+h;if(30<d){var v=h-h%5;d=(l&(1<<v)-1).toString(32),l>>=v,h-=v,Di=1<<32-Ze(i)+h|a<<h|l,Ni=d+e}else Di=1<<d|a<<h|l,Ni=e}function af(e){e.return!==null&&(Ds(e,1),Jg(e,1,0))}function of(e){for(;e===Du;)Du=Aa[--Sa],Aa[Sa]=null,Nu=Aa[--Sa],Aa[Sa]=null;for(;e===Cs;)Cs=Nn[--On],Nn[On]=null,Ni=Nn[--On],Nn[On]=null,Di=Nn[--On],Nn[On]=null}var en=null,le=null,jt=!1,Ns=null,oi=!1,lf=Error(s(519));function Os(e){var i=Error(s(418,""));throw Bo(Cn(i,e)),lf}function Wg(e){var i=e.stateNode,a=e.type,l=e.memoizedProps;switch(i[he]=e,i[Ue]=l,a){case"dialog":Ot("cancel",i),Ot("close",i);break;case"iframe":case"object":case"embed":Ot("load",i);break;case"video":case"audio":for(a=0;a<hl.length;a++)Ot(hl[a],i);break;case"source":Ot("error",i);break;case"img":case"image":case"link":Ot("error",i),Ot("load",i);break;case"details":Ot("toggle",i);break;case"input":Ot("invalid",i),So(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),or(i);break;case"select":Ot("invalid",i);break;case"textarea":Ot("invalid",i),hu(i,l.value,l.defaultValue,l.children),or(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||p_(i.textContent,a)?(l.popover!=null&&(Ot("beforetoggle",i),Ot("toggle",i)),l.onScroll!=null&&Ot("scroll",i),l.onScrollEnd!=null&&Ot("scrollend",i),l.onClick!=null&&(i.onclick=cc),i=!0):i=!1,i||Os(e)}function tp(e){for(en=e.return;en;)switch(en.tag){case 5:case 13:oi=!1;return;case 27:case 3:oi=!0;return;default:en=en.return}}function zo(e){if(e!==en)return!1;if(!jt)return tp(e),jt=!0,!1;var i=e.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||bd(e.type,e.memoizedProps)),a=!a),a&&le&&Os(e),tp(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(i===0){le=Qn(e.nextSibling);break t}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;e=e.nextSibling}le=null}}else i===27?(i=le,Cr(e.type)?(e=Cd,Cd=null,le=e):le=i):le=en?Qn(e.stateNode.nextSibling):null;return!0}function jo(){le=en=null,jt=!1}function ep(){var e=Ns;return e!==null&&(on===null?on=e:on.push.apply(on,e),Ns=null),e}function Bo(e){Ns===null?Ns=[e]:Ns.push(e)}var uf=Q(null),Ms=null,Oi=null;function dr(e,i,a){nt(uf,i._currentValue),i._currentValue=a}function Mi(e){e._currentValue=uf.current,st(uf)}function cf(e,i,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===a)break;e=e.return}}function hf(e,i,a,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var d=h.dependencies;if(d!==null){var v=h.child;d=d.firstContext;t:for(;d!==null;){var T=d;d=h;for(var R=0;R<i.length;R++)if(T.context===i[R]){d.lanes|=a,T=d.alternate,T!==null&&(T.lanes|=a),cf(d.return,a,e),l||(v=null);break t}d=T.next}}else if(h.tag===18){if(v=h.return,v===null)throw Error(s(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),cf(v,a,e),v=null}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===e){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}}function qo(e,i,a,l){e=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var v=h.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var T=h.type;fn(h.pendingProps.value,v.value)||(e!==null?e.push(T):e=[T])}}else if(h===_e.current){if(v=h.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(yl):e=[yl])}h=h.return}e!==null&&hf(i,e,a,l),i.flags|=262144}function Ou(e){for(e=e.firstContext;e!==null;){if(!fn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Vs(e){Ms=e,Oi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Qe(e){return np(Ms,e)}function Mu(e,i){return Ms===null&&Vs(e),np(e,i)}function np(e,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Oi===null){if(e===null)throw Error(s(308));Oi=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Oi=Oi.next=i;return a}var rS=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(a){return a()})}},sS=r.unstable_scheduleCallback,aS=r.unstable_NormalPriority,Re={$$typeof:ot,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ff(){return{controller:new rS,data:new Map,refCount:0}}function Ho(e){e.refCount--,e.refCount===0&&sS(aS,function(){e.controller.abort()})}var Fo=null,df=0,ba=0,wa=null;function oS(e,i){if(Fo===null){var a=Fo=[];df=0,ba=gd(),wa={status:"pending",value:void 0,then:function(l){a.push(l)}}}return df++,i.then(ip,ip),i}function ip(){if(--df===0&&Fo!==null){wa!==null&&(wa.status="fulfilled");var e=Fo;Fo=null,ba=0,wa=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function lS(e,i){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var rp=K.S;K.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&oS(e,i),rp!==null&&rp(e,i)};var xs=Q(null);function mf(){var e=xs.current;return e!==null?e:Wt.pooledCache}function Vu(e,i){i===null?nt(xs,xs.current):nt(xs,i.pool)}function sp(){var e=mf();return e===null?null:{parent:Re._currentValue,pool:e}}var Go=Error(s(460)),ap=Error(s(474)),xu=Error(s(542)),gf={then:function(){}};function op(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Pu(){}function lp(e,i,a){switch(a=e[a],a===void 0?e.push(i):a!==i&&(i.then(Pu,Pu),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,cp(e),e;default:if(typeof i.status=="string")i.then(Pu,Pu);else{if(e=Wt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,cp(e),e}throw Qo=i,Go}}var Qo=null;function up(){if(Qo===null)throw Error(s(459));var e=Qo;return Qo=null,e}function cp(e){if(e===Go||e===xu)throw Error(s(483))}var mr=!1;function pf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function gr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function pr(e,i,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(qt&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=Iu(e),Xg(e,null,a),i}return Ru(e,l,i,a),Iu(e)}function Ko(e,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,nr(e,a)}}function _f(e,i){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=i:e.next=i,a.lastBaseUpdate=i}var vf=!1;function Yo(){if(vf){var e=wa;if(e!==null)throw e}}function $o(e,i,a,l){vf=!1;var h=e.updateQueue;mr=!1;var d=h.firstBaseUpdate,v=h.lastBaseUpdate,T=h.shared.pending;if(T!==null){h.shared.pending=null;var R=T,L=R.next;R.next=null,v===null?d=L:v.next=L,v=R;var Y=e.alternate;Y!==null&&(Y=Y.updateQueue,T=Y.lastBaseUpdate,T!==v&&(T===null?Y.firstBaseUpdate=L:T.next=L,Y.lastBaseUpdate=R))}if(d!==null){var J=h.baseState;v=0,Y=L=R=null,T=d;do{var z=T.lane&-536870913,j=z!==T.lane;if(j?(kt&z)===z:(l&z)===z){z!==0&&z===ba&&(vf=!0),Y!==null&&(Y=Y.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Tt=e,pt=T;z=i;var Yt=a;switch(pt.tag){case 1:if(Tt=pt.payload,typeof Tt=="function"){J=Tt.call(Yt,J,z);break t}J=Tt;break t;case 3:Tt.flags=Tt.flags&-65537|128;case 0:if(Tt=pt.payload,z=typeof Tt=="function"?Tt.call(Yt,J,z):Tt,z==null)break t;J=E({},J,z);break t;case 2:mr=!0}}z=T.callback,z!==null&&(e.flags|=64,j&&(e.flags|=8192),j=h.callbacks,j===null?h.callbacks=[z]:j.push(z))}else j={lane:z,tag:T.tag,payload:T.payload,callback:T.callback,next:null},Y===null?(L=Y=j,R=J):Y=Y.next=j,v|=z;if(T=T.next,T===null){if(T=h.shared.pending,T===null)break;j=T,T=j.next,j.next=null,h.lastBaseUpdate=j,h.shared.pending=null}}while(!0);Y===null&&(R=J),h.baseState=R,h.firstBaseUpdate=L,h.lastBaseUpdate=Y,d===null&&(h.shared.lanes=0),br|=v,e.lanes=v,e.memoizedState=J}}function hp(e,i){if(typeof e!="function")throw Error(s(191,e));e.call(i)}function fp(e,i){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)hp(a[e],i)}var Ra=Q(null),ku=Q(0);function dp(e,i){e=zi,nt(ku,e),nt(Ra,i),zi=e|i.baseLanes}function Tf(){nt(ku,zi),nt(Ra,Ra.current)}function Ef(){zi=ku.current,st(Ra),st(ku)}var yr=0,Ct=null,Qt=null,ve=null,Uu=!1,Ia=!1,Ps=!1,Lu=0,Xo=0,Ca=null,uS=0;function me(){throw Error(s(321))}function Af(e,i){if(i===null)return!1;for(var a=0;a<i.length&&a<e.length;a++)if(!fn(e[a],i[a]))return!1;return!0}function Sf(e,i,a,l,h,d){return yr=d,Ct=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,K.H=e===null||e.memoizedState===null?Xp:Zp,Ps=!1,d=a(l,h),Ps=!1,Ia&&(d=gp(i,a,l,h)),mp(e),d}function mp(e){K.H=Fu;var i=Qt!==null&&Qt.next!==null;if(yr=0,ve=Qt=Ct=null,Uu=!1,Xo=0,Ca=null,i)throw Error(s(300));e===null||Me||(e=e.dependencies,e!==null&&Ou(e)&&(Me=!0))}function gp(e,i,a,l){Ct=e;var h=0;do{if(Ia&&(Ca=null),Xo=0,Ia=!1,25<=h)throw Error(s(301));if(h+=1,ve=Qt=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}K.H=pS,d=i(a,l)}while(Ia);return d}function cS(){var e=K.H,i=e.useState()[0];return i=typeof i.then=="function"?Zo(i):i,e=e.useState()[0],(Qt!==null?Qt.memoizedState:null)!==e&&(Ct.flags|=1024),i}function bf(){var e=Lu!==0;return Lu=0,e}function wf(e,i,a){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~a}function Rf(e){if(Uu){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Uu=!1}yr=0,ve=Qt=Ct=null,Ia=!1,Xo=Lu=0,Ca=null}function sn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?Ct.memoizedState=ve=e:ve=ve.next=e,ve}function Te(){if(Qt===null){var e=Ct.alternate;e=e!==null?e.memoizedState:null}else e=Qt.next;var i=ve===null?Ct.memoizedState:ve.next;if(i!==null)ve=i,Qt=e;else{if(e===null)throw Ct.alternate===null?Error(s(467)):Error(s(310));Qt=e,e={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},ve===null?Ct.memoizedState=ve=e:ve=ve.next=e}return ve}function If(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Zo(e){var i=Xo;return Xo+=1,Ca===null&&(Ca=[]),e=lp(Ca,e,i),i=Ct,(ve===null?i.memoizedState:ve.next)===null&&(i=i.alternate,K.H=i===null||i.memoizedState===null?Xp:Zp),e}function zu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Zo(e);if(e.$$typeof===ot)return Qe(e)}throw Error(s(438,String(e)))}function Cf(e){var i=null,a=Ct.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=Ct.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=If(),Ct.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(e),l=0;l<e;l++)a[l]=V;return i.index++,a}function Vi(e,i){return typeof i=="function"?i(e):i}function ju(e){var i=Te();return Df(i,Qt,e)}function Df(e,i,a){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=e.baseQueue,d=l.pending;if(d!==null){if(h!==null){var v=h.next;h.next=d.next,d.next=v}i.baseQueue=h=d,l.pending=null}if(d=e.baseState,h===null)e.memoizedState=d;else{i=h.next;var T=v=null,R=null,L=i,Y=!1;do{var J=L.lane&-536870913;if(J!==L.lane?(kt&J)===J:(yr&J)===J){var z=L.revertLane;if(z===0)R!==null&&(R=R.next={lane:0,revertLane:0,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),J===ba&&(Y=!0);else if((yr&z)===z){L=L.next,z===ba&&(Y=!0);continue}else J={lane:0,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},R===null?(T=R=J,v=d):R=R.next=J,Ct.lanes|=z,br|=z;J=L.action,Ps&&a(d,J),d=L.hasEagerState?L.eagerState:a(d,J)}else z={lane:J,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},R===null?(T=R=z,v=d):R=R.next=z,Ct.lanes|=J,br|=J;L=L.next}while(L!==null&&L!==i);if(R===null?v=d:R.next=T,!fn(d,e.memoizedState)&&(Me=!0,Y&&(a=wa,a!==null)))throw a;e.memoizedState=d,e.baseState=v,e.baseQueue=R,l.lastRenderedState=d}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Nf(e){var i=Te(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var l=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var v=h=h.next;do d=e(d,v.action),v=v.next;while(v!==h);fn(d,i.memoizedState)||(Me=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function pp(e,i,a){var l=Ct,h=Te(),d=jt;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var v=!fn((Qt||h).memoizedState,a);v&&(h.memoizedState=a,Me=!0),h=h.queue;var T=vp.bind(null,l,h,e);if(Jo(2048,8,T,[e]),h.getSnapshot!==i||v||ve!==null&&ve.memoizedState.tag&1){if(l.flags|=2048,Da(9,Bu(),_p.bind(null,l,h,a,i),null),Wt===null)throw Error(s(349));d||(yr&124)!==0||yp(l,i,a)}return a}function yp(e,i,a){e.flags|=16384,e={getSnapshot:i,value:a},i=Ct.updateQueue,i===null?(i=If(),Ct.updateQueue=i,i.stores=[e]):(a=i.stores,a===null?i.stores=[e]:a.push(e))}function _p(e,i,a,l){i.value=a,i.getSnapshot=l,Tp(i)&&Ep(e)}function vp(e,i,a){return a(function(){Tp(i)&&Ep(e)})}function Tp(e){var i=e.getSnapshot;e=e.value;try{var a=i();return!fn(e,a)}catch{return!0}}function Ep(e){var i=Ta(e,2);i!==null&&_n(i,e,2)}function Of(e){var i=sn();if(typeof e=="function"){var a=e;if(e=a(),Ps){Sn(!0);try{a()}finally{Sn(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:e},i}function Ap(e,i,a,l){return e.baseState=a,Df(e,Qt,typeof l=="function"?l:Vi)}function hS(e,i,a,l,h){if(Hu(e))throw Error(s(485));if(e=i.action,e!==null){var d={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};K.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,Sp(i,d)):(d.next=a.next,i.pending=a.next=d)}}function Sp(e,i){var a=i.action,l=i.payload,h=e.state;if(i.isTransition){var d=K.T,v={};K.T=v;try{var T=a(h,l),R=K.S;R!==null&&R(v,T),bp(e,i,T)}catch(L){Mf(e,i,L)}finally{K.T=d}}else try{d=a(h,l),bp(e,i,d)}catch(L){Mf(e,i,L)}}function bp(e,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){wp(e,i,l)},function(l){return Mf(e,i,l)}):wp(e,i,a)}function wp(e,i,a){i.status="fulfilled",i.value=a,Rp(i),e.state=a,i=e.pending,i!==null&&(a=i.next,a===i?e.pending=null:(a=a.next,i.next=a,Sp(e,a)))}function Mf(e,i,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,Rp(i),i=i.next;while(i!==l)}e.action=null}function Rp(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Ip(e,i){return i}function Cp(e,i){if(jt){var a=Wt.formState;if(a!==null){t:{var l=Ct;if(jt){if(le){e:{for(var h=le,d=oi;h.nodeType!==8;){if(!d){h=null;break e}if(h=Qn(h.nextSibling),h===null){h=null;break e}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){le=Qn(h.nextSibling),l=h.data==="F!";break t}}Os(l)}l=!1}l&&(i=a[0])}}return a=sn(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ip,lastRenderedState:i},a.queue=l,a=Kp.bind(null,Ct,l),l.dispatch=a,l=Of(!1),d=Uf.bind(null,Ct,!1,l.queue),l=sn(),h={state:i,dispatch:null,action:e,pending:null},l.queue=h,a=hS.bind(null,Ct,h,d,a),h.dispatch=a,l.memoizedState=e,[i,a,!1]}function Dp(e){var i=Te();return Np(i,Qt,e)}function Np(e,i,a){if(i=Df(e,i,Ip)[0],e=ju(Vi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Zo(i)}catch(v){throw v===Go?xu:v}else l=i;i=Te();var h=i.queue,d=h.dispatch;return a!==i.memoizedState&&(Ct.flags|=2048,Da(9,Bu(),fS.bind(null,h,a),null)),[l,d,e]}function fS(e,i){e.action=i}function Op(e){var i=Te(),a=Qt;if(a!==null)return Np(i,a,e);Te(),i=i.memoizedState,a=Te();var l=a.queue.dispatch;return a.memoizedState=e,[i,l,!1]}function Da(e,i,a,l){return e={tag:e,create:a,deps:l,inst:i,next:null},i=Ct.updateQueue,i===null&&(i=If(),Ct.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,i.lastEffect=e),e}function Bu(){return{destroy:void 0,resource:void 0}}function Mp(){return Te().memoizedState}function qu(e,i,a,l){var h=sn();l=l===void 0?null:l,Ct.flags|=e,h.memoizedState=Da(1|i,Bu(),a,l)}function Jo(e,i,a,l){var h=Te();l=l===void 0?null:l;var d=h.memoizedState.inst;Qt!==null&&l!==null&&Af(l,Qt.memoizedState.deps)?h.memoizedState=Da(i,d,a,l):(Ct.flags|=e,h.memoizedState=Da(1|i,d,a,l))}function Vp(e,i){qu(8390656,8,e,i)}function xp(e,i){Jo(2048,8,e,i)}function Pp(e,i){return Jo(4,2,e,i)}function kp(e,i){return Jo(4,4,e,i)}function Up(e,i){if(typeof i=="function"){e=e();var a=i(e);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Lp(e,i,a){a=a!=null?a.concat([e]):null,Jo(4,4,Up.bind(null,i,e),a)}function Vf(){}function zp(e,i){var a=Te();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&Af(i,l[1])?l[0]:(a.memoizedState=[e,i],e)}function jp(e,i){var a=Te();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&Af(i,l[1]))return l[0];if(l=e(),Ps){Sn(!0);try{e()}finally{Sn(!1)}}return a.memoizedState=[l,i],l}function xf(e,i,a){return a===void 0||(yr&1073741824)!==0?e.memoizedState=i:(e.memoizedState=a,e=Hy(),Ct.lanes|=e,br|=e,a)}function Bp(e,i,a,l){return fn(a,i)?a:Ra.current!==null?(e=xf(e,a,l),fn(e,i)||(Me=!0),e):(yr&42)===0?(Me=!0,e.memoizedState=a):(e=Hy(),Ct.lanes|=e,br|=e,i)}function qp(e,i,a,l,h){var d=rt.p;rt.p=d!==0&&8>d?d:8;var v=K.T,T={};K.T=T,Uf(e,!1,i,a);try{var R=h(),L=K.S;if(L!==null&&L(T,R),R!==null&&typeof R=="object"&&typeof R.then=="function"){var Y=lS(R,l);Wo(e,i,Y,yn(e))}else Wo(e,i,l,yn(e))}catch(J){Wo(e,i,{then:function(){},status:"rejected",reason:J},yn())}finally{rt.p=d,K.T=v}}function dS(){}function Pf(e,i,a,l){if(e.tag!==5)throw Error(s(476));var h=Hp(e).queue;qp(e,h,i,dt,a===null?dS:function(){return Fp(e),a(l)})}function Hp(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:dt,baseState:dt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:dt},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:a},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Fp(e){var i=Hp(e).next.queue;Wo(e,i,{},yn())}function kf(){return Qe(yl)}function Gp(){return Te().memoizedState}function Qp(){return Te().memoizedState}function mS(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var a=yn();e=gr(a);var l=pr(i,e,a);l!==null&&(_n(l,i,a),Ko(l,i,a)),i={cache:ff()},e.payload=i;return}i=i.return}}function gS(e,i,a){var l=yn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Hu(e)?Yp(i,a):(a=ef(e,i,a,l),a!==null&&(_n(a,e,l),$p(a,i,l)))}function Kp(e,i,a){var l=yn();Wo(e,i,a,l)}function Wo(e,i,a,l){var h={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Hu(e))Yp(i,h);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var v=i.lastRenderedState,T=d(v,a);if(h.hasEagerState=!0,h.eagerState=T,fn(T,v))return Ru(e,i,h,0),Wt===null&&wu(),!1}catch{}finally{}if(a=ef(e,i,h,l),a!==null)return _n(a,e,l),$p(a,i,l),!0}return!1}function Uf(e,i,a,l){if(l={lane:2,revertLane:gd(),action:l,hasEagerState:!1,eagerState:null,next:null},Hu(e)){if(i)throw Error(s(479))}else i=ef(e,a,l,2),i!==null&&_n(i,e,2)}function Hu(e){var i=e.alternate;return e===Ct||i!==null&&i===Ct}function Yp(e,i){Ia=Uu=!0;var a=e.pending;a===null?i.next=i:(i.next=a.next,a.next=i),e.pending=i}function $p(e,i,a){if((a&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,nr(e,a)}}var Fu={readContext:Qe,use:zu,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useLayoutEffect:me,useInsertionEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useSyncExternalStore:me,useId:me,useHostTransitionStatus:me,useFormState:me,useActionState:me,useOptimistic:me,useMemoCache:me,useCacheRefresh:me},Xp={readContext:Qe,use:zu,useCallback:function(e,i){return sn().memoizedState=[e,i===void 0?null:i],e},useContext:Qe,useEffect:Vp,useImperativeHandle:function(e,i,a){a=a!=null?a.concat([e]):null,qu(4194308,4,Up.bind(null,i,e),a)},useLayoutEffect:function(e,i){return qu(4194308,4,e,i)},useInsertionEffect:function(e,i){qu(4,2,e,i)},useMemo:function(e,i){var a=sn();i=i===void 0?null:i;var l=e();if(Ps){Sn(!0);try{e()}finally{Sn(!1)}}return a.memoizedState=[l,i],l},useReducer:function(e,i,a){var l=sn();if(a!==void 0){var h=a(i);if(Ps){Sn(!0);try{a(i)}finally{Sn(!1)}}}else h=i;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=gS.bind(null,Ct,e),[l.memoizedState,e]},useRef:function(e){var i=sn();return e={current:e},i.memoizedState=e},useState:function(e){e=Of(e);var i=e.queue,a=Kp.bind(null,Ct,i);return i.dispatch=a,[e.memoizedState,a]},useDebugValue:Vf,useDeferredValue:function(e,i){var a=sn();return xf(a,e,i)},useTransition:function(){var e=Of(!1);return e=qp.bind(null,Ct,e.queue,!0,!1),sn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,a){var l=Ct,h=sn();if(jt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),Wt===null)throw Error(s(349));(kt&124)!==0||yp(l,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,Vp(vp.bind(null,l,d,e),[e]),l.flags|=2048,Da(9,Bu(),_p.bind(null,l,d,a,i),null),a},useId:function(){var e=sn(),i=Wt.identifierPrefix;if(jt){var a=Ni,l=Di;a=(l&~(1<<32-Ze(l)-1)).toString(32)+a,i="«"+i+"R"+a,a=Lu++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=uS++,i="«"+i+"r"+a.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:kf,useFormState:Cp,useActionState:Cp,useOptimistic:function(e){var i=sn();i.memoizedState=i.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=Uf.bind(null,Ct,!0,a),a.dispatch=i,[e,i]},useMemoCache:Cf,useCacheRefresh:function(){return sn().memoizedState=mS.bind(null,Ct)}},Zp={readContext:Qe,use:zu,useCallback:zp,useContext:Qe,useEffect:xp,useImperativeHandle:Lp,useInsertionEffect:Pp,useLayoutEffect:kp,useMemo:jp,useReducer:ju,useRef:Mp,useState:function(){return ju(Vi)},useDebugValue:Vf,useDeferredValue:function(e,i){var a=Te();return Bp(a,Qt.memoizedState,e,i)},useTransition:function(){var e=ju(Vi)[0],i=Te().memoizedState;return[typeof e=="boolean"?e:Zo(e),i]},useSyncExternalStore:pp,useId:Gp,useHostTransitionStatus:kf,useFormState:Dp,useActionState:Dp,useOptimistic:function(e,i){var a=Te();return Ap(a,Qt,e,i)},useMemoCache:Cf,useCacheRefresh:Qp},pS={readContext:Qe,use:zu,useCallback:zp,useContext:Qe,useEffect:xp,useImperativeHandle:Lp,useInsertionEffect:Pp,useLayoutEffect:kp,useMemo:jp,useReducer:Nf,useRef:Mp,useState:function(){return Nf(Vi)},useDebugValue:Vf,useDeferredValue:function(e,i){var a=Te();return Qt===null?xf(a,e,i):Bp(a,Qt.memoizedState,e,i)},useTransition:function(){var e=Nf(Vi)[0],i=Te().memoizedState;return[typeof e=="boolean"?e:Zo(e),i]},useSyncExternalStore:pp,useId:Gp,useHostTransitionStatus:kf,useFormState:Op,useActionState:Op,useOptimistic:function(e,i){var a=Te();return Qt!==null?Ap(a,Qt,e,i):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Cf,useCacheRefresh:Qp},Na=null,tl=0;function Gu(e){var i=tl;return tl+=1,Na===null&&(Na=[]),lp(Na,e,i)}function el(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Qu(e,i){throw i.$$typeof===b?Error(s(525)):(e=Object.prototype.toString.call(i),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Jp(e){var i=e._init;return i(e._payload)}function Wp(e){function i(x,M){if(e){var k=x.deletions;k===null?(x.deletions=[M],x.flags|=16):k.push(M)}}function a(x,M){if(!e)return null;for(;M!==null;)i(x,M),M=M.sibling;return null}function l(x){for(var M=new Map;x!==null;)x.key!==null?M.set(x.key,x):M.set(x.index,x),x=x.sibling;return M}function h(x,M){return x=Ci(x,M),x.index=0,x.sibling=null,x}function d(x,M,k){return x.index=k,e?(k=x.alternate,k!==null?(k=k.index,k<M?(x.flags|=67108866,M):k):(x.flags|=67108866,M)):(x.flags|=1048576,M)}function v(x){return e&&x.alternate===null&&(x.flags|=67108866),x}function T(x,M,k,Z){return M===null||M.tag!==6?(M=rf(k,x.mode,Z),M.return=x,M):(M=h(M,k),M.return=x,M)}function R(x,M,k,Z){var ut=k.type;return ut===H?Y(x,M,k.props.children,Z,k.key):M!==null&&(M.elementType===ut||typeof ut=="object"&&ut!==null&&ut.$$typeof===S&&Jp(ut)===M.type)?(M=h(M,k.props),el(M,k),M.return=x,M):(M=Cu(k.type,k.key,k.props,null,x.mode,Z),el(M,k),M.return=x,M)}function L(x,M,k,Z){return M===null||M.tag!==4||M.stateNode.containerInfo!==k.containerInfo||M.stateNode.implementation!==k.implementation?(M=sf(k,x.mode,Z),M.return=x,M):(M=h(M,k.children||[]),M.return=x,M)}function Y(x,M,k,Z,ut){return M===null||M.tag!==7?(M=Is(k,x.mode,Z,ut),M.return=x,M):(M=h(M,k),M.return=x,M)}function J(x,M,k){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=rf(""+M,x.mode,k),M.return=x,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case D:return k=Cu(M.type,M.key,M.props,null,x.mode,k),el(k,M),k.return=x,k;case q:return M=sf(M,x.mode,k),M.return=x,M;case S:var Z=M._init;return M=Z(M._payload),J(x,M,k)}if(Zt(M)||P(M))return M=Is(M,x.mode,k,null),M.return=x,M;if(typeof M.then=="function")return J(x,Gu(M),k);if(M.$$typeof===ot)return J(x,Mu(x,M),k);Qu(x,M)}return null}function z(x,M,k,Z){var ut=M!==null?M.key:null;if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return ut!==null?null:T(x,M,""+k,Z);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case D:return k.key===ut?R(x,M,k,Z):null;case q:return k.key===ut?L(x,M,k,Z):null;case S:return ut=k._init,k=ut(k._payload),z(x,M,k,Z)}if(Zt(k)||P(k))return ut!==null?null:Y(x,M,k,Z,null);if(typeof k.then=="function")return z(x,M,Gu(k),Z);if(k.$$typeof===ot)return z(x,M,Mu(x,k),Z);Qu(x,k)}return null}function j(x,M,k,Z,ut){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return x=x.get(k)||null,T(M,x,""+Z,ut);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case D:return x=x.get(Z.key===null?k:Z.key)||null,R(M,x,Z,ut);case q:return x=x.get(Z.key===null?k:Z.key)||null,L(M,x,Z,ut);case S:var Dt=Z._init;return Z=Dt(Z._payload),j(x,M,k,Z,ut)}if(Zt(Z)||P(Z))return x=x.get(k)||null,Y(M,x,Z,ut,null);if(typeof Z.then=="function")return j(x,M,k,Gu(Z),ut);if(Z.$$typeof===ot)return j(x,M,k,Mu(M,Z),ut);Qu(M,Z)}return null}function Tt(x,M,k,Z){for(var ut=null,Dt=null,ft=M,_t=M=0,xe=null;ft!==null&&_t<k.length;_t++){ft.index>_t?(xe=ft,ft=null):xe=ft.sibling;var zt=z(x,ft,k[_t],Z);if(zt===null){ft===null&&(ft=xe);break}e&&ft&&zt.alternate===null&&i(x,ft),M=d(zt,M,_t),Dt===null?ut=zt:Dt.sibling=zt,Dt=zt,ft=xe}if(_t===k.length)return a(x,ft),jt&&Ds(x,_t),ut;if(ft===null){for(;_t<k.length;_t++)ft=J(x,k[_t],Z),ft!==null&&(M=d(ft,M,_t),Dt===null?ut=ft:Dt.sibling=ft,Dt=ft);return jt&&Ds(x,_t),ut}for(ft=l(ft);_t<k.length;_t++)xe=j(ft,x,_t,k[_t],Z),xe!==null&&(e&&xe.alternate!==null&&ft.delete(xe.key===null?_t:xe.key),M=d(xe,M,_t),Dt===null?ut=xe:Dt.sibling=xe,Dt=xe);return e&&ft.forEach(function(Vr){return i(x,Vr)}),jt&&Ds(x,_t),ut}function pt(x,M,k,Z){if(k==null)throw Error(s(151));for(var ut=null,Dt=null,ft=M,_t=M=0,xe=null,zt=k.next();ft!==null&&!zt.done;_t++,zt=k.next()){ft.index>_t?(xe=ft,ft=null):xe=ft.sibling;var Vr=z(x,ft,zt.value,Z);if(Vr===null){ft===null&&(ft=xe);break}e&&ft&&Vr.alternate===null&&i(x,ft),M=d(Vr,M,_t),Dt===null?ut=Vr:Dt.sibling=Vr,Dt=Vr,ft=xe}if(zt.done)return a(x,ft),jt&&Ds(x,_t),ut;if(ft===null){for(;!zt.done;_t++,zt=k.next())zt=J(x,zt.value,Z),zt!==null&&(M=d(zt,M,_t),Dt===null?ut=zt:Dt.sibling=zt,Dt=zt);return jt&&Ds(x,_t),ut}for(ft=l(ft);!zt.done;_t++,zt=k.next())zt=j(ft,x,_t,zt.value,Z),zt!==null&&(e&&zt.alternate!==null&&ft.delete(zt.key===null?_t:zt.key),M=d(zt,M,_t),Dt===null?ut=zt:Dt.sibling=zt,Dt=zt);return e&&ft.forEach(function(yb){return i(x,yb)}),jt&&Ds(x,_t),ut}function Yt(x,M,k,Z){if(typeof k=="object"&&k!==null&&k.type===H&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case D:t:{for(var ut=k.key;M!==null;){if(M.key===ut){if(ut=k.type,ut===H){if(M.tag===7){a(x,M.sibling),Z=h(M,k.props.children),Z.return=x,x=Z;break t}}else if(M.elementType===ut||typeof ut=="object"&&ut!==null&&ut.$$typeof===S&&Jp(ut)===M.type){a(x,M.sibling),Z=h(M,k.props),el(Z,k),Z.return=x,x=Z;break t}a(x,M);break}else i(x,M);M=M.sibling}k.type===H?(Z=Is(k.props.children,x.mode,Z,k.key),Z.return=x,x=Z):(Z=Cu(k.type,k.key,k.props,null,x.mode,Z),el(Z,k),Z.return=x,x=Z)}return v(x);case q:t:{for(ut=k.key;M!==null;){if(M.key===ut)if(M.tag===4&&M.stateNode.containerInfo===k.containerInfo&&M.stateNode.implementation===k.implementation){a(x,M.sibling),Z=h(M,k.children||[]),Z.return=x,x=Z;break t}else{a(x,M);break}else i(x,M);M=M.sibling}Z=sf(k,x.mode,Z),Z.return=x,x=Z}return v(x);case S:return ut=k._init,k=ut(k._payload),Yt(x,M,k,Z)}if(Zt(k))return Tt(x,M,k,Z);if(P(k)){if(ut=P(k),typeof ut!="function")throw Error(s(150));return k=ut.call(k),pt(x,M,k,Z)}if(typeof k.then=="function")return Yt(x,M,Gu(k),Z);if(k.$$typeof===ot)return Yt(x,M,Mu(x,k),Z);Qu(x,k)}return typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint"?(k=""+k,M!==null&&M.tag===6?(a(x,M.sibling),Z=h(M,k),Z.return=x,x=Z):(a(x,M),Z=rf(k,x.mode,Z),Z.return=x,x=Z),v(x)):a(x,M)}return function(x,M,k,Z){try{tl=0;var ut=Yt(x,M,k,Z);return Na=null,ut}catch(ft){if(ft===Go||ft===xu)throw ft;var Dt=dn(29,ft,null,x.mode);return Dt.lanes=Z,Dt.return=x,Dt}finally{}}}var Oa=Wp(!0),ty=Wp(!1),Mn=Q(null),li=null;function _r(e){var i=e.alternate;nt(Ie,Ie.current&1),nt(Mn,e),li===null&&(i===null||Ra.current!==null||i.memoizedState!==null)&&(li=e)}function ey(e){if(e.tag===22){if(nt(Ie,Ie.current),nt(Mn,e),li===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(li=e)}}else vr()}function vr(){nt(Ie,Ie.current),nt(Mn,Mn.current)}function xi(e){st(Mn),li===e&&(li=null),st(Ie)}var Ie=Q(0);function Ku(e){for(var i=e;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Id(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Lf(e,i,a,l){i=e.memoizedState,a=a(l,i),a=a==null?i:E({},i,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var zf={enqueueSetState:function(e,i,a){e=e._reactInternals;var l=yn(),h=gr(l);h.payload=i,a!=null&&(h.callback=a),i=pr(e,h,l),i!==null&&(_n(i,e,l),Ko(i,e,l))},enqueueReplaceState:function(e,i,a){e=e._reactInternals;var l=yn(),h=gr(l);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=pr(e,h,l),i!==null&&(_n(i,e,l),Ko(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var a=yn(),l=gr(a);l.tag=2,i!=null&&(l.callback=i),i=pr(e,l,a),i!==null&&(_n(i,e,a),Ko(i,e,a))}};function ny(e,i,a,l,h,d,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,v):i.prototype&&i.prototype.isPureReactComponent?!Uo(a,l)||!Uo(h,d):!0}function iy(e,i,a,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==e&&zf.enqueueReplaceState(i,i.state,null)}function ks(e,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(e=e.defaultProps){a===i&&(a=E({},a));for(var h in e)a[h]===void 0&&(a[h]=e[h])}return a}var Yu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function ry(e){Yu(e)}function sy(e){console.error(e)}function ay(e){Yu(e)}function $u(e,i){try{var a=e.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function oy(e,i,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function jf(e,i,a){return a=gr(a),a.tag=3,a.payload={element:null},a.callback=function(){$u(e,i)},a}function ly(e){return e=gr(e),e.tag=3,e}function uy(e,i,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;e.payload=function(){return h(d)},e.callback=function(){oy(i,a,l)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){oy(i,a,l),typeof h!="function"&&(wr===null?wr=new Set([this]):wr.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function yS(e,i,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&qo(i,a,h,!0),a=Mn.current,a!==null){switch(a.tag){case 13:return li===null?cd():a.alternate===null&&ue===0&&(ue=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===gf?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),fd(e,l,h)),!1;case 22:return a.flags|=65536,l===gf?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),fd(e,l,h)),!1}throw Error(s(435,a.tag))}return fd(e,l,h),cd(),!1}if(jt)return i=Mn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==lf&&(e=Error(s(422),{cause:l}),Bo(Cn(e,a)))):(l!==lf&&(i=Error(s(423),{cause:l}),Bo(Cn(i,a))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=Cn(l,a),h=jf(e.stateNode,l,h),_f(e,h),ue!==4&&(ue=2)),!1;var d=Error(s(520),{cause:l});if(d=Cn(d,a),ll===null?ll=[d]:ll.push(d),ue!==4&&(ue=2),i===null)return!0;l=Cn(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,e=h&-h,a.lanes|=e,e=jf(a.stateNode,l,e),_f(a,e),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(wr===null||!wr.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=ly(h),uy(h,e,a,l),_f(a,h),!1}a=a.return}while(a!==null);return!1}var cy=Error(s(461)),Me=!1;function Le(e,i,a,l){i.child=e===null?ty(i,null,a,l):Oa(i,e.child,a,l)}function hy(e,i,a,l,h){a=a.render;var d=i.ref;if("ref"in l){var v={};for(var T in l)T!=="ref"&&(v[T]=l[T])}else v=l;return Vs(i),l=Sf(e,i,a,v,d,h),T=bf(),e!==null&&!Me?(wf(e,i,h),Pi(e,i,h)):(jt&&T&&af(i),i.flags|=1,Le(e,i,l,h),i.child)}function fy(e,i,a,l,h){if(e===null){var d=a.type;return typeof d=="function"&&!nf(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,dy(e,i,d,l,h)):(e=Cu(a.type,null,l,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!Yf(e,h)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:Uo,a(v,l)&&e.ref===i.ref)return Pi(e,i,h)}return i.flags|=1,e=Ci(d,l),e.ref=i.ref,e.return=i,i.child=e}function dy(e,i,a,l,h){if(e!==null){var d=e.memoizedProps;if(Uo(d,l)&&e.ref===i.ref)if(Me=!1,i.pendingProps=l=d,Yf(e,h))(e.flags&131072)!==0&&(Me=!0);else return i.lanes=e.lanes,Pi(e,i,h)}return Bf(e,i,a,l,h)}function my(e,i,a){var l=i.pendingProps,h=l.children,d=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=d!==null?d.baseLanes|a:a,e!==null){for(h=i.child=e.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return gy(e,i,l,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Vu(i,d!==null?d.cachePool:null),d!==null?dp(i,d):Tf(),ey(i);else return i.lanes=i.childLanes=536870912,gy(e,i,d!==null?d.baseLanes|a:a,a)}else d!==null?(Vu(i,d.cachePool),dp(i,d),vr(),i.memoizedState=null):(e!==null&&Vu(i,null),Tf(),vr());return Le(e,i,h,a),i.child}function gy(e,i,a,l){var h=mf();return h=h===null?null:{parent:Re._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},e!==null&&Vu(i,null),Tf(),ey(i),e!==null&&qo(e,i,l,!0),null}function Xu(e,i){var a=i.ref;if(a===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(i.flags|=4194816)}}function Bf(e,i,a,l,h){return Vs(i),a=Sf(e,i,a,l,void 0,h),l=bf(),e!==null&&!Me?(wf(e,i,h),Pi(e,i,h)):(jt&&l&&af(i),i.flags|=1,Le(e,i,a,h),i.child)}function py(e,i,a,l,h,d){return Vs(i),i.updateQueue=null,a=gp(i,l,a,h),mp(e),l=bf(),e!==null&&!Me?(wf(e,i,d),Pi(e,i,d)):(jt&&l&&af(i),i.flags|=1,Le(e,i,a,d),i.child)}function yy(e,i,a,l,h){if(Vs(i),i.stateNode===null){var d=Ea,v=a.contextType;typeof v=="object"&&v!==null&&(d=Qe(v)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=zf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},pf(i),v=a.contextType,d.context=typeof v=="object"&&v!==null?Qe(v):Ea,d.state=i.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Lf(i,a,v,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&zf.enqueueReplaceState(d,d.state,null),$o(i,l,d,h),Yo(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){d=i.stateNode;var T=i.memoizedProps,R=ks(a,T);d.props=R;var L=d.context,Y=a.contextType;v=Ea,typeof Y=="object"&&Y!==null&&(v=Qe(Y));var J=a.getDerivedStateFromProps;Y=typeof J=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,Y||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||L!==v)&&iy(i,d,l,v),mr=!1;var z=i.memoizedState;d.state=z,$o(i,l,d,h),Yo(),L=i.memoizedState,T||z!==L||mr?(typeof J=="function"&&(Lf(i,a,J,l),L=i.memoizedState),(R=mr||ny(i,a,R,l,z,L,v))?(Y||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=L),d.props=l,d.state=L,d.context=v,l=R):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,yf(e,i),v=i.memoizedProps,Y=ks(a,v),d.props=Y,J=i.pendingProps,z=d.context,L=a.contextType,R=Ea,typeof L=="object"&&L!==null&&(R=Qe(L)),T=a.getDerivedStateFromProps,(L=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==J||z!==R)&&iy(i,d,l,R),mr=!1,z=i.memoizedState,d.state=z,$o(i,l,d,h),Yo();var j=i.memoizedState;v!==J||z!==j||mr||e!==null&&e.dependencies!==null&&Ou(e.dependencies)?(typeof T=="function"&&(Lf(i,a,T,l),j=i.memoizedState),(Y=mr||ny(i,a,Y,l,z,j,R)||e!==null&&e.dependencies!==null&&Ou(e.dependencies))?(L||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,j,R),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,j,R)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=j),d.props=l,d.state=j,d.context=R,l=Y):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),l=!1)}return d=l,Xu(e,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&l?(i.child=Oa(i,e.child,null,h),i.child=Oa(i,null,a,h)):Le(e,i,a,h),i.memoizedState=d.state,e=i.child):e=Pi(e,i,h),e}function _y(e,i,a,l){return jo(),i.flags|=256,Le(e,i,a,l),i.child}var qf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hf(e){return{baseLanes:e,cachePool:sp()}}function Ff(e,i,a){return e=e!==null?e.childLanes&~a:0,i&&(e|=Vn),e}function vy(e,i,a){var l=i.pendingProps,h=!1,d=(i.flags&128)!==0,v;if((v=d)||(v=e!==null&&e.memoizedState===null?!1:(Ie.current&2)!==0),v&&(h=!0,i.flags&=-129),v=(i.flags&32)!==0,i.flags&=-33,e===null){if(jt){if(h?_r(i):vr(),jt){var T=le,R;if(R=T){t:{for(R=T,T=oi;R.nodeType!==8;){if(!T){T=null;break t}if(R=Qn(R.nextSibling),R===null){T=null;break t}}T=R}T!==null?(i.memoizedState={dehydrated:T,treeContext:Cs!==null?{id:Di,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},R=dn(18,null,null,0),R.stateNode=T,R.return=i,i.child=R,en=i,le=null,R=!0):R=!1}R||Os(i)}if(T=i.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Id(T)?i.lanes=32:i.lanes=536870912,null;xi(i)}return T=l.children,l=l.fallback,h?(vr(),h=i.mode,T=Zu({mode:"hidden",children:T},h),l=Is(l,h,a,null),T.return=i,l.return=i,T.sibling=l,i.child=T,h=i.child,h.memoizedState=Hf(a),h.childLanes=Ff(e,v,a),i.memoizedState=qf,l):(_r(i),Gf(i,T))}if(R=e.memoizedState,R!==null&&(T=R.dehydrated,T!==null)){if(d)i.flags&256?(_r(i),i.flags&=-257,i=Qf(e,i,a)):i.memoizedState!==null?(vr(),i.child=e.child,i.flags|=128,i=null):(vr(),h=l.fallback,T=i.mode,l=Zu({mode:"visible",children:l.children},T),h=Is(h,T,a,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,Oa(i,e.child,null,a),l=i.child,l.memoizedState=Hf(a),l.childLanes=Ff(e,v,a),i.memoizedState=qf,i=h);else if(_r(i),Id(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var L=v.dgst;v=L,l=Error(s(419)),l.stack="",l.digest=v,Bo({value:l,source:null,stack:null}),i=Qf(e,i,a)}else if(Me||qo(e,i,a,!1),v=(a&e.childLanes)!==0,Me||v){if(v=Wt,v!==null&&(l=a&-a,l=(l&42)!==0?1:To(l),l=(l&(v.suspendedLanes|a))!==0?0:l,l!==0&&l!==R.retryLane))throw R.retryLane=l,Ta(e,l),_n(v,e,l),cy;T.data==="$?"||cd(),i=Qf(e,i,a)}else T.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=R.treeContext,le=Qn(T.nextSibling),en=i,jt=!0,Ns=null,oi=!1,e!==null&&(Nn[On++]=Di,Nn[On++]=Ni,Nn[On++]=Cs,Di=e.id,Ni=e.overflow,Cs=i),i=Gf(i,l.children),i.flags|=4096);return i}return h?(vr(),h=l.fallback,T=i.mode,R=e.child,L=R.sibling,l=Ci(R,{mode:"hidden",children:l.children}),l.subtreeFlags=R.subtreeFlags&65011712,L!==null?h=Ci(L,h):(h=Is(h,T,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,T=e.child.memoizedState,T===null?T=Hf(a):(R=T.cachePool,R!==null?(L=Re._currentValue,R=R.parent!==L?{parent:L,pool:L}:R):R=sp(),T={baseLanes:T.baseLanes|a,cachePool:R}),h.memoizedState=T,h.childLanes=Ff(e,v,a),i.memoizedState=qf,l):(_r(i),a=e.child,e=a.sibling,a=Ci(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,e!==null&&(v=i.deletions,v===null?(i.deletions=[e],i.flags|=16):v.push(e)),i.child=a,i.memoizedState=null,a)}function Gf(e,i){return i=Zu({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Zu(e,i){return e=dn(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Qf(e,i,a){return Oa(i,e.child,null,a),e=Gf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Ty(e,i,a){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),cf(e.return,i,a)}function Kf(e,i,a,l,h){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=h)}function Ey(e,i,a){var l=i.pendingProps,h=l.revealOrder,d=l.tail;if(Le(e,i,l.children,a),l=Ie.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ty(e,a,i);else if(e.tag===19)Ty(e,a,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(nt(Ie,l),h){case"forwards":for(a=i.child,h=null;a!==null;)e=a.alternate,e!==null&&Ku(e)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Kf(i,!1,h,a,d);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&Ku(e)===null){i.child=h;break}e=h.sibling,h.sibling=a,a=h,h=e}Kf(i,!0,a,null,d);break;case"together":Kf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Pi(e,i,a){if(e!==null&&(i.dependencies=e.dependencies),br|=i.lanes,(a&i.childLanes)===0)if(e!==null){if(qo(e,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(s(153));if(i.child!==null){for(e=i.child,a=Ci(e,e.pendingProps),i.child=a,a.return=i;e.sibling!==null;)e=e.sibling,a=a.sibling=Ci(e,e.pendingProps),a.return=i;a.sibling=null}return i.child}function Yf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Ou(e)))}function _S(e,i,a){switch(i.tag){case 3:Ft(i,i.stateNode.containerInfo),dr(i,Re,e.memoizedState.cache),jo();break;case 27:case 5:po(i);break;case 4:Ft(i,i.stateNode.containerInfo);break;case 10:dr(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(_r(i),i.flags|=128,null):(a&i.child.childLanes)!==0?vy(e,i,a):(_r(i),e=Pi(e,i,a),e!==null?e.sibling:null);_r(i);break;case 19:var h=(e.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(qo(e,i,a,!1),l=(a&i.childLanes)!==0),h){if(l)return Ey(e,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),nt(Ie,Ie.current),l)break;return null;case 22:case 23:return i.lanes=0,my(e,i,a);case 24:dr(i,Re,e.memoizedState.cache)}return Pi(e,i,a)}function Ay(e,i,a){if(e!==null)if(e.memoizedProps!==i.pendingProps)Me=!0;else{if(!Yf(e,a)&&(i.flags&128)===0)return Me=!1,_S(e,i,a);Me=(e.flags&131072)!==0}else Me=!1,jt&&(i.flags&1048576)!==0&&Jg(i,Nu,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var l=i.elementType,h=l._init;if(l=h(l._payload),i.type=l,typeof l=="function")nf(l)?(e=ks(l,e),i.tag=1,i=yy(null,i,l,e,a)):(i.tag=0,i=Bf(null,i,l,e,a));else{if(l!=null){if(h=l.$$typeof,h===St){i.tag=11,i=hy(null,i,l,e,a);break t}else if(h===O){i.tag=14,i=fy(null,i,l,e,a);break t}}throw i=ne(l)||l,Error(s(306,i,""))}}return i;case 0:return Bf(e,i,i.type,i.pendingProps,a);case 1:return l=i.type,h=ks(l,i.pendingProps),yy(e,i,l,h,a);case 3:t:{if(Ft(i,i.stateNode.containerInfo),e===null)throw Error(s(387));l=i.pendingProps;var d=i.memoizedState;h=d.element,yf(e,i),$o(i,l,null,a);var v=i.memoizedState;if(l=v.cache,dr(i,Re,l),l!==d.cache&&hf(i,[Re],a,!0),Yo(),l=v.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:v.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=_y(e,i,l,a);break t}else if(l!==h){h=Cn(Error(s(424)),i),Bo(h),i=_y(e,i,l,a);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(le=Qn(e.firstChild),en=i,jt=!0,Ns=null,oi=!0,a=ty(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(jo(),l===h){i=Pi(e,i,a);break t}Le(e,i,l,a)}i=i.child}return i;case 26:return Xu(e,i),e===null?(a=R_(i.type,null,i.pendingProps,null))?i.memoizedState=a:jt||(a=i.type,e=i.pendingProps,l=hc(yt.current).createElement(a),l[he]=i,l[Ue]=e,je(l,a,e),fe(l),i.stateNode=l):i.memoizedState=R_(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return po(i),e===null&&jt&&(l=i.stateNode=S_(i.type,i.pendingProps,yt.current),en=i,oi=!0,h=le,Cr(i.type)?(Cd=h,le=Qn(l.firstChild)):le=h),Le(e,i,i.pendingProps.children,a),Xu(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&jt&&((h=l=le)&&(l=QS(l,i.type,i.pendingProps,oi),l!==null?(i.stateNode=l,en=i,le=Qn(l.firstChild),oi=!1,h=!0):h=!1),h||Os(i)),po(i),h=i.type,d=i.pendingProps,v=e!==null?e.memoizedProps:null,l=d.children,bd(h,d)?l=null:v!==null&&bd(h,v)&&(i.flags|=32),i.memoizedState!==null&&(h=Sf(e,i,cS,null,null,a),yl._currentValue=h),Xu(e,i),Le(e,i,l,a),i.child;case 6:return e===null&&jt&&((e=a=le)&&(a=KS(a,i.pendingProps,oi),a!==null?(i.stateNode=a,en=i,le=null,e=!0):e=!1),e||Os(i)),null;case 13:return vy(e,i,a);case 4:return Ft(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=Oa(i,null,l,a):Le(e,i,l,a),i.child;case 11:return hy(e,i,i.type,i.pendingProps,a);case 7:return Le(e,i,i.pendingProps,a),i.child;case 8:return Le(e,i,i.pendingProps.children,a),i.child;case 12:return Le(e,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,dr(i,i.type,l.value),Le(e,i,l.children,a),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,Vs(i),h=Qe(h),l=l(h),i.flags|=1,Le(e,i,l,a),i.child;case 14:return fy(e,i,i.type,i.pendingProps,a);case 15:return dy(e,i,i.type,i.pendingProps,a);case 19:return Ey(e,i,a);case 31:return l=i.pendingProps,a=i.mode,l={mode:l.mode,children:l.children},e===null?(a=Zu(l,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=Ci(e.child,l),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return my(e,i,a);case 24:return Vs(i),l=Qe(Re),e===null?(h=mf(),h===null&&(h=Wt,d=ff(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:l,cache:h},pf(i),dr(i,Re,h)):((e.lanes&a)!==0&&(yf(e,i),$o(i,null,null,a),Yo()),h=e.memoizedState,d=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),dr(i,Re,l)):(l=d.cache,dr(i,Re,l),l!==h.cache&&hf(i,[Re],a,!0))),Le(e,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function ki(e){e.flags|=4}function Sy(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!O_(i)){if(i=Mn.current,i!==null&&((kt&4194048)===kt?li!==null:(kt&62914560)!==kt&&(kt&536870912)===0||i!==li))throw Qo=gf,ap;e.flags|=8192}}function Ju(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?tr():536870912,e.lanes|=i,Pa|=i)}function nl(e,i){if(!jt)switch(e.tailMode){case"hidden":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ae(e){var i=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(i)for(var h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=a,i}function vS(e,i,a){var l=i.pendingProps;switch(of(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(i),null;case 1:return ae(i),null;case 3:return a=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Mi(Re),kn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(zo(i)?ki(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ep())),ae(i),null;case 26:return a=i.memoizedState,e===null?(ki(i),a!==null?(ae(i),Sy(i,a)):(ae(i),i.flags&=-16777217)):a?a!==e.memoizedState?(ki(i),ae(i),Sy(i,a)):(ae(i),i.flags&=-16777217):(e.memoizedProps!==l&&ki(i),ae(i),i.flags&=-16777217),null;case 27:ta(i),a=yt.current;var h=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==l&&ki(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ae(i),null}e=ht.current,zo(i)?Wg(i):(e=S_(h,l,a),i.stateNode=e,ki(i))}return ae(i),null;case 5:if(ta(i),a=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&ki(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ae(i),null}if(e=ht.current,zo(i))Wg(i);else{switch(h=hc(yt.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?h.createElement(a,{is:l.is}):h.createElement(a)}}e[he]=i,e[Ue]=l;t:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break t;for(;h.sibling===null;){if(h.return===null||h.return===i)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=e;t:switch(je(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&ki(i)}}return ae(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&ki(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(e=yt.current,zo(i)){if(e=i.stateNode,a=i.memoizedProps,l=null,h=en,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[he]=i,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||p_(e.nodeValue,a)),e||Os(i)}else e=hc(e).createTextNode(l),e[he]=i,i.stateNode=e}return ae(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=zo(i),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[he]=i}else jo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ae(i),h=!1}else h=ep(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(xi(i),i):(xi(i),null)}if(xi(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return a!==e&&a&&(i.child.flags|=8192),Ju(i,i.updateQueue),ae(i),null;case 4:return kn(),e===null&&vd(i.stateNode.containerInfo),ae(i),null;case 10:return Mi(i.type),ae(i),null;case 19:if(st(Ie),h=i.memoizedState,h===null)return ae(i),null;if(l=(i.flags&128)!==0,d=h.rendering,d===null)if(l)nl(h,!1);else{if(ue!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=Ku(e),d!==null){for(i.flags|=128,nl(h,!1),e=d.updateQueue,i.updateQueue=e,Ju(i,e),i.subtreeFlags=0,e=a,a=i.child;a!==null;)Zg(a,e),a=a.sibling;return nt(Ie,Ie.current&1|2),i.child}e=e.sibling}h.tail!==null&&rn()>ec&&(i.flags|=128,l=!0,nl(h,!1),i.lanes=4194304)}else{if(!l)if(e=Ku(d),e!==null){if(i.flags|=128,l=!0,e=e.updateQueue,i.updateQueue=e,Ju(i,e),nl(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!jt)return ae(i),null}else 2*rn()-h.renderingStartTime>ec&&a!==536870912&&(i.flags|=128,l=!0,nl(h,!1),i.lanes=4194304);h.isBackwards?(d.sibling=i.child,i.child=d):(e=h.last,e!==null?e.sibling=d:i.child=d,h.last=d)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=rn(),i.sibling=null,e=Ie.current,nt(Ie,l?e&1|2:e&1),i):(ae(i),null);case 22:case 23:return xi(i),Ef(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(ae(i),i.subtreeFlags&6&&(i.flags|=8192)):ae(i),a=i.updateQueue,a!==null&&Ju(i,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),e!==null&&st(xs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),Mi(Re),ae(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function TS(e,i){switch(of(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Mi(Re),kn(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return ta(i),null;case 13:if(xi(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(s(340));jo()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return st(Ie),null;case 4:return kn(),null;case 10:return Mi(i.type),null;case 22:case 23:return xi(i),Ef(),e!==null&&st(xs),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Mi(Re),null;case 25:return null;default:return null}}function by(e,i){switch(of(i),i.tag){case 3:Mi(Re),kn();break;case 26:case 27:case 5:ta(i);break;case 4:kn();break;case 13:xi(i);break;case 19:st(Ie);break;case 10:Mi(i.type);break;case 22:case 23:xi(i),Ef(),e!==null&&st(xs);break;case 24:Mi(Re)}}function il(e,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&e)===e){l=void 0;var d=a.create,v=a.inst;l=d(),v.destroy=l}a=a.next}while(a!==h)}}catch(T){Xt(i,i.return,T)}}function Tr(e,i,a){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&e)===e){var v=l.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,h=i;var R=a,L=T;try{L()}catch(Y){Xt(h,R,Y)}}}l=l.next}while(l!==d)}}catch(Y){Xt(i,i.return,Y)}}function wy(e){var i=e.updateQueue;if(i!==null){var a=e.stateNode;try{fp(i,a)}catch(l){Xt(e,e.return,l)}}}function Ry(e,i,a){a.props=ks(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){Xt(e,i,l)}}function rl(e,i){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(h){Xt(e,i,h)}}function ui(e,i){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){Xt(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){Xt(e,i,h)}else a.current=null}function Iy(e){var i=e.type,a=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){Xt(e,e.return,h)}}function $f(e,i,a){try{var l=e.stateNode;BS(l,e.type,a,i),l[Ue]=i}catch(h){Xt(e,e.return,h)}}function Cy(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Cr(e.type)||e.tag===4}function Xf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Cy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Cr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zf(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(e),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=cc));else if(l!==4&&(l===27&&Cr(e.type)&&(a=e.stateNode,i=null),e=e.child,e!==null))for(Zf(e,i,a),e=e.sibling;e!==null;)Zf(e,i,a),e=e.sibling}function Wu(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?a.insertBefore(e,i):a.appendChild(e);else if(l!==4&&(l===27&&Cr(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Wu(e,i,a),e=e.sibling;e!==null;)Wu(e,i,a),e=e.sibling}function Dy(e){var i=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);je(i,l,a),i[he]=e,i[Ue]=a}catch(d){Xt(e,e.return,d)}}var Ui=!1,ge=!1,Jf=!1,Ny=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function ES(e,i){if(e=e.containerInfo,Ad=yc,e=Bg(e),$h(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var v=0,T=-1,R=-1,L=0,Y=0,J=e,z=null;e:for(;;){for(var j;J!==a||h!==0&&J.nodeType!==3||(T=v+h),J!==d||l!==0&&J.nodeType!==3||(R=v+l),J.nodeType===3&&(v+=J.nodeValue.length),(j=J.firstChild)!==null;)z=J,J=j;for(;;){if(J===e)break e;if(z===a&&++L===h&&(T=v),z===d&&++Y===l&&(R=v),(j=J.nextSibling)!==null)break;J=z,z=J.parentNode}J=j}a=T===-1||R===-1?null:{start:T,end:R}}else a=null}a=a||{start:0,end:0}}else a=null;for(Sd={focusedElem:e,selectionRange:a},yc=!1,Ve=i;Ve!==null;)if(i=Ve,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,Ve=e;else for(;Ve!==null;){switch(i=Ve,d=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var Tt=ks(a.type,h,a.elementType===a.type);e=l.getSnapshotBeforeUpdate(Tt,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(pt){Xt(a,a.return,pt)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,a=e.nodeType,a===9)Rd(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Rd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=i.sibling,e!==null){e.return=i.return,Ve=e;break}Ve=i.return}}function Oy(e,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Er(e,a),l&4&&il(5,a);break;case 1:if(Er(e,a),l&4)if(e=a.stateNode,i===null)try{e.componentDidMount()}catch(v){Xt(a,a.return,v)}else{var h=ks(a.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Xt(a,a.return,v)}}l&64&&wy(a),l&512&&rl(a,a.return);break;case 3:if(Er(e,a),l&64&&(e=a.updateQueue,e!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{fp(e,i)}catch(v){Xt(a,a.return,v)}}break;case 27:i===null&&l&4&&Dy(a);case 26:case 5:Er(e,a),i===null&&l&4&&Iy(a),l&512&&rl(a,a.return);break;case 12:Er(e,a);break;case 13:Er(e,a),l&4&&xy(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=NS.bind(null,a),YS(e,a))));break;case 22:if(l=a.memoizedState!==null||Ui,!l){i=i!==null&&i.memoizedState!==null||ge,h=Ui;var d=ge;Ui=l,(ge=i)&&!d?Ar(e,a,(a.subtreeFlags&8772)!==0):Er(e,a),Ui=h,ge=d}break;case 30:break;default:Er(e,a)}}function My(e){var i=e.alternate;i!==null&&(e.alternate=null,My(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&sa(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ie=null,an=!1;function Li(e,i,a){for(a=a.child;a!==null;)Vy(e,i,a),a=a.sibling}function Vy(e,i,a){if(Fe&&typeof Fe.onCommitFiberUnmount=="function")try{Fe.onCommitFiberUnmount(Zi,a)}catch{}switch(a.tag){case 26:ge||ui(a,i),Li(e,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ge||ui(a,i);var l=ie,h=an;Cr(a.type)&&(ie=a.stateNode,an=!1),Li(e,i,a),dl(a.stateNode),ie=l,an=h;break;case 5:ge||ui(a,i);case 6:if(l=ie,h=an,ie=null,Li(e,i,a),ie=l,an=h,ie!==null)if(an)try{(ie.nodeType===9?ie.body:ie.nodeName==="HTML"?ie.ownerDocument.body:ie).removeChild(a.stateNode)}catch(d){Xt(a,i,d)}else try{ie.removeChild(a.stateNode)}catch(d){Xt(a,i,d)}break;case 18:ie!==null&&(an?(e=ie,E_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),El(e)):E_(ie,a.stateNode));break;case 4:l=ie,h=an,ie=a.stateNode.containerInfo,an=!0,Li(e,i,a),ie=l,an=h;break;case 0:case 11:case 14:case 15:ge||Tr(2,a,i),ge||Tr(4,a,i),Li(e,i,a);break;case 1:ge||(ui(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Ry(a,i,l)),Li(e,i,a);break;case 21:Li(e,i,a);break;case 22:ge=(l=ge)||a.memoizedState!==null,Li(e,i,a),ge=l;break;default:Li(e,i,a)}}function xy(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{El(e)}catch(a){Xt(i,i.return,a)}}function AS(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Ny),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Ny),i;default:throw Error(s(435,e.tag))}}function Wf(e,i){var a=AS(e);i.forEach(function(l){var h=OS.bind(null,e,l);a.has(l)||(a.add(l),l.then(h,h))})}function mn(e,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=e,v=i,T=v;t:for(;T!==null;){switch(T.tag){case 27:if(Cr(T.type)){ie=T.stateNode,an=!1;break t}break;case 5:ie=T.stateNode,an=!1;break t;case 3:case 4:ie=T.stateNode.containerInfo,an=!0;break t}T=T.return}if(ie===null)throw Error(s(160));Vy(d,v,h),ie=null,an=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Py(i,e),i=i.sibling}var Gn=null;function Py(e,i){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:mn(i,e),gn(e),l&4&&(Tr(3,e,e.return),il(3,e),Tr(5,e,e.return));break;case 1:mn(i,e),gn(e),l&512&&(ge||a===null||ui(a,a.return)),l&64&&Ui&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=Gn;if(mn(i,e),gn(e),l&512&&(ge||a===null||ui(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){t:{l=e.type,a=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[ir]||d[he]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),je(d,l,a),d[he]=e,fe(d),l=d;break t;case"link":var v=D_("link","href",h).get(l+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(d=v[T],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break e}}d=h.createElement(l),je(d,l,a),h.head.appendChild(d);break;case"meta":if(v=D_("meta","content",h).get(l+(a.content||""))){for(T=0;T<v.length;T++)if(d=v[T],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break e}}d=h.createElement(l),je(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[he]=e,fe(d),l=d}e.stateNode=l}else N_(h,e.type,e.stateNode);else e.stateNode=C_(h,l,e.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?N_(h,e.type,e.stateNode):C_(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&$f(e,e.memoizedProps,a.memoizedProps)}break;case 27:mn(i,e),gn(e),l&512&&(ge||a===null||ui(a,a.return)),a!==null&&l&4&&$f(e,e.memoizedProps,a.memoizedProps);break;case 5:if(mn(i,e),gn(e),l&512&&(ge||a===null||ui(a,a.return)),e.flags&32){h=e.stateNode;try{Rn(h,"")}catch(j){Xt(e,e.return,j)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,$f(e,h,a!==null?a.memoizedProps:h)),l&1024&&(Jf=!0);break;case 6:if(mn(i,e),gn(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(j){Xt(e,e.return,j)}}break;case 3:if(mc=null,h=Gn,Gn=fc(i.containerInfo),mn(i,e),Gn=h,gn(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{El(i.containerInfo)}catch(j){Xt(e,e.return,j)}Jf&&(Jf=!1,ky(e));break;case 4:l=Gn,Gn=fc(e.stateNode.containerInfo),mn(i,e),gn(e),Gn=l;break;case 12:mn(i,e),gn(e);break;case 13:mn(i,e),gn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(sd=rn()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Wf(e,l)));break;case 22:h=e.memoizedState!==null;var R=a!==null&&a.memoizedState!==null,L=Ui,Y=ge;if(Ui=L||h,ge=Y||R,mn(i,e),ge=Y,Ui=L,gn(e),l&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(a===null||R||Ui||ge||Us(e)),a=null,i=e;;){if(i.tag===5||i.tag===26){if(a===null){R=a=i;try{if(d=R.stateNode,h)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=R.stateNode;var J=R.memoizedProps.style,z=J!=null&&J.hasOwnProperty("display")?J.display:null;T.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(j){Xt(R,R.return,j)}}}else if(i.tag===6){if(a===null){R=i;try{R.stateNode.nodeValue=h?"":R.memoizedProps}catch(j){Xt(R,R.return,j)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Wf(e,a))));break;case 19:mn(i,e),gn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Wf(e,l)));break;case 30:break;case 21:break;default:mn(i,e),gn(e)}}function gn(e){var i=e.flags;if(i&2){try{for(var a,l=e.return;l!==null;){if(Cy(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,d=Xf(e);Wu(e,d,h);break;case 5:var v=a.stateNode;a.flags&32&&(Rn(v,""),a.flags&=-33);var T=Xf(e);Wu(e,T,v);break;case 3:case 4:var R=a.stateNode.containerInfo,L=Xf(e);Zf(e,L,R);break;default:throw Error(s(161))}}catch(Y){Xt(e,e.return,Y)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function ky(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;ky(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Er(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Oy(e,i.alternate,i),i=i.sibling}function Us(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Tr(4,i,i.return),Us(i);break;case 1:ui(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&Ry(i,i.return,a),Us(i);break;case 27:dl(i.stateNode);case 26:case 5:ui(i,i.return),Us(i);break;case 22:i.memoizedState===null&&Us(i);break;case 30:Us(i);break;default:Us(i)}e=e.sibling}}function Ar(e,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=e,d=i,v=d.flags;switch(d.tag){case 0:case 11:case 15:Ar(h,d,a),il(4,d);break;case 1:if(Ar(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(L){Xt(l,l.return,L)}if(l=d,h=l.updateQueue,h!==null){var T=l.stateNode;try{var R=h.shared.hiddenCallbacks;if(R!==null)for(h.shared.hiddenCallbacks=null,h=0;h<R.length;h++)hp(R[h],T)}catch(L){Xt(l,l.return,L)}}a&&v&64&&wy(d),rl(d,d.return);break;case 27:Dy(d);case 26:case 5:Ar(h,d,a),a&&l===null&&v&4&&Iy(d),rl(d,d.return);break;case 12:Ar(h,d,a);break;case 13:Ar(h,d,a),a&&v&4&&xy(h,d);break;case 22:d.memoizedState===null&&Ar(h,d,a),rl(d,d.return);break;case 30:break;default:Ar(h,d,a)}i=i.sibling}}function td(e,i){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ho(a))}function ed(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Ho(e))}function ci(e,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Uy(e,i,a,l),i=i.sibling}function Uy(e,i,a,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:ci(e,i,a,l),h&2048&&il(9,i);break;case 1:ci(e,i,a,l);break;case 3:ci(e,i,a,l),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Ho(e)));break;case 12:if(h&2048){ci(e,i,a,l),e=i.stateNode;try{var d=i.memoizedProps,v=d.id,T=d.onPostCommit;typeof T=="function"&&T(v,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(R){Xt(i,i.return,R)}}else ci(e,i,a,l);break;case 13:ci(e,i,a,l);break;case 23:break;case 22:d=i.stateNode,v=i.alternate,i.memoizedState!==null?d._visibility&2?ci(e,i,a,l):sl(e,i):d._visibility&2?ci(e,i,a,l):(d._visibility|=2,Ma(e,i,a,l,(i.subtreeFlags&10256)!==0)),h&2048&&td(v,i);break;case 24:ci(e,i,a,l),h&2048&&ed(i.alternate,i);break;default:ci(e,i,a,l)}}function Ma(e,i,a,l,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=e,v=i,T=a,R=l,L=v.flags;switch(v.tag){case 0:case 11:case 15:Ma(d,v,T,R,h),il(8,v);break;case 23:break;case 22:var Y=v.stateNode;v.memoizedState!==null?Y._visibility&2?Ma(d,v,T,R,h):sl(d,v):(Y._visibility|=2,Ma(d,v,T,R,h)),h&&L&2048&&td(v.alternate,v);break;case 24:Ma(d,v,T,R,h),h&&L&2048&&ed(v.alternate,v);break;default:Ma(d,v,T,R,h)}i=i.sibling}}function sl(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=e,l=i,h=l.flags;switch(l.tag){case 22:sl(a,l),h&2048&&td(l.alternate,l);break;case 24:sl(a,l),h&2048&&ed(l.alternate,l);break;default:sl(a,l)}i=i.sibling}}var al=8192;function Va(e){if(e.subtreeFlags&al)for(e=e.child;e!==null;)Ly(e),e=e.sibling}function Ly(e){switch(e.tag){case 26:Va(e),e.flags&al&&e.memoizedState!==null&&ob(Gn,e.memoizedState,e.memoizedProps);break;case 5:Va(e);break;case 3:case 4:var i=Gn;Gn=fc(e.stateNode.containerInfo),Va(e),Gn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=al,al=16777216,Va(e),al=i):Va(e));break;default:Va(e)}}function zy(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function ol(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Ve=l,By(l,e)}zy(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)jy(e),e=e.sibling}function jy(e){switch(e.tag){case 0:case 11:case 15:ol(e),e.flags&2048&&Tr(9,e,e.return);break;case 3:ol(e);break;case 12:ol(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,tc(e)):ol(e);break;default:ol(e)}}function tc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Ve=l,By(l,e)}zy(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Tr(8,i,i.return),tc(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,tc(i));break;default:tc(i)}e=e.sibling}}function By(e,i){for(;Ve!==null;){var a=Ve;switch(a.tag){case 0:case 11:case 15:Tr(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ho(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ve=l;else t:for(a=e;Ve!==null;){l=Ve;var h=l.sibling,d=l.return;if(My(l),l===a){Ve=null;break t}if(h!==null){h.return=d,Ve=h;break t}Ve=d}}}var SS={getCacheForType:function(e){var i=Qe(Re),a=i.data.get(e);return a===void 0&&(a=e(),i.data.set(e,a)),a}},bS=typeof WeakMap=="function"?WeakMap:Map,qt=0,Wt=null,Nt=null,kt=0,Ht=0,pn=null,Sr=!1,xa=!1,nd=!1,zi=0,ue=0,br=0,Ls=0,id=0,Vn=0,Pa=0,ll=null,on=null,rd=!1,sd=0,ec=1/0,nc=null,wr=null,ze=0,Rr=null,ka=null,Ua=0,ad=0,od=null,qy=null,ul=0,ld=null;function yn(){if((qt&2)!==0&&kt!==0)return kt&-kt;if(K.T!==null){var e=ba;return e!==0?e:gd()}return Ei()}function Hy(){Vn===0&&(Vn=(kt&536870912)===0||jt?vo():536870912);var e=Mn.current;return e!==null&&(e.flags|=32),Vn}function _n(e,i,a){(e===Wt&&(Ht===2||Ht===9)||e.cancelPendingCommit!==null)&&(La(e,0),Ir(e,kt,Vn,!1)),ce(e,a),((qt&2)===0||e!==Wt)&&(e===Wt&&((qt&2)===0&&(Ls|=a),ue===4&&Ir(e,kt,Vn,!1)),hi(e))}function Fy(e,i,a){if((qt&6)!==0)throw Error(s(327));var l=!a&&(i&124)===0&&(i&e.expiredLanes)===0||Wi(e,i),h=l?IS(e,i):hd(e,i,!0),d=l;do{if(h===0){xa&&!l&&Ir(e,i,0,!1);break}else{if(a=e.current.alternate,d&&!wS(a)){h=hd(e,i,!1),d=!1;continue}if(h===2){if(d=i,e.errorRecoveryDisabledLanes&d)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){i=v;t:{var T=e;h=ll;var R=T.current.memoizedState.isDehydrated;if(R&&(La(T,v).flags|=256),v=hd(T,v,!1),v!==2){if(nd&&!R){T.errorRecoveryDisabledLanes|=d,Ls|=d,h=4;break t}d=on,on=h,d!==null&&(on===null?on=d:on.push.apply(on,d))}h=v}if(d=!1,h!==2)continue}}if(h===1){La(e,0),Ir(e,i,0,!0);break}t:{switch(l=e,d=h,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Ir(l,i,Vn,!Sr);break t;case 2:on=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(h=sd+300-rn(),10<h)){if(Ir(l,i,Vn,!Sr),bn(l,0,!0)!==0)break t;l.timeoutHandle=v_(Gy.bind(null,l,a,on,nc,rd,i,Vn,Ls,Pa,Sr,d,2,-0,0),h);break t}Gy(l,a,on,nc,rd,i,Vn,Ls,Pa,Sr,d,0,-0,0)}}break}while(!0);hi(e)}function Gy(e,i,a,l,h,d,v,T,R,L,Y,J,z,j){if(e.timeoutHandle=-1,J=i.subtreeFlags,(J&8192||(J&16785408)===16785408)&&(pl={stylesheets:null,count:0,unsuspend:ab},Ly(i),J=lb(),J!==null)){e.cancelPendingCommit=J(Jy.bind(null,e,i,d,a,l,h,v,T,R,Y,1,z,j)),Ir(e,d,v,!L);return}Jy(e,i,d,a,l,h,v,T,R)}function wS(e){for(var i=e;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!fn(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ir(e,i,a,l){i&=~id,i&=~Ls,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var h=i;0<h;){var d=31-Ze(h),v=1<<d;l[d]=-1,h&=~v}a!==0&&er(e,a,i)}function ic(){return(qt&6)===0?(cl(0),!1):!0}function ud(){if(Nt!==null){if(Ht===0)var e=Nt.return;else e=Nt,Oi=Ms=null,Rf(e),Na=null,tl=0,e=Nt;for(;e!==null;)by(e.alternate,e),e=e.return;Nt=null}}function La(e,i){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,HS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ud(),Wt=e,Nt=a=Ci(e.current,null),kt=i,Ht=0,pn=null,Sr=!1,xa=Wi(e,i),nd=!1,Pa=Vn=id=Ls=br=ue=0,on=ll=null,rd=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var h=31-Ze(l),d=1<<h;i|=e[h],l&=~d}return zi=i,wu(),a}function Qy(e,i){Ct=null,K.H=Fu,i===Go||i===xu?(i=up(),Ht=3):i===ap?(i=up(),Ht=4):Ht=i===cy?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,pn=i,Nt===null&&(ue=1,$u(e,Cn(i,e.current)))}function Ky(){var e=K.H;return K.H=Fu,e===null?Fu:e}function Yy(){var e=K.A;return K.A=SS,e}function cd(){ue=4,Sr||(kt&4194048)!==kt&&Mn.current!==null||(xa=!0),(br&134217727)===0&&(Ls&134217727)===0||Wt===null||Ir(Wt,kt,Vn,!1)}function hd(e,i,a){var l=qt;qt|=2;var h=Ky(),d=Yy();(Wt!==e||kt!==i)&&(nc=null,La(e,i)),i=!1;var v=ue;t:do try{if(Ht!==0&&Nt!==null){var T=Nt,R=pn;switch(Ht){case 8:ud(),v=6;break t;case 3:case 2:case 9:case 6:Mn.current===null&&(i=!0);var L=Ht;if(Ht=0,pn=null,za(e,T,R,L),a&&xa){v=0;break t}break;default:L=Ht,Ht=0,pn=null,za(e,T,R,L)}}RS(),v=ue;break}catch(Y){Qy(e,Y)}while(!0);return i&&e.shellSuspendCounter++,Oi=Ms=null,qt=l,K.H=h,K.A=d,Nt===null&&(Wt=null,kt=0,wu()),v}function RS(){for(;Nt!==null;)$y(Nt)}function IS(e,i){var a=qt;qt|=2;var l=Ky(),h=Yy();Wt!==e||kt!==i?(nc=null,ec=rn()+500,La(e,i)):xa=Wi(e,i);t:do try{if(Ht!==0&&Nt!==null){i=Nt;var d=pn;e:switch(Ht){case 1:Ht=0,pn=null,za(e,i,d,1);break;case 2:case 9:if(op(d)){Ht=0,pn=null,Xy(i);break}i=function(){Ht!==2&&Ht!==9||Wt!==e||(Ht=7),hi(e)},d.then(i,i);break t;case 3:Ht=7;break t;case 4:Ht=5;break t;case 7:op(d)?(Ht=0,pn=null,Xy(i)):(Ht=0,pn=null,za(e,i,d,7));break;case 5:var v=null;switch(Nt.tag){case 26:v=Nt.memoizedState;case 5:case 27:var T=Nt;if(!v||O_(v)){Ht=0,pn=null;var R=T.sibling;if(R!==null)Nt=R;else{var L=T.return;L!==null?(Nt=L,rc(L)):Nt=null}break e}}Ht=0,pn=null,za(e,i,d,5);break;case 6:Ht=0,pn=null,za(e,i,d,6);break;case 8:ud(),ue=6;break t;default:throw Error(s(462))}}CS();break}catch(Y){Qy(e,Y)}while(!0);return Oi=Ms=null,K.H=l,K.A=h,qt=a,Nt!==null?0:(Wt=null,kt=0,wu(),ue)}function CS(){for(;Nt!==null&&!Lh();)$y(Nt)}function $y(e){var i=Ay(e.alternate,e,zi);e.memoizedProps=e.pendingProps,i===null?rc(e):Nt=i}function Xy(e){var i=e,a=i.alternate;switch(i.tag){case 15:case 0:i=py(a,i,i.pendingProps,i.type,void 0,kt);break;case 11:i=py(a,i,i.pendingProps,i.type.render,i.ref,kt);break;case 5:Rf(i);default:by(a,i),i=Nt=Zg(i,zi),i=Ay(a,i,zi)}e.memoizedProps=e.pendingProps,i===null?rc(e):Nt=i}function za(e,i,a,l){Oi=Ms=null,Rf(i),Na=null,tl=0;var h=i.return;try{if(yS(e,h,i,a,kt)){ue=1,$u(e,Cn(a,e.current)),Nt=null;return}}catch(d){if(h!==null)throw Nt=h,d;ue=1,$u(e,Cn(a,e.current)),Nt=null;return}i.flags&32768?(jt||l===1?e=!0:xa||(kt&536870912)!==0?e=!1:(Sr=e=!0,(l===2||l===9||l===3||l===6)&&(l=Mn.current,l!==null&&l.tag===13&&(l.flags|=16384))),Zy(i,e)):rc(i)}function rc(e){var i=e;do{if((i.flags&32768)!==0){Zy(i,Sr);return}e=i.return;var a=vS(i.alternate,i,zi);if(a!==null){Nt=a;return}if(i=i.sibling,i!==null){Nt=i;return}Nt=i=e}while(i!==null);ue===0&&(ue=5)}function Zy(e,i){do{var a=TS(e.alternate,e);if(a!==null){a.flags&=32767,Nt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(e=e.sibling,e!==null)){Nt=e;return}Nt=e=a}while(e!==null);ue=6,Nt=null}function Jy(e,i,a,l,h,d,v,T,R){e.cancelPendingCommit=null;do sc();while(ze!==0);if((qt&6)!==0)throw Error(s(327));if(i!==null){if(i===e.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=tf,lu(e,a,d,v,T,R),e===Wt&&(Nt=Wt=null,kt=0),ka=i,Rr=e,Ua=a,ad=d,od=h,qy=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,MS(Ti,function(){return i_(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=K.T,K.T=null,h=rt.p,rt.p=2,v=qt,qt|=4;try{ES(e,i,a)}finally{qt=v,rt.p=h,K.T=l}}ze=1,Wy(),t_(),e_()}}function Wy(){if(ze===1){ze=0;var e=Rr,i=ka,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=K.T,K.T=null;var l=rt.p;rt.p=2;var h=qt;qt|=4;try{Py(i,e);var d=Sd,v=Bg(e.containerInfo),T=d.focusedElem,R=d.selectionRange;if(v!==T&&T&&T.ownerDocument&&jg(T.ownerDocument.documentElement,T)){if(R!==null&&$h(T)){var L=R.start,Y=R.end;if(Y===void 0&&(Y=L),"selectionStart"in T)T.selectionStart=L,T.selectionEnd=Math.min(Y,T.value.length);else{var J=T.ownerDocument||document,z=J&&J.defaultView||window;if(z.getSelection){var j=z.getSelection(),Tt=T.textContent.length,pt=Math.min(R.start,Tt),Yt=R.end===void 0?pt:Math.min(R.end,Tt);!j.extend&&pt>Yt&&(v=Yt,Yt=pt,pt=v);var x=zg(T,pt),M=zg(T,Yt);if(x&&M&&(j.rangeCount!==1||j.anchorNode!==x.node||j.anchorOffset!==x.offset||j.focusNode!==M.node||j.focusOffset!==M.offset)){var k=J.createRange();k.setStart(x.node,x.offset),j.removeAllRanges(),pt>Yt?(j.addRange(k),j.extend(M.node,M.offset)):(k.setEnd(M.node,M.offset),j.addRange(k))}}}}for(J=[],j=T;j=j.parentNode;)j.nodeType===1&&J.push({element:j,left:j.scrollLeft,top:j.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<J.length;T++){var Z=J[T];Z.element.scrollLeft=Z.left,Z.element.scrollTop=Z.top}}yc=!!Ad,Sd=Ad=null}finally{qt=h,rt.p=l,K.T=a}}e.current=i,ze=2}}function t_(){if(ze===2){ze=0;var e=Rr,i=ka,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=K.T,K.T=null;var l=rt.p;rt.p=2;var h=qt;qt|=4;try{Oy(e,i.alternate,i)}finally{qt=h,rt.p=l,K.T=a}}ze=3}}function e_(){if(ze===4||ze===3){ze=0,yo();var e=Rr,i=ka,a=Ua,l=qy;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?ze=5:(ze=0,ka=Rr=null,n_(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(wr=null),Eo(a),i=i.stateNode,Fe&&typeof Fe.onCommitFiberRoot=="function")try{Fe.onCommitFiberRoot(Zi,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=K.T,h=rt.p,rt.p=2,K.T=null;try{for(var d=e.onRecoverableError,v=0;v<l.length;v++){var T=l[v];d(T.value,{componentStack:T.stack})}}finally{K.T=i,rt.p=h}}(Ua&3)!==0&&sc(),hi(e),h=e.pendingLanes,(a&4194090)!==0&&(h&42)!==0?e===ld?ul++:(ul=0,ld=e):ul=0,cl(0)}}function n_(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Ho(i)))}function sc(e){return Wy(),t_(),e_(),i_()}function i_(){if(ze!==5)return!1;var e=Rr,i=ad;ad=0;var a=Eo(Ua),l=K.T,h=rt.p;try{rt.p=32>a?32:a,K.T=null,a=od,od=null;var d=Rr,v=Ua;if(ze=0,ka=Rr=null,Ua=0,(qt&6)!==0)throw Error(s(331));var T=qt;if(qt|=4,jy(d.current),Uy(d,d.current,v,a),qt=T,cl(0,!1),Fe&&typeof Fe.onPostCommitFiberRoot=="function")try{Fe.onPostCommitFiberRoot(Zi,d)}catch{}return!0}finally{rt.p=h,K.T=l,n_(e,i)}}function r_(e,i,a){i=Cn(a,i),i=jf(e.stateNode,i,2),e=pr(e,i,2),e!==null&&(ce(e,2),hi(e))}function Xt(e,i,a){if(e.tag===3)r_(e,e,a);else for(;i!==null;){if(i.tag===3){r_(i,e,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(wr===null||!wr.has(l))){e=Cn(a,e),a=ly(2),l=pr(i,a,2),l!==null&&(uy(a,l,i,e),ce(l,2),hi(l));break}}i=i.return}}function fd(e,i,a){var l=e.pingCache;if(l===null){l=e.pingCache=new bS;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(a)||(nd=!0,h.add(a),e=DS.bind(null,e,i,a),i.then(e,e))}function DS(e,i,a){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Wt===e&&(kt&a)===a&&(ue===4||ue===3&&(kt&62914560)===kt&&300>rn()-sd?(qt&2)===0&&La(e,0):id|=a,Pa===kt&&(Pa=0)),hi(e)}function s_(e,i){i===0&&(i=tr()),e=Ta(e,i),e!==null&&(ce(e,i),hi(e))}function NS(e){var i=e.memoizedState,a=0;i!==null&&(a=i.retryLane),s_(e,a)}function OS(e,i){var a=0;switch(e.tag){case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),s_(e,a)}function MS(e,i){return is(e,i)}var ac=null,ja=null,dd=!1,oc=!1,md=!1,zs=0;function hi(e){e!==ja&&e.next===null&&(ja===null?ac=ja=e:ja=ja.next=e),oc=!0,dd||(dd=!0,xS())}function cl(e,i){if(!md&&oc){md=!0;do for(var a=!1,l=ac;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var v=l.suspendedLanes,T=l.pingedLanes;d=(1<<31-Ze(42|e)+1)-1,d&=h&~(v&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,u_(l,d))}else d=kt,d=bn(l,l===Wt?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||Wi(l,d)||(a=!0,u_(l,d));l=l.next}while(a);md=!1}}function VS(){a_()}function a_(){oc=dd=!1;var e=0;zs!==0&&(qS()&&(e=zs),zs=0);for(var i=rn(),a=null,l=ac;l!==null;){var h=l.next,d=o_(l,i);d===0?(l.next=null,a===null?ac=h:a.next=h,h===null&&(ja=a)):(a=l,(e!==0||(d&3)!==0)&&(oc=!0)),l=h}cl(e)}function o_(e,i){for(var a=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var v=31-Ze(d),T=1<<v,R=h[v];R===-1?((T&a)===0||(T&l)!==0)&&(h[v]=ia(T,i)):R<=i&&(e.expiredLanes|=T),d&=~T}if(i=Wt,a=kt,a=bn(e,e===i?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===i&&(Ht===2||Ht===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&na(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Wi(e,a)){if(i=a&-a,i===e.callbackPriority)return i;switch(l!==null&&na(l),Eo(a)){case 2:case 8:a=Ne;break;case 32:a=Ti;break;case 268435456:a=_o;break;default:a=Ti}return l=l_.bind(null,e),a=is(a,l),e.callbackPriority=i,e.callbackNode=a,i}return l!==null&&l!==null&&na(l),e.callbackPriority=2,e.callbackNode=null,2}function l_(e,i){if(ze!==0&&ze!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(sc()&&e.callbackNode!==a)return null;var l=kt;return l=bn(e,e===Wt?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Fy(e,l,i),o_(e,rn()),e.callbackNode!=null&&e.callbackNode===a?l_.bind(null,e):null)}function u_(e,i){if(sc())return null;Fy(e,i,!0)}function xS(){FS(function(){(qt&6)!==0?is(be,VS):a_()})}function gd(){return zs===0&&(zs=vo()),zs}function c_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:jn(""+e)}function h_(e,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,e.id&&a.setAttribute("form",e.id),i.parentNode.insertBefore(a,i),e=new FormData(e),a.parentNode.removeChild(a),e}function PS(e,i,a,l,h){if(i==="submit"&&a&&a.stateNode===h){var d=c_((h[Ue]||null).action),v=l.submitter;v&&(i=(i=v[Ue]||null)?c_(i.formAction):v.getAttribute("formAction"),i!==null&&(d=i,v=null));var T=new _s("action","action",null,l,h);e.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(zs!==0){var R=v?h_(h,v):new FormData(h);Pf(a,{pending:!0,data:R,method:h.method,action:d},null,R)}}else typeof d=="function"&&(T.preventDefault(),R=v?h_(h,v):new FormData(h),Pf(a,{pending:!0,data:R,method:h.method,action:d},d,R))},currentTarget:h}]})}}for(var pd=0;pd<Wh.length;pd++){var yd=Wh[pd],kS=yd.toLowerCase(),US=yd[0].toUpperCase()+yd.slice(1);Fn(kS,"on"+US)}Fn(Fg,"onAnimationEnd"),Fn(Gg,"onAnimationIteration"),Fn(Qg,"onAnimationStart"),Fn("dblclick","onDoubleClick"),Fn("focusin","onFocus"),Fn("focusout","onBlur"),Fn(tS,"onTransitionRun"),Fn(eS,"onTransitionStart"),Fn(nS,"onTransitionCancel"),Fn(Kg,"onTransitionEnd"),ii("onMouseEnter",["mouseout","mouseover"]),ii("onMouseLeave",["mouseout","mouseover"]),ii("onPointerEnter",["pointerout","pointerover"]),ii("onPointerLeave",["pointerout","pointerover"]),ni("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ni("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ni("onBeforeInput",["compositionend","keypress","textInput","paste"]),ni("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ni("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ni("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),LS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hl));function f_(e,i){i=(i&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],h=l.event;l=l.listeners;t:{var d=void 0;if(i)for(var v=l.length-1;0<=v;v--){var T=l[v],R=T.instance,L=T.currentTarget;if(T=T.listener,R!==d&&h.isPropagationStopped())break t;d=T,h.currentTarget=L;try{d(h)}catch(Y){Yu(Y)}h.currentTarget=null,d=R}else for(v=0;v<l.length;v++){if(T=l[v],R=T.instance,L=T.currentTarget,T=T.listener,R!==d&&h.isPropagationStopped())break t;d=T,h.currentTarget=L;try{d(h)}catch(Y){Yu(Y)}h.currentTarget=null,d=R}}}}function Ot(e,i){var a=i[ss];a===void 0&&(a=i[ss]=new Set);var l=e+"__bubble";a.has(l)||(d_(i,e,2,!1),a.add(l))}function _d(e,i,a){var l=0;i&&(l|=4),d_(a,e,l,i)}var lc="_reactListening"+Math.random().toString(36).slice(2);function vd(e){if(!e[lc]){e[lc]=!0,uu.forEach(function(a){a!=="selectionchange"&&(LS.has(a)||_d(a,!1,e),_d(a,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[lc]||(i[lc]=!0,_d("selectionchange",!1,i))}}function d_(e,i,a,l){switch(U_(i)){case 2:var h=hb;break;case 8:h=fb;break;default:h=Vd}a=h.bind(null,i,a,e),h=void 0,!Ri||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(i,a,{capture:!0,passive:h}):e.addEventListener(i,a,!0):h!==void 0?e.addEventListener(i,a,{passive:h}):e.addEventListener(i,a,!1)}function Td(e,i,a,l,h){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var T=l.stateNode.containerInfo;if(T===h)break;if(v===4)for(v=l.return;v!==null;){var R=v.tag;if((R===3||R===4)&&v.stateNode.containerInfo===h)return;v=v.return}for(;T!==null;){if(v=ti(T),v===null)return;if(R=v.tag,R===5||R===6||R===26||R===27){l=d=v;continue t}T=T.parentNode}}l=l.return}gs(function(){var L=d,Y=Co(a),J=[];t:{var z=Yg.get(e);if(z!==void 0){var j=_s,Tt=e;switch(e){case"keypress":if(ps(a)===0)break t;case"keydown":case"keyup":j=pa;break;case"focusin":Tt="focus",j=da;break;case"focusout":Tt="blur",j=da;break;case"beforeblur":case"afterblur":j=da;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=Ss;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=pu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=fr;break;case Fg:case Gg:case Qg:j=No;break;case Kg:j=m;break;case"scroll":case"scrollend":j=Ts;break;case"wheel":j=A;break;case"copy":case"cut":case"paste":j=_u;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=Vo;break;case"toggle":case"beforetoggle":j=B}var pt=(i&4)!==0,Yt=!pt&&(e==="scroll"||e==="scrollend"),x=pt?z!==null?z+"Capture":null:z;pt=[];for(var M=L,k;M!==null;){var Z=M;if(k=Z.stateNode,Z=Z.tag,Z!==5&&Z!==26&&Z!==27||k===null||x===null||(Z=cr(M,x),Z!=null&&pt.push(fl(M,Z,k))),Yt)break;M=M.return}0<pt.length&&(z=new j(z,Tt,null,a,Y),J.push({event:z,listeners:pt}))}}if((i&7)===0){t:{if(z=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",z&&a!==Io&&(Tt=a.relatedTarget||a.fromElement)&&(ti(Tt)||Tt[Ai]))break t;if((j||z)&&(z=Y.window===Y?Y:(z=Y.ownerDocument)?z.defaultView||z.parentWindow:window,j?(Tt=a.relatedTarget||a.toElement,j=L,Tt=Tt?ti(Tt):null,Tt!==null&&(Yt=u(Tt),pt=Tt.tag,Tt!==Yt||pt!==5&&pt!==27&&pt!==6)&&(Tt=null)):(j=null,Tt=L),j!==Tt)){if(pt=Ss,Z="onMouseLeave",x="onMouseEnter",M="mouse",(e==="pointerout"||e==="pointerover")&&(pt=Vo,Z="onPointerLeave",x="onPointerEnter",M="pointer"),Yt=j==null?z:rr(j),k=Tt==null?z:rr(Tt),z=new pt(Z,M+"leave",j,a,Y),z.target=Yt,z.relatedTarget=k,Z=null,ti(Y)===L&&(pt=new pt(x,M+"enter",Tt,a,Y),pt.target=k,pt.relatedTarget=Yt,Z=pt),Yt=Z,j&&Tt)e:{for(pt=j,x=Tt,M=0,k=pt;k;k=Ba(k))M++;for(k=0,Z=x;Z;Z=Ba(Z))k++;for(;0<M-k;)pt=Ba(pt),M--;for(;0<k-M;)x=Ba(x),k--;for(;M--;){if(pt===x||x!==null&&pt===x.alternate)break e;pt=Ba(pt),x=Ba(x)}pt=null}else pt=null;j!==null&&m_(J,z,j,pt,!1),Tt!==null&&Yt!==null&&m_(J,Yt,Tt,pt,!0)}}t:{if(z=L?rr(L):window,j=z.nodeName&&z.nodeName.toLowerCase(),j==="select"||j==="input"&&z.type==="file")var ut=Vg;else if(Og(z))if(xg)ut=ZA;else{ut=$A;var Dt=YA}else j=z.nodeName,!j||j.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?L&&ca(L.elementType)&&(ut=Vg):ut=XA;if(ut&&(ut=ut(e,L))){Mg(J,ut,a,Y);break t}Dt&&Dt(e,z,L),e==="focusout"&&L&&z.type==="number"&&L.memoizedProps.value!=null&&bo(z,"number",z.value)}switch(Dt=L?rr(L):window,e){case"focusin":(Og(Dt)||Dt.contentEditable==="true")&&(ya=Dt,Xh=L,Lo=null);break;case"focusout":Lo=Xh=ya=null;break;case"mousedown":Zh=!0;break;case"contextmenu":case"mouseup":case"dragend":Zh=!1,qg(J,a,Y);break;case"selectionchange":if(WA)break;case"keydown":case"keyup":qg(J,a,Y)}var ft;if(wt)t:{switch(e){case"compositionstart":var _t="onCompositionStart";break t;case"compositionend":_t="onCompositionEnd";break t;case"compositionupdate":_t="onCompositionUpdate";break t}_t=void 0}else Hn?Bn(e,a)&&(_t="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(_t="onCompositionStart");_t&&(de&&a.locale!=="ko"&&(Hn||_t!=="onCompositionStart"?_t==="onCompositionEnd"&&Hn&&(ft=gu()):(In=Y,Jt="value"in In?In.value:In.textContent,Hn=!0)),Dt=uc(L,_t),0<Dt.length&&(_t=new Mo(_t,e,null,a,Y),J.push({event:_t,listeners:Dt}),ft?_t.data=ft:(ft=qn(a),ft!==null&&(_t.data=ft)))),(ft=Bt?xo(e,a):GA(e,a))&&(_t=uc(L,"onBeforeInput"),0<_t.length&&(Dt=new Mo("onBeforeInput","beforeinput",null,a,Y),J.push({event:Dt,listeners:_t}),Dt.data=ft)),PS(J,e,L,a,Y)}f_(J,i)})}function fl(e,i,a){return{instance:e,listener:i,currentTarget:a}}function uc(e,i){for(var a=i+"Capture",l=[];e!==null;){var h=e,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=cr(e,a),h!=null&&l.unshift(fl(e,h,d)),h=cr(e,i),h!=null&&l.push(fl(e,h,d))),e.tag===3)return l;e=e.return}return[]}function Ba(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function m_(e,i,a,l,h){for(var d=i._reactName,v=[];a!==null&&a!==l;){var T=a,R=T.alternate,L=T.stateNode;if(T=T.tag,R!==null&&R===l)break;T!==5&&T!==26&&T!==27||L===null||(R=L,h?(L=cr(a,d),L!=null&&v.unshift(fl(a,L,R))):h||(L=cr(a,d),L!=null&&v.push(fl(a,L,R)))),a=a.return}v.length!==0&&e.push({event:i,listeners:v})}var zS=/\r\n?/g,jS=/\u0000|\uFFFD/g;function g_(e){return(typeof e=="string"?e:""+e).replace(zS,`
`).replace(jS,"")}function p_(e,i){return i=g_(i),g_(e)===i}function cc(){}function Kt(e,i,a,l,h,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Rn(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Rn(e,""+l);break;case"className":cs(e,"class",l);break;case"tabIndex":cs(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":cs(e,a,l);break;case"style":Ro(e,l,d);break;case"data":if(i!=="object"){cs(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=jn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&Kt(e,i,"name",h.name,h,null),Kt(e,i,"formEncType",h.formEncType,h,null),Kt(e,i,"formMethod",h.formMethod,h,null),Kt(e,i,"formTarget",h.formTarget,h,null)):(Kt(e,i,"encType",h.encType,h,null),Kt(e,i,"method",h.method,h,null),Kt(e,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=jn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=cc);break;case"onScroll":l!=null&&Ot("scroll",e);break;case"onScrollEnd":l!=null&&Ot("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=jn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":Ot("beforetoggle",e),Ot("toggle",e),us(e,"popover",l);break;case"xlinkActuate":wn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":wn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":wn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":wn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":wn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":wn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":wn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":wn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":wn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":us(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=fu.get(a)||a,us(e,a,l))}}function Ed(e,i,a,l,h,d){switch(a){case"style":Ro(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof l=="string"?Rn(e,l):(typeof l=="number"||typeof l=="bigint")&&Rn(e,""+l);break;case"onScroll":l!=null&&Ot("scroll",e);break;case"onScrollEnd":l!=null&&Ot("scrollend",e);break;case"onClick":l!=null&&(e.onclick=cc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!os.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=e[Ue]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(i,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,l,h);break t}a in e?e[a]=l:l===!0?e.setAttribute(a,""):us(e,a,l)}}}function je(e,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ot("error",e),Ot("load",e);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Kt(e,i,d,v,a,null)}}h&&Kt(e,i,"srcSet",a.srcSet,a,null),l&&Kt(e,i,"src",a.src,a,null);return;case"input":Ot("invalid",e);var T=d=v=h=null,R=null,L=null;for(l in a)if(a.hasOwnProperty(l)){var Y=a[l];if(Y!=null)switch(l){case"name":h=Y;break;case"type":v=Y;break;case"checked":R=Y;break;case"defaultChecked":L=Y;break;case"value":d=Y;break;case"defaultValue":T=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,i));break;default:Kt(e,i,l,Y,a,null)}}So(e,d,T,R,L,v,h,!1),or(e);return;case"select":Ot("invalid",e),l=v=d=null;for(h in a)if(a.hasOwnProperty(h)&&(T=a[h],T!=null))switch(h){case"value":d=T;break;case"defaultValue":v=T;break;case"multiple":l=T;default:Kt(e,i,h,T,a,null)}i=d,a=v,e.multiple=!!l,i!=null?lr(e,!!l,i,!1):a!=null&&lr(e,!!l,a,!0);return;case"textarea":Ot("invalid",e),d=h=l=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":l=T;break;case"defaultValue":h=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Kt(e,i,v,T,a,null)}hu(e,l,h,d),or(e);return;case"option":for(R in a)if(a.hasOwnProperty(R)&&(l=a[R],l!=null))switch(R){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Kt(e,i,R,l,a,null)}return;case"dialog":Ot("beforetoggle",e),Ot("toggle",e),Ot("cancel",e),Ot("close",e);break;case"iframe":case"object":Ot("load",e);break;case"video":case"audio":for(l=0;l<hl.length;l++)Ot(hl[l],e);break;case"image":Ot("error",e),Ot("load",e);break;case"details":Ot("toggle",e);break;case"embed":case"source":case"link":Ot("error",e),Ot("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in a)if(a.hasOwnProperty(L)&&(l=a[L],l!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Kt(e,i,L,l,a,null)}return;default:if(ca(i)){for(Y in a)a.hasOwnProperty(Y)&&(l=a[Y],l!==void 0&&Ed(e,i,Y,l,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(l=a[T],l!=null&&Kt(e,i,T,l,a,null))}function BS(e,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,v=null,T=null,R=null,L=null,Y=null;for(j in a){var J=a[j];if(a.hasOwnProperty(j)&&J!=null)switch(j){case"checked":break;case"value":break;case"defaultValue":R=J;default:l.hasOwnProperty(j)||Kt(e,i,j,null,l,J)}}for(var z in l){var j=l[z];if(J=a[z],l.hasOwnProperty(z)&&(j!=null||J!=null))switch(z){case"type":d=j;break;case"name":h=j;break;case"checked":L=j;break;case"defaultChecked":Y=j;break;case"value":v=j;break;case"defaultValue":T=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(s(137,i));break;default:j!==J&&Kt(e,i,z,j,l,J)}}Ao(e,v,T,R,L,Y,d,h);return;case"select":j=v=T=z=null;for(d in a)if(R=a[d],a.hasOwnProperty(d)&&R!=null)switch(d){case"value":break;case"multiple":j=R;default:l.hasOwnProperty(d)||Kt(e,i,d,null,l,R)}for(h in l)if(d=l[h],R=a[h],l.hasOwnProperty(h)&&(d!=null||R!=null))switch(h){case"value":z=d;break;case"defaultValue":T=d;break;case"multiple":v=d;default:d!==R&&Kt(e,i,h,d,l,R)}i=T,a=v,l=j,z!=null?lr(e,!!a,z,!1):!!l!=!!a&&(i!=null?lr(e,!!a,i,!0):lr(e,!!a,a?[]:"",!1));return;case"textarea":j=z=null;for(T in a)if(h=a[T],a.hasOwnProperty(T)&&h!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Kt(e,i,T,null,l,h)}for(v in l)if(h=l[v],d=a[v],l.hasOwnProperty(v)&&(h!=null||d!=null))switch(v){case"value":z=h;break;case"defaultValue":j=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&Kt(e,i,v,h,l,d)}cu(e,z,j);return;case"option":for(var Tt in a)if(z=a[Tt],a.hasOwnProperty(Tt)&&z!=null&&!l.hasOwnProperty(Tt))switch(Tt){case"selected":e.selected=!1;break;default:Kt(e,i,Tt,null,l,z)}for(R in l)if(z=l[R],j=a[R],l.hasOwnProperty(R)&&z!==j&&(z!=null||j!=null))switch(R){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Kt(e,i,R,z,l,j)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var pt in a)z=a[pt],a.hasOwnProperty(pt)&&z!=null&&!l.hasOwnProperty(pt)&&Kt(e,i,pt,null,l,z);for(L in l)if(z=l[L],j=a[L],l.hasOwnProperty(L)&&z!==j&&(z!=null||j!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,i));break;default:Kt(e,i,L,z,l,j)}return;default:if(ca(i)){for(var Yt in a)z=a[Yt],a.hasOwnProperty(Yt)&&z!==void 0&&!l.hasOwnProperty(Yt)&&Ed(e,i,Yt,void 0,l,z);for(Y in l)z=l[Y],j=a[Y],!l.hasOwnProperty(Y)||z===j||z===void 0&&j===void 0||Ed(e,i,Y,z,l,j);return}}for(var x in a)z=a[x],a.hasOwnProperty(x)&&z!=null&&!l.hasOwnProperty(x)&&Kt(e,i,x,null,l,z);for(J in l)z=l[J],j=a[J],!l.hasOwnProperty(J)||z===j||z==null&&j==null||Kt(e,i,J,z,l,j)}var Ad=null,Sd=null;function hc(e){return e.nodeType===9?e:e.ownerDocument}function y_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function __(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function bd(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var wd=null;function qS(){var e=window.event;return e&&e.type==="popstate"?e===wd?!1:(wd=e,!0):(wd=null,!1)}var v_=typeof setTimeout=="function"?setTimeout:void 0,HS=typeof clearTimeout=="function"?clearTimeout:void 0,T_=typeof Promise=="function"?Promise:void 0,FS=typeof queueMicrotask=="function"?queueMicrotask:typeof T_<"u"?function(e){return T_.resolve(null).then(e).catch(GS)}:v_;function GS(e){setTimeout(function(){throw e})}function Cr(e){return e==="head"}function E_(e,i){var a=i,l=0,h=0;do{var d=a.nextSibling;if(e.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<l&&8>l){a=l;var v=e.ownerDocument;if(a&1&&dl(v.documentElement),a&2&&dl(v.body),a&4)for(a=v.head,dl(a),v=a.firstChild;v;){var T=v.nextSibling,R=v.nodeName;v[ir]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&v.rel.toLowerCase()==="stylesheet"||a.removeChild(v),v=T}}if(h===0){e.removeChild(d),El(i);return}h--}else a==="$"||a==="$?"||a==="$!"?h++:l=a.charCodeAt(0)-48;else l=0;a=d}while(a);El(i)}function Rd(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Rd(a),sa(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function QS(e,i,a,l){for(;e.nodeType===1;){var h=a;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[ir])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Qn(e.nextSibling),e===null)break}return null}function KS(e,i,a){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Qn(e.nextSibling),e===null))return null;return e}function Id(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function YS(e,i){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Qn(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var Cd=null;function A_(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return e;i--}else a==="/$"&&i++}e=e.previousSibling}return null}function S_(e,i,a){switch(i=hc(a),e){case"html":if(e=i.documentElement,!e)throw Error(s(452));return e;case"head":if(e=i.head,!e)throw Error(s(453));return e;case"body":if(e=i.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function dl(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);sa(e)}var xn=new Map,b_=new Set;function fc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ji=rt.d;rt.d={f:$S,r:XS,D:ZS,C:JS,L:WS,m:tb,X:nb,S:eb,M:ib};function $S(){var e=ji.f(),i=ic();return e||i}function XS(e){var i=ei(e);i!==null&&i.tag===5&&i.type==="form"?Fp(i):ji.r(e)}var qa=typeof document>"u"?null:document;function w_(e,i,a){var l=qa;if(l&&typeof i=="string"&&i){var h=Oe(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),b_.has(h)||(b_.add(h),e={rel:e,crossOrigin:a,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),je(i,"link",e),fe(i),l.head.appendChild(i)))}}function ZS(e){ji.D(e),w_("dns-prefetch",e,null)}function JS(e,i){ji.C(e,i),w_("preconnect",e,i)}function WS(e,i,a){ji.L(e,i,a);var l=qa;if(l&&e&&i){var h='link[rel="preload"][as="'+Oe(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+Oe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+Oe(a.imageSizes)+'"]')):h+='[href="'+Oe(e)+'"]';var d=h;switch(i){case"style":d=Ha(e);break;case"script":d=Fa(e)}xn.has(d)||(e=E({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:e,as:i},a),xn.set(d,e),l.querySelector(h)!==null||i==="style"&&l.querySelector(ml(d))||i==="script"&&l.querySelector(gl(d))||(i=l.createElement("link"),je(i,"link",e),fe(i),l.head.appendChild(i)))}}function tb(e,i){ji.m(e,i);var a=qa;if(a&&e){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+Oe(l)+'"][href="'+Oe(e)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Fa(e)}if(!xn.has(d)&&(e=E({rel:"modulepreload",href:e},i),xn.set(d,e),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(gl(d)))return}l=a.createElement("link"),je(l,"link",e),fe(l),a.head.appendChild(l)}}}function eb(e,i,a){ji.S(e,i,a);var l=qa;if(l&&e){var h=sr(l).hoistableStyles,d=Ha(e);i=i||"default";var v=h.get(d);if(!v){var T={loading:0,preload:null};if(v=l.querySelector(ml(d)))T.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":i},a),(a=xn.get(d))&&Dd(e,a);var R=v=l.createElement("link");fe(R),je(R,"link",e),R._p=new Promise(function(L,Y){R.onload=L,R.onerror=Y}),R.addEventListener("load",function(){T.loading|=1}),R.addEventListener("error",function(){T.loading|=2}),T.loading|=4,dc(v,i,l)}v={type:"stylesheet",instance:v,count:1,state:T},h.set(d,v)}}}function nb(e,i){ji.X(e,i);var a=qa;if(a&&e){var l=sr(a).hoistableScripts,h=Fa(e),d=l.get(h);d||(d=a.querySelector(gl(h)),d||(e=E({src:e,async:!0},i),(i=xn.get(h))&&Nd(e,i),d=a.createElement("script"),fe(d),je(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function ib(e,i){ji.M(e,i);var a=qa;if(a&&e){var l=sr(a).hoistableScripts,h=Fa(e),d=l.get(h);d||(d=a.querySelector(gl(h)),d||(e=E({src:e,async:!0,type:"module"},i),(i=xn.get(h))&&Nd(e,i),d=a.createElement("script"),fe(d),je(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function R_(e,i,a,l){var h=(h=yt.current)?fc(h):null;if(!h)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=Ha(a.href),a=sr(h).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ha(a.href);var d=sr(h).hoistableStyles,v=d.get(e);if(v||(h=h.ownerDocument||h,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,v),(d=h.querySelector(ml(e)))&&!d._p&&(v.instance=d,v.state.loading=5),xn.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},xn.set(e,a),d||rb(h,e,a,v.state))),i&&l===null)throw Error(s(528,""));return v}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Fa(a),a=sr(h).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Ha(e){return'href="'+Oe(e)+'"'}function ml(e){return'link[rel="stylesheet"]['+e+"]"}function I_(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function rb(e,i,a,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),je(i,"link",a),fe(i),e.head.appendChild(i))}function Fa(e){return'[src="'+Oe(e)+'"]'}function gl(e){return"script[async]"+e}function C_(e,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+Oe(a.href)+'"]');if(l)return i.instance=l,fe(l),l;var h=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),fe(l),je(l,"style",h),dc(l,a.precedence,e),i.instance=l;case"stylesheet":h=Ha(a.href);var d=e.querySelector(ml(h));if(d)return i.state.loading|=4,i.instance=d,fe(d),d;l=I_(a),(h=xn.get(h))&&Dd(l,h),d=(e.ownerDocument||e).createElement("link"),fe(d);var v=d;return v._p=new Promise(function(T,R){v.onload=T,v.onerror=R}),je(d,"link",l),i.state.loading|=4,dc(d,a.precedence,e),i.instance=d;case"script":return d=Fa(a.src),(h=e.querySelector(gl(d)))?(i.instance=h,fe(h),h):(l=a,(h=xn.get(d))&&(l=E({},a),Nd(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),fe(h),je(h,"link",l),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,dc(l,a.precedence,e));return i.instance}function dc(e,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,v=0;v<l.length;v++){var T=l[v];if(T.dataset.precedence===i)d=T;else if(d!==h)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(e,i.firstChild))}function Dd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Nd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var mc=null;function D_(e,i,a){if(mc===null){var l=new Map,h=mc=new Map;h.set(a,l)}else h=mc,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),h=0;h<a.length;h++){var d=a[h];if(!(d[ir]||d[he]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(i)||"";v=e+v;var T=l.get(v);T?T.push(d):l.set(v,[d])}}return l}function N_(e,i,a){e=e.ownerDocument||e,e.head.insertBefore(a,i==="title"?e.querySelector("head > title"):null)}function sb(e,i,a){if(a===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function O_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var pl=null;function ab(){}function ob(e,i,a){if(pl===null)throw Error(s(475));var l=pl;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=Ha(a.href),d=e.querySelector(ml(h));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=gc.bind(l),e.then(l,l)),i.state.loading|=4,i.instance=d,fe(d);return}d=e.ownerDocument||e,a=I_(a),(h=xn.get(h))&&Dd(a,h),d=d.createElement("link"),fe(d);var v=d;v._p=new Promise(function(T,R){v.onload=T,v.onerror=R}),je(d,"link",a),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=gc.bind(l),e.addEventListener("load",i),e.addEventListener("error",i))}}function lb(){if(pl===null)throw Error(s(475));var e=pl;return e.stylesheets&&e.count===0&&Od(e,e.stylesheets),0<e.count?function(i){var a=setTimeout(function(){if(e.stylesheets&&Od(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(a)}}:null}function gc(){if(this.count--,this.count===0){if(this.stylesheets)Od(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var pc=null;function Od(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,pc=new Map,i.forEach(ub,e),pc=null,gc.call(e))}function ub(e,i){if(!(i.state.loading&4)){var a=pc.get(e);if(a)var l=a.get(null);else{a=new Map,pc.set(e,a);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var v=h[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),l=v)}l&&a.set(null,l)}h=i.instance,v=h.getAttribute("data-precedence"),d=a.get(v)||l,d===l&&a.set(null,h),a.set(v,h),this.count++,l=gc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var yl={$$typeof:ot,Provider:null,Consumer:null,_currentValue:dt,_currentValue2:dt,_threadCount:0};function cb(e,i,a,l,h,d,v,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ra(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ra(0),this.hiddenUpdates=ra(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function M_(e,i,a,l,h,d,v,T,R,L,Y,J){return e=new cb(e,i,a,v,T,R,L,J),i=1,d===!0&&(i|=24),d=dn(3,null,null,i),e.current=d,d.stateNode=e,i=ff(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},pf(d),e}function V_(e){return e?(e=Ea,e):Ea}function x_(e,i,a,l,h,d){h=V_(h),l.context===null?l.context=h:l.pendingContext=h,l=gr(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=pr(e,l,i),a!==null&&(_n(a,e,i),Ko(a,e,i))}function P_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<i?a:i}}function Md(e,i){P_(e,i),(e=e.alternate)&&P_(e,i)}function k_(e){if(e.tag===13){var i=Ta(e,67108864);i!==null&&_n(i,e,67108864),Md(e,67108864)}}var yc=!0;function hb(e,i,a,l){var h=K.T;K.T=null;var d=rt.p;try{rt.p=2,Vd(e,i,a,l)}finally{rt.p=d,K.T=h}}function fb(e,i,a,l){var h=K.T;K.T=null;var d=rt.p;try{rt.p=8,Vd(e,i,a,l)}finally{rt.p=d,K.T=h}}function Vd(e,i,a,l){if(yc){var h=xd(l);if(h===null)Td(e,i,l,_c,a),L_(e,l);else if(mb(h,e,i,a,l))l.stopPropagation();else if(L_(e,l),i&4&&-1<db.indexOf(e)){for(;h!==null;){var d=ei(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=Un(d.pendingLanes);if(v!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var R=1<<31-Ze(v);T.entanglements[1]|=R,v&=~R}hi(d),(qt&6)===0&&(ec=rn()+500,cl(0))}}break;case 13:T=Ta(d,2),T!==null&&_n(T,d,2),ic(),Md(d,2)}if(d=xd(l),d===null&&Td(e,i,l,_c,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else Td(e,i,l,null,a)}}function xd(e){return e=Co(e),Pd(e)}var _c=null;function Pd(e){if(_c=null,e=ti(e),e!==null){var i=u(e);if(i===null)e=null;else{var a=i.tag;if(a===13){if(e=f(i),e!==null)return e;e=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return _c=e,null}function U_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(su()){case be:return 2;case Ne:return 8;case Ti:case zh:return 32;case _o:return 268435456;default:return 32}default:return 32}}var kd=!1,Dr=null,Nr=null,Or=null,_l=new Map,vl=new Map,Mr=[],db="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function L_(e,i){switch(e){case"focusin":case"focusout":Dr=null;break;case"dragenter":case"dragleave":Nr=null;break;case"mouseover":case"mouseout":Or=null;break;case"pointerover":case"pointerout":_l.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":vl.delete(i.pointerId)}}function Tl(e,i,a,l,h,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},i!==null&&(i=ei(i),i!==null&&k_(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function mb(e,i,a,l,h){switch(i){case"focusin":return Dr=Tl(Dr,e,i,a,l,h),!0;case"dragenter":return Nr=Tl(Nr,e,i,a,l,h),!0;case"mouseover":return Or=Tl(Or,e,i,a,l,h),!0;case"pointerover":var d=h.pointerId;return _l.set(d,Tl(_l.get(d)||null,e,i,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,vl.set(d,Tl(vl.get(d)||null,e,i,a,l,h)),!0}return!1}function z_(e){var i=ti(e.target);if(i!==null){var a=u(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){e.blockedOn=i,qh(e.priority,function(){if(a.tag===13){var l=yn();l=To(l);var h=Ta(a,l);h!==null&&_n(h,a,l),Md(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var a=xd(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Io=l,a.target.dispatchEvent(l),Io=null}else return i=ei(a),i!==null&&k_(i),e.blockedOn=a,!1;i.shift()}return!0}function j_(e,i,a){vc(e)&&a.delete(i)}function gb(){kd=!1,Dr!==null&&vc(Dr)&&(Dr=null),Nr!==null&&vc(Nr)&&(Nr=null),Or!==null&&vc(Or)&&(Or=null),_l.forEach(j_),vl.forEach(j_)}function Tc(e,i){e.blockedOn===i&&(e.blockedOn=null,kd||(kd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,gb)))}var Ec=null;function B_(e){Ec!==e&&(Ec=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Ec===e&&(Ec=null);for(var i=0;i<e.length;i+=3){var a=e[i],l=e[i+1],h=e[i+2];if(typeof l!="function"){if(Pd(l||a)===null)continue;break}var d=ei(a);d!==null&&(e.splice(i,3),i-=3,Pf(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function El(e){function i(R){return Tc(R,e)}Dr!==null&&Tc(Dr,e),Nr!==null&&Tc(Nr,e),Or!==null&&Tc(Or,e),_l.forEach(i),vl.forEach(i);for(var a=0;a<Mr.length;a++){var l=Mr[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Mr.length&&(a=Mr[0],a.blockedOn===null);)z_(a),a.blockedOn===null&&Mr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],v=h[Ue]||null;if(typeof d=="function")v||B_(a);else if(v){var T=null;if(d&&d.hasAttribute("formAction")){if(h=d,v=d[Ue]||null)T=v.formAction;else if(Pd(h)!==null)continue}else T=v.action;typeof T=="function"?a[l+1]=T:(a.splice(l,3),l-=3),B_(a)}}}function Ud(e){this._internalRoot=e}Ac.prototype.render=Ud.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=yn();x_(a,l,e,i,null,null)},Ac.prototype.unmount=Ud.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;x_(e.current,2,null,e,null,null),ic(),i[Ai]=null}};function Ac(e){this._internalRoot=e}Ac.prototype.unstable_scheduleHydration=function(e){if(e){var i=Ei();e={blockedOn:null,target:e,priority:i};for(var a=0;a<Mr.length&&i!==0&&i<Mr[a].priority;a++);Mr.splice(a,0,e),a===0&&z_(e)}};var q_=t.version;if(q_!=="19.1.1")throw Error(s(527,q_,"19.1.1"));rt.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=y(i),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var pb={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:K,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sc.isDisabled&&Sc.supportsFiber)try{Zi=Sc.inject(pb),Fe=Sc}catch{}}return Sl.createRoot=function(e,i){if(!o(e))throw Error(s(299));var a=!1,l="",h=ry,d=sy,v=ay,T=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(T=i.unstable_transitionCallbacks)),i=M_(e,1,!1,null,null,a,l,h,d,v,T,null),e[Ai]=i.current,vd(e),new Ud(i)},Sl.hydrateRoot=function(e,i,a){if(!o(e))throw Error(s(299));var l=!1,h="",d=ry,v=sy,T=ay,R=null,L=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(R=a.unstable_transitionCallbacks),a.formState!==void 0&&(L=a.formState)),i=M_(e,1,!0,i,a??null,l,h,d,v,T,R,L),i.context=V_(null),a=i.current,l=yn(),l=To(l),h=gr(l),h.callback=null,pr(a,h,l),a=l,i.current.lanes=a,ce(i,a),hi(i),e[Ai]=i.current,vd(e),new Ac(i)},Sl.version="19.1.1",Sl}var J_;function Ib(){if(J_)return jd.exports;J_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),jd.exports=Rb(),jd.exports}var Cb=Ib();const Db=GT(Cb),Nb=()=>{};var W_={};/**
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
 */const QT=function(r){const t=[];let n=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},Ob=function(r){const t=[];let n=0,s=0;for(;n<r.length;){const o=r[n++];if(o<128)t[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[n++];t[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[n++],f=r[n++],g=r[n++],y=((o&7)<<18|(u&63)<<12|(f&63)<<6|g&63)-65536;t[s++]=String.fromCharCode(55296+(y>>10)),t[s++]=String.fromCharCode(56320+(y&1023))}else{const u=r[n++],f=r[n++];t[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return t.join("")},KT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],f=o+1<r.length,g=f?r[o+1]:0,y=o+2<r.length,p=y?r[o+2]:0,E=u>>2,b=(u&3)<<4|g>>4;let D=(g&15)<<2|p>>6,q=p&63;y||(q=64,f||(D=64)),s.push(n[E],n[b],n[D],n[q])}return s.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(QT(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):Ob(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=n[r.charAt(o++)],g=o<r.length?n[r.charAt(o)]:0;++o;const p=o<r.length?n[r.charAt(o)]:64;++o;const b=o<r.length?n[r.charAt(o)]:64;if(++o,u==null||g==null||p==null||b==null)throw new Mb;const D=u<<2|g>>4;if(s.push(D),p!==64){const q=g<<4&240|p>>2;if(s.push(q),b!==64){const H=p<<6&192|b;s.push(H)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Mb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Vb=function(r){const t=QT(r);return KT.encodeByteArray(t,!0)},Bc=function(r){return Vb(r).replace(/\./g,"")},YT=function(r){try{return KT.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function xb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Pb=()=>xb().__FIREBASE_DEFAULTS__,kb=()=>{if(typeof process>"u"||typeof W_>"u")return;const r=W_.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Ub=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&YT(r[1]);return t&&JSON.parse(t)},fh=()=>{try{return Nb()||Pb()||kb()||Ub()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},$T=r=>fh()?.emulatorHosts?.[r],Lb=r=>{const t=$T(r);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},XT=()=>fh()?.config,ZT=r=>fh()?.[`_${r}`];/**
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
 */class zb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function lo(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function JT(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function jb(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Bc(JSON.stringify(n)),Bc(JSON.stringify(f)),""].join(".")}const Dl={};function Bb(){const r={prod:[],emulator:[]};for(const t of Object.keys(Dl))Dl[t]?r.emulator.push(t):r.prod.push(t);return r}function qb(r){let t=document.getElementById(r),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",r),n=!0),{created:n,element:t}}let tv=!1;function WT(r,t){if(typeof window>"u"||typeof document>"u"||!lo(window.location.host)||Dl[r]===t||Dl[r]||tv)return;Dl[r]=t;function n(D){return`__firebase__banner__${D}`}const s="__firebase__banner",u=Bb().prod.length>0;function f(){const D=document.getElementById(s);D&&D.remove()}function g(D){D.style.display="flex",D.style.background="#7faaf0",D.style.position="fixed",D.style.bottom="5px",D.style.left="5px",D.style.padding=".5em",D.style.borderRadius="5px",D.style.alignItems="center"}function y(D,q){D.setAttribute("width","24"),D.setAttribute("id",q),D.setAttribute("height","24"),D.setAttribute("viewBox","0 0 24 24"),D.setAttribute("fill","none"),D.style.marginLeft="-6px"}function p(){const D=document.createElement("span");return D.style.cursor="pointer",D.style.marginLeft="16px",D.style.fontSize="24px",D.innerHTML=" &times;",D.onclick=()=>{tv=!0,f()},D}function E(D,q){D.setAttribute("id",q),D.innerText="Learn more",D.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",D.setAttribute("target","__blank"),D.style.paddingLeft="5px",D.style.textDecoration="underline"}function b(){const D=qb(s),q=n("text"),H=document.getElementById(q)||document.createElement("span"),$=n("learnmore"),F=document.getElementById($)||document.createElement("a"),tt=n("preprendIcon"),it=document.getElementById(tt)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(D.created){const ot=D.element;g(ot),E(F,$);const St=p();y(it,tt),ot.append(it,H,F,St),document.body.appendChild(ot)}u?(H.innerText="Preview backend disconnected.",it.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(it.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,H.innerText="Preview backend running in this workspace."),H.setAttribute("id",q)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",b):b()}/**
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
 */function Xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())}function Fb(){const r=fh()?.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Gb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function tE(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Qb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Kb(){const r=Xe();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Yb(){return!Fb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function eE(){try{return typeof indexedDB=="object"}catch{return!1}}function nE(){return new Promise((r,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{t(o.error?.message||"")}}catch(n){t(n)}})}function $b(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Xb="FirebaseError";class Zn extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=Xb,Object.setPrototypeOf(this,Zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xs.prototype.create)}}class Xs{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},o=`${this.service}/${t}`,u=this.errors[t],f=u?Zb(u,s):"Error",g=`${this.serviceName}: ${f} (${o}).`;return new Zn(o,g,s)}}function Zb(r,t){return r.replace(Jb,(n,s)=>{const o=t[s];return o!=null?String(o):`<${s}?>`})}const Jb=/\{\$([^}]+)}/g;function Wb(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}function Qr(r,t){if(r===t)return!0;const n=Object.keys(r),s=Object.keys(t);for(const o of n){if(!s.includes(o))return!1;const u=r[o],f=t[o];if(ev(u)&&ev(f)){if(!Qr(u,f))return!1}else if(u!==f)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function ev(r){return r!==null&&typeof r=="object"}/**
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
 */function Ql(r){const t=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function tw(r,t){const n=new ew(r,t);return n.subscribe.bind(n)}class ew{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,s){let o;if(t===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");nw(t,["next","error","complete"])?o=t:o={next:t,error:n,complete:s},o.next===void 0&&(o.next=Fd),o.error===void 0&&(o.error=Fd),o.complete===void 0&&(o.complete=Fd);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function nw(r,t){if(typeof r!="object"||r===null)return!1;for(const n of t)if(n in r&&typeof r[n]=="function")return!0;return!1}function Fd(){}/**
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
 */const iw=1e3,rw=2,sw=14400*1e3,aw=.5;function nv(r,t=iw,n=rw){const s=t*Math.pow(n,r),o=Math.round(aw*s*(Math.random()-.5)*2);return Math.min(sw,s+o)}/**
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
 */function De(r){return r&&r._delegate?r._delegate:r}class $n{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Bs="[DEFAULT]";/**
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
 */class ow{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new zb;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t?.identifier),s=t?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(uw(t))try{this.getOrInitializeService({instanceIdentifier:Bs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(t=Bs){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Bs){return this.instances.has(t)}getOptions(t=Bs){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,f]of this.instancesDeferred.entries()){const g=this.normalizeInstanceIdentifier(u);s===g&&f.resolve(o)}return o}onInit(t,n){const s=this.normalizeInstanceIdentifier(n),o=this.onInitCallbacks.get(s)??new Set;o.add(t),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&t(u,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:lw(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Bs){return this.component?this.component.multipleInstances?t:Bs:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lw(r){return r===Bs?void 0:r}function uw(r){return r.instantiationMode==="EAGER"}/**
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
 */class cw{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new ow(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Mt;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Mt||(Mt={}));const hw={debug:Mt.DEBUG,verbose:Mt.VERBOSE,info:Mt.INFO,warn:Mt.WARN,error:Mt.ERROR,silent:Mt.SILENT},fw=Mt.INFO,dw={[Mt.DEBUG]:"log",[Mt.VERBOSE]:"log",[Mt.INFO]:"info",[Mt.WARN]:"warn",[Mt.ERROR]:"error"},mw=(r,t,...n)=>{if(t<r.logLevel)return;const s=new Date().toISOString(),o=dw[t];if(o)console[o](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class dh{constructor(t){this.name=t,this._logLevel=fw,this._logHandler=mw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Mt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?hw[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Mt.DEBUG,...t),this._logHandler(this,Mt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Mt.VERBOSE,...t),this._logHandler(this,Mt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Mt.INFO,...t),this._logHandler(this,Mt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Mt.WARN,...t),this._logHandler(this,Mt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Mt.ERROR,...t),this._logHandler(this,Mt.ERROR,...t)}}const gw=(r,t)=>t.some(n=>r instanceof n);let iv,rv;function pw(){return iv||(iv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yw(){return rv||(rv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const iE=new WeakMap,am=new WeakMap,rE=new WeakMap,Gd=new WeakMap,Vm=new WeakMap;function _w(r){const t=new Promise((n,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",f)},u=()=>{n(jr(r.result)),o()},f=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",f)});return t.then(n=>{n instanceof IDBCursor&&iE.set(n,r)}).catch(()=>{}),Vm.set(t,r),t}function vw(r){if(am.has(r))return;const t=new Promise((n,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",f),r.removeEventListener("abort",f)},u=()=>{n(),o()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",f),r.addEventListener("abort",f)});am.set(r,t)}let om={get(r,t,n){if(r instanceof IDBTransaction){if(t==="done")return am.get(r);if(t==="objectStoreNames")return r.objectStoreNames||rE.get(r);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return jr(r[t])},set(r,t,n){return r[t]=n,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function Tw(r){om=r(om)}function Ew(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=r.call(Qd(this),t,...n);return rE.set(s,t.sort?t.sort():[t]),jr(s)}:yw().includes(r)?function(...t){return r.apply(Qd(this),t),jr(iE.get(this))}:function(...t){return jr(r.apply(Qd(this),t))}}function Aw(r){return typeof r=="function"?Ew(r):(r instanceof IDBTransaction&&vw(r),gw(r,pw())?new Proxy(r,om):r)}function jr(r){if(r instanceof IDBRequest)return _w(r);if(Gd.has(r))return Gd.get(r);const t=Aw(r);return t!==r&&(Gd.set(r,t),Vm.set(t,r)),t}const Qd=r=>Vm.get(r);function sE(r,t,{blocked:n,upgrade:s,blocking:o,terminated:u}={}){const f=indexedDB.open(r,t),g=jr(f);return s&&f.addEventListener("upgradeneeded",y=>{s(jr(f.result),y.oldVersion,y.newVersion,jr(f.transaction),y)}),n&&f.addEventListener("blocked",y=>n(y.oldVersion,y.newVersion,y)),g.then(y=>{u&&y.addEventListener("close",()=>u()),o&&y.addEventListener("versionchange",p=>o(p.oldVersion,p.newVersion,p))}).catch(()=>{}),g}const Sw=["get","getKey","getAll","getAllKeys","count"],bw=["put","add","delete","clear"],Kd=new Map;function sv(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(Kd.get(t))return Kd.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,o=bw.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||Sw.includes(n)))return;const u=async function(f,...g){const y=this.transaction(f,o?"readwrite":"readonly");let p=y.store;return s&&(p=p.index(g.shift())),(await Promise.all([p[n](...g),o&&y.done]))[0]};return Kd.set(t,u),u}Tw(r=>({...r,get:(t,n,s)=>sv(t,n)||r.get(t,n,s),has:(t,n)=>!!sv(t,n)||r.has(t,n)}));/**
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
 */class ww{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Rw(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Rw(r){return r.getComponent()?.type==="VERSION"}const lm="@firebase/app",av="0.14.3";/**
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
 */const Qi=new dh("@firebase/app"),Iw="@firebase/app-compat",Cw="@firebase/analytics-compat",Dw="@firebase/analytics",Nw="@firebase/app-check-compat",Ow="@firebase/app-check",Mw="@firebase/auth",Vw="@firebase/auth-compat",xw="@firebase/database",Pw="@firebase/data-connect",kw="@firebase/database-compat",Uw="@firebase/functions",Lw="@firebase/functions-compat",zw="@firebase/installations",jw="@firebase/installations-compat",Bw="@firebase/messaging",qw="@firebase/messaging-compat",Hw="@firebase/performance",Fw="@firebase/performance-compat",Gw="@firebase/remote-config",Qw="@firebase/remote-config-compat",Kw="@firebase/storage",Yw="@firebase/storage-compat",$w="@firebase/firestore",Xw="@firebase/ai",Zw="@firebase/firestore-compat",Jw="firebase",Ww="12.3.0";/**
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
 */const um="[DEFAULT]",t1={[lm]:"fire-core",[Iw]:"fire-core-compat",[Dw]:"fire-analytics",[Cw]:"fire-analytics-compat",[Ow]:"fire-app-check",[Nw]:"fire-app-check-compat",[Mw]:"fire-auth",[Vw]:"fire-auth-compat",[xw]:"fire-rtdb",[Pw]:"fire-data-connect",[kw]:"fire-rtdb-compat",[Uw]:"fire-fn",[Lw]:"fire-fn-compat",[zw]:"fire-iid",[jw]:"fire-iid-compat",[Bw]:"fire-fcm",[qw]:"fire-fcm-compat",[Hw]:"fire-perf",[Fw]:"fire-perf-compat",[Gw]:"fire-rc",[Qw]:"fire-rc-compat",[Kw]:"fire-gcs",[Yw]:"fire-gcs-compat",[$w]:"fire-fst",[Zw]:"fire-fst-compat",[Xw]:"fire-vertex","fire-js":"fire-js",[Jw]:"fire-js-all"};/**
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
 */const qc=new Map,e1=new Map,cm=new Map;function ov(r,t){try{r.container.addComponent(t)}catch(n){Qi.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,n)}}function _i(r){const t=r.name;if(cm.has(t))return Qi.debug(`There were multiple attempts to register component ${t}.`),!1;cm.set(t,r);for(const n of qc.values())ov(n,r);for(const n of e1.values())ov(n,r);return!0}function Zs(r,t){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(t)}function Kn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const n1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Br=new Xs("app","Firebase",n1);/**
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
 */class i1{constructor(t,n,s){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new $n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Br.create("app-deleted",{appName:this._name})}}/**
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
 */const uo=Ww;function aE(r,t={}){let n=r;typeof t!="object"&&(t={name:t});const s={name:um,automaticDataCollectionEnabled:!0,...t},o=s.name;if(typeof o!="string"||!o)throw Br.create("bad-app-name",{appName:String(o)});if(n||(n=XT()),!n)throw Br.create("no-options");const u=qc.get(o);if(u){if(Qr(n,u.options)&&Qr(s,u.config))return u;throw Br.create("duplicate-app",{appName:o})}const f=new cw(o);for(const y of cm.values())f.addComponent(y);const g=new i1(n,s,f);return qc.set(o,g),g}function xm(r=um){const t=qc.get(r);if(!t&&r===um&&XT())return aE();if(!t)throw Br.create("no-app",{appName:r});return t}function Pn(r,t,n){let s=t1[r]??r;n&&(s+=`-${n}`);const o=s.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const f=[`Unable to register library "${s}" with version "${t}":`];o&&f.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&f.push("and"),u&&f.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Qi.warn(f.join(" "));return}_i(new $n(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const r1="firebase-heartbeat-database",s1=1,Ul="firebase-heartbeat-store";let Yd=null;function oE(){return Yd||(Yd=sE(r1,s1,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(Ul)}catch(n){console.warn(n)}}}}).catch(r=>{throw Br.create("idb-open",{originalErrorMessage:r.message})})),Yd}async function a1(r){try{const n=(await oE()).transaction(Ul),s=await n.objectStore(Ul).get(lE(r));return await n.done,s}catch(t){if(t instanceof Zn)Qi.warn(t.message);else{const n=Br.create("idb-get",{originalErrorMessage:t?.message});Qi.warn(n.message)}}}async function lv(r,t){try{const s=(await oE()).transaction(Ul,"readwrite");await s.objectStore(Ul).put(t,lE(r)),await s.done}catch(n){if(n instanceof Zn)Qi.warn(n.message);else{const s=Br.create("idb-set",{originalErrorMessage:n?.message});Qi.warn(s.message)}}}function lE(r){return`${r.name}!${r.options.appId}`}/**
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
 */const o1=1024,l1=30;class u1{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new h1(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=uv();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>l1){const o=f1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){Qi.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=uv(),{heartbeatsToSend:n,unsentEntries:s}=c1(this._heartbeatsCache.heartbeats),o=Bc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return Qi.warn(t),""}}}function uv(){return new Date().toISOString().substring(0,10)}function c1(r,t=o1){const n=[];let s=r.slice();for(const o of r){const u=n.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),cv(n)>t){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),cv(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class h1{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return eE()?nE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await a1(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const s=await this.read();return lv(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const s=await this.read();return lv(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function cv(r){return Bc(JSON.stringify({version:2,heartbeats:r})).length}function f1(r){if(r.length===0)return-1;let t=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,t=s);return t}/**
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
 */function d1(r){_i(new $n("platform-logger",t=>new ww(t),"PRIVATE")),_i(new $n("heartbeat",t=>new u1(t),"PRIVATE")),Pn(lm,av,r),Pn(lm,av,"esm2020"),Pn("fire-js","")}d1("");var m1="firebase",g1="12.3.0";/**
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
 */Pn(m1,g1,"app");var hv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qr,uE;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(O,S){function C(){}C.prototype=S.prototype,O.F=S.prototype,O.prototype=new C,O.prototype.constructor=O,O.D=function(V,N,P){for(var I=Array(arguments.length-2),ne=2;ne<arguments.length;ne++)I[ne-2]=arguments[ne];return S.prototype[N].apply(V,I)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(s,n),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(O,S,C){C||(C=0);const V=Array(16);if(typeof S=="string")for(var N=0;N<16;++N)V[N]=S.charCodeAt(C++)|S.charCodeAt(C++)<<8|S.charCodeAt(C++)<<16|S.charCodeAt(C++)<<24;else for(N=0;N<16;++N)V[N]=S[C++]|S[C++]<<8|S[C++]<<16|S[C++]<<24;S=O.g[0],C=O.g[1],N=O.g[2];let P=O.g[3],I;I=S+(P^C&(N^P))+V[0]+3614090360&4294967295,S=C+(I<<7&4294967295|I>>>25),I=P+(N^S&(C^N))+V[1]+3905402710&4294967295,P=S+(I<<12&4294967295|I>>>20),I=N+(C^P&(S^C))+V[2]+606105819&4294967295,N=P+(I<<17&4294967295|I>>>15),I=C+(S^N&(P^S))+V[3]+3250441966&4294967295,C=N+(I<<22&4294967295|I>>>10),I=S+(P^C&(N^P))+V[4]+4118548399&4294967295,S=C+(I<<7&4294967295|I>>>25),I=P+(N^S&(C^N))+V[5]+1200080426&4294967295,P=S+(I<<12&4294967295|I>>>20),I=N+(C^P&(S^C))+V[6]+2821735955&4294967295,N=P+(I<<17&4294967295|I>>>15),I=C+(S^N&(P^S))+V[7]+4249261313&4294967295,C=N+(I<<22&4294967295|I>>>10),I=S+(P^C&(N^P))+V[8]+1770035416&4294967295,S=C+(I<<7&4294967295|I>>>25),I=P+(N^S&(C^N))+V[9]+2336552879&4294967295,P=S+(I<<12&4294967295|I>>>20),I=N+(C^P&(S^C))+V[10]+4294925233&4294967295,N=P+(I<<17&4294967295|I>>>15),I=C+(S^N&(P^S))+V[11]+2304563134&4294967295,C=N+(I<<22&4294967295|I>>>10),I=S+(P^C&(N^P))+V[12]+1804603682&4294967295,S=C+(I<<7&4294967295|I>>>25),I=P+(N^S&(C^N))+V[13]+4254626195&4294967295,P=S+(I<<12&4294967295|I>>>20),I=N+(C^P&(S^C))+V[14]+2792965006&4294967295,N=P+(I<<17&4294967295|I>>>15),I=C+(S^N&(P^S))+V[15]+1236535329&4294967295,C=N+(I<<22&4294967295|I>>>10),I=S+(N^P&(C^N))+V[1]+4129170786&4294967295,S=C+(I<<5&4294967295|I>>>27),I=P+(C^N&(S^C))+V[6]+3225465664&4294967295,P=S+(I<<9&4294967295|I>>>23),I=N+(S^C&(P^S))+V[11]+643717713&4294967295,N=P+(I<<14&4294967295|I>>>18),I=C+(P^S&(N^P))+V[0]+3921069994&4294967295,C=N+(I<<20&4294967295|I>>>12),I=S+(N^P&(C^N))+V[5]+3593408605&4294967295,S=C+(I<<5&4294967295|I>>>27),I=P+(C^N&(S^C))+V[10]+38016083&4294967295,P=S+(I<<9&4294967295|I>>>23),I=N+(S^C&(P^S))+V[15]+3634488961&4294967295,N=P+(I<<14&4294967295|I>>>18),I=C+(P^S&(N^P))+V[4]+3889429448&4294967295,C=N+(I<<20&4294967295|I>>>12),I=S+(N^P&(C^N))+V[9]+568446438&4294967295,S=C+(I<<5&4294967295|I>>>27),I=P+(C^N&(S^C))+V[14]+3275163606&4294967295,P=S+(I<<9&4294967295|I>>>23),I=N+(S^C&(P^S))+V[3]+4107603335&4294967295,N=P+(I<<14&4294967295|I>>>18),I=C+(P^S&(N^P))+V[8]+1163531501&4294967295,C=N+(I<<20&4294967295|I>>>12),I=S+(N^P&(C^N))+V[13]+2850285829&4294967295,S=C+(I<<5&4294967295|I>>>27),I=P+(C^N&(S^C))+V[2]+4243563512&4294967295,P=S+(I<<9&4294967295|I>>>23),I=N+(S^C&(P^S))+V[7]+1735328473&4294967295,N=P+(I<<14&4294967295|I>>>18),I=C+(P^S&(N^P))+V[12]+2368359562&4294967295,C=N+(I<<20&4294967295|I>>>12),I=S+(C^N^P)+V[5]+4294588738&4294967295,S=C+(I<<4&4294967295|I>>>28),I=P+(S^C^N)+V[8]+2272392833&4294967295,P=S+(I<<11&4294967295|I>>>21),I=N+(P^S^C)+V[11]+1839030562&4294967295,N=P+(I<<16&4294967295|I>>>16),I=C+(N^P^S)+V[14]+4259657740&4294967295,C=N+(I<<23&4294967295|I>>>9),I=S+(C^N^P)+V[1]+2763975236&4294967295,S=C+(I<<4&4294967295|I>>>28),I=P+(S^C^N)+V[4]+1272893353&4294967295,P=S+(I<<11&4294967295|I>>>21),I=N+(P^S^C)+V[7]+4139469664&4294967295,N=P+(I<<16&4294967295|I>>>16),I=C+(N^P^S)+V[10]+3200236656&4294967295,C=N+(I<<23&4294967295|I>>>9),I=S+(C^N^P)+V[13]+681279174&4294967295,S=C+(I<<4&4294967295|I>>>28),I=P+(S^C^N)+V[0]+3936430074&4294967295,P=S+(I<<11&4294967295|I>>>21),I=N+(P^S^C)+V[3]+3572445317&4294967295,N=P+(I<<16&4294967295|I>>>16),I=C+(N^P^S)+V[6]+76029189&4294967295,C=N+(I<<23&4294967295|I>>>9),I=S+(C^N^P)+V[9]+3654602809&4294967295,S=C+(I<<4&4294967295|I>>>28),I=P+(S^C^N)+V[12]+3873151461&4294967295,P=S+(I<<11&4294967295|I>>>21),I=N+(P^S^C)+V[15]+530742520&4294967295,N=P+(I<<16&4294967295|I>>>16),I=C+(N^P^S)+V[2]+3299628645&4294967295,C=N+(I<<23&4294967295|I>>>9),I=S+(N^(C|~P))+V[0]+4096336452&4294967295,S=C+(I<<6&4294967295|I>>>26),I=P+(C^(S|~N))+V[7]+1126891415&4294967295,P=S+(I<<10&4294967295|I>>>22),I=N+(S^(P|~C))+V[14]+2878612391&4294967295,N=P+(I<<15&4294967295|I>>>17),I=C+(P^(N|~S))+V[5]+4237533241&4294967295,C=N+(I<<21&4294967295|I>>>11),I=S+(N^(C|~P))+V[12]+1700485571&4294967295,S=C+(I<<6&4294967295|I>>>26),I=P+(C^(S|~N))+V[3]+2399980690&4294967295,P=S+(I<<10&4294967295|I>>>22),I=N+(S^(P|~C))+V[10]+4293915773&4294967295,N=P+(I<<15&4294967295|I>>>17),I=C+(P^(N|~S))+V[1]+2240044497&4294967295,C=N+(I<<21&4294967295|I>>>11),I=S+(N^(C|~P))+V[8]+1873313359&4294967295,S=C+(I<<6&4294967295|I>>>26),I=P+(C^(S|~N))+V[15]+4264355552&4294967295,P=S+(I<<10&4294967295|I>>>22),I=N+(S^(P|~C))+V[6]+2734768916&4294967295,N=P+(I<<15&4294967295|I>>>17),I=C+(P^(N|~S))+V[13]+1309151649&4294967295,C=N+(I<<21&4294967295|I>>>11),I=S+(N^(C|~P))+V[4]+4149444226&4294967295,S=C+(I<<6&4294967295|I>>>26),I=P+(C^(S|~N))+V[11]+3174756917&4294967295,P=S+(I<<10&4294967295|I>>>22),I=N+(S^(P|~C))+V[2]+718787259&4294967295,N=P+(I<<15&4294967295|I>>>17),I=C+(P^(N|~S))+V[9]+3951481745&4294967295,O.g[0]=O.g[0]+S&4294967295,O.g[1]=O.g[1]+(N+(I<<21&4294967295|I>>>11))&4294967295,O.g[2]=O.g[2]+N&4294967295,O.g[3]=O.g[3]+P&4294967295}s.prototype.v=function(O,S){S===void 0&&(S=O.length);const C=S-this.blockSize,V=this.C;let N=this.h,P=0;for(;P<S;){if(N==0)for(;P<=C;)o(this,O,P),P+=this.blockSize;if(typeof O=="string"){for(;P<S;)if(V[N++]=O.charCodeAt(P++),N==this.blockSize){o(this,V),N=0;break}}else for(;P<S;)if(V[N++]=O[P++],N==this.blockSize){o(this,V),N=0;break}}this.h=N,this.o+=S},s.prototype.A=function(){var O=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);O[0]=128;for(var S=1;S<O.length-8;++S)O[S]=0;S=this.o*8;for(var C=O.length-8;C<O.length;++C)O[C]=S&255,S/=256;for(this.v(O),O=Array(16),S=0,C=0;C<4;++C)for(let V=0;V<32;V+=8)O[S++]=this.g[C]>>>V&255;return O};function u(O,S){var C=g;return Object.prototype.hasOwnProperty.call(C,O)?C[O]:C[O]=S(O)}function f(O,S){this.h=S;const C=[];let V=!0;for(let N=O.length-1;N>=0;N--){const P=O[N]|0;V&&P==S||(C[N]=P,V=!1)}this.g=C}var g={};function y(O){return-128<=O&&O<128?u(O,function(S){return new f([S|0],S<0?-1:0)}):new f([O|0],O<0?-1:0)}function p(O){if(isNaN(O)||!isFinite(O))return b;if(O<0)return F(p(-O));const S=[];let C=1;for(let V=0;O>=C;V++)S[V]=O/C|0,C*=4294967296;return new f(S,0)}function E(O,S){if(O.length==0)throw Error("number format error: empty string");if(S=S||10,S<2||36<S)throw Error("radix out of range: "+S);if(O.charAt(0)=="-")return F(E(O.substring(1),S));if(O.indexOf("-")>=0)throw Error('number format error: interior "-" character');const C=p(Math.pow(S,8));let V=b;for(let P=0;P<O.length;P+=8){var N=Math.min(8,O.length-P);const I=parseInt(O.substring(P,P+N),S);N<8?(N=p(Math.pow(S,N)),V=V.j(N).add(p(I))):(V=V.j(C),V=V.add(p(I)))}return V}var b=y(0),D=y(1),q=y(16777216);r=f.prototype,r.m=function(){if($(this))return-F(this).m();let O=0,S=1;for(let C=0;C<this.g.length;C++){const V=this.i(C);O+=(V>=0?V:4294967296+V)*S,S*=4294967296}return O},r.toString=function(O){if(O=O||10,O<2||36<O)throw Error("radix out of range: "+O);if(H(this))return"0";if($(this))return"-"+F(this).toString(O);const S=p(Math.pow(O,6));var C=this;let V="";for(;;){const N=St(C,S).g;C=tt(C,N.j(S));let P=((C.g.length>0?C.g[0]:C.h)>>>0).toString(O);if(C=N,H(C))return P+V;for(;P.length<6;)P="0"+P;V=P+V}},r.i=function(O){return O<0?0:O<this.g.length?this.g[O]:this.h};function H(O){if(O.h!=0)return!1;for(let S=0;S<O.g.length;S++)if(O.g[S]!=0)return!1;return!0}function $(O){return O.h==-1}r.l=function(O){return O=tt(this,O),$(O)?-1:H(O)?0:1};function F(O){const S=O.g.length,C=[];for(let V=0;V<S;V++)C[V]=~O.g[V];return new f(C,~O.h).add(D)}r.abs=function(){return $(this)?F(this):this},r.add=function(O){const S=Math.max(this.g.length,O.g.length),C=[];let V=0;for(let N=0;N<=S;N++){let P=V+(this.i(N)&65535)+(O.i(N)&65535),I=(P>>>16)+(this.i(N)>>>16)+(O.i(N)>>>16);V=I>>>16,P&=65535,I&=65535,C[N]=I<<16|P}return new f(C,C[C.length-1]&-2147483648?-1:0)};function tt(O,S){return O.add(F(S))}r.j=function(O){if(H(this)||H(O))return b;if($(this))return $(O)?F(this).j(F(O)):F(F(this).j(O));if($(O))return F(this.j(F(O)));if(this.l(q)<0&&O.l(q)<0)return p(this.m()*O.m());const S=this.g.length+O.g.length,C=[];for(var V=0;V<2*S;V++)C[V]=0;for(V=0;V<this.g.length;V++)for(let N=0;N<O.g.length;N++){const P=this.i(V)>>>16,I=this.i(V)&65535,ne=O.i(N)>>>16,Zt=O.i(N)&65535;C[2*V+2*N]+=I*Zt,it(C,2*V+2*N),C[2*V+2*N+1]+=P*Zt,it(C,2*V+2*N+1),C[2*V+2*N+1]+=I*ne,it(C,2*V+2*N+1),C[2*V+2*N+2]+=P*ne,it(C,2*V+2*N+2)}for(O=0;O<S;O++)C[O]=C[2*O+1]<<16|C[2*O];for(O=S;O<2*S;O++)C[O]=0;return new f(C,0)};function it(O,S){for(;(O[S]&65535)!=O[S];)O[S+1]+=O[S]>>>16,O[S]&=65535,S++}function ot(O,S){this.g=O,this.h=S}function St(O,S){if(H(S))throw Error("division by zero");if(H(O))return new ot(b,b);if($(O))return S=St(F(O),S),new ot(F(S.g),F(S.h));if($(S))return S=St(O,F(S)),new ot(F(S.g),S.h);if(O.g.length>30){if($(O)||$(S))throw Error("slowDivide_ only works with positive integers.");for(var C=D,V=S;V.l(O)<=0;)C=ct(C),V=ct(V);var N=bt(C,1),P=bt(V,1);for(V=bt(V,2),C=bt(C,2);!H(V);){var I=P.add(V);I.l(O)<=0&&(N=N.add(C),P=I),V=bt(V,1),C=bt(C,1)}return S=tt(O,N.j(S)),new ot(N,S)}for(N=b;O.l(S)>=0;){for(C=Math.max(1,Math.floor(O.m()/S.m())),V=Math.ceil(Math.log(C)/Math.LN2),V=V<=48?1:Math.pow(2,V-48),P=p(C),I=P.j(S);$(I)||I.l(O)>0;)C-=V,P=p(C),I=P.j(S);H(P)&&(P=D),N=N.add(P),O=tt(O,I)}return new ot(N,O)}r.B=function(O){return St(this,O).h},r.and=function(O){const S=Math.max(this.g.length,O.g.length),C=[];for(let V=0;V<S;V++)C[V]=this.i(V)&O.i(V);return new f(C,this.h&O.h)},r.or=function(O){const S=Math.max(this.g.length,O.g.length),C=[];for(let V=0;V<S;V++)C[V]=this.i(V)|O.i(V);return new f(C,this.h|O.h)},r.xor=function(O){const S=Math.max(this.g.length,O.g.length),C=[];for(let V=0;V<S;V++)C[V]=this.i(V)^O.i(V);return new f(C,this.h^O.h)};function ct(O){const S=O.g.length+1,C=[];for(let V=0;V<S;V++)C[V]=O.i(V)<<1|O.i(V-1)>>>31;return new f(C,O.h)}function bt(O,S){const C=S>>5;S%=32;const V=O.g.length-C,N=[];for(let P=0;P<V;P++)N[P]=S>0?O.i(P+C)>>>S|O.i(P+C+1)<<32-S:O.i(P+C);return new f(N,O.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,uE=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.B,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=p,f.fromString=E,qr=f}).apply(typeof hv<"u"?hv:typeof self<"u"?self:typeof window<"u"?window:{});var bc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cE,wl,hE,Oc,hm,fE,dE,mE;(function(){var r,t=Object.defineProperty;function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof bc=="object"&&bc];for(var m=0;m<c.length;++m){var _=c[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=n(this);function o(c,m){if(m)t:{var _=s;c=c.split(".");for(var A=0;A<c.length-1;A++){var U=c[A];if(!(U in _))break t;_=_[U]}c=c[c.length-1],A=_[c],m=m(A),m!=A&&m!=null&&t(_,c,{configurable:!0,writable:!0,value:m})}}o("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(c){return c||function(m){var _=[],A;for(A in m)Object.prototype.hasOwnProperty.call(m,A)&&_.push([A,m[A]]);return _}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},f=this||self;function g(c){var m=typeof c;return m=="object"&&c!=null||m=="function"}function y(c,m,_){return c.call.apply(c.bind,arguments)}function p(c,m,_){return p=y,p.apply(null,arguments)}function E(c,m){var _=Array.prototype.slice.call(arguments,1);return function(){var A=_.slice();return A.push.apply(A,arguments),c.apply(this,A)}}function b(c,m){function _(){}_.prototype=m.prototype,c.Z=m.prototype,c.prototype=new _,c.prototype.constructor=c,c.Ob=function(A,U,B){for(var et=Array(arguments.length-2),wt=2;wt<arguments.length;wt++)et[wt-2]=arguments[wt];return m.prototype[U].apply(A,et)}}var D=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function q(c){const m=c.length;if(m>0){const _=Array(m);for(let A=0;A<m;A++)_[A]=c[A];return _}return[]}function H(c,m){for(let A=1;A<arguments.length;A++){const U=arguments[A];var _=typeof U;if(_=_!="object"?_:U?Array.isArray(U)?"array":_:"null",_=="array"||_=="object"&&typeof U.length=="number"){_=c.length||0;const B=U.length||0;c.length=_+B;for(let et=0;et<B;et++)c[_+et]=U[et]}else c.push(U)}}class ${constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return this.h>0?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function F(c){f.setTimeout(()=>{throw c},0)}function tt(){var c=O;let m=null;return c.g&&(m=c.g,c.g=c.g.next,c.g||(c.h=null),m.next=null),m}class it{constructor(){this.h=this.g=null}add(m,_){const A=ot.get();A.set(m,_),this.h?this.h.next=A:this.g=A,this.h=A}}var ot=new $(()=>new St,c=>c.reset());class St{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let ct,bt=!1,O=new it,S=()=>{const c=Promise.resolve(void 0);ct=()=>{c.then(C)}};function C(){for(var c;c=tt();){try{c.h.call(c.g)}catch(_){F(_)}var m=ot;m.j(c),m.h<100&&(m.h++,c.next=m.g,m.g=c)}bt=!1}function V(){this.u=this.u,this.C=this.C}V.prototype.u=!1,V.prototype.dispose=function(){this.u||(this.u=!0,this.N())},V.prototype[Symbol.dispose]=function(){this.dispose()},V.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function N(c,m){this.type=c,this.g=this.target=m,this.defaultPrevented=!1}N.prototype.h=function(){this.defaultPrevented=!0};var P=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var c=!1,m=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};f.addEventListener("test",_,m),f.removeEventListener("test",_,m)}catch{}return c})();function I(c){return/^[\s\xa0]*$/.test(c)}function ne(c,m){N.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,m)}b(ne,N),ne.prototype.init=function(c,m){const _=this.type=c.type,A=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=m,m=c.relatedTarget,m||(_=="mouseover"?m=c.fromElement:_=="mouseout"&&(m=c.toElement)),this.relatedTarget=m,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&ne.Z.h.call(this)},ne.prototype.h=function(){ne.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Zt="closure_listenable_"+(Math.random()*1e6|0),K=0;function rt(c,m,_,A,U){this.listener=c,this.proxy=null,this.src=m,this.type=_,this.capture=!!A,this.ha=U,this.key=++K,this.da=this.fa=!1}function dt(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Pt(c,m,_){for(const A in c)m.call(_,c[A],A,c)}function w(c,m){for(const _ in c)m.call(void 0,c[_],_,c)}function Q(c){const m={};for(const _ in c)m[_]=c[_];return m}const st="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function nt(c,m){let _,A;for(let U=1;U<arguments.length;U++){A=arguments[U];for(_ in A)c[_]=A[_];for(let B=0;B<st.length;B++)_=st[B],Object.prototype.hasOwnProperty.call(A,_)&&(c[_]=A[_])}}function ht(c){this.src=c,this.g={},this.h=0}ht.prototype.add=function(c,m,_,A,U){const B=c.toString();c=this.g[B],c||(c=this.g[B]=[],this.h++);const et=yt(c,m,A,U);return et>-1?(m=c[et],_||(m.fa=!1)):(m=new rt(m,this.src,B,!!A,U),m.fa=_,c.push(m)),m};function It(c,m){const _=m.type;if(_ in c.g){var A=c.g[_],U=Array.prototype.indexOf.call(A,m,void 0),B;(B=U>=0)&&Array.prototype.splice.call(A,U,1),B&&(dt(m),c.g[_].length==0&&(delete c.g[_],c.h--))}}function yt(c,m,_,A){for(let U=0;U<c.length;++U){const B=c[U];if(!B.da&&B.listener==m&&B.capture==!!_&&B.ha==A)return U}return-1}var _e="closure_lm_"+(Math.random()*1e6|0),Ft={};function kn(c,m,_,A,U){if(Array.isArray(m)){for(let B=0;B<m.length;B++)kn(c,m[B],_,A,U);return null}return _=su(_),c&&c[Zt]?c.J(m,_,g(A)?!!A.capture:!1,U):po(c,m,_,!1,A,U)}function po(c,m,_,A,U,B){if(!m)throw Error("Invalid event type");const et=g(U)?!!U.capture:!!U;let wt=yo(c);if(wt||(c[_e]=wt=new ht(c)),_=wt.add(m,_,A,et,B),_.proxy)return _;if(A=ta(),_.proxy=A,A.src=c,A.listener=_,c.addEventListener)P||(U=et),U===void 0&&(U=!1),c.addEventListener(m.toString(),A,U);else if(c.attachEvent)c.attachEvent(na(m.toString()),A);else if(c.addListener&&c.removeListener)c.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return _}function ta(){function c(_){return m.call(c.src,c.listener,_)}const m=Lh;return c}function ea(c,m,_,A,U){if(Array.isArray(m))for(var B=0;B<m.length;B++)ea(c,m[B],_,A,U);else A=g(A)?!!A.capture:!!A,_=su(_),c&&c[Zt]?(c=c.i,B=String(m).toString(),B in c.g&&(m=c.g[B],_=yt(m,_,A,U),_>-1&&(dt(m[_]),Array.prototype.splice.call(m,_,1),m.length==0&&(delete c.g[B],c.h--)))):c&&(c=yo(c))&&(m=c.g[m.toString()],c=-1,m&&(c=yt(m,_,A,U)),(_=c>-1?m[c]:null)&&is(_))}function is(c){if(typeof c!="number"&&c&&!c.da){var m=c.src;if(m&&m[Zt])It(m.i,c);else{var _=c.type,A=c.proxy;m.removeEventListener?m.removeEventListener(_,A,c.capture):m.detachEvent?m.detachEvent(na(_),A):m.addListener&&m.removeListener&&m.removeListener(A),(_=yo(m))?(It(_,c),_.h==0&&(_.src=null,m[_e]=null)):dt(c)}}}function na(c){return c in Ft?Ft[c]:Ft[c]="on"+c}function Lh(c,m){if(c.da)c=!0;else{m=new ne(m,this);const _=c.listener,A=c.ha||c.src;c.fa&&is(c),c=_.call(A,m)}return c}function yo(c){return c=c[_e],c instanceof ht?c:null}var rn="__closure_events_fn_"+(Math.random()*1e9>>>0);function su(c){return typeof c=="function"?c:(c[rn]||(c[rn]=function(m){return c.handleEvent(m)}),c[rn])}function be(){V.call(this),this.i=new ht(this),this.M=this,this.G=null}b(be,V),be.prototype[Zt]=!0,be.prototype.removeEventListener=function(c,m,_,A){ea(this,c,m,_,A)};function Ne(c,m){var _,A=c.G;if(A)for(_=[];A;A=A.G)_.push(A);if(c=c.M,A=m.type||m,typeof m=="string")m=new N(m,c);else if(m instanceof N)m.target=m.target||c;else{var U=m;m=new N(A,c),nt(m,U)}U=!0;let B,et;if(_)for(et=_.length-1;et>=0;et--)B=m.g=_[et],U=Ti(B,A,!0,m)&&U;if(B=m.g=c,U=Ti(B,A,!0,m)&&U,U=Ti(B,A,!1,m)&&U,_)for(et=0;et<_.length;et++)B=m.g=_[et],U=Ti(B,A,!1,m)&&U}be.prototype.N=function(){if(be.Z.N.call(this),this.i){var c=this.i;for(const m in c.g){const _=c.g[m];for(let A=0;A<_.length;A++)dt(_[A]);delete c.g[m],c.h--}}this.G=null},be.prototype.J=function(c,m,_,A){return this.i.add(String(c),m,!1,_,A)},be.prototype.K=function(c,m,_,A){return this.i.add(String(c),m,!0,_,A)};function Ti(c,m,_,A){if(m=c.i.g[String(m)],!m)return!0;m=m.concat();let U=!0;for(let B=0;B<m.length;++B){const et=m[B];if(et&&!et.da&&et.capture==_){const wt=et.listener,te=et.ha||et.src;et.fa&&It(c.i,et),U=wt.call(te,A)!==!1&&U}}return U&&!A.defaultPrevented}function zh(c,m){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=p(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(m)>2147483647?-1:f.setTimeout(c,m||0)}function _o(c){c.g=zh(()=>{c.g=null,c.i&&(c.i=!1,_o(c))},c.l);const m=c.h;c.h=null,c.m.apply(null,m)}class jh extends V{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:_o(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function rs(c){V.call(this),this.h=c,this.g={}}b(rs,V);var Zi=[];function Fe(c){Pt(c.g,function(m,_){this.g.hasOwnProperty(_)&&is(m)},c),c.g={}}rs.prototype.N=function(){rs.Z.N.call(this),Fe(this)},rs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Sn=f.JSON.stringify,Ze=f.JSON.parse,Bh=class{stringify(c){return f.JSON.stringify(c,void 0)}parse(c){return f.JSON.parse(c,void 0)}};function au(){}function ou(){}var Jn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ji(){N.call(this,"d")}b(Ji,N);function Un(){N.call(this,"c")}b(Un,N);var bn={},Wi=null;function ia(){return Wi=Wi||new be}bn.Ia="serverreachability";function vo(c){N.call(this,bn.Ia,c)}b(vo,N);function tr(c){const m=ia();Ne(m,new vo(m))}bn.STAT_EVENT="statevent";function ra(c,m){N.call(this,bn.STAT_EVENT,c),this.stat=m}b(ra,N);function ce(c){const m=ia();Ne(m,new ra(m,c))}bn.Ja="timingevent";function lu(c,m){N.call(this,bn.Ja,c),this.size=m}b(lu,N);function er(c,m){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){c()},m)}function nr(){this.g=!0}nr.prototype.ua=function(){this.g=!1};function To(c,m,_,A,U,B){c.info(function(){if(c.g)if(B){var et="",wt=B.split("&");for(let Bt=0;Bt<wt.length;Bt++){var te=wt[Bt].split("=");if(te.length>1){const de=te[0];te=te[1];const hn=de.split("_");et=hn.length>=2&&hn[1]=="type"?et+(de+"="+te+"&"):et+(de+"=redacted&")}}}else et=null;else et=B;return"XMLHTTP REQ ("+A+") [attempt "+U+"]: "+m+`
`+_+`
`+et})}function Eo(c,m,_,A,U,B,et){c.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+U+"]: "+m+`
`+_+`
`+B+" "+et})}function Ei(c,m,_,A){c.info(function(){return"XMLHTTP TEXT ("+m+"): "+Wn(c,_)+(A?" "+A:"")})}function qh(c,m){c.info(function(){return"TIMEOUT: "+m})}nr.prototype.info=function(){};function Wn(c,m){if(!c.g)return m;if(!m)return null;try{const B=JSON.parse(m);if(B){for(c=0;c<B.length;c++)if(Array.isArray(B[c])){var _=B[c];if(!(_.length<2)){var A=_[1];if(Array.isArray(A)&&!(A.length<1)){var U=A[0];if(U!="noop"&&U!="stop"&&U!="close")for(let et=1;et<A.length;et++)A[et]=""}}}}return Sn(B)}catch{return m}}var he={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ue={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ai;function ss(){}b(ss,au),ss.prototype.g=function(){return new XMLHttpRequest},Ai=new ss;function as(c){return encodeURIComponent(String(c))}function Hh(c){var m=1;c=c.split(":");const _=[];for(;m>0&&c.length;)_.push(c.shift()),m--;return c.length&&_.push(c.join(":")),_}function Ln(c,m,_,A){this.j=c,this.i=m,this.l=_,this.S=A||1,this.V=new rs(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ir}function ir(){this.i=null,this.g="",this.h=!1}var sa={},ti={};function ei(c,m,_){c.M=1,c.A=bi(se(m)),c.u=_,c.R=!0,rr(c,null)}function rr(c,m){c.F=Date.now(),os(c),c.B=se(c.A);var _=c.B,A=c.S;Array.isArray(A)||(A=[String(A)]),fu(_.i,"t",A),c.C=0,_=c.j.L,c.h=new ir,c.g=ga(c.j,_?m:null,!c.u),c.P>0&&(c.O=new jh(p(c.Y,c,c.g),c.P)),m=c.V,_=c.g,A=c.ba;var U="readystatechange";Array.isArray(U)||(U&&(Zi[0]=U.toString()),U=Zi);for(let B=0;B<U.length;B++){const et=kn(_,U[B],A||m.handleEvent,!1,m.h||m);if(!et)break;m.g[et.key]=et}m=c.J?Q(c.J):{},c.u?(c.v||(c.v="POST"),m["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,m)):(c.v="GET",c.g.ea(c.B,c.v,null,m)),tr(),To(c.i,c.v,c.B,c.l,c.S,c.u)}Ln.prototype.ba=function(c){c=c.target;const m=this.O;m&&Ge(c)==3?m.j():this.Y(c)},Ln.prototype.Y=function(c){try{if(c==this.g)t:{const wt=Ge(this.g),te=this.g.ya(),Bt=this.g.ca();if(!(wt<3)&&(wt!=3||this.g&&(this.h.h||this.g.la()||_s(this.g)))){this.K||wt!=4||te==7||(te==8||Bt<=0?tr(3):tr(2)),ii(this);var m=this.g.ca();this.X=m;var _=sr(this);if(this.o=m==200,Eo(this.i,this.v,this.B,this.l,this.S,wt,m),this.o){if(this.U&&!this.L){e:{if(this.g){var A,U=this.g;if((A=U.g?U.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(A)){var B=A;break e}}B=null}if(c=B)Ei(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,aa(this,c);else{this.o=!1,this.m=3,ce(12),ri(this),ls(this);break t}}if(this.R){c=!0;let de;for(;!this.K&&this.C<_.length;)if(de=uu(this,_),de==ti){wt==4&&(this.m=4,ce(14),c=!1),Ei(this.i,this.l,null,"[Incomplete Response]");break}else if(de==sa){this.m=4,ce(15),Ei(this.i,this.l,_,"[Invalid Chunk]"),c=!1;break}else Ei(this.i,this.l,de,null),aa(this,de);if(fe(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),wt!=4||_.length!=0||this.h.h||(this.m=1,ce(16),c=!1),this.o=this.o&&c,!c)Ei(this.i,this.l,_,"[Invalid Chunked Response]"),ri(this),ls(this);else if(_.length>0&&!this.W){this.W=!0;var et=this.j;et.g==this&&et.aa&&!et.P&&(et.j.info("Great, no buffering proxy detected. Bytes received: "+_.length),Oo(et),et.P=!0,ce(11))}}else Ei(this.i,this.l,_,null),aa(this,_);wt==4&&ri(this),this.o&&!this.K&&(wt==4?Mo(this.j,this):(this.o=!1,os(this)))}else vs(this.g),m==400&&_.indexOf("Unknown SID")>0?(this.m=3,ce(12)):(this.m=0,ce(13)),ri(this),ls(this)}}}catch{}finally{}};function sr(c){if(!fe(c))return c.g.la();const m=_s(c.g);if(m==="")return"";let _="";const A=m.length,U=Ge(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return ri(c),ls(c),"";c.h.i=new f.TextDecoder}for(let B=0;B<A;B++)c.h.h=!0,_+=c.h.i.decode(m[B],{stream:!(U&&B==A-1)});return m.length=0,c.h.g+=_,c.C=0,c.h.g}function fe(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function uu(c,m){var _=c.C,A=m.indexOf(`
`,_);return A==-1?ti:(_=Number(m.substring(_,A)),isNaN(_)?sa:(A+=1,A+_>m.length?ti:(m=m.slice(A,A+_),c.C=A+_,m)))}Ln.prototype.cancel=function(){this.K=!0,ri(this)};function os(c){c.T=Date.now()+c.H,ni(c,c.H)}function ni(c,m){if(c.D!=null)throw Error("WatchDog timer not null");c.D=er(p(c.aa,c),m)}function ii(c){c.D&&(f.clearTimeout(c.D),c.D=null)}Ln.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(qh(this.i,this.B),this.M!=2&&(tr(),ce(17)),ri(this),this.m=2,ls(this)):ni(this,this.T-c)};function ls(c){c.j.I==0||c.K||Mo(c.j,c)}function ri(c){ii(c);var m=c.O;m&&typeof m.dispose=="function"&&m.dispose(),c.O=null,Fe(c.V),c.g&&(m=c.g,c.g=null,m.abort(),m.dispose())}function aa(c,m){try{var _=c.j;if(_.I!=0&&(_.g==c||hs(_.h,c))){if(!c.L&&hs(_.h,c)&&_.I==3){try{var A=_.Ba.g.parse(m)}catch{A=null}if(Array.isArray(A)&&A.length==3){var U=A;if(U[0]==0){t:if(!_.v){if(_.g)if(_.g.F+3e3<c.F)ma(_),si(_);else break t;No(_),ce(18)}}else _.xa=U[1],0<_.xa-_.K&&U[2]<37500&&_.F&&_.A==0&&!_.C&&(_.C=er(p(_.Va,_),6e3));wn(_.h)<=1&&_.ta&&(_.ta=void 0)}else Ii(_,11)}else if((c.L||_.g==c)&&ma(_),!I(m))for(U=_.Ba.g.parse(m),m=0;m<U.length;m++){let Bt=U[m];const de=Bt[0];if(!(de<=_.K))if(_.K=de,Bt=Bt[1],_.I==2)if(Bt[0]=="c"){_.M=Bt[1],_.ba=Bt[2];const hn=Bt[3];hn!=null&&(_.ka=hn,_.j.info("VER="+_.ka));const ai=Bt[4];ai!=null&&(_.za=ai,_.j.info("SVER="+_.za));const Bn=Bt[5];Bn!=null&&typeof Bn=="number"&&Bn>0&&(A=1.5*Bn,_.O=A,_.j.info("backChannelRequestTimeoutMs_="+A)),A=_;const qn=c.g;if(qn){const Hn=qn.g?qn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Hn){var B=A.h;B.g||Hn.indexOf("spdy")==-1&&Hn.indexOf("quic")==-1&&Hn.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(oa(B,B.h),B.h=null))}if(A.G){const xo=qn.g?qn.g.getResponseHeader("X-HTTP-Session-Id"):null;xo&&(A.wa=xo,Gt(A.J,A.G,xo))}}_.I=3,_.l&&_.l.ra(),_.aa&&(_.T=Date.now()-c.F,_.j.info("Handshake RTT: "+_.T+"ms")),A=_;var et=c;if(A.na=Eu(A,A.L?A.ba:null,A.W),et.L){Si(A.h,et);var wt=et,te=A.O;te&&(wt.H=te),wt.D&&(ii(wt),os(wt)),A.g=et}else yu(A);_.i.length>0&&Ss(_)}else Bt[0]!="stop"&&Bt[0]!="close"||Ii(_,7);else _.I==3&&(Bt[0]=="stop"||Bt[0]=="close"?Bt[0]=="stop"?Ii(_,7):Es(_):Bt[0]!="noop"&&_.l&&_.l.qa(Bt),_.A=0)}}tr(4)}catch{}}var Fh=class{constructor(c,m){this.g=c,this.map=m}};function us(c){this.l=c||10,f.PerformanceNavigationTiming?(c=f.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function cs(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function wn(c){return c.h?1:c.g?c.g.size:0}function hs(c,m){return c.h?c.h==m:c.g?c.g.has(m):!1}function oa(c,m){c.g?c.g.add(m):c.h=m}function Si(c,m){c.h&&c.h==m?c.h=null:c.g&&c.g.has(m)&&c.g.delete(m)}us.prototype.cancel=function(){if(this.i=la(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function la(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let m=c.i;for(const _ of c.g.values())m=m.concat(_.G);return m}return q(c.i)}var ua=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Gh(c,m){if(c){c=c.split("&");for(let _=0;_<c.length;_++){const A=c[_].indexOf("=");let U,B=null;A>=0?(U=c[_].substring(0,A),B=c[_].substring(A+1)):U=c[_],m(U,B?decodeURIComponent(B.replace(/\+/g," ")):"")}}}function zn(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let m;c instanceof zn?(this.l=c.l,ar(this,c.j),this.o=c.o,this.g=c.g,fs(this,c.u),this.h=c.h,or(this,du(c.i)),this.m=c.m):c&&(m=String(c).match(ua))?(this.l=!1,ar(this,m[1]||"",!0),this.o=ds(m[2]||""),this.g=ds(m[3]||"",!0),fs(this,m[4]),this.h=ds(m[5]||"",!0),or(this,m[6]||"",!0),this.m=ds(m[7]||"")):(this.l=!1,this.i=new Rn(null,this.l))}zn.prototype.toString=function(){const c=[];var m=this.j;m&&c.push(Oe(m,So,!0),":");var _=this.g;return(_||m=="file")&&(c.push("//"),(m=this.o)&&c.push(Oe(m,So,!0),"@"),c.push(as(_).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.u,_!=null&&c.push(":",String(_))),(_=this.h)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push(Oe(_,_.charAt(0)=="/"?lr:bo,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",Oe(_,hu)),c.join("")},zn.prototype.resolve=function(c){const m=se(this);let _=!!c.j;_?ar(m,c.j):_=!!c.o,_?m.o=c.o:_=!!c.g,_?m.g=c.g:_=c.u!=null;var A=c.h;if(_)fs(m,c.u);else if(_=!!c.h){if(A.charAt(0)!="/")if(this.g&&!this.h)A="/"+A;else{var U=m.h.lastIndexOf("/");U!=-1&&(A=m.h.slice(0,U+1)+A)}if(U=A,U==".."||U==".")A="";else if(U.indexOf("./")!=-1||U.indexOf("/.")!=-1){A=U.lastIndexOf("/",0)==0,U=U.split("/");const B=[];for(let et=0;et<U.length;){const wt=U[et++];wt=="."?A&&et==U.length&&B.push(""):wt==".."?((B.length>1||B.length==1&&B[0]!="")&&B.pop(),A&&et==U.length&&B.push("")):(B.push(wt),A=!0)}A=B.join("/")}else A=U}return _?m.h=A:_=c.i.toString()!=="",_?or(m,du(c.i)):_=!!c.m,_&&(m.m=c.m),m};function se(c){return new zn(c)}function ar(c,m,_){c.j=_?ds(m,!0):m,c.j&&(c.j=c.j.replace(/:$/,""))}function fs(c,m){if(m){if(m=Number(m),isNaN(m)||m<0)throw Error("Bad port number "+m);c.u=m}else c.u=null}function or(c,m,_){m instanceof Rn?(c.i=m,Io(c.i,c.l)):(_||(m=Oe(m,cu)),c.i=new Rn(m,c.l))}function Gt(c,m,_){c.i.set(m,_)}function bi(c){return Gt(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function ds(c,m){return c?m?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Oe(c,m,_){return typeof c=="string"?(c=encodeURI(c).replace(m,Ao),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Ao(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var So=/[#\/\?@]/g,bo=/[#\?:]/g,lr=/[#\?]/g,cu=/[#\?@]/g,hu=/#/g;function Rn(c,m){this.h=this.g=null,this.i=c||null,this.j=!!m}function wi(c){c.g||(c.g=new Map,c.h=0,c.i&&Gh(c.i,function(m,_){c.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}r=Rn.prototype,r.add=function(c,m){wi(this),this.i=null,c=jn(this,c);let _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(m),this.h+=1,this};function wo(c,m){wi(c),m=jn(c,m),c.g.has(m)&&(c.i=null,c.h-=c.g.get(m).length,c.g.delete(m))}function Ro(c,m){return wi(c),m=jn(c,m),c.g.has(m)}r.forEach=function(c,m){wi(this),this.g.forEach(function(_,A){_.forEach(function(U){c.call(m,U,A,this)},this)},this)};function ca(c,m){wi(c);let _=[];if(typeof m=="string")Ro(c,m)&&(_=_.concat(c.g.get(jn(c,m))));else for(c=Array.from(c.g.values()),m=0;m<c.length;m++)_=_.concat(c[m]);return _}r.set=function(c,m){return wi(this),this.i=null,c=jn(this,c),Ro(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[m]),this.h+=1,this},r.get=function(c,m){return c?(c=ca(this,c),c.length>0?String(c[0]):m):m};function fu(c,m,_){wo(c,m),_.length>0&&(c.i=null,c.g.set(jn(c,m),q(_)),c.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],m=Array.from(this.g.keys());for(let A=0;A<m.length;A++){var _=m[A];const U=as(_);_=ca(this,_);for(let B=0;B<_.length;B++){let et=U;_[B]!==""&&(et+="="+as(_[B])),c.push(et)}}return this.i=c.join("&")};function du(c){const m=new Rn;return m.i=c.i,c.g&&(m.g=new Map(c.g),m.h=c.h),m}function jn(c,m){return m=String(m),c.j&&(m=m.toLowerCase()),m}function Io(c,m){m&&!c.j&&(wi(c),c.i=null,c.g.forEach(function(_,A){const U=A.toLowerCase();A!=U&&(wo(this,A),fu(this,U,_))},c)),c.j=m}function Co(c,m){const _=new nr;if(f.Image){const A=new Image;A.onload=E(Je,_,"TestLoadImage: loaded",!0,m,A),A.onerror=E(Je,_,"TestLoadImage: error",!1,m,A),A.onabort=E(Je,_,"TestLoadImage: abort",!1,m,A),A.ontimeout=E(Je,_,"TestLoadImage: timeout",!1,m,A),f.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=c}else m(!1)}function ur(c,m){const _=new nr,A=new AbortController,U=setTimeout(()=>{A.abort(),Je(_,"TestPingServer: timeout",!1,m)},1e4);fetch(c,{signal:A.signal}).then(B=>{clearTimeout(U),B.ok?Je(_,"TestPingServer: ok",!0,m):Je(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(U),Je(_,"TestPingServer: error",!1,m)})}function Je(c,m,_,A,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),A(_)}catch{}}function mu(){this.g=new Bh}function ms(c){this.i=c.Sb||null,this.h=c.ab||!1}b(ms,au),ms.prototype.g=function(){return new gs(this.i,this.h)};function gs(c,m){be.call(this),this.H=c,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}b(gs,be),r=gs.prototype,r.open=function(c,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=m,this.readyState=1,Ri(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const m={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(m.body=c),(this.H||f).fetch(new Request(this.D,m)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,We(this)),this.readyState=0},r.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Ri(this)),this.g&&(this.readyState=3,Ri(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;cr(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function cr(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}r.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var m=c.value?c.value:new Uint8Array(0);(m=this.B.decode(m,{stream:!c.done}))&&(this.response=this.responseText+=m)}c.done?We(this):Ri(this),this.readyState==3&&cr(this)}},r.Oa=function(c){this.g&&(this.response=this.responseText=c,We(this))},r.Na=function(c){this.g&&(this.response=c,We(this))},r.ga=function(){this.g&&We(this)};function We(c){c.readyState=4,c.l=null,c.j=null,c.B=null,Ri(c)}r.setRequestHeader=function(c,m){this.A.append(c,m)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=m.next();return c.join(`\r
`)};function Ri(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(gs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function hr(c){let m="";return Pt(c,function(_,A){m+=A,m+=":",m+=_,m+=`\r
`}),m}function In(c,m,_){t:{for(A in _){var A=!1;break t}A=!0}A||(_=hr(_),typeof c=="string"?_!=null&&as(_):Gt(c,m,_))}function Jt(c){be.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}b(Jt,be);var ha=/^https?$/i,gu=["POST","PUT"];r=Jt.prototype,r.Fa=function(c){this.H=c},r.ea=function(c,m,_,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);m=m?m.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ai.g(),this.g.onreadystatechange=D(p(this.Ca,this));try{this.B=!0,this.g.open(m,String(c),!0),this.B=!1}catch(B){ps(this,B);return}if(c=_||"",_=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var U in A)_.set(U,A[U]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const B of A.keys())_.set(B,A.get(B));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(_.keys()).find(B=>B.toLowerCase()=="content-type"),U=f.FormData&&c instanceof f.FormData,!(Array.prototype.indexOf.call(gu,m,void 0)>=0)||A||U||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[B,et]of _)this.g.setRequestHeader(B,et);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(B){ps(this,B)}};function ps(c,m){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=m,c.o=5,ys(c),we(c)}function ys(c){c.A||(c.A=!0,Ne(c,"complete"),Ne(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,Ne(this,"complete"),Ne(this,"abort"),we(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),we(this,!0)),Jt.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?Do(this):this.Xa())},r.Xa=function(){Do(this)};function Do(c){if(c.h&&typeof u<"u"){if(c.v&&Ge(c)==4)setTimeout(c.Ca.bind(c),0);else if(Ne(c,"readystatechange"),Ge(c)==4){c.h=!1;try{const B=c.ca();t:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break t;default:m=!1}var _;if(!(_=m)){var A;if(A=B===0){let et=String(c.D).match(ua)[1]||null;!et&&f.self&&f.self.location&&(et=f.self.location.protocol.slice(0,-1)),A=!ha.test(et?et.toLowerCase():"")}_=A}if(_)Ne(c,"complete"),Ne(c,"success");else{c.o=6;try{var U=Ge(c)>2?c.g.statusText:""}catch{U=""}c.l=U+" ["+c.ca()+"]",ys(c)}}finally{we(c)}}}}function we(c,m){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const _=c.g;c.g=null,m||Ne(c,"ready");try{_.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function Ge(c){return c.g?c.g.readyState:0}r.ca=function(){try{return Ge(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(c){if(this.g){var m=this.g.responseText;return c&&m.indexOf(c)==0&&(m=m.substring(c.length)),Ze(m)}};function _s(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function vs(c){const m={};c=(c.g&&Ge(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<c.length;A++){if(I(c[A]))continue;var _=Hh(c[A]);const U=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const B=m[U]||[];m[U]=B,B.push(_)}w(m,function(A){return A.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ts(c,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||m}function fa(c){this.za=0,this.i=[],this.j=new nr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ts("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ts("baseRetryDelayMs",5e3,c),this.Za=Ts("retryDelaySeedMs",1e4,c),this.Ta=Ts("forwardChannelMaxRetries",2,c),this.va=Ts("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new us(c&&c.concurrentRequestLimit),this.Ba=new mu,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=fa.prototype,r.ka=8,r.I=1,r.connect=function(c,m,_,A){ce(0),this.W=c,this.H=m||{},_&&A!==void 0&&(this.H.OSID=_,this.H.OAID=A),this.F=this.X,this.J=Eu(this,null,this.W),Ss(this)};function Es(c){if(As(c),c.I==3){var m=c.V++,_=se(c.J);if(Gt(_,"SID",c.M),Gt(_,"RID",m),Gt(_,"TYPE","terminate"),bs(c,_),m=new Ln(c,c.j,m),m.M=2,m.A=bi(se(_)),_=!1,f.navigator&&f.navigator.sendBeacon)try{_=f.navigator.sendBeacon(m.A.toString(),"")}catch{}!_&&f.Image&&(new Image().src=m.A,_=!0),_||(m.g=ga(m.j,null),m.g.ea(m.A)),m.F=Date.now(),os(m)}Tu(c)}function si(c){c.g&&(Oo(c),c.g.cancel(),c.g=null)}function As(c){si(c),c.v&&(f.clearTimeout(c.v),c.v=null),ma(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&f.clearTimeout(c.m),c.m=null)}function Ss(c){if(!cs(c.h)&&!c.m){c.m=!0;var m=c.Ea;ct||S(),bt||(ct(),bt=!0),O.add(m,c),c.D=0}}function Qh(c,m){return wn(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=m.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=er(p(c.Ea,c,m),vu(c,c.D)),c.D++,!0)}r.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const U=new Ln(this,this.j,c);let B=this.o;if(this.U&&(B?(B=Q(B),nt(B,this.U)):B=this.U),this.u!==null||this.R||(U.J=B,B=null),this.S)t:{for(var m=0,_=0;_<this.i.length;_++){e:{var A=this.i[_];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break e}A=void 0}if(A===void 0)break;if(m+=A,m>4096){m=_;break t}if(m===4096||_===this.i.length-1){m=_+1;break t}}m=1e3}else m=1e3;m=da(this,U,m),_=se(this.J),Gt(_,"RID",c),Gt(_,"CVER",22),this.G&&Gt(_,"X-HTTP-Session-Id",this.G),bs(this,_),B&&(this.R?m="headers="+as(hr(B))+"&"+m:this.u&&In(_,this.u,B)),oa(this.h,U),this.Ra&&Gt(_,"TYPE","init"),this.S?(Gt(_,"$req",m),Gt(_,"SID","null"),U.U=!0,ei(U,_,null)):ei(U,_,m),this.I=2}}else this.I==3&&(c?pu(this,c):this.i.length==0||cs(this.h)||pu(this))};function pu(c,m){var _;m?_=m.l:_=c.V++;const A=se(c.J);Gt(A,"SID",c.M),Gt(A,"RID",_),Gt(A,"AID",c.K),bs(c,A),c.u&&c.o&&In(A,c.u,c.o),_=new Ln(c,c.j,_,c.D+1),c.u===null&&(_.J=c.o),m&&(c.i=m.G.concat(c.i)),m=da(c,_,1e3),_.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),oa(c.h,_),ei(_,A,m)}function bs(c,m){c.H&&Pt(c.H,function(_,A){Gt(m,A,_)}),c.l&&Pt({},function(_,A){Gt(m,A,_)})}function da(c,m,_){_=Math.min(c.i.length,_);const A=c.l?p(c.l.Ka,c.l,c):null;t:{var U=c.i;let wt=-1;for(;;){const te=["count="+_];wt==-1?_>0?(wt=U[0].g,te.push("ofs="+wt)):wt=0:te.push("ofs="+wt);let Bt=!0;for(let de=0;de<_;de++){var B=U[de].g;const hn=U[de].map;if(B-=wt,B<0)wt=Math.max(0,U[de].g-100),Bt=!1;else try{B="req"+B+"_"||"";try{var et=hn instanceof Map?hn:Object.entries(hn);for(const[ai,Bn]of et){let qn=Bn;g(Bn)&&(qn=Sn(Bn)),te.push(B+ai+"="+encodeURIComponent(qn))}}catch(ai){throw te.push(B+"type="+encodeURIComponent("_badmap")),ai}}catch{A&&A(hn)}}if(Bt){et=te.join("&");break t}}et=void 0}return c=c.i.splice(0,_),m.G=c,et}function yu(c){if(!c.g&&!c.v){c.Y=1;var m=c.Da;ct||S(),bt||(ct(),bt=!0),O.add(m,c),c.A=0}}function No(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=er(p(c.Da,c),vu(c,c.A)),c.A++,!0)}r.Da=function(){if(this.v=null,_u(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=er(p(this.Wa,this),c)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ce(10),si(this),_u(this))};function Oo(c){c.B!=null&&(f.clearTimeout(c.B),c.B=null)}function _u(c){c.g=new Ln(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var m=se(c.na);Gt(m,"RID","rpc"),Gt(m,"SID",c.M),Gt(m,"AID",c.K),Gt(m,"CI",c.F?"0":"1"),!c.F&&c.ia&&Gt(m,"TO",c.ia),Gt(m,"TYPE","xmlhttp"),bs(c,m),c.u&&c.o&&In(m,c.u,c.o),c.O&&(c.g.H=c.O);var _=c.g;c=c.ba,_.M=1,_.A=bi(se(m)),_.u=null,_.R=!0,rr(_,c)}r.Va=function(){this.C!=null&&(this.C=null,si(this),No(this),ce(19))};function ma(c){c.C!=null&&(f.clearTimeout(c.C),c.C=null)}function Mo(c,m){var _=null;if(c.g==m){ma(c),Oo(c),c.g=null;var A=2}else if(hs(c.h,m))_=m.G,Si(c.h,m),A=1;else return;if(c.I!=0){if(m.o)if(A==1){_=m.u?m.u.length:0,m=Date.now()-m.F;var U=c.D;A=ia(),Ne(A,new lu(A,_)),Ss(c)}else yu(c);else if(U=m.m,U==3||U==0&&m.X>0||!(A==1&&Qh(c,m)||A==2&&No(c)))switch(_&&_.length>0&&(m=c.h,m.i=m.i.concat(_)),U){case 1:Ii(c,5);break;case 4:Ii(c,10);break;case 3:Ii(c,6);break;default:Ii(c,2)}}}function vu(c,m){let _=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(_*=2),_*m}function Ii(c,m){if(c.j.info("Error code "+m),m==2){var _=p(c.bb,c),A=c.Ua;const U=!A;A=new zn(A||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||ar(A,"https"),bi(A),U?Co(A.toString(),_):ur(A.toString(),_)}else ce(2);c.I=0,c.l&&c.l.pa(m),Tu(c),As(c)}r.bb=function(c){c?(this.j.info("Successfully pinged google.com"),ce(2)):(this.j.info("Failed to ping google.com"),ce(1))};function Tu(c){if(c.I=0,c.ja=[],c.l){const m=la(c.h);(m.length!=0||c.i.length!=0)&&(H(c.ja,m),H(c.ja,c.i),c.h.i.length=0,q(c.i),c.i.length=0),c.l.oa()}}function Eu(c,m,_){var A=_ instanceof zn?se(_):new zn(_);if(A.g!="")m&&(A.g=m+"."+A.g),fs(A,A.u);else{var U=f.location;A=U.protocol,m=m?m+"."+U.hostname:U.hostname,U=+U.port;const B=new zn(null);A&&ar(B,A),m&&(B.g=m),U&&fs(B,U),_&&(B.h=_),A=B}return _=c.G,m=c.wa,_&&m&&Gt(A,_,m),Gt(A,"VER",c.ka),bs(c,A),A}function ga(c,m,_){if(m&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return m=c.Aa&&!c.ma?new Jt(new ms({ab:_})):new Jt(c.ma),m.Fa(c.L),m}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Au(){}r=Au.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function pa(){}pa.prototype.g=function(c,m){return new tn(c,m)};function tn(c,m){be.call(this),this.g=new fa(m),this.l=c,this.h=m&&m.messageUrlParams||null,c=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(c?c["X-WebChannel-Content-Type"]=m.messageContentType:c={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.sa&&(c?c["X-WebChannel-Client-Profile"]=m.sa:c={"X-WebChannel-Client-Profile":m.sa}),this.g.U=c,(c=m&&m.Qb)&&!I(c)&&(this.g.u=c),this.A=m&&m.supportsCrossDomainXhr||!1,this.v=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!I(m)&&(this.g.G=m,c=this.h,c!==null&&m in c&&(c=this.h,m in c&&delete c[m])),this.j=new fr(this)}b(tn,be),tn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},tn.prototype.close=function(){Es(this.g)},tn.prototype.o=function(c){var m=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.v&&(_={},_.__data__=Sn(c),c=_);m.i.push(new Fh(m.Ya++,c)),m.I==3&&Ss(m)},tn.prototype.N=function(){this.g.l=null,delete this.j,Es(this.g),delete this.g,tn.Z.N.call(this)};function Vo(c){Ji.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var m=c.__sm__;if(m){t:{for(const _ in m){c=_;break t}c=void 0}(this.i=c)&&(c=this.i,m=m!==null&&c in m?m[c]:void 0),this.data=m}else this.data=c}b(Vo,Ji);function Su(){Un.call(this),this.status=1}b(Su,Un);function fr(c){this.g=c}b(fr,Au),fr.prototype.ra=function(){Ne(this.g,"a")},fr.prototype.qa=function(c){Ne(this.g,new Vo(c))},fr.prototype.pa=function(c){Ne(this.g,new Su)},fr.prototype.oa=function(){Ne(this.g,"b")},pa.prototype.createWebChannel=pa.prototype.g,tn.prototype.send=tn.prototype.o,tn.prototype.open=tn.prototype.m,tn.prototype.close=tn.prototype.close,mE=function(){return new pa},dE=function(){return ia()},fE=bn,hm={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},he.NO_ERROR=0,he.TIMEOUT=8,he.HTTP_ERROR=6,Oc=he,Ue.COMPLETE="complete",hE=Ue,ou.EventType=Jn,Jn.OPEN="a",Jn.CLOSE="b",Jn.ERROR="c",Jn.MESSAGE="d",be.prototype.listen=be.prototype.J,wl=ou,Jt.prototype.listenOnce=Jt.prototype.K,Jt.prototype.getLastError=Jt.prototype.Ha,Jt.prototype.getLastErrorCode=Jt.prototype.ya,Jt.prototype.getStatus=Jt.prototype.ca,Jt.prototype.getResponseJson=Jt.prototype.La,Jt.prototype.getResponseText=Jt.prototype.la,Jt.prototype.send=Jt.prototype.ea,Jt.prototype.setWithCredentials=Jt.prototype.Fa,cE=Jt}).apply(typeof bc<"u"?bc:typeof self<"u"?self:typeof window<"u"?window:{});const fv="@firebase/firestore",dv="4.9.2";/**
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
 */class $e{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}$e.UNAUTHENTICATED=new $e(null),$e.GOOGLE_CREDENTIALS=new $e("google-credentials-uid"),$e.FIRST_PARTY=new $e("first-party-uid"),$e.MOCK_USER=new $e("mock-user");/**
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
 */let co="12.3.0";/**
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
 */const Gs=new dh("@firebase/firestore");function Ga(){return Gs.logLevel}function lt(r,...t){if(Gs.logLevel<=Mt.DEBUG){const n=t.map(Pm);Gs.debug(`Firestore (${co}): ${r}`,...n)}}function Ki(r,...t){if(Gs.logLevel<=Mt.ERROR){const n=t.map(Pm);Gs.error(`Firestore (${co}): ${r}`,...n)}}function eo(r,...t){if(Gs.logLevel<=Mt.WARN){const n=t.map(Pm);Gs.warn(`Firestore (${co}): ${r}`,...n)}}function Pm(r){if(typeof r=="string")return r;try{/**
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
*/return(function(n){return JSON.stringify(n)})(r)}catch{return r}}/**
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
 */function gt(r,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,gE(r,s,n)}function gE(r,t,n){let s=`FIRESTORE (${co}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw Ki(s),new Error(s)}function Lt(r,t,n,s){let o="Unexpected state";typeof n=="string"?o=n:s=n,r||gE(t,o,s)}function At(r,t){return r}/**
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
 */const X={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class at extends Zn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Fi{constructor(){this.promise=new Promise(((t,n)=>{this.resolve=t,this.reject=n}))}}/**
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
 */class pE{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class p1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable((()=>n($e.UNAUTHENTICATED)))}shutdown(){}}class y1{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class _1{constructor(t){this.t=t,this.currentUser=$e.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){Lt(this.o===void 0,42304);let s=this.i;const o=y=>this.i!==s?(s=this.i,n(y)):Promise.resolve();let u=new Fi;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Fi,t.enqueueRetryable((()=>o(this.currentUser)))};const f=()=>{const y=u;t.enqueueRetryable((async()=>{await y.promise,await o(this.currentUser)}))},g=y=>{lt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit((y=>g(y))),setTimeout((()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?g(y):(lt("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Fi)}}),0),f()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((s=>this.i!==t?(lt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Lt(typeof s.accessToken=="string",31837,{l:s}),new pE(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Lt(t===null||typeof t=="string",2055,{h:t}),new $e(t)}}class v1{constructor(t,n,s){this.P=t,this.T=n,this.I=s,this.type="FirstParty",this.user=$e.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class T1{constructor(t,n,s){this.P=t,this.T=n,this.I=s}getToken(){return Promise.resolve(new v1(this.P,this.T,this.I))}start(t,n){t.enqueueRetryable((()=>n($e.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class mv{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class E1{constructor(t,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Kn(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,n){Lt(this.o===void 0,3512);const s=u=>{u.error!=null&&lt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.m;return this.m=u.token,lt("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(u.token):Promise.resolve()};this.o=u=>{t.enqueueRetryable((()=>s(u)))};const o=u=>{lt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):lt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new mv(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((n=>n?(Lt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new mv(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function A1(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class km{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=A1(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<n&&(s+=t.charAt(o[u]%62))}return s}}function Vt(r,t){return r<t?-1:r>t?1:0}function fm(r,t){const n=Math.min(r.length,t.length);for(let s=0;s<n;s++){const o=r.charAt(s),u=t.charAt(s);if(o!==u)return $d(o)===$d(u)?Vt(o,u):$d(o)?1:-1}return Vt(r.length,t.length)}const S1=55296,b1=57343;function $d(r){const t=r.charCodeAt(0);return t>=S1&&t<=b1}function no(r,t,n){return r.length===t.length&&r.every(((s,o)=>n(s,t[o])))}/**
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
 */const gv="__name__";class fi{constructor(t,n,s){n===void 0?n=0:n>t.length&&gt(637,{offset:n,range:t.length}),s===void 0?s=t.length-n:s>t.length-n&&gt(1746,{length:s,range:t.length-n}),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return fi.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof fi?t.forEach((s=>{n.push(s)})):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let o=0;o<s;o++){const u=fi.compareSegments(t.get(o),n.get(o));if(u!==0)return u}return Vt(t.length,n.length)}static compareSegments(t,n){const s=fi.isNumericId(t),o=fi.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?fi.extractNumericId(t).compare(fi.extractNumericId(n)):fm(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return qr.fromString(t.substring(4,t.length-2))}}class $t extends fi{construct(t,n,s){return new $t(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new at(X.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter((o=>o.length>0)))}return new $t(n)}static emptyPath(){return new $t([])}}const w1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qe extends fi{construct(t,n,s){return new qe(t,n,s)}static isValidIdentifier(t){return w1.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qe.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===gv}static keyField(){return new qe([gv])}static fromServerFormat(t){const n=[];let s="",o=0;const u=()=>{if(s.length===0)throw new at(X.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;o<t.length;){const g=t[o];if(g==="\\"){if(o+1===t.length)throw new at(X.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const y=t[o+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new at(X.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=y,o+=2}else g==="`"?(f=!f,o++):g!=="."||f?(s+=g,o++):(u(),o++)}if(u(),f)throw new at(X.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new qe(n)}static emptyPath(){return new qe([])}}/**
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
 */class mt{constructor(t){this.path=t}static fromPath(t){return new mt($t.fromString(t))}static fromName(t){return new mt($t.fromString(t).popFirst(5))}static empty(){return new mt($t.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&$t.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return $t.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new mt(new $t(t.slice()))}}/**
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
 */function yE(r,t,n){if(!n)throw new at(X.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function R1(r,t,n,s){if(t===!0&&s===!0)throw new at(X.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function pv(r){if(!mt.isDocumentKey(r))throw new at(X.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function yv(r){if(mt.isDocumentKey(r))throw new at(X.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function _E(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function mh(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=(function(s){return s.constructor?s.constructor.name:null})(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":gt(12329,{type:typeof r})}function Gi(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new at(X.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=mh(r);throw new at(X.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Se(r,t){const n={typeString:r};return t&&(n.value=t),n}function Kl(r,t){if(!_E(r))throw new at(X.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in t)if(t[s]){const o=t[s].typeString,u="value"in t[s]?{value:t[s].value}:void 0;if(!(s in r)){n=`JSON missing required field: '${s}'`;break}const f=r[s];if(o&&typeof f!==o){n=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&f!==u.value){n=`Expected '${s}' field to equal '${u.value}'`;break}}if(n)throw new at(X.INVALID_ARGUMENT,n);return!0}/**
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
 */const _v=-62135596800,vv=1e6;class ee{static now(){return ee.fromMillis(Date.now())}static fromDate(t){return ee.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor((t-1e3*n)*vv);return new ee(n,s)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new at(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new at(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<_v)throw new at(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new at(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/vv}_compareTo(t){return this.seconds===t.seconds?Vt(this.nanoseconds,t.nanoseconds):Vt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ee._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Kl(t,ee._jsonSchema))return new ee(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-_v;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ee._jsonSchemaVersion="firestore/timestamp/1.0",ee._jsonSchema={type:Se("string",ee._jsonSchemaVersion),seconds:Se("number"),nanoseconds:Se("number")};/**
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
 */class vt{static fromTimestamp(t){return new vt(t)}static min(){return new vt(new ee(0,0))}static max(){return new vt(new ee(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ll=-1;function I1(r,t){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=vt.fromTimestamp(s===1e9?new ee(n+1,0):new ee(n,s));return new Kr(o,mt.empty(),t)}function C1(r){return new Kr(r.readTime,r.key,Ll)}class Kr{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new Kr(vt.min(),mt.empty(),Ll)}static max(){return new Kr(vt.max(),mt.empty(),Ll)}}function D1(r,t){let n=r.readTime.compareTo(t.readTime);return n!==0?n:(n=mt.comparator(r.documentKey,t.documentKey),n!==0?n:Vt(r.largestBatchId,t.largestBatchId))}/**
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
 */const N1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class O1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
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
 */async function ho(r){if(r.code!==X.FAILED_PRECONDITION||r.message!==N1)throw r;lt("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class W{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&gt(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new W(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(t,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(n,u).next(s,o)}}))}toPromise(){return new Promise(((t,n)=>{this.next(t,n)}))}wrapUserFunction(t){try{const n=t();return n instanceof W?n:W.resolve(n)}catch(n){return W.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction((()=>t(n))):W.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction((()=>t(n))):W.reject(n)}static resolve(t){return new W(((n,s)=>{n(t)}))}static reject(t){return new W(((n,s)=>{s(t)}))}static waitFor(t){return new W(((n,s)=>{let o=0,u=0,f=!1;t.forEach((g=>{++o,g.next((()=>{++u,f&&u===o&&n()}),(y=>s(y)))})),f=!0,u===o&&n()}))}static or(t){let n=W.resolve(!1);for(const s of t)n=n.next((o=>o?W.resolve(o):s()));return n}static forEach(t,n){const s=[];return t.forEach(((o,u)=>{s.push(n.call(this,o,u))})),this.waitFor(s)}static mapArray(t,n){return new W(((s,o)=>{const u=t.length,f=new Array(u);let g=0;for(let y=0;y<u;y++){const p=y;n(t[p]).next((E=>{f[p]=E,++g,g===u&&s(f)}),(E=>o(E)))}}))}static doWhile(t,n){return new W(((s,o)=>{const u=()=>{t()===!0?n().next((()=>{u()}),o):s()};u()}))}}function M1(r){const t=r.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function fo(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class gh{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>n.writeSequenceNumber(s))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}gh.ce=-1;/**
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
 */const Um=-1;function Yl(r){return r==null}function Hc(r){return r===0&&1/r==-1/0}function V1(r){return typeof r=="number"&&Number.isInteger(r)&&!Hc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const vE="";function x1(r){let t="";for(let n=0;n<r.length;n++)t.length>0&&(t=Tv(t)),t=P1(r.get(n),t);return Tv(t)}function P1(r,t){let n=t;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":n+="";break;case vE:n+="";break;default:n+=u}}return n}function Tv(r){return r+vE+""}/**
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
 */function Ev(r){let t=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t++;return t}function ts(r,t){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t(n,r[n])}function TE(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class oe{constructor(t,n){this.comparator=t,this.root=n||Be.EMPTY}insert(t,n){return new oe(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Be.BLACK,null,null))}remove(t){return new oe(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Be.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(t,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((n,s)=>(t(n,s),!1)))}toString(){const t=[];return this.inorderTraversal(((n,s)=>(t.push(`${n}:${s}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new wc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new wc(this.root,t,this.comparator,!1)}getReverseIterator(){return new wc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new wc(this.root,t,this.comparator,!0)}}class wc{constructor(t,n,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!t.isEmpty();)if(u=n?s(t.key,n):1,n&&o&&(u*=-1),u<0)t=this.isReverse?t.left:t.right;else{if(u===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Be{constructor(t,n,s,o,u){this.key=t,this.value=n,this.color=s??Be.RED,this.left=o??Be.EMPTY,this.right=u??Be.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,o,u){return new Be(t??this.key,n??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let o=this;const u=s(t,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(t,n,s),null):u===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(t,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Be.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,o=this;if(n(t,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(t,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(t,o.key)===0){if(o.right.isEmpty())return Be.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(t,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw gt(43730,{key:this.key,value:this.value});if(this.right.isRed())throw gt(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw gt(27949);return t+(this.isRed()?0:1)}}Be.EMPTY=null,Be.RED=!0,Be.BLACK=!1;Be.EMPTY=new class{constructor(){this.size=0}get key(){throw gt(57766)}get value(){throw gt(16141)}get color(){throw gt(16727)}get left(){throw gt(29726)}get right(){throw gt(36894)}copy(t,n,s,o,u){return this}insert(t,n,s){return new Be(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ce{constructor(t){this.comparator=t,this.data=new oe(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((n,s)=>(t(n),!1)))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,t[1])>=0)return;n(o.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Av(this.data.getIterator())}getIteratorFrom(t){return new Av(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach((s=>{n=n.add(s)})),n}isEqual(t){if(!(t instanceof Ce)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((n=>{t.push(n)})),t}toString(){const t=[];return this.forEach((n=>t.push(n))),"SortedSet("+t.toString()+")"}copy(t){const n=new Ce(this.comparator);return n.data=t,n}}class Av{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Tn{constructor(t){this.fields=t,t.sort(qe.comparator)}static empty(){return new Tn([])}unionWith(t){let n=new Ce(qe.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new Tn(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return no(this.fields,t.fields,((n,s)=>n.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class EE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class He{constructor(t){this.binaryString=t}static fromBase64String(t){const n=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new EE("Invalid base64 string: "+u):u}})(t);return new He(n)}static fromUint8Array(t){const n=(function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u})(t);return new He(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Vt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}He.EMPTY_BYTE_STRING=new He("");const k1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Yr(r){if(Lt(!!r,39018),typeof r=="string"){let t=0;const n=k1.exec(r);if(Lt(!!n,46558,{timestamp:r}),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),t=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:pe(r.seconds),nanos:pe(r.nanos)}}function pe(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function $r(r){return typeof r=="string"?He.fromBase64String(r):He.fromUint8Array(r)}/**
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
 */const AE="server_timestamp",SE="__type__",bE="__previous_value__",wE="__local_write_time__";function Lm(r){return(r?.mapValue?.fields||{})[SE]?.stringValue===AE}function ph(r){const t=r.mapValue.fields[bE];return Lm(t)?ph(t):t}function zl(r){const t=Yr(r.mapValue.fields[wE].timestampValue);return new ee(t.seconds,t.nanos)}/**
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
 */class U1{constructor(t,n,s,o,u,f,g,y,p,E){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=g,this.longPollingOptions=y,this.useFetchStreams=p,this.isUsingEmulator=E}}const Fc="(default)";class jl{constructor(t,n){this.projectId=t,this.database=n||Fc}static empty(){return new jl("","")}get isDefaultDatabase(){return this.database===Fc}isEqual(t){return t instanceof jl&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const RE="__type__",L1="__max__",Rc={mapValue:{}},IE="__vector__",Gc="value";function Xr(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Lm(r)?4:j1(r)?9007199254740991:z1(r)?10:11:gt(28295,{value:r})}function vi(r,t){if(r===t)return!0;const n=Xr(r);if(n!==Xr(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return zl(r).isEqual(zl(t));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=Yr(o.timestampValue),g=Yr(u.timestampValue);return f.seconds===g.seconds&&f.nanos===g.nanos})(r,t);case 5:return r.stringValue===t.stringValue;case 6:return(function(o,u){return $r(o.bytesValue).isEqual($r(u.bytesValue))})(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return(function(o,u){return pe(o.geoPointValue.latitude)===pe(u.geoPointValue.latitude)&&pe(o.geoPointValue.longitude)===pe(u.geoPointValue.longitude)})(r,t);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return pe(o.integerValue)===pe(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=pe(o.doubleValue),g=pe(u.doubleValue);return f===g?Hc(f)===Hc(g):isNaN(f)&&isNaN(g)}return!1})(r,t);case 9:return no(r.arrayValue.values||[],t.arrayValue.values||[],vi);case 10:case 11:return(function(o,u){const f=o.mapValue.fields||{},g=u.mapValue.fields||{};if(Ev(f)!==Ev(g))return!1;for(const y in f)if(f.hasOwnProperty(y)&&(g[y]===void 0||!vi(f[y],g[y])))return!1;return!0})(r,t);default:return gt(52216,{left:r})}}function Bl(r,t){return(r.values||[]).find((n=>vi(n,t)))!==void 0}function io(r,t){if(r===t)return 0;const n=Xr(r),s=Xr(t);if(n!==s)return Vt(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Vt(r.booleanValue,t.booleanValue);case 2:return(function(u,f){const g=pe(u.integerValue||u.doubleValue),y=pe(f.integerValue||f.doubleValue);return g<y?-1:g>y?1:g===y?0:isNaN(g)?isNaN(y)?0:-1:1})(r,t);case 3:return Sv(r.timestampValue,t.timestampValue);case 4:return Sv(zl(r),zl(t));case 5:return fm(r.stringValue,t.stringValue);case 6:return(function(u,f){const g=$r(u),y=$r(f);return g.compareTo(y)})(r.bytesValue,t.bytesValue);case 7:return(function(u,f){const g=u.split("/"),y=f.split("/");for(let p=0;p<g.length&&p<y.length;p++){const E=Vt(g[p],y[p]);if(E!==0)return E}return Vt(g.length,y.length)})(r.referenceValue,t.referenceValue);case 8:return(function(u,f){const g=Vt(pe(u.latitude),pe(f.latitude));return g!==0?g:Vt(pe(u.longitude),pe(f.longitude))})(r.geoPointValue,t.geoPointValue);case 9:return bv(r.arrayValue,t.arrayValue);case 10:return(function(u,f){const g=u.fields||{},y=f.fields||{},p=g[Gc]?.arrayValue,E=y[Gc]?.arrayValue,b=Vt(p?.values?.length||0,E?.values?.length||0);return b!==0?b:bv(p,E)})(r.mapValue,t.mapValue);case 11:return(function(u,f){if(u===Rc.mapValue&&f===Rc.mapValue)return 0;if(u===Rc.mapValue)return 1;if(f===Rc.mapValue)return-1;const g=u.fields||{},y=Object.keys(g),p=f.fields||{},E=Object.keys(p);y.sort(),E.sort();for(let b=0;b<y.length&&b<E.length;++b){const D=fm(y[b],E[b]);if(D!==0)return D;const q=io(g[y[b]],p[E[b]]);if(q!==0)return q}return Vt(y.length,E.length)})(r.mapValue,t.mapValue);default:throw gt(23264,{he:n})}}function Sv(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return Vt(r,t);const n=Yr(r),s=Yr(t),o=Vt(n.seconds,s.seconds);return o!==0?o:Vt(n.nanos,s.nanos)}function bv(r,t){const n=r.values||[],s=t.values||[];for(let o=0;o<n.length&&o<s.length;++o){const u=io(n[o],s[o]);if(u)return u}return Vt(n.length,s.length)}function ro(r){return dm(r)}function dm(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(n){const s=Yr(n);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(n){return $r(n).toBase64()})(r.bytesValue):"referenceValue"in r?(function(n){return mt.fromName(n).toString()})(r.referenceValue):"geoPointValue"in r?(function(n){return`geo(${n.latitude},${n.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(n){let s="[",o=!0;for(const u of n.values||[])o?o=!1:s+=",",s+=dm(u);return s+"]"})(r.arrayValue):"mapValue"in r?(function(n){const s=Object.keys(n.fields||{}).sort();let o="{",u=!0;for(const f of s)u?u=!1:o+=",",o+=`${f}:${dm(n.fields[f])}`;return o+"}"})(r.mapValue):gt(61005,{value:r})}function Mc(r){switch(Xr(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=ph(r);return t?16+Mc(t):16;case 5:return 2*r.stringValue.length;case 6:return $r(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,u)=>o+Mc(u)),0)})(r.arrayValue);case 10:case 11:return(function(s){let o=0;return ts(s.fields,((u,f)=>{o+=u.length+Mc(f)})),o})(r.mapValue);default:throw gt(13486,{value:r})}}function wv(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function mm(r){return!!r&&"integerValue"in r}function zm(r){return!!r&&"arrayValue"in r}function Rv(r){return!!r&&"nullValue"in r}function Iv(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Vc(r){return!!r&&"mapValue"in r}function z1(r){return(r?.mapValue?.fields||{})[RE]?.stringValue===IE}function Nl(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const t={mapValue:{fields:{}}};return ts(r.mapValue.fields,((n,s)=>t.mapValue.fields[n]=Nl(s))),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Nl(r.arrayValue.values[n]);return t}return{...r}}function j1(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===L1}/**
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
 */class nn{constructor(t){this.value=t}static empty(){return new nn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Vc(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Nl(n)}setAll(t){let n=qe.emptyPath(),s={},o=[];t.forEach(((f,g)=>{if(!n.isImmediateParentOf(g)){const y=this.getFieldsMap(n);this.applyChanges(y,s,o),s={},o=[],n=g.popLast()}f?s[g.lastSegment()]=Nl(f):o.push(g.lastSegment())}));const u=this.getFieldsMap(n);this.applyChanges(u,s,o)}delete(t){const n=this.field(t.popLast());Vc(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return vi(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let o=n.mapValue.fields[t.get(s)];Vc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(t,n,s){ts(n,((o,u)=>t[o]=u));for(const o of s)delete t[o]}clone(){return new nn(Nl(this.value))}}function CE(r){const t=[];return ts(r.fields,((n,s)=>{const o=new qe([n]);if(Vc(s)){const u=CE(s.mapValue).fields;if(u.length===0)t.push(o);else for(const f of u)t.push(o.child(f))}else t.push(o)})),new Tn(t)}/**
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
 */class ke{constructor(t,n,s,o,u,f,g){this.key=t,this.documentType=n,this.version=s,this.readTime=o,this.createTime=u,this.data=f,this.documentState=g}static newInvalidDocument(t){return new ke(t,0,vt.min(),vt.min(),vt.min(),nn.empty(),0)}static newFoundDocument(t,n,s,o){return new ke(t,1,n,vt.min(),s,o,0)}static newNoDocument(t,n){return new ke(t,2,n,vt.min(),vt.min(),nn.empty(),0)}static newUnknownDocument(t,n){return new ke(t,3,n,vt.min(),vt.min(),nn.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(vt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=nn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=nn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=vt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ke&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ke(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Qc{constructor(t,n){this.position=t,this.inclusive=n}}function Cv(r,t,n){let s=0;for(let o=0;o<r.position.length;o++){const u=t[o],f=r.position[o];if(u.field.isKeyField()?s=mt.comparator(mt.fromName(f.referenceValue),n.key):s=io(f,n.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Dv(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!vi(r.position[n],t.position[n]))return!1;return!0}/**
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
 */class Kc{constructor(t,n="asc"){this.field=t,this.dir=n}}function B1(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class DE{}class Ae extends DE{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new H1(t,n,s):n==="array-contains"?new Q1(t,s):n==="in"?new K1(t,s):n==="not-in"?new Y1(t,s):n==="array-contains-any"?new $1(t,s):new Ae(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new F1(t,s):new G1(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(io(n,this.value)):n!==null&&Xr(this.value)===Xr(n)&&this.matchesComparison(io(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return gt(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Xn extends DE{constructor(t,n){super(),this.filters=t,this.op=n,this.Pe=null}static create(t,n){return new Xn(t,n)}matches(t){return NE(this)?this.filters.find((n=>!n.matches(t)))===void 0:this.filters.find((n=>n.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,n)=>t.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function NE(r){return r.op==="and"}function OE(r){return q1(r)&&NE(r)}function q1(r){for(const t of r.filters)if(t instanceof Xn)return!1;return!0}function gm(r){if(r instanceof Ae)return r.field.canonicalString()+r.op.toString()+ro(r.value);if(OE(r))return r.filters.map((t=>gm(t))).join(",");{const t=r.filters.map((n=>gm(n))).join(",");return`${r.op}(${t})`}}function ME(r,t){return r instanceof Ae?(function(s,o){return o instanceof Ae&&s.op===o.op&&s.field.isEqual(o.field)&&vi(s.value,o.value)})(r,t):r instanceof Xn?(function(s,o){return o instanceof Xn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,f,g)=>u&&ME(f,o.filters[g])),!0):!1})(r,t):void gt(19439)}function VE(r){return r instanceof Ae?(function(n){return`${n.field.canonicalString()} ${n.op} ${ro(n.value)}`})(r):r instanceof Xn?(function(n){return n.op.toString()+" {"+n.getFilters().map(VE).join(" ,")+"}"})(r):"Filter"}class H1 extends Ae{constructor(t,n,s){super(t,n,s),this.key=mt.fromName(s.referenceValue)}matches(t){const n=mt.comparator(t.key,this.key);return this.matchesComparison(n)}}class F1 extends Ae{constructor(t,n){super(t,"in",n),this.keys=xE("in",n)}matches(t){return this.keys.some((n=>n.isEqual(t.key)))}}class G1 extends Ae{constructor(t,n){super(t,"not-in",n),this.keys=xE("not-in",n)}matches(t){return!this.keys.some((n=>n.isEqual(t.key)))}}function xE(r,t){return(t.arrayValue?.values||[]).map((n=>mt.fromName(n.referenceValue)))}class Q1 extends Ae{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return zm(n)&&Bl(n.arrayValue,this.value)}}class K1 extends Ae{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Bl(this.value.arrayValue,n)}}class Y1 extends Ae{constructor(t,n){super(t,"not-in",n)}matches(t){if(Bl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Bl(this.value.arrayValue,n)}}class $1 extends Ae{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!zm(n)||!n.arrayValue.values)&&n.arrayValue.values.some((s=>Bl(this.value.arrayValue,s)))}}/**
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
 */class X1{constructor(t,n=null,s=[],o=[],u=null,f=null,g=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=f,this.endAt=g,this.Te=null}}function Nv(r,t=null,n=[],s=[],o=null,u=null,f=null){return new X1(r,t,n,s,o,u,f)}function jm(r){const t=At(r);if(t.Te===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map((s=>gm(s))).join(","),n+="|ob:",n+=t.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),Yl(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((s=>ro(s))).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((s=>ro(s))).join(",")),t.Te=n}return t.Te}function Bm(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!B1(r.orderBy[n],t.orderBy[n]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!ME(r.filters[n],t.filters[n]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!Dv(r.startAt,t.startAt)&&Dv(r.endAt,t.endAt)}function pm(r){return mt.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class $l{constructor(t,n=null,s=[],o=[],u=null,f="F",g=null,y=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=f,this.startAt=g,this.endAt=y,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Z1(r,t,n,s,o,u,f,g){return new $l(r,t,n,s,o,u,f,g)}function qm(r){return new $l(r)}function Ov(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function PE(r){return r.collectionGroup!==null}function Ol(r){const t=At(r);if(t.Ie===null){t.Ie=[];const n=new Set;for(const u of t.explicitOrderBy)t.Ie.push(u),n.add(u.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(f){let g=new Ce(qe.comparator);return f.filters.forEach((y=>{y.getFlattenedFilters().forEach((p=>{p.isInequality()&&(g=g.add(p.field))}))})),g})(t).forEach((u=>{n.has(u.canonicalString())||u.isKeyField()||t.Ie.push(new Kc(u,s))})),n.has(qe.keyField().canonicalString())||t.Ie.push(new Kc(qe.keyField(),s))}return t.Ie}function di(r){const t=At(r);return t.Ee||(t.Ee=J1(t,Ol(r))),t.Ee}function J1(r,t){if(r.limitType==="F")return Nv(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new Kc(o.field,u)}));const n=r.endAt?new Qc(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Qc(r.startAt.position,r.startAt.inclusive):null;return Nv(r.path,r.collectionGroup,t,r.filters,r.limit,n,s)}}function ym(r,t){const n=r.filters.concat([t]);return new $l(r.path,r.collectionGroup,r.explicitOrderBy.slice(),n,r.limit,r.limitType,r.startAt,r.endAt)}function Yc(r,t,n){return new $l(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,n,r.startAt,r.endAt)}function yh(r,t){return Bm(di(r),di(t))&&r.limitType===t.limitType}function kE(r){return`${jm(di(r))}|lt:${r.limitType}`}function Qa(r){return`Query(target=${(function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map((o=>VE(o))).join(", ")}]`),Yl(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map((o=>(function(f){return`${f.field.canonicalString()} (${f.dir})`})(o))).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map((o=>ro(o))).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map((o=>ro(o))).join(",")),`Target(${s})`})(di(r))}; limitType=${r.limitType})`}function _h(r,t){return t.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):mt.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(r,t)&&(function(s,o){for(const u of Ol(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(r,t)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(r,t)&&(function(s,o){return!(s.startAt&&!(function(f,g,y){const p=Cv(f,g,y);return f.inclusive?p<=0:p<0})(s.startAt,Ol(s),o)||s.endAt&&!(function(f,g,y){const p=Cv(f,g,y);return f.inclusive?p>=0:p>0})(s.endAt,Ol(s),o))})(r,t)}function W1(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function UE(r){return(t,n)=>{let s=!1;for(const o of Ol(r)){const u=tR(o,t,n);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function tR(r,t,n){const s=r.field.isKeyField()?mt.comparator(t.key,n.key):(function(u,f,g){const y=f.data.field(u),p=g.data.field(u);return y!==null&&p!==null?io(y,p):gt(42886)})(r.field,t,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return gt(19790,{direction:r.dir})}}/**
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
 */class Js{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,t))return u}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),o=this.inner[s];if(o===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],t))return void(o[u]=[t,n]);o.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(t){ts(this.inner,((n,s)=>{for(const[o,u]of s)t(o,u)}))}isEmpty(){return TE(this.inner)}size(){return this.innerSize}}/**
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
 */const eR=new oe(mt.comparator);function Yi(){return eR}const LE=new oe(mt.comparator);function Rl(...r){let t=LE;for(const n of r)t=t.insert(n.key,n);return t}function zE(r){let t=LE;return r.forEach(((n,s)=>t=t.insert(n,s.overlayedDocument))),t}function qs(){return Ml()}function jE(){return Ml()}function Ml(){return new Js((r=>r.toString()),((r,t)=>r.isEqual(t)))}const nR=new oe(mt.comparator),iR=new Ce(mt.comparator);function xt(...r){let t=iR;for(const n of r)t=t.add(n);return t}const rR=new Ce(Vt);function sR(){return rR}/**
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
 */function Hm(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Hc(t)?"-0":t}}function BE(r){return{integerValue:""+r}}function aR(r,t){return V1(t)?BE(t):Hm(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class vh{constructor(){this._=void 0}}function oR(r,t,n){return r instanceof ql?(function(o,u){const f={fields:{[SE]:{stringValue:AE},[wE]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Lm(u)&&(u=ph(u)),u&&(f.fields[bE]=u),{mapValue:f}})(n,t):r instanceof Hl?HE(r,t):r instanceof Fl?FE(r,t):(function(o,u){const f=qE(o,u),g=Mv(f)+Mv(o.Ae);return mm(f)&&mm(o.Ae)?BE(g):Hm(o.serializer,g)})(r,t)}function lR(r,t,n){return r instanceof Hl?HE(r,t):r instanceof Fl?FE(r,t):n}function qE(r,t){return r instanceof $c?(function(s){return mm(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(t)?t:{integerValue:0}:null}class ql extends vh{}class Hl extends vh{constructor(t){super(),this.elements=t}}function HE(r,t){const n=GE(t);for(const s of r.elements)n.some((o=>vi(o,s)))||n.push(s);return{arrayValue:{values:n}}}class Fl extends vh{constructor(t){super(),this.elements=t}}function FE(r,t){let n=GE(t);for(const s of r.elements)n=n.filter((o=>!vi(o,s)));return{arrayValue:{values:n}}}class $c extends vh{constructor(t,n){super(),this.serializer=t,this.Ae=n}}function Mv(r){return pe(r.integerValue||r.doubleValue)}function GE(r){return zm(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class uR{constructor(t,n){this.field=t,this.transform=n}}function cR(r,t){return r.field.isEqual(t.field)&&(function(s,o){return s instanceof Hl&&o instanceof Hl||s instanceof Fl&&o instanceof Fl?no(s.elements,o.elements,vi):s instanceof $c&&o instanceof $c?vi(s.Ae,o.Ae):s instanceof ql&&o instanceof ql})(r.transform,t.transform)}class hR{constructor(t,n){this.version=t,this.transformResults=n}}class un{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new un}static exists(t){return new un(void 0,t)}static updateTime(t){return new un(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function xc(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class Th{}function QE(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Fm(r.key,un.none()):new Xl(r.key,r.data,un.none());{const n=r.data,s=nn.empty();let o=new Ce(qe.comparator);for(let u of t.fields)if(!o.has(u)){let f=n.field(u);f===null&&u.length>1&&(u=u.popLast(),f=n.field(u)),f===null?s.delete(u):s.set(u,f),o=o.add(u)}return new es(r.key,s,new Tn(o.toArray()),un.none())}}function fR(r,t,n){r instanceof Xl?(function(o,u,f){const g=o.value.clone(),y=xv(o.fieldTransforms,u,f.transformResults);g.setAll(y),u.convertToFoundDocument(f.version,g).setHasCommittedMutations()})(r,t,n):r instanceof es?(function(o,u,f){if(!xc(o.precondition,u))return void u.convertToUnknownDocument(f.version);const g=xv(o.fieldTransforms,u,f.transformResults),y=u.data;y.setAll(KE(o)),y.setAll(g),u.convertToFoundDocument(f.version,y).setHasCommittedMutations()})(r,t,n):(function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()})(0,t,n)}function Vl(r,t,n,s){return r instanceof Xl?(function(u,f,g,y){if(!xc(u.precondition,f))return g;const p=u.value.clone(),E=Pv(u.fieldTransforms,y,f);return p.setAll(E),f.convertToFoundDocument(f.version,p).setHasLocalMutations(),null})(r,t,n,s):r instanceof es?(function(u,f,g,y){if(!xc(u.precondition,f))return g;const p=Pv(u.fieldTransforms,y,f),E=f.data;return E.setAll(KE(u)),E.setAll(p),f.convertToFoundDocument(f.version,E).setHasLocalMutations(),g===null?null:g.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((b=>b.field)))})(r,t,n,s):(function(u,f,g){return xc(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):g})(r,t,n)}function dR(r,t){let n=null;for(const s of r.fieldTransforms){const o=t.data.field(s.field),u=qE(s.transform,o||null);u!=null&&(n===null&&(n=nn.empty()),n.set(s.field,u))}return n||null}function Vv(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&no(s,o,((u,f)=>cR(u,f)))})(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class Xl extends Th{constructor(t,n,s,o=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class es extends Th{constructor(t,n,s,o,u=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function KE(r){const t=new Map;return r.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=r.data.field(n);t.set(n,s)}})),t}function xv(r,t,n){const s=new Map;Lt(r.length===n.length,32656,{Re:n.length,Ve:r.length});for(let o=0;o<n.length;o++){const u=r[o],f=u.transform,g=t.data.field(u.field);s.set(u.field,lR(f,g,n[o]))}return s}function Pv(r,t,n){const s=new Map;for(const o of r){const u=o.transform,f=n.data.field(o.field);s.set(o.field,oR(u,f,t))}return s}class Fm extends Th{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class YE extends Th{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class mR{constructor(t,n,s,o){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(t.key)&&fR(u,t,s[o])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=Vl(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=Vl(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=jE();return this.mutations.forEach((o=>{const u=t.get(o.key),f=u.overlayedDocument;let g=this.applyToLocalView(f,u.mutatedFields);g=n.has(o.key)?null:g;const y=QE(f,g);y!==null&&s.set(o.key,y),f.isValidDocument()||f.convertToNoDocument(vt.min())})),s}keys(){return this.mutations.reduce(((t,n)=>t.add(n.key)),xt())}isEqual(t){return this.batchId===t.batchId&&no(this.mutations,t.mutations,((n,s)=>Vv(n,s)))&&no(this.baseMutations,t.baseMutations,((n,s)=>Vv(n,s)))}}class Gm{constructor(t,n,s,o){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=o}static from(t,n,s){Lt(t.mutations.length===s.length,58842,{me:t.mutations.length,fe:s.length});let o=(function(){return nR})();const u=t.mutations;for(let f=0;f<u.length;f++)o=o.insert(u[f].key,s[f].version);return new Gm(t,n,s,o)}}/**
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
 */class gR{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class pR{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var Ee,Ut;function $E(r){switch(r){case X.OK:return gt(64938);case X.CANCELLED:case X.UNKNOWN:case X.DEADLINE_EXCEEDED:case X.RESOURCE_EXHAUSTED:case X.INTERNAL:case X.UNAVAILABLE:case X.UNAUTHENTICATED:return!1;case X.INVALID_ARGUMENT:case X.NOT_FOUND:case X.ALREADY_EXISTS:case X.PERMISSION_DENIED:case X.FAILED_PRECONDITION:case X.ABORTED:case X.OUT_OF_RANGE:case X.UNIMPLEMENTED:case X.DATA_LOSS:return!0;default:return gt(15467,{code:r})}}function XE(r){if(r===void 0)return Ki("GRPC error has no .code"),X.UNKNOWN;switch(r){case Ee.OK:return X.OK;case Ee.CANCELLED:return X.CANCELLED;case Ee.UNKNOWN:return X.UNKNOWN;case Ee.DEADLINE_EXCEEDED:return X.DEADLINE_EXCEEDED;case Ee.RESOURCE_EXHAUSTED:return X.RESOURCE_EXHAUSTED;case Ee.INTERNAL:return X.INTERNAL;case Ee.UNAVAILABLE:return X.UNAVAILABLE;case Ee.UNAUTHENTICATED:return X.UNAUTHENTICATED;case Ee.INVALID_ARGUMENT:return X.INVALID_ARGUMENT;case Ee.NOT_FOUND:return X.NOT_FOUND;case Ee.ALREADY_EXISTS:return X.ALREADY_EXISTS;case Ee.PERMISSION_DENIED:return X.PERMISSION_DENIED;case Ee.FAILED_PRECONDITION:return X.FAILED_PRECONDITION;case Ee.ABORTED:return X.ABORTED;case Ee.OUT_OF_RANGE:return X.OUT_OF_RANGE;case Ee.UNIMPLEMENTED:return X.UNIMPLEMENTED;case Ee.DATA_LOSS:return X.DATA_LOSS;default:return gt(39323,{code:r})}}(Ut=Ee||(Ee={}))[Ut.OK=0]="OK",Ut[Ut.CANCELLED=1]="CANCELLED",Ut[Ut.UNKNOWN=2]="UNKNOWN",Ut[Ut.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ut[Ut.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ut[Ut.NOT_FOUND=5]="NOT_FOUND",Ut[Ut.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ut[Ut.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ut[Ut.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ut[Ut.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ut[Ut.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ut[Ut.ABORTED=10]="ABORTED",Ut[Ut.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ut[Ut.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ut[Ut.INTERNAL=13]="INTERNAL",Ut[Ut.UNAVAILABLE=14]="UNAVAILABLE",Ut[Ut.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function yR(){return new TextEncoder}/**
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
 */const _R=new qr([4294967295,4294967295],0);function kv(r){const t=yR().encode(r),n=new uE;return n.update(t),new Uint8Array(n.digest())}function Uv(r){const t=new DataView(r.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),o=t.getUint32(8,!0),u=t.getUint32(12,!0);return[new qr([n,s],0),new qr([o,u],0)]}class Qm{constructor(t,n,s){if(this.bitmap=t,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Il(`Invalid padding: ${n}`);if(s<0)throw new Il(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new Il(`Invalid hash count: ${s}`);if(t.length===0&&n!==0)throw new Il(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*t.length-n,this.pe=qr.fromNumber(this.ge)}ye(t,n,s){let o=t.add(n.multiply(qr.fromNumber(s)));return o.compare(_R)===1&&(o=new qr([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const n=kv(t),[s,o]=Uv(n);for(let u=0;u<this.hashCount;u++){const f=this.ye(s,o,u);if(!this.we(f))return!1}return!0}static create(t,n,s){const o=t%8==0?0:8-t%8,u=new Uint8Array(Math.ceil(t/8)),f=new Qm(u,o,n);return s.forEach((g=>f.insert(g))),f}insert(t){if(this.ge===0)return;const n=kv(t),[s,o]=Uv(n);for(let u=0;u<this.hashCount;u++){const f=this.ye(s,o,u);this.Se(f)}}Se(t){const n=Math.floor(t/8),s=t%8;this.bitmap[n]|=1<<s}}class Il extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Eh{constructor(t,n,s,o,u){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const o=new Map;return o.set(t,Zl.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new Eh(vt.min(),o,new oe(Vt),Yi(),xt())}}class Zl{constructor(t,n,s,o,u){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new Zl(s,n,xt(),xt(),xt())}}/**
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
 */class Pc{constructor(t,n,s,o){this.be=t,this.removedTargetIds=n,this.key=s,this.De=o}}class ZE{constructor(t,n){this.targetId=t,this.Ce=n}}class JE{constructor(t,n,s=He.EMPTY_BYTE_STRING,o=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=o}}class Lv{constructor(){this.ve=0,this.Fe=zv(),this.Me=He.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=xt(),n=xt(),s=xt();return this.Fe.forEach(((o,u)=>{switch(u){case 0:t=t.add(o);break;case 2:n=n.add(o);break;case 1:s=s.add(o);break;default:gt(38017,{changeType:u})}})),new Zl(this.Me,this.xe,t,n,s)}qe(){this.Oe=!1,this.Fe=zv()}Qe(t,n){this.Oe=!0,this.Fe=this.Fe.insert(t,n)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,Lt(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class vR{constructor(t){this.Ge=t,this.ze=new Map,this.je=Yi(),this.Je=Ic(),this.He=Ic(),this.Ye=new oe(Vt)}Ze(t){for(const n of t.be)t.De&&t.De.isFoundDocument()?this.Xe(n,t.De):this.et(n,t.key,t.De);for(const n of t.removedTargetIds)this.et(n,t.key,t.De)}tt(t){this.forEachTarget(t,(n=>{const s=this.nt(n);switch(t.state){case 0:this.rt(n)&&s.Le(t.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(t.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(s.We(),s.Le(t.resumeToken));break;case 4:this.rt(n)&&(this.it(n),s.Le(t.resumeToken));break;default:gt(56790,{state:t.state})}}))}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ze.forEach(((s,o)=>{this.rt(o)&&n(o)}))}st(t){const n=t.targetId,s=t.Ce.count,o=this.ot(n);if(o){const u=o.target;if(pm(u))if(s===0){const f=new mt(u.path);this.et(n,f,ke.newNoDocument(f,vt.min()))}else Lt(s===1,20013,{expectedCount:s});else{const f=this._t(n);if(f!==s){const g=this.ut(t),y=g?this.ct(g,t,f):1;if(y!==0){this.it(n);const p=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,p)}}}}}ut(t){const n=t.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=n;let f,g;try{f=$r(s).toUint8Array()}catch(y){if(y instanceof EE)return eo("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{g=new Qm(f,o,u)}catch(y){return eo(y instanceof Il?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return g.ge===0?null:g}ct(t,n,s){return n.Ce.count===s-this.Pt(t,n.targetId)?0:2}Pt(t,n){const s=this.Ge.getRemoteKeysForTarget(n);let o=0;return s.forEach((u=>{const f=this.Ge.ht(),g=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;t.mightContain(g)||(this.et(n,u,null),o++)})),o}Tt(t){const n=new Map;this.ze.forEach(((u,f)=>{const g=this.ot(f);if(g){if(u.current&&pm(g.target)){const y=new mt(g.target.path);this.It(y).has(f)||this.Et(f,y)||this.et(f,y,ke.newNoDocument(y,t))}u.Be&&(n.set(f,u.ke()),u.qe())}}));let s=xt();this.He.forEach(((u,f)=>{let g=!0;f.forEachWhile((y=>{const p=this.ot(y);return!p||p.purpose==="TargetPurposeLimboResolution"||(g=!1,!1)})),g&&(s=s.add(u))})),this.je.forEach(((u,f)=>f.setReadTime(t)));const o=new Eh(t,n,this.Ye,this.je,s);return this.je=Yi(),this.Je=Ic(),this.He=Ic(),this.Ye=new oe(Vt),o}Xe(t,n){if(!this.rt(t))return;const s=this.Et(t,n.key)?2:0;this.nt(t).Qe(n.key,s),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(t)),this.He=this.He.insert(n.key,this.dt(n.key).add(t))}et(t,n,s){if(!this.rt(t))return;const o=this.nt(t);this.Et(t,n)?o.Qe(n,1):o.$e(n),this.He=this.He.insert(n,this.dt(n).delete(t)),this.He=this.He.insert(n,this.dt(n).add(t)),s&&(this.je=this.je.insert(n,s))}removeTarget(t){this.ze.delete(t)}_t(t){const n=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let n=this.ze.get(t);return n||(n=new Lv,this.ze.set(t,n)),n}dt(t){let n=this.He.get(t);return n||(n=new Ce(Vt),this.He=this.He.insert(t,n)),n}It(t){let n=this.Je.get(t);return n||(n=new Ce(Vt),this.Je=this.Je.insert(t,n)),n}rt(t){const n=this.ot(t)!==null;return n||lt("WatchChangeAggregator","Detected inactive target",t),n}ot(t){const n=this.ze.get(t);return n&&n.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new Lv),this.Ge.getRemoteKeysForTarget(t).forEach((n=>{this.et(t,n,null)}))}Et(t,n){return this.Ge.getRemoteKeysForTarget(t).has(n)}}function Ic(){return new oe(mt.comparator)}function zv(){return new oe(mt.comparator)}const TR={asc:"ASCENDING",desc:"DESCENDING"},ER={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},AR={and:"AND",or:"OR"};class SR{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function _m(r,t){return r.useProto3Json||Yl(t)?t:{value:t}}function Xc(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function WE(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function bR(r,t){return Xc(r,t.toTimestamp())}function En(r){return Lt(!!r,49232),vt.fromTimestamp((function(n){const s=Yr(n);return new ee(s.seconds,s.nanos)})(r))}function Km(r,t){return vm(r,t).canonicalString()}function vm(r,t){const n=(function(o){return new $t(["projects",o.projectId,"databases",o.database])})(r).child("documents");return t===void 0?n:n.child(t)}function t0(r){const t=$t.fromString(r);return Lt(a0(t),10190,{key:t.toString()}),t}function Zc(r,t){return Km(r.databaseId,t.path)}function xl(r,t){const n=t0(t);if(n.get(1)!==r.databaseId.projectId)throw new at(X.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new at(X.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new mt(n0(n))}function e0(r,t){return Km(r.databaseId,t)}function wR(r){const t=t0(r);return t.length===4?$t.emptyPath():n0(t)}function Tm(r){return new $t(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function n0(r){return Lt(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function jv(r,t,n){return{name:Zc(r,t),fields:n.value.mapValue.fields}}function RR(r,t){return"found"in t?(function(s,o){Lt(!!o.found,43571),o.found.name,o.found.updateTime;const u=xl(s,o.found.name),f=En(o.found.updateTime),g=o.found.createTime?En(o.found.createTime):vt.min(),y=new nn({mapValue:{fields:o.found.fields}});return ke.newFoundDocument(u,f,g,y)})(r,t):"missing"in t?(function(s,o){Lt(!!o.missing,3894),Lt(!!o.readTime,22933);const u=xl(s,o.missing),f=En(o.readTime);return ke.newNoDocument(u,f)})(r,t):gt(7234,{result:t})}function IR(r,t){let n;if("targetChange"in t){t.targetChange;const s=(function(p){return p==="NO_CHANGE"?0:p==="ADD"?1:p==="REMOVE"?2:p==="CURRENT"?3:p==="RESET"?4:gt(39313,{state:p})})(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],u=(function(p,E){return p.useProto3Json?(Lt(E===void 0||typeof E=="string",58123),He.fromBase64String(E||"")):(Lt(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),He.fromUint8Array(E||new Uint8Array))})(r,t.targetChange.resumeToken),f=t.targetChange.cause,g=f&&(function(p){const E=p.code===void 0?X.UNKNOWN:XE(p.code);return new at(E,p.message||"")})(f);n=new JE(s,o,u,g||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const o=xl(r,s.document.name),u=En(s.document.updateTime),f=s.document.createTime?En(s.document.createTime):vt.min(),g=new nn({mapValue:{fields:s.document.fields}}),y=ke.newFoundDocument(o,u,f,g),p=s.targetIds||[],E=s.removedTargetIds||[];n=new Pc(p,E,y.key,y)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const o=xl(r,s.document),u=s.readTime?En(s.readTime):vt.min(),f=ke.newNoDocument(o,u),g=s.removedTargetIds||[];n=new Pc([],g,f.key,f)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const o=xl(r,s.document),u=s.removedTargetIds||[];n=new Pc([],u,o,null)}else{if(!("filter"in t))return gt(11601,{Rt:t});{t.filter;const s=t.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,f=new pR(o,u),g=s.targetId;n=new ZE(g,f)}}return n}function i0(r,t){let n;if(t instanceof Xl)n={update:jv(r,t.key,t.value)};else if(t instanceof Fm)n={delete:Zc(r,t.key)};else if(t instanceof es)n={update:jv(r,t.key,t.data),updateMask:kR(t.fieldMask)};else{if(!(t instanceof YE))return gt(16599,{Vt:t.type});n={verify:Zc(r,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((s=>(function(u,f){const g=f.transform;if(g instanceof ql)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(g instanceof Hl)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:g.elements}};if(g instanceof Fl)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:g.elements}};if(g instanceof $c)return{fieldPath:f.field.canonicalString(),increment:g.Ae};throw gt(20930,{transform:f.transform})})(0,s)))),t.precondition.isNone||(n.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:bR(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:gt(27497)})(r,t.precondition)),n}function CR(r,t){return r&&r.length>0?(Lt(t!==void 0,14353),r.map((n=>(function(o,u){let f=o.updateTime?En(o.updateTime):En(u);return f.isEqual(vt.min())&&(f=En(u)),new hR(f,o.transformResults||[])})(n,t)))):[]}function DR(r,t){return{documents:[e0(r,t.path)]}}function NR(r,t){const n={structuredQuery:{}},s=t.path;let o;t.collectionGroup!==null?(o=s,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=e0(r,o);const u=(function(p){if(p.length!==0)return s0(Xn.create(p,"and"))})(t.filters);u&&(n.structuredQuery.where=u);const f=(function(p){if(p.length!==0)return p.map((E=>(function(D){return{field:Ka(D.field),direction:VR(D.dir)}})(E)))})(t.orderBy);f&&(n.structuredQuery.orderBy=f);const g=_m(r,t.limit);return g!==null&&(n.structuredQuery.limit=g),t.startAt&&(n.structuredQuery.startAt=(function(p){return{before:p.inclusive,values:p.position}})(t.startAt)),t.endAt&&(n.structuredQuery.endAt=(function(p){return{before:!p.inclusive,values:p.position}})(t.endAt)),{ft:n,parent:o}}function OR(r){let t=wR(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){Lt(s===1,65062);const E=n.from[0];E.allDescendants?o=E.collectionId:t=t.child(E.collectionId)}let u=[];n.where&&(u=(function(b){const D=r0(b);return D instanceof Xn&&OE(D)?D.getFilters():[D]})(n.where));let f=[];n.orderBy&&(f=(function(b){return b.map((D=>(function(H){return new Kc(Ya(H.field),(function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(H.direction))})(D)))})(n.orderBy));let g=null;n.limit&&(g=(function(b){let D;return D=typeof b=="object"?b.value:b,Yl(D)?null:D})(n.limit));let y=null;n.startAt&&(y=(function(b){const D=!!b.before,q=b.values||[];return new Qc(q,D)})(n.startAt));let p=null;return n.endAt&&(p=(function(b){const D=!b.before,q=b.values||[];return new Qc(q,D)})(n.endAt)),Z1(t,o,f,u,g,"F",y,p)}function MR(r,t){const n=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return gt(28987,{purpose:o})}})(t.purpose);return n==null?null:{"goog-listen-tags":n}}function r0(r){return r.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Ya(n.unaryFilter.field);return Ae.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Ya(n.unaryFilter.field);return Ae.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Ya(n.unaryFilter.field);return Ae.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=Ya(n.unaryFilter.field);return Ae.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return gt(61313);default:return gt(60726)}})(r):r.fieldFilter!==void 0?(function(n){return Ae.create(Ya(n.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return gt(58110);default:return gt(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(n){return Xn.create(n.compositeFilter.filters.map((s=>r0(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return gt(1026)}})(n.compositeFilter.op))})(r):gt(30097,{filter:r})}function VR(r){return TR[r]}function xR(r){return ER[r]}function PR(r){return AR[r]}function Ka(r){return{fieldPath:r.canonicalString()}}function Ya(r){return qe.fromServerFormat(r.fieldPath)}function s0(r){return r instanceof Ae?(function(n){if(n.op==="=="){if(Iv(n.value))return{unaryFilter:{field:Ka(n.field),op:"IS_NAN"}};if(Rv(n.value))return{unaryFilter:{field:Ka(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Iv(n.value))return{unaryFilter:{field:Ka(n.field),op:"IS_NOT_NAN"}};if(Rv(n.value))return{unaryFilter:{field:Ka(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ka(n.field),op:xR(n.op),value:n.value}}})(r):r instanceof Xn?(function(n){const s=n.getFilters().map((o=>s0(o)));return s.length===1?s[0]:{compositeFilter:{op:PR(n.op),filters:s}}})(r):gt(54877,{filter:r})}function kR(r){const t=[];return r.fields.forEach((n=>t.push(n.canonicalString()))),{fieldPaths:t}}function a0(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class zr{constructor(t,n,s,o,u=vt.min(),f=vt.min(),g=He.EMPTY_BYTE_STRING,y=null){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=g,this.expectedCount=y}withSequenceNumber(t){return new zr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new zr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new zr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new zr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class UR{constructor(t){this.yt=t}}function LR(r){const t=OR({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Yc(t,t.limit,"L"):t}/**
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
 */class zR{constructor(){this.Cn=new jR}addToCollectionParentIndex(t,n){return this.Cn.add(n),W.resolve()}getCollectionParents(t,n){return W.resolve(this.Cn.getEntries(n))}addFieldIndex(t,n){return W.resolve()}deleteFieldIndex(t,n){return W.resolve()}deleteAllFieldIndexes(t){return W.resolve()}createTargetIndexes(t,n){return W.resolve()}getDocumentsMatchingTarget(t,n){return W.resolve(null)}getIndexType(t,n){return W.resolve(0)}getFieldIndexes(t,n){return W.resolve([])}getNextCollectionGroupToUpdate(t){return W.resolve(null)}getMinOffset(t,n){return W.resolve(Kr.min())}getMinOffsetFromCollectionGroup(t,n){return W.resolve(Kr.min())}updateCollectionGroup(t,n,s){return W.resolve()}updateIndexEntries(t,n){return W.resolve()}}class jR{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),o=this.index[n]||new Ce($t.comparator),u=!o.has(s);return this.index[n]=o.add(s),u}has(t){const n=t.lastSegment(),s=t.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(t){return(this.index[t]||new Ce($t.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const Bv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},o0=41943040;class ln{static withCacheSize(t){return new ln(t,ln.DEFAULT_COLLECTION_PERCENTILE,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,s){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
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
 */ln.DEFAULT_COLLECTION_PERCENTILE=10,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ln.DEFAULT=new ln(o0,ln.DEFAULT_COLLECTION_PERCENTILE,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ln.DISABLED=new ln(-1,0,0);/**
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
 */class so{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new so(0)}static cr(){return new so(-1)}}/**
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
 */const qv="LruGarbageCollector",BR=1048576;function Hv([r,t],[n,s]){const o=Vt(r,n);return o===0?Vt(t,s):o}class qR{constructor(t){this.Ir=t,this.buffer=new Ce(Hv),this.Er=0}dr(){return++this.Er}Ar(t){const n=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();Hv(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class HR{constructor(t,n,s){this.garbageCollector=t,this.asyncQueue=n,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){lt(qv,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){fo(n)?lt(qv,"Ignoring IndexedDB error during garbage collection: ",n):await ho(n)}await this.Vr(3e5)}))}}class FR{constructor(t,n){this.mr=t,this.params=n}calculateTargetCount(t,n){return this.mr.gr(t).next((s=>Math.floor(n/100*s)))}nthSequenceNumber(t,n){if(n===0)return W.resolve(gh.ce);const s=new qR(n);return this.mr.forEachTarget(t,(o=>s.Ar(o.sequenceNumber))).next((()=>this.mr.pr(t,(o=>s.Ar(o))))).next((()=>s.maxValue))}removeTargets(t,n,s){return this.mr.removeTargets(t,n,s)}removeOrphanedDocuments(t,n){return this.mr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(lt("LruGarbageCollector","Garbage collection skipped; disabled"),W.resolve(Bv)):this.getCacheSize(t).next((s=>s<this.params.cacheSizeCollectionThreshold?(lt("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Bv):this.yr(t,n)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,n){let s,o,u,f,g,y,p;const E=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((b=>(b>this.params.maximumSequenceNumbersToCollect?(lt("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${b}`),o=this.params.maximumSequenceNumbersToCollect):o=b,f=Date.now(),this.nthSequenceNumber(t,o)))).next((b=>(s=b,g=Date.now(),this.removeTargets(t,s,n)))).next((b=>(u=b,y=Date.now(),this.removeOrphanedDocuments(t,s)))).next((b=>(p=Date.now(),Ga()<=Mt.DEBUG&&lt("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-E}ms
	Determined least recently used ${o} in `+(g-f)+`ms
	Removed ${u} targets in `+(y-g)+`ms
	Removed ${b} documents in `+(p-y)+`ms
Total Duration: ${p-E}ms`),W.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:b}))))}}function GR(r,t){return new FR(r,t)}/**
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
 */class QR{constructor(){this.changes=new Js((t=>t.toString()),((t,n)=>t.isEqual(n))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,ke.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?W.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 *//**
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
 */class KR{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class YR{constructor(t,n,s,o){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next((o=>(s=o,this.remoteDocumentCache.getEntry(t,n)))).next((o=>(s!==null&&Vl(s.mutation,o,Tn.empty(),ee.now()),o)))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next((s=>this.getLocalViewOfDocuments(t,s,xt()).next((()=>s))))}getLocalViewOfDocuments(t,n,s=xt()){const o=qs();return this.populateOverlays(t,o,n).next((()=>this.computeViews(t,n,o,s).next((u=>{let f=Rl();return u.forEach(((g,y)=>{f=f.insert(g,y.overlayedDocument)})),f}))))}getOverlayedDocuments(t,n){const s=qs();return this.populateOverlays(t,s,n).next((()=>this.computeViews(t,n,s,xt())))}populateOverlays(t,n,s){const o=[];return s.forEach((u=>{n.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(t,o).next((u=>{u.forEach(((f,g)=>{n.set(f,g)}))}))}computeViews(t,n,s,o){let u=Yi();const f=Ml(),g=(function(){return Ml()})();return n.forEach(((y,p)=>{const E=s.get(p.key);o.has(p.key)&&(E===void 0||E.mutation instanceof es)?u=u.insert(p.key,p):E!==void 0?(f.set(p.key,E.mutation.getFieldMask()),Vl(E.mutation,p,E.mutation.getFieldMask(),ee.now())):f.set(p.key,Tn.empty())})),this.recalculateAndSaveOverlays(t,u).next((y=>(y.forEach(((p,E)=>f.set(p,E))),n.forEach(((p,E)=>g.set(p,new KR(E,f.get(p)??null)))),g)))}recalculateAndSaveOverlays(t,n){const s=Ml();let o=new oe(((f,g)=>f-g)),u=xt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next((f=>{for(const g of f)g.keys().forEach((y=>{const p=n.get(y);if(p===null)return;let E=s.get(y)||Tn.empty();E=g.applyToLocalView(p,E),s.set(y,E);const b=(o.get(g.batchId)||xt()).add(y);o=o.insert(g.batchId,b)}))})).next((()=>{const f=[],g=o.getReverseIterator();for(;g.hasNext();){const y=g.getNext(),p=y.key,E=y.value,b=jE();E.forEach((D=>{if(!u.has(D)){const q=QE(n.get(D),s.get(D));q!==null&&b.set(D,q),u=u.add(D)}})),f.push(this.documentOverlayCache.saveOverlays(t,p,b))}return W.waitFor(f)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next((s=>this.recalculateAndSaveOverlays(t,s)))}getDocumentsMatchingQuery(t,n,s,o){return(function(f){return mt.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):PE(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s,o):this.getDocumentsMatchingCollectionQuery(t,n,s,o)}getNextDocuments(t,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,o).next((u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,o-u.size):W.resolve(qs());let g=Ll,y=u;return f.next((p=>W.forEach(p,((E,b)=>(g<b.largestBatchId&&(g=b.largestBatchId),u.get(E)?W.resolve():this.remoteDocumentCache.getEntry(t,E).next((D=>{y=y.insert(E,D)}))))).next((()=>this.populateOverlays(t,p,u))).next((()=>this.computeViews(t,y,p,xt()))).next((E=>({batchId:g,changes:zE(E)})))))}))}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new mt(n)).next((s=>{let o=Rl();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(t,n,s,o){const u=n.collectionGroup;let f=Rl();return this.indexManager.getCollectionParents(t,u).next((g=>W.forEach(g,(y=>{const p=(function(b,D){return new $l(D,null,b.explicitOrderBy.slice(),b.filters.slice(),b.limit,b.limitType,b.startAt,b.endAt)})(n,y.child(u));return this.getDocumentsMatchingCollectionQuery(t,p,s,o).next((E=>{E.forEach(((b,D)=>{f=f.insert(b,D)}))}))})).next((()=>f))))}getDocumentsMatchingCollectionQuery(t,n,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next((f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,u,o)))).next((f=>{u.forEach(((y,p)=>{const E=p.getKey();f.get(E)===null&&(f=f.insert(E,ke.newInvalidDocument(E)))}));let g=Rl();return f.forEach(((y,p)=>{const E=u.get(y);E!==void 0&&Vl(E.mutation,p,Tn.empty(),ee.now()),_h(n,p)&&(g=g.insert(y,p))})),g}))}}/**
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
 */class $R{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,n){return W.resolve(this.Lr.get(n))}saveBundleMetadata(t,n){return this.Lr.set(n.id,(function(o){return{id:o.id,version:o.version,createTime:En(o.createTime)}})(n)),W.resolve()}getNamedQuery(t,n){return W.resolve(this.kr.get(n))}saveNamedQuery(t,n){return this.kr.set(n.name,(function(o){return{name:o.name,query:LR(o.bundledQuery),readTime:En(o.readTime)}})(n)),W.resolve()}}/**
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
 */class XR{constructor(){this.overlays=new oe(mt.comparator),this.qr=new Map}getOverlay(t,n){return W.resolve(this.overlays.get(n))}getOverlays(t,n){const s=qs();return W.forEach(n,(o=>this.getOverlay(t,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(t,n,s){return s.forEach(((o,u)=>{this.St(t,n,u)})),W.resolve()}removeOverlaysForBatchId(t,n,s){const o=this.qr.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.qr.delete(s)),W.resolve()}getOverlaysForCollection(t,n,s){const o=qs(),u=n.length+1,f=new mt(n.child("")),g=this.overlays.getIteratorFrom(f);for(;g.hasNext();){const y=g.getNext().value,p=y.getKey();if(!n.isPrefixOf(p.path))break;p.path.length===u&&y.largestBatchId>s&&o.set(y.getKey(),y)}return W.resolve(o)}getOverlaysForCollectionGroup(t,n,s,o){let u=new oe(((p,E)=>p-E));const f=this.overlays.getIterator();for(;f.hasNext();){const p=f.getNext().value;if(p.getKey().getCollectionGroup()===n&&p.largestBatchId>s){let E=u.get(p.largestBatchId);E===null&&(E=qs(),u=u.insert(p.largestBatchId,E)),E.set(p.getKey(),p)}}const g=qs(),y=u.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach(((p,E)=>g.set(p,E))),!(g.size()>=o)););return W.resolve(g)}St(t,n,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.qr.get(o.largestBatchId).delete(s.key);this.qr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new gR(n,s));let u=this.qr.get(n);u===void 0&&(u=xt(),this.qr.set(n,u)),this.qr.set(n,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class ZR{constructor(){this.sessionToken=He.EMPTY_BYTE_STRING}getSessionToken(t){return W.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,W.resolve()}}/**
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
 */class Ym{constructor(){this.Qr=new Ce(Pe.$r),this.Ur=new Ce(Pe.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,n){const s=new Pe(t,n);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(t,n){t.forEach((s=>this.addReference(s,n)))}removeReference(t,n){this.Gr(new Pe(t,n))}zr(t,n){t.forEach((s=>this.removeReference(s,n)))}jr(t){const n=new mt(new $t([])),s=new Pe(n,t),o=new Pe(n,t+1),u=[];return this.Ur.forEachInRange([s,o],(f=>{this.Gr(f),u.push(f.key)})),u}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const n=new mt(new $t([])),s=new Pe(n,t),o=new Pe(n,t+1);let u=xt();return this.Ur.forEachInRange([s,o],(f=>{u=u.add(f.key)})),u}containsKey(t){const n=new Pe(t,0),s=this.Qr.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class Pe{constructor(t,n){this.key=t,this.Yr=n}static $r(t,n){return mt.comparator(t.key,n.key)||Vt(t.Yr,n.Yr)}static Kr(t,n){return Vt(t.Yr,n.Yr)||mt.comparator(t.key,n.key)}}/**
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
 */class JR{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Ce(Pe.$r)}checkEmpty(t){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new mR(u,n,s,o);this.mutationQueue.push(f);for(const g of o)this.Zr=this.Zr.add(new Pe(g.key,u)),this.indexManager.addToCollectionParentIndex(t,g.key.path.popLast());return W.resolve(f)}lookupMutationBatch(t,n){return W.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,o=this.ei(s),u=o<0?0:o;return W.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?Um:this.tr-1)}getAllMutationBatches(t){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new Pe(n,0),o=new Pe(n,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([s,o],(f=>{const g=this.Xr(f.Yr);u.push(g)})),W.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new Ce(Vt);return n.forEach((o=>{const u=new Pe(o,0),f=new Pe(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,f],(g=>{s=s.add(g.Yr)}))})),W.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,o=s.length+1;let u=s;mt.isDocumentKey(u)||(u=u.child(""));const f=new Pe(new mt(u),0);let g=new Ce(Vt);return this.Zr.forEachWhile((y=>{const p=y.key.path;return!!s.isPrefixOf(p)&&(p.length===o&&(g=g.add(y.Yr)),!0)}),f),W.resolve(this.ti(g))}ti(t){const n=[];return t.forEach((s=>{const o=this.Xr(s);o!==null&&n.push(o)})),n}removeMutationBatch(t,n){Lt(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return W.forEach(n.mutations,(o=>{const u=new Pe(o.key,n.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(t,o.key)})).next((()=>{this.Zr=s}))}ir(t){}containsKey(t,n){const s=new Pe(n,0),o=this.Zr.firstAfterOrEqual(s);return W.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(t){return this.mutationQueue.length,W.resolve()}ni(t,n){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const n=this.ei(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class WR{constructor(t){this.ri=t,this.docs=(function(){return new oe(mt.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,o=this.docs.get(s),u=o?o.size:0,f=this.ri(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return W.resolve(s?s.document.mutableCopy():ke.newInvalidDocument(n))}getEntries(t,n){let s=Yi();return n.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():ke.newInvalidDocument(o))})),W.resolve(s)}getDocumentsMatchingQuery(t,n,s,o){let u=Yi();const f=n.path,g=new mt(f.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(g);for(;y.hasNext();){const{key:p,value:{document:E}}=y.getNext();if(!f.isPrefixOf(p.path))break;p.path.length>f.length+1||D1(C1(E),s)<=0||(o.has(E.key)||_h(n,E))&&(u=u.insert(E.key,E.mutableCopy()))}return W.resolve(u)}getAllFromCollectionGroup(t,n,s,o){gt(9500)}ii(t,n){return W.forEach(this.docs,(s=>n(s)))}newChangeBuffer(t){return new tI(this)}getSize(t){return W.resolve(this.size)}}class tI extends QR{constructor(t){super(),this.Nr=t}applyChanges(t){const n=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?n.push(this.Nr.addEntry(t,o)):this.Nr.removeEntry(s)})),W.waitFor(n)}getFromCache(t,n){return this.Nr.getEntry(t,n)}getAllFromCache(t,n){return this.Nr.getEntries(t,n)}}/**
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
 */class eI{constructor(t){this.persistence=t,this.si=new Js((n=>jm(n)),Bm),this.lastRemoteSnapshotVersion=vt.min(),this.highestTargetId=0,this.oi=0,this._i=new Ym,this.targetCount=0,this.ai=so.ur()}forEachTarget(t,n){return this.si.forEach(((s,o)=>n(o))),W.resolve()}getLastRemoteSnapshotVersion(t){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return W.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.oi&&(this.oi=n),W.resolve()}Pr(t){this.si.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.ai=new so(n),this.highestTargetId=n),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,n){return this.Pr(n),this.targetCount+=1,W.resolve()}updateTargetData(t,n){return this.Pr(n),W.resolve()}removeTargetData(t,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,W.resolve()}removeTargets(t,n,s){let o=0;const u=[];return this.si.forEach(((f,g)=>{g.sequenceNumber<=n&&s.get(g.targetId)===null&&(this.si.delete(f),u.push(this.removeMatchingKeysForTargetId(t,g.targetId)),o++)})),W.waitFor(u).next((()=>o))}getTargetCount(t){return W.resolve(this.targetCount)}getTargetData(t,n){const s=this.si.get(n)||null;return W.resolve(s)}addMatchingKeys(t,n,s){return this._i.Wr(n,s),W.resolve()}removeMatchingKeys(t,n,s){this._i.zr(n,s);const o=this.persistence.referenceDelegate,u=[];return o&&n.forEach((f=>{u.push(o.markPotentiallyOrphaned(t,f))})),W.waitFor(u)}removeMatchingKeysForTargetId(t,n){return this._i.jr(n),W.resolve()}getMatchingKeysForTargetId(t,n){const s=this._i.Hr(n);return W.resolve(s)}containsKey(t,n){return W.resolve(this._i.containsKey(n))}}/**
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
 */class l0{constructor(t,n){this.ui={},this.overlays={},this.ci=new gh(0),this.li=!1,this.li=!0,this.hi=new ZR,this.referenceDelegate=t(this),this.Pi=new eI(this),this.indexManager=new zR,this.remoteDocumentCache=(function(o){return new WR(o)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new UR(n),this.Ii=new $R(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new XR,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.ui[t.toKey()];return s||(s=new JR(n,this.referenceDelegate),this.ui[t.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,n,s){lt("MemoryPersistence","Starting transaction:",t);const o=new nI(this.ci.next());return this.referenceDelegate.Ei(),s(o).next((u=>this.referenceDelegate.di(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ai(t,n){return W.or(Object.values(this.ui).map((s=>()=>s.containsKey(t,n))))}}class nI extends O1{constructor(t){super(),this.currentSequenceNumber=t}}class $m{constructor(t){this.persistence=t,this.Ri=new Ym,this.Vi=null}static mi(t){return new $m(t)}get fi(){if(this.Vi)return this.Vi;throw gt(60996)}addReference(t,n,s){return this.Ri.addReference(s,n),this.fi.delete(s.toString()),W.resolve()}removeReference(t,n,s){return this.Ri.removeReference(s,n),this.fi.add(s.toString()),W.resolve()}markPotentiallyOrphaned(t,n){return this.fi.add(n.toString()),W.resolve()}removeTarget(t,n){this.Ri.jr(n.targetId).forEach((o=>this.fi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next((o=>{o.forEach((u=>this.fi.add(u.toString())))})).next((()=>s.removeTargetData(t,n)))}Ei(){this.Vi=new Set}di(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.fi,(s=>{const o=mt.fromPath(s);return this.gi(t,o).next((u=>{u||n.removeEntry(o,vt.min())}))})).next((()=>(this.Vi=null,n.apply(t))))}updateLimboDocument(t,n){return this.gi(t,n).next((s=>{s?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(t){return 0}gi(t,n){return W.or([()=>W.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ai(t,n)])}}class Jc{constructor(t,n){this.persistence=t,this.pi=new Js((s=>x1(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=GR(this,n)}static mi(t,n){return new Jc(t,n)}Ei(){}di(t){return W.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}gr(t){const n=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((s=>n.next((o=>s+o))))}wr(t){let n=0;return this.pr(t,(s=>{n++})).next((()=>n))}pr(t,n){return W.forEach(this.pi,((s,o)=>this.br(t,s,o).next((u=>u?W.resolve():n(o)))))}removeTargets(t,n,s){return this.persistence.getTargetCache().removeTargets(t,n,s)}removeOrphanedDocuments(t,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(t,(f=>this.br(t,f,n).next((g=>{g||(s++,u.removeEntry(f,vt.min()))})))).next((()=>u.apply(t))).next((()=>s))}markPotentiallyOrphaned(t,n){return this.pi.set(n,t.currentSequenceNumber),W.resolve()}removeTarget(t,n){const s=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,s)}addReference(t,n,s){return this.pi.set(s,t.currentSequenceNumber),W.resolve()}removeReference(t,n,s){return this.pi.set(s,t.currentSequenceNumber),W.resolve()}updateLimboDocument(t,n){return this.pi.set(n,t.currentSequenceNumber),W.resolve()}Ti(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=Mc(t.data.value)),n}br(t,n,s){return W.or([()=>this.persistence.Ai(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const o=this.pi.get(n);return W.resolve(o!==void 0&&o>s)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Xm{constructor(t,n,s,o){this.targetId=t,this.fromCache=n,this.Es=s,this.ds=o}static As(t,n){let s=xt(),o=xt();for(const u of n.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Xm(t,n.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class iI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class rI{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Yb()?8:M1(Xe())>0?6:4})()}initialize(t,n){this.ps=t,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(t,n,s,o){const u={result:null};return this.ys(t,n).next((f=>{u.result=f})).next((()=>{if(!u.result)return this.ws(t,n,o,s).next((f=>{u.result=f}))})).next((()=>{if(u.result)return;const f=new iI;return this.Ss(t,n,f).next((g=>{if(u.result=g,this.Vs)return this.bs(t,n,f,g.size)}))})).next((()=>u.result))}bs(t,n,s,o){return s.documentReadCount<this.fs?(Ga()<=Mt.DEBUG&&lt("QueryEngine","SDK will not create cache indexes for query:",Qa(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),W.resolve()):(Ga()<=Mt.DEBUG&&lt("QueryEngine","Query:",Qa(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.gs*o?(Ga()<=Mt.DEBUG&&lt("QueryEngine","The SDK decides to create cache indexes for query:",Qa(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,di(n))):W.resolve())}ys(t,n){if(Ov(n))return W.resolve(null);let s=di(n);return this.indexManager.getIndexType(t,s).next((o=>o===0?null:(n.limit!==null&&o===1&&(n=Yc(n,null,"F"),s=di(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next((u=>{const f=xt(...u);return this.ps.getDocuments(t,f).next((g=>this.indexManager.getMinOffset(t,s).next((y=>{const p=this.Ds(n,g);return this.Cs(n,p,f,y.readTime)?this.ys(t,Yc(n,null,"F")):this.vs(t,p,n,y)}))))})))))}ws(t,n,s,o){return Ov(n)||o.isEqual(vt.min())?W.resolve(null):this.ps.getDocuments(t,s).next((u=>{const f=this.Ds(n,u);return this.Cs(n,f,s,o)?W.resolve(null):(Ga()<=Mt.DEBUG&&lt("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Qa(n)),this.vs(t,f,n,I1(o,Ll)).next((g=>g)))}))}Ds(t,n){let s=new Ce(UE(t));return n.forEach(((o,u)=>{_h(t,u)&&(s=s.add(u))})),s}Cs(t,n,s,o){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const u=t.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(t,n,s){return Ga()<=Mt.DEBUG&&lt("QueryEngine","Using full collection scan to execute query:",Qa(n)),this.ps.getDocumentsMatchingQuery(t,n,Kr.min(),s)}vs(t,n,s,o){return this.ps.getDocumentsMatchingQuery(t,s,o).next((u=>(n.forEach((f=>{u=u.insert(f.key,f)})),u)))}}/**
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
 */const Zm="LocalStore",sI=3e8;class aI{constructor(t,n,s,o){this.persistence=t,this.Fs=n,this.serializer=o,this.Ms=new oe(Vt),this.xs=new Js((u=>jm(u)),Bm),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(s)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new YR(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>t.collect(n,this.Ms)))}}function oI(r,t,n,s){return new aI(r,t,n,s)}async function u0(r,t){const n=At(r);return await n.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,n.Bs(t),n.mutationQueue.getAllMutationBatches(s)))).next((u=>{const f=[],g=[];let y=xt();for(const p of o){f.push(p.batchId);for(const E of p.mutations)y=y.add(E.key)}for(const p of u){g.push(p.batchId);for(const E of p.mutations)y=y.add(E.key)}return n.localDocuments.getDocuments(s,y).next((p=>({Ls:p,removedBatchIds:f,addedBatchIds:g})))}))}))}function lI(r,t){const n=At(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=t.batch.keys(),u=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(g,y,p,E){const b=p.batch,D=b.keys();let q=W.resolve();return D.forEach((H=>{q=q.next((()=>E.getEntry(y,H))).next(($=>{const F=p.docVersions.get(H);Lt(F!==null,48541),$.version.compareTo(F)<0&&(b.applyToRemoteDocument($,p),$.isValidDocument()&&($.setReadTime(p.commitVersion),E.addEntry($)))}))})),q.next((()=>g.mutationQueue.removeMutationBatch(y,b)))})(n,s,t,u).next((()=>u.apply(s))).next((()=>n.mutationQueue.performConsistencyCheck(s))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(s,o,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(g){let y=xt();for(let p=0;p<g.mutationResults.length;++p)g.mutationResults[p].transformResults.length>0&&(y=y.add(g.batch.mutations[p].key));return y})(t)))).next((()=>n.localDocuments.getDocuments(s,o)))}))}function c0(r){const t=At(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>t.Pi.getLastRemoteSnapshotVersion(n)))}function uI(r,t){const n=At(r),s=t.snapshotVersion;let o=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const f=n.Ns.newChangeBuffer({trackRemovals:!0});o=n.Ms;const g=[];t.targetChanges.forEach(((E,b)=>{const D=o.get(b);if(!D)return;g.push(n.Pi.removeMatchingKeys(u,E.removedDocuments,b).next((()=>n.Pi.addMatchingKeys(u,E.addedDocuments,b))));let q=D.withSequenceNumber(u.currentSequenceNumber);t.targetMismatches.get(b)!==null?q=q.withResumeToken(He.EMPTY_BYTE_STRING,vt.min()).withLastLimboFreeSnapshotVersion(vt.min()):E.resumeToken.approximateByteSize()>0&&(q=q.withResumeToken(E.resumeToken,s)),o=o.insert(b,q),(function($,F,tt){return $.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=sI?!0:tt.addedDocuments.size+tt.modifiedDocuments.size+tt.removedDocuments.size>0})(D,q,E)&&g.push(n.Pi.updateTargetData(u,q))}));let y=Yi(),p=xt();if(t.documentUpdates.forEach((E=>{t.resolvedLimboDocuments.has(E)&&g.push(n.persistence.referenceDelegate.updateLimboDocument(u,E))})),g.push(cI(u,f,t.documentUpdates).next((E=>{y=E.ks,p=E.qs}))),!s.isEqual(vt.min())){const E=n.Pi.getLastRemoteSnapshotVersion(u).next((b=>n.Pi.setTargetsMetadata(u,u.currentSequenceNumber,s)));g.push(E)}return W.waitFor(g).next((()=>f.apply(u))).next((()=>n.localDocuments.getLocalViewOfDocuments(u,y,p))).next((()=>y))})).then((u=>(n.Ms=o,u)))}function cI(r,t,n){let s=xt(),o=xt();return n.forEach((u=>s=s.add(u))),t.getEntries(r,s).next((u=>{let f=Yi();return n.forEach(((g,y)=>{const p=u.get(g);y.isFoundDocument()!==p.isFoundDocument()&&(o=o.add(g)),y.isNoDocument()&&y.version.isEqual(vt.min())?(t.removeEntry(g,y.readTime),f=f.insert(g,y)):!p.isValidDocument()||y.version.compareTo(p.version)>0||y.version.compareTo(p.version)===0&&p.hasPendingWrites?(t.addEntry(y),f=f.insert(g,y)):lt(Zm,"Ignoring outdated watch update for ",g,". Current version:",p.version," Watch version:",y.version)})),{ks:f,qs:o}}))}function hI(r,t){const n=At(r);return n.persistence.runTransaction("Get next mutation batch","readonly",(s=>(t===void 0&&(t=Um),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t))))}function fI(r,t){const n=At(r);return n.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return n.Pi.getTargetData(s,t).next((u=>u?(o=u,W.resolve(o)):n.Pi.allocateTargetId(s).next((f=>(o=new zr(t,f,"TargetPurposeListen",s.currentSequenceNumber),n.Pi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=n.Ms.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(s.targetId,s),n.xs.set(t,s.targetId)),s}))}async function Em(r,t,n){const s=At(r),o=s.Ms.get(t),u=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",u,(f=>s.persistence.referenceDelegate.removeTarget(f,o)))}catch(f){if(!fo(f))throw f;lt(Zm,`Failed to update sequence numbers for target ${t}: ${f}`)}s.Ms=s.Ms.remove(t),s.xs.delete(o.target)}function Fv(r,t,n){const s=At(r);let o=vt.min(),u=xt();return s.persistence.runTransaction("Execute query","readwrite",(f=>(function(y,p,E){const b=At(y),D=b.xs.get(E);return D!==void 0?W.resolve(b.Ms.get(D)):b.Pi.getTargetData(p,E)})(s,f,di(t)).next((g=>{if(g)return o=g.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(f,g.targetId).next((y=>{u=y}))})).next((()=>s.Fs.getDocumentsMatchingQuery(f,t,n?o:vt.min(),n?u:xt()))).next((g=>(dI(s,W1(t),g),{documents:g,Qs:u})))))}function dI(r,t,n){let s=r.Os.get(t)||vt.min();n.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),r.Os.set(t,s)}class Gv{constructor(){this.activeTargetIds=sR()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class mI{constructor(){this.Mo=new Gv,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t,n=!0){return n&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,n,s){this.xo[t]=n}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new Gv,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class gI{Oo(t){}shutdown(){}}/**
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
 */const Qv="ConnectivityMonitor";class Kv{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){lt(Qv,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){lt(Qv,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Cc=null;function Am(){return Cc===null?Cc=(function(){return 268435456+Math.round(2147483648*Math.random())})():Cc++,"0x"+Cc.toString(16)}/**
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
 */const Xd="RestConnection",pI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class yI{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+t.host,this.Ko=`projects/${s}/databases/${o}`,this.Wo=this.databaseId.database===Fc?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Go(t,n,s,o,u){const f=Am(),g=this.zo(t,n.toUriEncodedString());lt(Xd,`Sending RPC '${t}' ${f}:`,g,s);const y={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(y,o,u);const{host:p}=new URL(g),E=lo(p);return this.Jo(t,g,y,s,E).then((b=>(lt(Xd,`Received RPC '${t}' ${f}: `,b),b)),(b=>{throw eo(Xd,`RPC '${t}' ${f} failed with error: `,b,"url: ",g,"request:",s),b}))}Ho(t,n,s,o,u,f){return this.Go(t,n,s,o,u)}jo(t,n,s){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+co})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((o,u)=>t[u]=o)),s&&s.headers.forEach(((o,u)=>t[u]=o))}zo(t,n){const s=pI[t];return`${this.Uo}/v1/${n}:${s}`}terminate(){}}/**
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
 */class _I{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
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
 */const Ye="WebChannelConnection";class vI extends yI{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,n,s,o,u){const f=Am();return new Promise(((g,y)=>{const p=new cE;p.setWithCredentials(!0),p.listenOnce(hE.COMPLETE,(()=>{try{switch(p.getLastErrorCode()){case Oc.NO_ERROR:const b=p.getResponseJson();lt(Ye,`XHR for RPC '${t}' ${f} received:`,JSON.stringify(b)),g(b);break;case Oc.TIMEOUT:lt(Ye,`RPC '${t}' ${f} timed out`),y(new at(X.DEADLINE_EXCEEDED,"Request time out"));break;case Oc.HTTP_ERROR:const D=p.getStatus();if(lt(Ye,`RPC '${t}' ${f} failed with status:`,D,"response text:",p.getResponseText()),D>0){let q=p.getResponseJson();Array.isArray(q)&&(q=q[0]);const H=q?.error;if(H&&H.status&&H.message){const $=(function(tt){const it=tt.toLowerCase().replace(/_/g,"-");return Object.values(X).indexOf(it)>=0?it:X.UNKNOWN})(H.status);y(new at($,H.message))}else y(new at(X.UNKNOWN,"Server responded with status "+p.getStatus()))}else y(new at(X.UNAVAILABLE,"Connection failed."));break;default:gt(9055,{l_:t,streamId:f,h_:p.getLastErrorCode(),P_:p.getLastError()})}}finally{lt(Ye,`RPC '${t}' ${f} completed.`)}}));const E=JSON.stringify(o);lt(Ye,`RPC '${t}' ${f} sending request:`,o),p.send(n,"POST",E,s,15)}))}T_(t,n,s){const o=Am(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],f=mE(),g=dE(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(y.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(y.useFetchStreams=!0),this.jo(y.initMessageHeaders,n,s),y.encodeInitMessageHeaders=!0;const E=u.join("");lt(Ye,`Creating RPC '${t}' stream ${o}: ${E}`,y);const b=f.createWebChannel(E,y);this.I_(b);let D=!1,q=!1;const H=new _I({Yo:F=>{q?lt(Ye,`Not sending because RPC '${t}' stream ${o} is closed:`,F):(D||(lt(Ye,`Opening RPC '${t}' stream ${o} transport.`),b.open(),D=!0),lt(Ye,`RPC '${t}' stream ${o} sending:`,F),b.send(F))},Zo:()=>b.close()}),$=(F,tt,it)=>{F.listen(tt,(ot=>{try{it(ot)}catch(St){setTimeout((()=>{throw St}),0)}}))};return $(b,wl.EventType.OPEN,(()=>{q||(lt(Ye,`RPC '${t}' stream ${o} transport opened.`),H.o_())})),$(b,wl.EventType.CLOSE,(()=>{q||(q=!0,lt(Ye,`RPC '${t}' stream ${o} transport closed`),H.a_(),this.E_(b))})),$(b,wl.EventType.ERROR,(F=>{q||(q=!0,eo(Ye,`RPC '${t}' stream ${o} transport errored. Name:`,F.name,"Message:",F.message),H.a_(new at(X.UNAVAILABLE,"The operation could not be completed")))})),$(b,wl.EventType.MESSAGE,(F=>{if(!q){const tt=F.data[0];Lt(!!tt,16349);const it=tt,ot=it?.error||it[0]?.error;if(ot){lt(Ye,`RPC '${t}' stream ${o} received error:`,ot);const St=ot.status;let ct=(function(S){const C=Ee[S];if(C!==void 0)return XE(C)})(St),bt=ot.message;ct===void 0&&(ct=X.INTERNAL,bt="Unknown error status: "+St+" with message "+ot.message),q=!0,H.a_(new at(ct,bt)),b.close()}else lt(Ye,`RPC '${t}' stream ${o} received:`,tt),H.u_(tt)}})),$(g,fE.STAT_EVENT,(F=>{F.stat===hm.PROXY?lt(Ye,`RPC '${t}' stream ${o} detected buffering proxy`):F.stat===hm.NOPROXY&&lt(Ye,`RPC '${t}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{H.__()}),0),H}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((n=>n===t))}}function Zd(){return typeof document<"u"?document:null}/**
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
 */function Ah(r){return new SR(r,!0)}/**
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
 */class Jm{constructor(t,n,s=1e3,o=1.5,u=6e4){this.Mi=t,this.timerId=n,this.d_=s,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const n=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,n-s);o>0&&lt("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Yv="PersistentStream";class h0{constructor(t,n,s,o,u,f,g,y){this.Mi=t,this.S_=s,this.b_=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=g,this.listener=y,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Jm(t,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():n&&n.code===X.RESOURCE_EXHAUSTED?(Ki(n.toString()),Ki("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===X.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(n)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===n&&this.G_(s,o)}),(s=>{t((()=>{const o=new at(X.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(t,n){const s=this.W_(this.D_);this.stream=this.j_(t,n),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return lt(Yv,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return n=>{this.Mi.enqueueAndForget((()=>this.D_===t?n():(lt(Yv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class TI extends h0{constructor(t,n,s,o,u,f){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}j_(t,n){return this.connection.T_("Listen",t,n)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const n=IR(this.serializer,t),s=(function(u){if(!("targetChange"in u))return vt.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?vt.min():f.readTime?En(f.readTime):vt.min()})(t);return this.listener.H_(n,s)}Y_(t){const n={};n.database=Tm(this.serializer),n.addTarget=(function(u,f){let g;const y=f.target;if(g=pm(y)?{documents:DR(u,y)}:{query:NR(u,y).ft},g.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){g.resumeToken=WE(u,f.resumeToken);const p=_m(u,f.expectedCount);p!==null&&(g.expectedCount=p)}else if(f.snapshotVersion.compareTo(vt.min())>0){g.readTime=Xc(u,f.snapshotVersion.toTimestamp());const p=_m(u,f.expectedCount);p!==null&&(g.expectedCount=p)}return g})(this.serializer,t);const s=MR(this.serializer,t);s&&(n.labels=s),this.q_(n)}Z_(t){const n={};n.database=Tm(this.serializer),n.removeTarget=t,this.q_(n)}}class EI extends h0{constructor(t,n,s,o,u,f){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,n){return this.connection.T_("Write",t,n)}J_(t){return Lt(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Lt(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){Lt(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const n=CR(t.writeResults,t.commitTime),s=En(t.commitTime);return this.listener.na(s,n)}ra(){const t={};t.database=Tm(this.serializer),this.q_(t)}ea(t){const n={streamToken:this.lastStreamToken,writes:t.map((s=>i0(this.serializer,s)))};this.q_(n)}}/**
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
 */class AI{}class SI extends AI{constructor(t,n,s,o){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new at(X.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,n,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,f])=>this.connection.Go(t,vm(n,s),o,u,f))).catch((u=>{throw u.name==="FirebaseError"?(u.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new at(X.UNKNOWN,u.toString())}))}Ho(t,n,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([f,g])=>this.connection.Ho(t,vm(n,s),o,f,g,u))).catch((f=>{throw f.name==="FirebaseError"?(f.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new at(X.UNKNOWN,f.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class bI{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ki(n),this.aa=!1):lt("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Qs="RemoteStore";class wI{constructor(t,n,s,o,u){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo((f=>{s.enqueueAndForget((async()=>{Ws(this)&&(lt(Qs,"Restarting streams for network reachability change."),await(async function(y){const p=At(y);p.Ea.add(4),await Jl(p),p.Ra.set("Unknown"),p.Ea.delete(4),await Sh(p)})(this))}))})),this.Ra=new bI(s,o)}}async function Sh(r){if(Ws(r))for(const t of r.da)await t(!0)}async function Jl(r){for(const t of r.da)await t(!1)}function f0(r,t){const n=At(r);n.Ia.has(t.targetId)||(n.Ia.set(t.targetId,t),ng(n)?eg(n):mo(n).O_()&&tg(n,t))}function Wm(r,t){const n=At(r),s=mo(n);n.Ia.delete(t),s.O_()&&d0(n,t),n.Ia.size===0&&(s.O_()?s.L_():Ws(n)&&n.Ra.set("Unknown"))}function tg(r,t){if(r.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(vt.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}mo(r).Y_(t)}function d0(r,t){r.Va.Ue(t),mo(r).Z_(t)}function eg(r){r.Va=new vR({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),At:t=>r.Ia.get(t)||null,ht:()=>r.datastore.serializer.databaseId}),mo(r).start(),r.Ra.ua()}function ng(r){return Ws(r)&&!mo(r).x_()&&r.Ia.size>0}function Ws(r){return At(r).Ea.size===0}function m0(r){r.Va=void 0}async function RI(r){r.Ra.set("Online")}async function II(r){r.Ia.forEach(((t,n)=>{tg(r,t)}))}async function CI(r,t){m0(r),ng(r)?(r.Ra.ha(t),eg(r)):r.Ra.set("Unknown")}async function DI(r,t,n){if(r.Ra.set("Online"),t instanceof JE&&t.state===2&&t.cause)try{await(async function(o,u){const f=u.cause;for(const g of u.targetIds)o.Ia.has(g)&&(await o.remoteSyncer.rejectListen(g,f),o.Ia.delete(g),o.Va.removeTarget(g))})(r,t)}catch(s){lt(Qs,"Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Wc(r,s)}else if(t instanceof Pc?r.Va.Ze(t):t instanceof ZE?r.Va.st(t):r.Va.tt(t),!n.isEqual(vt.min()))try{const s=await c0(r.localStore);n.compareTo(s)>=0&&await(function(u,f){const g=u.Va.Tt(f);return g.targetChanges.forEach(((y,p)=>{if(y.resumeToken.approximateByteSize()>0){const E=u.Ia.get(p);E&&u.Ia.set(p,E.withResumeToken(y.resumeToken,f))}})),g.targetMismatches.forEach(((y,p)=>{const E=u.Ia.get(y);if(!E)return;u.Ia.set(y,E.withResumeToken(He.EMPTY_BYTE_STRING,E.snapshotVersion)),d0(u,y);const b=new zr(E.target,y,p,E.sequenceNumber);tg(u,b)})),u.remoteSyncer.applyRemoteEvent(g)})(r,n)}catch(s){lt(Qs,"Failed to raise snapshot:",s),await Wc(r,s)}}async function Wc(r,t,n){if(!fo(t))throw t;r.Ea.add(1),await Jl(r),r.Ra.set("Offline"),n||(n=()=>c0(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{lt(Qs,"Retrying IndexedDB access"),await n(),r.Ea.delete(1),await Sh(r)}))}function g0(r,t){return t().catch((n=>Wc(r,n,t)))}async function bh(r){const t=At(r),n=Zr(t);let s=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Um;for(;NI(t);)try{const o=await hI(t.localStore,s);if(o===null){t.Ta.length===0&&n.L_();break}s=o.batchId,OI(t,o)}catch(o){await Wc(t,o)}p0(t)&&y0(t)}function NI(r){return Ws(r)&&r.Ta.length<10}function OI(r,t){r.Ta.push(t);const n=Zr(r);n.O_()&&n.X_&&n.ea(t.mutations)}function p0(r){return Ws(r)&&!Zr(r).x_()&&r.Ta.length>0}function y0(r){Zr(r).start()}async function MI(r){Zr(r).ra()}async function VI(r){const t=Zr(r);for(const n of r.Ta)t.ea(n.mutations)}async function xI(r,t,n){const s=r.Ta.shift(),o=Gm.from(s,t,n);await g0(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await bh(r)}async function PI(r,t){t&&Zr(r).X_&&await(async function(s,o){if((function(f){return $E(f)&&f!==X.ABORTED})(o.code)){const u=s.Ta.shift();Zr(s).B_(),await g0(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o))),await bh(s)}})(r,t),p0(r)&&y0(r)}async function $v(r,t){const n=At(r);n.asyncQueue.verifyOperationInProgress(),lt(Qs,"RemoteStore received new credentials");const s=Ws(n);n.Ea.add(3),await Jl(n),s&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ea.delete(3),await Sh(n)}async function kI(r,t){const n=At(r);t?(n.Ea.delete(2),await Sh(n)):t||(n.Ea.add(2),await Jl(n),n.Ra.set("Unknown"))}function mo(r){return r.ma||(r.ma=(function(n,s,o){const u=At(n);return u.sa(),new TI(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(r.datastore,r.asyncQueue,{Xo:RI.bind(null,r),t_:II.bind(null,r),r_:CI.bind(null,r),H_:DI.bind(null,r)}),r.da.push((async t=>{t?(r.ma.B_(),ng(r)?eg(r):r.Ra.set("Unknown")):(await r.ma.stop(),m0(r))}))),r.ma}function Zr(r){return r.fa||(r.fa=(function(n,s,o){const u=At(n);return u.sa(),new EI(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:MI.bind(null,r),r_:PI.bind(null,r),ta:VI.bind(null,r),na:xI.bind(null,r)}),r.da.push((async t=>{t?(r.fa.B_(),await bh(r)):(await r.fa.stop(),r.Ta.length>0&&(lt(Qs,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
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
 */class ig{constructor(t,n,s,o,u){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Fi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((f=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,n,s,o,u){const f=Date.now()+s,g=new ig(t,n,f,o,u);return g.start(s),g}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new at(X.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rg(r,t){if(Ki("AsyncQueue",`${t}: ${r}`),fo(r))return new at(X.UNAVAILABLE,`${t}: ${r}`);throw r}/**
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
 */class Za{static emptySet(t){return new Za(t.comparator)}constructor(t){this.comparator=t?(n,s)=>t(n,s)||mt.comparator(n.key,s.key):(n,s)=>mt.comparator(n.key,s.key),this.keyedMap=Rl(),this.sortedSet=new oe(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((n,s)=>(t(n),!1)))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Za)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const t=[];return this.forEach((n=>{t.push(n.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Za;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
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
 */class Xv{constructor(){this.ga=new oe(mt.comparator)}track(t){const n=t.doc.key,s=this.ga.get(n);s?t.type!==0&&s.type===3?this.ga=this.ga.insert(n,t):t.type===3&&s.type!==1?this.ga=this.ga.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.ga=this.ga.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.ga=this.ga.remove(n):t.type===1&&s.type===2?this.ga=this.ga.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):gt(63341,{Rt:t,pa:s}):this.ga=this.ga.insert(n,t)}ya(){const t=[];return this.ga.inorderTraversal(((n,s)=>{t.push(s)})),t}}class ao{constructor(t,n,s,o,u,f,g,y,p){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=g,this.excludesMetadataChanges=y,this.hasCachedResults=p}static fromInitialDocuments(t,n,s,o,u){const f=[];return n.forEach((g=>{f.push({type:0,doc:g})})),new ao(t,n,Za.emptySet(n),f,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&yh(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==s[o].type||!n[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class UI{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((t=>t.Da()))}}class LI{constructor(){this.queries=Zv(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const o=At(n),u=o.queries;o.queries=Zv(),u.forEach(((f,g)=>{for(const y of g.Sa)y.onError(s)}))})(this,new at(X.ABORTED,"Firestore shutting down"))}}function Zv(){return new Js((r=>kE(r)),yh)}async function _0(r,t){const n=At(r);let s=3;const o=t.query;let u=n.queries.get(o);u?!u.ba()&&t.Da()&&(s=2):(u=new UI,s=t.Da()?0:1);try{switch(s){case 0:u.wa=await n.onListen(o,!0);break;case 1:u.wa=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(f){const g=rg(f,`Initialization of query '${Qa(t.query)}' failed`);return void t.onError(g)}n.queries.set(o,u),u.Sa.push(t),t.va(n.onlineState),u.wa&&t.Fa(u.wa)&&sg(n)}async function v0(r,t){const n=At(r),s=t.query;let o=3;const u=n.queries.get(s);if(u){const f=u.Sa.indexOf(t);f>=0&&(u.Sa.splice(f,1),u.Sa.length===0?o=t.Da()?0:1:!u.ba()&&t.Da()&&(o=2))}switch(o){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function zI(r,t){const n=At(r);let s=!1;for(const o of t){const u=o.query,f=n.queries.get(u);if(f){for(const g of f.Sa)g.Fa(o)&&(s=!0);f.wa=o}}s&&sg(n)}function jI(r,t,n){const s=At(r),o=s.queries.get(t);if(o)for(const u of o.Sa)u.onError(n);s.queries.delete(t)}function sg(r){r.Ca.forEach((t=>{t.next()}))}var Sm,Jv;(Jv=Sm||(Sm={})).Ma="default",Jv.Cache="cache";class T0{constructor(t,n,s){this.query=t,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(t){if(!this.options.includeMetadataChanges){const s=[];for(const o of t.docChanges)o.type!==3&&s.push(o);t=new ao(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),n=!0):this.La(t,this.onlineState)&&(this.ka(t),n=!0),this.Na=t,n}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),n=!0),n}La(t,n){if(!t.fromCache||!this.Da())return!0;const s=n!=="Offline";return(!this.options.qa||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(t){t=ao.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Sm.Cache}}/**
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
 */class E0{constructor(t){this.key=t}}class A0{constructor(t){this.key=t}}class BI{constructor(t,n){this.query=t,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=xt(),this.mutatedKeys=xt(),this.eu=UE(t),this.tu=new Za(this.eu)}get nu(){return this.Ya}ru(t,n){const s=n?n.iu:new Xv,o=n?n.tu:this.tu;let u=n?n.mutatedKeys:this.mutatedKeys,f=o,g=!1;const y=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,p=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(t.inorderTraversal(((E,b)=>{const D=o.get(E),q=_h(this.query,b)?b:null,H=!!D&&this.mutatedKeys.has(D.key),$=!!q&&(q.hasLocalMutations||this.mutatedKeys.has(q.key)&&q.hasCommittedMutations);let F=!1;D&&q?D.data.isEqual(q.data)?H!==$&&(s.track({type:3,doc:q}),F=!0):this.su(D,q)||(s.track({type:2,doc:q}),F=!0,(y&&this.eu(q,y)>0||p&&this.eu(q,p)<0)&&(g=!0)):!D&&q?(s.track({type:0,doc:q}),F=!0):D&&!q&&(s.track({type:1,doc:D}),F=!0,(y||p)&&(g=!0)),F&&(q?(f=f.add(q),u=$?u.add(E):u.delete(E)):(f=f.delete(E),u=u.delete(E)))})),this.query.limit!==null)for(;f.size>this.query.limit;){const E=this.query.limitType==="F"?f.last():f.first();f=f.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{tu:f,iu:s,Cs:g,mutatedKeys:u}}su(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s,o){const u=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const f=t.iu.ya();f.sort(((E,b)=>(function(q,H){const $=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return gt(20277,{Rt:F})}};return $(q)-$(H)})(E.type,b.type)||this.eu(E.doc,b.doc))),this.ou(s),o=o??!1;const g=n&&!o?this._u():[],y=this.Xa.size===0&&this.current&&!o?1:0,p=y!==this.Za;return this.Za=y,f.length!==0||p?{snapshot:new ao(this.query,t.tu,u,f,t.mutatedKeys,y===0,p,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:g}:{au:g}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Xv,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),t.modifiedDocuments.forEach((n=>{})),t.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=xt(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const n=[];return t.forEach((s=>{this.Xa.has(s)||n.push(new A0(s))})),this.Xa.forEach((s=>{t.has(s)||n.push(new E0(s))})),n}cu(t){this.Ya=t.Qs,this.Xa=xt();const n=this.ru(t.documents);return this.applyChanges(n,!0)}lu(){return ao.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const ag="SyncEngine";class qI{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class HI{constructor(t){this.key=t,this.hu=!1}}class FI{constructor(t,n,s,o,u,f){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.Pu={},this.Tu=new Js((g=>kE(g)),yh),this.Iu=new Map,this.Eu=new Set,this.du=new oe(mt.comparator),this.Au=new Map,this.Ru=new Ym,this.Vu={},this.mu=new Map,this.fu=so.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function GI(r,t,n=!0){const s=C0(r);let o;const u=s.Tu.get(t);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await S0(s,t,n,!0),o}async function QI(r,t){const n=C0(r);await S0(n,t,!0,!1)}async function S0(r,t,n,s){const o=await fI(r.localStore,di(t)),u=o.targetId,f=r.sharedClientState.addLocalQueryTarget(u,n);let g;return s&&(g=await KI(r,t,u,f==="current",o.resumeToken)),r.isPrimaryClient&&n&&f0(r.remoteStore,o),g}async function KI(r,t,n,s,o){r.pu=(b,D,q)=>(async function($,F,tt,it){let ot=F.view.ru(tt);ot.Cs&&(ot=await Fv($.localStore,F.query,!1).then((({documents:O})=>F.view.ru(O,ot))));const St=it&&it.targetChanges.get(F.targetId),ct=it&&it.targetMismatches.get(F.targetId)!=null,bt=F.view.applyChanges(ot,$.isPrimaryClient,St,ct);return tT($,F.targetId,bt.au),bt.snapshot})(r,b,D,q);const u=await Fv(r.localStore,t,!0),f=new BI(t,u.Qs),g=f.ru(u.documents),y=Zl.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",o),p=f.applyChanges(g,r.isPrimaryClient,y);tT(r,n,p.au);const E=new qI(t,n,f);return r.Tu.set(t,E),r.Iu.has(n)?r.Iu.get(n).push(t):r.Iu.set(n,[t]),p.snapshot}async function YI(r,t,n){const s=At(r),o=s.Tu.get(t),u=s.Iu.get(o.targetId);if(u.length>1)return s.Iu.set(o.targetId,u.filter((f=>!yh(f,t)))),void s.Tu.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Em(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),n&&Wm(s.remoteStore,o.targetId),bm(s,o.targetId)})).catch(ho)):(bm(s,o.targetId),await Em(s.localStore,o.targetId,!0))}async function $I(r,t){const n=At(r),s=n.Tu.get(t),o=n.Iu.get(s.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Wm(n.remoteStore,s.targetId))}async function XI(r,t,n){const s=iC(r);try{const o=await(function(f,g){const y=At(f),p=ee.now(),E=g.reduce(((q,H)=>q.add(H.key)),xt());let b,D;return y.persistence.runTransaction("Locally write mutations","readwrite",(q=>{let H=Yi(),$=xt();return y.Ns.getEntries(q,E).next((F=>{H=F,H.forEach(((tt,it)=>{it.isValidDocument()||($=$.add(tt))}))})).next((()=>y.localDocuments.getOverlayedDocuments(q,H))).next((F=>{b=F;const tt=[];for(const it of g){const ot=dR(it,b.get(it.key).overlayedDocument);ot!=null&&tt.push(new es(it.key,ot,CE(ot.value.mapValue),un.exists(!0)))}return y.mutationQueue.addMutationBatch(q,p,tt,g)})).next((F=>{D=F;const tt=F.applyToLocalDocumentSet(b,$);return y.documentOverlayCache.saveOverlays(q,F.batchId,tt)}))})).then((()=>({batchId:D.batchId,changes:zE(b)})))})(s.localStore,t);s.sharedClientState.addPendingMutation(o.batchId),(function(f,g,y){let p=f.Vu[f.currentUser.toKey()];p||(p=new oe(Vt)),p=p.insert(g,y),f.Vu[f.currentUser.toKey()]=p})(s,o.batchId,n),await Wl(s,o.changes),await bh(s.remoteStore)}catch(o){const u=rg(o,"Failed to persist write");n.reject(u)}}async function b0(r,t){const n=At(r);try{const s=await uI(n.localStore,t);t.targetChanges.forEach(((o,u)=>{const f=n.Au.get(u);f&&(Lt(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?f.hu=!0:o.modifiedDocuments.size>0?Lt(f.hu,14607):o.removedDocuments.size>0&&(Lt(f.hu,42227),f.hu=!1))})),await Wl(n,s,t)}catch(s){await ho(s)}}function Wv(r,t,n){const s=At(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.Tu.forEach(((u,f)=>{const g=f.view.va(t);g.snapshot&&o.push(g.snapshot)})),(function(f,g){const y=At(f);y.onlineState=g;let p=!1;y.queries.forEach(((E,b)=>{for(const D of b.Sa)D.va(g)&&(p=!0)})),p&&sg(y)})(s.eventManager,t),o.length&&s.Pu.H_(o),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function ZI(r,t,n){const s=At(r);s.sharedClientState.updateQueryState(t,"rejected",n);const o=s.Au.get(t),u=o&&o.key;if(u){let f=new oe(mt.comparator);f=f.insert(u,ke.newNoDocument(u,vt.min()));const g=xt().add(u),y=new Eh(vt.min(),new Map,new oe(Vt),f,g);await b0(s,y),s.du=s.du.remove(u),s.Au.delete(t),og(s)}else await Em(s.localStore,t,!1).then((()=>bm(s,t,n))).catch(ho)}async function JI(r,t){const n=At(r),s=t.batch.batchId;try{const o=await lI(n.localStore,t);R0(n,s,null),w0(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Wl(n,o)}catch(o){await ho(o)}}async function WI(r,t,n){const s=At(r);try{const o=await(function(f,g){const y=At(f);return y.persistence.runTransaction("Reject batch","readwrite-primary",(p=>{let E;return y.mutationQueue.lookupMutationBatch(p,g).next((b=>(Lt(b!==null,37113),E=b.keys(),y.mutationQueue.removeMutationBatch(p,b)))).next((()=>y.mutationQueue.performConsistencyCheck(p))).next((()=>y.documentOverlayCache.removeOverlaysForBatchId(p,E,g))).next((()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(p,E))).next((()=>y.localDocuments.getDocuments(p,E)))}))})(s.localStore,t);R0(s,t,n),w0(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await Wl(s,o)}catch(o){await ho(o)}}function w0(r,t){(r.mu.get(t)||[]).forEach((n=>{n.resolve()})),r.mu.delete(t)}function R0(r,t,n){const s=At(r);let o=s.Vu[s.currentUser.toKey()];if(o){const u=o.get(t);u&&(n?u.reject(n):u.resolve(),o=o.remove(t)),s.Vu[s.currentUser.toKey()]=o}}function bm(r,t,n=null){r.sharedClientState.removeLocalQueryTarget(t);for(const s of r.Iu.get(t))r.Tu.delete(s),n&&r.Pu.yu(s,n);r.Iu.delete(t),r.isPrimaryClient&&r.Ru.jr(t).forEach((s=>{r.Ru.containsKey(s)||I0(r,s)}))}function I0(r,t){r.Eu.delete(t.path.canonicalString());const n=r.du.get(t);n!==null&&(Wm(r.remoteStore,n),r.du=r.du.remove(t),r.Au.delete(n),og(r))}function tT(r,t,n){for(const s of n)s instanceof E0?(r.Ru.addReference(s.key,t),tC(r,s)):s instanceof A0?(lt(ag,"Document no longer in limbo: "+s.key),r.Ru.removeReference(s.key,t),r.Ru.containsKey(s.key)||I0(r,s.key)):gt(19791,{wu:s})}function tC(r,t){const n=t.key,s=n.path.canonicalString();r.du.get(n)||r.Eu.has(s)||(lt(ag,"New document in limbo: "+n),r.Eu.add(s),og(r))}function og(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const t=r.Eu.values().next().value;r.Eu.delete(t);const n=new mt($t.fromString(t)),s=r.fu.next();r.Au.set(s,new HI(n)),r.du=r.du.insert(n,s),f0(r.remoteStore,new zr(di(qm(n.path)),s,"TargetPurposeLimboResolution",gh.ce))}}async function Wl(r,t,n){const s=At(r),o=[],u=[],f=[];s.Tu.isEmpty()||(s.Tu.forEach(((g,y)=>{f.push(s.pu(y,t,n).then((p=>{if((p||n)&&s.isPrimaryClient){const E=p?!p.fromCache:n?.targetChanges.get(y.targetId)?.current;s.sharedClientState.updateQueryState(y.targetId,E?"current":"not-current")}if(p){o.push(p);const E=Xm.As(y.targetId,p);u.push(E)}})))})),await Promise.all(f),s.Pu.H_(o),await(async function(y,p){const E=At(y);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(b=>W.forEach(p,(D=>W.forEach(D.Es,(q=>E.persistence.referenceDelegate.addReference(b,D.targetId,q))).next((()=>W.forEach(D.ds,(q=>E.persistence.referenceDelegate.removeReference(b,D.targetId,q)))))))))}catch(b){if(!fo(b))throw b;lt(Zm,"Failed to update sequence numbers: "+b)}for(const b of p){const D=b.targetId;if(!b.fromCache){const q=E.Ms.get(D),H=q.snapshotVersion,$=q.withLastLimboFreeSnapshotVersion(H);E.Ms=E.Ms.insert(D,$)}}})(s.localStore,u))}async function eC(r,t){const n=At(r);if(!n.currentUser.isEqual(t)){lt(ag,"User change. New user:",t.toKey());const s=await u0(n.localStore,t);n.currentUser=t,(function(u,f){u.mu.forEach((g=>{g.forEach((y=>{y.reject(new at(X.CANCELLED,f))}))})),u.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Wl(n,s.Ls)}}function nC(r,t){const n=At(r),s=n.Au.get(t);if(s&&s.hu)return xt().add(s.key);{let o=xt();const u=n.Iu.get(t);if(!u)return o;for(const f of u){const g=n.Tu.get(f);o=o.unionWith(g.view.nu)}return o}}function C0(r){const t=At(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=b0.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=nC.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=ZI.bind(null,t),t.Pu.H_=zI.bind(null,t.eventManager),t.Pu.yu=jI.bind(null,t.eventManager),t}function iC(r){const t=At(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=JI.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=WI.bind(null,t),t}class th{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Ah(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,n){return null}Mu(t,n){return null}vu(t){return oI(this.persistence,new rI,t.initialUser,this.serializer)}Cu(t){return new l0($m.mi,this.serializer)}Du(t){return new mI}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}th.provider={build:()=>new th};class rC extends th{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,n){Lt(this.persistence.referenceDelegate instanceof Jc,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new HR(s,t.asyncQueue,n)}Cu(t){const n=this.cacheSizeBytes!==void 0?ln.withCacheSize(this.cacheSizeBytes):ln.DEFAULT;return new l0((s=>Jc.mi(s,n)),this.serializer)}}class wm{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Wv(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=eC.bind(null,this.syncEngine),await kI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new LI})()}createDatastore(t){const n=Ah(t.databaseInfo.databaseId),s=(function(u){return new vI(u)})(t.databaseInfo);return(function(u,f,g,y){return new SI(u,f,g,y)})(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return(function(s,o,u,f,g){return new wI(s,o,u,f,g)})(this.localStore,this.datastore,t.asyncQueue,(n=>Wv(this.syncEngine,n,0)),(function(){return Kv.v()?new Kv:new gI})())}createSyncEngine(t,n){return(function(o,u,f,g,y,p,E){const b=new FI(o,u,f,g,y,p);return E&&(b.gu=!0),b})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const s=At(n);lt(Qs,"RemoteStore shutting down."),s.Ea.add(5),await Jl(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}wm.provider={build:()=>new wm};/**
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
 *//**
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
 */class D0{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):Ki("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,n){setTimeout((()=>{this.muted||t(n)}),0)}}/**
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
 */class sC{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new at(X.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await(async function(o,u){const f=At(o),g={documents:u.map((b=>Zc(f.serializer,b)))},y=await f.Ho("BatchGetDocuments",f.serializer.databaseId,$t.emptyPath(),g,u.length),p=new Map;y.forEach((b=>{const D=RR(f.serializer,b);p.set(D.key.toString(),D)}));const E=[];return u.forEach((b=>{const D=p.get(b.toString());Lt(!!D,55234,{key:b}),E.push(D)})),E})(this.datastore,t);return n.forEach((s=>this.recordVersion(s))),n}set(t,n){this.write(n.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,n){try{this.write(n.toMutation(t,this.preconditionForUpdate(t)))}catch(s){this.lastTransactionError=s}this.writtenDocs.add(t.toString())}delete(t){this.write(new Fm(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const t=this.readVersions;this.mutations.forEach((n=>{t.delete(n.key.toString())})),t.forEach(((n,s)=>{const o=mt.fromPath(s);this.mutations.push(new YE(o,this.precondition(o)))})),await(async function(s,o){const u=At(s),f={writes:o.map((g=>i0(u.serializer,g)))};await u.Go("Commit",u.serializer.databaseId,$t.emptyPath(),f)})(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let n;if(t.isFoundDocument())n=t.version;else{if(!t.isNoDocument())throw gt(50498,{Gu:t.constructor.name});n=vt.min()}const s=this.readVersions.get(t.key.toString());if(s){if(!n.isEqual(s))throw new at(X.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),n)}precondition(t){const n=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&n?n.isEqual(vt.min())?un.exists(!1):un.updateTime(n):un.none()}preconditionForUpdate(t){const n=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&n){if(n.isEqual(vt.min()))throw new at(X.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return un.updateTime(n)}return un.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}/**
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
 */class aC{constructor(t,n,s,o,u){this.asyncQueue=t,this.datastore=n,this.options=s,this.updateFunction=o,this.deferred=u,this.zu=s.maxAttempts,this.M_=new Jm(this.asyncQueue,"transaction_retry")}ju(){this.zu-=1,this.Ju()}Ju(){this.M_.p_((async()=>{const t=new sC(this.datastore),n=this.Hu(t);n&&n.then((s=>{this.asyncQueue.enqueueAndForget((()=>t.commit().then((()=>{this.deferred.resolve(s)})).catch((o=>{this.Yu(o)}))))})).catch((s=>{this.Yu(s)}))}))}Hu(t){try{const n=this.updateFunction(t);return!Yl(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Yu(t){this.zu>0&&this.Zu(t)?(this.zu-=1,this.asyncQueue.enqueueAndForget((()=>(this.Ju(),Promise.resolve())))):this.deferred.reject(t)}Zu(t){if(t?.name==="FirebaseError"){const n=t.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!$E(n)}return!1}}/**
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
 */const Jr="FirestoreClient";class oC{constructor(t,n,s,o,u){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=o,this.user=$e.UNAUTHENTICATED,this.clientId=km.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async f=>{lt(Jr,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f})),this.appCheckCredentials.start(s,(f=>(lt(Jr,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Fi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=rg(n,"Failed to shutdown persistence");t.reject(s)}})),t.promise}}async function Jd(r,t){r.asyncQueue.verifyOperationInProgress(),lt(Jr,"Initializing OfflineComponentProvider");const n=r.configuration;await t.initialize(n);let s=n.initialUser;r.setCredentialChangeListener((async o=>{s.isEqual(o)||(await u0(t.localStore,o),s=o)})),t.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=t}async function eT(r,t){r.asyncQueue.verifyOperationInProgress();const n=await lC(r);lt(Jr,"Initializing OnlineComponentProvider"),await t.initialize(n,r.configuration),r.setCredentialChangeListener((s=>$v(t.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,o)=>$v(t.remoteStore,o))),r._onlineComponents=t}async function lC(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){lt(Jr,"Using user provided OfflineComponentProvider");try{await Jd(r,r._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!(function(o){return o.name==="FirebaseError"?o.code===X.FAILED_PRECONDITION||o.code===X.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(n))throw n;eo("Error using user provided cache. Falling back to memory cache: "+n),await Jd(r,new th)}}else lt(Jr,"Using default OfflineComponentProvider"),await Jd(r,new rC(void 0));return r._offlineComponents}async function lg(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(lt(Jr,"Using user provided OnlineComponentProvider"),await eT(r,r._uninitializedComponentsProvider._online)):(lt(Jr,"Using default OnlineComponentProvider"),await eT(r,new wm))),r._onlineComponents}function uC(r){return lg(r).then((t=>t.syncEngine))}function cC(r){return lg(r).then((t=>t.datastore))}async function Rm(r){const t=await lg(r),n=t.eventManager;return n.onListen=GI.bind(null,t.syncEngine),n.onUnlisten=YI.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=QI.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=$I.bind(null,t.syncEngine),n}function hC(r,t,n={}){const s=new Fi;return r.asyncQueue.enqueueAndForget((async()=>(function(u,f,g,y,p){const E=new D0({next:D=>{E.Nu(),f.enqueueAndForget((()=>v0(u,b))),D.fromCache&&y.source==="server"?p.reject(new at(X.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):p.resolve(D)},error:D=>p.reject(D)}),b=new T0(g,E,{includeMetadataChanges:!0,qa:!0});return _0(u,b)})(await Rm(r),r.asyncQueue,t,n,s))),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function N0(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
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
 */const nT=new Map;/**
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
 */const O0="firestore.googleapis.com",iT=!0;class rT{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new at(X.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=O0,this.ssl=iT}else this.host=t.host,this.ssl=t.ssl??iT;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=o0;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<BR)throw new at(X.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}R1("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=N0(t.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new at(X.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new at(X.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new at(X.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class wh{constructor(t,n,s,o){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rT({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new at(X.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new at(X.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rT(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new p1;switch(s.type){case"firstParty":return new T1(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new at(X.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const s=nT.get(n);s&&(lt("ComponentProvider","Removing Datastore"),nT.delete(n),s.terminate())})(this),Promise.resolve()}}function fC(r,t,n,s={}){r=Gi(r,wh);const o=lo(t),u=r._getSettings(),f={...u,emulatorOptions:r._getEmulatorOptions()},g=`${t}:${n}`;o&&(JT(`https://${g}`),WT("Firestore",!0)),u.host!==O0&&u.host!==g&&eo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y={...u,host:g,ssl:o,emulatorOptions:s};if(!Qr(y,f)&&(r._setSettings(y),s.mockUserToken)){let p,E;if(typeof s.mockUserToken=="string")p=s.mockUserToken,E=$e.MOCK_USER;else{p=jb(s.mockUserToken,r._app?.options.projectId);const b=s.mockUserToken.sub||s.mockUserToken.user_id;if(!b)throw new at(X.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new $e(b)}r._authCredentials=new y1(new pE(p,E))}}/**
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
 */class ns{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new ns(this.firestore,t,this._query)}}class ye{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Hr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ye(this.firestore,t,this._key)}toJSON(){return{type:ye._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,n,s){if(Kl(n,ye._jsonSchema))return new ye(t,s||null,new mt($t.fromString(n.referencePath)))}}ye._jsonSchemaVersion="firestore/documentReference/1.0",ye._jsonSchema={type:Se("string",ye._jsonSchemaVersion),referencePath:Se("string")};class Hr extends ns{constructor(t,n,s){super(t,n,qm(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ye(this.firestore,null,new mt(t))}withConverter(t){return new Hr(this.firestore,t,this._path)}}function sT(r,t,...n){if(r=De(r),yE("collection","path",t),r instanceof wh){const s=$t.fromString(t,...n);return yv(s),new Hr(r,null,s)}{if(!(r instanceof ye||r instanceof Hr))throw new at(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child($t.fromString(t,...n));return yv(s),new Hr(r.firestore,null,s)}}function Dc(r,t,...n){if(r=De(r),arguments.length===1&&(t=km.newId()),yE("doc","path",t),r instanceof wh){const s=$t.fromString(t,...n);return pv(s),new ye(r,null,new mt(s))}{if(!(r instanceof ye||r instanceof Hr))throw new at(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child($t.fromString(t,...n));return pv(s),new ye(r.firestore,r instanceof Hr?r.converter:null,new mt(s))}}/**
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
 */const aT="AsyncQueue";class oT{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Jm(this,"async_queue_retry"),this._c=()=>{const s=Zd();s&&lt(aT,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=t;const n=Zd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const n=Zd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new Fi;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!fo(t))throw t;lt(aT,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const n=this.ac.then((()=>(this.rc=!0,t().catch((s=>{throw this.nc=s,this.rc=!1,Ki("INTERNAL UNHANDLED ERROR: ",lT(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=n,n}enqueueAfterDelay(t,n,s){this.uc(),this.oc.indexOf(t)>-1&&(n=0);const o=ig.createAndSchedule(this,t,n,s,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&gt(47125,{Pc:lT(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const n of this.tc)if(n.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((n,s)=>n.targetTimeMs-s.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const n=this.tc.indexOf(t);this.tc.splice(n,1)}}function lT(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}/**
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
 */function uT(r){return(function(n,s){if(typeof n!="object"||n===null)return!1;const o=n;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1})(r,["next","error","complete"])}class oo extends wh{constructor(t,n,s,o){super(t,n,s,o),this.type="firestore",this._queue=new oT,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new oT(t),this._firestoreClient=void 0,await t}}}function dC(r,t){const n=typeof r=="object"?r:xm(),s=typeof r=="string"?r:Fc,o=Zs(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=Lb("firestore");u&&fC(o,...u)}return o}function Rh(r){if(r._terminated)throw new at(X.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||mC(r),r._firestoreClient}function mC(r){const t=r._freezeSettings(),n=(function(o,u,f,g){return new U1(o,u,f,g.host,g.ssl,g.experimentalForceLongPolling,g.experimentalAutoDetectLongPolling,N0(g.experimentalLongPollingOptions),g.useFetchStreams,g.isUsingEmulator)})(r._databaseId,r._app?.options.appId||"",r._persistenceKey,t);r._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(r._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),r._firestoreClient=new oC(r._authCredentials,r._appCheckCredentials,r._queue,n,r._componentsProvider&&(function(o){const u=o?._online.build();return{_offline:o?._offline.build(u),_online:u}})(r._componentsProvider))}/**
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
 */class vn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new vn(He.fromBase64String(t))}catch(n){throw new at(X.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new vn(He.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:vn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Kl(t,vn._jsonSchema))return vn.fromBase64String(t.bytes)}}vn._jsonSchemaVersion="firestore/bytes/1.0",vn._jsonSchema={type:Se("string",vn._jsonSchemaVersion),bytes:Se("string")};/**
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
 */class Ih{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new at(X.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qe(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Ch{constructor(t){this._methodName=t}}/**
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
 */class mi{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new at(X.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new at(X.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return Vt(this._lat,t._lat)||Vt(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:mi._jsonSchemaVersion}}static fromJSON(t){if(Kl(t,mi._jsonSchema))return new mi(t.latitude,t.longitude)}}mi._jsonSchemaVersion="firestore/geoPoint/1.0",mi._jsonSchema={type:Se("string",mi._jsonSchemaVersion),latitude:Se("number"),longitude:Se("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class gi{constructor(t){this._values=(t||[]).map((n=>n))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,t._values)}toJSON(){return{type:gi._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Kl(t,gi._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((n=>typeof n=="number")))return new gi(t.vectorValues);throw new at(X.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}gi._jsonSchemaVersion="firestore/vectorValue/1.0",gi._jsonSchema={type:Se("string",gi._jsonSchemaVersion),vectorValues:Se("object")};/**
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
 */const gC=/^__.*__$/;class pC{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new es(t,this.data,this.fieldMask,n,this.fieldTransforms):new Xl(t,this.data,n,this.fieldTransforms)}}class M0{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return new es(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function V0(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw gt(40011,{Ac:r})}}class ug{constructor(t,n,s,o,u,f){this.settings=t,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new ug({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){const n=this.path?.child(t),s=this.Vc({path:n,fc:!1});return s.gc(t),s}yc(t){const n=this.path?.child(t),s=this.Vc({path:n,fc:!1});return s.Rc(),s}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return eh(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find((n=>t.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>t.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(V0(this.Ac)&&gC.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class yC{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=s||Ah(t)}Cc(t,n,s,o=!1){return new ug({Ac:t,methodName:n,Dc:s,path:qe.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function cg(r){const t=r._freezeSettings(),n=Ah(r._databaseId);return new yC(r._databaseId,!!t.ignoreUndefinedProperties,n)}function x0(r,t,n,s,o,u={}){const f=r.Cc(u.merge||u.mergeFields?2:0,t,n,o);fg("Data must be an object, but it was:",f,s);const g=P0(s,f);let y,p;if(u.merge)y=new Tn(f.fieldMask),p=f.fieldTransforms;else if(u.mergeFields){const E=[];for(const b of u.mergeFields){const D=Im(t,b,n);if(!f.contains(D))throw new at(X.INVALID_ARGUMENT,`Field '${D}' is specified in your field mask but missing from your input data.`);U0(E,D)||E.push(D)}y=new Tn(E),p=f.fieldTransforms.filter((b=>y.covers(b.field)))}else y=null,p=f.fieldTransforms;return new pC(new nn(g),y,p)}class Dh extends Ch{_toFieldTransform(t){if(t.Ac!==2)throw t.Ac===1?t.Sc(`${this._methodName}() can only appear at the top level of your update data`):t.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Dh}}class hg extends Ch{_toFieldTransform(t){return new uR(t.path,new ql)}isEqual(t){return t instanceof hg}}function _C(r,t,n,s){const o=r.Cc(1,t,n);fg("Data must be an object, but it was:",o,s);const u=[],f=nn.empty();ts(s,((y,p)=>{const E=dg(t,y,n);p=De(p);const b=o.yc(E);if(p instanceof Dh)u.push(E);else{const D=tu(p,b);D!=null&&(u.push(E),f.set(E,D))}}));const g=new Tn(u);return new M0(f,g,o.fieldTransforms)}function vC(r,t,n,s,o,u){const f=r.Cc(1,t,n),g=[Im(t,s,n)],y=[o];if(u.length%2!=0)throw new at(X.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let D=0;D<u.length;D+=2)g.push(Im(t,u[D])),y.push(u[D+1]);const p=[],E=nn.empty();for(let D=g.length-1;D>=0;--D)if(!U0(p,g[D])){const q=g[D];let H=y[D];H=De(H);const $=f.yc(q);if(H instanceof Dh)p.push(q);else{const F=tu(H,$);F!=null&&(p.push(q),E.set(q,F))}}const b=new Tn(p);return new M0(E,b,f.fieldTransforms)}function TC(r,t,n,s=!1){return tu(n,r.Cc(s?4:3,t))}function tu(r,t){if(k0(r=De(r)))return fg("Unsupported field value:",t,r),P0(r,t);if(r instanceof Ch)return(function(s,o){if(!V0(o.Ac))throw o.Sc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return(function(s,o){const u=[];let f=0;for(const g of s){let y=tu(g,o.wc(f));y==null&&(y={nullValue:"NULL_VALUE"}),u.push(y),f++}return{arrayValue:{values:u}}})(r,t)}return(function(s,o){if((s=De(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return aR(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=ee.fromDate(s);return{timestampValue:Xc(o.serializer,u)}}if(s instanceof ee){const u=new ee(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Xc(o.serializer,u)}}if(s instanceof mi)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof vn)return{bytesValue:WE(o.serializer,s._byteString)};if(s instanceof ye){const u=o.databaseId,f=s.firestore._databaseId;if(!f.isEqual(u))throw o.Sc(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Km(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof gi)return(function(f,g){return{mapValue:{fields:{[RE]:{stringValue:IE},[Gc]:{arrayValue:{values:f.toArray().map((p=>{if(typeof p!="number")throw g.Sc("VectorValues must only contain numeric values.");return Hm(g.serializer,p)}))}}}}}})(s,o);throw o.Sc(`Unsupported field value: ${mh(s)}`)})(r,t)}function P0(r,t){const n={};return TE(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ts(r,((s,o)=>{const u=tu(o,t.mc(s));u!=null&&(n[s]=u)})),{mapValue:{fields:n}}}function k0(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof ee||r instanceof mi||r instanceof vn||r instanceof ye||r instanceof Ch||r instanceof gi)}function fg(r,t,n){if(!k0(n)||!_E(n)){const s=mh(n);throw s==="an object"?t.Sc(r+" a custom object"):t.Sc(r+" "+s)}}function Im(r,t,n){if((t=De(t))instanceof Ih)return t._internalPath;if(typeof t=="string")return dg(r,t);throw eh("Field path arguments must be of type string or ",r,!1,void 0,n)}const EC=new RegExp("[~\\*/\\[\\]]");function dg(r,t,n){if(t.search(EC)>=0)throw eh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new Ih(...t.split("."))._internalPath}catch{throw eh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function eh(r,t,n,s,o){const u=s&&!s.isEmpty(),f=o!==void 0;let g=`Function ${t}() called with invalid data`;n&&(g+=" (via `toFirestore()`)"),g+=". ";let y="";return(u||f)&&(y+=" (found",u&&(y+=` in field ${s}`),f&&(y+=` in document ${o}`),y+=")"),new at(X.INVALID_ARGUMENT,g+r+y)}function U0(r,t){return r.some((n=>n.isEqual(t)))}/**
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
 */class nh{constructor(t,n,s,o,u){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new ye(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new AC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(mg("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class AC extends nh{data(){return super.data()}}function mg(r,t){return typeof t=="string"?dg(r,t):t instanceof Ih?t._internalPath:t._delegate._internalPath}/**
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
 */function L0(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new at(X.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gg{}class z0 extends gg{}function cT(r,t,...n){let s=[];t instanceof gg&&s.push(t),s=s.concat(n),(function(u){const f=u.filter((y=>y instanceof pg)).length,g=u.filter((y=>y instanceof Nh)).length;if(f>1||f>0&&g>0)throw new at(X.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)r=o._apply(r);return r}class Nh extends z0{constructor(t,n,s){super(),this._field=t,this._op=n,this._value=s,this.type="where"}static _create(t,n,s){return new Nh(t,n,s)}_apply(t){const n=this._parse(t);return j0(t._query,n),new ns(t.firestore,t.converter,ym(t._query,n))}_parse(t){const n=cg(t.firestore);return(function(u,f,g,y,p,E,b){let D;if(p.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new at(X.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){mT(b,E);const H=[];for(const $ of b)H.push(dT(y,u,$));D={arrayValue:{values:H}}}else D=dT(y,u,b)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||mT(b,E),D=TC(g,f,b,E==="in"||E==="not-in");return Ae.create(p,E,D)})(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}function hT(r,t,n){const s=t,o=mg("where",r);return Nh._create(o,s,n)}class pg extends gg{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new pg(t,n)}_parse(t){const n=this._queryConstraints.map((s=>s._parse(t))).filter((s=>s.getFilters().length>0));return n.length===1?n[0]:Xn.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:((function(o,u){let f=o;const g=u.getFlattenedFilters();for(const y of g)j0(f,y),f=ym(f,y)})(t._query,n),new ns(t.firestore,t.converter,ym(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class yg extends z0{constructor(t,n,s){super(),this.type=t,this._limit=n,this._limitType=s}static _create(t,n,s){return new yg(t,n,s)}_apply(t){return new ns(t.firestore,t.converter,Yc(t._query,this._limit,this._limitType))}}function fT(r){return yg._create("limit",r,"F")}function dT(r,t,n){if(typeof(n=De(n))=="string"){if(n==="")throw new at(X.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!PE(t)&&n.indexOf("/")!==-1)throw new at(X.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=t.path.child($t.fromString(n));if(!mt.isDocumentKey(s))throw new at(X.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return wv(r,new mt(s))}if(n instanceof ye)return wv(r,n._key);throw new at(X.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${mh(n)}.`)}function mT(r,t){if(!Array.isArray(r)||r.length===0)throw new at(X.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function j0(r,t){const n=(function(o,u){for(const f of o)for(const g of f.getFlattenedFilters())if(u.indexOf(g.op)>=0)return g.op;return null})(r.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(n!==null)throw n===t.op?new at(X.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new at(X.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class B0{convertValue(t,n="none"){switch(Xr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return pe(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes($r(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw gt(62114,{value:t})}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const s={};return ts(t,((o,u)=>{s[o]=this.convertValue(u,n)})),s}convertVectorValue(t){const n=t.fields?.[Gc].arrayValue?.values?.map((s=>pe(s.doubleValue)));return new gi(n)}convertGeoPoint(t){return new mi(pe(t.latitude),pe(t.longitude))}convertArray(t,n){return(t.values||[]).map((s=>this.convertValue(s,n)))}convertServerTimestamp(t,n){switch(n){case"previous":const s=ph(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(zl(t));default:return null}}convertTimestamp(t){const n=Yr(t);return new ee(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=$t.fromString(t);Lt(a0(s),9688,{name:t});const o=new jl(s.get(1),s.get(3)),u=new mt(s.popFirst(5));return o.isEqual(n)||Ki(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}/**
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
 */function q0(r,t,n){let s;return s=r?n&&(n.merge||n.mergeFields)?r.toFirestore(t,n):r.toFirestore(t):t,s}class SC extends B0{constructor(t){super(),this.firestore=t}convertBytes(t){return new vn(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new ye(this.firestore,null,n)}}class $a{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Fr extends nh{constructor(t,n,s,o,u,f){super(t,n,s,o,f),this._firestore=t,this._firestoreImpl=t,this.metadata=u}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new kc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(mg("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new at(X.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,n={};return n.type=Fr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Fr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Fr._jsonSchema={type:Se("string",Fr._jsonSchemaVersion),bundleSource:Se("string","DocumentSnapshot"),bundleName:Se("string"),bundle:Se("string")};class kc extends Fr{data(t={}){return super.data(t)}}class Fs{constructor(t,n,s,o){this._firestore=t,this._userDataWriter=n,this._snapshot=o,this.metadata=new $a(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const t=[];return this.forEach((n=>t.push(n))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach((s=>{t.call(n,new kc(this._firestore,this._userDataWriter,s.key,s,new $a(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new at(X.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map((g=>{const y=new kc(o._firestore,o._userDataWriter,g.doc.key,g.doc,new $a(o._snapshot.mutatedKeys.has(g.doc.key),o._snapshot.fromCache),o.query.converter);return g.doc,{type:"added",doc:y,oldIndex:-1,newIndex:f++}}))}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((g=>u||g.type!==3)).map((g=>{const y=new kc(o._firestore,o._userDataWriter,g.doc.key,g.doc,new $a(o._snapshot.mutatedKeys.has(g.doc.key),o._snapshot.fromCache),o.query.converter);let p=-1,E=-1;return g.type!==0&&(p=f.indexOf(g.doc.key),f=f.delete(g.doc.key)),g.type!==1&&(f=f.add(g.doc),E=f.indexOf(g.doc.key)),{type:bC(g.type),doc:y,oldIndex:p,newIndex:E}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new at(X.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Fs._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=km.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(n.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function bC(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return gt(61501,{type:r})}}Fs._jsonSchemaVersion="firestore/querySnapshot/1.0",Fs._jsonSchema={type:Se("string",Fs._jsonSchemaVersion),bundleSource:Se("string","QuerySnapshot"),bundleName:Se("string"),bundle:Se("string")};class Oh extends B0{constructor(t){super(),this.firestore=t}convertBytes(t){return new vn(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new ye(this.firestore,null,n)}}function gT(r){r=Gi(r,ns);const t=Gi(r.firestore,oo),n=Rh(t),s=new Oh(t);return L0(r._query),hC(n,r._query).then((o=>new Fs(t,s,r,o)))}function Wd(r,t,n){r=Gi(r,ye);const s=Gi(r.firestore,oo),o=q0(r.converter,t,n);return RC(s,[x0(cg(s),"setDoc",r._key,o,r.converter!==null,n).toMutation(r._key,un.none())])}function wC(r,...t){r=De(r);let n={includeMetadataChanges:!1,source:"default"},s=0;typeof t[s]!="object"||uT(t[s])||(n=t[s++]);const o={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(uT(t[s])){const y=t[s];t[s]=y.next?.bind(y),t[s+1]=y.error?.bind(y),t[s+2]=y.complete?.bind(y)}let u,f,g;if(r instanceof ye)f=Gi(r.firestore,oo),g=qm(r._key.path),u={next:y=>{t[s]&&t[s](IC(f,r,y))},error:t[s+1],complete:t[s+2]};else{const y=Gi(r,ns);f=Gi(y.firestore,oo),g=y._query;const p=new Oh(f);u={next:E=>{t[s]&&t[s](new Fs(f,p,y,E))},error:t[s+1],complete:t[s+2]},L0(r._query)}return(function(p,E,b,D){const q=new D0(D),H=new T0(E,q,b);return p.asyncQueue.enqueueAndForget((async()=>_0(await Rm(p),H))),()=>{q.Nu(),p.asyncQueue.enqueueAndForget((async()=>v0(await Rm(p),H)))}})(Rh(f),g,o,u)}function RC(r,t){return(function(s,o){const u=new Fi;return s.asyncQueue.enqueueAndForget((async()=>XI(await uC(s),o,u))),u.promise})(Rh(r),t)}function IC(r,t,n){const s=n.docs.get(t._key),o=new Oh(r);return new Fr(r,o,t._key,s,new $a(n.hasPendingWrites,n.fromCache),t.converter)}/**
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
 */const CC={maxAttempts:5};function Cl(r,t){if((r=De(r)).firestore!==t)throw new at(X.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
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
 */class DC{constructor(t,n){this._firestore=t,this._transaction=n,this._dataReader=cg(t)}get(t){const n=Cl(t,this._firestore),s=new SC(this._firestore);return this._transaction.lookup([n._key]).then((o=>{if(!o||o.length!==1)return gt(24041);const u=o[0];if(u.isFoundDocument())return new nh(this._firestore,s,u.key,u,n.converter);if(u.isNoDocument())return new nh(this._firestore,s,n._key,null,n.converter);throw gt(18433,{doc:u})}))}set(t,n,s){const o=Cl(t,this._firestore),u=q0(o.converter,n,s),f=x0(this._dataReader,"Transaction.set",o._key,u,o.converter!==null,s);return this._transaction.set(o._key,f),this}update(t,n,s,...o){const u=Cl(t,this._firestore);let f;return f=typeof(n=De(n))=="string"||n instanceof Ih?vC(this._dataReader,"Transaction.update",u._key,n,s,o):_C(this._dataReader,"Transaction.update",u._key,n),this._transaction.update(u._key,f),this}delete(t){const n=Cl(t,this._firestore);return this._transaction.delete(n._key),this}}/**
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
 */class NC extends DC{constructor(t,n){super(t,n),this._firestore=t}get(t){const n=Cl(t,this._firestore),s=new Oh(this._firestore);return super.get(t).then((o=>new Fr(this._firestore,s,n._key,o._document,new $a(!1,!1),n.converter)))}}function tm(r,t,n){r=Gi(r,oo);const s={...CC,...n};return(function(u){if(u.maxAttempts<1)throw new at(X.INVALID_ARGUMENT,"Max attempts must be at least 1")})(s),(function(u,f,g){const y=new Fi;return u.asyncQueue.enqueueAndForget((async()=>{const p=await cC(u);new aC(u.asyncQueue,p,g,f,y).ju()})),y.promise})(Rh(r),(o=>t(new NC(r,o))),s)}function bl(){return new hg("serverTimestamp")}(function(t,n=!0){(function(o){co=o})(uo),_i(new $n("firestore",((s,{instanceIdentifier:o,options:u})=>{const f=s.getProvider("app").getImmediate(),g=new oo(new _1(s.getProvider("auth-internal")),new E1(f,s.getProvider("app-check-internal")),(function(p,E){if(!Object.prototype.hasOwnProperty.apply(p.options,["projectId"]))throw new at(X.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new jl(p.options.projectId,E)})(f,o),f);return u={useFetchStreams:n,...u},g._setSettings(u),g}),"PUBLIC").setMultipleInstances(!0)),Pn(fv,dv,t),Pn(fv,dv,"esm2020")})();const H0="@firebase/installations",_g="0.6.19";/**
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
 */const F0=1e4,G0=`w:${_g}`,Q0="FIS_v2",OC="https://firebaseinstallations.googleapis.com/v1",MC=3600*1e3,VC="installations",xC="Installations";/**
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
 */const PC={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ks=new Xs(VC,xC,PC);function K0(r){return r instanceof Zn&&r.code.includes("request-failed")}/**
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
 */function Y0({projectId:r}){return`${OC}/projects/${r}/installations`}function $0(r){return{token:r.token,requestStatus:2,expiresIn:UC(r.expiresIn),creationTime:Date.now()}}async function X0(r,t){const s=(await t.json()).error;return Ks.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Z0({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function kC(r,{refreshToken:t}){const n=Z0(r);return n.append("Authorization",LC(t)),n}async function J0(r){const t=await r();return t.status>=500&&t.status<600?r():t}function UC(r){return Number(r.replace("s","000"))}function LC(r){return`${Q0} ${r}`}/**
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
 */async function zC({appConfig:r,heartbeatServiceProvider:t},{fid:n}){const s=Y0(r),o=Z0(r),u=t.getImmediate({optional:!0});if(u){const p=await u.getHeartbeatsHeader();p&&o.append("x-firebase-client",p)}const f={fid:n,authVersion:Q0,appId:r.appId,sdkVersion:G0},g={method:"POST",headers:o,body:JSON.stringify(f)},y=await J0(()=>fetch(s,g));if(y.ok){const p=await y.json();return{fid:p.fid||n,registrationStatus:2,refreshToken:p.refreshToken,authToken:$0(p.authToken)}}else throw await X0("Create Installation",y)}/**
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
 */function W0(r){return new Promise(t=>{setTimeout(t,r)})}/**
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
 */function jC(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const BC=/^[cdef][\w-]{21}$/,Cm="";function qC(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=HC(r);return BC.test(n)?n:Cm}catch{return Cm}}function HC(r){return jC(r).substr(0,22)}/**
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
 */function Mh(r){return`${r.appName}!${r.appId}`}/**
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
 */const tA=new Map;function eA(r,t){const n=Mh(r);nA(n,t),FC(n,t)}function nA(r,t){const n=tA.get(r);if(n)for(const s of n)s(t)}function FC(r,t){const n=GC();n&&n.postMessage({key:r,fid:t}),QC()}let Hs=null;function GC(){return!Hs&&"BroadcastChannel"in self&&(Hs=new BroadcastChannel("[Firebase] FID Change"),Hs.onmessage=r=>{nA(r.data.key,r.data.fid)}),Hs}function QC(){tA.size===0&&Hs&&(Hs.close(),Hs=null)}/**
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
 */const KC="firebase-installations-database",YC=1,Ys="firebase-installations-store";let em=null;function vg(){return em||(em=sE(KC,YC,{upgrade:(r,t)=>{switch(t){case 0:r.createObjectStore(Ys)}}})),em}async function ih(r,t){const n=Mh(r),o=(await vg()).transaction(Ys,"readwrite"),u=o.objectStore(Ys),f=await u.get(n);return await u.put(t,n),await o.done,(!f||f.fid!==t.fid)&&eA(r,t.fid),t}async function iA(r){const t=Mh(r),s=(await vg()).transaction(Ys,"readwrite");await s.objectStore(Ys).delete(t),await s.done}async function Vh(r,t){const n=Mh(r),o=(await vg()).transaction(Ys,"readwrite"),u=o.objectStore(Ys),f=await u.get(n),g=t(f);return g===void 0?await u.delete(n):await u.put(g,n),await o.done,g&&(!f||f.fid!==g.fid)&&eA(r,g.fid),g}/**
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
 */async function Tg(r){let t;const n=await Vh(r.appConfig,s=>{const o=$C(s),u=XC(r,o);return t=u.registrationPromise,u.installationEntry});return n.fid===Cm?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function $C(r){const t=r||{fid:qC(),registrationStatus:0};return rA(t)}function XC(r,t){if(t.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Ks.create("app-offline"));return{installationEntry:t,registrationPromise:o}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=ZC(r,n);return{installationEntry:n,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:JC(r)}:{installationEntry:t}}async function ZC(r,t){try{const n=await zC(r,t);return ih(r.appConfig,n)}catch(n){throw K0(n)&&n.customData.serverCode===409?await iA(r.appConfig):await ih(r.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function JC(r){let t=await pT(r.appConfig);for(;t.registrationStatus===1;)await W0(100),t=await pT(r.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Tg(r);return s||n}return t}function pT(r){return Vh(r,t=>{if(!t)throw Ks.create("installation-not-found");return rA(t)})}function rA(r){return WC(r)?{fid:r.fid,registrationStatus:0}:r}function WC(r){return r.registrationStatus===1&&r.registrationTime+F0<Date.now()}/**
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
 */async function t2({appConfig:r,heartbeatServiceProvider:t},n){const s=e2(r,n),o=kC(r,n),u=t.getImmediate({optional:!0});if(u){const p=await u.getHeartbeatsHeader();p&&o.append("x-firebase-client",p)}const f={installation:{sdkVersion:G0,appId:r.appId}},g={method:"POST",headers:o,body:JSON.stringify(f)},y=await J0(()=>fetch(s,g));if(y.ok){const p=await y.json();return $0(p)}else throw await X0("Generate Auth Token",y)}function e2(r,{fid:t}){return`${Y0(r)}/${t}/authTokens:generate`}/**
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
 */async function Eg(r,t=!1){let n;const s=await Vh(r.appConfig,u=>{if(!sA(u))throw Ks.create("not-registered");const f=u.authToken;if(!t&&r2(f))return u;if(f.requestStatus===1)return n=n2(r,t),u;{if(!navigator.onLine)throw Ks.create("app-offline");const g=a2(u);return n=i2(r,g),g}});return n?await n:s.authToken}async function n2(r,t){let n=await yT(r.appConfig);for(;n.authToken.requestStatus===1;)await W0(100),n=await yT(r.appConfig);const s=n.authToken;return s.requestStatus===0?Eg(r,t):s}function yT(r){return Vh(r,t=>{if(!sA(t))throw Ks.create("not-registered");const n=t.authToken;return o2(n)?{...t,authToken:{requestStatus:0}}:t})}async function i2(r,t){try{const n=await t2(r,t),s={...t,authToken:n};return await ih(r.appConfig,s),n}catch(n){if(K0(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await iA(r.appConfig);else{const s={...t,authToken:{requestStatus:0}};await ih(r.appConfig,s)}throw n}}function sA(r){return r!==void 0&&r.registrationStatus===2}function r2(r){return r.requestStatus===2&&!s2(r)}function s2(r){const t=Date.now();return t<r.creationTime||r.creationTime+r.expiresIn<t+MC}function a2(r){const t={requestStatus:1,requestTime:Date.now()};return{...r,authToken:t}}function o2(r){return r.requestStatus===1&&r.requestTime+F0<Date.now()}/**
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
 */async function l2(r){const t=r,{installationEntry:n,registrationPromise:s}=await Tg(t);return s?s.catch(console.error):Eg(t).catch(console.error),n.fid}/**
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
 */async function u2(r,t=!1){const n=r;return await c2(n),(await Eg(n,t)).token}async function c2(r){const{registrationPromise:t}=await Tg(r);t&&await t}/**
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
 */function h2(r){if(!r||!r.options)throw nm("App Configuration");if(!r.name)throw nm("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!r.options[n])throw nm(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function nm(r){return Ks.create("missing-app-config-values",{valueName:r})}/**
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
 */const aA="installations",f2="installations-internal",d2=r=>{const t=r.getProvider("app").getImmediate(),n=h2(t),s=Zs(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},m2=r=>{const t=r.getProvider("app").getImmediate(),n=Zs(t,aA).getImmediate();return{getId:()=>l2(n),getToken:o=>u2(n,o)}};function g2(){_i(new $n(aA,d2,"PUBLIC")),_i(new $n(f2,m2,"PRIVATE"))}g2();Pn(H0,_g);Pn(H0,_g,"esm2020");/**
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
 */const rh="analytics",p2="firebase_id",y2="origin",_2=60*1e3,v2="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ag="https://www.googletagmanager.com/gtag/js";/**
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
 */const cn=new dh("@firebase/analytics");/**
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
 */const T2={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},An=new Xs("analytics","Analytics",T2);/**
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
 */function E2(r){if(!r.startsWith(Ag)){const t=An.create("invalid-gtag-resource",{gtagURL:r});return cn.warn(t.message),""}return r}function oA(r){return Promise.all(r.map(t=>t.catch(n=>n)))}function A2(r,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,t)),n}function S2(r,t){const n=A2("firebase-js-sdk-policy",{createScriptURL:E2}),s=document.createElement("script"),o=`${Ag}?l=${r}&id=${t}`;s.src=n?n?.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function b2(r){let t=[];return Array.isArray(window[r])?t=window[r]:window[r]=t,t}async function w2(r,t,n,s,o,u){const f=s[o];try{if(f)await t[f];else{const y=(await oA(n)).find(p=>p.measurementId===o);y&&await t[y.appId]}}catch(g){cn.error(g)}r("config",o,u)}async function R2(r,t,n,s,o){try{let u=[];if(o&&o.send_to){let f=o.send_to;Array.isArray(f)||(f=[f]);const g=await oA(n);for(const y of f){const p=g.find(b=>b.measurementId===y),E=p&&t[p.appId];if(E)u.push(E);else{u=[];break}}}u.length===0&&(u=Object.values(t)),await Promise.all(u),r("event",s,o||{})}catch(u){cn.error(u)}}function I2(r,t,n,s){async function o(u,...f){try{if(u==="event"){const[g,y]=f;await R2(r,t,n,g,y)}else if(u==="config"){const[g,y]=f;await w2(r,t,n,s,g,y)}else if(u==="consent"){const[g,y]=f;r("consent",g,y)}else if(u==="get"){const[g,y,p]=f;r("get",g,y,p)}else if(u==="set"){const[g]=f;r("set",g)}else r(u,...f)}catch(g){cn.error(g)}}return o}function C2(r,t,n,s,o){let u=function(...f){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(u=window[o]),window[o]=I2(u,r,t,n),{gtagCore:u,wrappedGtag:window[o]}}function D2(r){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Ag)&&n.src.includes(r))return n;return null}/**
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
 */const N2=30,O2=1e3;class M2{constructor(t={},n=O2){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const lA=new M2;function V2(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function x2(r){const{appId:t,apiKey:n}=r,s={method:"GET",headers:V2(n)},o=v2.replace("{app-id}",t),u=await fetch(o,s);if(u.status!==200&&u.status!==304){let f="";try{const g=await u.json();g.error?.message&&(f=g.error.message)}catch{}throw An.create("config-fetch-failed",{httpStatus:u.status,responseMessage:f})}return u.json()}async function P2(r,t=lA,n){const{appId:s,apiKey:o,measurementId:u}=r.options;if(!s)throw An.create("no-app-id");if(!o){if(u)return{measurementId:u,appId:s};throw An.create("no-api-key")}const f=t.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},g=new L2;return setTimeout(async()=>{g.abort()},_2),uA({appId:s,apiKey:o,measurementId:u},f,g,t)}async function uA(r,{throttleEndTimeMillis:t,backoffCount:n},s,o=lA){const{appId:u,measurementId:f}=r;try{await k2(s,t)}catch(g){if(f)return cn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${g?.message}]`),{appId:u,measurementId:f};throw g}try{const g=await x2(r);return o.deleteThrottleMetadata(u),g}catch(g){const y=g;if(!U2(y)){if(o.deleteThrottleMetadata(u),f)return cn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${y?.message}]`),{appId:u,measurementId:f};throw g}const p=Number(y?.customData?.httpStatus)===503?nv(n,o.intervalMillis,N2):nv(n,o.intervalMillis),E={throttleEndTimeMillis:Date.now()+p,backoffCount:n+1};return o.setThrottleMetadata(u,E),cn.debug(`Calling attemptFetch again in ${p} millis`),uA(r,E,s,o)}}function k2(r,t){return new Promise((n,s)=>{const o=Math.max(t-Date.now(),0),u=setTimeout(n,o);r.addEventListener(()=>{clearTimeout(u),s(An.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function U2(r){if(!(r instanceof Zn)||!r.customData)return!1;const t=Number(r.customData.httpStatus);return t===429||t===500||t===503||t===504}class L2{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function z2(r,t,n,s,o){if(o&&o.global){r("event",n,s);return}else{const u=await t,f={...s,send_to:u};r("event",n,f)}}/**
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
 */async function j2(){if(eE())try{await nE()}catch(r){return cn.warn(An.create("indexeddb-unavailable",{errorInfo:r?.toString()}).message),!1}else return cn.warn(An.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function B2(r,t,n,s,o,u,f){const g=P2(r);g.then(D=>{n[D.measurementId]=D.appId,r.options.measurementId&&D.measurementId!==r.options.measurementId&&cn.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${D.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(D=>cn.error(D)),t.push(g);const y=j2().then(D=>{if(D)return s.getId()}),[p,E]=await Promise.all([g,y]);D2(u)||S2(u,p.measurementId),o("js",new Date);const b=f?.config??{};return b[y2]="firebase",b.update=!0,E!=null&&(b[p2]=E),o("config",p.measurementId,b),p.measurementId}/**
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
 */class q2{constructor(t){this.app=t}_delete(){return delete Pl[this.app.options.appId],Promise.resolve()}}let Pl={},_T=[];const vT={};let im="dataLayer",H2="gtag",TT,cA,ET=!1;function F2(){const r=[];if(tE()&&r.push("This is a browser extension environment."),$b()||r.push("Cookies are not available."),r.length>0){const t=r.map((s,o)=>`(${o+1}) ${s}`).join(" "),n=An.create("invalid-analytics-context",{errorInfo:t});cn.warn(n.message)}}function G2(r,t,n){F2();const s=r.options.appId;if(!s)throw An.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)cn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw An.create("no-api-key");if(Pl[s]!=null)throw An.create("already-exists",{id:s});if(!ET){b2(im);const{wrappedGtag:u,gtagCore:f}=C2(Pl,_T,vT,im,H2);cA=u,TT=f,ET=!0}return Pl[s]=B2(r,_T,vT,t,TT,im,n),new q2(r)}function Q2(r=xm()){r=De(r);const t=Zs(r,rh);return t.isInitialized()?t.getImmediate():K2(r)}function K2(r,t={}){const n=Zs(r,rh);if(n.isInitialized()){const o=n.getImmediate();if(Qr(t,n.getOptions()))return o;throw An.create("already-initialized")}return n.initialize({options:t})}function Y2(r,t,n,s){r=De(r),z2(cA,Pl[r.app.options.appId],t,n,s).catch(o=>cn.error(o))}const AT="@firebase/analytics",ST="0.10.18";function $2(){_i(new $n(rh,(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),o=t.getProvider("installations-internal").getImmediate();return G2(s,o,n)},"PUBLIC")),_i(new $n("analytics-internal",r,"PRIVATE")),Pn(AT,ST),Pn(AT,ST,"esm2020");function r(t){try{const n=t.getProvider(rh).getImmediate();return{logEvent:(s,o,u)=>Y2(n,s,o,u)}}catch(n){throw An.create("interop-component-reg-failed",{reason:n})}}}$2();function hA(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const X2=hA,fA=new Xs("auth","Firebase",hA());/**
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
 */const sh=new dh("@firebase/auth");function Z2(r,...t){sh.logLevel<=Mt.WARN&&sh.warn(`Auth (${uo}): ${r}`,...t)}function Uc(r,...t){sh.logLevel<=Mt.ERROR&&sh.error(`Auth (${uo}): ${r}`,...t)}/**
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
 */function $i(r,...t){throw Sg(r,...t)}function pi(r,...t){return Sg(r,...t)}function dA(r,t,n){const s={...X2(),[t]:n};return new Xs("auth","Firebase",s).create(t,{appName:r.name})}function Gr(r){return dA(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Sg(r,...t){if(typeof r!="string"){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return fA.create(r,...t)}function Et(r,t,...n){if(!r)throw Sg(t,...n)}function qi(r){const t="INTERNAL ASSERTION FAILED: "+r;throw Uc(t),new Error(t)}function Xi(r,t){r||qi(t)}/**
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
 */function Dm(){return typeof self<"u"&&self.location?.href||""}function J2(){return bT()==="http:"||bT()==="https:"}function bT(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function W2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(J2()||tE()||"connection"in navigator)?navigator.onLine:!0}function tD(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class eu{constructor(t,n){this.shortDelay=t,this.longDelay=n,Xi(n>t,"Short delay should be less than long delay!"),this.isMobile=Hb()||Qb()}get(){return W2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function bg(r,t){Xi(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class mA{static initialize(t,n,s){this.fetchImpl=t,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;qi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;qi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;qi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const eD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const nD=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],iD=new eu(3e4,6e4);function xh(r,t){return r.tenantId&&!t.tenantId?{...t,tenantId:r.tenantId}:t}async function go(r,t,n,s,o={}){return gA(r,o,async()=>{let u={},f={};s&&(t==="GET"?f=s:u={body:JSON.stringify(s)});const g=Ql({key:r.config.apiKey,...f}).slice(1),y=await r._getAdditionalHeaders();y["Content-Type"]="application/json",r.languageCode&&(y["X-Firebase-Locale"]=r.languageCode);const p={method:t,headers:y,...u};return Gb()||(p.referrerPolicy="no-referrer"),r.emulatorConfig&&lo(r.emulatorConfig.host)&&(p.credentials="include"),mA.fetch()(await yA(r,r.config.apiHost,n,g),p)})}async function gA(r,t,n){r._canInitEmulator=!1;const s={...eD,...t};try{const o=new rD(r),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw Nc(r,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const g=u.ok?f.errorMessage:f.error.message,[y,p]=g.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw Nc(r,"credential-already-in-use",f);if(y==="EMAIL_EXISTS")throw Nc(r,"email-already-in-use",f);if(y==="USER_DISABLED")throw Nc(r,"user-disabled",f);const E=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(p)throw dA(r,E,p);$i(r,E)}}catch(o){if(o instanceof Zn)throw o;$i(r,"network-request-failed",{message:String(o)})}}async function pA(r,t,n,s,o={}){const u=await go(r,t,n,s,o);return"mfaPendingCredential"in u&&$i(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function yA(r,t,n,s){const o=`${t}${n}?${s}`,u=r,f=u.config.emulator?bg(r.config,o):`${r.config.apiScheme}://${o}`;return nD.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(f).toString():f}class rD{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(pi(this.auth,"network-request-failed")),iD.get())})}}function Nc(r,t,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=pi(r,t,s);return o.customData._tokenResponse=n,o}/**
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
 */async function sD(r,t){return go(r,"POST","/v1/accounts:delete",t)}async function ah(r,t){return go(r,"POST","/v1/accounts:lookup",t)}/**
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
 */function kl(r){if(r)try{const t=new Date(Number(r));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function aD(r,t=!1){const n=De(r),s=await n.getIdToken(t),o=wg(s);Et(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,f=u?.sign_in_provider;return{claims:o,token:s,authTime:kl(rm(o.auth_time)),issuedAtTime:kl(rm(o.iat)),expirationTime:kl(rm(o.exp)),signInProvider:f||null,signInSecondFactor:u?.sign_in_second_factor||null}}function rm(r){return Number(r)*1e3}function wg(r){const[t,n,s]=r.split(".");if(t===void 0||n===void 0||s===void 0)return Uc("JWT malformed, contained fewer than 3 sections"),null;try{const o=YT(n);return o?JSON.parse(o):(Uc("Failed to decode base64 JWT payload"),null)}catch(o){return Uc("Caught error parsing JWT payload as JSON",o?.toString()),null}}function wT(r){const t=wg(r);return Et(t,"internal-error"),Et(typeof t.exp<"u","internal-error"),Et(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Gl(r,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof Zn&&oD(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function oD({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class lD{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Nm{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=kl(this.lastLoginAt),this.creationTime=kl(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function oh(r){const t=r.auth,n=await r.getIdToken(),s=await Gl(r,ah(t,{idToken:n}));Et(s?.users.length,t,"internal-error");const o=s.users[0];r._notifyReloadListener(o);const u=o.providerUserInfo?.length?_A(o.providerUserInfo):[],f=cD(r.providerData,u),g=r.isAnonymous,y=!(r.email&&o.passwordHash)&&!f?.length,p=g?y:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:f,metadata:new Nm(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(r,E)}async function uD(r){const t=De(r);await oh(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function cD(r,t){return[...r.filter(s=>!t.some(o=>o.providerId===s.providerId)),...t]}function _A(r){return r.map(({providerId:t,...n})=>({providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function hD(r,t){const n=await gA(r,{},async()=>{const s=Ql({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,f=await yA(r,o,"/v1/token",`key=${u}`),g=await r._getAdditionalHeaders();g["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:g,body:s};return r.emulatorConfig&&lo(r.emulatorConfig.host)&&(y.credentials="include"),mA.fetch()(f,y)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function fD(r,t){return go(r,"POST","/v2/accounts:revokeToken",xh(r,t))}/**
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
 */class Ja{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Et(t.idToken,"internal-error"),Et(typeof t.idToken<"u","internal-error"),Et(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):wT(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){Et(t.length!==0,"internal-error");const n=wT(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Et(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:s,refreshToken:o,expiresIn:u}=await hD(t,n);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(t,n,s){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,n){const{refreshToken:s,accessToken:o,expirationTime:u}=n,f=new Ja;return s&&(Et(typeof s=="string","internal-error",{appName:t}),f.refreshToken=s),o&&(Et(typeof o=="string","internal-error",{appName:t}),f.accessToken=o),u&&(Et(typeof u=="number","internal-error",{appName:t}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ja,this.toJSON())}_performRefresh(){return qi("not implemented")}}/**
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
 */function xr(r,t){Et(typeof r=="string"||typeof r>"u","internal-error",{appName:t})}class Yn{constructor({uid:t,auth:n,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new lD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Nm(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Gl(this,this.stsTokenManager.getToken(this.auth,t));return Et(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return aD(this,t)}reload(){return uD(this)}_assign(t){this!==t&&(Et(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>({...n})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Yn({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(t){Et(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),n&&await oh(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Kn(this.auth.app))return Promise.reject(Gr(this.auth));const t=await this.getIdToken();return await Gl(this,sD(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){const s=n.displayName??void 0,o=n.email??void 0,u=n.phoneNumber??void 0,f=n.photoURL??void 0,g=n.tenantId??void 0,y=n._redirectEventId??void 0,p=n.createdAt??void 0,E=n.lastLoginAt??void 0,{uid:b,emailVerified:D,isAnonymous:q,providerData:H,stsTokenManager:$}=n;Et(b&&$,t,"internal-error");const F=Ja.fromJSON(this.name,$);Et(typeof b=="string",t,"internal-error"),xr(s,t.name),xr(o,t.name),Et(typeof D=="boolean",t,"internal-error"),Et(typeof q=="boolean",t,"internal-error"),xr(u,t.name),xr(f,t.name),xr(g,t.name),xr(y,t.name),xr(p,t.name),xr(E,t.name);const tt=new Yn({uid:b,auth:t,email:o,emailVerified:D,displayName:s,isAnonymous:q,photoURL:f,phoneNumber:u,tenantId:g,stsTokenManager:F,createdAt:p,lastLoginAt:E});return H&&Array.isArray(H)&&(tt.providerData=H.map(it=>({...it}))),y&&(tt._redirectEventId=y),tt}static async _fromIdTokenResponse(t,n,s=!1){const o=new Ja;o.updateFromServerResponse(n);const u=new Yn({uid:n.localId,auth:t,stsTokenManager:o,isAnonymous:s});return await oh(u),u}static async _fromGetAccountInfoResponse(t,n,s){const o=n.users[0];Et(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?_A(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!u?.length,g=new Ja;g.updateFromIdToken(s);const y=new Yn({uid:o.localId,auth:t,stsTokenManager:g,isAnonymous:f}),p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Nm(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!u?.length};return Object.assign(y,p),y}}/**
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
 */const RT=new Map;function Hi(r){Xi(r instanceof Function,"Expected a class definition");let t=RT.get(r);return t?(Xi(t instanceof r,"Instance stored in cache mismatched with class"),t):(t=new r,RT.set(r,t),t)}/**
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
 */class vA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}vA.type="NONE";const IT=vA;/**
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
 */function Lc(r,t,n){return`firebase:${r}:${t}:${n}`}class Wa{constructor(t,n,s){this.persistence=t,this.auth=n,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Lc(this.userKey,o.apiKey,u),this.fullPersistenceKey=Lc("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await ah(this.auth,{idToken:t}).catch(()=>{});return n?Yn._fromGetAccountInfoResponse(this.auth,n,t):null}return Yn._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,s="authUser"){if(!n.length)return new Wa(Hi(IT),t,s);const o=(await Promise.all(n.map(async p=>{if(await p._isAvailable())return p}))).filter(p=>p);let u=o[0]||Hi(IT);const f=Lc(s,t.config.apiKey,t.name);let g=null;for(const p of n)try{const E=await p._get(f);if(E){let b;if(typeof E=="string"){const D=await ah(t,{idToken:E}).catch(()=>{});if(!D)break;b=await Yn._fromGetAccountInfoResponse(t,D,E)}else b=Yn._fromJSON(t,E);p!==u&&(g=b),u=p;break}}catch{}const y=o.filter(p=>p._shouldAllowMigration);return!u._shouldAllowMigration||!y.length?new Wa(u,t,s):(u=y[0],g&&await u._set(f,g.toJSON()),await Promise.all(n.map(async p=>{if(p!==u)try{await p._remove(f)}catch{}})),new Wa(u,t,s))}}/**
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
 */function CT(r){const t=r.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(SA(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(TA(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(wA(t))return"Blackberry";if(RA(t))return"Webos";if(EA(t))return"Safari";if((t.includes("chrome/")||AA(t))&&!t.includes("edge/"))return"Chrome";if(bA(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if(s?.length===2)return s[1]}return"Other"}function TA(r=Xe()){return/firefox\//i.test(r)}function EA(r=Xe()){const t=r.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function AA(r=Xe()){return/crios\//i.test(r)}function SA(r=Xe()){return/iemobile/i.test(r)}function bA(r=Xe()){return/android/i.test(r)}function wA(r=Xe()){return/blackberry/i.test(r)}function RA(r=Xe()){return/webos/i.test(r)}function Rg(r=Xe()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function dD(r=Xe()){return Rg(r)&&!!window.navigator?.standalone}function mD(){return Kb()&&document.documentMode===10}function IA(r=Xe()){return Rg(r)||bA(r)||RA(r)||wA(r)||/windows phone/i.test(r)||SA(r)}/**
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
 */function CA(r,t=[]){let n;switch(r){case"Browser":n=CT(Xe());break;case"Worker":n=`${CT(Xe())}-${r}`;break;default:n=r}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${uo}/${s}`}/**
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
 */class gD{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const s=u=>new Promise((f,g)=>{try{const y=t(u);f(y)}catch(y){g(y)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const s of this.queue)await s(t),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function pD(r,t={}){return go(r,"GET","/v2/passwordPolicy",xh(r,t))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const yD=6;class _D{constructor(t){const n=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??yD,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=t.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,n),this.validatePasswordCharacterOptions(t,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(t,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=t.length>=s),o&&(n.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<t.length;o++)s=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,n,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=u))}}/**
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
 */class vD{constructor(t,n,s,o){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new DT(this),this.idTokenSubscription=new DT(this),this.beforeStateQueue=new gD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Hi(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Wa.create(this,t),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await ah(this,{idToken:t}),s=await Yn._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){if(Kn(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(f,f))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=this.redirectUser?._redirectEventId,f=s?._redirectEventId,g=await this.tryRedirectSignIn(t);(!u||u===f)&&g?.user&&(s=g.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Et(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await oh(t)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=tD()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Kn(this.app))return Promise.reject(Gr(this));const n=t?De(t):null;return n&&Et(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&Et(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Kn(this.app)?Promise.reject(Gr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Kn(this.app)?Promise.reject(Gr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Hi(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await pD(this),n=new _D(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Xs("auth","Firebase",t())}onAuthStateChanged(t,n,s){return this.registerStateListener(this.authStateSubscription,t,n,s)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,s){return this.registerStateListener(this.idTokenSubscription,t,n,s)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await fD(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(t,n){const s=await this.getOrInitRedirectPersistenceManager(n);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Hi(t)||this._popupRedirectResolver;Et(n,this,"argument-error"),this.redirectPersistenceManager=await Wa.create(this,[Hi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===t?this._currentUser:this.redirectUser?._redirectEventId===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=this.currentUser?.uid??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,s,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let f=!1;const g=this._isInitialized?Promise.resolve():this._initializationPromise;if(Et(g,this,"internal-error"),g.then(()=>{f||u(this.currentUser)}),typeof n=="function"){const y=t.addObserver(n,s,o);return()=>{f=!0,y()}}else{const y=t.addObserver(n);return()=>{f=!0,y()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Et(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=CA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(t["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){if(Kn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return t?.error&&Z2(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Ph(r){return De(r)}class DT{constructor(t){this.auth=t,this.observer=null,this.addObserver=tw(n=>this.observer=n)}get next(){return Et(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ig={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function TD(r){Ig=r}function ED(r){return Ig.loadJS(r)}function AD(){return Ig.gapiScript}function SD(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function bD(r,t){const n=Zs(r,"auth");if(n.isInitialized()){const o=n.getImmediate(),u=n.getOptions();if(Qr(u,t??{}))return o;$i(o,"already-initialized")}return n.initialize({options:t})}function wD(r,t){const n=t?.persistence||[],s=(Array.isArray(n)?n:[n]).map(Hi);t?.errorMap&&r._updateErrorMap(t.errorMap),r._initializeWithPersistence(s,t?.popupRedirectResolver)}function RD(r,t,n){const s=Ph(r);Et(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const o=!1,u=DA(t),{host:f,port:g}=ID(t),y=g===null?"":`:${g}`,p={url:`${u}//${f}${y}/`},E=Object.freeze({host:f,port:g,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){Et(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Et(Qr(p,s.config.emulator)&&Qr(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=p,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,lo(f)?(JT(`${u}//${f}${y}`),WT("Auth",!0)):CD()}function DA(r){const t=r.indexOf(":");return t<0?"":r.substr(0,t+1)}function ID(r){const t=DA(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(t.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:NT(s.substr(u.length+1))}}else{const[u,f]=s.split(":");return{host:u,port:NT(f)}}}function NT(r){if(!r)return null;const t=Number(r);return isNaN(t)?null:t}function CD(){function r(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class NA{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return qi("not implemented")}_getIdTokenResponse(t){return qi("not implemented")}_linkToIdToken(t,n){return qi("not implemented")}_getReauthenticationResolver(t){return qi("not implemented")}}/**
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
 */async function to(r,t){return pA(r,"POST","/v1/accounts:signInWithIdp",xh(r,t))}/**
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
 */const DD="http://localhost";class $s extends NA{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new $s(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):$i("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:o,...u}=n;if(!s||!o)return null;const f=new $s(s,o);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(t){const n=this.buildRequest();return to(t,n)}_linkToIdToken(t,n){const s=this.buildRequest();return s.idToken=n,to(t,s)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,to(t,n)}buildRequest(){const t={requestUri:DD,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Ql(n)}return t}}/**
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
 */class OA{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class nu extends OA{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Pr extends nu{constructor(){super("facebook.com")}static credential(t){return $s._fromParams({providerId:Pr.PROVIDER_ID,signInMethod:Pr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Pr.credentialFromTaggedObject(t)}static credentialFromError(t){return Pr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Pr.credential(t.oauthAccessToken)}catch{return null}}}Pr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pr.PROVIDER_ID="facebook.com";/**
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
 */class kr extends nu{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return $s._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return kr.credentialFromTaggedObject(t)}static credentialFromError(t){return kr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:s}=t;if(!n&&!s)return null;try{return kr.credential(n,s)}catch{return null}}}kr.GOOGLE_SIGN_IN_METHOD="google.com";kr.PROVIDER_ID="google.com";/**
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
 */class Ur extends nu{constructor(){super("github.com")}static credential(t){return $s._fromParams({providerId:Ur.PROVIDER_ID,signInMethod:Ur.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ur.credentialFromTaggedObject(t)}static credentialFromError(t){return Ur.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ur.credential(t.oauthAccessToken)}catch{return null}}}Ur.GITHUB_SIGN_IN_METHOD="github.com";Ur.PROVIDER_ID="github.com";/**
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
 */class Lr extends nu{constructor(){super("twitter.com")}static credential(t,n){return $s._fromParams({providerId:Lr.PROVIDER_ID,signInMethod:Lr.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Lr.credentialFromTaggedObject(t)}static credentialFromError(t){return Lr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=t;if(!n||!s)return null;try{return Lr.credential(n,s)}catch{return null}}}Lr.TWITTER_SIGN_IN_METHOD="twitter.com";Lr.PROVIDER_ID="twitter.com";/**
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
 */async function ND(r,t){return pA(r,"POST","/v1/accounts:signUp",xh(r,t))}/**
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
 */class Wr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,s,o=!1){const u=await Yn._fromIdTokenResponse(t,s,o),f=OT(s);return new Wr({user:u,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(t,n,s){await t._updateTokensIfNecessary(s,!0);const o=OT(s);return new Wr({user:t,providerId:o,_tokenResponse:s,operationType:n})}}function OT(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */async function OD(r){if(Kn(r.app))return Promise.reject(Gr(r));const t=Ph(r);if(await t._initializationPromise,t.currentUser?.isAnonymous)return new Wr({user:t.currentUser,providerId:null,operationType:"signIn"});const n=await ND(t,{returnSecureToken:!0}),s=await Wr._fromIdTokenResponse(t,"signIn",n,!0);return await t._updateCurrentUser(s.user),s}/**
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
 */class lh extends Zn{constructor(t,n,s,o){super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,lh.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,n,s,o){return new lh(t,n,s,o)}}function MA(r,t,n,s){return(t==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?lh._fromErrorAndOperation(r,u,t,s):u})}async function MD(r,t,n=!1){const s=await Gl(r,t._linkToIdToken(r.auth,await r.getIdToken()),n);return Wr._forOperation(r,"link",s)}/**
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
 */async function VD(r,t,n=!1){const{auth:s}=r;if(Kn(s.app))return Promise.reject(Gr(s));const o="reauthenticate";try{const u=await Gl(r,MA(s,o,t,r),n);Et(u.idToken,s,"internal-error");const f=wg(u.idToken);Et(f,s,"internal-error");const{sub:g}=f;return Et(r.uid===g,s,"user-mismatch"),Wr._forOperation(r,o,u)}catch(u){throw u?.code==="auth/user-not-found"&&$i(s,"user-mismatch"),u}}/**
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
 */async function xD(r,t,n=!1){if(Kn(r.app))return Promise.reject(Gr(r));const s="signIn",o=await MA(r,s,t),u=await Wr._fromIdTokenResponse(r,s,o);return n||await r._updateCurrentUser(u.user),u}function PD(r,t,n,s){return De(r).onIdTokenChanged(t,n,s)}function kD(r,t,n){return De(r).beforeAuthStateChanged(t,n)}const uh="__sak";/**
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
 */class VA{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(uh,"1"),this.storage.removeItem(uh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const UD=1e3,LD=10;class xA extends VA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=IA(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&t(n,o,s)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((f,g,y)=>{this.notifyListeners(f,y)});return}const s=t.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},u=this.storage.getItem(s);mD()&&u!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,LD):o()}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:s}),!0)})},UD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}xA.type="LOCAL";const zD=xA;/**
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
 */class PA extends VA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}PA.type="SESSION";const kA=PA;/**
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
 */function jD(r){return Promise.all(r.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class kh{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(o=>o.isListeningto(t));if(n)return n;const s=new kh(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:s,eventType:o,data:u}=n.data,f=this.handlersMap[o];if(!f?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const g=Array.from(f).map(async p=>p(n.origin,u)),y=await jD(g);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:y})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}kh.receivers=[];/**
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
 */function Cg(r="",t=10){let n="";for(let s=0;s<t;s++)n+=Math.floor(Math.random()*10);return r+n}/**
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
 */class BD{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,f;return new Promise((g,y)=>{const p=Cg("",20);o.port1.start();const E=setTimeout(()=>{y(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(b){const D=b;if(D.data.eventId===p)switch(D.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),g(D.data.response);break;default:clearTimeout(E),clearTimeout(u),y(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:t,eventId:p,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
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
 */function yi(){return window}function qD(r){yi().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function UA(){return typeof yi().WorkerGlobalScope<"u"&&typeof yi().importScripts=="function"}async function HD(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function FD(){return navigator?.serviceWorker?.controller||null}function GD(){return UA()?self:null}/**
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
 */const LA="firebaseLocalStorageDb",QD=1,ch="firebaseLocalStorage",zA="fbase_key";class iu{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Uh(r,t){return r.transaction([ch],t?"readwrite":"readonly").objectStore(ch)}function KD(){const r=indexedDB.deleteDatabase(LA);return new iu(r).toPromise()}function Om(){const r=indexedDB.open(LA,QD);return new Promise((t,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(ch,{keyPath:zA})}catch(o){n(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(ch)?t(s):(s.close(),await KD(),t(await Om()))})})}async function MT(r,t,n){const s=Uh(r,!0).put({[zA]:t,value:n});return new iu(s).toPromise()}async function YD(r,t){const n=Uh(r,!1).get(t),s=await new iu(n).toPromise();return s===void 0?null:s.value}function VT(r,t){const n=Uh(r,!0).delete(t);return new iu(n).toPromise()}const $D=800,XD=3;class jA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Om(),this.db)}async _withRetries(t){let n=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(n++>XD)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return UA()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=kh._getInstance(GD()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await HD(),!this.activeServiceWorker)return;this.sender=new BD(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&t[0]?.fulfilled&&t[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||FD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Om();return await MT(t,uh,"1"),await VT(t,uh),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>MT(s,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(s=>YD(s,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>VT(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const u=Uh(o,!1).getAll();return new iu(u).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(t.length!==0)for(const{fbase_key:o,value:u}of t)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$D)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jA.type="LOCAL";const ZD=jA;new eu(3e4,6e4);/**
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
 */function JD(r,t){return t?Hi(t):(Et(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Dg extends NA{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return to(t,this._buildIdpRequest())}_linkToIdToken(t,n){return to(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return to(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function WD(r){return xD(r.auth,new Dg(r),r.bypassAuthState)}function tN(r){const{auth:t,user:n}=r;return Et(n,t,"internal-error"),VD(n,new Dg(r),r.bypassAuthState)}async function eN(r){const{auth:t,user:n}=r;return Et(n,t,"internal-error"),MD(n,new Dg(r),r.bypassAuthState)}/**
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
 */class BA{constructor(t,n,s,o,u=!1){this.auth=t,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:s,postBody:o,tenantId:u,error:f,type:g}=t;if(f){this.reject(f);return}const y={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(g)(y))}catch(p){this.reject(p)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return WD;case"linkViaPopup":case"linkViaRedirect":return eN;case"reauthViaPopup":case"reauthViaRedirect":return tN;default:$i(this.auth,"internal-error")}}resolve(t){Xi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Xi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const nN=new eu(2e3,1e4);class Xa extends BA{constructor(t,n,s,o,u){super(t,n,o,u),this.provider=s,this.authWindow=null,this.pollId=null,Xa.currentPopupAction&&Xa.currentPopupAction.cancel(),Xa.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return Et(t,this.auth,"internal-error"),t}async onExecution(){Xi(this.filter.length===1,"Popup operations only handle one event");const t=Cg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(pi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(pi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xa.currentPopupAction=null}pollUserCancellation(){const t=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,nN.get())};t()}}Xa.currentPopupAction=null;/**
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
 */const iN="pendingRedirect",zc=new Map;class rN extends BA{constructor(t,n,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let t=zc.get(this.auth._key());if(!t){try{const s=await sN(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(n){t=()=>Promise.reject(n)}zc.set(this.auth._key(),t)}return this.bypassAuthState||zc.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sN(r,t){const n=lN(t),s=oN(r);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function aN(r,t){zc.set(r._key(),t)}function oN(r){return Hi(r._redirectPersistence)}function lN(r){return Lc(iN,r.config.apiKey,r.name)}async function uN(r,t,n=!1){if(Kn(r.app))return Promise.reject(Gr(r));const s=Ph(r),o=JD(s,t),f=await new rN(s,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,t)),f}/**
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
 */const cN=600*1e3;class hN{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(n=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!fN(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){if(t.error&&!qA(t)){const s=t.error.code?.split("auth/")[1]||"internal-error";n.onError(pi(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const s=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=cN&&this.cachedEventUids.clear(),this.cachedEventUids.has(xT(t))}saveEventToCache(t){this.cachedEventUids.add(xT(t)),this.lastProcessedEventTime=Date.now()}}function xT(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(t=>t).join("-")}function qA({type:r,error:t}){return r==="unknown"&&t?.code==="auth/no-auth-event"}function fN(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qA(r);default:return!1}}/**
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
 */async function dN(r,t={}){return go(r,"GET","/v1/projects",t)}/**
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
 */const mN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gN=/^https?/;async function pN(r){if(r.config.emulator)return;const{authorizedDomains:t}=await dN(r);for(const n of t)try{if(yN(n))return}catch{}$i(r,"unauthorized-domain")}function yN(r){const t=Dm(),{protocol:n,hostname:s}=new URL(t);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!gN.test(n))return!1;if(mN.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const _N=new eu(3e4,6e4);function PT(){const r=yi().___jsl;if(r?.H){for(const t of Object.keys(r.H))if(r.H[t].r=r.H[t].r||[],r.H[t].L=r.H[t].L||[],r.H[t].r=[...r.H[t].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function vN(r){return new Promise((t,n)=>{function s(){PT(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{PT(),n(pi(r,"network-request-failed"))},timeout:_N.get()})}if(yi().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else if(yi().gapi?.load)s();else{const o=SD("iframefcb");return yi()[o]=()=>{gapi.load?s():n(pi(r,"network-request-failed"))},ED(`${AD()}?onload=${o}`).catch(u=>n(u))}}).catch(t=>{throw jc=null,t})}let jc=null;function TN(r){return jc=jc||vN(r),jc}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const EN=new eu(5e3,15e3),AN="__/auth/iframe",SN="emulator/auth/iframe",bN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function RN(r){const t=r.config;Et(t.authDomain,r,"auth-domain-config-required");const n=t.emulator?bg(t,SN):`https://${r.config.authDomain}/${AN}`,s={apiKey:t.apiKey,appName:r.name,v:uo},o=wN.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${Ql(s).slice(1)}`}async function IN(r){const t=await TN(r),n=yi().gapi;return Et(n,r,"internal-error"),t.open({where:document.body,url:RN(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bN,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const f=pi(r,"network-request-failed"),g=yi().setTimeout(()=>{u(f)},EN.get());function y(){yi().clearTimeout(g),o(s)}s.ping(y).then(y,()=>{u(f)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const CN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},DN=500,NN=600,ON="_blank",MN="http://localhost";class kT{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function VN(r,t,n,s=DN,o=NN){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let g="";const y={...CN,width:s.toString(),height:o.toString(),top:u,left:f},p=Xe().toLowerCase();n&&(g=AA(p)?ON:n),TA(p)&&(t=t||MN,y.scrollbars="yes");const E=Object.entries(y).reduce((D,[q,H])=>`${D}${q}=${H},`,"");if(dD(p)&&g!=="_self")return xN(t||"",g),new kT(null);const b=window.open(t||"",g,E);Et(b,r,"popup-blocked");try{b.focus()}catch{}return new kT(b)}function xN(r,t){const n=document.createElement("a");n.href=r,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const PN="__/auth/handler",kN="emulator/auth/handler",UN=encodeURIComponent("fac");async function UT(r,t,n,s,o,u){Et(r.config.authDomain,r,"auth-domain-config-required"),Et(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:uo,eventId:o};if(t instanceof OA){t.setDefaultLanguage(r.languageCode),f.providerId=t.providerId||"",Wb(t.getCustomParameters())||(f.customParameters=JSON.stringify(t.getCustomParameters()));for(const[E,b]of Object.entries({}))f[E]=b}if(t instanceof nu){const E=t.getScopes().filter(b=>b!=="");E.length>0&&(f.scopes=E.join(","))}r.tenantId&&(f.tid=r.tenantId);const g=f;for(const E of Object.keys(g))g[E]===void 0&&delete g[E];const y=await r._getAppCheckToken(),p=y?`#${UN}=${encodeURIComponent(y)}`:"";return`${LN(r)}?${Ql(g).slice(1)}${p}`}function LN({config:r}){return r.emulator?bg(r,kN):`https://${r.authDomain}/${PN}`}/**
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
 */const sm="webStorageSupport";class zN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kA,this._completeRedirectFn=uN,this._overrideRedirectResult=aN}async _openPopup(t,n,s,o){Xi(this.eventManagers[t._key()]?.manager,"_initialize() not called before _openPopup()");const u=await UT(t,n,s,Dm(),o);return VN(t,u,Cg())}async _openRedirect(t,n,s,o){await this._originValidation(t);const u=await UT(t,n,s,Dm(),o);return qD(u),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):(Xi(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(t);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(t){const n=await IN(t),s=new hN(t);return n.register("authEvent",o=>(Et(o?.authEvent,t,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=n,s}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(sm,{type:sm},o=>{const u=o?.[0]?.[sm];u!==void 0&&n(!!u),$i(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=pN(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return IA()||EA()||Rg()}}const jN=zN;var LT="@firebase/auth",zT="1.11.0";/**
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
 */class BN{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(s=>{t(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Et(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function qN(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function HN(r){_i(new $n("auth",(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),u=t.getProvider("app-check-internal"),{apiKey:f,authDomain:g}=s.options;Et(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:f,authDomain:g,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:CA(r)},p=new vD(s,o,u,y);return wD(p,n),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,s)=>{t.getProvider("auth-internal").initialize()})),_i(new $n("auth-internal",t=>{const n=Ph(t.getProvider("auth").getImmediate());return(s=>new BN(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pn(LT,zT,qN(r)),Pn(LT,zT,"esm2020")}/**
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
 */const FN=300,GN=ZT("authIdTokenMaxAge")||FN;let jT=null;const QN=r=>async t=>{const n=t&&await t.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>GN)return;const o=n?.token;jT!==o&&(jT=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function KN(r=xm()){const t=Zs(r,"auth");if(t.isInitialized())return t.getImmediate();const n=bD(r,{popupRedirectResolver:jN,persistence:[ZD,zD,kA]}),s=ZT("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const f=QN(u.toString());kD(n,f,()=>f(n.currentUser)),PD(n,g=>f(g))}}const o=$T("auth");return o&&RD(n,`http://${o}`),n}function YN(){return document.getElementsByTagName("head")?.[0]??document}TD({loadJS(r){return new Promise((t,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=t,s.onerror=o=>{const u=pi("internal-error");u.customData=o,n(u)},s.type="text/javascript",s.charset="UTF-8",YN().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});HN("Browser");const js={apiKey:"AIzaSyASowKpD20sEZPA33VG5Mxy0KuJeFIziT4",authDomain:"ruleta-colores.firebaseapp.com",projectId:"ruleta-colores",storageBucket:"ruleta-colores.firebasestorage.app",messagingSenderId:"1088398378468",appId:"1:1088398378468:web:ffe2a14beab711aed573f1",measurementId:"G-NV2GD0KQKC"},$N={apiKey:js.apiKey,authDomain:js.authDomain,projectId:js.projectId,storageBucket:js.storageBucket,messagingSenderId:js.messagingSenderId,appId:js.appId,measurementId:js.measurementId},Ng=aE($N),Bi=dC(Ng),XN=KN(Ng);OD(XN).catch(r=>{console.error("Anonymous sign-in failed:",r)});typeof window<"u"&&Q2(Ng);const BT="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",ZN=(r=6)=>Array.from({length:r},()=>BT[Math.floor(Math.random()*BT.length)]).join("");function HA(r){const t=Dc(Bi,"rooms",r),n=H=>wC(t,$=>{if(!$.exists())return H(null);const F=$.data();H({colors:F.colors||[],customColors:F.customColors||{},history:F.history||[],flash:F.flash||null,code:F.code||""})}),s=async(H,$=[],F={})=>{H&&await Wd(t,{colors:$,customColors:F,history:[],updatedAt:bl()},{merge:!0})},o=H=>tm(Bi,async $=>{const F=await $.get(t),tt=F.exists()?F.data():{colors:[],history:[],customColors:{},flash:null},it=H({colors:tt.colors||[],history:tt.history||[],customColors:tt.customColors||{},flash:tt.flash||null});$.set(t,{...it,updatedAt:bl()},{merge:!0})});return{watch:n,initIfNeeded:s,addColor:async H=>{await o(({colors:$,history:F,customColors:tt,flash:it})=>$.includes(H)?{colors:$,history:F,customColors:tt,flash:it}:{colors:[...$,H],history:F,customColors:tt,flash:it})},removeColor:async H=>{await o(({colors:$,history:F,customColors:tt})=>{const it=$.filter(St=>St!==H),ot={...tt};return delete ot[H],{colors:it,history:F,customColors:ot,flash:null}})},updateCustomColor:async(H,$)=>{await o(({colors:F,history:tt,customColors:it,flash:ot})=>({colors:F,history:tt,flash:ot,customColors:{...it,[H]:$}}))},pushHistoryAndFlash:async(H,$,F)=>{const tt=Date.now();return await o(({colors:it,history:ot,customColors:St})=>{if(!it.includes(H))return{colors:it,history:ot,customColors:St,flash:null};const ct=[...ot||[],{color:H,ts:tt,by:$}];return{colors:it,history:ct,customColors:St,flash:{color:H,ts:tt,duration:F}}}),tt},removeAfterFlashIfNotLast:async H=>{await o(({colors:$,history:F,customColors:tt,flash:it})=>{const ot=it&&it.color===H;return{colors:$.length===1?$:$.filter(ct=>ct!==H),history:F,customColors:tt,flash:ot?null:it}})},reset:async()=>{await o(({colors:H,history:$,customColors:F})=>({colors:[...new Set([...H,...$.map(it=>it.color)])],history:[],customColors:F,flash:null}))},ensureRoomCode:async H=>{const $=await gT(cT(sT(Bi,"codes"),hT("roomId","==",r),fT(1)));let F=$.empty?"":$.docs[0].id;return!F&&H?await tm(Bi,async tt=>{for(let it=0;it<5;it++){const ot=ZN(6),St=Dc(Bi,"codes",ot);if(!(await tt.get(St)).exists()){F=ot,tt.set(St,{roomId:r,createdAt:bl()}),tt.set(t,{code:F},{merge:!0});return}}throw new Error("No se pudo generar c�digo �nico.")}):F&&await Wd(t,{code:F},{merge:!0}),F},createRoom:async({initialColors:H=[],customColors:$={},createdBy:F=""}={})=>{const tt=`r${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,it=Dc(Bi,"rooms",tt);await Wd(it,{colors:H,customColors:$,history:[],updatedAt:bl(),createdBy:F},{merge:!0});const ot="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",St=(bt=6)=>Array.from({length:bt},()=>ot[Math.floor(Math.random()*ot.length)]).join("");let ct="";return await tm(Bi,async bt=>{for(let O=0;O<5;O++){const S=St(6),C=Dc(Bi,"codes",S);if(!(await bt.get(C)).exists()){ct=S,bt.set(C,{roomId:tt,createdAt:bl()}),bt.set(it,{code:ct},{merge:!0});return}}throw new Error("No se pudo generar c�digo �nico.")}),{roomId:tt,code:ct}},resolveRoomIdByCode:async H=>{const $=await gT(cT(sT(Bi,"codes"),hT("__name__","==",H),fT(1)));return $.empty?null:$.docs[0].data()?.roomId??null}}}function JN(){const[r,t]=re.useState(!1),[n,s]=re.useState(!1),[o,u]=re.useState(""),[f,g]=re.useState(""),[y,p]=re.useState(""),E=HA("dummy"),b=window.location.origin+window.location.pathname,D=async()=>{p("");const H=o.trim();if(!H){p("Escribe tu nombre (administrador)");return}t(!0);try{const{roomId:$,code:F}=await E.createRoom({initialColors:["Rojo","Azul","Verde","Amarillo","Naranja","Blanco/Morado","Negro","Rosa"],createdBy:H}),tt=`${b}?room=${encodeURIComponent($)}`,it=`${b}?room=${encodeURIComponent($)}&mode=public`;alert(`✅ Sala creada

Código: ${F}

Link ADMIN: ${tt}
Link PÚBLICO: ${it}

Comparte el CÓDIGO con tus amigos; ellos entran como invitados.`),window.location.href=tt}catch($){console.error($),p($.message||"Error creando la sala")}finally{t(!1)}},q=async()=>{p("");const H=f.trim().toUpperCase();if(!H){p("Escribe el código de la sala");return}s(!0);try{const $=await E.resolveRoomIdByCode(H);if(!$){p("Código no válido o sala no encontrada");return}window.location.href=`${b}?room=${encodeURIComponent($)}&mode=public`}catch($){console.error($),p("No se pudo validar el código")}finally{s(!1)}};return G.jsx("div",{className:"max-w-3xl mx-auto p-6 min-h-screen bg-gradient-to-br from-purple-50 to-blue-50",children:G.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-6",children:[G.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"🎮 Ruleta de Colores"}),G.jsx("p",{className:"text-gray-600 mb-6",children:"Crea una sala nueva o entra con un código."}),G.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[G.jsxs("div",{className:"border rounded-lg p-4",children:[G.jsx("h2",{className:"text-xl font-semibold mb-3",children:"Crear sala (Admin)"}),G.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Tu nombre"}),G.jsx("input",{type:"text",value:o,onChange:H=>u(H.target.value),placeholder:"Escribe tu nombre",className:"w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"}),G.jsx("button",{onClick:D,disabled:r,className:`mt-3 w-full py-2 rounded-lg text-white font-medium ${r?"bg-gray-400 cursor-not-allowed":"bg-green-600 hover:bg-green-700"}`,children:r?"Creando...":"Crear sala"}),G.jsxs("p",{className:"text-xs text-gray-500 mt-2",children:["Al crear se generará un ",G.jsx("strong",{children:"código"})," para compartir y links directo admin/público."]})]}),G.jsxs("div",{className:"border rounded-lg p-4",children:[G.jsx("h2",{className:"text-xl font-semibold mb-3",children:"Entrar con código (Invitado)"}),G.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Código"}),G.jsx("input",{type:"text",value:f,onChange:H=>g(H.target.value.toUpperCase()),placeholder:"Ej: 7GQ2XA",className:"w-full px-3 py-2 border rounded-lg tracking-widest text-center uppercase focus:outline-none focus:ring-2 focus:ring-purple-500",maxLength:6}),G.jsx("button",{onClick:q,disabled:n,className:`mt-3 w-full py-2 rounded-lg text-white font-medium ${n?"bg-gray-400 cursor-not-allowed":"bg-blue-600 hover:bg-blue-700"}`,children:n?"Entrando...":"Entrar"}),G.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"Pide el código a quien creó la sala y pégalo aquí."})]})]}),y&&G.jsx("div",{className:"mt-6 p-3 rounded border border-red-200 bg-red-50 text-red-700",children:y}),G.jsx("div",{className:"mt-8 p-3 bg-blue-50 border border-blue-200 rounded",children:G.jsxs("p",{className:"text-sm text-blue-800",children:["Consejo: también puedes entrar con links directos ",G.jsx("code",{children:"?room=…"})," (admin) o ",G.jsx("code",{children:"?room=…&mode=public"})," (invitado)."]})})]})})}/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WN=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),tO=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,s)=>s?s.toUpperCase():n.toLowerCase()),qT=r=>{const t=tO(r);return t.charAt(0).toUpperCase()+t.slice(1)},FA=(...r)=>r.filter((t,n,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===n).join(" ").trim(),eO=r=>{for(const t in r)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var nO={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iO=re.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:o="",children:u,iconNode:f,...g},y)=>re.createElement("svg",{ref:y,...nO,width:t,height:t,stroke:r,strokeWidth:s?Number(n)*24/Number(t):n,className:FA("lucide",o),...!u&&!eO(g)&&{"aria-hidden":"true"},...g},[...f.map(([p,E])=>re.createElement(p,E)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ru=(r,t)=>{const n=re.forwardRef(({className:s,...o},u)=>re.createElement(iO,{ref:u,iconNode:t,className:FA(`lucide-${WN(qT(r))}`,`lucide-${r}`,s),...o}));return n.displayName=qT(r),n};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rO=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],sO=ru("plus",rO);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aO=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],oO=ru("refresh-cw",aO);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lO=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],uO=ru("rotate-cw",lO);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cO=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],HT=ru("share-2",cO);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hO=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],fO=ru("trash-2",hO),hh={Rojo:"#dc2626",Azul:"#2563eb",Verde:"#16a34a",Amarillo:"#eab308",Naranja:"#ea580c",Morado:"#9333ea","Blanco/Morado":"#9333ea",Rosa:"#ec4899",Violeta:"#7c3aed",Cyan:"#0891b2",Negro:"#1f2937",Blanco:"#FFFFFF",Gris:"#6b7280",Celeste:"#0ea5e9",Turquesa:"#14b8a6",Lima:"#84cc16",Dorado:"#f59e0b",Plateado:"#9ca3af","Marr�n":"#92400e","Caf�":"#78350f",Beige:"#d6d3d1",Coral:"#f97316",Magenta:"#d946ef","�ndigo":"#4f46e5",Lavanda:"#a78bfa","Rojo Oscuro":"#991b1b","Azul Claro":"#60a5fa","Verde Claro":"#4ade80","Amarillo Claro":"#fde047","Rosa Claro":"#f9a8d4","Morado Claro":"#c084fc","Verde Oscuro":"#15803d","Azul Oscuro":"#1e40af","Naranja Claro":"#fb923c",Esmeralda:"#10b981","Rub�":"#be123c",Zafiro:"#1e40af","�mbar":"#f59e0b",Jade:"#059669","Carmes�":"#dc2626"};function dO({colors:r,customColors:t,rotation:n,flash:s}){const y=D=>s&&s.color===D;if(r.length===1){const D=r[0],q=t[D]||hh[D]||"hsl(0,70%,50%)";return G.jsx("svg",{width:300,height:300,className:"drop-shadow-lg",children:G.jsxs("g",{style:{transform:`rotate(${n}deg)`,transformOrigin:"150px 150px"},children:[G.jsx("circle",{cx:150,cy:150,r:140,className:y(D)?"blink-twice":"",fill:q,stroke:"#fff",strokeWidth:"3"}),G.jsx("text",{x:150,y:150,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:"18",fontWeight:"bold",style:{textShadow:"2px 2px 4px rgba(0,0,0,0.8)"},children:D})]})})}const p=360/Math.max(r.length,1),E=-p/2,b=r.map((D,q)=>{const H=q*p+E,$=(q+1)*p+E,F=p>180?1:0,tt=150+140*Math.cos((H-90)*Math.PI/180),it=150+140*Math.sin((H-90)*Math.PI/180),ot=150+140*Math.cos(($-90)*Math.PI/180),St=150+140*Math.sin(($-90)*Math.PI/180),ct=["M 150 150",`L ${tt} ${it}`,`A 140 140 0 ${F} 1 ${ot} ${St}`,"Z"].join(" "),bt=H+p/2,O=t[D]||hh[D]||`hsl(${q*360/Math.max(r.length,1)},70%,50%)`;return G.jsxs("g",{children:[G.jsx("path",{d:ct,className:y(D)?"blink-twice":"",fill:O,stroke:"#fff",strokeWidth:"3"}),G.jsx("text",{x:150+80*Math.cos((bt-90)*Math.PI/180),y:150+80*Math.sin((bt-90)*Math.PI/180),textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:"11",fontWeight:"bold",style:{textShadow:"2px 2px 4px rgba(0,0,0,0.8)"},children:D})]},D)});return G.jsxs("svg",{width:300,height:300,className:"drop-shadow-lg",children:[G.jsx("g",{style:{transform:`rotate(${n}deg)`,transformOrigin:"150px 150px"},children:b}),G.jsxs("g",{transform:"translate(150, 12)",children:[G.jsx("polygon",{points:"0,0 -12,20 12,20",fill:"#dc2626"}),G.jsx("circle",{cx:"0",cy:"22",r:"6",fill:"#dc2626",stroke:"#fff",strokeWidth:"2"})]})]})}function mO({onSharePublic:r,onShareAdmin:t,onReset:n}){return G.jsxs("div",{className:"flex flex-wrap justify-center gap-4 mb-6",children:[G.jsxs("button",{onClick:r,className:"flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600",children:[G.jsx(HT,{size:16})," Compartir Link Público"]}),G.jsxs("button",{onClick:t,className:"flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600",children:[G.jsx(HT,{size:16})," Compartir Link Admin"]}),G.jsxs("button",{onClick:n,className:"flex items-center gap-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600",children:[G.jsx(oO,{size:16})," Reiniciar Juego"]})]})}function gO({history:r}){return G.jsx("div",{className:"max-h-80 md:max-h-[28rem] overflow-y-auto pr-2",children:r?.length>0?r.slice().reverse().map((t,n)=>G.jsxs("div",{className:"bg-blue-50 px-3 py-2 rounded text-sm",children:[G.jsx("span",{className:"font-medium",children:t.color}),G.jsx("span",{className:"text-gray-500 ml-2",children:new Date(t.ts).toLocaleTimeString()}),t.by&&G.jsxs("span",{className:"text-gray-600 ml-2",children:["por ",G.jsx("strong",{children:t.by})]})]},n)):G.jsx("p",{className:"text-gray-500 text-center py-4",children:"Aún no hay selecciones"})})}const FT=r=>(r%360+360)%360;function pO(r,t,n){if(n<=0)return-1;const s=360/n,o=FT(r),u=FT(t-o);return Math.round(u/s)%n}const yO=0;function _O(){const r=new URLSearchParams(window.location.search),t=r.get("mode")==="public",n=!t,s=r.get("room")||"default",o=HA(s),[u,f]=re.useState(["Rojo","Azul","Verde","Amarillo","Naranja","Blanco/Morado","Negro","Rosa"]),[g,y]=re.useState({}),[p,E]=re.useState([]),[b,D]=re.useState(null),[q,H]=re.useState(""),[$,F]=re.useState(""),[tt,it]=re.useState(""),[ot,St]=re.useState(!1),[ct,bt]=re.useState(0),[O,S]=re.useState("");re.useEffect(()=>{const w=localStorage.getItem("wheelPlayerName")||"";it(w)},[]),re.useEffect(()=>{localStorage.setItem("wheelPlayerName",tt||"")},[tt]),re.useEffect(()=>{o.initIfNeeded(n,u,g).catch(()=>{});const w=o.watch(Q=>{Q&&(f(Q.colors),y(Q.customColors),E(Q.history),D(Q.flash),H(Q.code||""))});return o.ensureRoomCode(n).catch(()=>{}),()=>w()},[s,n]);const C=(tt||"").trim().length>0,N=u.length===1&&p?.some(w=>w.color===u[0]),P=u.length>0&&!ot&&C&&!N,I=async()=>{if(!n)return;const w=$.trim();w&&(await o.addColor(w),F(""))},ne=async w=>{n&&await o.removeColor(w)},Zt=async(w,Q)=>{n&&await o.updateCustomColor(w,Q)},K=async()=>{n&&(await o.reset(),S(""),bt(0))},rt=()=>{const Q=`${window.location.href.split("?")[0]}?room=${s}&mode=public`;navigator.clipboard.writeText(Q).catch(()=>{}),alert("¡Link público copiado! "+Q)},dt=()=>{const Q=`${window.location.href.split("?")[0]}?room=${s}`;navigator.clipboard.writeText(Q).catch(()=>{}),alert("¡Link admin copiado! "+Q)},Pt=()=>{if(!(tt||"").trim()){alert("Por favor, escribe tu nombre antes de girar.");return}if(u.length===0||ot)return;if(N){alert("El juego ya terminó ??");return}St(!0),S("");const Q=5+Math.random()*5,st=ct+Q*360+Math.random()*360;bt(st);const ht=1200+100;setTimeout(async()=>{const It=u.length;if(It===0){St(!1);return}const yt=pO(st,yO,It),_e=u[yt];S(_e),St(!1),setTimeout(async()=>{await o.removeAfterFlashIfNotLast(_e)},ht)},3e3)};return G.jsxs("div",{className:"max-w-4xl mx-auto p-6 bg-gradient-to-br from-purple-50 to-blue-50 min-h-screen",children:[G.jsx("style",{children:`
        @keyframes blinkTwice {
          0%{opacity:1;transform:scale(1);}20%{opacity:.4;transform:scale(1.02);}
          40%{opacity:1;}60%{opacity:.4;transform:scale(1.02);}
          80%{opacity:1;}100%{opacity:1;}
        }
        .blink-twice { animation: blinkTwice 1.2s ease-in-out; }
      `}),G.jsxs("div",{className:"bg-white rounded-lg shadow-xl p-6",children:[G.jsxs("div",{className:"text-center mb-6",children:[G.jsxs("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:["Ruleta de Colores para Fiesta de Colores",t&&G.jsx("span",{className:"text-lg text-blue-600 font-normal",children:" - Modo Invitado"}),n&&G.jsx("span",{className:"text-lg text-green-600 font-normal",children:" - Modo Administrador"})]}),G.jsx("p",{className:"text-gray-600",children:t?"¡Gira la ruleta y diviértete! Solo puedes girar, no modificar colores.":"Agrega colores, gira la ruleta y comparte con tus amigos"}),G.jsxs("p",{className:"text-xs text-gray-500",children:["Sala: ",G.jsx("code",{children:s})]}),q&&G.jsxs("div",{className:"mt-3 inline-flex items-center gap-2 bg-purple-50 border border-purple-200 text-purple-800 px-3 py-1.5 rounded-lg",children:[G.jsx("span",{className:"text-sm",children:"Código de sala:"}),G.jsx("code",{className:"font-semibold tracking-widest",children:q}),G.jsx("button",{onClick:async()=>{try{await navigator.clipboard.writeText(q),alert(`Código copiado: ${q}`)}catch{alert(`Código: ${q}`)}},className:"ml-2 text-xs bg-purple-600 hover:bg-purple-700 text-white px-2 py-1 rounded",children:"Copiar"})]})]}),G.jsxs("div",{className:"mb-4 max-w-md mx-auto",children:[G.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Tu nombre (requerido para girar)"}),G.jsx("input",{type:"text",value:tt,onChange:w=>it(w.target.value),placeholder:"Escribe tu nombre...",className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"})]}),n&&G.jsx(mO,{onSharePublic:rt,onShareAdmin:dt,onReset:K}),G.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[G.jsxs("div",{className:"text-center",children:[G.jsx("div",{className:"relative inline-block mb-4",children:u.length>0?G.jsx(dO,{colors:u,customColors:g,rotation:ct,flash:b}):G.jsx("div",{className:"w-72 h-72 bg-gray-200 rounded-full flex items-center justify-center",children:G.jsx("p",{className:"text-gray-500 text-center",children:n?`Agrega colores
para comenzar`:`No hay colores
disponibles`})})}),G.jsx("button",{onClick:Pt,disabled:!P,className:`w-32 h-32 rounded-full text-white font-bold text-lg shadow-lg transform transition-all ${P?u.length===1?"bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 hover:scale-105 active:scale-95":"bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 hover:scale-105 active:scale-95":"bg-gray-400 cursor-not-allowed"}`,title:C?N?"Juego finalizado":"Girar la ruleta":"Escribe tu nombre para poder girar",children:ot?G.jsx(uO,{className:"animate-spin mx-auto",size:24}):N?G.jsxs("div",{className:"text-center",children:[G.jsx("div",{children:"??"}),G.jsx("div",{className:"text-xs",children:"FINALIZADO"})]}):u.length===1?G.jsxs("div",{className:"text-center",children:[G.jsx("div",{children:"??"}),G.jsx("div",{className:"text-xs",children:"FINAL"})]}):"GIRAR"}),N&&G.jsx("div",{className:"mt-3 text-sm text-yellow-700 bg-yellow-100 border border-yellow-200 rounded p-2",children:"?? Juego finalizado: ya se han extraído todos los colores."}),O&&G.jsxs("div",{className:`mt-4 p-4 border rounded-lg ${u.length===1?"bg-gradient-to-r from-yellow-100 to-orange-100 border-yellow-300":"bg-green-100 border-green-300"}`,children:[G.jsx("h3",{className:`text-lg font-bold ${u.length===1?"text-yellow-800":"text-green-800"}`,children:u.length===1?"?? ¡COLOR FINAL!":"¡Resultado!"}),G.jsx("p",{className:`text-2xl font-bold ${u.length===1?"text-yellow-900":"text-green-900"}`,children:O}),G.jsxs("p",{className:"text-sm text-gray-600 mt-1",children:["Sacado por: ",G.jsx("span",{className:"font-semibold",children:(tt||"").trim()})]})]})]}),G.jsxs("div",{children:[n&&G.jsxs("div",{className:"mb-6",children:[G.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Agregar Color"}),G.jsxs("div",{className:"flex gap-2",children:[G.jsx("input",{type:"text",value:$,onChange:w=>F(w.target.value),onKeyDown:w=>w.key==="Enter"&&I(),placeholder:"Escribe un color...",className:"flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"}),G.jsx("button",{onClick:I,className:"bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600",children:G.jsx(sO,{size:20})})]})]}),n&&G.jsxs("div",{className:"mb-6",children:[G.jsxs("h3",{className:"text-lg font-semibold mb-3",children:["Colores Disponibles (",u.length,")"]}),G.jsx("div",{className:"max-h-48 overflow-y-auto",children:u.length>0?G.jsx("div",{className:"space-y-2",children:u.map((w,Q)=>G.jsxs("div",{className:"flex items-center justify-between bg-gray-50 px-3 py-2 rounded",children:[G.jsxs("div",{className:"flex items-center gap-2 flex-1",children:[G.jsx("span",{className:"flex-1",children:w}),G.jsx("input",{type:"color",value:g[w]||(hh[w]??"#3b82f6"),onChange:st=>Zt(w,st.target.value),className:"w-8 h-8 rounded border-2 border-gray-300 cursor-pointer",title:`Cambiar color de ${w}`})]}),G.jsx("button",{onClick:()=>ne(w),className:"text-red-500 hover:text-red-700 ml-2",children:G.jsx(fO,{size:16})})]},Q))}):G.jsx("p",{className:"text-gray-500 text-center py-4",children:"No hay colores disponibles"})})]}),t&&G.jsxs("div",{className:"mb-6",children:[G.jsxs("h3",{className:"text-lg font-semibold mb-3",children:["Colores en la Ruleta (",u.length,")"]}),G.jsx("div",{className:"max-h-48 overflow-y-auto",children:u.length>0?u.map((w,Q)=>G.jsxs("div",{className:"flex items-center gap-2 bg-gray-50 px-3 py-2 rounded",children:[G.jsx("div",{className:"w-6 h-6 rounded-full border-2 border-gray-300",style:{backgroundColor:g[w]||(hh[w]??"#3b82f6")}}),G.jsx("span",{children:w})]},Q)):G.jsx("p",{className:"text-gray-500 text-center py-4",children:"No hay colores disponibles"})})]}),G.jsxs("div",{children:[G.jsxs("h3",{className:"text-lg font-semibold mb-3",children:["Historial (",p.length,")"]}),G.jsx(gO,{history:p})]})]})]}),G.jsxs("div",{className:"mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg",children:[G.jsx("h4",{className:"font-semibold text-blue-800 mb-2",children:n?"?? Instrucciones para Administrador:":"?? Instrucciones para Invitado:"}),n?G.jsxs("ol",{className:"text-sm text-blue-700 space-y-1",children:[G.jsxs("li",{children:["1. Abre con ",G.jsx("code",{children:"?room=tuSala"})," (ej. fiesta1)."]}),G.jsx("li",{children:"2. Agrega/edita colores y comparte el link público o el código."}),G.jsx("li",{children:"3. Todos verán la misma ruleta en tiempo real."})]}):G.jsxs("ol",{className:"text-sm text-blue-700 space-y-1",children:[G.jsxs("li",{children:["1. Escribe tu nombre y pulsa ",G.jsx("strong",{children:"GIRAR"}),"."]}),G.jsx("li",{children:"2. El color elegido parpadea y luego desaparece para todos."})]})]})]})]})}function vO(){return new URLSearchParams(window.location.search).get("room")?G.jsx(_O,{}):G.jsx(JN,{})}Db.createRoot(document.getElementById("root")).render(G.jsx(Eb.StrictMode,{children:G.jsx(vO,{})}));
