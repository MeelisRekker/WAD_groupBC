import { createRouter, createWebHistory } from 'vue-router'

import Signup from '../components/Signup';
import Posts from '../components/Posts';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Posts
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
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
