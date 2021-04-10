<template>
  <div class="wrapper pa-relative pa-w-full pa-py-5 pa-mb-9">
    <!-- slideshow -->
    <div class="pa-w-full" >
    <div class="pa-mx-auto pa-my-10 ">
      <v-carousel  show-arrows-on-hover hide-delimiters height='900'>
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


    <div class="container pa-my-0 pa-mx-auto">
     <!-- main-content -->
     <main>

        <!-- icon features -->
         <section class="features-wrapper " v-scrollAnimation >
           <div class="features-container ">

            <div class="feature " v-for="(item,i) in featureIcon" :key="i" >          
              <div class="pa-w-24 pa-h-24">
             <img :src="require( `../assets/img/${item.name}.png`)" alt="icon" >
             </div>
               <h4  class="pa-font-black pa-text-2xl">{{item.title}}</h4>
               <p class="pa-text-2xl ">{{item.text}}</p>
              </div>

           </div>
        </section>
          
        <!-- icon features -->

       <!-- product category img&link -->
         <section class="gallery pa-w-full">
           <div class="gallery-container" >
  
             <div v-for='(img,i) in galleryImages' :key='i' class="gallery-img-container pa-relative" v-scrollAnimation >
                <img :src=img.src  alt="galleryImage">
                 <div class="gallery-link pa-absolute pa-top-1/2 pa-left-1/2 pa-max-w-sm  pa--translate-x-1/2 pa--translate-y-1/2  pa-text-3xl pa-bg-white">
                <router-link :to="`/products/${img.link}`" >
                  <p class="pa-pt-6 pa-text-center">{{img.link}}</p>
                </router-link>       
                </div>  
              </div>                          
           </div>           
         </section>  
       <!-- product category link -->
        <my-ad/>
      <!-- features products -->
      
         <!-- <my-card/> -->
     
        
      <!-- features products -->       
       </main>
   <!-- main-content -->
      </div> <!-- container -->
      <ScrollToTop/>
   </div> <!-- wrapper -->
</template>

<script>
import ScrollToTop from '@/components/ScrollToTop.vue'
import img from '@/assets/json/img-link.json'
import myAd from '@/components/Ad.vue'
//import myCard from '@/components/Card.vue'
export default {
  components: {
    //myCard,
    myAd,
    ScrollToTop
  },
  data() {
    return {
       productList:'',
       items: img.carousellImages,
       galleryImages: img.galleryImages,
       featureIcon:img.featureIcon
    }
  },
  metaInfo: {
     title:'KOZA'    
    },

}
</script>

<style lang="scss" scoped>
$width:100%;
$height:100%;
 %transition {
    transition: all .3s ease-in-out;
}
%grid {
    display: grid;
    grid-template-columns: [full-start] repeat(8,[col-start]  minmax(min-content, 10rem) [col-end] ) [full-end] ;
   padding: 3rem;

}
.before-enter {
  opacity: 0;
  transform:scale(.5) rotateZ(-25deg) ;
  // transform: translateY(100px);
   transition: all 1s ease-out;
}
.enter {
  opacity: 1;
  //transform: translateY(0px);
  transform:scale(1) rotateZ(0deg);
}
.container {
    .features-wrapper { 
        max-width:1600px;
        margin: 0 auto;       
        @extend %grid;  
         justify-content: center; 
        grid-template-rows:min-content; 

      .features-container {
        grid-column: col-start 1 / full-end;     
        display: grid;
        margin: 2rem 0;
        grid-template-columns:repeat(auto-fit,minmax(20rem,1fr)) ;    
        grid-gap:3rem;
        align-items: start;
       
          .feature {
            display: grid;
            grid-template-columns:repeat(auto-fit,minmax(20rem,1fr)) ;
            grid-row-gap: 1.5rem;
            grid-column-gap:2.5rem ;
            padding-left: 1rem;
             div {
                grid-row: 1 /span 2 ;
                transform: translateY(-1rem);
             }
          }
      }
    }
    .gallery-container {
      width: $width;
      padding: 2rem ;
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
            @extend %transition;
          }
      }
   .gallery-img-container {
     &:hover {
       @extend %transition;
       box-shadow: 4px 4px 5px rgb(126, 121, 121);
       transform: scale(0.98);
      
     }
      .gallery-link {
        @extend %transition;
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
           @extend %transition;
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
     .features-wrapper {
       grid-template-rows: 6rem calc(100vh -6rem);
       
     }
      .gallery-container {
        display: block ;
         div {
          display: block;
          width: $width;
          height: $height;
          margin: 2% 0;
       } 
     }     
  }
  @media (max-width:400px) {
      .features-container {  
         h1,p {
             font-size: 1rem;   
         } 
      }
  } 

}


</style>
