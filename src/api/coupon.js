import instance from './axios'
    //apply coupon code
    export const applyCode = data => instance.post('/applycoupon', data) 

    //redeem coupon
    export const redeemCoupon =  data =>
    instance.post('/coupon/redeem', data)

    // get user's couponList
    export const getUserCouponList = () =>
    instance.get('/user/couponList')
    export const init = () => instance.get('/test')
