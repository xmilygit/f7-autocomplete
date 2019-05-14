!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("debounce")):"function"==typeof define&&define.amd?define("v-suggestion",["debounce"],e):"object"==typeof exports?exports["v-suggestion"]=e(require("debounce")):t["v-suggestion"]=e(t.debounce)}("undefined"!=typeof self?self:this,function(t){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=11)}([function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n=t.exports={version:"2.6.5"};"number"==typeof __e&&(__e=n)},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){t.exports=!n(4)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){"use strict";var r=n(13),o=n.n(r),i=n(41),u=n.n(i),s=n(42);n.n(s);e.a={inheritAttributes:!0,props:{options:{type:Object,default:{}},onInputChange:{type:Function,required:!0},onItemSelected:{type:Function},value:{type:String,required:!0}},data:function(){var t={debounce:0,placeholder:"",inputClass:"input",label:""};return{extendedOptions:o()({},t,this.options),query:this.value,lastSetQuery:null,items:[],activeItemIndex:-1,showItems:!1}},beforeMount:function(){0!==this.extendedOptions.debounce&&(this.onQueryChanged=u()(this.onQueryChanged,this.extendedOptions.debounce))},watch:{query:function(t,e){if(t===this.lastSetQuery)return void(this.lastSetQuery=null);this.onQueryChanged(t),this.$emit("input",t)},value:function(t,e){this.setInputQuery(t)}},methods:{onItemSelectedDefault:function(t){"string"==typeof t&&(this.$emit("input",t),this.setInputQuery(t),this.showItems=!1)},hideItems:function(){var t=this;setTimeout(function(){t.showItems=!1},300)},showResults:function(){this.showItems=!0},setInputQuery:function(t){this.lastSetQuery=t,this.query=t},onKeyDown:function(t){switch(this.$emit("keyDown",t.keyCode),t.keyCode){case 40:this.highlightItem("down"),t.preventDefault();break;case 38:this.highlightItem("up"),t.preventDefault();break;case 13:this.selectItem(),t.preventDefault();break;case 27:this.showItems=!1,t.preventDefault();break;default:return!0}},selectItem:function(t){var e=null;if(void 0===t){if(-1===this.activeItemIndex)return;e=this.items[this.activeItemIndex]}else e=this.items[t];e&&(this.onItemSelected?this.onItemSelected(e):this.onItemSelectedDefault(e),this.hideItems())},highlightItem:function(t){var e=this;if(0!==this.items.length){var n=this.items.findIndex(function(t,n){return n===e.activeItemIndex});-1===n?n="down"===t?0:this.items.length-1:(this.activeIndexItem=0,"down"===t?++n===this.items.length&&(n=0):--n<0&&(n=this.items.length-1)),this.activeItemIndex=n}},setItems:function(t){this.items=t,this.activeItemIndex=-1,this.showItems=!0},onQueryChanged:function(t){var e=this,n=this.onInputChange(t);this.items=[],void 0!==n&&"boolean"!=typeof n&&null!==n&&(n instanceof Array?this.setItems(n):"function"==typeof n.then&&n.then(function(t){e.setItems(t)}))}}}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(8),o=n(9);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(29);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(5),o=n(43),i=n(12),u=i(r.a,o.a,!1,null,null,null);u.options.__file="src/Suggestions.vue",e.default=u.exports},function(t,e){t.exports=function(t,e,n,r,o,i){var u,s=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(u=t,s=t.default);var a="function"==typeof s?s.options:s;e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns,a._compiled=!0),n&&(a.functional=!0),o&&(a._scopeId=o);var f;if(i?(f=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},a._ssrRegister=f):r&&(f=r),f){var l=a.functional,p=l?a.render:a.beforeCreate;l?(a._injectStyles=f,a.render=function(t,e){return f.call(e),p(t,e)}):a.beforeCreate=p?[].concat(p,f):[f]}return{esModule:u,exports:s,options:a}}},function(t,e,n){t.exports={default:n(14),__esModule:!0}},function(t,e,n){n(15),t.exports=n(1).Object.assign},function(t,e,n){var r=n(16);r(r.S+r.F,"Object",{assign:n(26)})},function(t,e,n){var r=n(0),o=n(1),i=n(17),u=n(19),s=n(6),c=function(t,e,n){var a,f,l,p=t&c.F,h=t&c.G,d=t&c.S,v=t&c.P,m=t&c.B,y=t&c.W,x=h?o:o[e]||(o[e]={}),g=x.prototype,b=h?r:d?r[e]:(r[e]||{}).prototype;h&&(n=e);for(a in n)(f=!p&&b&&void 0!==b[a])&&s(x,a)||(l=f?b[a]:n[a],x[a]=h&&"function"!=typeof b[a]?n[a]:m&&f?i(l,r):y&&b[a]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):v&&"function"==typeof l?i(Function.call,l):l,v&&((x.virtual||(x.virtual={}))[a]=l,t&c.R&&g&&!g[a]&&u(g,a,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e,n){var r=n(18);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(20),o=n(25);t.exports=n(3)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(21),o=n(22),i=n(24),u=Object.defineProperty;e.f=n(3)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(2);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){t.exports=!n(3)&&!n(4)(function(){return 7!=Object.defineProperty(n(23)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(2),o=n(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){var r=n(2);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){"use strict";var r=n(27),o=n(38),i=n(39),u=n(40),s=n(8),c=Object.assign;t.exports=!c||n(4)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=r})?function(t,e){for(var n=u(t),c=arguments.length,a=1,f=o.f,l=i.f;c>a;)for(var p,h=s(arguments[a++]),d=f?r(h).concat(f(h)):r(h),v=d.length,m=0;v>m;)l.call(h,p=d[m++])&&(n[p]=h[p]);return n}:c},function(t,e,n){var r=n(28),o=n(37);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(6),o=n(7),i=n(30)(!1),u=n(33)("IE_PROTO");t.exports=function(t,e){var n,s=o(t),c=0,a=[];for(n in s)n!=u&&r(s,n)&&a.push(n);for(;e.length>c;)r(s,n=e[c++])&&(~i(a,n)||a.push(n));return a}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(7),o=n(31),i=n(32);t.exports=function(t){return function(e,n,u){var s,c=r(e),a=o(c.length),f=i(u,a);if(t&&n!=n){for(;a>f;)if((s=c[f++])!=s)return!0}else for(;a>f;f++)if((t||f in c)&&c[f]===n)return t||f||0;return!t&&-1}}},function(t,e,n){var r=n(10),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(10),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(34)("keys"),o=n(36);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(1),o=n(0),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(35)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e){t.exports=!0},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(9);t.exports=function(t){return Object(r(t))}},function(e,n){e.exports=t},function(t,e){},function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"v-suggestions item-content item-input"},[n("div",{staticClass:"item-inner"},[n("div",{staticClass:"item-title item-floating-label"},[t._v(t._s(t.extendedOptions.label))]),t._v(" "),n("div",{staticClass:"item-input-wrap"},[n("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],class:t.extendedOptions.inputClass,attrs:{type:"text",autocomplete:Math.random(),placeholder:t.extendedOptions.placeholder},domProps:{value:t.query},on:{keydown:t.onKeyDown,blur:t.hideItems,focus:function(e){t.showItems=!0},input:function(e){e.target.composing||(t.query=e.target.value)}}},"input",t.$attrs,!1)),t._v(" "),n("span",{staticClass:"input-clear-button"})])]),t._v(" "),n("div",{staticClass:"suggestions"},[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.items.length>0&&!0===t.showItems,expression:"items.length > 0 && showItems === true"}],staticClass:"items"},t._l(t.items,function(e,r){return n("li",{key:r,staticClass:"item",class:{"is-active":r===t.activeItemIndex},on:{click:function(e){return e.preventDefault(),t.selectItem(r)}}},[t._t("item",[t._v("\n          "+t._s(e)+"\n        ")],{item:e})],2)}),0)])])},o=[];r._withStripped=!0;var i={render:r,staticRenderFns:o};e.a=i}])});