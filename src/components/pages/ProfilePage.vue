<template>
  <div class="font-quicksand cursor-default">
    <section>
      <div>
        <img
          src="/assets/images/hero_profile.webp"
          alt="Tefa Bakery"
          class="h-[50vh] w-screen object-cover"
        />
      </div>

      <div class="absolute h-[50vh] bg-black/50 inset-0"></div>

      <div
        class="absolute h-[50vh] inset-0 flex flex-col justify-center items-center text-white font-quicksand text-center"
      >
        <h1 class="font-bold text-4xl whitespace-break-spaces">Profil</h1>
      </div>
    </section>

    <section>
      <div class="bg-secondary">
        <div class="flex py-24 px-48 gap-12">
          <img
            class="h-[300px] w-[auto] rounded-4xl"
            src="/assets/images/aside-profile.webp"
            alt="tefa bakery"
          />
          <div class="flex flex-col gap-6 text-center justify-center">
            <h1 class="font-bold text-4xl">Sejarah Kami</h1>
            <p class="font-semibold text-lg text-justify">
              {{ asideTxt }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const asideTxt = `Semua ini  dimulai dari sebuah unit pengembangan teknologi pangan di Politeknik Negeri Jember (Polije).
  Awalnya, Tefa Bakery adalah bagian dari unit tersebut, dan setelah berjalan selama dua tahun,
  pada sekitar tahun 2022-2023 secara resmi berubah menjadi Teaching Factory (Tefa) Bakery yang dikenal
  dengan nama Tefa SIP Polije Bakery. Unit ini berfokus pada pengembangan pangan serta memberikan edukasi
  kepada mahasiswa, terutama dalam mendukung kegiatan magang dan praktik kerja lapangan seperti PKL dari siswa SMK.`
</script>
