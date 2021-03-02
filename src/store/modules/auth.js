import { userRegister,getNewToken,userLogin ,getCart, userInfo } from '@/api/user'

const state = {
    token: null,
    refreshToken:null,
    userData:'',
    cartList:null,
    cartLength:null,
    test:'測試'
}

const getters = { 
   isAuthenticated : state => state.token !== null,
   token: state => state.token,
   refreshToken: state => state.refreshToken,
   userData:state => state.userData
}

const actions = { 
    async register ({ commit } , data) {
        try{   
           
           const res = await userRegister(data)
            
           const { token, refreshToken , user } = res.data.result
          
         //   Cookies.set('token', token, { expires: 7 })
         //   Cookies.set('refreshToken', refreshToken, {expires: 30 })
  
           commit('setToken', token)
           commit('setRefreshToken', refreshToken)
           commit('setUserData', user)
  
           alert('註冊成功')
           this.$router.push('/')
           
       }catch(e) {
         const error = e.response.data.msg
          console.log(error)   
          throw error      
       }
     },
     async login ({ commit } , data ) {
        try{   
           const {data: { result }}= await userLogin(data)

           const { token, refreshToken ,user } = result

         //   Cookies.set('token', token, { expires: 7 })
         //   Cookies.set('refreshToken', refreshToken, { expires: 30 })
     
           commit('setToken', token)
           commit('setRefreshToken', refreshToken)
           commit('setUserData', user)
  
           alert('login successfully')
  
           this.$router.push('/')
  
       }catch(err) {
        const error = err.response.data.msg 
         throw error
       }
     },
     async refresh ( { commit } , refresh ) {    
          //get new token (access & refresh)
          try {
            const { data: { result } } = await getNewToken(refresh)
            
            const { token, refreshToken } = result
         
            commit('setToken', token ) 
            commit('setRefreshToken', refreshToken)

          }catch(err) {
             //if refreshToken also expired
             if(err.response.data.status === 401) {
               alert('Please login again!')
               this.$router.push({ path: '/' });
             }
          }
         //  Cookies.set('token',token, { expires: 7 })
         //  Cookies.set('refreshToken', refreshToken, { expires: 7 })

   },
     async logout( { commit } ) {
        commit("clearToken")
      //   Cookies.remove("token")
      //   Cookies.remove("refreshToken")
     },
     async getUserInfo({ commit }) {
        try {
           const { data } = await userInfo()
           commit('setUserData', data )

        }catch(err) {
            console.log(err.response.data.msg)
            const error = err.response.data.msg
            throw error
         }
   },
   async getCartList({ commit }) {
      try {
         const { data: { cartList, count } } = await getCart()
  
         commit('setCart', cartList)
         commit('setCartLength', count)
  
      }catch(err) {
         console.log(err.response.data.msg)
         const error = err.response.data.msg
         throw error
      }
    }
}

const mutations = {
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