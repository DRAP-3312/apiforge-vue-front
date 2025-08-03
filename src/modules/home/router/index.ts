import type { RouteRecordRaw } from 'vue-router'
import HomeModule from '../HomeModule.vue'
const ROUTERNAME = 'home'

export const homeRoute: RouteRecordRaw = {
  path: `/${ROUTERNAME}`,
  component: HomeModule,
  children: [
    {
      path: '',
      component: () => import('@/modules/home/views/HomeView.vue'),
    },
  ],
}
