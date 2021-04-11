<template>
<section class="pa-w-full pa-p-10 md:pa-p-0">
  
  <div class="pa-flex pa-justify-center pa-items-center pa-w-full">

    <!-- when favlist is empty -->
    <div class="pa-flex pa-justify-center pa-items-center pa-w-full" v-show="!favList.length">
        <div class="content pa-flex pa-flex-wrap pa-w-99  pa-justify-center pa-items-center">
          <div class="left img-container pa-w-1/2 pa-pr-5 md:pa-w-full md:pa-px-36 xs:pa-px-16">
          <img src="@/assets/svg/fav-empty.svg" alt="" class="pa-w-full pa-h-full pa-object-cover">
          </div>

          <div class="right pa-w-1/2 md:pa-w-full md:pa-px-24 xs:pa-px-3 ">
           <p class="pa-text-3xl  pa-block pa-text-center pa-font-semibold pa-tracking-wider md:pa-text-3xl md:pa-py-6 s:pa-text-sm "> Your list is empty! </p>        
          <router-link to="/allproducts" class="shop-btn pa-block  pa-text-2xl pa-p-3 pa-text-center pa-bg-yellow-500 white--text  pa-tracking-wider pa-transition pa-duration-500 md:pa-text-xl s:pa-text-sm s:pa-ml-3">Go Shopping</router-link>
         </div>
    </div>
     </div>
     <!-- when favlist is empty -->

    <Card :pageItems=favList />       
       </div> 
      </section>     
</template>

<script>
import Card from '@/components/Card'
import { mapGetters } from 'vuex'
export default {
  components: {
    Card
  },
  computed: {
    ...mapGetters('auth',['favList'])
  },
  metaInfo: {
     title:'Favorites List'
  }
}
</script>

<style lang="scss" scoped>
.shop-btn {
     box-shadow: 3px 3px #948320;
    &:hover {
      transform:translateY(6px);
      box-shadow: none;
    }
  }

</style>