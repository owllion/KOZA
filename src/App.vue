<template>
<v-app v-cloak>
  <transition name="fade">
  <Layout>  
     <router-view></router-view>    
  </Layout>
  </transition> 
 </v-app>
</template>

<script>
import Cookies from 'js-cookie'
import Layout from '@/components/Layout.vue'
export default {
  name: 'App',
  components: {
    Layout,
  },
  async created() {
    this.$store.dispatch('product/getAllItems')
    this.$store.dispatch('address/getLocations')
    this.$store.commit('product/clear')
    this.$store.commit('product/closeFilter')
    this.$store.commit('auth/setLoading', false)
    const token = Cookies.get('token')
    console.log(token)
    this.$store.commit('auth/setToken',token)
    
  }
};
</script>

<style lang="scss" scoped>
[v-cloak] {
display: none;
}

#app {
  font-family: 'Quicksand', sans-serif;
  box-sizing: border-box;
  .v-data-table > .v-data-table__wrapper > table > thead > tr > th {
  font-size: 50px !important;
}
    
} 


.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: 1s;
}
.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
