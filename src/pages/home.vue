<template>
  <div>
    <section>
      <div>
        <img
          class="h-screen w-screen object-cover object-[50%-30%]"
          src="/assets/images/hero.png"
          alt="Tefa Bakery | Tefa SIP"
        />

        <div class="absolute bg-black/50 inset-0"></div>

        <div
          class="absolute inset-0 flex flex-col justify-center items-center text-white font-quicksand text-center text-shadow-black text-shadow-xs"
        >
          <h1 class="text-4xl font-bold whitespace-break-spaces">
            {{ herotext }}
          </h1>
          <p class="mt-10">
            {{ sectxt }}
          </p>
        </div>
      </div>
    </section>

    <section class="bg-secondary">
      <div class="px-12 py-16 flex">
        <img class="h-100" src="/assets/images/section-about.png" alt="" />
        <div class="flex flex-col font-quicksand px-12">
          <h1 class="font-bold text-3xl">Tentang Kami</h1>
          <h4 class="font-bold text-xl">Membangun Inovasi Bersama Generasi Muda</h4>
          <p class="whitespace-break-spaces mt-6 font-semibold">
            {{ aboutPargh }}
          </p>
          <div class="grid grid-cols-2 mt-6 font-bold">
            <p>Produk Berkualitas</p>
            <p>Inovasi Berbasis Sekolah</p>
            <p>Generasi Siap Kerja</p>
            <p>Berdaya Sain Global</p>
          </div>
          <RouterLink
            to="/Tentang-Kami"
            class="mt-8 bg-accent px-8 py-2 rounded-full w-fit shadow-black shadow-sm font-semibold"
            >Pelajari Selengkapnya</RouterLink
          >
        </div>
      </div>
    </section>

    <section>
      <div class="flex flex-col px-16 py-24 font-quicksand justify-center items-center">
        <div class="text-center space-y-2">
          <h1 class="font-bold text-4xl">Produk Kami</h1>
          <p class="font-semibold">
            Beragam pilihan produk terbaik hasil karya inovatif siswa dan tim profesional.
          </p>
        </div>

        <div class="grid grid-cols-3 gap-12 mt-12 px-12">
          <div class="bg-white rounded-xl shadow-lg overflow-hidden">
            <div class="h-44 w-full">
              <img
                class="h-full w-full object-cover"
                src="/assets/images/dummy.png"
                alt="Produk Unggulan"
              />
            </div>
            <div class="p-6 text-center">
              <h3 class="font-bold text-lg">Lorem ipsum</h3>
              <p class="text-sm text-gray-600">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          <div class="bg-white rounded-xl shadow-lg overflow-hidden">
            <div class="h-44 w-full">
              <img
                class="h-full w-full object-cover"
                src="/assets/images/dummy.png"
                alt="Produk Unggulan"
              />
            </div>
            <div class="p-6 text-center">
              <h3 class="font-bold text-lg">Lorem ipsum</h3>
              <p class="text-sm text-gray-600">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          <div class="bg-white rounded-xl shadow-lg overflow-hidden">
            <div class="h-44 w-full">
              <img
                class="h-full w-full object-cover"
                src="/assets/images/dummy.png"
                alt="Produk Unggulan"
              />
            </div>
            <div class="p-6 text-center">
              <h3 class="font-bold text-lg">Lorem ipsum</h3>
              <p class="text-sm text-gray-600">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>

        <RouterLink
          class="mt-12 bg-accent px-12 py-4 rounded-full font-semibold shadow-lg hover:bg-amber-600 transition-all"
          to="/Produk"
          >Lihat Selengkapnya</RouterLink
        >
      </div>
    </section>
  </div>
</template>

<script setup>
const herotext = `Selamat Datang di TEFA Bakery\nCoffee & Fish Canning`
const sectxt = `Inovasi Produk Pangan, Roti, Kopi, dan Olahan Ikan untuk Masa Depan yang Berkualitas`
const aboutPargh = `TEFA Bakery hadir sebagai wadah inovasi dan praktik bisnis berbasis sekolah. Kami menghadirkan produk berkualitas mulai dari roti, kopi, hingga olahan ikan yang diproduksi dengan standar terbaik.
                    \nDengan semangat kolaborasi dan pengembangan keterampilan, kami berkomitmen mencetak generasi yang siap bersaing di dunia industri.`
</script>
