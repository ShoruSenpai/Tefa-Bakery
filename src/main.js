import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './main.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faMagnifyingGlass,
  faPhone,
  faLocationDot,
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(
  faFacebook,
  faWhatsapp,
  faInstagram,
  faMagnifyingGlass,
  faPhone,
  faLocationDot,
  faAngleDown,
)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')

AOS.init()
