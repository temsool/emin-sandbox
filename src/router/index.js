import { createRouter, createWebHistory } from '@ionic/vue-router';

//import router from 'vue-router';
import HomePage from '../pages/HomePage.vue';



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
    path: '/challenge/1',
    component: () => import('../pages/ChallengeDetail1.vue')
  },
  {
    path: '/challenge/2',
    component: () => import('../pages/ChallengeDetail2.vue')
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
