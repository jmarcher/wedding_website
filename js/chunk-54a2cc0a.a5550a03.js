(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54a2cc0a"],{"383a":function(t,n,e){"use strict";(function(n){var i=e("624d"),o={},r=!1;function c(){n.addEventListener?n.addEventListener("storage",u,!1):n.attachEvent?n.attachEvent("onstorage",u):n.onstorage=u}function u(t){t||(t=n.event);var e=o[t.key];function r(n){n(i(t.newValue),i(t.oldValue),t.url||t.uri)}e&&e.forEach(r)}function a(t,n){o[t]?o[t].push(n):o[t]=[n],!1===r&&c()}function s(t,n){var e=o[t];e.length>1?e.splice(e.indexOf(n),1):o[t]=[]}t.exports={on:a,off:s}}).call(this,e("c8ba"))},"4dd0":function(t,n,e){"use strict";(function(n){var i=e("e160"),o=e("624d"),r=e("383a"),c="localStorage"in n&&n.localStorage?n.localStorage:i;function u(t,n){return 1===arguments.length?a(t):s(t,n)}function a(t){const n=c.getItem(t),e=o(n);return e}function s(t,n){try{return c.setItem(t,JSON.stringify(n)),!0}catch(e){return!1}}function f(t){return c.removeItem(t)}function h(){return c.clear()}function l(t){return t&&(c=t),c}u.set=s,u.get=a,u.remove=f,u.clear=h,u.backend=l,u.on=r.on,u.off=r.off,t.exports=u}).call(this,e("c8ba"))},5943:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return u}));var i=e("d4ec"),o=e("bee2"),r=e("4dd0"),c=e.n(r);String.prototype.hashCode=function(){var t,n=0;if(0==this.length)return n;for(var e=0;e<this.length;e++)t=this.charCodeAt(e),n=(n<<5)-n+t,n&=n;return n};var u=function(){function t(){Object(i["a"])(this,t),this.notificationKey="jur_last_notification",this.notification=null}return Object(o["a"])(t,[{key:"getMessage",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"de";return this.notification[t]}},{key:"wasAlreadyNotified",value:function(){return null===this.notification||c.a.get(this.notificationKey)===this.hash}},{key:"setNotified",value:function(){c.a.set(this.notificationKey,this.hash)}},{key:"getNotification",value:function(t){return this.setNotified(),this.notification[t]}},{key:"hash",get:function(){return JSON.stringify(this.notification).hashCode()}}]),t}()},"624d":function(t,n,e){"use strict";function i(t){const n=o(t);return void 0===n?null:n}function o(t){try{return JSON.parse(t)}catch(n){return t}}t.exports=i},e160:function(t,n,e){"use strict";var i={};function o(t){return t in i?i[t]:null}function r(t,n){return i[t]=n,!0}function c(t){var n=t in i;return!!n&&delete i[t]}function u(){return i={},!0}t.exports={getItem:o,setItem:r,removeItem:c,clear:u}}}]);
//# sourceMappingURL=chunk-54a2cc0a.a5550a03.js.map