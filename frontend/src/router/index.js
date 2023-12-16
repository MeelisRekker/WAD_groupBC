import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue';
import SignupView from '../views/SignupView.vue';
import PostView from '../views/PostView.vue';
import AddPost from '../views/AddPost.vue';

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
  },
  {
    path: "/post/:id",
    name: "Post",
    component: PostView,
  },
  {
    path: "/addpost",
    name: "AddPost",
    component: AddPost,
},
{ //will route to AllPosts view if none of the previous routes apply
    path: "/:catchAll(.*)",
    name: "HomeView",
    component: HomeView,
}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
