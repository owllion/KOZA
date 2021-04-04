<template>
  <div class="row pa-flex">
    <Loading :active.sync="isLoading">
    <fingerprint-spinner :animation-duration="2000" :size="100" color="#22c1c3" />
    </Loading>
   <div class="shipAndPay pa-w-1/2 pa-p-14  md:pa-w-full">
     <div class="container">
       <form>     
       <div class="row">
         <!--shipping-->
         <div class="shipping pa-mb-16 pa-p-6 ">
            <h3 class="pa-font-semibold pa-text-3xl pa-pb-3"><i class="fas fa-address-card pa-mr-2"></i>SHIPPING </h3>
 
            <span class="text-title pa-inline-block pa-font-semibold  pa-p-2 black--text">Name</span>
            <v-text-field
            class="pa-font-bold"
              color="green darken-1"
              label="Name"
              clearable
              :value =$store.state.auth.userData.name
            ></v-text-field>

            <span class="text-title pa-inline-block pa-font-semibold  pa-p-2 black--text">County </span>
            
             <v-select
            color="green darken-1"
            v-model="currCity"
            :items="cityList"
            menu-props="auto"
            label="Select"
            hide-details
            prepend-icon="mdi-map"
            single-line
          ></v-select>

            <span class="text-title pa-inline-block pa-mt-8 pa-font-semibold pa-p-2 black--text"> District </span>
            <v-select
            color="green darken-1"
            v-model="currDistrict"
            :items="dis"
            menu-props="auto"
            label="Select"
            hide-details
            prepend-icon="mdi-map"
            single-line
          ></v-select>
          <span class="text-title pa-inline-block pa-mt-8 pa-font-semibold  pa-p-2 black--text">Address</span>
           <v-text-field
              color="green darken-1 "
              label="Address"
              clearable
              v-model='de_address'
            ></v-text-field> 
            
          <input type="checkbox" checked="checked" class="checkbox pa-mr-3" name="agree" v-model="agree"> 
            <label for="agree" class="pa-font-semibold ">
            Shipping address same as billing
            </label>           
         </div>   
         <!--shipping--> 
       
          <!--  payment -->
          <div class="payment pa-p-6">
          <h3 class="pa-font-semibold pa-text-3xl pa-pb-6 "><i class="fas fa-money-check-alt pa-mr-2"></i>PAYMENT</h3>

          <div class="radio-container pa-mb-10">
          <input type="radio" name='payment' v-model='payment' value='credit'  checked >
          <label for="payment"><span class="pa-inline-block pa-mx-3 pa-font-semibold pa-text-xl">Credit Card</span>
            <img src="@/assets/svg/cards.svg" alt="" class="pa-inline-block pa-w-9 pa-h-9"> </label>
          </div>  
            <Credit/> 
          <div class="radio-container">
          <input type="radio" name='payment' v-model='payment' value='paypal'>
          
          <label for="paypal" class="pa-inline-block pa-ml-3">
            <img src="@/assets/svg/paypal.svg" alt="" class="pa-inline-block pa-w-32 pa-h-32">
            </label>
          </div>
       
          </div>
          <!-- payment -->
       </div>
       </form>
     </div>
   </div>

     <!-- order-preview -->
       <div class="summary pa-w-1/2 ">
         <div class="container pa-w-full pa-py-16 pa-px-16">
           <h2 class="pa-bg-black white--text  pa-p-3 pa-text-xl pa-font-semibold pa-w-full">Order Summary</h2>

           <!-- cart item -->
           <div class="cart-item pa-flex pa-justify-between pa-border-b-2 pa-border-gray-100 pa-border-solid" v-for="(item,i) in order_item" :key='i'>
             <div class="left pa-flex ">
             <div class="pa-w-24 pa-h-24 pa-p-2">
             <img :src="item.image[0]" alt="" class="pa-w-full pa-h-full pa-object-contain">
             </div>

             <div class="pa-p-4">
               <h4 class="pa-font-semibold">{{item.productName}}</h4>
               <span class="pa-block pa-font-semibold">${{item.price}}</span>
               <span class="pa-block pa-font-semibold">x{{item.qty}}</span>
             </div>
            </div>
            <!-- left -->
             <div class="sub pa-flex pa-items-center">
               <span class="pa-pr-6 pa-font-semibold">${{item.price*item.qty}}</span>
             </div>
           </div>
           <!-- cart item -->

           <!-- final price & coupon apply-->
           <div class="coupon pa-relative  pa-flex pa-justify-between pa-p-6 pa-border-b-2 pa-broder-solid pa-border-gray-100">
           
             <input type="text" class="focus:pa-outline-none 
             focus:pa-border-opacity-0 focus:pa-ring-2 focus:pa-ring-blue-300 pa-border-2 pa-border-solid pa-border-gray-200 pa-rounded-lg pa-w-4/5 pa-pl-3" placeholder="Your promo code" v-model="code"><i class="pa-cursor-pointer pa-absolute grey--text fas fa-times" v-if='code' @click='clearDiscount'></i>

             <button class='focus:pa-outline-none pa-rounded-lg pa-bg-blue-200 white--text pa-p-3 pa-font-bold' @click="apply(code,total)">APPLY</button>
           </div>
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
           <div>
             <button class="order-btn pa-p-6 pa-w-full pa-mt-5 pa-inline-block pa-text-center pa-bg-black white--text pa-font-bold pa-tracking-widest" @click="setEl(3)">PLACE ORDER</button>
           </div>
           <!-- final price -->
         </div>
       </div>
     <!-- order-preview -->
  </div>
