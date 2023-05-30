import { createRouter, createWebHistory, RouteRecordRaw, RouteComponent } from 'vue-router'

const Apartments = (): Promise<RouteComponent> => import('@/views/apartments/Apartments.vue')
const Create = (): Promise<RouteComponent> => import("@/views/create/Create.vue")
const ApartamentsVuex = (): Promise<RouteComponent> => import("@/views/apartamentVuex/ApartamentsVuex.vue")

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/apartments'
  },
  {
    path: '/apartments',
    name: 'Apartments',
    component: Apartments,
  },
  {
    path: '/apartments-vuex',
    name: 'ApartmentsVuex',
    component: ApartamentsVuex,
  },
  {
    path: '/create',
    name: 'Create',
    component: Create,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
