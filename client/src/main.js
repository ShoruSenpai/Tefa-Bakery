import { createApp } from 'vue'
import { createPinia } from 'pinia'

// custom css assets
import './components/assets/styles/colors.css'
import './components/assets/styles/animations.css'
import './components/assets/styles/fonts.css'

// tailwind assets
import './components/assets/main.css'

import App from './App.vue'
import router from './router'

// fontawesome assets
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import fontawesome icon libary
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons'

// libary added
library.add(faLocationDot, faInstagram, faFacebook, faTiktok)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
