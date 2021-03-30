import Vue from 'vue'
import Vuex from 'vuex'

import VuexPersist from 'vuex-persist'
import auth from './modules/auth'
import product from './modules/product'
import address from './modules/address'
import order from './modules/order'

Vue.use(Vuex)
//Vue.use(VueAxios, axios)
//Vue.use(Cookies)
//import axios from 'axios'
//import VueAxios from 'vue-axios'
//import Cookies from 'js-cookie'
const vuexLocalStorage = new VuexPersist({
  storage: window.localStorage, 
})

const store = new Vuex.Store({
    modules: {
      auth,
      product,
      address,
      order
    },
    plugins: [vuexLocalStorage.plugin]
 })
 export default store

 

  
