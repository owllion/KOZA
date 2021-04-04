<template>
  <div class="pa-flex pa-my-0 pa-mx-auto  pa-items-center pa-justify-center pa-flex-wrap pa-px-3">
     <div class="card pa-relative pa-rounded-xl pa-bg-yellow-100 pa-mr-12 pa-mb-36 pa-text-center "  v-tilt="{speed: 900, perspective: 3000,scale:1.1}"  v-for='(item,i) in pageItems' :key='i'>

        <div class="img-container  pa-relative  pa-rounded-xl pa-w-48 pa-h-72">
          <div class="pa-rounded-full pa-bg-red-600 white--text pa-w-10  pa-text-sm pa-text-semibold pa-absolute pa-top-10 pa-right-3" v-if="item.sales>750">Hot</div>
          <div class="pa-rounded-full pa-bg-green-500 white--text pa-w-10  pa-text-sm pa-text-semibold pa-absolute pa-top-4 pa-right-3">New</div>
           <Heart :id=item.productId />
          <router-link :to="`/item/${item.id}`" class="pa-block pa-w-full">
              <img :src=item.image[0] alt="product image" >
          </router-link>   
        </div>     
         <h4 class="pa-text-center pa-font-bold pa-text-xl pa-mb-2">{{item.productName}}</h4>
        <p class="pa-text-center pa-font-semibold pa-pb-3">${{item.price}}</p>
         <button @click="add(item.productId,'1')" class="pa-absolute  pa-text-center pa-p-1 pa-transition pa-duration-300 pa-text-xl pa-font-semibold focus:pa-outline-none" > 
          <i class="fas fa-shopping-cart"></i>
        </button>
       </div>       
  </div>
</template>

<script>
import Heart from '@/components/Heart'
export default {
  props:['pageItems'],
  components:{
    Heart  
  },
  methods: {
    add(id,qty) {
      if(!this.$store.getters['auth/token']) {
        this.$swal({
          icon:'warning',
          title:'Oops!',
          text:'You need to login!'
        })
      }else {
        const params = { productId:id , qty }
        this.$store.dispatch('product/addActions',params)
        
      }
     
    }
  } 
}
</script>

<style lang="scss" scoped>
@mixin translateX ($percent) {
   transform: translateX($percent);
}
%transform {
   transform: translateZ(80px);
}
%color-white {
  color:white
}
  body .card {
      overflow: hidden;
      flex-basis:21%;
      min-width: 200px;
      transform-style: preserve-3d ;
      transform: perspective(1000px);  
      .img-container {
          width: 100%;
          height: 300px;
          padding:2rem ;
          margin-bottom: 4rem;
        a{
          padding: .5rem;
          padding-left: 1.9rem;
          padding-top: 2rem;
          
          img {
            width: 100%;
            height: 250px;
            object-fit: contain;
        }
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
           background: rgb(211, 67, 67);
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

 @media (max-width:1200px) {
     body .card {
       flex-basis: 45%;
       margin-bottom: 5rem;
     }
 }
 @media (max-width:797px) {
      body .card {
         flex-basis: 40%; 
      }
 }
  @media (max-width:639px) {
      body .card {
         flex-basis:100%;
         margin-right: 0; 
      }
 }
</style>