(window["webpackJsonpklive-admin"]=window["webpackJsonpklive-admin"]||[]).push([[18],{161:function(e,t,a){"use strict";t.a="https://qigenix.ixiono.com/apis"},162:function(e,t,a){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},n=this&&this.__createBinding||(Object.create?function(e,t,a,r){void 0===r&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}:function(e,t,a,r){void 0===r&&(r=a),e[r]=t[a]}),c=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&n(t,e,a);return c(t,e),t},l=this&&this.__rest||function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};Object.defineProperty(t,"__esModule",{value:!0});var i=o(a(0)),s=a(163),m=(0,a(164).createAnimation)("ClipLoader","0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}","clip");t.default=function(e){var t=e.loading,a=void 0===t||t,n=e.color,c=void 0===n?"#000000":n,o=e.speedMultiplier,u=void 0===o?1:o,d=e.cssOverride,p=void 0===d?{}:d,f=e.size,v=void 0===f?35:f,b=l(e,["loading","color","speedMultiplier","cssOverride","size"]),y=r({background:"transparent !important",width:(0,s.cssValue)(v),height:(0,s.cssValue)(v),borderRadius:"100%",border:"2px solid",borderTopColor:c,borderBottomColor:"transparent",borderLeftColor:c,borderRightColor:c,display:"inline-block",animation:"".concat(m," ").concat(.75/u,"s 0s infinite linear"),animationFillMode:"both"},p);return a?i.createElement("span",r({style:y},b)):null}},163:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.cssValue=t.parseLengthAndUnit=void 0;var r={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function n(e){if("number"===typeof e)return{value:e,unit:"px"};var t,a=(e.match(/^[0-9.]*/)||"").toString();t=a.includes(".")?parseFloat(a):parseInt(a,10);var n=(e.match(/[^0-9]*$/)||"").toString();return r[n]?{value:t,unit:n}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}t.parseLengthAndUnit=n,t.cssValue=function(e){var t=n(e);return"".concat(t.value).concat(t.unit)}},164:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createAnimation=void 0;t.createAnimation=function(e,t,a){var r="react-spinners-".concat(e,"-").concat(a);if("undefined"==typeof window||!window.document)return r;var n=document.createElement("style");document.head.appendChild(n);var c=n.sheet,o="\n    @keyframes ".concat(r," {\n      ").concat(t,"\n    }\n  ");return c&&c.insertRule(o,0),r}},166:function(e,t,a){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var n=a(6),c=r(a(0)),o=a(12);a(3),a(58);var l=r(a(13));function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function s(e,t){e.prototype=Object.create(t.prototype),function(e,t){(Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}(e.prototype.constructor=e,t)}function m(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],0<=t.indexOf(a)||(n[a]=e[a]);return n}var u=function(e){function t(){for(var t,a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(t=e.call.apply(e,[this].concat(r))||this).history=o.createBrowserHistory(t.props),t}return s(t,e),t.prototype.render=function(){return c.createElement(n.Router,{history:this.history,children:this.props.children})},t}(c.Component),d=function(e){function t(){for(var t,a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(t=e.call.apply(e,[this].concat(r))||this).history=o.createHashHistory(t.props),t}return s(t,e),t.prototype.render=function(){return c.createElement(n.Router,{history:this.history,children:this.props.children})},t}(c.Component),p=function(e,t){return"function"==typeof e?e(t):e},f=function(e,t){return"string"==typeof e?o.createLocation(e,null,null,t):e},v=function(e){return e},b=c.forwardRef;void 0===b&&(b=v);var y=b((function(e,t){var a=e.innerRef,r=e.navigate,n=e.onClick,o=m(e,["innerRef","navigate","onClick"]),l=o.target,s=i({},o,{onClick:function(t){try{n&&n(t)}catch(e){throw t.preventDefault(),e}t.defaultPrevented||0!==t.button||l&&"_self"!==l||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(t)||(t.preventDefault(),r())}});return s.ref=v!==b&&t||a,c.createElement("a",s)})),h=b((function(e,t){var a=e.component,r=void 0===a?y:a,s=e.replace,u=e.to,d=e.innerRef,h=m(e,["component","replace","to","innerRef"]);return c.createElement(n.__RouterContext.Consumer,null,(function(e){e||l(!1);var a=e.history,n=f(p(u,e.location),e.location),m=n?a.createHref(n):"",y=i({},h,{href:m,navigate:function(){var t=p(u,e.location),r=o.createPath(e.location)===o.createPath(f(t));(s||r?a.replace:a.push)(t)}});return v!==b?y.ref=t||d:y.innerRef=d,c.createElement(r,y)}))})),N=function(e){return e},E=c.forwardRef;void 0===E&&(E=N);var g=E((function(e,t){var a=e["aria-current"],r=void 0===a?"page":a,o=e.activeClassName,s=void 0===o?"active":o,u=e.activeStyle,d=e.className,v=e.exact,b=e.isActive,y=e.location,g=e.sensitive,w=e.strict,O=e.style,j=e.to,P=e.innerRef,_=m(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return c.createElement(n.__RouterContext.Consumer,null,(function(e){e||l(!1);var a=y||e.location,o=f(p(j,a),a),m=o.pathname,x=m&&m.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),R=x?n.matchPath(a.pathname,{path:x,exact:v,sensitive:g,strict:w}):null,C=!!(b?b(R,a):R),L="function"==typeof d?d(C):d,k="function"==typeof O?O(C):O;C&&(L=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter((function(e){return e})).join(" ")}(L,s),k=i({},k,u));var S=i({"aria-current":C&&r||null,className:L,style:k,to:o},_);return N!==E?S.ref=t||P:S.innerRef=P,c.createElement(h,S)}))}));Object.defineProperty(t,"MemoryRouter",{enumerable:!0,get:function(){return n.MemoryRouter}}),Object.defineProperty(t,"Prompt",{enumerable:!0,get:function(){return n.Prompt}}),Object.defineProperty(t,"Redirect",{enumerable:!0,get:function(){return n.Redirect}}),Object.defineProperty(t,"Route",{enumerable:!0,get:function(){return n.Route}}),Object.defineProperty(t,"Router",{enumerable:!0,get:function(){return n.Router}}),Object.defineProperty(t,"StaticRouter",{enumerable:!0,get:function(){return n.StaticRouter}}),Object.defineProperty(t,"Switch",{enumerable:!0,get:function(){return n.Switch}}),Object.defineProperty(t,"generatePath",{enumerable:!0,get:function(){return n.generatePath}}),Object.defineProperty(t,"matchPath",{enumerable:!0,get:function(){return n.matchPath}}),Object.defineProperty(t,"useHistory",{enumerable:!0,get:function(){return n.useHistory}}),Object.defineProperty(t,"useLocation",{enumerable:!0,get:function(){return n.useLocation}}),Object.defineProperty(t,"useParams",{enumerable:!0,get:function(){return n.useParams}}),Object.defineProperty(t,"useRouteMatch",{enumerable:!0,get:function(){return n.useRouteMatch}}),Object.defineProperty(t,"withRouter",{enumerable:!0,get:function(){return n.withRouter}}),t.BrowserRouter=u,t.HashRouter=d,t.Link=h,t.NavLink=g},58:function(e,t,a){"use strict";a.r(t);t.default=function(e,t){}},683:function(e,t,a){},844:function(e,t,a){"use strict";a.r(t);var r=a(18),n=(a(93),a(0)),c=a.n(n),o=(a(171),a(173)),l=a(162),i=a.n(l),s=a(6),m=(a(161),a(154)),u=(a(683),a(166)),d=function(){var e=Object(u.useLocation)().state.details;return console.log(e),c.a.createElement("div",{className:"col-12 grid-margin"},c.a.createElement("div",{className:"row mt-2"},c.a.createElement("div",{className:"col-12"},c.a.createElement("div",{className:"form-check"}))),c.a.createElement("form",{className:"form-sample"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-8"},c.a.createElement(m.a.Group,{className:"row"},c.a.createElement("div",{className:"col-sm-12"},c.a.createElement(m.a.Label,{className:" mb-3"},c.a.createElement("span",{className:"text-danger"},"*")," Device Id"),c.a.createElement(m.a.Control,{className:"customerInputN",type:"text",placeholder:"Keywords",value:e.device_id}))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-8"},c.a.createElement(m.a.Group,{className:"row"},c.a.createElement("div",{className:"col-sm-12"},c.a.createElement(m.a.Label,{className:" mb-3"},"Device Name"),c.a.createElement(m.a.Control,{className:"customerInputN",type:"text",placeholder:"Keywords",value:e.device_name}))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-8"},c.a.createElement(m.a.Group,{className:"row"},c.a.createElement("div",{className:"col-sm-12"},c.a.createElement(m.a.Label,{className:" mb-3"},"device Brand"),c.a.createElement(m.a.Control,{className:"customerInputN",type:"text",placeholder:"Keywords",value:e.device_brand}))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-8"},c.a.createElement(m.a.Group,{className:"row"},c.a.createElement("div",{className:"col-sm-12"},c.a.createElement(m.a.Label,{className:" mb-3"},"Amount($)"),c.a.createElement(m.a.Control,{className:"customerInputN",type:"text",placeholder:"Keywords",value:e.amount}))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-8"},c.a.createElement(m.a.Group,{className:"row"},c.a.createElement("div",{className:"col-sm-12"},c.a.createElement(m.a.Label,{className:" mb-3"},"Tax"),c.a.createElement(m.a.Control,{className:"customerInputN",type:"text",placeholder:"Keywords",value:e.tax_percentage+"%"}))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-8"},c.a.createElement(m.a.Group,{className:"row"},c.a.createElement("div",{className:"col-sm-12"},c.a.createElement(m.a.Label,{className:" mb-3"},"Device License Key"),c.a.createElement(m.a.Control,{className:"customerInputN",type:"text",placeholder:"Keywords",value:e.device_license_key}))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-8"},c.a.createElement(m.a.Group,{className:"row"},c.a.createElement("div",{className:"col-sm-12"},c.a.createElement(m.a.Label,{className:" mb-3"},"Created At"),c.a.createElement(m.a.Control,{className:"customerInputN",type:"text",placeholder:"Keywords",value:e.createdAt})))),c.a.createElement("div",{className:"col-md-8"},c.a.createElement(m.a.Group,{className:"row"},c.a.createElement("div",{className:"col-sm-12"},c.a.createElement(m.a.Label,{className:" mb-3"},"Updated At"),c.a.createElement(m.a.Control,{className:"customerInputN",type:"text",placeholder:"Keywords",value:e.updatedAt}))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-8 text-right"},c.a.createElement("button",{className:"btn btnCustomerProfileN btn-primary"},"Save")))))};t.default=function(){o.CSVExport.ExportCSVButton,Object(s.useHistory)();var e=Object(n.useState)(!1),t=Object(r.a)(e,2),a=t[0],l=(t[1],Object(n.useState)([])),m=Object(r.a)(l,2),u=m[0];m[1],console.log("items is",u);var p=Object(s.useLocation)().state.details;return c.a.createElement("div",null,a?c.a.createElement("div",{className:"row",style:{height:"500px"}},c.a.createElement("div",{className:"col-12 text-center my-auto"},c.a.createElement(i.a,{color:"#136be0",size:100,speedMultiplier:1}))):c.a.createElement("div",null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-4 grid-margin"},c.a.createElement("div",{className:"page-title-header",style:{fontWeight:"500",fontSize:"17px"}},"#",p.device_id),c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"list-group list-group-flush",id:"list-tab",role:"tablist",style:{borderRadius:"5px"}},c.a.createElement("a",{className:"list-group-item list-group-item-action",id:"list-home-list","data-toggle":"list",href:"#list-home",role:"tab","aria-controls":"home"},"Profile"),c.a.createElement("a",{className:"list-group-item list-group-item-action",id:"list-profile-list","data-toggle":"list",href:"#list-profile",role:"tab","aria-controls":"profile"},"Contents"),c.a.createElement("a",{className:"list-group-item list-group-item-action",id:"list-messages-list","data-toggle":"list",href:"#list-messages",role:"tab","aria-controls":"messages"},"Notes")))),c.a.createElement("div",{className:"col-md-8"},c.a.createElement("div",{className:"row m-auto"},c.a.createElement("div",{className:"col-md-12 m-auto grid-margin"},c.a.createElement("div",{className:"page-title-header",style:{fontWeight:"500",fontSize:"17px"}},"Device Details"),c.a.createElement("div",{className:"card",id:"#list-home-list"},c.a.createElement("div",{className:"card-body"},c.a.createElement("ul",{className:"nav nav-tabs nav-tabs-bordered pt-3 px-2"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("button",{className:"nav-link active","data-bs-toggle":"tab","data-bs-target":"#MyTasks"},"Device Details"))),c.a.createElement("div",{className:"tab-content pt-2"},c.a.createElement("div",{className:"tab-pane fade show active MyTasks",id:"MyTasks"},c.a.createElement(d,null)))))))))),c.a.createElement("div",{className:"col-md-4"},c.a.createElement("div",{className:"row"})))))}}}]);
//# sourceMappingURL=18.45c60a5f.chunk.js.map