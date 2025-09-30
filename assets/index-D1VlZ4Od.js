(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();function qT(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var jd={exports:{}},Rl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q_;function h1(){if(Q_)return Rl;Q_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var g in o)g!=="key"&&(u[g]=o[g])}else u=o;return o=u.ref,{$$typeof:r,type:s,key:f,ref:o!==void 0?o:null,props:u}}return Rl.Fragment=t,Rl.jsx=n,Rl.jsxs=n,Rl}var K_;function f1(){return K_||(K_=1,jd.exports=h1()),jd.exports}var q=f1(),Bd={exports:{}},It={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y_;function d1(){if(Y_)return It;Y_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),S=Symbol.iterator;function C(D){return D===null||typeof D!="object"?null:(D=S&&D[S]||D["@@iterator"],typeof D=="function"?D:null)}var H={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J=Object.assign,tt={};function W(D,Z,at){this.props=D,this.context=Z,this.refs=tt,this.updater=at||H}W.prototype.isReactComponent={},W.prototype.setState=function(D,Z){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,Z,"setState")},W.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function yt(){}yt.prototype=W.prototype;function At(D,Z,at){this.props=D,this.context=Z,this.refs=tt,this.updater=at||H}var ht=At.prototype=new yt;ht.constructor=At,J(ht,W.prototype),ht.isPureReactComponent=!0;var jt=Array.isArray,pt={H:null,A:null,T:null,S:null,V:null},Dt=Object.prototype.hasOwnProperty;function O(D,Z,at,rt,$,ot){return at=ot.ref,{$$typeof:r,type:D,key:Z,ref:at!==void 0?at:null,props:ot}}function b(D,Z){return O(D.type,Z,void 0,void 0,void 0,D.props)}function R(D){return typeof D=="object"&&D!==null&&D.$$typeof===r}function V(D){var Z={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(at){return Z[at]})}var N=/\/+/g;function P(D,Z){return typeof D=="object"&&D!==null&&D.key!=null?V(""+D.key):Z.toString(36)}function I(){}function ae(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(I,I):(D.status="pending",D.then(function(Z){D.status==="pending"&&(D.status="fulfilled",D.value=Z)},function(Z){D.status==="pending"&&(D.status="rejected",D.reason=Z)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function Jt(D,Z,at,rt,$){var ot=typeof D;(ot==="undefined"||ot==="boolean")&&(D=null);var it=!1;if(D===null)it=!0;else switch(ot){case"bigint":case"string":case"number":it=!0;break;case"object":switch(D.$$typeof){case r:case t:it=!0;break;case E:return it=D._init,Jt(it(D._payload),Z,at,rt,$)}}if(it)return $=$(D),it=rt===""?"."+P(D,0):rt,jt($)?(at="",it!=null&&(at=it.replace(N,"$&/")+"/"),Jt($,Z,at,"",function(Ht){return Ht})):$!=null&&(R($)&&($=b($,at+($.key==null||D&&D.key===$.key?"":(""+$.key).replace(N,"$&/")+"/")+it)),Z.push($)),1;it=0;var wt=rt===""?".":rt+":";if(jt(D))for(var ct=0;ct<D.length;ct++)rt=D[ct],ot=wt+P(rt,ct),it+=Jt(rt,Z,at,ot,$);else if(ct=C(D),typeof ct=="function")for(D=ct.call(D),ct=0;!(rt=D.next()).done;)rt=rt.value,ot=wt+P(rt,ct++),it+=Jt(rt,Z,at,ot,$);else if(ot==="object"){if(typeof D.then=="function")return Jt(ae(D),Z,at,rt,$);throw Z=String(D),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return it}function F(D,Z,at){if(D==null)return D;var rt=[],$=0;return Jt(D,rt,"","",function(ot){return Z.call(at,ot,$++)}),rt}function nt(D){if(D._status===-1){var Z=D._result;Z=Z(),Z.then(function(at){(D._status===0||D._status===-1)&&(D._status=1,D._result=at)},function(at){(D._status===0||D._status===-1)&&(D._status=2,D._result=at)}),D._status===-1&&(D._status=0,D._result=Z)}if(D._status===1)return D._result.default;throw D._result}var ft=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function kt(){}return It.Children={map:F,forEach:function(D,Z,at){F(D,function(){Z.apply(this,arguments)},at)},count:function(D){var Z=0;return F(D,function(){Z++}),Z},toArray:function(D){return F(D,function(Z){return Z})||[]},only:function(D){if(!R(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},It.Component=W,It.Fragment=n,It.Profiler=o,It.PureComponent=At,It.StrictMode=s,It.Suspense=y,It.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=pt,It.__COMPILER_RUNTIME={__proto__:null,c:function(D){return pt.H.useMemoCache(D)}},It.cache=function(D){return function(){return D.apply(null,arguments)}},It.cloneElement=function(D,Z,at){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var rt=J({},D.props),$=D.key,ot=void 0;if(Z!=null)for(it in Z.ref!==void 0&&(ot=void 0),Z.key!==void 0&&($=""+Z.key),Z)!Dt.call(Z,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&Z.ref===void 0||(rt[it]=Z[it]);var it=arguments.length-2;if(it===1)rt.children=at;else if(1<it){for(var wt=Array(it),ct=0;ct<it;ct++)wt[ct]=arguments[ct+2];rt.children=wt}return O(D.type,$,void 0,void 0,ot,rt)},It.createContext=function(D){return D={$$typeof:f,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:u,_context:D},D},It.createElement=function(D,Z,at){var rt,$={},ot=null;if(Z!=null)for(rt in Z.key!==void 0&&(ot=""+Z.key),Z)Dt.call(Z,rt)&&rt!=="key"&&rt!=="__self"&&rt!=="__source"&&($[rt]=Z[rt]);var it=arguments.length-2;if(it===1)$.children=at;else if(1<it){for(var wt=Array(it),ct=0;ct<it;ct++)wt[ct]=arguments[ct+2];$.children=wt}if(D&&D.defaultProps)for(rt in it=D.defaultProps,it)$[rt]===void 0&&($[rt]=it[rt]);return O(D,ot,void 0,void 0,null,$)},It.createRef=function(){return{current:null}},It.forwardRef=function(D){return{$$typeof:g,render:D}},It.isValidElement=R,It.lazy=function(D){return{$$typeof:E,_payload:{_status:-1,_result:D},_init:nt}},It.memo=function(D,Z){return{$$typeof:p,type:D,compare:Z===void 0?null:Z}},It.startTransition=function(D){var Z=pt.T,at={};pt.T=at;try{var rt=D(),$=pt.S;$!==null&&$(at,rt),typeof rt=="object"&&rt!==null&&typeof rt.then=="function"&&rt.then(kt,ft)}catch(ot){ft(ot)}finally{pt.T=Z}},It.unstable_useCacheRefresh=function(){return pt.H.useCacheRefresh()},It.use=function(D){return pt.H.use(D)},It.useActionState=function(D,Z,at){return pt.H.useActionState(D,Z,at)},It.useCallback=function(D,Z){return pt.H.useCallback(D,Z)},It.useContext=function(D){return pt.H.useContext(D)},It.useDebugValue=function(){},It.useDeferredValue=function(D,Z){return pt.H.useDeferredValue(D,Z)},It.useEffect=function(D,Z,at){var rt=pt.H;if(typeof at=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return rt.useEffect(D,Z)},It.useId=function(){return pt.H.useId()},It.useImperativeHandle=function(D,Z,at){return pt.H.useImperativeHandle(D,Z,at)},It.useInsertionEffect=function(D,Z){return pt.H.useInsertionEffect(D,Z)},It.useLayoutEffect=function(D,Z){return pt.H.useLayoutEffect(D,Z)},It.useMemo=function(D,Z){return pt.H.useMemo(D,Z)},It.useOptimistic=function(D,Z){return pt.H.useOptimistic(D,Z)},It.useReducer=function(D,Z,at){return pt.H.useReducer(D,Z,at)},It.useRef=function(D){return pt.H.useRef(D)},It.useState=function(D){return pt.H.useState(D)},It.useSyncExternalStore=function(D,Z,at){return pt.H.useSyncExternalStore(D,Z,at)},It.useTransition=function(){return pt.H.useTransition()},It.version="19.1.1",It}var X_;function Mm(){return X_||(X_=1,Bd.exports=d1()),Bd.exports}var re=Mm();const m1=qT(re);var qd={exports:{}},Il={},Hd={exports:{}},Fd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $_;function g1(){return $_||($_=1,(function(r){function t(F,nt){var ft=F.length;F.push(nt);t:for(;0<ft;){var kt=ft-1>>>1,D=F[kt];if(0<o(D,nt))F[kt]=nt,F[ft]=D,ft=kt;else break t}}function n(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var nt=F[0],ft=F.pop();if(ft!==nt){F[0]=ft;t:for(var kt=0,D=F.length,Z=D>>>1;kt<Z;){var at=2*(kt+1)-1,rt=F[at],$=at+1,ot=F[$];if(0>o(rt,ft))$<D&&0>o(ot,rt)?(F[kt]=ot,F[$]=ft,kt=$):(F[kt]=rt,F[at]=ft,kt=at);else if($<D&&0>o(ot,ft))F[kt]=ot,F[$]=ft,kt=$;else break t}}return nt}function o(F,nt){var ft=F.sortIndex-nt.sortIndex;return ft!==0?ft:F.id-nt.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var f=Date,g=f.now();r.unstable_now=function(){return f.now()-g}}var y=[],p=[],E=1,S=null,C=3,H=!1,J=!1,tt=!1,W=!1,yt=typeof setTimeout=="function"?setTimeout:null,At=typeof clearTimeout=="function"?clearTimeout:null,ht=typeof setImmediate<"u"?setImmediate:null;function jt(F){for(var nt=n(p);nt!==null;){if(nt.callback===null)s(p);else if(nt.startTime<=F)s(p),nt.sortIndex=nt.expirationTime,t(y,nt);else break;nt=n(p)}}function pt(F){if(tt=!1,jt(F),!J)if(n(y)!==null)J=!0,Dt||(Dt=!0,P());else{var nt=n(p);nt!==null&&Jt(pt,nt.startTime-F)}}var Dt=!1,O=-1,b=5,R=-1;function V(){return W?!0:!(r.unstable_now()-R<b)}function N(){if(W=!1,Dt){var F=r.unstable_now();R=F;var nt=!0;try{t:{J=!1,tt&&(tt=!1,At(O),O=-1),H=!0;var ft=C;try{e:{for(jt(F),S=n(y);S!==null&&!(S.expirationTime>F&&V());){var kt=S.callback;if(typeof kt=="function"){S.callback=null,C=S.priorityLevel;var D=kt(S.expirationTime<=F);if(F=r.unstable_now(),typeof D=="function"){S.callback=D,jt(F),nt=!0;break e}S===n(y)&&s(y),jt(F)}else s(y);S=n(y)}if(S!==null)nt=!0;else{var Z=n(p);Z!==null&&Jt(pt,Z.startTime-F),nt=!1}}break t}finally{S=null,C=ft,H=!1}nt=void 0}}finally{nt?P():Dt=!1}}}var P;if(typeof ht=="function")P=function(){ht(N)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,ae=I.port2;I.port1.onmessage=N,P=function(){ae.postMessage(null)}}else P=function(){yt(N,0)};function Jt(F,nt){O=yt(function(){F(r.unstable_now())},nt)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return C},r.unstable_next=function(F){switch(C){case 1:case 2:case 3:var nt=3;break;default:nt=C}var ft=C;C=nt;try{return F()}finally{C=ft}},r.unstable_requestPaint=function(){W=!0},r.unstable_runWithPriority=function(F,nt){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var ft=C;C=F;try{return nt()}finally{C=ft}},r.unstable_scheduleCallback=function(F,nt,ft){var kt=r.unstable_now();switch(typeof ft=="object"&&ft!==null?(ft=ft.delay,ft=typeof ft=="number"&&0<ft?kt+ft:kt):ft=kt,F){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=ft+D,F={id:E++,callback:nt,priorityLevel:F,startTime:ft,expirationTime:D,sortIndex:-1},ft>kt?(F.sortIndex=ft,t(p,F),n(y)===null&&F===n(p)&&(tt?(At(O),O=-1):tt=!0,Jt(pt,ft-kt))):(F.sortIndex=D,t(y,F),J||H||(J=!0,Dt||(Dt=!0,P()))),F},r.unstable_shouldYield=V,r.unstable_wrapCallback=function(F){var nt=C;return function(){var ft=C;C=nt;try{return F.apply(this,arguments)}finally{C=ft}}}})(Fd)),Fd}var Z_;function p1(){return Z_||(Z_=1,Hd.exports=g1()),Hd.exports}var Gd={exports:{}},Je={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J_;function y1(){if(J_)return Je;J_=1;var r=Mm();function t(y){var p="https://react.dev/errors/"+y;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)p+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+y+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(y,p,E){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:S==null?null:""+S,children:y,containerInfo:p,implementation:E}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(y,p){if(y==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Je.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Je.createPortal=function(y,p){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(y,p,null,E)},Je.flushSync=function(y){var p=f.T,E=s.p;try{if(f.T=null,s.p=2,y)return y()}finally{f.T=p,s.p=E,s.d.f()}},Je.preconnect=function(y,p){typeof y=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(y,p))},Je.prefetchDNS=function(y){typeof y=="string"&&s.d.D(y)},Je.preinit=function(y,p){if(typeof y=="string"&&p&&typeof p.as=="string"){var E=p.as,S=g(E,p.crossOrigin),C=typeof p.integrity=="string"?p.integrity:void 0,H=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;E==="style"?s.d.S(y,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:S,integrity:C,fetchPriority:H}):E==="script"&&s.d.X(y,{crossOrigin:S,integrity:C,fetchPriority:H,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Je.preinitModule=function(y,p){if(typeof y=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var E=g(p.as,p.crossOrigin);s.d.M(y,{crossOrigin:E,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(y)},Je.preload=function(y,p){if(typeof y=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var E=p.as,S=g(E,p.crossOrigin);s.d.L(y,E,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Je.preloadModule=function(y,p){if(typeof y=="string")if(p){var E=g(p.as,p.crossOrigin);s.d.m(y,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:E,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(y)},Je.requestFormReset=function(y){s.d.r(y)},Je.unstable_batchedUpdates=function(y,p){return y(p)},Je.useFormState=function(y,p,E){return f.H.useFormState(y,p,E)},Je.useFormStatus=function(){return f.H.useHostTransitionStatus()},Je.version="19.1.1",Je}var W_;function _1(){if(W_)return Gd.exports;W_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Gd.exports=y1(),Gd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tv;function v1(){if(tv)return Il;tv=1;var r=p1(),t=Mm(),n=_1();function s(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var i=e,a=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(a=i.return),e=i.return;while(e)}return i.tag===3?a:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function g(e){if(u(e)!==e)throw Error(s(188))}function y(e){var i=e.alternate;if(!i){if(i=u(e),i===null)throw Error(s(188));return i!==e?null:e}for(var a=e,l=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return g(h),e;if(d===l)return g(h),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var v=!1,T=h.child;T;){if(T===a){v=!0,a=h,l=d;break}if(T===l){v=!0,l=h,a=d;break}T=T.sibling}if(!v){for(T=d.child;T;){if(T===a){v=!0,a=d,l=h;break}if(T===l){v=!0,l=d,a=h;break}T=T.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:i}function p(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=p(e),i!==null)return i;e=e.sibling}return null}var E=Object.assign,S=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),J=Symbol.for("react.fragment"),tt=Symbol.for("react.strict_mode"),W=Symbol.for("react.profiler"),yt=Symbol.for("react.provider"),At=Symbol.for("react.consumer"),ht=Symbol.for("react.context"),jt=Symbol.for("react.forward_ref"),pt=Symbol.for("react.suspense"),Dt=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),V=Symbol.for("react.memo_cache_sentinel"),N=Symbol.iterator;function P(e){return e===null||typeof e!="object"?null:(e=N&&e[N]||e["@@iterator"],typeof e=="function"?e:null)}var I=Symbol.for("react.client.reference");function ae(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===I?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case J:return"Fragment";case W:return"Profiler";case tt:return"StrictMode";case pt:return"Suspense";case Dt:return"SuspenseList";case R:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case H:return"Portal";case ht:return(e.displayName||"Context")+".Provider";case At:return(e._context.displayName||"Context")+".Consumer";case jt:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return i=e.displayName||null,i!==null?i:ae(e.type)||"Memo";case b:i=e._payload,e=e._init;try{return ae(e(i))}catch{}}return null}var Jt=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,nt=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ft={pending:!1,data:null,method:null,action:null},kt=[],D=-1;function Z(e){return{current:e}}function at(e){0>D||(e.current=kt[D],kt[D]=null,D--)}function rt(e,i){D++,kt[D]=e.current,e.current=i}var $=Z(null),ot=Z(null),it=Z(null),wt=Z(null);function ct(e,i){switch(rt(it,i),rt(ot,e),rt($,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?T_(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=T_(i),e=E_(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}at($),rt($,e)}function Ht(){at($),at(ot),at(it)}function pn(e){e.memoizedState!==null&&rt(wt,e);var i=$.current,a=E_(i,e.type);i!==a&&(rt(ot,e),rt($,a))}function nn(e){ot.current===e&&(at($),at(ot)),wt.current===e&&(at(wt),El._currentValue=ft)}var yn=Object.prototype.hasOwnProperty,Ke=r.unstable_scheduleCallback,Ve=r.unstable_cancelCallback,Oi=r.unstable_shouldYield,Ye=r.unstable_requestPaint,me=r.unstable_now,Hn=r.unstable_getCurrentPriorityLevel,ne=r.unstable_ImmediatePriority,Ae=r.unstable_UserBlockingPriority,ai=r.unstable_NormalPriority,Eo=r.unstable_LowPriority,Ao=r.unstable_IdlePriority,qh=r.log,hs=r.unstable_setDisableYieldValue,sr=null,Xe=null;function Nn(e){if(typeof qh=="function"&&hs(e),Xe&&typeof Xe.setStrictMode=="function")try{Xe.setStrictMode(sr,e)}catch{}}var rn=Math.clz32?Math.clz32:cu,Hh=Math.log,uu=Math.LN2;function cu(e){return e>>>=0,e===0?32:31-(Hh(e)/uu|0)|0}var oi=256,ar=4194304;function Fn(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function On(e,i,a){var l=e.pendingLanes;if(l===0)return 0;var h=0,d=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var T=l&134217727;return T!==0?(l=T&~d,l!==0?h=Fn(l):(v&=T,v!==0?h=Fn(v):a||(a=T&~e,a!==0&&(h=Fn(a))))):(T=l&~d,T!==0?h=Fn(T):v!==0?h=Fn(v):a||(a=l&~e,a!==0&&(h=Fn(a)))),h===0?0:i!==0&&i!==h&&(i&d)===0&&(d=h&-h,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:h}function or(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function oa(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bo(){var e=oi;return oi<<=1,(oi&4194048)===0&&(oi=256),e}function lr(){var e=ar;return ar<<=1,(ar&62914560)===0&&(ar=4194304),e}function la(e){for(var i=[],a=0;31>a;a++)i.push(e);return i}function ge(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function hu(e,i,a,l,h,d){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,w=e.expirationTimes,L=e.hiddenUpdates;for(a=v&~a;0<a;){var G=31-rn(a),Y=1<<G;T[G]=0,w[G]=-1;var z=L[G];if(z!==null)for(L[G]=null,G=0;G<z.length;G++){var j=z[G];j!==null&&(j.lane&=-536870913)}a&=~Y}l!==0&&ur(e,l,0),d!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=d&~(v&~i))}function ur(e,i,a){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-rn(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194090}function cr(e,i){var a=e.entangledLanes|=i;for(e=e.entanglements;a;){var l=31-rn(a),h=1<<l;h&i|e[l]&i&&(e[l]|=i),a&=~h}}function So(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function wo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Mi(){var e=nt.p;return e!==0?e:(e=window.event,e===void 0?32:j_(e.type))}function Fh(e,i){var a=nt.p;try{return nt.p=e,i()}finally{nt.p=a}}var li=Math.random().toString(36).slice(2),pe="__reactFiber$"+li,je="__reactProps$"+li,Vi="__reactContainer$"+li,fs="__reactEvents$"+li,ds="__reactListeners$"+li,Gh="__reactHandles$"+li,Gn="__reactResources$"+li,hr="__reactMarker$"+li;function ua(e){delete e[pe],delete e[je],delete e[fs],delete e[ds],delete e[Gh]}function ui(e){var i=e[pe];if(i)return i;for(var a=e.parentNode;a;){if(i=a[Vi]||a[pe]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(e=w_(e);e!==null;){if(a=e[pe])return a;e=w_(e)}return i}e=a,a=e.parentNode}return null}function ci(e){if(e=e[pe]||e[Vi]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function fr(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(s(33))}function dr(e){var i=e[Gn];return i||(i=e[Gn]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function ye(e){e[hr]=!0}var fu=new Set,ms={};function hi(e,i){fi(e,i),fi(e+"Capture",i)}function fi(e,i){for(ms[e]=i,e=0;e<i.length;e++)fu.add(i[e])}var gs=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),di={},ca={};function Qh(e){return yn.call(ca,e)?!0:yn.call(di,e)?!1:gs.test(e)?ca[e]=!0:(di[e]=!0,!1)}function ps(e,i,a){if(Qh(i))if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+a)}}function ys(e,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+a)}}function Mn(e,i,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(i,a,""+l)}}var _s,ha;function xi(e){if(_s===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);_s=i&&i[1]||"",ha=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+_s+e+ha}var fa=!1;function da(e,i){if(!e||fa)return"";fa=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(j){var z=j}Reflect.construct(e,[],Y)}else{try{Y.call()}catch(j){z=j}e.call(Y.prototype)}}else{try{throw Error()}catch(j){z=j}(Y=e())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(j){if(j&&z&&typeof j.stack=="string")return[j.stack,z.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),v=d[0],T=d[1];if(v&&T){var w=v.split(`
`),L=T.split(`
`);for(h=l=0;l<w.length&&!w[l].includes("DetermineComponentFrameRoot");)l++;for(;h<L.length&&!L[h].includes("DetermineComponentFrameRoot");)h++;if(l===w.length||h===L.length)for(l=w.length-1,h=L.length-1;1<=l&&0<=h&&w[l]!==L[h];)h--;for(;1<=l&&0<=h;l--,h--)if(w[l]!==L[h]){if(l!==1||h!==1)do if(l--,h--,0>h||w[l]!==L[h]){var G=`
`+w[l].replace(" at new "," at ");return e.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",e.displayName)),G}while(1<=l&&0<=h);break}}}finally{fa=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?xi(a):""}function Kh(e){switch(e.tag){case 26:case 27:case 5:return xi(e.type);case 16:return xi("Lazy");case 13:return xi("Suspense");case 19:return xi("SuspenseList");case 0:case 15:return da(e.type,!1);case 11:return da(e.type.render,!1);case 1:return da(e.type,!0);case 31:return xi("Activity");default:return""}}function Qn(e){try{var i="";do i+=Kh(e),e=e.return;while(e);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function le(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mr(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function vs(e){var i=mr(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),l=""+e[i];if(!e.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(v){l=""+v,d.call(this,v)}}),Object.defineProperty(e,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function gr(e){e._valueTracker||(e._valueTracker=vs(e))}function Kt(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return e&&(l=mr(e)?e.checked?"true":"false":e.value),e=l,e!==a?(i.setValue(e),!0):!1}function Pi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ts=/[\n"\\]/g;function xe(e){return e.replace(Ts,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Ro(e,i,a,l,h,d,v,T){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),i!=null?v==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+le(i)):e.value!==""+le(i)&&(e.value=""+le(i)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),i!=null?Co(e,v,le(i)):a!=null?Co(e,v,le(a)):l!=null&&e.removeAttribute("value"),h==null&&d!=null&&(e.defaultChecked=!!d),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+le(T):e.removeAttribute("name")}function Io(e,i,a,l,h,d,v,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+le(a):"",i=i!=null?""+le(i):a,T||i===e.value||(e.value=i),e.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=T?e.checked:!!l,e.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v)}function Co(e,i,a){i==="number"&&Pi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function pr(e,i,a,l){if(e=e.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<e.length;a++)h=i.hasOwnProperty("$"+e[a].value),e[a].selected!==h&&(e[a].selected=h),h&&l&&(e[a].defaultSelected=!0)}else{for(a=""+le(a),i=null,h=0;h<e.length;h++){if(e[h].value===a){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function du(e,i,a){if(i!=null&&(i=""+le(i),i!==e.value&&(e.value=i),a==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=a!=null?""+le(a):""}function mu(e,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(Jt(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=le(i),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function Vn(e,i){if(i){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=i;return}}e.textContent=i}var ki=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Do(e,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,a):typeof a!="number"||a===0||ki.has(i)?i==="float"?e.cssFloat=a:e[i]=(""+a).trim():e[i]=a+"px"}function No(e,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&a[h]!==l&&Do(e,h,l)}else for(var d in i)i.hasOwnProperty(d)&&Do(e,d,i[d])}function ma(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gu=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),pu=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Kn(e){return pu.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Oo=null;function Mo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yr=null,sn=null;function yu(e){var i=ci(e);if(i&&(e=i.stateNode)){var a=e[je]||null;t:switch(e=i.stateNode,i.type){case"input":if(Ro(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+xe(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==e&&l.form===e.form){var h=l[je]||null;if(!h)throw Error(s(90));Ro(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===e.form&&Kt(l)}break t;case"textarea":du(e,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&pr(e,!!a.multiple,i,!1)}}}var Es=!1;function As(e,i,a){if(Es)return e(i,a);Es=!0;try{var l=e(i);return l}finally{if(Es=!1,(yr!==null||sn!==null)&&(ac(),yr&&(i=yr,e=sn,sn=yr=null,yu(i),e)))for(i=0;i<e.length;i++)yu(e[i])}}function _r(e,i){var a=e.stateNode;if(a===null)return null;var l=a[je]||null;if(l===null)return null;a=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var an=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ui=!1;if(an)try{var vr={};Object.defineProperty(vr,"passive",{get:function(){Ui=!0}}),window.addEventListener("test",vr,vr),window.removeEventListener("test",vr,vr)}catch{Ui=!1}var xn=null,te=null,ga=null;function _u(){if(ga)return ga;var e,i=te,a=i.length,l,h="value"in xn?xn.value:xn.textContent,d=h.length;for(e=0;e<a&&i[e]===h[e];e++);var v=a-e;for(l=1;l<=v&&i[a-l]===h[d-l];l++);return ga=h.slice(e,1<l?1-l:void 0)}function bs(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Ss(){return!0}function Vo(){return!1}function Ce(e){function i(a,l,h,d,v){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Ss:Vo,this.isPropagationStopped=Vo,this}return E(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ss)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ss)},persist:function(){},isPersistent:Ss}),i}var $e={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ws=Ce($e),Rs=E({},$e,{view:0,detail:0}),Is=Ce(Rs),pa,Cs,mi,Ds=E({},Rs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:va,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mi&&(mi&&e.type==="mousemove"?(pa=e.screenX-mi.screenX,Cs=e.screenY-mi.screenY):Cs=pa=0,mi=e),pa)},movementY:function(e){return"movementY"in e?e.movementY:Cs}}),Ns=Ce(Ds),Yh=E({},Ds,{dataTransfer:0}),vu=Ce(Yh),Os=E({},Rs,{relatedTarget:0}),ya=Ce(Os),Tu=E({},$e,{animationName:0,elapsedTime:0,pseudoElement:0}),xo=Ce(Tu),Po=E({},$e,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Eu=Ce(Po),_a=E({},$e,{data:0}),ko=Ce(_a),Au={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Li={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Su(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=bu[e])?!!i[e]:!1}function va(){return Su}var wu=E({},Rs,{key:function(e){if(e.key){var i=Au[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=bs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Li[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:va,charCode:function(e){return e.type==="keypress"?bs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?bs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ta=Ce(wu),on=E({},Ds,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uo=Ce(on),Ru=E({},Rs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:va}),Tr=Ce(Ru),c=E({},$e,{propertyName:0,elapsedTime:0,pseudoElement:0}),m=Ce(c),_=E({},Ds,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),A=Ce(_),U=E({},$e,{newState:0,oldState:0}),B=Ce(U),et=[9,13,27,32],Rt=an&&"CompositionEvent"in window,ie=null;an&&"documentMode"in document&&(ie=document.documentMode);var Ft=an&&"TextEvent"in window&&!ie,_e=an&&(!Rt||ie&&8<ie&&11>=ie),_n=" ",gi=!1;function Yn(e,i){switch(e){case"keyup":return et.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xn(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $n=!1;function Lo(e,i){switch(e){case"compositionend":return Xn(i);case"keypress":return i.which!==32?null:(gi=!0,_n);case"textInput":return e=i.data,e===_n&&gi?null:e;default:return null}}function LA(e,i){if($n)return e==="compositionend"||!Rt&&Yn(e,i)?(e=_u(),ga=te=xn=null,$n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _e&&i.locale!=="ko"?null:i.data;default:return null}}var zA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xg(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!zA[e.type]:i==="textarea"}function Pg(e,i,a,l){yr?sn?sn.push(l):sn=[l]:yr=l,i=fc(i,"onChange"),0<i.length&&(a=new ws("onChange","change",null,a,l),e.push({event:a,listeners:i}))}var zo=null,jo=null;function jA(e){g_(e,0)}function Iu(e){var i=fr(e);if(Kt(i))return e}function kg(e,i){if(e==="change")return i}var Ug=!1;if(an){var Xh;if(an){var $h="oninput"in document;if(!$h){var Lg=document.createElement("div");Lg.setAttribute("oninput","return;"),$h=typeof Lg.oninput=="function"}Xh=$h}else Xh=!1;Ug=Xh&&(!document.documentMode||9<document.documentMode)}function zg(){zo&&(zo.detachEvent("onpropertychange",jg),jo=zo=null)}function jg(e){if(e.propertyName==="value"&&Iu(jo)){var i=[];Pg(i,jo,e,Mo(e)),As(jA,i)}}function BA(e,i,a){e==="focusin"?(zg(),zo=i,jo=a,zo.attachEvent("onpropertychange",jg)):e==="focusout"&&zg()}function qA(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Iu(jo)}function HA(e,i){if(e==="click")return Iu(i)}function FA(e,i){if(e==="input"||e==="change")return Iu(i)}function GA(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var vn=typeof Object.is=="function"?Object.is:GA;function Bo(e,i){if(vn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var a=Object.keys(e),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!yn.call(i,h)||!vn(e[h],i[h]))return!1}return!0}function Bg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qg(e,i){var a=Bg(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=i&&l>=i)return{node:a,offset:i-e};e=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Bg(a)}}function Hg(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Hg(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Fg(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Pi(e.document);i instanceof e.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)e=i.contentWindow;else break;i=Pi(e.document)}return i}function Zh(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var QA=an&&"documentMode"in document&&11>=document.documentMode,Ea=null,Jh=null,qo=null,Wh=!1;function Gg(e,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Wh||Ea==null||Ea!==Pi(l)||(l=Ea,"selectionStart"in l&&Zh(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),qo&&Bo(qo,l)||(qo=l,l=fc(Jh,"onSelect"),0<l.length&&(i=new ws("onSelect","select",null,i,a),e.push({event:i,listeners:l}),i.target=Ea)))}function Ms(e,i){var a={};return a[e.toLowerCase()]=i.toLowerCase(),a["Webkit"+e]="webkit"+i,a["Moz"+e]="moz"+i,a}var Aa={animationend:Ms("Animation","AnimationEnd"),animationiteration:Ms("Animation","AnimationIteration"),animationstart:Ms("Animation","AnimationStart"),transitionrun:Ms("Transition","TransitionRun"),transitionstart:Ms("Transition","TransitionStart"),transitioncancel:Ms("Transition","TransitionCancel"),transitionend:Ms("Transition","TransitionEnd")},tf={},Qg={};an&&(Qg=document.createElement("div").style,"AnimationEvent"in window||(delete Aa.animationend.animation,delete Aa.animationiteration.animation,delete Aa.animationstart.animation),"TransitionEvent"in window||delete Aa.transitionend.transition);function Vs(e){if(tf[e])return tf[e];if(!Aa[e])return e;var i=Aa[e],a;for(a in i)if(i.hasOwnProperty(a)&&a in Qg)return tf[e]=i[a];return e}var Kg=Vs("animationend"),Yg=Vs("animationiteration"),Xg=Vs("animationstart"),KA=Vs("transitionrun"),YA=Vs("transitionstart"),XA=Vs("transitioncancel"),$g=Vs("transitionend"),Zg=new Map,ef="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ef.push("scrollEnd");function Zn(e,i){Zg.set(e,i),hi(i,[e])}var Jg=new WeakMap;function Pn(e,i){if(typeof e=="object"&&e!==null){var a=Jg.get(e);return a!==void 0?a:(i={value:e,source:i,stack:Qn(i)},Jg.set(e,i),i)}return{value:e,source:i,stack:Qn(i)}}var kn=[],ba=0,nf=0;function Cu(){for(var e=ba,i=nf=ba=0;i<e;){var a=kn[i];kn[i++]=null;var l=kn[i];kn[i++]=null;var h=kn[i];kn[i++]=null;var d=kn[i];if(kn[i++]=null,l!==null&&h!==null){var v=l.pending;v===null?h.next=h:(h.next=v.next,v.next=h),l.pending=h}d!==0&&Wg(a,h,d)}}function Du(e,i,a,l){kn[ba++]=e,kn[ba++]=i,kn[ba++]=a,kn[ba++]=l,nf|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function rf(e,i,a,l){return Du(e,i,a,l),Nu(e)}function Sa(e,i){return Du(e,null,null,i),Nu(e)}function Wg(e,i,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=e.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(h=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,h&&i!==null&&(h=31-rn(a),e=d.hiddenUpdates,l=e[h],l===null?e[h]=[i]:l.push(i),i.lane=a|536870912),d):null}function Nu(e){if(50<dl)throw dl=0,cd=null,Error(s(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var wa={};function $A(e,i,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(e,i,a,l){return new $A(e,i,a,l)}function sf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zi(e,i){var a=e.alternate;return a===null?(a=Tn(e.tag,i,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=i,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,i=e.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function tp(e,i){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,i=a.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Ou(e,i,a,l,h,d){var v=0;if(l=e,typeof e=="function")sf(e)&&(v=1);else if(typeof e=="string")v=Jb(e,a,$.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case R:return e=Tn(31,a,i,h),e.elementType=R,e.lanes=d,e;case J:return xs(a.children,h,d,i);case tt:v=8,h|=24;break;case W:return e=Tn(12,a,i,h|2),e.elementType=W,e.lanes=d,e;case pt:return e=Tn(13,a,i,h),e.elementType=pt,e.lanes=d,e;case Dt:return e=Tn(19,a,i,h),e.elementType=Dt,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case yt:case ht:v=10;break t;case At:v=9;break t;case jt:v=11;break t;case O:v=14;break t;case b:v=16,l=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),l=null}return i=Tn(v,a,i,h),i.elementType=e,i.type=l,i.lanes=d,i}function xs(e,i,a,l){return e=Tn(7,e,l,i),e.lanes=a,e}function af(e,i,a){return e=Tn(6,e,null,i),e.lanes=a,e}function of(e,i,a){return i=Tn(4,e.children!==null?e.children:[],e.key,i),i.lanes=a,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var Ra=[],Ia=0,Mu=null,Vu=0,Un=[],Ln=0,Ps=null,ji=1,Bi="";function ks(e,i){Ra[Ia++]=Vu,Ra[Ia++]=Mu,Mu=e,Vu=i}function ep(e,i,a){Un[Ln++]=ji,Un[Ln++]=Bi,Un[Ln++]=Ps,Ps=e;var l=ji;e=Bi;var h=32-rn(l)-1;l&=~(1<<h),a+=1;var d=32-rn(i)+h;if(30<d){var v=h-h%5;d=(l&(1<<v)-1).toString(32),l>>=v,h-=v,ji=1<<32-rn(i)+h|a<<h|l,Bi=d+e}else ji=1<<d|a<<h|l,Bi=e}function lf(e){e.return!==null&&(ks(e,1),ep(e,1,0))}function uf(e){for(;e===Mu;)Mu=Ra[--Ia],Ra[Ia]=null,Vu=Ra[--Ia],Ra[Ia]=null;for(;e===Ps;)Ps=Un[--Ln],Un[Ln]=null,Bi=Un[--Ln],Un[Ln]=null,ji=Un[--Ln],Un[Ln]=null}var ln=null,he=null,qt=!1,Us=null,pi=!1,cf=Error(s(519));function Ls(e){var i=Error(s(418,""));throw Go(Pn(i,e)),cf}function np(e){var i=e.stateNode,a=e.type,l=e.memoizedProps;switch(i[pe]=e,i[je]=l,a){case"dialog":Mt("cancel",i),Mt("close",i);break;case"iframe":case"object":case"embed":Mt("load",i);break;case"video":case"audio":for(a=0;a<gl.length;a++)Mt(gl[a],i);break;case"source":Mt("error",i);break;case"img":case"image":case"link":Mt("error",i),Mt("load",i);break;case"details":Mt("toggle",i);break;case"input":Mt("invalid",i),Io(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),gr(i);break;case"select":Mt("invalid",i);break;case"textarea":Mt("invalid",i),mu(i,l.value,l.defaultValue,l.children),gr(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||v_(i.textContent,a)?(l.popover!=null&&(Mt("beforetoggle",i),Mt("toggle",i)),l.onScroll!=null&&Mt("scroll",i),l.onScrollEnd!=null&&Mt("scrollend",i),l.onClick!=null&&(i.onclick=dc),i=!0):i=!1,i||Ls(e)}function ip(e){for(ln=e.return;ln;)switch(ln.tag){case 5:case 13:pi=!1;return;case 27:case 3:pi=!0;return;default:ln=ln.return}}function Ho(e){if(e!==ln)return!1;if(!qt)return ip(e),qt=!0,!1;var i=e.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Rd(e.type,e.memoizedProps)),a=!a),a&&he&&Ls(e),ip(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(i===0){he=Wn(e.nextSibling);break t}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;e=e.nextSibling}he=null}}else i===27?(i=he,kr(e.type)?(e=Nd,Nd=null,he=e):he=i):he=ln?Wn(e.stateNode.nextSibling):null;return!0}function Fo(){he=ln=null,qt=!1}function rp(){var e=Us;return e!==null&&(fn===null?fn=e:fn.push.apply(fn,e),Us=null),e}function Go(e){Us===null?Us=[e]:Us.push(e)}var hf=Z(null),zs=null,qi=null;function Er(e,i,a){rt(hf,i._currentValue),i._currentValue=a}function Hi(e){e._currentValue=hf.current,at(hf)}function ff(e,i,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===a)break;e=e.return}}function df(e,i,a,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var d=h.dependencies;if(d!==null){var v=h.child;d=d.firstContext;t:for(;d!==null;){var T=d;d=h;for(var w=0;w<i.length;w++)if(T.context===i[w]){d.lanes|=a,T=d.alternate,T!==null&&(T.lanes|=a),ff(d.return,a,e),l||(v=null);break t}d=T.next}}else if(h.tag===18){if(v=h.return,v===null)throw Error(s(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),ff(v,a,e),v=null}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===e){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}}function Qo(e,i,a,l){e=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var v=h.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var T=h.type;vn(h.pendingProps.value,v.value)||(e!==null?e.push(T):e=[T])}}else if(h===wt.current){if(v=h.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(El):e=[El])}h=h.return}e!==null&&df(i,e,a,l),i.flags|=262144}function xu(e){for(e=e.firstContext;e!==null;){if(!vn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function js(e){zs=e,qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ze(e){return sp(zs,e)}function Pu(e,i){return zs===null&&js(e),sp(e,i)}function sp(e,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},qi===null){if(e===null)throw Error(s(308));qi=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else qi=qi.next=i;return a}var ZA=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(a){return a()})}},JA=r.unstable_scheduleCallback,WA=r.unstable_NormalPriority,De={$$typeof:ht,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function mf(){return{controller:new ZA,data:new Map,refCount:0}}function Ko(e){e.refCount--,e.refCount===0&&JA(WA,function(){e.controller.abort()})}var Yo=null,gf=0,Ca=0,Da=null;function tb(e,i){if(Yo===null){var a=Yo=[];gf=0,Ca=yd(),Da={status:"pending",value:void 0,then:function(l){a.push(l)}}}return gf++,i.then(ap,ap),i}function ap(){if(--gf===0&&Yo!==null){Da!==null&&(Da.status="fulfilled");var e=Yo;Yo=null,Ca=0,Da=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function eb(e,i){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var op=F.S;F.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&tb(e,i),op!==null&&op(e,i)};var Bs=Z(null);function pf(){var e=Bs.current;return e!==null?e:ee.pooledCache}function ku(e,i){i===null?rt(Bs,Bs.current):rt(Bs,i.pool)}function lp(){var e=pf();return e===null?null:{parent:De._currentValue,pool:e}}var Xo=Error(s(460)),up=Error(s(474)),Uu=Error(s(542)),yf={then:function(){}};function cp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Lu(){}function hp(e,i,a){switch(a=e[a],a===void 0?e.push(i):a!==i&&(i.then(Lu,Lu),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,dp(e),e;default:if(typeof i.status=="string")i.then(Lu,Lu);else{if(e=ee,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,dp(e),e}throw $o=i,Xo}}var $o=null;function fp(){if($o===null)throw Error(s(459));var e=$o;return $o=null,e}function dp(e){if(e===Xo||e===Uu)throw Error(s(483))}var Ar=!1;function _f(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function br(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Sr(e,i,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Gt&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=Nu(e),Wg(e,null,a),i}return Du(e,l,i,a),Nu(e)}function Zo(e,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,cr(e,a)}}function Tf(e,i){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=i:e.next=i,a.lastBaseUpdate=i}var Ef=!1;function Jo(){if(Ef){var e=Da;if(e!==null)throw e}}function Wo(e,i,a,l){Ef=!1;var h=e.updateQueue;Ar=!1;var d=h.firstBaseUpdate,v=h.lastBaseUpdate,T=h.shared.pending;if(T!==null){h.shared.pending=null;var w=T,L=w.next;w.next=null,v===null?d=L:v.next=L,v=w;var G=e.alternate;G!==null&&(G=G.updateQueue,T=G.lastBaseUpdate,T!==v&&(T===null?G.firstBaseUpdate=L:T.next=L,G.lastBaseUpdate=w))}if(d!==null){var Y=h.baseState;v=0,G=L=w=null,T=d;do{var z=T.lane&-536870913,j=z!==T.lane;if(j?(Ut&z)===z:(l&z)===z){z!==0&&z===Ca&&(Ef=!0),G!==null&&(G=G.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Et=e,_t=T;z=i;var $t=a;switch(_t.tag){case 1:if(Et=_t.payload,typeof Et=="function"){Y=Et.call($t,Y,z);break t}Y=Et;break t;case 3:Et.flags=Et.flags&-65537|128;case 0:if(Et=_t.payload,z=typeof Et=="function"?Et.call($t,Y,z):Et,z==null)break t;Y=E({},Y,z);break t;case 2:Ar=!0}}z=T.callback,z!==null&&(e.flags|=64,j&&(e.flags|=8192),j=h.callbacks,j===null?h.callbacks=[z]:j.push(z))}else j={lane:z,tag:T.tag,payload:T.payload,callback:T.callback,next:null},G===null?(L=G=j,w=Y):G=G.next=j,v|=z;if(T=T.next,T===null){if(T=h.shared.pending,T===null)break;j=T,T=j.next,j.next=null,h.lastBaseUpdate=j,h.shared.pending=null}}while(!0);G===null&&(w=Y),h.baseState=w,h.firstBaseUpdate=L,h.lastBaseUpdate=G,d===null&&(h.shared.lanes=0),Mr|=v,e.lanes=v,e.memoizedState=Y}}function mp(e,i){if(typeof e!="function")throw Error(s(191,e));e.call(i)}function gp(e,i){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)mp(a[e],i)}var Na=Z(null),zu=Z(0);function pp(e,i){e=$i,rt(zu,e),rt(Na,i),$i=e|i.baseLanes}function Af(){rt(zu,$i),rt(Na,Na.current)}function bf(){$i=zu.current,at(Na),at(zu)}var wr=0,Ct=null,Yt=null,be=null,ju=!1,Oa=!1,qs=!1,Bu=0,tl=0,Ma=null,nb=0;function ve(){throw Error(s(321))}function Sf(e,i){if(i===null)return!1;for(var a=0;a<i.length&&a<e.length;a++)if(!vn(e[a],i[a]))return!1;return!0}function wf(e,i,a,l,h,d){return wr=d,Ct=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,F.H=e===null||e.memoizedState===null?Wp:ty,qs=!1,d=a(l,h),qs=!1,Oa&&(d=_p(i,a,l,h)),yp(e),d}function yp(e){F.H=Ku;var i=Yt!==null&&Yt.next!==null;if(wr=0,be=Yt=Ct=null,ju=!1,tl=0,Ma=null,i)throw Error(s(300));e===null||Pe||(e=e.dependencies,e!==null&&xu(e)&&(Pe=!0))}function _p(e,i,a,l){Ct=e;var h=0;do{if(Oa&&(Ma=null),tl=0,Oa=!1,25<=h)throw Error(s(301));if(h+=1,be=Yt=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}F.H=ub,d=i(a,l)}while(Oa);return d}function ib(){var e=F.H,i=e.useState()[0];return i=typeof i.then=="function"?el(i):i,e=e.useState()[0],(Yt!==null?Yt.memoizedState:null)!==e&&(Ct.flags|=1024),i}function Rf(){var e=Bu!==0;return Bu=0,e}function If(e,i,a){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~a}function Cf(e){if(ju){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}ju=!1}wr=0,be=Yt=Ct=null,Oa=!1,tl=Bu=0,Ma=null}function cn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?Ct.memoizedState=be=e:be=be.next=e,be}function Se(){if(Yt===null){var e=Ct.alternate;e=e!==null?e.memoizedState:null}else e=Yt.next;var i=be===null?Ct.memoizedState:be.next;if(i!==null)be=i,Yt=e;else{if(e===null)throw Ct.alternate===null?Error(s(467)):Error(s(310));Yt=e,e={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},be===null?Ct.memoizedState=be=e:be=be.next=e}return be}function Df(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function el(e){var i=tl;return tl+=1,Ma===null&&(Ma=[]),e=hp(Ma,e,i),i=Ct,(be===null?i.memoizedState:be.next)===null&&(i=i.alternate,F.H=i===null||i.memoizedState===null?Wp:ty),e}function qu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return el(e);if(e.$$typeof===ht)return Ze(e)}throw Error(s(438,String(e)))}function Nf(e){var i=null,a=Ct.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=Ct.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Df(),Ct.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(e),l=0;l<e;l++)a[l]=V;return i.index++,a}function Fi(e,i){return typeof i=="function"?i(e):i}function Hu(e){var i=Se();return Of(i,Yt,e)}function Of(e,i,a){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=e.baseQueue,d=l.pending;if(d!==null){if(h!==null){var v=h.next;h.next=d.next,d.next=v}i.baseQueue=h=d,l.pending=null}if(d=e.baseState,h===null)e.memoizedState=d;else{i=h.next;var T=v=null,w=null,L=i,G=!1;do{var Y=L.lane&-536870913;if(Y!==L.lane?(Ut&Y)===Y:(wr&Y)===Y){var z=L.revertLane;if(z===0)w!==null&&(w=w.next={lane:0,revertLane:0,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),Y===Ca&&(G=!0);else if((wr&z)===z){L=L.next,z===Ca&&(G=!0);continue}else Y={lane:0,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},w===null?(T=w=Y,v=d):w=w.next=Y,Ct.lanes|=z,Mr|=z;Y=L.action,qs&&a(d,Y),d=L.hasEagerState?L.eagerState:a(d,Y)}else z={lane:Y,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},w===null?(T=w=z,v=d):w=w.next=z,Ct.lanes|=Y,Mr|=Y;L=L.next}while(L!==null&&L!==i);if(w===null?v=d:w.next=T,!vn(d,e.memoizedState)&&(Pe=!0,G&&(a=Da,a!==null)))throw a;e.memoizedState=d,e.baseState=v,e.baseQueue=w,l.lastRenderedState=d}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Mf(e){var i=Se(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var l=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var v=h=h.next;do d=e(d,v.action),v=v.next;while(v!==h);vn(d,i.memoizedState)||(Pe=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function vp(e,i,a){var l=Ct,h=Se(),d=qt;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var v=!vn((Yt||h).memoizedState,a);v&&(h.memoizedState=a,Pe=!0),h=h.queue;var T=Ap.bind(null,l,h,e);if(nl(2048,8,T,[e]),h.getSnapshot!==i||v||be!==null&&be.memoizedState.tag&1){if(l.flags|=2048,Va(9,Fu(),Ep.bind(null,l,h,a,i),null),ee===null)throw Error(s(349));d||(wr&124)!==0||Tp(l,i,a)}return a}function Tp(e,i,a){e.flags|=16384,e={getSnapshot:i,value:a},i=Ct.updateQueue,i===null?(i=Df(),Ct.updateQueue=i,i.stores=[e]):(a=i.stores,a===null?i.stores=[e]:a.push(e))}function Ep(e,i,a,l){i.value=a,i.getSnapshot=l,bp(i)&&Sp(e)}function Ap(e,i,a){return a(function(){bp(i)&&Sp(e)})}function bp(e){var i=e.getSnapshot;e=e.value;try{var a=i();return!vn(e,a)}catch{return!0}}function Sp(e){var i=Sa(e,2);i!==null&&wn(i,e,2)}function Vf(e){var i=cn();if(typeof e=="function"){var a=e;if(e=a(),qs){Nn(!0);try{a()}finally{Nn(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:e},i}function wp(e,i,a,l){return e.baseState=a,Of(e,Yt,typeof l=="function"?l:Fi)}function rb(e,i,a,l,h){if(Qu(e))throw Error(s(485));if(e=i.action,e!==null){var d={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};F.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,Rp(i,d)):(d.next=a.next,i.pending=a.next=d)}}function Rp(e,i){var a=i.action,l=i.payload,h=e.state;if(i.isTransition){var d=F.T,v={};F.T=v;try{var T=a(h,l),w=F.S;w!==null&&w(v,T),Ip(e,i,T)}catch(L){xf(e,i,L)}finally{F.T=d}}else try{d=a(h,l),Ip(e,i,d)}catch(L){xf(e,i,L)}}function Ip(e,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Cp(e,i,l)},function(l){return xf(e,i,l)}):Cp(e,i,a)}function Cp(e,i,a){i.status="fulfilled",i.value=a,Dp(i),e.state=a,i=e.pending,i!==null&&(a=i.next,a===i?e.pending=null:(a=a.next,i.next=a,Rp(e,a)))}function xf(e,i,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,Dp(i),i=i.next;while(i!==l)}e.action=null}function Dp(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Np(e,i){return i}function Op(e,i){if(qt){var a=ee.formState;if(a!==null){t:{var l=Ct;if(qt){if(he){e:{for(var h=he,d=pi;h.nodeType!==8;){if(!d){h=null;break e}if(h=Wn(h.nextSibling),h===null){h=null;break e}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){he=Wn(h.nextSibling),l=h.data==="F!";break t}}Ls(l)}l=!1}l&&(i=a[0])}}return a=cn(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Np,lastRenderedState:i},a.queue=l,a=$p.bind(null,Ct,l),l.dispatch=a,l=Vf(!1),d=zf.bind(null,Ct,!1,l.queue),l=cn(),h={state:i,dispatch:null,action:e,pending:null},l.queue=h,a=rb.bind(null,Ct,h,d,a),h.dispatch=a,l.memoizedState=e,[i,a,!1]}function Mp(e){var i=Se();return Vp(i,Yt,e)}function Vp(e,i,a){if(i=Of(e,i,Np)[0],e=Hu(Fi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=el(i)}catch(v){throw v===Xo?Uu:v}else l=i;i=Se();var h=i.queue,d=h.dispatch;return a!==i.memoizedState&&(Ct.flags|=2048,Va(9,Fu(),sb.bind(null,h,a),null)),[l,d,e]}function sb(e,i){e.action=i}function xp(e){var i=Se(),a=Yt;if(a!==null)return Vp(i,a,e);Se(),i=i.memoizedState,a=Se();var l=a.queue.dispatch;return a.memoizedState=e,[i,l,!1]}function Va(e,i,a,l){return e={tag:e,create:a,deps:l,inst:i,next:null},i=Ct.updateQueue,i===null&&(i=Df(),Ct.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,i.lastEffect=e),e}function Fu(){return{destroy:void 0,resource:void 0}}function Pp(){return Se().memoizedState}function Gu(e,i,a,l){var h=cn();l=l===void 0?null:l,Ct.flags|=e,h.memoizedState=Va(1|i,Fu(),a,l)}function nl(e,i,a,l){var h=Se();l=l===void 0?null:l;var d=h.memoizedState.inst;Yt!==null&&l!==null&&Sf(l,Yt.memoizedState.deps)?h.memoizedState=Va(i,d,a,l):(Ct.flags|=e,h.memoizedState=Va(1|i,d,a,l))}function kp(e,i){Gu(8390656,8,e,i)}function Up(e,i){nl(2048,8,e,i)}function Lp(e,i){return nl(4,2,e,i)}function zp(e,i){return nl(4,4,e,i)}function jp(e,i){if(typeof i=="function"){e=e();var a=i(e);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Bp(e,i,a){a=a!=null?a.concat([e]):null,nl(4,4,jp.bind(null,i,e),a)}function Pf(){}function qp(e,i){var a=Se();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&Sf(i,l[1])?l[0]:(a.memoizedState=[e,i],e)}function Hp(e,i){var a=Se();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&Sf(i,l[1]))return l[0];if(l=e(),qs){Nn(!0);try{e()}finally{Nn(!1)}}return a.memoizedState=[l,i],l}function kf(e,i,a){return a===void 0||(wr&1073741824)!==0?e.memoizedState=i:(e.memoizedState=a,e=Qy(),Ct.lanes|=e,Mr|=e,a)}function Fp(e,i,a,l){return vn(a,i)?a:Na.current!==null?(e=kf(e,a,l),vn(e,i)||(Pe=!0),e):(wr&42)===0?(Pe=!0,e.memoizedState=a):(e=Qy(),Ct.lanes|=e,Mr|=e,i)}function Gp(e,i,a,l,h){var d=nt.p;nt.p=d!==0&&8>d?d:8;var v=F.T,T={};F.T=T,zf(e,!1,i,a);try{var w=h(),L=F.S;if(L!==null&&L(T,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var G=eb(w,l);il(e,i,G,Sn(e))}else il(e,i,l,Sn(e))}catch(Y){il(e,i,{then:function(){},status:"rejected",reason:Y},Sn())}finally{nt.p=d,F.T=v}}function ab(){}function Uf(e,i,a,l){if(e.tag!==5)throw Error(s(476));var h=Qp(e).queue;Gp(e,h,i,ft,a===null?ab:function(){return Kp(e),a(l)})}function Qp(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:ft,baseState:ft,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:ft},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:a},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Kp(e){var i=Qp(e).next.queue;il(e,i,{},Sn())}function Lf(){return Ze(El)}function Yp(){return Se().memoizedState}function Xp(){return Se().memoizedState}function ob(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var a=Sn();e=br(a);var l=Sr(i,e,a);l!==null&&(wn(l,i,a),Zo(l,i,a)),i={cache:mf()},e.payload=i;return}i=i.return}}function lb(e,i,a){var l=Sn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Qu(e)?Zp(i,a):(a=rf(e,i,a,l),a!==null&&(wn(a,e,l),Jp(a,i,l)))}function $p(e,i,a){var l=Sn();il(e,i,a,l)}function il(e,i,a,l){var h={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Qu(e))Zp(i,h);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var v=i.lastRenderedState,T=d(v,a);if(h.hasEagerState=!0,h.eagerState=T,vn(T,v))return Du(e,i,h,0),ee===null&&Cu(),!1}catch{}finally{}if(a=rf(e,i,h,l),a!==null)return wn(a,e,l),Jp(a,i,l),!0}return!1}function zf(e,i,a,l){if(l={lane:2,revertLane:yd(),action:l,hasEagerState:!1,eagerState:null,next:null},Qu(e)){if(i)throw Error(s(479))}else i=rf(e,a,l,2),i!==null&&wn(i,e,2)}function Qu(e){var i=e.alternate;return e===Ct||i!==null&&i===Ct}function Zp(e,i){Oa=ju=!0;var a=e.pending;a===null?i.next=i:(i.next=a.next,a.next=i),e.pending=i}function Jp(e,i,a){if((a&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,cr(e,a)}}var Ku={readContext:Ze,use:qu,useCallback:ve,useContext:ve,useEffect:ve,useImperativeHandle:ve,useLayoutEffect:ve,useInsertionEffect:ve,useMemo:ve,useReducer:ve,useRef:ve,useState:ve,useDebugValue:ve,useDeferredValue:ve,useTransition:ve,useSyncExternalStore:ve,useId:ve,useHostTransitionStatus:ve,useFormState:ve,useActionState:ve,useOptimistic:ve,useMemoCache:ve,useCacheRefresh:ve},Wp={readContext:Ze,use:qu,useCallback:function(e,i){return cn().memoizedState=[e,i===void 0?null:i],e},useContext:Ze,useEffect:kp,useImperativeHandle:function(e,i,a){a=a!=null?a.concat([e]):null,Gu(4194308,4,jp.bind(null,i,e),a)},useLayoutEffect:function(e,i){return Gu(4194308,4,e,i)},useInsertionEffect:function(e,i){Gu(4,2,e,i)},useMemo:function(e,i){var a=cn();i=i===void 0?null:i;var l=e();if(qs){Nn(!0);try{e()}finally{Nn(!1)}}return a.memoizedState=[l,i],l},useReducer:function(e,i,a){var l=cn();if(a!==void 0){var h=a(i);if(qs){Nn(!0);try{a(i)}finally{Nn(!1)}}}else h=i;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=lb.bind(null,Ct,e),[l.memoizedState,e]},useRef:function(e){var i=cn();return e={current:e},i.memoizedState=e},useState:function(e){e=Vf(e);var i=e.queue,a=$p.bind(null,Ct,i);return i.dispatch=a,[e.memoizedState,a]},useDebugValue:Pf,useDeferredValue:function(e,i){var a=cn();return kf(a,e,i)},useTransition:function(){var e=Vf(!1);return e=Gp.bind(null,Ct,e.queue,!0,!1),cn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,a){var l=Ct,h=cn();if(qt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),ee===null)throw Error(s(349));(Ut&124)!==0||Tp(l,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,kp(Ap.bind(null,l,d,e),[e]),l.flags|=2048,Va(9,Fu(),Ep.bind(null,l,d,a,i),null),a},useId:function(){var e=cn(),i=ee.identifierPrefix;if(qt){var a=Bi,l=ji;a=(l&~(1<<32-rn(l)-1)).toString(32)+a,i="«"+i+"R"+a,a=Bu++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=nb++,i="«"+i+"r"+a.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:Lf,useFormState:Op,useActionState:Op,useOptimistic:function(e){var i=cn();i.memoizedState=i.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=zf.bind(null,Ct,!0,a),a.dispatch=i,[e,i]},useMemoCache:Nf,useCacheRefresh:function(){return cn().memoizedState=ob.bind(null,Ct)}},ty={readContext:Ze,use:qu,useCallback:qp,useContext:Ze,useEffect:Up,useImperativeHandle:Bp,useInsertionEffect:Lp,useLayoutEffect:zp,useMemo:Hp,useReducer:Hu,useRef:Pp,useState:function(){return Hu(Fi)},useDebugValue:Pf,useDeferredValue:function(e,i){var a=Se();return Fp(a,Yt.memoizedState,e,i)},useTransition:function(){var e=Hu(Fi)[0],i=Se().memoizedState;return[typeof e=="boolean"?e:el(e),i]},useSyncExternalStore:vp,useId:Yp,useHostTransitionStatus:Lf,useFormState:Mp,useActionState:Mp,useOptimistic:function(e,i){var a=Se();return wp(a,Yt,e,i)},useMemoCache:Nf,useCacheRefresh:Xp},ub={readContext:Ze,use:qu,useCallback:qp,useContext:Ze,useEffect:Up,useImperativeHandle:Bp,useInsertionEffect:Lp,useLayoutEffect:zp,useMemo:Hp,useReducer:Mf,useRef:Pp,useState:function(){return Mf(Fi)},useDebugValue:Pf,useDeferredValue:function(e,i){var a=Se();return Yt===null?kf(a,e,i):Fp(a,Yt.memoizedState,e,i)},useTransition:function(){var e=Mf(Fi)[0],i=Se().memoizedState;return[typeof e=="boolean"?e:el(e),i]},useSyncExternalStore:vp,useId:Yp,useHostTransitionStatus:Lf,useFormState:xp,useActionState:xp,useOptimistic:function(e,i){var a=Se();return Yt!==null?wp(a,Yt,e,i):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Nf,useCacheRefresh:Xp},xa=null,rl=0;function Yu(e){var i=rl;return rl+=1,xa===null&&(xa=[]),hp(xa,e,i)}function sl(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Xu(e,i){throw i.$$typeof===S?Error(s(525)):(e=Object.prototype.toString.call(i),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function ey(e){var i=e._init;return i(e._payload)}function ny(e){function i(x,M){if(e){var k=x.deletions;k===null?(x.deletions=[M],x.flags|=16):k.push(M)}}function a(x,M){if(!e)return null;for(;M!==null;)i(x,M),M=M.sibling;return null}function l(x){for(var M=new Map;x!==null;)x.key!==null?M.set(x.key,x):M.set(x.index,x),x=x.sibling;return M}function h(x,M){return x=zi(x,M),x.index=0,x.sibling=null,x}function d(x,M,k){return x.index=k,e?(k=x.alternate,k!==null?(k=k.index,k<M?(x.flags|=67108866,M):k):(x.flags|=67108866,M)):(x.flags|=1048576,M)}function v(x){return e&&x.alternate===null&&(x.flags|=67108866),x}function T(x,M,k,K){return M===null||M.tag!==6?(M=af(k,x.mode,K),M.return=x,M):(M=h(M,k),M.return=x,M)}function w(x,M,k,K){var ut=k.type;return ut===J?G(x,M,k.props.children,K,k.key):M!==null&&(M.elementType===ut||typeof ut=="object"&&ut!==null&&ut.$$typeof===b&&ey(ut)===M.type)?(M=h(M,k.props),sl(M,k),M.return=x,M):(M=Ou(k.type,k.key,k.props,null,x.mode,K),sl(M,k),M.return=x,M)}function L(x,M,k,K){return M===null||M.tag!==4||M.stateNode.containerInfo!==k.containerInfo||M.stateNode.implementation!==k.implementation?(M=of(k,x.mode,K),M.return=x,M):(M=h(M,k.children||[]),M.return=x,M)}function G(x,M,k,K,ut){return M===null||M.tag!==7?(M=xs(k,x.mode,K,ut),M.return=x,M):(M=h(M,k),M.return=x,M)}function Y(x,M,k){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=af(""+M,x.mode,k),M.return=x,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case C:return k=Ou(M.type,M.key,M.props,null,x.mode,k),sl(k,M),k.return=x,k;case H:return M=of(M,x.mode,k),M.return=x,M;case b:var K=M._init;return M=K(M._payload),Y(x,M,k)}if(Jt(M)||P(M))return M=xs(M,x.mode,k,null),M.return=x,M;if(typeof M.then=="function")return Y(x,Yu(M),k);if(M.$$typeof===ht)return Y(x,Pu(x,M),k);Xu(x,M)}return null}function z(x,M,k,K){var ut=M!==null?M.key:null;if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return ut!==null?null:T(x,M,""+k,K);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case C:return k.key===ut?w(x,M,k,K):null;case H:return k.key===ut?L(x,M,k,K):null;case b:return ut=k._init,k=ut(k._payload),z(x,M,k,K)}if(Jt(k)||P(k))return ut!==null?null:G(x,M,k,K,null);if(typeof k.then=="function")return z(x,M,Yu(k),K);if(k.$$typeof===ht)return z(x,M,Pu(x,k),K);Xu(x,k)}return null}function j(x,M,k,K,ut){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return x=x.get(k)||null,T(M,x,""+K,ut);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case C:return x=x.get(K.key===null?k:K.key)||null,w(M,x,K,ut);case H:return x=x.get(K.key===null?k:K.key)||null,L(M,x,K,ut);case b:var Nt=K._init;return K=Nt(K._payload),j(x,M,k,K,ut)}if(Jt(K)||P(K))return x=x.get(k)||null,G(M,x,K,ut,null);if(typeof K.then=="function")return j(x,M,k,Yu(K),ut);if(K.$$typeof===ht)return j(x,M,k,Pu(M,K),ut);Xu(M,K)}return null}function Et(x,M,k,K){for(var ut=null,Nt=null,dt=M,vt=M=0,Ue=null;dt!==null&&vt<k.length;vt++){dt.index>vt?(Ue=dt,dt=null):Ue=dt.sibling;var Bt=z(x,dt,k[vt],K);if(Bt===null){dt===null&&(dt=Ue);break}e&&dt&&Bt.alternate===null&&i(x,dt),M=d(Bt,M,vt),Nt===null?ut=Bt:Nt.sibling=Bt,Nt=Bt,dt=Ue}if(vt===k.length)return a(x,dt),qt&&ks(x,vt),ut;if(dt===null){for(;vt<k.length;vt++)dt=Y(x,k[vt],K),dt!==null&&(M=d(dt,M,vt),Nt===null?ut=dt:Nt.sibling=dt,Nt=dt);return qt&&ks(x,vt),ut}for(dt=l(dt);vt<k.length;vt++)Ue=j(dt,x,vt,k[vt],K),Ue!==null&&(e&&Ue.alternate!==null&&dt.delete(Ue.key===null?vt:Ue.key),M=d(Ue,M,vt),Nt===null?ut=Ue:Nt.sibling=Ue,Nt=Ue);return e&&dt.forEach(function(Br){return i(x,Br)}),qt&&ks(x,vt),ut}function _t(x,M,k,K){if(k==null)throw Error(s(151));for(var ut=null,Nt=null,dt=M,vt=M=0,Ue=null,Bt=k.next();dt!==null&&!Bt.done;vt++,Bt=k.next()){dt.index>vt?(Ue=dt,dt=null):Ue=dt.sibling;var Br=z(x,dt,Bt.value,K);if(Br===null){dt===null&&(dt=Ue);break}e&&dt&&Br.alternate===null&&i(x,dt),M=d(Br,M,vt),Nt===null?ut=Br:Nt.sibling=Br,Nt=Br,dt=Ue}if(Bt.done)return a(x,dt),qt&&ks(x,vt),ut;if(dt===null){for(;!Bt.done;vt++,Bt=k.next())Bt=Y(x,Bt.value,K),Bt!==null&&(M=d(Bt,M,vt),Nt===null?ut=Bt:Nt.sibling=Bt,Nt=Bt);return qt&&ks(x,vt),ut}for(dt=l(dt);!Bt.done;vt++,Bt=k.next())Bt=j(dt,x,vt,Bt.value,K),Bt!==null&&(e&&Bt.alternate!==null&&dt.delete(Bt.key===null?vt:Bt.key),M=d(Bt,M,vt),Nt===null?ut=Bt:Nt.sibling=Bt,Nt=Bt);return e&&dt.forEach(function(c1){return i(x,c1)}),qt&&ks(x,vt),ut}function $t(x,M,k,K){if(typeof k=="object"&&k!==null&&k.type===J&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case C:t:{for(var ut=k.key;M!==null;){if(M.key===ut){if(ut=k.type,ut===J){if(M.tag===7){a(x,M.sibling),K=h(M,k.props.children),K.return=x,x=K;break t}}else if(M.elementType===ut||typeof ut=="object"&&ut!==null&&ut.$$typeof===b&&ey(ut)===M.type){a(x,M.sibling),K=h(M,k.props),sl(K,k),K.return=x,x=K;break t}a(x,M);break}else i(x,M);M=M.sibling}k.type===J?(K=xs(k.props.children,x.mode,K,k.key),K.return=x,x=K):(K=Ou(k.type,k.key,k.props,null,x.mode,K),sl(K,k),K.return=x,x=K)}return v(x);case H:t:{for(ut=k.key;M!==null;){if(M.key===ut)if(M.tag===4&&M.stateNode.containerInfo===k.containerInfo&&M.stateNode.implementation===k.implementation){a(x,M.sibling),K=h(M,k.children||[]),K.return=x,x=K;break t}else{a(x,M);break}else i(x,M);M=M.sibling}K=of(k,x.mode,K),K.return=x,x=K}return v(x);case b:return ut=k._init,k=ut(k._payload),$t(x,M,k,K)}if(Jt(k))return Et(x,M,k,K);if(P(k)){if(ut=P(k),typeof ut!="function")throw Error(s(150));return k=ut.call(k),_t(x,M,k,K)}if(typeof k.then=="function")return $t(x,M,Yu(k),K);if(k.$$typeof===ht)return $t(x,M,Pu(x,k),K);Xu(x,k)}return typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint"?(k=""+k,M!==null&&M.tag===6?(a(x,M.sibling),K=h(M,k),K.return=x,x=K):(a(x,M),K=af(k,x.mode,K),K.return=x,x=K),v(x)):a(x,M)}return function(x,M,k,K){try{rl=0;var ut=$t(x,M,k,K);return xa=null,ut}catch(dt){if(dt===Xo||dt===Uu)throw dt;var Nt=Tn(29,dt,null,x.mode);return Nt.lanes=K,Nt.return=x,Nt}finally{}}}var Pa=ny(!0),iy=ny(!1),zn=Z(null),yi=null;function Rr(e){var i=e.alternate;rt(Ne,Ne.current&1),rt(zn,e),yi===null&&(i===null||Na.current!==null||i.memoizedState!==null)&&(yi=e)}function ry(e){if(e.tag===22){if(rt(Ne,Ne.current),rt(zn,e),yi===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(yi=e)}}else Ir()}function Ir(){rt(Ne,Ne.current),rt(zn,zn.current)}function Gi(e){at(zn),yi===e&&(yi=null),at(Ne)}var Ne=Z(0);function $u(e){for(var i=e;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Dd(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function jf(e,i,a,l){i=e.memoizedState,a=a(l,i),a=a==null?i:E({},i,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Bf={enqueueSetState:function(e,i,a){e=e._reactInternals;var l=Sn(),h=br(l);h.payload=i,a!=null&&(h.callback=a),i=Sr(e,h,l),i!==null&&(wn(i,e,l),Zo(i,e,l))},enqueueReplaceState:function(e,i,a){e=e._reactInternals;var l=Sn(),h=br(l);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=Sr(e,h,l),i!==null&&(wn(i,e,l),Zo(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var a=Sn(),l=br(a);l.tag=2,i!=null&&(l.callback=i),i=Sr(e,l,a),i!==null&&(wn(i,e,a),Zo(i,e,a))}};function sy(e,i,a,l,h,d,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,v):i.prototype&&i.prototype.isPureReactComponent?!Bo(a,l)||!Bo(h,d):!0}function ay(e,i,a,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==e&&Bf.enqueueReplaceState(i,i.state,null)}function Hs(e,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(e=e.defaultProps){a===i&&(a=E({},a));for(var h in e)a[h]===void 0&&(a[h]=e[h])}return a}var Zu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function oy(e){Zu(e)}function ly(e){console.error(e)}function uy(e){Zu(e)}function Ju(e,i){try{var a=e.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function cy(e,i,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function qf(e,i,a){return a=br(a),a.tag=3,a.payload={element:null},a.callback=function(){Ju(e,i)},a}function hy(e){return e=br(e),e.tag=3,e}function fy(e,i,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;e.payload=function(){return h(d)},e.callback=function(){cy(i,a,l)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){cy(i,a,l),typeof h!="function"&&(Vr===null?Vr=new Set([this]):Vr.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function cb(e,i,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&Qo(i,a,h,!0),a=zn.current,a!==null){switch(a.tag){case 13:return yi===null?fd():a.alternate===null&&fe===0&&(fe=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===yf?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),md(e,l,h)),!1;case 22:return a.flags|=65536,l===yf?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),md(e,l,h)),!1}throw Error(s(435,a.tag))}return md(e,l,h),fd(),!1}if(qt)return i=zn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==cf&&(e=Error(s(422),{cause:l}),Go(Pn(e,a)))):(l!==cf&&(i=Error(s(423),{cause:l}),Go(Pn(i,a))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=Pn(l,a),h=qf(e.stateNode,l,h),Tf(e,h),fe!==4&&(fe=2)),!1;var d=Error(s(520),{cause:l});if(d=Pn(d,a),fl===null?fl=[d]:fl.push(d),fe!==4&&(fe=2),i===null)return!0;l=Pn(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,e=h&-h,a.lanes|=e,e=qf(a.stateNode,l,e),Tf(a,e),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Vr===null||!Vr.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=hy(h),fy(h,e,a,l),Tf(a,h),!1}a=a.return}while(a!==null);return!1}var dy=Error(s(461)),Pe=!1;function Be(e,i,a,l){i.child=e===null?iy(i,null,a,l):Pa(i,e.child,a,l)}function my(e,i,a,l,h){a=a.render;var d=i.ref;if("ref"in l){var v={};for(var T in l)T!=="ref"&&(v[T]=l[T])}else v=l;return js(i),l=wf(e,i,a,v,d,h),T=Rf(),e!==null&&!Pe?(If(e,i,h),Qi(e,i,h)):(qt&&T&&lf(i),i.flags|=1,Be(e,i,l,h),i.child)}function gy(e,i,a,l,h){if(e===null){var d=a.type;return typeof d=="function"&&!sf(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,py(e,i,d,l,h)):(e=Ou(a.type,null,l,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!$f(e,h)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:Bo,a(v,l)&&e.ref===i.ref)return Qi(e,i,h)}return i.flags|=1,e=zi(d,l),e.ref=i.ref,e.return=i,i.child=e}function py(e,i,a,l,h){if(e!==null){var d=e.memoizedProps;if(Bo(d,l)&&e.ref===i.ref)if(Pe=!1,i.pendingProps=l=d,$f(e,h))(e.flags&131072)!==0&&(Pe=!0);else return i.lanes=e.lanes,Qi(e,i,h)}return Hf(e,i,a,l,h)}function yy(e,i,a){var l=i.pendingProps,h=l.children,d=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=d!==null?d.baseLanes|a:a,e!==null){for(h=i.child=e.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return _y(e,i,l,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&ku(i,d!==null?d.cachePool:null),d!==null?pp(i,d):Af(),ry(i);else return i.lanes=i.childLanes=536870912,_y(e,i,d!==null?d.baseLanes|a:a,a)}else d!==null?(ku(i,d.cachePool),pp(i,d),Ir(),i.memoizedState=null):(e!==null&&ku(i,null),Af(),Ir());return Be(e,i,h,a),i.child}function _y(e,i,a,l){var h=pf();return h=h===null?null:{parent:De._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},e!==null&&ku(i,null),Af(),ry(i),e!==null&&Qo(e,i,l,!0),null}function Wu(e,i){var a=i.ref;if(a===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(i.flags|=4194816)}}function Hf(e,i,a,l,h){return js(i),a=wf(e,i,a,l,void 0,h),l=Rf(),e!==null&&!Pe?(If(e,i,h),Qi(e,i,h)):(qt&&l&&lf(i),i.flags|=1,Be(e,i,a,h),i.child)}function vy(e,i,a,l,h,d){return js(i),i.updateQueue=null,a=_p(i,l,a,h),yp(e),l=Rf(),e!==null&&!Pe?(If(e,i,d),Qi(e,i,d)):(qt&&l&&lf(i),i.flags|=1,Be(e,i,a,d),i.child)}function Ty(e,i,a,l,h){if(js(i),i.stateNode===null){var d=wa,v=a.contextType;typeof v=="object"&&v!==null&&(d=Ze(v)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Bf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},_f(i),v=a.contextType,d.context=typeof v=="object"&&v!==null?Ze(v):wa,d.state=i.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(jf(i,a,v,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&Bf.enqueueReplaceState(d,d.state,null),Wo(i,l,d,h),Jo(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){d=i.stateNode;var T=i.memoizedProps,w=Hs(a,T);d.props=w;var L=d.context,G=a.contextType;v=wa,typeof G=="object"&&G!==null&&(v=Ze(G));var Y=a.getDerivedStateFromProps;G=typeof Y=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,G||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||L!==v)&&ay(i,d,l,v),Ar=!1;var z=i.memoizedState;d.state=z,Wo(i,l,d,h),Jo(),L=i.memoizedState,T||z!==L||Ar?(typeof Y=="function"&&(jf(i,a,Y,l),L=i.memoizedState),(w=Ar||sy(i,a,w,l,z,L,v))?(G||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=L),d.props=l,d.state=L,d.context=v,l=w):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,vf(e,i),v=i.memoizedProps,G=Hs(a,v),d.props=G,Y=i.pendingProps,z=d.context,L=a.contextType,w=wa,typeof L=="object"&&L!==null&&(w=Ze(L)),T=a.getDerivedStateFromProps,(L=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==Y||z!==w)&&ay(i,d,l,w),Ar=!1,z=i.memoizedState,d.state=z,Wo(i,l,d,h),Jo();var j=i.memoizedState;v!==Y||z!==j||Ar||e!==null&&e.dependencies!==null&&xu(e.dependencies)?(typeof T=="function"&&(jf(i,a,T,l),j=i.memoizedState),(G=Ar||sy(i,a,G,l,z,j,w)||e!==null&&e.dependencies!==null&&xu(e.dependencies))?(L||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,j,w),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,j,w)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=j),d.props=l,d.state=j,d.context=w,l=G):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),l=!1)}return d=l,Wu(e,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&l?(i.child=Pa(i,e.child,null,h),i.child=Pa(i,null,a,h)):Be(e,i,a,h),i.memoizedState=d.state,e=i.child):e=Qi(e,i,h),e}function Ey(e,i,a,l){return Fo(),i.flags|=256,Be(e,i,a,l),i.child}var Ff={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Gf(e){return{baseLanes:e,cachePool:lp()}}function Qf(e,i,a){return e=e!==null?e.childLanes&~a:0,i&&(e|=jn),e}function Ay(e,i,a){var l=i.pendingProps,h=!1,d=(i.flags&128)!==0,v;if((v=d)||(v=e!==null&&e.memoizedState===null?!1:(Ne.current&2)!==0),v&&(h=!0,i.flags&=-129),v=(i.flags&32)!==0,i.flags&=-33,e===null){if(qt){if(h?Rr(i):Ir(),qt){var T=he,w;if(w=T){t:{for(w=T,T=pi;w.nodeType!==8;){if(!T){T=null;break t}if(w=Wn(w.nextSibling),w===null){T=null;break t}}T=w}T!==null?(i.memoizedState={dehydrated:T,treeContext:Ps!==null?{id:ji,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},w=Tn(18,null,null,0),w.stateNode=T,w.return=i,i.child=w,ln=i,he=null,w=!0):w=!1}w||Ls(i)}if(T=i.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Dd(T)?i.lanes=32:i.lanes=536870912,null;Gi(i)}return T=l.children,l=l.fallback,h?(Ir(),h=i.mode,T=tc({mode:"hidden",children:T},h),l=xs(l,h,a,null),T.return=i,l.return=i,T.sibling=l,i.child=T,h=i.child,h.memoizedState=Gf(a),h.childLanes=Qf(e,v,a),i.memoizedState=Ff,l):(Rr(i),Kf(i,T))}if(w=e.memoizedState,w!==null&&(T=w.dehydrated,T!==null)){if(d)i.flags&256?(Rr(i),i.flags&=-257,i=Yf(e,i,a)):i.memoizedState!==null?(Ir(),i.child=e.child,i.flags|=128,i=null):(Ir(),h=l.fallback,T=i.mode,l=tc({mode:"visible",children:l.children},T),h=xs(h,T,a,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,Pa(i,e.child,null,a),l=i.child,l.memoizedState=Gf(a),l.childLanes=Qf(e,v,a),i.memoizedState=Ff,i=h);else if(Rr(i),Dd(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var L=v.dgst;v=L,l=Error(s(419)),l.stack="",l.digest=v,Go({value:l,source:null,stack:null}),i=Yf(e,i,a)}else if(Pe||Qo(e,i,a,!1),v=(a&e.childLanes)!==0,Pe||v){if(v=ee,v!==null&&(l=a&-a,l=(l&42)!==0?1:So(l),l=(l&(v.suspendedLanes|a))!==0?0:l,l!==0&&l!==w.retryLane))throw w.retryLane=l,Sa(e,l),wn(v,e,l),dy;T.data==="$?"||fd(),i=Yf(e,i,a)}else T.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=w.treeContext,he=Wn(T.nextSibling),ln=i,qt=!0,Us=null,pi=!1,e!==null&&(Un[Ln++]=ji,Un[Ln++]=Bi,Un[Ln++]=Ps,ji=e.id,Bi=e.overflow,Ps=i),i=Kf(i,l.children),i.flags|=4096);return i}return h?(Ir(),h=l.fallback,T=i.mode,w=e.child,L=w.sibling,l=zi(w,{mode:"hidden",children:l.children}),l.subtreeFlags=w.subtreeFlags&65011712,L!==null?h=zi(L,h):(h=xs(h,T,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,T=e.child.memoizedState,T===null?T=Gf(a):(w=T.cachePool,w!==null?(L=De._currentValue,w=w.parent!==L?{parent:L,pool:L}:w):w=lp(),T={baseLanes:T.baseLanes|a,cachePool:w}),h.memoizedState=T,h.childLanes=Qf(e,v,a),i.memoizedState=Ff,l):(Rr(i),a=e.child,e=a.sibling,a=zi(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,e!==null&&(v=i.deletions,v===null?(i.deletions=[e],i.flags|=16):v.push(e)),i.child=a,i.memoizedState=null,a)}function Kf(e,i){return i=tc({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function tc(e,i){return e=Tn(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Yf(e,i,a){return Pa(i,e.child,null,a),e=Kf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function by(e,i,a){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),ff(e.return,i,a)}function Xf(e,i,a,l,h){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=h)}function Sy(e,i,a){var l=i.pendingProps,h=l.revealOrder,d=l.tail;if(Be(e,i,l.children,a),l=Ne.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&by(e,a,i);else if(e.tag===19)by(e,a,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(rt(Ne,l),h){case"forwards":for(a=i.child,h=null;a!==null;)e=a.alternate,e!==null&&$u(e)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Xf(i,!1,h,a,d);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&$u(e)===null){i.child=h;break}e=h.sibling,h.sibling=a,a=h,h=e}Xf(i,!0,a,null,d);break;case"together":Xf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Qi(e,i,a){if(e!==null&&(i.dependencies=e.dependencies),Mr|=i.lanes,(a&i.childLanes)===0)if(e!==null){if(Qo(e,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(s(153));if(i.child!==null){for(e=i.child,a=zi(e,e.pendingProps),i.child=a,a.return=i;e.sibling!==null;)e=e.sibling,a=a.sibling=zi(e,e.pendingProps),a.return=i;a.sibling=null}return i.child}function $f(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&xu(e)))}function hb(e,i,a){switch(i.tag){case 3:ct(i,i.stateNode.containerInfo),Er(i,De,e.memoizedState.cache),Fo();break;case 27:case 5:pn(i);break;case 4:ct(i,i.stateNode.containerInfo);break;case 10:Er(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Rr(i),i.flags|=128,null):(a&i.child.childLanes)!==0?Ay(e,i,a):(Rr(i),e=Qi(e,i,a),e!==null?e.sibling:null);Rr(i);break;case 19:var h=(e.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(Qo(e,i,a,!1),l=(a&i.childLanes)!==0),h){if(l)return Sy(e,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),rt(Ne,Ne.current),l)break;return null;case 22:case 23:return i.lanes=0,yy(e,i,a);case 24:Er(i,De,e.memoizedState.cache)}return Qi(e,i,a)}function wy(e,i,a){if(e!==null)if(e.memoizedProps!==i.pendingProps)Pe=!0;else{if(!$f(e,a)&&(i.flags&128)===0)return Pe=!1,hb(e,i,a);Pe=(e.flags&131072)!==0}else Pe=!1,qt&&(i.flags&1048576)!==0&&ep(i,Vu,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var l=i.elementType,h=l._init;if(l=h(l._payload),i.type=l,typeof l=="function")sf(l)?(e=Hs(l,e),i.tag=1,i=Ty(null,i,l,e,a)):(i.tag=0,i=Hf(null,i,l,e,a));else{if(l!=null){if(h=l.$$typeof,h===jt){i.tag=11,i=my(null,i,l,e,a);break t}else if(h===O){i.tag=14,i=gy(null,i,l,e,a);break t}}throw i=ae(l)||l,Error(s(306,i,""))}}return i;case 0:return Hf(e,i,i.type,i.pendingProps,a);case 1:return l=i.type,h=Hs(l,i.pendingProps),Ty(e,i,l,h,a);case 3:t:{if(ct(i,i.stateNode.containerInfo),e===null)throw Error(s(387));l=i.pendingProps;var d=i.memoizedState;h=d.element,vf(e,i),Wo(i,l,null,a);var v=i.memoizedState;if(l=v.cache,Er(i,De,l),l!==d.cache&&df(i,[De],a,!0),Jo(),l=v.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:v.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=Ey(e,i,l,a);break t}else if(l!==h){h=Pn(Error(s(424)),i),Go(h),i=Ey(e,i,l,a);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(he=Wn(e.firstChild),ln=i,qt=!0,Us=null,pi=!0,a=iy(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Fo(),l===h){i=Qi(e,i,a);break t}Be(e,i,l,a)}i=i.child}return i;case 26:return Wu(e,i),e===null?(a=D_(i.type,null,i.pendingProps,null))?i.memoizedState=a:qt||(a=i.type,e=i.pendingProps,l=mc(it.current).createElement(a),l[pe]=i,l[je]=e,He(l,a,e),ye(l),i.stateNode=l):i.memoizedState=D_(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return pn(i),e===null&&qt&&(l=i.stateNode=R_(i.type,i.pendingProps,it.current),ln=i,pi=!0,h=he,kr(i.type)?(Nd=h,he=Wn(l.firstChild)):he=h),Be(e,i,i.pendingProps.children,a),Wu(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&qt&&((h=l=he)&&(l=zb(l,i.type,i.pendingProps,pi),l!==null?(i.stateNode=l,ln=i,he=Wn(l.firstChild),pi=!1,h=!0):h=!1),h||Ls(i)),pn(i),h=i.type,d=i.pendingProps,v=e!==null?e.memoizedProps:null,l=d.children,Rd(h,d)?l=null:v!==null&&Rd(h,v)&&(i.flags|=32),i.memoizedState!==null&&(h=wf(e,i,ib,null,null,a),El._currentValue=h),Wu(e,i),Be(e,i,l,a),i.child;case 6:return e===null&&qt&&((e=a=he)&&(a=jb(a,i.pendingProps,pi),a!==null?(i.stateNode=a,ln=i,he=null,e=!0):e=!1),e||Ls(i)),null;case 13:return Ay(e,i,a);case 4:return ct(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=Pa(i,null,l,a):Be(e,i,l,a),i.child;case 11:return my(e,i,i.type,i.pendingProps,a);case 7:return Be(e,i,i.pendingProps,a),i.child;case 8:return Be(e,i,i.pendingProps.children,a),i.child;case 12:return Be(e,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,Er(i,i.type,l.value),Be(e,i,l.children,a),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,js(i),h=Ze(h),l=l(h),i.flags|=1,Be(e,i,l,a),i.child;case 14:return gy(e,i,i.type,i.pendingProps,a);case 15:return py(e,i,i.type,i.pendingProps,a);case 19:return Sy(e,i,a);case 31:return l=i.pendingProps,a=i.mode,l={mode:l.mode,children:l.children},e===null?(a=tc(l,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=zi(e.child,l),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return yy(e,i,a);case 24:return js(i),l=Ze(De),e===null?(h=pf(),h===null&&(h=ee,d=mf(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:l,cache:h},_f(i),Er(i,De,h)):((e.lanes&a)!==0&&(vf(e,i),Wo(i,null,null,a),Jo()),h=e.memoizedState,d=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),Er(i,De,l)):(l=d.cache,Er(i,De,l),l!==h.cache&&df(i,[De],a,!0))),Be(e,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function Ki(e){e.flags|=4}function Ry(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!x_(i)){if(i=zn.current,i!==null&&((Ut&4194048)===Ut?yi!==null:(Ut&62914560)!==Ut&&(Ut&536870912)===0||i!==yi))throw $o=yf,up;e.flags|=8192}}function ec(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?lr():536870912,e.lanes|=i,za|=i)}function al(e,i){if(!qt)switch(e.tailMode){case"hidden":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ue(e){var i=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(i)for(var h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=a,i}function fb(e,i,a){var l=i.pendingProps;switch(uf(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ue(i),null;case 1:return ue(i),null;case 3:return a=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Hi(De),Ht(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ho(i)?Ki(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,rp())),ue(i),null;case 26:return a=i.memoizedState,e===null?(Ki(i),a!==null?(ue(i),Ry(i,a)):(ue(i),i.flags&=-16777217)):a?a!==e.memoizedState?(Ki(i),ue(i),Ry(i,a)):(ue(i),i.flags&=-16777217):(e.memoizedProps!==l&&Ki(i),ue(i),i.flags&=-16777217),null;case 27:nn(i),a=it.current;var h=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Ki(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ue(i),null}e=$.current,Ho(i)?np(i):(e=R_(h,l,a),i.stateNode=e,Ki(i))}return ue(i),null;case 5:if(nn(i),a=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Ki(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ue(i),null}if(e=$.current,Ho(i))np(i);else{switch(h=mc(it.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?h.createElement(a,{is:l.is}):h.createElement(a)}}e[pe]=i,e[je]=l;t:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break t;for(;h.sibling===null;){if(h.return===null||h.return===i)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=e;t:switch(He(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Ki(i)}}return ue(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&Ki(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(e=it.current,Ho(i)){if(e=i.stateNode,a=i.memoizedProps,l=null,h=ln,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[pe]=i,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||v_(e.nodeValue,a)),e||Ls(i)}else e=mc(e).createTextNode(l),e[pe]=i,i.stateNode=e}return ue(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Ho(i),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[pe]=i}else Fo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ue(i),h=!1}else h=rp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(Gi(i),i):(Gi(i),null)}if(Gi(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return a!==e&&a&&(i.child.flags|=8192),ec(i,i.updateQueue),ue(i),null;case 4:return Ht(),e===null&&Ed(i.stateNode.containerInfo),ue(i),null;case 10:return Hi(i.type),ue(i),null;case 19:if(at(Ne),h=i.memoizedState,h===null)return ue(i),null;if(l=(i.flags&128)!==0,d=h.rendering,d===null)if(l)al(h,!1);else{if(fe!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=$u(e),d!==null){for(i.flags|=128,al(h,!1),e=d.updateQueue,i.updateQueue=e,ec(i,e),i.subtreeFlags=0,e=a,a=i.child;a!==null;)tp(a,e),a=a.sibling;return rt(Ne,Ne.current&1|2),i.child}e=e.sibling}h.tail!==null&&me()>rc&&(i.flags|=128,l=!0,al(h,!1),i.lanes=4194304)}else{if(!l)if(e=$u(d),e!==null){if(i.flags|=128,l=!0,e=e.updateQueue,i.updateQueue=e,ec(i,e),al(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!qt)return ue(i),null}else 2*me()-h.renderingStartTime>rc&&a!==536870912&&(i.flags|=128,l=!0,al(h,!1),i.lanes=4194304);h.isBackwards?(d.sibling=i.child,i.child=d):(e=h.last,e!==null?e.sibling=d:i.child=d,h.last=d)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=me(),i.sibling=null,e=Ne.current,rt(Ne,l?e&1|2:e&1),i):(ue(i),null);case 22:case 23:return Gi(i),bf(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(ue(i),i.subtreeFlags&6&&(i.flags|=8192)):ue(i),a=i.updateQueue,a!==null&&ec(i,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),e!==null&&at(Bs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),Hi(De),ue(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function db(e,i){switch(uf(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Hi(De),Ht(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return nn(i),null;case 13:if(Gi(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(s(340));Fo()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return at(Ne),null;case 4:return Ht(),null;case 10:return Hi(i.type),null;case 22:case 23:return Gi(i),bf(),e!==null&&at(Bs),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Hi(De),null;case 25:return null;default:return null}}function Iy(e,i){switch(uf(i),i.tag){case 3:Hi(De),Ht();break;case 26:case 27:case 5:nn(i);break;case 4:Ht();break;case 13:Gi(i);break;case 19:at(Ne);break;case 10:Hi(i.type);break;case 22:case 23:Gi(i),bf(),e!==null&&at(Bs);break;case 24:Hi(De)}}function ol(e,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&e)===e){l=void 0;var d=a.create,v=a.inst;l=d(),v.destroy=l}a=a.next}while(a!==h)}}catch(T){Wt(i,i.return,T)}}function Cr(e,i,a){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&e)===e){var v=l.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,h=i;var w=a,L=T;try{L()}catch(G){Wt(h,w,G)}}}l=l.next}while(l!==d)}}catch(G){Wt(i,i.return,G)}}function Cy(e){var i=e.updateQueue;if(i!==null){var a=e.stateNode;try{gp(i,a)}catch(l){Wt(e,e.return,l)}}}function Dy(e,i,a){a.props=Hs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){Wt(e,i,l)}}function ll(e,i){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(h){Wt(e,i,h)}}function _i(e,i){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){Wt(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){Wt(e,i,h)}else a.current=null}function Ny(e){var i=e.type,a=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){Wt(e,e.return,h)}}function Zf(e,i,a){try{var l=e.stateNode;xb(l,e.type,a,i),l[je]=i}catch(h){Wt(e,e.return,h)}}function Oy(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&kr(e.type)||e.tag===4}function Jf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Oy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&kr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wf(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(e),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=dc));else if(l!==4&&(l===27&&kr(e.type)&&(a=e.stateNode,i=null),e=e.child,e!==null))for(Wf(e,i,a),e=e.sibling;e!==null;)Wf(e,i,a),e=e.sibling}function nc(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?a.insertBefore(e,i):a.appendChild(e);else if(l!==4&&(l===27&&kr(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(nc(e,i,a),e=e.sibling;e!==null;)nc(e,i,a),e=e.sibling}function My(e){var i=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);He(i,l,a),i[pe]=e,i[je]=a}catch(d){Wt(e,e.return,d)}}var Yi=!1,Te=!1,td=!1,Vy=typeof WeakSet=="function"?WeakSet:Set,ke=null;function mb(e,i){if(e=e.containerInfo,Sd=Tc,e=Fg(e),Zh(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var v=0,T=-1,w=-1,L=0,G=0,Y=e,z=null;e:for(;;){for(var j;Y!==a||h!==0&&Y.nodeType!==3||(T=v+h),Y!==d||l!==0&&Y.nodeType!==3||(w=v+l),Y.nodeType===3&&(v+=Y.nodeValue.length),(j=Y.firstChild)!==null;)z=Y,Y=j;for(;;){if(Y===e)break e;if(z===a&&++L===h&&(T=v),z===d&&++G===l&&(w=v),(j=Y.nextSibling)!==null)break;Y=z,z=Y.parentNode}Y=j}a=T===-1||w===-1?null:{start:T,end:w}}else a=null}a=a||{start:0,end:0}}else a=null;for(wd={focusedElem:e,selectionRange:a},Tc=!1,ke=i;ke!==null;)if(i=ke,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,ke=e;else for(;ke!==null;){switch(i=ke,d=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var Et=Hs(a.type,h,a.elementType===a.type);e=l.getSnapshotBeforeUpdate(Et,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(_t){Wt(a,a.return,_t)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,a=e.nodeType,a===9)Cd(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Cd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=i.sibling,e!==null){e.return=i.return,ke=e;break}ke=i.return}}function xy(e,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Dr(e,a),l&4&&ol(5,a);break;case 1:if(Dr(e,a),l&4)if(e=a.stateNode,i===null)try{e.componentDidMount()}catch(v){Wt(a,a.return,v)}else{var h=Hs(a.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Wt(a,a.return,v)}}l&64&&Cy(a),l&512&&ll(a,a.return);break;case 3:if(Dr(e,a),l&64&&(e=a.updateQueue,e!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{gp(e,i)}catch(v){Wt(a,a.return,v)}}break;case 27:i===null&&l&4&&My(a);case 26:case 5:Dr(e,a),i===null&&l&4&&Ny(a),l&512&&ll(a,a.return);break;case 12:Dr(e,a);break;case 13:Dr(e,a),l&4&&Uy(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=bb.bind(null,a),Bb(e,a))));break;case 22:if(l=a.memoizedState!==null||Yi,!l){i=i!==null&&i.memoizedState!==null||Te,h=Yi;var d=Te;Yi=l,(Te=i)&&!d?Nr(e,a,(a.subtreeFlags&8772)!==0):Dr(e,a),Yi=h,Te=d}break;case 30:break;default:Dr(e,a)}}function Py(e){var i=e.alternate;i!==null&&(e.alternate=null,Py(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&ua(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var oe=null,hn=!1;function Xi(e,i,a){for(a=a.child;a!==null;)ky(e,i,a),a=a.sibling}function ky(e,i,a){if(Xe&&typeof Xe.onCommitFiberUnmount=="function")try{Xe.onCommitFiberUnmount(sr,a)}catch{}switch(a.tag){case 26:Te||_i(a,i),Xi(e,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Te||_i(a,i);var l=oe,h=hn;kr(a.type)&&(oe=a.stateNode,hn=!1),Xi(e,i,a),yl(a.stateNode),oe=l,hn=h;break;case 5:Te||_i(a,i);case 6:if(l=oe,h=hn,oe=null,Xi(e,i,a),oe=l,hn=h,oe!==null)if(hn)try{(oe.nodeType===9?oe.body:oe.nodeName==="HTML"?oe.ownerDocument.body:oe).removeChild(a.stateNode)}catch(d){Wt(a,i,d)}else try{oe.removeChild(a.stateNode)}catch(d){Wt(a,i,d)}break;case 18:oe!==null&&(hn?(e=oe,S_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),wl(e)):S_(oe,a.stateNode));break;case 4:l=oe,h=hn,oe=a.stateNode.containerInfo,hn=!0,Xi(e,i,a),oe=l,hn=h;break;case 0:case 11:case 14:case 15:Te||Cr(2,a,i),Te||Cr(4,a,i),Xi(e,i,a);break;case 1:Te||(_i(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Dy(a,i,l)),Xi(e,i,a);break;case 21:Xi(e,i,a);break;case 22:Te=(l=Te)||a.memoizedState!==null,Xi(e,i,a),Te=l;break;default:Xi(e,i,a)}}function Uy(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{wl(e)}catch(a){Wt(i,i.return,a)}}function gb(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Vy),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Vy),i;default:throw Error(s(435,e.tag))}}function ed(e,i){var a=gb(e);i.forEach(function(l){var h=Sb.bind(null,e,l);a.has(l)||(a.add(l),l.then(h,h))})}function En(e,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=e,v=i,T=v;t:for(;T!==null;){switch(T.tag){case 27:if(kr(T.type)){oe=T.stateNode,hn=!1;break t}break;case 5:oe=T.stateNode,hn=!1;break t;case 3:case 4:oe=T.stateNode.containerInfo,hn=!0;break t}T=T.return}if(oe===null)throw Error(s(160));ky(d,v,h),oe=null,hn=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Ly(i,e),i=i.sibling}var Jn=null;function Ly(e,i){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:En(i,e),An(e),l&4&&(Cr(3,e,e.return),ol(3,e),Cr(5,e,e.return));break;case 1:En(i,e),An(e),l&512&&(Te||a===null||_i(a,a.return)),l&64&&Yi&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=Jn;if(En(i,e),An(e),l&512&&(Te||a===null||_i(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){t:{l=e.type,a=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[hr]||d[pe]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),He(d,l,a),d[pe]=e,ye(d),l=d;break t;case"link":var v=M_("link","href",h).get(l+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(d=v[T],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break e}}d=h.createElement(l),He(d,l,a),h.head.appendChild(d);break;case"meta":if(v=M_("meta","content",h).get(l+(a.content||""))){for(T=0;T<v.length;T++)if(d=v[T],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break e}}d=h.createElement(l),He(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[pe]=e,ye(d),l=d}e.stateNode=l}else V_(h,e.type,e.stateNode);else e.stateNode=O_(h,l,e.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?V_(h,e.type,e.stateNode):O_(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Zf(e,e.memoizedProps,a.memoizedProps)}break;case 27:En(i,e),An(e),l&512&&(Te||a===null||_i(a,a.return)),a!==null&&l&4&&Zf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(En(i,e),An(e),l&512&&(Te||a===null||_i(a,a.return)),e.flags&32){h=e.stateNode;try{Vn(h,"")}catch(j){Wt(e,e.return,j)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,Zf(e,h,a!==null?a.memoizedProps:h)),l&1024&&(td=!0);break;case 6:if(En(i,e),An(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(j){Wt(e,e.return,j)}}break;case 3:if(yc=null,h=Jn,Jn=gc(i.containerInfo),En(i,e),Jn=h,An(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{wl(i.containerInfo)}catch(j){Wt(e,e.return,j)}td&&(td=!1,zy(e));break;case 4:l=Jn,Jn=gc(e.stateNode.containerInfo),En(i,e),An(e),Jn=l;break;case 12:En(i,e),An(e);break;case 13:En(i,e),An(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(od=me()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,ed(e,l)));break;case 22:h=e.memoizedState!==null;var w=a!==null&&a.memoizedState!==null,L=Yi,G=Te;if(Yi=L||h,Te=G||w,En(i,e),Te=G,Yi=L,An(e),l&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(a===null||w||Yi||Te||Fs(e)),a=null,i=e;;){if(i.tag===5||i.tag===26){if(a===null){w=a=i;try{if(d=w.stateNode,h)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=w.stateNode;var Y=w.memoizedProps.style,z=Y!=null&&Y.hasOwnProperty("display")?Y.display:null;T.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(j){Wt(w,w.return,j)}}}else if(i.tag===6){if(a===null){w=i;try{w.stateNode.nodeValue=h?"":w.memoizedProps}catch(j){Wt(w,w.return,j)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,ed(e,a))));break;case 19:En(i,e),An(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,ed(e,l)));break;case 30:break;case 21:break;default:En(i,e),An(e)}}function An(e){var i=e.flags;if(i&2){try{for(var a,l=e.return;l!==null;){if(Oy(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,d=Jf(e);nc(e,d,h);break;case 5:var v=a.stateNode;a.flags&32&&(Vn(v,""),a.flags&=-33);var T=Jf(e);nc(e,T,v);break;case 3:case 4:var w=a.stateNode.containerInfo,L=Jf(e);Wf(e,L,w);break;default:throw Error(s(161))}}catch(G){Wt(e,e.return,G)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function zy(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;zy(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Dr(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)xy(e,i.alternate,i),i=i.sibling}function Fs(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Cr(4,i,i.return),Fs(i);break;case 1:_i(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&Dy(i,i.return,a),Fs(i);break;case 27:yl(i.stateNode);case 26:case 5:_i(i,i.return),Fs(i);break;case 22:i.memoizedState===null&&Fs(i);break;case 30:Fs(i);break;default:Fs(i)}e=e.sibling}}function Nr(e,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=e,d=i,v=d.flags;switch(d.tag){case 0:case 11:case 15:Nr(h,d,a),ol(4,d);break;case 1:if(Nr(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(L){Wt(l,l.return,L)}if(l=d,h=l.updateQueue,h!==null){var T=l.stateNode;try{var w=h.shared.hiddenCallbacks;if(w!==null)for(h.shared.hiddenCallbacks=null,h=0;h<w.length;h++)mp(w[h],T)}catch(L){Wt(l,l.return,L)}}a&&v&64&&Cy(d),ll(d,d.return);break;case 27:My(d);case 26:case 5:Nr(h,d,a),a&&l===null&&v&4&&Ny(d),ll(d,d.return);break;case 12:Nr(h,d,a);break;case 13:Nr(h,d,a),a&&v&4&&Uy(h,d);break;case 22:d.memoizedState===null&&Nr(h,d,a),ll(d,d.return);break;case 30:break;default:Nr(h,d,a)}i=i.sibling}}function nd(e,i){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ko(a))}function id(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Ko(e))}function vi(e,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)jy(e,i,a,l),i=i.sibling}function jy(e,i,a,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:vi(e,i,a,l),h&2048&&ol(9,i);break;case 1:vi(e,i,a,l);break;case 3:vi(e,i,a,l),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Ko(e)));break;case 12:if(h&2048){vi(e,i,a,l),e=i.stateNode;try{var d=i.memoizedProps,v=d.id,T=d.onPostCommit;typeof T=="function"&&T(v,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(w){Wt(i,i.return,w)}}else vi(e,i,a,l);break;case 13:vi(e,i,a,l);break;case 23:break;case 22:d=i.stateNode,v=i.alternate,i.memoizedState!==null?d._visibility&2?vi(e,i,a,l):ul(e,i):d._visibility&2?vi(e,i,a,l):(d._visibility|=2,ka(e,i,a,l,(i.subtreeFlags&10256)!==0)),h&2048&&nd(v,i);break;case 24:vi(e,i,a,l),h&2048&&id(i.alternate,i);break;default:vi(e,i,a,l)}}function ka(e,i,a,l,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=e,v=i,T=a,w=l,L=v.flags;switch(v.tag){case 0:case 11:case 15:ka(d,v,T,w,h),ol(8,v);break;case 23:break;case 22:var G=v.stateNode;v.memoizedState!==null?G._visibility&2?ka(d,v,T,w,h):ul(d,v):(G._visibility|=2,ka(d,v,T,w,h)),h&&L&2048&&nd(v.alternate,v);break;case 24:ka(d,v,T,w,h),h&&L&2048&&id(v.alternate,v);break;default:ka(d,v,T,w,h)}i=i.sibling}}function ul(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=e,l=i,h=l.flags;switch(l.tag){case 22:ul(a,l),h&2048&&nd(l.alternate,l);break;case 24:ul(a,l),h&2048&&id(l.alternate,l);break;default:ul(a,l)}i=i.sibling}}var cl=8192;function Ua(e){if(e.subtreeFlags&cl)for(e=e.child;e!==null;)By(e),e=e.sibling}function By(e){switch(e.tag){case 26:Ua(e),e.flags&cl&&e.memoizedState!==null&&t1(Jn,e.memoizedState,e.memoizedProps);break;case 5:Ua(e);break;case 3:case 4:var i=Jn;Jn=gc(e.stateNode.containerInfo),Ua(e),Jn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=cl,cl=16777216,Ua(e),cl=i):Ua(e));break;default:Ua(e)}}function qy(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function hl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];ke=l,Fy(l,e)}qy(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Hy(e),e=e.sibling}function Hy(e){switch(e.tag){case 0:case 11:case 15:hl(e),e.flags&2048&&Cr(9,e,e.return);break;case 3:hl(e);break;case 12:hl(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,ic(e)):hl(e);break;default:hl(e)}}function ic(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];ke=l,Fy(l,e)}qy(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Cr(8,i,i.return),ic(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,ic(i));break;default:ic(i)}e=e.sibling}}function Fy(e,i){for(;ke!==null;){var a=ke;switch(a.tag){case 0:case 11:case 15:Cr(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ko(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,ke=l;else t:for(a=e;ke!==null;){l=ke;var h=l.sibling,d=l.return;if(Py(l),l===a){ke=null;break t}if(h!==null){h.return=d,ke=h;break t}ke=d}}}var pb={getCacheForType:function(e){var i=Ze(De),a=i.data.get(e);return a===void 0&&(a=e(),i.data.set(e,a)),a}},yb=typeof WeakMap=="function"?WeakMap:Map,Gt=0,ee=null,Ot=null,Ut=0,Qt=0,bn=null,Or=!1,La=!1,rd=!1,$i=0,fe=0,Mr=0,Gs=0,sd=0,jn=0,za=0,fl=null,fn=null,ad=!1,od=0,rc=1/0,sc=null,Vr=null,qe=0,xr=null,ja=null,Ba=0,ld=0,ud=null,Gy=null,dl=0,cd=null;function Sn(){if((Gt&2)!==0&&Ut!==0)return Ut&-Ut;if(F.T!==null){var e=Ca;return e!==0?e:yd()}return Mi()}function Qy(){jn===0&&(jn=(Ut&536870912)===0||qt?bo():536870912);var e=zn.current;return e!==null&&(e.flags|=32),jn}function wn(e,i,a){(e===ee&&(Qt===2||Qt===9)||e.cancelPendingCommit!==null)&&(qa(e,0),Pr(e,Ut,jn,!1)),ge(e,a),((Gt&2)===0||e!==ee)&&(e===ee&&((Gt&2)===0&&(Gs|=a),fe===4&&Pr(e,Ut,jn,!1)),Ti(e))}function Ky(e,i,a){if((Gt&6)!==0)throw Error(s(327));var l=!a&&(i&124)===0&&(i&e.expiredLanes)===0||or(e,i),h=l?Tb(e,i):dd(e,i,!0),d=l;do{if(h===0){La&&!l&&Pr(e,i,0,!1);break}else{if(a=e.current.alternate,d&&!_b(a)){h=dd(e,i,!1),d=!1;continue}if(h===2){if(d=i,e.errorRecoveryDisabledLanes&d)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){i=v;t:{var T=e;h=fl;var w=T.current.memoizedState.isDehydrated;if(w&&(qa(T,v).flags|=256),v=dd(T,v,!1),v!==2){if(rd&&!w){T.errorRecoveryDisabledLanes|=d,Gs|=d,h=4;break t}d=fn,fn=h,d!==null&&(fn===null?fn=d:fn.push.apply(fn,d))}h=v}if(d=!1,h!==2)continue}}if(h===1){qa(e,0),Pr(e,i,0,!0);break}t:{switch(l=e,d=h,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Pr(l,i,jn,!Or);break t;case 2:fn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(h=od+300-me(),10<h)){if(Pr(l,i,jn,!Or),On(l,0,!0)!==0)break t;l.timeoutHandle=A_(Yy.bind(null,l,a,fn,sc,ad,i,jn,Gs,za,Or,d,2,-0,0),h);break t}Yy(l,a,fn,sc,ad,i,jn,Gs,za,Or,d,0,-0,0)}}break}while(!0);Ti(e)}function Yy(e,i,a,l,h,d,v,T,w,L,G,Y,z,j){if(e.timeoutHandle=-1,Y=i.subtreeFlags,(Y&8192||(Y&16785408)===16785408)&&(Tl={stylesheets:null,count:0,unsuspend:Wb},By(i),Y=e1(),Y!==null)){e.cancelPendingCommit=Y(e_.bind(null,e,i,d,a,l,h,v,T,w,G,1,z,j)),Pr(e,d,v,!L);return}e_(e,i,d,a,l,h,v,T,w)}function _b(e){for(var i=e;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!vn(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Pr(e,i,a,l){i&=~sd,i&=~Gs,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var h=i;0<h;){var d=31-rn(h),v=1<<d;l[d]=-1,h&=~v}a!==0&&ur(e,a,i)}function ac(){return(Gt&6)===0?(ml(0),!1):!0}function hd(){if(Ot!==null){if(Qt===0)var e=Ot.return;else e=Ot,qi=zs=null,Cf(e),xa=null,rl=0,e=Ot;for(;e!==null;)Iy(e.alternate,e),e=e.return;Ot=null}}function qa(e,i){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,kb(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),hd(),ee=e,Ot=a=zi(e.current,null),Ut=i,Qt=0,bn=null,Or=!1,La=or(e,i),rd=!1,za=jn=sd=Gs=Mr=fe=0,fn=fl=null,ad=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var h=31-rn(l),d=1<<h;i|=e[h],l&=~d}return $i=i,Cu(),a}function Xy(e,i){Ct=null,F.H=Ku,i===Xo||i===Uu?(i=fp(),Qt=3):i===up?(i=fp(),Qt=4):Qt=i===dy?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,bn=i,Ot===null&&(fe=1,Ju(e,Pn(i,e.current)))}function $y(){var e=F.H;return F.H=Ku,e===null?Ku:e}function Zy(){var e=F.A;return F.A=pb,e}function fd(){fe=4,Or||(Ut&4194048)!==Ut&&zn.current!==null||(La=!0),(Mr&134217727)===0&&(Gs&134217727)===0||ee===null||Pr(ee,Ut,jn,!1)}function dd(e,i,a){var l=Gt;Gt|=2;var h=$y(),d=Zy();(ee!==e||Ut!==i)&&(sc=null,qa(e,i)),i=!1;var v=fe;t:do try{if(Qt!==0&&Ot!==null){var T=Ot,w=bn;switch(Qt){case 8:hd(),v=6;break t;case 3:case 2:case 9:case 6:zn.current===null&&(i=!0);var L=Qt;if(Qt=0,bn=null,Ha(e,T,w,L),a&&La){v=0;break t}break;default:L=Qt,Qt=0,bn=null,Ha(e,T,w,L)}}vb(),v=fe;break}catch(G){Xy(e,G)}while(!0);return i&&e.shellSuspendCounter++,qi=zs=null,Gt=l,F.H=h,F.A=d,Ot===null&&(ee=null,Ut=0,Cu()),v}function vb(){for(;Ot!==null;)Jy(Ot)}function Tb(e,i){var a=Gt;Gt|=2;var l=$y(),h=Zy();ee!==e||Ut!==i?(sc=null,rc=me()+500,qa(e,i)):La=or(e,i);t:do try{if(Qt!==0&&Ot!==null){i=Ot;var d=bn;e:switch(Qt){case 1:Qt=0,bn=null,Ha(e,i,d,1);break;case 2:case 9:if(cp(d)){Qt=0,bn=null,Wy(i);break}i=function(){Qt!==2&&Qt!==9||ee!==e||(Qt=7),Ti(e)},d.then(i,i);break t;case 3:Qt=7;break t;case 4:Qt=5;break t;case 7:cp(d)?(Qt=0,bn=null,Wy(i)):(Qt=0,bn=null,Ha(e,i,d,7));break;case 5:var v=null;switch(Ot.tag){case 26:v=Ot.memoizedState;case 5:case 27:var T=Ot;if(!v||x_(v)){Qt=0,bn=null;var w=T.sibling;if(w!==null)Ot=w;else{var L=T.return;L!==null?(Ot=L,oc(L)):Ot=null}break e}}Qt=0,bn=null,Ha(e,i,d,5);break;case 6:Qt=0,bn=null,Ha(e,i,d,6);break;case 8:hd(),fe=6;break t;default:throw Error(s(462))}}Eb();break}catch(G){Xy(e,G)}while(!0);return qi=zs=null,F.H=l,F.A=h,Gt=a,Ot!==null?0:(ee=null,Ut=0,Cu(),fe)}function Eb(){for(;Ot!==null&&!Oi();)Jy(Ot)}function Jy(e){var i=wy(e.alternate,e,$i);e.memoizedProps=e.pendingProps,i===null?oc(e):Ot=i}function Wy(e){var i=e,a=i.alternate;switch(i.tag){case 15:case 0:i=vy(a,i,i.pendingProps,i.type,void 0,Ut);break;case 11:i=vy(a,i,i.pendingProps,i.type.render,i.ref,Ut);break;case 5:Cf(i);default:Iy(a,i),i=Ot=tp(i,$i),i=wy(a,i,$i)}e.memoizedProps=e.pendingProps,i===null?oc(e):Ot=i}function Ha(e,i,a,l){qi=zs=null,Cf(i),xa=null,rl=0;var h=i.return;try{if(cb(e,h,i,a,Ut)){fe=1,Ju(e,Pn(a,e.current)),Ot=null;return}}catch(d){if(h!==null)throw Ot=h,d;fe=1,Ju(e,Pn(a,e.current)),Ot=null;return}i.flags&32768?(qt||l===1?e=!0:La||(Ut&536870912)!==0?e=!1:(Or=e=!0,(l===2||l===9||l===3||l===6)&&(l=zn.current,l!==null&&l.tag===13&&(l.flags|=16384))),t_(i,e)):oc(i)}function oc(e){var i=e;do{if((i.flags&32768)!==0){t_(i,Or);return}e=i.return;var a=fb(i.alternate,i,$i);if(a!==null){Ot=a;return}if(i=i.sibling,i!==null){Ot=i;return}Ot=i=e}while(i!==null);fe===0&&(fe=5)}function t_(e,i){do{var a=db(e.alternate,e);if(a!==null){a.flags&=32767,Ot=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(e=e.sibling,e!==null)){Ot=e;return}Ot=e=a}while(e!==null);fe=6,Ot=null}function e_(e,i,a,l,h,d,v,T,w){e.cancelPendingCommit=null;do lc();while(qe!==0);if((Gt&6)!==0)throw Error(s(327));if(i!==null){if(i===e.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=nf,hu(e,a,d,v,T,w),e===ee&&(Ot=ee=null,Ut=0),ja=i,xr=e,Ba=a,ld=d,ud=h,Gy=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,wb(ai,function(){return a_(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=F.T,F.T=null,h=nt.p,nt.p=2,v=Gt,Gt|=4;try{mb(e,i,a)}finally{Gt=v,nt.p=h,F.T=l}}qe=1,n_(),i_(),r_()}}function n_(){if(qe===1){qe=0;var e=xr,i=ja,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var l=nt.p;nt.p=2;var h=Gt;Gt|=4;try{Ly(i,e);var d=wd,v=Fg(e.containerInfo),T=d.focusedElem,w=d.selectionRange;if(v!==T&&T&&T.ownerDocument&&Hg(T.ownerDocument.documentElement,T)){if(w!==null&&Zh(T)){var L=w.start,G=w.end;if(G===void 0&&(G=L),"selectionStart"in T)T.selectionStart=L,T.selectionEnd=Math.min(G,T.value.length);else{var Y=T.ownerDocument||document,z=Y&&Y.defaultView||window;if(z.getSelection){var j=z.getSelection(),Et=T.textContent.length,_t=Math.min(w.start,Et),$t=w.end===void 0?_t:Math.min(w.end,Et);!j.extend&&_t>$t&&(v=$t,$t=_t,_t=v);var x=qg(T,_t),M=qg(T,$t);if(x&&M&&(j.rangeCount!==1||j.anchorNode!==x.node||j.anchorOffset!==x.offset||j.focusNode!==M.node||j.focusOffset!==M.offset)){var k=Y.createRange();k.setStart(x.node,x.offset),j.removeAllRanges(),_t>$t?(j.addRange(k),j.extend(M.node,M.offset)):(k.setEnd(M.node,M.offset),j.addRange(k))}}}}for(Y=[],j=T;j=j.parentNode;)j.nodeType===1&&Y.push({element:j,left:j.scrollLeft,top:j.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<Y.length;T++){var K=Y[T];K.element.scrollLeft=K.left,K.element.scrollTop=K.top}}Tc=!!Sd,wd=Sd=null}finally{Gt=h,nt.p=l,F.T=a}}e.current=i,qe=2}}function i_(){if(qe===2){qe=0;var e=xr,i=ja,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var l=nt.p;nt.p=2;var h=Gt;Gt|=4;try{xy(e,i.alternate,i)}finally{Gt=h,nt.p=l,F.T=a}}qe=3}}function r_(){if(qe===4||qe===3){qe=0,Ye();var e=xr,i=ja,a=Ba,l=Gy;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?qe=5:(qe=0,ja=xr=null,s_(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(Vr=null),wo(a),i=i.stateNode,Xe&&typeof Xe.onCommitFiberRoot=="function")try{Xe.onCommitFiberRoot(sr,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=F.T,h=nt.p,nt.p=2,F.T=null;try{for(var d=e.onRecoverableError,v=0;v<l.length;v++){var T=l[v];d(T.value,{componentStack:T.stack})}}finally{F.T=i,nt.p=h}}(Ba&3)!==0&&lc(),Ti(e),h=e.pendingLanes,(a&4194090)!==0&&(h&42)!==0?e===cd?dl++:(dl=0,cd=e):dl=0,ml(0)}}function s_(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Ko(i)))}function lc(e){return n_(),i_(),r_(),a_()}function a_(){if(qe!==5)return!1;var e=xr,i=ld;ld=0;var a=wo(Ba),l=F.T,h=nt.p;try{nt.p=32>a?32:a,F.T=null,a=ud,ud=null;var d=xr,v=Ba;if(qe=0,ja=xr=null,Ba=0,(Gt&6)!==0)throw Error(s(331));var T=Gt;if(Gt|=4,Hy(d.current),jy(d,d.current,v,a),Gt=T,ml(0,!1),Xe&&typeof Xe.onPostCommitFiberRoot=="function")try{Xe.onPostCommitFiberRoot(sr,d)}catch{}return!0}finally{nt.p=h,F.T=l,s_(e,i)}}function o_(e,i,a){i=Pn(a,i),i=qf(e.stateNode,i,2),e=Sr(e,i,2),e!==null&&(ge(e,2),Ti(e))}function Wt(e,i,a){if(e.tag===3)o_(e,e,a);else for(;i!==null;){if(i.tag===3){o_(i,e,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Vr===null||!Vr.has(l))){e=Pn(a,e),a=hy(2),l=Sr(i,a,2),l!==null&&(fy(a,l,i,e),ge(l,2),Ti(l));break}}i=i.return}}function md(e,i,a){var l=e.pingCache;if(l===null){l=e.pingCache=new yb;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(a)||(rd=!0,h.add(a),e=Ab.bind(null,e,i,a),i.then(e,e))}function Ab(e,i,a){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ee===e&&(Ut&a)===a&&(fe===4||fe===3&&(Ut&62914560)===Ut&&300>me()-od?(Gt&2)===0&&qa(e,0):sd|=a,za===Ut&&(za=0)),Ti(e)}function l_(e,i){i===0&&(i=lr()),e=Sa(e,i),e!==null&&(ge(e,i),Ti(e))}function bb(e){var i=e.memoizedState,a=0;i!==null&&(a=i.retryLane),l_(e,a)}function Sb(e,i){var a=0;switch(e.tag){case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),l_(e,a)}function wb(e,i){return Ke(e,i)}var uc=null,Fa=null,gd=!1,cc=!1,pd=!1,Qs=0;function Ti(e){e!==Fa&&e.next===null&&(Fa===null?uc=Fa=e:Fa=Fa.next=e),cc=!0,gd||(gd=!0,Ib())}function ml(e,i){if(!pd&&cc){pd=!0;do for(var a=!1,l=uc;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var v=l.suspendedLanes,T=l.pingedLanes;d=(1<<31-rn(42|e)+1)-1,d&=h&~(v&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,f_(l,d))}else d=Ut,d=On(l,l===ee?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||or(l,d)||(a=!0,f_(l,d));l=l.next}while(a);pd=!1}}function Rb(){u_()}function u_(){cc=gd=!1;var e=0;Qs!==0&&(Pb()&&(e=Qs),Qs=0);for(var i=me(),a=null,l=uc;l!==null;){var h=l.next,d=c_(l,i);d===0?(l.next=null,a===null?uc=h:a.next=h,h===null&&(Fa=a)):(a=l,(e!==0||(d&3)!==0)&&(cc=!0)),l=h}ml(e)}function c_(e,i){for(var a=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var v=31-rn(d),T=1<<v,w=h[v];w===-1?((T&a)===0||(T&l)!==0)&&(h[v]=oa(T,i)):w<=i&&(e.expiredLanes|=T),d&=~T}if(i=ee,a=Ut,a=On(e,e===i?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===i&&(Qt===2||Qt===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Ve(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||or(e,a)){if(i=a&-a,i===e.callbackPriority)return i;switch(l!==null&&Ve(l),wo(a)){case 2:case 8:a=Ae;break;case 32:a=ai;break;case 268435456:a=Ao;break;default:a=ai}return l=h_.bind(null,e),a=Ke(a,l),e.callbackPriority=i,e.callbackNode=a,i}return l!==null&&l!==null&&Ve(l),e.callbackPriority=2,e.callbackNode=null,2}function h_(e,i){if(qe!==0&&qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(lc()&&e.callbackNode!==a)return null;var l=Ut;return l=On(e,e===ee?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Ky(e,l,i),c_(e,me()),e.callbackNode!=null&&e.callbackNode===a?h_.bind(null,e):null)}function f_(e,i){if(lc())return null;Ky(e,i,!0)}function Ib(){Ub(function(){(Gt&6)!==0?Ke(ne,Rb):u_()})}function yd(){return Qs===0&&(Qs=bo()),Qs}function d_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Kn(""+e)}function m_(e,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,e.id&&a.setAttribute("form",e.id),i.parentNode.insertBefore(a,i),e=new FormData(e),a.parentNode.removeChild(a),e}function Cb(e,i,a,l,h){if(i==="submit"&&a&&a.stateNode===h){var d=d_((h[je]||null).action),v=l.submitter;v&&(i=(i=v[je]||null)?d_(i.formAction):v.getAttribute("formAction"),i!==null&&(d=i,v=null));var T=new ws("action","action",null,l,h);e.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Qs!==0){var w=v?m_(h,v):new FormData(h);Uf(a,{pending:!0,data:w,method:h.method,action:d},null,w)}}else typeof d=="function"&&(T.preventDefault(),w=v?m_(h,v):new FormData(h),Uf(a,{pending:!0,data:w,method:h.method,action:d},d,w))},currentTarget:h}]})}}for(var _d=0;_d<ef.length;_d++){var vd=ef[_d],Db=vd.toLowerCase(),Nb=vd[0].toUpperCase()+vd.slice(1);Zn(Db,"on"+Nb)}Zn(Kg,"onAnimationEnd"),Zn(Yg,"onAnimationIteration"),Zn(Xg,"onAnimationStart"),Zn("dblclick","onDoubleClick"),Zn("focusin","onFocus"),Zn("focusout","onBlur"),Zn(KA,"onTransitionRun"),Zn(YA,"onTransitionStart"),Zn(XA,"onTransitionCancel"),Zn($g,"onTransitionEnd"),fi("onMouseEnter",["mouseout","mouseover"]),fi("onMouseLeave",["mouseout","mouseover"]),fi("onPointerEnter",["pointerout","pointerover"]),fi("onPointerLeave",["pointerout","pointerover"]),hi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),hi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),hi("onBeforeInput",["compositionend","keypress","textInput","paste"]),hi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),hi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),hi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ob=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gl));function g_(e,i){i=(i&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],h=l.event;l=l.listeners;t:{var d=void 0;if(i)for(var v=l.length-1;0<=v;v--){var T=l[v],w=T.instance,L=T.currentTarget;if(T=T.listener,w!==d&&h.isPropagationStopped())break t;d=T,h.currentTarget=L;try{d(h)}catch(G){Zu(G)}h.currentTarget=null,d=w}else for(v=0;v<l.length;v++){if(T=l[v],w=T.instance,L=T.currentTarget,T=T.listener,w!==d&&h.isPropagationStopped())break t;d=T,h.currentTarget=L;try{d(h)}catch(G){Zu(G)}h.currentTarget=null,d=w}}}}function Mt(e,i){var a=i[fs];a===void 0&&(a=i[fs]=new Set);var l=e+"__bubble";a.has(l)||(p_(i,e,2,!1),a.add(l))}function Td(e,i,a){var l=0;i&&(l|=4),p_(a,e,l,i)}var hc="_reactListening"+Math.random().toString(36).slice(2);function Ed(e){if(!e[hc]){e[hc]=!0,fu.forEach(function(a){a!=="selectionchange"&&(Ob.has(a)||Td(a,!1,e),Td(a,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[hc]||(i[hc]=!0,Td("selectionchange",!1,i))}}function p_(e,i,a,l){switch(j_(i)){case 2:var h=r1;break;case 8:h=s1;break;default:h=Pd}a=h.bind(null,i,a,e),h=void 0,!Ui||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(i,a,{capture:!0,passive:h}):e.addEventListener(i,a,!0):h!==void 0?e.addEventListener(i,a,{passive:h}):e.addEventListener(i,a,!1)}function Ad(e,i,a,l,h){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var T=l.stateNode.containerInfo;if(T===h)break;if(v===4)for(v=l.return;v!==null;){var w=v.tag;if((w===3||w===4)&&v.stateNode.containerInfo===h)return;v=v.return}for(;T!==null;){if(v=ui(T),v===null)return;if(w=v.tag,w===5||w===6||w===26||w===27){l=d=v;continue t}T=T.parentNode}}l=l.return}As(function(){var L=d,G=Mo(a),Y=[];t:{var z=Zg.get(e);if(z!==void 0){var j=ws,Et=e;switch(e){case"keypress":if(bs(a)===0)break t;case"keydown":case"keyup":j=Ta;break;case"focusin":Et="focus",j=ya;break;case"focusout":Et="blur",j=ya;break;case"beforeblur":case"afterblur":j=ya;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=Ns;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=vu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=Tr;break;case Kg:case Yg:case Xg:j=xo;break;case $g:j=m;break;case"scroll":case"scrollend":j=Is;break;case"wheel":j=A;break;case"copy":case"cut":case"paste":j=Eu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=Uo;break;case"toggle":case"beforetoggle":j=B}var _t=(i&4)!==0,$t=!_t&&(e==="scroll"||e==="scrollend"),x=_t?z!==null?z+"Capture":null:z;_t=[];for(var M=L,k;M!==null;){var K=M;if(k=K.stateNode,K=K.tag,K!==5&&K!==26&&K!==27||k===null||x===null||(K=_r(M,x),K!=null&&_t.push(pl(M,K,k))),$t)break;M=M.return}0<_t.length&&(z=new j(z,Et,null,a,G),Y.push({event:z,listeners:_t}))}}if((i&7)===0){t:{if(z=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",z&&a!==Oo&&(Et=a.relatedTarget||a.fromElement)&&(ui(Et)||Et[Vi]))break t;if((j||z)&&(z=G.window===G?G:(z=G.ownerDocument)?z.defaultView||z.parentWindow:window,j?(Et=a.relatedTarget||a.toElement,j=L,Et=Et?ui(Et):null,Et!==null&&($t=u(Et),_t=Et.tag,Et!==$t||_t!==5&&_t!==27&&_t!==6)&&(Et=null)):(j=null,Et=L),j!==Et)){if(_t=Ns,K="onMouseLeave",x="onMouseEnter",M="mouse",(e==="pointerout"||e==="pointerover")&&(_t=Uo,K="onPointerLeave",x="onPointerEnter",M="pointer"),$t=j==null?z:fr(j),k=Et==null?z:fr(Et),z=new _t(K,M+"leave",j,a,G),z.target=$t,z.relatedTarget=k,K=null,ui(G)===L&&(_t=new _t(x,M+"enter",Et,a,G),_t.target=k,_t.relatedTarget=$t,K=_t),$t=K,j&&Et)e:{for(_t=j,x=Et,M=0,k=_t;k;k=Ga(k))M++;for(k=0,K=x;K;K=Ga(K))k++;for(;0<M-k;)_t=Ga(_t),M--;for(;0<k-M;)x=Ga(x),k--;for(;M--;){if(_t===x||x!==null&&_t===x.alternate)break e;_t=Ga(_t),x=Ga(x)}_t=null}else _t=null;j!==null&&y_(Y,z,j,_t,!1),Et!==null&&$t!==null&&y_(Y,$t,Et,_t,!0)}}t:{if(z=L?fr(L):window,j=z.nodeName&&z.nodeName.toLowerCase(),j==="select"||j==="input"&&z.type==="file")var ut=kg;else if(xg(z))if(Ug)ut=FA;else{ut=qA;var Nt=BA}else j=z.nodeName,!j||j.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?L&&ma(L.elementType)&&(ut=kg):ut=HA;if(ut&&(ut=ut(e,L))){Pg(Y,ut,a,G);break t}Nt&&Nt(e,z,L),e==="focusout"&&L&&z.type==="number"&&L.memoizedProps.value!=null&&Co(z,"number",z.value)}switch(Nt=L?fr(L):window,e){case"focusin":(xg(Nt)||Nt.contentEditable==="true")&&(Ea=Nt,Jh=L,qo=null);break;case"focusout":qo=Jh=Ea=null;break;case"mousedown":Wh=!0;break;case"contextmenu":case"mouseup":case"dragend":Wh=!1,Gg(Y,a,G);break;case"selectionchange":if(QA)break;case"keydown":case"keyup":Gg(Y,a,G)}var dt;if(Rt)t:{switch(e){case"compositionstart":var vt="onCompositionStart";break t;case"compositionend":vt="onCompositionEnd";break t;case"compositionupdate":vt="onCompositionUpdate";break t}vt=void 0}else $n?Yn(e,a)&&(vt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(vt="onCompositionStart");vt&&(_e&&a.locale!=="ko"&&($n||vt!=="onCompositionStart"?vt==="onCompositionEnd"&&$n&&(dt=_u()):(xn=G,te="value"in xn?xn.value:xn.textContent,$n=!0)),Nt=fc(L,vt),0<Nt.length&&(vt=new ko(vt,e,null,a,G),Y.push({event:vt,listeners:Nt}),dt?vt.data=dt:(dt=Xn(a),dt!==null&&(vt.data=dt)))),(dt=Ft?Lo(e,a):LA(e,a))&&(vt=fc(L,"onBeforeInput"),0<vt.length&&(Nt=new ko("onBeforeInput","beforeinput",null,a,G),Y.push({event:Nt,listeners:vt}),Nt.data=dt)),Cb(Y,e,L,a,G)}g_(Y,i)})}function pl(e,i,a){return{instance:e,listener:i,currentTarget:a}}function fc(e,i){for(var a=i+"Capture",l=[];e!==null;){var h=e,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=_r(e,a),h!=null&&l.unshift(pl(e,h,d)),h=_r(e,i),h!=null&&l.push(pl(e,h,d))),e.tag===3)return l;e=e.return}return[]}function Ga(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function y_(e,i,a,l,h){for(var d=i._reactName,v=[];a!==null&&a!==l;){var T=a,w=T.alternate,L=T.stateNode;if(T=T.tag,w!==null&&w===l)break;T!==5&&T!==26&&T!==27||L===null||(w=L,h?(L=_r(a,d),L!=null&&v.unshift(pl(a,L,w))):h||(L=_r(a,d),L!=null&&v.push(pl(a,L,w)))),a=a.return}v.length!==0&&e.push({event:i,listeners:v})}var Mb=/\r\n?/g,Vb=/\u0000|\uFFFD/g;function __(e){return(typeof e=="string"?e:""+e).replace(Mb,`
`).replace(Vb,"")}function v_(e,i){return i=__(i),__(e)===i}function dc(){}function Xt(e,i,a,l,h,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Vn(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Vn(e,""+l);break;case"className":ys(e,"class",l);break;case"tabIndex":ys(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ys(e,a,l);break;case"style":No(e,l,d);break;case"data":if(i!=="object"){ys(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Kn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&Xt(e,i,"name",h.name,h,null),Xt(e,i,"formEncType",h.formEncType,h,null),Xt(e,i,"formMethod",h.formMethod,h,null),Xt(e,i,"formTarget",h.formTarget,h,null)):(Xt(e,i,"encType",h.encType,h,null),Xt(e,i,"method",h.method,h,null),Xt(e,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Kn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=dc);break;case"onScroll":l!=null&&Mt("scroll",e);break;case"onScrollEnd":l!=null&&Mt("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Kn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":Mt("beforetoggle",e),Mt("toggle",e),ps(e,"popover",l);break;case"xlinkActuate":Mn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Mn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Mn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Mn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Mn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Mn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Mn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Mn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Mn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ps(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=gu.get(a)||a,ps(e,a,l))}}function bd(e,i,a,l,h,d){switch(a){case"style":No(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof l=="string"?Vn(e,l):(typeof l=="number"||typeof l=="bigint")&&Vn(e,""+l);break;case"onScroll":l!=null&&Mt("scroll",e);break;case"onScrollEnd":l!=null&&Mt("scrollend",e);break;case"onClick":l!=null&&(e.onclick=dc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ms.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=e[je]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(i,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,l,h);break t}a in e?e[a]=l:l===!0?e.setAttribute(a,""):ps(e,a,l)}}}function He(e,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Mt("error",e),Mt("load",e);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Xt(e,i,d,v,a,null)}}h&&Xt(e,i,"srcSet",a.srcSet,a,null),l&&Xt(e,i,"src",a.src,a,null);return;case"input":Mt("invalid",e);var T=d=v=h=null,w=null,L=null;for(l in a)if(a.hasOwnProperty(l)){var G=a[l];if(G!=null)switch(l){case"name":h=G;break;case"type":v=G;break;case"checked":w=G;break;case"defaultChecked":L=G;break;case"value":d=G;break;case"defaultValue":T=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,i));break;default:Xt(e,i,l,G,a,null)}}Io(e,d,T,w,L,v,h,!1),gr(e);return;case"select":Mt("invalid",e),l=v=d=null;for(h in a)if(a.hasOwnProperty(h)&&(T=a[h],T!=null))switch(h){case"value":d=T;break;case"defaultValue":v=T;break;case"multiple":l=T;default:Xt(e,i,h,T,a,null)}i=d,a=v,e.multiple=!!l,i!=null?pr(e,!!l,i,!1):a!=null&&pr(e,!!l,a,!0);return;case"textarea":Mt("invalid",e),d=h=l=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":l=T;break;case"defaultValue":h=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Xt(e,i,v,T,a,null)}mu(e,l,h,d),gr(e);return;case"option":for(w in a)if(a.hasOwnProperty(w)&&(l=a[w],l!=null))switch(w){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Xt(e,i,w,l,a,null)}return;case"dialog":Mt("beforetoggle",e),Mt("toggle",e),Mt("cancel",e),Mt("close",e);break;case"iframe":case"object":Mt("load",e);break;case"video":case"audio":for(l=0;l<gl.length;l++)Mt(gl[l],e);break;case"image":Mt("error",e),Mt("load",e);break;case"details":Mt("toggle",e);break;case"embed":case"source":case"link":Mt("error",e),Mt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in a)if(a.hasOwnProperty(L)&&(l=a[L],l!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Xt(e,i,L,l,a,null)}return;default:if(ma(i)){for(G in a)a.hasOwnProperty(G)&&(l=a[G],l!==void 0&&bd(e,i,G,l,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(l=a[T],l!=null&&Xt(e,i,T,l,a,null))}function xb(e,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,v=null,T=null,w=null,L=null,G=null;for(j in a){var Y=a[j];if(a.hasOwnProperty(j)&&Y!=null)switch(j){case"checked":break;case"value":break;case"defaultValue":w=Y;default:l.hasOwnProperty(j)||Xt(e,i,j,null,l,Y)}}for(var z in l){var j=l[z];if(Y=a[z],l.hasOwnProperty(z)&&(j!=null||Y!=null))switch(z){case"type":d=j;break;case"name":h=j;break;case"checked":L=j;break;case"defaultChecked":G=j;break;case"value":v=j;break;case"defaultValue":T=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(s(137,i));break;default:j!==Y&&Xt(e,i,z,j,l,Y)}}Ro(e,v,T,w,L,G,d,h);return;case"select":j=v=T=z=null;for(d in a)if(w=a[d],a.hasOwnProperty(d)&&w!=null)switch(d){case"value":break;case"multiple":j=w;default:l.hasOwnProperty(d)||Xt(e,i,d,null,l,w)}for(h in l)if(d=l[h],w=a[h],l.hasOwnProperty(h)&&(d!=null||w!=null))switch(h){case"value":z=d;break;case"defaultValue":T=d;break;case"multiple":v=d;default:d!==w&&Xt(e,i,h,d,l,w)}i=T,a=v,l=j,z!=null?pr(e,!!a,z,!1):!!l!=!!a&&(i!=null?pr(e,!!a,i,!0):pr(e,!!a,a?[]:"",!1));return;case"textarea":j=z=null;for(T in a)if(h=a[T],a.hasOwnProperty(T)&&h!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Xt(e,i,T,null,l,h)}for(v in l)if(h=l[v],d=a[v],l.hasOwnProperty(v)&&(h!=null||d!=null))switch(v){case"value":z=h;break;case"defaultValue":j=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&Xt(e,i,v,h,l,d)}du(e,z,j);return;case"option":for(var Et in a)if(z=a[Et],a.hasOwnProperty(Et)&&z!=null&&!l.hasOwnProperty(Et))switch(Et){case"selected":e.selected=!1;break;default:Xt(e,i,Et,null,l,z)}for(w in l)if(z=l[w],j=a[w],l.hasOwnProperty(w)&&z!==j&&(z!=null||j!=null))switch(w){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Xt(e,i,w,z,l,j)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var _t in a)z=a[_t],a.hasOwnProperty(_t)&&z!=null&&!l.hasOwnProperty(_t)&&Xt(e,i,_t,null,l,z);for(L in l)if(z=l[L],j=a[L],l.hasOwnProperty(L)&&z!==j&&(z!=null||j!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,i));break;default:Xt(e,i,L,z,l,j)}return;default:if(ma(i)){for(var $t in a)z=a[$t],a.hasOwnProperty($t)&&z!==void 0&&!l.hasOwnProperty($t)&&bd(e,i,$t,void 0,l,z);for(G in l)z=l[G],j=a[G],!l.hasOwnProperty(G)||z===j||z===void 0&&j===void 0||bd(e,i,G,z,l,j);return}}for(var x in a)z=a[x],a.hasOwnProperty(x)&&z!=null&&!l.hasOwnProperty(x)&&Xt(e,i,x,null,l,z);for(Y in l)z=l[Y],j=a[Y],!l.hasOwnProperty(Y)||z===j||z==null&&j==null||Xt(e,i,Y,z,l,j)}var Sd=null,wd=null;function mc(e){return e.nodeType===9?e:e.ownerDocument}function T_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function E_(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Rd(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Id=null;function Pb(){var e=window.event;return e&&e.type==="popstate"?e===Id?!1:(Id=e,!0):(Id=null,!1)}var A_=typeof setTimeout=="function"?setTimeout:void 0,kb=typeof clearTimeout=="function"?clearTimeout:void 0,b_=typeof Promise=="function"?Promise:void 0,Ub=typeof queueMicrotask=="function"?queueMicrotask:typeof b_<"u"?function(e){return b_.resolve(null).then(e).catch(Lb)}:A_;function Lb(e){setTimeout(function(){throw e})}function kr(e){return e==="head"}function S_(e,i){var a=i,l=0,h=0;do{var d=a.nextSibling;if(e.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<l&&8>l){a=l;var v=e.ownerDocument;if(a&1&&yl(v.documentElement),a&2&&yl(v.body),a&4)for(a=v.head,yl(a),v=a.firstChild;v;){var T=v.nextSibling,w=v.nodeName;v[hr]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&v.rel.toLowerCase()==="stylesheet"||a.removeChild(v),v=T}}if(h===0){e.removeChild(d),wl(i);return}h--}else a==="$"||a==="$?"||a==="$!"?h++:l=a.charCodeAt(0)-48;else l=0;a=d}while(a);wl(i)}function Cd(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Cd(a),ua(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function zb(e,i,a,l){for(;e.nodeType===1;){var h=a;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[hr])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Wn(e.nextSibling),e===null)break}return null}function jb(e,i,a){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Wn(e.nextSibling),e===null))return null;return e}function Dd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Bb(e,i){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Wn(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var Nd=null;function w_(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return e;i--}else a==="/$"&&i++}e=e.previousSibling}return null}function R_(e,i,a){switch(i=mc(a),e){case"html":if(e=i.documentElement,!e)throw Error(s(452));return e;case"head":if(e=i.head,!e)throw Error(s(453));return e;case"body":if(e=i.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function yl(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);ua(e)}var Bn=new Map,I_=new Set;function gc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Zi=nt.d;nt.d={f:qb,r:Hb,D:Fb,C:Gb,L:Qb,m:Kb,X:Xb,S:Yb,M:$b};function qb(){var e=Zi.f(),i=ac();return e||i}function Hb(e){var i=ci(e);i!==null&&i.tag===5&&i.type==="form"?Kp(i):Zi.r(e)}var Qa=typeof document>"u"?null:document;function C_(e,i,a){var l=Qa;if(l&&typeof i=="string"&&i){var h=xe(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),I_.has(h)||(I_.add(h),e={rel:e,crossOrigin:a,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),He(i,"link",e),ye(i),l.head.appendChild(i)))}}function Fb(e){Zi.D(e),C_("dns-prefetch",e,null)}function Gb(e,i){Zi.C(e,i),C_("preconnect",e,i)}function Qb(e,i,a){Zi.L(e,i,a);var l=Qa;if(l&&e&&i){var h='link[rel="preload"][as="'+xe(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+xe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+xe(a.imageSizes)+'"]')):h+='[href="'+xe(e)+'"]';var d=h;switch(i){case"style":d=Ka(e);break;case"script":d=Ya(e)}Bn.has(d)||(e=E({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:e,as:i},a),Bn.set(d,e),l.querySelector(h)!==null||i==="style"&&l.querySelector(_l(d))||i==="script"&&l.querySelector(vl(d))||(i=l.createElement("link"),He(i,"link",e),ye(i),l.head.appendChild(i)))}}function Kb(e,i){Zi.m(e,i);var a=Qa;if(a&&e){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+xe(l)+'"][href="'+xe(e)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Ya(e)}if(!Bn.has(d)&&(e=E({rel:"modulepreload",href:e},i),Bn.set(d,e),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(vl(d)))return}l=a.createElement("link"),He(l,"link",e),ye(l),a.head.appendChild(l)}}}function Yb(e,i,a){Zi.S(e,i,a);var l=Qa;if(l&&e){var h=dr(l).hoistableStyles,d=Ka(e);i=i||"default";var v=h.get(d);if(!v){var T={loading:0,preload:null};if(v=l.querySelector(_l(d)))T.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":i},a),(a=Bn.get(d))&&Od(e,a);var w=v=l.createElement("link");ye(w),He(w,"link",e),w._p=new Promise(function(L,G){w.onload=L,w.onerror=G}),w.addEventListener("load",function(){T.loading|=1}),w.addEventListener("error",function(){T.loading|=2}),T.loading|=4,pc(v,i,l)}v={type:"stylesheet",instance:v,count:1,state:T},h.set(d,v)}}}function Xb(e,i){Zi.X(e,i);var a=Qa;if(a&&e){var l=dr(a).hoistableScripts,h=Ya(e),d=l.get(h);d||(d=a.querySelector(vl(h)),d||(e=E({src:e,async:!0},i),(i=Bn.get(h))&&Md(e,i),d=a.createElement("script"),ye(d),He(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function $b(e,i){Zi.M(e,i);var a=Qa;if(a&&e){var l=dr(a).hoistableScripts,h=Ya(e),d=l.get(h);d||(d=a.querySelector(vl(h)),d||(e=E({src:e,async:!0,type:"module"},i),(i=Bn.get(h))&&Md(e,i),d=a.createElement("script"),ye(d),He(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function D_(e,i,a,l){var h=(h=it.current)?gc(h):null;if(!h)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=Ka(a.href),a=dr(h).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ka(a.href);var d=dr(h).hoistableStyles,v=d.get(e);if(v||(h=h.ownerDocument||h,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,v),(d=h.querySelector(_l(e)))&&!d._p&&(v.instance=d,v.state.loading=5),Bn.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Bn.set(e,a),d||Zb(h,e,a,v.state))),i&&l===null)throw Error(s(528,""));return v}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Ya(a),a=dr(h).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Ka(e){return'href="'+xe(e)+'"'}function _l(e){return'link[rel="stylesheet"]['+e+"]"}function N_(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function Zb(e,i,a,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),He(i,"link",a),ye(i),e.head.appendChild(i))}function Ya(e){return'[src="'+xe(e)+'"]'}function vl(e){return"script[async]"+e}function O_(e,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+xe(a.href)+'"]');if(l)return i.instance=l,ye(l),l;var h=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),ye(l),He(l,"style",h),pc(l,a.precedence,e),i.instance=l;case"stylesheet":h=Ka(a.href);var d=e.querySelector(_l(h));if(d)return i.state.loading|=4,i.instance=d,ye(d),d;l=N_(a),(h=Bn.get(h))&&Od(l,h),d=(e.ownerDocument||e).createElement("link"),ye(d);var v=d;return v._p=new Promise(function(T,w){v.onload=T,v.onerror=w}),He(d,"link",l),i.state.loading|=4,pc(d,a.precedence,e),i.instance=d;case"script":return d=Ya(a.src),(h=e.querySelector(vl(d)))?(i.instance=h,ye(h),h):(l=a,(h=Bn.get(d))&&(l=E({},a),Md(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),ye(h),He(h,"link",l),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,pc(l,a.precedence,e));return i.instance}function pc(e,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,v=0;v<l.length;v++){var T=l[v];if(T.dataset.precedence===i)d=T;else if(d!==h)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(e,i.firstChild))}function Od(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Md(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var yc=null;function M_(e,i,a){if(yc===null){var l=new Map,h=yc=new Map;h.set(a,l)}else h=yc,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),h=0;h<a.length;h++){var d=a[h];if(!(d[hr]||d[pe]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(i)||"";v=e+v;var T=l.get(v);T?T.push(d):l.set(v,[d])}}return l}function V_(e,i,a){e=e.ownerDocument||e,e.head.insertBefore(a,i==="title"?e.querySelector("head > title"):null)}function Jb(e,i,a){if(a===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function x_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Tl=null;function Wb(){}function t1(e,i,a){if(Tl===null)throw Error(s(475));var l=Tl;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=Ka(a.href),d=e.querySelector(_l(h));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=_c.bind(l),e.then(l,l)),i.state.loading|=4,i.instance=d,ye(d);return}d=e.ownerDocument||e,a=N_(a),(h=Bn.get(h))&&Od(a,h),d=d.createElement("link"),ye(d);var v=d;v._p=new Promise(function(T,w){v.onload=T,v.onerror=w}),He(d,"link",a),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=_c.bind(l),e.addEventListener("load",i),e.addEventListener("error",i))}}function e1(){if(Tl===null)throw Error(s(475));var e=Tl;return e.stylesheets&&e.count===0&&Vd(e,e.stylesheets),0<e.count?function(i){var a=setTimeout(function(){if(e.stylesheets&&Vd(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(a)}}:null}function _c(){if(this.count--,this.count===0){if(this.stylesheets)Vd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var vc=null;function Vd(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,vc=new Map,i.forEach(n1,e),vc=null,_c.call(e))}function n1(e,i){if(!(i.state.loading&4)){var a=vc.get(e);if(a)var l=a.get(null);else{a=new Map,vc.set(e,a);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var v=h[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),l=v)}l&&a.set(null,l)}h=i.instance,v=h.getAttribute("data-precedence"),d=a.get(v)||l,d===l&&a.set(null,h),a.set(v,h),this.count++,l=_c.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var El={$$typeof:ht,Provider:null,Consumer:null,_currentValue:ft,_currentValue2:ft,_threadCount:0};function i1(e,i,a,l,h,d,v,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=la(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=la(0),this.hiddenUpdates=la(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function P_(e,i,a,l,h,d,v,T,w,L,G,Y){return e=new i1(e,i,a,v,T,w,L,Y),i=1,d===!0&&(i|=24),d=Tn(3,null,null,i),e.current=d,d.stateNode=e,i=mf(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},_f(d),e}function k_(e){return e?(e=wa,e):wa}function U_(e,i,a,l,h,d){h=k_(h),l.context===null?l.context=h:l.pendingContext=h,l=br(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=Sr(e,l,i),a!==null&&(wn(a,e,i),Zo(a,e,i))}function L_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<i?a:i}}function xd(e,i){L_(e,i),(e=e.alternate)&&L_(e,i)}function z_(e){if(e.tag===13){var i=Sa(e,67108864);i!==null&&wn(i,e,67108864),xd(e,67108864)}}var Tc=!0;function r1(e,i,a,l){var h=F.T;F.T=null;var d=nt.p;try{nt.p=2,Pd(e,i,a,l)}finally{nt.p=d,F.T=h}}function s1(e,i,a,l){var h=F.T;F.T=null;var d=nt.p;try{nt.p=8,Pd(e,i,a,l)}finally{nt.p=d,F.T=h}}function Pd(e,i,a,l){if(Tc){var h=kd(l);if(h===null)Ad(e,i,l,Ec,a),B_(e,l);else if(o1(h,e,i,a,l))l.stopPropagation();else if(B_(e,l),i&4&&-1<a1.indexOf(e)){for(;h!==null;){var d=ci(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=Fn(d.pendingLanes);if(v!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var w=1<<31-rn(v);T.entanglements[1]|=w,v&=~w}Ti(d),(Gt&6)===0&&(rc=me()+500,ml(0))}}break;case 13:T=Sa(d,2),T!==null&&wn(T,d,2),ac(),xd(d,2)}if(d=kd(l),d===null&&Ad(e,i,l,Ec,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else Ad(e,i,l,null,a)}}function kd(e){return e=Mo(e),Ud(e)}var Ec=null;function Ud(e){if(Ec=null,e=ui(e),e!==null){var i=u(e);if(i===null)e=null;else{var a=i.tag;if(a===13){if(e=f(i),e!==null)return e;e=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Ec=e,null}function j_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Hn()){case ne:return 2;case Ae:return 8;case ai:case Eo:return 32;case Ao:return 268435456;default:return 32}default:return 32}}var Ld=!1,Ur=null,Lr=null,zr=null,Al=new Map,bl=new Map,jr=[],a1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function B_(e,i){switch(e){case"focusin":case"focusout":Ur=null;break;case"dragenter":case"dragleave":Lr=null;break;case"mouseover":case"mouseout":zr=null;break;case"pointerover":case"pointerout":Al.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":bl.delete(i.pointerId)}}function Sl(e,i,a,l,h,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},i!==null&&(i=ci(i),i!==null&&z_(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function o1(e,i,a,l,h){switch(i){case"focusin":return Ur=Sl(Ur,e,i,a,l,h),!0;case"dragenter":return Lr=Sl(Lr,e,i,a,l,h),!0;case"mouseover":return zr=Sl(zr,e,i,a,l,h),!0;case"pointerover":var d=h.pointerId;return Al.set(d,Sl(Al.get(d)||null,e,i,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,bl.set(d,Sl(bl.get(d)||null,e,i,a,l,h)),!0}return!1}function q_(e){var i=ui(e.target);if(i!==null){var a=u(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){e.blockedOn=i,Fh(e.priority,function(){if(a.tag===13){var l=Sn();l=So(l);var h=Sa(a,l);h!==null&&wn(h,a,l),xd(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ac(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var a=kd(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Oo=l,a.target.dispatchEvent(l),Oo=null}else return i=ci(a),i!==null&&z_(i),e.blockedOn=a,!1;i.shift()}return!0}function H_(e,i,a){Ac(e)&&a.delete(i)}function l1(){Ld=!1,Ur!==null&&Ac(Ur)&&(Ur=null),Lr!==null&&Ac(Lr)&&(Lr=null),zr!==null&&Ac(zr)&&(zr=null),Al.forEach(H_),bl.forEach(H_)}function bc(e,i){e.blockedOn===i&&(e.blockedOn=null,Ld||(Ld=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,l1)))}var Sc=null;function F_(e){Sc!==e&&(Sc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Sc===e&&(Sc=null);for(var i=0;i<e.length;i+=3){var a=e[i],l=e[i+1],h=e[i+2];if(typeof l!="function"){if(Ud(l||a)===null)continue;break}var d=ci(a);d!==null&&(e.splice(i,3),i-=3,Uf(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function wl(e){function i(w){return bc(w,e)}Ur!==null&&bc(Ur,e),Lr!==null&&bc(Lr,e),zr!==null&&bc(zr,e),Al.forEach(i),bl.forEach(i);for(var a=0;a<jr.length;a++){var l=jr[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<jr.length&&(a=jr[0],a.blockedOn===null);)q_(a),a.blockedOn===null&&jr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],v=h[je]||null;if(typeof d=="function")v||F_(a);else if(v){var T=null;if(d&&d.hasAttribute("formAction")){if(h=d,v=d[je]||null)T=v.formAction;else if(Ud(h)!==null)continue}else T=v.action;typeof T=="function"?a[l+1]=T:(a.splice(l,3),l-=3),F_(a)}}}function zd(e){this._internalRoot=e}wc.prototype.render=zd.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=Sn();U_(a,l,e,i,null,null)},wc.prototype.unmount=zd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;U_(e.current,2,null,e,null,null),ac(),i[Vi]=null}};function wc(e){this._internalRoot=e}wc.prototype.unstable_scheduleHydration=function(e){if(e){var i=Mi();e={blockedOn:null,target:e,priority:i};for(var a=0;a<jr.length&&i!==0&&i<jr[a].priority;a++);jr.splice(a,0,e),a===0&&q_(e)}};var G_=t.version;if(G_!=="19.1.1")throw Error(s(527,G_,"19.1.1"));nt.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=y(i),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var u1={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rc.isDisabled&&Rc.supportsFiber)try{sr=Rc.inject(u1),Xe=Rc}catch{}}return Il.createRoot=function(e,i){if(!o(e))throw Error(s(299));var a=!1,l="",h=oy,d=ly,v=uy,T=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(T=i.unstable_transitionCallbacks)),i=P_(e,1,!1,null,null,a,l,h,d,v,T,null),e[Vi]=i.current,Ed(e),new zd(i)},Il.hydrateRoot=function(e,i,a){if(!o(e))throw Error(s(299));var l=!1,h="",d=oy,v=ly,T=uy,w=null,L=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(w=a.unstable_transitionCallbacks),a.formState!==void 0&&(L=a.formState)),i=P_(e,1,!0,i,a??null,l,h,d,v,T,w,L),i.context=k_(null),a=i.current,l=Sn(),l=So(l),h=br(l),h.callback=null,Sr(a,h,l),a=l,i.current.lanes=a,ge(i,a),Ti(i),e[Vi]=i.current,Ed(e),new wc(i)},Il.version="19.1.1",Il}var ev;function T1(){if(ev)return qd.exports;ev=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),qd.exports=v1(),qd.exports}var E1=T1();const A1=qT(E1);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),S1=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,s)=>s?s.toUpperCase():n.toLowerCase()),nv=r=>{const t=S1(r);return t.charAt(0).toUpperCase()+t.slice(1)},HT=(...r)=>r.filter((t,n,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===n).join(" ").trim(),w1=r=>{for(const t in r)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var R1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=re.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:o="",children:u,iconNode:f,...g},y)=>re.createElement("svg",{ref:y,...R1,width:t,height:t,stroke:r,strokeWidth:s?Number(n)*24/Number(t):n,className:HT("lucide",o),...!u&&!w1(g)&&{"aria-hidden":"true"},...g},[...f.map(([p,E])=>re.createElement(p,E)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=(r,t)=>{const n=re.forwardRef(({className:s,...o},u)=>re.createElement(I1,{ref:u,iconNode:t,className:HT(`lucide-${b1(nv(r))}`,`lucide-${r}`,s),...o}));return n.displayName=nv(r),n};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],D1=Xl("plus",C1);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],O1=Xl("refresh-cw",N1);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],V1=Xl("rotate-cw",M1);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],iv=Xl("share-2",x1);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],k1=Xl("trash-2",P1),U1=()=>{};var rv={};/**
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
 */const FT=function(r){const t=[];let n=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},L1=function(r){const t=[];let n=0,s=0;for(;n<r.length;){const o=r[n++];if(o<128)t[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[n++];t[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[n++],f=r[n++],g=r[n++],y=((o&7)<<18|(u&63)<<12|(f&63)<<6|g&63)-65536;t[s++]=String.fromCharCode(55296+(y>>10)),t[s++]=String.fromCharCode(56320+(y&1023))}else{const u=r[n++],f=r[n++];t[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return t.join("")},GT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],f=o+1<r.length,g=f?r[o+1]:0,y=o+2<r.length,p=y?r[o+2]:0,E=u>>2,S=(u&3)<<4|g>>4;let C=(g&15)<<2|p>>6,H=p&63;y||(H=64,f||(C=64)),s.push(n[E],n[S],n[C],n[H])}return s.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(FT(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):L1(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=n[r.charAt(o++)],g=o<r.length?n[r.charAt(o)]:0;++o;const p=o<r.length?n[r.charAt(o)]:64;++o;const S=o<r.length?n[r.charAt(o)]:64;if(++o,u==null||g==null||p==null||S==null)throw new z1;const C=u<<2|g>>4;if(s.push(C),p!==64){const H=g<<4&240|p>>2;if(s.push(H),S!==64){const J=p<<6&192|S;s.push(J)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class z1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const j1=function(r){const t=FT(r);return GT.encodeByteArray(t,!0)},Fc=function(r){return j1(r).replace(/\./g,"")},QT=function(r){try{return GT.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function B1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const q1=()=>B1().__FIREBASE_DEFAULTS__,H1=()=>{if(typeof process>"u"||typeof rv>"u")return;const r=rv.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},F1=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&QT(r[1]);return t&&JSON.parse(t)},ph=()=>{try{return U1()||q1()||H1()||F1()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},KT=r=>ph()?.emulatorHosts?.[r],G1=r=>{const t=KT(r);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},YT=()=>ph()?.config,XT=r=>ph()?.[`_${r}`];/**
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
 */class Q1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
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
 */function mo(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function $T(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function K1(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Fc(JSON.stringify(n)),Fc(JSON.stringify(f)),""].join(".")}const Ml={};function Y1(){const r={prod:[],emulator:[]};for(const t of Object.keys(Ml))Ml[t]?r.emulator.push(t):r.prod.push(t);return r}function X1(r){let t=document.getElementById(r),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",r),n=!0),{created:n,element:t}}let sv=!1;function ZT(r,t){if(typeof window>"u"||typeof document>"u"||!mo(window.location.host)||Ml[r]===t||Ml[r]||sv)return;Ml[r]=t;function n(C){return`__firebase__banner__${C}`}const s="__firebase__banner",u=Y1().prod.length>0;function f(){const C=document.getElementById(s);C&&C.remove()}function g(C){C.style.display="flex",C.style.background="#7faaf0",C.style.position="fixed",C.style.bottom="5px",C.style.left="5px",C.style.padding=".5em",C.style.borderRadius="5px",C.style.alignItems="center"}function y(C,H){C.setAttribute("width","24"),C.setAttribute("id",H),C.setAttribute("height","24"),C.setAttribute("viewBox","0 0 24 24"),C.setAttribute("fill","none"),C.style.marginLeft="-6px"}function p(){const C=document.createElement("span");return C.style.cursor="pointer",C.style.marginLeft="16px",C.style.fontSize="24px",C.innerHTML=" &times;",C.onclick=()=>{sv=!0,f()},C}function E(C,H){C.setAttribute("id",H),C.innerText="Learn more",C.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",C.setAttribute("target","__blank"),C.style.paddingLeft="5px",C.style.textDecoration="underline"}function S(){const C=X1(s),H=n("text"),J=document.getElementById(H)||document.createElement("span"),tt=n("learnmore"),W=document.getElementById(tt)||document.createElement("a"),yt=n("preprendIcon"),At=document.getElementById(yt)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(C.created){const ht=C.element;g(ht),E(W,tt);const jt=p();y(At,yt),ht.append(At,J,W,jt),document.body.appendChild(ht)}u?(J.innerText="Preview backend disconnected.",At.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(At.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,J.innerText="Preview backend running in this workspace."),J.setAttribute("id",H)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",S):S()}/**
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
 */function en(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(en())}function Z1(){const r=ph()?.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function J1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function JT(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function W1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tS(){const r=en();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function eS(){return!Z1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function WT(){try{return typeof indexedDB=="object"}catch{return!1}}function t0(){return new Promise((r,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{t(o.error?.message||"")}}catch(n){t(n)}})}function nS(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const iS="FirebaseError";class si extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=iS,Object.setPrototypeOf(this,si.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ia.prototype.create)}}class ia{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},o=`${this.service}/${t}`,u=this.errors[t],f=u?rS(u,s):"Error",g=`${this.serviceName}: ${f} (${o}).`;return new si(o,g,s)}}function rS(r,t){return r.replace(sS,(n,s)=>{const o=t[s];return o!=null?String(o):`<${s}?>`})}const sS=/\{\$([^}]+)}/g;function aS(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}function ts(r,t){if(r===t)return!0;const n=Object.keys(r),s=Object.keys(t);for(const o of n){if(!s.includes(o))return!1;const u=r[o],f=t[o];if(av(u)&&av(f)){if(!ts(u,f))return!1}else if(u!==f)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function av(r){return r!==null&&typeof r=="object"}/**
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
 */function $l(r){const t=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function oS(r,t){const n=new lS(r,t);return n.subscribe.bind(n)}class lS{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,s){let o;if(t===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");uS(t,["next","error","complete"])?o=t:o={next:t,error:n,complete:s},o.next===void 0&&(o.next=Qd),o.error===void 0&&(o.error=Qd),o.complete===void 0&&(o.complete=Qd);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function uS(r,t){if(typeof r!="object"||r===null)return!1;for(const n of t)if(n in r&&typeof r[n]=="function")return!0;return!1}function Qd(){}/**
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
 */const cS=1e3,hS=2,fS=14400*1e3,dS=.5;function ov(r,t=cS,n=hS){const s=t*Math.pow(n,r),o=Math.round(dS*s*(Math.random()-.5)*2);return Math.min(fS,s+o)}/**
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
 */function Me(r){return r&&r._delegate?r._delegate:r}class ii{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Ks="[DEFAULT]";/**
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
 */class mS{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new Q1;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t?.identifier),s=t?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(pS(t))try{this.getOrInitializeService({instanceIdentifier:Ks})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(t=Ks){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ks){return this.instances.has(t)}getOptions(t=Ks){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,f]of this.instancesDeferred.entries()){const g=this.normalizeInstanceIdentifier(u);s===g&&f.resolve(o)}return o}onInit(t,n){const s=this.normalizeInstanceIdentifier(n),o=this.onInitCallbacks.get(s)??new Set;o.add(t),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&t(u,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:gS(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Ks){return this.component?this.component.multipleInstances?t:Ks:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gS(r){return r===Ks?void 0:r}function pS(r){return r.instantiationMode==="EAGER"}/**
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
 */class yS{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new mS(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Vt;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Vt||(Vt={}));const _S={debug:Vt.DEBUG,verbose:Vt.VERBOSE,info:Vt.INFO,warn:Vt.WARN,error:Vt.ERROR,silent:Vt.SILENT},vS=Vt.INFO,TS={[Vt.DEBUG]:"log",[Vt.VERBOSE]:"log",[Vt.INFO]:"info",[Vt.WARN]:"warn",[Vt.ERROR]:"error"},ES=(r,t,...n)=>{if(t<r.logLevel)return;const s=new Date().toISOString(),o=TS[t];if(o)console[o](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class yh{constructor(t){this.name=t,this._logLevel=vS,this._logHandler=ES,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Vt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?_S[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Vt.DEBUG,...t),this._logHandler(this,Vt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Vt.VERBOSE,...t),this._logHandler(this,Vt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Vt.INFO,...t),this._logHandler(this,Vt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Vt.WARN,...t),this._logHandler(this,Vt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Vt.ERROR,...t),this._logHandler(this,Vt.ERROR,...t)}}const AS=(r,t)=>t.some(n=>r instanceof n);let lv,uv;function bS(){return lv||(lv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function SS(){return uv||(uv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const e0=new WeakMap,am=new WeakMap,n0=new WeakMap,Kd=new WeakMap,Vm=new WeakMap;function wS(r){const t=new Promise((n,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",f)},u=()=>{n(Yr(r.result)),o()},f=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",f)});return t.then(n=>{n instanceof IDBCursor&&e0.set(n,r)}).catch(()=>{}),Vm.set(t,r),t}function RS(r){if(am.has(r))return;const t=new Promise((n,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",f),r.removeEventListener("abort",f)},u=()=>{n(),o()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",f),r.addEventListener("abort",f)});am.set(r,t)}let om={get(r,t,n){if(r instanceof IDBTransaction){if(t==="done")return am.get(r);if(t==="objectStoreNames")return r.objectStoreNames||n0.get(r);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yr(r[t])},set(r,t,n){return r[t]=n,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function IS(r){om=r(om)}function CS(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=r.call(Yd(this),t,...n);return n0.set(s,t.sort?t.sort():[t]),Yr(s)}:SS().includes(r)?function(...t){return r.apply(Yd(this),t),Yr(e0.get(this))}:function(...t){return Yr(r.apply(Yd(this),t))}}function DS(r){return typeof r=="function"?CS(r):(r instanceof IDBTransaction&&RS(r),AS(r,bS())?new Proxy(r,om):r)}function Yr(r){if(r instanceof IDBRequest)return wS(r);if(Kd.has(r))return Kd.get(r);const t=DS(r);return t!==r&&(Kd.set(r,t),Vm.set(t,r)),t}const Yd=r=>Vm.get(r);function i0(r,t,{blocked:n,upgrade:s,blocking:o,terminated:u}={}){const f=indexedDB.open(r,t),g=Yr(f);return s&&f.addEventListener("upgradeneeded",y=>{s(Yr(f.result),y.oldVersion,y.newVersion,Yr(f.transaction),y)}),n&&f.addEventListener("blocked",y=>n(y.oldVersion,y.newVersion,y)),g.then(y=>{u&&y.addEventListener("close",()=>u()),o&&y.addEventListener("versionchange",p=>o(p.oldVersion,p.newVersion,p))}).catch(()=>{}),g}const NS=["get","getKey","getAll","getAllKeys","count"],OS=["put","add","delete","clear"],Xd=new Map;function cv(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(Xd.get(t))return Xd.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,o=OS.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||NS.includes(n)))return;const u=async function(f,...g){const y=this.transaction(f,o?"readwrite":"readonly");let p=y.store;return s&&(p=p.index(g.shift())),(await Promise.all([p[n](...g),o&&y.done]))[0]};return Xd.set(t,u),u}IS(r=>({...r,get:(t,n,s)=>cv(t,n)||r.get(t,n,s),has:(t,n)=>!!cv(t,n)||r.has(t,n)}));/**
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
 */class MS{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(VS(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function VS(r){return r.getComponent()?.type==="VERSION"}const lm="@firebase/app",hv="0.14.3";/**
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
 */const tr=new yh("@firebase/app"),xS="@firebase/app-compat",PS="@firebase/analytics-compat",kS="@firebase/analytics",US="@firebase/app-check-compat",LS="@firebase/app-check",zS="@firebase/auth",jS="@firebase/auth-compat",BS="@firebase/database",qS="@firebase/data-connect",HS="@firebase/database-compat",FS="@firebase/functions",GS="@firebase/functions-compat",QS="@firebase/installations",KS="@firebase/installations-compat",YS="@firebase/messaging",XS="@firebase/messaging-compat",$S="@firebase/performance",ZS="@firebase/performance-compat",JS="@firebase/remote-config",WS="@firebase/remote-config-compat",tw="@firebase/storage",ew="@firebase/storage-compat",nw="@firebase/firestore",iw="@firebase/ai",rw="@firebase/firestore-compat",sw="firebase",aw="12.3.0";/**
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
 */const um="[DEFAULT]",ow={[lm]:"fire-core",[xS]:"fire-core-compat",[kS]:"fire-analytics",[PS]:"fire-analytics-compat",[LS]:"fire-app-check",[US]:"fire-app-check-compat",[zS]:"fire-auth",[jS]:"fire-auth-compat",[BS]:"fire-rtdb",[qS]:"fire-data-connect",[HS]:"fire-rtdb-compat",[FS]:"fire-fn",[GS]:"fire-fn-compat",[QS]:"fire-iid",[KS]:"fire-iid-compat",[YS]:"fire-fcm",[XS]:"fire-fcm-compat",[$S]:"fire-perf",[ZS]:"fire-perf-compat",[JS]:"fire-rc",[WS]:"fire-rc-compat",[tw]:"fire-gcs",[ew]:"fire-gcs-compat",[nw]:"fire-fst",[rw]:"fire-fst-compat",[iw]:"fire-vertex","fire-js":"fire-js",[sw]:"fire-js-all"};/**
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
 */const Gc=new Map,lw=new Map,cm=new Map;function fv(r,t){try{r.container.addComponent(t)}catch(n){tr.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,n)}}function Di(r){const t=r.name;if(cm.has(t))return tr.debug(`There were multiple attempts to register component ${t}.`),!1;cm.set(t,r);for(const n of Gc.values())fv(n,r);for(const n of lw.values())fv(n,r);return!0}function ra(r,t){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(t)}function ti(r){return r==null?!1:r.settings!==void 0}/**
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
 */const uw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xr=new ia("app","Firebase",uw);/**
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
 */class cw{constructor(t,n,s){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ii("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Xr.create("app-deleted",{appName:this._name})}}/**
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
 */const go=aw;function r0(r,t={}){let n=r;typeof t!="object"&&(t={name:t});const s={name:um,automaticDataCollectionEnabled:!0,...t},o=s.name;if(typeof o!="string"||!o)throw Xr.create("bad-app-name",{appName:String(o)});if(n||(n=YT()),!n)throw Xr.create("no-options");const u=Gc.get(o);if(u){if(ts(n,u.options)&&ts(s,u.config))return u;throw Xr.create("duplicate-app",{appName:o})}const f=new yS(o);for(const y of cm.values())f.addComponent(y);const g=new cw(n,s,f);return Gc.set(o,g),g}function xm(r=um){const t=Gc.get(r);if(!t&&r===um&&YT())return r0();if(!t)throw Xr.create("no-app",{appName:r});return t}function qn(r,t,n){let s=ow[r]??r;n&&(s+=`-${n}`);const o=s.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const f=[`Unable to register library "${s}" with version "${t}":`];o&&f.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&f.push("and"),u&&f.push(`version name "${t}" contains illegal characters (whitespace or "/")`),tr.warn(f.join(" "));return}Di(new ii(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const hw="firebase-heartbeat-database",fw=1,jl="firebase-heartbeat-store";let $d=null;function s0(){return $d||($d=i0(hw,fw,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(jl)}catch(n){console.warn(n)}}}}).catch(r=>{throw Xr.create("idb-open",{originalErrorMessage:r.message})})),$d}async function dw(r){try{const n=(await s0()).transaction(jl),s=await n.objectStore(jl).get(a0(r));return await n.done,s}catch(t){if(t instanceof si)tr.warn(t.message);else{const n=Xr.create("idb-get",{originalErrorMessage:t?.message});tr.warn(n.message)}}}async function dv(r,t){try{const s=(await s0()).transaction(jl,"readwrite");await s.objectStore(jl).put(t,a0(r)),await s.done}catch(n){if(n instanceof si)tr.warn(n.message);else{const s=Xr.create("idb-set",{originalErrorMessage:n?.message});tr.warn(s.message)}}}function a0(r){return`${r.name}!${r.options.appId}`}/**
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
 */const mw=1024,gw=30;class pw{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _w(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=mv();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>gw){const o=vw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){tr.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=mv(),{heartbeatsToSend:n,unsentEntries:s}=yw(this._heartbeatsCache.heartbeats),o=Fc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return tr.warn(t),""}}}function mv(){return new Date().toISOString().substring(0,10)}function yw(r,t=mw){const n=[];let s=r.slice();for(const o of r){const u=n.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),gv(n)>t){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),gv(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class _w{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return WT()?t0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await dw(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const s=await this.read();return dv(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const s=await this.read();return dv(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function gv(r){return Fc(JSON.stringify({version:2,heartbeats:r})).length}function vw(r){if(r.length===0)return-1;let t=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,t=s);return t}/**
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
 */function Tw(r){Di(new ii("platform-logger",t=>new MS(t),"PRIVATE")),Di(new ii("heartbeat",t=>new pw(t),"PRIVATE")),qn(lm,hv,r),qn(lm,hv,"esm2020"),qn("fire-js","")}Tw("");var Ew="firebase",Aw="12.3.0";/**
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
 */qn(Ew,Aw,"app");var pv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $r,o0;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(O,b){function R(){}R.prototype=b.prototype,O.F=b.prototype,O.prototype=new R,O.prototype.constructor=O,O.D=function(V,N,P){for(var I=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)I[ae-2]=arguments[ae];return b.prototype[N].apply(V,I)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(s,n),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(O,b,R){R||(R=0);const V=Array(16);if(typeof b=="string")for(var N=0;N<16;++N)V[N]=b.charCodeAt(R++)|b.charCodeAt(R++)<<8|b.charCodeAt(R++)<<16|b.charCodeAt(R++)<<24;else for(N=0;N<16;++N)V[N]=b[R++]|b[R++]<<8|b[R++]<<16|b[R++]<<24;b=O.g[0],R=O.g[1],N=O.g[2];let P=O.g[3],I;I=b+(P^R&(N^P))+V[0]+3614090360&4294967295,b=R+(I<<7&4294967295|I>>>25),I=P+(N^b&(R^N))+V[1]+3905402710&4294967295,P=b+(I<<12&4294967295|I>>>20),I=N+(R^P&(b^R))+V[2]+606105819&4294967295,N=P+(I<<17&4294967295|I>>>15),I=R+(b^N&(P^b))+V[3]+3250441966&4294967295,R=N+(I<<22&4294967295|I>>>10),I=b+(P^R&(N^P))+V[4]+4118548399&4294967295,b=R+(I<<7&4294967295|I>>>25),I=P+(N^b&(R^N))+V[5]+1200080426&4294967295,P=b+(I<<12&4294967295|I>>>20),I=N+(R^P&(b^R))+V[6]+2821735955&4294967295,N=P+(I<<17&4294967295|I>>>15),I=R+(b^N&(P^b))+V[7]+4249261313&4294967295,R=N+(I<<22&4294967295|I>>>10),I=b+(P^R&(N^P))+V[8]+1770035416&4294967295,b=R+(I<<7&4294967295|I>>>25),I=P+(N^b&(R^N))+V[9]+2336552879&4294967295,P=b+(I<<12&4294967295|I>>>20),I=N+(R^P&(b^R))+V[10]+4294925233&4294967295,N=P+(I<<17&4294967295|I>>>15),I=R+(b^N&(P^b))+V[11]+2304563134&4294967295,R=N+(I<<22&4294967295|I>>>10),I=b+(P^R&(N^P))+V[12]+1804603682&4294967295,b=R+(I<<7&4294967295|I>>>25),I=P+(N^b&(R^N))+V[13]+4254626195&4294967295,P=b+(I<<12&4294967295|I>>>20),I=N+(R^P&(b^R))+V[14]+2792965006&4294967295,N=P+(I<<17&4294967295|I>>>15),I=R+(b^N&(P^b))+V[15]+1236535329&4294967295,R=N+(I<<22&4294967295|I>>>10),I=b+(N^P&(R^N))+V[1]+4129170786&4294967295,b=R+(I<<5&4294967295|I>>>27),I=P+(R^N&(b^R))+V[6]+3225465664&4294967295,P=b+(I<<9&4294967295|I>>>23),I=N+(b^R&(P^b))+V[11]+643717713&4294967295,N=P+(I<<14&4294967295|I>>>18),I=R+(P^b&(N^P))+V[0]+3921069994&4294967295,R=N+(I<<20&4294967295|I>>>12),I=b+(N^P&(R^N))+V[5]+3593408605&4294967295,b=R+(I<<5&4294967295|I>>>27),I=P+(R^N&(b^R))+V[10]+38016083&4294967295,P=b+(I<<9&4294967295|I>>>23),I=N+(b^R&(P^b))+V[15]+3634488961&4294967295,N=P+(I<<14&4294967295|I>>>18),I=R+(P^b&(N^P))+V[4]+3889429448&4294967295,R=N+(I<<20&4294967295|I>>>12),I=b+(N^P&(R^N))+V[9]+568446438&4294967295,b=R+(I<<5&4294967295|I>>>27),I=P+(R^N&(b^R))+V[14]+3275163606&4294967295,P=b+(I<<9&4294967295|I>>>23),I=N+(b^R&(P^b))+V[3]+4107603335&4294967295,N=P+(I<<14&4294967295|I>>>18),I=R+(P^b&(N^P))+V[8]+1163531501&4294967295,R=N+(I<<20&4294967295|I>>>12),I=b+(N^P&(R^N))+V[13]+2850285829&4294967295,b=R+(I<<5&4294967295|I>>>27),I=P+(R^N&(b^R))+V[2]+4243563512&4294967295,P=b+(I<<9&4294967295|I>>>23),I=N+(b^R&(P^b))+V[7]+1735328473&4294967295,N=P+(I<<14&4294967295|I>>>18),I=R+(P^b&(N^P))+V[12]+2368359562&4294967295,R=N+(I<<20&4294967295|I>>>12),I=b+(R^N^P)+V[5]+4294588738&4294967295,b=R+(I<<4&4294967295|I>>>28),I=P+(b^R^N)+V[8]+2272392833&4294967295,P=b+(I<<11&4294967295|I>>>21),I=N+(P^b^R)+V[11]+1839030562&4294967295,N=P+(I<<16&4294967295|I>>>16),I=R+(N^P^b)+V[14]+4259657740&4294967295,R=N+(I<<23&4294967295|I>>>9),I=b+(R^N^P)+V[1]+2763975236&4294967295,b=R+(I<<4&4294967295|I>>>28),I=P+(b^R^N)+V[4]+1272893353&4294967295,P=b+(I<<11&4294967295|I>>>21),I=N+(P^b^R)+V[7]+4139469664&4294967295,N=P+(I<<16&4294967295|I>>>16),I=R+(N^P^b)+V[10]+3200236656&4294967295,R=N+(I<<23&4294967295|I>>>9),I=b+(R^N^P)+V[13]+681279174&4294967295,b=R+(I<<4&4294967295|I>>>28),I=P+(b^R^N)+V[0]+3936430074&4294967295,P=b+(I<<11&4294967295|I>>>21),I=N+(P^b^R)+V[3]+3572445317&4294967295,N=P+(I<<16&4294967295|I>>>16),I=R+(N^P^b)+V[6]+76029189&4294967295,R=N+(I<<23&4294967295|I>>>9),I=b+(R^N^P)+V[9]+3654602809&4294967295,b=R+(I<<4&4294967295|I>>>28),I=P+(b^R^N)+V[12]+3873151461&4294967295,P=b+(I<<11&4294967295|I>>>21),I=N+(P^b^R)+V[15]+530742520&4294967295,N=P+(I<<16&4294967295|I>>>16),I=R+(N^P^b)+V[2]+3299628645&4294967295,R=N+(I<<23&4294967295|I>>>9),I=b+(N^(R|~P))+V[0]+4096336452&4294967295,b=R+(I<<6&4294967295|I>>>26),I=P+(R^(b|~N))+V[7]+1126891415&4294967295,P=b+(I<<10&4294967295|I>>>22),I=N+(b^(P|~R))+V[14]+2878612391&4294967295,N=P+(I<<15&4294967295|I>>>17),I=R+(P^(N|~b))+V[5]+4237533241&4294967295,R=N+(I<<21&4294967295|I>>>11),I=b+(N^(R|~P))+V[12]+1700485571&4294967295,b=R+(I<<6&4294967295|I>>>26),I=P+(R^(b|~N))+V[3]+2399980690&4294967295,P=b+(I<<10&4294967295|I>>>22),I=N+(b^(P|~R))+V[10]+4293915773&4294967295,N=P+(I<<15&4294967295|I>>>17),I=R+(P^(N|~b))+V[1]+2240044497&4294967295,R=N+(I<<21&4294967295|I>>>11),I=b+(N^(R|~P))+V[8]+1873313359&4294967295,b=R+(I<<6&4294967295|I>>>26),I=P+(R^(b|~N))+V[15]+4264355552&4294967295,P=b+(I<<10&4294967295|I>>>22),I=N+(b^(P|~R))+V[6]+2734768916&4294967295,N=P+(I<<15&4294967295|I>>>17),I=R+(P^(N|~b))+V[13]+1309151649&4294967295,R=N+(I<<21&4294967295|I>>>11),I=b+(N^(R|~P))+V[4]+4149444226&4294967295,b=R+(I<<6&4294967295|I>>>26),I=P+(R^(b|~N))+V[11]+3174756917&4294967295,P=b+(I<<10&4294967295|I>>>22),I=N+(b^(P|~R))+V[2]+718787259&4294967295,N=P+(I<<15&4294967295|I>>>17),I=R+(P^(N|~b))+V[9]+3951481745&4294967295,O.g[0]=O.g[0]+b&4294967295,O.g[1]=O.g[1]+(N+(I<<21&4294967295|I>>>11))&4294967295,O.g[2]=O.g[2]+N&4294967295,O.g[3]=O.g[3]+P&4294967295}s.prototype.v=function(O,b){b===void 0&&(b=O.length);const R=b-this.blockSize,V=this.C;let N=this.h,P=0;for(;P<b;){if(N==0)for(;P<=R;)o(this,O,P),P+=this.blockSize;if(typeof O=="string"){for(;P<b;)if(V[N++]=O.charCodeAt(P++),N==this.blockSize){o(this,V),N=0;break}}else for(;P<b;)if(V[N++]=O[P++],N==this.blockSize){o(this,V),N=0;break}}this.h=N,this.o+=b},s.prototype.A=function(){var O=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);O[0]=128;for(var b=1;b<O.length-8;++b)O[b]=0;b=this.o*8;for(var R=O.length-8;R<O.length;++R)O[R]=b&255,b/=256;for(this.v(O),O=Array(16),b=0,R=0;R<4;++R)for(let V=0;V<32;V+=8)O[b++]=this.g[R]>>>V&255;return O};function u(O,b){var R=g;return Object.prototype.hasOwnProperty.call(R,O)?R[O]:R[O]=b(O)}function f(O,b){this.h=b;const R=[];let V=!0;for(let N=O.length-1;N>=0;N--){const P=O[N]|0;V&&P==b||(R[N]=P,V=!1)}this.g=R}var g={};function y(O){return-128<=O&&O<128?u(O,function(b){return new f([b|0],b<0?-1:0)}):new f([O|0],O<0?-1:0)}function p(O){if(isNaN(O)||!isFinite(O))return S;if(O<0)return W(p(-O));const b=[];let R=1;for(let V=0;O>=R;V++)b[V]=O/R|0,R*=4294967296;return new f(b,0)}function E(O,b){if(O.length==0)throw Error("number format error: empty string");if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(O.charAt(0)=="-")return W(E(O.substring(1),b));if(O.indexOf("-")>=0)throw Error('number format error: interior "-" character');const R=p(Math.pow(b,8));let V=S;for(let P=0;P<O.length;P+=8){var N=Math.min(8,O.length-P);const I=parseInt(O.substring(P,P+N),b);N<8?(N=p(Math.pow(b,N)),V=V.j(N).add(p(I))):(V=V.j(R),V=V.add(p(I)))}return V}var S=y(0),C=y(1),H=y(16777216);r=f.prototype,r.m=function(){if(tt(this))return-W(this).m();let O=0,b=1;for(let R=0;R<this.g.length;R++){const V=this.i(R);O+=(V>=0?V:4294967296+V)*b,b*=4294967296}return O},r.toString=function(O){if(O=O||10,O<2||36<O)throw Error("radix out of range: "+O);if(J(this))return"0";if(tt(this))return"-"+W(this).toString(O);const b=p(Math.pow(O,6));var R=this;let V="";for(;;){const N=jt(R,b).g;R=yt(R,N.j(b));let P=((R.g.length>0?R.g[0]:R.h)>>>0).toString(O);if(R=N,J(R))return P+V;for(;P.length<6;)P="0"+P;V=P+V}},r.i=function(O){return O<0?0:O<this.g.length?this.g[O]:this.h};function J(O){if(O.h!=0)return!1;for(let b=0;b<O.g.length;b++)if(O.g[b]!=0)return!1;return!0}function tt(O){return O.h==-1}r.l=function(O){return O=yt(this,O),tt(O)?-1:J(O)?0:1};function W(O){const b=O.g.length,R=[];for(let V=0;V<b;V++)R[V]=~O.g[V];return new f(R,~O.h).add(C)}r.abs=function(){return tt(this)?W(this):this},r.add=function(O){const b=Math.max(this.g.length,O.g.length),R=[];let V=0;for(let N=0;N<=b;N++){let P=V+(this.i(N)&65535)+(O.i(N)&65535),I=(P>>>16)+(this.i(N)>>>16)+(O.i(N)>>>16);V=I>>>16,P&=65535,I&=65535,R[N]=I<<16|P}return new f(R,R[R.length-1]&-2147483648?-1:0)};function yt(O,b){return O.add(W(b))}r.j=function(O){if(J(this)||J(O))return S;if(tt(this))return tt(O)?W(this).j(W(O)):W(W(this).j(O));if(tt(O))return W(this.j(W(O)));if(this.l(H)<0&&O.l(H)<0)return p(this.m()*O.m());const b=this.g.length+O.g.length,R=[];for(var V=0;V<2*b;V++)R[V]=0;for(V=0;V<this.g.length;V++)for(let N=0;N<O.g.length;N++){const P=this.i(V)>>>16,I=this.i(V)&65535,ae=O.i(N)>>>16,Jt=O.i(N)&65535;R[2*V+2*N]+=I*Jt,At(R,2*V+2*N),R[2*V+2*N+1]+=P*Jt,At(R,2*V+2*N+1),R[2*V+2*N+1]+=I*ae,At(R,2*V+2*N+1),R[2*V+2*N+2]+=P*ae,At(R,2*V+2*N+2)}for(O=0;O<b;O++)R[O]=R[2*O+1]<<16|R[2*O];for(O=b;O<2*b;O++)R[O]=0;return new f(R,0)};function At(O,b){for(;(O[b]&65535)!=O[b];)O[b+1]+=O[b]>>>16,O[b]&=65535,b++}function ht(O,b){this.g=O,this.h=b}function jt(O,b){if(J(b))throw Error("division by zero");if(J(O))return new ht(S,S);if(tt(O))return b=jt(W(O),b),new ht(W(b.g),W(b.h));if(tt(b))return b=jt(O,W(b)),new ht(W(b.g),b.h);if(O.g.length>30){if(tt(O)||tt(b))throw Error("slowDivide_ only works with positive integers.");for(var R=C,V=b;V.l(O)<=0;)R=pt(R),V=pt(V);var N=Dt(R,1),P=Dt(V,1);for(V=Dt(V,2),R=Dt(R,2);!J(V);){var I=P.add(V);I.l(O)<=0&&(N=N.add(R),P=I),V=Dt(V,1),R=Dt(R,1)}return b=yt(O,N.j(b)),new ht(N,b)}for(N=S;O.l(b)>=0;){for(R=Math.max(1,Math.floor(O.m()/b.m())),V=Math.ceil(Math.log(R)/Math.LN2),V=V<=48?1:Math.pow(2,V-48),P=p(R),I=P.j(b);tt(I)||I.l(O)>0;)R-=V,P=p(R),I=P.j(b);J(P)&&(P=C),N=N.add(P),O=yt(O,I)}return new ht(N,O)}r.B=function(O){return jt(this,O).h},r.and=function(O){const b=Math.max(this.g.length,O.g.length),R=[];for(let V=0;V<b;V++)R[V]=this.i(V)&O.i(V);return new f(R,this.h&O.h)},r.or=function(O){const b=Math.max(this.g.length,O.g.length),R=[];for(let V=0;V<b;V++)R[V]=this.i(V)|O.i(V);return new f(R,this.h|O.h)},r.xor=function(O){const b=Math.max(this.g.length,O.g.length),R=[];for(let V=0;V<b;V++)R[V]=this.i(V)^O.i(V);return new f(R,this.h^O.h)};function pt(O){const b=O.g.length+1,R=[];for(let V=0;V<b;V++)R[V]=O.i(V)<<1|O.i(V-1)>>>31;return new f(R,O.h)}function Dt(O,b){const R=b>>5;b%=32;const V=O.g.length-R,N=[];for(let P=0;P<V;P++)N[P]=b>0?O.i(P+R)>>>b|O.i(P+R+1)<<32-b:O.i(P+R);return new f(N,O.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,o0=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.B,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=p,f.fromString=E,$r=f}).apply(typeof pv<"u"?pv:typeof self<"u"?self:typeof window<"u"?window:{});var Ic=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var l0,Cl,u0,xc,hm,c0,h0,f0;(function(){var r,t=Object.defineProperty;function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ic=="object"&&Ic];for(var m=0;m<c.length;++m){var _=c[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=n(this);function o(c,m){if(m)t:{var _=s;c=c.split(".");for(var A=0;A<c.length-1;A++){var U=c[A];if(!(U in _))break t;_=_[U]}c=c[c.length-1],A=_[c],m=m(A),m!=A&&m!=null&&t(_,c,{configurable:!0,writable:!0,value:m})}}o("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(c){return c||function(m){var _=[],A;for(A in m)Object.prototype.hasOwnProperty.call(m,A)&&_.push([A,m[A]]);return _}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},f=this||self;function g(c){var m=typeof c;return m=="object"&&c!=null||m=="function"}function y(c,m,_){return c.call.apply(c.bind,arguments)}function p(c,m,_){return p=y,p.apply(null,arguments)}function E(c,m){var _=Array.prototype.slice.call(arguments,1);return function(){var A=_.slice();return A.push.apply(A,arguments),c.apply(this,A)}}function S(c,m){function _(){}_.prototype=m.prototype,c.Z=m.prototype,c.prototype=new _,c.prototype.constructor=c,c.Ob=function(A,U,B){for(var et=Array(arguments.length-2),Rt=2;Rt<arguments.length;Rt++)et[Rt-2]=arguments[Rt];return m.prototype[U].apply(A,et)}}var C=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function H(c){const m=c.length;if(m>0){const _=Array(m);for(let A=0;A<m;A++)_[A]=c[A];return _}return[]}function J(c,m){for(let A=1;A<arguments.length;A++){const U=arguments[A];var _=typeof U;if(_=_!="object"?_:U?Array.isArray(U)?"array":_:"null",_=="array"||_=="object"&&typeof U.length=="number"){_=c.length||0;const B=U.length||0;c.length=_+B;for(let et=0;et<B;et++)c[_+et]=U[et]}else c.push(U)}}class tt{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return this.h>0?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function W(c){f.setTimeout(()=>{throw c},0)}function yt(){var c=O;let m=null;return c.g&&(m=c.g,c.g=c.g.next,c.g||(c.h=null),m.next=null),m}class At{constructor(){this.h=this.g=null}add(m,_){const A=ht.get();A.set(m,_),this.h?this.h.next=A:this.g=A,this.h=A}}var ht=new tt(()=>new jt,c=>c.reset());class jt{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let pt,Dt=!1,O=new At,b=()=>{const c=Promise.resolve(void 0);pt=()=>{c.then(R)}};function R(){for(var c;c=yt();){try{c.h.call(c.g)}catch(_){W(_)}var m=ht;m.j(c),m.h<100&&(m.h++,c.next=m.g,m.g=c)}Dt=!1}function V(){this.u=this.u,this.C=this.C}V.prototype.u=!1,V.prototype.dispose=function(){this.u||(this.u=!0,this.N())},V.prototype[Symbol.dispose]=function(){this.dispose()},V.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function N(c,m){this.type=c,this.g=this.target=m,this.defaultPrevented=!1}N.prototype.h=function(){this.defaultPrevented=!0};var P=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var c=!1,m=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};f.addEventListener("test",_,m),f.removeEventListener("test",_,m)}catch{}return c})();function I(c){return/^[\s\xa0]*$/.test(c)}function ae(c,m){N.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,m)}S(ae,N),ae.prototype.init=function(c,m){const _=this.type=c.type,A=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=m,m=c.relatedTarget,m||(_=="mouseover"?m=c.fromElement:_=="mouseout"&&(m=c.toElement)),this.relatedTarget=m,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&ae.Z.h.call(this)},ae.prototype.h=function(){ae.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Jt="closure_listenable_"+(Math.random()*1e6|0),F=0;function nt(c,m,_,A,U){this.listener=c,this.proxy=null,this.src=m,this.type=_,this.capture=!!A,this.ha=U,this.key=++F,this.da=this.fa=!1}function ft(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function kt(c,m,_){for(const A in c)m.call(_,c[A],A,c)}function D(c,m){for(const _ in c)m.call(void 0,c[_],_,c)}function Z(c){const m={};for(const _ in c)m[_]=c[_];return m}const at="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function rt(c,m){let _,A;for(let U=1;U<arguments.length;U++){A=arguments[U];for(_ in A)c[_]=A[_];for(let B=0;B<at.length;B++)_=at[B],Object.prototype.hasOwnProperty.call(A,_)&&(c[_]=A[_])}}function $(c){this.src=c,this.g={},this.h=0}$.prototype.add=function(c,m,_,A,U){const B=c.toString();c=this.g[B],c||(c=this.g[B]=[],this.h++);const et=it(c,m,A,U);return et>-1?(m=c[et],_||(m.fa=!1)):(m=new nt(m,this.src,B,!!A,U),m.fa=_,c.push(m)),m};function ot(c,m){const _=m.type;if(_ in c.g){var A=c.g[_],U=Array.prototype.indexOf.call(A,m,void 0),B;(B=U>=0)&&Array.prototype.splice.call(A,U,1),B&&(ft(m),c.g[_].length==0&&(delete c.g[_],c.h--))}}function it(c,m,_,A){for(let U=0;U<c.length;++U){const B=c[U];if(!B.da&&B.listener==m&&B.capture==!!_&&B.ha==A)return U}return-1}var wt="closure_lm_"+(Math.random()*1e6|0),ct={};function Ht(c,m,_,A,U){if(Array.isArray(m)){for(let B=0;B<m.length;B++)Ht(c,m[B],_,A,U);return null}return _=Hn(_),c&&c[Jt]?c.J(m,_,g(A)?!!A.capture:!1,U):pn(c,m,_,!1,A,U)}function pn(c,m,_,A,U,B){if(!m)throw Error("Invalid event type");const et=g(U)?!!U.capture:!!U;let Rt=Ye(c);if(Rt||(c[wt]=Rt=new $(c)),_=Rt.add(m,_,A,et,B),_.proxy)return _;if(A=nn(),_.proxy=A,A.src=c,A.listener=_,c.addEventListener)P||(U=et),U===void 0&&(U=!1),c.addEventListener(m.toString(),A,U);else if(c.attachEvent)c.attachEvent(Ve(m.toString()),A);else if(c.addListener&&c.removeListener)c.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return _}function nn(){function c(_){return m.call(c.src,c.listener,_)}const m=Oi;return c}function yn(c,m,_,A,U){if(Array.isArray(m))for(var B=0;B<m.length;B++)yn(c,m[B],_,A,U);else A=g(A)?!!A.capture:!!A,_=Hn(_),c&&c[Jt]?(c=c.i,B=String(m).toString(),B in c.g&&(m=c.g[B],_=it(m,_,A,U),_>-1&&(ft(m[_]),Array.prototype.splice.call(m,_,1),m.length==0&&(delete c.g[B],c.h--)))):c&&(c=Ye(c))&&(m=c.g[m.toString()],c=-1,m&&(c=it(m,_,A,U)),(_=c>-1?m[c]:null)&&Ke(_))}function Ke(c){if(typeof c!="number"&&c&&!c.da){var m=c.src;if(m&&m[Jt])ot(m.i,c);else{var _=c.type,A=c.proxy;m.removeEventListener?m.removeEventListener(_,A,c.capture):m.detachEvent?m.detachEvent(Ve(_),A):m.addListener&&m.removeListener&&m.removeListener(A),(_=Ye(m))?(ot(_,c),_.h==0&&(_.src=null,m[wt]=null)):ft(c)}}}function Ve(c){return c in ct?ct[c]:ct[c]="on"+c}function Oi(c,m){if(c.da)c=!0;else{m=new ae(m,this);const _=c.listener,A=c.ha||c.src;c.fa&&Ke(c),c=_.call(A,m)}return c}function Ye(c){return c=c[wt],c instanceof $?c:null}var me="__closure_events_fn_"+(Math.random()*1e9>>>0);function Hn(c){return typeof c=="function"?c:(c[me]||(c[me]=function(m){return c.handleEvent(m)}),c[me])}function ne(){V.call(this),this.i=new $(this),this.M=this,this.G=null}S(ne,V),ne.prototype[Jt]=!0,ne.prototype.removeEventListener=function(c,m,_,A){yn(this,c,m,_,A)};function Ae(c,m){var _,A=c.G;if(A)for(_=[];A;A=A.G)_.push(A);if(c=c.M,A=m.type||m,typeof m=="string")m=new N(m,c);else if(m instanceof N)m.target=m.target||c;else{var U=m;m=new N(A,c),rt(m,U)}U=!0;let B,et;if(_)for(et=_.length-1;et>=0;et--)B=m.g=_[et],U=ai(B,A,!0,m)&&U;if(B=m.g=c,U=ai(B,A,!0,m)&&U,U=ai(B,A,!1,m)&&U,_)for(et=0;et<_.length;et++)B=m.g=_[et],U=ai(B,A,!1,m)&&U}ne.prototype.N=function(){if(ne.Z.N.call(this),this.i){var c=this.i;for(const m in c.g){const _=c.g[m];for(let A=0;A<_.length;A++)ft(_[A]);delete c.g[m],c.h--}}this.G=null},ne.prototype.J=function(c,m,_,A){return this.i.add(String(c),m,!1,_,A)},ne.prototype.K=function(c,m,_,A){return this.i.add(String(c),m,!0,_,A)};function ai(c,m,_,A){if(m=c.i.g[String(m)],!m)return!0;m=m.concat();let U=!0;for(let B=0;B<m.length;++B){const et=m[B];if(et&&!et.da&&et.capture==_){const Rt=et.listener,ie=et.ha||et.src;et.fa&&ot(c.i,et),U=Rt.call(ie,A)!==!1&&U}}return U&&!A.defaultPrevented}function Eo(c,m){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=p(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(m)>2147483647?-1:f.setTimeout(c,m||0)}function Ao(c){c.g=Eo(()=>{c.g=null,c.i&&(c.i=!1,Ao(c))},c.l);const m=c.h;c.h=null,c.m.apply(null,m)}class qh extends V{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Ao(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function hs(c){V.call(this),this.h=c,this.g={}}S(hs,V);var sr=[];function Xe(c){kt(c.g,function(m,_){this.g.hasOwnProperty(_)&&Ke(m)},c),c.g={}}hs.prototype.N=function(){hs.Z.N.call(this),Xe(this)},hs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Nn=f.JSON.stringify,rn=f.JSON.parse,Hh=class{stringify(c){return f.JSON.stringify(c,void 0)}parse(c){return f.JSON.parse(c,void 0)}};function uu(){}function cu(){}var oi={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ar(){N.call(this,"d")}S(ar,N);function Fn(){N.call(this,"c")}S(Fn,N);var On={},or=null;function oa(){return or=or||new ne}On.Ia="serverreachability";function bo(c){N.call(this,On.Ia,c)}S(bo,N);function lr(c){const m=oa();Ae(m,new bo(m))}On.STAT_EVENT="statevent";function la(c,m){N.call(this,On.STAT_EVENT,c),this.stat=m}S(la,N);function ge(c){const m=oa();Ae(m,new la(m,c))}On.Ja="timingevent";function hu(c,m){N.call(this,On.Ja,c),this.size=m}S(hu,N);function ur(c,m){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){c()},m)}function cr(){this.g=!0}cr.prototype.ua=function(){this.g=!1};function So(c,m,_,A,U,B){c.info(function(){if(c.g)if(B){var et="",Rt=B.split("&");for(let Ft=0;Ft<Rt.length;Ft++){var ie=Rt[Ft].split("=");if(ie.length>1){const _e=ie[0];ie=ie[1];const _n=_e.split("_");et=_n.length>=2&&_n[1]=="type"?et+(_e+"="+ie+"&"):et+(_e+"=redacted&")}}}else et=null;else et=B;return"XMLHTTP REQ ("+A+") [attempt "+U+"]: "+m+`
`+_+`
`+et})}function wo(c,m,_,A,U,B,et){c.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+U+"]: "+m+`
`+_+`
`+B+" "+et})}function Mi(c,m,_,A){c.info(function(){return"XMLHTTP TEXT ("+m+"): "+li(c,_)+(A?" "+A:"")})}function Fh(c,m){c.info(function(){return"TIMEOUT: "+m})}cr.prototype.info=function(){};function li(c,m){if(!c.g)return m;if(!m)return null;try{const B=JSON.parse(m);if(B){for(c=0;c<B.length;c++)if(Array.isArray(B[c])){var _=B[c];if(!(_.length<2)){var A=_[1];if(Array.isArray(A)&&!(A.length<1)){var U=A[0];if(U!="noop"&&U!="stop"&&U!="close")for(let et=1;et<A.length;et++)A[et]=""}}}}return Nn(B)}catch{return m}}var pe={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},je={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Vi;function fs(){}S(fs,uu),fs.prototype.g=function(){return new XMLHttpRequest},Vi=new fs;function ds(c){return encodeURIComponent(String(c))}function Gh(c){var m=1;c=c.split(":");const _=[];for(;m>0&&c.length;)_.push(c.shift()),m--;return c.length&&_.push(c.join(":")),_}function Gn(c,m,_,A){this.j=c,this.i=m,this.l=_,this.S=A||1,this.V=new hs(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new hr}function hr(){this.i=null,this.g="",this.h=!1}var ua={},ui={};function ci(c,m,_){c.M=1,c.A=Pi(le(m)),c.u=_,c.R=!0,fr(c,null)}function fr(c,m){c.F=Date.now(),ms(c),c.B=le(c.A);var _=c.B,A=c.S;Array.isArray(A)||(A=[String(A)]),gu(_.i,"t",A),c.C=0,_=c.j.L,c.h=new hr,c.g=va(c.j,_?m:null,!c.u),c.P>0&&(c.O=new qh(p(c.Y,c,c.g),c.P)),m=c.V,_=c.g,A=c.ba;var U="readystatechange";Array.isArray(U)||(U&&(sr[0]=U.toString()),U=sr);for(let B=0;B<U.length;B++){const et=Ht(_,U[B],A||m.handleEvent,!1,m.h||m);if(!et)break;m.g[et.key]=et}m=c.J?Z(c.J):{},c.u?(c.v||(c.v="POST"),m["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,m)):(c.v="GET",c.g.ea(c.B,c.v,null,m)),lr(),So(c.i,c.v,c.B,c.l,c.S,c.u)}Gn.prototype.ba=function(c){c=c.target;const m=this.O;m&&$e(c)==3?m.j():this.Y(c)},Gn.prototype.Y=function(c){try{if(c==this.g)t:{const Rt=$e(this.g),ie=this.g.ya(),Ft=this.g.ca();if(!(Rt<3)&&(Rt!=3||this.g&&(this.h.h||this.g.la()||ws(this.g)))){this.K||Rt!=4||ie==7||(ie==8||Ft<=0?lr(3):lr(2)),fi(this);var m=this.g.ca();this.X=m;var _=dr(this);if(this.o=m==200,wo(this.i,this.v,this.B,this.l,this.S,Rt,m),this.o){if(this.U&&!this.L){e:{if(this.g){var A,U=this.g;if((A=U.g?U.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(A)){var B=A;break e}}B=null}if(c=B)Mi(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ca(this,c);else{this.o=!1,this.m=3,ge(12),di(this),gs(this);break t}}if(this.R){c=!0;let _e;for(;!this.K&&this.C<_.length;)if(_e=fu(this,_),_e==ui){Rt==4&&(this.m=4,ge(14),c=!1),Mi(this.i,this.l,null,"[Incomplete Response]");break}else if(_e==ua){this.m=4,ge(15),Mi(this.i,this.l,_,"[Invalid Chunk]"),c=!1;break}else Mi(this.i,this.l,_e,null),ca(this,_e);if(ye(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Rt!=4||_.length!=0||this.h.h||(this.m=1,ge(16),c=!1),this.o=this.o&&c,!c)Mi(this.i,this.l,_,"[Invalid Chunked Response]"),di(this),gs(this);else if(_.length>0&&!this.W){this.W=!0;var et=this.j;et.g==this&&et.aa&&!et.P&&(et.j.info("Great, no buffering proxy detected. Bytes received: "+_.length),Po(et),et.P=!0,ge(11))}}else Mi(this.i,this.l,_,null),ca(this,_);Rt==4&&di(this),this.o&&!this.K&&(Rt==4?ko(this.j,this):(this.o=!1,ms(this)))}else Rs(this.g),m==400&&_.indexOf("Unknown SID")>0?(this.m=3,ge(12)):(this.m=0,ge(13)),di(this),gs(this)}}}catch{}finally{}};function dr(c){if(!ye(c))return c.g.la();const m=ws(c.g);if(m==="")return"";let _="";const A=m.length,U=$e(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return di(c),gs(c),"";c.h.i=new f.TextDecoder}for(let B=0;B<A;B++)c.h.h=!0,_+=c.h.i.decode(m[B],{stream:!(U&&B==A-1)});return m.length=0,c.h.g+=_,c.C=0,c.h.g}function ye(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function fu(c,m){var _=c.C,A=m.indexOf(`
`,_);return A==-1?ui:(_=Number(m.substring(_,A)),isNaN(_)?ua:(A+=1,A+_>m.length?ui:(m=m.slice(A,A+_),c.C=A+_,m)))}Gn.prototype.cancel=function(){this.K=!0,di(this)};function ms(c){c.T=Date.now()+c.H,hi(c,c.H)}function hi(c,m){if(c.D!=null)throw Error("WatchDog timer not null");c.D=ur(p(c.aa,c),m)}function fi(c){c.D&&(f.clearTimeout(c.D),c.D=null)}Gn.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(Fh(this.i,this.B),this.M!=2&&(lr(),ge(17)),di(this),this.m=2,gs(this)):hi(this,this.T-c)};function gs(c){c.j.I==0||c.K||ko(c.j,c)}function di(c){fi(c);var m=c.O;m&&typeof m.dispose=="function"&&m.dispose(),c.O=null,Xe(c.V),c.g&&(m=c.g,c.g=null,m.abort(),m.dispose())}function ca(c,m){try{var _=c.j;if(_.I!=0&&(_.g==c||_s(_.h,c))){if(!c.L&&_s(_.h,c)&&_.I==3){try{var A=_.Ba.g.parse(m)}catch{A=null}if(Array.isArray(A)&&A.length==3){var U=A;if(U[0]==0){t:if(!_.v){if(_.g)if(_.g.F+3e3<c.F)_a(_),mi(_);else break t;xo(_),ge(18)}}else _.xa=U[1],0<_.xa-_.K&&U[2]<37500&&_.F&&_.A==0&&!_.C&&(_.C=ur(p(_.Va,_),6e3));Mn(_.h)<=1&&_.ta&&(_.ta=void 0)}else Li(_,11)}else if((c.L||_.g==c)&&_a(_),!I(m))for(U=_.Ba.g.parse(m),m=0;m<U.length;m++){let Ft=U[m];const _e=Ft[0];if(!(_e<=_.K))if(_.K=_e,Ft=Ft[1],_.I==2)if(Ft[0]=="c"){_.M=Ft[1],_.ba=Ft[2];const _n=Ft[3];_n!=null&&(_.ka=_n,_.j.info("VER="+_.ka));const gi=Ft[4];gi!=null&&(_.za=gi,_.j.info("SVER="+_.za));const Yn=Ft[5];Yn!=null&&typeof Yn=="number"&&Yn>0&&(A=1.5*Yn,_.O=A,_.j.info("backChannelRequestTimeoutMs_="+A)),A=_;const Xn=c.g;if(Xn){const $n=Xn.g?Xn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if($n){var B=A.h;B.g||$n.indexOf("spdy")==-1&&$n.indexOf("quic")==-1&&$n.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(ha(B,B.h),B.h=null))}if(A.G){const Lo=Xn.g?Xn.g.getResponseHeader("X-HTTP-Session-Id"):null;Lo&&(A.wa=Lo,Kt(A.J,A.G,Lo))}}_.I=3,_.l&&_.l.ra(),_.aa&&(_.T=Date.now()-c.F,_.j.info("Handshake RTT: "+_.T+"ms")),A=_;var et=c;if(A.na=Su(A,A.L?A.ba:null,A.W),et.L){xi(A.h,et);var Rt=et,ie=A.O;ie&&(Rt.H=ie),Rt.D&&(fi(Rt),ms(Rt)),A.g=et}else Tu(A);_.i.length>0&&Ns(_)}else Ft[0]!="stop"&&Ft[0]!="close"||Li(_,7);else _.I==3&&(Ft[0]=="stop"||Ft[0]=="close"?Ft[0]=="stop"?Li(_,7):Cs(_):Ft[0]!="noop"&&_.l&&_.l.qa(Ft),_.A=0)}}lr(4)}catch{}}var Qh=class{constructor(c,m){this.g=c,this.map=m}};function ps(c){this.l=c||10,f.PerformanceNavigationTiming?(c=f.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ys(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Mn(c){return c.h?1:c.g?c.g.size:0}function _s(c,m){return c.h?c.h==m:c.g?c.g.has(m):!1}function ha(c,m){c.g?c.g.add(m):c.h=m}function xi(c,m){c.h&&c.h==m?c.h=null:c.g&&c.g.has(m)&&c.g.delete(m)}ps.prototype.cancel=function(){if(this.i=fa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function fa(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let m=c.i;for(const _ of c.g.values())m=m.concat(_.G);return m}return H(c.i)}var da=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Kh(c,m){if(c){c=c.split("&");for(let _=0;_<c.length;_++){const A=c[_].indexOf("=");let U,B=null;A>=0?(U=c[_].substring(0,A),B=c[_].substring(A+1)):U=c[_],m(U,B?decodeURIComponent(B.replace(/\+/g," ")):"")}}}function Qn(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let m;c instanceof Qn?(this.l=c.l,mr(this,c.j),this.o=c.o,this.g=c.g,vs(this,c.u),this.h=c.h,gr(this,pu(c.i)),this.m=c.m):c&&(m=String(c).match(da))?(this.l=!1,mr(this,m[1]||"",!0),this.o=Ts(m[2]||""),this.g=Ts(m[3]||"",!0),vs(this,m[4]),this.h=Ts(m[5]||"",!0),gr(this,m[6]||"",!0),this.m=Ts(m[7]||"")):(this.l=!1,this.i=new Vn(null,this.l))}Qn.prototype.toString=function(){const c=[];var m=this.j;m&&c.push(xe(m,Io,!0),":");var _=this.g;return(_||m=="file")&&(c.push("//"),(m=this.o)&&c.push(xe(m,Io,!0),"@"),c.push(ds(_).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.u,_!=null&&c.push(":",String(_))),(_=this.h)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push(xe(_,_.charAt(0)=="/"?pr:Co,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",xe(_,mu)),c.join("")},Qn.prototype.resolve=function(c){const m=le(this);let _=!!c.j;_?mr(m,c.j):_=!!c.o,_?m.o=c.o:_=!!c.g,_?m.g=c.g:_=c.u!=null;var A=c.h;if(_)vs(m,c.u);else if(_=!!c.h){if(A.charAt(0)!="/")if(this.g&&!this.h)A="/"+A;else{var U=m.h.lastIndexOf("/");U!=-1&&(A=m.h.slice(0,U+1)+A)}if(U=A,U==".."||U==".")A="";else if(U.indexOf("./")!=-1||U.indexOf("/.")!=-1){A=U.lastIndexOf("/",0)==0,U=U.split("/");const B=[];for(let et=0;et<U.length;){const Rt=U[et++];Rt=="."?A&&et==U.length&&B.push(""):Rt==".."?((B.length>1||B.length==1&&B[0]!="")&&B.pop(),A&&et==U.length&&B.push("")):(B.push(Rt),A=!0)}A=B.join("/")}else A=U}return _?m.h=A:_=c.i.toString()!=="",_?gr(m,pu(c.i)):_=!!c.m,_&&(m.m=c.m),m};function le(c){return new Qn(c)}function mr(c,m,_){c.j=_?Ts(m,!0):m,c.j&&(c.j=c.j.replace(/:$/,""))}function vs(c,m){if(m){if(m=Number(m),isNaN(m)||m<0)throw Error("Bad port number "+m);c.u=m}else c.u=null}function gr(c,m,_){m instanceof Vn?(c.i=m,Oo(c.i,c.l)):(_||(m=xe(m,du)),c.i=new Vn(m,c.l))}function Kt(c,m,_){c.i.set(m,_)}function Pi(c){return Kt(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function Ts(c,m){return c?m?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function xe(c,m,_){return typeof c=="string"?(c=encodeURI(c).replace(m,Ro),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Ro(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Io=/[#\/\?@]/g,Co=/[#\?:]/g,pr=/[#\?]/g,du=/[#\?@]/g,mu=/#/g;function Vn(c,m){this.h=this.g=null,this.i=c||null,this.j=!!m}function ki(c){c.g||(c.g=new Map,c.h=0,c.i&&Kh(c.i,function(m,_){c.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}r=Vn.prototype,r.add=function(c,m){ki(this),this.i=null,c=Kn(this,c);let _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(m),this.h+=1,this};function Do(c,m){ki(c),m=Kn(c,m),c.g.has(m)&&(c.i=null,c.h-=c.g.get(m).length,c.g.delete(m))}function No(c,m){return ki(c),m=Kn(c,m),c.g.has(m)}r.forEach=function(c,m){ki(this),this.g.forEach(function(_,A){_.forEach(function(U){c.call(m,U,A,this)},this)},this)};function ma(c,m){ki(c);let _=[];if(typeof m=="string")No(c,m)&&(_=_.concat(c.g.get(Kn(c,m))));else for(c=Array.from(c.g.values()),m=0;m<c.length;m++)_=_.concat(c[m]);return _}r.set=function(c,m){return ki(this),this.i=null,c=Kn(this,c),No(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[m]),this.h+=1,this},r.get=function(c,m){return c?(c=ma(this,c),c.length>0?String(c[0]):m):m};function gu(c,m,_){Do(c,m),_.length>0&&(c.i=null,c.g.set(Kn(c,m),H(_)),c.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],m=Array.from(this.g.keys());for(let A=0;A<m.length;A++){var _=m[A];const U=ds(_);_=ma(this,_);for(let B=0;B<_.length;B++){let et=U;_[B]!==""&&(et+="="+ds(_[B])),c.push(et)}}return this.i=c.join("&")};function pu(c){const m=new Vn;return m.i=c.i,c.g&&(m.g=new Map(c.g),m.h=c.h),m}function Kn(c,m){return m=String(m),c.j&&(m=m.toLowerCase()),m}function Oo(c,m){m&&!c.j&&(ki(c),c.i=null,c.g.forEach(function(_,A){const U=A.toLowerCase();A!=U&&(Do(this,A),gu(this,U,_))},c)),c.j=m}function Mo(c,m){const _=new cr;if(f.Image){const A=new Image;A.onload=E(sn,_,"TestLoadImage: loaded",!0,m,A),A.onerror=E(sn,_,"TestLoadImage: error",!1,m,A),A.onabort=E(sn,_,"TestLoadImage: abort",!1,m,A),A.ontimeout=E(sn,_,"TestLoadImage: timeout",!1,m,A),f.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=c}else m(!1)}function yr(c,m){const _=new cr,A=new AbortController,U=setTimeout(()=>{A.abort(),sn(_,"TestPingServer: timeout",!1,m)},1e4);fetch(c,{signal:A.signal}).then(B=>{clearTimeout(U),B.ok?sn(_,"TestPingServer: ok",!0,m):sn(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(U),sn(_,"TestPingServer: error",!1,m)})}function sn(c,m,_,A,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),A(_)}catch{}}function yu(){this.g=new Hh}function Es(c){this.i=c.Sb||null,this.h=c.ab||!1}S(Es,uu),Es.prototype.g=function(){return new As(this.i,this.h)};function As(c,m){ne.call(this),this.H=c,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}S(As,ne),r=As.prototype,r.open=function(c,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=m,this.readyState=1,Ui(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const m={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(m.body=c),(this.H||f).fetch(new Request(this.D,m)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,an(this)),this.readyState=0},r.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Ui(this)),this.g&&(this.readyState=3,Ui(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;_r(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function _r(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}r.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var m=c.value?c.value:new Uint8Array(0);(m=this.B.decode(m,{stream:!c.done}))&&(this.response=this.responseText+=m)}c.done?an(this):Ui(this),this.readyState==3&&_r(this)}},r.Oa=function(c){this.g&&(this.response=this.responseText=c,an(this))},r.Na=function(c){this.g&&(this.response=c,an(this))},r.ga=function(){this.g&&an(this)};function an(c){c.readyState=4,c.l=null,c.j=null,c.B=null,Ui(c)}r.setRequestHeader=function(c,m){this.A.append(c,m)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=m.next();return c.join(`\r
`)};function Ui(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(As.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function vr(c){let m="";return kt(c,function(_,A){m+=A,m+=":",m+=_,m+=`\r
`}),m}function xn(c,m,_){t:{for(A in _){var A=!1;break t}A=!0}A||(_=vr(_),typeof c=="string"?_!=null&&ds(_):Kt(c,m,_))}function te(c){ne.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}S(te,ne);var ga=/^https?$/i,_u=["POST","PUT"];r=te.prototype,r.Fa=function(c){this.H=c},r.ea=function(c,m,_,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);m=m?m.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Vi.g(),this.g.onreadystatechange=C(p(this.Ca,this));try{this.B=!0,this.g.open(m,String(c),!0),this.B=!1}catch(B){bs(this,B);return}if(c=_||"",_=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var U in A)_.set(U,A[U]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const B of A.keys())_.set(B,A.get(B));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(_.keys()).find(B=>B.toLowerCase()=="content-type"),U=f.FormData&&c instanceof f.FormData,!(Array.prototype.indexOf.call(_u,m,void 0)>=0)||A||U||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[B,et]of _)this.g.setRequestHeader(B,et);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(B){bs(this,B)}};function bs(c,m){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=m,c.o=5,Ss(c),Ce(c)}function Ss(c){c.A||(c.A=!0,Ae(c,"complete"),Ae(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,Ae(this,"complete"),Ae(this,"abort"),Ce(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ce(this,!0)),te.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?Vo(this):this.Xa())},r.Xa=function(){Vo(this)};function Vo(c){if(c.h&&typeof u<"u"){if(c.v&&$e(c)==4)setTimeout(c.Ca.bind(c),0);else if(Ae(c,"readystatechange"),$e(c)==4){c.h=!1;try{const B=c.ca();t:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break t;default:m=!1}var _;if(!(_=m)){var A;if(A=B===0){let et=String(c.D).match(da)[1]||null;!et&&f.self&&f.self.location&&(et=f.self.location.protocol.slice(0,-1)),A=!ga.test(et?et.toLowerCase():"")}_=A}if(_)Ae(c,"complete"),Ae(c,"success");else{c.o=6;try{var U=$e(c)>2?c.g.statusText:""}catch{U=""}c.l=U+" ["+c.ca()+"]",Ss(c)}}finally{Ce(c)}}}}function Ce(c,m){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const _=c.g;c.g=null,m||Ae(c,"ready");try{_.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function $e(c){return c.g?c.g.readyState:0}r.ca=function(){try{return $e(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(c){if(this.g){var m=this.g.responseText;return c&&m.indexOf(c)==0&&(m=m.substring(c.length)),rn(m)}};function ws(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Rs(c){const m={};c=(c.g&&$e(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<c.length;A++){if(I(c[A]))continue;var _=Gh(c[A]);const U=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const B=m[U]||[];m[U]=B,B.push(_)}D(m,function(A){return A.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Is(c,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||m}function pa(c){this.za=0,this.i=[],this.j=new cr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Is("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Is("baseRetryDelayMs",5e3,c),this.Za=Is("retryDelaySeedMs",1e4,c),this.Ta=Is("forwardChannelMaxRetries",2,c),this.va=Is("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new ps(c&&c.concurrentRequestLimit),this.Ba=new yu,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=pa.prototype,r.ka=8,r.I=1,r.connect=function(c,m,_,A){ge(0),this.W=c,this.H=m||{},_&&A!==void 0&&(this.H.OSID=_,this.H.OAID=A),this.F=this.X,this.J=Su(this,null,this.W),Ns(this)};function Cs(c){if(Ds(c),c.I==3){var m=c.V++,_=le(c.J);if(Kt(_,"SID",c.M),Kt(_,"RID",m),Kt(_,"TYPE","terminate"),Os(c,_),m=new Gn(c,c.j,m),m.M=2,m.A=Pi(le(_)),_=!1,f.navigator&&f.navigator.sendBeacon)try{_=f.navigator.sendBeacon(m.A.toString(),"")}catch{}!_&&f.Image&&(new Image().src=m.A,_=!0),_||(m.g=va(m.j,null),m.g.ea(m.A)),m.F=Date.now(),ms(m)}bu(c)}function mi(c){c.g&&(Po(c),c.g.cancel(),c.g=null)}function Ds(c){mi(c),c.v&&(f.clearTimeout(c.v),c.v=null),_a(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&f.clearTimeout(c.m),c.m=null)}function Ns(c){if(!ys(c.h)&&!c.m){c.m=!0;var m=c.Ea;pt||b(),Dt||(pt(),Dt=!0),O.add(m,c),c.D=0}}function Yh(c,m){return Mn(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=m.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=ur(p(c.Ea,c,m),Au(c,c.D)),c.D++,!0)}r.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const U=new Gn(this,this.j,c);let B=this.o;if(this.U&&(B?(B=Z(B),rt(B,this.U)):B=this.U),this.u!==null||this.R||(U.J=B,B=null),this.S)t:{for(var m=0,_=0;_<this.i.length;_++){e:{var A=this.i[_];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break e}A=void 0}if(A===void 0)break;if(m+=A,m>4096){m=_;break t}if(m===4096||_===this.i.length-1){m=_+1;break t}}m=1e3}else m=1e3;m=ya(this,U,m),_=le(this.J),Kt(_,"RID",c),Kt(_,"CVER",22),this.G&&Kt(_,"X-HTTP-Session-Id",this.G),Os(this,_),B&&(this.R?m="headers="+ds(vr(B))+"&"+m:this.u&&xn(_,this.u,B)),ha(this.h,U),this.Ra&&Kt(_,"TYPE","init"),this.S?(Kt(_,"$req",m),Kt(_,"SID","null"),U.U=!0,ci(U,_,null)):ci(U,_,m),this.I=2}}else this.I==3&&(c?vu(this,c):this.i.length==0||ys(this.h)||vu(this))};function vu(c,m){var _;m?_=m.l:_=c.V++;const A=le(c.J);Kt(A,"SID",c.M),Kt(A,"RID",_),Kt(A,"AID",c.K),Os(c,A),c.u&&c.o&&xn(A,c.u,c.o),_=new Gn(c,c.j,_,c.D+1),c.u===null&&(_.J=c.o),m&&(c.i=m.G.concat(c.i)),m=ya(c,_,1e3),_.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),ha(c.h,_),ci(_,A,m)}function Os(c,m){c.H&&kt(c.H,function(_,A){Kt(m,A,_)}),c.l&&kt({},function(_,A){Kt(m,A,_)})}function ya(c,m,_){_=Math.min(c.i.length,_);const A=c.l?p(c.l.Ka,c.l,c):null;t:{var U=c.i;let Rt=-1;for(;;){const ie=["count="+_];Rt==-1?_>0?(Rt=U[0].g,ie.push("ofs="+Rt)):Rt=0:ie.push("ofs="+Rt);let Ft=!0;for(let _e=0;_e<_;_e++){var B=U[_e].g;const _n=U[_e].map;if(B-=Rt,B<0)Rt=Math.max(0,U[_e].g-100),Ft=!1;else try{B="req"+B+"_"||"";try{var et=_n instanceof Map?_n:Object.entries(_n);for(const[gi,Yn]of et){let Xn=Yn;g(Yn)&&(Xn=Nn(Yn)),ie.push(B+gi+"="+encodeURIComponent(Xn))}}catch(gi){throw ie.push(B+"type="+encodeURIComponent("_badmap")),gi}}catch{A&&A(_n)}}if(Ft){et=ie.join("&");break t}}et=void 0}return c=c.i.splice(0,_),m.G=c,et}function Tu(c){if(!c.g&&!c.v){c.Y=1;var m=c.Da;pt||b(),Dt||(pt(),Dt=!0),O.add(m,c),c.A=0}}function xo(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=ur(p(c.Da,c),Au(c,c.A)),c.A++,!0)}r.Da=function(){if(this.v=null,Eu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=ur(p(this.Wa,this),c)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ge(10),mi(this),Eu(this))};function Po(c){c.B!=null&&(f.clearTimeout(c.B),c.B=null)}function Eu(c){c.g=new Gn(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var m=le(c.na);Kt(m,"RID","rpc"),Kt(m,"SID",c.M),Kt(m,"AID",c.K),Kt(m,"CI",c.F?"0":"1"),!c.F&&c.ia&&Kt(m,"TO",c.ia),Kt(m,"TYPE","xmlhttp"),Os(c,m),c.u&&c.o&&xn(m,c.u,c.o),c.O&&(c.g.H=c.O);var _=c.g;c=c.ba,_.M=1,_.A=Pi(le(m)),_.u=null,_.R=!0,fr(_,c)}r.Va=function(){this.C!=null&&(this.C=null,mi(this),xo(this),ge(19))};function _a(c){c.C!=null&&(f.clearTimeout(c.C),c.C=null)}function ko(c,m){var _=null;if(c.g==m){_a(c),Po(c),c.g=null;var A=2}else if(_s(c.h,m))_=m.G,xi(c.h,m),A=1;else return;if(c.I!=0){if(m.o)if(A==1){_=m.u?m.u.length:0,m=Date.now()-m.F;var U=c.D;A=oa(),Ae(A,new hu(A,_)),Ns(c)}else Tu(c);else if(U=m.m,U==3||U==0&&m.X>0||!(A==1&&Yh(c,m)||A==2&&xo(c)))switch(_&&_.length>0&&(m=c.h,m.i=m.i.concat(_)),U){case 1:Li(c,5);break;case 4:Li(c,10);break;case 3:Li(c,6);break;default:Li(c,2)}}}function Au(c,m){let _=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(_*=2),_*m}function Li(c,m){if(c.j.info("Error code "+m),m==2){var _=p(c.bb,c),A=c.Ua;const U=!A;A=new Qn(A||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||mr(A,"https"),Pi(A),U?Mo(A.toString(),_):yr(A.toString(),_)}else ge(2);c.I=0,c.l&&c.l.pa(m),bu(c),Ds(c)}r.bb=function(c){c?(this.j.info("Successfully pinged google.com"),ge(2)):(this.j.info("Failed to ping google.com"),ge(1))};function bu(c){if(c.I=0,c.ja=[],c.l){const m=fa(c.h);(m.length!=0||c.i.length!=0)&&(J(c.ja,m),J(c.ja,c.i),c.h.i.length=0,H(c.i),c.i.length=0),c.l.oa()}}function Su(c,m,_){var A=_ instanceof Qn?le(_):new Qn(_);if(A.g!="")m&&(A.g=m+"."+A.g),vs(A,A.u);else{var U=f.location;A=U.protocol,m=m?m+"."+U.hostname:U.hostname,U=+U.port;const B=new Qn(null);A&&mr(B,A),m&&(B.g=m),U&&vs(B,U),_&&(B.h=_),A=B}return _=c.G,m=c.wa,_&&m&&Kt(A,_,m),Kt(A,"VER",c.ka),Os(c,A),A}function va(c,m,_){if(m&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return m=c.Aa&&!c.ma?new te(new Es({ab:_})):new te(c.ma),m.Fa(c.L),m}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function wu(){}r=wu.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function Ta(){}Ta.prototype.g=function(c,m){return new on(c,m)};function on(c,m){ne.call(this),this.g=new pa(m),this.l=c,this.h=m&&m.messageUrlParams||null,c=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(c?c["X-WebChannel-Content-Type"]=m.messageContentType:c={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.sa&&(c?c["X-WebChannel-Client-Profile"]=m.sa:c={"X-WebChannel-Client-Profile":m.sa}),this.g.U=c,(c=m&&m.Qb)&&!I(c)&&(this.g.u=c),this.A=m&&m.supportsCrossDomainXhr||!1,this.v=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!I(m)&&(this.g.G=m,c=this.h,c!==null&&m in c&&(c=this.h,m in c&&delete c[m])),this.j=new Tr(this)}S(on,ne),on.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},on.prototype.close=function(){Cs(this.g)},on.prototype.o=function(c){var m=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.v&&(_={},_.__data__=Nn(c),c=_);m.i.push(new Qh(m.Ya++,c)),m.I==3&&Ns(m)},on.prototype.N=function(){this.g.l=null,delete this.j,Cs(this.g),delete this.g,on.Z.N.call(this)};function Uo(c){ar.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var m=c.__sm__;if(m){t:{for(const _ in m){c=_;break t}c=void 0}(this.i=c)&&(c=this.i,m=m!==null&&c in m?m[c]:void 0),this.data=m}else this.data=c}S(Uo,ar);function Ru(){Fn.call(this),this.status=1}S(Ru,Fn);function Tr(c){this.g=c}S(Tr,wu),Tr.prototype.ra=function(){Ae(this.g,"a")},Tr.prototype.qa=function(c){Ae(this.g,new Uo(c))},Tr.prototype.pa=function(c){Ae(this.g,new Ru)},Tr.prototype.oa=function(){Ae(this.g,"b")},Ta.prototype.createWebChannel=Ta.prototype.g,on.prototype.send=on.prototype.o,on.prototype.open=on.prototype.m,on.prototype.close=on.prototype.close,f0=function(){return new Ta},h0=function(){return oa()},c0=On,hm={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},pe.NO_ERROR=0,pe.TIMEOUT=8,pe.HTTP_ERROR=6,xc=pe,je.COMPLETE="complete",u0=je,cu.EventType=oi,oi.OPEN="a",oi.CLOSE="b",oi.ERROR="c",oi.MESSAGE="d",ne.prototype.listen=ne.prototype.J,Cl=cu,te.prototype.listenOnce=te.prototype.K,te.prototype.getLastError=te.prototype.Ha,te.prototype.getLastErrorCode=te.prototype.ya,te.prototype.getStatus=te.prototype.ca,te.prototype.getResponseJson=te.prototype.La,te.prototype.getResponseText=te.prototype.la,te.prototype.send=te.prototype.ea,te.prototype.setWithCredentials=te.prototype.Fa,l0=te}).apply(typeof Ic<"u"?Ic:typeof self<"u"?self:typeof window<"u"?window:{});const yv="@firebase/firestore",_v="4.9.2";/**
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
 */class tn{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}tn.UNAUTHENTICATED=new tn(null),tn.GOOGLE_CREDENTIALS=new tn("google-credentials-uid"),tn.FIRST_PARTY=new tn("first-party-uid"),tn.MOCK_USER=new tn("mock-user");/**
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
 */let po="12.3.0";/**
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
 */const Zs=new yh("@firebase/firestore");function Xa(){return Zs.logLevel}function lt(r,...t){if(Zs.logLevel<=Vt.DEBUG){const n=t.map(Pm);Zs.debug(`Firestore (${po}): ${r}`,...n)}}function er(r,...t){if(Zs.logLevel<=Vt.ERROR){const n=t.map(Pm);Zs.error(`Firestore (${po}): ${r}`,...n)}}function oo(r,...t){if(Zs.logLevel<=Vt.WARN){const n=t.map(Pm);Zs.warn(`Firestore (${po}): ${r}`,...n)}}function Pm(r){if(typeof r=="string")return r;try{/**
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
 */function gt(r,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,d0(r,s,n)}function d0(r,t,n){let s=`FIRESTORE (${po}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw er(s),new Error(s)}function zt(r,t,n,s){let o="Unexpected state";typeof n=="string"?o=n:s=n,r||d0(t,o,s)}function St(r,t){return r}/**
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
 */const Q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class st extends si{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class bi{constructor(){this.promise=new Promise(((t,n)=>{this.resolve=t,this.reject=n}))}}/**
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
 */class m0{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class bw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable((()=>n(tn.UNAUTHENTICATED)))}shutdown(){}}class Sw{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class ww{constructor(t){this.t=t,this.currentUser=tn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){zt(this.o===void 0,42304);let s=this.i;const o=y=>this.i!==s?(s=this.i,n(y)):Promise.resolve();let u=new bi;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new bi,t.enqueueRetryable((()=>o(this.currentUser)))};const f=()=>{const y=u;t.enqueueRetryable((async()=>{await y.promise,await o(this.currentUser)}))},g=y=>{lt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit((y=>g(y))),setTimeout((()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?g(y):(lt("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new bi)}}),0),f()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((s=>this.i!==t?(lt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(zt(typeof s.accessToken=="string",31837,{l:s}),new m0(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return zt(t===null||typeof t=="string",2055,{h:t}),new tn(t)}}class Rw{constructor(t,n,s){this.P=t,this.T=n,this.I=s,this.type="FirstParty",this.user=tn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Iw{constructor(t,n,s){this.P=t,this.T=n,this.I=s}getToken(){return Promise.resolve(new Rw(this.P,this.T,this.I))}start(t,n){t.enqueueRetryable((()=>n(tn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class vv{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Cw{constructor(t,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ti(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,n){zt(this.o===void 0,3512);const s=u=>{u.error!=null&&lt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.m;return this.m=u.token,lt("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(u.token):Promise.resolve()};this.o=u=>{t.enqueueRetryable((()=>s(u)))};const o=u=>{lt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):lt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new vv(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((n=>n?(zt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new vv(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Dw(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class km{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=Dw(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<n&&(s+=t.charAt(o[u]%62))}return s}}function xt(r,t){return r<t?-1:r>t?1:0}function fm(r,t){const n=Math.min(r.length,t.length);for(let s=0;s<n;s++){const o=r.charAt(s),u=t.charAt(s);if(o!==u)return Zd(o)===Zd(u)?xt(o,u):Zd(o)?1:-1}return xt(r.length,t.length)}const Nw=55296,Ow=57343;function Zd(r){const t=r.charCodeAt(0);return t>=Nw&&t<=Ow}function lo(r,t,n){return r.length===t.length&&r.every(((s,o)=>n(s,t[o])))}/**
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
 */const Tv="__name__";class Ei{constructor(t,n,s){n===void 0?n=0:n>t.length&&gt(637,{offset:n,range:t.length}),s===void 0?s=t.length-n:s>t.length-n&&gt(1746,{length:s,range:t.length-n}),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return Ei.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Ei?t.forEach((s=>{n.push(s)})):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let o=0;o<s;o++){const u=Ei.compareSegments(t.get(o),n.get(o));if(u!==0)return u}return xt(t.length,n.length)}static compareSegments(t,n){const s=Ei.isNumericId(t),o=Ei.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?Ei.extractNumericId(t).compare(Ei.extractNumericId(n)):fm(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return $r.fromString(t.substring(4,t.length-2))}}class Zt extends Ei{construct(t,n,s){return new Zt(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new st(Q.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter((o=>o.length>0)))}return new Zt(n)}static emptyPath(){return new Zt([])}}const Mw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends Ei{construct(t,n,s){return new Ge(t,n,s)}static isValidIdentifier(t){return Mw.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Tv}static keyField(){return new Ge([Tv])}static fromServerFormat(t){const n=[];let s="",o=0;const u=()=>{if(s.length===0)throw new st(Q.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;o<t.length;){const g=t[o];if(g==="\\"){if(o+1===t.length)throw new st(Q.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const y=t[o+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new st(Q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=y,o+=2}else g==="`"?(f=!f,o++):g!=="."||f?(s+=g,o++):(u(),o++)}if(u(),f)throw new st(Q.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ge(n)}static emptyPath(){return new Ge([])}}/**
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
 */class mt{constructor(t){this.path=t}static fromPath(t){return new mt(Zt.fromString(t))}static fromName(t){return new mt(Zt.fromString(t).popFirst(5))}static empty(){return new mt(Zt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Zt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Zt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new mt(new Zt(t.slice()))}}/**
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
 */function g0(r,t,n){if(!n)throw new st(Q.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function Vw(r,t,n,s){if(t===!0&&s===!0)throw new st(Q.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function Ev(r){if(!mt.isDocumentKey(r))throw new st(Q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Av(r){if(mt.isDocumentKey(r))throw new st(Q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function p0(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function _h(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=(function(s){return s.constructor?s.constructor.name:null})(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":gt(12329,{type:typeof r})}function ni(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new st(Q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_h(r);throw new st(Q.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return r}/**
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
 */function Ie(r,t){const n={typeString:r};return t&&(n.value=t),n}function Zl(r,t){if(!p0(r))throw new st(Q.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in t)if(t[s]){const o=t[s].typeString,u="value"in t[s]?{value:t[s].value}:void 0;if(!(s in r)){n=`JSON missing required field: '${s}'`;break}const f=r[s];if(o&&typeof f!==o){n=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&f!==u.value){n=`Expected '${s}' field to equal '${u.value}'`;break}}if(n)throw new st(Q.INVALID_ARGUMENT,n);return!0}/**
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
 */const bv=-62135596800,Sv=1e6;class se{static now(){return se.fromMillis(Date.now())}static fromDate(t){return se.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor((t-1e3*n)*Sv);return new se(n,s)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new st(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new st(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<bv)throw new st(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new st(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Sv}_compareTo(t){return this.seconds===t.seconds?xt(this.nanoseconds,t.nanoseconds):xt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:se._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Zl(t,se._jsonSchema))return new se(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-bv;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}se._jsonSchemaVersion="firestore/timestamp/1.0",se._jsonSchema={type:Ie("string",se._jsonSchemaVersion),seconds:Ie("number"),nanoseconds:Ie("number")};/**
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
 */class Tt{static fromTimestamp(t){return new Tt(t)}static min(){return new Tt(new se(0,0))}static max(){return new Tt(new se(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Bl=-1;function xw(r,t){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=Tt.fromTimestamp(s===1e9?new se(n+1,0):new se(n,s));return new es(o,mt.empty(),t)}function Pw(r){return new es(r.readTime,r.key,Bl)}class es{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new es(Tt.min(),mt.empty(),Bl)}static max(){return new es(Tt.max(),mt.empty(),Bl)}}function kw(r,t){let n=r.readTime.compareTo(t.readTime);return n!==0?n:(n=mt.comparator(r.documentKey,t.documentKey),n!==0?n:xt(r.largestBatchId,t.largestBatchId))}/**
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
 */const Uw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Lw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
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
 */async function yo(r){if(r.code!==Q.FAILED_PRECONDITION||r.message!==Uw)throw r;lt("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class X{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&gt(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new X(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(t,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(n,u).next(s,o)}}))}toPromise(){return new Promise(((t,n)=>{this.next(t,n)}))}wrapUserFunction(t){try{const n=t();return n instanceof X?n:X.resolve(n)}catch(n){return X.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction((()=>t(n))):X.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction((()=>t(n))):X.reject(n)}static resolve(t){return new X(((n,s)=>{n(t)}))}static reject(t){return new X(((n,s)=>{s(t)}))}static waitFor(t){return new X(((n,s)=>{let o=0,u=0,f=!1;t.forEach((g=>{++o,g.next((()=>{++u,f&&u===o&&n()}),(y=>s(y)))})),f=!0,u===o&&n()}))}static or(t){let n=X.resolve(!1);for(const s of t)n=n.next((o=>o?X.resolve(o):s()));return n}static forEach(t,n){const s=[];return t.forEach(((o,u)=>{s.push(n.call(this,o,u))})),this.waitFor(s)}static mapArray(t,n){return new X(((s,o)=>{const u=t.length,f=new Array(u);let g=0;for(let y=0;y<u;y++){const p=y;n(t[p]).next((E=>{f[p]=E,++g,g===u&&s(f)}),(E=>o(E)))}}))}static doWhile(t,n){return new X(((s,o)=>{const u=()=>{t()===!0?n().next((()=>{u()}),o):s()};u()}))}}function zw(r){const t=r.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function _o(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class vh{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>n.writeSequenceNumber(s))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}vh.ce=-1;/**
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
 */const Um=-1;function Jl(r){return r==null}function Qc(r){return r===0&&1/r==-1/0}function jw(r){return typeof r=="number"&&Number.isInteger(r)&&!Qc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const y0="";function Bw(r){let t="";for(let n=0;n<r.length;n++)t.length>0&&(t=wv(t)),t=qw(r.get(n),t);return wv(t)}function qw(r,t){let n=t;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":n+="";break;case y0:n+="";break;default:n+=u}}return n}function wv(r){return r+y0+""}/**
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
 */function Rv(r){let t=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t++;return t}function ls(r,t){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t(n,r[n])}function _0(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class ce{constructor(t,n){this.comparator=t,this.root=n||Fe.EMPTY}insert(t,n){return new ce(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Fe.BLACK,null,null))}remove(t){return new ce(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Fe.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(t,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((n,s)=>(t(n,s),!1)))}toString(){const t=[];return this.inorderTraversal(((n,s)=>(t.push(`${n}:${s}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Cc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Cc(this.root,t,this.comparator,!1)}getReverseIterator(){return new Cc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Cc(this.root,t,this.comparator,!0)}}class Cc{constructor(t,n,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!t.isEmpty();)if(u=n?s(t.key,n):1,n&&o&&(u*=-1),u<0)t=this.isReverse?t.left:t.right;else{if(u===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Fe{constructor(t,n,s,o,u){this.key=t,this.value=n,this.color=s??Fe.RED,this.left=o??Fe.EMPTY,this.right=u??Fe.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,o,u){return new Fe(t??this.key,n??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let o=this;const u=s(t,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(t,n,s),null):u===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(t,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Fe.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,o=this;if(n(t,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(t,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(t,o.key)===0){if(o.right.isEmpty())return Fe.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(t,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw gt(43730,{key:this.key,value:this.value});if(this.right.isRed())throw gt(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw gt(27949);return t+(this.isRed()?0:1)}}Fe.EMPTY=null,Fe.RED=!0,Fe.BLACK=!1;Fe.EMPTY=new class{constructor(){this.size=0}get key(){throw gt(57766)}get value(){throw gt(16141)}get color(){throw gt(16727)}get left(){throw gt(29726)}get right(){throw gt(36894)}copy(t,n,s,o,u){return this}insert(t,n,s){return new Fe(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Oe{constructor(t){this.comparator=t,this.data=new ce(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((n,s)=>(t(n),!1)))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,t[1])>=0)return;n(o.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Iv(this.data.getIterator())}getIteratorFrom(t){return new Iv(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach((s=>{n=n.add(s)})),n}isEqual(t){if(!(t instanceof Oe)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((n=>{t.push(n)})),t}toString(){const t=[];return this.forEach((n=>t.push(n))),"SortedSet("+t.toString()+")"}copy(t){const n=new Oe(this.comparator);return n.data=t,n}}class Iv{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class In{constructor(t){this.fields=t,t.sort(Ge.comparator)}static empty(){return new In([])}unionWith(t){let n=new Oe(Ge.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new In(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return lo(this.fields,t.fields,((n,s)=>n.isEqual(s)))}}/**
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
 */class v0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Qe{constructor(t){this.binaryString=t}static fromBase64String(t){const n=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new v0("Invalid base64 string: "+u):u}})(t);return new Qe(n)}static fromUint8Array(t){const n=(function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u})(t);return new Qe(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return xt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Qe.EMPTY_BYTE_STRING=new Qe("");const Hw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ns(r){if(zt(!!r,39018),typeof r=="string"){let t=0;const n=Hw.exec(r);if(zt(!!n,46558,{timestamp:r}),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),t=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:Ee(r.seconds),nanos:Ee(r.nanos)}}function Ee(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function is(r){return typeof r=="string"?Qe.fromBase64String(r):Qe.fromUint8Array(r)}/**
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
 */const T0="server_timestamp",E0="__type__",A0="__previous_value__",b0="__local_write_time__";function Lm(r){return(r?.mapValue?.fields||{})[E0]?.stringValue===T0}function Th(r){const t=r.mapValue.fields[A0];return Lm(t)?Th(t):t}function ql(r){const t=ns(r.mapValue.fields[b0].timestampValue);return new se(t.seconds,t.nanos)}/**
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
 */class Fw{constructor(t,n,s,o,u,f,g,y,p,E){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=g,this.longPollingOptions=y,this.useFetchStreams=p,this.isUsingEmulator=E}}const Kc="(default)";class Hl{constructor(t,n){this.projectId=t,this.database=n||Kc}static empty(){return new Hl("","")}get isDefaultDatabase(){return this.database===Kc}isEqual(t){return t instanceof Hl&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const S0="__type__",Gw="__max__",Dc={mapValue:{}},w0="__vector__",Yc="value";function rs(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Lm(r)?4:Kw(r)?9007199254740991:Qw(r)?10:11:gt(28295,{value:r})}function Ni(r,t){if(r===t)return!0;const n=rs(r);if(n!==rs(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return ql(r).isEqual(ql(t));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=ns(o.timestampValue),g=ns(u.timestampValue);return f.seconds===g.seconds&&f.nanos===g.nanos})(r,t);case 5:return r.stringValue===t.stringValue;case 6:return(function(o,u){return is(o.bytesValue).isEqual(is(u.bytesValue))})(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return(function(o,u){return Ee(o.geoPointValue.latitude)===Ee(u.geoPointValue.latitude)&&Ee(o.geoPointValue.longitude)===Ee(u.geoPointValue.longitude)})(r,t);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return Ee(o.integerValue)===Ee(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=Ee(o.doubleValue),g=Ee(u.doubleValue);return f===g?Qc(f)===Qc(g):isNaN(f)&&isNaN(g)}return!1})(r,t);case 9:return lo(r.arrayValue.values||[],t.arrayValue.values||[],Ni);case 10:case 11:return(function(o,u){const f=o.mapValue.fields||{},g=u.mapValue.fields||{};if(Rv(f)!==Rv(g))return!1;for(const y in f)if(f.hasOwnProperty(y)&&(g[y]===void 0||!Ni(f[y],g[y])))return!1;return!0})(r,t);default:return gt(52216,{left:r})}}function Fl(r,t){return(r.values||[]).find((n=>Ni(n,t)))!==void 0}function uo(r,t){if(r===t)return 0;const n=rs(r),s=rs(t);if(n!==s)return xt(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return xt(r.booleanValue,t.booleanValue);case 2:return(function(u,f){const g=Ee(u.integerValue||u.doubleValue),y=Ee(f.integerValue||f.doubleValue);return g<y?-1:g>y?1:g===y?0:isNaN(g)?isNaN(y)?0:-1:1})(r,t);case 3:return Cv(r.timestampValue,t.timestampValue);case 4:return Cv(ql(r),ql(t));case 5:return fm(r.stringValue,t.stringValue);case 6:return(function(u,f){const g=is(u),y=is(f);return g.compareTo(y)})(r.bytesValue,t.bytesValue);case 7:return(function(u,f){const g=u.split("/"),y=f.split("/");for(let p=0;p<g.length&&p<y.length;p++){const E=xt(g[p],y[p]);if(E!==0)return E}return xt(g.length,y.length)})(r.referenceValue,t.referenceValue);case 8:return(function(u,f){const g=xt(Ee(u.latitude),Ee(f.latitude));return g!==0?g:xt(Ee(u.longitude),Ee(f.longitude))})(r.geoPointValue,t.geoPointValue);case 9:return Dv(r.arrayValue,t.arrayValue);case 10:return(function(u,f){const g=u.fields||{},y=f.fields||{},p=g[Yc]?.arrayValue,E=y[Yc]?.arrayValue,S=xt(p?.values?.length||0,E?.values?.length||0);return S!==0?S:Dv(p,E)})(r.mapValue,t.mapValue);case 11:return(function(u,f){if(u===Dc.mapValue&&f===Dc.mapValue)return 0;if(u===Dc.mapValue)return 1;if(f===Dc.mapValue)return-1;const g=u.fields||{},y=Object.keys(g),p=f.fields||{},E=Object.keys(p);y.sort(),E.sort();for(let S=0;S<y.length&&S<E.length;++S){const C=fm(y[S],E[S]);if(C!==0)return C;const H=uo(g[y[S]],p[E[S]]);if(H!==0)return H}return xt(y.length,E.length)})(r.mapValue,t.mapValue);default:throw gt(23264,{he:n})}}function Cv(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return xt(r,t);const n=ns(r),s=ns(t),o=xt(n.seconds,s.seconds);return o!==0?o:xt(n.nanos,s.nanos)}function Dv(r,t){const n=r.values||[],s=t.values||[];for(let o=0;o<n.length&&o<s.length;++o){const u=uo(n[o],s[o]);if(u)return u}return xt(n.length,s.length)}function co(r){return dm(r)}function dm(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(n){const s=ns(n);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(n){return is(n).toBase64()})(r.bytesValue):"referenceValue"in r?(function(n){return mt.fromName(n).toString()})(r.referenceValue):"geoPointValue"in r?(function(n){return`geo(${n.latitude},${n.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(n){let s="[",o=!0;for(const u of n.values||[])o?o=!1:s+=",",s+=dm(u);return s+"]"})(r.arrayValue):"mapValue"in r?(function(n){const s=Object.keys(n.fields||{}).sort();let o="{",u=!0;for(const f of s)u?u=!1:o+=",",o+=`${f}:${dm(n.fields[f])}`;return o+"}"})(r.mapValue):gt(61005,{value:r})}function Pc(r){switch(rs(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Th(r);return t?16+Pc(t):16;case 5:return 2*r.stringValue.length;case 6:return is(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,u)=>o+Pc(u)),0)})(r.arrayValue);case 10:case 11:return(function(s){let o=0;return ls(s.fields,((u,f)=>{o+=u.length+Pc(f)})),o})(r.mapValue);default:throw gt(13486,{value:r})}}function Nv(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function mm(r){return!!r&&"integerValue"in r}function zm(r){return!!r&&"arrayValue"in r}function Ov(r){return!!r&&"nullValue"in r}function Mv(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function kc(r){return!!r&&"mapValue"in r}function Qw(r){return(r?.mapValue?.fields||{})[S0]?.stringValue===w0}function Vl(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const t={mapValue:{fields:{}}};return ls(r.mapValue.fields,((n,s)=>t.mapValue.fields[n]=Vl(s))),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Vl(r.arrayValue.values[n]);return t}return{...r}}function Kw(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===Gw}/**
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
 */class un{constructor(t){this.value=t}static empty(){return new un({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!kc(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Vl(n)}setAll(t){let n=Ge.emptyPath(),s={},o=[];t.forEach(((f,g)=>{if(!n.isImmediateParentOf(g)){const y=this.getFieldsMap(n);this.applyChanges(y,s,o),s={},o=[],n=g.popLast()}f?s[g.lastSegment()]=Vl(f):o.push(g.lastSegment())}));const u=this.getFieldsMap(n);this.applyChanges(u,s,o)}delete(t){const n=this.field(t.popLast());kc(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Ni(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let o=n.mapValue.fields[t.get(s)];kc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(t,n,s){ls(n,((o,u)=>t[o]=u));for(const o of s)delete t[o]}clone(){return new un(Vl(this.value))}}function R0(r){const t=[];return ls(r.fields,((n,s)=>{const o=new Ge([n]);if(kc(s)){const u=R0(s.mapValue).fields;if(u.length===0)t.push(o);else for(const f of u)t.push(o.child(f))}else t.push(o)})),new In(t)}/**
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
 */class ze{constructor(t,n,s,o,u,f,g){this.key=t,this.documentType=n,this.version=s,this.readTime=o,this.createTime=u,this.data=f,this.documentState=g}static newInvalidDocument(t){return new ze(t,0,Tt.min(),Tt.min(),Tt.min(),un.empty(),0)}static newFoundDocument(t,n,s,o){return new ze(t,1,n,Tt.min(),s,o,0)}static newNoDocument(t,n){return new ze(t,2,n,Tt.min(),Tt.min(),un.empty(),0)}static newUnknownDocument(t,n){return new ze(t,3,n,Tt.min(),Tt.min(),un.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(Tt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=un.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=un.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Tt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ze&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Xc{constructor(t,n){this.position=t,this.inclusive=n}}function Vv(r,t,n){let s=0;for(let o=0;o<r.position.length;o++){const u=t[o],f=r.position[o];if(u.field.isKeyField()?s=mt.comparator(mt.fromName(f.referenceValue),n.key):s=uo(f,n.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function xv(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!Ni(r.position[n],t.position[n]))return!1;return!0}/**
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
 */class $c{constructor(t,n="asc"){this.field=t,this.dir=n}}function Yw(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class I0{}class Re extends I0{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new $w(t,n,s):n==="array-contains"?new Ww(t,s):n==="in"?new tR(t,s):n==="not-in"?new eR(t,s):n==="array-contains-any"?new nR(t,s):new Re(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new Zw(t,s):new Jw(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(uo(n,this.value)):n!==null&&rs(this.value)===rs(n)&&this.matchesComparison(uo(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return gt(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ri extends I0{constructor(t,n){super(),this.filters=t,this.op=n,this.Pe=null}static create(t,n){return new ri(t,n)}matches(t){return C0(this)?this.filters.find((n=>!n.matches(t)))===void 0:this.filters.find((n=>n.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,n)=>t.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function C0(r){return r.op==="and"}function D0(r){return Xw(r)&&C0(r)}function Xw(r){for(const t of r.filters)if(t instanceof ri)return!1;return!0}function gm(r){if(r instanceof Re)return r.field.canonicalString()+r.op.toString()+co(r.value);if(D0(r))return r.filters.map((t=>gm(t))).join(",");{const t=r.filters.map((n=>gm(n))).join(",");return`${r.op}(${t})`}}function N0(r,t){return r instanceof Re?(function(s,o){return o instanceof Re&&s.op===o.op&&s.field.isEqual(o.field)&&Ni(s.value,o.value)})(r,t):r instanceof ri?(function(s,o){return o instanceof ri&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,f,g)=>u&&N0(f,o.filters[g])),!0):!1})(r,t):void gt(19439)}function O0(r){return r instanceof Re?(function(n){return`${n.field.canonicalString()} ${n.op} ${co(n.value)}`})(r):r instanceof ri?(function(n){return n.op.toString()+" {"+n.getFilters().map(O0).join(" ,")+"}"})(r):"Filter"}class $w extends Re{constructor(t,n,s){super(t,n,s),this.key=mt.fromName(s.referenceValue)}matches(t){const n=mt.comparator(t.key,this.key);return this.matchesComparison(n)}}class Zw extends Re{constructor(t,n){super(t,"in",n),this.keys=M0("in",n)}matches(t){return this.keys.some((n=>n.isEqual(t.key)))}}class Jw extends Re{constructor(t,n){super(t,"not-in",n),this.keys=M0("not-in",n)}matches(t){return!this.keys.some((n=>n.isEqual(t.key)))}}function M0(r,t){return(t.arrayValue?.values||[]).map((n=>mt.fromName(n.referenceValue)))}class Ww extends Re{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return zm(n)&&Fl(n.arrayValue,this.value)}}class tR extends Re{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Fl(this.value.arrayValue,n)}}class eR extends Re{constructor(t,n){super(t,"not-in",n)}matches(t){if(Fl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Fl(this.value.arrayValue,n)}}class nR extends Re{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!zm(n)||!n.arrayValue.values)&&n.arrayValue.values.some((s=>Fl(this.value.arrayValue,s)))}}/**
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
 */class iR{constructor(t,n=null,s=[],o=[],u=null,f=null,g=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=f,this.endAt=g,this.Te=null}}function Pv(r,t=null,n=[],s=[],o=null,u=null,f=null){return new iR(r,t,n,s,o,u,f)}function jm(r){const t=St(r);if(t.Te===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map((s=>gm(s))).join(","),n+="|ob:",n+=t.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),Jl(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((s=>co(s))).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((s=>co(s))).join(",")),t.Te=n}return t.Te}function Bm(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!Yw(r.orderBy[n],t.orderBy[n]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!N0(r.filters[n],t.filters[n]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!xv(r.startAt,t.startAt)&&xv(r.endAt,t.endAt)}function pm(r){return mt.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class Wl{constructor(t,n=null,s=[],o=[],u=null,f="F",g=null,y=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=f,this.startAt=g,this.endAt=y,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function rR(r,t,n,s,o,u,f,g){return new Wl(r,t,n,s,o,u,f,g)}function Eh(r){return new Wl(r)}function kv(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function V0(r){return r.collectionGroup!==null}function xl(r){const t=St(r);if(t.Ie===null){t.Ie=[];const n=new Set;for(const u of t.explicitOrderBy)t.Ie.push(u),n.add(u.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(f){let g=new Oe(Ge.comparator);return f.filters.forEach((y=>{y.getFlattenedFilters().forEach((p=>{p.isInequality()&&(g=g.add(p.field))}))})),g})(t).forEach((u=>{n.has(u.canonicalString())||u.isKeyField()||t.Ie.push(new $c(u,s))})),n.has(Ge.keyField().canonicalString())||t.Ie.push(new $c(Ge.keyField(),s))}return t.Ie}function Si(r){const t=St(r);return t.Ee||(t.Ee=sR(t,xl(r))),t.Ee}function sR(r,t){if(r.limitType==="F")return Pv(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new $c(o.field,u)}));const n=r.endAt?new Xc(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Xc(r.startAt.position,r.startAt.inclusive):null;return Pv(r.path,r.collectionGroup,t,r.filters,r.limit,n,s)}}function ym(r,t){const n=r.filters.concat([t]);return new Wl(r.path,r.collectionGroup,r.explicitOrderBy.slice(),n,r.limit,r.limitType,r.startAt,r.endAt)}function Zc(r,t,n){return new Wl(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,n,r.startAt,r.endAt)}function Ah(r,t){return Bm(Si(r),Si(t))&&r.limitType===t.limitType}function x0(r){return`${jm(Si(r))}|lt:${r.limitType}`}function $a(r){return`Query(target=${(function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map((o=>O0(o))).join(", ")}]`),Jl(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map((o=>(function(f){return`${f.field.canonicalString()} (${f.dir})`})(o))).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map((o=>co(o))).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map((o=>co(o))).join(",")),`Target(${s})`})(Si(r))}; limitType=${r.limitType})`}function bh(r,t){return t.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):mt.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(r,t)&&(function(s,o){for(const u of xl(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(r,t)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(r,t)&&(function(s,o){return!(s.startAt&&!(function(f,g,y){const p=Vv(f,g,y);return f.inclusive?p<=0:p<0})(s.startAt,xl(s),o)||s.endAt&&!(function(f,g,y){const p=Vv(f,g,y);return f.inclusive?p>=0:p>0})(s.endAt,xl(s),o))})(r,t)}function aR(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function P0(r){return(t,n)=>{let s=!1;for(const o of xl(r)){const u=oR(o,t,n);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function oR(r,t,n){const s=r.field.isKeyField()?mt.comparator(t.key,n.key):(function(u,f,g){const y=f.data.field(u),p=g.data.field(u);return y!==null&&p!==null?uo(y,p):gt(42886)})(r.field,t,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return gt(19790,{direction:r.dir})}}/**
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
 */class sa{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,t))return u}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),o=this.inner[s];if(o===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],t))return void(o[u]=[t,n]);o.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(t){ls(this.inner,((n,s)=>{for(const[o,u]of s)t(o,u)}))}isEmpty(){return _0(this.inner)}size(){return this.innerSize}}/**
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
 */const lR=new ce(mt.comparator);function nr(){return lR}const k0=new ce(mt.comparator);function Dl(...r){let t=k0;for(const n of r)t=t.insert(n.key,n);return t}function U0(r){let t=k0;return r.forEach(((n,s)=>t=t.insert(n,s.overlayedDocument))),t}function Ys(){return Pl()}function L0(){return Pl()}function Pl(){return new sa((r=>r.toString()),((r,t)=>r.isEqual(t)))}const uR=new ce(mt.comparator),cR=new Oe(mt.comparator);function Pt(...r){let t=cR;for(const n of r)t=t.add(n);return t}const hR=new Oe(xt);function fR(){return hR}/**
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
 */function qm(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qc(t)?"-0":t}}function z0(r){return{integerValue:""+r}}function dR(r,t){return jw(t)?z0(t):qm(r,t)}/**
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
 */class Sh{constructor(){this._=void 0}}function mR(r,t,n){return r instanceof Gl?(function(o,u){const f={fields:{[E0]:{stringValue:T0},[b0]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Lm(u)&&(u=Th(u)),u&&(f.fields[A0]=u),{mapValue:f}})(n,t):r instanceof Ql?B0(r,t):r instanceof Kl?q0(r,t):(function(o,u){const f=j0(o,u),g=Uv(f)+Uv(o.Ae);return mm(f)&&mm(o.Ae)?z0(g):qm(o.serializer,g)})(r,t)}function gR(r,t,n){return r instanceof Ql?B0(r,t):r instanceof Kl?q0(r,t):n}function j0(r,t){return r instanceof Jc?(function(s){return mm(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(t)?t:{integerValue:0}:null}class Gl extends Sh{}class Ql extends Sh{constructor(t){super(),this.elements=t}}function B0(r,t){const n=H0(t);for(const s of r.elements)n.some((o=>Ni(o,s)))||n.push(s);return{arrayValue:{values:n}}}class Kl extends Sh{constructor(t){super(),this.elements=t}}function q0(r,t){let n=H0(t);for(const s of r.elements)n=n.filter((o=>!Ni(o,s)));return{arrayValue:{values:n}}}class Jc extends Sh{constructor(t,n){super(),this.serializer=t,this.Ae=n}}function Uv(r){return Ee(r.integerValue||r.doubleValue)}function H0(r){return zm(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class pR{constructor(t,n){this.field=t,this.transform=n}}function yR(r,t){return r.field.isEqual(t.field)&&(function(s,o){return s instanceof Ql&&o instanceof Ql||s instanceof Kl&&o instanceof Kl?lo(s.elements,o.elements,Ni):s instanceof Jc&&o instanceof Jc?Ni(s.Ae,o.Ae):s instanceof Gl&&o instanceof Gl})(r.transform,t.transform)}class _R{constructor(t,n){this.version=t,this.transformResults=n}}class mn{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new mn}static exists(t){return new mn(void 0,t)}static updateTime(t){return new mn(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Uc(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class wh{}function F0(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Hm(r.key,mn.none()):new tu(r.key,r.data,mn.none());{const n=r.data,s=un.empty();let o=new Oe(Ge.comparator);for(let u of t.fields)if(!o.has(u)){let f=n.field(u);f===null&&u.length>1&&(u=u.popLast(),f=n.field(u)),f===null?s.delete(u):s.set(u,f),o=o.add(u)}return new us(r.key,s,new In(o.toArray()),mn.none())}}function vR(r,t,n){r instanceof tu?(function(o,u,f){const g=o.value.clone(),y=zv(o.fieldTransforms,u,f.transformResults);g.setAll(y),u.convertToFoundDocument(f.version,g).setHasCommittedMutations()})(r,t,n):r instanceof us?(function(o,u,f){if(!Uc(o.precondition,u))return void u.convertToUnknownDocument(f.version);const g=zv(o.fieldTransforms,u,f.transformResults),y=u.data;y.setAll(G0(o)),y.setAll(g),u.convertToFoundDocument(f.version,y).setHasCommittedMutations()})(r,t,n):(function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()})(0,t,n)}function kl(r,t,n,s){return r instanceof tu?(function(u,f,g,y){if(!Uc(u.precondition,f))return g;const p=u.value.clone(),E=jv(u.fieldTransforms,y,f);return p.setAll(E),f.convertToFoundDocument(f.version,p).setHasLocalMutations(),null})(r,t,n,s):r instanceof us?(function(u,f,g,y){if(!Uc(u.precondition,f))return g;const p=jv(u.fieldTransforms,y,f),E=f.data;return E.setAll(G0(u)),E.setAll(p),f.convertToFoundDocument(f.version,E).setHasLocalMutations(),g===null?null:g.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((S=>S.field)))})(r,t,n,s):(function(u,f,g){return Uc(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):g})(r,t,n)}function TR(r,t){let n=null;for(const s of r.fieldTransforms){const o=t.data.field(s.field),u=j0(s.transform,o||null);u!=null&&(n===null&&(n=un.empty()),n.set(s.field,u))}return n||null}function Lv(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&lo(s,o,((u,f)=>yR(u,f)))})(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class tu extends wh{constructor(t,n,s,o=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class us extends wh{constructor(t,n,s,o,u=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function G0(r){const t=new Map;return r.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=r.data.field(n);t.set(n,s)}})),t}function zv(r,t,n){const s=new Map;zt(r.length===n.length,32656,{Re:n.length,Ve:r.length});for(let o=0;o<n.length;o++){const u=r[o],f=u.transform,g=t.data.field(u.field);s.set(u.field,gR(f,g,n[o]))}return s}function jv(r,t,n){const s=new Map;for(const o of r){const u=o.transform,f=n.data.field(o.field);s.set(o.field,mR(u,f,t))}return s}class Hm extends wh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Q0 extends wh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ER{constructor(t,n,s,o){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(t.key)&&vR(u,t,s[o])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=kl(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=kl(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=L0();return this.mutations.forEach((o=>{const u=t.get(o.key),f=u.overlayedDocument;let g=this.applyToLocalView(f,u.mutatedFields);g=n.has(o.key)?null:g;const y=F0(f,g);y!==null&&s.set(o.key,y),f.isValidDocument()||f.convertToNoDocument(Tt.min())})),s}keys(){return this.mutations.reduce(((t,n)=>t.add(n.key)),Pt())}isEqual(t){return this.batchId===t.batchId&&lo(this.mutations,t.mutations,((n,s)=>Lv(n,s)))&&lo(this.baseMutations,t.baseMutations,((n,s)=>Lv(n,s)))}}class Fm{constructor(t,n,s,o){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=o}static from(t,n,s){zt(t.mutations.length===s.length,58842,{me:t.mutations.length,fe:s.length});let o=(function(){return uR})();const u=t.mutations;for(let f=0;f<u.length;f++)o=o.insert(u[f].key,s[f].version);return new Fm(t,n,s,o)}}/**
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
 */class AR{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class bR{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var we,Lt;function K0(r){switch(r){case Q.OK:return gt(64938);case Q.CANCELLED:case Q.UNKNOWN:case Q.DEADLINE_EXCEEDED:case Q.RESOURCE_EXHAUSTED:case Q.INTERNAL:case Q.UNAVAILABLE:case Q.UNAUTHENTICATED:return!1;case Q.INVALID_ARGUMENT:case Q.NOT_FOUND:case Q.ALREADY_EXISTS:case Q.PERMISSION_DENIED:case Q.FAILED_PRECONDITION:case Q.ABORTED:case Q.OUT_OF_RANGE:case Q.UNIMPLEMENTED:case Q.DATA_LOSS:return!0;default:return gt(15467,{code:r})}}function Y0(r){if(r===void 0)return er("GRPC error has no .code"),Q.UNKNOWN;switch(r){case we.OK:return Q.OK;case we.CANCELLED:return Q.CANCELLED;case we.UNKNOWN:return Q.UNKNOWN;case we.DEADLINE_EXCEEDED:return Q.DEADLINE_EXCEEDED;case we.RESOURCE_EXHAUSTED:return Q.RESOURCE_EXHAUSTED;case we.INTERNAL:return Q.INTERNAL;case we.UNAVAILABLE:return Q.UNAVAILABLE;case we.UNAUTHENTICATED:return Q.UNAUTHENTICATED;case we.INVALID_ARGUMENT:return Q.INVALID_ARGUMENT;case we.NOT_FOUND:return Q.NOT_FOUND;case we.ALREADY_EXISTS:return Q.ALREADY_EXISTS;case we.PERMISSION_DENIED:return Q.PERMISSION_DENIED;case we.FAILED_PRECONDITION:return Q.FAILED_PRECONDITION;case we.ABORTED:return Q.ABORTED;case we.OUT_OF_RANGE:return Q.OUT_OF_RANGE;case we.UNIMPLEMENTED:return Q.UNIMPLEMENTED;case we.DATA_LOSS:return Q.DATA_LOSS;default:return gt(39323,{code:r})}}(Lt=we||(we={}))[Lt.OK=0]="OK",Lt[Lt.CANCELLED=1]="CANCELLED",Lt[Lt.UNKNOWN=2]="UNKNOWN",Lt[Lt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Lt[Lt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Lt[Lt.NOT_FOUND=5]="NOT_FOUND",Lt[Lt.ALREADY_EXISTS=6]="ALREADY_EXISTS",Lt[Lt.PERMISSION_DENIED=7]="PERMISSION_DENIED",Lt[Lt.UNAUTHENTICATED=16]="UNAUTHENTICATED",Lt[Lt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Lt[Lt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Lt[Lt.ABORTED=10]="ABORTED",Lt[Lt.OUT_OF_RANGE=11]="OUT_OF_RANGE",Lt[Lt.UNIMPLEMENTED=12]="UNIMPLEMENTED",Lt[Lt.INTERNAL=13]="INTERNAL",Lt[Lt.UNAVAILABLE=14]="UNAVAILABLE",Lt[Lt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function SR(){return new TextEncoder}/**
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
 */const wR=new $r([4294967295,4294967295],0);function Bv(r){const t=SR().encode(r),n=new o0;return n.update(t),new Uint8Array(n.digest())}function qv(r){const t=new DataView(r.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),o=t.getUint32(8,!0),u=t.getUint32(12,!0);return[new $r([n,s],0),new $r([o,u],0)]}class Gm{constructor(t,n,s){if(this.bitmap=t,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Nl(`Invalid padding: ${n}`);if(s<0)throw new Nl(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new Nl(`Invalid hash count: ${s}`);if(t.length===0&&n!==0)throw new Nl(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*t.length-n,this.pe=$r.fromNumber(this.ge)}ye(t,n,s){let o=t.add(n.multiply($r.fromNumber(s)));return o.compare(wR)===1&&(o=new $r([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const n=Bv(t),[s,o]=qv(n);for(let u=0;u<this.hashCount;u++){const f=this.ye(s,o,u);if(!this.we(f))return!1}return!0}static create(t,n,s){const o=t%8==0?0:8-t%8,u=new Uint8Array(Math.ceil(t/8)),f=new Gm(u,o,n);return s.forEach((g=>f.insert(g))),f}insert(t){if(this.ge===0)return;const n=Bv(t),[s,o]=qv(n);for(let u=0;u<this.hashCount;u++){const f=this.ye(s,o,u);this.Se(f)}}Se(t){const n=Math.floor(t/8),s=t%8;this.bitmap[n]|=1<<s}}class Nl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Rh{constructor(t,n,s,o,u){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const o=new Map;return o.set(t,eu.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new Rh(Tt.min(),o,new ce(xt),nr(),Pt())}}class eu{constructor(t,n,s,o,u){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new eu(s,n,Pt(),Pt(),Pt())}}/**
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
 */class Lc{constructor(t,n,s,o){this.be=t,this.removedTargetIds=n,this.key=s,this.De=o}}class X0{constructor(t,n){this.targetId=t,this.Ce=n}}class $0{constructor(t,n,s=Qe.EMPTY_BYTE_STRING,o=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=o}}class Hv{constructor(){this.ve=0,this.Fe=Fv(),this.Me=Qe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=Pt(),n=Pt(),s=Pt();return this.Fe.forEach(((o,u)=>{switch(u){case 0:t=t.add(o);break;case 2:n=n.add(o);break;case 1:s=s.add(o);break;default:gt(38017,{changeType:u})}})),new eu(this.Me,this.xe,t,n,s)}qe(){this.Oe=!1,this.Fe=Fv()}Qe(t,n){this.Oe=!0,this.Fe=this.Fe.insert(t,n)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,zt(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class RR{constructor(t){this.Ge=t,this.ze=new Map,this.je=nr(),this.Je=Nc(),this.He=Nc(),this.Ye=new ce(xt)}Ze(t){for(const n of t.be)t.De&&t.De.isFoundDocument()?this.Xe(n,t.De):this.et(n,t.key,t.De);for(const n of t.removedTargetIds)this.et(n,t.key,t.De)}tt(t){this.forEachTarget(t,(n=>{const s=this.nt(n);switch(t.state){case 0:this.rt(n)&&s.Le(t.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(t.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(s.We(),s.Le(t.resumeToken));break;case 4:this.rt(n)&&(this.it(n),s.Le(t.resumeToken));break;default:gt(56790,{state:t.state})}}))}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ze.forEach(((s,o)=>{this.rt(o)&&n(o)}))}st(t){const n=t.targetId,s=t.Ce.count,o=this.ot(n);if(o){const u=o.target;if(pm(u))if(s===0){const f=new mt(u.path);this.et(n,f,ze.newNoDocument(f,Tt.min()))}else zt(s===1,20013,{expectedCount:s});else{const f=this._t(n);if(f!==s){const g=this.ut(t),y=g?this.ct(g,t,f):1;if(y!==0){this.it(n);const p=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,p)}}}}}ut(t){const n=t.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=n;let f,g;try{f=is(s).toUint8Array()}catch(y){if(y instanceof v0)return oo("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{g=new Gm(f,o,u)}catch(y){return oo(y instanceof Nl?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return g.ge===0?null:g}ct(t,n,s){return n.Ce.count===s-this.Pt(t,n.targetId)?0:2}Pt(t,n){const s=this.Ge.getRemoteKeysForTarget(n);let o=0;return s.forEach((u=>{const f=this.Ge.ht(),g=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;t.mightContain(g)||(this.et(n,u,null),o++)})),o}Tt(t){const n=new Map;this.ze.forEach(((u,f)=>{const g=this.ot(f);if(g){if(u.current&&pm(g.target)){const y=new mt(g.target.path);this.It(y).has(f)||this.Et(f,y)||this.et(f,y,ze.newNoDocument(y,t))}u.Be&&(n.set(f,u.ke()),u.qe())}}));let s=Pt();this.He.forEach(((u,f)=>{let g=!0;f.forEachWhile((y=>{const p=this.ot(y);return!p||p.purpose==="TargetPurposeLimboResolution"||(g=!1,!1)})),g&&(s=s.add(u))})),this.je.forEach(((u,f)=>f.setReadTime(t)));const o=new Rh(t,n,this.Ye,this.je,s);return this.je=nr(),this.Je=Nc(),this.He=Nc(),this.Ye=new ce(xt),o}Xe(t,n){if(!this.rt(t))return;const s=this.Et(t,n.key)?2:0;this.nt(t).Qe(n.key,s),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(t)),this.He=this.He.insert(n.key,this.dt(n.key).add(t))}et(t,n,s){if(!this.rt(t))return;const o=this.nt(t);this.Et(t,n)?o.Qe(n,1):o.$e(n),this.He=this.He.insert(n,this.dt(n).delete(t)),this.He=this.He.insert(n,this.dt(n).add(t)),s&&(this.je=this.je.insert(n,s))}removeTarget(t){this.ze.delete(t)}_t(t){const n=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let n=this.ze.get(t);return n||(n=new Hv,this.ze.set(t,n)),n}dt(t){let n=this.He.get(t);return n||(n=new Oe(xt),this.He=this.He.insert(t,n)),n}It(t){let n=this.Je.get(t);return n||(n=new Oe(xt),this.Je=this.Je.insert(t,n)),n}rt(t){const n=this.ot(t)!==null;return n||lt("WatchChangeAggregator","Detected inactive target",t),n}ot(t){const n=this.ze.get(t);return n&&n.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new Hv),this.Ge.getRemoteKeysForTarget(t).forEach((n=>{this.et(t,n,null)}))}Et(t,n){return this.Ge.getRemoteKeysForTarget(t).has(n)}}function Nc(){return new ce(mt.comparator)}function Fv(){return new ce(mt.comparator)}const IR={asc:"ASCENDING",desc:"DESCENDING"},CR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},DR={and:"AND",or:"OR"};class NR{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function _m(r,t){return r.useProto3Json||Jl(t)?t:{value:t}}function Wc(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Z0(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function OR(r,t){return Wc(r,t.toTimestamp())}function Cn(r){return zt(!!r,49232),Tt.fromTimestamp((function(n){const s=ns(n);return new se(s.seconds,s.nanos)})(r))}function Qm(r,t){return vm(r,t).canonicalString()}function vm(r,t){const n=(function(o){return new Zt(["projects",o.projectId,"databases",o.database])})(r).child("documents");return t===void 0?n:n.child(t)}function J0(r){const t=Zt.fromString(r);return zt(rE(t),10190,{key:t.toString()}),t}function th(r,t){return Qm(r.databaseId,t.path)}function Ul(r,t){const n=J0(t);if(n.get(1)!==r.databaseId.projectId)throw new st(Q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new st(Q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new mt(tE(n))}function W0(r,t){return Qm(r.databaseId,t)}function MR(r){const t=J0(r);return t.length===4?Zt.emptyPath():tE(t)}function Tm(r){return new Zt(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function tE(r){return zt(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Gv(r,t,n){return{name:th(r,t),fields:n.value.mapValue.fields}}function VR(r,t){return"found"in t?(function(s,o){zt(!!o.found,43571),o.found.name,o.found.updateTime;const u=Ul(s,o.found.name),f=Cn(o.found.updateTime),g=o.found.createTime?Cn(o.found.createTime):Tt.min(),y=new un({mapValue:{fields:o.found.fields}});return ze.newFoundDocument(u,f,g,y)})(r,t):"missing"in t?(function(s,o){zt(!!o.missing,3894),zt(!!o.readTime,22933);const u=Ul(s,o.missing),f=Cn(o.readTime);return ze.newNoDocument(u,f)})(r,t):gt(7234,{result:t})}function xR(r,t){let n;if("targetChange"in t){t.targetChange;const s=(function(p){return p==="NO_CHANGE"?0:p==="ADD"?1:p==="REMOVE"?2:p==="CURRENT"?3:p==="RESET"?4:gt(39313,{state:p})})(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],u=(function(p,E){return p.useProto3Json?(zt(E===void 0||typeof E=="string",58123),Qe.fromBase64String(E||"")):(zt(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),Qe.fromUint8Array(E||new Uint8Array))})(r,t.targetChange.resumeToken),f=t.targetChange.cause,g=f&&(function(p){const E=p.code===void 0?Q.UNKNOWN:Y0(p.code);return new st(E,p.message||"")})(f);n=new $0(s,o,u,g||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const o=Ul(r,s.document.name),u=Cn(s.document.updateTime),f=s.document.createTime?Cn(s.document.createTime):Tt.min(),g=new un({mapValue:{fields:s.document.fields}}),y=ze.newFoundDocument(o,u,f,g),p=s.targetIds||[],E=s.removedTargetIds||[];n=new Lc(p,E,y.key,y)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const o=Ul(r,s.document),u=s.readTime?Cn(s.readTime):Tt.min(),f=ze.newNoDocument(o,u),g=s.removedTargetIds||[];n=new Lc([],g,f.key,f)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const o=Ul(r,s.document),u=s.removedTargetIds||[];n=new Lc([],u,o,null)}else{if(!("filter"in t))return gt(11601,{Rt:t});{t.filter;const s=t.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,f=new bR(o,u),g=s.targetId;n=new X0(g,f)}}return n}function eE(r,t){let n;if(t instanceof tu)n={update:Gv(r,t.key,t.value)};else if(t instanceof Hm)n={delete:th(r,t.key)};else if(t instanceof us)n={update:Gv(r,t.key,t.data),updateMask:HR(t.fieldMask)};else{if(!(t instanceof Q0))return gt(16599,{Vt:t.type});n={verify:th(r,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((s=>(function(u,f){const g=f.transform;if(g instanceof Gl)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(g instanceof Ql)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:g.elements}};if(g instanceof Kl)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:g.elements}};if(g instanceof Jc)return{fieldPath:f.field.canonicalString(),increment:g.Ae};throw gt(20930,{transform:f.transform})})(0,s)))),t.precondition.isNone||(n.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:OR(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:gt(27497)})(r,t.precondition)),n}function PR(r,t){return r&&r.length>0?(zt(t!==void 0,14353),r.map((n=>(function(o,u){let f=o.updateTime?Cn(o.updateTime):Cn(u);return f.isEqual(Tt.min())&&(f=Cn(u)),new _R(f,o.transformResults||[])})(n,t)))):[]}function kR(r,t){return{documents:[W0(r,t.path)]}}function UR(r,t){const n={structuredQuery:{}},s=t.path;let o;t.collectionGroup!==null?(o=s,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=W0(r,o);const u=(function(p){if(p.length!==0)return iE(ri.create(p,"and"))})(t.filters);u&&(n.structuredQuery.where=u);const f=(function(p){if(p.length!==0)return p.map((E=>(function(C){return{field:Za(C.field),direction:jR(C.dir)}})(E)))})(t.orderBy);f&&(n.structuredQuery.orderBy=f);const g=_m(r,t.limit);return g!==null&&(n.structuredQuery.limit=g),t.startAt&&(n.structuredQuery.startAt=(function(p){return{before:p.inclusive,values:p.position}})(t.startAt)),t.endAt&&(n.structuredQuery.endAt=(function(p){return{before:!p.inclusive,values:p.position}})(t.endAt)),{ft:n,parent:o}}function LR(r){let t=MR(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){zt(s===1,65062);const E=n.from[0];E.allDescendants?o=E.collectionId:t=t.child(E.collectionId)}let u=[];n.where&&(u=(function(S){const C=nE(S);return C instanceof ri&&D0(C)?C.getFilters():[C]})(n.where));let f=[];n.orderBy&&(f=(function(S){return S.map((C=>(function(J){return new $c(Ja(J.field),(function(W){switch(W){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(J.direction))})(C)))})(n.orderBy));let g=null;n.limit&&(g=(function(S){let C;return C=typeof S=="object"?S.value:S,Jl(C)?null:C})(n.limit));let y=null;n.startAt&&(y=(function(S){const C=!!S.before,H=S.values||[];return new Xc(H,C)})(n.startAt));let p=null;return n.endAt&&(p=(function(S){const C=!S.before,H=S.values||[];return new Xc(H,C)})(n.endAt)),rR(t,o,f,u,g,"F",y,p)}function zR(r,t){const n=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return gt(28987,{purpose:o})}})(t.purpose);return n==null?null:{"goog-listen-tags":n}}function nE(r){return r.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Ja(n.unaryFilter.field);return Re.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Ja(n.unaryFilter.field);return Re.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Ja(n.unaryFilter.field);return Re.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=Ja(n.unaryFilter.field);return Re.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return gt(61313);default:return gt(60726)}})(r):r.fieldFilter!==void 0?(function(n){return Re.create(Ja(n.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return gt(58110);default:return gt(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(n){return ri.create(n.compositeFilter.filters.map((s=>nE(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return gt(1026)}})(n.compositeFilter.op))})(r):gt(30097,{filter:r})}function jR(r){return IR[r]}function BR(r){return CR[r]}function qR(r){return DR[r]}function Za(r){return{fieldPath:r.canonicalString()}}function Ja(r){return Ge.fromServerFormat(r.fieldPath)}function iE(r){return r instanceof Re?(function(n){if(n.op==="=="){if(Mv(n.value))return{unaryFilter:{field:Za(n.field),op:"IS_NAN"}};if(Ov(n.value))return{unaryFilter:{field:Za(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Mv(n.value))return{unaryFilter:{field:Za(n.field),op:"IS_NOT_NAN"}};if(Ov(n.value))return{unaryFilter:{field:Za(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Za(n.field),op:BR(n.op),value:n.value}}})(r):r instanceof ri?(function(n){const s=n.getFilters().map((o=>iE(o)));return s.length===1?s[0]:{compositeFilter:{op:qR(n.op),filters:s}}})(r):gt(54877,{filter:r})}function HR(r){const t=[];return r.fields.forEach((n=>t.push(n.canonicalString()))),{fieldPaths:t}}function rE(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class Kr{constructor(t,n,s,o,u=Tt.min(),f=Tt.min(),g=Qe.EMPTY_BYTE_STRING,y=null){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=g,this.expectedCount=y}withSequenceNumber(t){return new Kr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Kr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class FR{constructor(t){this.yt=t}}function GR(r){const t=LR({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Zc(t,t.limit,"L"):t}/**
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
 */class QR{constructor(){this.Cn=new KR}addToCollectionParentIndex(t,n){return this.Cn.add(n),X.resolve()}getCollectionParents(t,n){return X.resolve(this.Cn.getEntries(n))}addFieldIndex(t,n){return X.resolve()}deleteFieldIndex(t,n){return X.resolve()}deleteAllFieldIndexes(t){return X.resolve()}createTargetIndexes(t,n){return X.resolve()}getDocumentsMatchingTarget(t,n){return X.resolve(null)}getIndexType(t,n){return X.resolve(0)}getFieldIndexes(t,n){return X.resolve([])}getNextCollectionGroupToUpdate(t){return X.resolve(null)}getMinOffset(t,n){return X.resolve(es.min())}getMinOffsetFromCollectionGroup(t,n){return X.resolve(es.min())}updateCollectionGroup(t,n,s){return X.resolve()}updateIndexEntries(t,n){return X.resolve()}}class KR{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),o=this.index[n]||new Oe(Zt.comparator),u=!o.has(s);return this.index[n]=o.add(s),u}has(t){const n=t.lastSegment(),s=t.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(t){return(this.index[t]||new Oe(Zt.comparator)).toArray()}}/**
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
 */const Qv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},sE=41943040;class dn{static withCacheSize(t){return new dn(t,dn.DEFAULT_COLLECTION_PERCENTILE,dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,s){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
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
 */dn.DEFAULT_COLLECTION_PERCENTILE=10,dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,dn.DEFAULT=new dn(sE,dn.DEFAULT_COLLECTION_PERCENTILE,dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),dn.DISABLED=new dn(-1,0,0);/**
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
 */class ho{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new ho(0)}static cr(){return new ho(-1)}}/**
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
 */const Kv="LruGarbageCollector",YR=1048576;function Yv([r,t],[n,s]){const o=xt(r,n);return o===0?xt(t,s):o}class XR{constructor(t){this.Ir=t,this.buffer=new Oe(Yv),this.Er=0}dr(){return++this.Er}Ar(t){const n=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();Yv(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class $R{constructor(t,n,s){this.garbageCollector=t,this.asyncQueue=n,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){lt(Kv,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){_o(n)?lt(Kv,"Ignoring IndexedDB error during garbage collection: ",n):await yo(n)}await this.Vr(3e5)}))}}class ZR{constructor(t,n){this.mr=t,this.params=n}calculateTargetCount(t,n){return this.mr.gr(t).next((s=>Math.floor(n/100*s)))}nthSequenceNumber(t,n){if(n===0)return X.resolve(vh.ce);const s=new XR(n);return this.mr.forEachTarget(t,(o=>s.Ar(o.sequenceNumber))).next((()=>this.mr.pr(t,(o=>s.Ar(o))))).next((()=>s.maxValue))}removeTargets(t,n,s){return this.mr.removeTargets(t,n,s)}removeOrphanedDocuments(t,n){return this.mr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(lt("LruGarbageCollector","Garbage collection skipped; disabled"),X.resolve(Qv)):this.getCacheSize(t).next((s=>s<this.params.cacheSizeCollectionThreshold?(lt("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Qv):this.yr(t,n)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,n){let s,o,u,f,g,y,p;const E=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((S=>(S>this.params.maximumSequenceNumbersToCollect?(lt("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${S}`),o=this.params.maximumSequenceNumbersToCollect):o=S,f=Date.now(),this.nthSequenceNumber(t,o)))).next((S=>(s=S,g=Date.now(),this.removeTargets(t,s,n)))).next((S=>(u=S,y=Date.now(),this.removeOrphanedDocuments(t,s)))).next((S=>(p=Date.now(),Xa()<=Vt.DEBUG&&lt("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-E}ms
	Determined least recently used ${o} in `+(g-f)+`ms
	Removed ${u} targets in `+(y-g)+`ms
	Removed ${S} documents in `+(p-y)+`ms
Total Duration: ${p-E}ms`),X.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:S}))))}}function JR(r,t){return new ZR(r,t)}/**
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
 */class WR{constructor(){this.changes=new sa((t=>t.toString()),((t,n)=>t.isEqual(n))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,ze.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?X.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class tI{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class eI{constructor(t,n,s,o){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next((o=>(s=o,this.remoteDocumentCache.getEntry(t,n)))).next((o=>(s!==null&&kl(s.mutation,o,In.empty(),se.now()),o)))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next((s=>this.getLocalViewOfDocuments(t,s,Pt()).next((()=>s))))}getLocalViewOfDocuments(t,n,s=Pt()){const o=Ys();return this.populateOverlays(t,o,n).next((()=>this.computeViews(t,n,o,s).next((u=>{let f=Dl();return u.forEach(((g,y)=>{f=f.insert(g,y.overlayedDocument)})),f}))))}getOverlayedDocuments(t,n){const s=Ys();return this.populateOverlays(t,s,n).next((()=>this.computeViews(t,n,s,Pt())))}populateOverlays(t,n,s){const o=[];return s.forEach((u=>{n.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(t,o).next((u=>{u.forEach(((f,g)=>{n.set(f,g)}))}))}computeViews(t,n,s,o){let u=nr();const f=Pl(),g=(function(){return Pl()})();return n.forEach(((y,p)=>{const E=s.get(p.key);o.has(p.key)&&(E===void 0||E.mutation instanceof us)?u=u.insert(p.key,p):E!==void 0?(f.set(p.key,E.mutation.getFieldMask()),kl(E.mutation,p,E.mutation.getFieldMask(),se.now())):f.set(p.key,In.empty())})),this.recalculateAndSaveOverlays(t,u).next((y=>(y.forEach(((p,E)=>f.set(p,E))),n.forEach(((p,E)=>g.set(p,new tI(E,f.get(p)??null)))),g)))}recalculateAndSaveOverlays(t,n){const s=Pl();let o=new ce(((f,g)=>f-g)),u=Pt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next((f=>{for(const g of f)g.keys().forEach((y=>{const p=n.get(y);if(p===null)return;let E=s.get(y)||In.empty();E=g.applyToLocalView(p,E),s.set(y,E);const S=(o.get(g.batchId)||Pt()).add(y);o=o.insert(g.batchId,S)}))})).next((()=>{const f=[],g=o.getReverseIterator();for(;g.hasNext();){const y=g.getNext(),p=y.key,E=y.value,S=L0();E.forEach((C=>{if(!u.has(C)){const H=F0(n.get(C),s.get(C));H!==null&&S.set(C,H),u=u.add(C)}})),f.push(this.documentOverlayCache.saveOverlays(t,p,S))}return X.waitFor(f)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next((s=>this.recalculateAndSaveOverlays(t,s)))}getDocumentsMatchingQuery(t,n,s,o){return(function(f){return mt.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):V0(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s,o):this.getDocumentsMatchingCollectionQuery(t,n,s,o)}getNextDocuments(t,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,o).next((u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,o-u.size):X.resolve(Ys());let g=Bl,y=u;return f.next((p=>X.forEach(p,((E,S)=>(g<S.largestBatchId&&(g=S.largestBatchId),u.get(E)?X.resolve():this.remoteDocumentCache.getEntry(t,E).next((C=>{y=y.insert(E,C)}))))).next((()=>this.populateOverlays(t,p,u))).next((()=>this.computeViews(t,y,p,Pt()))).next((E=>({batchId:g,changes:U0(E)})))))}))}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new mt(n)).next((s=>{let o=Dl();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(t,n,s,o){const u=n.collectionGroup;let f=Dl();return this.indexManager.getCollectionParents(t,u).next((g=>X.forEach(g,(y=>{const p=(function(S,C){return new Wl(C,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)})(n,y.child(u));return this.getDocumentsMatchingCollectionQuery(t,p,s,o).next((E=>{E.forEach(((S,C)=>{f=f.insert(S,C)}))}))})).next((()=>f))))}getDocumentsMatchingCollectionQuery(t,n,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next((f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,u,o)))).next((f=>{u.forEach(((y,p)=>{const E=p.getKey();f.get(E)===null&&(f=f.insert(E,ze.newInvalidDocument(E)))}));let g=Dl();return f.forEach(((y,p)=>{const E=u.get(y);E!==void 0&&kl(E.mutation,p,In.empty(),se.now()),bh(n,p)&&(g=g.insert(y,p))})),g}))}}/**
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
 */class nI{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,n){return X.resolve(this.Lr.get(n))}saveBundleMetadata(t,n){return this.Lr.set(n.id,(function(o){return{id:o.id,version:o.version,createTime:Cn(o.createTime)}})(n)),X.resolve()}getNamedQuery(t,n){return X.resolve(this.kr.get(n))}saveNamedQuery(t,n){return this.kr.set(n.name,(function(o){return{name:o.name,query:GR(o.bundledQuery),readTime:Cn(o.readTime)}})(n)),X.resolve()}}/**
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
 */class iI{constructor(){this.overlays=new ce(mt.comparator),this.qr=new Map}getOverlay(t,n){return X.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Ys();return X.forEach(n,(o=>this.getOverlay(t,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(t,n,s){return s.forEach(((o,u)=>{this.St(t,n,u)})),X.resolve()}removeOverlaysForBatchId(t,n,s){const o=this.qr.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.qr.delete(s)),X.resolve()}getOverlaysForCollection(t,n,s){const o=Ys(),u=n.length+1,f=new mt(n.child("")),g=this.overlays.getIteratorFrom(f);for(;g.hasNext();){const y=g.getNext().value,p=y.getKey();if(!n.isPrefixOf(p.path))break;p.path.length===u&&y.largestBatchId>s&&o.set(y.getKey(),y)}return X.resolve(o)}getOverlaysForCollectionGroup(t,n,s,o){let u=new ce(((p,E)=>p-E));const f=this.overlays.getIterator();for(;f.hasNext();){const p=f.getNext().value;if(p.getKey().getCollectionGroup()===n&&p.largestBatchId>s){let E=u.get(p.largestBatchId);E===null&&(E=Ys(),u=u.insert(p.largestBatchId,E)),E.set(p.getKey(),p)}}const g=Ys(),y=u.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach(((p,E)=>g.set(p,E))),!(g.size()>=o)););return X.resolve(g)}St(t,n,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.qr.get(o.largestBatchId).delete(s.key);this.qr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new AR(n,s));let u=this.qr.get(n);u===void 0&&(u=Pt(),this.qr.set(n,u)),this.qr.set(n,u.add(s.key))}}/**
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
 */class rI{constructor(){this.sessionToken=Qe.EMPTY_BYTE_STRING}getSessionToken(t){return X.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,X.resolve()}}/**
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
 */class Km{constructor(){this.Qr=new Oe(Le.$r),this.Ur=new Oe(Le.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,n){const s=new Le(t,n);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(t,n){t.forEach((s=>this.addReference(s,n)))}removeReference(t,n){this.Gr(new Le(t,n))}zr(t,n){t.forEach((s=>this.removeReference(s,n)))}jr(t){const n=new mt(new Zt([])),s=new Le(n,t),o=new Le(n,t+1),u=[];return this.Ur.forEachInRange([s,o],(f=>{this.Gr(f),u.push(f.key)})),u}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const n=new mt(new Zt([])),s=new Le(n,t),o=new Le(n,t+1);let u=Pt();return this.Ur.forEachInRange([s,o],(f=>{u=u.add(f.key)})),u}containsKey(t){const n=new Le(t,0),s=this.Qr.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class Le{constructor(t,n){this.key=t,this.Yr=n}static $r(t,n){return mt.comparator(t.key,n.key)||xt(t.Yr,n.Yr)}static Kr(t,n){return xt(t.Yr,n.Yr)||mt.comparator(t.key,n.key)}}/**
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
 */class sI{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Oe(Le.$r)}checkEmpty(t){return X.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new ER(u,n,s,o);this.mutationQueue.push(f);for(const g of o)this.Zr=this.Zr.add(new Le(g.key,u)),this.indexManager.addToCollectionParentIndex(t,g.key.path.popLast());return X.resolve(f)}lookupMutationBatch(t,n){return X.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,o=this.ei(s),u=o<0?0:o;return X.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return X.resolve(this.mutationQueue.length===0?Um:this.tr-1)}getAllMutationBatches(t){return X.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new Le(n,0),o=new Le(n,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([s,o],(f=>{const g=this.Xr(f.Yr);u.push(g)})),X.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new Oe(xt);return n.forEach((o=>{const u=new Le(o,0),f=new Le(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,f],(g=>{s=s.add(g.Yr)}))})),X.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,o=s.length+1;let u=s;mt.isDocumentKey(u)||(u=u.child(""));const f=new Le(new mt(u),0);let g=new Oe(xt);return this.Zr.forEachWhile((y=>{const p=y.key.path;return!!s.isPrefixOf(p)&&(p.length===o&&(g=g.add(y.Yr)),!0)}),f),X.resolve(this.ti(g))}ti(t){const n=[];return t.forEach((s=>{const o=this.Xr(s);o!==null&&n.push(o)})),n}removeMutationBatch(t,n){zt(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return X.forEach(n.mutations,(o=>{const u=new Le(o.key,n.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(t,o.key)})).next((()=>{this.Zr=s}))}ir(t){}containsKey(t,n){const s=new Le(n,0),o=this.Zr.firstAfterOrEqual(s);return X.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(t){return this.mutationQueue.length,X.resolve()}ni(t,n){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const n=this.ei(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class aI{constructor(t){this.ri=t,this.docs=(function(){return new ce(mt.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,o=this.docs.get(s),u=o?o.size:0,f=this.ri(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return X.resolve(s?s.document.mutableCopy():ze.newInvalidDocument(n))}getEntries(t,n){let s=nr();return n.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():ze.newInvalidDocument(o))})),X.resolve(s)}getDocumentsMatchingQuery(t,n,s,o){let u=nr();const f=n.path,g=new mt(f.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(g);for(;y.hasNext();){const{key:p,value:{document:E}}=y.getNext();if(!f.isPrefixOf(p.path))break;p.path.length>f.length+1||kw(Pw(E),s)<=0||(o.has(E.key)||bh(n,E))&&(u=u.insert(E.key,E.mutableCopy()))}return X.resolve(u)}getAllFromCollectionGroup(t,n,s,o){gt(9500)}ii(t,n){return X.forEach(this.docs,(s=>n(s)))}newChangeBuffer(t){return new oI(this)}getSize(t){return X.resolve(this.size)}}class oI extends WR{constructor(t){super(),this.Nr=t}applyChanges(t){const n=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?n.push(this.Nr.addEntry(t,o)):this.Nr.removeEntry(s)})),X.waitFor(n)}getFromCache(t,n){return this.Nr.getEntry(t,n)}getAllFromCache(t,n){return this.Nr.getEntries(t,n)}}/**
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
 */class lI{constructor(t){this.persistence=t,this.si=new sa((n=>jm(n)),Bm),this.lastRemoteSnapshotVersion=Tt.min(),this.highestTargetId=0,this.oi=0,this._i=new Km,this.targetCount=0,this.ai=ho.ur()}forEachTarget(t,n){return this.si.forEach(((s,o)=>n(o))),X.resolve()}getLastRemoteSnapshotVersion(t){return X.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return X.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),X.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.oi&&(this.oi=n),X.resolve()}Pr(t){this.si.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.ai=new ho(n),this.highestTargetId=n),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,n){return this.Pr(n),this.targetCount+=1,X.resolve()}updateTargetData(t,n){return this.Pr(n),X.resolve()}removeTargetData(t,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,X.resolve()}removeTargets(t,n,s){let o=0;const u=[];return this.si.forEach(((f,g)=>{g.sequenceNumber<=n&&s.get(g.targetId)===null&&(this.si.delete(f),u.push(this.removeMatchingKeysForTargetId(t,g.targetId)),o++)})),X.waitFor(u).next((()=>o))}getTargetCount(t){return X.resolve(this.targetCount)}getTargetData(t,n){const s=this.si.get(n)||null;return X.resolve(s)}addMatchingKeys(t,n,s){return this._i.Wr(n,s),X.resolve()}removeMatchingKeys(t,n,s){this._i.zr(n,s);const o=this.persistence.referenceDelegate,u=[];return o&&n.forEach((f=>{u.push(o.markPotentiallyOrphaned(t,f))})),X.waitFor(u)}removeMatchingKeysForTargetId(t,n){return this._i.jr(n),X.resolve()}getMatchingKeysForTargetId(t,n){const s=this._i.Hr(n);return X.resolve(s)}containsKey(t,n){return X.resolve(this._i.containsKey(n))}}/**
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
 */class aE{constructor(t,n){this.ui={},this.overlays={},this.ci=new vh(0),this.li=!1,this.li=!0,this.hi=new rI,this.referenceDelegate=t(this),this.Pi=new lI(this),this.indexManager=new QR,this.remoteDocumentCache=(function(o){return new aI(o)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new FR(n),this.Ii=new nI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new iI,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.ui[t.toKey()];return s||(s=new sI(n,this.referenceDelegate),this.ui[t.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,n,s){lt("MemoryPersistence","Starting transaction:",t);const o=new uI(this.ci.next());return this.referenceDelegate.Ei(),s(o).next((u=>this.referenceDelegate.di(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ai(t,n){return X.or(Object.values(this.ui).map((s=>()=>s.containsKey(t,n))))}}class uI extends Lw{constructor(t){super(),this.currentSequenceNumber=t}}class Ym{constructor(t){this.persistence=t,this.Ri=new Km,this.Vi=null}static mi(t){return new Ym(t)}get fi(){if(this.Vi)return this.Vi;throw gt(60996)}addReference(t,n,s){return this.Ri.addReference(s,n),this.fi.delete(s.toString()),X.resolve()}removeReference(t,n,s){return this.Ri.removeReference(s,n),this.fi.add(s.toString()),X.resolve()}markPotentiallyOrphaned(t,n){return this.fi.add(n.toString()),X.resolve()}removeTarget(t,n){this.Ri.jr(n.targetId).forEach((o=>this.fi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next((o=>{o.forEach((u=>this.fi.add(u.toString())))})).next((()=>s.removeTargetData(t,n)))}Ei(){this.Vi=new Set}di(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return X.forEach(this.fi,(s=>{const o=mt.fromPath(s);return this.gi(t,o).next((u=>{u||n.removeEntry(o,Tt.min())}))})).next((()=>(this.Vi=null,n.apply(t))))}updateLimboDocument(t,n){return this.gi(t,n).next((s=>{s?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(t){return 0}gi(t,n){return X.or([()=>X.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ai(t,n)])}}class eh{constructor(t,n){this.persistence=t,this.pi=new sa((s=>Bw(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=JR(this,n)}static mi(t,n){return new eh(t,n)}Ei(){}di(t){return X.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}gr(t){const n=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((s=>n.next((o=>s+o))))}wr(t){let n=0;return this.pr(t,(s=>{n++})).next((()=>n))}pr(t,n){return X.forEach(this.pi,((s,o)=>this.br(t,s,o).next((u=>u?X.resolve():n(o)))))}removeTargets(t,n,s){return this.persistence.getTargetCache().removeTargets(t,n,s)}removeOrphanedDocuments(t,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(t,(f=>this.br(t,f,n).next((g=>{g||(s++,u.removeEntry(f,Tt.min()))})))).next((()=>u.apply(t))).next((()=>s))}markPotentiallyOrphaned(t,n){return this.pi.set(n,t.currentSequenceNumber),X.resolve()}removeTarget(t,n){const s=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,s)}addReference(t,n,s){return this.pi.set(s,t.currentSequenceNumber),X.resolve()}removeReference(t,n,s){return this.pi.set(s,t.currentSequenceNumber),X.resolve()}updateLimboDocument(t,n){return this.pi.set(n,t.currentSequenceNumber),X.resolve()}Ti(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=Pc(t.data.value)),n}br(t,n,s){return X.or([()=>this.persistence.Ai(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const o=this.pi.get(n);return X.resolve(o!==void 0&&o>s)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Xm{constructor(t,n,s,o){this.targetId=t,this.fromCache=n,this.Es=s,this.ds=o}static As(t,n){let s=Pt(),o=Pt();for(const u of n.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Xm(t,n.fromCache,s,o)}}/**
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
 */class cI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class hI{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return eS()?8:zw(en())>0?6:4})()}initialize(t,n){this.ps=t,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(t,n,s,o){const u={result:null};return this.ys(t,n).next((f=>{u.result=f})).next((()=>{if(!u.result)return this.ws(t,n,o,s).next((f=>{u.result=f}))})).next((()=>{if(u.result)return;const f=new cI;return this.Ss(t,n,f).next((g=>{if(u.result=g,this.Vs)return this.bs(t,n,f,g.size)}))})).next((()=>u.result))}bs(t,n,s,o){return s.documentReadCount<this.fs?(Xa()<=Vt.DEBUG&&lt("QueryEngine","SDK will not create cache indexes for query:",$a(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),X.resolve()):(Xa()<=Vt.DEBUG&&lt("QueryEngine","Query:",$a(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.gs*o?(Xa()<=Vt.DEBUG&&lt("QueryEngine","The SDK decides to create cache indexes for query:",$a(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Si(n))):X.resolve())}ys(t,n){if(kv(n))return X.resolve(null);let s=Si(n);return this.indexManager.getIndexType(t,s).next((o=>o===0?null:(n.limit!==null&&o===1&&(n=Zc(n,null,"F"),s=Si(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next((u=>{const f=Pt(...u);return this.ps.getDocuments(t,f).next((g=>this.indexManager.getMinOffset(t,s).next((y=>{const p=this.Ds(n,g);return this.Cs(n,p,f,y.readTime)?this.ys(t,Zc(n,null,"F")):this.vs(t,p,n,y)}))))})))))}ws(t,n,s,o){return kv(n)||o.isEqual(Tt.min())?X.resolve(null):this.ps.getDocuments(t,s).next((u=>{const f=this.Ds(n,u);return this.Cs(n,f,s,o)?X.resolve(null):(Xa()<=Vt.DEBUG&&lt("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),$a(n)),this.vs(t,f,n,xw(o,Bl)).next((g=>g)))}))}Ds(t,n){let s=new Oe(P0(t));return n.forEach(((o,u)=>{bh(t,u)&&(s=s.add(u))})),s}Cs(t,n,s,o){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const u=t.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(t,n,s){return Xa()<=Vt.DEBUG&&lt("QueryEngine","Using full collection scan to execute query:",$a(n)),this.ps.getDocumentsMatchingQuery(t,n,es.min(),s)}vs(t,n,s,o){return this.ps.getDocumentsMatchingQuery(t,s,o).next((u=>(n.forEach((f=>{u=u.insert(f.key,f)})),u)))}}/**
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
 */const $m="LocalStore",fI=3e8;class dI{constructor(t,n,s,o){this.persistence=t,this.Fs=n,this.serializer=o,this.Ms=new ce(xt),this.xs=new sa((u=>jm(u)),Bm),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(s)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new eI(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>t.collect(n,this.Ms)))}}function mI(r,t,n,s){return new dI(r,t,n,s)}async function oE(r,t){const n=St(r);return await n.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,n.Bs(t),n.mutationQueue.getAllMutationBatches(s)))).next((u=>{const f=[],g=[];let y=Pt();for(const p of o){f.push(p.batchId);for(const E of p.mutations)y=y.add(E.key)}for(const p of u){g.push(p.batchId);for(const E of p.mutations)y=y.add(E.key)}return n.localDocuments.getDocuments(s,y).next((p=>({Ls:p,removedBatchIds:f,addedBatchIds:g})))}))}))}function gI(r,t){const n=St(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=t.batch.keys(),u=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(g,y,p,E){const S=p.batch,C=S.keys();let H=X.resolve();return C.forEach((J=>{H=H.next((()=>E.getEntry(y,J))).next((tt=>{const W=p.docVersions.get(J);zt(W!==null,48541),tt.version.compareTo(W)<0&&(S.applyToRemoteDocument(tt,p),tt.isValidDocument()&&(tt.setReadTime(p.commitVersion),E.addEntry(tt)))}))})),H.next((()=>g.mutationQueue.removeMutationBatch(y,S)))})(n,s,t,u).next((()=>u.apply(s))).next((()=>n.mutationQueue.performConsistencyCheck(s))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(s,o,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(g){let y=Pt();for(let p=0;p<g.mutationResults.length;++p)g.mutationResults[p].transformResults.length>0&&(y=y.add(g.batch.mutations[p].key));return y})(t)))).next((()=>n.localDocuments.getDocuments(s,o)))}))}function lE(r){const t=St(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>t.Pi.getLastRemoteSnapshotVersion(n)))}function pI(r,t){const n=St(r),s=t.snapshotVersion;let o=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const f=n.Ns.newChangeBuffer({trackRemovals:!0});o=n.Ms;const g=[];t.targetChanges.forEach(((E,S)=>{const C=o.get(S);if(!C)return;g.push(n.Pi.removeMatchingKeys(u,E.removedDocuments,S).next((()=>n.Pi.addMatchingKeys(u,E.addedDocuments,S))));let H=C.withSequenceNumber(u.currentSequenceNumber);t.targetMismatches.get(S)!==null?H=H.withResumeToken(Qe.EMPTY_BYTE_STRING,Tt.min()).withLastLimboFreeSnapshotVersion(Tt.min()):E.resumeToken.approximateByteSize()>0&&(H=H.withResumeToken(E.resumeToken,s)),o=o.insert(S,H),(function(tt,W,yt){return tt.resumeToken.approximateByteSize()===0||W.snapshotVersion.toMicroseconds()-tt.snapshotVersion.toMicroseconds()>=fI?!0:yt.addedDocuments.size+yt.modifiedDocuments.size+yt.removedDocuments.size>0})(C,H,E)&&g.push(n.Pi.updateTargetData(u,H))}));let y=nr(),p=Pt();if(t.documentUpdates.forEach((E=>{t.resolvedLimboDocuments.has(E)&&g.push(n.persistence.referenceDelegate.updateLimboDocument(u,E))})),g.push(yI(u,f,t.documentUpdates).next((E=>{y=E.ks,p=E.qs}))),!s.isEqual(Tt.min())){const E=n.Pi.getLastRemoteSnapshotVersion(u).next((S=>n.Pi.setTargetsMetadata(u,u.currentSequenceNumber,s)));g.push(E)}return X.waitFor(g).next((()=>f.apply(u))).next((()=>n.localDocuments.getLocalViewOfDocuments(u,y,p))).next((()=>y))})).then((u=>(n.Ms=o,u)))}function yI(r,t,n){let s=Pt(),o=Pt();return n.forEach((u=>s=s.add(u))),t.getEntries(r,s).next((u=>{let f=nr();return n.forEach(((g,y)=>{const p=u.get(g);y.isFoundDocument()!==p.isFoundDocument()&&(o=o.add(g)),y.isNoDocument()&&y.version.isEqual(Tt.min())?(t.removeEntry(g,y.readTime),f=f.insert(g,y)):!p.isValidDocument()||y.version.compareTo(p.version)>0||y.version.compareTo(p.version)===0&&p.hasPendingWrites?(t.addEntry(y),f=f.insert(g,y)):lt($m,"Ignoring outdated watch update for ",g,". Current version:",p.version," Watch version:",y.version)})),{ks:f,qs:o}}))}function _I(r,t){const n=St(r);return n.persistence.runTransaction("Get next mutation batch","readonly",(s=>(t===void 0&&(t=Um),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t))))}function vI(r,t){const n=St(r);return n.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return n.Pi.getTargetData(s,t).next((u=>u?(o=u,X.resolve(o)):n.Pi.allocateTargetId(s).next((f=>(o=new Kr(t,f,"TargetPurposeListen",s.currentSequenceNumber),n.Pi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=n.Ms.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(s.targetId,s),n.xs.set(t,s.targetId)),s}))}async function Em(r,t,n){const s=St(r),o=s.Ms.get(t),u=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",u,(f=>s.persistence.referenceDelegate.removeTarget(f,o)))}catch(f){if(!_o(f))throw f;lt($m,`Failed to update sequence numbers for target ${t}: ${f}`)}s.Ms=s.Ms.remove(t),s.xs.delete(o.target)}function Xv(r,t,n){const s=St(r);let o=Tt.min(),u=Pt();return s.persistence.runTransaction("Execute query","readwrite",(f=>(function(y,p,E){const S=St(y),C=S.xs.get(E);return C!==void 0?X.resolve(S.Ms.get(C)):S.Pi.getTargetData(p,E)})(s,f,Si(t)).next((g=>{if(g)return o=g.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(f,g.targetId).next((y=>{u=y}))})).next((()=>s.Fs.getDocumentsMatchingQuery(f,t,n?o:Tt.min(),n?u:Pt()))).next((g=>(TI(s,aR(t),g),{documents:g,Qs:u})))))}function TI(r,t,n){let s=r.Os.get(t)||Tt.min();n.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),r.Os.set(t,s)}class $v{constructor(){this.activeTargetIds=fR()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class EI{constructor(){this.Mo=new $v,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t,n=!0){return n&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,n,s){this.xo[t]=n}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new $v,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class AI{Oo(t){}shutdown(){}}/**
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
 */const Zv="ConnectivityMonitor";class Jv{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){lt(Zv,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){lt(Zv,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Oc=null;function Am(){return Oc===null?Oc=(function(){return 268435456+Math.round(2147483648*Math.random())})():Oc++,"0x"+Oc.toString(16)}/**
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
 */const Jd="RestConnection",bI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class SI{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+t.host,this.Ko=`projects/${s}/databases/${o}`,this.Wo=this.databaseId.database===Kc?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Go(t,n,s,o,u){const f=Am(),g=this.zo(t,n.toUriEncodedString());lt(Jd,`Sending RPC '${t}' ${f}:`,g,s);const y={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(y,o,u);const{host:p}=new URL(g),E=mo(p);return this.Jo(t,g,y,s,E).then((S=>(lt(Jd,`Received RPC '${t}' ${f}: `,S),S)),(S=>{throw oo(Jd,`RPC '${t}' ${f} failed with error: `,S,"url: ",g,"request:",s),S}))}Ho(t,n,s,o,u,f){return this.Go(t,n,s,o,u)}jo(t,n,s){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+po})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((o,u)=>t[u]=o)),s&&s.headers.forEach(((o,u)=>t[u]=o))}zo(t,n){const s=bI[t];return`${this.Uo}/v1/${n}:${s}`}terminate(){}}/**
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
 */class wI{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
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
 */const We="WebChannelConnection";class RI extends SI{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,n,s,o,u){const f=Am();return new Promise(((g,y)=>{const p=new l0;p.setWithCredentials(!0),p.listenOnce(u0.COMPLETE,(()=>{try{switch(p.getLastErrorCode()){case xc.NO_ERROR:const S=p.getResponseJson();lt(We,`XHR for RPC '${t}' ${f} received:`,JSON.stringify(S)),g(S);break;case xc.TIMEOUT:lt(We,`RPC '${t}' ${f} timed out`),y(new st(Q.DEADLINE_EXCEEDED,"Request time out"));break;case xc.HTTP_ERROR:const C=p.getStatus();if(lt(We,`RPC '${t}' ${f} failed with status:`,C,"response text:",p.getResponseText()),C>0){let H=p.getResponseJson();Array.isArray(H)&&(H=H[0]);const J=H?.error;if(J&&J.status&&J.message){const tt=(function(yt){const At=yt.toLowerCase().replace(/_/g,"-");return Object.values(Q).indexOf(At)>=0?At:Q.UNKNOWN})(J.status);y(new st(tt,J.message))}else y(new st(Q.UNKNOWN,"Server responded with status "+p.getStatus()))}else y(new st(Q.UNAVAILABLE,"Connection failed."));break;default:gt(9055,{l_:t,streamId:f,h_:p.getLastErrorCode(),P_:p.getLastError()})}}finally{lt(We,`RPC '${t}' ${f} completed.`)}}));const E=JSON.stringify(o);lt(We,`RPC '${t}' ${f} sending request:`,o),p.send(n,"POST",E,s,15)}))}T_(t,n,s){const o=Am(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],f=f0(),g=h0(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(y.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(y.useFetchStreams=!0),this.jo(y.initMessageHeaders,n,s),y.encodeInitMessageHeaders=!0;const E=u.join("");lt(We,`Creating RPC '${t}' stream ${o}: ${E}`,y);const S=f.createWebChannel(E,y);this.I_(S);let C=!1,H=!1;const J=new wI({Yo:W=>{H?lt(We,`Not sending because RPC '${t}' stream ${o} is closed:`,W):(C||(lt(We,`Opening RPC '${t}' stream ${o} transport.`),S.open(),C=!0),lt(We,`RPC '${t}' stream ${o} sending:`,W),S.send(W))},Zo:()=>S.close()}),tt=(W,yt,At)=>{W.listen(yt,(ht=>{try{At(ht)}catch(jt){setTimeout((()=>{throw jt}),0)}}))};return tt(S,Cl.EventType.OPEN,(()=>{H||(lt(We,`RPC '${t}' stream ${o} transport opened.`),J.o_())})),tt(S,Cl.EventType.CLOSE,(()=>{H||(H=!0,lt(We,`RPC '${t}' stream ${o} transport closed`),J.a_(),this.E_(S))})),tt(S,Cl.EventType.ERROR,(W=>{H||(H=!0,oo(We,`RPC '${t}' stream ${o} transport errored. Name:`,W.name,"Message:",W.message),J.a_(new st(Q.UNAVAILABLE,"The operation could not be completed")))})),tt(S,Cl.EventType.MESSAGE,(W=>{if(!H){const yt=W.data[0];zt(!!yt,16349);const At=yt,ht=At?.error||At[0]?.error;if(ht){lt(We,`RPC '${t}' stream ${o} received error:`,ht);const jt=ht.status;let pt=(function(b){const R=we[b];if(R!==void 0)return Y0(R)})(jt),Dt=ht.message;pt===void 0&&(pt=Q.INTERNAL,Dt="Unknown error status: "+jt+" with message "+ht.message),H=!0,J.a_(new st(pt,Dt)),S.close()}else lt(We,`RPC '${t}' stream ${o} received:`,yt),J.u_(yt)}})),tt(g,c0.STAT_EVENT,(W=>{W.stat===hm.PROXY?lt(We,`RPC '${t}' stream ${o} detected buffering proxy`):W.stat===hm.NOPROXY&&lt(We,`RPC '${t}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{J.__()}),0),J}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((n=>n===t))}}function Wd(){return typeof document<"u"?document:null}/**
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
 */function Ih(r){return new NR(r,!0)}/**
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
 */class Zm{constructor(t,n,s=1e3,o=1.5,u=6e4){this.Mi=t,this.timerId=n,this.d_=s,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const n=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,n-s);o>0&&lt("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Wv="PersistentStream";class uE{constructor(t,n,s,o,u,f,g,y){this.Mi=t,this.S_=s,this.b_=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=g,this.listener=y,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Zm(t,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():n&&n.code===Q.RESOURCE_EXHAUSTED?(er(n.toString()),er("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===Q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(n)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===n&&this.G_(s,o)}),(s=>{t((()=>{const o=new st(Q.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(t,n){const s=this.W_(this.D_);this.stream=this.j_(t,n),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return lt(Wv,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return n=>{this.Mi.enqueueAndForget((()=>this.D_===t?n():(lt(Wv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class II extends uE{constructor(t,n,s,o,u,f){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}j_(t,n){return this.connection.T_("Listen",t,n)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const n=xR(this.serializer,t),s=(function(u){if(!("targetChange"in u))return Tt.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?Tt.min():f.readTime?Cn(f.readTime):Tt.min()})(t);return this.listener.H_(n,s)}Y_(t){const n={};n.database=Tm(this.serializer),n.addTarget=(function(u,f){let g;const y=f.target;if(g=pm(y)?{documents:kR(u,y)}:{query:UR(u,y).ft},g.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){g.resumeToken=Z0(u,f.resumeToken);const p=_m(u,f.expectedCount);p!==null&&(g.expectedCount=p)}else if(f.snapshotVersion.compareTo(Tt.min())>0){g.readTime=Wc(u,f.snapshotVersion.toTimestamp());const p=_m(u,f.expectedCount);p!==null&&(g.expectedCount=p)}return g})(this.serializer,t);const s=zR(this.serializer,t);s&&(n.labels=s),this.q_(n)}Z_(t){const n={};n.database=Tm(this.serializer),n.removeTarget=t,this.q_(n)}}class CI extends uE{constructor(t,n,s,o,u,f){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,n){return this.connection.T_("Write",t,n)}J_(t){return zt(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,zt(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){zt(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const n=PR(t.writeResults,t.commitTime),s=Cn(t.commitTime);return this.listener.na(s,n)}ra(){const t={};t.database=Tm(this.serializer),this.q_(t)}ea(t){const n={streamToken:this.lastStreamToken,writes:t.map((s=>eE(this.serializer,s)))};this.q_(n)}}/**
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
 */class DI{}class NI extends DI{constructor(t,n,s,o){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new st(Q.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,n,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,f])=>this.connection.Go(t,vm(n,s),o,u,f))).catch((u=>{throw u.name==="FirebaseError"?(u.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new st(Q.UNKNOWN,u.toString())}))}Ho(t,n,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([f,g])=>this.connection.Ho(t,vm(n,s),o,f,g,u))).catch((f=>{throw f.name==="FirebaseError"?(f.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new st(Q.UNKNOWN,f.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class OI{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(er(n),this.aa=!1):lt("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Js="RemoteStore";class MI{constructor(t,n,s,o,u){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo((f=>{s.enqueueAndForget((async()=>{aa(this)&&(lt(Js,"Restarting streams for network reachability change."),await(async function(y){const p=St(y);p.Ea.add(4),await nu(p),p.Ra.set("Unknown"),p.Ea.delete(4),await Ch(p)})(this))}))})),this.Ra=new OI(s,o)}}async function Ch(r){if(aa(r))for(const t of r.da)await t(!0)}async function nu(r){for(const t of r.da)await t(!1)}function cE(r,t){const n=St(r);n.Ia.has(t.targetId)||(n.Ia.set(t.targetId,t),eg(n)?tg(n):vo(n).O_()&&Wm(n,t))}function Jm(r,t){const n=St(r),s=vo(n);n.Ia.delete(t),s.O_()&&hE(n,t),n.Ia.size===0&&(s.O_()?s.L_():aa(n)&&n.Ra.set("Unknown"))}function Wm(r,t){if(r.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Tt.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}vo(r).Y_(t)}function hE(r,t){r.Va.Ue(t),vo(r).Z_(t)}function tg(r){r.Va=new RR({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),At:t=>r.Ia.get(t)||null,ht:()=>r.datastore.serializer.databaseId}),vo(r).start(),r.Ra.ua()}function eg(r){return aa(r)&&!vo(r).x_()&&r.Ia.size>0}function aa(r){return St(r).Ea.size===0}function fE(r){r.Va=void 0}async function VI(r){r.Ra.set("Online")}async function xI(r){r.Ia.forEach(((t,n)=>{Wm(r,t)}))}async function PI(r,t){fE(r),eg(r)?(r.Ra.ha(t),tg(r)):r.Ra.set("Unknown")}async function kI(r,t,n){if(r.Ra.set("Online"),t instanceof $0&&t.state===2&&t.cause)try{await(async function(o,u){const f=u.cause;for(const g of u.targetIds)o.Ia.has(g)&&(await o.remoteSyncer.rejectListen(g,f),o.Ia.delete(g),o.Va.removeTarget(g))})(r,t)}catch(s){lt(Js,"Failed to remove targets %s: %s ",t.targetIds.join(","),s),await nh(r,s)}else if(t instanceof Lc?r.Va.Ze(t):t instanceof X0?r.Va.st(t):r.Va.tt(t),!n.isEqual(Tt.min()))try{const s=await lE(r.localStore);n.compareTo(s)>=0&&await(function(u,f){const g=u.Va.Tt(f);return g.targetChanges.forEach(((y,p)=>{if(y.resumeToken.approximateByteSize()>0){const E=u.Ia.get(p);E&&u.Ia.set(p,E.withResumeToken(y.resumeToken,f))}})),g.targetMismatches.forEach(((y,p)=>{const E=u.Ia.get(y);if(!E)return;u.Ia.set(y,E.withResumeToken(Qe.EMPTY_BYTE_STRING,E.snapshotVersion)),hE(u,y);const S=new Kr(E.target,y,p,E.sequenceNumber);Wm(u,S)})),u.remoteSyncer.applyRemoteEvent(g)})(r,n)}catch(s){lt(Js,"Failed to raise snapshot:",s),await nh(r,s)}}async function nh(r,t,n){if(!_o(t))throw t;r.Ea.add(1),await nu(r),r.Ra.set("Offline"),n||(n=()=>lE(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{lt(Js,"Retrying IndexedDB access"),await n(),r.Ea.delete(1),await Ch(r)}))}function dE(r,t){return t().catch((n=>nh(r,n,t)))}async function Dh(r){const t=St(r),n=ss(t);let s=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Um;for(;UI(t);)try{const o=await _I(t.localStore,s);if(o===null){t.Ta.length===0&&n.L_();break}s=o.batchId,LI(t,o)}catch(o){await nh(t,o)}mE(t)&&gE(t)}function UI(r){return aa(r)&&r.Ta.length<10}function LI(r,t){r.Ta.push(t);const n=ss(r);n.O_()&&n.X_&&n.ea(t.mutations)}function mE(r){return aa(r)&&!ss(r).x_()&&r.Ta.length>0}function gE(r){ss(r).start()}async function zI(r){ss(r).ra()}async function jI(r){const t=ss(r);for(const n of r.Ta)t.ea(n.mutations)}async function BI(r,t,n){const s=r.Ta.shift(),o=Fm.from(s,t,n);await dE(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await Dh(r)}async function qI(r,t){t&&ss(r).X_&&await(async function(s,o){if((function(f){return K0(f)&&f!==Q.ABORTED})(o.code)){const u=s.Ta.shift();ss(s).B_(),await dE(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o))),await Dh(s)}})(r,t),mE(r)&&gE(r)}async function tT(r,t){const n=St(r);n.asyncQueue.verifyOperationInProgress(),lt(Js,"RemoteStore received new credentials");const s=aa(n);n.Ea.add(3),await nu(n),s&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ea.delete(3),await Ch(n)}async function HI(r,t){const n=St(r);t?(n.Ea.delete(2),await Ch(n)):t||(n.Ea.add(2),await nu(n),n.Ra.set("Unknown"))}function vo(r){return r.ma||(r.ma=(function(n,s,o){const u=St(n);return u.sa(),new II(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(r.datastore,r.asyncQueue,{Xo:VI.bind(null,r),t_:xI.bind(null,r),r_:PI.bind(null,r),H_:kI.bind(null,r)}),r.da.push((async t=>{t?(r.ma.B_(),eg(r)?tg(r):r.Ra.set("Unknown")):(await r.ma.stop(),fE(r))}))),r.ma}function ss(r){return r.fa||(r.fa=(function(n,s,o){const u=St(n);return u.sa(),new CI(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:zI.bind(null,r),r_:qI.bind(null,r),ta:jI.bind(null,r),na:BI.bind(null,r)}),r.da.push((async t=>{t?(r.fa.B_(),await Dh(r)):(await r.fa.stop(),r.Ta.length>0&&(lt(Js,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
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
 */class ng{constructor(t,n,s,o,u){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new bi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((f=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,n,s,o,u){const f=Date.now()+s,g=new ng(t,n,f,o,u);return g.start(s),g}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new st(Q.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ig(r,t){if(er("AsyncQueue",`${t}: ${r}`),_o(r))return new st(Q.UNAVAILABLE,`${t}: ${r}`);throw r}/**
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
 */class no{static emptySet(t){return new no(t.comparator)}constructor(t){this.comparator=t?(n,s)=>t(n,s)||mt.comparator(n.key,s.key):(n,s)=>mt.comparator(n.key,s.key),this.keyedMap=Dl(),this.sortedSet=new ce(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((n,s)=>(t(n),!1)))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof no)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const t=[];return this.forEach((n=>{t.push(n.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new no;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
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
 */class eT{constructor(){this.ga=new ce(mt.comparator)}track(t){const n=t.doc.key,s=this.ga.get(n);s?t.type!==0&&s.type===3?this.ga=this.ga.insert(n,t):t.type===3&&s.type!==1?this.ga=this.ga.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.ga=this.ga.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.ga=this.ga.remove(n):t.type===1&&s.type===2?this.ga=this.ga.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):gt(63341,{Rt:t,pa:s}):this.ga=this.ga.insert(n,t)}ya(){const t=[];return this.ga.inorderTraversal(((n,s)=>{t.push(s)})),t}}class fo{constructor(t,n,s,o,u,f,g,y,p){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=g,this.excludesMetadataChanges=y,this.hasCachedResults=p}static fromInitialDocuments(t,n,s,o,u){const f=[];return n.forEach((g=>{f.push({type:0,doc:g})})),new fo(t,n,no.emptySet(n),f,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ah(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==s[o].type||!n[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class FI{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((t=>t.Da()))}}class GI{constructor(){this.queries=nT(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const o=St(n),u=o.queries;o.queries=nT(),u.forEach(((f,g)=>{for(const y of g.Sa)y.onError(s)}))})(this,new st(Q.ABORTED,"Firestore shutting down"))}}function nT(){return new sa((r=>x0(r)),Ah)}async function rg(r,t){const n=St(r);let s=3;const o=t.query;let u=n.queries.get(o);u?!u.ba()&&t.Da()&&(s=2):(u=new FI,s=t.Da()?0:1);try{switch(s){case 0:u.wa=await n.onListen(o,!0);break;case 1:u.wa=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(f){const g=ig(f,`Initialization of query '${$a(t.query)}' failed`);return void t.onError(g)}n.queries.set(o,u),u.Sa.push(t),t.va(n.onlineState),u.wa&&t.Fa(u.wa)&&ag(n)}async function sg(r,t){const n=St(r),s=t.query;let o=3;const u=n.queries.get(s);if(u){const f=u.Sa.indexOf(t);f>=0&&(u.Sa.splice(f,1),u.Sa.length===0?o=t.Da()?0:1:!u.ba()&&t.Da()&&(o=2))}switch(o){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function QI(r,t){const n=St(r);let s=!1;for(const o of t){const u=o.query,f=n.queries.get(u);if(f){for(const g of f.Sa)g.Fa(o)&&(s=!0);f.wa=o}}s&&ag(n)}function KI(r,t,n){const s=St(r),o=s.queries.get(t);if(o)for(const u of o.Sa)u.onError(n);s.queries.delete(t)}function ag(r){r.Ca.forEach((t=>{t.next()}))}var bm,iT;(iT=bm||(bm={})).Ma="default",iT.Cache="cache";class og{constructor(t,n,s){this.query=t,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(t){if(!this.options.includeMetadataChanges){const s=[];for(const o of t.docChanges)o.type!==3&&s.push(o);t=new fo(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),n=!0):this.La(t,this.onlineState)&&(this.ka(t),n=!0),this.Na=t,n}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),n=!0),n}La(t,n){if(!t.fromCache||!this.Da())return!0;const s=n!=="Offline";return(!this.options.qa||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(t){t=fo.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==bm.Cache}}/**
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
 */class pE{constructor(t){this.key=t}}class yE{constructor(t){this.key=t}}class YI{constructor(t,n){this.query=t,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Pt(),this.mutatedKeys=Pt(),this.eu=P0(t),this.tu=new no(this.eu)}get nu(){return this.Ya}ru(t,n){const s=n?n.iu:new eT,o=n?n.tu:this.tu;let u=n?n.mutatedKeys:this.mutatedKeys,f=o,g=!1;const y=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,p=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(t.inorderTraversal(((E,S)=>{const C=o.get(E),H=bh(this.query,S)?S:null,J=!!C&&this.mutatedKeys.has(C.key),tt=!!H&&(H.hasLocalMutations||this.mutatedKeys.has(H.key)&&H.hasCommittedMutations);let W=!1;C&&H?C.data.isEqual(H.data)?J!==tt&&(s.track({type:3,doc:H}),W=!0):this.su(C,H)||(s.track({type:2,doc:H}),W=!0,(y&&this.eu(H,y)>0||p&&this.eu(H,p)<0)&&(g=!0)):!C&&H?(s.track({type:0,doc:H}),W=!0):C&&!H&&(s.track({type:1,doc:C}),W=!0,(y||p)&&(g=!0)),W&&(H?(f=f.add(H),u=tt?u.add(E):u.delete(E)):(f=f.delete(E),u=u.delete(E)))})),this.query.limit!==null)for(;f.size>this.query.limit;){const E=this.query.limitType==="F"?f.last():f.first();f=f.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{tu:f,iu:s,Cs:g,mutatedKeys:u}}su(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s,o){const u=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const f=t.iu.ya();f.sort(((E,S)=>(function(H,J){const tt=W=>{switch(W){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return gt(20277,{Rt:W})}};return tt(H)-tt(J)})(E.type,S.type)||this.eu(E.doc,S.doc))),this.ou(s),o=o??!1;const g=n&&!o?this._u():[],y=this.Xa.size===0&&this.current&&!o?1:0,p=y!==this.Za;return this.Za=y,f.length!==0||p?{snapshot:new fo(this.query,t.tu,u,f,t.mutatedKeys,y===0,p,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:g}:{au:g}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new eT,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),t.modifiedDocuments.forEach((n=>{})),t.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=Pt(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const n=[];return t.forEach((s=>{this.Xa.has(s)||n.push(new yE(s))})),this.Xa.forEach((s=>{t.has(s)||n.push(new pE(s))})),n}cu(t){this.Ya=t.Qs,this.Xa=Pt();const n=this.ru(t.documents);return this.applyChanges(n,!0)}lu(){return fo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const lg="SyncEngine";class XI{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class $I{constructor(t){this.key=t,this.hu=!1}}class ZI{constructor(t,n,s,o,u,f){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.Pu={},this.Tu=new sa((g=>x0(g)),Ah),this.Iu=new Map,this.Eu=new Set,this.du=new ce(mt.comparator),this.Au=new Map,this.Ru=new Km,this.Vu={},this.mu=new Map,this.fu=ho.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function JI(r,t,n=!0){const s=bE(r);let o;const u=s.Tu.get(t);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await _E(s,t,n,!0),o}async function WI(r,t){const n=bE(r);await _E(n,t,!0,!1)}async function _E(r,t,n,s){const o=await vI(r.localStore,Si(t)),u=o.targetId,f=r.sharedClientState.addLocalQueryTarget(u,n);let g;return s&&(g=await tC(r,t,u,f==="current",o.resumeToken)),r.isPrimaryClient&&n&&cE(r.remoteStore,o),g}async function tC(r,t,n,s,o){r.pu=(S,C,H)=>(async function(tt,W,yt,At){let ht=W.view.ru(yt);ht.Cs&&(ht=await Xv(tt.localStore,W.query,!1).then((({documents:O})=>W.view.ru(O,ht))));const jt=At&&At.targetChanges.get(W.targetId),pt=At&&At.targetMismatches.get(W.targetId)!=null,Dt=W.view.applyChanges(ht,tt.isPrimaryClient,jt,pt);return sT(tt,W.targetId,Dt.au),Dt.snapshot})(r,S,C,H);const u=await Xv(r.localStore,t,!0),f=new YI(t,u.Qs),g=f.ru(u.documents),y=eu.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",o),p=f.applyChanges(g,r.isPrimaryClient,y);sT(r,n,p.au);const E=new XI(t,n,f);return r.Tu.set(t,E),r.Iu.has(n)?r.Iu.get(n).push(t):r.Iu.set(n,[t]),p.snapshot}async function eC(r,t,n){const s=St(r),o=s.Tu.get(t),u=s.Iu.get(o.targetId);if(u.length>1)return s.Iu.set(o.targetId,u.filter((f=>!Ah(f,t)))),void s.Tu.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Em(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),n&&Jm(s.remoteStore,o.targetId),Sm(s,o.targetId)})).catch(yo)):(Sm(s,o.targetId),await Em(s.localStore,o.targetId,!0))}async function nC(r,t){const n=St(r),s=n.Tu.get(t),o=n.Iu.get(s.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Jm(n.remoteStore,s.targetId))}async function iC(r,t,n){const s=cC(r);try{const o=await(function(f,g){const y=St(f),p=se.now(),E=g.reduce(((H,J)=>H.add(J.key)),Pt());let S,C;return y.persistence.runTransaction("Locally write mutations","readwrite",(H=>{let J=nr(),tt=Pt();return y.Ns.getEntries(H,E).next((W=>{J=W,J.forEach(((yt,At)=>{At.isValidDocument()||(tt=tt.add(yt))}))})).next((()=>y.localDocuments.getOverlayedDocuments(H,J))).next((W=>{S=W;const yt=[];for(const At of g){const ht=TR(At,S.get(At.key).overlayedDocument);ht!=null&&yt.push(new us(At.key,ht,R0(ht.value.mapValue),mn.exists(!0)))}return y.mutationQueue.addMutationBatch(H,p,yt,g)})).next((W=>{C=W;const yt=W.applyToLocalDocumentSet(S,tt);return y.documentOverlayCache.saveOverlays(H,W.batchId,yt)}))})).then((()=>({batchId:C.batchId,changes:U0(S)})))})(s.localStore,t);s.sharedClientState.addPendingMutation(o.batchId),(function(f,g,y){let p=f.Vu[f.currentUser.toKey()];p||(p=new ce(xt)),p=p.insert(g,y),f.Vu[f.currentUser.toKey()]=p})(s,o.batchId,n),await iu(s,o.changes),await Dh(s.remoteStore)}catch(o){const u=ig(o,"Failed to persist write");n.reject(u)}}async function vE(r,t){const n=St(r);try{const s=await pI(n.localStore,t);t.targetChanges.forEach(((o,u)=>{const f=n.Au.get(u);f&&(zt(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?f.hu=!0:o.modifiedDocuments.size>0?zt(f.hu,14607):o.removedDocuments.size>0&&(zt(f.hu,42227),f.hu=!1))})),await iu(n,s,t)}catch(s){await yo(s)}}function rT(r,t,n){const s=St(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.Tu.forEach(((u,f)=>{const g=f.view.va(t);g.snapshot&&o.push(g.snapshot)})),(function(f,g){const y=St(f);y.onlineState=g;let p=!1;y.queries.forEach(((E,S)=>{for(const C of S.Sa)C.va(g)&&(p=!0)})),p&&ag(y)})(s.eventManager,t),o.length&&s.Pu.H_(o),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function rC(r,t,n){const s=St(r);s.sharedClientState.updateQueryState(t,"rejected",n);const o=s.Au.get(t),u=o&&o.key;if(u){let f=new ce(mt.comparator);f=f.insert(u,ze.newNoDocument(u,Tt.min()));const g=Pt().add(u),y=new Rh(Tt.min(),new Map,new ce(xt),f,g);await vE(s,y),s.du=s.du.remove(u),s.Au.delete(t),ug(s)}else await Em(s.localStore,t,!1).then((()=>Sm(s,t,n))).catch(yo)}async function sC(r,t){const n=St(r),s=t.batch.batchId;try{const o=await gI(n.localStore,t);EE(n,s,null),TE(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await iu(n,o)}catch(o){await yo(o)}}async function aC(r,t,n){const s=St(r);try{const o=await(function(f,g){const y=St(f);return y.persistence.runTransaction("Reject batch","readwrite-primary",(p=>{let E;return y.mutationQueue.lookupMutationBatch(p,g).next((S=>(zt(S!==null,37113),E=S.keys(),y.mutationQueue.removeMutationBatch(p,S)))).next((()=>y.mutationQueue.performConsistencyCheck(p))).next((()=>y.documentOverlayCache.removeOverlaysForBatchId(p,E,g))).next((()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(p,E))).next((()=>y.localDocuments.getDocuments(p,E)))}))})(s.localStore,t);EE(s,t,n),TE(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await iu(s,o)}catch(o){await yo(o)}}function TE(r,t){(r.mu.get(t)||[]).forEach((n=>{n.resolve()})),r.mu.delete(t)}function EE(r,t,n){const s=St(r);let o=s.Vu[s.currentUser.toKey()];if(o){const u=o.get(t);u&&(n?u.reject(n):u.resolve(),o=o.remove(t)),s.Vu[s.currentUser.toKey()]=o}}function Sm(r,t,n=null){r.sharedClientState.removeLocalQueryTarget(t);for(const s of r.Iu.get(t))r.Tu.delete(s),n&&r.Pu.yu(s,n);r.Iu.delete(t),r.isPrimaryClient&&r.Ru.jr(t).forEach((s=>{r.Ru.containsKey(s)||AE(r,s)}))}function AE(r,t){r.Eu.delete(t.path.canonicalString());const n=r.du.get(t);n!==null&&(Jm(r.remoteStore,n),r.du=r.du.remove(t),r.Au.delete(n),ug(r))}function sT(r,t,n){for(const s of n)s instanceof pE?(r.Ru.addReference(s.key,t),oC(r,s)):s instanceof yE?(lt(lg,"Document no longer in limbo: "+s.key),r.Ru.removeReference(s.key,t),r.Ru.containsKey(s.key)||AE(r,s.key)):gt(19791,{wu:s})}function oC(r,t){const n=t.key,s=n.path.canonicalString();r.du.get(n)||r.Eu.has(s)||(lt(lg,"New document in limbo: "+n),r.Eu.add(s),ug(r))}function ug(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const t=r.Eu.values().next().value;r.Eu.delete(t);const n=new mt(Zt.fromString(t)),s=r.fu.next();r.Au.set(s,new $I(n)),r.du=r.du.insert(n,s),cE(r.remoteStore,new Kr(Si(Eh(n.path)),s,"TargetPurposeLimboResolution",vh.ce))}}async function iu(r,t,n){const s=St(r),o=[],u=[],f=[];s.Tu.isEmpty()||(s.Tu.forEach(((g,y)=>{f.push(s.pu(y,t,n).then((p=>{if((p||n)&&s.isPrimaryClient){const E=p?!p.fromCache:n?.targetChanges.get(y.targetId)?.current;s.sharedClientState.updateQueryState(y.targetId,E?"current":"not-current")}if(p){o.push(p);const E=Xm.As(y.targetId,p);u.push(E)}})))})),await Promise.all(f),s.Pu.H_(o),await(async function(y,p){const E=St(y);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(S=>X.forEach(p,(C=>X.forEach(C.Es,(H=>E.persistence.referenceDelegate.addReference(S,C.targetId,H))).next((()=>X.forEach(C.ds,(H=>E.persistence.referenceDelegate.removeReference(S,C.targetId,H)))))))))}catch(S){if(!_o(S))throw S;lt($m,"Failed to update sequence numbers: "+S)}for(const S of p){const C=S.targetId;if(!S.fromCache){const H=E.Ms.get(C),J=H.snapshotVersion,tt=H.withLastLimboFreeSnapshotVersion(J);E.Ms=E.Ms.insert(C,tt)}}})(s.localStore,u))}async function lC(r,t){const n=St(r);if(!n.currentUser.isEqual(t)){lt(lg,"User change. New user:",t.toKey());const s=await oE(n.localStore,t);n.currentUser=t,(function(u,f){u.mu.forEach((g=>{g.forEach((y=>{y.reject(new st(Q.CANCELLED,f))}))})),u.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await iu(n,s.Ls)}}function uC(r,t){const n=St(r),s=n.Au.get(t);if(s&&s.hu)return Pt().add(s.key);{let o=Pt();const u=n.Iu.get(t);if(!u)return o;for(const f of u){const g=n.Tu.get(f);o=o.unionWith(g.view.nu)}return o}}function bE(r){const t=St(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=vE.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=uC.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=rC.bind(null,t),t.Pu.H_=QI.bind(null,t.eventManager),t.Pu.yu=KI.bind(null,t.eventManager),t}function cC(r){const t=St(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=sC.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=aC.bind(null,t),t}class ih{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Ih(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,n){return null}Mu(t,n){return null}vu(t){return mI(this.persistence,new hI,t.initialUser,this.serializer)}Cu(t){return new aE(Ym.mi,this.serializer)}Du(t){return new EI}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ih.provider={build:()=>new ih};class hC extends ih{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,n){zt(this.persistence.referenceDelegate instanceof eh,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new $R(s,t.asyncQueue,n)}Cu(t){const n=this.cacheSizeBytes!==void 0?dn.withCacheSize(this.cacheSizeBytes):dn.DEFAULT;return new aE((s=>eh.mi(s,n)),this.serializer)}}class wm{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>rT(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=lC.bind(null,this.syncEngine),await HI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new GI})()}createDatastore(t){const n=Ih(t.databaseInfo.databaseId),s=(function(u){return new RI(u)})(t.databaseInfo);return(function(u,f,g,y){return new NI(u,f,g,y)})(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return(function(s,o,u,f,g){return new MI(s,o,u,f,g)})(this.localStore,this.datastore,t.asyncQueue,(n=>rT(this.syncEngine,n,0)),(function(){return Jv.v()?new Jv:new AI})())}createSyncEngine(t,n){return(function(o,u,f,g,y,p,E){const S=new ZI(o,u,f,g,y,p);return E&&(S.gu=!0),S})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const s=St(n);lt(Js,"RemoteStore shutting down."),s.Ea.add(5),await nu(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}wm.provider={build:()=>new wm};/**
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
 */class cg{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):er("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,n){setTimeout((()=>{this.muted||t(n)}),0)}}/**
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
 */class fC{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new st(Q.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await(async function(o,u){const f=St(o),g={documents:u.map((S=>th(f.serializer,S)))},y=await f.Ho("BatchGetDocuments",f.serializer.databaseId,Zt.emptyPath(),g,u.length),p=new Map;y.forEach((S=>{const C=VR(f.serializer,S);p.set(C.key.toString(),C)}));const E=[];return u.forEach((S=>{const C=p.get(S.toString());zt(!!C,55234,{key:S}),E.push(C)})),E})(this.datastore,t);return n.forEach((s=>this.recordVersion(s))),n}set(t,n){this.write(n.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,n){try{this.write(n.toMutation(t,this.preconditionForUpdate(t)))}catch(s){this.lastTransactionError=s}this.writtenDocs.add(t.toString())}delete(t){this.write(new Hm(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const t=this.readVersions;this.mutations.forEach((n=>{t.delete(n.key.toString())})),t.forEach(((n,s)=>{const o=mt.fromPath(s);this.mutations.push(new Q0(o,this.precondition(o)))})),await(async function(s,o){const u=St(s),f={writes:o.map((g=>eE(u.serializer,g)))};await u.Go("Commit",u.serializer.databaseId,Zt.emptyPath(),f)})(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let n;if(t.isFoundDocument())n=t.version;else{if(!t.isNoDocument())throw gt(50498,{Gu:t.constructor.name});n=Tt.min()}const s=this.readVersions.get(t.key.toString());if(s){if(!n.isEqual(s))throw new st(Q.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),n)}precondition(t){const n=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&n?n.isEqual(Tt.min())?mn.exists(!1):mn.updateTime(n):mn.none()}preconditionForUpdate(t){const n=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&n){if(n.isEqual(Tt.min()))throw new st(Q.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return mn.updateTime(n)}return mn.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}/**
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
 */class dC{constructor(t,n,s,o,u){this.asyncQueue=t,this.datastore=n,this.options=s,this.updateFunction=o,this.deferred=u,this.zu=s.maxAttempts,this.M_=new Zm(this.asyncQueue,"transaction_retry")}ju(){this.zu-=1,this.Ju()}Ju(){this.M_.p_((async()=>{const t=new fC(this.datastore),n=this.Hu(t);n&&n.then((s=>{this.asyncQueue.enqueueAndForget((()=>t.commit().then((()=>{this.deferred.resolve(s)})).catch((o=>{this.Yu(o)}))))})).catch((s=>{this.Yu(s)}))}))}Hu(t){try{const n=this.updateFunction(t);return!Jl(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Yu(t){this.zu>0&&this.Zu(t)?(this.zu-=1,this.asyncQueue.enqueueAndForget((()=>(this.Ju(),Promise.resolve())))):this.deferred.reject(t)}Zu(t){if(t?.name==="FirebaseError"){const n=t.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!K0(n)}return!1}}/**
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
 */const as="FirestoreClient";class mC{constructor(t,n,s,o,u){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=o,this.user=tn.UNAUTHENTICATED,this.clientId=km.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async f=>{lt(as,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f})),this.appCheckCredentials.start(s,(f=>(lt(as,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new bi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=ig(n,"Failed to shutdown persistence");t.reject(s)}})),t.promise}}async function tm(r,t){r.asyncQueue.verifyOperationInProgress(),lt(as,"Initializing OfflineComponentProvider");const n=r.configuration;await t.initialize(n);let s=n.initialUser;r.setCredentialChangeListener((async o=>{s.isEqual(o)||(await oE(t.localStore,o),s=o)})),t.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=t}async function aT(r,t){r.asyncQueue.verifyOperationInProgress();const n=await gC(r);lt(as,"Initializing OnlineComponentProvider"),await t.initialize(n,r.configuration),r.setCredentialChangeListener((s=>tT(t.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,o)=>tT(t.remoteStore,o))),r._onlineComponents=t}async function gC(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){lt(as,"Using user provided OfflineComponentProvider");try{await tm(r,r._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!(function(o){return o.name==="FirebaseError"?o.code===Q.FAILED_PRECONDITION||o.code===Q.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(n))throw n;oo("Error using user provided cache. Falling back to memory cache: "+n),await tm(r,new ih)}}else lt(as,"Using default OfflineComponentProvider"),await tm(r,new hC(void 0));return r._offlineComponents}async function hg(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(lt(as,"Using user provided OnlineComponentProvider"),await aT(r,r._uninitializedComponentsProvider._online)):(lt(as,"Using default OnlineComponentProvider"),await aT(r,new wm))),r._onlineComponents}function pC(r){return hg(r).then((t=>t.syncEngine))}function yC(r){return hg(r).then((t=>t.datastore))}async function rh(r){const t=await hg(r),n=t.eventManager;return n.onListen=JI.bind(null,t.syncEngine),n.onUnlisten=eC.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=WI.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=nC.bind(null,t.syncEngine),n}function _C(r,t,n={}){const s=new bi;return r.asyncQueue.enqueueAndForget((async()=>(function(u,f,g,y,p){const E=new cg({next:C=>{E.Nu(),f.enqueueAndForget((()=>sg(u,S)));const H=C.docs.has(g);!H&&C.fromCache?p.reject(new st(Q.UNAVAILABLE,"Failed to get document because the client is offline.")):H&&C.fromCache&&y&&y.source==="server"?p.reject(new st(Q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):p.resolve(C)},error:C=>p.reject(C)}),S=new og(Eh(g.path),E,{includeMetadataChanges:!0,qa:!0});return rg(u,S)})(await rh(r),r.asyncQueue,t,n,s))),s.promise}function vC(r,t,n={}){const s=new bi;return r.asyncQueue.enqueueAndForget((async()=>(function(u,f,g,y,p){const E=new cg({next:C=>{E.Nu(),f.enqueueAndForget((()=>sg(u,S))),C.fromCache&&y.source==="server"?p.reject(new st(Q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):p.resolve(C)},error:C=>p.reject(C)}),S=new og(g,E,{includeMetadataChanges:!0,qa:!0});return rg(u,S)})(await rh(r),r.asyncQueue,t,n,s))),s.promise}/**
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
 */function SE(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
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
 */const oT=new Map;/**
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
 */const wE="firestore.googleapis.com",lT=!0;class uT{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new st(Q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=wE,this.ssl=lT}else this.host=t.host,this.ssl=t.ssl??lT;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=sE;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<YR)throw new st(Q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Vw("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=SE(t.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new st(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new st(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new st(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Nh{constructor(t,n,s,o){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new uT({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new st(Q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new st(Q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new uT(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new bw;switch(s.type){case"firstParty":return new Iw(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new st(Q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const s=oT.get(n);s&&(lt("ComponentProvider","Removing Datastore"),oT.delete(n),s.terminate())})(this),Promise.resolve()}}function TC(r,t,n,s={}){r=ni(r,Nh);const o=mo(t),u=r._getSettings(),f={...u,emulatorOptions:r._getEmulatorOptions()},g=`${t}:${n}`;o&&($T(`https://${g}`),ZT("Firestore",!0)),u.host!==wE&&u.host!==g&&oo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y={...u,host:g,ssl:o,emulatorOptions:s};if(!ts(y,f)&&(r._setSettings(y),s.mockUserToken)){let p,E;if(typeof s.mockUserToken=="string")p=s.mockUserToken,E=tn.MOCK_USER;else{p=K1(s.mockUserToken,r._app?.options.projectId);const S=s.mockUserToken.sub||s.mockUserToken.user_id;if(!S)throw new st(Q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new tn(S)}r._authCredentials=new Sw(new m0(p,E))}}/**
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
 */class cs{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new cs(this.firestore,t,this._query)}}class de{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new de(this.firestore,t,this._key)}toJSON(){return{type:de._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,n,s){if(Zl(n,de._jsonSchema))return new de(t,s||null,new mt(Zt.fromString(n.referencePath)))}}de._jsonSchemaVersion="firestore/documentReference/1.0",de._jsonSchema={type:Ie("string",de._jsonSchemaVersion),referencePath:Ie("string")};class Zr extends cs{constructor(t,n,s){super(t,n,Eh(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new de(this.firestore,null,new mt(t))}withConverter(t){return new Zr(this.firestore,t,this._path)}}function EC(r,t,...n){if(r=Me(r),g0("collection","path",t),r instanceof Nh){const s=Zt.fromString(t,...n);return Av(s),new Zr(r,null,s)}{if(!(r instanceof de||r instanceof Zr))throw new st(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Zt.fromString(t,...n));return Av(s),new Zr(r.firestore,null,s)}}function Wa(r,t,...n){if(r=Me(r),arguments.length===1&&(t=km.newId()),g0("doc","path",t),r instanceof Nh){const s=Zt.fromString(t,...n);return Ev(s),new de(r,null,new mt(s))}{if(!(r instanceof de||r instanceof Zr))throw new st(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Zt.fromString(t,...n));return Ev(s),new de(r.firestore,r instanceof Zr?r.converter:null,new mt(s))}}/**
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
 */const cT="AsyncQueue";class hT{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Zm(this,"async_queue_retry"),this._c=()=>{const s=Wd();s&&lt(cT,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=t;const n=Wd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const n=Wd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new bi;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!_o(t))throw t;lt(cT,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const n=this.ac.then((()=>(this.rc=!0,t().catch((s=>{throw this.nc=s,this.rc=!1,er("INTERNAL UNHANDLED ERROR: ",fT(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=n,n}enqueueAfterDelay(t,n,s){this.uc(),this.oc.indexOf(t)>-1&&(n=0);const o=ng.createAndSchedule(this,t,n,s,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&gt(47125,{Pc:fT(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const n of this.tc)if(n.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((n,s)=>n.targetTimeMs-s.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const n=this.tc.indexOf(t);this.tc.splice(n,1)}}function fT(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
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
 */function dT(r){return(function(n,s){if(typeof n!="object"||n===null)return!1;const o=n;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1})(r,["next","error","complete"])}class Ws extends Nh{constructor(t,n,s,o){super(t,n,s,o),this.type="firestore",this._queue=new hT,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new hT(t),this._firestoreClient=void 0,await t}}}function AC(r,t){const n=typeof r=="object"?r:xm(),s=typeof r=="string"?r:Kc,o=ra(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=G1("firestore");u&&TC(o,...u)}return o}function ru(r){if(r._terminated)throw new st(Q.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||bC(r),r._firestoreClient}function bC(r){const t=r._freezeSettings(),n=(function(o,u,f,g){return new Fw(o,u,f,g.host,g.ssl,g.experimentalForceLongPolling,g.experimentalAutoDetectLongPolling,SE(g.experimentalLongPollingOptions),g.useFetchStreams,g.isUsingEmulator)})(r._databaseId,r._app?.options.appId||"",r._persistenceKey,t);r._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(r._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),r._firestoreClient=new mC(r._authCredentials,r._appCheckCredentials,r._queue,n,r._componentsProvider&&(function(o){const u=o?._online.build();return{_offline:o?._offline.build(u),_online:u}})(r._componentsProvider))}/**
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
 */class Rn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Rn(Qe.fromBase64String(t))}catch(n){throw new st(Q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Rn(Qe.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Rn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Zl(t,Rn._jsonSchema))return Rn.fromBase64String(t.bytes)}}Rn._jsonSchemaVersion="firestore/bytes/1.0",Rn._jsonSchema={type:Ie("string",Rn._jsonSchemaVersion),bytes:Ie("string")};/**
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
 */class Oh{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new st(Q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Mh{constructor(t){this._methodName=t}}/**
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
 */class wi{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new st(Q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new st(Q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return xt(this._lat,t._lat)||xt(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:wi._jsonSchemaVersion}}static fromJSON(t){if(Zl(t,wi._jsonSchema))return new wi(t.latitude,t.longitude)}}wi._jsonSchemaVersion="firestore/geoPoint/1.0",wi._jsonSchema={type:Ie("string",wi._jsonSchemaVersion),latitude:Ie("number"),longitude:Ie("number")};/**
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
 */class Ri{constructor(t){this._values=(t||[]).map((n=>n))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Ri._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Zl(t,Ri._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((n=>typeof n=="number")))return new Ri(t.vectorValues);throw new st(Q.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ri._jsonSchemaVersion="firestore/vectorValue/1.0",Ri._jsonSchema={type:Ie("string",Ri._jsonSchemaVersion),vectorValues:Ie("object")};/**
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
 */const SC=/^__.*__$/;class wC{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new us(t,this.data,this.fieldMask,n,this.fieldTransforms):new tu(t,this.data,n,this.fieldTransforms)}}class RE{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return new us(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function IE(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw gt(40011,{Ac:r})}}class fg{constructor(t,n,s,o,u,f){this.settings=t,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new fg({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){const n=this.path?.child(t),s=this.Vc({path:n,fc:!1});return s.gc(t),s}yc(t){const n=this.path?.child(t),s=this.Vc({path:n,fc:!1});return s.Rc(),s}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return sh(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find((n=>t.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>t.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(IE(this.Ac)&&SC.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class RC{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=s||Ih(t)}Cc(t,n,s,o=!1){return new fg({Ac:t,methodName:n,Dc:s,path:Ge.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function dg(r){const t=r._freezeSettings(),n=Ih(r._databaseId);return new RC(r._databaseId,!!t.ignoreUndefinedProperties,n)}function CE(r,t,n,s,o,u={}){const f=r.Cc(u.merge||u.mergeFields?2:0,t,n,o);gg("Data must be an object, but it was:",f,s);const g=DE(s,f);let y,p;if(u.merge)y=new In(f.fieldMask),p=f.fieldTransforms;else if(u.mergeFields){const E=[];for(const S of u.mergeFields){const C=Rm(t,S,n);if(!f.contains(C))throw new st(Q.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);OE(E,C)||E.push(C)}y=new In(E),p=f.fieldTransforms.filter((S=>y.covers(S.field)))}else y=null,p=f.fieldTransforms;return new wC(new un(g),y,p)}class Vh extends Mh{_toFieldTransform(t){if(t.Ac!==2)throw t.Ac===1?t.Sc(`${this._methodName}() can only appear at the top level of your update data`):t.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Vh}}class mg extends Mh{_toFieldTransform(t){return new pR(t.path,new Gl)}isEqual(t){return t instanceof mg}}function IC(r,t,n,s){const o=r.Cc(1,t,n);gg("Data must be an object, but it was:",o,s);const u=[],f=un.empty();ls(s,((y,p)=>{const E=pg(t,y,n);p=Me(p);const S=o.yc(E);if(p instanceof Vh)u.push(E);else{const C=su(p,S);C!=null&&(u.push(E),f.set(E,C))}}));const g=new In(u);return new RE(f,g,o.fieldTransforms)}function CC(r,t,n,s,o,u){const f=r.Cc(1,t,n),g=[Rm(t,s,n)],y=[o];if(u.length%2!=0)throw new st(Q.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let C=0;C<u.length;C+=2)g.push(Rm(t,u[C])),y.push(u[C+1]);const p=[],E=un.empty();for(let C=g.length-1;C>=0;--C)if(!OE(p,g[C])){const H=g[C];let J=y[C];J=Me(J);const tt=f.yc(H);if(J instanceof Vh)p.push(H);else{const W=su(J,tt);W!=null&&(p.push(H),E.set(H,W))}}const S=new In(p);return new RE(E,S,f.fieldTransforms)}function DC(r,t,n,s=!1){return su(n,r.Cc(s?4:3,t))}function su(r,t){if(NE(r=Me(r)))return gg("Unsupported field value:",t,r),DE(r,t);if(r instanceof Mh)return(function(s,o){if(!IE(o.Ac))throw o.Sc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return(function(s,o){const u=[];let f=0;for(const g of s){let y=su(g,o.wc(f));y==null&&(y={nullValue:"NULL_VALUE"}),u.push(y),f++}return{arrayValue:{values:u}}})(r,t)}return(function(s,o){if((s=Me(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return dR(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=se.fromDate(s);return{timestampValue:Wc(o.serializer,u)}}if(s instanceof se){const u=new se(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Wc(o.serializer,u)}}if(s instanceof wi)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Rn)return{bytesValue:Z0(o.serializer,s._byteString)};if(s instanceof de){const u=o.databaseId,f=s.firestore._databaseId;if(!f.isEqual(u))throw o.Sc(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Qm(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof Ri)return(function(f,g){return{mapValue:{fields:{[S0]:{stringValue:w0},[Yc]:{arrayValue:{values:f.toArray().map((p=>{if(typeof p!="number")throw g.Sc("VectorValues must only contain numeric values.");return qm(g.serializer,p)}))}}}}}})(s,o);throw o.Sc(`Unsupported field value: ${_h(s)}`)})(r,t)}function DE(r,t){const n={};return _0(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ls(r,((s,o)=>{const u=su(o,t.mc(s));u!=null&&(n[s]=u)})),{mapValue:{fields:n}}}function NE(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof se||r instanceof wi||r instanceof Rn||r instanceof de||r instanceof Mh||r instanceof Ri)}function gg(r,t,n){if(!NE(n)||!p0(n)){const s=_h(n);throw s==="an object"?t.Sc(r+" a custom object"):t.Sc(r+" "+s)}}function Rm(r,t,n){if((t=Me(t))instanceof Oh)return t._internalPath;if(typeof t=="string")return pg(r,t);throw sh("Field path arguments must be of type string or ",r,!1,void 0,n)}const NC=new RegExp("[~\\*/\\[\\]]");function pg(r,t,n){if(t.search(NC)>=0)throw sh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new Oh(...t.split("."))._internalPath}catch{throw sh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function sh(r,t,n,s,o){const u=s&&!s.isEmpty(),f=o!==void 0;let g=`Function ${t}() called with invalid data`;n&&(g+=" (via `toFirestore()`)"),g+=". ";let y="";return(u||f)&&(y+=" (found",u&&(y+=` in field ${s}`),f&&(y+=` in document ${o}`),y+=")"),new st(Q.INVALID_ARGUMENT,g+r+y)}function OE(r,t){return r.some((n=>n.isEqual(t)))}/**
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
 */class ah{constructor(t,n,s,o,u){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new de(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new OC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(yg("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class OC extends ah{data(){return super.data()}}function yg(r,t){return typeof t=="string"?pg(r,t):t instanceof Oh?t._internalPath:t._delegate._internalPath}/**
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
 */function ME(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new st(Q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _g{}class VE extends _g{}function MC(r,t,...n){let s=[];t instanceof _g&&s.push(t),s=s.concat(n),(function(u){const f=u.filter((y=>y instanceof vg)).length,g=u.filter((y=>y instanceof xh)).length;if(f>1||f>0&&g>0)throw new st(Q.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)r=o._apply(r);return r}class xh extends VE{constructor(t,n,s){super(),this._field=t,this._op=n,this._value=s,this.type="where"}static _create(t,n,s){return new xh(t,n,s)}_apply(t){const n=this._parse(t);return xE(t._query,n),new cs(t.firestore,t.converter,ym(t._query,n))}_parse(t){const n=dg(t.firestore);return(function(u,f,g,y,p,E,S){let C;if(p.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new st(Q.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){gT(S,E);const J=[];for(const tt of S)J.push(mT(y,u,tt));C={arrayValue:{values:J}}}else C=mT(y,u,S)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||gT(S,E),C=DC(g,f,S,E==="in"||E==="not-in");return Re.create(p,E,C)})(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}function VC(r,t,n){const s=t,o=yg("where",r);return xh._create(o,s,n)}class vg extends _g{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new vg(t,n)}_parse(t){const n=this._queryConstraints.map((s=>s._parse(t))).filter((s=>s.getFilters().length>0));return n.length===1?n[0]:ri.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:((function(o,u){let f=o;const g=u.getFlattenedFilters();for(const y of g)xE(f,y),f=ym(f,y)})(t._query,n),new cs(t.firestore,t.converter,ym(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Tg extends VE{constructor(t,n,s){super(),this.type=t,this._limit=n,this._limitType=s}static _create(t,n,s){return new Tg(t,n,s)}_apply(t){return new cs(t.firestore,t.converter,Zc(t._query,this._limit,this._limitType))}}function xC(r){return Tg._create("limit",r,"F")}function mT(r,t,n){if(typeof(n=Me(n))=="string"){if(n==="")throw new st(Q.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!V0(t)&&n.indexOf("/")!==-1)throw new st(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=t.path.child(Zt.fromString(n));if(!mt.isDocumentKey(s))throw new st(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Nv(r,new mt(s))}if(n instanceof de)return Nv(r,n._key);throw new st(Q.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${_h(n)}.`)}function gT(r,t){if(!Array.isArray(r)||r.length===0)throw new st(Q.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function xE(r,t){const n=(function(o,u){for(const f of o)for(const g of f.getFlattenedFilters())if(u.indexOf(g.op)>=0)return g.op;return null})(r.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(n!==null)throw n===t.op?new st(Q.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new st(Q.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class PE{convertValue(t,n="none"){switch(rs(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ee(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(is(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw gt(62114,{value:t})}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const s={};return ls(t,((o,u)=>{s[o]=this.convertValue(u,n)})),s}convertVectorValue(t){const n=t.fields?.[Yc].arrayValue?.values?.map((s=>Ee(s.doubleValue)));return new Ri(n)}convertGeoPoint(t){return new wi(Ee(t.latitude),Ee(t.longitude))}convertArray(t,n){return(t.values||[]).map((s=>this.convertValue(s,n)))}convertServerTimestamp(t,n){switch(n){case"previous":const s=Th(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(ql(t));default:return null}}convertTimestamp(t){const n=ns(t);return new se(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=Zt.fromString(t);zt(rE(s),9688,{name:t});const o=new Hl(s.get(1),s.get(3)),u=new mt(s.popFirst(5));return o.isEqual(n)||er(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}/**
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
 */function kE(r,t,n){let s;return s=r?n&&(n.merge||n.mergeFields)?r.toFirestore(t,n):r.toFirestore(t):t,s}class PC extends PE{constructor(t){super(),this.firestore=t}convertBytes(t){return new Rn(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new de(this.firestore,null,n)}}class to{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Jr extends ah{constructor(t,n,s,o,u,f){super(t,n,s,o,f),this._firestore=t,this._firestoreImpl=t,this.metadata=u}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new zc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(yg("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new st(Q.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,n={};return n.type=Jr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Jr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Jr._jsonSchema={type:Ie("string",Jr._jsonSchemaVersion),bundleSource:Ie("string","DocumentSnapshot"),bundleName:Ie("string"),bundle:Ie("string")};class zc extends Jr{data(t={}){return super.data(t)}}class $s{constructor(t,n,s,o){this._firestore=t,this._userDataWriter=n,this._snapshot=o,this.metadata=new to(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const t=[];return this.forEach((n=>t.push(n))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach((s=>{t.call(n,new zc(this._firestore,this._userDataWriter,s.key,s,new to(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new st(Q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map((g=>{const y=new zc(o._firestore,o._userDataWriter,g.doc.key,g.doc,new to(o._snapshot.mutatedKeys.has(g.doc.key),o._snapshot.fromCache),o.query.converter);return g.doc,{type:"added",doc:y,oldIndex:-1,newIndex:f++}}))}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((g=>u||g.type!==3)).map((g=>{const y=new zc(o._firestore,o._userDataWriter,g.doc.key,g.doc,new to(o._snapshot.mutatedKeys.has(g.doc.key),o._snapshot.fromCache),o.query.converter);let p=-1,E=-1;return g.type!==0&&(p=f.indexOf(g.doc.key),f=f.delete(g.doc.key)),g.type!==1&&(f=f.add(g.doc),E=f.indexOf(g.doc.key)),{type:kC(g.type),doc:y,oldIndex:p,newIndex:E}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new st(Q.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=$s._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=km.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(n.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function kC(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return gt(61501,{type:r})}}/**
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
 */function UC(r){r=ni(r,de);const t=ni(r.firestore,Ws);return _C(ru(t),r._key).then((n=>UE(t,r,n)))}$s._jsonSchemaVersion="firestore/querySnapshot/1.0",$s._jsonSchema={type:Ie("string",$s._jsonSchemaVersion),bundleSource:Ie("string","QuerySnapshot"),bundleName:Ie("string"),bundle:Ie("string")};class Ph extends PE{constructor(t){super(),this.firestore=t}convertBytes(t){return new Rn(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new de(this.firestore,null,n)}}function LC(r){r=ni(r,cs);const t=ni(r.firestore,Ws),n=ru(t),s=new Ph(t);return ME(r._query),vC(n,r._query).then((o=>new $s(t,s,r,o)))}function oh(r,t,n){r=ni(r,de);const s=ni(r.firestore,Ws),o=kE(r.converter,t,n);return jC(s,[CE(dg(s),"setDoc",r._key,o,r.converter!==null,n).toMutation(r._key,mn.none())])}function zC(r,...t){r=Me(r);let n={includeMetadataChanges:!1,source:"default"},s=0;typeof t[s]!="object"||dT(t[s])||(n=t[s++]);const o={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(dT(t[s])){const y=t[s];t[s]=y.next?.bind(y),t[s+1]=y.error?.bind(y),t[s+2]=y.complete?.bind(y)}let u,f,g;if(r instanceof de)f=ni(r.firestore,Ws),g=Eh(r._key.path),u={next:y=>{t[s]&&t[s](UE(f,r,y))},error:t[s+1],complete:t[s+2]};else{const y=ni(r,cs);f=ni(y.firestore,Ws),g=y._query;const p=new Ph(f);u={next:E=>{t[s]&&t[s](new $s(f,p,y,E))},error:t[s+1],complete:t[s+2]},ME(r._query)}return(function(p,E,S,C){const H=new cg(C),J=new og(E,H,S);return p.asyncQueue.enqueueAndForget((async()=>rg(await rh(p),J))),()=>{H.Nu(),p.asyncQueue.enqueueAndForget((async()=>sg(await rh(p),J)))}})(ru(f),g,o,u)}function jC(r,t){return(function(s,o){const u=new bi;return s.asyncQueue.enqueueAndForget((async()=>iC(await pC(s),o,u))),u.promise})(ru(r),t)}function UE(r,t,n){const s=n.docs.get(t._key),o=new Ph(r);return new Jr(r,o,t._key,s,new to(n.hasPendingWrites,n.fromCache),t.converter)}/**
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
 */const BC={maxAttempts:5};function Ol(r,t){if((r=Me(r)).firestore!==t)throw new st(Q.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
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
 */class qC{constructor(t,n){this._firestore=t,this._transaction=n,this._dataReader=dg(t)}get(t){const n=Ol(t,this._firestore),s=new PC(this._firestore);return this._transaction.lookup([n._key]).then((o=>{if(!o||o.length!==1)return gt(24041);const u=o[0];if(u.isFoundDocument())return new ah(this._firestore,s,u.key,u,n.converter);if(u.isNoDocument())return new ah(this._firestore,s,n._key,null,n.converter);throw gt(18433,{doc:u})}))}set(t,n,s){const o=Ol(t,this._firestore),u=kE(o.converter,n,s),f=CE(this._dataReader,"Transaction.set",o._key,u,o.converter!==null,s);return this._transaction.set(o._key,f),this}update(t,n,s,...o){const u=Ol(t,this._firestore);let f;return f=typeof(n=Me(n))=="string"||n instanceof Oh?CC(this._dataReader,"Transaction.update",u._key,n,s,o):IC(this._dataReader,"Transaction.update",u._key,n),this._transaction.update(u._key,f),this}delete(t){const n=Ol(t,this._firestore);return this._transaction.delete(n._key),this}}/**
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
 */class HC extends qC{constructor(t,n){super(t,n),this._firestore=t}get(t){const n=Ol(t,this._firestore),s=new Ph(this._firestore);return super.get(t).then((o=>new Jr(this._firestore,s,n._key,o._document,new to(!1,!1),n.converter)))}}function Im(r,t,n){r=ni(r,Ws);const s={...BC,...n};return(function(u){if(u.maxAttempts<1)throw new st(Q.INVALID_ARGUMENT,"Max attempts must be at least 1")})(s),(function(u,f,g){const y=new bi;return u.asyncQueue.enqueueAndForget((async()=>{const p=await yC(u);new dC(u.asyncQueue,p,g,f,y).ju()})),y.promise})(ru(r),(o=>t(new HC(r,o))),s)}function io(){return new mg("serverTimestamp")}(function(t,n=!0){(function(o){po=o})(go),Di(new ii("firestore",((s,{instanceIdentifier:o,options:u})=>{const f=s.getProvider("app").getImmediate(),g=new Ws(new ww(s.getProvider("auth-internal")),new Cw(f,s.getProvider("app-check-internal")),(function(p,E){if(!Object.prototype.hasOwnProperty.apply(p.options,["projectId"]))throw new st(Q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Hl(p.options.projectId,E)})(f,o),f);return u={useFetchStreams:n,...u},g._setSettings(u),g}),"PUBLIC").setMultipleInstances(!0)),qn(yv,_v,t),qn(yv,_v,"esm2020")})();const LE="@firebase/installations",Eg="0.6.19";/**
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
 */const zE=1e4,jE=`w:${Eg}`,BE="FIS_v2",FC="https://firebaseinstallations.googleapis.com/v1",GC=3600*1e3,QC="installations",KC="Installations";/**
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
 */const YC={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ta=new ia(QC,KC,YC);function qE(r){return r instanceof si&&r.code.includes("request-failed")}/**
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
 */function HE({projectId:r}){return`${FC}/projects/${r}/installations`}function FE(r){return{token:r.token,requestStatus:2,expiresIn:$C(r.expiresIn),creationTime:Date.now()}}async function GE(r,t){const s=(await t.json()).error;return ta.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function QE({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function XC(r,{refreshToken:t}){const n=QE(r);return n.append("Authorization",ZC(t)),n}async function KE(r){const t=await r();return t.status>=500&&t.status<600?r():t}function $C(r){return Number(r.replace("s","000"))}function ZC(r){return`${BE} ${r}`}/**
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
 */async function JC({appConfig:r,heartbeatServiceProvider:t},{fid:n}){const s=HE(r),o=QE(r),u=t.getImmediate({optional:!0});if(u){const p=await u.getHeartbeatsHeader();p&&o.append("x-firebase-client",p)}const f={fid:n,authVersion:BE,appId:r.appId,sdkVersion:jE},g={method:"POST",headers:o,body:JSON.stringify(f)},y=await KE(()=>fetch(s,g));if(y.ok){const p=await y.json();return{fid:p.fid||n,registrationStatus:2,refreshToken:p.refreshToken,authToken:FE(p.authToken)}}else throw await GE("Create Installation",y)}/**
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
 */function YE(r){return new Promise(t=>{setTimeout(t,r)})}/**
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
 */function WC(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const t2=/^[cdef][\w-]{21}$/,Cm="";function e2(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=n2(r);return t2.test(n)?n:Cm}catch{return Cm}}function n2(r){return WC(r).substr(0,22)}/**
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
 */function kh(r){return`${r.appName}!${r.appId}`}/**
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
 */const XE=new Map;function $E(r,t){const n=kh(r);ZE(n,t),i2(n,t)}function ZE(r,t){const n=XE.get(r);if(n)for(const s of n)s(t)}function i2(r,t){const n=r2();n&&n.postMessage({key:r,fid:t}),s2()}let Xs=null;function r2(){return!Xs&&"BroadcastChannel"in self&&(Xs=new BroadcastChannel("[Firebase] FID Change"),Xs.onmessage=r=>{ZE(r.data.key,r.data.fid)}),Xs}function s2(){XE.size===0&&Xs&&(Xs.close(),Xs=null)}/**
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
 */const a2="firebase-installations-database",o2=1,ea="firebase-installations-store";let em=null;function Ag(){return em||(em=i0(a2,o2,{upgrade:(r,t)=>{switch(t){case 0:r.createObjectStore(ea)}}})),em}async function lh(r,t){const n=kh(r),o=(await Ag()).transaction(ea,"readwrite"),u=o.objectStore(ea),f=await u.get(n);return await u.put(t,n),await o.done,(!f||f.fid!==t.fid)&&$E(r,t.fid),t}async function JE(r){const t=kh(r),s=(await Ag()).transaction(ea,"readwrite");await s.objectStore(ea).delete(t),await s.done}async function Uh(r,t){const n=kh(r),o=(await Ag()).transaction(ea,"readwrite"),u=o.objectStore(ea),f=await u.get(n),g=t(f);return g===void 0?await u.delete(n):await u.put(g,n),await o.done,g&&(!f||f.fid!==g.fid)&&$E(r,g.fid),g}/**
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
 */async function bg(r){let t;const n=await Uh(r.appConfig,s=>{const o=l2(s),u=u2(r,o);return t=u.registrationPromise,u.installationEntry});return n.fid===Cm?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function l2(r){const t=r||{fid:e2(),registrationStatus:0};return WE(t)}function u2(r,t){if(t.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(ta.create("app-offline"));return{installationEntry:t,registrationPromise:o}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=c2(r,n);return{installationEntry:n,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:h2(r)}:{installationEntry:t}}async function c2(r,t){try{const n=await JC(r,t);return lh(r.appConfig,n)}catch(n){throw qE(n)&&n.customData.serverCode===409?await JE(r.appConfig):await lh(r.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function h2(r){let t=await pT(r.appConfig);for(;t.registrationStatus===1;)await YE(100),t=await pT(r.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await bg(r);return s||n}return t}function pT(r){return Uh(r,t=>{if(!t)throw ta.create("installation-not-found");return WE(t)})}function WE(r){return f2(r)?{fid:r.fid,registrationStatus:0}:r}function f2(r){return r.registrationStatus===1&&r.registrationTime+zE<Date.now()}/**
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
 */async function d2({appConfig:r,heartbeatServiceProvider:t},n){const s=m2(r,n),o=XC(r,n),u=t.getImmediate({optional:!0});if(u){const p=await u.getHeartbeatsHeader();p&&o.append("x-firebase-client",p)}const f={installation:{sdkVersion:jE,appId:r.appId}},g={method:"POST",headers:o,body:JSON.stringify(f)},y=await KE(()=>fetch(s,g));if(y.ok){const p=await y.json();return FE(p)}else throw await GE("Generate Auth Token",y)}function m2(r,{fid:t}){return`${HE(r)}/${t}/authTokens:generate`}/**
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
 */async function Sg(r,t=!1){let n;const s=await Uh(r.appConfig,u=>{if(!tA(u))throw ta.create("not-registered");const f=u.authToken;if(!t&&y2(f))return u;if(f.requestStatus===1)return n=g2(r,t),u;{if(!navigator.onLine)throw ta.create("app-offline");const g=v2(u);return n=p2(r,g),g}});return n?await n:s.authToken}async function g2(r,t){let n=await yT(r.appConfig);for(;n.authToken.requestStatus===1;)await YE(100),n=await yT(r.appConfig);const s=n.authToken;return s.requestStatus===0?Sg(r,t):s}function yT(r){return Uh(r,t=>{if(!tA(t))throw ta.create("not-registered");const n=t.authToken;return T2(n)?{...t,authToken:{requestStatus:0}}:t})}async function p2(r,t){try{const n=await d2(r,t),s={...t,authToken:n};return await lh(r.appConfig,s),n}catch(n){if(qE(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await JE(r.appConfig);else{const s={...t,authToken:{requestStatus:0}};await lh(r.appConfig,s)}throw n}}function tA(r){return r!==void 0&&r.registrationStatus===2}function y2(r){return r.requestStatus===2&&!_2(r)}function _2(r){const t=Date.now();return t<r.creationTime||r.creationTime+r.expiresIn<t+GC}function v2(r){const t={requestStatus:1,requestTime:Date.now()};return{...r,authToken:t}}function T2(r){return r.requestStatus===1&&r.requestTime+zE<Date.now()}/**
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
 */async function E2(r){const t=r,{installationEntry:n,registrationPromise:s}=await bg(t);return s?s.catch(console.error):Sg(t).catch(console.error),n.fid}/**
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
 */async function A2(r,t=!1){const n=r;return await b2(n),(await Sg(n,t)).token}async function b2(r){const{registrationPromise:t}=await bg(r);t&&await t}/**
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
 */function S2(r){if(!r||!r.options)throw nm("App Configuration");if(!r.name)throw nm("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!r.options[n])throw nm(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function nm(r){return ta.create("missing-app-config-values",{valueName:r})}/**
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
 */const eA="installations",w2="installations-internal",R2=r=>{const t=r.getProvider("app").getImmediate(),n=S2(t),s=ra(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},I2=r=>{const t=r.getProvider("app").getImmediate(),n=ra(t,eA).getImmediate();return{getId:()=>E2(n),getToken:o=>A2(n,o)}};function C2(){Di(new ii(eA,R2,"PUBLIC")),Di(new ii(w2,I2,"PRIVATE"))}C2();qn(LE,Eg);qn(LE,Eg,"esm2020");/**
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
 */const uh="analytics",D2="firebase_id",N2="origin",O2=60*1e3,M2="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",wg="https://www.googletagmanager.com/gtag/js";/**
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
 */const gn=new yh("@firebase/analytics");/**
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
 */const V2={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Dn=new ia("analytics","Analytics",V2);/**
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
 */function x2(r){if(!r.startsWith(wg)){const t=Dn.create("invalid-gtag-resource",{gtagURL:r});return gn.warn(t.message),""}return r}function nA(r){return Promise.all(r.map(t=>t.catch(n=>n)))}function P2(r,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,t)),n}function k2(r,t){const n=P2("firebase-js-sdk-policy",{createScriptURL:x2}),s=document.createElement("script"),o=`${wg}?l=${r}&id=${t}`;s.src=n?n?.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function U2(r){let t=[];return Array.isArray(window[r])?t=window[r]:window[r]=t,t}async function L2(r,t,n,s,o,u){const f=s[o];try{if(f)await t[f];else{const y=(await nA(n)).find(p=>p.measurementId===o);y&&await t[y.appId]}}catch(g){gn.error(g)}r("config",o,u)}async function z2(r,t,n,s,o){try{let u=[];if(o&&o.send_to){let f=o.send_to;Array.isArray(f)||(f=[f]);const g=await nA(n);for(const y of f){const p=g.find(S=>S.measurementId===y),E=p&&t[p.appId];if(E)u.push(E);else{u=[];break}}}u.length===0&&(u=Object.values(t)),await Promise.all(u),r("event",s,o||{})}catch(u){gn.error(u)}}function j2(r,t,n,s){async function o(u,...f){try{if(u==="event"){const[g,y]=f;await z2(r,t,n,g,y)}else if(u==="config"){const[g,y]=f;await L2(r,t,n,s,g,y)}else if(u==="consent"){const[g,y]=f;r("consent",g,y)}else if(u==="get"){const[g,y,p]=f;r("get",g,y,p)}else if(u==="set"){const[g]=f;r("set",g)}else r(u,...f)}catch(g){gn.error(g)}}return o}function B2(r,t,n,s,o){let u=function(...f){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(u=window[o]),window[o]=j2(u,r,t,n),{gtagCore:u,wrappedGtag:window[o]}}function q2(r){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(wg)&&n.src.includes(r))return n;return null}/**
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
 */const H2=30,F2=1e3;class G2{constructor(t={},n=F2){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const iA=new G2;function Q2(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function K2(r){const{appId:t,apiKey:n}=r,s={method:"GET",headers:Q2(n)},o=M2.replace("{app-id}",t),u=await fetch(o,s);if(u.status!==200&&u.status!==304){let f="";try{const g=await u.json();g.error?.message&&(f=g.error.message)}catch{}throw Dn.create("config-fetch-failed",{httpStatus:u.status,responseMessage:f})}return u.json()}async function Y2(r,t=iA,n){const{appId:s,apiKey:o,measurementId:u}=r.options;if(!s)throw Dn.create("no-app-id");if(!o){if(u)return{measurementId:u,appId:s};throw Dn.create("no-api-key")}const f=t.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},g=new Z2;return setTimeout(async()=>{g.abort()},O2),rA({appId:s,apiKey:o,measurementId:u},f,g,t)}async function rA(r,{throttleEndTimeMillis:t,backoffCount:n},s,o=iA){const{appId:u,measurementId:f}=r;try{await X2(s,t)}catch(g){if(f)return gn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${g?.message}]`),{appId:u,measurementId:f};throw g}try{const g=await K2(r);return o.deleteThrottleMetadata(u),g}catch(g){const y=g;if(!$2(y)){if(o.deleteThrottleMetadata(u),f)return gn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${y?.message}]`),{appId:u,measurementId:f};throw g}const p=Number(y?.customData?.httpStatus)===503?ov(n,o.intervalMillis,H2):ov(n,o.intervalMillis),E={throttleEndTimeMillis:Date.now()+p,backoffCount:n+1};return o.setThrottleMetadata(u,E),gn.debug(`Calling attemptFetch again in ${p} millis`),rA(r,E,s,o)}}function X2(r,t){return new Promise((n,s)=>{const o=Math.max(t-Date.now(),0),u=setTimeout(n,o);r.addEventListener(()=>{clearTimeout(u),s(Dn.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function $2(r){if(!(r instanceof si)||!r.customData)return!1;const t=Number(r.customData.httpStatus);return t===429||t===500||t===503||t===504}class Z2{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function J2(r,t,n,s,o){if(o&&o.global){r("event",n,s);return}else{const u=await t,f={...s,send_to:u};r("event",n,f)}}/**
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
 */async function W2(){if(WT())try{await t0()}catch(r){return gn.warn(Dn.create("indexeddb-unavailable",{errorInfo:r?.toString()}).message),!1}else return gn.warn(Dn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function tD(r,t,n,s,o,u,f){const g=Y2(r);g.then(C=>{n[C.measurementId]=C.appId,r.options.measurementId&&C.measurementId!==r.options.measurementId&&gn.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${C.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(C=>gn.error(C)),t.push(g);const y=W2().then(C=>{if(C)return s.getId()}),[p,E]=await Promise.all([g,y]);q2(u)||k2(u,p.measurementId),o("js",new Date);const S=f?.config??{};return S[N2]="firebase",S.update=!0,E!=null&&(S[D2]=E),o("config",p.measurementId,S),p.measurementId}/**
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
 */class eD{constructor(t){this.app=t}_delete(){return delete Ll[this.app.options.appId],Promise.resolve()}}let Ll={},_T=[];const vT={};let im="dataLayer",nD="gtag",TT,sA,ET=!1;function iD(){const r=[];if(JT()&&r.push("This is a browser extension environment."),nS()||r.push("Cookies are not available."),r.length>0){const t=r.map((s,o)=>`(${o+1}) ${s}`).join(" "),n=Dn.create("invalid-analytics-context",{errorInfo:t});gn.warn(n.message)}}function rD(r,t,n){iD();const s=r.options.appId;if(!s)throw Dn.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)gn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Dn.create("no-api-key");if(Ll[s]!=null)throw Dn.create("already-exists",{id:s});if(!ET){U2(im);const{wrappedGtag:u,gtagCore:f}=B2(Ll,_T,vT,im,nD);sA=u,TT=f,ET=!0}return Ll[s]=tD(r,_T,vT,t,TT,im,n),new eD(r)}function sD(r=xm()){r=Me(r);const t=ra(r,uh);return t.isInitialized()?t.getImmediate():aD(r)}function aD(r,t={}){const n=ra(r,uh);if(n.isInitialized()){const o=n.getImmediate();if(ts(t,n.getOptions()))return o;throw Dn.create("already-initialized")}return n.initialize({options:t})}function oD(r,t,n,s){r=Me(r),J2(sA,Ll[r.app.options.appId],t,n,s).catch(o=>gn.error(o))}const AT="@firebase/analytics",bT="0.10.18";function lD(){Di(new ii(uh,(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),o=t.getProvider("installations-internal").getImmediate();return rD(s,o,n)},"PUBLIC")),Di(new ii("analytics-internal",r,"PRIVATE")),qn(AT,bT),qn(AT,bT,"esm2020");function r(t){try{const n=t.getProvider(uh).getImmediate();return{logEvent:(s,o,u)=>oD(n,s,o,u)}}catch(n){throw Dn.create("interop-component-reg-failed",{reason:n})}}}lD();function aA(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uD=aA,oA=new ia("auth","Firebase",aA());/**
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
 */const ch=new yh("@firebase/auth");function cD(r,...t){ch.logLevel<=Vt.WARN&&ch.warn(`Auth (${go}): ${r}`,...t)}function jc(r,...t){ch.logLevel<=Vt.ERROR&&ch.error(`Auth (${go}): ${r}`,...t)}/**
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
 */function ir(r,...t){throw Rg(r,...t)}function Ii(r,...t){return Rg(r,...t)}function lA(r,t,n){const s={...uD(),[t]:n};return new ia("auth","Firebase",s).create(t,{appName:r.name})}function Wr(r){return lA(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Rg(r,...t){if(typeof r!="string"){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return oA.create(r,...t)}function bt(r,t,...n){if(!r)throw Rg(t,...n)}function Ji(r){const t="INTERNAL ASSERTION FAILED: "+r;throw jc(t),new Error(t)}function rr(r,t){r||Ji(t)}/**
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
 */function Dm(){return typeof self<"u"&&self.location?.href||""}function hD(){return ST()==="http:"||ST()==="https:"}function ST(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function fD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hD()||JT()||"connection"in navigator)?navigator.onLine:!0}function dD(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class au{constructor(t,n){this.shortDelay=t,this.longDelay=n,rr(n>t,"Short delay should be less than long delay!"),this.isMobile=$1()||W1()}get(){return fD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ig(r,t){rr(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class uA{static initialize(t,n,s){this.fetchImpl=t,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ji("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ji("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ji("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const mD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const gD=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],pD=new au(3e4,6e4);function Lh(r,t){return r.tenantId&&!t.tenantId?{...t,tenantId:r.tenantId}:t}async function To(r,t,n,s,o={}){return cA(r,o,async()=>{let u={},f={};s&&(t==="GET"?f=s:u={body:JSON.stringify(s)});const g=$l({key:r.config.apiKey,...f}).slice(1),y=await r._getAdditionalHeaders();y["Content-Type"]="application/json",r.languageCode&&(y["X-Firebase-Locale"]=r.languageCode);const p={method:t,headers:y,...u};return J1()||(p.referrerPolicy="no-referrer"),r.emulatorConfig&&mo(r.emulatorConfig.host)&&(p.credentials="include"),uA.fetch()(await fA(r,r.config.apiHost,n,g),p)})}async function cA(r,t,n){r._canInitEmulator=!1;const s={...mD,...t};try{const o=new yD(r),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw Mc(r,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const g=u.ok?f.errorMessage:f.error.message,[y,p]=g.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw Mc(r,"credential-already-in-use",f);if(y==="EMAIL_EXISTS")throw Mc(r,"email-already-in-use",f);if(y==="USER_DISABLED")throw Mc(r,"user-disabled",f);const E=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(p)throw lA(r,E,p);ir(r,E)}}catch(o){if(o instanceof si)throw o;ir(r,"network-request-failed",{message:String(o)})}}async function hA(r,t,n,s,o={}){const u=await To(r,t,n,s,o);return"mfaPendingCredential"in u&&ir(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function fA(r,t,n,s){const o=`${t}${n}?${s}`,u=r,f=u.config.emulator?Ig(r.config,o):`${r.config.apiScheme}://${o}`;return gD.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(f).toString():f}class yD{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ii(this.auth,"network-request-failed")),pD.get())})}}function Mc(r,t,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=Ii(r,t,s);return o.customData._tokenResponse=n,o}/**
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
 */async function _D(r,t){return To(r,"POST","/v1/accounts:delete",t)}async function hh(r,t){return To(r,"POST","/v1/accounts:lookup",t)}/**
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
 */function zl(r){if(r)try{const t=new Date(Number(r));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function vD(r,t=!1){const n=Me(r),s=await n.getIdToken(t),o=Cg(s);bt(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,f=u?.sign_in_provider;return{claims:o,token:s,authTime:zl(rm(o.auth_time)),issuedAtTime:zl(rm(o.iat)),expirationTime:zl(rm(o.exp)),signInProvider:f||null,signInSecondFactor:u?.sign_in_second_factor||null}}function rm(r){return Number(r)*1e3}function Cg(r){const[t,n,s]=r.split(".");if(t===void 0||n===void 0||s===void 0)return jc("JWT malformed, contained fewer than 3 sections"),null;try{const o=QT(n);return o?JSON.parse(o):(jc("Failed to decode base64 JWT payload"),null)}catch(o){return jc("Caught error parsing JWT payload as JSON",o?.toString()),null}}function wT(r){const t=Cg(r);return bt(t,"internal-error"),bt(typeof t.exp<"u","internal-error"),bt(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Yl(r,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof si&&TD(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function TD({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class ED{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Nm{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=zl(this.lastLoginAt),this.creationTime=zl(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function fh(r){const t=r.auth,n=await r.getIdToken(),s=await Yl(r,hh(t,{idToken:n}));bt(s?.users.length,t,"internal-error");const o=s.users[0];r._notifyReloadListener(o);const u=o.providerUserInfo?.length?dA(o.providerUserInfo):[],f=bD(r.providerData,u),g=r.isAnonymous,y=!(r.email&&o.passwordHash)&&!f?.length,p=g?y:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:f,metadata:new Nm(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(r,E)}async function AD(r){const t=Me(r);await fh(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function bD(r,t){return[...r.filter(s=>!t.some(o=>o.providerId===s.providerId)),...t]}function dA(r){return r.map(({providerId:t,...n})=>({providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function SD(r,t){const n=await cA(r,{},async()=>{const s=$l({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,f=await fA(r,o,"/v1/token",`key=${u}`),g=await r._getAdditionalHeaders();g["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:g,body:s};return r.emulatorConfig&&mo(r.emulatorConfig.host)&&(y.credentials="include"),uA.fetch()(f,y)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function wD(r,t){return To(r,"POST","/v2/accounts:revokeToken",Lh(r,t))}/**
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
 */class ro{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){bt(t.idToken,"internal-error"),bt(typeof t.idToken<"u","internal-error"),bt(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):wT(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){bt(t.length!==0,"internal-error");const n=wT(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(bt(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:s,refreshToken:o,expiresIn:u}=await SD(t,n);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(t,n,s){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,n){const{refreshToken:s,accessToken:o,expirationTime:u}=n,f=new ro;return s&&(bt(typeof s=="string","internal-error",{appName:t}),f.refreshToken=s),o&&(bt(typeof o=="string","internal-error",{appName:t}),f.accessToken=o),u&&(bt(typeof u=="number","internal-error",{appName:t}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ro,this.toJSON())}_performRefresh(){return Ji("not implemented")}}/**
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
 */function qr(r,t){bt(typeof r=="string"||typeof r>"u","internal-error",{appName:t})}class ei{constructor({uid:t,auth:n,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new ED(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Nm(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Yl(this,this.stsTokenManager.getToken(this.auth,t));return bt(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return vD(this,t)}reload(){return AD(this)}_assign(t){this!==t&&(bt(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>({...n})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new ei({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(t){bt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),n&&await fh(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ti(this.auth.app))return Promise.reject(Wr(this.auth));const t=await this.getIdToken();return await Yl(this,_D(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){const s=n.displayName??void 0,o=n.email??void 0,u=n.phoneNumber??void 0,f=n.photoURL??void 0,g=n.tenantId??void 0,y=n._redirectEventId??void 0,p=n.createdAt??void 0,E=n.lastLoginAt??void 0,{uid:S,emailVerified:C,isAnonymous:H,providerData:J,stsTokenManager:tt}=n;bt(S&&tt,t,"internal-error");const W=ro.fromJSON(this.name,tt);bt(typeof S=="string",t,"internal-error"),qr(s,t.name),qr(o,t.name),bt(typeof C=="boolean",t,"internal-error"),bt(typeof H=="boolean",t,"internal-error"),qr(u,t.name),qr(f,t.name),qr(g,t.name),qr(y,t.name),qr(p,t.name),qr(E,t.name);const yt=new ei({uid:S,auth:t,email:o,emailVerified:C,displayName:s,isAnonymous:H,photoURL:f,phoneNumber:u,tenantId:g,stsTokenManager:W,createdAt:p,lastLoginAt:E});return J&&Array.isArray(J)&&(yt.providerData=J.map(At=>({...At}))),y&&(yt._redirectEventId=y),yt}static async _fromIdTokenResponse(t,n,s=!1){const o=new ro;o.updateFromServerResponse(n);const u=new ei({uid:n.localId,auth:t,stsTokenManager:o,isAnonymous:s});return await fh(u),u}static async _fromGetAccountInfoResponse(t,n,s){const o=n.users[0];bt(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?dA(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!u?.length,g=new ro;g.updateFromIdToken(s);const y=new ei({uid:o.localId,auth:t,stsTokenManager:g,isAnonymous:f}),p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Nm(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!u?.length};return Object.assign(y,p),y}}/**
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
 */const RT=new Map;function Wi(r){rr(r instanceof Function,"Expected a class definition");let t=RT.get(r);return t?(rr(t instanceof r,"Instance stored in cache mismatched with class"),t):(t=new r,RT.set(r,t),t)}/**
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
 */class mA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}mA.type="NONE";const IT=mA;/**
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
 */function Bc(r,t,n){return`firebase:${r}:${t}:${n}`}class so{constructor(t,n,s){this.persistence=t,this.auth=n,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Bc(this.userKey,o.apiKey,u),this.fullPersistenceKey=Bc("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await hh(this.auth,{idToken:t}).catch(()=>{});return n?ei._fromGetAccountInfoResponse(this.auth,n,t):null}return ei._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,s="authUser"){if(!n.length)return new so(Wi(IT),t,s);const o=(await Promise.all(n.map(async p=>{if(await p._isAvailable())return p}))).filter(p=>p);let u=o[0]||Wi(IT);const f=Bc(s,t.config.apiKey,t.name);let g=null;for(const p of n)try{const E=await p._get(f);if(E){let S;if(typeof E=="string"){const C=await hh(t,{idToken:E}).catch(()=>{});if(!C)break;S=await ei._fromGetAccountInfoResponse(t,C,E)}else S=ei._fromJSON(t,E);p!==u&&(g=S),u=p;break}}catch{}const y=o.filter(p=>p._shouldAllowMigration);return!u._shouldAllowMigration||!y.length?new so(u,t,s):(u=y[0],g&&await u._set(f,g.toJSON()),await Promise.all(n.map(async p=>{if(p!==u)try{await p._remove(f)}catch{}})),new so(u,t,s))}}/**
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
 */function CT(r){const t=r.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(_A(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(gA(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(TA(t))return"Blackberry";if(EA(t))return"Webos";if(pA(t))return"Safari";if((t.includes("chrome/")||yA(t))&&!t.includes("edge/"))return"Chrome";if(vA(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if(s?.length===2)return s[1]}return"Other"}function gA(r=en()){return/firefox\//i.test(r)}function pA(r=en()){const t=r.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function yA(r=en()){return/crios\//i.test(r)}function _A(r=en()){return/iemobile/i.test(r)}function vA(r=en()){return/android/i.test(r)}function TA(r=en()){return/blackberry/i.test(r)}function EA(r=en()){return/webos/i.test(r)}function Dg(r=en()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function RD(r=en()){return Dg(r)&&!!window.navigator?.standalone}function ID(){return tS()&&document.documentMode===10}function AA(r=en()){return Dg(r)||vA(r)||EA(r)||TA(r)||/windows phone/i.test(r)||_A(r)}/**
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
 */function bA(r,t=[]){let n;switch(r){case"Browser":n=CT(en());break;case"Worker":n=`${CT(en())}-${r}`;break;default:n=r}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${go}/${s}`}/**
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
 */class CD{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const s=u=>new Promise((f,g)=>{try{const y=t(u);f(y)}catch(y){g(y)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const s of this.queue)await s(t),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function DD(r,t={}){return To(r,"GET","/v2/passwordPolicy",Lh(r,t))}/**
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
 */const ND=6;class OD{constructor(t){const n=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??ND,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=t.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,n),this.validatePasswordCharacterOptions(t,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(t,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=t.length>=s),o&&(n.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<t.length;o++)s=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,n,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=u))}}/**
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
 */class MD{constructor(t,n,s,o){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new DT(this),this.idTokenSubscription=new DT(this),this.beforeStateQueue=new CD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=oA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Wi(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await so.create(this,t),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await hh(this,{idToken:t}),s=await ei._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){if(ti(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(f,f))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=this.redirectUser?._redirectEventId,f=s?._redirectEventId,g=await this.tryRedirectSignIn(t);(!u||u===f)&&g?.user&&(s=g.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return bt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await fh(t)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=dD()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(ti(this.app))return Promise.reject(Wr(this));const n=t?Me(t):null;return n&&bt(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&bt(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return ti(this.app)?Promise.reject(Wr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return ti(this.app)?Promise.reject(Wr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Wi(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await DD(this),n=new OD(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new ia("auth","Firebase",t())}onAuthStateChanged(t,n,s){return this.registerStateListener(this.authStateSubscription,t,n,s)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,s){return this.registerStateListener(this.idTokenSubscription,t,n,s)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await wD(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(t,n){const s=await this.getOrInitRedirectPersistenceManager(n);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Wi(t)||this._popupRedirectResolver;bt(n,this,"argument-error"),this.redirectPersistenceManager=await so.create(this,[Wi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===t?this._currentUser:this.redirectUser?._redirectEventId===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=this.currentUser?.uid??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,s,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let f=!1;const g=this._isInitialized?Promise.resolve():this._initializationPromise;if(bt(g,this,"internal-error"),g.then(()=>{f||u(this.currentUser)}),typeof n=="function"){const y=t.addObserver(n,s,o);return()=>{f=!0,y()}}else{const y=t.addObserver(n);return()=>{f=!0,y()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return bt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=bA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(t["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){if(ti(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return t?.error&&cD(`Error while retrieving App Check token: ${t.error}`),t?.token}}function zh(r){return Me(r)}class DT{constructor(t){this.auth=t,this.observer=null,this.addObserver=oS(n=>this.observer=n)}get next(){return bt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ng={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function VD(r){Ng=r}function xD(r){return Ng.loadJS(r)}function PD(){return Ng.gapiScript}function kD(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function UD(r,t){const n=ra(r,"auth");if(n.isInitialized()){const o=n.getImmediate(),u=n.getOptions();if(ts(u,t??{}))return o;ir(o,"already-initialized")}return n.initialize({options:t})}function LD(r,t){const n=t?.persistence||[],s=(Array.isArray(n)?n:[n]).map(Wi);t?.errorMap&&r._updateErrorMap(t.errorMap),r._initializeWithPersistence(s,t?.popupRedirectResolver)}function zD(r,t,n){const s=zh(r);bt(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const o=!1,u=SA(t),{host:f,port:g}=jD(t),y=g===null?"":`:${g}`,p={url:`${u}//${f}${y}/`},E=Object.freeze({host:f,port:g,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){bt(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),bt(ts(p,s.config.emulator)&&ts(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=p,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,mo(f)?($T(`${u}//${f}${y}`),ZT("Auth",!0)):BD()}function SA(r){const t=r.indexOf(":");return t<0?"":r.substr(0,t+1)}function jD(r){const t=SA(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(t.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:NT(s.substr(u.length+1))}}else{const[u,f]=s.split(":");return{host:u,port:NT(f)}}}function NT(r){if(!r)return null;const t=Number(r);return isNaN(t)?null:t}function BD(){function r(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class wA{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Ji("not implemented")}_getIdTokenResponse(t){return Ji("not implemented")}_linkToIdToken(t,n){return Ji("not implemented")}_getReauthenticationResolver(t){return Ji("not implemented")}}/**
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
 */async function ao(r,t){return hA(r,"POST","/v1/accounts:signInWithIdp",Lh(r,t))}/**
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
 */const qD="http://localhost";class na extends wA{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new na(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):ir("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:o,...u}=n;if(!s||!o)return null;const f=new na(s,o);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(t){const n=this.buildRequest();return ao(t,n)}_linkToIdToken(t,n){const s=this.buildRequest();return s.idToken=n,ao(t,s)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,ao(t,n)}buildRequest(){const t={requestUri:qD,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=$l(n)}return t}}/**
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
 */class RA{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ou extends RA{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Hr extends ou{constructor(){super("facebook.com")}static credential(t){return na._fromParams({providerId:Hr.PROVIDER_ID,signInMethod:Hr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Hr.credentialFromTaggedObject(t)}static credentialFromError(t){return Hr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Hr.credential(t.oauthAccessToken)}catch{return null}}}Hr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Hr.PROVIDER_ID="facebook.com";/**
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
 */class Fr extends ou{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return na._fromParams({providerId:Fr.PROVIDER_ID,signInMethod:Fr.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Fr.credentialFromTaggedObject(t)}static credentialFromError(t){return Fr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:s}=t;if(!n&&!s)return null;try{return Fr.credential(n,s)}catch{return null}}}Fr.GOOGLE_SIGN_IN_METHOD="google.com";Fr.PROVIDER_ID="google.com";/**
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
 */class Gr extends ou{constructor(){super("github.com")}static credential(t){return na._fromParams({providerId:Gr.PROVIDER_ID,signInMethod:Gr.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Gr.credentialFromTaggedObject(t)}static credentialFromError(t){return Gr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Gr.credential(t.oauthAccessToken)}catch{return null}}}Gr.GITHUB_SIGN_IN_METHOD="github.com";Gr.PROVIDER_ID="github.com";/**
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
 */class Qr extends ou{constructor(){super("twitter.com")}static credential(t,n){return na._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Qr.credentialFromTaggedObject(t)}static credentialFromError(t){return Qr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=t;if(!n||!s)return null;try{return Qr.credential(n,s)}catch{return null}}}Qr.TWITTER_SIGN_IN_METHOD="twitter.com";Qr.PROVIDER_ID="twitter.com";/**
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
 */async function HD(r,t){return hA(r,"POST","/v1/accounts:signUp",Lh(r,t))}/**
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
 */class os{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,s,o=!1){const u=await ei._fromIdTokenResponse(t,s,o),f=OT(s);return new os({user:u,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(t,n,s){await t._updateTokensIfNecessary(s,!0);const o=OT(s);return new os({user:t,providerId:o,_tokenResponse:s,operationType:n})}}function OT(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */async function FD(r){if(ti(r.app))return Promise.reject(Wr(r));const t=zh(r);if(await t._initializationPromise,t.currentUser?.isAnonymous)return new os({user:t.currentUser,providerId:null,operationType:"signIn"});const n=await HD(t,{returnSecureToken:!0}),s=await os._fromIdTokenResponse(t,"signIn",n,!0);return await t._updateCurrentUser(s.user),s}/**
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
 */class dh extends si{constructor(t,n,s,o){super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,dh.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,n,s,o){return new dh(t,n,s,o)}}function IA(r,t,n,s){return(t==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?dh._fromErrorAndOperation(r,u,t,s):u})}async function GD(r,t,n=!1){const s=await Yl(r,t._linkToIdToken(r.auth,await r.getIdToken()),n);return os._forOperation(r,"link",s)}/**
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
 */async function QD(r,t,n=!1){const{auth:s}=r;if(ti(s.app))return Promise.reject(Wr(s));const o="reauthenticate";try{const u=await Yl(r,IA(s,o,t,r),n);bt(u.idToken,s,"internal-error");const f=Cg(u.idToken);bt(f,s,"internal-error");const{sub:g}=f;return bt(r.uid===g,s,"user-mismatch"),os._forOperation(r,o,u)}catch(u){throw u?.code==="auth/user-not-found"&&ir(s,"user-mismatch"),u}}/**
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
 */async function KD(r,t,n=!1){if(ti(r.app))return Promise.reject(Wr(r));const s="signIn",o=await IA(r,s,t),u=await os._fromIdTokenResponse(r,s,o);return n||await r._updateCurrentUser(u.user),u}function YD(r,t,n,s){return Me(r).onIdTokenChanged(t,n,s)}function XD(r,t,n){return Me(r).beforeAuthStateChanged(t,n)}const mh="__sak";/**
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
 */class CA{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(mh,"1"),this.storage.removeItem(mh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const $D=1e3,ZD=10;class DA extends CA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=AA(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&t(n,o,s)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((f,g,y)=>{this.notifyListeners(f,y)});return}const s=t.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},u=this.storage.getItem(s);ID()&&u!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,ZD):o()}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:s}),!0)})},$D)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}DA.type="LOCAL";const JD=DA;/**
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
 */class NA extends CA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}NA.type="SESSION";const OA=NA;/**
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
 */function WD(r){return Promise.all(r.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class jh{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(o=>o.isListeningto(t));if(n)return n;const s=new jh(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:s,eventType:o,data:u}=n.data,f=this.handlersMap[o];if(!f?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const g=Array.from(f).map(async p=>p(n.origin,u)),y=await WD(g);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:y})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jh.receivers=[];/**
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
 */function Og(r="",t=10){let n="";for(let s=0;s<t;s++)n+=Math.floor(Math.random()*10);return r+n}/**
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
 */class tN{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,f;return new Promise((g,y)=>{const p=Og("",20);o.port1.start();const E=setTimeout(()=>{y(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(S){const C=S;if(C.data.eventId===p)switch(C.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),g(C.data.response);break;default:clearTimeout(E),clearTimeout(u),y(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:t,eventId:p,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
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
 */function Ci(){return window}function eN(r){Ci().location.href=r}/**
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
 */function MA(){return typeof Ci().WorkerGlobalScope<"u"&&typeof Ci().importScripts=="function"}async function nN(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function iN(){return navigator?.serviceWorker?.controller||null}function rN(){return MA()?self:null}/**
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
 */const VA="firebaseLocalStorageDb",sN=1,gh="firebaseLocalStorage",xA="fbase_key";class lu{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Bh(r,t){return r.transaction([gh],t?"readwrite":"readonly").objectStore(gh)}function aN(){const r=indexedDB.deleteDatabase(VA);return new lu(r).toPromise()}function Om(){const r=indexedDB.open(VA,sN);return new Promise((t,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(gh,{keyPath:xA})}catch(o){n(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(gh)?t(s):(s.close(),await aN(),t(await Om()))})})}async function MT(r,t,n){const s=Bh(r,!0).put({[xA]:t,value:n});return new lu(s).toPromise()}async function oN(r,t){const n=Bh(r,!1).get(t),s=await new lu(n).toPromise();return s===void 0?null:s.value}function VT(r,t){const n=Bh(r,!0).delete(t);return new lu(n).toPromise()}const lN=800,uN=3;class PA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Om(),this.db)}async _withRetries(t){let n=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(n++>uN)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return MA()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jh._getInstance(rN()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await nN(),!this.activeServiceWorker)return;this.sender=new tN(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&t[0]?.fulfilled&&t[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||iN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Om();return await MT(t,mh,"1"),await VT(t,mh),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>MT(s,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(s=>oN(s,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>VT(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const u=Bh(o,!1).getAll();return new lu(u).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(t.length!==0)for(const{fbase_key:o,value:u}of t)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}PA.type="LOCAL";const cN=PA;new au(3e4,6e4);/**
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
 */function hN(r,t){return t?Wi(t):(bt(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Mg extends wA{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return ao(t,this._buildIdpRequest())}_linkToIdToken(t,n){return ao(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return ao(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function fN(r){return KD(r.auth,new Mg(r),r.bypassAuthState)}function dN(r){const{auth:t,user:n}=r;return bt(n,t,"internal-error"),QD(n,new Mg(r),r.bypassAuthState)}async function mN(r){const{auth:t,user:n}=r;return bt(n,t,"internal-error"),GD(n,new Mg(r),r.bypassAuthState)}/**
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
 */class kA{constructor(t,n,s,o,u=!1){this.auth=t,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:s,postBody:o,tenantId:u,error:f,type:g}=t;if(f){this.reject(f);return}const y={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(g)(y))}catch(p){this.reject(p)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return fN;case"linkViaPopup":case"linkViaRedirect":return mN;case"reauthViaPopup":case"reauthViaRedirect":return dN;default:ir(this.auth,"internal-error")}}resolve(t){rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const gN=new au(2e3,1e4);class eo extends kA{constructor(t,n,s,o,u){super(t,n,o,u),this.provider=s,this.authWindow=null,this.pollId=null,eo.currentPopupAction&&eo.currentPopupAction.cancel(),eo.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return bt(t,this.auth,"internal-error"),t}async onExecution(){rr(this.filter.length===1,"Popup operations only handle one event");const t=Og();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ii(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Ii(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,eo.currentPopupAction=null}pollUserCancellation(){const t=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ii(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,gN.get())};t()}}eo.currentPopupAction=null;/**
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
 */const pN="pendingRedirect",qc=new Map;class yN extends kA{constructor(t,n,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let t=qc.get(this.auth._key());if(!t){try{const s=await _N(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(n){t=()=>Promise.reject(n)}qc.set(this.auth._key(),t)}return this.bypassAuthState||qc.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _N(r,t){const n=EN(t),s=TN(r);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function vN(r,t){qc.set(r._key(),t)}function TN(r){return Wi(r._redirectPersistence)}function EN(r){return Bc(pN,r.config.apiKey,r.name)}async function AN(r,t,n=!1){if(ti(r.app))return Promise.reject(Wr(r));const s=zh(r),o=hN(s,t),f=await new yN(s,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,t)),f}/**
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
 */const bN=600*1e3;class SN{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(n=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!wN(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){if(t.error&&!UA(t)){const s=t.error.code?.split("auth/")[1]||"internal-error";n.onError(Ii(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const s=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=bN&&this.cachedEventUids.clear(),this.cachedEventUids.has(xT(t))}saveEventToCache(t){this.cachedEventUids.add(xT(t)),this.lastProcessedEventTime=Date.now()}}function xT(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(t=>t).join("-")}function UA({type:r,error:t}){return r==="unknown"&&t?.code==="auth/no-auth-event"}function wN(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return UA(r);default:return!1}}/**
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
 */async function RN(r,t={}){return To(r,"GET","/v1/projects",t)}/**
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
 */const IN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,CN=/^https?/;async function DN(r){if(r.config.emulator)return;const{authorizedDomains:t}=await RN(r);for(const n of t)try{if(NN(n))return}catch{}ir(r,"unauthorized-domain")}function NN(r){const t=Dm(),{protocol:n,hostname:s}=new URL(t);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!CN.test(n))return!1;if(IN.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const ON=new au(3e4,6e4);function PT(){const r=Ci().___jsl;if(r?.H){for(const t of Object.keys(r.H))if(r.H[t].r=r.H[t].r||[],r.H[t].L=r.H[t].L||[],r.H[t].r=[...r.H[t].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function MN(r){return new Promise((t,n)=>{function s(){PT(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{PT(),n(Ii(r,"network-request-failed"))},timeout:ON.get()})}if(Ci().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else if(Ci().gapi?.load)s();else{const o=kD("iframefcb");return Ci()[o]=()=>{gapi.load?s():n(Ii(r,"network-request-failed"))},xD(`${PD()}?onload=${o}`).catch(u=>n(u))}}).catch(t=>{throw Hc=null,t})}let Hc=null;function VN(r){return Hc=Hc||MN(r),Hc}/**
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
 */const xN=new au(5e3,15e3),PN="__/auth/iframe",kN="emulator/auth/iframe",UN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},LN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zN(r){const t=r.config;bt(t.authDomain,r,"auth-domain-config-required");const n=t.emulator?Ig(t,kN):`https://${r.config.authDomain}/${PN}`,s={apiKey:t.apiKey,appName:r.name,v:go},o=LN.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${$l(s).slice(1)}`}async function jN(r){const t=await VN(r),n=Ci().gapi;return bt(n,r,"internal-error"),t.open({where:document.body,url:zN(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:UN,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const f=Ii(r,"network-request-failed"),g=Ci().setTimeout(()=>{u(f)},xN.get());function y(){Ci().clearTimeout(g),o(s)}s.ping(y).then(y,()=>{u(f)})}))}/**
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
 */const BN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qN=500,HN=600,FN="_blank",GN="http://localhost";class kT{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function QN(r,t,n,s=qN,o=HN){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let g="";const y={...BN,width:s.toString(),height:o.toString(),top:u,left:f},p=en().toLowerCase();n&&(g=yA(p)?FN:n),gA(p)&&(t=t||GN,y.scrollbars="yes");const E=Object.entries(y).reduce((C,[H,J])=>`${C}${H}=${J},`,"");if(RD(p)&&g!=="_self")return KN(t||"",g),new kT(null);const S=window.open(t||"",g,E);bt(S,r,"popup-blocked");try{S.focus()}catch{}return new kT(S)}function KN(r,t){const n=document.createElement("a");n.href=r,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const YN="__/auth/handler",XN="emulator/auth/handler",$N=encodeURIComponent("fac");async function UT(r,t,n,s,o,u){bt(r.config.authDomain,r,"auth-domain-config-required"),bt(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:go,eventId:o};if(t instanceof RA){t.setDefaultLanguage(r.languageCode),f.providerId=t.providerId||"",aS(t.getCustomParameters())||(f.customParameters=JSON.stringify(t.getCustomParameters()));for(const[E,S]of Object.entries({}))f[E]=S}if(t instanceof ou){const E=t.getScopes().filter(S=>S!=="");E.length>0&&(f.scopes=E.join(","))}r.tenantId&&(f.tid=r.tenantId);const g=f;for(const E of Object.keys(g))g[E]===void 0&&delete g[E];const y=await r._getAppCheckToken(),p=y?`#${$N}=${encodeURIComponent(y)}`:"";return`${ZN(r)}?${$l(g).slice(1)}${p}`}function ZN({config:r}){return r.emulator?Ig(r,XN):`https://${r.authDomain}/${YN}`}/**
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
 */const sm="webStorageSupport";class JN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=OA,this._completeRedirectFn=AN,this._overrideRedirectResult=vN}async _openPopup(t,n,s,o){rr(this.eventManagers[t._key()]?.manager,"_initialize() not called before _openPopup()");const u=await UT(t,n,s,Dm(),o);return QN(t,u,Og())}async _openRedirect(t,n,s,o){await this._originValidation(t);const u=await UT(t,n,s,Dm(),o);return eN(u),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):(rr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(t);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(t){const n=await jN(t),s=new SN(t);return n.register("authEvent",o=>(bt(o?.authEvent,t,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=n,s}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(sm,{type:sm},o=>{const u=o?.[0]?.[sm];u!==void 0&&n(!!u),ir(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=DN(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return AA()||pA()||Dg()}}const WN=JN;var LT="@firebase/auth",zT="1.11.0";/**
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
 */class tO{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(s=>{t(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){bt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function eO(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function nO(r){Di(new ii("auth",(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),u=t.getProvider("app-check-internal"),{apiKey:f,authDomain:g}=s.options;bt(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:f,authDomain:g,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:bA(r)},p=new MD(s,o,u,y);return LD(p,n),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,s)=>{t.getProvider("auth-internal").initialize()})),Di(new ii("auth-internal",t=>{const n=zh(t.getProvider("auth").getImmediate());return(s=>new tO(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qn(LT,zT,eO(r)),qn(LT,zT,"esm2020")}/**
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
 */const iO=300,rO=XT("authIdTokenMaxAge")||iO;let jT=null;const sO=r=>async t=>{const n=t&&await t.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>rO)return;const o=n?.token;jT!==o&&(jT=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function aO(r=xm()){const t=ra(r,"auth");if(t.isInitialized())return t.getImmediate();const n=UD(r,{popupRedirectResolver:WN,persistence:[cN,JD,OA]}),s=XT("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const f=sO(u.toString());XD(n,f,()=>f(n.currentUser)),YD(n,g=>f(g))}}const o=KT("auth");return o&&zD(n,`http://${o}`),n}function oO(){return document.getElementsByTagName("head")?.[0]??document}VD({loadJS(r){return new Promise((t,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=t,s.onerror=o=>{const u=Ii("internal-error");u.customData=o,n(u)},s.type="text/javascript",s.charset="UTF-8",oO().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});nO("Browser");const lO={apiKey:"AIzaSyASowKpD20sEZPA33VG5Mxy0KuJeFIziT4",authDomain:"ruleta-colores.firebaseapp.com",projectId:"ruleta-colores",storageBucket:"ruleta-colores.firebasestorage.app",messagingSenderId:"1088398378468",appId:"1:1088398378468:web:ffe2a14beab711aed573f1",measurementId:"G-NV2GD0KQKC"},Vg=r0(lO),Ai=AC(Vg),uO=aO(Vg);FD(uO).catch(r=>{console.error("Anonymous sign-in failed:",r)});typeof window<"u"&&sD(Vg);const Vc={Rojo:"#dc2626",Azul:"#2563eb",Verde:"#16a34a",Amarillo:"#eab308",Naranja:"#ea580c",Morado:"#9333ea","Blanco/Morado":"#9333ea",Rosa:"#ec4899",Violeta:"#7c3aed",Cyan:"#0891b2",Negro:"#1f2937",Blanco:"#FFFFFF",Gris:"#6b7280",Celeste:"#0ea5e9",Turquesa:"#14b8a6",Lima:"#84cc16",Dorado:"#f59e0b",Plateado:"#9ca3af",Marrón:"#92400e",Café:"#78350f",Beige:"#d6d3d1",Coral:"#f97316",Magenta:"#d946ef",Índigo:"#4f46e5",Lavanda:"#a78bfa","Rojo Oscuro":"#991b1b","Azul Claro":"#60a5fa","Verde Claro":"#4ade80","Amarillo Claro":"#fde047","Rosa Claro":"#f9a8d4","Morado Claro":"#c084fc","Verde Oscuro":"#15803d","Azul Oscuro":"#1e40af","Naranja Claro":"#fb923c",Esmeralda:"#10b981",Rubí:"#be123c",Zafiro:"#1e40af",Ámbar:"#f59e0b",Jade:"#059669",Carmesí:"#dc2626"},cO=()=>{const[r,t]=re.useState(["Rojo","Azul","Verde","Amarillo","Naranja","Blanco/Morado","Negro","Rosa"]),[n,s]=re.useState(""),[o,u]=re.useState({}),[f,g]=re.useState(!1),[y,p]=re.useState(""),[E,S]=re.useState([]),[C,H]=re.useState(0),[J,tt]=re.useState(""),[W,yt]=re.useState(null),At=re.useRef(null),[ht,jt]=re.useState(""),pt=0,Dt=new URLSearchParams(window.location.search),O=Dt.get("mode")==="public",b=!O,R=Dt.get("room")||"default",V=Wa(Ai,"rooms",R);re.useEffect(()=>{const $=localStorage.getItem("wheelPlayerName")||"";tt($)},[]),re.useEffect(()=>{localStorage.setItem("wheelPlayerName",J||"")},[J]),re.useEffect(()=>{const $=async()=>{b&&await oh(V,{colors:r,customColors:o,history:[],updatedAt:io()},{merge:!0})},ot=zC(V,wt=>{if(wt.exists()){const ct=wt.data();t(ct.colors||[]),u(ct.customColors||{}),S(ct.history||[]),yt(ct.flash||null),jt(ct.code||"")}else $()});return(async()=>{if(!b||ht)return;const wt=await LC(MC(EC(Ai,"codes"),VC("roomId","==",R),xC(1)));let ct=wt.empty?"":wt.docs[0].id;if(!ct){const Ht="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",pn=(nn=6)=>Array.from({length:nn},()=>Ht[Math.floor(Math.random()*Ht.length)]).join("");await Im(Ai,async nn=>{for(let yn=0;yn<5;yn++){const Ke=pn(6),Ve=Wa(Ai,"codes",Ke);if(!(await nn.get(Ve)).exists()){ct=Ke,nn.set(Ve,{roomId:R,createdAt:io()});return}}throw new Error("No se pudo generar un código único.")})}await oh(V,{code:ct},{merge:!0}),jt(ct)})().catch(console.error),()=>ot()},[R,b]);const N=$=>Im(Ai,async ot=>{const it=await ot.get(V),wt=it.exists()?it.data():{colors:[],history:[],customColors:{},flash:null},ct=$({colors:wt.colors||[],history:wt.history||[],customColors:wt.customColors||{},flash:wt.flash||null});ot.set(V,{...ct,updatedAt:io()},{merge:!0})}),P=async()=>{if(!b)return;const $=n.trim();$&&(await N(({colors:ot,history:it,customColors:wt,flash:ct})=>ot.includes($)?{colors:ot,history:it,customColors:wt,flash:ct}:{colors:[...ot,$],history:it,customColors:wt,flash:ct}),s(""))},I=async $=>{b&&await N(({colors:ot,history:it,customColors:wt})=>{const ct=ot.filter(pn=>pn!==$),Ht={...wt};return delete Ht[$],{colors:ct,history:it,customColors:Ht,flash:null}})},ae=async($,ot)=>{b&&await N(({colors:it,history:wt,customColors:ct,flash:Ht})=>({colors:it,history:wt,flash:Ht,customColors:{...ct,[$]:ot}}))},Jt=(J||"").trim().length>0,nt=r.length===1&&E?.some($=>$.color===r[0]),ft=r.length>0&&!f&&Jt&&!nt,kt=()=>{const $=(J||"").trim();if(!$){alert("Por favor, escribe tu nombre antes de girar.");return}if(r.length===0||f)return;if(r.length===1&&E?.some(Ht=>Ht.color===r[0])){alert("El juego ya terminó 🎉 No hay colores nuevos por sacar.");return}g(!0),p("");const ot=5+Math.random()*5,it=C+ot*360+Math.random()*360;H(it);const wt=1200,ct=wt+100;setTimeout(async()=>{const Ht=r.length;if(Ht===0){g(!1);return}const pn=360/Ht,nn=(it%360+360)%360,yn=((pt-nn)%360+360)%360;let Ke=Math.round(yn/pn)%Ht;Ke<0&&(Ke+=Ht);const Ve=r[Ke],Oi=Date.now();await N(({colors:Ye,history:me,customColors:Hn})=>{if(!Ye.includes(Ve))return{colors:Ye,history:me,customColors:Hn,flash:null};const ne=[...me||[],{color:Ve,ts:Oi,by:$}];return{colors:Ye,history:ne,customColors:Hn,flash:{color:Ve,ts:Oi,duration:wt}}}),p(Ve),g(!1),setTimeout(async()=>{await N(({colors:Ye,history:me,customColors:Hn,flash:ne})=>{const Ae=ne&&ne.color===Ve;return{colors:Ye.length===1?Ye:Ye.filter(Eo=>Eo!==Ve),history:me,customColors:Hn,flash:Ae?null:ne}})},ct)},3e3)},D=()=>{if(r.length===1){const it=r[0],wt=o[it]||Vc[it]||"hsl(0, 70%, 50%)",ct=W&&W.color===it;return q.jsxs("g",{children:[q.jsx("circle",{cx:"150",cy:"150",r:"140",className:ct?"blink-twice":"",fill:wt,stroke:"#fff",strokeWidth:"3"}),q.jsx("text",{x:"150",y:"150",textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:"18",fontWeight:"bold",style:{textShadow:"2px 2px 4px rgba(0,0,0,0.8)"},children:it})]},it)}const $=360/Math.max(r.length,1),ot=-$/2;return r.map((it,wt)=>{const ct=wt*$+ot,Ht=(wt+1)*$+ot,pn=$>180?1:0,nn=150+140*Math.cos((ct-90)*Math.PI/180),yn=150+140*Math.sin((ct-90)*Math.PI/180),Ke=150+140*Math.cos((Ht-90)*Math.PI/180),Ve=150+140*Math.sin((Ht-90)*Math.PI/180),Oi=["M 150 150",`L ${nn} ${yn}`,`A 140 140 0 ${pn} 1 ${Ke} ${Ve}`,"Z"].join(" "),Ye=ct+$/2,me=o[it]||Vc[it]||`hsl(${wt*360/Math.max(r.length,1)}, 70%, 50%)`,Hn=W&&W.color===it;return q.jsxs("g",{children:[q.jsx("path",{d:Oi,className:Hn?"blink-twice":"",fill:me,stroke:"#fff",strokeWidth:"3"}),q.jsx("text",{x:150+80*Math.cos((Ye-90)*Math.PI/180),y:150+80*Math.sin((Ye-90)*Math.PI/180),textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:"11",fontWeight:"bold",style:{textShadow:"2px 2px 4px rgba(0,0,0,0.8)"},children:it})]},it)})},Z=async()=>{b&&(await N(({colors:$,history:ot,customColors:it})=>({colors:[...new Set([...$,...ot.map(ct=>ct.color)])],history:[],customColors:it,flash:null})),p(""),H(0))},at=()=>{const ot=`${window.location.href.split("?")[0]}?room=${R}&mode=public`;navigator.clipboard.writeText(ot).catch(()=>{}),alert("¡Link público copiado! "+ot)},rt=()=>{const ot=`${window.location.href.split("?")[0]}?room=${R}`;navigator.clipboard.writeText(ot).catch(()=>{}),alert("¡Link admin copiado! "+ot)};return q.jsxs("div",{className:"max-w-4xl mx-auto p-6 bg-gradient-to-br from-purple-50 to-blue-50 min-h-screen",children:[q.jsx("style",{children:`
        @keyframes blinkTwice {
          0%   { opacity: 1; transform: scale(1); }
          20%  { opacity: 0.4; transform: scale(1.02); }
          40%  { opacity: 1; transform: scale(1); }
          60%  { opacity: 0.4; transform: scale(1.02); }
          80%  { opacity: 1; transform: scale(1); }
          100% { opacity: 1; transform: scale(1); }
        }
        .blink-twice { animation: blinkTwice 1.2s ease-in-out; }
      `}),q.jsxs("div",{className:"bg-white rounded-lg shadow-xl p-6",children:[q.jsxs("div",{className:"text-center mb-6",children:[q.jsxs("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:["🎯 Ruleta de Colores",O&&q.jsx("span",{className:"text-lg text-blue-600 font-normal",children:" - Modo Invitado"}),b&&q.jsx("span",{className:"text-lg text-green-600 font-normal",children:" - Modo Administrador"})]}),q.jsx("p",{className:"text-gray-600",children:O?"¡Gira la ruleta y diviértete! Solo puedes girar, no modificar colores.":"Agrega colores, gira la ruleta y comparte con tus amigos"}),q.jsxs("p",{className:"text-xs text-gray-500",children:["Sala: ",q.jsx("code",{children:R})]})]}),b&&ht&&q.jsxs("div",{className:"mt-3 inline-flex items-center gap-2 bg-purple-50 border border-purple-200 text-purple-800 px-3 py-1.5 rounded-lg",children:[q.jsx("span",{className:"text-sm",children:"Código de sala:"}),q.jsx("code",{className:"font-semibold tracking-widest",children:ht}),q.jsx("button",{onClick:async()=>{try{await navigator.clipboard.writeText(ht),alert(`Código copiado: ${ht}`)}catch{alert(`Código: ${ht}`)}},className:"ml-2 text-xs bg-purple-600 hover:bg-purple-700 text-white px-2 py-1 rounded",title:"Copiar código",children:"Copiar"})]}),q.jsxs("div",{className:"mb-4 max-w-md mx-auto",children:[q.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Tu nombre (requerido para girar)"}),q.jsx("input",{type:"text",value:J,onChange:$=>tt($.target.value),placeholder:"Escribe tu nombre...",className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"})]}),b&&q.jsxs("div",{className:"flex flex-wrap justify-center gap-4 mb-6",children:[q.jsxs("button",{onClick:at,className:"flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600",children:[q.jsx(iv,{size:16})," Compartir Link Público"]}),q.jsxs("button",{onClick:rt,className:"flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600",children:[q.jsx(iv,{size:16})," Compartir Link Admin"]}),q.jsxs("button",{onClick:Z,className:"flex items-center gap-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600",children:[q.jsx(O1,{size:16})," Reiniciar Juego"]})]}),q.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[q.jsxs("div",{className:"text-center",children:[q.jsx("div",{className:"relative inline-block mb-4",children:r.length>0?q.jsxs(q.Fragment,{children:[q.jsx("svg",{width:"300",height:"300",className:"drop-shadow-lg",children:q.jsx("g",{ref:At,style:{transform:`rotate(${C}deg)`,transformOrigin:"150px 150px",transition:f?"transform 3s cubic-bezier(0.23, 1, 0.32, 1)":"none"},children:D()})}),q.jsx("div",{className:"absolute top-2 left-1/2 transform -translate-x-1/2 z-10",children:q.jsxs("div",{className:"relative",children:[q.jsx("div",{className:"absolute top-1 left-0 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-black opacity-30"}),q.jsx("div",{className:"w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-red-600 relative z-10"}),q.jsx("div",{className:"absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full border-2 border-white"})]})})]}):q.jsx("div",{className:"w-72 h-72 bg-gray-200 rounded-full flex items-center justify-center",children:q.jsx("p",{className:"text-gray-500 text-center",children:b?`Agrega colores
para comenzar`:`No hay colores
disponibles`})})}),q.jsx("button",{onClick:kt,disabled:!ft,className:`w-32 h-32 rounded-full text-white font-bold text-lg shadow-lg transform transition-all ${ft?r.length===1?"bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 hover:scale-105 active:scale-95":"bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 hover:scale-105 active:scale-95":"bg-gray-400 cursor-not-allowed"}`,title:Jt?nt?"Juego finalizado":"Girar la ruleta":"Escribe tu nombre para poder girar",children:f?q.jsx(V1,{className:"animate-spin mx-auto",size:24}):nt?q.jsxs("div",{className:"text-center",children:[q.jsx("div",{children:"🏁"}),q.jsx("div",{className:"text-xs",children:"FINALIZADO"})]}):r.length===1?q.jsxs("div",{className:"text-center",children:[q.jsx("div",{children:"🏆"}),q.jsx("div",{className:"text-xs",children:"FINAL"})]}):"GIRAR"}),nt&&q.jsx("div",{className:"mt-3 text-sm text-yellow-700 bg-yellow-100 border border-yellow-200 rounded p-2",children:"🎉 Juego finalizado: ya se han extraído todos los colores."}),y&&q.jsxs("div",{className:`mt-4 p-4 border rounded-lg ${r.length===1?"bg-gradient-to-r from-yellow-100 to-orange-100 border-yellow-300":"bg-green-100 border-green-300"}`,children:[q.jsx("h3",{className:`text-lg font-bold ${r.length===1?"text-yellow-800":"text-green-800"}`,children:r.length===1?"🏆 ¡COLOR FINAL!":"¡Resultado!"}),q.jsx("p",{className:`text-2xl font-bold ${r.length===1?"text-yellow-900":"text-green-900"}`,children:y}),q.jsxs("p",{className:"text-sm text-gray-600 mt-1",children:["Sacado por: ",q.jsx("span",{className:"font-semibold",children:(J||"").trim()})]})]})]}),q.jsxs("div",{children:[b&&q.jsxs("div",{className:"mb-6",children:[q.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Agregar Color"}),q.jsxs("div",{className:"flex gap-2",children:[q.jsx("input",{type:"text",value:n,onChange:$=>s($.target.value),onKeyDown:$=>$.key==="Enter"&&P(),placeholder:"Escribe un color...",className:"flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"}),q.jsx("button",{onClick:P,className:"bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600",children:q.jsx(D1,{size:20})})]})]}),b&&q.jsxs("div",{className:"mb-6",children:[q.jsxs("h3",{className:"text-lg font-semibold mb-3",children:["Colores Disponibles (",r.length,")"]}),q.jsx("div",{className:"max-h-48 overflow-y-auto",children:r.length>0?q.jsx("div",{className:"space-y-2",children:r.map(($,ot)=>q.jsxs("div",{className:"flex items-center justify-between bg-gray-50 px-3 py-2 rounded",children:[q.jsxs("div",{className:"flex items-center gap-2 flex-1",children:[q.jsx("span",{className:"flex-1",children:$}),q.jsx("input",{type:"color",value:o[$]||(Vc[$]??"#3b82f6"),onChange:it=>ae($,it.target.value),className:"w-8 h-8 rounded border-2 border-gray-300 cursor-pointer",title:`Cambiar color de ${$}`})]}),q.jsx("button",{onClick:()=>I($),className:"text-red-500 hover:text-red-700 ml-2",children:q.jsx(k1,{size:16})})]},ot))}):q.jsx("p",{className:"text-gray-500 text-center py-4",children:"No hay colores disponibles"})})]}),O&&q.jsxs("div",{className:"mb-6",children:[q.jsxs("h3",{className:"text-lg font-semibold mb-3",children:["Colores en la Ruleta (",r.length,")"]}),q.jsx("div",{className:"max-h-48 overflow-y-auto",children:r.length>0?r.map(($,ot)=>q.jsxs("div",{className:"flex items-center gap-2 bg-gray-50 px-3 py-2 rounded",children:[q.jsx("div",{className:"w-6 h-6 rounded-full border-2 border-gray-300",style:{backgroundColor:o[$]||(Vc[$]??"#3b82f6")}}),q.jsx("span",{children:$})]},ot)):q.jsx("p",{className:"text-gray-500 text-center py-4",children:"No hay colores disponibles"})})]}),q.jsxs("div",{children:[q.jsxs("h3",{className:"text-lg font-semibold mb-3",children:["Historial (",E.length,")"]}),q.jsx("div",{className:"max-h-80 md:max-h-[28rem] overflow-y-auto pr-2",children:E.length>0?E.slice().reverse().map(($,ot)=>q.jsxs("div",{className:"bg-blue-50 px-3 py-2 rounded text-sm",children:[q.jsx("span",{className:"font-medium",children:$.color}),q.jsx("span",{className:"text-gray-500 ml-2",children:new Date($.ts).toLocaleTimeString()}),$.by&&q.jsxs("span",{className:"text-gray-600 ml-2",children:["por ",q.jsx("strong",{children:$.by})]})]},ot)):q.jsx("p",{className:"text-gray-500 text-center py-4",children:"Aún no hay selecciones"})})]})]})]}),q.jsxs("div",{className:"mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg",children:[q.jsx("h4",{className:"font-semibold text-blue-800 mb-2",children:b?"🔧 Instrucciones para Administrador:":"🎮 Instrucciones para Invitado:"}),b?q.jsxs("ol",{className:"text-sm text-blue-700 space-y-1",children:[q.jsxs("li",{children:["1. Abre con ",q.jsx("code",{children:"?room=tuSala"})," (ej. fiesta1)."]}),q.jsx("li",{children:"2. Agrega/edita colores y comparte el link público."}),q.jsx("li",{children:"3. Todos verán la misma ruleta en tiempo real."})]}):q.jsxs("ol",{className:"text-sm text-blue-700 space-y-1",children:[q.jsxs("li",{children:["1. Escribe tu nombre y pulsa ",q.jsx("strong",{children:"GIRAR"}),"."]}),q.jsx("li",{children:"2. El color elegido parpadea y luego desaparece para todos."})]})]})]})]})},BT="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",hO=(r=6)=>Array.from({length:r},()=>BT[Math.floor(Math.random()*BT.length)]).join(""),fO=()=>{const[r,t]=re.useState(!1),[n,s]=re.useState(!1),[o,u]=re.useState(""),[f,g]=re.useState(""),[y,p]=re.useState(""),E=window.location.origin+window.location.pathname,S=()=>crypto.randomUUID?crypto.randomUUID():`room_${Date.now()}_${Math.random().toString(36).slice(2,8)}`,C=async()=>{p("");const J=o.trim();if(!J){p("Escribe tu nombre (administrador)");return}t(!0);try{const tt=S();await oh(Wa(Ai,"rooms",tt),{colors:["Rojo","Azul","Verde","Amarillo","Naranja","Blanco/Morado","Negro","Rosa"],customColors:{},history:[],createdBy:J,createdAt:io(),updatedAt:io()},{merge:!0});let W="";await Im(Ai,async ht=>{for(let jt=0;jt<5;jt++){const pt=hO(6),Dt=Wa(Ai,"codes",pt);if(!(await ht.get(Dt)).exists()){W=pt,ht.set(Dt,{roomId:tt,createdAt:io()});return}}throw new Error("No se pudo generar un código único. Intenta de nuevo.")}),await oh(Wa(Ai,"rooms",tt),{code:W},{merge:!0});const yt=`${E}?room=${tt}`,At=`${E}?room=${tt}&mode=public`;alert(`✅ Sala creada

Código: ${W}

Link ADMIN: ${yt}
Link PÚBLICO: ${At}

Comparte el CÓDIGO con tus amigos; ellos entran como invitados.`),window.location.href=yt}catch(tt){console.error(tt),p(tt.message||"Error creando la sala")}finally{t(!1)}},H=async()=>{p("");const J=f.trim().toUpperCase();if(!J){p("Escribe el código de la sala");return}s(!0);try{const tt=Wa(Ai,"codes",J),W=await UC(tt);if(!W.exists()){p("Código no válido o sala no encontrada");return}const{roomId:yt}=W.data()||{};if(!yt){p("Código inválido");return}window.location.href=`${E}?room=${encodeURIComponent(yt)}&mode=public`}catch(tt){console.error(tt),p("No se pudo validar el código")}finally{s(!1)}};return q.jsx("div",{className:"max-w-3xl mx-auto p-6 min-h-screen bg-gradient-to-br from-purple-50 to-blue-50",children:q.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-6",children:[q.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"🎮 Ruleta de Colores"}),q.jsx("p",{className:"text-gray-600 mb-6",children:"Crea una sala nueva o entra con un código."}),q.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[q.jsxs("div",{className:"border rounded-lg p-4",children:[q.jsx("h2",{className:"text-xl font-semibold mb-3",children:"Crear sala (Admin)"}),q.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Tu nombre"}),q.jsx("input",{type:"text",value:o,onChange:J=>u(J.target.value),placeholder:"Escribe tu nombre",className:"w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"}),q.jsx("button",{onClick:C,disabled:r,className:`mt-3 w-full py-2 rounded-lg text-white font-medium ${r?"bg-gray-400 cursor-not-allowed":"bg-green-600 hover:bg-green-700"}`,children:r?"Creando...":"Crear sala"}),q.jsxs("p",{className:"text-xs text-gray-500 mt-2",children:["Al crear se generará un ",q.jsx("strong",{children:"código"})," para compartir y links directo admin/público."]})]}),q.jsxs("div",{className:"border rounded-lg p-4",children:[q.jsx("h2",{className:"text-xl font-semibold mb-3",children:"Entrar con código (Invitado)"}),q.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Código"}),q.jsx("input",{type:"text",value:f,onChange:J=>g(J.target.value.toUpperCase()),placeholder:"Ej: 7GQ2XA",className:"w-full px-3 py-2 border rounded-lg tracking-widest text-center uppercase focus:outline-none focus:ring-2 focus:ring-purple-500",maxLength:6}),q.jsx("button",{onClick:H,disabled:n,className:`mt-3 w-full py-2 rounded-lg text-white font-medium ${n?"bg-gray-400 cursor-not-allowed":"bg-blue-600 hover:bg-blue-700"}`,children:n?"Entrando...":"Entrar"}),q.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"Pide el código a quien creó la sala y pégalo aquí."})]})]}),y&&q.jsx("div",{className:"mt-6 p-3 rounded border border-red-200 bg-red-50 text-red-700",children:y}),q.jsx("div",{className:"mt-8 p-3 bg-blue-50 border border-blue-200 rounded",children:q.jsxs("p",{className:"text-sm text-blue-800",children:["Consejo: también puedes entrar con links directos ",q.jsx("code",{children:"?room=…"})," (admin) o ",q.jsx("code",{children:"?room=…&mode=public"})," (invitado)."]})})]})})},dO=()=>new URLSearchParams(window.location.search).get("room")?q.jsx(cO,{}):q.jsx(fO,{});A1.createRoot(document.getElementById("root")).render(q.jsx(m1.StrictMode,{children:q.jsx(dO,{})}));
