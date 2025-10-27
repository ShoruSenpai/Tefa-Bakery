<template>
  <div class="font-quicksand cursor-default">
    <section>
      <div>
        <img src="/assets/images/hero.webp" alt="Tefa Bakery" class="h-screen w-screen" />
      </div>

      <div class="absolute bg-black/50 inset-0"></div>

      <div
        class="absolute inset-0 flex flex-col justify-center items-center text-white font-quicksand text-center"
      >
        <h1 class="font-bold text-4xl whitespace-break-spaces">
          {{ heroText }}
        </h1>
        <p class="font-light mt-6">
          {{ secondaryText }}
        </p>
      </div>
    </section>

    <section id="about">
      <div class="bg-secondary flex justify-around items-start py-24 px-24">
        <!-- <div class="w-100 aspect-square">
          <img
            src="/assets/images/homeSectionAbout.webp"
            alt="Tefa Bakery"
            class="h-full w-full object-cover rounded-tl-[100px] border-black/80 border-1 shadow-sm shadow-black"
          />
        </div> -->
        <div class="z-9">
          <div class="my-2">
            <h1 class="text-4xl font-bold">Tentang Kami</h1>
            <p class="text-xl font-semibold">Membangun Inovasi Bersama Generasi Muda</p>
          </div>
          <div class="whitespace-break-spaces text-lg my-8 font-semibold flex flex-col gap-y-4">
            <div>
              {{ ParagarphAboutUs }}
            </div>
            <div>
              {{ ParagarphAboutUsSec }}
            </div>
          </div>
          <div class="grid grid-cols-2 font-semibold">
            <p class="flex items-center gap-1">
              <font-awesome-icon icon="check" />Produk Berkualitas
            </p>
            <p class="flex items-center gap-1">
              <font-awesome-icon icon="check" />Inovasi Berbasis Sekolah
            </p>
            <p class="flex items-center gap-1">
              <font-awesome-icon icon="check" />Generasi Siap Kerja
            </p>
            <p class="flex items-center gap-1">
              <font-awesome-icon icon="check" />Berdaya Saing Global
            </p>
          </div>
          <div class="w-full flex items-center py-12">
            <RouterLink
              to="/Profil"
              class="py-2 px-8 bg-accent font-semibold rounded-full border-black/80 border-1 shadow-black/50 shadow-xs hover:bg-amber-400 hover:shadow-sm transition-all duration-300"
              >Pelajari selengkapnya</RouterLink
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Product DOM -->
    <section id="product" class="relative h-screen">
      <div class="absolute z-1">
        <img class="h-screen w-screen object-cover" src="/assets/images/product_back.webp" alt="" />
        <div class="h-full w-full absolute inset-0 bg-black/45"></div>
      </div>

      <div
        class="relative max-h-screen font-quicksand flex flex-col justify-center items-center py-24 z-9"
      >
        <div class="flex flex-col text-center gap-2 text-white">
          <h1 class="text-4xl font-bold">Produk Kami</h1>
          <p class="text-lg font-semibold">
            Beragam pilihan produk terbaik hasil karya inovatif siswa dan tim profesional
          </p>
        </div>
        <div class="flex justify-around gap-18 py-12 px-48">
          <div
            class="h-full w-full border-1 border-black shadow-lg hover:shadow-md hover:shadow-black transition-all duration-300 rounded-lg bg-secondary overflow-hidden"
          >
            <img
              src="/assets/images/dummy_square.webp"
              alt="Produk Unggulan"
              class="h-80 object-cover"
            />
            <div class="flex flex-col px-4 py-6">
              <h4 class="font-semibold text-lg">Lorem Ipsum</h4>
              <p class="ml-2 font-light">Rp.xxx.xxx,xx</p>
            </div>
          </div>
          <div
            class="h-full w-full border-1 border-black shadow-lg hover:shadow-md hover:shadow-black transition-all duration-300 rounded-lg bg-secondary overflow-hidden"
          >
            <img
              src="/assets/images/dummy_square.webp"
              alt="Produk Unggulan"
              class="h-80 object-cover"
            />
            <div class="flex flex-col px-4 py-6">
              <h4 class="font-semibold text-lg">Lorem Ipsum</h4>
              <p class="ml-2 font-light">Rp.xxx.xxx,xx</p>
            </div>
          </div>
          <div
            class="h-full w-full border-1 border-black shadow-lg hover:shadow-md hover:shadow-black transition-all duration-300 rounded-lg bg-secondary overflow-hidden"
          >
            <img
              src="/assets/images/dummy_square.webp"
              alt="Produk Unggulan"
              class="h-80 object-cover"
            />
            <div class="flex flex-col px-4 py-6">
              <h4 class="font-semibold text-lg">Lorem Ipsum</h4>
              <p class="ml-2 font-light">Rp.xxx.xxx,xx</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- contact DOM -->
    <section id="contact">
      <div class="h-full w-full bg-secondary py-24 px-68">
        <div class="flex flex-col justify-center items-center text-center mb-12">
          <h1 class="text-4xl font-bold">Hubungi Kami</h1>
          <p class="text-lg font-semibold">
            Hubungkan diri anda dengan kami untuk konsultasi, pertanyaan,<br />dan kerjasama.
          </p>
        </div>
        <div
          class="flex items-center bg-background rounded-xl justify-arround border-black border-2 gap-8"
        >
          <iframe
            class="h-[450px] w-[350px] object-cover rounded-l-xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3990.610288968335!2d113.7244446750559!3d-8.155312391875203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd695b66f19fbdf%3A0xe4fe4690bfdbc3b5!2sRoti%20SIP%20POLIJE!5e1!3m2!1sid!2sid!4v1761056420667!5m2!1sid!2sid"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            alts="Tefa Bakery Map"
          ></iframe>
          <div class="flex flex-col justify-arround gap-8 py-2">
            <div class="flex flex-col">
              <h1 class="font-bold text-lg">Alamat Lengkap</h1>
              <a class="flex items-center">
                <font-awesome-icon class="mr-1" icon="location-dot" />
                <p class="text-md font-semibold">
                  Jl. Tawang Mangu No.68, Lingkungan Panji, Tegalgede, Kec. Sumbersari
                </p>
              </a>
            </div>
            <div class="border-1"></div>
            <div class="flex flex-col">
              <h1 class="font-bold text-lg">Sosial Media</h1>
              <a class="flex items-center">
                <font-awesome-icon class="mr-1" :icon="['fab', 'instagram']" />
                <p class="text-md font-semibold">@Ttefasippolije</p>
              </a>
              <a class="flex items-center">
                <font-awesome-icon class="mr-1" :icon="['fab', 'facebook']" />
                <p class="text-md font-semibold">TeachingFactory TEFA</p>
              </a>
            </div>
            <div class="border-1"></div>
            <div class="flex flex-col">
              <h1 class="font-bold text-lg">Kontak Resmi</h1>
              <a class="flex items-center" href="">
                <font-awesome-icon class="mr-1" :icon="['fab', 'whatsapp']" />
                <p class="text-md font-semibold">+62-xxxx-xxxx</p>
              </a>
              <a class="flex items-center" href="">
                <font-awesome-icon class="mr-1" icon="envelope" />
                <p class="text-md font-semibold">info@bakery.com</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const heroText = `Selamat Datang di Tefa Bakery\nCofffe & Fish Canning`
const secondaryText =
  'Inovasi Produk Pangan, Roti, Kopi, dan Olahan Ikan untuk Masa Depan yang Berkualitas'
const ParagarphAboutUs = `TEFA Bakery hadir sebagai wadah inovasi dan praktik bisnis berbasis sekolah.\nKami menghadirkan produk berkualitas mulai dari olahan Roti, Kopi, hingga\nolahan ikan yang kami produksi dengan standar terbaik.`
const ParagarphAboutUsSec = `Dengan semangat berkolaborasi dan pengembangan keterampilan,\nkami berkomitmen mencetak generasi yang siap bersaing di dunia industri.`
</script>
