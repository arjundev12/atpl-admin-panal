(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[34],{623:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var a="http://3.12.65.48:4001",c="http://3.12.65.48:4001/"},906:function(e,t,n){"use strict";n.r(t);var a=n(626),c=n.n(a),r=n(627),s=n(161),o=n(40),i=n(624),u=n(1),l=n(629),j=n.n(l),b=n(20),m=n(623),p=n(630),f=(n(650),n(652),n(17));t.default=function(){var e=Object(b.g)(),t=Object(u.useState)({name:"",content:"",image:"",is_mocktest:!1,time:"15min",questions:"50",subcategory_meta:{}}),n=Object(i.a)(t,2),a=n[0],l=n[1],h=Object(u.useState)([]),d=Object(i.a)(h,2),O=d[0],v=d[1],x=Object(u.useState)(),g=Object(i.a)(x,2),y=g[0],w=g[1],k=Object(u.useState)([]),S=Object(i.a)(k,2),C=S[0],N=S[1],_=Object(u.useState)(),M=Object(i.a)(_,2),q=M[0],A=M[1],T=Object(u.useState)({}),E=Object(i.a)(T,2),J=(E[0],E[1],a.name),D=(a.content,a.is_mocktest),Q=a.time,Y=a.questions;Object(u.useEffect)((function(){G()}),[]);var z=function(){var e=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("eeeeeeeeeeee",t.target.name,t.target.value),e.next=3,w(O[t.target.value]);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("eeeeeeeeeeee",t.target.name,typeof t.target.value),"is_mocktest"==t.target.name&&l(Object(o.a)(Object(o.a)({},a),{},Object(s.a)({},t.target.name,t.target.value))),"time"==t.target.name&&l(Object(o.a)(Object(o.a)({},a),{},Object(s.a)({},t.target.name,t.target.value))),"questions"==t.target.name&&l(Object(o.a)(Object(o.a)({},a),{},Object(s.a)({},t.target.name,t.target.value)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("eeeeeeeeeeee",t.target.name,t.target.value),e.next=3,A(C[t.target.value]);case 3:H(C[t.target.value]);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("".concat(m.a,"/api/admin/category-list")).then((function(e){N(e.data.data)})).catch((function(e){alert("err in catch")}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("item......",t),e.next=3,j.a.get("".concat(m.a,"/api/admin/subcategory-list?_id=").concat(t._id)).then((function(e){v(e.data.data)})).catch((function(e){alert("err in catch")}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var t=Object(r.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),!y||!q){t.next=12;break}return a.subcategory_meta=y,a.category_meta=q,console.warn("onsumbit",a),t.next=7,j.a.post("".concat(m.a,"/api/admin/add-chapter"),a);case 7:r=t.sent,Object(p.b)(r.data.message),setTimeout((function(){e.push("/chapters")}),1e3),t.next=13;break;case 12:alert("please select any category");case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsxs)("div",{className:"w-75 mx-auto shadow p-5",children:[Object(f.jsx)("h2",{className:"text-center mb-4",children:"Add Chapter"}),Object(f.jsxs)("form",{onSubmit:function(e){return I(e)},children:[Object(f.jsxs)("div",{class:"form-group col-sm-6",children:[Object(f.jsx)("label",{children:"is Mocktest *"}),Object(f.jsxs)("select",{class:"form-control",name:"is_mocktest",value:D,onChange:function(e){return B(e)},children:[Object(f.jsxs)("option",{value:!0,children:[" ","Yes"," "]}),Object(f.jsxs)("option",{value:!1,children:[" ","No"," "]})]})]}),"true"==D?Object(f.jsxs)("div",{class:"form-group col-sm-6",children:[Object(f.jsx)("label",{children:"Total Time *"}),Object(f.jsxs)("select",{class:"form-control",name:"time",value:Q,onChange:function(e){return B(e)},children:[Object(f.jsxs)("option",{value:"15min",children:[" ","15 Min"," "]}),Object(f.jsxs)("option",{value:"30min",children:[" ","30 Min"," "]}),Object(f.jsxs)("option",{value:"60min",children:[" ","60 Min"," "]}),Object(f.jsxs)("option",{value:"120min",children:[" ","120 Min"," "]})]}),Object(f.jsx)("label",{children:"Questions*"}),Object(f.jsxs)("select",{class:"form-control",name:"questions",value:Y,onChange:function(e){return B(e)},children:[Object(f.jsxs)("option",{value:"50",children:[" ","50"," "]}),Object(f.jsxs)("option",{value:"100",children:[" ","100"," "]}),Object(f.jsxs)("option",{value:"200",children:[" ","200"," "]}),Object(f.jsxs)("option",{value:"400",children:[" ","400"," "]})]})]}):"",Object(f.jsxs)("div",{class:"form-group col-sm-6",children:[Object(f.jsx)("label",{children:"Select Category *"}),Object(f.jsxs)("select",{class:"form-control",onChange:function(e){return F(e)},children:[Object(f.jsx)("option",{value:"N/A",children:"Select"}),C.map((function(e,t){return Object(f.jsx)("option",{value:t,children:e.name},t)}))]})]}),Object(f.jsxs)("div",{class:"form-group col-sm-6",children:[Object(f.jsx)("label",{children:"Select Sub Category *"}),Object(f.jsxs)("select",{class:"form-control",onChange:function(e){return z(e)},children:[Object(f.jsx)("option",{value:"N/A",children:"Select"}),O.map((function(e,t){return Object(f.jsx)("option",{value:t,children:e.name},t)}))]})]}),Object(f.jsx)("div",{className:"form-group",children:Object(f.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter name",name:"name",value:J,onChange:function(e){return function(e){l(Object(o.a)(Object(o.a)({},a),{},Object(s.a)({},e.target.name,e.target.value)))}(e)}})}),Object(f.jsx)("button",{className:"btn btn-primary btn-block",children:"Add chapter"})]})]}),Object(f.jsx)(p.a,{})]})}}}]);
//# sourceMappingURL=34.e10f60c5.chunk.js.map