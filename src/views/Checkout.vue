<template>
 <div class="row pa-mt-16 pa-mb-10 pa-mx-auto pa-w-full">
   <Banner>Checkout</Banner>
   <section class="pa-px-36 pa-w-full xs:pa-px-2">
    <v-stepper v-model="e1" >
      <v-stepper-header>
        <v-stepper-step
          :complete="e1 > 1"
          step="1"
          color="green darken-1"
          class="pa-text-xl"
        >
        <span class="pa-inline-block">Check Cart</span>
        </v-stepper-step>

        <v-divider></v-divider>
  
        <v-stepper-step
          :complete="e1 > 2"
          step="2"
          color="green darken-1"
          class="pa-text-xl"
        >
          Information
        </v-stepper-step>
  
        <v-divider></v-divider>
  
        <v-stepper-step step="3" color="green darken-1">
          Finished!
        </v-stepper-step>
      </v-stepper-header>
  
      <v-stepper-items>
        <v-stepper-content step="1">
          <p>your cart</p> 
          <div class="pa-flex pa-justify-end">
          <v-btn
             color="green darken-1"
            class="white--text"
            @click="e1 = 2"
          >
            Continue
          </v-btn>
          </div> 
        </v-stepper-content>
  
        <v-stepper-content step="2">
          <div class="col-75 pa-p-16 pa-w-1/2 ">
     <div class="container">
       <form>
       
       <div class="row ">
         <div class="col-50">
            <h3 class="pa-font-semibold pa-pb-6"><i class="fas fa-address-card pa-mr-2"></i>SHIPPING ADDRESS</h3>

            <span class=" pa-block pa-font-semibold pa-bg-yellow-300 pa-p-1 ">County </span>
            
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

            <span class=" pa-block pa-mt-8 pa-font-semibold pa-bg-yellow-300 pa-p-1"><i class="fa fa-address-card-o"></i> District </span>
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
          <span class="pa-block pa-mt-8 pa-font-semibold pa-bg-yellow-300 pa-p-1">Address</span>
           <v-text-field
              color="green darken-1"
              label="Address"
              clearable
            ></v-text-field>
         </div>
       </div>

       </form>
     </div>
   </div>
    <div class="pa-flex pa-justify-end">
          <v-btn
             color="green darken-1"
             class="white--text"
            @click="e1 = 3"
          >
            Continue
          </v-btn>
  
          <v-btn text @click="e1 = 1" class="white--text">
            Cancel
          </v-btn>
         </div>
        </v-stepper-content>
  
        <v-stepper-content step="3">
          <div class="pa-mx-auto">
            <p class="pa-text-7xl pink--text pa-font-semibold pa-text-center  pa-block">SUCCESS!</p>
            <div class="img-container pa-w-96 pa-h-96 s:pa-w-full">
             <img src="@/assets/svg/success.svg" alt="success" class="pa-w-full pa-h-full pa-object-contain">
             </div>
          </div>

          <div class="pa-flex pa-justify-center">
          <v-btn
            color="green darken-1"
            @click="e1 = 1"
            class="white--text"
          >
            Continue
          </v-btn>
          </div>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>

   </section>
 </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Banner from '@/components/Header-banner'

export default {
  components: {
    Banner,
  },
  data() {
    return {
      e1:1
    }
  },
   computed: {
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
   watch: {
     districtList(districts) {
       const [ first ] = districts[0];
       this.currDistrict = first.name
     }
   },
   created() {
     console.log(this.districtList[0])
     console.log(this.$store.state.address.currDistrict)
   }

   
}
</script>

<style lang="scss" scoped>
@import '../assets/css/input.css';


</style>