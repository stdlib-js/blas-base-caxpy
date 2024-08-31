// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var t=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}function e(r,e){for(var t=0,n=r.length-1;n>=0;n--){var o=r[n];"."===o?r.splice(n,1):".."===o?(r.splice(n,1),t++):t&&(r.splice(n,1),t--)}if(e)for(;t--;t)r.unshift("..");return r}var t=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,n=function(r){return t.exec(r).slice(1)};function o(){for(var r="",t=!1,n=arguments.length-1;n>=-1&&!t;n--){var o=n>=0?arguments[n]:"/";if("string"!=typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(r=o+"/"+r,t="/"===o.charAt(0))}return(t?"/":"")+(r=e(g(r.split("/"),(function(r){return!!r})),!t).join("/"))||"."}function i(r){var t=a(r),n="/"===y(r,-1);return(r=e(g(r.split("/"),(function(r){return!!r})),!t).join("/"))||t||(r="."),r&&n&&(r+="/"),(t?"/":"")+r}function a(r){return"/"===r.charAt(0)}function u(){return i(g(Array.prototype.slice.call(arguments,0),(function(r,e){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function c(r,e){function t(r){for(var e=0;e<r.length&&""===r[e];e++);for(var t=r.length-1;t>=0&&""===r[t];t--);return e>t?[]:r.slice(e,t-e+1)}r=o(r).substr(1),e=o(e).substr(1);for(var n=t(r.split("/")),i=t(e.split("/")),a=Math.min(n.length,i.length),u=a,c=0;c<a;c++)if(n[c]!==i[c]){u=c;break}var l=[];for(c=u;c<n.length;c++)l.push("..");return(l=l.concat(i.slice(u))).join("/")}function l(r){var e=n(r),t=e[0],o=e[1];return t||o?(o&&(o=o.substr(0,o.length-1)),t+o):"."}function s(r,e){var t=n(r)[2];return e&&t.substr(-1*e.length)===e&&(t=t.substr(0,t.length-e.length)),t}function f(r){return n(r)[3]}var p={extname:f,basename:s,dirname:l,sep:"/",delimiter:":",relative:c,join:u,isAbsolute:a,normalize:i,resolve:o};function g(r,e){if(r.filter)return r.filter(e);for(var t=[],n=0;n<r.length;n++)e(r[n],n,r)&&t.push(r[n]);return t}var y="b"==="ab".substr(-1)?function(r,e,t){return r.substr(e,t)}:function(r,e,t){return e<0&&(e=r.length+e),r.substr(e,t)},b=r(Object.freeze({__proto__:null,basename:s,default:p,delimiter:":",dirname:l,extname:f,isAbsolute:a,join:u,normalize:i,relative:c,resolve:o,sep:"/"}));var h=Object,d=/./,v="function"==typeof Object.defineProperty?Object.defineProperty:null;var w=Object.defineProperty;function m(r){return"number"==typeof r}function j(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function E(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+j(o):j(o)+r,n&&(r="-"+r)),r}var _=String.prototype.toLowerCase,S=String.prototype.toUpperCase;function A(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!m(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=E(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=E(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===S.call(r.specifier)?S.call(t):_.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var O=Math.abs,x=String.prototype.toLowerCase,T=String.prototype.toUpperCase,k=String.prototype.replace,F=/e\+(\d)$/,P=/e-(\d)$/,V=/^(\d+)$/,I=/^(\d+)e/,R=/\.0$/,C=/\.0*e/,M=/(\..*[^0])0*e/;function $(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!m(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":O(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=k.call(t,M,"$1e"),t=k.call(t,C,"e"),t=k.call(t,R,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=k.call(t,F,"e+0$1"),t=k.call(t,P,"e-0$1"),r.alternate&&(t=k.call(t,V,"$1."),t=k.call(t,I,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===T.call(r.specifier)?T.call(t):x.call(t)}function N(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var B=String.fromCharCode,L=Array.isArray;function G(r){return r!=r}function Z(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function q(r){var e,t,n,o,i,a,u,c,l,s,f,p,g;if(!L(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(n=r[c],"string"==typeof n)a+=n;else{if(e=void 0!==n.precision,!(n=Z(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(o=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,G(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,G(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=A(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!G(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=G(i)?String(n.arg):B(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=$(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=E(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(s=n.arg,f=n.width,p=n.padRight,g=void 0,(g=f-s.length)<0?s:s=p?s+N(g):N(g)+s)),a+=n.arg||"",u+=1}return a}var z=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function W(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function U(r){var e,t,n,o;for(t=[],o=0,n=z.exec(r);n;)(e=r.slice(o,z.lastIndex-n[0].length)).length&&t.push(e),t.push(W(n)),o=z.lastIndex,n=z.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function X(r){var e,t;if("string"!=typeof r)throw new TypeError(X("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[U(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return q.apply(null,e)}var Y,D=Object.prototype,J=D.toString,H=D.__defineGetter__,K=D.__defineSetter__,Q=D.__lookupGetter__,rr=D.__lookupSetter__;Y=function(){try{return v({},"x",{}),!0}catch(r){return!1}}()?w:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===J.call(r))throw new TypeError(X("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===J.call(t))throw new TypeError(X("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(Q.call(r,e)||rr.call(r,e)?(n=r.__proto__,r.__proto__=D,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&H&&H.call(r,e,t.get),a&&K&&K.call(r,e,t.set),r};var er=Y;function tr(r,e,t){er(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function nr(r){return"boolean"==typeof r}var or="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function ir(){return or&&"symbol"==typeof Symbol.toStringTag}var ar=Object.prototype.toString;var ur=Object.prototype.hasOwnProperty;var cr,lr="function"==typeof Symbol?Symbol:void 0,sr="function"==typeof lr?lr.toStringTag:"";cr=ir()?function(r){var e,t,n,o,i;if(null==r)return ar.call(r);t=r[sr],i=sr,e=null!=(o=r)&&ur.call(o,i);try{r[sr]=void 0}catch(e){return ar.call(r)}return n=ar.call(r),e?r[sr]=t:delete r[sr],n}:function(r){return ar.call(r)};var fr=cr,pr=Boolean,gr=Boolean.prototype.toString;var yr=ir();function br(r){return"object"==typeof r&&(r instanceof pr||(yr?function(r){try{return gr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===fr(r)))}function hr(r){return nr(r)||br(r)}tr(hr,"isPrimitive",nr),tr(hr,"isObject",br);var dr="object"==typeof self?self:null,vr="object"==typeof window?window:null,wr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},mr="object"==typeof wr?wr:null,jr="object"==typeof globalThis?globalThis:null;var Er=function(r){if(arguments.length){if(!nr(r))throw new TypeError(X("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(jr)return jr;if(dr)return dr;if(vr)return vr;if(mr)return mr;throw new Error("unexpected error. Unable to resolve global object.")}(),_r=Er.document&&Er.document.childNodes,Sr=Int8Array;function Ar(){return/^\s*function\s*([^(]*)/i}var Or,xr=/^\s*function\s*([^(]*)/i;tr(Ar,"REGEXP",xr),Or=Array.isArray?Array.isArray:function(r){return"[object Array]"===fr(r)};var Tr=Or;function kr(r){return null!==r&&"object"==typeof r}var Fr=function(r){if("function"!=typeof r)throw new TypeError(X("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Tr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(kr);function Pr(r){var e,t,n,o;if(("Object"===(t=fr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=xr.exec(n.toString()))return e[1]}return kr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}tr(kr,"isObjectLikeArray",Fr);var Vr="function"==typeof d||"object"==typeof Sr||"function"==typeof _r?function(r){return Pr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Pr(r).toLowerCase():e};var Ir,Rr,Cr=Object.getPrototypeOf;Rr=Object.getPrototypeOf,Ir="function"===Vr(Rr)?Cr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===fr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Mr=Ir;function $r(r){return null==r?null:(r=h(r),Mr(r))}function Nr(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===fr(r))return!0;r=$r(r)}return!1}function Br(r,e){return e>0?0:(1-r)*e}function Lr(r){return Math.abs(r)}function Gr(r){return r.re}function Zr(r){return r.im}var qr="function"==typeof Math.fround?Math.fround:null,zr="function"==typeof Float32Array;var Wr=Number.POSITIVE_INFINITY,Ur="function"==typeof Float32Array?Float32Array:null;var Xr,Yr="function"==typeof Float32Array?Float32Array:void 0;Xr=function(){var r,e;if("function"!=typeof Ur)return!1;try{r=function(r){return zr&&r instanceof Float32Array||"[object Float32Array]"===fr(r)}(e=new Ur([1,3.14,-3.14,5e40]))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===Wr}catch(e){r=!1}return r}()?Yr:function(){throw new Error("not implemented")};var Dr=new Xr(1);var Jr="function"==typeof qr?qr:function(r){return Dr[0]=r,Dr[0]};function Hr(r){return"number"==typeof r}var Kr=Number,Qr=Kr.prototype.toString;var re=ir();function ee(r){return"object"==typeof r&&(r instanceof Kr||(re?function(r){try{return Qr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===fr(r)))}function te(r){return Hr(r)||ee(r)}function ne(r,e){if(!(this instanceof ne))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Hr(r))throw new TypeError(X("invalid argument. Real component must be a number. Value: `%s`.",r));if(!Hr(e))throw new TypeError(X("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return er(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Jr(r)}),er(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Jr(e)}),this}function oe(r,e){return new ne(Jr(Gr(r)+Gr(e)),Jr(Zr(r)+Zr(e)))}function ie(r,e,t,n,o,i,a,u){var c,l,s,f,p,g,y,b,h,d,v,w;if(r<=0)return i;if(0===Lr(Gr(f=e))+Lr(Zr(f)))return i;for(c=o,l=u,s=0;s<r;s++)i.set(oe((p=e,g=t.get(c),y=void 0,b=void 0,h=void 0,d=void 0,v=void 0,w=void 0,y=Gr(p),b=Gr(g),h=Zr(p),d=Zr(g),v=Jr(y*b)-Jr(h*d),w=Jr(y*d)+Jr(h*b),new ne(Jr(v),Jr(w))),i.get(l)),l),c+=n,l+=a;return i}function ae(r,e,t,n,o,i){return ie(r,e,t,n,Br(r,n),o,i,Br(r,i))}tr(te,"isPrimitive",Hr),tr(te,"isObject",ee),tr(ne,"BYTES_PER_ELEMENT",4),tr(ne.prototype,"BYTES_PER_ELEMENT",4),tr(ne.prototype,"byteLength",8),tr(ne.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),tr(ne.prototype,"toJSON",(function(){var r={type:"Complex64"};return r.re=this.re,r.im=this.im,r})),tr(ae,"ndarray",ie);var ue,ce=function(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return Nr(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}((0,b.join)("/home/runner/work/blas-base-caxpy/blas-base-caxpy/lib","./native.js")),le=ue=Nr(ce)?ae:ce;const{ndarray:se}=ue;export{le as default,se as ndarray};
//# sourceMappingURL=mod.js.map
