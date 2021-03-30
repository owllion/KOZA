<template>
 <div class="wrapper">
    <Banner>Profile</Banner>
   <section class="container pa-p-16 pa-w-full">
     <div class="side pa-flex pa-flex-wrap pa-w-full">
       <!-- left -->
       <div>
       <ul>     
         <li><router-link to='/'>Profile</router-link></li>
         <li><router-link to='/'>Order</router-link></li>
         <li>Coupon</li>       
         <li>Password</li>
       </ul>
       </div> 
       <!-- left -->
        <div class="pa-w-3/4">
          <div class="pa-w-36 ">
            <img :src=avatar alt=""  class="pa-w-full pa-h-full pa-object-cover pa-rounded-full pa-block ">
          </div>
           <p>FAV</p> 
          <div v-for='(item,i) in favList' :key='i'>
            <h2 class="brown--text pa-text-7xl">{{item.productName}}</h2>
            <img :src=item.image[0] alt="">
            </div> 
       </div> 

     </div>
     <div class="avatar pa-w-16 pa-rounded-full pa-bg-red-500 ">
     
   </div>
   </section>
   
     
   </div>
</template>

<script>
import Banner from '@/components/Header-banner'
export default {
  components: {
    Banner
  },
   data() {
     return{
       avatar:this.$store.state.auth.userData.avatarDefault,
       favList:this.$store.state.auth.favList
     }
   },
}
</script>

<style lang="scss" scoped>
 .container {
   max-width: 1600px;
 }


</style>