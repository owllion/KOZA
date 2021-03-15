<template>
  <section class=" pa-w-full pa-mt-20 pa-p-20">
    <div class="container pa-m-auto pa-px-12">
     <h2 class="pa-font-sm pa-text-5xl pa-mb-16">All Products</h2>

     <div class="inner-container pa-flex pa-my-0 pa-mx-auto pa-justify-around  pa-items-center pa-flex-wrap ">
     
      <div class="card pa-rounded-xl card   pa-mr-10 pa-mb-36 pa-text-center"  v-tilt="{speed: 900, perspective: 1200, glare:true, 'max-glare':0.5}">
        <div class="img-container pa-bg-red-200 ">
          <div>New</div>
            <router-link to='/' class="pa-block pa-w-full">
                <img src="@/assets/img/veg.png" alt="" class=""></router-link>   
        </div>
        <div></div>
         <h4 class="pa-text-center pa-font-bold pa-text-md">Veggie</h4>
        <p class="pa-text-center pa-font-semibold">$50.00</p>
        <button class="pa-text-center pa-p-3 hover:pa-bg-yellow-200 pa-transition pa-duration-1000 pa-text-3xl pa-border-2 pa-border-solid pa-border-yellow-500">Add To Cart</button>
      </div>
     
     <div class="pa-mb-36 pa-rounded-xl card  pa-h-96 pa-mr-10 pa-mb-5"  v-tilt="{speed: 900, perspective: 1200, glare:true, 'max-glare':0.5}">
        <div class="img-container pa-bg-yellow-200">
            <router-link to='/' class="pa-block pa-w-full">
                <img src="@/assets/img/corn.png" alt="" class=""></router-link>   
        </div>
         <h4 class="pa-text-center pa-font-bold pa-text-md">Veggie</h4>
        <p class="pa-text-center pa-font-semibold">$50.00</p>
      </div>
      <div class="pa-rounded-xl card  pa-h-96 pa-mr-10 pa-mb-5"  v-tilt="{speed: 900, perspective: 1200, glare:true, 'max-glare':0.5}">
        <div class="img-container pa-bg-green-200">
            <router-link to='/' class="pa-block pa-w-full">
                <img src="@/assets/img/carrot.png" alt="" class=""></router-link>   
        </div>
         <h4 class="pa-text-center pa-font-bold pa-text-md">Veggie</h4>
        <p class="pa-text-center pa-font-semibold">$50.00</p>
      </div>
      <div class="pa-rounded-xl card  pa-h-96 pa-mr-10 pa-mb-5"  v-tilt="{speed: 900, perspective: 1200, glare:true, 'max-glare':0.5}">
        <div class="img-container pa-bg-yellow-400">
            <router-link to='/' class="pa-block pa-w-full">
                <img src="@/assets/img/onion.png" alt="" class=""></router-link>   
        </div>
         <h4 class="pa-text-center pa-font-bold pa-text-md">Veggie</h4>
        <p class="pa-text-center pa-font-semibold">$50.00</p>
      </div>
     <div class="pa-rounded-xl card  pa-h-96 pa-mr-10 pa-mb-5"  v-tilt="{speed: 900, perspective: 1200, glare:true, 'max-glare':0.5}">
        <div class="img-container pa-bg-yellow-400">
            <router-link to='/' class="pa-block pa-w-full">
                <img src="@/assets/img/onion.png" alt="" class=""></router-link>   
        </div>
         <h4 class="pa-text-center pa-font-bold pa-text-md">Veggie</h4>
        <p class="pa-text-center pa-font-semibold">$50.00</p>
      </div><div class="pa-rounded-xl card  pa-h-96 pa-mr-10 pa-mb-5"  v-tilt="{speed: 900, perspective: 1200, glare:true, 'max-glare':0.5}">
        <div class="img-container pa-bg-yellow-400">
            <router-link to='/' class="pa-block pa-w-full">
                <img src="@/assets/img/onion.png" alt="" class=""></router-link>   
        </div>
         <h4 class="pa-text-center pa-font-bold pa-text-md">Veggie</h4>
        <p class="pa-text-center pa-font-semibold">$50.00</p>
      </div><div class="pa-rounded-xl card  pa-h-96 pa-mr-10 pa-mb-5"  v-tilt="{speed: 900, perspective: 1200, glare:true, 'max-glare':0.5}">
        <div class="img-container pa-bg-yellow-400">
            <router-link to='/' class="pa-block pa-w-full">
                <img src="@/assets/img/onion.png" alt="" class=""></router-link>   
        </div>
         <h4 class="pa-text-center pa-font-bold pa-text-md">Veggie</h4>
        <p class="pa-text-center pa-font-semibold">$50.00</p>
      </div><div class="pa-rounded-xl card  pa-h-96 pa-mr-10 pa-mb-5"  v-tilt="{speed: 900, perspective: 1200, glare:true, 'max-glare':0.5}">
        <div class="img-container pa-bg-yellow-400">
            <router-link to='/' class="pa-block pa-w-full">
                <img src="@/assets/img/onion.png" alt="" class=""></router-link>   
        </div>
         <h4 class="pa-text-center pa-font-bold pa-text-md">Veggie</h4>
        <p class="pa-text-center pa-font-semibold">$50.00</p>
      </div><div class="pa-rounded-xl card  pa-h-96 pa-mr-10 pa-mb-5"  v-tilt="{speed: 900, perspective: 1200, glare:true, 'max-glare':0.5}">
        <div class="img-container pa-bg-yellow-400">
            <router-link to='/' class="pa-block pa-w-full">
                <img src="@/assets/img/onion.png" alt="" class=""></router-link>   
        </div>
         <h4 class="pa-text-center pa-font-bold pa-text-md">Veggie</h4>
        <p class="pa-text-center pa-font-semibold">$50.00</p>
      </div>
    </div> <!--flex -->
   </div>  <!-- m0-auto-->
  </section>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>
section {
    .container{
        max-width: 1600px;
    }
    .card {
    //box-shadow:5px 10px 20px rgba(79, 76, 76, 0.5);
    flex-basis:21%;
    min-width: 250px;
    transform-style: preserve-3d ;
    transform: perspective(1000px);
    .img-container {
        width: 100%;
        padding:2rem;
        margin-bottom: 1rem;
      img {
        width: 100%;
      }
    }  
   h4 {
      transform: translateZ(80px);
   }
     p {
        color:rgb(201, 22, 22);
        transform: translateZ(80px);
     }
   
   
}
}
 @media (max-width:1200px) {
     body .card {
       width: 33%;
       margin-bottom: 5rem;
     }
 }
 @media (max-width:797px) {
      body .card {
         width: 50%; 
      }
 }
  @media (max-width:639px) {
      body .card {
         width:100%; 
      }
 }

</style>

