<template>
  <div class="min-h-screen w-screen flex flex-col bg-background">
    <nav
      :class="[
        'fixed top-0 left-0 navbar w-full z-999 font-quicksand font-bold transition-all duration-300 text-white',
        isScrolled ? 'pl-24 pr-12 py-2 text-lg' : 'px-28 py-2 text-xl',
      ]"
    >
      <div class="flex justify-between items-center">
        <RouterLink to="/">
          <div class="flex items-center gap-2">
            <img
              :class="['bg-white rounded-full', isScrolled ? 'h-8' : 'h-10']"
              src="/assets/images/logo.png"
              alt="Tefa Bakery | Tefa Logo"
            />
            <h1>TEFA BAKERY</h1>
          </div>
        </RouterLink>
        <div class="space-x-8 flex">
          <RouterLink class="flex items-center gap-1" to="/Tentang-Kami"
            >Tentang Kami<img class="h-6 w-auto invert" src="/assets/images/arrow-down.svg" alt=""
          /></RouterLink>
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
      class="font-poppins bg-primary px-8 py-9 flex align-center justify-center mt-auto text-white cursor-pointer"
    >
      <div class="flex justify-center items-start basis-3/6 shrink-0 flex-1">
        <div class="flex flex-col justify-start border-r px-12">
          <RouterLink to="/" class="flex items-center gap-2">
            <img class="bg-white rounded-full h-10 w-auto" src="/assets/images/logo.png" alt="" />
            <h1 class="font-bold text-2xl">TEFA Bakery</h1>
          </RouterLink>
          <p class="py-4">Membangun inovasi bakery bersama generasi muda dengan kualitas terbaik</p>
        </div>

        <div class="px-12 flex flex-col border-r basis-2/6 shrink-0 flex-1">
          <h1 class="font-semibold border-b">Navigasi</h1>
          <div class="flex pt-4">
            <div class="flex flex-col">
              <h1 class="font-semibold">tentang Kami</h1>
              <div class="flex flex-col pl-6 text-sm">
                <RouterLink class="hover:text-gray-500" to="">Profil</RouterLink>
                <RouterLink class="hover:text-gray-500" to="">Fasilitas</RouterLink>
                <RouterLink class="hover:text-gray-500" to="">Galeri Kegiatan</RouterLink>
              </div>
            </div>
            <div class="flex flex-col pl-12 font-semibold">
              <RouterLink class="hover:text-gray-500" to="/produk">Produk</RouterLink>
              <RouterLink class="hover:text-gray-500" to="/kontak">Kontak</RouterLink>
              <RouterLink class="hover:text-gray-500" to="/kemitraan">Kemitraan</RouterLink>
            </div>
          </div>
        </div>

        <div class="flex flex-col px-12 basis-1/6 shrink-0 flex-1">
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
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

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
