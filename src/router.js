import { createRouter, createWebHistory } from 'vue-router'
import home from './pages/home.vue'
import about from './pages/about.vue'
import product from './pages/product.vue'
import contact from './pages/contact.vue'
import partner from './pages/partner.vue'

const routes = [
  { path: '/', component: home, meta: { title: 'Tefa Bakery' } },
  { path: '/Tentang-Kami', component: about, meta: { title: 'Tefa Bakery | Tentang Kami' } },
  { path: '/Produk', component: product, meta: { title: 'Tefa Bakery | Produk' } },
  { path: '/Kontak', component: contact, meta: { title: 'Tefa Bakery | Kontak' } },
  { path: '/Kemitraan', component: partner, meta: { title: 'Tefa Bakery | Kemitraan' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        top: 0,
        behavior: 'smooth',
      }
    }
  },
})

router.afterEach((to) => {
  document.title = to.meta.title
})

export default router
