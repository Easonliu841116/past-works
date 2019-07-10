import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/',
    },
    {
      path: '/',
      name: 'Index',
      component: () => import('./components/Index.vue'),
    },
    {
      path: '/menu',
      component: () => import('./components/Menu.vue'),
      children: [
        {
          path: '/',
          name: 'TodoList',
          component: () => import('./views/TodoList.vue'),
        },
        {
          path: 'analytics',
          name: 'Analytics',
          component: () => import('./views/Analytics.vue'),
        },
        {
          path: 'ringtone',
          name: 'Ringtone',
          component: () => import('./views/Ringtone.vue'),
        },
      ],
    },
  ],
});
