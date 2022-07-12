import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../pages/Base/BasePage.vue'),
      props: (route) => ({ query: route.query }),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('../pages/Home/Home.vue')
        }
      ]
    }
  ]
});

export default router;
