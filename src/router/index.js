import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CalculatorView from '../views/CalculatorView.vue'
import InfoView from '../views/InfoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: CalculatorView
    },
    {
      path: '/info',
      name: 'info',
      component: InfoView
    }
  ]
})

export default router
