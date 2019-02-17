<template>
    <div>
        <button @click="show()">点击</button>
        <transition name="fade">
            <div class="test" v-show="Show1"></div>
        </transition>
    </div>
</template>

<script>
export default {
  name: 'test',
  methods: {
    show() {
      this.Show1 = !this.Show1;
    }
  },
  data() {
    return {
      Show1: false
    };
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.test
    width 200px
    height 200px
    background: red;
    &.fade-enter-active, &.fade-leave-active
        transition all 1s
        opacity 1
    &.fade-enter, &.fade-leave-to
        opacity: 0;
</style>
