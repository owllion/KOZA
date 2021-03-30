const state = {
    order_item:[],
    subtotal:null,//without shipping
    delivery_address:'',
    discount:null,
    discount_code:'',
    total_price:null, //final,includes shipping
    payment_method:''
}

const getters  =  {
    order_item : state=> state.order_item,
    subtotal: state=> state.subtotal,
    address: state => state.delivery_address,
    discountPercent: state => state.discount,
    discount_code: state => state.discount_code,
    total_price: state => state.total_price,
    payment_method: state => state. payment_method
}
const mutations = {
    setCheckedItem(state,value) {
        console.log(`setitem的值-->${value}`)
        state.order_item = value
    }
}
const actions =  {

}

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true, 
}