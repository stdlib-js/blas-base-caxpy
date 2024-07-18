"use strict";var f=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var x=f(function(G,c){
var _=require('@stdlib/blas-base-scabs1/dist'),b=require('@stdlib/math-base-ops-cmulf/dist'),E=require('@stdlib/complex-float32-base-add/dist');function O(e,r,u,i,v,a,s,n){var q,t,o;if(e<=0||_(r)===0)return a;for(q=v,t=n,o=0;o<e;o++)a.set(E(b(r,u.get(q)),a.get(t)),t),q+=i,t+=s;return a}c.exports=O
});var m=f(function(H,d){
var y=require('@stdlib/strided-base-stride2offset/dist'),h=x();function k(e,r,u,i,v,a){var s=y(e,i),n=y(e,a);return h(e,r,u,i,s,v,a,n)}d.exports=k
});var g=f(function(I,l){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=m(),z=x();w(j,"ndarray",z);l.exports=j
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),C=require('@stdlib/assert-is-error/dist'),D=g(),p,R=B(A(__dirname,"./native.js"));C(R)?p=D:p=R;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
