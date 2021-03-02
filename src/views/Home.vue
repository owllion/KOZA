<template>
  <div class="container w-full h-full">
    <!-- header(component) -->
    <!-- header (component)-->

    <!-- slideshow -->
    
    <!-- slideshow -->

     <!-- main-content -->
    <div>
     <main>
       <!-- our story or something -->
       <div>
         <section></section>
       </div>
       <!-- our story or something -->

       <!-- product category img&link -->
          <div>
         <section></section>
       </div>
       <!-- product category link -->

    <h1 class="text-black text-10xl">XXOO</h1>
    <router-link to="/about" class="text-green-300 text-7xl hover:text-blue-200 pr-3">About</router-link>
   <router-link to="/login" class="text-green-300 text-7xl hover:text-blue-200">Login</router-link>


   <section>
   <h2 class ='text-gray-500 text-5xl'>Best Seller</h2>
   <div>
     {{productList}}
     </div>
   </section>
   
    <p>VUEX TOKEN-->{{testt}}</p>
    <p>product-->{{productList}}</p>
    <p>VUEX-->{{test}}</p>
    <p>USER-->{{user}}</p>
  </main>
   </div>
   <!-- main-content -->

   <!-- footer(component) --> 
   <!-- footer -->

   <!-- SCROLL TO TOP (component)--> 
   <!-- SCROLL TO TOP -->
  </div> 
</template>

<script>
import {getSubItem } from '@/api/product'
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
       productList:'',
       auth:'',
       test:this.$store.state.auth.test
    }
  },
computed : {
    ...mapGetters({
     testt :'auth/token',
     user:'auth/userData'
    })
    
},
  async created() {

    //console.log(`access-token--> ${this.testt}`)
    //console.log(`test-->${this.$store.state.auth.test}`)
    
      const res = await getSubItem()
      console.log(res)
      console.log(`環境變數-->${process.env.VUE_APP_AXIOS_BASE_URL}`)
  }

}
</script>

<style>
h1 {
  font-family:'Finger Paint', cursive;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.links {
  padding-top: 15px;
}
</style>
