// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-try-require@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-error@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-scabs1@v0.0.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-base-mul@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-base-add@v0.1.0-esm/index.mjs";function u(t){if(t.__esModule)return t;var e=t.default;if("function"==typeof e){var r=function t(){return this instanceof t?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach((function(e){var n=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(r,e,n.get?n:{enumerable:!0,get:function(){return t[e]}})})),r}function l(t,e){for(var r=0,n=t.length-1;n>=0;n--){var s=t[n];"."===s?t.splice(n,1):".."===s?(t.splice(n,1),r++):r&&(t.splice(n,1),r--)}if(e)for(;r--;r)t.unshift("..");return t}var a=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,f=function(t){return a.exec(t).slice(1)};function c(){for(var t="",e=!1,r=arguments.length-1;r>=-1&&!e;r--){var n=r>=0?arguments[r]:"/";if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(t=n+"/"+t,e="/"===n.charAt(0))}return(e?"/":"")+(t=l(y(t.split("/"),(function(t){return!!t})),!e).join("/"))||"."}function p(t){var e=m(t),r="/"===x(t,-1);return(t=l(y(t.split("/"),(function(t){return!!t})),!e).join("/"))||e||(t="."),t&&r&&(t+="/"),(e?"/":"")+t}function m(t){return"/"===t.charAt(0)}function d(){return p(y(Array.prototype.slice.call(arguments,0),(function(t,e){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))}function b(t,e){function r(t){for(var e=0;e<t.length&&""===t[e];e++);for(var r=t.length-1;r>=0&&""===t[r];r--);return e>r?[]:t.slice(e,r-e+1)}t=c(t).substr(1),e=c(e).substr(1);for(var n=r(t.split("/")),s=r(e.split("/")),i=Math.min(n.length,s.length),o=i,u=0;u<i;u++)if(n[u]!==s[u]){o=u;break}var l=[];for(u=o;u<n.length;u++)l.push("..");return(l=l.concat(s.slice(o))).join("/")}function h(t){var e=f(t),r=e[0],n=e[1];return r||n?(n&&(n=n.substr(0,n.length-1)),r+n):"."}function v(t,e){var r=f(t)[2];return e&&r.substr(-1*e.length)===e&&(r=r.substr(0,r.length-e.length)),r}function j(t){return f(t)[3]}var g={extname:j,basename:v,dirname:h,sep:"/",delimiter:":",relative:b,join:d,isAbsolute:m,normalize:p,resolve:c};function y(t,e){if(t.filter)return t.filter(e);for(var r=[],n=0;n<t.length;n++)e(t[n],n,t)&&r.push(t[n]);return r}var x="b"==="ab".substr(-1)?function(t,e,r){return t.substr(e,r)}:function(t,e,r){return e<0&&(e=t.length+e),t.substr(e,r)},_=u(Object.freeze({__proto__:null,basename:v,default:g,delimiter:":",dirname:h,extname:j,isAbsolute:m,join:d,normalize:p,relative:b,resolve:c,sep:"/"}));function A(t,e,r,n,u,l,a,f){var c,p,m;if(t<=0)return l;if(0===s(e))return l;for(c=u,p=f,m=0;m<t;m++)l.set(o(i(e,r.get(c)),l.get(p)),p),c+=n,p+=a;return l}function w(t,e,r,s,i,o){return A(t,e,r,s,n(t,s),i,o,n(t,o))}r(w,"ndarray",A);var O,k=t((0,_.join)("/home/runner/work/blas-base-caxpy/blas-base-caxpy/lib","./native.js")),z=O=e(k)?w:k;const{ndarray:E}=O;export{z as default,E as ndarray};
//# sourceMappingURL=index.mjs.map
