webpackJsonp([1],{"34KM":function(t,s){},"3XeO":function(t,s){},"7k3t":function(t,s){},AAAQ:function(t,s){},DyP4:function(t,s){},FP0Z:function(t,s){},MWtT:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("7+uW"),a={name:"star",props:{size:{type:Number},score:{type:Number}},computed:{starType:function(){return"star-"+this.size},itemClasses:function(){for(var t=[],s=Math.floor(2*this.score)/2,e=s%1!=0,i=Math.floor(s),a=0;a<i;a++)t.push("on");for(e&&t.push("half");t.length<5;)t.push("off");return t}}},n={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"star",class:this.starType},this._l(this.itemClasses,function(t){return s("span",{key:t.index,staticClass:"star-item",class:t})}),0)},staticRenderFns:[]};var o=e("VU/8")(a,n,!1,function(t){e("DyP4")},"data-v-1b9ce604",null).exports,r={name:"vheader",data:function(){return{detialShow:!1}},props:{seller:{type:Object}},created:function(){this.classMap=["decrease","discount","special","invoice","guarantee"]},methods:{showDetial:function(){this.detialShow=!0},detailClose:function(){this.detialShow=!1}},components:{star:o}},l={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header"},[e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.seller.avatar,alt:"",width:"64",height:"64"}})]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("span",{staticClass:"brand"}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),t._v(" "),e("div",{staticClass:"description"},[t._v("\n                "+t._s(t.seller.description)+"/"+t._s(t.seller.deliveryTime)+"分钟送达\n            ")]),t._v(" "),t.seller.supports?e("div",{staticClass:"support"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[0].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[0].description))])]):t._e()]),t._v(" "),t.seller.supports?e("div",{staticClass:"support-count",on:{click:t.showDetial}},[e("span",{staticClass:"count"},[t._v(t._s(t.seller.supports.length)+"个")]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]):t._e()]),t._v(" "),e("div",{staticClass:"bulletin-wrapper",on:{click:t.showDetial}},[e("span",{staticClass:"bulletin-title"}),e("span",{staticClass:"bulletin-text"},[t._v(t._s(t.seller.bulletin))]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]),t._v(" "),e("div",{staticClass:"background"},[e("img",{attrs:{src:t.seller.avatar,alt:"",width:"100%",height:"100%"}})]),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.detialShow,expression:"detialShow"}],staticClass:"detail"},[e("div",{staticClass:"detail-wrapper clearfix"},[e("div",{staticClass:"detail-main"},[e("h1",{staticClass:"name"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{score:t.seller.score,size:48}})],1),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("优惠信息")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s){return e("li",{key:s.index,staticClass:"support-item"},[e("span",{staticClass:"icon",class:t.classMap[s.type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(s.description))])])}),0):t._e(),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("商家公告")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),e("div",{staticClass:"bulletin"},[e("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])])])]),t._v(" "),e("div",{staticClass:"detail-close",on:{click:t.detailClose}},[e("i",{staticClass:"icon-close"})])])])],1)},staticRenderFns:[]};var c=e("VU/8")(r,l,!1,function(t){e("WHLh")},"data-v-55aea654",null).exports,v=e("mtWM"),d=e.n(v),p={name:"App",components:{"v-header":c},data:function(){return{seller:{}}},created:function(){var t=this;d.a.get("/api/seller").then(function(s){var e=s.data.errno,i=s.data.data;0===e&&(t.seller=i)})}},u={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("v-header",{attrs:{seller:t.seller}}),t._v(" "),e("div",{staticClass:"tab border-1px"},[e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/goods",tag:"a"}},[t._v("商品")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/ratings",tag:"a"}},[t._v("评论")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/sellers",tag:"a"}},[t._v("商家")])],1)]),t._v(" "),e("keep-alive",[e("router-view",{attrs:{seller:t.seller}})],1)],1)},staticRenderFns:[]};var h=e("VU/8")(p,u,!1,function(t){e("3XeO")},null,null).exports,f=e("/ocq"),_=e("GQaK"),C={name:"cartcontrol",props:{food:{type:Object}},created:function(){},methods:{addCart:function(t){if(t._constructed){this.food.count?this.food.count++:i.a.set(this.food,"count",1);try{this.$parent.$parent.$refs.shopcart.drop(this.$refs.ball)}catch(t){this.$emit("drop",this.$refs.ball)}}},decreaseCart:function(){event._constructed&&this.food.count&&this.food.count--}}},m={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cartcontrol"},[e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count > 0"}],staticClass:"cart-decrease",on:{click:function(s){return s.stopPropagation(),t.decreaseCart(s)}}},[e("span",{staticClass:"inner icon-remove_circle_outline"})])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count > 0"}],staticClass:"cart-count",domProps:{textContent:t._s(t.food.count)}}),t._v(" "),e("div",{ref:"ball",staticClass:"cart-add icon-add_circle",on:{click:function(s){return s.stopPropagation(),t.addCart(s)}}})],1)},staticRenderFns:[]};var g=e("VU/8")(C,m,!1,function(t){e("NsUf")},"data-v-59f5836d",null).exports,w={props:{selectFoods:{type:Array,default:function(){return[]}},deliveryPrice:{type:Number,default:0},minPrice:{type:Number,default:0}},data:function(){return{balls:[{show:!1},{show:!1},{show:!1},{show:!1},{show:!1}],dropBalls:[],listShow:!1}},created:function(){},computed:{showBackdrop:{get:function(){return this.listShow},set:function(){if(this.totalCount)return!this.listShow}},totalPrice:function(){var t=0;return this.selectFoods.forEach(function(s){s.count&&(t+=s.price*s.count)}),t},totalCount:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.count}),t},leftAmount:function(){return!!(this.minPrice-this.totalPrice>0&&this.totalPrice)},payDesc:function(){var t=this.minPrice-this.totalPrice;return this.totalPrice?t>0?"还差￥"+t+"元":"去结算":"￥"+this.totalPrice+"起送"}},methods:{drop:function(t){for(var s=0,e=this.balls.length;s<e;s++){var i=this.balls[s];if(!i.show)return i.show=!0,i.el=t,void this.dropBalls.push(i)}},setEmpty:function(){this.selectFoods.forEach(function(t){t.count=0})},hideBackdrop:function(){this.listShow=!1},_initScroll:function(){this.foodlistScroll=new _.a(this.$refs.foodlist,{click:!0})},listToggle:function(){var t=this;this.selectFoods.length&&(this.listShow=!this.listShow,this.listShow&&this.$nextTick(function(){t.foodlistScroll?t.foodlistScroll.refresh():t._initScroll()}))},beforeEnter:function(t){for(var s=this.balls.length;s--;){var e=this.balls[s];if(e.show){var i=e.el.getBoundingClientRect(),a=i.left-32,n=-(window.innerHeight-i.top-22);t.style.display="",t.style.webkitTransform="translate3d(0,"+n+"px,0)",t.style.transform="translate3d(0,"+n+"px,0)";var o=t.querySelector(".inner-hook");o.style.webkitTransform="translate3d("+a+"px,0,0)",o.style.transform="translate3d("+a+"px,0,0)"}}},enter:function(t){t.offsetHeight;this.$nextTick(function(){t.style.webkitTransform="translate3d(0,0,0)",t.style.transform="translate3d(0,0,0)";var s=t.querySelector(".inner-hook");s.style.webkitTransform="translate3d(0,0,0)",s.style.transform="translate3d(0,0,0)"})},afterEnter:function(t){var s=this.dropBalls.shift();s&&(s.show=!1,t.style.display="none")}},components:{cartcontrol:g}},y={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{},[e("div",{staticClass:"shopCart"},[e("div",{staticClass:"content"},[e("div",{staticClass:"content-left",on:{click:t.listToggle}},[e("div",{staticClass:"logo-wrapper"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.totalCount,expression:"totalCount"}],staticClass:"badge"},[t._v("\n                        "+t._s(t.totalCount)+"\n                    ")]),t._v(" "),e("div",{staticClass:"logo",class:{active:t.totalPrice}},[e("i",{staticClass:"icon-shopping_cart"})])]),t._v(" "),e("div",{staticClass:"price",class:{active:t.totalPrice}},[t._v("\n                    ￥"+t._s(t.totalPrice)+"\n                ")]),t._v(" "),e("div",{staticClass:"desc"},[t._v("\n                    另需要配送费￥"+t._s(t.deliveryPrice)+"元\n                ")])]),t._v(" "),e("div",{staticClass:"content-right",class:{enough:t.totalPrice>=t.minPrice}},[t._v("\n                "+t._s(t.payDesc)+"\n            ")])]),t._v(" "),e("div",{staticClass:"ball-container"},t._l(t.balls,function(s){return e("transition",{key:s.index,attrs:{name:"drop"},on:{"before-enter":t.beforeEnter,enter:t.enter,"after-enter":t.afterEnter}},[e("div",{directives:[{name:"show",rawName:"v-show",value:s.show,expression:"ball.show"}],staticClass:"ball"},[e("div",{staticClass:"inner inner-hook"})])])}),1),t._v(" "),e("transition",{attrs:{name:"transHeight"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"shopcart-list"},[e("div",{staticClass:"list-header"},[e("h1",{staticClass:"title"},[t._v("购物车")]),t._v(" "),e("span",{staticClass:"empty",on:{click:function(s){t.setEmpty()}}},[t._v("清空")])]),t._v(" "),e("div",{ref:"foodlist",staticClass:"list-content"},[e("ul",t._l(t.selectFoods,function(s){return e("li",{key:s.index,staticClass:"food"},[e("span",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"price"},[e("span",[t._v("￥"+t._s(s.price*s.count))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:s},on:{drop:t.drop}})],1)])}),0)])])])],1),t._v(" "),e("transition",{attrs:{name:"fade-backdrop"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showBackdrop,expression:"showBackdrop"}],staticClass:"backdrop",on:{click:t.hideBackdrop}})])],1)},staticRenderFns:[]};var x=e("VU/8")(w,y,!1,function(t){e("SZC+")},"data-v-b233af7a",null).exports,k={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"split"})},staticRenderFns:[]};var b=e("VU/8")({name:"split"},k,!1,function(t){e("AAAQ")},"data-v-d441e6ec",null).exports,T={name:"ratingselect",props:{ratings:{type:Array,default:function(){return[]}},selecttype:{type:Number,default:2},onlycontent:{type:Boolean,default:!1},desc:{type:Object,default:function(){return{all:"全部",positive:"满意",negative:"不满意"}}}},methods:{select:function(t,s){var e=this;s._constructed&&(this.sType=t,this.$emit("select_type",t),this.$nextTick(function(){e.$parent.scroll.refresh()}))},toggleContent:function(t){var s=this;t._constructed&&(this.oContent=!this.oContent,this.$emit("only_content",this.oContent),this.$nextTick(function(){s.$parent.scroll.refresh()}))}},data:function(){return{sType:this.selecttype,oContent:this.onlycontent}},computed:{positives:function(){return this.ratings.filter(function(t){return 0===t.rateType})},negative:function(){return this.ratings.filter(function(t){return 1===t.rateType})}}},$={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ratingselect"},[e("div",{staticClass:"rating-type border-1px"},[e("span",{staticClass:"block positive",class:{active:2===t.sType},on:{click:function(s){t.select(2,s)}}},[t._v("\n            "+t._s(t.desc.all)),e("span",{staticClass:"count"},[t._v(t._s(t.ratings.length))])]),t._v(" "),e("span",{staticClass:"block positive",class:{active:0===t.sType},on:{click:function(s){t.select(0,s)}}},[t._v(t._s(t.desc.positive)),e("span",{staticClass:"count"},[t._v(t._s(t.positives.length))])]),t._v(" "),e("span",{staticClass:"block negative",class:{active:1===t.sType},on:{click:function(s){t.select(1,s)}}},[t._v(t._s(t.desc.negative)),e("span",{staticClass:"count"},[t._v(t._s(t.negative.length))])])]),t._v(" "),e("div",{staticClass:"switch",class:{on:t.oContent},on:{click:function(s){t.toggleContent(s)}}},[e("span",{staticClass:"icon-check_circle"}),t._v(" "),e("span",{staticClass:"text"},[t._v("只看有内容的评价")])])])},staticRenderFns:[]};var S=e("VU/8")(T,$,!1,function(t){e("tiKV")},"data-v-9b87db08",null).exports;function F(t,s){var e=t.getFullYear(),i=t.getMonth(),a=t.getDay(),n=t.getHours(),o=t.getMinutes(),r=t.getSeconds();/(y+)/.test(s)&&(s=s.replace(RegExp.$1,(""+e).substr(4-RegExp.$1.length)));var l={"M+":i+1,"d+":a,"h+":n,"m+":o,"s+":r};for(var c in l)if(new RegExp("("+c+")").test(s)){var v=l[c]+"";s=s.replace(RegExp.$1,1===RegExp.$1.length?v:P(v))}return s}function P(t){return("00"+t).substr(t.length)}var E={name:"name",props:{food:{type:Object}},methods:{show:function(){var t=this;this.showFlag=!0,this.onlycontent=!0,this.selectType=2,this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new _.a(t.$refs.food,{click:!0})})},close:function(){this.showFlag=!1},addFirst:function(t,s){s._constructed&&(this.$parent.$refs.shopcart.drop(s.target),i.a.set(this.food,"count",1))},needShow:function(t,s){return!(this.onlycontent&&!s)&&(2===this.selectType||t===this.selectType)},select_type:function(t){var s=this;this.selectType=t,this.$nextTick(function(){s.scroll.refresh()})},toggleContent:function(t){var s=this;this.onlycontent=t,this.$nextTick(function(){s.scroll.refresh()})}},data:function(){return{showFlag:!1,selectType:2,onlycontent:!0,desc:{all:"全部",positive:"推荐",negative:"吐槽"}}},components:{cartcontral:g,split:b,ratingselect:S},filters:{formatDate:function(t){return F(new Date(t),"yyyy-MM-dd hh:mm")}}},N={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],ref:"food",staticClass:"food"},[e("div",{staticClass:"food-content"},[e("div",{staticClass:"image-header"},[e("img",{attrs:{src:t.food.image,alt:""}}),t._v(" "),e("div",{staticClass:"back",on:{click:t.close}},[e("i",{staticClass:"icon-arrow_lift"})])]),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"title"},[t._v(t._s(t.food.name))]),t._v(" "),e("div",{staticClass:"detail"},[e("span",{staticClass:"sell-count"},[t._v("月售"+t._s(t.food.sellCount))]),t._v(" "),e("span",{staticClass:"rating"},[t._v("好评率"+t._s(t.food.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(t.food.price))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.food.oldProce,expression:"food.oldProce"}],staticClass:"old"},[t._v("￥"+t._s(t.food.oldPrice))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontral",{attrs:{food:t.food}})],1),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.count||0===t.food.count,expression:"!food.count || food.count === 0"}],staticClass:"buy",on:{click:function(s){s.stopPropagation(),t.addFirst(t.food,s)}}},[t._v("加入购物车")])])],1),t._v(" "),e("split",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}]}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}],staticClass:"info"},[e("h1",{staticClass:"title"},[t._v("商品信息")]),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(t.food.info))])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"rating"},[e("h1",{staticClass:"title"},[t._v("商品评价")]),t._v(" "),e("ratingselect",{attrs:{ratings:t.food.ratings,desc:t.desc,selecttype:t.selectType,onlycontent:t.onlycontent},on:{select_type:t.select_type,only_content:t.toggleContent}}),t._v(" "),e("div",{staticClass:"rating-wrapper"},[void 0!==t.food.ratings&&null!==t.food.ratings&&t.food.ratings.length>0?e("ul",t._l(t.food.ratings,function(s){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.needShow(s.rateType,s.text),expression:"needShow(rating.rateType,rating.text)"}],key:s.index,staticClass:"rating-item border-1px"},[e("div",{staticClass:"user"},[e("span",{staticClass:"name"},[t._v(t._s(s.username))]),t._v(" "),e("img",{staticClass:"avatar",attrs:{src:s.avatar,alt:"",width:"12px",height:"12px"}})]),t._v(" "),e("div",{staticClass:"time"},[t._v(t._s(t._f("formatDate")(s.rateTime)))]),t._v(" "),e("p",{staticClass:"text"},[e("span",{class:{"icon-thumb_up":0===s.rateType,"icon-thumb_down":1===s.rateType}}),t._v(t._s(s.text)+"\n                            ")])])}),0):e("div",{staticClass:"no-rating"},[t._v("暂无评价")])])],1)],1)])])},staticRenderFns:[]};var M=e("VU/8")(E,N,!1,function(t){e("qVVi")},"data-v-7143cd75",null).exports,H={name:"goods",props:{seller:{type:Object}},events:{"cart.add":function(t){this._drop(t)}},components:{shopcart:x,cartcontrol:g,food:M},created:function(){var t=this;this.classMap=["decrease","discount","special","invoice","guarantee"],d.a.get("/api/goods").then(function(s){var e=s.data.errno,i=s.data.data;0===e&&(t.goods=i,t.$nextTick(function(){t._calculateHeight(),t._initScroll()}))})},data:function(){return{goods:[],listHeight:[],scrollY:0,selectedFood:{}}},methods:{_initScroll:function(){var t=this;this.menuScroll=new _.a(this.$refs.menuwrapper,{click:!0}),this.foodsScroll=new _.a(this.$refs.foodswrapper,{probeType:3,click:!0}),this.foodsScroll.on("scroll",function(s){t.scrollY=Math.abs(Math.round(s.y))})},_calculateHeight:function(){var t=this.$refs.foodswrapper.getElementsByClassName("food-list-hook"),s=0;this.listHeight.push(s);for(var e=0;e<t.length;e++){s+=t[e].clientHeight,this.listHeight.push(s)}},selectMenu:function(t,s){if(s._constructed){var e=this.$refs.foodswrapper.getElementsByClassName("food-list-hook")[t];this.foodsScroll.scrollToElement(e,300),console.log(t)}},drop:function(t){var s=this;this.$nextTick(function(){s.$refs.shopcart.drop(t)})},selectFood:function(t,s){s._constructed&&(this.selectedFood=t,this.$refs.food.show())}},computed:{currentIndex:function(){for(var t=0;t<this.listHeight.length;t++){var s=this.listHeight[t],e=this.listHeight[t+1];if(!e)return t;if(this.scrollY>=s&&this.scrollY<e)return t}return 0},selectFoods:function(){var t=[];return this.goods.forEach(function(s){s.foods.forEach(function(s){s.count&&t.push(s)})}),t}}},R={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"goods"},[e("div",{ref:"menuwrapper",staticClass:"menu-wrapper"},[e("ul",t._l(t.goods,function(s,i){return e("li",{key:s.index,staticClass:"menu-item",class:{current:t.currentIndex===i},on:{click:function(s){t.selectMenu(i,s)}}},[e("span",{staticClass:"text border-1px"},[e("span",{directives:[{name:"show",rawName:"v-show",value:s.type>0,expression:"item.type > 0"}],staticClass:"icon",class:t.classMap[s.type]}),t._v(t._s(s.name))])])}),0)]),t._v(" "),e("div",{ref:"foodswrapper",staticClass:"foods-wrapper"},[e("ul",t._l(t.goods,function(s){return e("li",{key:s.index,staticClass:"food-list food-list-hook"},[e("h1",{staticClass:"title"},[t._v(t._s(s.name))]),t._v(" "),e("ul",t._l(s.foods,function(s){return e("li",{key:s.index,staticClass:"food-item border-1px",on:{click:function(e){t.selectFood(s,e)}}},[e("div",{staticClass:"icon"},[e("img",{attrs:{src:s.icon,alt:"",width:"57",height:"57"}})]),t._v(" "),e("div",{staticClass:"content"},[e("h2",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("p",{staticClass:"desc"},[t._v(t._s(s.description))]),t._v(" "),e("div",{staticClass:"extra"},[e("span",{staticClass:"count"},[t._v("月销"+t._s(s.sellCount)+"份")]),t._v(" "),e("span",[t._v("好评率"+t._s(s.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(s.price))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:s.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(s.oldPrice))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:s},on:{drop:t.drop}})],1)])])}),0)])}),0)]),t._v(" "),e("shopcart",{ref:"shopcart",attrs:{selectFoods:t.selectFoods,"delivery-price":t.seller.deliveryPrice,"min-price":t.seller.minPrice}}),t._v(" "),e("food",{ref:"food",attrs:{food:t.selectedFood}})],1)},staticRenderFns:[]};var V=e("VU/8")(H,R,!1,function(t){e("MWtT")},"data-v-20e225ee",null).exports,D={name:"sellers",data:function(){return{favorite:!1}},computed:{favoriteText:function(){return!0===this.favorite?"已收藏":"收藏"}},props:{seller:{type:Object}},components:{star:o,split:b},created:function(){var t=this;this.classMap=["decrease","discount","special","invoice","guarantee"],this.$nextTick(function(){t._initScroll(),t._initPicScroll()})},methods:{_initScroll:function(){this.scroll&&this.scroll.refresh(),this.scroll=new _.a(this.$refs.seller,{click:!0})},_initPicScroll:function(){if(this.seller.pics){var t=126*this.seller.pics.length-6;this.$refs.pic_list.style.width=t+"px",this.picScroll&&this.picScroll.refresh(),this.picScroll=new _.a(this.$refs.pic,{scrollX:!0,eventPassthrough:"vertical"})}},toggleFavorite:function(t){t._constructed&&(this.favorite=!this.favorite)}}},U={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"seller",staticClass:"seller"},[e("div",{staticClass:"seller-content"},[e("div",{staticClass:"overview"},[e("h1",{staticClass:"title"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"desc border-1px"},[e("star",{attrs:{size:36,score:t.seller.score}}),t._v(" "),e("span",{staticClass:"text"},[t._v("("+t._s(t.seller.ratingCount)+")")]),t._v(" "),e("span",{staticClass:"text"},[t._v("月售"+t._s(t.seller.sellCount)+"单")])],1),t._v(" "),e("ul",{staticClass:"remark"},[e("li",{staticClass:"block"},[e("h2",[t._v("起送价")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.minPrice))]),t._v("元\n                    ")])]),t._v(" "),e("li",{staticClass:"block"},[e("h2",[t._v("商家配送")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.deliveryPrice))]),t._v("元\n                    ")])]),t._v(" "),e("li",{staticClass:"block"},[e("h2",[t._v("平均配送时间")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.deliveryTime))]),t._v("分钟\n                    ")])])]),t._v(" "),e("div",{staticClass:"favorite",on:{click:function(s){t.toggleFavorite(s)}}},[e("span",{staticClass:"icon-favorite",class:{activate:t.favorite}}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.favoriteText))])])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"bulletin"},[e("h1",{staticClass:"title"},[t._v("公告与活动")]),t._v(" "),e("div",{staticClass:"content-wrapper border-1px"},[e("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])]),t._v(" "),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s){return e("li",{key:s.index,staticClass:"support-item border-1px"},[e("span",{staticClass:"icon",class:t.classMap[s.type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(s.description))])])}),0):t._e()]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"pics"},[e("h1",{staticClass:"title"},[t._v("商家实景")]),t._v(" "),e("div",{ref:"pic",staticClass:"pic-wrapper"},[e("ul",{ref:"pic_list",staticClass:"pic-list"},t._l(t.seller.pics,function(t){return e("li",{key:t.index,staticClass:"pic-item"},[e("img",{attrs:{src:t,alt:"",width:"120px",height:"90px"}})])}),0)])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"info"},[e("h1",{staticClass:"title border-1px"},[t._v("商家信息")]),t._v(" "),e("ul",t._l(t.seller.infos,function(s){return e("li",{key:s.index,staticClass:"info-item"},[t._v(t._s(s))])}),0)])],1)])},staticRenderFns:[]};var A=e("VU/8")(D,U,!1,function(t){e("fvaH")},"data-v-014be9fc",null).exports,B={name:"ratings",props:{seller:{type:Object}},components:{star:o,split:b,ratingselect:S},data:function(){return{ratings:[],selectType:2,onlyContent:!0}},created:function(){var t=this;d.a.get("/api/ratings").then(function(s){0===s.data.errno?(t.ratings=s.data.data,t.$nextTick(function(){t.scroll=new _.a(t.$refs.ratings,{click:!0})})):console.log("获取数据失败")})},filters:{formatDate:function(t){return F(new Date(t),"yyyy-MM-dd hh:mm")}},methods:{select_type:function(t){var s=this;this.selectType=t,this.$nextTick(function(){s.scroll.refresh()})},toggleContent:function(t){var s=this;this.onlyContent=t,this.$nextTick(function(){s.scroll.refresh()})},needShow:function(t,s){return!(this.onlyContent&&!s)&&(2===this.selectType||t===this.selectType)}}},O={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"ratings",staticClass:"ratings"},[e("div",{staticClass:"rating-content"},[e("div",{staticClass:"overview"},[e("div",{staticClass:"overview-left"},[e("h1",{staticClass:"score"},[t._v(t._s(t.seller.score))]),t._v(" "),e("div",{staticClass:"title"},[t._v("综合评分")]),t._v(" "),e("div",{staticClass:"rank"},[t._v("高于周边商家"+t._s(t.seller.rankRate)+"%")])]),t._v(" "),e("div",{staticClass:"overview-right"},[e("div",{staticClass:"score-wrapper"},[e("span",{staticClass:"title"},[t._v("服务态度")]),t._v(" "),e("star",{attrs:{size:36,score:t.seller.serviceScore}}),t._v(" "),e("span",{staticClass:"score"},[t._v(t._s(t.seller.serviceScore))])],1),t._v(" "),e("div",{staticClass:"score-wrapper"},[e("span",{staticClass:"title"},[t._v("商品评分")]),t._v(" "),e("star",{attrs:{size:36,score:t.seller.foodScore}}),t._v(" "),e("span",{staticClass:"score"},[t._v(t._s(t.seller.foodScore))])],1),t._v(" "),e("div",{staticClass:"delivery-wrapper"},[e("span",{staticClass:"title"},[t._v("送达时间")]),t._v(" "),e("span",{staticClass:"delivery"},[t._v(t._s(t.seller.deliveryTime)+"分钟")])])])]),t._v(" "),e("split"),t._v(" "),e("ratingselect",{attrs:{ratings:t.ratings,selecttype:t.selectType,onlycontent:t.onlyContent},on:{select_type:t.select_type,only_content:t.toggleContent}}),t._v(" "),e("div",{staticClass:"rating-wrapper"},[e("ul",t._l(t.ratings,function(s){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.needShow(s.rateType,s.text),expression:"needShow(rating.rateType,rating.text)"}],key:s.index,staticClass:"rating-item"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:s.avatar,alt:"",width:"28px",height:"28px"}})]),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"name"},[t._v(t._s(s.username))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:24,score:s.score}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:s.deliveryTime,expression:"rating.deliveryTime"}],staticClass:"deliver"},[t._v(t._s(s.deliveryTime))])],1),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(s.text))]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:s.recommend,expression:"rating.recommend"}],staticClass:"recommend"},[e("span",{staticClass:"icon-thumb_up"}),t._v(" "),t._l(s.recommend,function(s){return e("span",{key:s.index,staticClass:"item"},[t._v(t._s(s))])})],2),t._v(" "),e("div",{staticClass:"time"},[t._v("\n                            "+t._s(t._f("formatDate")(s.rateTime))+"\n                        ")])])])}),0)])],1)])},staticRenderFns:[]};var j=e("VU/8")(B,O,!1,function(t){e("7k3t")},"data-v-f495b888",null).exports,z={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("button",{on:{click:function(s){t.show()}}},[t._v("点击")]),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.Show1,expression:"Show1"}],staticClass:"test"})])],1)},staticRenderFns:[]};var W=e("VU/8")({name:"test",methods:{show:function(){this.Show1=!this.Show1}},data:function(){return{Show1:!1}}},z,!1,function(t){e("FP0Z")},"data-v-88dffef4",null).exports;i.a.use(f.a);var q=[{path:"/",redirect:"/goods",component:V},{path:"/goods",component:V},{path:"/ratings",component:j},{path:"/sellers",component:A},{path:"/test",component:W}],K=new f.a({linkActiveClass:"active",routes:q});e("34KM");i.a.config.productionTip=!1,i.a.use(K),i.a.prototype.$axios=d.a,new i.a({el:"#app",router:K,components:{App:h},template:"<App/>"})},NsUf:function(t,s){},"SZC+":function(t,s){},WHLh:function(t,s){},fvaH:function(t,s){},qVVi:function(t,s){},tiKV:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.ba440740d4619eabb114.js.map