<template>
<v-app>
  <Layout>  
     <router-view></router-view>    
  </Layout>
 </v-app>
</template>

<script>
import Layout from '@/components/Layout.vue'
export default {
  name: 'App',
  components: {
    Layout
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Quicksand', sans-serif;
  box-sizing: border-box;
     
} 


</style>
