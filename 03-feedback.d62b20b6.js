!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return d.Date.now()};function b(e,t,n){var r,i,a,f,u,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=r,o=i;return r=i=void 0,c=t,f=e.apply(o,n)}function O(e){return c=e,u=setTimeout(h,t),s?b(e):f}function j(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function h(){var e=p();if(j(e))return w(e);u=setTimeout(h,function(e){var n=t-(e-l);return d?g(n,a-(e-c)):n}(e))}function w(e){return u=void 0,m&&r?b(e):(r=i=void 0,f)}function N(){var e=p(),n=j(e);if(r=arguments,i=this,l=e,n){if(void 0===u)return O(l);if(d)return u=setTimeout(h,t),b(l)}return void 0===u&&(u=setTimeout(h,t)),f}return t=S(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(S(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),N.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=l=i=u=void 0},N.flush=function(){return void 0===u?f:w(p())},N}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=f.test(t);return o||u.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:r,maxWait:t,trailing:i})};var O=document.querySelector(".feedback-form"),j=document.querySelector('input[name="email"]'),h=document.querySelector('textarea[name="message"]'),w={};if(localStorage.getItem("feedback-form-state")){var N=localStorage.getItem("feedback-form-state");if(JSON.parse(N).email){var T=JSON.parse(localStorage.getItem("feedback-form-state")).email;j.value=T,w.email=T}if(JSON.parse(N).message){var k=JSON.parse(localStorage.getItem("feedback-form-state")).message;h.value=k,w.message=k}}O.addEventListener("input",e(t)((function(e){w[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(w))}),500)),O.addEventListener("submit",(function(e){e.preventDefault(),console.log(w),localStorage.removeItem("feedback-form-state"),j.value="",h.value=""}))}();
//# sourceMappingURL=03-feedback.d62b20b6.js.map