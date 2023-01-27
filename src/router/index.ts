import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '../views/home-page.vue'
import UserPage from '../views/user-page.vue'
import RouterNames from '../constants/router-names'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: RouterNames.HOME,
    component: HomePage
  },
  {
    path: '/userPage/:id',
    name: RouterNames.USER,
    component: UserPage,
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
