(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[33],{623:function(e,t,s){"use strict";s.d(t,"a",(function(){return c})),s.d(t,"b",(function(){return l}));var c="http://3.12.65.48:4001",l="http://3.12.65.48:4001/"},631:function(e,t,s){},940:function(e,t,s){"use strict";s.r(t);var c=s(626),l=s.n(c),n=s(627),i=s(624),a=s(1),r=(s(636),s(634),s(629)),j=s.n(r),d=s(160),o=s(630),b=(s(897),s(625),s(623)),h=s(659),O=(s(631),s(647)),x=s(778),u=s(934),p=s(17);t.default=function(e){var t,s,c,r,m,f,v=e.match,g=Object(a.useState)({_id:"",name:"",email:"",address:"",gender:"",contact_number:"",profile_pic:"",country_code:""}),y=Object(i.a)(g,2),w=y[0],_=y[1],k=Object(a.useState)({}),T=Object(i.a)(k,2),D=(T[0],T[1],{headers:{token:localStorage.getItem("token")}});Object(a.useEffect)((function(){console.warn("params",v.params.id),M(v.params.id)}),[]);var S=Object(a.useState)([]),C=Object(i.a)(S,2),N=C[0],q=C[1],A=Object(a.useState)([]),E=Object(i.a)(A,2),P=E[0],I=E[1],M=function(){var e=Object(n.a)(l.a.mark((function e(t){var s,c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("process.env.NODE_ENV","production"),e.next=3,j.a.get("".concat(b.a,"/api/admin/get-user-plans?_id=").concat(t),D);case 3:return s=e.sent,console.warn("responsegetplanegetplane",s),200!=s.data.code?(Object(o.b)("Somethig went wrong"),console.log("errrrrr",s.data)):q(s.data.data),e.next=8,j.a.get("".concat(b.a,"/api/admin/get-user-details?_id=").concat(t),D);case 8:return 200!=(c=e.sent).data.code?Object(o.b)("Somethig went wrong"):(Object(o.b)("Get successfully"),_(c.data.data)),e.next=12,j.a.get("".concat(b.a,"/api/admin/get-mocktest?_id=").concat(t),D);case 12:200!=(n=e.sent).data.code?Object(o.b)("Somethig went wrong"):(Object(o.b)("Get successfully"),I(n.data.data));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=Object(a.useState)([]),G=Object(i.a)(R,2),L=G[0],B=G[1],F=Object(a.useState)(!1),H=Object(i.a)(F,2),J=H[0],z=H[1],Q=function(){var e=Object(n.a)(l.a.mark((function e(t,s){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("".concat(b.a,"/api/admin/get-mocktest-by-id?_id=").concat(s._id),D);case 2:if(c=e.sent,console.warn("response wallet",c.data),200==c.data.code){e.next=8;break}console.warn(c.data),e.next=11;break;case 8:return e.next=10,B(c.data.data);case 10:z(!0);case 11:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}(),U=function(){return z(!1)};return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("html",{lang:"en",children:[Object(p.jsxs)("head",{children:[Object(p.jsx)("meta",{charset:"utf-8"}),Object(p.jsx)("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge"}),Object(p.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),Object(p.jsx)("title",{}),Object(p.jsx)("link",{href:"css/style.css",rel:"stylesheet"}),Object(p.jsx)("link",{href:"css/animate.css",rel:"stylesheet"}),Object(p.jsx)("link",{href:"css/bootstrap.min.css",rel:"stylesheet"}),Object(p.jsx)("link",{href:"css/owl.carousel.min.css",rel:"stylesheet"}),Object(p.jsx)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}),Object(p.jsx)("link",{href:"https://fonts.googleapis.com/css?family=PT+Sans:400,400i,700,700i",rel:"stylesheet"}),Object(p.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Raleway:200,300,400,500,600,700,800,900",rel:"stylesheet"}),Object(p.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Lato:300,400,700,900",rel:"stylesheet"}),Object(p.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800",rel:"stylesheet"}),Object(p.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900",rel:"stylesheet"}),Object(p.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Electrolize",rel:"stylesheet"})]}),Object(p.jsxs)("body",{children:[Object(p.jsxs)("section",{children:[Object(p.jsx)("div",{class:"verifi"}),Object(p.jsx)("div",{class:"DetailsArea",children:Object(p.jsx)("div",{class:"container",children:Object(p.jsxs)("div",{class:"row",children:[Object(p.jsx)("div",{class:"col-sm-3 DetailsLeft",children:Object(p.jsxs)("div",{class:"DetailsLeftProfile",children:[Object(p.jsx)("figure",{children:Object(p.jsx)("img",{src:(w.profile_pic,h.a),height:100,width:100})}),Object(p.jsxs)("h3",{children:[" ",w.name," "]}),Object(p.jsxs)("ul",{children:["",""]})]})}),Object(p.jsx)("div",{class:"col-sm-9",children:Object(p.jsxs)("div",{class:"DetailsRight",children:[Object(p.jsx)("h3",{children:"Profile Information"}),Object(p.jsx)("i",{class:"fa fa-pencil","aria-hidden":"true"}),Object(p.jsx)(d.b,{className:"btn btn-primary mr-2",to:"/user/edit/".concat(w._id),children:" edit "}),Object(p.jsx)("div",{class:"DetailsContent",children:Object(p.jsxs)("div",{class:"row",children:[Object(p.jsx)("div",{class:"col-sm-6",children:Object(p.jsxs)("ul",{children:[Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{class:"Title",children:"Name "}),Object(p.jsxs)("span",{class:"Discribe",children:["Mr.",w.name]})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{class:"Title",children:"Email"}),Object(p.jsx)("span",{class:"Discribe",children:w.email})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{class:"Title",children:"Address"}),Object(p.jsx)("span",{class:"Discribe",children:w.address})]})]})}),Object(p.jsx)("div",{class:"col-sm-6",children:Object(p.jsxs)("ul",{children:[Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{class:"Title",children:"Mobile No"}),Object(p.jsx)("span",{class:"Discribe",children:w.contact_number})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{class:"Title",children:"Country Code"}),Object(p.jsx)("span",{class:"Discribe",children:""==w.country_code?"null":w.country_code})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{class:"Title",children:"Gender"}),Object(p.jsx)("span",{class:"Discribe",children:w.gender})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{class:"Title",children:"Is Subscription"}),Object(p.jsx)("span",{class:"Discribe",children:N.length>0?"Yes":"No"})]})]})})]})}),Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{class:"DetailsContent",children:[Object(p.jsx)("h3",{children:"Subscription Details"}),N.length>0?Object(p.jsx)("div",{children:Object(p.jsxs)(O.a,{striped:!0,bordered:!0,hover:!0,children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"S.no"}),Object(p.jsx)("th",{children:"Title"}),Object(p.jsx)("th",{children:"Price"}),Object(p.jsx)("th",{children:"Buy Date"}),Object(p.jsx)("th",{children:"Days"}),Object(p.jsx)("th",{children:"Actions"})]})}),Object(p.jsx)("tbody",{children:N.map((function(e,t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:t+1}),Object(p.jsx)("td",{children:e.plan_meta.title}),Object(p.jsx)("td",{children:e.plan_meta.price}),Object(p.jsx)("td",{children:e.buy_date.split(" ")[0]}),Object(p.jsx)("td",{children:e.plan_meta.days}),Object(p.jsx)("td",{children:""})]})}))})]})}):""]}),Object(p.jsxs)("div",{class:"DetailsContent",children:[Object(p.jsx)("h3",{children:"MockTest Details"}),Object(p.jsxs)(O.a,{striped:!0,bordered:!0,hover:!0,children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"S.no"}),Object(p.jsx)("th",{children:"MockTest Name"}),Object(p.jsx)("th",{children:"Percentage"}),Object(p.jsx)("th",{children:"Result"}),Object(p.jsx)("th",{children:"summary"})]})}),Object(p.jsx)("tbody",{children:P.map((function(e,t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:t+1}),Object(p.jsx)("td",{children:e.chapter.name}),Object(p.jsx)("td",{children:e.percentage}),Object(p.jsx)("td",{children:e.tag}),Object(p.jsx)(x.a,{className:"btn btn-primary ",onClick:function(t){return Q(t,e)},children:" Summary"})]})}))})]})]}),Object(p.jsxs)(u.a,{show:J,onHide:U,children:[Object(p.jsx)(u.a.Header,{closeButton:!0,children:Object(p.jsx)(u.a.Title,{children:"Add Content"})}),Object(p.jsx)("div",{class:"DetailsContent",children:Object(p.jsxs)("div",{class:"row",children:[Object(p.jsx)("div",{class:"col-sm-6",children:Object(p.jsxs)("ul",{children:[Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{class:"Title",children:"Status    :"}),Object(p.jsxs)("label",{children:[" ",null===L||void 0===L?void 0:L.online_status]})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{class:"Title",children:"Category   :"}),Object(p.jsxs)("label",{children:[" ",null===L||void 0===L||null===(t=L.chapter)||void 0===t||null===(s=t.subcategory_meta)||void 0===s||null===(c=s.category_meta)||void 0===c?void 0:c.name]})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{class:"Title",children:"Subcategory   :"}),Object(p.jsx)("label",{children:null===L||void 0===L||null===(r=L.chapter)||void 0===r||null===(m=r.subcategory_meta)||void 0===m?void 0:m.name})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{class:"Title",children:"Chapter Name    :"}),Object(p.jsx)("label",{children:null===L||void 0===L||null===(f=L.chapter)||void 0===f?void 0:f.name})]})]})}),Object(p.jsx)("div",{class:"col-sm-6",children:Object(p.jsxs)("ul",{children:[Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{class:"Title",children:"Total Questions   :"}),Object(p.jsx)("label",{children:null===L||void 0===L?void 0:L.total_questions})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{class:"Title",children:"Attampt Total   :"}),Object(p.jsx)("label",{children:null===L||void 0===L?void 0:L.attampt_total})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{class:"Title",children:"wrong_questions   :"}),Object(p.jsx)("label",{children:null===L||void 0===L?void 0:L.wrong_questions})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{class:"Title",children:"correct_answer   :"}),Object(p.jsx)("label",{children:null===L||void 0===L?void 0:L.correct_answer})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{class:"Title",children:"percentage   :"}),Object(p.jsx)("label",{children:null===L||void 0===L?void 0:L.percentage})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{class:"Title",children:"Result   :"}),Object(p.jsx)("label",{children:null===L||void 0===L?void 0:L.tag})]})]})})]})}),Object(p.jsx)(u.a.Footer,{children:Object(p.jsx)(x.a,{variant:"secondary",onClick:U,children:"Close"})})]})]})]})})]})})})]}),Object(p.jsx)("script",{src:"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js "}),Object(p.jsx)("script",{src:"js/bootstrap.min.js "}),Object(p.jsx)("script",{src:"js/owl.carousel.js "})]})]})})}}}]);
//# sourceMappingURL=33.abae6e4d.chunk.js.map