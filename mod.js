// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var s=Math.abs,l=String.prototype.toLowerCase,u=String.prototype.toUpperCase,p=String.prototype.replace,f=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,y=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function w(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":s(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,v,"$1e"),n=p.call(n,b,"e"),n=p.call(n,y,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,f,"e+0$1"),n=p.call(n,g,"e-0$1"),r.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,h,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===u.call(r.specifier)?u.call(n):l.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var E=String.fromCharCode,_=Array.isArray;function S(r){return r!=r}function k(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function x(r){var e,t,n,a,o,s,l,u,p,f,g,d,h;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(s="",l=1,u=0;u<r.length;u++)if(n=r[u],"string"==typeof n)s+=n;else{if(e=void 0!==n.precision,!(n=k(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,S(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!S(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(o)?String(n.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(f=n.arg,g=n.width,d=n.padRight,h=void 0,(h=g-f.length)<0?f:f=d?f+m(h):m(h)+f)),s+=n.arg||"",l+=1}return s}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function j(r){var e,t,n,i;for(t=[],i=0,n=T.exec(r);n;)(e=r.slice(i,T.lastIndex-n[0].length)).length&&t.push(e),t.push(F(n)),i=T.lastIndex,n=T.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function A(r){var e,t;if("string"!=typeof r)throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[j(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return x.apply(null,e)}var I=Object.prototype,V=I.toString,O=I.__defineGetter__,P=I.__defineSetter__,$=I.__lookupGetter__,C=I.__lookupSetter__;var R=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&($.call(r,e)||C.call(r,e)?(n=r.__proto__,r.__proto__=I,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&O&&O.call(r,e,t.get),o&&P&&P.call(r,e,t.set),r};function N(r,e,t){R(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function L(r,e){return e>0?0:(1-r)*e}function M(r){return Math.abs(r)}function Z(r){return r.re}function G(r){return r.im}var W="function"==typeof Math.fround?Math.fround:null;var Y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function B(){return Y&&"symbol"==typeof Symbol.toStringTag}var U=Object.prototype.toString;var X=Object.prototype.hasOwnProperty;var z="function"==typeof Symbol?Symbol:void 0,J="function"==typeof z?z.toStringTag:"";var q=B()?function(r){var e,t,n,i,a;if(null==r)return U.call(r);t=r[J],a=J,e=null!=(i=r)&&X.call(i,a);try{r[J]=void 0}catch(e){return U.call(r)}return n=U.call(r),e?r[J]=t:delete r[J],n}:function(r){return U.call(r)},D="function"==typeof Float32Array;var H=Number.POSITIVE_INFINITY,K="function"==typeof Float32Array?Float32Array:null;var Q="function"==typeof Float32Array?Float32Array:void 0;var rr=new(function(){var r,e,t;if("function"!=typeof K)return!1;try{e=new K([1,3.14,-3.14,5e40]),t=e,r=(D&&t instanceof Float32Array||"[object Float32Array]"===q(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===H}catch(e){r=!1}return r}()?Q:function(){throw new Error("not implemented")})(1);var er="function"==typeof W?W:function(r){return rr[0]=r,rr[0]};function tr(r){return"number"==typeof r}var nr=Number,ir=nr.prototype.toString;var ar=B();function or(r){return"object"==typeof r&&(r instanceof nr||(ar?function(r){try{return ir.call(r),!0}catch(r){return!1}}(r):"[object Number]"===q(r)))}function cr(r){return tr(r)||or(r)}function sr(r,e){if(!(this instanceof sr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!tr(r))throw new TypeError(A("invalid argument. Real component must be a number. Value: `%s`.",r));if(!tr(e))throw new TypeError(A("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return R(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:er(r)}),R(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:er(e)}),this}function lr(r,e){return new sr(er(Z(r)+Z(e)),er(G(r)+G(e)))}function ur(r,e,t,n,i,a,o,c){var s,l,u,p,f,g,d,h,y,b,v,w;if(r<=0)return a;if(0===M(Z(p=e))+M(G(p)))return a;for(s=i,l=c,u=0;u<r;u++)a.set(lr((f=e,g=t.get(s),d=void 0,h=void 0,y=void 0,b=void 0,v=void 0,w=void 0,d=Z(f),h=Z(g),y=G(f),b=G(g),v=er(d*h)-er(y*b),w=er(d*b)+er(y*h),new sr(er(v),er(w))),a.get(l)),l),s+=n,l+=o;return a}function pr(r,e,t,n,i,a){return ur(r,e,t,n,L(r,n),i,a,L(r,a))}N(cr,"isPrimitive",tr),N(cr,"isObject",or),N(sr,"BYTES_PER_ELEMENT",4),N(sr.prototype,"BYTES_PER_ELEMENT",4),N(sr.prototype,"byteLength",8),N(sr.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),N(sr.prototype,"toJSON",(function(){var r={type:"Complex64"};return r.re=this.re,r.im=this.im,r})),N(pr,"ndarray",ur);export{pr as default,ur as ndarray};
//# sourceMappingURL=mod.js.map
