<template>
  <section class="wrapper pa-w-full">
    <Loading :active.sync="isLoading">
    <fingerprint-spinner :animation-duration="2000" :size="100" color="#22c1c3" />
    </Loading>

      <h3 class=" animate__animated animate__tada pa-font-normal pa-p-4 pa-rounded-md black--text pa-text-6xl pa-my-6 pa-text-center ">My Order</h3>
      <div >
      <v-data-table
        :headers="headers"
        :items="list"
        :items-per-page="5"
        class="elevation-1
        "
        v-if='list.length'
    > 
    <template v-slot:header.name="{ header }">
        <a href="#" class="pa-text-xl black--text" >
          {{ header.text.toUpperCase() }}</a>
      </template>
     <template #item.can="{ value }">
       <button  class="pa-p-2 blue--text pa-font-semibold " @click='cancelOrder'>
          {{ value }}
        </button>
        
    </template> 
     <template v-slot:item.email="{ value }">   
          <v-chip
              class="ml-0 mr-2 black--text"
              label
              small
              color='red  lighten-4'
                >
               <a :href="`mailto:${value}`" class="pa-font-semibold ">
          {{ value }}
        </a>
                </v-chip>
        
    </template>

     <template #item.email="{ value }">
       <v-chip color="green" ><a :href="`mailto:${value}`" class="pa-p-2 white--text pa-font-semibold ">
          {{ value }}
        </a></v-chip>
        
    </template> 
     <template #item.name="{ item }">
    <router-link class="pa-text-xl black--text" :to="{ name: 'company', params: { id: item.id } }">
      {{ item.name }}
    </router-link>
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
import { getOrder } from '@/api/order'
import { FingerprintSpinner } from 'epic-spinners'
export default {
  components: {
     FingerprintSpinner
  },
  methods: {
    cancelOrder() {
      this.$swal({
        icon:'warning',
        title:'Really wnat to cancel it?'
      })
    }
  },
   data() {
     return {
       isLoading:false,
       list:[],       
       headers: [
        {
          text: 'Date',
          align: 'start',        
          value: 'createdAt',
        },
        { text: 'Order Number', value: 'orderId', sortable: false,align: 'start',  },
        { text: 'Payment Status', value: 'payment_status' , sortable: false,},
        { text: 'Payment Method', value: 'payment_method' , sortable: false,},
        { text: 'Process', value: 'order_status' , sortable: false,},
        { text: 'Paid Date', value: 'paid_date' , sortable: false,},
        { text: 'Discount', value: 'discount' , sortable: false,},
        { text: 'Total', value: 'total_price', sortable: false, },
        { text: 'Cancel', value: 'cancel', sortable: false, },
      ]
    }
  },
  async created() {
      try {
        this.isLoading = true
        const {data: { orderList }} = await getOrder()
        this.list = orderList
        this.isLoading = false
      }catch(err) {
        this.isLoading = false
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