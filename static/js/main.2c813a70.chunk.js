(this["webpackJsonpall-hooks-react"]=this["webpackJsonpall-hooks-react"]||[]).push([[0],{22:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var o=c(0),n=c.n(o),s=c(16),a=c.n(s),r=(c(22),c(9)),d=c(1);function i(e){return console.log("mama"),Object(d.jsx)("article",{className:"todo",children:Object(d.jsx)("div",{className:"todo__box",children:Object(d.jsx)("h2",{className:"todo__text",children:e.todo.title})})})}var l=n.a.memo(i);function j(e){var t=e.todos,c=e.completeTodo,n=e.removeTodo,s=e.updateTodo,a=Object(o.useState)(""),i=Object(r.a)(a,2),j=i[0],u=i[1],b=Object(o.useRef)(null),h=Object(o.useState)(!1),m=Object(r.a)(h,2),O=m[0],x=m[1],f=Object(o.useMemo)((function(){return function(e){return console.log(e),e.length}(t)}),[t]);function p(e){e.preventDefault()}return Object(d.jsxs)("main",{className:"content",children:[Object(d.jsxs)("section",{className:"add-todo",children:[Object(d.jsx)("h1",{className:"add-todo__question",children:"What's the Plan for Today?"}),Object(d.jsxs)("div",{className:"click-box",children:[Object(d.jsx)("button",{onClick:function(){x((function(e){return!e})),b.current.style.visibility="visible"},className:"\u0441lick",type:"button",children:"\u041d\u0430\u0436\u043c\u0438"}),O?Object(d.jsx)("div",{ref:b,className:"cat"}):Object(d.jsx)("div",{ref:b,className:"cat_hidden"})]}),Object(d.jsxs)("form",{className:"add-todo__form",onSubmit:p,noValidate:!0,children:[Object(d.jsx)("input",{value:j,id:"auth-title-input",className:"add-todo__input",type:"text",name:"todo",placeholder:"Add a todo",required:!0,onChange:function(e){u(e.target.value)}}),Object(d.jsx)("button",{onClick:p,className:"add-todo__button",type:"button",children:"add Todo"})]})]}),Object(d.jsxs)("p",{className:"count-todos",children:["Number of todos: ",Object(d.jsx)("span",{className:"span",children:f})]}),Object(d.jsx)("section",{className:"todos",children:t.map((function(e){return Object(d.jsx)(l,{todo:e,completeTodo:c,removeTodo:n,updateTodo:s},e.id)}))})]})}var u=n.a.memo(j);function b(e){return console.log("User"),Object(d.jsx)("article",{className:"todo",children:Object(d.jsx)("div",{className:"todo__box",children:Object(d.jsx)("h2",{className:"todo__text",children:e.user.name})})})}var h=n.a.memo(b);function m(e){var t=e.users;return Object(d.jsx)("main",{className:"content",children:Object(d.jsx)("section",{className:"todos",children:t.map((function(e){return Object(d.jsx)(h,{user:e},e.id)}))})})}var O=n.a.memo(m),x=c(2),f=c(8);var p=function(){return Object(d.jsx)("header",{className:"header",children:Object(d.jsxs)(x.d,{children:[Object(d.jsx)(x.b,{path:"/users",children:Object(d.jsx)(f.b,{to:"/todos",className:"header__todos",children:"Todos"})}),Object(d.jsx)(x.b,{path:"/todos",children:Object(d.jsx)(f.b,{to:"/users",className:"header__users",children:"Users"})})]})})},N="http://jsonplaceholder.typicode.com",v=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))};function _(){var e=Object(o.useState)([]),t=Object(r.a)(e,2),c=t[0],n=t[1],s=Object(o.useState)([]),a=Object(r.a)(s,2),i=a[0],l=a[1];return Object(o.useEffect)((function(){fetch("".concat(N,"/todos")).then((function(e){return v(e)})).then((function(e){return n(e)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438".concat(e))}))}),[]),Object(o.useEffect)((function(){fetch("".concat(N,"/users")).then((function(e){return v(e)})).then((function(e){return l(e)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438".concat(e))}))}),[]),Object(d.jsx)("div",{className:"page",children:Object(d.jsxs)("div",{className:"page__container",children:[Object(d.jsx)(p,{}),Object(d.jsxs)(x.d,{children:[Object(d.jsx)(x.b,{path:"/todos",children:Object(d.jsx)(u,{handleAddTodo:function(){},todos:c,pageTitle:"todos"})}),Object(d.jsx)(x.b,{path:"/users",children:Object(d.jsx)(O,{users:i,pageTitle:"users"})}),Object(d.jsx)(x.b,{children:Object(d.jsx)(x.a,{to:"/todos"})})]})]})})}var g=n.a.memo(_),T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,30)).then((function(t){var c=t.getCLS,o=t.getFID,n=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),o(e),n(e),s(e),a(e)}))};a.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(f.a,{children:Object(d.jsx)(g,{})})}),document.getElementById("root")),T()}},[[29,1,2]]]);
//# sourceMappingURL=main.2c813a70.chunk.js.map