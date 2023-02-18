"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[135],{135:function(e,r,t){t.r(r),t.d(r,{default:function(){return Z}});var a=t(439),n=t(791),s=t(87),c=t(33),u="searchbar_SearchBarContainer__jzO2F",i="searchbar_Searchbar__UqZUS",o="searchbar_SearchForm__YVBoJ",l="searchbar_SearchFormButton__wHlBy",m="searchbar_SearchFormButtonLabel__bI+pN",p="searchbar_SearchFormInput__M5EcH",h=t(792),f=t(689),d=t(664),_=t(184),v=function(e){var r=e.items,t=(0,f.TH)(),a=r.map((function(e){var r=e.id,a=e.title,n=e.release_date,c=e.name,u=e.backdrop_path,i=new Date(n);return(0,_.jsx)("div",{className:d.Z.Section,children:(0,_.jsx)("li",{className:d.Z.ImageGalleryItem,id:r,release_date:n,title:a,name:c,backdrop_path:u,children:(0,_.jsxs)(s.rU,{to:"/movies/".concat(r),state:{from:t},children:[(0,_.jsx)("img",{className:d.Z.ImageGalleryItemImage,src:"https://image.tmdb.org/t/p/w500".concat(u),alt:""}),(0,_.jsxs)("p",{className:d.Z.Title,children:[" ",a]}),(0,_.jsxs)("p",{className:d.Z.Title,children:[" ",i.toLocaleDateString()]})]})},r)})}));return(0,_.jsx)("ul",{className:d.Z.ImageGallery,children:a})},g=v;v.defaultProps={items:[]};var x=t(838),b=function(){var e=(0,n.useState)([]),r=(0,a.Z)(e,2),t=r[0],f=r[1],d=(0,s.lr)(),v=(0,a.Z)(d,2),b=v[0],Z=v[1],y=b.get("search");(0,n.useEffect)((function(){""!==y&&null!==y&&(0,h.Sc)(y).then(f)}),[y]);return(0,_.jsxs)("div",{className:u,children:[(0,_.jsx)("header",{className:i,children:(0,_.jsxs)("form",{className:o,onSubmit:function(e){e.preventDefault();var r=e.currentTarget;Z({search:r.elements.search.value}),r.reset()},children:[(0,_.jsxs)("button",{type:"submit",className:l,children:[(0,_.jsx)(c.Ozl,{size:20}),(0,_.jsx)("span",{className:m,children:"Search"})]}),(0,_.jsx)("input",{className:p,name:"search",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})}),(0,_.jsx)("ul",{children:x.Z&&(0,_.jsx)(g,{items:t})})]})},Z=function(){return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(b,{})})}},792:function(e,r,t){t.d(r,{Df:function(){return u},Sc:function(){return o},Xm:function(){return m},sk:function(){return l},vq:function(){return i}});var a=t(861),n=t(757),s=t.n(n),c=t(912);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"f8293dad30f8a0ae553bd7bee540fd13"};var u=function(){var e=(0,a.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/trending/movie/week");case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,a.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(r));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,a.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/search/movie",{params:{query:r}});case 2:return t=e.sent,console.log(t.data.results),e.abrupt("return",t.data.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(r,"/credits"));case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),m=function(){var e=(0,a.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(r,"/reviews"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},838:function(e,r,t){var a=t(984),n=[{id:(0,a.x0)(),text:"Home page",link:"/"},{id:(0,a.x0)(),text:"Movies",link:"/movies"}];r.Z=n},664:function(e,r){r.Z={App:"homePage_App__6+BtC",Section:"homePage_Section__x1GxG",ImageGallery:"homePage_ImageGallery__y3EaB",ImageGalleryItem:"homePage_ImageGalleryItem__3fu-J",ImageGalleryItemImage:"homePage_ImageGalleryItemImage__+n3sU"}}}]);
//# sourceMappingURL=135.7691f609.chunk.js.map