<template>
  <div class="min-h-screen w-screen flex flex-col bg-background">
    <nav
      :class="[
        'fixed top-0 left-0 w-full z-999 font-quicksand transition-all duration-650 text-white',
        isScrolled ? 'pl-24 pr-12 py-2 text-lg bg-primary' : 'px-28 py-2 text-xl navbar',
      ]"
    >
      <div class="flex justify-between items-center">
        <RouterLink to="/">
          <div class="flex items-center gap-2">
            <img
              :class="[
                'bg-white rounded-full transition-all duration-650',
                isScrolled ? 'h-8' : 'h-10',
              ]"
              src="/assets/images/logo.png"
              alt="Tefa Bakery | Tefa Logo"
            />
            <h1 class="font-bold">TEFA BAKERY</h1>
          </div>
        </RouterLink>
        <div class="space-x-8 flex font-semibold">
          <div class="relative inline-block">
            <button @click="toggleDropdown" class="flex items-center gap-1">
              Tentang Kami<font-awesome-icon
                icon="angle-down"
                :class="['transition-all duration-650 ', isOpen ? 'rotate-180' : 'rotate-0']"
              />
            </button>
            <!-- dropdown content -->
            <div
              v-if="isOpen"
              :class="[
                'absolute top-full  flex flex-col p-4 w-full font-semibold text-sm overflow-hidden z-50',
                'transition-all duration-650 ease-in-out',
                isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1',
                isScrolled ? 'bg-primary' : 'navbar',
              ]"
            >
              <RouterLink>Profil</RouterLink>
              <RouterLink>Galeri Kegiatan</RouterLink>
            </div>
          </div>
          <RouterLink to="/Produk">Produk</RouterLink>
          <RouterLink to="/Kontak">Kontak</RouterLink>
          <RouterLink to="/Kemitraan">Kemitraan</RouterLink>
        </div>
      </div>
    </nav>

    <main class="flex-1 h-full">
      <section class="h-full flex">
        <RouterView />
      </section>
    </main>

    <footer
      class="font-quicksand font-semibold bg-primary px-8 py-24 flex flex-col align-center justify-center mt-auto text-white cursor-default"
    >
      <div class="flex justify-center items-start shrink-0">
        <!-- 1/2 footer main -->
        <div class="flex flex-col basis-2/6 justify-start border-r border-white/40 px-12 flex-1">
          <RouterLink to="/" class="flex items-center gap-2 mb-6">
            <img class="bg-white rounded-full h-10 w-auto" src="/assets/images/logo.png" alt="" />
            <h1 class="font-bold font-poppins text-2xl">TEFA Bakery</h1>
          </RouterLink>
          <p class="text-sm">
            Membangun inovasi bakery bersama generasi muda dengan kualitas terbaik
          </p>
        </div>

        <!-- 2/2 footer side -->
        <div class="px-12 gap-12 flex basis-4/6 shrink-0 flex-1 justify-between">
          <!-- 2/4 two side -->
          <div class="flex flex-col">
            <h1 class="font-bold text-lg light border-b border-white/40 pb-2 mb-6">Menu</h1>
            <div class="flex flex-col">
              <div class="flex flex-col">
                <h2 class="">Landing Page</h2>
                <div class="flex flex-col text-sm font-normal ml-1">
                  <RouterLink to="/Profil">Profil</RouterLink>
                  <RouterLink to="/Fasilitas">Fasilitas</RouterLink>
                  <RouterLink to="/Galeri Kegiatan">Galeri Kegiatan</RouterLink>
                </div>
              </div>
              <div class="flex flex-col">
                <RouterLink class="hover:text-gray-400" to="/Produk">Produk</RouterLink>
                <RouterLink class="hover:text-gray-400" to="/Kontak">Kontak</RouterLink>
                <RouterLink class="hover:text-gray-400" to="/Kemitraan">Kemitraan</RouterLink>
              </div>
            </div>
          </div>
          <!-- 3/4 one side -->
          <div class="flex flex-col">
            <h1 class="font-bold text-lg border-b border-white/40 pb-2 mb-6">Produk</h1>
            <div>
              <h3>Roti Kering</h3>
              <h3>Roti Manis</h3>
              <h3>Aneka Roti Isian</h3>
              <h3>Aneka Minuman</h3>
            </div>
          </div>
          <!-- 4/4 one side -->
          <div class="flex flex-col">
            <h1 class="font-bold text-lg border-b border-white/40 pb-2 mb-6">Kontak</h1>
            <div class="flex flex-col">
              <div class="flex items-center gap-4">
                <font-awesome-icon icon="location-dot" />
                <h3>
                  Jl. Tawang Mangu, Tegalgede,<br />Kec. Sumbersari.<br />Gerbang belakang POLIJE
                </h3>
              </div>
              <div class="flex items-center gap-4">
                <font-awesome-icon icon="phone" />
                <h3></h3>
              </div>
              <div class="flex items-center gap-4">
                <font-awesome-icon icon="" />
                <h3></h3>
              </div>
              <div class="flex items-center gap-4">
                <font-awesome-icon icon="" />
                <h3></h3>
              </div>
            </div>
          </div>
        </div>

        <!-- <div class="flex flex-col px-12 basis-1/6 shrink-0 flex-1">
          <div class="bg-white rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d473.79095514831806!2d113.72671344394837!3d-8.155362125686215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd695b66f19fbdf%3A0xe4fe4690bfdbc3b5!2sRoti%20SIP%20POLIJE!5e1!3m2!1sid!2sid!4v1759782130745!5m2!1sid!2sid"
              width="auto"
              height="150"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div class="flex items-center justify-between py-4 px-18 gap-2 text-black">
              <a href="https://www.whatsapp.com" target="_blank" rel="noopener norefferer"
                ><font-awesome-icon class="fa-xl" :icon="['fab', 'whatsapp']"
              /></a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener norefferer"
                ><font-awesome-icon class="fa-xl" :icon="['fab', 'facebook']"
              /></a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener norefferer"
                ><font-awesome-icon class="fa-xl" :icon="['fab', 'instagram']"
              /></a>
            </div>
          </div>
        </div> -->
      </div>

      <!-- copyright footer main -->
      <div class="flex justify-center mt-8 items-end pt-4 border-t border-white/20">
        <h1 class="font-poppins font-light text-gray-300 text-xs tracking-wide">
          &copy; {{ currentYear }} Tefa Bakery. All Rights Reserved.
        </h1>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { products } from './data/products'

const isScrolled = ref(false)
const currentYear = ref(new Date().getFullYear())
const isOpen = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 10
}

function toggleDropdown() {
  isOpen.value = !isOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
