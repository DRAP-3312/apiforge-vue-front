import { createRouter, createWebHistory } from 'vue-router'
import HomeModule from '@/modules/home/HomeModule.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeModule,
    },
  ],
})

export default router
