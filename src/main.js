import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './main.css'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import icons and add them to the Library */
import { faUserSecret, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'
library.add(faFacebook, faWhatsapp, faInstagram, faMagnifyingGlass)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
