<template>
  <div class="wrapper pa-w-full">
      <h3 class=" animate__animated animate__tada pa-font-normal pa-p-4 pa-rounded-md black--text pa-text-6xl pa-my-6 pa-text-center ">My Order</h3>
      <div>
      <v-data-table
        :headers="headers"
        :items="orders"
        :items-per-page="5"
        class="elevation-1
        "
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

     <!-- <template #item.email="{ value }">
       <v-chip color="green" ><a :href="`mailto:${value}`" class="pa-p-2 white--text pa-font-semibold ">
          {{ value }}
        </a></v-chip>
        
    </template> -->
     <template #item.name="{ item }">
    <router-link class="pa-text-xl black--text" :to="{ name: 'company', params: { id: item.id } }">
      {{ item.name }}
    </router-link>
  </template>
    </v-data-table>
      </div>
  </div>
</template>

<script>
export default {
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
     headers: [
        {
          text: 'Date',
          align: 'start',        
          value: 'date',
        },
        { text: 'Order Number', value: 'number', sortable: false,align: 'start',  },
        { text: 'Payment Status', value: 'status' , sortable: false,},
        { text: 'Payment Method', value: 'method' , sortable: false,},
        { text: 'Process', value: 'process' , sortable: false,},
        { text: 'Discount', value: 'discount' , sortable: false,},
        { text: 'Total', value: 'price', sortable: false, },
        { text: 'Cancel', value: 'cancel', sortable: false, },
      ],
      orders: [
        {
          date: "2020.04.05",
          number: "32 1 234 56 78",
          status: "Paid",
          method: "www.lorem.be",
          process: "complete",
          discount:"$20.00",
          price:'$500.00',
          cancel:'DELETE'

        },
        {
          date: "2020.04.05",
          number: "32 1 234 56 78",
          status: "Paid",
          method: "www.lorem.be",
          process: "complete",
          discount:"$20.00",
          price:'$500.00',
          cancel:'DELETE'

        },
         
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
h3 {
  font-family: 'Caesar Dressing', cursive;
}
</style>