(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[12],{623:function(e,s,t){"use strict";t.d(s,"a",(function(){return c})),t.d(s,"b",(function(){return i}));var c="http://localhost:4001",i="http://localhost:3001/"},624:function(e,s,t){},635:function(e,s,t){},647:function(e,s,t){"use strict";var c=t(13),i=t(30),n=t(633),r=t.n(n),l=t(1),a=t.n(l),j=t(634),d=a.a.forwardRef((function(e,s){var t=e.bsPrefix,n=e.className,l=e.striped,d=e.bordered,o=e.borderless,b=e.hover,h=e.size,O=e.variant,x=e.responsive,p=Object(i.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),m=Object(j.a)(t,"table"),u=r()(n,m,O&&m+"-"+O,h&&m+"-"+h,l&&m+"-striped",d&&m+"-bordered",o&&m+"-borderless",b&&m+"-hover"),f=a.a.createElement("table",Object(c.a)({},p,{className:u,ref:s}));if(x){var v=m+"-responsive";return"string"===typeof x&&(v=v+"-"+x),a.a.createElement("div",{className:v},f)}return f}));s.a=d},697:function(e,s,t){"use strict"},909:function(e,s,t){"use strict";t.r(s);var c=t(627),i=t.n(c),n=t(628),r=t(625),l=t(1),a=(t(629),t(626),t(630)),j=t.n(a),d=t(160),o=t(631),b=(t(624),t(697),t(623)),h=t(663),O=(t(635),t(647)),x=t(17);s.default=function(e){var s=e.match,t=Object(l.useState)({id:"",name:"",user_type:"",minner_Activity:"",team:[]}),c=Object(r.a)(t,2),a=c[0],p=c[1],m=Object(l.useState)({}),u=Object(r.a)(m,2),f=u[0],v=u[1],y=Object(l.useState)([]),g=Object(r.a)(y,2),w=g[0],_=g[1],D={headers:{token:localStorage.getItem("token")}};Object(l.useEffect)((function(){console.warn("params",s.params.id),k(s.params.id),T(s.params.id)}),[]);var k=function(){var e=Object(n.a)(i.a.mark((function e(s){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("process.env.NODE_ENV","production"),e.next=3,j.a.get("".concat(b.a,"/api/admin/user-details?_id=").concat(s),D);case 3:t=e.sent,console.warn("response",t.data),200!=t.data.code?Object(o.b)("Somethig went wrong"):(Object(o.b)("Get successfully"),p(t.data.data));case 6:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}(),T=function(){var e=Object(n.a)(i.a.mark((function e(s){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("".concat(b.a,"/api/admin/wallet?_id=").concat(s),D);case 2:t=e.sent,console.warn("response wallet",t.data),200!=t.data.code?console.warn(t.data):(v(t.data.data),_(t.data.data.transactions));case 5:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}();return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("html",{lang:"en",children:[Object(x.jsxs)("head",{children:[Object(x.jsx)("meta",{charset:"utf-8"}),Object(x.jsx)("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge"}),Object(x.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),Object(x.jsx)("title",{}),Object(x.jsx)("link",{href:"css/style.css",rel:"stylesheet"}),Object(x.jsx)("link",{href:"css/animate.css",rel:"stylesheet"}),Object(x.jsx)("link",{href:"css/bootstrap.min.css",rel:"stylesheet"}),Object(x.jsx)("link",{href:"css/owl.carousel.min.css",rel:"stylesheet"}),Object(x.jsx)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}),Object(x.jsx)("link",{href:"https://fonts.googleapis.com/css?family=PT+Sans:400,400i,700,700i",rel:"stylesheet"}),Object(x.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Raleway:200,300,400,500,600,700,800,900",rel:"stylesheet"}),Object(x.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Lato:300,400,700,900",rel:"stylesheet"}),Object(x.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800",rel:"stylesheet"}),Object(x.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900",rel:"stylesheet"}),Object(x.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Electrolize",rel:"stylesheet"})]}),Object(x.jsxs)("body",{children:[Object(x.jsxs)("section",{children:[Object(x.jsx)("div",{class:"verifi"}),Object(x.jsx)("div",{class:"DetailsArea",children:Object(x.jsx)("div",{class:"container",children:Object(x.jsxs)("div",{class:"row",children:[Object(x.jsx)("div",{class:"col-sm-3 DetailsLeft",children:Object(x.jsxs)("div",{class:"DetailsLeftProfile",children:[Object(x.jsx)("figure",{children:Object(x.jsx)("img",{src:""==a.profile_pic?h.a:b.b+a.profile_pic,height:100,width:100})}),Object(x.jsxs)("h3",{children:[" ",a.name," "]}),Object(x.jsxs)("ul",{children:["",""]})]})}),Object(x.jsx)("div",{class:"col-sm-9",children:Object(x.jsxs)("div",{class:"DetailsRight",children:[Object(x.jsx)("h3",{children:"Profile Information"}),Object(x.jsx)("i",{class:"fa fa-pencil","aria-hidden":"true"}),Object(x.jsx)(d.b,{className:"btn btn-primary mr-2",to:"/user/edit/".concat(a._id),children:" edit "}),Object(x.jsx)("div",{class:"DetailsContent",children:Object(x.jsxs)("div",{class:"row",children:[Object(x.jsx)("div",{class:"col-sm-6",children:Object(x.jsxs)("ul",{children:[Object(x.jsxs)("li",{children:[Object(x.jsx)("span",{class:"Title",children:"Email"}),Object(x.jsx)("span",{class:"Discribe",children:a.email})]}),Object(x.jsxs)("li",{children:[Object(x.jsx)("span",{class:"Title",children:"Name "}),Object(x.jsxs)("span",{class:"Discribe",children:["Mr.",a.name]})]}),Object(x.jsxs)("li",{children:[Object(x.jsx)("span",{class:"Title",children:"Mobile No"}),Object(x.jsx)("span",{class:"Discribe",children:"0"==a.is_number_verify?"null":a.number})]}),Object(x.jsxs)("li",{children:[Object(x.jsx)("span",{class:"Title",children:"Country Code"}),Object(x.jsx)("span",{class:"Discribe",children:""==a.country_code?"null":a.country_code})]}),Object(x.jsxs)("li",{children:[Object(x.jsx)("span",{class:"Title",children:"Email verified"}),Object(x.jsx)("span",{class:"Discribe",children:"0"==a.is_email_verify?"No":"Yes"})]})]})}),Object(x.jsx)("div",{class:"col-sm-6",children:Object(x.jsxs)("ul",{children:[Object(x.jsxs)("li",{children:[Object(x.jsx)("span",{class:"Title",children:"Number Verification "}),Object(x.jsx)("span",{class:"Discribe",children:"0"==a.is_number_verify?"No":"Yes"})]}),Object(x.jsxs)("li",{children:[Object(x.jsx)("span",{class:"Title",children:"Referral Id "}),Object(x.jsx)("span",{class:"Discribe",children:a.Referral_id})]})]})})]})}),Object(x.jsx)("div",{children:Object(x.jsxs)("div",{class:"DetailsContent",children:[Object(x.jsx)("h3",{children:"Wallet Details"}),Object(x.jsxs)("div",{class:"row",children:[Object(x.jsx)("div",{class:"col-sm-6",children:Object(x.jsxs)("ul",{children:[Object(x.jsxs)("li",{children:[Object(x.jsx)("span",{class:"Title",children:"Referral Amount "}),Object(x.jsxs)("span",{class:"Discribe",children:[f.referral_ammount," ",f.coin_type]})]}),Object(x.jsxs)("li",{children:[Object(x.jsx)("span",{class:"Title",children:"Mining Amount "}),Object(x.jsxs)("span",{class:"Discribe",children:[f.mining_ammount,"  ",f.coin_type]})]})]})}),Object(x.jsx)("div",{class:"col-sm-6",children:Object(x.jsxs)("ul",{children:[Object(x.jsxs)("li",{children:[Object(x.jsx)("span",{class:"Title",children:"Earning Amount "}),Object(x.jsxs)("span",{class:"Discribe",children:[f.earning_ammount,"  ",f.coin_type]})]}),Object(x.jsxs)("li",{children:[Object(x.jsx)("span",{class:"Title",children:"Total Amount"}),Object(x.jsxs)("span",{class:"Discribe",children:[f.total_amount,"  ",f.coin_type]})]})]})})]})]})}),Object(x.jsxs)("div",{class:"tadble-detail",children:[Object(x.jsx)("h2",{children:"team List"}),Object(x.jsxs)(O.a,{striped:!0,bordered:!0,hover:!0,children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"S.no"}),Object(x.jsx)("th",{children:"username"}),Object(x.jsx)("th",{children:"minner Activity"}),Object(x.jsx)("th",{children:"Actions"})]})}),Object(x.jsx)("tbody",{children:a.team.map((function(e,s){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:s+1}),Object(x.jsx)("td",{children:e.username}),Object(x.jsx)("td",{children:e.minner_Activity+""}),Object(x.jsxs)("td",{children:[" ",1==a.isVehicleComplete?"Yes":"No"]})]})}))})]})]}),Object(x.jsxs)("div",{class:"tadble-detail",children:[Object(x.jsx)("h2",{children:"Daily Earning"}),Object(x.jsxs)(O.a,{striped:!0,bordered:!0,hover:!0,children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"S.no"}),Object(x.jsx)("th",{children:"Total Earning"}),Object(x.jsx)("th",{children:"Date"})]})}),Object(x.jsx)("tbody",{children:w.map((function(e,s){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:s+1}),Object(x.jsx)("td",{children:e.totalAmount}),Object(x.jsx)("td",{children:e._id.date})]})}))})]})]})]})})]})})})]}),Object(x.jsx)("script",{src:"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js "}),Object(x.jsx)("script",{src:"js/bootstrap.min.js "}),Object(x.jsx)("script",{src:"js/owl.carousel.js "})]})]})})}}}]);
//# sourceMappingURL=12.7eeb6133.chunk.js.map