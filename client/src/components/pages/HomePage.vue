<template>
  <div class="font-[quicksand] text-primary">
    <!-- Hero -->
    <section>
      <div
        class="flex items-center justify-center bg-[#FAF9F6] min-h-screen min-w-screen text-start"
      >
        <div class="flex gap-48">
          <div class="flex flex-col max-w-xl gap-6">
            <h1 class="font-bold text-6xl">Tefa Bakery<br />& Coffee</h1>
            <p class="text-justify font-medium">
              Dari Teaching Factory Politeknik Negeri Jember, kami menghadirkan produk bakery dan
              kopi berkualitas tinggi dengan sentuhan cokelat yang menggugah selera
            </p>
            <div class="flex items-center gap-2">
              <RouterLink
                to="/Produk"
                class="border-2 shadow-sm shadow-black/50 border-primary-container bg-primary-container text-on-primary py-2 px-4 rounded-full font-medium text-md hover:bg- hover:text-primary hover:shadow-sm transition-all ease-in-out 0.3s"
              >
                Lihat Produk
              </RouterLink>
              <RouterLink
                to="/Kontak"
                class="border-2 border-primary-container text-primary py-2 px-4 rounded-full font-medium text-md"
              >
                Hubungi Kami
              </RouterLink>
            </div>
          </div>
          <img
            class="w-md h-128 object-cover object-center overflow-hidden rounded-4xl border-primary-border border shadow-md shadow-gray-300"
            src="/assets/images/dummy-image-square.webp"
            alt="hero"
          />
        </div>
      </div>
    </section>

    <section>
      <div class="flex justify-center items-center py-12">
        <img
          class="w-md h-128 object-cover object-center overflow-hidden rounded-4xl border-primary-border border shadow-md shadow-gray-300"
          src="/assets/images/dummy-image-square.webp"
          alt="Information"
        />
        <div>
          <h1 class="text-4xl font-bold">Berinovasi Bersama<br />Generasi</h1>
          <p class="w-md">
            TEFA Bakery hadir sebagi wadah inovasi dan praktik bisnis berbasis sekolah. Kami
            menhadirkan produk berkualitas mulai dari roti, kopi, hingga olahan ikan yang diproduksi
            dengan standar terbaik.
          </p>
          <div class="flex gap-24">
            <div class="flex flex-col">
              <h4>26+</h4>
              <p>Years</p>
            </div>
            <div class="flex flex-col">
              <h4>50+</h4>
              <p>Products</p>
            </div>
            <div class="flex flex-col">
              <h4>1000+</h4>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
