// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).propertyDescriptors=e()}(this,(function(){"use strict";var r=void 0!==Object.getOwnPropertyDescriptors,e=Object,t=e.getOwnPropertyDescriptors;var n=void 0!==Object.getOwnPropertyNames,i=e.getOwnPropertyNames;function o(r){return Object.keys(Object(r))}var a=void 0!==Object.keys;var u="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function c(){return u&&"symbol"==typeof Symbol.toStringTag}var l=Object.prototype.toString;var f=Object.prototype.hasOwnProperty;function s(r,e){return null!=r&&f.call(r,e)}var p="function"==typeof Symbol?Symbol:void 0,g="function"==typeof p?p.toStringTag:"";var b,y=c()?function(r){var e,t,n;if(null==r)return l.call(r);t=r[g],e=s(r,g);try{r[g]=void 0}catch(e){return l.call(r)}return n=l.call(r),e?r[g]=t:delete r[g],n}:function(r){return l.call(r)};function d(r){return"[object Arguments]"===y(r)}b=function(){return d(arguments)}();var h=b,v="function"==typeof Object.defineProperty?Object.defineProperty:null;var w=Object.defineProperty;function m(r){return"number"==typeof r}function j(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function O(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+j(i):j(i)+r,n&&(r="-"+r)),r}var S=String.prototype.toLowerCase,E=String.prototype.toUpperCase;function _(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!m(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=O(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=O(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===E.call(r.specifier)?E.call(t):S.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function k(r){return"string"==typeof r}var T=Math.abs,x=String.prototype.toLowerCase,P=String.prototype.toUpperCase,I=String.prototype.replace,A=/e\+(\d)$/,V=/e-(\d)$/,F=/^(\d+)$/,N=/^(\d+)e/,$=/\.0$/,C=/\.0*e/,B=/(\..*[^0])0*e/;function L(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!m(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":T(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=I.call(t,B,"$1e"),t=I.call(t,C,"e"),t=I.call(t,$,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=I.call(t,A,"e+0$1"),t=I.call(t,V,"e-0$1"),r.alternate&&(t=I.call(t,F,"$1."),t=I.call(t,N,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===P.call(r.specifier)?P.call(t):x.call(t)}function R(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function D(r,e,t){var n=e-r.length;return n<0?r:r=t?r+R(n):R(n)+r}var G=String.fromCharCode,W=isNaN,X=Array.isArray;function Z(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function M(r){var e,t,n,i,o,a,u,c,l;if(!X(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(k(n=r[c]))a+=n;else{if(e=void 0!==n.precision,!(n=Z(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,W(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,W(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=_(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!W(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=W(o)?String(n.arg):G(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=L(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=O(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=D(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var Y=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function H(r){var e,t,n,i;for(t=[],i=0,n=Y.exec(r);n;)(e=r.slice(i,Y.lastIndex-n[0].length)).length&&t.push(e),t.push(U(n)),i=Y.lastIndex,n=Y.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function z(r){return"string"==typeof r}function q(r){var e,t,n;if(!z(r))throw new TypeError(q("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=H(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return M.apply(null,t)}var J,K=Object.prototype,Q=K.toString,rr=K.__defineGetter__,er=K.__defineSetter__,tr=K.__lookupGetter__,nr=K.__lookupSetter__;J=function(){try{return v({},"x",{}),!0}catch(r){return!1}}()?w:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===Q.call(r))throw new TypeError(q("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===Q.call(t))throw new TypeError(q("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(tr.call(r,e)||nr.call(r,e)?(n=r.__proto__,r.__proto__=K,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&rr&&rr.call(r,e,t.get),a&&er&&er.call(r,e,t.set),r};var ir=J;function or(r,e,t){ir(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function ar(r){return"string"==typeof r}var ur=String.prototype.valueOf;var cr=c();function lr(r){return"object"==typeof r&&(r instanceof String||(cr?function(r){try{return ur.call(r),!0}catch(r){return!1}}(r):"[object String]"===y(r)))}function fr(r){return ar(r)||lr(r)}function sr(r){return"number"==typeof r}or(fr,"isPrimitive",ar),or(fr,"isObject",lr);var pr=Number,gr=pr.prototype.toString;var br=c();function yr(r){return"object"==typeof r&&(r instanceof pr||(br?function(r){try{return gr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===y(r)))}function dr(r){return sr(r)||yr(r)}function hr(r){return r!=r}function vr(r){return sr(r)&&hr(r)}function wr(r){return yr(r)&&hr(r.valueOf())}function mr(r){return vr(r)||wr(r)}or(dr,"isPrimitive",sr),or(dr,"isObject",yr),or(mr,"isPrimitive",vr),or(mr,"isObject",wr);var jr=Number.POSITIVE_INFINITY,Or=pr.NEGATIVE_INFINITY,Sr=Math.floor;function Er(r){return Sr(r)===r}function _r(r){return r<jr&&r>Or&&Er(r)}function kr(r){return sr(r)&&_r(r)}function Tr(r){return yr(r)&&_r(r.valueOf())}function xr(r){return kr(r)||Tr(r)}or(xr,"isPrimitive",kr),or(xr,"isObject",Tr);var Pr=Object.prototype.propertyIsEnumerable;var Ir=!Pr.call("beep","0");function Ar(r,e){var t;return null!=r&&(!(t=Pr.call(r,e))&&Ir&&fr(r)?!vr(e=+e)&&kr(e)&&e>=0&&e<r.length:t)}var Vr=Array.isArray?Array.isArray:function(r){return"[object Array]"===y(r)};var Fr=h?d:function(r){return null!==r&&"object"==typeof r&&!Vr(r)&&"number"==typeof r.length&&Er(r.length)&&r.length>=0&&r.length<=4294967295&&s(r,"callee")&&!Ar(r,"callee")},Nr=Array.prototype.slice;function $r(r){return null!==r&&"object"==typeof r}or($r,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(q("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Vr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}($r));var Cr=Ar((function(){}),"prototype"),Br=!Ar({toString:null},"toString");function Lr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Er(r.length)&&r.length>=0&&r.length<=9007199254740991}function Rr(r,e,t){var n,i;if(!Lr(r)&&!ar(r))throw new TypeError(q("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!kr(t))throw new TypeError(q("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(mr(e)){for(;i<n;i++)if(mr(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1}var Dr=/./;function Gr(r){return"boolean"==typeof r}var Wr=Boolean,Xr=Boolean.prototype.toString;var Zr=c();function Mr(r){return"object"==typeof r&&(r instanceof Wr||(Zr?function(r){try{return Xr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===y(r)))}function Yr(r){return Gr(r)||Mr(r)}function Ur(){return new Function("return this;")()}or(Yr,"isPrimitive",Gr),or(Yr,"isObject",Mr);var Hr="object"==typeof self?self:null,zr="object"==typeof window?window:null,qr="object"==typeof global?global:null,Jr="object"==typeof globalThis?globalThis:null;var Kr=function(r){if(arguments.length){if(!Gr(r))throw new TypeError(q("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Ur()}if(Jr)return Jr;if(Hr)return Hr;if(zr)return zr;if(qr)return qr;throw new Error("unexpected error. Unable to resolve global object.")}(),Qr=Kr.document&&Kr.document.childNodes,re=Int8Array;function ee(){return/^\s*function\s*([^(]*)/i}var te=/^\s*function\s*([^(]*)/i;function ne(r){var e,t,n,i;if(("Object"===(t=y(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=te.exec(n.toString()))return e[1]}return $r(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}or(ee,"REGEXP",te);var ie="function"==typeof Dr||"object"==typeof re||"function"==typeof Qr?function(r){return ne(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?ne(r).toLowerCase():e};function oe(r){return r.constructor&&r.constructor.prototype===r}var ae=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],ue="undefined"==typeof window?void 0:window;var ce=function(){var r;if("undefined"===ie(ue))return!1;for(r in ue)try{-1===Rr(ae,r)&&s(ue,r)&&null!==ue[r]&&"object"===ie(ue[r])&&oe(ue[r])}catch(r){return!0}return!1}(),le="undefined"!=typeof window;var fe,se=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];fe=a?function(){return 2!==(o(arguments)||"").length}(1,2)?function(r){return Fr(r)?o(Nr.call(r)):o(r)}:o:function(r){var e,t,n,i,o,a,u;if(i=[],Fr(r)){for(u=0;u<r.length;u++)i.push(u.toString());return i}if("string"==typeof r){if(r.length>0&&!s(r,"0"))for(u=0;u<r.length;u++)i.push(u.toString())}else{if(!1==(n="function"==typeof r)&&!$r(r))return i;t=Cr&&n}for(o in r)t&&"prototype"===o||!s(r,o)||i.push(String(o));if(Br)for(e=function(r){if(!1===le&&!ce)return oe(r);try{return oe(r)}catch(r){return!1}}(r),u=0;u<se.length;u++)a=se[u],e&&"constructor"===a||!s(r,a)||i.push(String(a));return i};var pe=fe;var ge=n?function(r){return i(e(r))}:function(r){return pe(e(r))},be=void 0!==Object.getOwnPropertySymbols,ye=e.getOwnPropertySymbols;var de=be?function(r){return ye(e(r))}:function(){return[]},he=void 0!==Object.getOwnPropertyDescriptor,ve=Object.getOwnPropertyDescriptor;var we=he?function(r,e){var t;return null==r||void 0===(t=ve(r,e))?null:t}:function(r,e){return s(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null};return r?function(r){return t(e(r))}:function(r){var e,t,n,i,o;for(i={},t=ge(r),o=0;o<t.length;o++)(n=we(r,t[o]))&&ir(i,t[o],{configurable:!0,enumerable:!0,writable:!0,value:n});for(e=de(r),o=0;o<e.length;o++)(n=we(r,e[o]))&&ir(i,e[o],{configurable:!0,enumerable:!0,writable:!0,value:n});return i}}));
//# sourceMappingURL=index.js.map
