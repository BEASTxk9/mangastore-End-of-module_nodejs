import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/landing',
    name: 'landing',
    component: () => import('../views/LandingView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/store',
    name: 'store',
    component: () => import('../views/StoreView.vue')
  },
  {
    path: '/single',
    name: 'single',
    component: () => import('../views/SingleView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
