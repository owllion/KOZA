<template>
<v-app>
  <transition name="fade">
  <Layout>  
     <router-view></router-view>    
  </Layout>
  </transition> 
 </v-app>
</template>

<script>
import Layout from '@/components/Layout.vue'

export default {
  name: 'App',
  components: {
    Layout,

  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Quicksand', sans-serif;
  box-sizing: border-box;
     
} 

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}
.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
