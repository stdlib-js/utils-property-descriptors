// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).propertyDescriptors=e()}(this,(function(){"use strict";var t=void 0!==Object.getOwnPropertyDescriptors,e=Object.getOwnPropertyDescriptors;var r=void 0!==Object.getOwnPropertyNames,n=Object.getOwnPropertyNames;function o(t){return Object.keys(Object(t))}var u=void 0!==Object.keys;var i="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function c(){return i&&"symbol"==typeof Symbol.toStringTag}var f=Object.prototype.toString;var l=Object.prototype.hasOwnProperty;function a(t,e){return null!=t&&l.call(t,e)}var p="function"==typeof Symbol?Symbol.toStringTag:"";var s,y=c()?function(t){var e,r,n;if(null==t)return f.call(t);r=t[p],e=a(t,p);try{t[p]=void 0}catch(e){return f.call(t)}return n=f.call(t),e?t[p]=r:delete t[p],n}:function(t){return f.call(t)};function b(t){return"[object Arguments]"===y(t)}s=function(){return b(arguments)}();var v=s,g="function"==typeof Object.defineProperty?Object.defineProperty:null;var d,m=Object.defineProperty,j=Object.prototype,h=j.toString,w=j.__defineGetter__,O=j.__defineSetter__,_=j.__lookupGetter__,S=j.__lookupSetter__;d=function(){try{return g({},"x",{}),!0}catch(t){return!1}}()?m:function(t,e,r){var n,o,u,i;if("object"!=typeof t||null===t||"[object Array]"===h.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===h.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(_.call(t,e)||S.call(t,e)?(n=t.__proto__,t.__proto__=j,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),u="get"in r,i="set"in r,o&&(u||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&w&&w.call(t,e,r.get),i&&O&&O.call(t,e,r.set),t};var P=d;function E(t,e,r){P(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function I(t){return"string"==typeof t}var T=String.prototype.valueOf;var A=c();function N(t){return"object"==typeof t&&(t instanceof String||(A?function(t){try{return T.call(t),!0}catch(t){return!1}}(t):"[object String]"===y(t)))}function k(t){return I(t)||N(t)}function x(t){return"number"==typeof t}E(k,"isPrimitive",I),E(k,"isObject",N);var B=Number,V=B.prototype.toString;var D=c();function F(t){return"object"==typeof t&&(t instanceof B||(D?function(t){try{return V.call(t),!0}catch(t){return!1}}(t):"[object Number]"===y(t)))}function L(t){return x(t)||F(t)}function G(t){return t!=t}function Y(t){return x(t)&&G(t)}function C(t){return F(t)&&G(t.valueOf())}function M(t){return Y(t)||C(t)}E(L,"isPrimitive",x),E(L,"isObject",F),E(M,"isPrimitive",Y),E(M,"isObject",C);var X=Number.POSITIVE_INFINITY,H=B.NEGATIVE_INFINITY,W=Math.floor;function R(t){return W(t)===t}function U(t){return t<X&&t>H&&R(t)}function q(t){return x(t)&&U(t)}function z(t){return F(t)&&U(t.valueOf())}function J(t){return q(t)||z(t)}E(J,"isPrimitive",q),E(J,"isObject",z);var K=Object.prototype.propertyIsEnumerable;var Q=!K.call("beep","0");function Z(t,e){var r;return null!=t&&(!(r=K.call(t,e))&&Q&&k(t)?!Y(e=+e)&&q(e)&&e>=0&&e<t.length:r)}var $=Array.isArray?Array.isArray:function(t){return"[object Array]"===y(t)};var tt=v?b:function(t){return null!==t&&"object"==typeof t&&!$(t)&&"number"==typeof t.length&&R(t.length)&&t.length>=0&&t.length<=4294967295&&a(t,"callee")&&!Z(t,"callee")},et=Array.prototype.slice;function rt(t){return null!==t&&"object"==typeof t}E(rt,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!$(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(rt));var nt=Z((function(){}),"prototype"),ot=!Z({toString:null},"toString");function ut(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&R(t.length)&&t.length>=0&&t.length<=9007199254740991}function it(t,e,r){var n,o;if(!ut(t)&&!I(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!q(r))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+r+"`.");if(r>=0){if(r>=n)return-1;o=r}else(o=n+r)<0&&(o=0)}else o=0;if(M(e)){for(;o<n;o++)if(M(t[o]))return o}else for(;o<n;o++)if(t[o]===e)return o;return-1}var ct=/./;function ft(t){return"boolean"==typeof t}var lt=Boolean.prototype.toString;var at=c();function pt(t){return"object"==typeof t&&(t instanceof Boolean||(at?function(t){try{return lt.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===y(t)))}function st(t){return ft(t)||pt(t)}function yt(){return new Function("return this;")()}E(st,"isPrimitive",ft),E(st,"isObject",pt);var bt="object"==typeof self?self:null,vt="object"==typeof window?window:null,gt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},dt="object"==typeof gt?gt:null;var mt=function(t){if(arguments.length){if(!ft(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return yt()}if(bt)return bt;if(vt)return vt;if(dt)return dt;throw new Error("unexpected error. Unable to resolve global object.")}(),jt=mt.document&&mt.document.childNodes,ht=Int8Array;function wt(){return/^\s*function\s*([^(]*)/i}var Ot=/^\s*function\s*([^(]*)/i;function _t(t){var e,r,n,o;if(("Object"===(r=y(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=Ot.exec(n.toString()))return e[1]}return rt(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}E(wt,"REGEXP",Ot);var St="function"==typeof ct||"object"==typeof ht||"function"==typeof jt?function(t){return _t(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?_t(t).toLowerCase():e};function Pt(t){return t.constructor&&t.constructor.prototype===t}var Et=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],It="undefined"==typeof window?void 0:window;var Tt=function(){var t;if("undefined"===St(It))return!1;for(t in It)try{-1===it(Et,t)&&a(It,t)&&null!==It[t]&&"object"===St(It[t])&&Pt(It[t])}catch(t){return!0}return!1}(),At="undefined"!=typeof window;var Nt,kt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Nt=u?function(){return 2!==(o(arguments)||"").length}(1,2)?function(t){return tt(t)?o(et.call(t)):o(t)}:o:function(t){var e,r,n,o,u,i,c;if(o=[],tt(t)){for(c=0;c<t.length;c++)o.push(c.toString());return o}if("string"==typeof t){if(t.length>0&&!a(t,"0"))for(c=0;c<t.length;c++)o.push(c.toString())}else{if(!1==(n="function"==typeof t)&&!rt(t))return o;r=nt&&n}for(u in t)r&&"prototype"===u||!a(t,u)||o.push(String(u));if(ot)for(e=function(t){if(!1===At&&!Tt)return Pt(t);try{return Pt(t)}catch(t){return!1}}(t),c=0;c<kt.length;c++)i=kt[c],e&&"constructor"===i||!a(t,i)||o.push(String(i));return o};var xt=Nt;var Bt=r?function(t){return n(Object(t))}:function(t){return xt(Object(t))},Vt=void 0!==Object.getOwnPropertySymbols,Dt=Object.getOwnPropertySymbols;var Ft=Vt?function(t){return Dt(Object(t))}:function(){return[]},Lt=void 0!==Object.getOwnPropertyDescriptor,Gt=Object.getOwnPropertyDescriptor;var Yt=Lt?function(t,e){var r;return null==t||void 0===(r=Gt(t,e))?null:r}:function(t,e){return a(t,e)?{configurable:!0,enumerable:!0,writable:!0,value:t[e]}:null};return t?function(t){return e(Object(t))}:function(t){var e,r,n,o,u;for(o={},r=Bt(t),u=0;u<r.length;u++)(n=Yt(t,r[u]))&&P(o,r[u],{configurable:!0,enumerable:!0,writable:!0,value:n});for(e=Ft(t),u=0;u<e.length;u++)(n=Yt(t,e[u]))&&P(o,e[u],{configurable:!0,enumerable:!0,writable:!0,value:n});return o}}));
//# sourceMappingURL=browser.js.map
