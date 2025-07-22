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
  ],
  scrollBehavior() {
    return { top: 0 };
  }
})

router.beforeEach(beforeEach);


export default router;
