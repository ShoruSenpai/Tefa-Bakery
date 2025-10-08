<template>
  <div class="min-h-screen flex justify-center items-center">
    <RouterLink
      to="/view"
      class="py-4 px-8 bg-gray-600 text-white font-black rounded-4xl border-2 border-black shadow-lg shadow-black hover:bg-gray-500"
      >START</RouterLink
    >
  </div>
</template>

<template>
  <div class="min-h-screen flex justify-center items-center">
    <p class="transition-all duration-500 text-2xl text-white text-shadow-blue-500 text-shadow-lg">
      {{ visibleLyrics }}
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const lyrics = [
  { text: 'But I see her...', delay: 1250 },
  { text: 'in the back on my mind.', delay: 450 },
  { text: 'All the time...', delay: 4300 },
  { text: 'Feels like a fever,', delay: 1200 },
  { text: 'like im burning alive,', delay: 500 },
  { text: 'Like a sign...', delay: 1300 },
  { text: '.........', delay: 500 },
]

const visibleLyrics = ref('')
let currentLine = 0

function startLyrics() {
  if (currentLine >= lyrics.length) return

  const line = lyrics[currentLine].text
  visibleLyrics.value = ''
  let i = 0

  const typing = setInterval(() => {
    visibleLyrics.value += line[i]
    i++

    if (i >= line.length) {
      clearInterval(typing)
      setTimeout(() => {
        currentLine++
        startLyrics()
      }, lyrics[currentLine].delay)
    }
  }, 140)
}

onMounted(() => {
  setTimeout(() => {
    startLyrics()
  }, 500)
})
</script>
