<template>
    <div class="ratings" ref="ratings">
        <div class="rating-content">
            <div class="overview">
                <div class="overview-left">
                    <h1 class="score">{{seller.score}}</h1>
                    <div class="title">综合评分</div>
                    <div class="rank">高于周边商家{{seller.rankRate}}%</div>
                </div>
                <div class="overview-right">
                    <div class="score-wrapper">
                        <span class="title">服务态度</span>
                        <star :size="36" :score="seller.serviceScore"></star>
                        <span class="score">{{seller.serviceScore}}</span>
                    </div>
                    <div class="score-wrapper">
                        <span class="title">商品评分</span>
                        <star :size="36" :score="seller.foodScore"></star>
                        <span class="score">{{seller.foodScore}}</span>
                    </div>
                    <div class="delivery-wrapper">
                        <span class="title">送达时间</span>
                        <span class="delivery">{{seller.deliveryTime}}分钟</span>
                    </div>
                </div>
            </div>
            <split></split>
            <ratingselect @select_type="select_type" @only_content="toggleContent" :ratings="ratings" :selecttype="selectType" :onlycontent="onlyContent"></ratingselect>
            <div class="rating-wrapper">
                <ul>
                    <li v-show="needShow(rating.rateType,rating.text)" v-for="rating in ratings" :key="rating.index" class="rating-item">
                        <div class="avatar">
                            <img :src="rating.avatar" alt="" width="28px" height="28px">
                        </div>
                        <div class="content">
                            <h1 class="name">{{rating.username}}</h1>
                            <div class="star-wrapper">
                                <star :size="24" :score="rating.score"></star>
                                <span class="deliver" v-show="rating.deliveryTime">{{rating.deliveryTime}}</span>
                            </div>
                            <p class="text">{{rating.text}}</p>
                            <div class="recommend" v-show="rating.recommend">
                                <span class="icon-thumb_up"></span>
                                <span v-for="item in rating.recommend" :key="item.index" class="item">{{item}}</span>
                            </div>
                            <div class="time">
                                {{rating.rateTime | formatDate}}
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import star from '../star/star';
    import split from '../split/split';
    import ratingselect from '../ratingselect/ratingselect';
    import axios from 'axios';
    import {formatDate} from '../../common/js/date';
    import BScroll from 'better-scroll';
    const ALL = 2;
export default {
  name: 'ratings',
  props: {
    seller: {
      type: Object
    }
  },
  components: {
    'star': star,
    'split': split,
    'ratingselect': ratingselect
  },
  data() {
    return {
      ratings: [],
      selectType: ALL,
      onlyContent: true
    };
  },
  created () {
    axios.get('/api/ratings').then((response) => {
      let errno = response.data.errno;
      if (errno === 0) {
        this.ratings = response.data.data;
        this.$nextTick(() => {
          this.scroll = new BScroll(this.$refs.ratings, {
            click: true
          });
        });
      } else {
        console.log('获取数据失败');
      }
    });
  },
  filters: {
    formatDate (time) {
      let date = new Date(time);
      return formatDate(date, 'yyyy-MM-dd hh:mm');
    }
  },
  methods: {
    select_type(type) {
      this.selectType = type;
      this.$nextTick(() => {
        this.scroll.refresh();
      });
    },
    toggleContent(content) {
      this.onlyContent = content;
      this.$nextTick(() => {
        this.scroll.refresh();
      });
    },
    needShow(type, text) {
      if (this.onlyContent && !text) {
        return false;
      }
      if (this.selectType === ALL) {
        return true;
      } else {
        if (type === this.selectType) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixin.styl"
.ratings
    position: absolute
    top:174px
    left:0
    bottom 0
    width 100%
    overflow hidden
    .overview
        display: flex
        padding 18px 0
        .overview-left
            flex:0 0 137px
            padding 6px 0
            width 137px
            border-right 1px solid rgba(7,17,27,0.2)
            text-align center
            .score
                margin-right 6px
                margin-bottom 8px
                font-size 24px
                line-height 28px
                color: rgb(255,153,0)
            .title
                font-size 12px
                line-height 12px
                color rgb(7,17,27)
                margin:8px
            .rank
                line-height 10px
                font-size 10px
                color rgb(147,153,159)
        .overview-right
            flex:1
            padding 6px 0 6px 24px
            .score-wrapper
                margin-bottom 8px
                font-size 0
                .title
                    display inline-block
                    line-height 18px
                    vertical-align top
                    font-size 12px
                    color: rgb(7,17,27)
                .star
                    display inline-block
                    line-height 18px
                    vertical-align top
                    margin:0 12px
                .score
                    display inline-block
                    line-height 18px
                    vertical-align top
                    font-size 12px
                    color: rgb(255,153,0)
            .delivery-wrapper
                font-size 0
                .title
                    font-size 12px
                    line-height 18px
                    color rgb(7,17,27)
                .delivery
                    margin 12px
                    font-size 12px
                    color: rgb(147,153,159)
    .rating-wrapper
        padding 0 18px
    .rating-item
        display: flex
        padding 18px
        border-1px(rgba(7,17,27,0.2))
        .avatar
            flex 0 0 28px
            width 28px
            margin-right: 12px
            img
                border-radius 50%
        .content
            position relative
            flex 1
            .name
                margin-bottom 4px
                line-height 12px
                color: rgb(7,17,27)
                font-size 10px
            .star-wrapper
                margin-bottom 6px
                font-size 0
                .star
                    display: inline-block
                    vertical-align top
                    margin-right 6px
                .deliver
                    display: inline-block
                    vertical-align top
                    font-size 10px
                    line-height 12px
                    color rgb(147,153,159)
            .text
                line-height 18px
                margin-bottom 8px
                font-size 12px
                color rgb(7,17,27)
            .recommend
                line-height 16px
                font-size 0
                .icon-thumb_up, .item
                    display: inline-block
                    margin 0 8px 4px 0
                    font-size 9px
                .icon-thumb_up
                    color: rgb(0,160,220)
                .item
                    padding 0 6px
                    border:1px solid rgba(7,17,27,0.1)
                    border-radius 1px
                    color: rgb(147,153,159)
                    background: #fff;
            .time
                position: absolute
                top 0
                right 0
                color: rgb(147,153,159)
                font-size 10px
                line-height 12px
</style>
