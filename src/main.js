import { createApp } from 'vue'
import App from './App.vue'
import AppRouter from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faCircleArrowRight, faBars, faServer, faGlobe, faFileLines, faMicrochip, faWindowMaximize, faMinus } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret,faCircleArrowRight,faBars,faServer,faGlobe,faFileLines,faMicrochip,faWindowMaximize,faMinus)



createApp(App).use(AppRouter).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
