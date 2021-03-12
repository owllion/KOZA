<template>
  <div class="wrapper pa-relative pa-w-full pa-px-7  pa-py-5 pa-mb-9">
    <div class="container pa-my-0 pa-mx-auto">

    <!-- slideshow -->
    <div class="pa-w-full ">
    <div class="pa-mx-auto pa-my-10 ">
      <v-carousel hide-delimiters height='700'>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      eager
    ></v-carousel-item>
  </v-carousel>
  </div>
</div>
    <!-- slideshow -->

     <!-- main-content -->
    <div>
     <main>
       <!-- product category img&link -->
         <section class="gallery pa-w-full">
           <div class="gallery-container" >
  
             <div v-for='(img,i) in galleryImages' :key='i' class="gallery-img-container pa-relative">
                <img :src=img.src  alt="galleryImage">
                 <div class="gallery-link pa-absolute pa-top-1/2 pa-left-1/2 pa-max-w-sm  pa--translate-x-1/2 pa--translate-y-1/2  pa-text-3xl pa-bg-white">
                <router-link :to='{name:"Products"}' >
                  <p class="pa-pt-6 pa-text-center">{{img.link}}</p>
                </router-link>       
                </div>  

              </div> 
              
                             
           </div>           
         </section>
       
       <!-- product category link -->

   <section>
   <h2 class ='pa-text-gray-500 pa-text-5xl'></h2>
   </section>

  </main>
   </div>
   <!-- main-content -->

   

   <!-- SCROLL TO TOP (component)--> 
   <!-- SCROLL TO TOP -->

      </div> <!-- container -->
   </div> <!-- wrapper -->

</template>

<script>
import img from '@/assets/json/img-link.json'
export default {
  data() {
    return {
       productList:'',
       items: img.carousellImages,
       galleryImages: img.galleryImages,
    }
  },

}
</script>

<style lang="scss" scoped>
$width:100%;
$height:100%;
@mixin transition {
    transition: all .3s ease-in-out;
}

.container {
  max-width:1400px;
}
h1 {
  font-family:'Finger Paint', cursive;
}
.gallery-container {
   width: $width;
   padding-bottom: 3rem ;
   display: grid;
   grid-template-columns:auto auto auto;
   grid-auto-rows:minmax(15rem,auto);
   grid-gap:1rem;
   grid-auto-flow: dense;
   div {
     height: $height;
     width: $width;
     overflow:hidden;

     &:first-child {
     grid-column-start: span 2;
     grid-row-start: span 2;
    }
     &:nth-child(4),&:nth-child(5),&:nth-child(6) {  
     grid-row-start: span 2;
    }
       img {
         width: $width;
         height: $height;
         object-fit: cover;
         @include transition;
      }
   }
   .gallery-img-container {
     &:hover {
       @include transition;
       filter: drop-shadow(4px 4px 5px rgb(126, 121, 121));
       transform: scale(0.98);
     }
     &:hover img {
       filter:blur(3px)
     }
      .gallery-link {
        @include transition;
        width: 16rem;
        height: 5rem;   
        transform: translate(-500%,-50%);
        &:hover {
            background: rgb(157, 106, 13);
          }
        &:hover a{
           color:rgb(247, 244, 244);
              font-size:2.1rem;
              font-weight: 400;
        }
          a {
            color:brown;
           @include transition;
          }        
      }
      &:hover .gallery-link{
       transform: translate(-50%,-50%);
    }
  }  
}
@media (max-width:900px) {    
      .gallery-container  div {
          &:nth-child(4) {
          grid-column:1/3;         
        }
          &:nth-child(6) {
          grid-column-end: span 3;
          }
          &:nth-child(5) {
          grid-column:3/4;        
         }
        }    
      }
 @media (max-width:769px) {
      .gallery-container {
        display: block;
         div {
          display: block;
          width: $width;
          height: $height;
          margin: 2% 0;
       } 
     }     
  }

</style>
