(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[19],{623:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return n}));var c="http://localhost:4001",n="http://3.12.65.48:4001/"},625:function(e,t,a){},632:function(e,t,a){"use strict";var c=a(624),n=a(1),r=a(17);t.a=function(e){var t=e.showPerPage,a=e.onPaginationChange,s=e.total,i=e.page,o=Object(n.useState)(i),l=Object(c.a)(o,2),j=l[0],u=l[1],d=Object(n.useState)(),b=Object(c.a)(d,2),h=b[0],p=b[1];console.log("numberOfButtons",h),console.log("total",s),console.log("counter",j),console.log("showPerPage",t),Object(n.useEffect)((function(){a(j,t*j-t),p(Math.ceil(s/t))}),[j]);var O=function(e){"prev"===e?u(1===j?1:j-1):"next"===e&&u(h===j?j:j+1)};return Object(r.jsx)("div",{className:"d-flex justify-content-center",children:Object(r.jsx)("nav",{"aria-label":"Page navigation example",children:Object(r.jsxs)("ul",{class:"pagination",children:[Object(r.jsx)("li",{class:"page-item",children:Object(r.jsx)("a",{class:"page-link",onClick:function(){return O("prev")},children:"Previous"})}),new Array(h).fill("").map((function(e,t){return Object(r.jsx)("li",{class:"page-item ".concat(t+1===j?"active":null),children:Object(r.jsx)("a",{class:"page-link",onClick:function(){return u(t+1)},children:t+1})})})),Object(r.jsx)("li",{class:"page-item",children:Object(r.jsx)("a",{class:"page-link",onClick:function(){return O("next")},children:"Next"})})]})})})}},643:function(e,t,a){"use strict";var c=a(13),n=a(30),r=a(635),s=a.n(r),i=a(1),o=a.n(i),l=a(636),j=o.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,i=e.striped,j=e.bordered,u=e.borderless,d=e.hover,b=e.size,h=e.variant,p=e.responsive,O=Object(n.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),f=Object(l.a)(a,"table"),x=s()(r,f,h&&f+"-"+h,b&&f+"-"+b,i&&f+"-striped",j&&f+"-bordered",u&&f+"-borderless",d&&f+"-hover"),m=o.a.createElement("table",Object(c.a)({},O,{className:x,ref:t}));if(p){var v=f+"-responsive";return"string"===typeof p&&(v=v+"-"+p),o.a.createElement("div",{className:v},m)}return m}));t.a=j},920:function(e,t,a){"use strict";a.r(t);var c=a(161),n=a(40),r=a(626),s=a.n(r),i=a(627),o=a(624),l=a(1),j=a(20),u=a(160),d=a(629),b=a.n(d),h=a(643),p=a(630),O=(a(625),a(623)),f=a(632),x=a(17);t.default=function(){Object(j.g)();var e=Object(l.useState)(4),t=Object(o.a)(e,2),a=t[0],r=(t[1],Object(l.useState)(0)),d=Object(o.a)(r,2),m=d[0],v=d[1],g=Object(l.useState)(1),y=Object(o.a)(g,2),k=y[0],_=y[1],w=Object(l.useState)(1),P=Object(o.a)(w,2),N=P[0],S=P[1],C={headers:{token:localStorage.getItem("token")}},E=Object(l.useState)([{id:"",email:"",name:"",username:"",user_type:"",minner_Activity:"",is_complete_kyc:""}]),A=Object(o.a)(E,2),B=A[0],z=A[1],J=(Object(j.i)().id,Object(l.useState)({})),q=Object(o.a)(J,2),D=q[0],I=q[1];Object(l.useEffect)((function(){K()}),[k,m,D]);var K=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return[],t={page:k,limit:4},0===Object.keys(D).length&&D.constructor===Object||(t.searchData=D.text),console.log("datarequest ",t),e.next=6,b.a.post("".concat(O.a,"/api/admin/get-kyc-user"),t,C);case 6:if(a=e.sent,console.warn(a.data.data),200!=a.data.code){e.next=12;break}return z(a.data.data.docs),e.next=12,v(a.data.data.total);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(i.a)(s.a.mark((function e(t,a){var c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.warn("oninput change data ",t.target.value,a),(c={}).is_complete_kyc=t.target.value,c._id=a._id,c.login_type=a.login_type,e.next=7,b.a.put("".concat(O.a,"/api/admin/update-user"),c,C).then((function(e){console.log("response",e),Object(p.b)(e.data.data.message),K()})).catch((function(e){console.log("error",e),Object(p.b)(e.data.message)}));case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),R=function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("search text",t.target.name,t.target.value),I(Object(n.a)(Object(n.a)({},D),{},Object(c.a)({},t.target.name,t.target.value)));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"searchBox",children:Object(x.jsx)("input",{type:"text",className:"searchBox",placeholder:"search here....",name:"text",value:D.text,onChange:function(e){return R(e)}})}),Object(x.jsxs)(h.a,{striped:!0,bordered:!0,hover:!0,children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"S.no"}),Object(x.jsx)("th",{children:"Name"}),Object(x.jsx)("th",{children:"Email"}),Object(x.jsx)("th",{children:"Username"}),Object(x.jsx)("th",{children:"Type"}),Object(x.jsx)("th",{class:"address",children:"Kyc Status"}),Object(x.jsx)("th",{children:"Actions"})]})}),Object(x.jsx)("tbody",{children:B.map((function(e,t){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:t+N+1}),Object(x.jsx)("td",{children:e.name}),Object(x.jsx)("td",{children:e.email}),Object(x.jsx)("td",{children:e.username}),Object(x.jsx)("td",{children:e.user_type}),Object(x.jsx)("td",{children:Object(x.jsxs)("select",{class:"form-control",name:"is_complete_kyc",value:e.is_complete_kyc,onChange:function(t){return M(t,e)},children:[Object(x.jsx)("option",{value:"1",children:"approved"}),Object(x.jsx)("option",{value:"2",children:"Panding"})]})}),Object(x.jsxs)("td",{children:[" ",Object(x.jsx)("div",{children:"2"==e.is_complete_kyc?Object(x.jsx)(u.b,{className:"btn btn-primary mr-2",to:"/doc/".concat(e._id),children:"verify "}):Object(x.jsx)(u.b,{className:"btn btn-primary mr-2 ",to:"/doc/".concat(e._id),children:"verified "})})]})]})}))})]}),Object(x.jsx)(p.a,{}),m>0?Object(x.jsx)(f.a,{showPerPage:a,onPaginationChange:function(e,t){console.warn("getee, ",e,t),_(e),S(t)},total:m,page:k}):""]})}}}]);
//# sourceMappingURL=19.25d9621c.chunk.js.map