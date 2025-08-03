import { homeRoute } from '@/modules/home/router'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { path: '/home' },
    },
    { ...homeRoute },
  ],
})

export default router
