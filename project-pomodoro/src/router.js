import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('./components/Index'),
    },
    {
      path: '/menu',
      name: 'Menu',
      component: () => import('./components/Menu'),
      children: [
        {
          path: 'todolist',
          name: 'TodoList',
          component: () => import('./views/TodoList'),
        },
      ],
    },
  ],
});
