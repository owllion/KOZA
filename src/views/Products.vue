<template>
  <section class=" pa-w-full pa-mt-20 pa-p-20">
    <div class="container pa-m-auto pa-px-12">
     <h2 class="pa-font-sm pa-text-5xl pa-mb-16 pa-text-center">All Products</h2>
   <button @click="showalert">HELLO</button>
     <div class="inner-container  pa-flex pa-my-0 pa-mx-auto pa-justify-between  pa-items-center pa-flex-wrap ">

      <div class="filter">
          <div class="pa-w-72 pa-bg-red-200" >500</div>
      </div>  <!--filter -->

      <div class="card pa-rounded-xl card   pa-mr-10 pa-mb-36 pa-text-center "  v-tilt="{speed: 900, perspective: 3000,scale:1.1}">
        <div class="img-container pa-bg-gray-100 pa-relative">
          <div class="pa-bg-black white--text pa-w-10  pa-text-sm pa-text-semibold pa-absolute pa-top-2 pa-right-3">New</div>
            <router-link to='/' class="pa-block pa-w-full">
                <img src="@/assets/img/veg.png" alt="" class=""></router-link>   
        </div>
        
         <h4 class="pa-text-center pa-font-bold pa-text-xl pa-mb-2">Veggie</h4>
        <p class="pa-text-center pa-font-semibold ">$50.00</p>
        <button class="pa-text-center pa-p-1 pa-transition pa-duration-300 pa-text-xl pa-font-semibold"> <span class="span-one">Add To Cart</span>  <span class="span-two"> ➔</span> 

        </button>

      </div>
    
     <div class="pa-mb-36 pa-rounded-xl card  pa-h-96 pa-mr-10 pa-mb-5"  v-tilt="{speed: 900, perspective: 1200, glare:true, 'max-glare':0.5}">
        <div class="img-container pa-bg-yellow-200">
            <router-link to='/' class="pa-block pa-w-full">
                <img src="@/assets/img/corn.png" alt="" class=""></router-link>   
        </div>
         <h4 class="pa-text-center pa-font-bold pa-text-md pa-mb-3">Veggie</h4>
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
  methods: {
    showalert() {
      this.$swal('hello')
    }
  }
}
</script>

<style lang="scss" scoped>
%transform {
   transform: translateZ(80px);
}
%color-white {
  color:white
}
%transition {
  transition:all .3s;
  display: inline-block;
}

@mixin translateX ($percent) {
    transform: translateX($percent);
}

section {
    .container{
        max-width: 1600px;
    }
    .card {
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
   h4{
      @extend %transform;
   }
     p {
        color:rgb(201, 22, 22);
        @extend %transform;
        margin-bottom: .3rem;  
     }
     button  {
         width: 100%;
         height: 50px;
         padding-left: 2.5rem;
         &:hover {   
          @extend %color-white;
           background: black;         
         }
         .span-two{
           @extend %transition;
           @include translateX(-10000%);      
         }
         .span-one {
            @extend %transition;
         }
          &:hover .span-two{
           @extend %color-white;
           @include translateX(0%);
         }
         &:hover .span-one {        
           @include translateX(-10px);
         }
      
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

