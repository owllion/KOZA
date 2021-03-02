import instance from './axios'

class CouponApi {
    //apply coupon code
    static applyCode = data => instance.post('/applycoupon', data) 

    //redeem coupon
    static redeemCoupon =  data =>
    instance.post('/coupon/redeem', data)

    // get user's couponList
    static getUserCouponList = () =>
    instance.get('/user/couponList')
}

export default CouponApi