<!--页面添加商品的按钮-->
<template>
    <div class="cartcontrol">
        <transition name="move">
            <!--这里要包裹住整个div，而不是span-->
        <div class="cart-decrease" v-show="food.count > 0" @click.stop="decreaseCart">
            <span class="inner icon-remove_circle_outline"></span>
        </div>
        </transition>
        <div class="cart-count" v-show="food.count > 0" v-text="food.count"></div>
        <div class="cart-add icon-add_circle" @click.stop="addCart" ref="ball"></div>
    </div>
</template>

<script>
import Vue from 'vue';
export default {
  name: 'cartcontrol',
  props: {
    food: {
      type: Object
    }
  },
  created () {
    // console.log(this.food);
  },
  methods: {
    addCart(event) {
      // 要在初始化better-scroll的时候传入参数：click=true
      if (!event._constructed) {
        return;
      }
      if (!this.food.count) {
        // 在Vue中的对象添加字段的时候要使用Vue对象的set方法进行添加
        Vue.set(this.food, 'count', 1);
      } else {
        this.food.count++;
      }
      // 调用shopcart组件的drop函数，并将参数（this.$refs.ball，也就是被点击的小球）传送过去
      try {
        // 调用shopcart组件的drop方法
        this.$parent.$parent.$refs.shopcart.drop(this.$refs.ball);
      } catch (e) {
        if (this.$emit('drop', this.$refs.ball));
      }
    },
    decreaseCart() {
      if (!event._constructed) {
        return;
      }
      if (this.food.count) {
        // 在Vue中的对象添加字段的时候要使用Vue对象的set方法进行添加
        this.food.count--;
      }
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.cartcontrol
    font-size 0
    .cart-decrease
        display inline-block
        padding 6px
        transition all 0.4s linear
        &.move-transition
            opacity 1
            transform translate3d(0,0,0)
        .inner
            display inline-block
            line-height 24px
            font-size 24px
            color rgb(0,160,220)
            transition all 0.4s linear
            transform rotate(0)
        // 这里不能用move-leave，要使用move-leave-active，否则离开动画不生效
        &.move-enter,&.move-leave-active,&.move-leave
            opacity 0
            transform translate3d(24px,0,0)
            .inner
                transform rotate(180deg)
    .cart-count
        display inline-block
        vertical-align top
        padding-top 6px
        line-height 24px
        text-align center
        width:12px
        color rgb(147,153,159)
        font-size 10px
    .cart-add
        display inline-block
        line-height 24px
        font-size 24px
        padding 6px
        color rgb(0,160,220)
</style>
