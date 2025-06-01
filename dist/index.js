"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var x=o(function(H,p){
var _=require('@stdlib/blas-base-scabs1/dist'),b=require('@stdlib/complex-float32-base-mul/dist'),E=require('@stdlib/complex-float32-base-add/dist');function O(e,r,u,i,v,a,s,n){var c,t,q;if(e<=0||_(r)===0)return a;for(c=v,t=n,q=0;q<e;q++)a.set(E(b(r,u.get(c)),a.get(t)),t),c+=i,t+=s;return a}p.exports=O
});var m=o(function(I,d){
var y=require('@stdlib/strided-base-stride2offset/dist'),k=x();function w(e,r,u,i,v,a){var s=y(e,i),n=y(e,a);return k(e,r,u,i,s,v,a,n)}d.exports=w
});var l=o(function(J,g){
var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=m(),A=x();z(j,"ndarray",A);g.exports=j
});var B=require("path").join,C=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),F=l(),f,R=C(B(__dirname,"./native.js"));D(R)?f=F:f=R;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
