import { createApp } from 'vue'
import App from './App.vue'


import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faGithub, faLinkedinIn, faMediumM, faDribbble, faCodepen } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faCalendarDay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTwitter, faGithub, faLinkedinIn, faEnvelope, faMediumM, faDribbble, faCodepen, faCalendarDay)


createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
