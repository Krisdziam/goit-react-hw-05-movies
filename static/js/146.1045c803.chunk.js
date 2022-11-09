"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[146],{146:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var s=n(885),a=n(648),r=n(791),i=n(470),c=n(742),l=n(731),u={details:"FilmsDetails_details__ZMgJA",img__wrapper:"FilmsDetails_img__wrapper__qi6tq",img:"FilmsDetails_img__Fr9D6",goBackBtn:"FilmsDetails_goBackBtn__lGHhc",description:"FilmsDetails_description__HA2Td",title__wrapper:"FilmsDetails_title__wrapper__4I9iW",title:"FilmsDetails_title__pNciJ",tagline:"FilmsDetails_tagline__LSFTX",list:"FilmsDetails_list__VnE7x",item:"FilmsDetails_item__4iWQY",span:"FilmsDetails_span__k6l-T",genres:"FilmsDetails_genres__aX4p1",overview:"FilmsDetails_overview__AURm9",moreInfo:"FilmsDetails_moreInfo__WgG18",nextBtn:"FilmsDetails_nextBtn__qvZ5U"},o=n(184),p=function(e){var t,n=e.data,s=(0,i.TH)(),a=n.genres,r=n.overview,c=n.release_date,p=n.production_countries,m=n.runtime,_=n.vote_average,d=n.title,h=n.tagline,f=n.poster_path;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:u.details,children:[(0,o.jsxs)("div",{className:u.img__wrapper,children:[(0,o.jsx)("img",{className:u.img,src:"https://image.tmdb.org/t/p/w500".concat(f),alt:"poster",width:"350",height:"400"}),(0,o.jsx)(l.rU,{className:u.goBackBtn,to:(null===s||void 0===s||null===(t=s.state)||void 0===t?void 0:t.from)||"/",children:"X"})]}),(0,o.jsxs)("div",{className:u.description,children:[(0,o.jsxs)("div",{className:u.title__wrapper,children:[(0,o.jsx)("h2",{className:u.title,children:d}),""!==h?(0,o.jsxs)("p",{className:u.tagline,children:['"',h,'"']}):""]}),(0,o.jsxs)("ul",{className:u.list,children:[(0,o.jsxs)("li",{className:u.item,children:["User Score:",(0,o.jsxs)("span",{className:u.span,children:[" ",_]})]}),(0,o.jsxs)("li",{className:u.item,children:["Runtime: ",(0,o.jsx)("span",{className:u.span,children:function(e){var t=e/60,n=Math.floor(t),s=60*(t-n),a=Math.round(s),r="".concat(n,1===n?" hour ":" hours "),i="".concat(a,1===a?" minute":" minutes");return 0===n&&(r=""),0===a&&(i=""),r+i}(m)})]}),(0,o.jsxs)("li",{className:u.item,children:["Release date: ",(0,o.jsx)("span",{className:u.span,children:new Date(c).toLocaleDateString()})]}),(0,o.jsxs)("li",{className:u.item,children:["Genres: ",(0,o.jsx)("ul",{className:u.genres,children:a.length>0?a.map((function(e,t){var n=e.id,s=e.name;return(0,o.jsx)("li",{className:u.genres__item,children:(t?", ":"")+s},n)})):(0,o.jsx)("p",{className:u.genres__item,children:"Other"})})]}),(0,o.jsxs)("li",{className:u.item,children:["Countries: ",(0,o.jsx)("span",{className:u.span,children:p.map((function(e){return e.name}))})]})]}),(0,o.jsx)("p",{className:u.overview,children:r}),(0,o.jsxs)("div",{className:u.moreInfo,children:[(0,o.jsx)(l.rU,{className:u.nextBtn,to:"cast",children:"Cast"}),(0,o.jsx)(l.rU,{className:u.nextBtn,to:"reviews",children:"Reviews"})]})]})," "]})})},m={};function _(){var e,t=(0,r.useState)(),n=(0,s.Z)(t,2),l=n[0],u=n[1],_=(0,i.UO)().id,d=(0,i.TH)();return(0,r.useEffect)((function(){(0,a.Vn)(_).then((function(e){c.Loading.pulse({svgColor:"#32c682",svgSize:"100px",cssAnimationDuration:800}),u(e)})).finally((function(){c.Loading.remove()}))}),[_]),(0,o.jsxs)("div",{className:m.container,children:[l&&(0,o.jsx)(p,{location:null!==(e=d.state)&&void 0!==e?e:"/",data:l}),(0,o.jsx)(i.j3,{})]})}},648:function(e,t,n){n.d(t,{Bt:function(){return d},PI:function(){return f},Up:function(){return o},Vn:function(){return m},cu:function(){return l}});var s=n(861),a=n(757),r=n.n(a),i=n(44),c="3cd5ca2b87850020dae80128c26cb9e1";function l(){return u.apply(this,arguments)}function u(){return(u=(0,s.Z)(r().mark((function e(){var t;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.ZP.get("/movie/popular?api_key=".concat(c,"&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(e){return p.apply(this,arguments)}function p(){return(p=(0,s.Z)(r().mark((function e(t){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.ZP.get("/search/movie?api_key=".concat(c,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return _.apply(this,arguments)}function _(){return(_=(0,s.Z)(r().mark((function e(t){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.ZP.get("/movie/".concat(t,"?api_key=").concat(c));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return h.apply(this,arguments)}function h(){return(h=(0,s.Z)(r().mark((function e(t){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.ZP.get("/movie/".concat(t,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return g.apply(this,arguments)}function g(){return(g=(0,s.Z)(r().mark((function e(t){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.ZP.get("/movie/".concat(t,"/credits?api_key=").concat(c,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.ZP.defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=146.1045c803.chunk.js.map