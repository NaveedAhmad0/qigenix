(window["webpackJsonpklive-admin"]=window["webpackJsonpklive-admin"]||[]).push([[33],{169:function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var o=r(6),a=n(r(0)),i=r(12);r(3),r(63);var c=n(r(13));function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){e.prototype=Object.create(t.prototype),function(e,t){(Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}(e.prototype.constructor=e,t)}function l(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],0<=t.indexOf(r)||(o[r]=e[r]);return o}var f=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).history=i.createBrowserHistory(t.props),t}return s(t,e),t.prototype.render=function(){return a.createElement(o.Router,{history:this.history,children:this.props.children})},t}(a.Component),h=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).history=i.createHashHistory(t.props),t}return s(t,e),t.prototype.render=function(){return a.createElement(o.Router,{history:this.history,children:this.props.children})},t}(a.Component),m=function(e,t){return"function"==typeof e?e(t):e},p=function(e,t){return"string"==typeof e?i.createLocation(e,null,null,t):e},d=function(e){return e},y=a.forwardRef;void 0===y&&(y=d);var v=y((function(e,t){var r=e.innerRef,n=e.navigate,o=e.onClick,i=l(e,["innerRef","navigate","onClick"]),c=i.target,s=u({},i,{onClick:function(t){try{o&&o(t)}catch(e){throw t.preventDefault(),e}t.defaultPrevented||0!==t.button||c&&"_self"!==c||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(t)||(t.preventDefault(),n())}});return s.ref=d!==y&&t||r,a.createElement("a",s)})),g=y((function(e,t){var r=e.component,n=void 0===r?v:r,s=e.replace,f=e.to,h=e.innerRef,g=l(e,["component","replace","to","innerRef"]);return a.createElement(o.__RouterContext.Consumer,null,(function(e){e||c(!1);var r=e.history,o=p(m(f,e.location),e.location),l=o?r.createHref(o):"",v=u({},g,{href:l,navigate:function(){var t=m(f,e.location),n=i.createPath(e.location)===i.createPath(p(t));(s||n?r.replace:r.push)(t)}});return d!==y?v.ref=t||h:v.innerRef=h,a.createElement(n,v)}))})),b=function(e){return e},w=a.forwardRef;void 0===w&&(w=b);var E=w((function(e,t){var r=e["aria-current"],n=void 0===r?"page":r,i=e.activeClassName,s=void 0===i?"active":i,f=e.activeStyle,h=e.className,d=e.exact,y=e.isActive,v=e.location,E=e.sensitive,x=e.strict,j=e.style,O=e.to,k=e.innerRef,N=l(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return a.createElement(o.__RouterContext.Consumer,null,(function(e){e||c(!1);var r=v||e.location,i=p(m(O,r),r),l=i.pathname,L=l&&l.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),P=L?o.matchPath(r.pathname,{path:L,exact:d,sensitive:E,strict:x}):null,R=!!(y?y(P,r):P),_="function"==typeof h?h(R):h,S="function"==typeof j?j(R):j;R&&(_=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((function(e){return e})).join(" ")}(_,s),S=u({},S,f));var C=u({"aria-current":R&&n||null,className:_,style:S,to:i},N);return b!==w?C.ref=t||k:C.innerRef=k,a.createElement(g,C)}))}));Object.defineProperty(t,"MemoryRouter",{enumerable:!0,get:function(){return o.MemoryRouter}}),Object.defineProperty(t,"Prompt",{enumerable:!0,get:function(){return o.Prompt}}),Object.defineProperty(t,"Redirect",{enumerable:!0,get:function(){return o.Redirect}}),Object.defineProperty(t,"Route",{enumerable:!0,get:function(){return o.Route}}),Object.defineProperty(t,"Router",{enumerable:!0,get:function(){return o.Router}}),Object.defineProperty(t,"StaticRouter",{enumerable:!0,get:function(){return o.StaticRouter}}),Object.defineProperty(t,"Switch",{enumerable:!0,get:function(){return o.Switch}}),Object.defineProperty(t,"generatePath",{enumerable:!0,get:function(){return o.generatePath}}),Object.defineProperty(t,"matchPath",{enumerable:!0,get:function(){return o.matchPath}}),Object.defineProperty(t,"useHistory",{enumerable:!0,get:function(){return o.useHistory}}),Object.defineProperty(t,"useLocation",{enumerable:!0,get:function(){return o.useLocation}}),Object.defineProperty(t,"useParams",{enumerable:!0,get:function(){return o.useParams}}),Object.defineProperty(t,"useRouteMatch",{enumerable:!0,get:function(){return o.useRouteMatch}}),Object.defineProperty(t,"withRouter",{enumerable:!0,get:function(){return o.withRouter}}),t.BrowserRouter=f,t.HashRouter=h,t.Link=g,t.NavLink=E},171:function(e,t,r){"use strict";t.a="https://qigenix.ixiono.com/apis"},63:function(e,t,r){"use strict";r.r(t);t.default=function(e,t){}},779:function(e,t,r){},883:function(e,t,r){"use strict";r.r(t);var n=r(65),o=r(15),a=r(0),i=r.n(a),c=r(163),u=(r(779),r(169)),s=r(62),l=r.n(s),f=r(171),h=r(190),m=r.n(h);function p(){p=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(L){c=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var o=t&&t.prototype instanceof f?t:f,a=Object.create(o.prototype),i=new O(n||[]);return a._invoke=function(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return N()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(e,r,i),a}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(L){return{type:"throw",arg:L}}}e.wrap=u;var l={};function f(){}function h(){}function m(){}var d={};c(d,o,(function(){return this}));var y=Object.getPrototypeOf,v=y&&y(y(k([])));v&&v!==t&&r.call(v,o)&&(d=v);var g=m.prototype=f.prototype=Object.create(d);function b(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var n;this._invoke=function(o,a){function i(){return new t((function(n,i){!function n(o,a,i,c){var u=s(e[o],e,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(f).then((function(e){l.value=e,i(l)}),(function(e){return n("throw",e,i,c)}))}c(u.arg)}(o,a,n,i)}))}return n=n?n.then(i,i):i()}}function E(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return l;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=s(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,l;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,l):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,l)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function k(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:N}}function N(){return{value:void 0,done:!0}}return h.prototype=m,c(g,"constructor",m),c(m,"constructor",h),h.displayName=c(m,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(w.prototype),c(w.prototype,a,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new w(u(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(g),c(g,i,"Generator"),c(g,o,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=k,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,l):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),l},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),l}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:k(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},e}t.default=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),r=t[0],s=t[1],h=Object(a.useState)({}),d=Object(o.a)(h,2),y=d[0],v=d[1],g=Object(a.useState)(""),b=Object(o.a)(g,2),w=b[0],E=b[1],x=Object(a.useState)(!1),j=Object(o.a)(x,2),O=j[0],k=j[1],N=Object(u.useLocation)(),L=localStorage.getItem("token"),P=localStorage.getItem("adminId"),R=N.state.tokenId,_=function(){var e=Object(n.a)(p().mark((function e(){var t;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t={method:"get",url:"".concat(f.a,"/admin/getTokenDetails/").concat(R),headers:{"Content-Type":"application/json",Authorization:"".concat(L)}},l()(t).then((function(e){s(e.data.tokens.tokenMessages),v(e.data.tokens),console.log(e.data.tokens.tokenMessages)})).catch((function(e){console.log(e.data.tokens.tokenMessages)}))}catch(r){console.log(r.data.tokens.tokenMessages)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(n.a)(p().mark((function e(t){var r,n;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),r={senderID:P,token_id:R,message:w};try{n={method:"post",url:"".concat(f.a,"/admin/send-token-message"),headers:{"Content-Type":"application/json",Authorization:"".concat(L)},data:r},l()(n).then((function(e){alert(e.data.message),console.log(e.data.message),k(!O),E("")})).catch((function(e){console.log(e.response.data.tokens.tokenMessages)}))}catch(o){console.log(o.response.data.tokens.tokenMessages)}case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){_()}),[]),Object(a.useEffect)((function(){_()}),[O]),i.a.createElement("div",null,i.a.createElement("div",{className:"d-flex align-items-center auth px-0"},i.a.createElement("div",{className:"row w-100 mx-0"},i.a.createElement("div",{className:"col-12 d-flex justify-content-between"},i.a.createElement("h4",{className:"loginTittle text-left"},"Customer Support")),i.a.createElement("div",{className:"row mt-5"}),i.a.createElement("div",{className:"col-lg-8 "},i.a.createElement("h5",{className:"text-primary"},"#",y.firstName,"'s Messages"),i.a.createElement("div",{className:"auth-form-light messageBox loginForm text-left py-5 px-4 px-sm-5"},i.a.createElement("h5",{className:"text-black"},"Customer Id:"," ",i.a.createElement("span",{className:"h5 text-primary"},y.customer_id)," "),i.a.createElement("h5",{className:"text-black mb-3"},"Subject:"," ",i.a.createElement("span",{className:"h5 text-primary"},y.subject)," "),i.a.createElement("div",{class:"accordion",id:"accordionExample"},r.map((function(e){return i.a.createElement("div",{className:"row"},i.a.createElement("p",{className:"user"===e.sentFrom?"message p-1 text-left":"admin"===e.sentFrom&&"message p-1 text-right"},e.message," ",i.a.createElement("br",null),i.a.createElement("p",{style:{fontSize:"9px"}},m()(e.createdAt).local().format("DD-MM-YYYY hh:mm:ss "))))}))))),i.a.createElement("div",{className:"col-lg-4 "},i.a.createElement("h5",{className:"text-primary"},"Chat with Customer"),i.a.createElement("div",{className:"auth-form-light loginForm text-left py-3 px-4 px-sm-5"},i.a.createElement(c.a,{className:"pt-3"},i.a.createElement(c.a.Group,{className:"mb-3",controlId:"formBasicPassword"},i.a.createElement(c.a.Label,{className:"loginFormLabel "},i.a.createElement("p",null,i.a.createElement("i",{className:"fa-solid fa-message"})," Message")),i.a.createElement("div",{className:"form-group"},i.a.createElement("textarea",{className:"form-control",id:"exampleFormControlTextarea1",name:"mssage",value:w,onChange:function(e){return E(e.target.value)},rows:"4"}))),i.a.createElement("div",{className:"mt-1"},i.a.createElement("button",{type:"button",onClick:function(e){S(e)},className:"btn btn-primary btn-block rounded-lg loginbtn btn-lg font-weight-medium auth-form-btn"},"Submit"))))))))}}}]);
//# sourceMappingURL=33.40b0b3d3.chunk.js.map