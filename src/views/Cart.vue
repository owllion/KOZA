<template>
  <section class="wrapper pa-w-full  pa-mt-16 pa-mb-10"> 
       <!-- banner -->
     <Banner>My Cart</Banner>
      <!--banner-->
      <div>
      <p v-show="!cartLength">
      Your cart is empty!
      <router-link to="/" class="pa-block pa-text-5xl pa-p-6">Go shopping</router-link>
    </p>
     </div>
     <div class="container pa-p-20 pa-mx-auto pa-my-5 pa-bg-white pa-shadow-md xs:pa-p-4"  v-scrollAnimation v-show='cartLength'>   

      <div class="select-all pa-text-left pa-w-48 xs:pa-w-full  xs:pa-text-center pa-mb-5  pa-border-2 pa-border-gray-100 pa-border-solid pa-py-3">
      <div class="pa-flex  pa-w-full pa-pl-7 xs:pa-justify-center xs:pa-pl-0">
          <input type="checkbox" class="checkbox">
        <span class="pa-pl-5 pa-pt-1.5  pa-text-xl pa-font-semibold ">SELECT All</span>
    </div>
  </div> 
  
    <table class="table-auto">
  <thead>  
    <tr class=" pa-text-center  table-title pa-bg-black white--text">
      <th></th>
      <th >PRODUCT</th>
      <th>PRICE</th>
      <th>QUANTITY</th>
      <th>SUBTOTAL</th>
      <th>REMOVE</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for='(item,i) in cartList' :key='i'>
       <td class="pa-pl-5">
        <input type="checkbox" class="checkbox">
            </td>
      <td class="image">
        <div class="pa-flex pa-justify-center">
         <div class="pa-w-24 pa-h-24 pa-mr-5">
          <img :src="item.image[0]" alt="icon" >
         </div>
         <p class="pa-pt-10 pa-font-semibold ">{{item.productName}}</p>
         </div>
      </td>
      <td class="pa-font-semibold">{{item.price}}</td>
      <td>
        <div class="quantity ">
          <button class="pa-p-5  pa-text-2xl plus-btn focus:pa-outline-none " type="button" name="button"  :disabled=' itemQty > item.stock' >
            <img src="@/assets/svg/plus.svg" alt="" > 
          </button>
          <input type="text" :value="item.qty" class="pa-w-10  pa-text-center pa-border-2 pa-border-gray-100 pa-border-solid  focus:pa-outline-none " maxlength="2"  readonly>

          <button class="pa-p-5  minus-btn focus:pa-outline-none " type="button" name="button"  :disabled='item.qty === 1'>
            <!--  -->
              <img src="@/assets/svg/minus.svg" alt="" class="" > 
          </button>
        </div>
      </td>
      <td class="pa-font-semibold">{{ item.price *item.qty}}</td>
      <td class='pa-pl-4'>
         <div class=" cancel pa-text-center">
           <button class="cancel-btn xs:pa-ml-0" type="button" name="button" >
             <img src="@/assets/svg/cancel.svg" alt="" class="" >
          </button>
         </div>
        </td>
    </tr>
    
  </tbody>
