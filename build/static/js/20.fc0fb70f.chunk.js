(window["webpackJsonpqigenix-admin"]=window["webpackJsonpqigenix-admin"]||[]).push([[20],{173:function(e,t,n){"use strict";var r=Object({NODE_ENV:"production",PUBLIC_URL:"/admin"}).REACT_APP_BACKEND;t.a=r},174:function(e,t,n){"use strict";function r(e,t,n,r,a,o,i){try{var c=e[o](i),l=c.value}catch(u){return void n(u)}c.done?t(l):Promise.resolve(l).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var i=e.apply(t,n);function c(e){r(i,a,o,c,l,"next",e)}function l(e){r(i,a,o,c,l,"throw",e)}c(void 0)}))}}n.d(t,"a",(function(){return a}))},175:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},a=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,a)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return o(t,e),t},c=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var l=i(n(0)),u=n(176),s=(0,n(177).createAnimation)("ClipLoader","0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}","clip");t.default=function(e){var t=e.loading,n=void 0===t||t,a=e.color,o=void 0===a?"#000000":a,i=e.speedMultiplier,d=void 0===i?1:i,m=e.cssOverride,f=void 0===m?{}:m,h=e.size,p=void 0===h?35:h,v=c(e,["loading","color","speedMultiplier","cssOverride","size"]),y=r({background:"transparent !important",width:(0,u.cssValue)(p),height:(0,u.cssValue)(p),borderRadius:"100%",border:"2px solid",borderTopColor:o,borderBottomColor:"transparent",borderLeftColor:o,borderRightColor:o,display:"inline-block",animation:"".concat(s," ").concat(.75/d,"s 0s infinite linear"),animationFillMode:"both"},f);return n?l.createElement("span",r({style:y},v)):null}},176:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.cssValue=t.parseLengthAndUnit=void 0;var r={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function a(e){if("number"===typeof e)return{value:e,unit:"px"};var t,n=(e.match(/^[0-9.]*/)||"").toString();t=n.includes(".")?parseFloat(n):parseInt(n,10);var a=(e.match(/[^0-9]*$/)||"").toString();return r[a]?{value:t,unit:a}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}t.parseLengthAndUnit=a,t.cssValue=function(e){var t=a(e);return"".concat(t.value).concat(t.unit)}},177:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createAnimation=void 0;t.createAnimation=function(e,t,n){var r="react-spinners-".concat(e,"-").concat(n);if("undefined"==typeof window||!window.document)return r;var a=document.createElement("style");document.head.appendChild(a);var o=a.sheet,i="\n    @keyframes ".concat(r," {\n      ").concat(t,"\n    }\n  ");return o&&o.insertRule(i,0),r}},593:function(e,t,n){"use strict";n.r(t);var r=n(174),a=n(19),o=n(103),i=n.n(o),c=n(0),l=n.n(c),u=n(6),s=n(173),d=n(175),m=n.n(d);function f(){f=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(L){c=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var a=t&&t.prototype instanceof d?t:d,o=Object.create(a.prototype),i=new x(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return j()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=w(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(e,n,i),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(L){return{type:"throw",arg:L}}}e.wrap=l;var s={};function d(){}function m(){}function h(){}var p={};c(p,a,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(_([])));y&&y!==t&&n.call(y,a)&&(p=y);var g=h.prototype=d.prototype=Object.create(p);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var r;this._invoke=function(a,o){function i(){return new t((function(r,i){!function r(a,o,i,c){var l=u(e[a],e,o);if("throw"!==l.type){var s=l.arg,d=s.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(d).then((function(e){s.value=e,i(s)}),(function(e){return r("throw",e,i,c)}))}c(l.arg)}(a,o,r,i)}))}return r=r?r.then(i,i):i()}}function w(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,s;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function _(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return m.prototype=h,c(g,"constructor",h),c(h,"constructor",m),m.displayName=c(h,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,c(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},E(b.prototype),c(b.prototype,o,(function(){return this})),e.AsyncIterator=b,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new b(l(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(g),c(g,i,"Generator"),c(g,a,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=_,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;O(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:_(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},e}t.default=function(){var e=Object(u.useLocation)(),t=Object(c.useState)(!1),n=Object(a.a)(t,2),o=n[0],d=n[1],h=Object(c.useState)(!0),p=Object(a.a)(h,2),v=p[0],y=p[1],g=e.state.ReferenceId,E=Object(c.useState)([{id:0,ReferalNumber:"",amount:0,WithdrawCharges:0,FinalAmount:0,merchantId:"",Name:"",AccountNumber:0,IFSCcode:"",BankName:"",comments:"",status:!1}]),b=Object(a.a)(E,2),w=b[0],N=b[1];function O(){return(O=Object(r.a)(f().mark((function e(t){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("sdfsdf",o),e.prev=2,e.next=5,i.a.post("".concat(s.a,"/admin/PaymentStatus?ReferenceId=").concat(w.ReferalNumber),JSON.stringify({PaymentStatus:o}),{headers:{"Content-Type":"application/json"}}).then((function(e){d(""),console.log(e.data),e.status,alert(e.data.message)}));case 5:e.sent,e.next=12;break;case 8:e.prev=8,e.t0=e.catch(2),alert("something went wrong"),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,8]])})))).apply(this,arguments)}return Object(c.useEffect)((function(){console.log("ReferenceId",g),i.a.get("https://backend.klivepay.com/api/admin/withdraw-request").then((function(e){console.log("DATA",e);for(var t=0;t<e.data.length;t++)N({id:e.data[t].id,ReferalNumber:e.data[t].ReferalNumber,merchantId:e.data[t].merchantId,amount:e.data[t].amount,WithdrawCharges:e.data[t].WithdrawCharges,FinalAmount:e.data[t].FinalAmount,Name:e.data[t].BankDetails.Name,AccountNumber:e.data[t].BankDetails.AccountNumber,IFSCcode:e.data[t].BankDetails.IFSCcode,BankName:e.data[t].BankDetails.BankName,comments:e.data[t].comments,status:!0===e.data[t].status?"completed":"pending"}),console.log("DATA IS ",e.data[t].status);y(!1),setTimeout((function(){y(!1)}),3e3)}))}),[o]),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"row"},l.a.createElement("h2",{className:"text-primary"},"Request Details"),v?l.a.createElement("div",{className:"row",style:{height:"500px"}},l.a.createElement("div",{className:"col-12 text-center my-auto"},l.a.createElement(m.a,{color:"#136be0",size:100,speedMultiplier:1}))):l.a.createElement("div",{className:"col-md-12 grid-margin"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"container"},l.a.createElement("table",{class:"table table-striped table-bordered"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"ID"),l.a.createElement("td",null,w.id)),l.a.createElement("tr",null,l.a.createElement("td",null,"Referal Number"),l.a.createElement("td",null,w.ReferalNumber)),l.a.createElement("tr",null,l.a.createElement("td",null,"Merchant ID"),l.a.createElement("td",null,w.merchantId)),l.a.createElement("tr",null,l.a.createElement("td",null,"Amount"),l.a.createElement("td",null,w.amount)),l.a.createElement("tr",null,l.a.createElement("td",null,"Withdraw Fee"),l.a.createElement("td",null,w.WithdrawCharges,"%")),l.a.createElement("tr",null,l.a.createElement("td",null,"Final Amount"),l.a.createElement("td",null,w.FinalAmount)),l.a.createElement("tr",null,l.a.createElement("td",null,"Name"),l.a.createElement("td",null,w.Name)),l.a.createElement("tr",null,l.a.createElement("td",null,"Account Number"),l.a.createElement("td",null,w.AccountNumber)),l.a.createElement("tr",null,l.a.createElement("td",null,"IFSC Code"),l.a.createElement("td",null,w.IFSCcode)),l.a.createElement("tr",null,l.a.createElement("td",null,"Bank Name"),l.a.createElement("td",null,w.BankName)),l.a.createElement("tr",null,l.a.createElement("td",null,"Comments"),l.a.createElement("td",null,w.comments)),l.a.createElement("tr",null,l.a.createElement("td",null,"Status"),l.a.createElement("td",null,"".concat(w.status))))),l.a.createElement("br",null))))))),l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"row"},l.a.createElement("h5",{className:"text-primary"},"Confirm Payment Status"),l.a.createElement("div",{className:"col-md-6 grid-margin"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"inputPassword2",className:""},"Payment Status"),l.a.createElement("select",{className:"form-select",value:o,onChange:function(e){"true"===e.target.value?d(!0):"false"===e.target.value&&d(!1)}}," ",l.a.createElement("option",null,"Select"),l.a.createElement("option",{value:"true"},"Complete"),l.a.createElement("option",{value:"false"},"Pending"))),l.a.createElement("button",{className:"btn btn-primary",onClick:function(e){return O.apply(this,arguments)}},"Confirm"))))))))}}}]);
//# sourceMappingURL=20.fc0fb70f.chunk.js.map