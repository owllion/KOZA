<template>
  <div class="row pa-flex lg:pa-flex-col">
   <div class="shipAndPay pa-w-1/2 pa-p-14  md:pa-w-full xs:pa-px-5 xxs:pa-p-2">
     <div class="container">
       <form>     
       <div class="row">
         <!--shipping-->
         <div class="shipping pa-mb-16 pa-p-6 xs:pa-p-1">
            <h3 class="pa-font-semibold pa-text-3xl pa-pb-3"><i class="fas fa-address-card pa-mr-2"></i>SHIPPING </h3>
 
            <span class="text-title pa-inline-block pa-font-semibold  pa-p-2 black--text">Name</span>
            <v-text-field
              class="pa-font-bold"
              color="black"
              clearable
              prepend-icon="mdi-account-edit"
              v-model="name"
            ></v-text-field>
    <!-- errmsg -->
    <div class="pa-w-full pa-flex pa-justify-start pa-flex-col  pa-pl-6 pa-mb-3">
      <span class=" pa-text-red-500 pa-font-black " v-if="$v.$dirty && !$v.name.required">Please enter your name</span>
      <span class=" pa-text-red-500 pa-font-black" v-if=" $v.$dirty && !$v.name.minLength || !$v.name.maxLength">      
       Name must be at least 3 characters and less than 20 characters  </span>                               
   </div> 
   <!-- errmsg -->
            <span class="text-title pa-inline-block pa-font-semibold  pa-p-2 black--text">County </span>         
             <v-select
            color="black"
            v-model="currCity"
            :items="cityList"
            menu-props="auto"
            label="Select"
            hide-details
            prepend-icon="mdi-map-marker"
            single-line
          ></v-select>
    <!-- errmsg -->
    <div class="pa-w-full pa-flex pa-justify-start pa-flex-col  pa-pl-6 pa-mb-3">
      <span class=" pa-text-red-500 pa-font-black " v-if="$v.$dirty && !$v.currCity.required">Required!</span>                              
   </div> 
   <!-- errmsg -->
            <span class="text-title pa-inline-block pa-mt-8 pa-font-semibold pa-p-2 black--text"> District </span>
            <v-select
            color="black"
            v-model="currDistrict"
            :items="dis"
            menu-props="auto"
            label="Select"
            hide-details
            prepend-icon="mdi-map-marker"
            single-line
          ></v-select>
           <!-- errmsg -->
    <div class="pa-w-full pa-flex pa-justify-start pa-flex-col  pa-pl-6 pa-mb-3">
      <span class=" pa-text-red-500 pa-font-black " v-if="$v.$dirty && !$v.currDistrict.required">Required!</span>                              
   </div> 
   <!-- errmsg -->
          <span class="text-title pa-inline-block pa-mt-8 pa-font-semibold  pa-p-2 black--text">Address</span>
           <v-text-field
              color="black"
              label="Address"
              prepend-icon="mdi-map-marker"
              clearable
              v-model='de_address'
            ></v-text-field> 
           <!-- errmsg -->
        <div class="pa-w-full pa-flex pa-justify-start pa-flex-col  pa-pl-6 pa-mb-3">
          <span class=" pa-text-red-500 pa-font-black " v-if="$v.$dirty && !$v.de_address.required">Required!</span>                              
      </div> 
   <!-- errmsg -->

          <input type="checkbox" checked="checked" class="checkbox pa-mr-3" name="agree" v-model="agree"> 
            <label for="agree" class="pa-font-semibold ">
            Shipping address same as billing
            </label>           
         </div>   
         <!--shipping--> 
       
          <!--  payment -->
          <div class="payment pa-p-6 xs:pa-p-1 xxs:pa-p-0">
          <h3 class="pa-font-semibold pa-text-3xl pa-pb-6 "><i class="fas fa-money-check-alt pa-mr-2"></i>PAYMENT</h3>
        
          <div class="radio-container pa-mb-10">
          <input type="radio" name='payment' v-model='payment' value='Credit Card' checked="checked" class='checkbox'>  
          <label for="payment"><span class="pa-inline-block pa-mx-3 pa-font-semibold pa-text-2xl">Credit Card</span>
            <img src="@/assets/svg/cards.svg" alt="" class="pa-inline-block pa-w-9 pa-h-9"> </label>
          </div>  
            <Credit/> 

        </div>
          <!-- payment -->
       </div>
       </form>
     </div>
   </div>

     <!-- order-preview -->
       <div class="summary pa-w-1/2 lg:pa-w-full">
         <div class="container pa-w-full pa-py-16 pa-px-16 xs:pa-p-2">
           <h2 class="pa-bg-black pa-text-center white--text  pa-p-6 pa-text-sm pa-font-semibold pa-w-full pa-rounded-lg  pa-tracking-widest">ORDER SUMMARY</h2>

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

           <!-- final price & coupon apply-->
           <div class="coupon pa-relative  pa-flex pa-flex-wrap pa-justify-between pa-p-6 pa-border-b-2 pa-broder-solid pa-border-gray-100 xs:pa-p-1 xs:pa-py-5">
             
             <input type="text" class="focus:pa-outline-none 
             focus:pa-border-opacity-0 focus:pa-ring-2 focus:pa-ring-blue-300 pa-border-2 pa-border-solid pa-border-gray- 200 pa-rounded-lg 
             pa-block pa-w-4/5 pa-pl-3 md:pa-w-full md:pa-h-14 md:pa-mb-5" placeholder="Your promo code" v-model="code"><i class="pa-cursor-pointer pa-absolute grey--text fas fa-times" v-if='code' @click='clearDiscount'></i>

             <button :disabled='discount' class='focus:pa-outline-none pa-rounded-lg pa-bg-blue-200 white--text pa-p-3 pa-font-bold pa-block lg:pa-w-full   ' @click="apply(code,total)" >APPLY</button>
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
             <button class="order-btn  pa-rounded-lg pa-p-6 pa-w-full pa-mt-5 pa-inline-block pa-text-center pa-bg-black white--text pa-font-bold pa-tracking-widest" 
             @click="placeOrder()">PLACE ORDER</button>
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
import { required,minLength, maxLength } from 'vuelidate/lib/validators'
export default {
  components: {
    Credit,
  },
   data() {
     return {
       agree:true,
       name:this.$store.state.auth.userData.name
     }
   },
   validations: {
           name: { 
             required,
             minLength: minLength(3),
             maxLength: maxLength(20)
           },         
           currDistrict: { required },
           currCity: { required },
           de_address: { required },
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
      return this.districtList.map(dis=> dis.name)
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
       ...mapGetters('auth',['creditStatus'])
   },
   methods: {
     ...mapMutations('order',
     ['setEl','setCode','setPaymethod','setCode','setAddress','setDiscount']),

     placeOrder() {
       if(!this.agree) {
         this.$swal({
           icon:'warning',
           title:'Hey!',
           text:'You have to agree with our policy!',
           showClass: {
            popup: 'animate__animated animate__rotateIn'
           } ,
           hideClass: {
            popup: 'animate__animated animate__flipOutY'
           },
         })
       }else if(!this.payment) {
         this.$swal({
           icon:'warning',
           title:'Hey!',
           text:'You have to choose your payment method!',
           showClass: {
            popup: 'animate__animated animate__rotateIn'
           } ,
           hideClass: {
            popup: 'animate__animated animate__flipOutY'
           },
         })
       }else {
         this.$v.$touch()
         if (!this.$v.$invalid && this.creditStatus) {

         const completeAddress =`${this.currCity}${this.currDistrict}${this.de_address}`

         console.log(completeAddress)

         const payload = { 
          total_price:this.total, 
          delivery_address: completeAddress,
          order_item:this.order_item,
          payment_method:this.payment,
          discount_code:this.code ? this.code:null,
          discount:this.discount ? this.discount:null, 
        }     
         console.log(payload)
         this.$store.dispatch('order/placeOrderAction',payload) 
         return      
      }
         this.$swal({
           imageUrl: "https://upload.cc/i1/2021/04/11/wTV4It.png",
           text:'You\'ve missed some fields...',
           confirmButtonColor: '#000000',
           width:350,
           showClass: {
            popup: 'animate__animated animate__bounceInRight'
           } ,
           hideClass: {
            popup: 'animate__animated animate__bounceOutUp'
           },
         })  
       }         
     },
     apply(code,total) {     
       const payload = { code, totalPrice:total }
       this.$store.dispatch('order/applyCoupon', payload)
     },
     clearDiscount() {
       this.code = ''
     },
     clearAllField() {
       this.code = ''
       this.setDiscount(null)
       this.de_address = ''
       this.currCity =''
       this.currDistrict =''
     }
   },
   watch: {
     districtList(districts) {
       const [ first ] = districts;
       this.currDistrict = first.name
     }
   },
   created() {
    this.clearAllField()
     
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
        background: rgb(242, 206, 26);
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
          background: rgb(226, 66, 55);
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
 @media(max-width:769px) {
   .container {
      .coupon {
        .fa-times {
          top: 25%;
          right: 10%;
        }
      }
   }
 }
</style>