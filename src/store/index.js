import Vue from 'vue'
import Vuex from 'vuex'

import VuexPersist from 'vuex-persist'
import auth from './modules/auth'
import product from './modules/product'
import address from './modules/address'
import order from './modules/order'

Vue.use(Vuex)

const vuexLocalStorage = new VuexPersist({
  storage: window.localStorage, 
})

const store = new Vuex.Store({
    modules: {
      auth,
      product,
      address,
      order,
    },
    plugins: [vuexLocalStorage.plugin]
 })
 export default store

 

  
