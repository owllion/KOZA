<template>
  <div class="wrapper pa-w-full">
      <h3 class=" animate__animated animate__shakeY pa-font-normal pa-p-4 pa-rounded-md black--text pa-text-6xl pa-my-6 pa-text-center ">My COUPON</h3>
      
      <div class="pa-w-full ">
          <ul class="pa-flex pa-mb-5 pa-ml-5 md:pa-flex md:pa-justify-center md:pa-items-center md:pa-ml-0" >
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
        v-if='filterList.length'
    > 
    <!--header-->
    <template v-slot:header.amount="{ header }">
        <span class="pa-text-base pa-font-semibold pa-tracking-wide" >
          {{ header.text.toUpperCase() }}</span>
      </template>

      <template v-slot:header.expiry_date="{ header }">
        <span class="pa-text-base pa-font-semibold pa-tracking-wide" >
          {{ header.text.toUpperCase() }}</span>
      </template>

      <template v-slot:header.discount_type="{ header }">
        <span class="pa-text-base pa-font-semibold pa-tracking-wide" >
          {{ header.text.toUpperCase() }}</span>
      </template>

      <template v-slot:header.code="{ header }">
        <span class="pa-text-base pa-font-semibold pa-tracking-wide" >
          {{ header.text.toUpperCase() }}</span>
      </template>

      <template v-slot:header.minimum_amount="{ header }">
        <span class="pa-text-base pa-font-semibold pa-tracking-wide" >
          {{ header.text.toUpperCase() }}</span>
      </template>
      <!--header-->

      <!-- content -->
       <template #item.amount="{ value }">
       <v-chip label  color="red darken-3" class="white--text font-weight-bold ">
         <v-icon left small>
        mdi-star-face
      </v-icon>{{value}}
      </v-chip>
      </template>

      <template #item.discount_type="{ value }">
       <v-chip label  color="brown lighten-1" class="white--text font-weight-bold ">
          <v-icon left small>
        mdi-label
      </v-icon>{{value}}
       </v-chip>
      </template>

       <template #item.expiry_date="{ value }">
       <v-chip color="orange lighten-7" class="white--text font-weight-bold ">
          <v-icon left>
        mdi-clock-time-eight
      </v-icon>{{$moment(value).format('l')}}
       </v-chip>
      </template>
  
      <template #item.code="{ value }">
       <v-chip label  color="lime darken-3" class="white--text font-weight-bold ">
          <v-icon left >
        mdi-ticket-confirmation
      </v-icon>{{value}}
       </v-chip>
      </template>

      <template #item.minimum_amount="{ value }">
       <v-chip label color="brown lighten-1" class="white--text font-weight-bold ">
          <v-icon left>
        mdi-currency-usd
      </v-icon>{{value}}
       </v-chip>
      </template>

      <!-- content -->
     
    </v-data-table>

    <!--when filterList.length ===0-->
    <div class="pa-flex pa-justify-center pa-items-center pa-py-10 xs:pa-flex-col " v-if='!filterList.length'>
      <div>
      <img src="@/assets/svg/coupon-svg.svg" alt="">
      </div>
      <p class="pa-text-3xl pa-font-bold xs:pa-text-lg pa-mt-6">There's nothing here...</p>  
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
   metaInfo: {
     title:'Coupon List'
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
        { text: 'Type', value: 'discount_type' , sortable: false,},
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