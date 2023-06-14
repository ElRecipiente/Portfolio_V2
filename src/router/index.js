import { createRouter, createWebHistory } from 'vue-router'
import CardView from '../views/CardView.vue'
import CarousselView from '../views/CarousselView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'card',
      component: CardView
    },
    {
      path: '/caroussel',
      name: 'caroussel',
      component: CarousselView
    }
  ]
})

export default router
