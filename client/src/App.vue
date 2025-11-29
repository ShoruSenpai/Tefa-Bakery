<template>
  <div
    class="min-h-screen w-screen flex flex-col font-[poppins] bg-linear-to-b from-grad-top to-grad-bottom cursor-default"
  >
    <nav class="fixed flex bg-primary-navbar py-4 shadow-sm shadow-gray-300 w-full z-999">
      <div class="flex items-center justify-between px-26 w-full">
        <RouterLink to="/" class="flex items-center gap-2">
          <img class="h-8" src="/assets/images/tefa_logo.webp" alt="Tefa Logo" />
          <h1 class="text-xl font-bold text-primary">Tefa Bakery & Coffee</h1>
        </RouterLink>
        <div class="flex items-center text-primary text-md font-medium gap-x-8">
          <RouterLink to="/" class="underline-hover">Beranda</RouterLink>
          <RouterLink to="/Tentang-Kami" class="underline-hover">Tentang</RouterLink>
          <RouterLink to="/Produk" class="underline-hover">Produk</RouterLink>
          <RouterLink to="/Galeri" class="underline-hover">Galeri</RouterLink>
          <RouterLink to="/Kontak" class="underline-hover">Kontak</RouterLink>
        </div>
        <div>
          <img class="h-8" src="/assets/images/polije-side-logo.webp" alt="polije-side-logo" />
        </div>
      </div>
    </nav>

    <main class="flex-1 h-full w-full">
      <section class="h-full w-full flex">
        <RouterView />
      </section>
    </main>

    <footer class="bg-secondary cursor-default text-primary font-[poppins]">
      <!-- hero footer -->
      <div class="flex flex-col items-center">
        <!-- hero banner -->
        <div class="flex justify-center items-center mt-18 px-12 gap-34">
          <!-- left section -->
          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-4">
              <img
                class="h-10 w-auto shadow-sm rounded-full"
                src="/assets/images/tefa_logo.webp"
                alt=""
              />
              <h1 class="text-2xl font-bold">Tefa Bakery & Coffee</h1>
            </div>

            <p class="leading-relaxed font-light max-w">
              Membangun inovasi bakery bersama generasi<br />muda dengan kualitas terbaik
            </p>
          </div>

          <!-- right section -->
          <div class="flex gap-24">
            <div class="flex flex-col gap-2">
              <h1 class="text-md font-semibold">Tautan Cepat</h1>
              <div class="flex flex-col font-light text-sm">
                <RouterLink class="hover:text-primary/50" to="/">Beranda</RouterLink>
                <RouterLink class="hover:text-primary/50" to="/Tentang-Kami">Tentang</RouterLink>
                <RouterLink class="hover:text-primary/50" to="/Produk">Produk</RouterLink>
                <RouterLink class="hover:text-primary/50" to="/Galeri">Galeri</RouterLink>
                <RouterLink class="hover:text-primary/50" to="/Kontak">Kontak</RouterLink>
              </div>
            </div>
            <div class="flex flex-col gap-2">
              <h1 class="text-md font-semibold">Jam Operasional</h1>
              <div class="flex font-light text-sm">
                <div class="flex flex-col">
                  <p>Senin - Jumat</p>
                  <p>Sabtu - Minggu</p>
                </div>
                <div class="flex flex-col">
                  <p>08.00 - 16.00 WIB</p>
                  <p>Tutup</p>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-2">
              <h1 class="text-md font-semibold">Tautan Cepat</h1>
              <div class="flex flex-col gap-1">
                <p class="font-light text-sm">
                  Jl. Tawang Mangu No. 68,<br />Pintu Masuk Belakang Polije
                </p>
                <div class="flex gap-4">
                  <a
                    class="flex items-center justify-center bg-primary-container p-2 text-on-primary rounded-full aspect-square"
                    href=""
                  >
                    <font-awesome-icon class="fa-sm" :icon="['fab', 'instagram']" />
                  </a>
                  <a
                    class="flex items-center justify-center bg-primary-container p-2 text-on-primary rounded-full aspect-square"
                    href=""
                  >
                    <font-awesome-icon class="fa-sm" :icon="['fab', 'tiktok']" />
                  </a>
                  <a
                    class="flex items-center justify-center bg-primary-container p-2 text-on-primary rounded-full aspect-square"
                    href=""
                  >
                    <font-awesome-icon class="fa-sm" :icon="['fab', 'facebook']" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-12 px-24 w-full text-center">
          <h1 class="text-sm font-light border-t border-primary/30 py-6">
            &copy; {{ currentYear }} Tefa Bakery & Coffee. All Rights Reserved
          </h1>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const currentYear = ref(new Date().getFullYear())

function handleScroll() {
  isScrolled.value = window.scrollY < 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
