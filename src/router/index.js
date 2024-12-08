import { createRouter, createWebHistory } from 'vue-router'
import RapView from '../views/RapView.vue'
import PopView from '../views/PopView.vue'
import RockView from '../views/RockView.vue'

const routes = [
  {
    path: '/',
    redirect: '/rap'
  },
  {
    path: '/rap',
    name: 'Rap',
    component: RapView
   
  },
  {
    path: '/pop',
    name: 'Pop',
    component: PopView
   
  },
  {
    path: '/rock',
    name: 'Rock',
    component: RockView
   
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
