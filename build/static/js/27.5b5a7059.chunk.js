(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[27],{623:function(e,t,c){"use strict";c.d(t,"a",(function(){return n})),c.d(t,"b",(function(){return a}));var n="http://3.12.65.48:4001",a="http://3.12.65.48:4001/"},625:function(e,t,c){},628:function(e,t,c){},920:function(e,t,c){"use strict";c.r(t);var n=c(624),a=c(626),r=c.n(a),s=c(161),i=c(40),o=c(627),l=c(1),u=c(629),j=c.n(u),b=c(20),d=c(630),f=(c(625),c(623)),h=(c(628),c(643),c(17));t.default=function(){Object(b.g)();var e=Object(b.i)().id,t=function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.warn("oninput change data ",t.target.name,t.target.value),"chapter_meta"!=t.target.name){e.next=8;break}if(0!==t.detail){e.next=6;break}return console.log("datataata",A[t.target.value],t.target.name),e.next=6,O(Object(i.a)(Object(i.a)({},u),{},Object(s.a)({subcategory:A[t.target.value]._id},t.target.name,A[t.target.value])));case 6:e.next=20;break;case 8:if("questions"!=t.target.name){e.next=13;break}return e.next=11,O(Object(i.a)(Object(i.a)({},u),{},Object(s.a)({},t.target.name,t.target.value+"")));case 11:e.next=20;break;case 13:if("marks"!=t.target.name){e.next=18;break}return e.next=16,O(Object(i.a)(Object(i.a)({},u),{},Object(s.a)({},t.target.name,t.target.value+"")));case 16:e.next=20;break;case 18:return e.next=20,O(Object(i.a)(Object(i.a)({},u),{},Object(s.a)({},t.target.name,t.target.value)));case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){J(e)}),[]);var c=Object(l.useState)({}),a=Object(n.a)(c,2),u=a[0],O=a[1],m=Object(l.useState)([]),p=Object(n.a)(m,2),x=p[0],v=p[1],g=u.question,w=u.difficulty_level,k=u.is_image,y=u.options,_=u.info,q=u.correct_index,C=u.status,S=function(){var e=Object(o.a)(r.a.mark((function e(t){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("request",u),e.next=4,j.a.put("".concat(f.a,"/api/admin/edit-question"),u);case 4:c=e.sent,console.log("response",c),200==c.data.code?O(c.data.data):console.warn(c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=Object(l.useState)([]),I=Object(n.a)(D,2),A=I[0],E=I[1],J=function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("".concat(f.a,"/api/admin/view-question?_id=").concat(t)).then((function(e){console.log("responseload",e.data),O(e.data.data),v(e.data.data.options),j.a.get("".concat(f.a,"/api/admin/chapter-list?_id=").concat(e.data.data.subcategory)).then((function(e){console.log("hiiiiiiiiresponse",e),E(e.data.data)})).catch((function(e){console.warn(e)}))})).catch((function(e){console.warn(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("html",{lang:"en",children:[Object(h.jsxs)("body",{children:[Object(h.jsx)("section",{children:Object(h.jsx)("div",{class:"UserArea",children:Object(h.jsx)("div",{class:"container",children:Object(h.jsx)("div",{class:"row",children:Object(h.jsx)("div",{class:"col-sm-9",children:Object(h.jsxs)("div",{class:"UserRight",children:[Object(h.jsx)("h3",{children:"Edit Details"}),Object(h.jsx)("form",{onSubmit:function(e){return S(e)},children:Object(h.jsxs)("div",{class:"row",children:[Object(h.jsxs)("div",{class:"form-group col-sm-6",children:[Object(h.jsx)("label",{children:"Question"}),Object(h.jsx)("input",{class:"form-control",name:"question",value:k?"":g,onChange:function(e){return t(e)}})]}),Object(h.jsxs)("div",{class:"form-group col-sm-6",children:[Object(h.jsx)("label",{children:"Info"}),Object(h.jsx)("input",{class:"form-control",name:"info",value:_,onChange:function(e){return t(e)}})]}),Object(h.jsxs)("div",{class:"form-group col-sm-6",children:[Object(h.jsx)("label",{children:"Difficulty level"}),Object(h.jsxs)("select",{class:"form-control",name:"difficulty_level",value:w,onChange:function(e){return t(e)},children:[Object(h.jsx)("option",{value:"0",children:"low"}),Object(h.jsx)("option",{value:"1",children:"mediam"}),Object(h.jsx)("option",{value:"2",children:"high"})]})]}),Object(h.jsxs)("div",{class:"form-group col-sm-6",children:[Object(h.jsx)("label",{children:"Correct Index"}),Object(h.jsx)("select",{class:"form-control",name:"correct_index",value:q,onChange:function(e){return t(e)},children:y&&y.map((function(e,t){return Object(h.jsx)("option",{value:t,children:t})}))})]}),x&&x.map((function(e){return Object(h.jsxs)("div",{class:"form-group col-sm-6",children:[Object(h.jsxs)("label",{children:["Option ",e.name]}),Object(h.jsx)("input",{class:"form-control",name:"option",value:e.title,disabled:"true"})]})})),Object(h.jsxs)("div",{class:"form-group col-sm-6",children:[Object(h.jsx)("label",{children:"Status"}),Object(h.jsxs)("select",{class:"form-control",name:"status",value:C,onChange:function(e){return t(e)},children:[Object(h.jsx)("option",{value:"active",children:"Active"}),Object(h.jsx)("option",{value:"inactive",children:"Inactive"})]})]}),Object(h.jsxs)("div",{class:"form-group col-sm-6",children:[Object(h.jsx)("label",{children:"chapter"}),Object(h.jsx)("select",{class:"form-control",name:"chapter_meta",onClick:function(e){return t(e)},children:A&&A.map((function(e,t){return Object(h.jsx)("option",{value:t,children:e.name})}))})]}),Object(h.jsx)("div",{class:"col-sm-12",children:Object(h.jsx)("button",{onClick:S,children:"Submit"})})]})})]})})})})})}),Object(h.jsx)("script",{src:"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js "}),Object(h.jsx)("script",{src:"js/bootstrap.min.js "}),Object(h.jsx)("script",{src:"js/owl.carousel.js "})]}),Object(h.jsx)(d.a,{})]})})}}}]);
//# sourceMappingURL=27.5b5a7059.chunk.js.map