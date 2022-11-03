(this["webpackJsonpcurso-intro-react"]=this["webpackJsonpcurso-intro-react"]||[]).push([[0],{28:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),c=n(20),a=n.n(c),i=(n(28),n(13)),l=n(3),s=n(19),d=(n(29),n(7)),u=n(4),j=n(6),b=n(8);function f(e,t){var n=o.a.useReducer(h,O(t)),r=Object(u.a)(n,2),c=r[0],a=r[1],i=c.sincronizedItem,l=c.loading,s=c.error,d=c.item,j=function(e){return a({type:p.error,payload:e})};o.a.useEffect((function(){setTimeout((function(){try{var n,r=localStorage.getItem(e);r?n=JSON.parse(r):(localStorage.setItem(e,JSON.stringify(t)),n=[]),function(e){a({type:p.success,payload:e})}(n)}catch(s){j(s)}}),3e3)}),[i]);return{item:d,saveItem:function(t){try{var n=JSON.stringify(t);localStorage.setItem(e,n),function(e){a({type:p.save,payload:e})}(t)}catch(s){j(s)}},loading:l,error:s,sincronizeItem:function(){a({type:p.sincronize})}}}var O=function(e){return{sincronizedItem:!0,loading:!0,error:!1,item:e}},p={error:"ERROR",success:"SUCCESS",save:"SAVE",sincronize:"SINCRONIZE"},h=function(e,t){return function(e,t){var n;return n={},Object(j.a)(n,p.error,Object(b.a)(Object(b.a)({},e),{},{error:!0})),Object(j.a)(n,p.success,Object(b.a)(Object(b.a)({},e),{},{error:!1,loading:!1,sincronizeItem:!0,item:t})),Object(j.a)(n,p.save,Object(b.a)(Object(b.a)({},e),{},{item:t})),Object(j.a)(n,p.sincronize,Object(b.a)(Object(b.a)({},e),{},{loading:!0,sincronizedItem:!1})),n}(e,t.payload)[t.type]||e};function x(){var e=f("TODOS_V4",[]),t=e.item,n=e.saveItem,r=e.sincronizeItem,c=e.loading,a=e.error,i=o.a.useState(""),l=Object(u.a)(i,2),s=l[0],j=l[1],b=t.filter((function(e){return!!e.completed})).length,O=t.length;return{state:{error:a,loading:c,filteredTodos:s.length>=1?t.filter((function(e){return e.text.toLowerCase().includes(s.toLowerCase())})):t,totalTodos:O,completeTodo:function(e){var r=t.findIndex((function(t){return t.id==e})),o=Object(d.a)(t);o[r].completed=!0,n(o)},completedTodos:b,searchValue:s,getTodoById:function(e){var n=t.findIndex((function(t){return t.id==e}));return t[n]}},stateUpdaters:{addTodo:function(e){var r=function(e){if(e.length<=0)return 1;var t=e.map((function(e){return e.id}));return Math.max.apply(Math,Object(d.a)(t))+1}(t),o=Object(d.a)(t);o.push({id:r,text:e,completed:!1}),n(o)},editTodo:function(e,r){var o=t.findIndex((function(t){return t.id==e})),c=Object(d.a)(t);c[o].text=r,n(c)},deleteTodo:function(e){var r=t.findIndex((function(t){return t.id==e})),o=Object(d.a)(t);o.splice(r,1),n(o)},setSearchValue:j,sincronizedTodos:r}}}n(30);var m=n(1);function g(e){var t=e.totalTodos,n=e.completedTodos,r=e.loading;return Object(m.jsxs)("h2",{className:"TodoCounter ".concat(r&&"loading"),children:["Has completado ",n," de ",t," TODOs"]})}n(32);function v(e){var t=e.searchValue,n=e.setSearchValue,r=e.loading;return Object(m.jsx)("input",{className:"TodoSearch",placeholder:"Cebolla",disabled:r,value:t,onChange:function(e){n(e.target.value)}})}n(33);function y(e){return Object(m.jsxs)("section",{children:[e.error&&e.onError(),e.loading&&e.onLoading(),e.searchValue.length>0?e.filteredTodos.length>0?e.filteredTodos.map(e.render):e.onEmptySearchResults(e.searchValue):!e.loading&&(e.totalTodos>0?e.filteredTodos.map(e.render):e.onEmptyTodos()),Object(m.jsx)("ul",{children:e.children})]})}n(34);function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var I=r.createElement("path",{d:"M393.401,124.425L179.603,338.208c-15.832,15.835-41.514,15.835-57.361,0L11.878,227.836 c-15.838-15.835-15.838-41.52,0-57.358c15.841-15.841,41.521-15.841,57.355-0.006l81.698,81.699L336.037,67.064 c15.841-15.841,41.523-15.829,57.358,0C409.23,82.902,409.23,108.578,393.401,124.425z"});function C(e,t){var n=e.title,o=e.titleId,c=w(e,["title","titleId"]);return r.createElement("svg",T({viewBox:"0 0 405.272 405.272",xmlSpace:"preserve",ref:t,"aria-labelledby":o},c),n?r.createElement("title",{id:o},n):null,I)}var E=r.forwardRef(C);n.p;function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var L=r.createElement("path",{d:"M0 18.9993V24H5.00069L19.756 9.24459L14.7553 4.2439L0 18.9993Z"}),N=r.createElement("path",{d:"M23.6099 3.5038L20.4961 0.390054C19.9761 -0.130018 19.1293 -0.130018 18.6092 0.390054L16.1689 2.83039L21.1695 7.83108L23.6099 5.39074C24.13 4.87067 24.13 4.02387 23.6099 3.5038Z"});function V(e,t){var n=e.title,o=e.titleId,c=k(e,["title","titleId"]);return r.createElement("svg",S({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":o},c),n?r.createElement("title",{id:o},n):null,L,N)}var z=r.forwardRef(V);n.p;function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function P(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var R=r.createElement("path",{d:"M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85 c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563 c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85 l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554 L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"});function B(e,t){var n=e.title,o=e.titleId,c=P(e,["title","titleId"]);return r.createElement("svg",D({viewBox:"0 0 348.333 348.334",xmlSpace:"preserve",ref:t,"aria-labelledby":o},c),n?r.createElement("title",{id:o},n):null,R)}var F=r.forwardRef(B),M=(n.p,n(35),{check:function(e){return Object(m.jsx)(E,{className:"Icon-svg Icon-svg--check",fill:e})},edit:function(e){return Object(m.jsx)(z,{className:"Icon-svg Icon-svg--edit",fill:e})},delete:function(e){return Object(m.jsx)(F,{className:"Icon-svg Icon-svg--delete",fill:e})}});function J(e){var t=e.type,n=e.color,r=void 0===n?"gray":n,o=e.onClick;return Object(m.jsx)("span",{className:"Icon-container Icon-container--".concat(t),onClick:o,children:M[t](r)})}function U(e){var t=e.completed,n=e.onComplete;return Object(m.jsx)(J,{type:"check",color:t?"#4caf50":"gray",onClick:n})}function A(e){var t=e.onDelete;return Object(m.jsx)(J,{type:"delete",onClick:t})}function H(e){var t=e.onEdit;return Object(m.jsx)(J,{type:"edit",onClick:t})}function Z(e){return Object(m.jsxs)("li",{className:"TodoItem",children:[Object(m.jsx)(U,{completed:e.completed,onComplete:e.onComplete}),Object(m.jsx)("p",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--complete"),children:e.text}),Object(m.jsx)(H,{onEdit:e.onEdit}),Object(m.jsx)(A,{onDelete:e.onDelete})]})}n(36);function _(e){var t=e.onClick;return Object(m.jsx)("button",{className:"CreateTodoButton",onClick:t,children:"+"})}function q(e){var t=e.children,n=e.loading;return Object(m.jsx)("header",{children:o.a.Children.toArray(t).map((function(e){return o.a.cloneElement(e,{loading:n})}))})}function G(){return Object(m.jsx)("div",{style:{margin:"30px"},children:Object(m.jsx)("p",{children:"Desesperate, tenemos un error....."})})}var K=n(23),Q=function(e){return Object(m.jsxs)(K.a,Object(b.a)(Object(b.a)({speed:2,width:340,height:84,viewBox:"0 0 340 84",backgroundColor:"gray",foregroundColor:"#ecebeb"},e),{},{children:[Object(m.jsx)("rect",{x:"0",y:"0",rx:"3",ry:"3",width:"67",height:"11"}),Object(m.jsx)("rect",{x:"76",y:"0",rx:"3",ry:"3",width:"140",height:"11"}),Object(m.jsx)("rect",{x:"127",y:"48",rx:"3",ry:"3",width:"53",height:"11"}),Object(m.jsx)("rect",{x:"187",y:"48",rx:"3",ry:"3",width:"72",height:"11"}),Object(m.jsx)("rect",{x:"18",y:"48",rx:"3",ry:"3",width:"100",height:"11"}),Object(m.jsx)("rect",{x:"0",y:"71",rx:"3",ry:"3",width:"37",height:"11"}),Object(m.jsx)("rect",{x:"18",y:"23",rx:"3",ry:"3",width:"140",height:"11"}),Object(m.jsx)("rect",{x:"166",y:"23",rx:"3",ry:"3",width:"173",height:"11"})]}))};function W(){return Object(m.jsx)("div",{style:{margin:"30px"},children:Object(m.jsx)(Q,{})})}function X(){return Object(m.jsx)("div",{style:{margin:"30px"},children:Object(m.jsx)("p",{children:"Crea tu primer todo....."})})}var Y=function(e){var t=function(e){var t=o.a.useState(!1),n=Object(u.a)(t,2),r=n[0],c=n[1];return window.addEventListener("storage",(function(e){"TODOS_V1"===e.key&&(console.log("hubo cambios en TODOS_V1"),c(!0))})),{show:r,toggleShow:function(){e(),c(!1)}}}(e),n=t.show,r=t.toggleShow;return n?Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{children:"Hubo cambios"}),Object(m.jsx)("button",{onClick:function(){return r(!1)},children:"Volver a cargar la informacion"})]}):null};function $(){var e=Object(l.m)(),t=x(),n=t.state,r=t.stateUpdaters,c=n.error,a=n.loading,i=n.filteredTodos,d=n.completeTodo,u=n.completedTodos,j=n.totalTodos,b=n.searchValue,f=r.deleteTodo,O=r.setSearchValue,p=r.sincronizedTodos;return Object(m.jsxs)(o.a.Fragment,{children:[Object(m.jsxs)(q,{loading:a,children:[Object(m.jsx)(g,{totalTodos:j,completedTodos:u}),Object(m.jsx)(v,{searchValue:b,setSearchValue:O})]}),Object(m.jsx)(y,{error:c,loading:a,filteredTodos:i,searchValue:b,totalTodos:j,onError:function(){return Object(m.jsx)(G,{})},onLoading:function(){return Object(m.jsx)(W,{})},onEmptyTodos:function(){return Object(m.jsx)(X,{})},onEmptySearchResults:function(e){return Object(m.jsxs)("p",{children:["no hay resultados para ",e]})},render:function(t){return Object(m.jsx)(Z,{text:t.text,completed:t.completed,onEdit:function(){e("/edit/".concat(t.id),{state:{todo:t}})},onComplete:function(){d(t.id)},onDelete:function(){f(t.id)}},t.id)}}),Object(m.jsx)(s.a,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"}),Object(m.jsx)(_,{onClick:function(){e("/new")}}),Object(m.jsx)(Y,{sincronize:p})]})}n(38);function ee(e){var t=Object(l.m)(),n=o.a.useState(e.defaultTodoText),r=Object(u.a)(n,2),c=r[0],a=r[1];return Object(m.jsxs)("form",{onSubmit:function(n){n.preventDefault(),c.trim().length<=0?s.b.warning("Ingrese un TODO valido"):(s.b.success("Todo Agregado!"),e.submitEvent(c),t("/"))},children:[Object(m.jsx)("label",{children:e.label}),Object(m.jsx)("textarea",{id:"newTodoxxx",placeholder:"Cortar la cebolla para el almuerzo",value:c,onChange:function(e){var t=e.target.value;a(t)}}),Object(m.jsxs)("div",{className:"TodoForm-buttonContainer",children:[Object(m.jsx)("button",{type:"button",onClick:function(){t("/")},className:"TodoForm-button TodoForm-button--cancel",children:"Cancelar"}),Object(m.jsx)("button",{type:"submit",className:"TodoForm-button TodoForm-button--add",children:e.submitText})]})]})}function te(){var e=x().stateUpdaters.addTodo;return Object(m.jsx)(ee,{label:"Escribe tu Nuevo TODO",defaultTodoText:"",submitText:"A\xf1adir",submitEvent:function(t){return e(t)}})}function ne(){var e,t=Object(l.j)(),n=x(),r=n.state,o=n.stateUpdaters,c=r.loading,a=r.getTodoById,i=o.editTodo,s=Object(l.o)();if(t.state&&t.state.todo)console.log("primer if"),e=t.state.todo;else{if(c)return Object(m.jsx)("p",{children:"cargando..."});e=a(s.id)}return Object(m.jsx)(ee,{label:"Edita tu TODO",defaultTodoText:e.text,submitText:"Editar",submitEvent:function(e){return i(s.id,e)}})}function re(){return Object(m.jsx)(i.a,{children:Object(m.jsxs)(l.c,{children:[Object(m.jsx)(l.a,{path:"/",element:Object(m.jsx)($,{})}),Object(m.jsx)(l.a,{path:"/new",element:Object(m.jsx)(te,{})}),Object(m.jsx)(l.a,{path:"/edit/:id",element:Object(m.jsx)(ne,{})}),Object(m.jsx)(l.a,{path:"*",element:Object(m.jsx)("p",{children:"Not found"})})]})})}a.a.render(Object(m.jsx)(re,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.8e31d3fa.chunk.js.map