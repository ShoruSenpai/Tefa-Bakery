import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './main.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faUserSecret,
  faMagnifyingGlass,
  faPhone,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebook, faWhatsapp, faInstagram, faMagnifyingGlass, faPhone, faLocationDot)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')

AOS.init()
