import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import DataPrivacy from './views/DataPrivacy.vue';
import Imprint from './views/Imprint.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/impressum',
      name: 'impressum',
      component: Imprint,
    },
    {
      path: '/datenschutz',
      name: 'datenschutz',
      component: DataPrivacy,
    },
  ],
});
