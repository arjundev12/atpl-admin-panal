(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[24],{623:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return c}));var n="http://localhost:4001",c="http://localhost:3001/"},635:function(t,e,a){},639:function(t,e,a){"use strict";var n=a(625),c=a(1),r=a(17);e.a=function(t){var e=t.showPerPage,a=t.onPaginationChange,s=t.total,o=t.page,i=Object(c.useState)(o),l=Object(n.a)(i,2),j=l[0],u=l[1],b=Object(c.useState)(),d=Object(n.a)(b,2),O=d[0],h=d[1];console.log("numberOfButtons",O),console.log("total",s),console.log("counter",j),console.log("showPerPage",e),Object(c.useEffect)((function(){a(j,e*j-e),h(Math.ceil(s/e))}),[j]);var p=function(t){"prev"===t?u(1===j?1:j-1):"next"===t&&u(O===j?j:j+1)};return Object(r.jsx)("div",{className:"d-flex justify-content-center",children:Object(r.jsx)("nav",{"aria-label":"Page navigation example",children:Object(r.jsxs)("ul",{class:"pagination",children:[Object(r.jsx)("li",{class:"page-item",children:Object(r.jsx)("a",{class:"page-link",onClick:function(){return p("prev")},children:"Previous"})}),new Array(O).fill("").map((function(t,e){return Object(r.jsx)("li",{class:"page-item ".concat(e+1===j?"active":null),children:Object(r.jsx)("a",{class:"page-link",onClick:function(){return u(e+1)},children:e+1})})})),Object(r.jsx)("li",{class:"page-item",children:Object(r.jsx)("a",{class:"page-link",onClick:function(){return p("next")},children:"Next"})})]})})})}},916:function(t,e,a){"use strict";a.r(e);var n=a(161),c=a(40),r=a(627),s=a.n(r),o=a(628),i=a(625),l=a(1),j=a(20),u=a(630),b=a.n(u),d=a(913),O=a(891),h=a(647),p=a(631),f=(a(624),a(623)),x=a(639),g=(a(635),a(17));e.default=function(){Object(j.g)();var t=Object(l.useState)(10),e=Object(i.a)(t,2),a=e[0],r=(e[1],Object(l.useState)(0)),u=Object(i.a)(r,2),m=u[0],v=u[1],y=Object(l.useState)(1),k=Object(i.a)(y,2),w=k[0],S=k[1],P=Object(l.useState)(1),C=Object(i.a)(P,2),N=C[0],_=C[1],A=Object(l.useState)({}),I=Object(i.a)(A,2),R=I[0],B=I[1],E=Object(l.useState)({}),J=Object(i.a)(E,2),K=J[0],L=J[1],M={headers:{token:localStorage.getItem("token")}},T=Object(l.useState)([]),q=Object(i.a)(T,2),z=q[0],D=q[1],F=Object(l.useState)({}),G=Object(i.a)(F,2),H=G[0],Q=G[1];Object(j.i)().id;Object(l.useEffect)((function(){U(w,R)}),[w,m,R,H]);var U=function(){var t=Object(o.a)(s.a.mark((function t(e){var a,n,c,r=arguments;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r.length>1&&void 0!==r[1]?r[1]:null,n={page:e,limit:10,transaction_type:"referral"},0===Object.keys(a).length&&a.constructor===Object||(n.sort=a),0===Object.keys(H).length&&H.constructor===Object||(n.toId=H.text),console.log("datadata",n),t.next=7,b.a.post("".concat(f.a,"/api/admin/get-transaction"),n,M);case 7:if(c=t.sent,console.warn(c.data.data),200!=c.data.code){t.next=17;break}return Object(p.b)("List get successfully"),D(c.data.data.docs),t.next=14,v(c.data.data.total);case 14:if(!c.data.data.total_amount){t.next=17;break}return t.next=17,c.data.data.total_amount.map((function(t){"referral"==t._id&&L(t)}));case 17:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),V=function(){var t=Object(o.a)(s.a.mark((function t(e){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("targat",e),{},"option-1"==e&&B(Object(c.a)(Object(c.a)({},R),{},{createdAt:-1})),"option-2"==e&&B(Object(c.a)(Object(c.a)({},R),{},{createdAt:1}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),W=function(){var t=Object(o.a)(s.a.mark((function t(e){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("search text",e.target.name,e.target.value),Q(Object(c.a)(Object(c.a)({},H),{},Object(n.a)({},e.target.name,e.target.value)));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(g.jsxs)("div",{children:[Object(g.jsxs)("h3",{className:"heading-content",children:["Total Referral Amount : ",K?K.totalAmount:"00"," Rs"]}),Object(g.jsxs)(d.a,{className:"fltR",alignRight:!0,title:"filter",id:"dropdown-menu-align-right",onSelect:function(t){return V(t)},children:[Object(g.jsx)(O.a.Item,{eventKey:"option-1",children:"New transactions"}),Object(g.jsx)(O.a.Item,{eventKey:"option-2",children:"Old transaction"})]}),Object(g.jsx)("div",{children:Object(g.jsx)("input",{type:"text",className:"searchBox",placeholder:"search by transaction id....",name:"text",value:H.text,onChange:function(t){return W(t)}})}),Object(g.jsxs)(h.a,{striped:!0,bordered:!0,hover:!0,children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:"S.no"}),Object(g.jsx)("th",{children:"transaction_type"}),Object(g.jsx)("th",{children:"type"}),Object(g.jsx)("th",{children:"amount"}),Object(g.jsx)("th",{children:"Status"})]})}),Object(g.jsx)("tbody",{children:z.map((function(t,e){return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:e+N+1}),Object(g.jsx)("td",{children:t.transaction_type}),Object(g.jsx)("td",{children:t.type}),Object(g.jsx)("td",{children:t.amount}),Object(g.jsx)("td",{children:t.status})]})}))})]}),Object(g.jsx)(p.a,{}),m>0?Object(g.jsx)(x.a,{showPerPage:a,onPaginationChange:function(t,e){console.warn("getee, ",t,e),S(t),_(e)},total:m,page:w}):""]})}}}]);
//# sourceMappingURL=24.4c041bbb.chunk.js.map