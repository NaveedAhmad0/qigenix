(window["webpackJsonpklive-admin"]=window["webpackJsonpklive-admin"]||[]).push([[17],{169:function(e,t,a){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var n=a(6),o=r(a(0)),c=a(12);a(3),a(63);var l=r(a(13));function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function s(e,t){e.prototype=Object.create(t.prototype),function(e,t){(Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}(e.prototype.constructor=e,t)}function u(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],0<=t.indexOf(a)||(n[a]=e[a]);return n}var m=function(e){function t(){for(var t,a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(t=e.call.apply(e,[this].concat(r))||this).history=c.createBrowserHistory(t.props),t}return s(t,e),t.prototype.render=function(){return o.createElement(n.Router,{history:this.history,children:this.props.children})},t}(o.Component),d=function(e){function t(){for(var t,a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(t=e.call.apply(e,[this].concat(r))||this).history=c.createHashHistory(t.props),t}return s(t,e),t.prototype.render=function(){return o.createElement(n.Router,{history:this.history,children:this.props.children})},t}(o.Component),f=function(e,t){return"function"==typeof e?e(t):e},p=function(e,t){return"string"==typeof e?c.createLocation(e,null,null,t):e},h=function(e){return e},v=o.forwardRef;void 0===v&&(v=h);var y=v((function(e,t){var a=e.innerRef,r=e.navigate,n=e.onClick,c=u(e,["innerRef","navigate","onClick"]),l=c.target,s=i({},c,{onClick:function(t){try{n&&n(t)}catch(e){throw t.preventDefault(),e}t.defaultPrevented||0!==t.button||l&&"_self"!==l||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(t)||(t.preventDefault(),r())}});return s.ref=h!==v&&t||a,o.createElement("a",s)})),g=v((function(e,t){var a=e.component,r=void 0===a?y:a,s=e.replace,m=e.to,d=e.innerRef,g=u(e,["component","replace","to","innerRef"]);return o.createElement(n.__RouterContext.Consumer,null,(function(e){e||l(!1);var a=e.history,n=p(f(m,e.location),e.location),u=n?a.createHref(n):"",y=i({},g,{href:u,navigate:function(){var t=f(m,e.location),r=c.createPath(e.location)===c.createPath(p(t));(s||r?a.replace:a.push)(t)}});return h!==v?y.ref=t||d:y.innerRef=d,o.createElement(r,y)}))})),b=function(e){return e},E=o.forwardRef;void 0===E&&(E=b);var N=E((function(e,t){var a=e["aria-current"],r=void 0===a?"page":a,c=e.activeClassName,s=void 0===c?"active":c,m=e.activeStyle,d=e.className,h=e.exact,v=e.isActive,y=e.location,N=e.sensitive,w=e.strict,O=e.style,j=e.to,x=e.innerRef,C=u(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return o.createElement(n.__RouterContext.Consumer,null,(function(e){e||l(!1);var a=y||e.location,c=p(f(j,a),a),u=c.pathname,L=u&&u.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),_=L?n.matchPath(a.pathname,{path:L,exact:h,sensitive:N,strict:w}):null,P=!!(v?v(_,a):_),S="function"==typeof d?d(P):d,k="function"==typeof O?O(P):O;P&&(S=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter((function(e){return e})).join(" ")}(S,s),k=i({},k,m));var G=i({"aria-current":P&&r||null,className:S,style:k,to:c},C);return b!==E?G.ref=t||x:G.innerRef=x,o.createElement(g,G)}))}));Object.defineProperty(t,"MemoryRouter",{enumerable:!0,get:function(){return n.MemoryRouter}}),Object.defineProperty(t,"Prompt",{enumerable:!0,get:function(){return n.Prompt}}),Object.defineProperty(t,"Redirect",{enumerable:!0,get:function(){return n.Redirect}}),Object.defineProperty(t,"Route",{enumerable:!0,get:function(){return n.Route}}),Object.defineProperty(t,"Router",{enumerable:!0,get:function(){return n.Router}}),Object.defineProperty(t,"StaticRouter",{enumerable:!0,get:function(){return n.StaticRouter}}),Object.defineProperty(t,"Switch",{enumerable:!0,get:function(){return n.Switch}}),Object.defineProperty(t,"generatePath",{enumerable:!0,get:function(){return n.generatePath}}),Object.defineProperty(t,"matchPath",{enumerable:!0,get:function(){return n.matchPath}}),Object.defineProperty(t,"useHistory",{enumerable:!0,get:function(){return n.useHistory}}),Object.defineProperty(t,"useLocation",{enumerable:!0,get:function(){return n.useLocation}}),Object.defineProperty(t,"useParams",{enumerable:!0,get:function(){return n.useParams}}),Object.defineProperty(t,"useRouteMatch",{enumerable:!0,get:function(){return n.useRouteMatch}}),Object.defineProperty(t,"withRouter",{enumerable:!0,get:function(){return n.withRouter}}),t.BrowserRouter=m,t.HashRouter=d,t.Link=g,t.NavLink=N},171:function(e,t,a){"use strict";t.a="https://qigenix.ixiono.com/apis"},172:function(e,t,a){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},n=this&&this.__createBinding||(Object.create?function(e,t,a,r){void 0===r&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}:function(e,t,a,r){void 0===r&&(r=a),e[r]=t[a]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),c=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&n(t,e,a);return o(t,e),t},l=this&&this.__rest||function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};Object.defineProperty(t,"__esModule",{value:!0});var i=c(a(0)),s=a(173),u=(0,a(174).createAnimation)("ClipLoader","0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}","clip");t.default=function(e){var t=e.loading,a=void 0===t||t,n=e.color,o=void 0===n?"#000000":n,c=e.speedMultiplier,m=void 0===c?1:c,d=e.cssOverride,f=void 0===d?{}:d,p=e.size,h=void 0===p?35:p,v=l(e,["loading","color","speedMultiplier","cssOverride","size"]),y=r({background:"transparent !important",width:(0,s.cssValue)(h),height:(0,s.cssValue)(h),borderRadius:"100%",border:"2px solid",borderTopColor:o,borderBottomColor:"transparent",borderLeftColor:o,borderRightColor:o,display:"inline-block",animation:"".concat(u," ").concat(.75/m,"s 0s infinite linear"),animationFillMode:"both"},f);return a?i.createElement("span",r({style:y},v)):null}},173:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.cssValue=t.parseLengthAndUnit=void 0;var r={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function n(e){if("number"===typeof e)return{value:e,unit:"px"};var t,a=(e.match(/^[0-9.]*/)||"").toString();t=a.includes(".")?parseFloat(a):parseInt(a,10);var n=(e.match(/[^0-9]*$/)||"").toString();return r[n]?{value:t,unit:n}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}t.parseLengthAndUnit=n,t.cssValue=function(e){var t=n(e);return"".concat(t.value).concat(t.unit)}},174:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createAnimation=void 0;t.createAnimation=function(e,t,a){var r="react-spinners-".concat(e,"-").concat(a);if("undefined"==typeof window||!window.document)return r;var n=document.createElement("style");document.head.appendChild(n);var o=n.sheet,c="\n    @keyframes ".concat(r," {\n      ").concat(t,"\n    }\n  ");return o&&o.insertRule(c,0),r}},201:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},373:function(e,t,a){"use strict";a(0),a(163)},63:function(e,t,a){"use strict";a.r(t);t.default=function(e,t){}},758:function(e,t,a){},759:function(e,t,a){},886:function(e,t,a){"use strict";a.r(t);var r=a(15),n=a(62),o=a.n(n),c=a(0),l=a.n(c),i=(a(179),a(200),a(202),a(185)),s=a(172),u=a.n(s),m=a(6),d=(a(171),a(68)),f=a(65),p=a(163),h=(a(758),a(169));function v(){v=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function l(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(L){l=function(e,t,a){return e[t]=a}}function i(e,t,a,r){var n=t&&t.prototype instanceof m?t:m,o=Object.create(n.prototype),c=new j(r||[]);return o._invoke=function(e,t,a){var r="suspendedStart";return function(n,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw o;return C()}for(a.method=n,a.arg=o;;){var c=a.delegate;if(c){var l=N(c,a);if(l){if(l===u)continue;return l}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var i=s(e,t,a);if("normal"===i.type){if(r=a.done?"completed":"suspendedYield",i.arg===u)continue;return{value:i.arg,done:a.done}}"throw"===i.type&&(r="completed",a.method="throw",a.arg=i.arg)}}}(e,a,c),o}function s(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(L){return{type:"throw",arg:L}}}e.wrap=i;var u={};function m(){}function d(){}function f(){}var p={};l(p,n,(function(){return this}));var h=Object.getPrototypeOf,y=h&&h(h(x([])));y&&y!==t&&a.call(y,n)&&(p=y);var g=f.prototype=m.prototype=Object.create(p);function b(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var r;this._invoke=function(n,o){function c(){return new t((function(r,c){!function r(n,o,c,l){var i=s(e[n],e,o);if("throw"!==i.type){var u=i.arg,m=u.value;return m&&"object"==typeof m&&a.call(m,"__await")?t.resolve(m.__await).then((function(e){r("next",e,c,l)}),(function(e){r("throw",e,c,l)})):t.resolve(m).then((function(e){u.value=e,c(u)}),(function(e){return r("throw",e,c,l)}))}l(i.arg)}(n,o,r,c)}))}return r=r?r.then(c,c):c()}}function N(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,N(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=s(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var n=r.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function x(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:C}}function C(){return{value:void 0,done:!0}}return d.prototype=f,l(g,"constructor",f),l(f,"constructor",d),d.displayName=l(f,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,l(e,c,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(E.prototype),l(E.prototype,o,(function(){return this})),e.AsyncIterator=E,e.async=function(t,a,r,n,o){void 0===o&&(o=Promise);var c=new E(i(t,a,r,n),o);return e.isGeneratorFunction(a)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},b(g),l(g,c,"Generator"),l(g,n,(function(){return this})),l(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var r=t.pop();if(r in e)return a.value=r,a.done=!1,a}return a.done=!0,a}},e.values=x,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(a,r){return c.type="throw",c.arg=e,t.next=a,r&&(t.method="next",t.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],c=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=a.call(o,"catchLoc"),i=a.call(o,"finallyLoc");if(l&&i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),O(a),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var n=r.arg;O(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:x(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),u}},e}var y=function(){var e=Object(h.useHistory)(),t=Object(h.useLocation)().state.details;console.log(t);var a=Object(c.useState)(t),n=Object(r.a)(a,2),i=n[0],s=n[1],u=localStorage.getItem("token"),m=Object(c.useState)(!1),y=Object(r.a)(m,2),g=(y[0],y[1],function(){var a=Object(f.a)(v().mark((function a(r){var n,c;return v().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:r.preventDefault(),n={company:i.company,firstName:i.firstName,lastName:i.lastName,username:i.username,vat_number:i.vat_number,mobile:i.mobile,website:i.website,groups:i.groups,currency:i.currency,language:i.language,address:i.address,city:i.city,state:i.state,zipcode:i.zipcode,country:i.country},c={method:"put",url:"https://qigenix.ixiono.com/apis/admin/edit-customer/".concat(t.id),headers:{"Content-Type":"application/json",Authorization:"".concat(u)},data:n},o()(c).then((function(t){console.log(JSON.stringify(t.data)),alert("updated Successfully"),e.push("/admin/CustomerList")})).catch((function(e){console.log(e.response.data),alert(e.response.data)}));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}());return l.a.createElement("div",{className:"col-12 grid-margin"},l.a.createElement("form",{className:"form-sample mt-2"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-8"},l.a.createElement(p.a.Group,{className:"row"},l.a.createElement("div",{className:"col-sm-6"},l.a.createElement(p.a.Label,{className:" mb-3"},l.a.createElement("span",{className:"text-danger"},"*")," First Name"),l.a.createElement(p.a.Control,{className:"customerInputN",type:"text",placeholder:"Keywords",value:i.firstName,onChange:function(e){s(Object(d.a)(Object(d.a)({},i),{},{firstName:e.target.value}))}})),l.a.createElement("div",{className:"col-sm-6"},l.a.createElement(p.a.Label,{className:" mb-3"},l.a.createElement("span",{className:"text-danger"},"*")," Last Name"),l.a.createElement(p.a.Control,{className:"customerInputN",type:"text",placeholder:"Keywords",value:i.lastName,onChange:function(e){s(Object(d.a)(Object(d.a)({},i),{},{lastName:e.target.value}))}}))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-8"},l.a.createElement(p.a.Group,{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement(p.a.Label,{className:" mb-3"},l.a.createElement("span",{className:"text-danger"},"*")," UserName"),l.a.createElement(p.a.Control,{className:"customerInputN",type:"text",placeholder:"Keywords",value:i.username,onChange:function(e){s(Object(d.a)(Object(d.a)({},i),{},{username:e.target.value}))}}))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-8"},l.a.createElement(p.a.Group,{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement(p.a.Label,{className:" mb-3"},l.a.createElement("span",{className:"text-danger"},"*")," Company"),l.a.createElement(p.a.Control,{className:"customerInputN",type:"text",placeholder:"Keywords",value:i.company,onChange:function(e){s(Object(d.a)(Object(d.a)({},i),{},{company:e.target.value}))}}))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-8"},l.a.createElement(p.a.Group,{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement(p.a.Label,{className:" mb-3"},"VAT Number"),l.a.createElement(p.a.Control,{className:"customerInputN",type:"text",placeholder:"Keywords",value:i.vat_number,onChange:function(e){s(Object(d.a)(Object(d.a)({},i),{},{vat_number:e.target.value}))}}))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-8"},l.a.createElement(p.a.Group,{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement(p.a.Label,{className:" mb-3"},"Phone"),l.a.createElement(p.a.Control,{className:"customerInputN",type:"text",placeholder:"Keywords",value:i.mobile,onChange:function(e){s(Object(d.a)(Object(d.a)({},i),{},{mobile:e.target.value}))}}))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-8"},l.a.createElement(p.a.Group,{className:"row"},l.a.createElement("div",{className:"col-sm-6"},l.a.createElement(p.a.Label,{className:" mb-3"},"Website"),l.a.createElement(p.a.Control,{className:"customerInputN",type:"text",placeholder:"Keywords",value:i.website,onChange:function(e){s(Object(d.a)(Object(d.a)({},i),{},{website:e.target.value}))}})),l.a.createElement("div",{className:"col-sm-6"},l.a.createElement(p.a.Label,{className:" mb-3"},"Email"),l.a.createElement(p.a.Control,{className:"customerInputN",type:"text",placeholder:"Keywords",value:i.email,onChange:function(e){s(Object(d.a)(Object(d.a)({},i),{},{email:e.target.value}))}})))),l.a.createElement("div",{className:"col-md-8"},l.a.createElement(p.a.Group,{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement(p.a.Label,{className:" mb-3"},"Groups"),l.a.createElement(p.a.Control,{className:"customerInputN",type:"text",placeholder:"Keywords",value:i.groups,onChange:function(e){s(Object(d.a)(Object(d.a)({},i),{},{groups:e.target.value}))}}))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-4"},l.a.createElement(p.a.Group,{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement(p.a.Label,{className:" mb-3"},"Currency"),l.a.createElement(p.a.Control,{className:"customerInputN",type:"text",placeholder:"Keywords",value:i.currency,onChange:function(e){s(Object(d.a)(Object(d.a)({},i),{},{currency:e.target.value}))}})))),l.a.createElement("div",{className:"col-md-4"},l.a.createElement(p.a.Group,{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement(p.a.Label,{className:" mb-3"},"Default Language"),l.a.createElement(p.a.Control,{className:"customerInputN",type:"text",placeholder:"Keywords",value:i.language,onChange:function(e){s(Object(d.a)(Object(d.a)({},i),{},{language:e.target.value}))}}))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-8"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"exampleFormControlTextarea1"},"Address"),l.a.createElement("textarea",{className:"form-control",id:"exampleFormControlTextarea1",rows:"3",value:i.address,onChange:function(e){s(Object(d.a)(Object(d.a)({},i),{},{address:e.target.value}))}}))),l.a.createElement("div",{className:"col-md-8"},l.a.createElement(p.a.Group,{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement(p.a.Label,{className:" mb-3"},"City"),l.a.createElement(p.a.Control,{className:"customerInputN",type:"text",placeholder:"Keywords",value:i.city,onChange:function(e){s(Object(d.a)(Object(d.a)({},i),{},{city:e.target.value}))}})))),l.a.createElement("div",{className:"col-md-8"},l.a.createElement(p.a.Group,{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement(p.a.Label,{className:" mb-3"},"State"),l.a.createElement(p.a.Control,{className:"customerInputN",type:"text",placeholder:"Keywords",value:i.state,onChange:function(e){s(Object(d.a)(Object(d.a)({},i),{},{state:e.target.value}))}})))),l.a.createElement("div",{className:"col-md-8"},l.a.createElement(p.a.Group,{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement(p.a.Label,{className:" mb-3"},"Zip Code"),l.a.createElement(p.a.Control,{className:"customerInputN",type:"text",placeholder:"Keywords",value:i.zipcode,onChange:function(e){s(Object(d.a)(Object(d.a)({},i),{},{zipcode:e.target.value}))}})))),l.a.createElement("div",{className:"col-md-8"},l.a.createElement(p.a.Group,{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement(p.a.Label,{className:" mb-3"},"Country"),l.a.createElement(p.a.Control,{className:"customerInputN",type:"text",placeholder:"Keywords",value:i.country,onChange:function(e){s(Object(d.a)(Object(d.a)({},i),{},{country:e.target.value}))}}))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-8 text-right"},l.a.createElement("button",{className:"btn btnCustomerProfileN btn-primary",onClick:g},"Save")))))};a(373),a(759);function g(){g=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function l(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(L){l=function(e,t,a){return e[t]=a}}function i(e,t,a,r){var n=t&&t.prototype instanceof m?t:m,o=Object.create(n.prototype),c=new j(r||[]);return o._invoke=function(e,t,a){var r="suspendedStart";return function(n,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw o;return C()}for(a.method=n,a.arg=o;;){var c=a.delegate;if(c){var l=N(c,a);if(l){if(l===u)continue;return l}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var i=s(e,t,a);if("normal"===i.type){if(r=a.done?"completed":"suspendedYield",i.arg===u)continue;return{value:i.arg,done:a.done}}"throw"===i.type&&(r="completed",a.method="throw",a.arg=i.arg)}}}(e,a,c),o}function s(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(L){return{type:"throw",arg:L}}}e.wrap=i;var u={};function m(){}function d(){}function f(){}var p={};l(p,n,(function(){return this}));var h=Object.getPrototypeOf,v=h&&h(h(x([])));v&&v!==t&&a.call(v,n)&&(p=v);var y=f.prototype=m.prototype=Object.create(p);function b(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var r;this._invoke=function(n,o){function c(){return new t((function(r,c){!function r(n,o,c,l){var i=s(e[n],e,o);if("throw"!==i.type){var u=i.arg,m=u.value;return m&&"object"==typeof m&&a.call(m,"__await")?t.resolve(m.__await).then((function(e){r("next",e,c,l)}),(function(e){r("throw",e,c,l)})):t.resolve(m).then((function(e){u.value=e,c(u)}),(function(e){return r("throw",e,c,l)}))}l(i.arg)}(n,o,r,c)}))}return r=r?r.then(c,c):c()}}function N(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,N(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=s(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var n=r.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function x(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:C}}function C(){return{value:void 0,done:!0}}return d.prototype=f,l(y,"constructor",f),l(f,"constructor",d),d.displayName=l(f,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,l(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(E.prototype),l(E.prototype,o,(function(){return this})),e.AsyncIterator=E,e.async=function(t,a,r,n,o){void 0===o&&(o=Promise);var c=new E(i(t,a,r,n),o);return e.isGeneratorFunction(a)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},b(y),l(y,c,"Generator"),l(y,n,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var r=t.pop();if(r in e)return a.value=r,a.done=!1,a}return a.done=!0,a}},e.values=x,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(a,r){return c.type="throw",c.arg=e,t.next=a,r&&(t.method="next",t.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],c=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=a.call(o,"catchLoc"),i=a.call(o,"finallyLoc");if(l&&i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),O(a),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var n=r.arg;O(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:x(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),u}},e}var b=function(){var e=Object(h.useLocation)(),t=Object(h.useHistory)(),a=localStorage.getItem("token"),n=e.state.details;console.log(n);var i=Object(c.useState)(n),s=Object(r.a)(i,2),u=s[0],m=s[1],v=function(){var e=Object(f.a)(g().mark((function e(r){var n,c;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.preventDefault(),n={email:u.email,billAddress:u.billAddress,billCity:u.billCity,billState:u.billState,billZipcode:u.billZipcode,billCountry:u.billCountry},console.log(n);try{c={method:"post",url:"https://qigenix.ixiono.com/apis/admin/save-billing-address",headers:{"Content-Type":"application/json",Authorization:"".concat(a)},data:n},o()(c).then((function(e){alert(e.data.message),t.push("/admin/CustomerList")})).catch((function(e){console.log(e.response.data)}))}catch(l){console.log(l.response.data)}case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return l.a.createElement("div",{className:"col-md-12 grid-margin"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-8"},l.a.createElement("div",{className:"row justify-content-between mt-2"},l.a.createElement("div",{className:"col-6"},l.a.createElement("h4",null,"Billing Address"))),l.a.createElement("form",{className:"form-sample mt-2"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement(p.a.Group,{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement(p.a.Label,{className:" mb-3"},"Email"),l.a.createElement(p.a.Control,{className:"addcustomerInputN",value:u.email,type:"text",name:"email",disabled:!0,onChange:function(e){m(Object(d.a)(Object(d.a)({},u),{},{email:e.target.value}))},placeholder:"Email"})))),l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"exampleFormControlTextarea1"},"Address"),l.a.createElement("textarea",{className:"form-control",id:"exampleFormControlTextarea1",name:"billAddress",value:u.billAddress,onChange:function(e){m(Object(d.a)(Object(d.a)({},u),{},{billAddress:e.target.value}))},rows:"3"}))),l.a.createElement("div",{className:"col-md-12"},l.a.createElement(p.a.Group,{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement(p.a.Label,{className:" mb-3"},"City"),l.a.createElement(p.a.Control,{className:"addcustomerInputN",value:u.billCity,type:"text",onChange:function(e){m(Object(d.a)(Object(d.a)({},u),{},{billCity:e.target.value}))},name:"billCity",placeholder:"City"})))),l.a.createElement("div",{className:"col-md-12"},l.a.createElement(p.a.Group,{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement(p.a.Label,{className:" mb-3"},"State"),l.a.createElement(p.a.Control,{className:"addcustomerInputN",value:u.billState,type:"text",name:"billState",onChange:function(e){m(Object(d.a)(Object(d.a)({},u),{},{billState:e.target.value}))},placeholder:"State"})))),l.a.createElement("div",{className:"col-md-12"},l.a.createElement(p.a.Group,{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement(p.a.Label,{className:" mb-3"},"Zip Code"),l.a.createElement(p.a.Control,{className:"addcustomerInputN",value:u.billZipcode,type:"text",name:"billZipcode",onChange:function(e){m(Object(d.a)(Object(d.a)({},u),{},{billZipcode:e.target.value}))},placeholder:"Zip Code"})))),l.a.createElement("div",{className:"col-md-12"},l.a.createElement(p.a.Group,{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement(p.a.Label,{className:" mb-3"},"Country"),l.a.createElement(p.a.Control,{className:"addcustomerInputN",value:u.billCountry,type:"text",name:"billCountry",onChange:function(e){m(Object(d.a)(Object(d.a)({},u),{},{billCountry:e.target.value}))},placeholder:"Country"})))),l.a.createElement("div",{className:"col-md-12"},l.a.createElement("button",{className:"btn btn-primary",onClick:v},"Save")))))))};t.default=function(){i.CSVExport.ExportCSVButton,Object(m.useHistory)();var e=Object(c.useState)(!1),t=Object(r.a)(e,2),a=t[0],n=(t[1],Object(c.useState)([])),o=Object(r.a)(n,2),s=o[0];o[1],console.log("items is",s);var d=Object(m.useLocation)().state.details;return l.a.createElement("div",null,a?l.a.createElement("div",{className:"row",style:{height:"500px"}},l.a.createElement("div",{className:"col-12 text-center my-auto"},l.a.createElement(u.a,{color:"#136be0",size:100,speedMultiplier:1}))):l.a.createElement("div",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3 grid-margin"},l.a.createElement("div",{className:"page-title-header",style:{fontWeight:"500",fontSize:"17px"}},"#",d.firstName),l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"list-group list-group-flush",id:"list-tab",role:"tablist",style:{borderRadius:"5px"}},l.a.createElement("a",{className:"list-group-item list-group-item-action",id:"list-home-list","data-toggle":"list",href:"/admin/CustomerDetails",role:"tab","aria-controls":"home"},l.a.createElement("i",{class:"fa-regular fa-user text-primary me-2"}),"Customer Details"),l.a.createElement("a",{className:"list-group-item list-group-item-action",id:"list-profile-list","data-toggle":"list",role:"tab","aria-controls":"profile"},l.a.createElement("i",{class:"fa-solid fa-file-pen me-2 text-secondary"})," Contents"),l.a.createElement("a",{className:"list-group-item list-group-item-action",id:"list-messages-list","data-toggle":"list",role:"tab","aria-controls":"messages"},l.a.createElement("i",{class:"fa-regular fa-file-lines me-2 text-secondary"})," Notes")))),l.a.createElement("div",{className:"col-md-9"},l.a.createElement("div",{className:"row m-auto"},l.a.createElement("div",{className:"col-md-12 m-auto grid-margin"},l.a.createElement("div",{className:"page-title-header",style:{fontWeight:"500",fontSize:"17px"}},"Details"),l.a.createElement("div",{className:"card",id:"#list-home-list"},l.a.createElement("div",{className:"card-body"},l.a.createElement("ul",{className:"nav nav-tabs nav-tabs-bordered pt-3 px-2"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("button",{className:"nav-link active","data-bs-toggle":"tab","data-bs-target":"#MyTasks"},"Customer Details")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("button",{className:"nav-link","data-bs-toggle":"tab","data-bs-target":"#MyProjects"},"Billing & shipping"))),l.a.createElement("div",{className:"tab-content pt-2"},l.a.createElement("div",{className:"tab-pane fade show active MyTasks",id:"MyTasks"},l.a.createElement(y,null)),l.a.createElement("div",{className:"tab-pane fade MyProjects pt-3",id:"MyProjects"},l.a.createElement(b,null)))))))))),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"row"})))))}}}]);
//# sourceMappingURL=17.c6809c75.chunk.js.map