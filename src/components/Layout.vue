<template>
  <div>
      <Header @sideNavToggle ='displayNav = !displayNav' />
      <SideNav :show='displayNav' @close='displayNav = false'/>
      <SideFilter/>
      <Loading :active.sync="isLoading">
        <PixelSpinner  :animation-duration="700" :size="80" color="black" />
      </Loading>   
      <slot/>
      <Footer></Footer>  
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { PixelSpinner } from 'epic-spinners'
import { mapGetters } from 'vuex'

export default {
    data() {
    return {
       displayNav:false,
    } 
},
  components: {
      Header,
      Footer,
      PixelSpinner,
      SideNav: () => import('@/components/SideNav.vue'),
      SideFilter: () => import('@/components/filter.vue')
  },
  computed: {
    ...mapGetters('auth',['isLoading']),
    
  }
}
</script>

<style>

</style>