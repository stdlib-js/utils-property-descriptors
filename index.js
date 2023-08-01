// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).propertyDescriptors=r()}(this,(function(){"use strict";var t=void 0!==Object.getOwnPropertyDescriptors,r=Object,e=r.getOwnPropertyDescriptors;var n=void 0!==Object.getOwnPropertyNames,o=Object.getOwnPropertyNames;function u(t){return Object.keys(Object(t))}var i=void 0!==Object.keys;var c="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function f(){return c&&"symbol"==typeof Symbol.toStringTag}var l=Object.prototype.toString;var a=Object.prototype.hasOwnProperty;function p(t,r){return null!=t&&a.call(t,r)}var s="function"==typeof Symbol?Symbol.toStringTag:"";var y,b=f()?function(t){var r,e,n;if(null==t)return l.call(t);e=t[s],r=p(t,s);try{t[s]=void 0}catch(r){return l.call(t)}return n=l.call(t),r?t[s]=e:delete t[s],n}:function(t){return l.call(t)};function v(t){return"[object Arguments]"===b(t)}y=function(){return v(arguments)}();var g=y,d="function"==typeof Object.defineProperty?Object.defineProperty:null;var m,j=Object.defineProperty,h=Object.prototype,w=h.toString,O=h.__defineGetter__,_=h.__defineSetter__,S=h.__lookupGetter__,P=h.__lookupSetter__;m=function(){try{return d({},"x",{}),!0}catch(t){return!1}}()?j:function(t,r,e){var n,o,u,i;if("object"!=typeof t||null===t||"[object Array]"===w.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===w.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(S.call(t,r)||P.call(t,r)?(n=t.__proto__,t.__proto__=h,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),u="get"in e,i="set"in e,o&&(u||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&O&&O.call(t,r,e.get),i&&_&&_.call(t,r,e.set),t};var E=m;function I(t,r,e){E(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function T(t){return"string"==typeof t}var A=String.prototype.valueOf;var N=f();function k(t){return"object"==typeof t&&(t instanceof String||(N?function(t){try{return A.call(t),!0}catch(t){return!1}}(t):"[object String]"===b(t)))}function x(t){return T(t)||k(t)}function B(t){return"number"==typeof t}I(x,"isPrimitive",T),I(x,"isObject",k);var V=Number,D=V.prototype.toString;var F=f();function L(t){return"object"==typeof t&&(t instanceof V||(F?function(t){try{return D.call(t),!0}catch(t){return!1}}(t):"[object Number]"===b(t)))}function G(t){return B(t)||L(t)}function Y(t){return t!=t}function C(t){return B(t)&&Y(t)}function M(t){return L(t)&&Y(t.valueOf())}function X(t){return C(t)||M(t)}I(G,"isPrimitive",B),I(G,"isObject",L),I(X,"isPrimitive",C),I(X,"isObject",M);var H=Number.POSITIVE_INFINITY,W=V.NEGATIVE_INFINITY,R=Math.floor;function U(t){return R(t)===t}function q(t){return t<H&&t>W&&U(t)}function z(t){return B(t)&&q(t)}function J(t){return L(t)&&q(t.valueOf())}function K(t){return z(t)||J(t)}I(K,"isPrimitive",z),I(K,"isObject",J);var Q=Object.prototype.propertyIsEnumerable;var Z=!Q.call("beep","0");function $(t,r){var e;return null!=t&&(!(e=Q.call(t,r))&&Z&&x(t)?!C(r=+r)&&z(r)&&r>=0&&r<t.length:e)}var tt=Array.isArray?Array.isArray:function(t){return"[object Array]"===b(t)};var rt=g?v:function(t){return null!==t&&"object"==typeof t&&!tt(t)&&"number"==typeof t.length&&U(t.length)&&t.length>=0&&t.length<=4294967295&&p(t,"callee")&&!$(t,"callee")},et=Array.prototype.slice;function nt(t){return null!==t&&"object"==typeof t}I(nt,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!tt(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(nt));var ot=$((function(){}),"prototype"),ut=!$({toString:null},"toString");function it(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&U(t.length)&&t.length>=0&&t.length<=9007199254740991}function ct(t,r,e){var n,o;if(!it(t)&&!T(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!z(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(X(r)){for(;o<n;o++)if(X(t[o]))return o}else for(;o<n;o++)if(t[o]===r)return o;return-1}var ft=/./;function lt(t){return"boolean"==typeof t}var at=Boolean.prototype.toString;var pt=f();function st(t){return"object"==typeof t&&(t instanceof Boolean||(pt?function(t){try{return at.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===b(t)))}function yt(t){return lt(t)||st(t)}function bt(){return new Function("return this;")()}I(yt,"isPrimitive",lt),I(yt,"isObject",st);var vt="object"==typeof self?self:null,gt="object"==typeof window?window:null,dt="object"==typeof global?global:null;var mt=function(t){if(arguments.length){if(!lt(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return bt()}if(vt)return vt;if(gt)return gt;if(dt)return dt;throw new Error("unexpected error. Unable to resolve global object.")}(),jt=mt.document&&mt.document.childNodes,ht=Int8Array;function wt(){return/^\s*function\s*([^(]*)/i}var Ot=/^\s*function\s*([^(]*)/i;function _t(t){var r,e,n,o;if(("Object"===(e=b(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=Ot.exec(n.toString()))return r[1]}return nt(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}I(wt,"REGEXP",Ot);var St="function"==typeof ft||"object"==typeof ht||"function"==typeof jt?function(t){return _t(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?_t(t).toLowerCase():r};function Pt(t){return t.constructor&&t.constructor.prototype===t}var Et=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],It="undefined"==typeof window?void 0:window;var Tt=function(){var t;if("undefined"===St(It))return!1;for(t in It)try{-1===ct(Et,t)&&p(It,t)&&null!==It[t]&&"object"===St(It[t])&&Pt(It[t])}catch(t){return!0}return!1}(),At="undefined"!=typeof window;var Nt,kt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Nt=i?function(){return 2!==(u(arguments)||"").length}(1,2)?function(t){return rt(t)?u(et.call(t)):u(t)}:u:function(t){var r,e,n,o,u,i,c;if(o=[],rt(t)){for(c=0;c<t.length;c++)o.push(c.toString());return o}if("string"==typeof t){if(t.length>0&&!p(t,"0"))for(c=0;c<t.length;c++)o.push(c.toString())}else{if(!1==(n="function"==typeof t)&&!nt(t))return o;e=ot&&n}for(u in t)e&&"prototype"===u||!p(t,u)||o.push(String(u));if(ut)for(r=function(t){if(!1===At&&!Tt)return Pt(t);try{return Pt(t)}catch(t){return!1}}(t),c=0;c<kt.length;c++)i=kt[c],r&&"constructor"===i||!p(t,i)||o.push(String(i));return o};var xt=Nt;var Bt=n?function(t){return o(Object(t))}:function(t){return xt(Object(t))},Vt=void 0!==Object.getOwnPropertySymbols,Dt=Object.getOwnPropertySymbols;var Ft=Vt?function(t){return Dt(Object(t))}:function(){return[]},Lt=void 0!==Object.getOwnPropertyDescriptor,Gt=Object.getOwnPropertyDescriptor;var Yt=Lt?function(t,r){var e;return null==t||void 0===(e=Gt(t,r))?null:e}:function(t,r){return p(t,r)?{configurable:!0,enumerable:!0,writable:!0,value:t[r]}:null};return t?function(t){return e(r(t))}:function(t){var r,e,n,o,u;for(o={},e=Bt(t),u=0;u<e.length;u++)(n=Yt(t,e[u]))&&E(o,e[u],{configurable:!0,enumerable:!0,writable:!0,value:n});for(r=Ft(t),u=0;u<r.length;u++)(n=Yt(t,r[u]))&&E(o,r[u],{configurable:!0,enumerable:!0,writable:!0,value:n});return o}}));
//# sourceMappingURL=index.js.map