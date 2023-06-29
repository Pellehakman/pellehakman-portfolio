import './assets/index.css'
import { MotionPlugin } from '@vueuse/motion'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {
  faUserSecret,
  faChevronDown,
  faBars,
  faXmark,
  faMagnifyingGlass,
  faGear,
  faBowlFood,
  faStar,
  faUser,
  faAnglesUp,
  faRightLong
} from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(
  faUserSecret,
  faChevronDown,
  faBars,
  faXmark,
  faTwitter,
  faFacebookSquare,
  faInstagram,
  faMagnifyingGlass,
  faGear,
  faBowlFood,
  faStar,
  faUser,
  faAnglesUp,
  faRightLong
)
const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

app.use(createPinia())
app.use(router)
app.use(MotionPlugin)
app.mount('#app')
