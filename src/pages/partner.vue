<template>
  <div>
    <section>
      <img
        class="h-screen w-screen object-cover object-[50%-30%]"
        src="/assets/images/hero.png"
        alt="Tefa Bakery | Tefa SIP"
      />

      <div class="absolute bg-black/50 inset-0"></div>

      <div class="absolute h-full w-full inset-0 flex justify-center px-12">
        <div class="relative flex flex-col justify-center">
          <h1 class="font-quicksand font-bold text-white text-4xl text-end">
            Bergabunglah menjadi<br />Mitra kami
          </h1>
          <div class="w-full flex justify-start gap-4">
            <a
              class="bg-secondary rounded-full border-1 py-1 px-8 shadow-sm shadow-black"
              href="https://www.whatsapp.com/"
              >Form</a
            >
            <RouterLink
              to="/Kontak"
              class="bg-secondary rounded-full border-1 py-1 px-8 shadow-sm shadow-black"
              >Kontak</RouterLink
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
