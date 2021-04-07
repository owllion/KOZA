<template>
  <div class="wrapper pa-w-full">
      <h3 class=" animate__animated animate__shakeY pa-font-normal pa-p-4 pa-rounded-md black--text pa-text-6xl pa-my-6 pa-text-center ">My COUPON</h3>
      <div class="pa-w-full">
          <ul class="pa-flex pa-mb-5 pa-ml-5" >
              <li>
                <a href="#" class="pa-transition pa-duration-500 hover:pa-bg-green-500 pa-p-3 black--text pa-font-semibold pa-border-r-2 pa-border-black pa-border-dotted" @click.prevent="status='unused'">Unused</a>
              </li>
              <li>
                <a href="#" class="pa-transition pa-duration-500 hover:pa-bg-red-600 black--text pa-font-semibold pa-p-3" @click.prevent="status='used'">Used</a>
              </li>
          </ul>
       <v-data-table
        :headers="headers"
        :items="filterList"
        :items-per-page="5"
        class="elevation-1
        "
        v-if='filterList'
    > 
    <template v-slot:header.date="{ header }">
        <a href="#" class="pa-text-lg black--text" >
          {{ header.text.toUpperCase() }}</a>
      </template>
     <template #item.can="{ value }">
       <button  class="pa-p-2 blue--text pa-font-semibold">
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

    <!--when filterList.length ===0-->
    <div class="pa-flex pa-justify-center pa-items-center pa-py-10" v-if='!filterList'>
      <div>
      <img src="@/assets/svg/coupon-svg.svg" alt="">
      </div>
      <p class="pa-text-3xl pa-font-bold ">There's nothing here...</p>  
    </div>
     <!--when filterList.length ===0-->

      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
   computed: {
       ...mapGetters('auth',['couponList']),
       filterList() {
           if(this.status === 'used') {
               const list = this.couponList.filter(i=> i.usage_count ===1)

              if(list) {
                  return list
                }else {
                  return []
                }
           }else {
               const list = this.couponList.filter(i=> i.usage_count === 0)
              
                if(list) {
                  return list
                }else {
                  return []
                }
           }           
       }
   },
   data() {
     return {
     status:'', 
     headers: [
        {
          text: 'Amount',
          align: 'start',        
          value: 'amount',
        },
        { text: 'Expire Date ', value: 'expiry_date',align: 'start',  },
        { text: 'Code', value: 'code' , sortable: false,},
        { text: 'Minimum Amount', value: 'minimum_amount' , sortable: false,},
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
h3 {
  font-family: 'Caesar Dressing', cursive;
}
ul {
    padding-left: 0;
}
</style>