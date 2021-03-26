<template>
 <div class="row pa-my-48">
   <div class="col-75">
     <div class="container">
       <sideFilter/>
       <form>
       
       <div class="row ">
         <div class="col-50">
            <h3><i class="fas fa-house-user"></i>SHIPPING ADDRESS</h3>
            <label for=""><i class="fa fa-address-card-o"></i> County </label>
            <select v-model="currCity">
              <option v-for='(city,i) in cityList' :key='i'>{{city}}</option>
            </select>

            <label for=""><i class="fa fa-address-card-o"></i> District </label>
            
            <select v-model="currDistrict">
              <option v-for='(district,i) in districtList[0]' :key='i' >{{district.name}}</option>
            </select>
         </div>
       </div>

       </form>
     </div>
   </div>
 </div>
</template>

<script>
//import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
export default {
   computed: {
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
     console.log(this.districtList)
     console.log(this.$store.state.address.currDistrict)
   }

   
}
</script>

<style>

</style>