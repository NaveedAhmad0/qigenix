(window["webpackJsonpqigenix-admin"]=window["webpackJsonpqigenix-admin"]||[]).push([[12],{173:function(e,t,a){"use strict";var r=Object({NODE_ENV:"production",PUBLIC_URL:"/admin"}).REACT_APP_BACKEND;t.a=r},174:function(e,t,a){"use strict";function r(e,t,a,r,n,l,o){try{var c=e[l](o),i=c.value}catch(m){return void a(m)}c.done?t(i):Promise.resolve(i).then(r,n)}function n(e){return function(){var t=this,a=arguments;return new Promise((function(n,l){var o=e.apply(t,a);function c(e){r(o,n,l,c,i,"next",e)}function i(e){r(o,n,l,c,i,"throw",e)}c(void 0)}))}}a.d(t,"a",(function(){return n}))},175:function(e,t,a){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},n=this&&this.__createBinding||(Object.create?function(e,t,a,r){void 0===r&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}:function(e,t,a,r){void 0===r&&(r=a),e[r]=t[a]}),l=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&n(t,e,a);return l(t,e),t},c=this&&this.__rest||function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};Object.defineProperty(t,"__esModule",{value:!0});var i=o(a(0)),m=a(176),s=(0,a(177).createAnimation)("ClipLoader","0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}","clip");t.default=function(e){var t=e.loading,a=void 0===t||t,n=e.color,l=void 0===n?"#000000":n,o=e.speedMultiplier,u=void 0===o?1:o,d=e.cssOverride,p=void 0===d?{}:d,f=e.size,h=void 0===f?35:f,v=c(e,["loading","color","speedMultiplier","cssOverride","size"]),E=r({background:"transparent !important",width:(0,m.cssValue)(h),height:(0,m.cssValue)(h),borderRadius:"100%",border:"2px solid",borderTopColor:l,borderBottomColor:"transparent",borderLeftColor:l,borderRightColor:l,display:"inline-block",animation:"".concat(s," ").concat(.75/u,"s 0s infinite linear"),animationFillMode:"both"},p);return a?i.createElement("span",r({style:E},v)):null}},176:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.cssValue=t.parseLengthAndUnit=void 0;var r={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function n(e){if("number"===typeof e)return{value:e,unit:"px"};var t,a=(e.match(/^[0-9.]*/)||"").toString();t=a.includes(".")?parseFloat(a):parseInt(a,10);var n=(e.match(/[^0-9]*$/)||"").toString();return r[n]?{value:t,unit:n}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}t.parseLengthAndUnit=n,t.cssValue=function(e){var t=n(e);return"".concat(t.value).concat(t.unit)}},177:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createAnimation=void 0;t.createAnimation=function(e,t,a){var r="react-spinners-".concat(e,"-").concat(a);if("undefined"==typeof window||!window.document)return r;var n=document.createElement("style");document.head.appendChild(n);var l=n.sheet,o="\n    @keyframes ".concat(r," {\n      ").concat(t,"\n    }\n  ");return l&&l.insertRule(o,0),r}},547:function(e,t,a){},599:function(e,t,a){"use strict";a.r(t);var r=a(174),n=a(19),l=a(103),o=a.n(l),c=a(0),i=a.n(c),m=a(6),s=a(173),u=a(175),d=a.n(u),p=a(547),f=a.n(p);a(75);function h(){h=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",l=r.asyncIterator||"@@asyncIterator",o=r.toStringTag||"@@toStringTag";function c(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(k){c=function(e,t,a){return e[t]=a}}function i(e,t,a,r){var n=t&&t.prototype instanceof u?t:u,l=Object.create(n.prototype),o=new O(r||[]);return l._invoke=function(e,t,a){var r="suspendedStart";return function(n,l){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw l;return F()}for(a.method=n,a.arg=l;;){var o=a.delegate;if(o){var c=N(o,a);if(c){if(c===s)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var i=m(e,t,a);if("normal"===i.type){if(r=a.done?"completed":"suspendedYield",i.arg===s)continue;return{value:i.arg,done:a.done}}"throw"===i.type&&(r="completed",a.method="throw",a.arg=i.arg)}}}(e,a,o),l}function m(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(k){return{type:"throw",arg:k}}}e.wrap=i;var s={};function u(){}function d(){}function p(){}var f={};c(f,n,(function(){return this}));var v=Object.getPrototypeOf,E=v&&v(v(I([])));E&&E!==t&&a.call(E,n)&&(f=E);var b=p.prototype=u.prototype=Object.create(f);function y(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function g(e,t){var r;this._invoke=function(n,l){function o(){return new t((function(r,o){!function r(n,l,o,c){var i=m(e[n],e,l);if("throw"!==i.type){var s=i.arg,u=s.value;return u&&"object"==typeof u&&a.call(u,"__await")?t.resolve(u.__await).then((function(e){r("next",e,o,c)}),(function(e){r("throw",e,o,c)})):t.resolve(u).then((function(e){s.value=e,o(s)}),(function(e){return r("throw",e,o,c)}))}c(i.arg)}(n,l,r,o)}))}return r=r?r.then(o,o):o()}}function N(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,N(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=m(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,s;var n=r.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function I(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,l=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return l.next=l}}return{next:F}}function F(){return{value:void 0,done:!0}}return d.prototype=p,c(b,"constructor",p),c(p,"constructor",d),d.displayName=c(p,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,o,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},y(g.prototype),c(g.prototype,l,(function(){return this})),e.AsyncIterator=g,e.async=function(t,a,r,n,l){void 0===l&&(l=Promise);var o=new g(i(t,a,r,n),l);return e.isGeneratorFunction(a)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},y(b),c(b,o,"Generator"),c(b,n,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var r=t.pop();if(r in e)return a.value=r,a.done=!1,a}return a.done=!0,a}},e.values=I,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(a,r){return o.type="throw",o.arg=e,t.next=a,r&&(t.method="next",t.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var l=this.tryEntries[n],o=l.completion;if("root"===l.tryLoc)return r("end");if(l.tryLoc<=this.prev){var c=a.call(l,"catchLoc"),i=a.call(l,"finallyLoc");if(c&&i){if(this.prev<l.catchLoc)return r(l.catchLoc,!0);if(this.prev<l.finallyLoc)return r(l.finallyLoc)}else if(c){if(this.prev<l.catchLoc)return r(l.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return r(l.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var l=n;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var o=l?l.completion:{};return o.type=e,o.arg=t,l?(this.method="next",this.next=l.finallyLoc,s):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),x(a),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var n=r.arg;x(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:I(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),s}},e}t.default=function(){var e=Object(m.useLocation)(),t=Object(c.useState)({id:0,name:"",mobile:"",email:"",merchantName:"",personType:"",InitialShop:"",firstName:"",surName:"",yearOfBirth:"",monthOfBirth:"",dayOfBirth:"",address:"",province:"",district:"",subDivision:"",pincode:0,shopType:"",creditCard:"",weChat:"",livePayment:"",mobileBanking:"",trueWallet:"",shopeePay:"",alone:"",website:"",facebook:"",linkedin:"",instagram:"",other:"",company:"",bank:"",bankAccount:0,rnfCode:"",domestic:"",inter:"",rateQrCode:"",rateBarCode:"",copyOfId:"",logo:"",bankBook:"",otherDocument:"",transaction:"",withdraw:""}),l=Object(n.a)(t,2),u=l[0],p=l[1],v=u.id,E=u.name,b=u.mobile,y=u.email,g=u.merchantName,N=u.InitialShop,w=u.firstName,x=u.yearOfBirth,O=u.monthOfBirth,I=u.dayOfBirth,F=u.address,k=u.province,j=u.district,U=u.subDivision,C=u.inter,_=u.rnfCode,L=u.bank,P=u.logo,B=u.rateQrCode,S=u.domestic,A=u.company,D=u.bankAccount,T=u.website,M=u.facebook,R=u.linkedin,G=u.instagram,W=u.other,Q=u.transaction,V=u.withdraw,z=Object(c.useState)({}),J=Object(n.a)(z,2),Y=J[0],q=J[1],H=Object(c.useState)({}),K=Object(n.a)(H,2),$=K[0],X=K[1],Z=Object(c.useState)(!1),ee=Object(n.a)(Z,2),te=(ee[0],ee[1]),ae=Object(c.useState)(!0),re=Object(n.a)(ae,2),ne=re[0],le=re[1],oe=e.state.merchantId;function ce(){return(ce=Object(r.a)(h().mark((function e(t){return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,o.a.patch("".concat(s.a,"/admin/fees-by-id?merchantId=").concat(oe),JSON.stringify({TransactionFee:parseInt(Y),withdrawFee:parseInt($)}),{headers:{"Content-Type":"application/json"}}).then((function(e){q(""),X(""),console.log(e),alert("Fee Added Succesfully")}));case 4:e.sent,te(!0),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),alert("something went wrong"),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}var ie=e.state.merchantdataEmail,me=Object(c.useCallback)((function(){try{o.a.get("".concat(s.a,"/merchant/get-profile?email=").concat(ie)).then((function(e){p({id:e.data.merchant.id,name:e.data.merchant.name,mobile:e.data.merchant.mobile,email:e.data.merchant.email,merchantName:e.data.merchant.merchantName,personType:e.data.merchant.personType,InitialShop:e.data.merchant.InitialShop,firstName:e.data.merchant.firstName,surName:e.data.merchant.surName,yearOfBirth:e.data.merchant.yearOfBirth,monthOfBirth:e.data.merchant.monthOfBirth,dayOfBirth:e.data.merchant.dayOfBirth,address:e.data.merchant.address,province:e.data.merchant.province,district:e.data.merchant.district,subDivision:e.data.merchant.subDivision,pincode:e.data.merchant.pincode,shopType:e.data.merchant.shopType,creditCard:e.data.merchant.creditCard,weChat:e.data.merchant.weChat,livePayment:e.data.merchant.livePayment,mobileBanking:e.data.merchant.mobileBanking,trueWallet:e.data.merchant.trueWallet,shopeePay:e.data.merchant.shopeePay,alone:e.data.merchant.alone,website:e.data.merchant.website,facebook:e.data.merchant.facebook,linkedin:e.data.merchant.linkedin,instagram:e.data.merchant.instagram,other:e.data.merchant.other,company:e.data.merchant.company,bank:e.data.merchant.bank,bankAccount:e.data.merchant.bankAccount,rnfCode:e.data.merchant.rnfCode,domestic:e.data.merchant.domestic,inter:e.data.merchant.inter,rateQrCode:e.data.merchant.rateQrCode,rateBarCode:e.data.merchant.rateBarCode,copyOfId:e.data.merchant.copyOfId,logo:e.data.merchant.logo,bankBook:e.data.merchant.bankBook,otherDocument:e.data.merchant.otherDocument,transaction:e.data.merchant.transaction,withdraw:e.data.merchant.withdraw}),console.log("merchant DATA IS ",e.data.merchant),le(!1),setTimeout((function(){le(!1)}),3e3)}))}catch(e){console.log(e)}}),[Y,$]);return Object(c.useEffect)((function(){me()}),[]),Object(c.useEffect)((function(){me()}),[Y,$]),i.a.createElement("div",{className:"col-12 grid-margin userProfileMain"},i.a.createElement("h4",{className:"card-title fs-3"},"Personal Admin Information"),ne?i.a.createElement("div",{className:"row",style:{height:"500px"}},i.a.createElement("div",{className:"col-12 text-center my-auto"},i.a.createElement(d.a,{color:"#136be0",size:100,speedMultiplier:1}))):i.a.createElement("div",{className:"card userProfileCard-2 "},i.a.createElement("div",{className:"row flex-column mt-5 mx-auto card text-white w-30 mb-5",style:{backgroundColor:"#007BFF",fontWeight:"500",lineHeight:"1",fontSize:"10px"}},i.a.createElement("img",{className:"profile-img mt-3 mb-2",src:a(104),alt:"Profile"}),i.a.createElement("div",{className:"mt-2 mx-auto"},i.a.createElement("p",{className:"text-white"},"Email: ",i.a.createElement("span",{className:"text-warning"},y)))),i.a.createElement("div",{className:"col-12 grid-margin"},i.a.createElement("h4",{className:"card-title fs-4"},"Merchant Personal Information"),i.a.createElement("div",{className:"card userCard p-lg-2"},i.a.createElement("div",{className:"card-body ".concat(f.a.usercardbody)},i.a.createElement("form",{className:"row g-3 form-sample"},i.a.createElement("div",{class:"col-md-6"},i.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Merchant ID :"),i.a.createElement("input",{className:"form-control",id:"inputEmail4",value:v})),i.a.createElement("div",{class:"col-md-6"},i.a.createElement("label",{htmlFor:"exampleInputUsername1",className:" form-label"},"Merchant Name :"),i.a.createElement("input",{className:"form-control",id:"inputPassword4",value:g})),i.a.createElement("div",{class:"col-md-6"},i.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label"},"Merchant Name English :"),i.a.createElement("input",{className:"form-control",id:"inputEmail4",value:E})),i.a.createElement("div",{class:"col-md-6"},i.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label"},"Email Address :"),i.a.createElement("input",{className:"form-control",id:"inputPassword4",value:y})),i.a.createElement("div",{class:"col-md-12"},i.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label"},"Initial Shop :"),i.a.createElement("input",{className:"form-control",id:"inputEmail4",value:N}))),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("form",{className:"row g-3 form-sample"},i.a.createElement("div",{class:"col-md-6"},i.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label"},"First Name:"),i.a.createElement("input",{className:"form-control",id:"inputEmail4",value:w})),i.a.createElement("div",{class:"col-md-6"},i.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Email :"),i.a.createElement("input",{className:"form-control",id:"inputEmail4",value:y})),i.a.createElement("div",{class:"col-md-4"},i.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Year of Birth :"),i.a.createElement("input",{className:"form-control",id:"inputEmail4",value:x})),i.a.createElement("div",{class:"col-md-4"},i.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Month Of Birth :"),i.a.createElement("input",{className:"form-control",id:"inputEmail4",value:O})),i.a.createElement("div",{class:"col-md-4"},i.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Day Of Birth :"),i.a.createElement("input",{className:"form-control",id:"inputEmail4",value:I})),i.a.createElement("div",{class:"col-md-6"},i.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Contact Number :"),i.a.createElement("input",{className:"form-control",id:"inputEmail4",value:b})),i.a.createElement("div",{class:"col-md-6"},i.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Address :"),i.a.createElement("input",{className:"form-control",id:"inputEmail4",value:F}))),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("form",{className:"row g-3 form-sample"},i.a.createElement("div",{class:"col-md-6"},i.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Provience :"),i.a.createElement("input",{className:"form-control",id:"inputEmail4",value:k})),i.a.createElement("div",{class:"col-md-6"},i.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Sub Division :"),i.a.createElement("input",{className:"form-control",id:"inputEmail4",value:U})),i.a.createElement("div",{class:"col-md-6"},i.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label"},"District :"),i.a.createElement("input",{className:"form-control",id:"inputEmail4",value:j})),i.a.createElement("div",{class:"col-md-6"},i.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Mobile no :"),i.a.createElement("input",{className:"form-control",id:"inputEmail4",value:b}))),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("form",{className:"row g-3 form-sample"},i.a.createElement("div",{class:"col-md-6"},i.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label"},"Web Site :"),i.a.createElement("input",{className:"form-control",id:"inputEmail4",value:T})),i.a.createElement("div",{class:"col-md-6"},i.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label"},"Linked in :"),i.a.createElement("input",{className:"form-control",id:"inputEmail4",value:R})),i.a.createElement("div",{class:"col-md-6"},i.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Facebok :"),i.a.createElement("input",{className:"form-control",id:"inputEmail4",value:M})),i.a.createElement("div",{class:"col-md-6"},i.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Instagram :"),i.a.createElement("input",{className:"form-control",id:"inputEmail4",value:G})),i.a.createElement("div",{class:"col-md-6"},i.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label"},"Other :"),i.a.createElement("input",{className:"form-control",id:"inputEmail4",value:W}))),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("form",{className:"row g-3 form-sample"},i.a.createElement("div",{class:"col-md-6"},i.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Copy Of Id Card (Up to 5mb):"," "),i.a.createElement("input",{className:"form-control",id:"inputEmail4"})),i.a.createElement("div",{class:"col-md-6"},i.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Book Bank :"),i.a.createElement("input",{className:"form-control",id:"inputEmail4"})),i.a.createElement("div",{class:"col-md-6"},i.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Company :"," "),i.a.createElement("input",{className:"form-control",id:"inputEmail4",value:A})),i.a.createElement("div",{class:"col-md-6"},i.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label text-primary"},"Bank Account :"),i.a.createElement("input",{className:"form-control",id:"inputEmail4",value:D})),i.a.createElement("div",{class:"col-md-6"},i.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Domestic :"," "),i.a.createElement("input",{className:"form-control",id:"inputEmail4",value:S})),i.a.createElement("div",{class:"col-md-6"},i.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Rate Of QR Code :"," "),i.a.createElement("input",{className:"form-control",id:"inputEmail4",value:B}))),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("form",{className:"row g-3 form-sample"},i.a.createElement("div",{class:"col-md-6"},i.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label"},"Logo :"),i.a.createElement("input",{className:"form-control",id:"inputEmail4",value:P})),i.a.createElement("div",{class:"col-md-6"},i.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Other document: :"," "),i.a.createElement("input",{className:"form-control",id:"inputEmail4"})),i.a.createElement("div",{class:"col-md-6"},i.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Bank :"),i.a.createElement("input",{className:"form-control",id:"inputEmail4",value:L})),i.a.createElement("div",{class:"col-md-6"},i.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Rnf Code :"," "),i.a.createElement("input",{className:"form-control",id:"inputEmail4",value:_})),i.a.createElement("div",{class:"col-md-6"},i.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"Inter :"," "),i.a.createElement("input",{className:"form-control",id:"inputEmail4",value:C})),i.a.createElement("div",{class:"col-md-6"},i.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label"},"Rate Of Bar Code :"," "),i.a.createElement("input",{className:"form-control",id:"inputEmail4"})),i.a.createElement("div",{class:"col-md-6"},i.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label"},"Transaction Fee (%) :"," "),i.a.createElement("input",{className:"form-control",id:"inputEmail4",value:Q})),i.a.createElement("div",{class:"col-md-6"},i.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label"},"Withdraw Fee (%) :"," "),i.a.createElement("input",{className:"form-control",id:"inputEmail4",value:V}))),i.a.createElement("br",null),i.a.createElement("form",{className:"row g-3 form-sample"},i.a.createElement("h3",null,"Add Fee to this merchant"),i.a.createElement("div",{class:"col-md-6"},i.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label"},"TransactionFee(%) :"),i.a.createElement("input",{className:"form-control",type:"number",value:Y,onChange:function(e){return q(parseInt(e.target.value))}})),i.a.createElement("div",{class:"col-md-6"},i.a.createElement("label",{htmlFor:"exampleInputUsername1",className:"form-label "},"withdrawFee (%) :"," "),i.a.createElement("input",{className:"form-control",type:"number",value:$,onChange:function(e){return X(parseInt(e.target.value))}})),i.a.createElement("div",{class:"col-md-12 text-center"},i.a.createElement("button",{type:"button",className:"btn text-center btn-success w-100  rounded-pill",onClick:function(e){return ce.apply(this,arguments)}}," ","Add Fee"," "))))),i.a.createElement("br",null),i.a.createElement("div",{className:"text-center"}))))}}}]);
//# sourceMappingURL=12.c95bf741.chunk.js.map