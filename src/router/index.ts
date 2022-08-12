import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../pages/Base/BasePage.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('../pages/Home/Home.vue')
        },
        {
          path: '/link2',
          name: 'Link2',
          component: () => import('../pages/Home/Home.vue')
        },
        {
          path: '/link3',
          name: 'Link3',
          component: () => import('../pages/Home/Home.vue')
        }
      ]
    }
  ]
});

export default router;
