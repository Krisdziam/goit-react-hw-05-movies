"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[146],{146:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var s=n(885),a=n(230),r=n(791),i=n(470),c=n(742),l=n(731),u={details:"FilmsDetails_details__ZMgJA",img__wrapper:"FilmsDetails_img__wrapper__qi6tq",img:"FilmsDetails_img__Fr9D6",goBackBtn:"FilmsDetails_goBackBtn__lGHhc",description:"FilmsDetails_description__HA2Td",title__wrapper:"FilmsDetails_title__wrapper__4I9iW",title:"FilmsDetails_title__pNciJ",tagline:"FilmsDetails_tagline__LSFTX",list:"FilmsDetails_list__VnE7x",item:"FilmsDetails_item__4iWQY",span:"FilmsDetails_span__k6l-T",genres:"FilmsDetails_genres__aX4p1",overview:"FilmsDetails_overview__AURm9",moreInfo:"FilmsDetails_moreInfo__WgG18",nextBtn:"FilmsDetails_nextBtn__qvZ5U"},o=n(71),p=n(184),m=function(e){var t,n=e.data,s=(0,i.TH)(),a=n.genres,r=n.overview,c=n.release_date,m=n.production_countries,_=n.runtime,d=n.vote_average,h=n.title,f=n.tagline,g=n.poster_path;return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{className:u.details,children:[(0,p.jsxs)("div",{className:u.img__wrapper,children:[(0,p.jsx)("img",{className:u.img,src:"https://image.tmdb.org/t/p/w500".concat(g),alt:"poster",width:"350",height:"400"}),(0,p.jsx)(l.rU,{className:u.goBackBtn,to:(null===s||void 0===s||null===(t=s.state)||void 0===t?void 0:t.from)||"/",children:(0,p.jsx)(o.gYP,{})})]}),(0,p.jsxs)("div",{className:u.description,children:[(0,p.jsxs)("div",{className:u.title__wrapper,children:[(0,p.jsx)("h2",{className:u.title,children:h}),""!==f?(0,p.jsxs)("p",{className:u.tagline,children:['"',f,'"']}):""]}),(0,p.jsxs)("ul",{className:u.list,children:[(0,p.jsxs)("li",{className:u.item,children:["User Score:",(0,p.jsx)("span",{className:u.span,children:d})]}),(0,p.jsxs)("li",{className:u.item,children:["Runtime:",(0,p.jsx)("span",{className:u.span,children:function(e){var t=e/60,n=Math.floor(t),s=60*(t-n),a=Math.round(s),r="".concat(n,1===n?" hour ":" hours "),i="".concat(a,1===a?" minute":" minutes");return 0===n&&(r=""),0===a&&(i=""),r+i}(_)})]}),(0,p.jsxs)("li",{className:u.item,children:["Release date:"," ",(0,p.jsx)("span",{className:u.span,children:new Date(c).toLocaleDateString()})]}),(0,p.jsxs)("li",{className:u.item,children:["Genres:",(0,p.jsx)("ul",{className:u.genres,children:a.length>0?a.map((function(e,t){var n=e.id,s=e.name;return(0,p.jsx)("li",{className:u.genres__item,children:(t?", ":"")+s},n)})):(0,p.jsx)("p",{className:u.genres__item,children:"Other"})})]}),(0,p.jsxs)("li",{className:u.item,children:["Countries:",(0,p.jsx)("span",{className:u.span,children:m.map((function(e){return e.name}))})]})]}),(0,p.jsx)("p",{className:u.overview,children:r}),(0,p.jsxs)("div",{className:u.moreInfo,children:[(0,p.jsx)(l.rU,{className:u.nextBtn,to:"cast",children:"Cast"}),(0,p.jsx)(l.rU,{className:u.nextBtn,to:"reviews",children:"Reviews"})]})]})]})})},_={};function d(){var e,t=(0,r.useState)(),n=(0,s.Z)(t,2),l=n[0],u=n[1],o=(0,i.UO)().id,d=(0,i.TH)();return(0,r.useEffect)((function(){(0,a.Vn)(o).then((function(e){c.Loading.pulse({svgColor:"#32c682",svgSize:"100px",cssAnimationDuration:800}),u(e)})).finally((function(){c.Loading.remove()}))}),[o]),(0,p.jsxs)("div",{className:_.container,children:[l&&(0,p.jsx)(m,{location:null!==(e=d.state)&&void 0!==e?e:"/",data:l}),(0,p.jsx)(i.j3,{})]})}},230:function(e,t,n){n.d(t,{Bt:function(){return d},PI:function(){return f},Up:function(){return o},Vn:function(){return m},cu:function(){return l}});var s=n(861),a=n(757),r=n.n(a),i=n(44),c="3cd5ca2b87850020dae80128c26cb9e1";function l(){return u.apply(this,arguments)}function u(){return(u=(0,s.Z)(r().mark((function e(){var t;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.ZP.get("/movie/popular?api_key=".concat(c,"&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(e){return p.apply(this,arguments)}function p(){return(p=(0,s.Z)(r().mark((function e(t){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.ZP.get("/search/movie?api_key=".concat(c,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return _.apply(this,arguments)}function _(){return(_=(0,s.Z)(r().mark((function e(t){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.ZP.get("/movie/".concat(t,"?api_key=").concat(c));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return h.apply(this,arguments)}function h(){return(h=(0,s.Z)(r().mark((function e(t){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.ZP.get("/movie/".concat(t,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return g.apply(this,arguments)}function g(){return(g=(0,s.Z)(r().mark((function e(t){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.ZP.get("/movie/".concat(t,"/credits?api_key=").concat(c,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.ZP.defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=146.b7b2ac6a.chunk.js.map