<template>
  <section class=" pa-w-full pa-mt-10 ">
    <!-- banner -->
    <Banner>Our Products</Banner>
    <!--banner-->
    <div class="container pa-mx-auto pa-mt-24" v-scrollAnimation>

      <!-- category-icon -->
       <div class="category pa-flex pa-justify-center pa-mb-20 xs:pa-hidden ">
         <ul class="pa-flex pa-flex-wrap pa-justify-center">
           <li  v-for ='(icon,i) in categoryIcon' :key="i" class="pa-mb-5" >
             <button @click='changeCat(icon.category)' class="focus:pa-outline-none">
             <img :src="require( `../assets/img/${icon.name}.png`)" alt="icon" >
            </button>
            </li>
           </ul>
       </div>
     <!-- filter -->
     <div class="filter  pa-px-10 pa-border-b-2 pa-border-solid pa-border-gray-100 pa-mx-auto pa-mb-5 pa-flex pa-justify-between pa-flex pa-items-center md:pa-block md:pa-mb-5">
       <!-- left -->
       <div class="filter-left pa-flex ">
        <button class=" focus:pa-outline-none pa-w-36 pa-px-3 pa-h-12 pa-rounded-full pa-border-2 pa-border-solid pa-border-black md:pa-block md:pa-w-full pa-duration-700 pa-transition" @click='openSideFilter'>
          <span class="pa-mr-2 pa-font-semibold" >Filter</span>
          <i class="fas fa-filter"></i>
        </button>     
       </div>
      <!-- left -->

      <!-- center -->
       <div class="pa-ml-10 pa-px-5 pa-py-2 pa-text-center md:pa-mt-5 md:pa-ml-0">
          <p class="pa-font-semibold">item <span class="pa-text-3xl pa-font-normal green--text" :class="{ 'filterNum': filteredByAll.length===0 }">{{filteredByAll.length}} </span> of 
          <span class="pa-text-3xl pa-font-normal">{{allItems.length}}</span> total</p>
        </div>
      <!-- center -->

      <!-- right -->
        <div class="search-box md:pa-w-full md:pa-mb-6 pa-mr-16">
        <input type="text" class="md:pa-w-full pa-block pa-w-full" v-model='keywords' placeholder="Search"><i class="fas fa-search" ></i>
        </div>
      <!-- right -->
      </div>  <!--filter -->
     
     <div class="inner-container " v-if='filteredByAll.length'>    
       <Card :pageItems=pageOfItems />
     </div> <!--inner container -->

      <div class="pagination" v-if='filteredByAll.length'>
        
          <jw-pagination :items="filteredByAll" :pageSize=12 @changePage="onChangePage"  :styles="customStyles" :labels="customLabels" />
        </div>

      <div class="notFound pa-w-full pa-flex pa-justify-center pa-items-center pa-flex-col pa-my-10 pa-text-center" v-if='filteredByAll.length===0'>

        <div class="pa-w-3/4 pa-px-15">
        <p class="pa-font-semibold pa-text-3xl xs:pa-text-xl">Oops! We couldn't find results for your search:&nbsp;<span class="blue--text">{{keyword}}</span></p>
        </div>  

        <div class="pa-w-99 xs:pa-w-full">
        <img src="@/assets/svg/notFound.svg" alt="" class="pa-w-full pa-h-full pa-block">   
        </div>

      </div> 

     </div>  <!-- container-->
     <ScrollToTop/>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import ScrollToTop from '@/components/ScrollToTop'
import img from '@/assets/json/img-link'
import sortText from '@/assets/json/filter'
import {filterByPrice, getByCategory,getByKeyword,sort, getByOrigin  } from '@/filter/filter'
import Banner from '@/components/Header-banner'
import Card from '@/components/Card'
export default {
  components:{
    ScrollToTop,
    Banner,
    Card
  }, 
  data() {
    return {
        params:'',
        categoryIcon:img.categoryIcon,
        sortType:sortText.sortType,
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
           }
        }
    }
  },
  computed: {
    ...mapGetters('product',['allItems','price','keyword','category','sort','origin']),
    keywords: {
      get() {
        return this.keyword
      },
      set(value) {
        this.setKeyword(value)
      }
    },
    tagShow(){
        const now = Date.now()
        const minusFiveDays = new Date().setDate(new Date().getDate()-5)
        const fiveDaysAgo = new Date(minusFiveDays).getTime()

        return this.allItems.filter(item=> new Date(item.createdAt).getTime() - now < fiveDaysAgo ? true : false )
    },
    filteredByAll() {
      return sort( 
       getByCategory ( getByKeyword( getByOrigin( filterByPrice( 
         this.allItems, this.price),this.origin), this.keyword), this.category ),   
         this.sort );      
    }
  },
   methods: {
      ...mapMutations('product',['setCategory','setShowFilter','setKeyword']),
        onChangePage(pageOfItems) {
            this.pageOfItems = pageOfItems;
        },
        changeCat(value) {
          this.setCategory(value)
        },
        openSideFilter() {
          this.setShowFilter(true)
        }
        
    },
    created() {
      this.keywords = ''
      this.setShowFilter(false)
      this.params = this.$route.params.category
      this.setCategory(this.params)
    }
}
</script>

<style lang="scss" scoped>
.filterNum {
  color:rgb(221, 55, 55)  !important;
}
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
@mixin translateX ($percent) {
    transform: translateX($percent);
}

@mixin animation ($opacity, $trans) {
  opacity: $opacity;
  transform: $trans;
}
.before-enter {
  @include animation(0, translateX(-500px));
  transition: all .3s ease-in-out;
}

.enter {
  @include animation(1, translateX(0px));
}
section {
    .container{
        max-width: 1600px;
        .pagination {
           display: flex;
           justify-content: center;
           flex-wrap: wrap;
          
        }
        .category {
           button {
             display: inline-block;
             transition:all .2s ease-in;
             margin-right: 2.5rem;
             border:2px dotted rgb(9, 155, 26);    
             border-radius: 10px 120px /10px;
             padding: 2.5rem;
              &:hover {
                transform: scale(1.1);
               
              }
              img {
                width: 65px;
              }
           }
        }
        .filter {
          button {
            transition:all .2s ease-in-out;
             &:hover {
            background: #000;
            color:white;           
           }
          }
          .search-box {
            position: relative;
            background: #edede8;
            height: 50px;
            border-radius: 40px;
            padding: 13px;            
            input {
               padding-left: 30px;
               outline: none;
               font-size: 1.2rem;
            }
             .fa-search {
                 position: absolute;
                 color: rgb(196, 213, 44);
                 top: 19px;
                 left: 16px;
               }
          }         
        }
    }
    
}
</style>

