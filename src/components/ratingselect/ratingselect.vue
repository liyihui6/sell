<template>
    <div class="ratingselect">
        <div class="rating-type border-1px">
            <span @click="select(2,$event)" class="block positive" :class="{'active':sType===2}">
                {{desc.all}}<span class="count">{{ratings.length}}</span>
            </span>
            <span @click="select(0,$event)" class="block positive" :class="{'active':sType===0}">{{desc.positive}}<span class="count">{{positives.length}}</span></span>
            <span @click="select(1,$event)" class="block negative" :class="{'active':sType===1}">{{desc.negative}}<span class="count">{{negative.length}}</span></span>
        </div>
        <div @click="toggleContent($event)" class="switch" :class="{'on': oContent}">
            <span class="icon-check_circle"></span>
            <span class="text">只看有内容的评价</span>
        </div>
        <!--<div>-->
            <!--<span v-for="rating in ratings" :key="rating.index">-->
                <!--{{rating}}-->
            <!--</span>-->
        <!--</div>-->
    </div>
</template>

<script>
    const POSITIVE = 0;
    const NEGATIVE = 1;
    const ALL = 2;
export default {
  name: 'ratingselect',
  props: {
    ratings: {
      type: Array,
      default: function () {
        return [];
      }
    },
    selecttype: {
      type: Number,
      default: ALL
    },
    onlycontent: {
      type: Boolean,
      default: false
    },
    desc: {
      type: Object,
      default: function () {
        return {
          all: '全部',
          positive: '满意',
          negative: '不满意'
        };
      }
    }
  },
  methods: {
    select(type, event) {
      if (!event._constructed) {
      } else {
        // 不能直接修改prop传送过来的数据，子组件中的数据修改后，父组件的数据并不会被修改，要修改父组件的数据
        // 而且父组件刷新后，子组件的数据就被覆盖了
        this.sType = type;
        this.$emit('select_type', type);
        this.$nextTick(() => {
          this.$parent.scroll.refresh();
        });
      }
    },
    toggleContent(event) {
      if (event._constructed) {
        this.oContent = !this.oContent;
        this.$emit('only_content', this.oContent);
        this.$nextTick(() => {
          this.$parent.scroll.refresh();
        });
      }
    }
  },
  data() {
    return {
      sType: this.selecttype,
      oContent: this.onlycontent
    };
  },
  computed: {
    positives() {
      return this.ratings.filter((rating) => {
        return rating.rateType === POSITIVE;
      });
    },
    negative() {
      return this.ratings.filter((rating) => {
        return rating.rateType === NEGATIVE;
      });
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixin.styl";
.ratingselect
    .rating-type
        padding 18px 0
        margin 0 18px
        border-1px(rgba(7,17,27,0.1))
        font-size 0
        .block
            display inline-block
            padding 8px 12px
            border-radius 1px
            color rgb(77,85,93)
            margin-right 8px
            font-size 12px
            &.active
                color: #fff
            .count
                margin-left 2px
                line-height 16px
                font-size 8px
        .positive
            background: rgba(0,160,220,0.2);
            &.active
                background: rgb(0,160,220);
        .negative
            background: rgba(77,85,93,0.2);
            &.active
                background: rgb(77,85,93);
    .switch
        padding 12px 18px
        font-size 0px
        color: rgb(147,153,159)
        border-bottom 1px solid rgba(7,17,27,0.1)
        line-height 24px
        &.on
            .icon-check_circle
                color #00c850
        .icon-check_circle
            font-size 24px
            display inline-block
            vertical-align top
            margin-right 4px
        .text
            display inline-block
            vertical-align top
            font-size 12px
</style>
