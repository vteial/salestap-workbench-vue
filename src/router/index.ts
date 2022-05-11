import { createRouter, createWebHistory } from 'vue-router'
import notFoundView from '../views/not-found/not-found.vue'
import homeView from '../views/home/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: notFoundView },
    { path: '/', redirect: '/home' },
    { path: '/index.html', redirect: '/home' },
    { path: '/home', name: 'home', component: homeView },
    {
      path: '/products', name: 'products',
      component: () => import('../views/product-list/product-list.vue')
    }
  ]
})
export default router
