(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[20],{623:function(e,t,c){"use strict";c.d(t,"a",(function(){return n})),c.d(t,"b",(function(){return a}));var n="http://3.12.65.48:4001",a="http://3.12.65.48:4001/"},625:function(e,t,c){},630:function(e,t,c){},912:function(e,t,c){"use strict";c.r(t);var n=c(624),a=c(626),r=c.n(a),s=c(161),i=c(40),o=c(627),u=c(1),l=c(629),j=c.n(l),d=c(20),b=c(631),p=(c(625),c(623)),h=(c(630),c(650),c(17));t.default=function(){Object(d.g)();var e=Object(d.i)().id,t=function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.warn("oninput change data ",t.target.name,t.target.value),f(Object(i.a)(Object(i.a)({},l),{},Object(s.a)({},t.target.name,t.target.value))),console.warn("oninput change data ",l);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(u.useEffect)((function(){v(e)}),[]);var c=Object(u.useState)({}),a=Object(n.a)(c,2),l=a[0],f=a[1],O=l.name,x=l.status,m=function(){var e=Object(o.a)(r.a.mark((function e(t){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("request",l),e.next=4,j.a.put("".concat(p.a,"/api/admin/edit-category"),l);case 4:c=e.sent,console.log("response",c),200==c.data.code?(Object(b.b)("Update successfully"),f(c.data.data)):console.warn(c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("".concat(p.a,"/api/admin/view-category?_id=").concat(t)).then((function(e){console.log("responseload",e.data),f(e.data.data)})).catch((function(e){console.warn(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("html",{lang:"en",children:[Object(h.jsxs)("body",{children:[Object(h.jsx)("section",{children:Object(h.jsx)("div",{class:"UserArea",children:Object(h.jsx)("div",{class:"container",children:Object(h.jsx)("div",{class:"row",children:Object(h.jsx)("div",{class:"col-sm-9",children:Object(h.jsxs)("div",{class:"UserRight",children:[Object(h.jsx)("h3",{children:"Edit Details"}),Object(h.jsx)("form",{onSubmit:function(e){return m(e)},children:Object(h.jsxs)("div",{class:"row",children:[Object(h.jsxs)("div",{class:"form-group col-sm-6",children:[Object(h.jsx)("label",{children:"Name"}),Object(h.jsx)("input",{class:"form-control",name:"name",value:O,onChange:function(e){return t(e)}})]}),Object(h.jsxs)("div",{class:"form-group col-sm-6",children:[Object(h.jsx)("label",{children:"Status"}),Object(h.jsxs)("select",{class:"form-control",name:"status",value:x,onChange:function(e){return t(e)},children:[Object(h.jsx)("option",{value:"active",children:"Active"}),Object(h.jsx)("option",{value:"inactive",children:"Inactive"})]})]}),Object(h.jsx)("div",{class:"col-sm-12",children:Object(h.jsx)("button",{onClick:m,children:"Submit"})})]})})]})})})})})}),Object(h.jsx)("script",{src:"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js "}),Object(h.jsx)("script",{src:"js/bootstrap.min.js "}),Object(h.jsx)("script",{src:"js/owl.carousel.js "})]}),Object(h.jsx)(b.a,{})]})})}}}]);
//# sourceMappingURL=20.29dc552f.chunk.js.map