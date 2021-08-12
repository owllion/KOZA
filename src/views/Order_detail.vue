<template>
  <section class="pa-my-36 lg-m:pa-p-10">
  
    <div class="container pa-flex pa-justify-center pa-items-center">
      
     <h2 class="pa-text-7xl pa-font-semibol pa-mb-10 xs:pa-text-4xl">Purchase Order</h2>
     </div>

    <div class="container pa-flex-col pa-flex pa-justify-center pa-items-center md:pa-px-10 ">

  <!-- up -->
    <div class="pa-w-full">
    <!-- title -->
     <div class="pa-flex pa-justify-start">
     <h3 class="details  pa-tracking-widest pa-bg-black white--text pa-p-3 "><v-icon color="white" class=" pa-pb-1" small>mdi-file-eye</v-icon> DETAILS</h3>
     </div>
     <!-- title -->

     <!--up content -->
     <div class="detail-content pa-w-full pa-p-10   pa-text-left pa-border-4 pa-border-black pa-relative pa-overflow-hidden pa-z-0 xs:pa-py-6 xs:pa-px-0">
     <!-- <div class="circle"></div>
     <div class="circle2"></div> -->
    <ul class="detail-ul pa-p-5 xs:pa-px-3">
      <li class="pa-mb-3 pa-flex pa-justify-between">
        <h3 class="pa-inline-block pa-pr-3 pa-text-2xl pa-font-semibold xs:pa-text-sm s:pa-text-xs">PURCHASE ORDER :</h3><span class="pa-text-2xl pa-font-semibold xs:pa-text-sm s:pa-text-xs">{{orderDetail.orderId}}</span>
      </li>
      <li class="pa-mb-3 pa-flex pa-justify-between">
        <h3 class="pa-inline-block pa-pr-3 pa-text-2xl pa-font-semibold xs:pa-text-sm s:pa-text-xs">PURCHASE DATE :</h3><span class="pa-text-2xl pa-font-semibold xs:pa-text-sm s:pa-text-xs">{{$moment(orderDetail.createdAt).format('MMMM Do YYYY')}}</span>
      </li>
     <li class="pa-mb-3 pa-flex pa-justify-between">
        <h3 class="pa-inline-block pa-pr-3 pa-text-2xl pa-font-semibold xs:pa-text-sm s:pa-text-xs">SHIP TO :</h3><span class="pa-text-2xl pa-font-semibold xs:pa-text-sm s:pa-text-xs">{{orderDetail.delivery_address}}</span>
      </li>
      <li class="pa-mb-3 pa-flex pa-justify-between">
        <h3 class="pa-inline-block pa-pr-3 pa-text-2xl pa-font-semibold xs:pa-text-sm s:pa-text-xs">BILL TO :</h3><span class="pa-text-2xl pa-font-semibold xs:pa-text-sm s:pa-text-xs">{{orderDetail.delivery_address}}</span>
      </li>
      <li class="pa-mb-3 pa-flex pa-justify-between">
        <h3 class="pa-inline-block pa-pr-3 pa-text-2xl pa-font-semibold xs:pa-text-sm s:pa-text-xs">PAYMENT METHOD :</h3><span class="pa-text-2xl pa-font-semibold xs:pa-text-sm s:pa-text-xs">Credit Card</span>
      </li>
     <li class="pa-mb-3 pa-flex pa-justify-between">
        <h3 class="pa-inline-block pa-pr-3 pa-text-2xl pa-font-semibold xs:pa-text-sm s:pa-text-xs">PAYMENT STATUS: </h3>
        <v-chip label color="light-green darken-1" class="white--text font-weight-black pa-tracking-widest " > <v-icon x-small class="pa-mr-2">mdi-checkbox-marked-circle</v-icon>PAID</v-chip>
      </li>
      <li class="pa-mb-3 pa-flex pa-justify-between">
        <h3 class="pa-inline-block pa-pr-3 pa-text-2xl pa-font-semibold xs:pa-text-sm s:pa-text-xs">ORDER STATUS : </h3>
        <v-chip label :color="orderDetail.order_status==='CANCELLED'?'red darken-4':'lime darken-2'" class="white--text font-weight-black pa-tracking-widest" ><v-icon x-small class="pa-mr-2" v-if="orderDetail.order_status==='CANCELLED'">mdi-emoticon-confused</v-icon>
        <v-icon x-small class="pa-mr-2" v-else>mdi-check-bold</v-icon>
        {{orderDetail.order_status}} </v-chip>
      </li>
    </ul>
    </div>
    </div>
     <!-- UP content -->

    <!-- information -->
    <div class="pa-w-full pa-mt-10">
    <div class="pa-flex pa-justify-start">
     <h3 class="details  pa-tracking-widest pa-bg-black white--text pa-p-3 "><v-icon color="white" class=" pa-pb-1 pa-mr-2" small>mdi-feather</v-icon>ITEMS</h3>
     </div>
       <div class="summary pa-w-full pa-border-2 pa-border-black">
         <div class="container pa-w-full ">
           <!-- cart item -->
           <div class="cart-item pa-flex pa-justify-between pa-border-b-2 pa-border-gray-100 pa-border-solid" v-for="(item,i) in orderDetail.order_item" :key='i'>
             <div class="left pa-flex ">
             <div class="pa-w-20 pa-h-24 pa-px-5">
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
           <div class="discount pa-flex pa-justify-between pa-p-6 " v-if="orderDetail.discount">
             <h4 class="pa-font-semibold">DISCOUNT</h4>
             <span class="pa-font-semibold">${{orderDetail.discount}}</span>
           </div>
           <div class="total pa-flex pa-justify-between pa-p-6 pa-border-b-2 pa-border-solid pa-border-gray-100">
             <h4 class="pa-font-bold">TOTAL</h4>
             <span class="red--text pa-font-bold">${{orderDetail.total_price}}</span>
        </div>
      </div>
    </div> 
    </div>        
    <!-- information -->

    <!-- button -->
     <div class="pa-w-full pa-mt-8 pa-flex pa-justify-end">
          <div class="pa-flex xs:pa-block xs:pa-w-full">
          <button @click="cancel(orderId)" class="pa-mr-6 pa-transition pa-duration-500 hover:pa-bg-red-800 pa-p-3 white--text pa-bg-red-700 pa-font-semibold pa-tracking-widest xs:pa-w-full xs:pa-mb-3" :disabled='orderDetail.order_status==="CANCELLED"'><v-icon color="white" small class="pa-mr-2">mdi-emoticon-cry</v-icon>
          <span v-if='orderDetail.order_status==="COMPLETED"'> CANCEL ORDER</span> 
          <span v-else>Stop Pressing!</span> 
          </button>

          <router-link to='/userprofile/order' class="xs:pa-w-full pa-block pa-text-center pa-font-semibold pa-w-36 black--text pa-bg-gray-100  pa-p-3 hover:pa-bg-gray-300 pa-transition pa-duration-500 " >
           <i class="fas fa-chevron-left pa-pr-3"></i> <span>BACK</span>
          </router-link>

          </div>

         </div>
    <!-- button -->
    </div>
  </section>
