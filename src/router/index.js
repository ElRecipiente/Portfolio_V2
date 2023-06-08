import { createRouter, createWebHistory } from 'vue-router'
import CardView from '../views/CardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'card',
      component: CardView
    }
  ]
})

export default router
