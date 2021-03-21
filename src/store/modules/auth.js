import { userRegister, userLogin } from '@/api/user'
import router from '@/router'
import Cookies from 'js-cookie'
const state = {
    token: null,
    refreshToken:null,
    userData:'',
    cartList:[],
    cartLength:'',
    login:'',
}

const getters = { 
   isAuthenticated : state => state.token !== null,
   token: state => state.token,
   refreshToken: state => state.refreshToken,
   userData:state => state.userData,
   cartList: state => state.cartList,
   cartLength: state => state.cartLength
}

const actions = { 
    async signInOrUp ({ commit } , data) {
        try{                  
           const alertText = data.captchaText ? 'logged in!':'registered'

           const res = data.captchaText ? await userLogin(data): await userRegister(data) 
            
           const { token, refreshToken , user } = res.data.result
          
           Cookies.set('token', token, { expires: 7 })
           Cookies.set('refreshToken', refreshToken, {expires: 30 })
  
           commit('setToken', token)
           commit('setRefreshToken', refreshToken)
           commit('setUserData', user)
          
           this._vm.$swal({
              icon:'success',
              title:'Success',
              text:`You have successfully ${alertText}`
           })
           router.push('/')
           
       }catch(err) {
           if(err.response) {
            const error = err.response.data.msg        
            throw error   
            //throw "msg" directly ,not the whole 'res.data'. So 'login.vue' should just accept 'err' and use it. There is no need to be like 'const msg =err.response.data.msg', it'll get nothing.    
          }
         
       }
     },
     async logout( { commit } ) {
        commit("clearToken")
         Cookies.remove("token")
         Cookies.remove("refreshToken")
     }
}

const mutations = {
      loginOrReg(state,data) {
         state.login = data
      },
      setToken(state,token) { 
        state.token = token      
      },
      setRefreshToken(state, refreshToken) {
        state.refreshToken = refreshToken
      },
      setUserData(state, userData) {
        state.userData = userData
      },
      clearToken(state) {
        state.token = null;
      },
      setCart(state,cart) {
         state.cartList = cart 
      },
      setCartLength(state, length) {
         state.cartLength = length
      }
}

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true, 
}