(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[18],{623:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return a}));var n="http://3.12.65.48:4001",a="http://3.12.65.48:4001/"},624:function(e,t,r){},647:function(e,t,r){"use strict";var n=r(13),a=r(30),c=r(633),s=r.n(c),i=r(1),o=r.n(i),u=r(634),d=o.a.forwardRef((function(e,t){var r=e.bsPrefix,c=e.className,i=e.striped,d=e.bordered,b=e.borderless,l=e.hover,h=e.size,j=e.variant,f=e.responsive,p=Object(a.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),m=Object(u.a)(r,"table"),O=s()(c,m,j&&m+"-"+j,h&&m+"-"+h,i&&m+"-striped",d&&m+"-bordered",b&&m+"-borderless",l&&m+"-hover"),v=o.a.createElement("table",Object(n.a)({},p,{className:O,ref:t}));if(f){var x=m+"-responsive";return"string"===typeof f&&(x=x+"-"+f),o.a.createElement("div",{className:x},v)}return v}));t.a=d},648:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(645);function a(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=Object(n.a)(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var a=0,c=function(){};return{s:c,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,i=!0,o=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){o=!0,s=e},f:function(){try{i||null==r.return||r.return()}finally{if(o)throw s}}}}},907:function(e,t,r){"use strict";r.r(t);var n=r(161),a=r(40),c=r(627),s=r.n(c),i=r(648),o=r(628),u=r(625),d=r(1),b=r(20),l=r(160),h=r(630),j=r.n(h),f=r(647),p=r(623),m=r(631),O=(r(624),r(17));t.default=function(){Object(b.g)();var e=Object(d.useState)([{id:"",question:"",chapter_meta:{name:"",subcategory_meta:{name:""}}}]),t=Object(u.a)(e,2),r=t[0],c=t[1],h=(Object(b.i)().id,Object(d.useState)({})),v=Object(u.a)(h,2),x=v[0],y=v[1];Object(d.useEffect)((function(){g()}),[x]);var g=function(){var e=Object(o.a)(s.a.mark((function e(){var t,r,n,a,o,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],r={page:1,limit:5},0===Object.keys(x).length&&x.constructor===Object||(r.searchData=x.text),e.next=5,j.a.post("".concat(p.a,"/api/admin/get-questions"),r);case 5:n=e.sent,a=Object(i.a)(n.data.data.docs);try{for(a.s();!(o=a.n()).done;)(u=o.value).question&&t.push(u)}catch(s){a.e(s)}finally{a.f()}c(t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(o.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("search text",t.target.name,t.target.value),y(Object(a.a)(Object(a.a)({},x),{},Object(n.a)({},t.target.name,t.target.value)));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{children:[Object(O.jsx)(l.b,{className:"btn btn-primary add-blog",to:"/add/question",children:"Add question"}),Object(O.jsx)("div",{children:Object(O.jsx)("input",{type:"text",className:"searchBox",placeholder:"search here....",name:"text",value:x.text,onChange:function(e){return w(e)}})}),Object(O.jsxs)(f.a,{striped:!0,bordered:!0,hover:!0,children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"S.no"}),Object(O.jsx)("th",{children:"questions"}),Object(O.jsx)("th",{children:"Belonging Chapter"}),Object(O.jsx)("th",{children:"Belonging Sub Category"})]})}),Object(O.jsx)("tbody",{children:r.map((function(e,t){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:t+1}),Object(O.jsx)("td",{children:e.question}),Object(O.jsx)("td",{children:e.chapter_meta.name?e.chapter_meta.name:""}),Object(O.jsx)("td",{children:e.chapter_meta.subcategory_meta.name?e.chapter_meta.subcategory_meta.name:""})]})}))})]}),Object(O.jsx)(m.a,{})]})}}}]);
//# sourceMappingURL=18.6bc0b38c.chunk.js.map