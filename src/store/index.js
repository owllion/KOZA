import Vue from 'vue'
import Vuex from 'vuex'

import VuexPersist from 'vuex-persist'
import auth from './modules/auth'

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
      auth
    },
    state: {
      snackbar:{
        text:'',
        show:false,
        color:''
      }
    },
    getters: {
      snackbar: state => state.snackbar
    },
    actions: {
      async SnackbarTrigger({commit}, value) {
        commit('setSnackbar', value)
      },
    },
    mutations: {
      setSnackbar(state, value) {
        state.snackbar = value;
      }
    },
    strict: true,
    plugins: [vuexLocalStorage.plugin]
 })
 export default store

 

  
