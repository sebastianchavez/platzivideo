!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="./dist",t(t.s=104)}({10:function(e,t,n){"use strict";function r(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}t.a=r},104:function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e){e.preventDefault();var t=new FormData(c),n=t.get("title");console.log(n),d.dispatch({type:"ADD_SONG",payload:{title:n}})}function i(){var e=document.getElementById("playlist"),t=d.getState();e.innerHTML="",t.forEach(function(t){var n=document.createElement("p");n.textContent=t.title,e.appendChild(n)})}function u(){i()}var a=n(4);console.log("hola");var c=document.getElementById("form");c.addEventListener("submit",o);var f=function(e,t){switch(console.log("reducer"),t.type){case"ADD_SONG":return[].concat(r(e),[t.payload]);default:return e}},s=[{title:"Despacito"},{title:"One more time"},{title:"Echame la culpa"}],d=(0,a.createStore)(f,s,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i(),d.subscribe(u),console.log(d.getState())},4:function(e,t,n){"use strict";function r(e){if("object"!==(void 0===e?"undefined":y(e))||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function o(e,t,n){function i(){w===v&&(w=v.slice())}function u(){if(m)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return b}function a(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(m)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var t=!0;return i(),w.push(e),function(){if(t){if(m)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");t=!1,i();var n=w.indexOf(e);w.splice(n,1)}}}function c(e){if(!r(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(m)throw new Error("Reducers may not dispatch actions.");try{m=!0,b=h(b,e)}finally{m=!1}for(var t=v=w,n=0;n<t.length;n++){(0,t[n])()}return e}function f(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");h=e,c({type:p.REPLACE})}function s(){var e,t=a;return e={subscribe:function(e){function n(){e.next&&e.next(u())}if("object"!==(void 0===e?"undefined":y(e))||null===e)throw new TypeError("Expected the observer to be an object.");return n(),{unsubscribe:t(n)}}},e[l.a]=function(){return this},e}var d;if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(o)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var h=e,b=t,v=[],w=v,m=!1;return c({type:p.INIT}),d={dispatch:c,subscribe:a,getState:u,replaceReducer:f},d[l.a]=s,d}function i(e,t){var n=t&&t.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function u(e){Object.keys(e).forEach(function(t){var n=e[t];if(void 0===n(void 0,{type:p.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===n(void 0,{type:"@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".")}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+p.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}function a(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];"function"==typeof e[o]&&(n[o]=e[o])}var a=Object.keys(n),c=void 0;try{u(n)}catch(e){c=e}return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];if(c)throw c;for(var r=!1,o={},u=0;u<a.length;u++){var f=a[u],s=n[f],d=e[f],l=s(d,t);if(void 0===l){var p=i(f,t);throw new Error(p)}o[f]=l,r=r||l!==d}return r?o:e}}function c(e,t){return function(){return t(e.apply(this,arguments))}}function f(e,t){if("function"==typeof e)return c(e,t);if("object"!==(void 0===e?"undefined":y(e))||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":void 0===e?"undefined":y(e))+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var n=Object.keys(e),r={},o=0;o<n.length;o++){var i=n[o],u=e[i];"function"==typeof u&&(r[i]=c(u,t))}return r}function s(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}function d(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(){for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];var i=e.apply(void 0,r),u=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},a={getState:i.getState,dispatch:function(){return u.apply(void 0,arguments)}},c=t.map(function(e){return e(a)});return u=s.apply(void 0,c)(i.dispatch),h({},i,{dispatch:u})}}}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"createStore",function(){return o}),n.d(t,"combineReducers",function(){return a}),n.d(t,"bindActionCreators",function(){return f}),n.d(t,"applyMiddleware",function(){return d}),n.d(t,"compose",function(){return s}),n.d(t,"__DO_NOT_USE__ActionTypes",function(){return p});var l=n(8),p={INIT:"@@redux/INIT"+Math.random().toString(36).substring(7).split("").join("."),REPLACE:"@@redux/REPLACE"+Math.random().toString(36).substring(7).split("").join(".")},y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}},5:function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},8:function(e,t,n){"use strict";(function(e,r){var o,i=n(10);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:r;var u=Object(i.a)(o);t.a=u}).call(t,n(5),n(9)(e))},9:function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}}});