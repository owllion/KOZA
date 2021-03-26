<template>
<div >
  <div 
    class="sidenav-backdrop pa-w-full pa-h-full pa-fixed pa-top-0 pa-left-0 " v-show='showFilter'
     @click="close"
    ></div>

    <transition name="slide-side">
    <!-- side menu -->
      <div  class="aside pa-bg-black pa-w-full pa-h-full pa-fixed pa-top-0 pa-bottom-0 pa-flex-col pa-z-50 pa-p-5 pa-overflow-auto" v-show='showFilter'>

        <!-- close icon -->
         <img src="@/assets/svg/radial-cancel.svg" alt="" class="cancel-icon pa-cursor-pointer pa-inline-block pa-absolute pa-top-3 pa-right-2 pa-w-24"  @click="close">
        <!-- close icon -->

        <!-- category -->
        <div class="cat-ori-filter pa-mt-16 pa-hidden sm:pa-block">
            <h4 class="white--text pa-text-3xl  pa-mb-5 pa-ml-5 pa-tracking-widest">Category</h4>
            <div >
                <ul class="pa-flex pa-flex-wrap">
                    <li v-for='(cat,i) in categorys' :key='i' class="pa-mb-6 pa-w-1/2 pa-tracking-widest">
                        <input type="radio" :value='cat.category' :id="i" v-model='sideCategory' name='category' class="cat-input">
                         <label :for="i" class="white--text">
                           <div><i class="fas fa-check"></i></div>
                           {{cat.category}}
                         </label>
                    </li>
                </ul>
            </div>
        </div>
        <!-- category -->
        
        <!-- price -->
        <div class="price-filter pa-mt-16 ">
            <h4 class="white--text pa-text-3xl  pa-mb-5 pa-ml-5 pa-tracking-widest">Price</h4>
            <div >
                <ul class="pa-flex pa-flex-wrap">
                    <li v-for='price in priceRange' :key='price.value' class="pa-mb-6 pa-w-1/2 pa-tracking-widest">
                        <input type="checkbox" :value='price.value' :id="price.value" v-model='range' class="price-input" >
                         <label :for="price.value" class="white--text">
                           <div><i class="far fa-check-square"></i></div>
                           {{price.range}}
                         </label>
                    </li>
                </ul>
            </div>
        </div>
        <!-- price -->

        <!-- origin -->
        <div class="cat-ori-filter pa-mt-10 xs:pa-mb-10 ">
            <h4 class="white--text pa-text-3xl  pa-mb-5 pa-ml-5 pa-tracking-widest">Origin</h4>
            <div >
                <ul class=" pa-flex pa-flex-wrap">
                    <li v-for='ori in origins' :key='ori.name' class="pa-mb-6 pa-w-1/2 pa-tracking-widest">
                        <input type="radio" :value='ori.name' :id="ori.name" v-model='sideOrigin' class="price-input" name='origin'>
                         <label :for="ori.name" class="white--text">
                           <div><i class="fas fa-check"></i></div>
                           {{ori.name}}
                         </label>
                    </li>
                </ul>
            </div>
        </div>
        <!-- origin -->
        <div class="pa-w-72  pa-pt-5 sm:pa-hidden"><img src="@/assets/svg/filter.svg" alt="" class="pa-w-full  pa-h-full pa-object-contain"></div>
        <div class="clear pa-mt-6 pa-fixed pa-bottom-0  pa-w-72 pa-bg-black pa-left-7  xs:pa-w-78 xs:pa-left-5 s:pa-w-72 s:pa-left-4">
          <button class="white--text pa-p-4 pa-w-full pa-tracking-widest pa-duration-500 pa-transition focus:pa-outline-none" @click='clearAll'>CLEAR ALL</button>
        </div>
     </div>
     </transition>

 </div>   <!--  container -->
</template>

<script>
import { mapMutations } from 'vuex'
import { mapGetters } from 'vuex'
import img from '@/assets/json/img-link'
import sortText from '@/assets/json/filter'
export default {
   data() {
      return {
        priceRange:sortText.price,
        categorys:img.categoryIcon,
        origins:sortText.origin,
    }
  },
  methods: {
    ...mapMutations('product',['setPrice','setCategory','setOrigin','setShowFilter','clear']),
    clearAll() {
       this.clear();
        },
    close() {
          this.showFilter = false
        }
  },
  computed: { 
    ...mapGetters('product',['price','category','origin']),
    sideOrigin: {
      get() {
        return this.origin
      },
      set(value) {
        this.setOrigin(value)
      }
    },
    range: {
      get() {
        return this.price
      },
      set(value) {
        const convert = JSON.parse(JSON.stringify(value))
        this.setPrice(convert)   
      }
    },
    sideCategory: {
      get() {
        return this.category
      },
      set(value) {
        this.setCategory(value)
      }
    },
    showFilter: {
      get() {
        return this.$store.state.product.showFilter
      },
      set(value) {
        this.setShowFilter(value)
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@mixin basicStyle($width,$height,$lineHeight,$borderRadius) {
   border-bottom:1px solid rgb(174, 172, 172);
      label div {
      width: $width;
      height: $height;   
      display: inline-block;
      border:2px solid #fff;
      text-align:center;
      line-height:$lineHeight;
      border-radius:$borderRadius;
      cursor:pointer;	
       i{
         font-size: 16px;
         opacity: 0;
         transition: all .5s;
       }
    }
    input {
       display: none;
       &:checked + label i {
         opacity: 1;
         animation:pop .4s 1;
       }
       @include animation;
     }
}
@mixin flickerAni {
    @keyframes flicker {
       0% {
         opacity: 1;
       }
       33% {
          opacity: .7;
       }
       50% {
          opacity: 1;
       }
       66% {
         opacity: .9;
       }
       100% {
        opacity: 1;
       }
    }
}
@mixin animation {
  @keyframes pop {
       0% {
         transform: scale(1);
       }
       33% {
         transform: scale(0.9);
       }
       66% {
         transform: scale(2.1);
       }
       100% {
         transform:scale(1)
       }
    };
}
.aside {
  font-family: 'Schoolbell', cursive;
  z-index: 10000;
  max-width: 350px;
  backface-visibility: hidden;
  transform-origin: 10% 90%;
   .clear {
     button {
       border:1px solid whitesmoke;
       &:hover {
         background: rgb(255, 253, 253);
         border:1px solid rgb(4, 3, 3);
         color:rgb(4, 3, 3)  !important;
       }
     }
  }
   .cat-ori-filter {
     @include basicStyle(26px,26px,24px,50%)
   }  
    .price-filter {
     @include basicStyle(23px,23px,20px,3px)
    }
   .cancel-icon {
       animation: flicker 2s infinite;
       @include flickerAni;
  }
}
 .sidenav-backdrop {
     z-index: 1000;
     background-color: rgba(0, 0, 0, 0.7)
 }

// .slide-side.move {
//     transition: all .6ms ease-in-out 50ms
// }
 .slide-side-enter-active{
     transition: all .9s 
 }
.slide-side-leave-active {
     transition: all 1s ease-in;
     position: absolute;
     z-index: 0;
}
.slide-side-enter,
.slide-side-leave-to {
    opacity: 0;
    transform: scale(0.4) rotate(-90deg);
    
}
.slide-side-enter {
    transform: scale(0.9)
}
</style>