"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[521],{521:function(t,n,e){e.r(n),e.d(n,{default:function(){return l}});var r=e(885),a=e(648),c=e(791),u=e(731),s=e(470),i=e(742),o=e(184),p=function(t){var n=t.data,e=n.title,r=n.tagline,a=n.poster_path;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(a),alt:"poster"}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{children:e}),(0,o.jsx)("h3",{children:r})]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(u.rU,{to:"cast",children:"Cast"}),(0,o.jsx)(u.rU,{to:"reviews",children:"Reviews"})]})]})};function l(){var t,n,e=(0,c.useState)(),l=(0,r.Z)(e,2),f=l[0],d=l[1],h=(0,s.UO)().id,v=(0,s.TH)();return(0,c.useEffect)((function(){(0,a.Vn)(h).then((function(t){i.Loading.pulse({svgColor:"#32c682",svgSize:"100px",cssAnimationDuration:800}),d(t)})).finally((function(){i.Loading.remove()}))}),[h]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u.rU,{to:(null===v||void 0===v||null===(t=v.state)||void 0===t?void 0:t.from)||"/",children:"Go back"}),f&&(0,o.jsx)(p,{location:null!==(n=v.state)&&void 0!==n?n:"/",data:f}),(0,o.jsx)(s.j3,{})]})}},648:function(t,n,e){e.d(n,{Bt:function(){return h},PI:function(){return g},Up:function(){return p},Vn:function(){return f},cu:function(){return i}});var r=e(861),a=e(757),c=e.n(a),u=e(44),s="3cd5ca2b87850020dae80128c26cb9e1";function i(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("/movie/popular?api_key=".concat(s,"&language=en-US&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("/search/movie?api_key=".concat(s,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("/movie/".concat(n,"?api_key=").concat(s));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("/movie/".concat(n,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("/movie/".concat(n,"/credits?api_key=").concat(s,"&language=en-US&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}u.ZP.defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=521.a48b858e.chunk.js.map