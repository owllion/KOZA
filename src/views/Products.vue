<template>
  <section class=" pa-w-full pa-mt-20 pa-p-5">
    
    <div class="container pa-m-auto " v-scrollAnimation>

     <h2 class="pa-font-sm pa-text-5xl pa-mb-16 pa-text-center">Our Products</h2>

     <div class="filter pa-px-10 pa-mx-auto pa-mb-5 pa-flex pa-justify-between md:pa-block md:pa-mb-5">
        <button class="pa-w-36 pa-p-3 pa-border-2 pa-border-solid pa-border-black md:pa-block md:pa-w-full pa-duration-700 pa-transition" ><span class="pa-mr-2">Filter</span><i class="fas fa-filter"></i></button>
        <div class="search pa-pr-5 md:pa-block md:pa-w-full">
        <input type=" md:pa-w-full" v-model='term'><i class="fas fa-search" ></i>
        </div>
      </div>  <!--filter -->
     
     <div class="inner-container  pa-flex pa-my-0 pa-mx-auto  pa-items-center pa-justify-center pa-flex-wrap pa-px-3" v-if='filterData.length'>

      <div class="card pa-relative pa-rounded-xl pa-bg-yellow-100 pa-mr-12 pa-mb-36 pa-text-center "  v-tilt="{speed: 900, perspective: 3000,scale:1.1}"  v-for='(item,i) in pageOfItems' :key='i'>

        <div class="img-container  pa-relative  pa-rounded-xl pa-w-48 pa-h-72">
          <div class="pa-bg-yellow-500 white--text pa-w-10  pa-text-sm pa-text-semibold pa-absolute pa-top-2 pa-right-3">New</div>
          <div class="HeartAnimation pa-absolute pa--top-5 pa--left-3 " :class="{'animate':heart}">
          </div>
          <router-link to='/' class="pa-block pa-w-full">
              <img :src=item.image[0] alt="product image" >
              </router-link>   
        </div>     
         <h4 class="pa-text-center pa-font-bold pa-text-xl pa-mb-2">{{item.productName}}</h4>
        <p class="pa-text-center pa-font-semibold pa-pb-3">${{item.price}}</p>
         <button class="pa-absolute  pa-text-center pa-p-1 pa-transition pa-duration-300 pa-text-xl pa-font-semibold"  >  <i class="fas fa-shopping-cart"></i>
        </button>
       </div>       
      </div> <!--inner container -->

      <div class="pagination" v-if='filterData.length'>
        
          <jw-pagination :items="filterData" :pageSize=12 @changePage="onChangePage"  :styles="customStyles" :labels="customLabels" />
        </div>

      <div class="notFound pa-w-full pa-py-10 pa-mx-auto pa-my-10 pa-text-center" v-if='filterData.length===0'>
        <p class="pa-font-semibold pa-text-5xl sm:pa-text-3xl">Oops! We couldn't find results for your search:<span class="blue--text">{{term}}</span></p>
        <img src="@/assets/svg/notFound.svg" alt="" class="pa-w-3/4 pa-mx-auto pa-block">       
      </div>   
     </div>  <!-- container-->
     <ScrollToTop/>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import ScrollToTop from '@/components/ScrollToTop.vue'
export default {
  components:{
    ScrollToTop
  },
  
  data() {
    return {
        heart:false,
        cat:'BREAD',
        term:'',
        pageOfItems: [],
        customLabels : {
            first: '<<',
            last: '>>',
            previous: '<',
            next: '>'
       },
        customStyles: {
          li: {
              display: 'inline-block',
              
          },
          a: {
              color: 'black',
              borderRadius: '50%',
              
           }
        }
    }
  },
   methods: {
        onChangePage(pageOfItems) {
            this.pageOfItems = pageOfItems;
        }
    },
  computed: {
    ...mapGetters('product',['allItems']),
    filterData() {
      const vm = this
      return this.term.length? this.allItems.filter(item=> item.productName.toLowerCase().indexOf(vm.term.toLowerCase())> -1 ) : this.allItems
      // return this.cat? this.allItems.filter(item=> item.category === vm.cat) : this.allItems
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
        .pagination {
           display: flex;
           justify-content: center;
           flex-wrap: wrap;
          
        }
        .filter {
          button {
            transition:all .2s ease-in-out;
             &:hover {
            background: #000;
            color:white;           
           }
          }
          input {
            border: solid 2px gray;
            border-radius: 10px;
            padding: 6px;
             &:focus {
               outline: none;
             }
          }
          
        }
    }
    .card {
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

