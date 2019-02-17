<!--商品页组件-->
<template>
    <div class="goods">
        <div class="menu-wrapper" ref="menuwrapper">
            <ul>
                <!--在vue中若要使用index，则需要先在for中定义index-->
                <li v-for="(item,index) in goods" :key="item.index" class="menu-item" :class="{'current':currentIndex===index}" @click="selectMenu(index,$event)">
                    <span class="text border-1px">
                    <span v-show="item.type > 0" class="icon" :class="classMap[item.type]"></span>{{item.name}}</span>
                </li>
            </ul>
        </div>
        <div class="foods-wrapper" ref="foodswrapper">
            <ul>
                <li v-for="item in goods" :key="item.index" class="food-list food-list-hook">
                    <h1 class="title">{{item.name}}</h1>
                    <ul>
                        <li @click="selectFood(food,$event)" v-for="food in item.foods" :key="food.index" class="food-item border-1px">
                            <div class="icon">
                                <img :src="food.icon" alt="" width="57" height="57">
                            </div>
                            <div class="content">
                                <h2 class="name">{{food.name}}</h2>
                                <p class="desc">{{food.description}}</p>
                                <div class="extra">
                                    <span class="count">月销{{food.sellCount}}份</span>
                                    <span>好评率{{food.rating}}%</span>
                                </div>
                                <div class="price">
                                    <span class="now">￥{{food.price}}</span>
                                    <span v-show="food.oldPrice" class="old">￥{{food.oldPrice}}</span>
                                </div>
                                <div class="cartcontrol-wrapper">
                                    <cartcontrol @drop="drop" :food="food"></cartcontrol>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <shopcart ref="shopcart" :selectFoods="selectFoods" :delivery-price="seller.deliveryPrice" :min-price="seller.minPrice"></shopcart>
        <food :food="selectedFood" ref="food"></food>
    </div>
</template>

<script>
import axios from 'axios';
import BScroll from 'better-scroll';
import shopcart from '../shopcart/shopcart';
import cartcontrol from '../cartcontrol/cartcontrol';
import food from '../food/food';
export default {
  name: 'goods',
  props: {
    seller: {
      type: Object
    }
  },
  events: {
    'cart.add'(target) {
      this._drop(target);
    }
  },
  components: {
    'shopcart': shopcart,
    'cartcontrol': cartcontrol,
    'food': food
  },
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    axios.get('/api/goods').then((response) => {
      // console.log(response);
      let errno = response.data.errno;
      let data = response.data.data;
      if (errno === 0) {
        this.goods = data;
        // Vue中DOM更新是异步的，在数据变化后要执行的某个操作，而这个操作需要使用随数据改变而改变的DOM结构的时候，这个操作都应该放进Vue.nextTick()的回调函数中。
        this.$nextTick(() => {
          this._calculateHeight();
          this._initScroll();
        });
      } else {
      }
    });
  },
  data () {
    return {
      goods: [],
      listHeight: [],
      scrollY: 0,
      selectedFood: {}
    };
  },
  methods: {
    // 封装为一个函数
    _initScroll () {
      // BScroll实例化第一个参数为dom元素，第二个为一个参数对象
      this.menuScroll = new BScroll(this.$refs.menuwrapper, {
        click: true
      });
      this.foodsScroll = new BScroll(this.$refs.foodswrapper, {
        probeType: 3,
        click: true
      });
      this.foodsScroll.on('scroll', (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y));
      });
    },
    _calculateHeight () {
      let foodList = this.$refs.foodswrapper.getElementsByClassName('food-list-hook');
      let height = 0;
      this.listHeight.push(height);
      for (let i = 0; i < foodList.length; i++) {
       let item = foodList[i];
       height += item.clientHeight;
       this.listHeight.push(height);
      }
    },
    selectMenu (index, event) {
      if (!event._constructed) {
        return;
      }
      let foodList = this.$refs.foodswrapper.getElementsByClassName('food-list-hook');
      let el = foodList[index];
      this.foodsScroll.scrollToElement(el, 300);
      console.log(index);
    },
    drop(target) {
      // 异步执行小球动画进行体验优化
      this.$nextTick(() => {
        this.$refs.shopcart.drop(target);
      });
    },
    selectFood(food, event) {
      if (!event._constructed) {
        return;
      }
      this.selectedFood = food;
      this.$refs.food.show();
    }
  },
  computed: {
    currentIndex () {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i];
        let height2 = this.listHeight[i + 1];
        if (!height2) {
          return i;
        }
        if (this.scrollY >= height1 && this.scrollY < height2) {
          return i;
        }
      }
      return 0;
    },
    selectFoods() {
      let foods = [];
      this.goods.forEach((good) => {
        good.foods.forEach((food) => {
          if (food.count) {
            foods.push(food);
          }
        });
      });
      return foods;
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixin.styl"
.goods
    position: absolute;
    width 100%
    top:174px
    bottom 46px
    display flex
    overflow hidden
    .menu-wrapper
        flex 0 0 80px
        width 80px
        background: #f3f5f7;
        .menu-item
            display table
            height 54px
            width 56px
            line-height 14px
            padding 0 12px
            &.current
                position relative
                margin-top -1px
                z-index: 10
                background: #fff;
                font-weight:700
                .text
                    border-none()
            .icon
                display: inline-block
                width  12px
                height 12px
                margin-right:2px
                background-size 12px 12px
                background-repeat no-repeat
                &.decrease
                    bg-image('decrease_3')
                &.discount
                    bg-image('discount_3')
                &.guarantee
                    bg-image('guarantee_3')
                &.invoice
                    bg-image('invoice_3')
                &.special
                    bg-image('special_3')
            .text
                display table-cell
                width 56px
                vertical-align: middle
                border-1px(rgba(7,17,27,0.1))
                font-size 12px
    .foods-wrapper
        flex:1
        .food-list
            /*font-size 0px*/
        .title
            padding-left 14px
            height 26px
            line-height 26px
            border-left 2px solid #d9dde1
            font-size 12px
            color: rgb(147,153,159)
            background-color: #f3f5f7
        .food-item
            display flex
            margin 18px
            padding-bottom 18px
            border-1px(rgba(7,17,27,0.1))
            &:last-child
                border-none()
                margin-bottom 0px
            .icon
                flex 0 0 57px
                margin-right 10px
            .content
                flex:1
                .name
                    font-size 14px
                    margin 2px 0 8px 0
                    line-height 14px
                    height 14px
                    color rgb(7,17,27)
                .desc, .extra
                    line-height 10px
                    font-size 10px
                    color: rgb(147,153,159)
                .desc
                    margin-bottom 8px
                    line-height 15px
                .extra
                    line-height 10px
                    .count
                        margin-right 12px
                .price
                    font-weight 700
                    line-height 24px
                    margin-top 3px
                    .now
                        margin-right 8px
                        font-size 14px
                        color: rgb(240,20,20)
                    .old
                        text-decoration line-through
                        color rgb(147,153,159)
                        font-size 10px
                .cartcontrol-wrapper
                    position absolute
                    bottom 0
                    right 0
</style>
