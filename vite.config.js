import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

const ngrokServer = 'd061f3e5cdad.ngrok-free.app'

// https://vite.dev/config/
export default defineConfig({
  base: '/Tefa-Bakery',
  plugins: [vue(), vueDevTools(), tailwindcss()],
  server: {
    host: true,
    allowedHosts: [ngrokServer],
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
