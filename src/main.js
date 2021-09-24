import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
// Main style
import './style/index.css'
// Axios
import axios from 'axios'
import vueAxios from 'vue-axios'
// Font Awesome
import {
  faArrowRight,
  faArrowLeft,
  faSearch,
  faBookmark,
  faShare,
  faClock,
  faCheck,
  faUserCircle,
  faTrash,
  faBars,
  faTimes
} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// Vue Progress
import 'vue-progress-path/dist/vue-progress-path.css'
import VueProgress from 'vue-progress-path'

library.add(
  faArrowRight,
  faArrowLeft,
  faSearch,
  faBookmark,
  faShare,
  faClock,
  faCheck,
  faUserCircle,
  faTrash,
  faBars,
  faTimes
)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(vueAxios, axios)
Vue.use(VueProgress, {
  // defaultShape: 'circle',
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  mounted() {
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app')
