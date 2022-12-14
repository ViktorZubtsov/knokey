import { createRouter, createWebHistory, RouteRecordRaw, RouteComponent } from 'vue-router'

const Apartments = (): Promise<RouteComponent> => import('../views/apartments/Apartments.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/apartments'
  },
  {
    path: '/apartments',
    name: 'Apartments',
    component: Apartments,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
