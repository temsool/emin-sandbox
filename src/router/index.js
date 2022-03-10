import { createRouter, createWebHistory } from '@ionic/vue-router';

//import router from 'vue-router';
import HomePage from '../pages/HomePage.vue';

import ChallengesPage from '../pages/ChallengesPage.vue';

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
    path: '/challenge/:id',
    component: ChallengesPage
  },
  
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
