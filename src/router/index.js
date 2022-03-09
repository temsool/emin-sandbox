import { createRouter, createWebHistory } from '@ionic/vue-router';

//import router from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import BaseLayout from '../components/base/BaseLayout.vue';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: HomePage
  },
  {
    path: '/memories',
    component: BaseLayout
  },
  
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
