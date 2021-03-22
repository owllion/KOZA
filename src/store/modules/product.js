import { getAllProducts } from '@/api/product' 

const state =  {
    products:'',
}

const actions = {
    async getAllItems( { commit } ) {
        try {
            const { data: { allProduct } } = await getAllProducts();
            
            commit('setAllProducts', allProduct )
        }catch(err) {
            if(err.response) {
                this._vm.$swal({
                   icon:'error',
                   title:'Oops',
                   text:'Something wrong!'
                })
            }
        }
    }
}

const getters = {
    allItems: state => state.products
}

const mutations = {
    setAllProducts(state, data) {
        state.products = data
    }
}


export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true, 
}