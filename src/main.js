import { createApp } from 'vue'
import App from './App.vue'


import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedinIn, faMediumM, faFlickr } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faCalendarDay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGithub, faLinkedinIn, faEnvelope, faMediumM, faFlickr, faCalendarDay)


createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
