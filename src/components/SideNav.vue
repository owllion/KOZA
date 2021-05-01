<template>
<div >
  <div
    v-show="show"
    class="sidenav-backdrop pa-w-full pa-h-full pa-fixed pa-top-0 pa-left-0"
    @click="$emit('close')"></div>

    <transition name="slide-side">
    <!-- side menu -->
      <div v-show='show' class="aside pa-bg-black pa-w-72 pa-h-full pa-fixed pa-top-0 pa-bottom-0 pa-flex-col pa-z-50">

        <!-- close icon -->
            <i class="fas fa-times pa-cursor-pointer pa-text-4xl pa-inline-block pa-flex pa-justify-end pa-p-4" @click="$emit('close')"></i> 
        <!-- close icon -->

             <ul class=" pa-text-2xl  pa-w-full pa-font-semibold"> 
            <li v-for="(item,i) in navText" :key='i' class="pa-mb-5">
              <router-link  :to="{name:`${item.name}` }" class=" pa-p-3  pa-rounded-sm nav-text pa-block">{{item.link}}</router-link></li>
       </ul>
     </div>
     </transition>

 </div>   <!--  container -->
</template>

<script>
export default {
   props:['show'],
   data() {
      return {
        navText:[
           {
             name:'Home',
             link:'Home'
           },
           {
             name:'Products',
             link:'Shop'
           },
           {
             name:'About',
             link:'About'
           },
        ]
    }
  },
}
</script>

<style scoped >
.aside {
  z-index: 10000;
}
 .sidenav-backdrop {
     z-index: 1000;
     background-color: rgba(0, 0, 0, 0.7)
 }
 .slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateY(-100%);
}
.fa-times{
   color: whitesmoke;
 }
 
 .nav-text {
    color:whitesmoke ;
    transition: all .5s;
    padding-left:20px;
 }
 .nav-text:hover {
   background-color: white;
   border-radius: 40px 0 0 40px;
   color:black !important;
   
 }
</style>