<template>
  <section class="wrapper pa-w-full  pa-mt-16 pa-mb-10"> 
      <div class="pa-flex pa-justify-center pa-items-center " v-show="!cartList.length">
        <div class="content pa-flex pa-flex-wrap pa-w-99  pa-items-center">
          <div class="left img-container pa-w-1/2 pa-pr-5 md:pa-w-full md:pa-px-36 xs:pa-px-16">
          <img src="@/assets/svg/cart-empty.svg" alt="" class="pa-w-full pa-h-full pa-object-cover">
          </div>

          <div class="right pa-w-1/2 md:pa-w-full md:pa-px-24 xs:pa-px-20">
           <p class="pa-text-3xl  pa-block pa-text-center pa-font-semibold pa-tracking-wider md:pa-text-sm"> Your cart is empty! </p>        
          <router-link to="/allproducts" class="shop-btn pa-block  pa-text-2xl pa-p-3 pa-text-center pa-bg-yellow-500 white--text  pa-tracking-wider pa-transition pa-duration-500 md:pa-text-sm">Go shopping</router-link>
         </div>
    </div>
     </div>

     <div class="container pa-p-20 pa-mx-auto pa-my-5 pa-bg-white pa-shadow-md xs:pa-p-4"  v-scrollAnimation v-show='cartList.length'>   

      <div class="select-all pa-text-left pa-w-48 xs:pa-w-full  xs:pa-text-center pa-mb-5  pa-border-2 pa-border-gray-100 pa-border-solid pa-py-3 pa-hidden" >
      <div class="pa-flex  pa-w-full pa-pl-7 xs:pa-justify-center xs:pa-pl-0">
          <input type="checkbox" class="checkbox" v-model="allcheck" @click="checkall" :checked='allcheck' @change='checkall'>
        <span class="pa-pl-5 pa-pt-1.5  pa-text-xl pa-font-semibold ">SELECT All</span>
    </div>
  </div> 
  
    <table class="table-auto">
  <thead>  
    <tr class=" pa-text-center  table-title pa-bg-black white--text">
      <th>
       
        <span class="pa-pr-3 pa-text-center pa-inline-block">SELECT All</span>
         <input type="checkbox" class="checkbox pa-inline-block pa-h-10" v-model="allcheck" @click="checkall">
        </th>
      <th>PRODUCT</th>
      <th>PRICE</th>
      <th>QUANTITY</th>
      <th>SUBTOTAL</th>
      <th>REMOVE</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for='(item,i) in cartList' :key='i'>
       <td class="pa-pl-5">
        <input type="checkbox" class="checkbox" :value="item" :checked='item.isChecked' @click='selectItem(item)'>
            </td>
      <td class="image">
        <div class="pa-flex pa-justify-center">
         <div class="pa-w-24 pa-h-24 pa-mr-5">
           <router-link :to="`/item/${item.productId}`" class="pa-block pa-h-full pa-w-full">
          <img :src="item.image[0]" alt="icon" class="pa-w-full pa-h-full pa-object-contain">
          </router-link>
         </div>
         <p class="pa-pt-10 pa-font-semibold ">{{item.productName}}</p>
         </div>
      </td>
      <td class="pa-font-semibold">${{item.price}}</td>
      <td>
        <div class="quantity ">
            <button class="pa-pr-2 plus-btn focus:pa-outline-none " type="button" name="button"  @click="plus(i)" :disabled=' item.qty === item.stock' >
             <i class="fas fa-plus pa-text-sm"></i>
            <!-- <img src="@/assets/svg/plus.svg" alt="" >  -->
          </button>
          <input type="text" class="pa-w-10   pa-text-center pa-border-2 pa-border-gray-100 pa-border-solid  focus:pa-outline-none " maxlength="2" v-model='item.qty' readonly>

          <button class="pa-pl-2 minus-btn focus:pa-outline-none " type="button" name="button"  :disabled='item.qty === 1' @click="minus(i)">
            <i class="fas fa-minus pa-text-sm"></i>
              <!-- <img src="@/assets/svg/minus.svg" alt="" class="" >  -->
          </button>
        </div>
        <div>
          <span class="pa-pr-1">stock:</span><span class="red--text pa-font-semibold pa-tracking-widest">{{item.stock}}</span>
        </div>
      </td>
      <td class="pa-font-semibold">${{ Math.floor(item.price *item.qty)}}</td>
      <td class='pa-pl-4'>
         <div class=" cancel pa-text-center">
           <button class="cancel-btn xs:pa-ml-0 focus:pa-outline-none" type="button" name="button" @click='deleteItem(item.productId,cartList)' >
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
            <td class="pa-font-semibold">TOTAL</td>
            <td>${{subTotal}}</td>
          </tr>
        </table>
        </div>
  <!-- subtotal -->
    <!-- continue link -->
    <div class="continue pa-mt-10 pa-flex pa-justify-between md:pa-block">
      <div class="clearAndShopBtn">
          <router-link to='/products' class="pa-inline-block pa-bg-black white--text pa-px-6 pa-py-3  pa-mr-9 pa-duration-500 pa-transition md:pa-w-full md:pa-text-center">CONTINUE SHOPPING
      </router-link>
          <button  @click="clear" class="clear-btn pa-inline-block pa-bg-black white--text pa-px-6 pa-py-3   pa-duration-500 pa-transition md:pa-w-full md:pa-mt-5 md:pa-text-center">
          CLEAR ALL
      </button>
      </div>

      <a href="#" class="checkout-btn focus:pa-outline-none pa-inline-block pa-bg-red-600 white--text pa-px-6 pa-py-3   pa-duration-500 pa-transition  md:pa-w-full md:pa-text-center md:pa-mt-5" @click="checkCart">
      CHECK OUT
      </a>
     </div>
        <!-- continue link -->
       