</template>

<script>
import { getOrderDetail, cancelOrder } from '@/api/order'
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            orderId:'',
            orderDetail:[],
        }
    },
     computed: {
    ...mapGetters('auth',['isLoading']),
    loading: {
      get() {
         return this.isLoading
      },
      set(value) {
        return this.$store.commit('auth/setLoading', value)
      }
    }
  },
  metaInfo: {  
      title:'Purchase Order'       
  },
  methods: {
      async cancel(id) {
        try {
            this.loading = true
            await cancelOrder({ orderId: id }) 
            const payload = { orderId : id }
            const { data:{ order } } = await getOrderDetail(payload) 
            this.orderDetail = order
            this.loading = false
            this.$swal({
              imageUrl:'https://upload.cc/i1/2021/04/13/c3KMtm.png',
              title:'SUCCESS:(',
              confirmButtonColor:'#000000'
            })
        }catch(err) {
            this.loading = false
            if(err.response) {
            const error = err.response.data.msg
            this.$swal({
              icon:'error',
              title:'Oh No!',
              text:error
          })
        }
        }
          
      }
    },
   async created() {
      this.orderId = this.$route.params.id
      try {
        this.loading = true
        const payload = { orderId : this.orderId }
        const { data:{ order } } = await getOrderDetail(payload) 
        this.orderDetail = order
        this.loading = false
      }catch(err) {
        this.loading = false
        if(err.response) {
          const error = err.response.data.msg
          this.$swal({
            icon:'error',
            title:'Oh No!',
            text:error
          })
        }
      }
      
    }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  margin: 0 auto ;
  max-width: 850px;
   .details {
       border-radius: 10% 10% 0 0;
   }
   .detail-ul{
      list-style:url('../assets/svg/sun.svg')  outside !important; 
      li {
        // border-bottom :solid 1px gray;
        padding: 6px 0;
      }
   }
   .circle {
      width:500px;
      height:500px;
      background:rgb(255, 237, 137);
      position:absolute;
      right:0;
      top: 0;
      clip-path:circle(50% at 90% 10%);
      z-index: -1;
   }
  //  .circle2 {
  //     width:100px;
  //     height:100px;
  //     background:rgb(255, 237, 137);
  //     position:absolute;
  //     left:0;
  //     bottom: 0;
  //     clip-path:circle(50% at 10% 90%);
  //     z-index: -1;
  //  }
}
h2 {
  font-family: 'Caesar Dressing', cursive;
}


</style>