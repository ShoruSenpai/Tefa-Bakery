import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../components/pages/HomePage.vue'),
    meta: { title: 'Tefa Bakery | Home' },
  },
  {
    path: '/Tentang-Kami',
    component: () => import('../components/pages/AboutPage.vue'),
    meta: { title: 'Tefa Bakery | Tentang Kami' },
  },
  {
    path: '/Produk',
    component: () => import('../components/pages/ProductPage.vue'),
    meta: { title: 'Tefa Bakery | Produk' },
  },
  {
    path: '/Galeri',
    component: () => import('../components/pages/GaleryPage.vue'),
    meta: { title: 'Tefa Bakery | Galeri' },
  },
  {
    path: '/Kontak',
    component: () => import('../components/pages/ContactPage.vue'),
    meta: { title: 'Tefa Bakery | Kontak' },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
  document.title = to.meta.title || 'Tefa Bakery'
})

export default router
