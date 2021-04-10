<template>
  <div class="wrapper pa-pt-20 pa-w-full">
      <div class="container pa-flex pa-justify-center pa-items-center pa-w-full pa-p-10 lg-m:pa-block md:pa-p-5">
          <div class="left">
              <div class="md:pa-w-full md:pa-p-0 md:pa-h-full pa-w-99 pa-h-99 pa-p-14">
         <v-carousel        
           hide-delimiter-background
           hide-delimiters>
            <v-carousel-item
            v-for="(img,i) in itemDetail.image"    :key='i'      
            :src="img"
            reverse-transition="fade-transition"
            transition="fade-transition"
            ></v-carousel-item>
           </v-carousel>
         </div>
        </div>

           <div class="right pa-w-1/2 md:pa-w-full">
           <div class=" pa-flex pa-flex-col pa-justify-center pa-h-99 pa-w-full">
              <h1 class="item-name pa-text-7xl pa-font-bold pa-text-center xl:pa-text-3xl ">{{itemDetail.productName}}</h1>
              <h4 class="pa-my-10 pa-text-xl pa-font-semibold pa-text-center xl:pa-my-5">${{itemDetail.price}}</h4>
              
           <div class="number pa-flex pa-justify-evenly pa-mb-6 pa-flex-wrap">

             <div class="quantity  xl:pa-mb-8 pa-text-center ">
              <button class=" pa-inline-block pa-w-14  pa-h-5 pa-text-2xl plus-btn focus:pa-outline-none " type="button" name="button" @click='qty++' :disabled="qty===itemDetail.stock"> +
             </button>
             <input type="text" class="   pa-text-center pa-border-2 pa-border-black pa-border-solid  focus:pa-outline-none " maxlength="2" v-model='qty'>

            <button class="pa-w-14 pa-h-5 minus-btn focus:pa-outline-none pa-inline-block pa-font-bold" type="button" name="button" @click='qty--' :disabled='qty===1'> —  </button>        
          </div>

            <button class="add pa-p-3 pa-w-48  pa-inline-block pa-text-xl  pa-text-center md:pa-p-4 md:pa-h-16" @click="add(itemDetail.productId,qty)" >ADD TO CART</button>
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
import { getProduct } from '@/api/product'
import { mapGetters } from 'vuex'
export default {
    data() {
      return {
        itemId:'',
        itemDetail:'',
        qty:1,
        itemName:''
      }
    },
    computed: {
    ...mapGetters('auth',['isLoading']),
    loading: {
      get() {
         return this.isLoading
      },
      set(value) {
        return this.$store.commit('auth/setLoading', value)
      }
    }
  },
   metaInfo() {
     return {
         title:this.itemName
     }
     
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
  },
    async created() {
      this.itemId = this.$route.params.id
      try {
        this.loading = true
        const payload = { productId : this.itemId }
        const { data:{ productDetail } } = await getProduct(payload) 
        this.itemDetail = productDetail
        this.itemName = productDetail.productName
        this.loading = false
      }catch(err) {
        this.loading = false
        if(err.response) {
          const error = err.response.data.msg
          this.$swal({
            icon:'error',
            title:'Oops!',
            text:error
          })
        }
      }
      
    }
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
       position: relative;
       z-index: 1;
       min-width: 210px;
       transition: all .3s ease-in;
       color:white !important;
       background:black;
       overflow: hidden;
       &::before {
          content: '';
          height:0%;
          width:100%;
          background: rgb(79, 208, 158);
          position: absolute;
          left: 0;
          bottom: 0;
          z-index: -1;
          transition: .5s;
          border-radius: 50% 50% 0 0;
       }
       &:hover::before {
         height: 180%;
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