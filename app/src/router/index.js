import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView';
import SignupView from '../views/SignupView';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/SignupView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
