<template>
  <div class="wrapper pa-pt-20 pa-w-full">
      <div class="container pa-flex pa-justify-center pa-items-center pa-w-full pa-p-10 lg-m:pa-block md:pa-p-5">
          <div class="left">
              <div class="md:pa-w-full md:pa-p-0 md:pa-h-full pa-w-99 pa-h-99 pa-p-14">
              <!-- <img src="https://www.yourtrainingedge.com/wp-content/uploads/2019/05/background-calm-clouds-747964.jpg" alt="" class="pa-w-full pa-h-full pa-object-cover"> -->
         <v-carousel 
          :show-arrows="false"
           hide-delimiter-background
           delimiter-icon="mdi-minus">
      <v-carousel-item      
        src="https://www.yourtrainingedge.com/wp-content/uploads/2019/05/background-calm-clouds-747964.jpg"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
              </div>
          </div>

           <div class="right pa-w-1/2 md:pa-w-full">
           <div class=" pa-flex pa-flex-col pa-justify-center pa-h-99 pa-w-full">
              <h1 class="item-name pa-text-7xl pa-font-bold pa-text-center xl:pa-text-3xl ">Red cheese</h1>
              <h4 class="pa-my-10 pa-text-xl pa-font-semibold pa-text-center xl:pa-my-5">$50.00</h4>
              
           <div class="number  pa-flex pa-justify-evenly pa-mb-6 pa-flex-wrap">

             <div class="quantity  xl:pa-mb-8 pa-text-center ">
              <button class=" pa-inline-block pa-w-14  pa-h-5 pa-text-2xl plus-btn focus:pa-outline-none " type="button" name="button" > +
             </button>
             <input type="text" class="   pa-text-center pa-border-2 pa-border-black pa-border-solid  focus:pa-outline-none " maxlength="2" value='1' >

            <button class="pa-w-14 pa-h-5 minus-btn focus:pa-outline-none pa-inline-block pa-font-bold" type="button" name="button"> —  </button>        
          </div>

            <a href="#" class="add pa-p-3 pa-w-48  pa-inline-block pa-text-xl  pa-text-center md:pa-p-4 md:pa-h-16">ADD TO CART</a>
          </div>

              <div class="description  pa-w-full pa-pl-10 pa-py-6 md:pa-px-10">
              <h3 class="pa-font-semibold pa-text-2xl pa-mb-2 ">Product Details</h3>
              <p class="pa-font-medium md:pa-pr-12 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta neque recusandae deleniti nesciunt deserunt, eum ipsam ab? Repellat, animi possimus quas rerum officia quos labore id atque doloribus ut unde.</p>
              </div>

              </div>
          </div>

      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.wrapper {
   background: #f8f8e8;
  
}
.container {
    max-width: 1300px;
    
    margin: 0 auto;
    .item-name {
    font-family: 'Caesar Dressing', cursive;
   }
   .add {
       min-width: 210px;
       transition: all .3s ease-in;
       border:solid 1px black;
       color:white !important;
       background: #000;
       &:hover {
         color: black !important;
         background: transparent;
       }
   }
   .quantity {
       min-width: 250px;
      input {
           width: 45%;
           height: 100%;
           padding: 5px 2px;
           font-size: 1.2rem;
         }       
   }
   
}
@media (max-width:769px) {
    .wrapper {
      .number {
        margin-right: 60px;         
        }
      .quantity {
        margin-bottom: 0;
     }
      .description {
        margin-left: 30px;
     }     
  }   
}
@media (max-width:500px) {
    .wrapper {
        .number {
        margin-right: 0 ;
    }
        .quantity {
        margin-bottom: 30px;
     }
     .description {
        margin-left: 0;
       h3,p {
           text-align: center;
       }
       p {
           padding-right: 0;
       }
       
     }     
       
    }
}
</style>