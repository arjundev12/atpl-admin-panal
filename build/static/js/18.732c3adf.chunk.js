(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[18],{623:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return a}));var n="http://3.12.65.48:4001",a="http://3.12.65.48:4001/"},625:function(e,t,r){},647:function(e,t,r){"use strict";var n=r(13),a=r(30),c=r(633),o=r.n(c),i=r(1),s=r.n(i),u=r(634),d=s.a.forwardRef((function(e,t){var r=e.bsPrefix,c=e.className,i=e.striped,d=e.bordered,l=e.borderless,b=e.hover,f=e.size,j=e.variant,h=e.responsive,p=Object(a.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),m=Object(u.a)(r,"table"),v=o()(c,m,j&&m+"-"+j,f&&m+"-"+f,i&&m+"-striped",d&&m+"-bordered",l&&m+"-borderless",b&&m+"-hover"),O=s.a.createElement("table",Object(n.a)({},p,{className:v,ref:t}));if(h){var x=m+"-responsive";return"string"===typeof h&&(x=x+"-"+h),s.a.createElement("div",{className:x},O)}return O}));t.a=d},648:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(645);function a(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=Object(n.a)(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var a=0,c=function(){};return{s:c,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){s=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(s)throw o}}}}},901:function(e,t,r){"use strict";r.r(t);var n=r(161),a=r(40),c=r(627),o=r.n(c),i=r(648),s=r(628),u=r(624),d=r(1),l=r(20),b=r(160),f=r(631),j=r.n(f),h=r(647),p=r(715),m=r(623),v=r(632),O=(r(625),r(17));t.default=function(){Object(l.g)();var e=Object(d.useState)([{id:"",name:""}]),t=Object(u.a)(e,2),r=t[0],c=t[1],f=(Object(l.i)().id,Object(d.useState)({})),x=Object(u.a)(f,2),y=x[0],g=x[1];Object(d.useEffect)((function(){w()}),[y]);var w=function(){var e=Object(s.a)(o.a.mark((function e(){var t,r,n,a,s,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],r={page:1,limit:5},0===Object.keys(y).length&&y.constructor===Object||(r.searchData=y.text),e.next=5,j.a.post("".concat(m.a,"/api/admin/get-category"),r);case 5:n=e.sent,a=Object(i.a)(n.data.data.docs);try{for(a.s();!(s=a.n()).done;)(u=s.value).name&&t.push(u)}catch(o){a.e(o)}finally{a.f()}c(t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(s.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("search text",t.target.name,t.target.value),g(Object(a.a)(Object(a.a)({},y),{},Object(n.a)({},t.target.name,t.target.value)));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(s.a)(o.a.mark((function e(t,r){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.delete("".concat(m.a,"/api/admin/delete-category?_id=").concat(r)).then((function(e){console.log("response",e),w()})).catch((function(e){console.log("error",e),Object(v.b)(e.data.message)}));case 2:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{children:[Object(O.jsx)(b.b,{className:"btn btn-primary add-blog",to:"/add/category",children:"Add Category"}),Object(O.jsx)("div",{children:Object(O.jsx)("input",{type:"text",className:"searchBox",placeholder:"search here....",name:"text",value:y.text,onChange:function(e){return k(e)}})}),Object(O.jsxs)(h.a,{striped:!0,bordered:!0,hover:!0,children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"S.no"}),Object(O.jsx)("th",{children:"name"}),Object(O.jsx)("th",{children:"Action"})]})}),Object(O.jsx)("tbody",{children:r.map((function(e,t){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:t+1}),Object(O.jsx)("td",{children:e.name}),Object(O.jsx)(p.a,{className:"btn btn-primary bg-green mr-2",onClick:function(t){return N(t,e._id)},children:" delete "})]})}))})]}),Object(O.jsx)(v.a,{})]})}}}]);
//# sourceMappingURL=18.732c3adf.chunk.js.map