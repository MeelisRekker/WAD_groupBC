import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/signup', component: App },
  { path: '/app', component: { template: '<div>MAINPAGE</div>' } }, // Replace with your actual index component
  { path: '/', redirect: '/signup' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
