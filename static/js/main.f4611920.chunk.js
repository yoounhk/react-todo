(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var o=n(2),c=n.n(o),i=n(7),r=n.n(i),u=(n(15),n(10)),a=n(3),s=n(1);var d=function(t){var e=Object(o.useState)(t.edit?t.edit.value:""),n=Object(a.a)(e,2),c=n[0],i=n[1],r=Object(o.useRef)(null);return Object(o.useEffect)((function(){r.current.focus()})),Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("form",{className:"todo-form",onSubmit:function(e){e.preventDefault(),t.onSubmit({id:(new Date).getUTCMilliseconds(),text:c}),i("")},children:t.edit?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("input",{className:"todo-input edit",placeholder:"Update your item",type:"text",value:c,name:"text",ref:r,onChange:function(t){return i(t.target.value)}}),Object(s.jsx)("button",{className:"todo-button edit",type:"submit",children:"Update"})]}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("input",{className:"todo-input",placeholder:"Your to-do here",type:"text",value:c,name:"text",ref:r,onChange:function(t){return i(t.target.value)}}),Object(s.jsx)("button",{className:"todo-button",type:"submit",children:"Add To-do"})]})})})},l=n(8),j=n(9);var b=function(t){var e=t.todos,n=t.completeTodo,c=t.removeTodo,i=t.updateTodo,r=Object(o.useState)({id:null,value:""}),u=Object(a.a)(r,2),b=u[0],m=u[1];return b.id?Object(s.jsx)(d,{edit:b,onSubmit:function(t){i(b.id,t),m({id:null,value:""})}}):e.map((function(t,e){return Object(s.jsxs)("li",{className:t.isComplete?"todo-row complete":"todo-row",children:[Object(s.jsx)("div",{className:"todo-text",onClick:function(){return n(t.id)},children:t.text},t.id),Object(s.jsxs)("div",{className:"icons",children:[Object(s.jsx)(l.a,{className:"edit-icon",onClick:function(){return m({id:t.id,value:t.text})}}),Object(s.jsx)(j.a,{className:"delete-icon",onClick:function(){return c(t.id)}})]})]},e)}))};var m=function(){var t=Object(o.useState)([]),e=Object(a.a)(t,2),n=e[0],c=e[1];return Object(o.useEffect)((function(){console.log(n)}),[n]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{children:"To-do"}),Object(s.jsx)(d,{onSubmit:function(t){c((function(e){return[t].concat(Object(u.a)(e))}))}}),Object(s.jsx)(b,{todos:n,completeTodo:function(t){var e=n.map((function(e){return e.id===t&&(e.isComplete=!e.isComplete),e}));c(e)},removeTodo:function(t){var e=n.filter((function(e){return e.id!==t}));c(e)},updateTodo:function(t,e){c((function(n){return n.map((function(n){return n.id===t?n.text=e:n}))}))}})]})};var f=function(){return Object(s.jsx)("div",{className:"todo-app",children:Object(s.jsx)(m,{})})};r.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.f4611920.chunk.js.map