</template>

<script>
import Credit from '@/components/Credit'
import { mapGetters, mapMutations } from 'vuex'
import { FingerprintSpinner } from 'epic-spinners'
export default {
  components: {
    Credit,
    FingerprintSpinner
  },
   data() {
     return {
       name:'',
       address:'',
       agree:true,
       isLoading :false

     }
   },
   computed: { 
     ...mapGetters('order',['order_item','payment_method','discount_code','discount','delivery_address']),
     de_address: {
       get(){
         return this.delivery_address
       },
       set(value) {
         return this.setAddress(value)
       }
     },
     shipping() {
       const sub = this.$store.state.order.subTotal
      
       let ship = 10
       console.log(sub)

       if(sub >= 100) {
         return ship = 0
       }
       return ship
     },
     code: {
       get(){
         return this.discount_code
       },
       set(value) {
         return this.setCode(value)
       }
     },
     total() {
       if(!this.$store.state.order.discount) {
         return this.shipping + this.$store.state.order.subTotal
       }
       return this.$store.state.order.total_price 
     },
     payment: {
       get() {
         return this.$store.state.order.payment_method
       },
       set(value) {
         return this.setPaymethod(value)
         
       }
     },
     dis() {
       return this.districtList[0].map(dis=> dis.name)
     },
       currCity: {
         get() {
           return this.$store.state.address.currCity
         },
         set(value) {
           this.$store.commit('address/setcurrCity', value)
         }
       },
       currDistrict: {
         get() {
           return this.$store.state.address.currDistrict
         },
         set(value) {
           this.$store.commit('address/setcurrDistrict', value)
         }
       },
       ...mapGetters('address',['cityList','districtList']),
       
   },
   methods: {
     ...mapMutations('order',
     ['setEl','setCode','setPaymethod','setCode','setAddress','setDiscount']),
     apply(code,total) {     
       const payload = { code, totalPrice:total }
       this.$store.dispatch('order/applyCoupon', payload)
     },
     clearDiscount() {
       this.code = ''
       this.setDiscount(null)
     }
   },
   watch: {
     districtList(districts) {
       const [ first ] = districts[0];
       this.currDistrict = first.name
     }
   },
   created() {
     this.clearDiscount()
   } 
}
</script>

<style lang="scss" scoped>
 .container {  
    .fa-times {
      top:43%;
      right: 26%;
    }
    .checkbox {
     appearance: none;
     transition: all .3s ;
     outline: none;
     font-size: 25px;
      font-family: "Font Awesome 5 Free"; 
      &::after {
        content: '\f111'; 
        display: inline-block;
        text-align: center;
        width: 1em;
      }
      &:checked::after {
      font-weight: 900;
      content: '\f058';
      animation: pop .4s 1; 
    }
    @keyframes pop {
       0% {
         transform: scale(1);
       }
       33% {
         transform: scale(0.9);
       }
       66% {
         transform: scale(1.5);
       }
       100% {
         transform:scale(1)
       }
    };
    &:hover {
      transform: scale(1.2);
    }
   }
   .text-title{
      position: relative;
      z-index: 1;
      &::before {
        content: '';
        height:10px;
        width:95% ;
        position: absolute;
        left: 4px;
        bottom:6px;
        z-index: -1;
        background: rgb(245, 202, 29);
   }
   }
   .order-btn {
       position: relative;
       z-index: 1;
       min-width: 210px;
       transition: all .3s ease-in;
       overflow: hidden;
       &::before {
          content: '';
          height:0%;
          width:100%;
          background: rgb(226, 187, 55);
          position: absolute;
          left: 0;
          top: 0;
          z-index: -1;
          transition: .5s;
          border-radius: 0 0 20% 30%;
       }
       &:hover::before {
         height: 180%;
       }
   }  
 }
</style>