(()=>{var r={791:(r,t,e)=>{"use strict";function n(r){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},n(r)}function o(r){var t=function(r,t){if("object"!==n(r)||null===r)return r;var e=r[Symbol.toPrimitive];if(void 0!==e){var o=e.call(r,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(r);return"symbol"===n(t)?t:String(t)}function i(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function c(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?i(Object(e),!0).forEach((function(t){var n,i,c;n=r,i=t,c=e[t],(i=o(i))in n?Object.defineProperty(n,i,{value:c,enumerable:!0,configurable:!0,writable:!0}):n[i]=c})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}function u(r){return"Minified Redux error #"+r+"; visit https://redux.js.org/Errors?code="+r+" for the full message or use the non-minified dev environment for full errors. "}e.r(t),e.d(t,{__DO_NOT_USE__ActionTypes:()=>p,applyMiddleware:()=>E,bindActionCreators:()=>b,combineReducers:()=>s,compose:()=>v,createStore:()=>y,legacy_createStore:()=>l});var f="function"==typeof Symbol&&Symbol.observable||"@@observable",a=function(){return Math.random().toString(36).substring(7).split("").join(".")},p={INIT:"@@redux/INIT"+a(),REPLACE:"@@redux/REPLACE"+a(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+a()}};function y(r,t,e){var n;if("function"==typeof t&&"function"==typeof e||"function"==typeof e&&"function"==typeof arguments[3])throw new Error(u(0));if("function"==typeof t&&void 0===e&&(e=t,t=void 0),void 0!==e){if("function"!=typeof e)throw new Error(u(1));return e(y)(r,t)}if("function"!=typeof r)throw new Error(u(2));var o=r,i=t,c=[],a=c,l=!1;function s(){a===c&&(a=c.slice())}function d(){if(l)throw new Error(u(3));return i}function b(r){if("function"!=typeof r)throw new Error(u(4));if(l)throw new Error(u(5));var t=!0;return s(),a.push(r),function(){if(t){if(l)throw new Error(u(6));t=!1,s();var e=a.indexOf(r);a.splice(e,1),c=null}}}function v(r){if(!function(r){if("object"!=typeof r||null===r)return!1;for(var t=r;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(r)===t}(r))throw new Error(u(7));if(void 0===r.type)throw new Error(u(8));if(l)throw new Error(u(9));try{l=!0,i=o(i,r)}finally{l=!1}for(var t=c=a,e=0;e<t.length;e++)(0,t[e])();return r}return v({type:p.INIT}),(n={dispatch:v,subscribe:b,getState:d,replaceReducer:function(r){if("function"!=typeof r)throw new Error(u(10));o=r,v({type:p.REPLACE})}})[f]=function(){var r,t=b;return(r={subscribe:function(r){if("object"!=typeof r||null===r)throw new Error(u(11));function e(){r.next&&r.next(d())}return e(),{unsubscribe:t(e)}}})[f]=function(){return this},r},n}var l=y;function s(r){for(var t=Object.keys(r),e={},n=0;n<t.length;n++){var o=t[n];"function"==typeof r[o]&&(e[o]=r[o])}var i,c=Object.keys(e);try{!function(r){Object.keys(r).forEach((function(t){var e=r[t];if(void 0===e(void 0,{type:p.INIT}))throw new Error(u(12));if(void 0===e(void 0,{type:p.PROBE_UNKNOWN_ACTION()}))throw new Error(u(13))}))}(e)}catch(r){i=r}return function(r,t){if(void 0===r&&(r={}),i)throw i;for(var n=!1,o={},f=0;f<c.length;f++){var a=c[f],p=e[a],y=r[a],l=p(y,t);if(void 0===l)throw t&&t.type,new Error(u(14));o[a]=l,n=n||l!==y}return(n=n||c.length!==Object.keys(r).length)?o:r}}function d(r,t){return function(){return t(r.apply(this,arguments))}}function b(r,t){if("function"==typeof r)return d(r,t);if("object"!=typeof r||null===r)throw new Error(u(16));var e={};for(var n in r){var o=r[n];"function"==typeof o&&(e[n]=d(o,t))}return e}function v(){for(var r=arguments.length,t=new Array(r),e=0;e<r;e++)t[e]=arguments[e];return 0===t.length?function(r){return r}:1===t.length?t[0]:t.reduce((function(r,t){return function(){return r(t.apply(void 0,arguments))}}))}function E(){for(var r=arguments.length,t=new Array(r),e=0;e<r;e++)t[e]=arguments[e];return function(r){return function(){var e=r.apply(void 0,arguments),n=function(){throw new Error(u(15))},o={getState:e.getState,dispatch:function(){return n.apply(void 0,arguments)}},i=t.map((function(r){return r(o)}));return n=v.apply(void 0,i)(e.dispatch),c(c({},e),{},{dispatch:n})}}}},883:r=>{r.exports={INCREMENTO:"INCREMENTO",DECREMENTO:"DECREMENTO"}},518:(r,t,e)=>{const{INCREMENTO:n,DECREMENTO:o}=e(883);r.exports={incremento:()=>({type:n}),decremento:()=>({type:o})}},616:(r,t,e)=>{const{INCREMENTO:n,DECREMENTO:o}=e(883),i={contador:0};r.exports=function(r=i,t){switch(t.type){case n:return{...r,contador:r.contador+1};case o:return{...r,contador:r.contador-1};default:return r}}}},t={};function e(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return r[n](i,i.exports,e),i.exports}e.d=(r,t)=>{for(var n in t)e.o(t,n)&&!e.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:t[n]})},e.o=(r,t)=>Object.prototype.hasOwnProperty.call(r,t),e.r=r=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},(()=>{const{createStore:r}=e(791),t=e(616),{incremento:n,decremento:o}=e(518),i=r(t),c=document.querySelector("#valor"),u=()=>{let r=i.getState().contador;c.innerHTML=r};u(),i.subscribe(u);const f=document.querySelector("#incremento"),a=document.querySelector("#decremento");f.addEventListener("click",(()=>i.dispatch(n()))),a.addEventListener("click",(()=>i.dispatch(o())))})()})();