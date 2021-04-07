import { applyCode } from '@/api/coupon'
import { createOrder } from '@/api/order'
const state = {
    el:1,
    order_item:[],
    subTotal:null,//without shipping
    delivery_address:[],
    discount:null,
    discount_code:'',
    total_price:null, //final,includes shipping
    payment_method:'',
    orderList:[]
}

const getters  =  {
    el: state=> state.el,
    order_item : state=> state.order_item,
    subTotal: state=> state.subtotal,
    delivery_address: state => state.delivery_address,
    discount: state => state.discount,
    discount_code: state => state.discount_code,
    total_price: state => state.total_price,
    payment_method: state => state.payment_method,
    orderList: state => state.orderList
}
const mutations = {
    setCheckedItem(state,value) {
        state.order_item = value
    },
    setEl(state,value) {
        state.el = value
    },
    setSubTotal(state,value) {
        state.subTotal = value
    },
    setPaymethod(state, value) {
        state.payment_method = value
    },
    setCode(state, value) {
        state.discount_code = value
    },
    setTotalPrice(state, value) {
        state.total_price = value
    },
    setDiscount(state, value) {
        state.discount = value
    },
    setAddress(state, value) {
        state.delivery_address = value
    },
    setOrderList(state, value) {
        state.orderList = value
    }
}
const actions =  {
    async applyCoupon({commit},value) {
        try {          
            const { data: { result: {final, discount} } } = await applyCode(value)
             commit('setTotalPrice',final)
             commit('setDiscount',discount)    
        }catch(err) {
            if(err.response) {
                const error = err.response.data.msg
                console.log(error)
                this._vm.$swal({
                    icon:'error',
                    title:'Oops!',
                    text:error
                })
            }
        }
     

    },
    async placeOrderAction({commit}, value) {
        try {        
            const { data: { cartList, user, order } } = await createOrder(value)

            commit('auth/setCart', cartList , { root:true })
            commit('auth/setCartLength', cartList.length , { root:true })
            commit('auth/setUserData', user , { root:true })
            commit('setOrderList', order )
           
            this._vm.$swal({
                icon:'success',
                title:'Yeah!',
                text:'Successfully place an order'
            })
            commit('setEl',3)
        }catch(err) {
            if(err.response){
                const error = err.response.data.msg
                this._vm.$swal({
                    icon:"error",
                    title:'Oops!',
                    text:error
                })
            }
        }
      
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true, 
}