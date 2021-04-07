import instance from './axios'
    //create order 
     export const createOrder = data => instance.post('/create_order', data)

    //modify order 
    export const orderModify = data => instance.patch('/user/order/modify', data)

    //get order list 
    export const getOrder = () => instance.get('/user/orderList')

    //cancel order(change order status)
    export const cancelOrder = data => instance.post('/order/cancel', data)