(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[5],{623:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var a="http://3.12.65.48:4001",c="http://3.12.65.48:4001/"},624:function(e,t,n){},635:function(e,t,n){},639:function(e,t,n){"use strict";var a=n(625),c=n(1),r=n(17);t.a=function(e){var t=e.showPerPage,n=e.onPaginationChange,s=e.total,i=e.page,o=Object(c.useState)(i),l=Object(a.a)(o,2),u=l[0],j=l[1],d=Object(c.useState)(),b=Object(a.a)(d,2),h=b[0],p=b[1];console.log("numberOfButtons",h),console.log("total",s),console.log("counter",u),console.log("showPerPage",t),Object(c.useEffect)((function(){n(u,t*u-t),p(Math.ceil(s/t))}),[u]);var O=function(e){"prev"===e?j(1===u?1:u-1):"next"===e&&j(h===u?u:u+1)};return Object(r.jsx)("div",{className:"d-flex justify-content-center",children:Object(r.jsx)("nav",{"aria-label":"Page navigation example",children:Object(r.jsxs)("ul",{class:"pagination",children:[Object(r.jsx)("li",{class:"page-item",children:Object(r.jsx)("a",{class:"page-link",onClick:function(){return O("prev")},children:"Previous"})}),new Array(h).fill("").map((function(e,t){return Object(r.jsx)("li",{class:"page-item ".concat(t+1===u?"active":null),children:Object(r.jsx)("a",{class:"page-link",onClick:function(){return j(t+1)},children:t+1})})})),Object(r.jsx)("li",{class:"page-item",children:Object(r.jsx)("a",{class:"page-link",onClick:function(){return O("next")},children:"Next"})})]})})})}},647:function(e,t,n){"use strict";var a=n(13),c=n(30),r=n(633),s=n.n(r),i=n(1),o=n.n(i),l=n(634),u=o.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,i=e.striped,u=e.bordered,j=e.borderless,d=e.hover,b=e.size,h=e.variant,p=e.responsive,O=Object(c.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),f=Object(l.a)(n,"table"),x=s()(r,f,h&&f+"-"+h,b&&f+"-"+b,i&&f+"-striped",u&&f+"-bordered",j&&f+"-borderless",d&&f+"-hover"),m=o.a.createElement("table",Object(a.a)({},O,{className:x,ref:t}));if(p){var g=f+"-responsive";return"string"===typeof p&&(g=g+"-"+p),o.a.createElement("div",{className:g},m)}return m}));t.a=u},900:function(e,t,n){"use strict";n.r(t);var a=n(161),c=n(40),r=n(627),s=n.n(r),i=n(628),o=n(625),l=n(1),u=n(20),j=n(160),d=n(630),b=n.n(d),h=n(647),p=n(715),O=n(631),f=(n(624),n(623)),x=n(639),m=(n(635),n(17));t.default=function(){Object(u.g)();var e=Object(l.useState)(10),t=Object(o.a)(e,2),n=t[0],r=(t[1],Object(l.useState)(0)),d=Object(o.a)(r,2),g=d[0],v=d[1],k=Object(l.useState)(1),y=Object(o.a)(k,2),w=y[0],_=y[1],S=Object(l.useState)(1),N=Object(o.a)(S,2),P=N[0],C=N[1],A=Object(l.useState)([{id:"",email:"",name:"",username:"",user_type:"",minner_Activity:""}]),E=Object(o.a)(A,2),B=E[0],I=E[1],z=(Object(u.i)().id,Object(l.useState)({})),J=Object(o.a)(z,2),M=J[0],U=J[1];Object(l.useEffect)((function(){q()}),[w,g,M]);var q=function(){var e=Object(i.a)(s.a.mark((function e(){var t,n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return[],t={page:w,limit:10},0===Object.keys(M).length&&M.constructor===Object||(t.searchData=M.text),n={headers:{token:localStorage.getItem("token")}},console.log("datarequest ",t),e.next=7,b.a.post("".concat(f.a,"/api/admin/get-user"),t,n);case 7:if(a=e.sent,console.warn(a.data.data),200!=a.data.code){e.next=13;break}return I(a.data.data.docs),e.next=13,v(a.data.data.total);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(i.a)(s.a.mark((function e(t,n){var a,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.warn("oninput change data ",t.target.value,n),(a={}).minner_Activity=t.target.value,a._id=n._id,a.login_type=n.login_type,c={headers:{token:localStorage.getItem("token")}},e.next=8,b.a.post("".concat(f.a,"/api/admin/update-profile"),a,c).then((function(e){q()})).catch((function(e){console.log("error",e),Object(O.b)(e.data.message)}));case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),R=function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("search text",t.target.name,t.target.value),U(Object(c.a)(Object(c.a)({},M),{},Object(a.a)({},t.target.name,t.target.value)));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(i.a)(s.a.mark((function e(t,n,a){var c,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("item data",n,a),(c={})._id=n,c.block_user=a,r={headers:{token:localStorage.getItem("token")}},e.next=7,b.a.put("".concat(f.a,"/api/admin/update-user"),c,r).then((function(e){q()})).catch((function(e){console.log("error",e),Object(O.b)(e.data.message)}));case 7:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"searchBox",children:Object(m.jsx)("input",{type:"text",className:"searchBox",placeholder:"search here....",name:"text",value:M.text,onChange:function(e){return R(e)}})}),Object(m.jsxs)(h.a,{striped:!0,bordered:!0,hover:!0,children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"S.no"}),Object(m.jsx)("th",{children:"Name"}),Object(m.jsx)("th",{children:"Email"}),Object(m.jsx)("th",{children:"Username"}),Object(m.jsx)("th",{children:"Type"}),Object(m.jsx)("th",{class:"address",children:"Minner Status"}),Object(m.jsx)("th",{children:"Actions"})]})}),Object(m.jsx)("tbody",{children:B.map((function(e,t){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:t+P+1}),Object(m.jsx)("td",{children:e.name}),Object(m.jsx)("td",{children:e.email}),Object(m.jsx)("td",{children:e.username}),Object(m.jsx)("td",{children:e.user_type}),Object(m.jsx)("td",{children:Object(m.jsxs)("select",{class:"form-control",name:"minner_Activity",value:e.minner_Activity,onChange:function(t){return D(t,e)},children:[Object(m.jsx)("option",{value:!0,children:"Active"}),Object(m.jsx)("option",{value:!1,children:"Inactive"})]})}),Object(m.jsxs)("td",{children:[Object(m.jsx)(j.b,{className:"btn btn-primary mr-2 ",to:"/user/".concat(e._id),children:"view "}),"1"==e.block_user?Object(m.jsx)(p.a,{className:"btn btn-primary bg-red mr-2",onClick:function(t){return T(t,e._id,"0")},children:" Blocked "}):Object(m.jsx)(p.a,{className:"btn btn-primary bg-green mr-2",onClick:function(t){return T(t,e._id,"1")},children:" Unblock "})]})]})}))})]}),Object(m.jsx)(O.a,{}),g>0?Object(m.jsx)(x.a,{showPerPage:n,onPaginationChange:function(e,t){console.warn("getee, ",e,t),_(e),C(t)},total:g,page:w}):""]})}}}]);
//# sourceMappingURL=5.c6bbb699.chunk.js.map