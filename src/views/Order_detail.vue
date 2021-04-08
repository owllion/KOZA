<template>
  <section class="pa-my-36">
      <Loading :active.sync="isLoading">
    <fingerprint-spinner :animation-duration="2000" :size="100" color="#22c1c3" />
    </Loading>
    <div class="pa-flex  pa-justify-center pa-items-center">
     <h2 class="pa-inline-block pa-text-7xl pa-font-semibol">Purchase Order</h2>
     </div>

    <div class="pa-flex pa-justify-center pa-items-center">

  <!-- left -->
     <div>

    <!-- number-->
    <div>
    <h3 class="pa-inline-block pa-text-2xl pa-font-semibold pa-bg-pink-300 pa-mr-5">Order Number</h3>
    <span class="pa-inline-block pa-text-2xl pa-font-semibold">12399987456</span>
    </div>
    <!-- number-->

    <!-- payment -->    
    <div>
      <h3 class="pa-inline-block pa-mr-6">Payment Method</h3>
      <span>paypal</span>
    </div>
    <!-- payment -->
     <!-- address -->
     <h3>Shipping Address</h3>
     <span>usa,africa.dadadaerfoji</span>
    <!-- address -->


    </div>
    <!-- left -->


    <!-- information -->
    
      <h3 class="pa-inline-block pa-text-2xl pa-font-semibold pa-bg-pink-300 pa-mr-5">Items</h3>
       <div class="summary pa-w-1/2 lg:pa-w-full">
         <div class="container pa-w-full pa-py-5 pa-px-5 xs:pa-p-2">
           <h2 class="pa-bg-black white--text  pa-p-3 pa-text-xl pa-font-semibold pa-w-full">Order Summary</h2>

           <!-- cart item -->
           <div class="cart-item pa-flex pa-justify-between pa-border-b-2 pa-border-gray-100 pa-border-solid" v-for="(item,i) in order_item" :key='i'>
             <div class="left pa-flex ">
             <div class="pa-w-20 pa-h-24 pa-p-2">
             <router-link :to="`/item/${item.productId}`" class="pa-w-full pa-h-full">
             <img :src="item.image[0]" alt="" class="pa-w-full pa-h-full pa-object-contain">
             </router-link>
             </div>

             <div class="pa-p-4">
               <h4 class="pa-font-semibold">{{item.productName}}</h4>
               <span class="pa-block pa-font-semibold">${{item.price}}</span>
               <span class="pa-block pa-font-semibold">x{{item.qty}}</span>
             </div>
            </div>
            <!-- left -->
             <div class="sub pa-flex pa-items-center">
               <span class="pa-pr-6 pa-font-semibold">${{Math.floor(item.price*item.qty)}}</span>
             </div>
           </div>
           <!-- cart item -->

           <!-- final price -->
           <div class="subtotal pa-flex pa-justify-between pa-p-6">
             <h4 class="pa-font-semibold">SUBTOTAL</h4>
             <span class="pa-font-semibold">
               ${{$store.state.order.subTotal}}</span>
           </div>
           <div class="count-shipping pa-flex pa-justify-between pa-p-6">
             <h4 class="pa-font-semibold">SHIPPING</h4>
             <span class="pa-font-semibold">${{shipping}}</span>
           </div>
           <div class="discount pa-flex pa-justify-between pa-p-6 " v-if="discount">
             <h4 class="pa-font-semibold">DISCOUNT</h4>
             <span class="pa-font-semibold">${{discount}}</span>
           </div>
           <div class="total pa-flex pa-justify-between pa-p-6 pa-border-b-2 pa-border-solid pa-border-gray-100">
             <h4 class="pa-font-bold">TOTAL</h4>
             <span class="red--text pa-font-bold">${{total}}</span>
        </div>
      </div>
    </div>         
    <!-- information -->

    </div>
  </section>
</template>

<script>
import { FingerprintSpinner } from 'epic-spinners'
export default {
    components: {
        FingerprintSpinner
    },
    data() {
        return {
            isLoading:false,
            orderId:'',
            orderDetail:[]
        }
    },
   async created() {
    //   this.orderId = this.$route.params.id
    //   try {
    //     this.isLoading = true
    //     const payload = { ordertId : this.orderId }
    //     const { data:{ orderDetail } } = await getOrder(payload) 
    //     this.orderDetail = orderDetail
    //     this.isLoading = false
    //   }catch(err) {
    //     this.isLoading = false
    //     if(err.response) {
    //       const error = err.response.data.msg
    //       this.$swal({
    //         icon:'error',
    //         title:'Oh No!',
    //         text:error
    //       })
    //     }
    //   }
      
    }
}
</script>

<style lang="scss" scoped>
h2 {
  font-family: 'Caesar Dressing', cursive;
}


</style>