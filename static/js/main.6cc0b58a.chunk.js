(this["webpackJsonptodolist-practice"]=this["webpackJsonptodolist-practice"]||[]).push([[0],{180:function(e,n,t){},182:function(e,n,t){},206:function(e,n){},208:function(e,n){},220:function(e,n){},222:function(e,n){},250:function(e,n){},252:function(e,n){},253:function(e,n){},258:function(e,n){},260:function(e,n){},266:function(e,n){},268:function(e,n){},287:function(e,n){},299:function(e,n){},302:function(e,n){},333:function(e,n,t){"use strict";t.r(n);var r,a,c,o,i,s,u,l,d=t(0),p=t.n(d),b=t(170),f=t.n(b),j=(t(180),t(8)),h=t(1),v=Object(d.createContext)(),x=function(e){var n=e.children,t=Object(d.useState)(""),r=Object(j.a)(t,2),a=r[0],c=r[1],o=Object(d.useState)(""),i=Object(j.a)(o,2),s=i[0],u=i[1],l=Object(d.useState)(""),p=Object(j.a)(l,2),b={username:a,setUsername:c,email:s,setEmail:u,password:p[0],setPassword:p[1]};return Object(h.jsx)(v.Provider,{value:b,children:n})},O=function(){return Object(d.useContext)(v)},m=(t(182),t(3)),g=t(7),w=t(19),k=t(41),y=t.n(k),C="https://todo-list.alphacamp.io/api/auth",E=function(){var e=Object(g.a)(Object(m.a)().mark((function e(n){var t,r,a,c;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.username,r=n.password,e.prev=1,e.next=4,y.a.post("".concat(C,"/login"),{username:t,password:r});case 4:if(a=e.sent,c=a.data,!c.authToken){e.next=11;break}return e.abrupt("return",Object(w.a)({success:!0},c));case 11:return e.abrupt("return",c);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(n){return e.apply(this,arguments)}}(),D=function(){var e=Object(g.a)(Object(m.a)().mark((function e(n){var t,r,a,c,o;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.username,r=n.email,a=n.password,e.prev=1,e.next=4,y.a.post("".concat(C,"/register"),{username:t,email:r,password:a});case 4:if(c=e.sent,o=c.data,!o.authToken){e.next=9;break}return e.abrupt("return",Object(w.a)({success:!0},o));case 9:return e.abrupt("return",o);case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(n){return e.apply(this,arguments)}}(),T=function(){var e=Object(g.a)(Object(m.a)().mark((function e(n){var t;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("".concat(C,"/test-token"),{headers:{Authorization:"Bearer "+n}});case 3:return t=e.sent,e.abrupt("return",t.data.success);case 7:e.prev=7,e.t0=e.catch(0),console.error("[Check Permission Failed]:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),S=t(67),F=t(4),z={isAuthenticated:!1,currentMember:null,register:null,login:null,logout:null},N=Object(d.createContext)(z),M=function(e){var n=e.children,t=Object(d.useState)(!1),r=Object(j.a)(t,2),a=r[0],c=r[1],o=Object(d.useState)(null),i=Object(j.a)(o,2),s=i[0],u=i[1],l=Object(F.l)().pathname;return Object(d.useEffect)((function(){var e=function(){var e=Object(g.a)(Object(m.a)().mark((function e(){var n,t;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=localStorage.getItem("authToken")){e.next=5;break}return c(!1),u(null),e.abrupt("return");case 5:return e.next=7,T(n);case 7:e.sent?(c(!0),t=S.decode(n),u(t)):(c(!1),u(null));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[l]),Object(h.jsx)(N.Provider,{value:{isAuthenticated:a,currentMember:s&&{id:s.sub,name:s.name},register:function(){var e=Object(g.a)(Object(m.a)().mark((function e(n){var t,r,a,o;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D({username:n.username,password:n.password,email:n.email});case 2:return t=e.sent,r=t.success,a=t.authToken,(o=S.decode(a))?(u(o),c(!0),localStorage.setItem("authToken",a)):(u(null),c(!1)),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),login:function(){var e=Object(g.a)(Object(m.a)().mark((function e(n){var t,r,a,o;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E({username:n.username,password:n.password});case 2:return t=e.sent,r=t.success,a=t.authToken,(o=S.decode(a))?(u(o),c(!0),localStorage.setItem("authToken",a)):(u(null),c(!1)),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),logout:function(){localStorage.removeItem("authToken"),u(null),c(!1)}},children:n})},P=function(){return Object(d.useContext)(N)},R=t(12),I=t(13),A=I.a.div(r||(r=Object(R.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 50px;\n"]))),B=I.a.div(a||(a=Object(R.a)(["\n  width: 50%;\n  margin-top: 30px;\n"]))),L=I.a.button(c||(c=Object(R.a)(["\n  border-radius: 30px;\n  background-color: #ff6600;\n  border: none;\n\n  color: white;\n  min-width: 300px;\n  font-family: 'Noto Sans TC', sans-serif;\n  font-weight: bold;\n  padding: 6px 0;\n  margin: 2rem 0;\n\n  &.hover {\n    cursor: pointer;\n  }\n"]))),K=I.a.div(o||(o=Object(R.a)(["\n  color: #0062ff;\n  font-size: 16px;\n  font-weight: 400;\n"]))),U=["title","titleId"];function V(){return V=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},V.apply(this,arguments)}function Z(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function H(e,n){var t=e.title,r=e.titleId,a=Z(e,U);return d.createElement("svg",V({width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":r},a),t?d.createElement("title",{id:r},t):null,i||(i=d.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M25.6996 18.4709C25.6996 18.4709 18.2328 30.5781 12.1109 30.5781C1.40314 30.5781 11.3821 7.51318 19.1916 7.51318C24.641 7.51318 25.6996 18.4709 25.6996 18.4709Z",fill:"#FF6600"})),s||(s=d.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M34.5723 33.6972C32.4451 35.9607 29.8198 37.6976 26.9044 38.7701C23.989 39.8426 20.8639 40.2213 17.7767 39.8761C14.6895 39.5309 11.7252 38.4713 9.11881 36.7813C6.51245 35.0914 4.33573 32.8175 2.76123 30.1401C4.5314 32.5477 7.53375 34.1527 11.803 34.1527C22.3199 34.1527 28.2899 25.98 28.2899 25.98C28.2899 25.98 28.8062 32.4392 34.5593 33.6972H34.5723Z",fill:"#FF6600"})),u||(u=d.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M37.7223 10.7451C39.2963 13.7527 40.0781 17.1116 39.9939 20.505C39.9096 23.8984 38.9621 27.2144 37.2407 30.1401C35.8792 29.3764 34.8725 28.1082 34.4379 26.609L32.1558 19.7724L37.7223 10.7451Z",fill:"#FF6600"})),l||(l=d.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.0031 0.0173688C25.0185 0.0140335 29.8513 1.89881 33.5398 5.29665L29.7521 11.4088C28.3811 7.84302 25.5957 4.2729 20.1767 4.2729C9.07841 4.2729 0.852307 16.3888 0.852307 23.9846C0.849861 24.9669 0.975283 25.9454 1.22543 26.8953C0.115582 23.8725 -0.247948 20.6265 0.165719 17.4331C0.579385 14.2398 1.75802 11.1934 3.60147 8.55306C5.44491 5.91269 7.89866 3.75634 10.7542 2.26726C13.6097 0.778179 16.7826 0.000388507 20.0031 0V0.0173688Z",fill:"#FF6600"})))}var J,q,G,$,Q,W,X,Y,_,ee,ne,te,re=d.forwardRef(H),ae=(t.p,t.p+"static/media/check-active.680985db.svg"),ce=t.p+"static/media/check-circle.ad8591fd.svg",oe=t.p+"static/media/check-hover.f1b1bcfd.svg",ie=I.a.div(J||(J=Object(R.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  background-color: #f5f8fa;\n  width: 100%;\n  height: 54px;\n  border-bottom: 2px solid black;\n"]))),se=I.a.label(q||(q=Object(R.a)(["\n  font-size: 14;\n  color: '#696974';\n  text-align: start;\n"]))),ue=I.a.input(G||(G=Object(R.a)(["\n  outline: none;\n  border: none;\n  background-color: #f5f8fa;\n  border-radius: 0px;\n"]))),le=function(e){var n=e.type,t=e.placeholder,r=e.label,a=e.onChange,c=e.value;return Object(h.jsxs)(ie,{children:[Object(h.jsx)(se,{children:r}),Object(h.jsx)(ue,{type:n||"text",placeholder:t,value:c||"",onChange:function(e){null===a||void 0===a||a(e.target.value)}})]})},de=I.a.header($||($=Object(R.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  color: var(--major);\n  padding: 0 16px;\n\n  h3 {\n    font-weight: 400;\n    user-select: none;\n  }\n"]))),pe=I.a.div(Q||(Q=Object(R.a)(["\n  color: var(--gray);\n  span {\n    color: var(--major);\n  }\n"]))),be=function(e){var n=e.username;return Object(h.jsxs)(de,{children:[Object(h.jsx)("h3",{children:"Tasks"}),Object(h.jsxs)(pe,{children:["Hi ",Object(h.jsx)("span",{children:n})]})]})},fe=t(51),je=I.a.div(W||(W=Object(R.a)(["\n  min-height: 52px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  word-wrap: break-word;\n  word-break: break-word;\n  padding: 0 12px;\n  box-shadow: 0 17px 0 -16px #e5e5e5;\n  flex-wrap: wrap;\n\n  &.active {\n    box-shadow: 0 17px 0 -16px var(--major);\n  }\n"]))),he=I.a.label(X||(X=Object(R.a)(["\n  display: inline-flex;\n  font-size: 30px;\n  transition: color 0.2s ease-out;\n  font-weight: 300;\n\n  &:after {\n    content: '+';\n  }\n"]))),ve=I.a.div(Y||(Y=Object(R.a)(["\n  min-height: 52px;\n  display: flex;\n  align-items: center;\n  flex: 1;\n  user-select: none;\n\n  input {\n    flex: 1;\n    padding: 8px 12px;\n    border: 0;\n    outline: 0;\n    font-size: 1rem;\n\n    &::placeholder {\n      color: var(--major);\n      font-size: 13px;\n    }\n  }\n  $.active {\n    input::placeholder {\n      color: var(--gray);\n    }\n  }\n"]))),xe=I.a.div(_||(_=Object(R.a)(["\n  button {\n    font-size: 13px;\n    color: var(--major);\n    padding-right: 5px;\n    display: none;\n  }\n\n  &.active {\n    button {\n      display: block;\n    }\n  }\n"]))),Oe=function(e){var n=e.onChange,t=e.onAddTodo,r=e.inputValue,a=e.onKeyDown;return Object(h.jsxs)(je,{className:Object(fe.a)("",{active:r.length>0}),children:[Object(h.jsx)(he,{className:"icon",htmlFor:"add-todo-input"}),Object(h.jsx)(ve,{children:Object(h.jsx)("input",{id:"add-todo-input",type:"text",placeholder:"\u65b0\u589e\u5de5\u4f5c",value:r,onChange:function(e){null===n||void 0===n||n(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&(null===a||void 0===a||a())}})}),Object(h.jsx)(xe,{className:Object(fe.a)("",{active:r.length>0}),children:Object(h.jsx)("button",{className:"btn-reset",onClick:function(){return null===t||void 0===t?void 0:t()},children:"\u65b0\u589e"})})]})},me=I.a.div(ee||(ee=Object(R.a)(["\n  min-height: 52px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  word-wrap: break-word;\n  word-break: break-word;\n  padding: 0 12px;\n  box-shadow: 0 17px 0 -16px #e5e5e5;\n  flex-wrap: wrap;\n\n  .task-item-body-input {\n    user-select: none;\n    display: none;\n    flex: 1;\n    padding: 8px 0px;\n    border: 0;\n    outline: 0;\n    font-size: 1rem;\n\n    &::placeholder {\n      color: var(--gray);\n      font-size: 13px;\n    }\n  }\n\n  &:hover {\n    background: #fff3eb;\n    box-shadow: inset 0 0 0 1px #fff3eb;\n\n    .task-item-action .btn-destroy {\n      display: inline-flex;\n    }\n  }\n\n  &.done {\n    .task-item-body {\n      color: var(--gray);\n      text-decoration: line-through;\n    }\n\n    .icon-checked {\n      background-image: url(",");\n    }\n  }\n\n  &.edit {\n    .task-item-body-input {\n      display: block;\n    }\n    .task-item-body-text {\n      display: none;\n    }\n    .task-item-action {\n      display: none;\n    }\n  }\n\n  .task-item-checked {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .task-item-body {\n    font-weight: 400;\n    padding: 8px 12px;\n    flex: 1;\n    display: flex;\n  }\n\n  .task-item-action {\n    .btn-destroy {\n      display: none;\n      font-size: 30px;\n      transition: color 0.2s ease-out;\n      font-weight: 300;\n      &:after {\n        content: '\xd7';\n      }\n    }\n  }\n\n  .icon-checked {\n    background-image: url(",");\n    background-position: center;\n    background-repeat: no-repeat;\n\n    &:hover {\n      transition: background-image 0.5s;\n      background-image: url(",");\n    }\n  }\n"])),ae,ce,oe),ge=function(e){var n=e.todo,t=e.onSave,r=e.onDelete,a=e.onToggle,c=e.onChangeMode;return Object(h.jsxs)(me,{className:Object(fe.a)("",{done:n.isDone,edit:n.isEdit}),children:[Object(h.jsx)("div",{className:"task-item-checked",children:Object(h.jsx)("span",{className:"icon icon-checked",onClick:function(){null===a||void 0===a||a(n.id)}})}),Object(h.jsxs)("div",{className:"task-item-body",onDoubleClick:function(){null===c||void 0===c||c({id:n.id,isEdit:!0})},children:[Object(h.jsx)("span",{className:"task-item-body-text",children:n.title}),Object(h.jsx)("input",{className:"task-item-body-input",defaultValue:n.title,onKeyDown:function(e){"Enter"===e.key?null===t||void 0===t||t({value:e.target.value,id:n.id}):"Escape"===e.key&&(null===c||void 0===c||c({id:n.id,isEdit:!1}))}})]}),Object(h.jsx)("div",{className:"task-item-action ",children:Object(h.jsx)("button",{className:"btn-reset btn-destroy icon",onClick:function(){null===r||void 0===r||r(n.id)}})})]})},we=function(e){var n=e.todos,t=e.onSave,r=e.onDelete,a=e.onToggle,c=e.onChangeMode;return Object(h.jsx)("div",{children:n.map((function(e){return Object(h.jsx)(ge,{todo:e,onToggle:function(e){null===a||void 0===a||a(e)},onChangeMode:function(e){var n=e.id,t=e.isEdit;null===c||void 0===c||c({id:n,isEdit:t})},onSave:function(e){var n=e.value,r=e.id;null===t||void 0===t||t({value:n,id:r})},onDelete:function(e){null===r||void 0===r||r(e)}},e.id)}))})},ke=I.a.footer(ne||(ne=Object(R.a)(["\n  display: flex;\n  justify-content: space-between;\n\n  padding: 0 16px;\n  p {\n    font-size: 14px;\n    font-weight: 300;\n    margin: 2rem 0 1rem;\n  }\n"]))),ye=I.a.button(te||(te=Object(R.a)(["\n  padding: 0;\n  border: 0;\n  background: none;\n  vertical-align: baseline;\n  appearance: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  cursor: pointer;\n  outline: 0;\n\n  font-size: 14px;\n  font-weight: 300;\n  margin: 2rem 0 1rem;\n  &:hover {\n    text-decoration: underline;\n  }\n"]))),Ce=function(){var e=P().logout;return Object(h.jsxs)(ke,{children:[Object(h.jsx)("p",{children:"\u5269\u9918\u9805\u76ee\u6578\uff1a 0"}),Object(h.jsx)(ye,{onClick:function(){e()},children:"\u767b\u51fa"})]})},Ee=t(42),De=t.n(Ee),Te=function(){var e=O(),n=e.username,t=e.setUsername,r=e.password,a=e.setPassword,c=Object(F.n)(),o=P(),i=o.login,s=o.isAuthenticated,u=function(){var e=Object(g.a)(Object(m.a)().mark((function e(){return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==n.length&&0!==r.length){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,i({username:n,password:r});case 4:e.sent?De.a.fire({position:"top",icon:"success",title:"Login success",showConfirmButton:!0,timer:1500}):De.a.fire({position:"top",icon:"error",title:"Login Error",showConfirmButton:!0,timer:1500});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){s&&c("/todos")}),[c,s]),Object(h.jsxs)(A,{children:[Object(h.jsx)("div",{children:Object(h.jsx)(re,{})}),Object(h.jsx)("h1",{children:"\u767b\u5165 Todo"}),Object(h.jsx)(B,{children:Object(h.jsx)(le,{label:"\u5e33\u865f",type:"text",placeholder:"\u8acb\u8f38\u5165\u5e33\u865f",value:n,onChange:function(e){t(e)}})}),Object(h.jsx)(B,{children:Object(h.jsx)(le,{label:"\u5bc6\u78bc",type:"password",placeholder:"\u8acb\u8f38\u5165\u5bc6\u78bc",value:r,onChange:function(e){a(e)}})}),Object(h.jsx)(L,{onClick:u,children:"\u767b\u5165"}),Object(h.jsx)(K,{children:"\u8a3b\u518a"})]})},Se=function(){var e=O(),n=e.username,t=e.setUsername,r=e.password,a=e.setPassword,c=e.email,o=e.setEmail,i=Object(F.n)(),s=P(),u=s.register,l=s.isAuthenticated;Object(d.useEffect)((function(){l&&i("/todos")}),[i,l]);var p=function(){var e=Object(g.a)(Object(m.a)().mark((function e(){return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==n.length&&0!==r.length&&0!==c.length){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,u({username:n,password:r,email:c});case 4:e.sent?De.a.fire({position:"top",icon:"success",title:"Login success",showConfirmButton:!0,timer:1500}):De.a.fire({position:"top",icon:"error",title:"Signup Error",showConfirmButton:!0,timer:1500});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)(A,{children:[Object(h.jsx)("div",{children:Object(h.jsx)(re,{})}),Object(h.jsx)("h1",{children:"\u5efa\u7acb\u60a8\u7684\u5e33\u865f"}),Object(h.jsx)(B,{children:Object(h.jsx)(le,{label:"\u5e33\u865f",type:"text",placeholder:"\u8acb\u8f38\u5165\u5e33\u865f",value:n,onChange:function(e){t(e)}})}),Object(h.jsx)(B,{children:Object(h.jsx)(le,{label:"Email",type:"text",placeholder:"\u8acb\u8f38\u5165 Email",value:c,onChange:function(e){o(e)}})}),Object(h.jsx)(B,{children:Object(h.jsx)(le,{label:"\u5bc6\u78bc",type:"password",placeholder:"\u8acb\u8f38\u5165\u5bc6\u78bc",value:r,onChange:function(e){a(e)}})}),Object(h.jsx)(L,{onClick:p,children:"\u8a3b\u518a"}),Object(h.jsx)(K,{children:"\u53d6\u6d88"})]})},Fe=t(15),ze="https://todo-list.alphacamp.io/api",Ne=y.a.create({baseURL:ze});Ne.interceptors.request.use((function(e){var n=localStorage.getItem("authToken");return n&&(e.headers.Authorization="Bearer ".concat(n)),e}),(function(e){console.error(e)}));var Me=function(){var e=Object(g.a)(Object(m.a)().mark((function e(){var n;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ne.get("".concat(ze,"/todos"));case 3:return n=e.sent,e.abrupt("return",n.data.data);case 7:e.prev=7,e.t0=e.catch(0),console.error("[Get Todos Failed]",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),Pe=function(){var e=Object(g.a)(Object(m.a)().mark((function e(n){var t,r,a;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.title,r=n.isDone,e.prev=1,e.next=4,Ne.post("".concat(ze,"/todos"),{title:t,isDone:r});case 4:return a=e.sent,e.abrupt("return",a.data);case 8:e.prev=8,e.t0=e.catch(1),console.eorror("[Create Todo Failed]",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n){return e.apply(this,arguments)}}(),Re=function(){var e=Object(g.a)(Object(m.a)().mark((function e(n){var t,r,a,c;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.title,r=n.isDone,a=n.id,e.prev=1,e.next=4,Ne.patch("".concat(ze,"/todos/").concat(a),{title:t,isDone:r});case 4:return c=e.sent,e.abrupt("return",c.data);case 8:e.prev=8,e.t0=e.catch(1),console.eorror("[Patch Todo Failed]",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n){return e.apply(this,arguments)}}(),Ie=function(){var e=Object(g.a)(Object(m.a)().mark((function e(n){var t;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=Ne.delete("".concat(ze,"/todos/").concat(n)),e.abrupt("return",t.data);case 5:e.prev=5,e.t0=e.catch(0),console.eorror("[Delete Todo Failed]",e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(n){return e.apply(this,arguments)}}(),Ae=function(){var e=Object(d.useState)([]),n=Object(j.a)(e,2),t=n[0],r=n[1],a=Object(d.useState)(""),c=Object(j.a)(a,2),o=c[0],i=c[1],s=Object(F.n)(),u=P(),l=u.isAuthenticated,p=u.currentMember;Object(d.useEffect)((function(){l||s("/login")}),[s,l]);Object(d.useEffect)((function(){var e=function(){var e=Object(g.a)(Object(m.a)().mark((function e(){var n;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Me();case 3:n=e.sent,r(n.map((function(e){return Object(w.a)(Object(w.a)({},e),{},{isEdit:!1})}))),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var b=function(){var e=Object(g.a)(Object(m.a)().mark((function e(){var n;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==o.length){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,Pe({title:o,isDone:!1});case 5:n=e.sent,r((function(e){return[].concat(Object(Fe.a)(e),[{title:n.title,isDone:n.isDone,isEdit:n.isEdit,id:n.id}])})),i(""),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(g.a)(Object(m.a)().mark((function e(){var n;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==o.length){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,Pe({title:o,isDone:!1});case 5:n=e.sent,r((function(e){return[].concat(Object(Fe.a)(e),[{id:n.id,title:n.title,isDone:n.isDone,isEdit:n.isEdit}])})),i(""),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(g.a)(Object(m.a)().mark((function e(n){var a;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.find((function(e){return e.id===n})),e.prev=1,e.next=4,Re({id:n,isDone:!a.isDone});case 4:r(t.map((function(e){return e.id===n?Object(w.a)(Object(w.a)({},e),{},{isDone:!e.isDone}):e}))),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(n){return e.apply(this,arguments)}}(),x=function(){var e=Object(g.a)(Object(m.a)().mark((function e(n){var a,c;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.value,c=n.id,t.find((function(e){return e.id===c})),e.prev=2,e.next=5,Re({id:c,title:a,isEdit:!1});case 5:r(t.map((function(e){return e.id===c?Object(w.a)(Object(w.a)({},e),{},{title:a,isEdit:!1}):e}))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(n){return e.apply(this,arguments)}}(),O=function(){var e=Object(g.a)(Object(m.a)().mark((function e(n){return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ie(n);case 3:r(t.filter((function(e){return e.id!==n}))),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(n){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{children:[Object(h.jsx)(be,{username:null===p||void 0===p?void 0:p.name}),Object(h.jsx)(Oe,{inputValue:o,onChange:function(e){i(e)},onAddTodo:b,onKeyDown:f}),Object(h.jsx)(we,{todos:t,onToggle:v,onChangeMode:function(e){var n=e.id,a=e.isEdit;r(t.map((function(e){return e.id===n?Object(w.a)(Object(w.a)({},e),{},{isEdit:a}):e})))},onSave:x,onDelete:O}),Object(h.jsx)(Ce,{})]})},Be=t(25);var Le=function(){return Object(h.jsx)("div",{className:"app",children:Object(h.jsx)(Be.a,{children:Object(h.jsx)(M,{children:Object(h.jsx)(x,{children:Object(h.jsxs)(F.c,{children:[Object(h.jsx)(F.a,{path:"/login",element:Object(h.jsx)(Te,{})}),Object(h.jsx)(F.a,{path:"/signup",element:Object(h.jsx)(Se,{})}),Object(h.jsx)(F.a,{path:"/todos",element:Object(h.jsx)(Ae,{})})]})})})})})},Ke=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,334)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,c=n.getLCP,o=n.getTTFB;t(e),r(e),a(e),c(e),o(e)}))};f.a.createRoot(document.getElementById("root")).render(Object(h.jsx)(p.a.StrictMode,{children:Object(h.jsx)(Le,{})})),Ke()}},[[333,1,2]]]);
//# sourceMappingURL=main.6cc0b58a.chunk.js.map