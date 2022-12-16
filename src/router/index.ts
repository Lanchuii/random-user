import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '../views/home-page.vue'
import UserPage from '../views/user-page.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'about',
    component: UserPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
