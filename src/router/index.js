import { createRouter, createWebHistory } from 'vue-router';
import beforeEach from './beforeEach';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Jogar',
      component: () => import('@/views/game/gameView.vue'),
      meta: {
        title: "page.game",
      },
    },
    {
      path: '/dice',
      name: 'Dados',
      component: () => import('@/views/dice/diceView.vue'),
      meta: {
        title: "page.dice",
      },
    },
    {
      path: '/search',
      name: 'Busca',
      component: () => import('@/views/search/searchView.vue'),
      meta: {
        title: "page.search",
      },
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  }
})

router.beforeEach(beforeEach);


export default router;
