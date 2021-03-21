<template>
  <section class=" pa-w-full pa-mt-20 pa-p-20">
    <div class="container pa-m-auto pa-px-12">
     <h2 class="pa-font-sm pa-text-5xl pa-mb-16 pa-text-center">All Products</h2>

     <div class="filter">
          <div class="pa-w-72 pa-bg-red-200" >500</div>
      </div>  <!--filter -->

     <div class="inner-container  pa-flex pa-my-0 pa-mx-auto pa-justify-between  pa-items-center pa-flex-wrap " v-scrollAnimation>

      <div class="card pa-relative pa-rounded-xl card   pa-mr-10 pa-mb-36 pa-text-center "  v-tilt="{speed: 900, perspective: 3000,scale:1.1}">
        <div class="img-container pa-bg-yellow-100 pa-relative">
          <div class="pa-bg-yellow-500 white--text pa-w-10  pa-text-sm pa-text-semibold pa-absolute pa-top-2 pa-right-3">New</div>

          <div class="HeartAnimation pa-absolute pa--top-5 pa--left-3 " @click='toggleHeart();testarr() ' :class="{'animate':heart}">
          </div>

            <router-link to='/' class="pa-block pa-w-full">
                <img src="@/assets/img/veg.png" alt="" class=""></router-link>   
        </div>
        
         <h4 class="pa-text-center pa-font-bold pa-text-xl pa-mb-2">Veggie</h4>
        <p class="pa-text-center pa-font-semibold ">$50.00</p>
         <button class="pa-absolute  pa-text-center pa-p-1 pa-transition pa-duration-300 pa-text-xl pa-font-semibold" >  <i class="fas fa-shopping-cart"></i>
        </button>
        <!-- <span class="span-one">Add To Cart</span>  <span class="span-two"> ➔</span>   -->

      </div>
    
       <div class="card pa-relative pa-rounded-xl card   pa-mr-10 pa-mb-36 pa-text-center "  v-tilt="{speed: 900, perspective: 3000,scale:1.1}">
        <div class="img-container pa-bg-yellow-100 pa-relative">
          <div class="pa-bg-yellow-500 white--text pa-w-10  pa-text-sm pa-text-semibold pa-absolute pa-top-2 pa-right-3">New</div>
            <router-link to='/' class="pa-block pa-w-full">
                <img src="@/assets/img/veg.png" alt="" class=""></router-link>   
        </div>
        
         <h4 class="pa-text-center pa-font-bold pa-text-xl pa-mb-2">Veggie</h4>
        <p class="pa-text-center pa-font-semibold ">$50.00</p>
        <button class="pa-absolute  pa-text-center pa-p-1 pa-transition pa-duration-300 pa-text-xl pa-font-semibold" > <span class="span-one">Add To Cart</span>  <span class="span-two"> ➔</span> 

        </button>

      </div>
      <div class="card pa-relative pa-rounded-xl card   pa-mr-10 pa-mb-36 pa-text-center "  v-tilt="{speed: 900, perspective: 3000,scale:1.1}">
        <div class="img-container pa-bg-yellow-100 pa-relative">
          <div class="pa-bg-yellow-500 white--text pa-w-10  pa-text-sm pa-text-semibold pa-absolute pa-top-2 pa-right-3">New</div>
            <router-link to='/' class="pa-block pa-w-full">
                <img src="@/assets/img/veg.png" alt="" class=""></router-link>   
        </div>
        
         <h4 class="pa-text-center pa-font-bold pa-text-xl pa-mb-2">Veggie</h4>
        <p class="pa-text-center pa-font-semibold ">$50.00</p>
        <button class="pa-absolute  pa-text-center pa-p-1 pa-transition pa-duration-300 pa-text-xl pa-font-semibold" > <span class="span-one">Add To Cart</span>  <span class="span-two"> ➔</span> 

        </button>

      </div>
      <div class="card pa-relative pa-rounded-xl card   pa-mr-10 pa-mb-36 pa-text-center "  v-tilt="{speed: 900, perspective: 3000,scale:1.1}">
        <div class="img-container pa-bg-yellow-100 pa-relative">
          <div class="pa-bg-yellow-500 white--text pa-w-10  pa-text-sm pa-text-semibold pa-absolute pa-top-2 pa-right-3">New</div>
            <router-link to='/' class="pa-block pa-w-full">
                <img src="@/assets/img/veg.png" alt="" class=""></router-link>   
        </div>
        
         <h4 class="pa-text-center pa-font-bold pa-text-xl pa-mb-2">Veggie</h4>
        <p class="pa-text-center pa-font-semibold ">$50.00</p>
        <button class="pa-absolute  pa-text-center pa-p-1 pa-transition pa-duration-300 pa-text-xl pa-font-semibold" > <span class="span-one">Add To Cart</span>  <span class="span-two"> ➔</span> 

        </button>

      </div>
      <div class="card pa-relative pa-rounded-xl card   pa-mr-10 pa-mb-36 pa-text-center "  v-tilt="{speed: 900, perspective: 3000,scale:1.1}">
        <div class="img-container pa-bg-yellow-100 pa-relative">
          <div class="pa-bg-yellow-500 white--text pa-w-10  pa-text-sm pa-text-semibold pa-absolute pa-top-2 pa-right-3">New</div>
            <router-link to='/' class="pa-block pa-w-full">
                <img src="@/assets/img/veg.png" alt="" class=""></router-link>   
        </div>
        
         <h4 class="pa-text-center pa-font-bold pa-text-xl pa-mb-2">Veggie</h4>
        <p class="pa-text-center pa-font-semibold ">$50.00</p>
        <button class="pa-absolute  pa-text-center pa-p-1 pa-transition pa-duration-300 pa-text-xl pa-font-semibold" > <span class="span-one">Add To Cart</span>  <span class="span-two"> ➔</span> 

        </button>

      </div>

    </div> <!--flex -->
   </div>  <!-- m0-auto-->
  </section>
