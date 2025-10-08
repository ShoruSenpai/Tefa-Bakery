<template>
  <div>
    <section class="relative h-[60vh] overflow-hidden">
      <div>
        <img
          class="h-full w-full object-cover"
          src="/assets/images/hero.png"
          alt="Tefa Bakekry | Tefa SIP"
        />

        <div class="absolute h-full w-full bg-black/50 inset-0"></div>

        <div
          class="absolute inset-0 flex flex-col justify-center items-center text-white font-quicksand text-center text-shadow-black text-shadow-xs"
        >
          <h1 class="text-4xl font-bold">Produk Kami</h1>
        </div>
      </div>
    </section>

    <!-- Produk -->
    <section>
      <div class="min-h-[90vh] w-auto flex flex-col px-8 py-12">
        <!-- Search -->
        <div class="flex justify-end">
          <div
            class="bg-white w-[100vh] shadow-gray-500 shadow-sm rounded-full px-12 py-1 flex items-center justify-between"
          >
            <input
              v-model="searchQuery"
              class="w-full border-none outline-none"
              type="text"
              placeholder="Cari produk roti, kopi, atau lainnya..."
            />
            <font-awesome-icon icon="magnifying-glass" />
          </div>
        </div>

        <div class="flex py-8 gap-12">
          <!-- Sidebar Kategori -->
          <div
            class="bg-white shadow-gray-500 shadow-md rounded-2xl flex flex-col items-center px-6 py-12 space-y-6 font-quicksand font-bold text-xl"
          >
            <button
              v-for="cat in categories"
              :key="cat"
              @click="((selectedCategory = cat), (currentPage = 1))"
              :class="[
                'w-full text-center py-2 transition rounded-lg p-4',
                selectedCategory === cat
                  ? 'bg-primary text-white'
                  : 'hover:bg-primary hover:text-gray-500',
              ]"
            >
              {{ cat }}
            </button>
          </div>
          <!-- Grid Produk -->
          <div class="flex flex-1 flex-col p-12 bg-white shadow-gray-500 shadow-md rounded-2xl">
            <div class="grid grid-cols-3 gap-8" v-if="paginatedProduct.length > 0">
              <div
                v-for="item in paginatedProduct"
                :key="item.id"
                class="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <div class="relative">
                  <img :src="item.image" alt="Product" class="w-full h-32 object-cover" />
                  <div
                    v-if="item.stock === 0"
                    class="absolute h-full w-full indent-0 bg-black/40 flex items-center justify-center font-semibold text-white"
                  >
                    Stok Habis
                  </div>
                </div>
                <div class="p-4 text-center font-quicksand">
                  <h2 class="font-semibold">{{ item.name }}</h2>
                  <p class="text-sm text-gray-500">Rp. {{ item.price.toLocaleString('id-ID') }}</p>
                </div>
              </div>
            </div>
            <!-- kalau kosong -->
            <p v-else class="text-center text-gray-600 font-quicksand py-12">
              Produk tidak ditemukan.
            </p>

            <!-- PAGINATION -->
            <div class="flex justify-center mt-10 gap-2 text-primary font-semibold">
              <button
                v-for="page in totalPages"
                :key="page"
                @click="currentPage = page"
                :class="[
                  'px-3 py-1 rounded-lg transition',
                  currentPage === page ? 'bg-primary text-white' : 'hover:bg-primary/10',
                ]"
              >
                {{ page }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { products } from '@/data/products'

const searchQuery = ref('')
const selectedCategory = ref('All')
const currentPage = ref(1)
const perPage = 6
const categories = computed(() => ['All', ...new Set(products.map((p) => p.category))])

const filteredProducts = computed(() =>
  products.filter((p) => {
    const matchCategory = selectedCategory.value === 'All' || p.category === selectedCategory.value
    const matchSearch = p.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchCategory && matchSearch
  }),
)

const totalPages = computed(() => Math.ceil(filteredProducts.value.length / perPage))
const paginatedProduct = computed(() => {
  const start = (currentPage.value - 1) * perPage
  return filteredProducts.value.slice(start, start + perPage)
})
</script>
