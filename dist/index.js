!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VuejsPaginate=t():e.VuejsPaginate=t()}(this,function(){return function(e){function t(s){if(n[s])return n[s].exports;var i=n[s]={exports:{},id:s,loaded:!1};return e[s].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}var i=n(1),a=s(i);e.exports=a.default},function(e,t,n){n(2);var s=n(6)(n(7),n(8),"data-v-82963a40",null);e.exports=s.exports},function(e,t,n){var s=n(3);"string"==typeof s&&(s=[[e.id,s,""]]);n(5)(s,{});s.locals&&(e.exports=s.locals)},function(e,t,n){t=e.exports=n(4)(),t.push([e.id,"a[data-v-82963a40]{cursor:pointer}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var s={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(s[a]=!0)}for(i=0;i<t.length;i++){var r=t[i];"number"==typeof r[0]&&s[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="("+r[2]+") and ("+n+")"),e.push(r))}},e}},function(e,t,n){function s(e,t){for(var n=0;n<e.length;n++){var s=e[n],i=d[s.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](s.parts[a]);for(;a<s.parts.length;a++)i.parts.push(l(s.parts[a],t))}else{for(var r=[],a=0;a<s.parts.length;a++)r.push(l(s.parts[a],t));d[s.id]={id:s.id,refs:1,parts:r}}}}function i(e){for(var t=[],n={},s=0;s<e.length;s++){var i=e[s],a=i[0],r=i[1],o=i[2],l=i[3],c={css:r,media:o,sourceMap:l};n[a]?n[a].parts.push(c):t.push(n[a]={id:a,parts:[c]})}return t}function a(e,t){var n=g(),s=x[x.length-1];if("top"===e.insertAt)s?s.nextSibling?n.insertBefore(t,s.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),x.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function r(e){e.parentNode.removeChild(e);var t=x.indexOf(e);t>=0&&x.splice(t,1)}function o(e){var t=document.createElement("style");return t.type="text/css",a(e,t),t}function l(e,t){var n,s,i;if(t.singleton){var a=v++;n=h||(h=o(t)),s=c.bind(null,n,a,!1),i=c.bind(null,n,a,!0)}else n=o(t),s=u.bind(null,n),i=function(){r(n)};return s(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;s(e=t)}else i()}}function c(e,t,n,s){var i=n?"":s.css;if(e.styleSheet)e.styleSheet.cssText=C(t,i);else{var a=document.createTextNode(i),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(a,r[t]):e.appendChild(a)}}function u(e,t){var n=t.css,s=t.media,i=t.sourceMap;if(s&&e.setAttribute("media",s),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var d={},p=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},f=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),g=p(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,v=0,x=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=f()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=i(e);return s(n,t),function(e){for(var a=[],r=0;r<n.length;r++){var o=n[r],l=d[o.id];l.refs--,a.push(l)}if(e){var c=i(e);s(c,t)}for(var r=0;r<a.length;r++){var l=a[r];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete d[l.id]}}}};var C=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t,n,s){var i,a=e=e||{},r=typeof e.default;"object"!==r&&"function"!==r||(i=e,a=e.default);var o="function"==typeof a?a.options:a;if(t&&(o.render=t.render,o.staticRenderFns=t.staticRenderFns),n&&(o._scopeId=n),s){var l=o.computed||(o.computed={});Object.keys(s).forEach(function(e){var t=s[e];l[e]=function(){return t}})}return{esModule:i,exports:a,options:o}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{pageCount:{type:Number,required:!0},initialPage:{type:Number,default:0},forcePage:{type:Number},clickHandler:{type:Function,default:function(){}},pageRange:{type:Number,default:3},marginPages:{type:Number,default:1},prevText:{type:String,default:"Prev"},nextText:{type:String,default:"Next"},containerClass:{type:String},pageClass:{type:String},pageLinkClass:{type:String},prevClass:{type:String},prevLinkClass:{type:String},nextClass:{type:String},nextLinkClass:{type:String},activeClass:{type:String,default:"active"},noLiSurround:{type:Boolean,default:!1}},data:function(){return{selected:this.initialPage}},beforeUpdate:function(){void 0!==this.forcePage&&this.forcePage!==this.selected&&(this.selected=this.forcePage)},computed:{pages:function(){var e=this,t={};if(this.pageCount<=this.pageRange)for(var n=0;n<this.pageCount;n++){var s={index:n,content:n+1,selected:n===this.selected};t[n]=s}else{var i=this.pageRange/2,a=this.pageRange-i;this.selected<i?(i=this.selected,a=this.pageRange-i):this.selected>this.pageCount-this.pageRange/2&&(a=this.pageCount-this.selected,i=this.pageRange-a);for(var r=function(n){var s={index:n,content:n+1,selected:n===e.selected};t[n]=s},o=function(e){var n={content:"...",disabled:!0};t[e]=n},l=0;l<this.marginPages;l++)r(l);var c=0;this.selected-this.pageRange>0&&(c=this.selected-this.pageRange);var u=this.pageCount;this.selected+this.pageRange<this.pageCount&&(u=this.selected+this.pageRange);for(var d=c;d<=u&&d<=this.pageCount-1;d++)r(d);c>this.marginPages&&o(c-1),u+1<this.pageCount-this.marginPages&&o(u+1);for(var p=this.pageCount-1;p>=this.pageCount-this.marginPages;p--)r(p)}return t}},methods:{handlePageSelected:function(e){this.selected!==e&&(this.selected=e,this.clickHandler(this.selected+1))},prevPage:function(){this.selected<=0||(this.selected--,this.clickHandler(this.selected+1))},nextPage:function(){this.selected>=this.pageCount-1||(this.selected++,this.clickHandler(this.selected+1))},firstPageSelected:function(){return 0===this.selected},lastPageSelected:function(){return this.selected===this.pageCount-1||0===this.pageCount}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.noLiSurround?n("div",{class:e.containerClass},[n("a",{class:[e.prevLinkClass,{disabled:e.firstPageSelected()}],attrs:{tabindex:"0"},on:{click:function(t){e.prevPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.prevPage():null}}},[e._t("prevContent",[e._v(e._s(e.prevText))])],2),e._v(" "),e._l(e.pages,function(t){return[t.disabled?n("a",{class:[e.pageLinkClass,t.selected?e.activeClass:"",{disabled:t.disabled}],attrs:{tabindex:"0"}},[e._v(e._s(t.content))]):n("a",{class:[e.pageLinkClass,{active:t.selected,disabled:t.disabled}],attrs:{tabindex:"0"},on:{click:function(n){e.handlePageSelected(t.index)},keyup:function(n){return"button"in n||!e._k(n.keyCode,"enter",13)?void e.handlePageSelected(t.index):null}}},[e._v("\n      "+e._s(t.content)+"\n    ")])]}),e._v(" "),n("a",{class:[e.nextLinkClass,{disabled:e.lastPageSelected()}],attrs:{tabindex:"0"},on:{click:function(t){e.nextPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.nextPage():null}}},[e._t("nextContent",[e._v(e._s(e.nextText))])],2)],2):n("ul",{class:e.containerClass},[n("li",{class:[e.prevClass,{disabled:e.firstPageSelected()}]},[n("a",{class:e.prevLinkClass,attrs:{tabindex:"0"},on:{click:function(t){e.prevPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.prevPage():null}}},[e._t("prevContent",[e._v(e._s(e.prevText))])],2)]),e._v(" "),e._l(e.pages,function(t){return n("li",{class:[e.pageClass,t.selected?e.activeClass:"",{disabled:t.disabled}]},[t.disabled?n("a",{class:e.pageLinkClass,attrs:{tabindex:"0"}},[e._v(e._s(t.content))]):n("a",{class:e.pageLinkClass,attrs:{tabindex:"0"},on:{click:function(n){e.handlePageSelected(t.index)},keyup:function(n){return"button"in n||!e._k(n.keyCode,"enter",13)?void e.handlePageSelected(t.index):null}}},[e._v(e._s(t.content))])])}),e._v(" "),n("li",{class:[e.nextClass,{disabled:e.lastPageSelected()}]},[n("a",{class:e.nextLinkClass,attrs:{tabindex:"0"},on:{click:function(t){e.nextPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.nextPage():null}}},[e._t("nextContent",[e._v(e._s(e.nextText))])],2)])],2)},staticRenderFns:[]}}])});