(function(t){function e(e){for(var r,o,i=e[0],c=e[1],l=e[2],d=0,v=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&v.push(n[o][0]),n[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(v.length)v.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},s=[];function o(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-1e692ef1":"701cba61","chunk-2d22d746":"996db0fc"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,r){a=n[t]=[e,r]}));e.push(a[2]=r);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=o(t);var l=new Error;s=function(e){c.onerror=c.onload=null,clearTimeout(d);var a=n[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+s+")",l.name="ChunkLoadError",l.type=r,l.request=s,a[1](l)}n[t]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"2b3e":function(t,e,a){t.exports=a.p+"img/NoImageAvailable.2b6901da.png"},3885:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-card",{staticClass:"hidden-sm-and-up",attrs:{href:"/about/"+t.show.id}},[t.show.image?r("v-img",{staticClass:"white--text align-end",attrs:{src:t.show.image.original,gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)","aspect-ratio":"1"}},[r("v-card-title",{domProps:{textContent:t._s(t.show.name)}}),t.show.rating.average?r("div",[r("v-icon",{attrs:{color:"amber"}},[t._v("mdi-star")]),t._v(" "+t._s(t.show.rating.average)+" ")],1):t._e()],1):r("v-img",{attrs:{src:a("2b3e"),"aspect-ratio":"1"}})],1),r("v-card",{staticClass:"hidden-md-and-up hidden-xs-only",attrs:{href:"/about/"+t.show.id}},[t.show.image?r("v-img",{attrs:{src:t.show.image.original,"aspect-ratio":"1.25"}}):r("v-img",{attrs:{src:a("2b3e"),"aspect-ratio":"1"}}),t.show.name?r("v-card-title",[t._v(" "+t._s(t.show.name)+" "),r("v-spacer"),t.show.language?r("v-icon",[t._v("mdi-volume-high")]):t._e(),t._v(" "+t._s(t.show.language)+" ")],1):t._e(),r("v-card-text",[r("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[r("div",[r("v-rating",{attrs:{color:"amber",dense:"","half-increments":"",readonly:"",size:"14",length:"10"},model:{value:t.show.rating.average,callback:function(e){t.$set(t.show.rating,"average",e)},expression:"show.rating.average"}},[t._v(t._s(t.show.rating.average))])],1),t.show.rating.average?r("div",{staticClass:"grey--text ml-4"},[t._v(t._s(t.show.rating.average))]):r("div",{staticClass:"grey--text ml-4"},[t._v("No Rating")])]),t.show.genres?r("v-row",{staticClass:"mx-0",attrs:{align:"center"}},t._l(t.show.genres,(function(e,a){return r("div",{key:a,staticClass:"my-4 subtitle-1"},[r("v-icon",[t._v("mdi-tag")]),t._v(" "+t._s(e)+" ")],1)})),0):t._e()],1)],1),r("v-card",{staticClass:"hidden-sm-and-down",attrs:{"max-width":"374","elevation-15":""}},[t.show.image?r("v-img",{attrs:{src:t.show.image.original,"aspect-ratio":"0.75"}}):r("v-img",{attrs:{src:a("2b3e"),"aspect-ratio":"1"}}),t.show.name?r("v-card-title",[t._v(" "+t._s(t.show.name)+" "),r("v-spacer"),t.show.language?r("v-icon",[t._v("mdi-volume-high")]):t._e(),t._v(" "+t._s(t.show.language)+" ")],1):t._e(),r("v-card-text",[r("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[r("div",[r("v-rating",{attrs:{color:"amber",dense:"","half-increments":"",readonly:"",size:"14",length:"10"},model:{value:t.show.rating.average,callback:function(e){t.$set(t.show.rating,"average",e)},expression:"show.rating.average"}},[t._v(t._s(t.show.rating.average))])],1),t.show.rating.average?r("div",{staticClass:"grey--text ml-4"},[t._v(t._s(t.show.rating.average))]):r("div",{staticClass:"grey--text ml-4"},[t._v("No Rating")])]),t.show.genres?r("v-row",{staticClass:"mx-0",attrs:{align:"center"}},t._l(t.show.genres,(function(e,a){return r("div",{key:a,staticClass:"my-4 subtitle-1"},[r("v-icon",[t._v("mdi-tag")]),t._v(" "+t._s(e)+" ")],1)})),0):t._e()],1),r("v-divider",{staticClass:"mx-4"}),r("v-card-actions",[r("v-btn",{attrs:{color:"orange",text:"",href:"/about/"+t.show.id}},[t._v("View Details")])],1)],1)],1)},n=[],s={name:"ShowCard",props:["show"]},o=s,i=a("2877"),c=a("6544"),l=a.n(c),d=a("8336"),u=a("b0af"),v=a("99d9"),h=a("ce7e"),m=a("132d"),p=a("adda"),g=a("1d4d"),f=a("0fd9"),w=a("2fa4"),b=Object(i["a"])(o,r,n,!1,null,null,null);e["a"]=b.exports;l()(b,{VBtn:d["a"],VCard:u["a"],VCardActions:v["a"],VCardText:v["b"],VCardTitle:v["c"],VDivider:h["a"],VIcon:m["a"],VImg:p["a"],VRating:g["a"],VRow:f["a"],VSpacer:w["a"]})},"4ec3":function(t,e,a){"use strict";a.d(e,"c",(function(){return s})),a.d(e,"b",(function(){return o})),a.d(e,"a",(function(){return i}));var r=a("bc3a"),n=a.n(r);function s(t){return n.a.get("http://api.tvmaze.com/search/shows?q=".concat(t))}function o(t){return n.a.get("http://api.tvmaze.com/shows/".concat(t,"?embed=cast"))}function i(){return n.a.get("http://api.tvmaze.com/shows")}},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("header",[a("app-header")],1),a("v-content",[a("router-view")],1),a("footer",[a("app-footer")],1)],1)},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-app-bar",{staticClass:"hidden-sm-and-down",attrs:{app:"",color:"primary",dark:""}},[a("v-toolbar-title",[a("v-btn",{staticClass:"primary",attrs:{href:"/"}},[t._v("HOME")])],1),a("v-spacer"),a("v-col",{attrs:{cols:"12",sm:"2"}},[a("v-btn",{staticClass:"btn-1",attrs:{href:"/search",text:""}},[a("span",[t._v("Search for a Show")]),a("v-icon",[t._v("mdi-open-in-new")])],1)],1)],1),a("div",{staticClass:"hidden-md-and-up"},[a("v-toolbar",{attrs:{dark:""}},[a("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),a("v-toolbar-title",[t._v("Tv Shows Page")])],1),a("v-navigation-drawer",{attrs:{absolute:"",temporary:"",dark:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[t._v("Tv Shows Page")])],1)],1),a("v-divider"),a("v-list",{attrs:{dense:""}},[a("v-list-item",{attrs:{link:"",href:"/"}},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-view-dashboard")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Dashboard")])],1)],1),a("v-list-item",{attrs:{link:"",href:"/search"}},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-magnify")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Search")])],1)],1)],1)],1)],1)],1)},i=[],c={name:"AppHeader",data:function(){return{drawer:!1}}},l=c,d=a("2877"),u=a("6544"),v=a.n(u),h=a("40dc"),m=a("5bc1"),p=a("8336"),g=a("62ad"),f=a("ce7e"),w=a("132d"),b=a("8860"),_=a("da13"),y=a("5d23"),C=a("34c3"),x=a("f774"),V=a("2fa4"),k=a("71d9"),A=a("2a7f"),O=Object(d["a"])(l,o,i,!1,null,null,null),S=O.exports;v()(O,{VAppBar:h["a"],VAppBarNavIcon:m["a"],VBtn:p["a"],VCol:g["a"],VDivider:f["a"],VIcon:w["a"],VList:b["a"],VListItem:_["a"],VListItemContent:y["a"],VListItemIcon:C["a"],VListItemTitle:y["b"],VNavigationDrawer:x["a"],VSpacer:V["a"],VToolbar:k["a"],VToolbarTitle:A["a"]});var j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{staticClass:"hidden-sm-and-down",attrs:{color:"primary"}},[a("v-col",{staticClass:"white--text"},[t._v(" ©2020 — "),a("strong",[t._v("TvShows Page")])])],1)},P=[],T={name:"AppFooter"},E=T,I=a("553a"),D=Object(d["a"])(E,j,P,!1,null,null,null),L=D.exports;v()(D,{VCol:g["a"],VFooter:I["a"]});var M={name:"App",components:{AppHeader:S,AppFooter:L}},$=M,z=a("7496"),F=a("a75b"),N=Object(d["a"])($,n,s,!1,null,null,null),R=N.exports;v()(N,{VApp:z["a"],VContent:F["a"]});a("d3b7");var B=a("8c4f"),H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("v-container",{attrs:{"grid-list-xl":""}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("h1",{staticClass:"display-1 font-weight-light"},[t._v("Pick your poison")])]),a("v-col",{staticClass:"mt-3",attrs:{md:"8",cols:"12"}},[a("v-select",{attrs:{items:t.genres,filled:"",label:"Genre","prepend-inner-icon":"mdi-tag"},on:{change:t.genrePicker},model:{value:t.genreChoice,callback:function(e){t.genreChoice=e},expression:"genreChoice"}})],1)],1),a("v-layout",{staticClass:"hidden-sm-and-down mt-5",attrs:{row:""}},t._l(t.shows.slice(0,15),(function(t,e){return a("v-flex",{key:e,attrs:{xs4:""}},[a("show-card",{attrs:{show:t}})],1)})),1),a("v-layout",{staticClass:"hidden-sm-and-up mt-3"},[a("v-carousel",{attrs:{cycle:"",height:"500","hide-delimiters":""}},t._l(t.shows.slice(0,15),(function(t,e){return a("v-carousel-item",{key:e},[a("show-card",{attrs:{show:t}})],1)})),1)],1),a("v-container",{staticClass:"hidden-md-and-up hidden-xs-only"},[a("v-carousel",{attrs:{cycle:"","hide-delimiters":"",height:"800","max-width":"500"}},t._l(t.shows,(function(t,e){return a("v-carousel-item",{key:e},[a("show-card",{attrs:{show:t}})],1)})),1)],1)],1)],1)},q=[],J=(a("4160"),a("caad"),a("2532"),a("159b"),a("4ec3")),G=a("3885"),K={name:"Dashboard",components:{ShowCard:G["a"]},data:function(){return{shows:[],data:[],genreChoice:null,genres:["Drama","Crime","Comedy","Action","Thriller","Science-Fiction","Horror","Anime","Adventure","Mystery"]}},created:function(){var t=this;Object(J["a"])().then((function(e){t.data=e.data,t.data.forEach((function(e){e.rating.average>8&&t.shows.push(e),t.shows=t.shuffleArray(t.shows)}))})).catch((function(t){alert(t)}))},methods:{shuffleArray:function(t){var e=t.length;while(e>0){var a=Math.floor(Math.random()*e);e--;var r=t[e];t[e]=t[a],t[a]=r}return t},genrePicker:function(){var t=this;null!=this.genreChoice&&(this.shows=[],this.data.forEach((function(e){e.genres.includes(t.genreChoice)&&t.shows.push(e)})),this.shows=this.shuffleArray(this.shows))}}},Q=K,U=a("5e66"),W=a("3e35"),X=a("a523"),Y=a("0e8f"),Z=a("a722"),tt=a("0fd9"),et=a("b974"),at=Object(d["a"])(Q,H,q,!1,null,null,null),rt=at.exports;v()(at,{VCarousel:U["a"],VCarouselItem:W["a"],VCol:g["a"],VContainer:X["a"],VFlex:Y["a"],VLayout:Z["a"],VRow:tt["a"],VSelect:et["a"]}),r["a"].use(B["a"]);var nt=[{path:"/about/:id",name:"About",component:function(){return a.e("chunk-2d22d746").then(a.bind(null,"f820"))}},{path:"/search",name:"Search",component:function(){return a.e("chunk-1e692ef1").then(a.bind(null,"2d3b"))}},{path:"*",name:"Dashboard",component:rt}],st=new B["a"]({mode:"history",base:"/",routes:nt}),ot=st,it=a("f309");r["a"].use(it["a"]);var ct=new it["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:ot,vuetify:ct,render:function(t){return t(R)}}).$mount("#app")}});
//# sourceMappingURL=app.ba70f31e.js.map