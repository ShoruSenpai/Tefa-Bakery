<template>
  <div class="font-[quicksand] text-primary">
    <!-- Hero -->
    <section>
      <div
        class="flex items-center justify-center bg-[#FAF9F6] min-h-screen min-w-screen text-start"
      >
        <div class="flex gap-48">
          <div class="flex flex-col max-w-xl gap-8">
            <div class="flex flex-col gap-6">
              <h1 class="font-semibold text-7xl">Tefa Bakery<br />& Coffee</h1>
              <p class="font-medium text-left text-md">
                Dari Teaching Factory Politeknik Negeri Jember, kami menghadirkan produk bakery dan
                kopi berkualitas tinggi dengan sentuhan cokelat yang menggugah selera
              </p>
            </div>
            <div class="flex justify-start items-center gap-4">
              <RouterLink
                to="/Produk"
                class="border-2 border-primary-container bg-primary-container text-on-primary py-2 px-4 rounded-full font-medium text-md shadow-sm shadow-black/30 hover:bg-primary hover:border-primary hover:text-on-primary hover:shadow-md hover:shadow-black/40 transition-all duration-300"
              >
                Lihat Produk
              </RouterLink>
              <RouterLink
                to="/Kontak"
                class="border-2 border-primary-container text-primary py-2 px-4 rounded-full font-medium text-md hover:bg-primary-container hover:text-on-primary hover:shadow-md hover:shadow-black/30 transition-all duration-300"
              >
                Hubungi Kami
              </RouterLink>
            </div>
          </div>
          <img
            class="w-md h-128 object-cover object-[30%] brightness-80 overflow-hidden rounded-4xl border-primary-border border shadow-banner"
            src="/assets/images/hero-banner.webp"
            alt="hero"
          />
        </div>
      </div>
    </section>

    <section>
      <div class="flex justify-center items-center py-12 gap-16 mt-24 mb-24">
        <img
          class="w-md h-128 object-cover object-[37%] overflow-hidden rounded-4xl border-primary-border border shadow-banner"
          src="/assets/images/section-banner.webp"
          alt="Information"
        />
        <div class="flex flex-col gap-12">
          <div class="flex flex-col gap-6">
            <h1 class="text-6xl font-semibold">Berinovasi Bersama<br />Generasi</h1>
            <p class="w-xl font-medium">
              TEFA Bakery hadir sebagi wadah inovasi dan praktik bisnis berbasis sekolah. Kami
              menhadirkan produk berkualitas mulai dari roti, kopi, hingga olahan ikan yang
              diproduksi dengan standar terbaik.
            </p>
          </div>
          <div class="flex items-center justify-center gap-24 font-medium">
            <div class="flex flex-col items-center justify-center">
              <h4 class="text-2xl">26+</h4>
              <p class="text-sm">Years</p>
            </div>
            <div class="flex flex-col items-center justify-center">
              <h4 class="text-2xl">50+</h4>
              <p class="text-sm">Products</p>
            </div>
            <div class="flex flex-col items-center justify-center">
              <h4 class="text-2xl">1000+</h4>
              <p class="text-sm">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="flex flex-col gap-6 py-24">
        <div class="flex flex-col gap-2 items-center justify-center">
          <h1 class="text-5xl font-semibold">Produk Unggulan</h1>
          <p class="text-md font-medium">
            Jelajahi Kategori produk kami yang dibuat fresh setiap hari dengan bahan-bahan
            berkualitas terbaik.
          </p>
        </div>
        <div class="flex items-center justify-center gap-6 py-12">
          <!-- card -->
          <div
            class="bg-on-primary rounded-2xl shadow-smooth transition duration-300 ease-out hover:-translate-y-1 hover:shadow-banner"
          >
            <!-- image -->
            <div class="w-96 aspect-square overflow-hidden rounded-t-2xl">
              <img
                class="h-full w-full object-cover transition duration-500 hover:scale-105"
                src="/assets/images/roti-boy.webp"
                alt="produk"
              />
            </div>
            <!-- product info & price -->
            <div class="flex flex-col px-4 py-8 gap-2">
              <div class="flex flex-col">
                <h4 class="text-lg font-semibold">Lorem Ipsum Dolor</h4>
                <p class="text-sm font-medium">Dolor Ipdum Dolor Sit Amet</p>
              </div>
              <div class="flex justify-between">
                <h4 class="text-xl font-medium">Rp.xxx.xxx,xx</h4>
                <div
                  class="flex justify-between items-center bg-primary-container py-1 px-2 rounded-full gap-2"
                >
                  <font-awesome-icon class="fa-xs text-on-primary" icon="eye" />
                  <h6 class="text-on-primary text-sm">Preview</h6>
                </div>
              </div>
            </div>
          </div>
          <!-- card -->
          <div
            class="bg-on-primary rounded-2xl shadow-smooth transition duration-300 ease-out hover:-translate-y-1 hover:shadow-banner"
          >
            <!-- image -->
            <div class="w-96 aspect-square overflow-hidden rounded-t-2xl">
              <img
                class="h-full w-full object-cover transition duration-500 hover:scale-105"
                src="/assets/images/roti-boy.webp"
                alt="produk"
              />
            </div>
            <!-- product info & price -->
            <div class="flex flex-col px-4 py-8 gap-2">
              <div class="flex flex-col">
                <h4 class="text-lg font-semibold">Lorem Ipsum Dolor</h4>
                <p class="text-sm font-medium">Dolor Ipdum Dolor Sit Amet</p>
              </div>
              <div class="flex justify-between">
                <h4 class="text-xl font-medium">Rp.xxx.xxx,xx</h4>
                <div
                  class="flex justify-between items-center bg-primary-container py-1 px-2 rounded-full gap-2"
                >
                  <font-awesome-icon class="fa-xs text-on-primary" icon="eye" />
                  <h6 class="text-on-primary text-sm">Preview</h6>
                </div>
              </div>
            </div>
          </div>
          <!-- card -->
          <div
            class="bg-on-primary rounded-2xl shadow-smooth transition duration-300 ease-out hover:-translate-y-1 hover:shadow-banner"
          >
            <!-- image -->
            <div class="w-96 aspect-square overflow-hidden rounded-t-2xl">
              <img
                class="h-full w-full object-cover transition duration-500 hover:scale-105"
                src="/assets/images/roti-boy.webp"
                alt="produk"
              />
            </div>
            <!-- product info & price -->
            <div class="flex flex-col px-4 py-8 gap-2">
              <div class="flex flex-col">
                <h4 class="text-lg font-semibold">Lorem Ipsum Dolor</h4>
                <p class="text-sm font-medium">Dolor Ipdum Dolor Sit Amet</p>
              </div>
              <div class="flex justify-between">
                <h4 class="text-xl font-medium">Rp.xxx.xxx,xx</h4>
                <div
                  class="flex justify-between items-center bg-primary-container py-1 px-2 rounded-full gap-2"
                >
                  <font-awesome-icon class="fa-xs text-on-primary" icon="eye" />
                  <h6 class="text-on-primary text-sm">Preview</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="flex flex-col py-24 gap-12 bg-[#FAF9F6]">
        <h1 class="font-semibold text-5xl text-center">Kepuasan Pelanggan</h1>
        <div class="flex gap-12 items-center justify-center">
          <!-- card -->
          <div class="flex flex-col gap-4 bg-[#F5E6D3] p-12 rounded-2xl shadow-smooth">
            <!-- stars & comment -->
            <div class="flex flex-col gap-2">
              <!-- stars -->
              <div class="flex">
                <font-awesome-icon class="fa-xs text-star" icon="star" />
                <font-awesome-icon class="fa-xs text-star" icon="star" />
                <font-awesome-icon class="fa-xs text-star" icon="star" />
                <font-awesome-icon class="fa-xs text-star" icon="star" />
                <font-awesome-icon class="fa-xs text-star" icon="star" />
              </div>
              <!-- comment -->
              <p class="w-2xs italic">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua."
              </p>
            </div>
            <!-- line break -->
            <div class="w-full bg-black/60 h-px"></div>
            <!-- customer nickname -->
            <div class="flex flex-col gap-1">
              <!-- nickname -->
              <h1 class="font-semibold text-lg">Lorem Ipsum</h1>
              <!-- status -->
              <p class="text-md">Customer</p>
            </div>
          </div>
          <!-- card -->
          <div class="flex flex-col gap-4 bg-[#F5E6D3] p-12 rounded-2xl shadow-smooth">
            <!-- stars & comment -->
            <div class="flex flex-col gap-2">
              <!-- stars -->
              <div class="flex">
                <font-awesome-icon class="fa-xs text-star" icon="star" />
                <font-awesome-icon class="fa-xs text-star" icon="star" />
                <font-awesome-icon class="fa-xs text-star" icon="star" />
                <font-awesome-icon class="fa-xs text-star" icon="star" />
                <font-awesome-icon class="fa-xs text-star" icon="star" />
              </div>
              <!-- comment -->
              <p class="w-2xs italic">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua."
              </p>
            </div>
            <!-- line break -->
            <div class="w-full bg-black/60 h-px"></div>
            <!-- customer nickname -->
            <div class="flex flex-col gap-1">
              <!-- nickname -->
              <h1 class="font-semibold text-lg">Lorem Ipsum</h1>
              <!-- status -->
              <p class="text-md">Customer</p>
            </div>
          </div>
          <!-- card -->
          <div class="flex flex-col gap-4 bg-[#F5E6D3] p-12 rounded-2xl shadow-smooth">
            <!-- stars & comment -->
            <div class="flex flex-col gap-2">
              <!-- stars -->
              <div class="flex">
                <font-awesome-icon class="fa-xs text-star" icon="star" />
                <font-awesome-icon class="fa-xs text-star" icon="star" />
                <font-awesome-icon class="fa-xs text-star" icon="star" />
                <font-awesome-icon class="fa-xs text-star" icon="star" />
                <font-awesome-icon class="fa-xs text-star" icon="star" />
              </div>
              <!-- comment -->
              <p class="w-2xs italic">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua."
              </p>
            </div>
            <!-- line break -->
            <div class="w-full bg-black/60 h-px"></div>
            <!-- customer nickname -->
            <div class="flex flex-col gap-1">
              <!-- nickname -->
              <h1 class="font-semibold text-lg">Lorem Ipsum</h1>
              <!-- status -->
              <p class="text-md">Customer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
