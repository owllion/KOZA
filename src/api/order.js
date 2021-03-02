import instance from './axios'

class orderApi {
    //create order 
    static createOrder = data => instance.post('/create_order', data)

    //modify order 
    static orderModify = data => instance.patch('/user/order/modify', data)

    //get order list 
    static getOrder = () => instance.get('/user/orderList')

    //cancel order(change order status)
    static cancelOrder = data => instance.post('/order/cancel', data)
}

export default orderApi