"use strict";(self.webpackChunkles_delices_de_tressy=self.webpackChunkles_delices_de_tressy||[]).push([[479],{4479:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var s=t(678),r=t(2791),a=t(7689),i=t(1087),c=t(1683),u=t(1303),l=t(7574),o=t(184),f=function(e){var n=e.items,t=Math.ceil(n.length/3),a=(0,r.useState)(1),i=(0,s.Z)(a,2),c=i[0],f=i[1],d=3*(c-1),h=d+3,m=n.slice(d,h),j=c>3,x=c+3<t,v=(0,u.Z)(Array(t)).map((function(e,n){return n+1}));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"list-view","data-testid":"list-view",children:m.map((function(e){return(0,o.jsx)(l.Z,{data:e},e.id)}))}),t>1&&(0,o.jsx)("nav",{className:"pagination",children:(0,o.jsxs)("ul",{children:[j&&(0,o.jsx)("li",{className:"previous-page",children:(0,o.jsx)("button",{className:"previous-page",onClick:function(){return f(c-1)},children:"\u276e"})}),v.map((function(e){return(0,o.jsx)("li",{children:(0,o.jsx)("button",{className:"".concat(c===e?"active":""," page-").concat(e),onClick:function(){return f(e)},children:e})},e)})),x&&(0,o.jsx)("li",{children:(0,o.jsx)("button",{className:"next-page",onClick:function(){return f(c+1)},children:"\u276f"})})]})})]})},d=t(9235),h=t(4423),m=t(8357),j=t(3153),x=function(){var e=(0,r.useState)(""),n=(0,s.Z)(e,2),t=n[0],u=n[1],l=(0,r.useState)([]),x=(0,s.Z)(l,2),v=x[0],p=x[1],g=(0,r.useState)(!1),C=(0,s.Z)(g,2),N=C[0],Z=C[1],b=(0,r.useContext)(m.Z).error,S=(0,a.TH)().pathname.split("/").pop(),k={offerType:S,title:t},y=(0,j.C)((function(e){var n=e.cart;return Object.values(n.cart).reduce((function(e,n){return e+n.quantity}),0)})),_=(0,j.C)((function(e){return e.user})),w=!!_&&["mamdjotresia99","mawelle","jenny","fabrigeas"].includes(_.email.split("@")[0]);console.log({isAdmin:w,user:_});var T=function(e){null===e||void 0===e||e.preventDefault(),Z(!0);var n="offers?".concat(new URLSearchParams(k).toString());c.Z.get(n).then((function(e){var n=e.data;p(n.offers)})).catch((function(e){b(e.message,"Failed to get offers")})).finally((function(){return Z(!1)}))},E=function(e,n){var t=(0,r.useState)(e),a=(0,s.Z)(t,2),i=a[0],c=a[1];return(0,r.useEffect)((function(){var t=setTimeout((function(){c(e)}),n);return function(){clearTimeout(t)}}),[e,n]),i}(t,500);return(0,r.useEffect)((function(){T()}),[S,E]),(0,o.jsxs)("div",{className:"home",children:[(0,o.jsx)("hr",{}),(0,o.jsx)("form",{onSubmit:T,children:(0,o.jsxs)("div",{className:"searchbox",children:[(0,o.jsx)("input",{value:t,onInput:function(e){return u(e.target.value)},placeholder:"Search by title"}),(0,o.jsx)("span",{className:"search-icon",children:" \ud83d\udd0d "})]})}),(0,o.jsx)("div",{children:N?(0,o.jsx)(d.$j,{}):(0,o.jsx)(f,{items:v})}),(0,o.jsxs)("div",{className:"actions",children:[w?(0,o.jsx)(i.rU,{to:h.Z6.NEW_OFFER,children:"Create new offer"}):null,y?(0,o.jsxs)(i.rU,{to:h.Z6.MY_CART,children:["Checkout\xa0","".concat(y," ").concat(y>1?"items":"item")]}):null]})]})}}}]);
//# sourceMappingURL=479.88bf3d3c.chunk.js.map