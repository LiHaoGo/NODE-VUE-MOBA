(function(t){function e(e){for(var a,n,c=e[0],l=e[1],o=e[2],p=0,d=[];p<c.length;p++)n=c[p],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&d.push(r[n][0]),r[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,o||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,c=1;c<s.length;c++){var l=s[c];0!==r[l]&&(a=!1)}a&&(i.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},r={app:0},i=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var o=0;o<c.length;o++)e(c[o]);var u=l;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0014":function(t,e,s){t.exports=s.p+"img/4.0917d2f3.jpeg"},"0972":function(t,e,s){},1399:function(t,e,s){"use strict";s("ef4a")},"21bb":function(t,e,s){"use strict";s("2dad")},"2dad":function(t,e,s){},"3d4d":function(t,e,s){"use strict";s("e6a0")},"49c5":function(t,e,s){},"4ffd":function(t,e,s){t.exports=s.p+"img/logo.b3b3bca8.png"},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},i=[],n=s("2877"),c={},l=Object(n["a"])(c,r,i,!1,null,null,null),o=l.exports,u=s("7212"),p=s.n(u),d=(s("a7a3"),s("78a7"),s("8c4f")),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("swiper",{ref:"mySwiper",attrs:{options:t.swiperOptions,"auto-update":!0,"auto-destroy":!0}},[a("swiper-slide",[a("img",{staticClass:"w-100",attrs:{src:s("da36"),alt:""}})]),a("swiper-slide",[a("img",{staticClass:"w-100",attrs:{src:s("5cb3"),alt:""}})]),a("swiper-slide",[a("img",{staticClass:"w-100",attrs:{src:s("5f5d"),alt:""}})]),a("swiper-slide",[a("img",{staticClass:"w-100",attrs:{src:s("0014"),alt:""}})]),a("div",{staticClass:"swiper-pagination text-right paagination-home px-3 pb-2",attrs:{slot:"pagination"},slot:"pagination"})],1),a("div",{staticClass:"nav-icons bg-white pt-3 mt-3 text-center"},[a("div",{staticClass:"putAway",style:t.putAwayText?"":"overflow:auto;"},[a("div",{staticClass:"d-flex flex-wrap",class:t.putAwayText?"":" flex-flow",style:t.putAwayText?"":"width:83.0769rem;"},t._l(t.icons,(function(e){return a("div",{key:e.class,staticClass:"nav-item mb-3 text-grey-1",class:t.putAwayText?"":" border-right"},[a("i",{staticClass:"sprite",class:"sprite-"+e.class}),a("div",{staticClass:"py-2"},[t._v(t._s(e.text))])])})),0)]),a("div",{staticClass:"bg-light d-flex ai-center jc-center py-2 fs-sm"},[a("i",{staticClass:"sprite sprite-arrow",class:t.putAwayText?"":" rotateZ"}),a("span",{staticClass:"ml-1",on:{click:t.putAway}},[t._v(t._s(t.putAwayText?"收起":"展开"))])])]),a("m-list-card",{attrs:{title:"新闻资讯",icon:"news",categories:t.newsCats},scopedSlots:t._u([{key:"items",fn:function(e){var s=e.category;return[a("ul",{staticClass:"nav-list"},t._l(s.newsList,(function(e,s){return a("router-link",{key:s,staticClass:"py-3 fs-lg d-flex",attrs:{to:"/articles/"+e._id,tag:"li"}},[a("span",{staticClass:"nav-tips  fs-sm mr-2 "},[t._v(t._s(e.categoryName))]),a("span",{staticClass:"flex-grow-1 text-ellipse pr-2"},[t._v(t._s(e.title))]),a("span",{staticClass:"text-grey"},[t._v(t._s(t._f("date")(e.createdAt)))])])})),1)]}}])}),a("m-list-card",{attrs:{title:"英雄列表",icon:"hero",categories:t.heroCats},scopedSlots:t._u([{key:"items",fn:function(e){var s=e.category;return[a("ul",{staticClass:"nav-list d-flex flex-wrap",staticStyle:{margin:"0 -.5rem"}},t._l(s.heroList,(function(e,s){return a("router-link",{key:s,staticClass:"p-2 fs-lg text-center ",staticStyle:{width:"20%"},attrs:{tag:"li",to:"/heroes/"+e._id}},[a("img",{staticClass:"w-100",staticStyle:{"border-radius":"0.3846rem"},attrs:{src:e.avatar,alt:""}}),a("div",[t._v(t._s(e.name))])])})),1)]}}])})],1)},v=[],m=s("1da1"),g=(s("96cf"),s("5a0c")),h=s.n(g),x={filters:{date:function(t){return h()(t).format("MM/DD")}},data:function(){return{swiperOptions:{pagination:{el:".paagination-home",clickable:!0},autoplay:{disableOnInteraction:!1,delay:3e3},loop:!0},newsCats:[],heroCats:[],putAwayText:!0,icons:[{class:"coming",text:"爆料站"},{class:"stroy",text:"故事站"},{class:"shop",text:"周边商城"},{class:"experience",text:"体验服"},{class:"newPeople",text:"新人专区"},{class:"glory",text:"荣耀·传承"},{class:"camp",text:"王者营地"},{class:"wechat",text:"公众号"},{class:"version",text:"版本介绍"},{class:"match",text:"对局环境"},{class:"share",text:"IP共享计划"},{class:"originality",text:"创意互动营"}]}},methods:{putAway:function(){this.putAwayText=!this.putAwayText},fetchNewsCats:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("news/list");case 2:s=e.sent,t.newsCats=s.data,console.log(t.newsCats);case 5:case"end":return e.stop()}}),e)})))()},fetchHeroCats:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("heroes/list");case 2:s=e.sent,t.heroCats=s.data,console.log(t.newsCats);case 5:case"end":return e.stop()}}),e)})))()}},created:function(){this.fetchNewsCats(),this.fetchHeroCats()}},w=x,_=(s("21bb"),Object(n["a"])(w,f,v,!1,null,null,null)),b=_.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),s("div",{staticClass:" bg-primary pt-3 pb-2"},[s("div",{staticClass:"nav jc-around  nav-inverse  pb-1"},[s("div",{staticClass:"nav-item active"},[s("router-link",{staticClass:" nav-link text-light ",attrs:{to:"/"}},[t._v("首页")])],1),s("div",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link text-light",attrs:{to:"/"}},[t._v("攻略中心")])],1),s("div",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link text-light",attrs:{to:"/"}},[t._v("赛事中心")])],1),s("div",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link text-light",attrs:{to:"/"}},[t._v("IP新游")])],1)])]),s("router-view")],1)},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tobar  py-2 px-4 d-flex ai-center"},[a("img",{attrs:{height:"30",src:s("4ffd"),alt:""}}),a("div",{staticClass:"px-3 flex-grow-1"},[a("div",{staticClass:"text-white"},[t._v("王者荣耀")]),a("div",{staticClass:"text-grey-1 fs-xxs"},[t._v("团队成就更多")])]),a("button",{staticClass:"bg-primary btn sprite-btn",attrs:{type:"button"}})])}],k={},j=k,O=(s("a006"),Object(n["a"])(j,C,y,!1,null,null,null)),A=O.exports,$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.model?s("div",{staticClass:"page-article"},[s("div",{staticClass:"d-flex py-3 px-2 bd-bottom"},[s("i",{staticClass:"backbg px-2",on:{click:function(e){return t.$router.go(-1)}}}),s("strong",{staticClass:"flex-grow-1 px-2 text-ellipse fs-xl text-title"},[t._v(t._s(t.model.title))]),s("div",{staticClass:"text-grey fs-xs"},[t._v(" 2021-08-27 ")])]),s("div",{staticClass:"px-3 body",domProps:{innerHTML:t._s(t.model.body)}})]):t._e()},S=[],P={data:function(){return{model:null}},methods:{fetch:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/articles/".concat(t.id));case 2:s=e.sent,t.model=s.data;case 4:case"end":return e.stop()}}),e)})))()}},created:function(){this.fetch()}},T=P,E=(s("1399"),Object(n["a"])(T,$,S,!1,null,null,null)),R=E.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.model?a("div",{staticClass:"page-hero"},[a("div",{staticClass:"tobar py-2 px-4 d-flex ai-center"},[a("img",{attrs:{height:"30",src:s("4ffd"),alt:""}}),t._m(0),a("router-link",{staticClass:"text-light",attrs:{tag:"div",to:"/"}},[t._v("更多英雄 >")])],1),a("div",{staticClass:"top",style:{"background-image":"url("+t.model.banner+")"}},[a("div",{staticClass:"info text-white p-3 h-100 d-flex jc-end flex-column"},[a("div",[t._v(t._s(t.model.title))]),a("h2",{staticClass:"my-2"},[t._v(t._s(t.model.name))]),a("div",[t._v(t._s(t.model.categories.map((function(t){return t.name})).join("/")))]),a("div",{staticClass:"d-flex jc-between"},[t.model.scores?a("div",{staticClass:"scores"},[a("span",[t._v("难度")]),a("span",{staticClass:"badge",class:"hero-attr1-"+t.model.scores.difficult}),a("span",[t._v("技能")]),a("span",{staticClass:"badge px-2",class:"hero-attr2-"+t.model.scores.skills}),a("span",[t._v("攻击")]),a("span",{staticClass:"badge",class:"hero-attr3-"+t.model.scores.attack}),a("span",[t._v("生存")]),a("span",{staticClass:"badge",class:"hero-attr4-"+t.model.scores.survive})]):t._e(),a("router-link",{staticClass:"text-light fs-sm",attrs:{tag:"span",to:"/"}},[t._v(" 皮肤 : 2 > ")])],1)])])]):t._e()},q=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"px-3 flex-grow-1"},[s("div",{staticClass:"text-white"},[t._v(" 王者荣耀      攻略战 ")])])}],L={props:{id:{required:!0}},data:function(){return{model:null}},methods:{fetch:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("heroes/".concat(t.id));case 2:s=e.sent,t.model=s.data;case 4:case"end":return e.stop()}}),e)})))()}},created:function(){this.fetch()}},I=L,N=(s("6e94"),Object(n["a"])(I,M,q,!1,null,null,null)),H=N.exports;a["default"].use(d["a"]);var U=[{path:"/",component:A,children:[{path:"/",name:"home",component:b},{path:"/articles/:id",name:"article",component:R,props:!0}]},{path:"/heroes/:id",name:"hero",component:H,props:!0}],D=new d["a"]({routes:U}),J=D,V=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card p-3 bg-white mt-3"},[s("div",{staticClass:"card-header pb-3 d-flex "},[s("i",{staticClass:"sprite",class:"sprite-"+t.icon}),s("div",{staticClass:"fs-xl flex-grow-1 pl-2"},[t._v(t._s(t.title))]),s("i",{staticClass:"sprite sprite-menu"})]),s("div",{staticClass:"card-body pt-3"},[t._t("default")],2)])},B=[],Z={props:{title:{type:String,required:!0},icon:{type:String,required:!0}}},z=Z,F=(s("3d4d"),Object(n["a"])(z,V,B,!1,null,"673d1713",null)),G=F.exports,K=function(){var t=this,e=this,s=e.$createElement,a=e._self._c||s;return a("m-card",{attrs:{title:e.title,icon:e.icon}},[a("div",{staticClass:"nav jc-between"},e._l(e.categories,(function(t,s){return a("div",{key:s,staticClass:"nav-item ",class:{active:e.isActive==s},on:{click:function(t){return e.$refs.list.$swiper.slideTo(s)}}},[a("div",{staticClass:"nav-link"},[e._v(e._s(t.name))])])})),0),a("swiper",{ref:"list",attrs:{options:{autoHeight:!0}},on:{"slide-change":function(){return e.isActive=t.$refs.list.$swiper.activeIndex}}},e._l(e.categories,(function(t,s){return a("swiper-slide",{key:s,class:"bd-"+s},[e._t("items",null,{category:t})],2)})),1)],1)},Q=[],W={props:{title:{type:String,required:!0},icon:{type:String,required:!0},categories:{type:Array,required:!0}},data:function(){return{isActive:0}}},X=W,Y=Object(n["a"])(X,K,Q,!1,null,null,null),tt=Y.exports,et=s("bc3a"),st=s.n(et);a["default"].use(p.a),a["default"].config.productionTip=!1,a["default"].component("m-card",G),a["default"].component("m-list-card",tt),a["default"].prototype.$http=st.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_URL||"/web/api"}),new a["default"]({router:J,render:function(t){return t(o)}}).$mount("#app")},"5cb3":function(t,e,s){t.exports=s.p+"img/2.83b3bd73.jpeg"},"5f5d":function(t,e,s){t.exports=s.p+"img/3.0aa52660.jpeg"},"6e94":function(t,e,s){"use strict";s("49c5")},"78a7":function(t,e,s){},a006:function(t,e,s){"use strict";s("0972")},da36:function(t,e,s){t.exports=s.p+"img/1.2e0e199d.jpeg"},e6a0:function(t,e,s){},ef4a:function(t,e,s){}});
//# sourceMappingURL=app.87f81505.js.map