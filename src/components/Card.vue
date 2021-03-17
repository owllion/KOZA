<template>
  <section class=" pa-mt-36 pa-px-20 ">
     <v-snackbar
      v-model="show"
    >
     testtttttt

      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="show = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
     <h2 class="pa-relative pa-font-bold pa-text-5xl pa-mb-16">Best Seller</h2>
     <div class="pa-flex pa-w-130 pa-my-0 pa-mx-auto pa-justify-around  pa-align-center pa-flex-wrap">
     
      <div class="pa-rounded-xl card  pa-h-96 pa-mr-10 pa-mb-5"  v-tilt="{speed: 900, perspective: 1200, glare:true, 'max-glare':0.5}">
        <div class="">
        <img src="https://www.jessicagavin.com/wp-content/uploads/2020/04/whole-wheat-bread-21-1200.jpg" alt="" class="">
        <h4 class="pa-text-center pa-font-bold pa-text-md">Chicken Breast</h4>
        </div>
        <p class="pa-text-center pa-font-semibold">$50.00</p>
      </div>
    

   </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      show:true
    }
  }
}
</script>

<style lang="scss" scoped>
section {
   max-width: 1600px;
   margin: 5rem auto;
   padding: 10rem;
    .card {
    box-shadow:20px 20px 50px rgba(0,0,0,0.5);
   width: 21%;
   transform-style: preserve-3d ;
   transform: perspective(1000px);
   h4 {
      transform: translateZ(100px);
   }
     p {
        color:rgb(201, 22, 22);
        transform: translateZ(80px);
     }
   
   
}
}
 @media (max-width:1200px) {
     body .card {
       
       margin-bottom: 5rem;
     }
 }
</style>

