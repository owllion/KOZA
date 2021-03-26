import { getAllProducts } from '@/api/product' 

const state =  {
    products:'',
    keyword: '',
    category: '',
    price: [],
    sort: '',
    showFilter:false,
    origin:''
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
    allItems: state => state.products,
    keyword:  state => state.keyword,
    category: state => state.category,
    price: state => state.price,
    sort: state => state.sort,
    origin: state => state.origin,
   
}

const mutations = {
    clear(state) {
        state.price = [],
        state.category = '',
        state.origin = ''
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
        state.sort = data
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