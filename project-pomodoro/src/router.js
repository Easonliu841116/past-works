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
      component: () => import('./components/Index.vue'),
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
