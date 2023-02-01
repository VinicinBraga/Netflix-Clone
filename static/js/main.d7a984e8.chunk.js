(this["webpackJsonpmovie-stream"]=this["webpackJsonpmovie-stream"]||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),i=a.n(c),s=a(3),o=a(5),l=a(4),u=(a(22),"50d42c272970d04355da24257ba2eb79"),m=function(){var e=Object(o.a)(Object(s.a)().mark((function e(t){var a,n;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.themoviedb.org/3").concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d={getHomeList:function(){var e=Object(o.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("/discover/tv?with_network=213&language=pt-BR&api_key=".concat(u));case 2:return e.t0=e.sent,e.t1={slug:"originals",title:"Originais do MyFlix",items:e.t0},e.next=6,m("/trending/all/week?language=pt-BR&api_key=".concat(u));case 6:return e.t2=e.sent,e.t3={slug:"trending",title:"Recomendados para voc\xea",items:e.t2},e.next=10,m("/movie/top_rated?language=pt-BR&api_key=".concat(u));case 10:return e.t4=e.sent,e.t5={slug:"toprated",title:"Em Alta",items:e.t4},e.next=14,m("/discover/movie?with_genres=28&language=pt-BR&api_key=".concat(u));case 14:return e.t6=e.sent,e.t7={slug:"action",title:"A\xe7\xe3o",items:e.t6},e.next=18,m("/discover/movie?with_genres=35&language=pt-BR&api_key=".concat(u));case 18:return e.t8=e.sent,e.t9={slug:"comedy",title:"Com\xe9dia",items:e.t8},e.next=22,m("/discover/movie?with_genres=27&language=pt-BR&api_key=".concat(u));case 22:return e.t10=e.sent,e.t11={slug:"horror",title:"Terror",items:e.t10},e.next=26,m("/discover/movie?with_genres=10749&language=pt-BR&api_key=".concat(u));case 26:return e.t12=e.sent,e.t13={slug:"romance",title:"Romance",items:e.t12},e.next=30,m("/discover/movie?with_genres=99&language=pt-BR&api_key=".concat(u));case 30:return e.t14=e.sent,e.t15={slug:"documentary",title:"Documentario",items:e.t14},e.abrupt("return",[e.t1,e.t3,e.t5,e.t7,e.t9,e.t11,e.t13,e.t15]);case 33:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getMovieInfo:function(){var e=Object(o.a)(Object(s.a)().mark((function e(t,a){var n;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n={},!t){e.next=15;break}e.t0=a,e.next="movie"===e.t0?5:"tv"===e.t0?9:13;break;case 5:return e.next=7,m("/movie/".concat(t,"?language=pt-BR&api_key=").concat(u));case 7:case 11:return n=e.sent,e.abrupt("break",15);case 9:return e.next=11,m("/tv/".concat(t,"?language=pt-BR&api_key=").concat(u));case 13:return n=null,e.abrupt("break",15);case 15:return e.abrupt("return",n);case 16:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},g=(a(23),a(14)),f=a.n(g),v=a(16),p=a.n(v),h=function(e){var t=e.title,a=e.items,c=e.setFeaturedData,i=Object(n.useState)(0),s=Object(l.a)(i,2),o=s[0],u=s[1];return r.a.createElement("div",{className:"movieRow"},r.a.createElement("h2",null,t),r.a.createElement("div",{className:"movieRow--left",onClick:function(){var e=o+Math.round(window.innerWidth/2);e>0&&(e=0),u(e)}},r.a.createElement(f.a,{style:{fontSize:50}})),r.a.createElement("div",{className:"movieRow--right",onClick:function(){var e=o-Math.round(window.innerWidth/2),t=200*a.results.length;window.innerWidth-t>e&&(e=window.innerWidth-t-60),u(e)}},r.a.createElement(p.a,{style:{fontSize:50}})),r.a.createElement("div",{className:"movieRow--listarea"},r.a.createElement("div",{className:"movieRow--list",style:{marginLeft:o,width:200*a.results.length}},a.results.length>0&&a.results.map((function(e,t){return r.a.createElement("div",{key:t,className:"movieRow--item",onClick:function(){return c(e)}},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w300".concat(e.poster_path),alt:e.original_name}))})))))},b=(a(27),function(e){var t=e.item;console.log(t);var a=new Date(t.first_air_date),n=[];for(var c in t.genres)n.push(" ".concat(t.genres[c].name));var i=t.overview;return i.length>200&&(i=i.substring(0,200)+"..."),r.a.createElement("section",{className:"featured",style:{backgroundSize:"cover",backgroundPosition:"center",backgroundImage:"url(https://image.tmdb.org/t/p/original".concat(t.backdrop_path,")")}},r.a.createElement("div",{className:"featured--vertical"},r.a.createElement("div",{className:"featured--horizontal"},r.a.createElement("div",{className:"featured--name"},t.original_name),r.a.createElement("div",{className:"featured--info"},r.a.createElement("div",{className:"featured--points"},t.vote_average," pontos"),r.a.createElement("div",{className:"featured--year"},a.getFullYear()),r.a.createElement("div",{className:"featured--seasons"},t.number_of_seasons," Temporada",1!==t.number_of_seasons?"s":" "),r.a.createElement("div",{className:"featured--description"},i),r.a.createElement("div",{className:"featured--buttons"},r.a.createElement("a",{className:"featured--whachbutton",href:"/watch/".concat(t.id)},"\u25b6 Assistir"),r.a.createElement("a",{className:"featured--mylistbutton",href:"/list/add/".concat(t.id)}," ","+ Minha Lista")),r.a.createElement("div",{className:"featured--genres"},r.a.createElement("strong",null,"G\xeaneros:"),n.join(", "))))))}),E=(a(28),function(e){var t=e.black;return r.a.createElement("header",{className:t?"black":""},r.a.createElement("div",{className:"header--logo"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:"https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png",alt:"Netflix"}))),r.a.createElement("div",{className:"header--user"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",alt:"usuario"}))))}),w=(a(29),function(){return r.a.createElement("footer",null,"Feito com",r.a.createElement("span",{role:"img","aria-label":"cora\xe7\xe3o"},"\u2764\ufe0f"),"Por Vinny Braga ",r.a.createElement("br",null),"Direitos de imagem para a NetFlix",r.a.createElement("br",null),"Api utilizada do site:",r.a.createElement("br",null),"Themoviedb.org")}),k=(a(30),function(e){var t=e.list;return r.a.createElement("div",null,r.a.createElement("div",null,t.length<=0&&r.a.createElement("img",{className:"loading",src:"https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif",alt:"Carregando"})))}),N=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(null),u=Object(l.a)(i,2),m=u[0],g=u[1],f=Object(n.useState)(!1),v=Object(l.a)(f,2),p=v[0],N=v[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(o.a)(Object(s.a)().mark((function e(){var t,a,n,r,i;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.getHomeList();case 2:return t=e.sent,c(t),a=t.filter((function(e){return"originals"===e.slug})),n=Math.floor(Math.random()*(a[0].items.results.length-1)),r=a[0].items.results[n],e.next=9,d.getMovieInfo(r.id,"tv");case 9:i=e.sent,g(i);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(n.useEffect)((function(){var e=function(){window.scrollY>15?N(!0):N(!1)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),r.a.createElement("div",{className:"page"},r.a.createElement(E,{black:p}),m&&r.a.createElement(b,{item:m}),r.a.createElement("section",{className:"lists"},a.map((function(e,t){return r.a.createElement(h,{key:t,title:e.title,items:e.items,setFeaturedData:g})}))),r.a.createElement(w,null),r.a.createElement(k,{list:a}))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.d7a984e8.chunk.js.map