</div>
  </section>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  data() {
    return {
      allcheck: false,     
    }
  }, 
  computed: {
    ...mapGetters('auth',['cartList','cartLength']),
    ...mapGetters('order',['order_item']),
    subTotal() {
       let total = 0 
       this.cartList.forEach(item => {
         if(item.isChecked) {
           return total +=  Math.floor(item.price*item.qty)
         }
       })
      return total
    },  
  },
  methods: {
    selectItem(item) {
       item.isChecked = !item.isChecked
       let checklist = []
       this.cartList.forEach(item=> {
         if(item.isChecked === true) {
           checklist.push(item)
         }
         if( checklist.length === this.cartList.length) {
           this.allcheck = true
        }else {
           this.allcheck = false
        } 
       })
       
    },
    clear(){
      this.$swal({
        icon:'warning',
        title: 'Are you sure?',
        showClass: {
          popup: 'animate__animated animate__flipInX'
        },
        hideClass: {
          popup: 'animate__animated animate__flipOutY'
        },
        showDenyButton: true,
        showCancelButton: true,      
        confirmButtonText: `YES!`,
        denyButtonText: `Wait a minute!`,
        confirmButtonColor: "#1D7874",
        denyButtonColor:'#E66262',
        cancelButtonColor:'#C7A27C'
      }).then(result => { 
        if (result.isConfirmed) {
          this.clearActions()
          this.$swal('All clear!', '', 'success')       
        } else if (result.isDenied) {
          this.$swal('That\'s right.', '', 'info')
        }
      })
      
    },
    plus(i) {
      this.cartList[i].qty++  
      this.setQty( this.cartList[i].productId,this.cartList[i].qty,this.cartList)
    },
     minus(i) {
      this.cartList[i].qty--   
      this.setQty( this.cartList[i].productId, this.cartList[i].qty,this.cartList)
    },
    ...mapMutations('order',['setCheckedItem','setEl','setSubTotal']),
    ...mapActions('product',['adjustQty','deleteItemActions','clearActions']),
     deleteItem(productId,cartList) {
       this.$swal({
        imageUrl: "https://upload.cc/i1/2021/04/11/iO7UHD.png",
        title: 'Are you sure ?',
        showClass: {
          popup: 'animate__animated animate__flipInX'
        },
        hideClass: {
          popup: 'animate__animated animate__flipOutY'
        },
        showDenyButton: true,
        showCancelButton: true,      
        confirmButtonText: `YES!`,
        denyButtonText: `Wait a minute!`,
        confirmButtonColor: "#000000",
        denyButtonColor:'#A52422',
        cancelButtonColor:'#CE8D66'
      }).then(result => { 
        if (result.isConfirmed) {
          const payload = { productId, cartList }
          this.deleteItemActions(payload)          
          this.$swal('Delete!', '', 'success')
         } else if (result.isDenied) {
          this.$swal('Good decision.', '', 'info')
        }
      })
    },
     setQty(productId, qty, cartList) {     
         const payload = { productId, qty , cartList } 
         this.adjustQty(payload)     
     },
     checkCart() {
       if(this.subTotal===0) {       
         this.$swal({
           icon:'warning',
           title:'Hey!',
           text:'You have not chosen anything!'
         })
       }else {
         const checkedList = this.cartList.filter(item=> item.isChecked === true)
          this.setCheckedItem(checkedList)
          this.setSubTotal(this.subTotal)
          console.log(this.$store.state.order.subTotal)
          this.setEl(2)
       }     
     },
     checkall() {
      this.allcheck = !this.allcheck
      this.cartList.forEach(i=> i.isChecked = this.allcheck)
     }
     
  },
  watch: {
    subTotal(newVal) {
        this.setSubTotal(newVal)

    }
  },
  created() {
    this.checkall(true)
     
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
  .shop-btn {
     box-shadow: 3px 3px #948320;
    &:hover {
      transform:translateY(6px);
      box-shadow: none;
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
        &:hover {
          border:solid black 1px;
          background: white;
          color:rgb(0, 0, 0)  !important;
        }
      }
    }
    .clear-btn {
      &:hover {
          border:solid #000000 1px;
          background: white;
          color:#000000  !important;
       }
    }
    .checkout-btn {      
       &:hover {
          border:solid #DC2626 1px;
          background: white;
          color:#DC2626  !important;
       }
    }
  }
}

@media(max-width:800px) {
  .container{
    .select-all {
      display: block;
    }
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