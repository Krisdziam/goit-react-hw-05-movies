"use strict";(self.webpackChunkgoit_react_hw_05_movies_=self.webpackChunkgoit_react_hw_05_movies_||[]).push([[916],{916:function(n,r,e){e.r(r),e.d(r,{default:function(){return A}});var t,a,i,o,c,u,s,p,d,f,l,x=e(885),g=e(648),h=e(791),m=e(470),b=e(742),v=e(168),Z=e(444),k=e(731),w=Z.ZP.div(t||(t=(0,v.Z)(["\n  margin-top: 10px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n"]))),y=(0,Z.ZP)(k.rU)(a||(a=(0,v.Z)(["\n  padding: 5px 10px;\n  border: none;\n  text-decoration: none;\n  color: #fff;\n  background-color: #000;\n  border-radius: 20px;\n  cursor: pointer;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    background-color: #ff6b01;\n  }\n"]))),P=Z.ZP.div(i||(i=(0,v.Z)(["\n  margin-top: 10px;\n  padding: 10px;\n  border-radius: 30px;\n  border: 0.5px solid #fff;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #fff;\n\n  @media screen and (max-width: 480px) {\n    max-width: 310px;\n  }\n"]))),j=Z.ZP.div(o||(o=(0,v.Z)(["\n  display: flex;\n  margin-top: 20px;\n\n  @media screen and (max-width: 480px) {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n"]))),_=Z.ZP.img(c||(c=(0,v.Z)(["\n  border: 3px solid #fff;\n  width: 320px;\n  height: 460px;\n\n  @media screen and (max-width: 480px) {\n    width: 250px;\n    height: 350px;\n  }\n"]))),U=Z.ZP.div(u||(u=(0,v.Z)(["\n  margin-left: 20px;\n"]))),S=Z.ZP.h1(s||(s=(0,v.Z)([""]))),C=Z.ZP.p(p||(p=(0,v.Z)(["\n  margin-top: 10px;\n  margin-bottom: 20px;\n  color: #818181;\n"]))),z=Z.ZP.div(d||(d=(0,v.Z)(["\n  margin-top: 20px;\n  display: flex;\n  justify-content: center;\n"]))),L=(0,Z.ZP)(k.rU)(f||(f=(0,v.Z)(["\n  padding: 10px 50px;\n  background-color: #fff;\n  border-radius: 20px;\n  margin-right: 30px;\n  text-decoration: none;\n  color: black;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    background-color: #ff6b01;\n  }\n\n  @media screen and (max-width: 480px) {\n    padding: 10px 30px;\n    margin-right: 10px;\n  }\n"]))),R=(0,Z.ZP)(k.rU)(l||(l=(0,v.Z)(["\n  padding: 10px 50px;\n  background-color: #fff;\n  border-radius: 20px;\n  text-decoration: none;\n  color: black;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    background-color: #ff6b01;\n  }\n  @media screen and (max-width: 480px) {\n    padding: 10px 30px;\n  }\n"]))),V=e(184),q=function(n){var r=n.data,e=r.title,t=r.tagline,a=r.poster_path;return(0,V.jsxs)(P,{children:[(0,V.jsxs)(j,{children:[(0,V.jsx)(_,{src:"https://image.tmdb.org/t/p/w500".concat(a),alt:"poster"}),(0,V.jsxs)(U,{children:[(0,V.jsx)(S,{children:e}),(0,V.jsx)(C,{children:t})]})]}),(0,V.jsxs)(z,{children:[(0,V.jsx)(L,{to:"cast",children:"Cast"}),(0,V.jsx)(R,{to:"reviews",children:"Reviews"})]})]})};function A(){var n,r,e=(0,h.useState)(),t=(0,x.Z)(e,2),a=t[0],i=t[1],o=(0,m.UO)().id,c=(0,m.TH)();return(0,h.useEffect)((function(){(0,g.Vn)(o).then((function(n){b.Loading.circle({svgColor:"#ff6b01",cssAnimationDuration:800}),i(n)})).finally((function(){b.Loading.remove()}))}),[o]),(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(w,{children:(0,V.jsx)(y,{to:(null===c||void 0===c||null===(n=c.state)||void 0===n?void 0:n.from)||"/",children:"Go back"})}),a&&(0,V.jsx)(q,{location:null!==(r=c.state)&&void 0!==r?r:"/",data:a}),(0,V.jsx)(m.j3,{})]})}},648:function(n,r,e){e.d(r,{Bt:function(){return x},PI:function(){return h},Up:function(){return p},Vn:function(){return f},cu:function(){return u}});var t=e(861),a=e(757),i=e.n(a),o=e(44),c="3cd5ca2b87850020dae80128c26cb9e1";function u(){return s.apply(this,arguments)}function s(){return(s=(0,t.Z)(i().mark((function n(){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.ZP.get("/movie/popular?api_key=".concat(c,"&language=en-US&page=1"));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return d.apply(this,arguments)}function d(){return(d=(0,t.Z)(i().mark((function n(r){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.ZP.get("/search/movie?api_key=".concat(c,"&language=en-US&query=").concat(r,"&page=1&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return l.apply(this,arguments)}function l(){return(l=(0,t.Z)(i().mark((function n(r){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.ZP.get("/movie/".concat(r,"?api_key=").concat(c));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return g.apply(this,arguments)}function g(){return(g=(0,t.Z)(i().mark((function n(r){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.ZP.get("/movie/".concat(r,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return m.apply(this,arguments)}function m(){return(m=(0,t.Z)(i().mark((function n(r){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.ZP.get("/movie/".concat(r,"/credits?api_key=").concat(c,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}o.ZP.defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=916.47ee6dcd.chunk.js.map