</template>

<script>

export default {
  data() {
    return {
      heart:false,
      test:[1,2,3],
    }
  },
  methods: {
    testarr() {
      (this.test.indexOf("1")===-1)? this.test.unshift(1) : this.test.shift()
      
    },
    toggleHeart() {
    this.heart  = (this.test.indexOf("1")===-1 )? !this.heart:this.heart     
    },
    
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

@mixin animation ($opacity, $trans) {
  opacity: $opacity;
  transform: $trans;

}
@mixin translateX ($percent) {
    transform: translateX($percent);
}

.before-enter {
  @include animation(0, translateY(-500px));
  transition: all 2s ease-in-out;
}

.enter {
  @include animation(1, translateY(0px));
}

section {
    .container{
        max-width: 1600px;
    }
    .card {
      overflow: hidden;
      flex-basis:21%;
      min-width: 250px;
      transform-style: preserve-3d ;
      transform: perspective(1000px);
      
      .img-container {
          width: 100%;
          padding:2rem;
          margin-bottom: 1rem;
          .HeartAnimation {
            padding-top: 2em;
            background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/66955/web_heart_animation.png');
            background-repeat: no-repeat;
            background-size: 2900%;
            background-position: left;
            height: 100px;
            width: 100px;
            margin: 0 auto;
            cursor: pointer;
        }
          .animate {
            animation: heart-burst .8s steps(28) forwards;
         }
          @keyframes heart-burst {
            0% {
            background-position: left
            }
            100% {
            background-position: right
           }
        }
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
         top: 30%;
         right:.4rem;
         @include translateX(150%);
         i {
           font-size: 1.5rem;
           background: rgb(237, 164, 29);
           border-radius: 50%;
           padding: 1.4rem;
           &:hover {
             transition:all .3s ease-in-out ;
             transform:scale(1.2);
           }
         }
     }
     &:hover button{   
           @extend %color-white;
           background: transparent; 
           @include translateX(0%);        
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

