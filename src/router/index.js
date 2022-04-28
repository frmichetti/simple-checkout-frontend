import { createRouter, createWebHistory } from 'vue-router'
import ResumeCart from '../views/ResumeCartView.vue'
import CheckoutReceipt from '../views/ReceiptView.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cart',
    name: 'cart',
    component: ResumeCart
  },
  {
    path: '/payment',
    name: 'payment',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "payment" */ '../views/PaymentView.vue')
  },
  {
    path: '/receipt',
    name: 'receipt',
    component: CheckoutReceipt
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
