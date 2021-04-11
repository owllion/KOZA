import { userRegister, userLogin } from '@/api/user'
import router from '@/router'
import Cookies from 'js-cookie'
const state = {
    isLoading:false,
    creditStatus:false,
    token: null,
    refreshToken:null,
    userData:'',
    cartList:[],
    cartLength:'',
    favList:[],
    showEmailBox:false,
    avatar64:'',
    userCity:'桃園市',
    userDistrict:'中壢區',
    userAddress:'',
    location:[],
   
}

const getters = { 
   isLoading: state => state.isLoading,
   creditStatus: state => state.creditStatus,
   isAuthenticated : state => state.token !== null,
   token: state => state.token,
   refreshToken: state => state.refreshToken,
   userData:state => state.userData,
   cartList: state => state.cartList,
   couponList: state => state.userData.couponList,
   cartLength: state => state.cartLength,
   favList: state => state.favList,
   showEmailBox: state => state.showEmailBox,
   avatar64: state => state.avatar64,

   userAddress: state => state.userAddress,
   userDistrict: state => state.userDistrict,
   userCity: state => state.userCity,

   cityList: state => state.location.map( item => item.name),
   districtList: state =>state.location.find(item=> item.name === state.currCity)?.districts || []
     
}

const actions = { 
    async signInOrUp ({ commit ,state} , data) {
        try{                  
           const alertText = data.captchaText ? 'logged in!':'registered'
           commit('setLoading', true)
           const res = data.captchaText ? await userLogin(data): await userRegister(data) 
            
           const { token, refreshToken , user } = res.data.result

           const address =user.address
           if(address) {
               const county = address.substring(0,3)
               const district = address.substring(3,6)
               const road = address.substring(6)
               commit('setUserCity', county)
               commit('setUserDistrict', district)
               commit('setUserAddress', road)
           }
           

           Cookies.set('token', token, { expires: 6 })
           Cookies.set('refreshToken', refreshToken, {expires: 29 })
           console.log(Cookies.get('token'))

           commit('setToken', token)
           commit('setRefreshToken', refreshToken)
           commit('setUserData', user)
           commit('setCart',state.userData.cartList)
           commit('setCartLength',state.userData.cartList.length)
           commit('setFavList',state.userData.favList)

           commit('setLoading', false)

           this._vm.$swal({
              imageUrl: "https://upload.cc/i1/2021/04/11/AUwNzI.png",
              title:'Success',
              text:`You have successfully ${alertText}`,
              confirmButtonColor: "#000000",
           })
           router.push('/')
           
       }catch(err) {
           commit('setLoading', false)
           if(err.response) {
            const error = err.response.data.msg        
            throw error   
            //throw "msg" directly ,not the whole 'res.data'. So 'login.vue' should just accept 'err' and use it. There is no need to be like 'const msg =err.response.data.msg', it'll get nothing.    
          }
         
       }
     },
     async logout( { commit } ) {
         commit("clearAll")
         Cookies.remove("token")
         Cookies.remove("refreshToken")
         this._vm.$swal({
            imageUrl:'https://upload.cc/i1/2021/04/11/AUwNzI.png',
            title:'SUCCESS!',
            text:'You have been successfully logged out! ',
            confirmButtonColor: "#000000",
         })
         router.push('/')
     }
}

const mutations = {
      setLocation(state, data) {
         state.location = data
      },
      setLoading(state, data) {
         state.isLoading = data
      },
      setCreditStatus(state, data) {
         state.creditStatus = data
      },
      setUserAddress(state, data) {
         state.userAddress = data
      },
      setUserCity(state, data) {
         state.userCity = data
      },
      setUserDistrict(state, data) {
         state.userDistrict = data
      },
      setAvatar(state, data) {
         state.avatar64 = data
      },
      toggleEmailBox(state, data) {
         state.showEmailBox = data
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
      clearAll(state) {
        state.token = null
        state.cartList = []
        state.cartLength = '' 
        state.favList = []
        state.refreshToken = null
        state.userData = null 
        state.avatar64 = null
        state.userCity = ''
        state.userDistrict = ''
        state.userAddress = '' 
      },
      setCart(state,cart) {
         state.cartList = cart 
      },
      setCartLength(state, length) {
         state.cartLength = length
      },
      setFavList(state, data) {
         state.favList = data
      }
}

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true, 
}