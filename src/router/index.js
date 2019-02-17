import Vue from 'vue';
import Router from 'vue-router';
// import vheader from '@/components/header/header';
import goods from '@/components/goods/goods';
import sellers from '@/components/sellers/sellers';
import ratings from '@/components/ratings/ratings';
import test from '@/components/cartcontrol/test';

Vue.use(Router);
let routes = [
  {path: '/', redirect: '/goods', component: goods},
  {path: '/goods', component: goods},
  {path: '/ratings', component: ratings},
  {path: '/sellers', component: sellers},
  {path: '/test', component: test}
];
const router = new Router({
  // 设置默认的激活样式，为active
  linkActiveClass: 'active',
  routes
});
export default router;
