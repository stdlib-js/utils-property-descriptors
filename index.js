// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).propertyDescriptors=r()}(this,(function(){"use strict";var e=void 0!==Object.getOwnPropertyDescriptors,r=Object,t=r.getOwnPropertyDescriptors;var n=void 0!==Object.getOwnPropertyNames,i=r.getOwnPropertyNames;function o(e){return Object.keys(Object(e))}var a=void 0!==Object.keys;var u="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function c(){return u&&"symbol"==typeof Symbol.toStringTag}var l=Object.prototype.toString;var f=Object.prototype.hasOwnProperty;function s(e,r){return null!=e&&f.call(e,r)}var p="function"==typeof Symbol?Symbol:void 0,g="function"==typeof p?p.toStringTag:"";var b,d=c()?function(e){var r,t,n;if(null==e)return l.call(e);t=e[g],r=s(e,g);try{e[g]=void 0}catch(r){return l.call(e)}return n=l.call(e),r?e[g]=t:delete e[g],n}:function(e){return l.call(e)};function y(e){return"[object Arguments]"===d(e)}b=function(){return y(arguments)}();var h=b,v="function"==typeof Object.defineProperty?Object.defineProperty:null;var w=Object.defineProperty;function m(e){return"number"==typeof e}function j(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function O(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+j(i):j(i)+e,n&&(e="-"+e)),e}var S=String.prototype.toLowerCase,E=String.prototype.toUpperCase;function _(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!m(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=O(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=O(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===E.call(e.specifier)?E.call(t):S.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var k=Math.abs,T=String.prototype.toLowerCase,x=String.prototype.toUpperCase,P=String.prototype.replace,I=/e\+(\d)$/,A=/e-(\d)$/,V=/^(\d+)$/,F=/^(\d+)e/,N=/\.0$/,$=/\.0*e/,C=/(\..*[^0])0*e/;function B(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!m(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":k(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=P.call(t,C,"$1e"),t=P.call(t,$,"e"),t=P.call(t,N,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=P.call(t,I,"e+0$1"),t=P.call(t,A,"e-0$1"),e.alternate&&(t=P.call(t,V,"$1."),t=P.call(t,F,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===x.call(e.specifier)?x.call(t):T.call(t)}function L(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var R=String.fromCharCode,D=isNaN,G=Array.isArray;function W(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function X(e){var r,t,n,i,o,a,u,c,l,f,s,p,g;if(!G(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",u=1,c=0;c<e.length;c++)if(n=e[c],"string"==typeof n)a+=n;else{if(r=void 0!==n.precision,!(n=W(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,D(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,D(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=_(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!D(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=D(o)?String(n.arg):R(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=B(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=O(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(f=n.arg,s=n.width,p=n.padRight,g=void 0,(g=s-f.length)<0?f:f=p?f+L(g):L(g)+f)),a+=n.arg||"",u+=1}return a}var Z=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function M(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Y(e){var r,t,n,i;for(t=[],i=0,n=Z.exec(e);n;)(r=e.slice(i,Z.lastIndex-n[0].length)).length&&t.push(r),t.push(M(n)),i=Z.lastIndex,n=Z.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function U(e){var r,t;if("string"!=typeof e)throw new TypeError(U("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Y(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return X.apply(null,r)}var H,z=Object.prototype,q=z.toString,J=z.__defineGetter__,K=z.__defineSetter__,Q=z.__lookupGetter__,ee=z.__lookupSetter__;H=function(){try{return v({},"x",{}),!0}catch(e){return!1}}()?w:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===q.call(e))throw new TypeError(U("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===q.call(t))throw new TypeError(U("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Q.call(e,r)||ee.call(e,r)?(n=e.__proto__,e.__proto__=z,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&J&&J.call(e,r,t.get),a&&K&&K.call(e,r,t.set),e};var re=H;function te(e,r,t){re(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function ne(e){return"string"==typeof e}var ie=String.prototype.valueOf;var oe=c();function ae(e){return"object"==typeof e&&(e instanceof String||(oe?function(e){try{return ie.call(e),!0}catch(e){return!1}}(e):"[object String]"===d(e)))}function ue(e){return ne(e)||ae(e)}function ce(e){return"number"==typeof e}te(ue,"isPrimitive",ne),te(ue,"isObject",ae);var le=Number,fe=le.prototype.toString;var se=c();function pe(e){return"object"==typeof e&&(e instanceof le||(se?function(e){try{return fe.call(e),!0}catch(e){return!1}}(e):"[object Number]"===d(e)))}function ge(e){return ce(e)||pe(e)}function be(e){return e!=e}function de(e){return ce(e)&&be(e)}function ye(e){return pe(e)&&be(e.valueOf())}function he(e){return de(e)||ye(e)}te(ge,"isPrimitive",ce),te(ge,"isObject",pe),te(he,"isPrimitive",de),te(he,"isObject",ye);var ve=Number.POSITIVE_INFINITY,we=le.NEGATIVE_INFINITY,me=Math.floor;function je(e){return me(e)===e}function Oe(e){return e<ve&&e>we&&je(e)}function Se(e){return ce(e)&&Oe(e)}function Ee(e){return pe(e)&&Oe(e.valueOf())}function _e(e){return Se(e)||Ee(e)}te(_e,"isPrimitive",Se),te(_e,"isObject",Ee);var ke=Object.prototype.propertyIsEnumerable;var Te=!ke.call("beep","0");function xe(e,r){var t;return null!=e&&(!(t=ke.call(e,r))&&Te&&ue(e)?!de(r=+r)&&Se(r)&&r>=0&&r<e.length:t)}var Pe=Array.isArray?Array.isArray:function(e){return"[object Array]"===d(e)};var Ie=h?y:function(e){return null!==e&&"object"==typeof e&&!Pe(e)&&"number"==typeof e.length&&je(e.length)&&e.length>=0&&e.length<=4294967295&&s(e,"callee")&&!xe(e,"callee")},Ae=Array.prototype.slice;function Ve(e){return null!==e&&"object"==typeof e}te(Ve,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(U("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!Pe(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Ve));var Fe=xe((function(){}),"prototype"),Ne=!xe({toString:null},"toString"),$e=9007199254740991;function Ce(e,r,t){var n,i,o;if(!(o=e,"object"==typeof o&&null!==o&&"number"==typeof o.length&&je(o.length)&&o.length>=0&&o.length<=$e||ne(e)))throw new TypeError(U("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(0===(n=e.length))return-1;if(3===arguments.length){if(!Se(t))throw new TypeError(U("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(he(r)){for(;i<n;i++)if(he(e[i]))return i}else for(;i<n;i++)if(e[i]===r)return i;return-1}var Be=/./;function Le(e){return"boolean"==typeof e}var Re=Boolean,De=Boolean.prototype.toString;var Ge=c();function We(e){return"object"==typeof e&&(e instanceof Re||(Ge?function(e){try{return De.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===d(e)))}function Xe(e){return Le(e)||We(e)}te(Xe,"isPrimitive",Le),te(Xe,"isObject",We);var Ze="object"==typeof self?self:null,Me="object"==typeof window?window:null,Ye="object"==typeof global?global:null,Ue="object"==typeof globalThis?globalThis:null;var He=function(e){if(arguments.length){if(!Le(e))throw new TypeError(U("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(Ue)return Ue;if(Ze)return Ze;if(Me)return Me;if(Ye)return Ye;throw new Error("unexpected error. Unable to resolve global object.")}(),ze=He.document&&He.document.childNodes,qe=Int8Array;function Je(){return/^\s*function\s*([^(]*)/i}var Ke=/^\s*function\s*([^(]*)/i;function Qe(e){var r,t,n,i;if(("Object"===(t=d(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=Ke.exec(n.toString()))return r[1]}return Ve(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}te(Je,"REGEXP",Ke);var er="function"==typeof Be||"object"==typeof qe||"function"==typeof ze?function(e){return Qe(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?Qe(e).toLowerCase():r};function rr(e){return e.constructor&&e.constructor.prototype===e}var tr=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],nr="undefined"==typeof window?void 0:window;var ir=function(){var e;if("undefined"===er(nr))return!1;for(e in nr)try{-1===Ce(tr,e)&&s(nr,e)&&null!==nr[e]&&"object"===er(nr[e])&&rr(nr[e])}catch(e){return!0}return!1}(),or="undefined"!=typeof window;var ar,ur=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];ar=a?function(){return 2!==(o(arguments)||"").length}(1,2)?function(e){return Ie(e)?o(Ae.call(e)):o(e)}:o:function(e){var r,t,n,i,o,a,u;if(i=[],Ie(e)){for(u=0;u<e.length;u++)i.push(u.toString());return i}if("string"==typeof e){if(e.length>0&&!s(e,"0"))for(u=0;u<e.length;u++)i.push(u.toString())}else{if(!1==(n="function"==typeof e)&&!Ve(e))return i;t=Fe&&n}for(o in e)t&&"prototype"===o||!s(e,o)||i.push(String(o));if(Ne)for(r=function(e){if(!1===or&&!ir)return rr(e);try{return rr(e)}catch(e){return!1}}(e),u=0;u<ur.length;u++)a=ur[u],r&&"constructor"===a||!s(e,a)||i.push(String(a));return i};var cr=ar;var lr=n?function(e){return i(r(e))}:function(e){return cr(r(e))},fr=void 0!==Object.getOwnPropertySymbols,sr=r.getOwnPropertySymbols;var pr=fr?function(e){return sr(r(e))}:function(){return[]},gr=void 0!==Object.getOwnPropertyDescriptor,br=Object.getOwnPropertyDescriptor;var dr=gr?function(e,r){var t;return null==e||void 0===(t=br(e,r))?null:t}:function(e,r){return s(e,r)?{configurable:!0,enumerable:!0,writable:!0,value:e[r]}:null};return e?function(e){return t(r(e))}:function(e){var r,t,n,i,o;for(i={},t=lr(e),o=0;o<t.length;o++)(n=dr(e,t[o]))&&re(i,t[o],{configurable:!0,enumerable:!0,writable:!0,value:n});for(r=pr(e),o=0;o<r.length;o++)(n=dr(e,r[o]))&&re(i,r[o],{configurable:!0,enumerable:!0,writable:!0,value:n});return i}}));
//# sourceMappingURL=index.js.map