</table>
  <!-- subtotal -->
        <div class="totalPrice pa-flex pa-justify-end md:pa-block ">
        <table class="pa-w-full  ">
          <tr>
            <td class="pa-font-semibold">SUBTOTAL</td>
            <td>${{subTotal}}</td>
          </tr>
          <tr>
            <td class="pa-font-semibold">TAX</td>
            <td>${{tax}}</td>
          </tr>
          <tr>
            <td class="pa-font-semibold">TOTAL</td>
            <td>${{subTotal+tax}}</td>
          </tr>
        </table>
        </div>
  <!-- subtotal -->
    <!-- continue link -->
    <div class="continue pa-mt-10 pa-flex pa-justify-between md:pa-block">
      <div class="clearAndShopBtn">
          <router-link to='/checkout' class="pa-inline-block pa-bg-black white--text pa-px-6 pa-py-3  pa-mr-9 pa-duration-500 pa-transition md:pa-w-full md:pa-text-center">CONTINUE SHIPPING
      </router-link>
          <router-link to='/checkout' class="pa-inline-block pa-bg-black white--text pa-px-6 pa-py-3   pa-duration-500 pa-transition md:pa-w-full md:pa-mt-5 md:pa-text-center">
          CLEAR ALL
      </router-link>
      </div>

      <router-link to='/checkout' class="pa-inline-block pa-bg-black white--text pa-px-6 pa-py-3   pa-duration-500 pa-transition  md:pa-w-full md:pa-text-center md:pa-mt-5">
      CHECK OUT
      </router-link>
     </div>
        <!-- continue link -->
</div>
  </section>
</template>

<script>
import Banner from '@/components/Header-banner'
import { mapGetters,} from 'vuex'
export default {
  components:{
    Banner   
  }, 
  data() {
    return {
      itemQty:1,
      tax:1.00
    }
  },
  computed: {
    ...mapGetters('auth',['cartList','cartLength']),
    subTotal() {
      return this.cartList.reduce((total, p) => {
        return Math.round(total + p.price * p.qty)
      },0)
    }
    
  },
  created() {
    console.log(this.cartList)
  }
}
</script>

<style lang="scss" scoped>
@mixin animation ($opacity, $trans) {
  opacity: $opacity;
  transform: $trans;
}
.before-enter {
  @include animation(0, translateX(500px));
  transition: all .3s ease-in-out;
}

.enter {
  @include animation(1, translateX(0px));
}
.wrapper {
  .header {
    
     h1 {
      font-family: 'Quicksand', sans-serif !important;
   }
}
  .container {
    max-width: 1300px;
    table {
      border-collapse: collapse;
       width:100% ;
       .table-title {
         th {
            padding: 20px 30px;
         }       
       }
       .quantity {
         input {
           width: 32px;
           height: 100%;
           padding: 5px 2px;
           font-size: 20px;
         }       
        }
       tr {
         border-bottom: 1pt solid rgb(197, 197, 197);
          td {
            padding: 30px;
            text-align:center;           
          }
       }       
    }   
    button {     
      img {
        width: 25px;
        height: 15px;     
      }
    }
    .checkbox {
     appearance: none;
     transition: all .3s ;
     outline: none;
     font-size: 25px;
      font-family: "Font Awesome 5 Free"; 
      &::after {
        content: '\f111'; 
        display: inline-block;
        text-align: center;
        width: 1em;
      }
      &:checked::after {
      font-weight: 900;
      content: '\f058';
      animation: pop .4s 1; 
    }
    @keyframes pop {
       0% {
         transform: scale(1);
       }
       33% {
         transform: scale(0.9);
       }
       66% {
         transform: scale(1.5);
       }
       100% {
         transform:scale(1)
       }
    };
    &:hover {
      transform: scale(1.2);
    }
    }
    .totalPrice {      
      table {
        border-top:2px solid rgb(16, 15, 15);
        max-width: 350px;
        padding: 0;
        tr {
          padding: 3px;
          border: none;
          td {
            text-align: right  !important;
            padding: 5px;
           
          }
        }
      }
    }
    .continue {
       a {
         font-size: 1.2rem;
        &:hover {
          border:solid black 1px;
          background: white;
          color:rgb(0, 0, 0)  !important;
        }
      }
    }
  }
}

@media(max-width:800px) {
  .container{
    table {
      thead {
        display: none;
      }
      tbody td{
        display: block!important;       
       padding: 0;
        
      }
    }
    .totalPrice {
      table {
        max-width: 1000px  !important;
      }
    }
  }
}
@media(max-width:321px) {
    .container {
      .totalPrice{              
          td {
            padding: 15px  !important;
          }       
      }
    }
}
</style>