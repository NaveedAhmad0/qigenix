(window["webpackJsonpklive-admin"]=window["webpackJsonpklive-admin"]||[]).push([[19],{168:function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var a=r(6),o=n(r(0)),i=r(12);r(3),r(63);var c=n(r(13));function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){e.prototype=Object.create(t.prototype),function(e,t){(Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}(e.prototype.constructor=e,t)}function u(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],0<=t.indexOf(r)||(a[r]=e[r]);return a}var f=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))||this).history=i.createBrowserHistory(t.props),t}return s(t,e),t.prototype.render=function(){return o.createElement(a.Router,{history:this.history,children:this.props.children})},t}(o.Component),m=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))||this).history=i.createHashHistory(t.props),t}return s(t,e),t.prototype.render=function(){return o.createElement(a.Router,{history:this.history,children:this.props.children})},t}(o.Component),d=function(e,t){return"function"==typeof e?e(t):e},p=function(e,t){return"string"==typeof e?i.createLocation(e,null,null,t):e},h=function(e){return e},v=o.forwardRef;void 0===v&&(v=h);var y=v((function(e,t){var r=e.innerRef,n=e.navigate,a=e.onClick,i=u(e,["innerRef","navigate","onClick"]),c=i.target,s=l({},i,{onClick:function(t){try{a&&a(t)}catch(e){throw t.preventDefault(),e}t.defaultPrevented||0!==t.button||c&&"_self"!==c||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(t)||(t.preventDefault(),n())}});return s.ref=h!==v&&t||r,o.createElement("a",s)})),g=v((function(e,t){var r=e.component,n=void 0===r?y:r,s=e.replace,f=e.to,m=e.innerRef,g=u(e,["component","replace","to","innerRef"]);return o.createElement(a.__RouterContext.Consumer,null,(function(e){e||c(!1);var r=e.history,a=p(d(f,e.location),e.location),u=a?r.createHref(a):"",y=l({},g,{href:u,navigate:function(){var t=d(f,e.location),n=i.createPath(e.location)===i.createPath(p(t));(s||n?r.replace:r.push)(t)}});return h!==v?y.ref=t||m:y.innerRef=m,o.createElement(n,y)}))})),b=function(e){return e},w=o.forwardRef;void 0===w&&(w=b);var E=w((function(e,t){var r=e["aria-current"],n=void 0===r?"page":r,i=e.activeClassName,s=void 0===i?"active":i,f=e.activeStyle,m=e.className,h=e.exact,v=e.isActive,y=e.location,E=e.sensitive,N=e.strict,O=e.style,j=e.to,x=e.innerRef,P=u(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return o.createElement(a.__RouterContext.Consumer,null,(function(e){e||c(!1);var r=y||e.location,i=p(d(j,r),r),u=i.pathname,_=u&&u.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),L=_?a.matchPath(r.pathname,{path:_,exact:h,sensitive:E,strict:N}):null,R=!!(v?v(L,r):L),C="function"==typeof m?m(R):m,S="function"==typeof O?O(R):O;R&&(C=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((function(e){return e})).join(" ")}(C,s),S=l({},S,f));var k=l({"aria-current":R&&n||null,className:C,style:S,to:i},P);return b!==w?k.ref=t||x:k.innerRef=x,o.createElement(g,k)}))}));Object.defineProperty(t,"MemoryRouter",{enumerable:!0,get:function(){return a.MemoryRouter}}),Object.defineProperty(t,"Prompt",{enumerable:!0,get:function(){return a.Prompt}}),Object.defineProperty(t,"Redirect",{enumerable:!0,get:function(){return a.Redirect}}),Object.defineProperty(t,"Route",{enumerable:!0,get:function(){return a.Route}}),Object.defineProperty(t,"Router",{enumerable:!0,get:function(){return a.Router}}),Object.defineProperty(t,"StaticRouter",{enumerable:!0,get:function(){return a.StaticRouter}}),Object.defineProperty(t,"Switch",{enumerable:!0,get:function(){return a.Switch}}),Object.defineProperty(t,"generatePath",{enumerable:!0,get:function(){return a.generatePath}}),Object.defineProperty(t,"matchPath",{enumerable:!0,get:function(){return a.matchPath}}),Object.defineProperty(t,"useHistory",{enumerable:!0,get:function(){return a.useHistory}}),Object.defineProperty(t,"useLocation",{enumerable:!0,get:function(){return a.useLocation}}),Object.defineProperty(t,"useParams",{enumerable:!0,get:function(){return a.useParams}}),Object.defineProperty(t,"useRouteMatch",{enumerable:!0,get:function(){return a.useRouteMatch}}),Object.defineProperty(t,"withRouter",{enumerable:!0,get:function(){return a.withRouter}}),t.BrowserRouter=f,t.HashRouter=m,t.Link=g,t.NavLink=E},170:function(e,t,r){"use strict";function n(e,t,r,n,a,o,i){try{var c=e[o](i),l=c.value}catch(s){return void r(s)}c.done?t(l):Promise.resolve(l).then(n,a)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(a,o){var i=e.apply(t,r);function c(e){n(i,a,o,c,l,"next",e)}function l(e){n(i,a,o,c,l,"throw",e)}c(void 0)}))}}r.d(t,"a",(function(){return a}))},171:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},a=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var a=Object.getOwnPropertyDescriptor(t,r);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&a(t,e,r);return o(t,e),t},c=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};Object.defineProperty(t,"__esModule",{value:!0});var l=i(r(0)),s=r(172),u=(0,r(173).createAnimation)("ClipLoader","0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}","clip");t.default=function(e){var t=e.loading,r=void 0===t||t,a=e.color,o=void 0===a?"#000000":a,i=e.speedMultiplier,f=void 0===i?1:i,m=e.cssOverride,d=void 0===m?{}:m,p=e.size,h=void 0===p?35:p,v=c(e,["loading","color","speedMultiplier","cssOverride","size"]),y=n({background:"transparent !important",width:(0,s.cssValue)(h),height:(0,s.cssValue)(h),borderRadius:"100%",border:"2px solid",borderTopColor:o,borderBottomColor:"transparent",borderLeftColor:o,borderRightColor:o,display:"inline-block",animation:"".concat(u," ").concat(.75/f,"s 0s infinite linear"),animationFillMode:"both"},d);return r?l.createElement("span",n({style:y},v)):null}},172:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.cssValue=t.parseLengthAndUnit=void 0;var n={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function a(e){if("number"===typeof e)return{value:e,unit:"px"};var t,r=(e.match(/^[0-9.]*/)||"").toString();t=r.includes(".")?parseFloat(r):parseInt(r,10);var a=(e.match(/[^0-9]*$/)||"").toString();return n[a]?{value:t,unit:a}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}t.parseLengthAndUnit=a,t.cssValue=function(e){var t=a(e);return"".concat(t.value).concat(t.unit)}},173:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createAnimation=void 0;t.createAnimation=function(e,t,r){var n="react-spinners-".concat(e,"-").concat(r);if("undefined"==typeof window||!window.document)return n;var a=document.createElement("style");document.head.appendChild(a);var o=a.sheet,i="\n    @keyframes ".concat(n," {\n      ").concat(t,"\n    }\n  ");return o&&o.insertRule(i,0),n}},175:function(e,t,r){"use strict";t.a="https://qigenix.ixiono.com/apis"},370:function(e,t,r){"use strict";r(0),r(162)},63:function(e,t,r){"use strict";r.r(t);t.default=function(e,t){}},746:function(e,t,r){},883:function(e,t,r){"use strict";r.r(t);var n=r(18),a=r(100),o=r.n(a),i=r(0),c=r.n(i),l=(r(185),r(199),r(200),r(187)),s=r(171),u=r.n(s),f=r(6),m=r(175),d=r(66),p=r(170),h=r(162),v=(r(746),r(168));function y(){y=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(_){c=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var a=t&&t.prototype instanceof f?t:f,o=Object.create(a.prototype),i=new j(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return P()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,i),o}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(_){return{type:"throw",arg:_}}}e.wrap=l;var u={};function f(){}function m(){}function d(){}var p={};c(p,a,(function(){return this}));var h=Object.getPrototypeOf,v=h&&h(h(x([])));v&&v!==t&&r.call(v,a)&&(p=v);var g=d.prototype=f.prototype=Object.create(p);function b(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var n;this._invoke=function(a,o){function i(){return new t((function(n,i){!function n(a,o,i,c){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(f).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,c)}))}c(l.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function E(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=s(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function x(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return m.prototype=d,c(g,"constructor",d),c(d,"constructor",m),m.displayName=c(d,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,c(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(w.prototype),c(w.prototype,o,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new w(l(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(g),c(g,i,"Generator"),c(g,a,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=x,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:x(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}var g=function(){Object(v.useHistory)();var e=Object(i.useState)([]),t=Object(n.a)(e,2),r=t[0],a=t[1],l=localStorage.getItem("token"),s=localStorage.getItem("email"),u=Object(i.useState)(!1),f=Object(n.a)(u,2);f[0],f[1];Object(i.useEffect)((function(){o.a.get("".concat(m.a,"/admin/getAdminProfile/").concat(s),{headers:{"Content-Type":"application/json",Authorization:"".concat(l)}}).then((function(e){a(e.data)}))}),[]);var g=function(){var e=Object(p.a)(y().mark((function e(t){var n,a;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n={firstName:r.firstName,lastName:r.lastName},a={method:"put",url:"https://qigenix.ixiono.com/apis/admin/updateProfile/".concat(s),headers:{"Content-Type":"application/json",Authorization:"".concat(l)},data:n},o()(a).then((function(e){console.log(JSON.stringify(e.data)),alert("updated Successfully")})).catch((function(e){console.log(e.response.data),alert(e.response.data)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"col-12 grid-margin"},c.a.createElement("form",{className:"form-sample"},c.a.createElement("div",{className:"row mt-2"},c.a.createElement("div",{className:"col-md-8"},c.a.createElement(h.a.Group,{className:"row"},c.a.createElement("div",{className:"col-sm-6"},c.a.createElement(h.a.Label,{className:" mb-3"},c.a.createElement("span",{className:"text-danger"},"*")," First Name"),c.a.createElement(h.a.Control,{className:"customerInputN",type:"text",placeholder:"Keywords",value:r.firstName,onChange:function(e){a(Object(d.a)(Object(d.a)({},r),{},{firstName:e.target.value}))}})),c.a.createElement("div",{className:"col-sm-6"},c.a.createElement(h.a.Label,{className:" mb-3"},c.a.createElement("span",{className:"text-danger"},"*")," Last Name"),c.a.createElement(h.a.Control,{className:"customerInputN",type:"text",placeholder:"Keywords",value:r.lastName,onChange:function(e){a(Object(d.a)(Object(d.a)({},r),{},{lastName:e.target.value}))}}))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-8"},c.a.createElement(h.a.Group,{className:"row"},c.a.createElement("div",{className:"col-sm-12"},c.a.createElement(h.a.Label,{className:" mb-3"},"Email"),c.a.createElement(h.a.Control,{className:"customerInputN",type:"text",placeholder:"Keywords",disabled:!0,value:r.email}))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-8"},c.a.createElement(h.a.Group,{className:"row"},c.a.createElement("div",{className:"col-sm-12"},c.a.createElement(h.a.Label,{className:" mb-3"},c.a.createElement("span",{className:"text-danger"},"*")," UserName"),c.a.createElement(h.a.Control,{className:"customerInputN",type:"text",disabled:!0,placeholder:"Keywords",value:r.username}))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-8"},c.a.createElement(h.a.Group,{className:"row"},c.a.createElement("div",{className:"col-sm-12"},c.a.createElement(h.a.Label,{className:" mb-3"},c.a.createElement("span",{className:"text-danger"},"*")," admin_id"),c.a.createElement(h.a.Control,{className:"customerInputN",type:"text",placeholder:"Keywords",disabled:!0,value:r.admin_id}))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-8"},c.a.createElement(h.a.Group,{className:"row"},c.a.createElement("div",{className:"col-sm-12"},c.a.createElement(h.a.Label,{className:" mb-3"},"mobile"),c.a.createElement(h.a.Control,{className:"customerInputN",type:"text",disabled:!0,placeholder:"Keywords",value:r.mobile}))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-8 text-right"},c.a.createElement("button",{className:"btn btnCustomerProfileN btn-primary",onClick:g},"Save")))))};r(370);t.default=function(){l.CSVExport.ExportCSVButton,Object(f.useHistory)();var e=Object(i.useState)(!1),t=Object(n.a)(e,2),r=t[0],a=(t[1],Object(i.useState)([])),o=Object(n.a)(a,2),s=o[0];return o[1],console.log("items is",s),Object(f.useLocation)(),c.a.createElement("div",null,r?c.a.createElement("div",{className:"row",style:{height:"500px"}},c.a.createElement("div",{className:"col-12 text-center my-auto"},c.a.createElement(u.a,{color:"#136be0",size:100,speedMultiplier:1}))):c.a.createElement("div",null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-9 m-auto"},c.a.createElement("div",{className:"row m-auto"},c.a.createElement("div",{className:"col-md-12 m-auto grid-margin"},c.a.createElement("div",{className:"page-title-header",style:{fontWeight:"500",fontSize:"17px"}},"Profile"),c.a.createElement("div",{className:"card",id:"#list-home-list"},c.a.createElement("div",{className:"card-body"},c.a.createElement("ul",{className:"nav nav-tabs nav-tabs-bordered pt-3 px-2"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("button",{className:"nav-link active","data-bs-toggle":"tab","data-bs-target":"#MyTasks"},"Admin Details"))),c.a.createElement("div",{className:"tab-content pt-2"},c.a.createElement("div",{className:"tab-pane fade show active MyTasks",id:"MyTasks"},c.a.createElement(g,null)))))))))),c.a.createElement("div",{className:"col-md-4"},c.a.createElement("div",{className:"row"})))))}}}]);
//# sourceMappingURL=19.3cf7a715.chunk.js.map