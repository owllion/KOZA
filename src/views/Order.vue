<template>
  <section class="wrapper pa-w-full">
   
      <h3 class=" animate__animated animate__tada pa-font-normal pa-p-4 pa-rounded-md black--text pa-text-6xl pa-my-6 pa-text-center ">My Order</h3>
      <div v-for="(p,i) in list" :key='i'>
      <v-data-table
        :headers="headers"
        :items="list"
        :items-per-page="5"
        class="elevation-1 pa-border-2 pa-border-solid pa-border-black
        "
        v-if='list.length'
    > 
    <!-- header -->
    <template v-slot:header.createdAt="{ header }">
        <h4 class="pa-text-base black--text pa-font-bold pa-tracking-wider" >
          {{ header.text.toUpperCase() }}</h4>
      </template>
      <template v-slot:header.orderId="{ header }">
        <h4 class="pa-text-base black--text pa-font-bold pa-tracking-wide " >
          {{ header.text.toUpperCase() }}</h4>
      </template>
      <template v-slot:header.payment_status="{ header }">
        <h4 class="pa-text-base black--text pa-font-bold pa-tracking-wide pa-py-5" >
          {{ header.text.toUpperCase() }}</h4>
      </template>
      <template v-slot:header.payment_method="{ header }">
        <h4 class="pa-text-base black--text pa-font-bold pa-tracking-wide " >
          {{ header.text.toUpperCase() }}</h4>
      </template>
      <template v-slot:header.order_status="{ header }">
        <h4 class="pa-text-base black--text pa-font-bold pa-tracking-wide " >
          {{ header.text.toUpperCase() }}</h4>
      </template>
      <template v-slot:header.payment_date="{ header }">
        <h4 class="pa-text-base black--text pa-font-bold pa-tracking-wide " >
          {{ header.text.toUpperCase() }}</h4>
      </template>
      <template v-slot:header.discount="{ header }">
        <h4 class="pa-text-base black--text pa-font-bold pa-tracking-wide " >
          {{ header.text.toUpperCase() }}</h4>
      </template>
      <template v-slot:header.total_price="{ header }">
        <h4 class="pa-text-base black--text pa-font-bold pa-tracking-wide " >
          {{ header.text.toUpperCase() }}</h4>
      </template>
      <template v-slot:header.cancel="{ header }">
        <h4 class="pa-text-base black--text pa-font-bold pa-tracking-wide " >
          {{ header.text.toUpperCase() }}</h4>
      </template>
     <!-- header -->

     <!-- item -->
       <template #item.createdAt="{ value }">
       <span class="pa-text-base pa-font-semibold">{{$moment(value).format('l')}}</span>
      </template>

     <template #item.orderId="{ value }">
       <router-link  :to="`/order/detail/${value}`" class="pa-py-2 green--text pa-font-semibold pa-text-base">
          {{ value }}
        </router-link>    
    </template>
     
      <template #item.payment_status="{ value }">
        <v-chip
              class="ml-0 white--text font-weight-bold"
              label
              small
              color='yellow darken-4'
                >
          {{ value }}
        </v-chip>
      </template>
       
       <template #item.payment_method="{ value }">
       <span class="pa-text-lg  pa-font-semibold">{{value}}</span>
      </template>

       <template #item.order_status="{ value }">
        <v-chip
              class="ml-0 white--text font-weight-bold"
              label
              small
              color='blue lighten-7'
                >
          {{ value }}
        </v-chip>
      </template>

       <template #item.payment_date="{ value }">
       <span class="pa-text-lg  pa-font-semibold">{{$moment(value).format('l')}}</span>
      </template>

      <template #item.discount="{ value }">
       <span class="pa-text-lg  pa-font-semibold">{{value}}</span>
      </template>

      <template #item.total_price="{ value }">
       <span class="pa-text-lg  pa-font-semibold">${{value}}</span>
      </template>

      <template #item.cancel="{ value }">  
          <v-icon @click.prevent='cancel(p.orderId)' color='red darken-2' :disabled='p.order_status==="CANCELLED"'>mdi-close-thick</v-icon>
          <span class="pa-hidden">{{value}}</span>       
      </template>
    </v-data-table>

    <!--when list.length ===0-->
    <div class="pa-flex-col pa-flex pa-justify-center pa-items-center pa-py-10 xs:pa-flex-col " v-if='!list.length'>
      
      <p class="pa-text-3xl pa-font-bold xs:pa-text-lg pa-mt-6 s:pa-text-sm">You haven't bought anything!</p>  
      <div>
      <img src="@/assets/svg/order.svg" alt="">
      </div>
    </div>
     <!--when list.length ===0-->
      </div> 
     
  </section>
</template>

<script>
import { getOrder,cancelOrder } from '@/api/order'
import { mapGetters } from 'vuex'
export default {
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
  methods: {
      async cancel(id) {
        try {
            this.loading = true
            await cancelOrder({ orderId:id }) 
            const {data: { orderList }} = await getOrder()
            this.list = orderList
            this.loading = false
            this.$toast.open({
              message: 'Successfully cancel your order!',
              type:'Info',
              pauseOnHover:true,
              duration:2000             
              });
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
   data() {
     return {
       list:[],       
       headers: [
        {
          text: 'Date',
          align: 'center',        
          value: 'createdAt',
          sortable: false,
        },
        { text: 'purchase order', value: 'orderId', sortable: false,align: 'center' },
        { text: 'Payment Status', value: 'payment_status' , sortable: false,align: 'center' },
        { text: 'Payment Method', value: 'payment_method' , sortable: false,align: 'center' },
        { text: 'Process', value: 'order_status' , sortable: false,align: 'center' },
        { text: 'Payment Date', value: 'payment_date' , sortable: false, align: 'center'},
        { text: 'Discount', value: 'discount' , sortable: false, align: 'center'},
        { text: 'Total', value: 'total_price', sortable: false,align: 'center' },
        { text: 'Cancel', value: 'cancel', sortable: false, align: 'center'},
      ]
    }
  },
  metaInfo: {
     title:'Order List'
  },
  async created() {   
      try {
        this.loading = true
        const {data: { orderList }} = await getOrder()
        this.list = orderList
        console.log(this.list)
        this.loading = false
      }catch(err) {
        this.loading = false
        if(err.response) {
          const error =err.response.data.msg
           this.$swal({
              icon:"error",
              title:'Oops',
              text:error
           })
        }
        
      }
  }
}
</script>

<style lang="scss" scoped>
h3 {
  font-family: 'Caesar Dressing', cursive;
}
</style>