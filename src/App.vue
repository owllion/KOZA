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
import Layout from '@/components/Layout.vue'
//import { getCategoryItems, getAllProducts } from '@/api/product.js'

export default {
  name: 'App',
  components: {
    Layout,
  },

  async created() {
    this.$store.dispatch('product/getAllItems')

    // const {data:{ productList }} = await getCategoryItems('MEAT');
    //  console.log(productList)
   
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
