<template>
  <div class="min-h-screen w-screen flex flex-col bg-background font-quicksand">
    <nav
      :class="[
        'cursor-default fixed top-0 left-0 w-full z-999 font-poppins text-white border-white/10 border-b transition-all duration-650',
        isScrolled ? 'bg-primary h-14 px-18' : 'navbar h-16 px-24',
      ]"
    >
      <div class="flex h-full items-center justify-between">
        <RouterLink to="/" class="flex gap-2 items-center font-bold">
          <img
            src="/assets/images/tefa_logo.webp"
            alt="Tefa-Bakery"
            :class="[
              'bg-white rounded-full transition-all duration-650',
              isScrolled ? 'h-8' : 'h-10',
            ]"
          />
          <h1 :class="['transition-all duration-650', isScrolled ? 'text-xl' : 'text-2xl']">
            Tefa Bakery
          </h1>
        </RouterLink>
        <div
          :class="[
            'flex font-semibold text-xl items-center justify-center transition-all duration-650',
            isScrolled ? 'gap-14 mt-2' : 'gap-8 mt-',
          ]"
        >
          <RouterLink class="pb-1 animationBorderSide" to="/Profil">Profil</RouterLink>
          <RouterLink class="pb-1 animationBorderSide" to="/Produk">Produk</RouterLink>
          <RouterLink class="pb-1 animationBorderSide" to="/Galeri">Galeri</RouterLink>
          <RouterLink class="pb-1 animationBorderSide" to="/Kemitraan">Kemitraan</RouterLink>
        </div>
        <div class="flex items-center gap-x-2">
          <img
            src="/assets/images/polije_logo.webp"
            alt="Tefa-Balery"
            :class="['transition-all duration-650', isScrolled ? 'h-9' : 'h-10']"
          />
          <div
            :class="[
              'flex flex-col justify-center font-bold transition-all duration-650',
              isScrolled ? '' : '',
            ]"
          >
            <h1
              :class="[
                'transition-all duration-650 leading-none',
                isScrolled ? 'text-md' : 'tracking-[2.5px] text-xl',
              ]"
            >
              POLITEKNIK
            </h1>
            <h3
              :class="[
                'transition-all duration-650 leading-none',
                isScrolled ? 'text-xs' : 'text-lg',
              ]"
            >
              NEGERI JEMBER
            </h3>
          </div>
        </div>
      </div>
    </nav>

    <main class="flex-1 h-full">
      <section class="h-full flex">
        <RouterView />
      </section>
    </main>

    <footer>
      <section>
        <div class="bg-primary text-white py-18 px-48">
          <div class="flex flex-col justify-center items-center">
            <div class="flex gap-18">
              <div class="flex flex-col cursor-default gap-4">
                <RouterLink class="group flex items-center gap-2">
                  <img
                    class="h-[60px] w-[60px] bg-white rounded-full group-hover:bg-gray-300 transition-all duration-250"
                    src="/assets/images/tefa_logo.webp"
                    alt="Tefa Bakery Logo"
                  />
                  <h1
                    class="text-2xl font-bold group-hover:text-gray-400 transition-all duration-250"
                  >
                    TEFA Bakery
                  </h1>
                </RouterLink>
                <p>Membangun inovasi bakery bersama generasi muda dengan kualitas terbaik</p>
              </div>
              <div class="h-auto w-[1px] bg-white"></div>
              <div class="flex gap-12 w-full">
                <div class="flex flex-col">
                  <RouterLink class="text-lg font-semibold hover:text-gray-400" to="/"
                    >Beranda</RouterLink
                  >
                  <RouterLink class="hover:text-gray-400" :to="{ path: '/', hash: '#about' }"
                    >Sejarah</RouterLink
                  >
                  <RouterLink class="hover:text-gray-400" :to="{ path: '/', hash: '#product' }"
                    >Produk</RouterLink
                  >
                  <RouterLink class="hover:text-gray-400" :to="{ path: '/', hash: '#contact' }"
                    >Kontak</RouterLink
                  >
                  <RouterLink class="hover:text-gray-400" :to="{ path: '/', hash: '#partner' }"
                    >Kemitraan</RouterLink
                  >
                </div>
                <div class="flex flex-col">
                  <RouterLink class="text-lg font-semibold hover:text-gray-400" to="/"
                    >Profil</RouterLink
                  >
                  <RouterLink class="hover:text-gray-400" to="/">Sejarah</RouterLink>
                  <RouterLink class="hover:text-gray-400" to="/">Visi & Misi</RouterLink>
                  <RouterLink class="hover:text-gray-400" to="/">Galeri</RouterLink>
                </div>
                <div class="flex flex-col">
                  <RouterLink class="text-lg font-semibold hover:text-gray-400" to="/Produk"
                    >Produk</RouterLink
                  >
                  <RouterLink class="hover:text-gray-400" to="/Produk">Roti</RouterLink>
                  <RouterLink class="hover:text-gray-400" to="/Produk">Kopi</RouterLink>
                  <RouterLink class="hover:text-gray-400" to="/Produk">Ikan Kaleng</RouterLink>
                  <RouterLink class="hover:text-gray-400" to="/Produk">Makanan Beku</RouterLink>
                </div>
                <div class="flex flex-col">
                  <RouterLink class="text-lg font-semibold hover:text-gray-400" to="/"
                    >Galeri</RouterLink
                  >
                  <RouterLink class="hover:text-gray-400" to="/">Kegiatan</RouterLink>
                  <RouterLink class="hover:text-gray-400" to="/"></RouterLink>
                </div>
                <div class="flex flex-col">
                  <RouterLink class="text-lg font-semibold hover:text-gray-400" to="/"
                    >Kemitraan</RouterLink
                  >
                  <RouterLink class="hover:text-gray-400" to="/">Benefit</RouterLink>
                  <RouterLink class="hover:text-gray-400" to="/">Form</RouterLink>
                  <RouterLink class="hover:text-gray-400" to="/">Tahapan</RouterLink>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-end py-12 text-2xl gap-4">
            <a href=""><font-awesome-icon icon="location-dot" /></a>
            <a href=""><font-awesome-icon :icon="['fab', 'whatsapp']" /></a>
            <a href=""><font-awesome-icon :icon="['fab', 'facebook']" /></a>
            <a href=""><font-awesome-icon :icon="['fab', 'instagram']" /></a>
          </div>
          <div class="h-[0.2px] w-auto bg-white"></div>
          <div class="flex justify-center pt-12 cursor-default">
            <h1 class="text-xs font-light text-gray-300 tracking-wide">
              &copy; {{ currentYear }} Tefa Bakery. All Right Reserved
            </h1>
          </div>
        </div>
      </section>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const currentYear = ref(new Date().getFullYear())

function handleScroll() {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
