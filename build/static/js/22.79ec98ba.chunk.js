(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[22],{623:function(e,t,c){"use strict";c.d(t,"a",(function(){return n})),c.d(t,"b",(function(){return a}));var n="http://3.12.65.48:4001",a="http://3.12.65.48:4001/"},625:function(e,t,c){},633:function(e,t,c){},921:function(e,t,c){"use strict";c.r(t);var n=c(626),a=c.n(n),r=c(627),s=c(624),i=c(1),o=(c(634),c(631),c(629)),u=c.n(o),l=c(20),d=c(630),p=(c(625),c(623)),j=(c(633),c(17));t.default=function(e){e.match;var t=Object(l.g)(),c=Object(i.useState)([]),n=Object(s.a)(c,2),o=n[0],b=n[1],f=Object(i.useState)({_id:"",isDocumentVerify:""}),m=Object(s.a)(f,2),h=m[0],x=m[1],O=Object(l.i)().id,g={headers:{token:localStorage.getItem("token")}};Object(i.useEffect)((function(){v()}),[]);var v=function(){var e=Object(r.a)(a.a.mark((function e(){var t,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("".concat(p.a,"/api/admin/get-kyc?id=").concat(O),g);case 2:return t=e.sent,e.next=5,u.a.get("".concat(p.a,"/api/admin/user-details?_id=").concat(O),g);case 5:if(c=e.sent,console.warn("responseviewDoc",t.data),200==t.data.code){e.next=12;break}Object(d.b)("Somethig went wrong"),console.warn(t.data),e.next=17;break;case 12:return Object(d.b)("Get successfully"),e.next=15,b(t.data.data.document);case 15:return e.next=17,x({_id:c.data.data._id,is_complete_kyc:c.data.data.is_complete_kyc});case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(r.a)(a.a.mark((function e(c){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),console.warn("onsubmit",c),n={},h.is_complete_kyc&&(n.is_complete_kyc=h.is_complete_kyc),n._id=h._id,console.log("daaaaaaa",n),e.next=8,u.a.put("".concat(p.a,"/api/admin/update-user"),n,g);case 8:200==(r=e.sent).data.code?(Object(d.b)("Update successfully"),setTimeout((function(){t.push("/verification")}),5e4)):(Object(d.b)("Somthing went wrong"),console.warn(r));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(r.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.warn("oninput change data before ",h),e.next=3,x({_id:h._id,is_complete_kyc:t.target.value});case 3:console.warn("oninput change data after ",h);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("html",{lang:"en",children:Object(j.jsxs)("body",{children:[Object(j.jsx)("div",{class:"home-doctors  clearfix",children:Object(j.jsx)("div",{class:"container",children:Object(j.jsx)("div",{class:"row",children:Object(j.jsx)("div",{class:"col-lg-3 col-md-3 col-sm-6  text-center doc-item",children:Object(j.jsx)("div",{class:"common-doctor animated fadeInUp clearfix ae-animation-fadeInUp",children:o.map((function(e,t){return Object(j.jsxs)("figure",{children:[t+1," ",Object(j.jsx)("img",{width:"670",height:"300",src:p.b+e,class:"doc-img animate attachment-gallery-post-single wp-post-image",alt:"doctor-2"})]})}))})})})})}),Object(j.jsx)("form",{class:"btn-form",children:Object(j.jsx)("div",{class:"form-group col-sm-12",children:Object(j.jsxs)("h4",{class:"heading-status",children:[Object(j.jsxs)("select",{class:"form-control fron-select",name:"is_complete_kyc",value:h.is_complete_kyc,onChange:function(e){return w(e)},children:[Object(j.jsx)("option",{value:"1",children:"approved"}),Object(j.jsx)("option",{value:"2",children:"Panding"}),Object(j.jsx)("option",{value:"0",children:"Not Upload"})]}),Object(j.jsx)("button",{class:"btn-sumbit",onClick:function(e){return _(e)},children:"Submit"})]})})})]})}),Object(j.jsx)(d.a,{})]})}}}]);
//# sourceMappingURL=22.79ec98ba.chunk.js.map