import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('./components/pages/HomePage.vue'),
    meta: { title: 'Tefa Bakery' },
  },
  {
    path: '/Profil',
    component: () => import('./components/pages/ProfilePage.vue'),
    meta: { title: 'Tefa Bakery | Profil' },
  },
  {
    path: '/Produk',
    component: () => import('./components/pages/ProductPage.vue'),
    meta: { title: 'Tefa Bakery | Produk' },
  },
  {
    path: '/Kemitraan',
    component: () => import('./components/pages/PartnerPage.vue'),
    meta: { title: 'Tefa Bakekry | Kemitraan' },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
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
