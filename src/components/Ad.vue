<template>    
    <section class="wrapper" >
           <div class="picture-container" v-scrollAnimation>   
              <img src="@/assets/img/shop.png" alt="shop" class="img-one">    
       </div>
       
        <div class="content-container" v-scrollAnimation> 
         <div class="content" >
            <h3 class="pa-mb-5 pa-font-bold">Only The Fresh</h3>
             <h2 class="pa-font-semibold pa-mb-10 ">&ldquo;Value For Money.&rdquo;                
             </h2>
              <p class="pa-text-2xl pa-font-semibold">
                Most health food stores carry organic herbal remedies, but as organics gain popularity these items are becoming available in traditional grocery stores as well.
              </p>
              <v-btn
                color="brown lighten-2 white--text"
                x-large
                light
                rounded
                height='60'
                width='250'            
                to='/allproducts'
                class="btn"
                > Buy Now
              </v-btn>    
         </div>   
       </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
%font {
  font-family: 'Cormorant Unicase', serif;
}

@mixin animation ($opacity, $trans) {
  opacity: $opacity;
  transform: $trans;
}
.before-enter {
  @include animation(0, translateY(-500px));
  transition: all 2s ease-in-out .9s;
}

.enter {
  @include animation(1, translateY(0px));
}

.wrapper {
  margin: 6rem 0;
  background: #f5ebd3;
  display: flex;
  flex-wrap: wrap;

  .picture-container {
    flex-basis: 50%;
    padding: 5rem;

    img {
      object-fit: cover;

    }
  }

  .content-container {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-basis: 50%;

    .content {
      padding: 0 6rem;
      h3 {
        @extend %font;
        color: rgb(126, 71, 71);
        font-size: 4vw;
      }

      h2 {
        @extend %font;
        font-size: 4vw;
        color: rgb(94, 75, 6);
      }

      p {
       
        margin-bottom: 3rem;
        font-size: 1rem;
      }
    }
  }
  @media (max-width:900px) {
    .wrapper {
      display:block;
        .content {
          padding-bottom: 5rem ;
        }
    }
  }
  @media (max-width:412px) {
      .wrapper {
        .picture-container {
          padding: 2rem;
        }
   }
 }
 @media(max-width:321px) {
       .wrapper {
          .content {
          padding: 0 1rem ;
          .btn {
            margin-bottom: 2rem;
          }
        }
      } 
 }
}
       
</style>
