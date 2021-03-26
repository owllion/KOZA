<template>
  <div>
      <Header @sideNavToggle ='displayNav = !displayNav' />
      <SideNav :show='displayNav' @close='displayNav = false'/>
      <SideFilter/>
      <slot/>

      <Footer></Footer>  
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    data() {
    return {
       displayNav:false,
    } 
},
  components: {
      Header,
      Footer,
      SideNav: () => import('@/components/SideNav.vue'),
      SideFilter: () => import('@/components/filter.vue')
  }
}
</script>

<style>

</style>