var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},e.parcelRequired7c6=r),r.register;var n=r("kEUo3");const a={feedbackFormEl:document.querySelector(".feedback-form")};function l(e){let t=localStorage.getItem(e);try{return JSON.parse(t)}catch(e){return console.log(e),t}}a.feedbackFormEl.addEventListener("input",(0,n.throttle)(function(e){let t={},o=new FormData(a.feedbackFormEl);o.forEach((e,o)=>{t[o]=e}),localStorage.setItem("feedback-form-state",JSON.stringify(t))},500)),a.feedbackFormEl.addEventListener("submit",function(e){e.preventDefault();let t=l("feedback-form-state");localStorage.removeItem("feedback-form-state"),e.target.reset(),console.log(t)}),function(){let e=l("feedback-form-state")||{};for(let t of Object.keys(e))a.feedbackFormEl.elements[t].value=e[t]}();//# sourceMappingURL=03-feedback.4e35aef3.js.map

//# sourceMappingURL=03-feedback.4e35aef3.js.map