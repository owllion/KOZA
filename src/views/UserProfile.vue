<template>
 <div class="wrapper pa-w-full pa-my-24">
   <section class="container pa-p-5 pa-mx-auto pa-w-4/5 pa-flex pa-flex-wrap pa-justify-center pa-items-center md:pa-w-full">
     <div class="content pa-flex pa-flex-col pa-flex-wrap pa-w-full pa-justify-center pa-items-center">
       <!-- nav -->
       <div class="pa-w-full">
       <ul class="nav-ul pa-p-8 pa-w-full pa-flex pa-flex-wrap pa-justify-evenly  pa-items-center pa-bg-black   pa-rounded-md pa-font-bold pa-mb-10">     
         <li class="pa-w-16 "><router-link to='/userprofile/profile' class="s:pa-mb-2">Profile</router-link></li>
         <li class="pa-w-16"><router-link to='/userprofile/order'>Order</router-link></li>
         <li class="pa-w-16"><router-link to='/userprofile/coupon'>Coupon</router-link></li> 
         <li class="pa-w-16 s:pa-pt-3 xs:pa-pl-3"><router-link to='/userprofile/favlist'>Favlist</router-link></li>   
         <li class="pa-w-16 xs:pa-pt-5 s:pa-pt-3"><router-link to='/userprofile/password'>Password</router-link></li>
       </ul>
       </div> 
       <!-- nav -->

       <!--content-->
       <div class="pa-w-full  pa-flex pa-justify-center pa-items-center ">
        <router-view></router-view>
       </div>
       <!--content-->

       </div>    <!--content-->
    </section>   <!--container-->
 </div>          <!--wrapper-->
</template>

<script>
export default {
 
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
   .nav-ul {
     a{
       color: white !important;
     }
     
   }
 }


</style>