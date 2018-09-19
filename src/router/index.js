import Vue from 'vue';
import Router from 'vue-router';
import MapWrap from '@/components/MapWrap';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      // component: () => import('@/components/HelloWorld'), // 动态引入组件(懒加载)
      component: MapWrap
    }
  ]
});
