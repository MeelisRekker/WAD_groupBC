import { createRouter, createWebHistory } from 'vue-router'
import auth from "../auth";

import HomeView from '../views/HomeView.vue';
import SignupView from '../views/SignupView.vue';
import LoginView from '../views/LoginView.vue';
import PostView from '../views/PostView.vue';
import AddPostView from '../views/AddPostView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    beforeEnter: async(to, from, next) => {
      let authResult = await auth.authenticated();
      if (!authResult) {
          next('/login')
      } else {
          next();
      }
    }
  },
  {
    path: "/post/:id",
    name: "Post",
    component: PostView,
    beforeEnter: async(to, from, next) => {
      let authResult = await auth.authenticated();
      if (!authResult) {
          next('/login')
      } else {
          next();
      }
    }
  },
  {
    path: "/addpost",
    name: "Add Post",
    component: AddPostView,
    beforeEnter: async(to, from, next) => {
      let authResult = await auth.authenticated();
      if (!authResult) {
          next('/login')
      } else {
          next();
      }
    }
  },
  {
    path: '/signup',
    name: 'Sign Up',
    component: SignupView
  },
  {
    path: "/login",
    name: "Log In",
    component: LoginView,
  },
  {
    path: "/contacts",
    name: "Contact Us",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import ( /* webpackChunkName: "about" */ "../views/ContactsView.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
