"use strict";var i=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var n=i(function(g,o){
var v=require('@stdlib/math-base-assert-is-nan/dist'),d=require('@stdlib/math-base-special-abs/dist');function m(e,r,a,s){var t,u;return e<=0?NaN:e===1||a===0?r[0]:(t=r[s],u=r[s+(e-1)*a],v(t)||v(u)?NaN:(t=d(t),u=d(u),t>u?t:u))}o.exports=m
});var c=i(function(h,q){
var p=require('@stdlib/strided-base-stride2offset/dist'),y=n();function S(e,r,a){return y(e,r,a,p(e,a))}q.exports=S
});var b=i(function(j,x){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),f=c(),N=n();l(f,"ndarray",N);x.exports=f
});var O=b();module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
