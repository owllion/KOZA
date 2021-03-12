<template>
<header class="pa-fixed pa-top-0 pa-left-0  pa-bg-white pa-w-full pa-z-50" >
    <!-- bar -->
  <div class=" pa-hidden md:pa-block">
   <i class="fas fa-bars pa-cursor-pointer pa-text-3xl pa-absolute pa-top-4 pa-left-7" @click="$emit('sideNavToggle')"></i>
    </div>

        <!-- nav -->
   <nav class="pa-h-5  pa-flex pa-justify-around  pa-items-center pa-p-8 xs:pa-justify-between md:pa-justify-between">   
    
      <div class="md:pa-pl-16 xs:pa-hidden">
        <h1>
        <router-link class="logo--link pa-text-3xl "  :to="{name:'Home'}">KOZA</router-link>
      </h1>  
      </div>
  
      <div class="pa-flex pa-items-center">
         <ul class=" pa-flex pa-text-2xl md:pa-hidden pa-w-full"> 
            <li v-for="(item,i) in navText" :key='i'>
              <router-link  :to="{name:`${item.name}` }" class=" pa-p-3 pa-rounded-sm nav-text">{{item.link}}</router-link></li>
      </ul>

      <!-- icon -->
      <ul class="pa-flex pa-items-center xs:pa-ml-60 xxs:pa-ml-52 s:pa-ml-40">
      
          <li class="pa-p-2">
          <router-link  :to="{name:'Login'}" class="pa-text-3xl ">
            <span class="icon icon-face_retouching_natural "></span>
          </router-link>
        </li>
       <li class="pa-p-2 pa-relative">
         <router-link  :to="{name:'Login'}" class="pa-text-3xl ">   
           <span class="icon icon-local_grocery_store">
           </span>

              <!-- cart length -->
             <span class='circle pa-absolute pa-bottom-7 pa-left-6 pa--translate-y-2/4 pa-translate-x-2/4' v-if='token'>
                <span class='number pa-text-xs pa-py-1 pa-px-2 pa-bg-red-800'>{{count}}</span>
             </span>
              <!-- cart length -->

         </router-link>
       </li>
     </ul>  
       <!-- icon --> 
     </div>
   </nav>
 </header>

</template>

<script>
import {mapGetters} from 'vuex'
  export default {
    name: 'Header',
    data() {
      return {
        navText:[
           {
             name:'Home',
             link:'HOME'
           },
           {
             name:'Products',
             link:'SHOP'
           },
           {
             name:'/',
             link:'ABOUT'
           },
        ]
    }
  },
  computed: {
      ...mapGetters('auth', ['cartLength','token'])
  }
    
  }  
</script>

<style scoped lang='scss'>

$black:rgb(48, 46, 46);
$white:whitesmoke;

 nav {
  max-width: 1300px;
  margin: 0 auto;
}
 .logo--link {  
     color: $black;
    font-family: 'Caesar Dressing', cursive;
 }
 
 .nav-text{
    font-weight: 500;
    font-size: 1.3rem;
    color: $black;
    transition: all .5s;
    &:hover {
   background-color: $black;
   color: $white
   }
 }
 
 .icon{
   color: $black;
   transition: all .5s;
   &:hover {
  color: rgb(50, 118, 220);
 }
 }
 .fa-times{
   color: $white;
 }
 .fa-bars {
   color: $black
 }
.aside {
  transition: all .2s ease-in;  
  z-index: 10000;
}
.number {
    color:$white;
    border-radius:50%;
}
</style>