import { getAllProducts } from '@/api/product' 
import { updateQty , deleteItemInCart , addToFav, addToCart ,clearCart} from '@/api/user' 
import { removeFromFav } from '../../api/user'


const state =  {
    products:'',
    keyword: '',
    category: '',
    price: [],
    sortVal: '',
    showFilter:false,
    origin:'',
}
const getters = {
    allItems: state => state.products,
    keyword:  state => state.keyword,
    category: state => state.category,
    price: state => state.price,
    sortVal: state => state.sortVal,
    origin: state => state.origin,
   
}
const actions = {
    async getAllItems( { commit } ) {
        try {
            const { data: { allProduct } } = await getAllProducts();
            
            commit('setAllProducts', allProduct )
        }catch(err) {
            if(err.response) {
                const error = err.response.data.message
                this._vm.$swal({
                  icon:'error',
                  title:"Something wrong!",
                  text:error
             })
        }
    }
  },
    async addActions({commit}, value) {
        try {
            commit('auth/setLoading', true, { root:true })
            const { data: { cartList } } = await addToCart(value)
            console.log(value)
            console.log(cartList)
             commit('auth/setCart', cartList, { root: true })
            // commit('auth/setCartLength', cartList.length, { root: true })
             commit('auth/setLoading', false, { root:true })
            this._vm.$toast.open({
                message: 'ADD TO CART!',
                type:'success',
                pauseOnHover:true,
                duration:2000             
                }); 
        }catch(err) {
            commit('auth/setLoading', false, { root:true })
            if(err.response) {
              const error = err.response.data.msg
              this._vm.$swal({
                icon:'warning',
                title:"Oops",
                text:error
              })
       }
        }
    },
    async addToFavActions({commit},value) {
        try {
            const { data: { favList } } = await addToFav(value)
            commit('auth/setFavList', favList , { root:true })
        }catch(err) {
            if(err.response) {
              const error = err.response.data.message
              this._vm.$swal({
                icon:'error',
                title:"Something wrong!",
                text:error
              })
       }
        }
    },
    async removeFromFav({commit}, value) {
        try {
            const { data: { favList } } = await removeFromFav(value)
            commit('auth/setFavList', favList , { root:true })
        }catch(err) {
            if(err.response) {
                const error = err.response.data.message
              this._vm.$swal({
                icon:'error',
                title:"Something wrong!",
                text:error
              })
       }
        }
    },
    async clearActions({commit}) {
        try {
            await clearCart()
            commit('auth/setCart', [], { root: true })
            commit('auth/setCartLength', 0, { root: true })
        }catch(err) {
            if(err.response) {
                const error = err.response.data.message
              this._vm.$swal({
                icon:'error',
                title:"Something wrong!",
                text:error
              })
       }
        }
    },
    async adjustQty({ commit }, value) {
        try {
            commit('auth/setLoading',true, { root : true })        
            const {data: { cartList } } = await updateQty(value)
            commit('auth/setCart', cartList, { root: true })
            commit('auth/setLoading',false, { root : true }) 
           } catch(err) {
            commit('auth/setLoading',false, { root : true }) 
             if(err.response) {
                 const error = err.response.data.message
               this._vm.$swal({
                 icon:'error',
                 title:"Something wrong!",
                 text:error
               })
        }
    }
},
    async deleteItemActions({ commit },value) {
        try {
            const { data: { cartList } } = await deleteItemInCart(value)
            commit('auth/setCart', cartList, { root: true })
            commit('auth/setCartLength', cartList.length, { root: true })
             
        }catch(err) {
            if(err.response) {
                const error = err.response.data.message
                this._vm.$swal({
                  icon:'error',
                  title:"Something wrong!",
                  text:error
              })
            }
        }
    },
}

const mutations = {
    clear(state) {
        state.price = [],
        state.category = '',
        state.origin = '',
        state.keyword = ''
    },  
    closeFilter(state) {
        state.showFilter = false
    },
    setAllProducts(state, data) {
        state.products = data
    },
    setKeyword(state, data) {
        state.keyword = data
    },
    setCategory(state, data) {
        state.category = data
    },
    setPrice(state, data) {
       state.price = data
    },
    setSortType(state, data) {
        state.sortVal = data
    },
    setOrigin(state, data) {
        state.origin = data
    },
    setShowFilter(state, data) {
        state.showFilter = data
    }
}


export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true, 
}