import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'
import lottie from 'lottie-web'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import './assets/tailwind.css'
import '@/assets/global.css'


Vue.use(VueAxios, axios)
Vue.use(Loading,{
  canCancel: false,
  width: 100,
  height: 100,
  backgroundColor: '#FFD485',
  isFullPage: true,
  opacity: 0.7
})

Vue.component("Loading" , Loading)

Vue.config.productionTip = false
Vue.prototype.$lottie =lottie
Vue.prototype.$axios = axios


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
