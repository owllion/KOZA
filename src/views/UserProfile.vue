<template>
 <div class="wrapper pa-w-full ">
    <Banner>Profile</Banner>
   <section class="container pa-p-16 pa-w-full pa-flex pa-flex-wrap pa-justify-center pa-items-center">
     <div class="content pa-flex pa-flex-col pa-flex-wrap pa-w-full pa-justify-center pa-items-center">
       <!-- nav -->
       <div>
       <ul class="pa-flex pa-justify-around pa-items-center">     
         <li><router-link to='/'>Profile</router-link></li>
         <li><router-link to='/'>Order</router-link></li>
         <li><router-link to='/'>Coupon</router-link></li> 
         <li><router-link to='/userprofile/favlist'>Favlist</router-link></li>   
         <li><router-link to='/'>Password</router-link></li>
       </ul>
       </div> 
       <!-- nav -->

       <!--content-->
       <div class="pa-w-full pa-p-36">
        <router-view></router-view>
       </div>
       <!--content-->

       </div>    <!--content-->
    </section>   <!--container-->
 </div>          <!--wrapper-->
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