module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t){e.exports=require("react")},function(e,t,r){"use strict";r.r(t),r.d(t,"Pagination",(function(){return u}));var n=r(0),o=r.n(n),u=function(e){for(var t=e.totalPosts,r=e.postsPerPage,n=e.paginate,u=e.color,i=e.bgColor,l=e.boxHeight,c=e.boxWidth,a=e.justify,f=[],s=1;s<=Math.ceil(t/r);s++)f.push(s);return o.a.createElement("div",{style:{display:"flex",justifyContent:a||"space-evenly"}},f.map((function(e){return o.a.createElement("div",{onClick:function(){return n(e)},style:{display:"flex",justifyContent:"center",alignItems:"center",color:u||"white",backgroundColor:i||"skyblue",width:c||"40px",height:l||"40px",cursor:"pointer"}},e)})))}}]);