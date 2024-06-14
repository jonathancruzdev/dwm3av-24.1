import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactoView from '@/views/ContactoView.vue'
import PostDetailViewVue from '../views/PostDetailView.vue'
import ProductDetail from '../components/ProductDetail.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // Otra forma
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactoView
    },
    // Ruta con paramentros
    {
      path: '/product/:id',
      name: 'PostDeail',
      component: ProductDetail
    }

  ]
})

export default router
