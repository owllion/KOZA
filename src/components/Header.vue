<template>
<header class="pa-fixed pa-top-0 pa-left-0  pa-bg-white pa-w-full pa-z-50" >
    <!-- bar -->
  <div class=" pa-hidden md:pa-block">
   <i class="fas fa-bars pa-cursor-pointer pa-text-3xl pa-absolute pa-top-4 pa-left-7" @click="$emit('sideNavToggle')"></i>
    </div>

        <!-- nav -->
   <nav class="pa-h-5  pa-flex pa-justify-around  pa-items-center pa-p-8 xs:pa-justify-between md:pa-justify-between">   
    
      <div class="md:pa-pl-16 xs:pa-hidden">
        <h1>
        <router-link class="logo--link pa-text-3xl "  :to="{name:'Home'}">KOZA</router-link>
      </h1>  
      </div>
  
      <div class="pa-flex pa-items-center">
         <ul class=" pa-flex md:pa-hidden pa-w-full"> 
            <li v-for="(item,i) in navText" :key='i'>
              <router-link  :to="{name:`${item.name}` }" class=" pa-p-3 pa-rounded-sm nav-text">{{item.link}}</router-link></li>
      </ul>

      <!-- icon -->
      <ul class="pa-flex pa-w-full pa-items-center xs:pa-ml-60 xxs:pa-ml-52 s:pa-ml-40">
      
          <li class="pa-p-2">
            <router-link  v-if="!$store.getters['auth/token']" to="/login" class="login pa-font-semibold pa-p-3 pa-inline-block">
            <!-- <span class="icon icon-face_retouching_natural "></span> -->LOG IN
          </router-link>
          <a  href='#' v-if="$store.getters['auth/token']"  class="pa-text-3xl " @click.prevent='dropShow = !dropShow'>
            <!-- <span class="icon icon-face_retouching_natural "></span> -->
             <v-avatar size="43" class="avatar pa-pb-2">
               <img
                :src=$store.state.auth.userData.avatarDefault
                alt="avatar"
              > 
            </v-avatar>
            <ul class="drop-down pa-absolute  pa-w-44 pa-z-50 pa-bg-white " v-show='dropShow'>
              <li v-for='(item,i) in profileText' :key='i'>
                <router-link :to="`/userprofile/${item.path}`" class="pa-block pa-p-5 black--text pa-font-lg pa-text-center">
                {{item.name}}
                </router-link>
                </li>             
              <li>
                <a href="#" @click='logout' class="pa-p-5 black--text pa-font-semibold pa-block pa-text-center">LOG OUT
                </a>
              </li>
            </ul>
          </a>
        </li>
       <li class="pa-p-2 pa-relative">
         <router-link  :to="{name:'Cart'}" class="pa-text-3xl ">   
           <span class="icon icon-local_grocery_store">
           </span>

              <!-- cart length -->
             <span class='circle pa-absolute pa-bottom-7 pa-left-6 pa--translate-y-2/4 pa-translate-x-2/4' v-if='token'>
                <span class='number pa-text-xs pa-py-1 pa-px-2 pa-bg-red-800'>{{cartLength}}</span>
             </span>
              <!-- cart length -->

         </router-link>
       </li>
     </ul>  
       <!-- icon --> 
     </div>
   </nav>
 </header>

</template>

<script>
import { mapGetters,mapActions } from 'vuex'
  export default {
    name: 'Header',
    data() {
      return {
        dropShow:false,
        profileText:[
           {name:'PROFILE', path:'profile'},
           {name:'FAVLIST', path:'favlist'},
           {name:'COUPON', path:'coupon'},
           {name:'ORDER', path:'order'},
        ],
        navText:[
           {
             name:'Home',
             link:'HOME'
           },
           {
             name:'Products',
             link:'SHOP'
           },
           {
             name:'Home',
             link:'ABOUT'
           },
        ]
    }
  },
  methods: {
    ...mapActions('auth',['logout'])
  },
  computed: {
      ...mapGetters('auth', ['cartLength','token'])
  }
 
    
  }  
</script>

<style scoped lang='scss'>

$black:rgb(48, 46, 46);
$white:whitesmoke;
%basic{
    font-size: 1.3rem;
    color: $black;
    transition: all .5s;
}

 nav {
  max-width: 1300px;
  margin: 0 auto;
    .avatar {
      transition: all .3s ease-in;
      &:hover {
        transform: scale(1.1);
      }
    } 
    .drop-down {
      padding-left: 0;
      top:3.9rem;
      a {
        transition:all .3s ease-in-out;
        font-size: 1.3rem;
        &:hover {
          background: #000;
          color: white !important;;
        }
      }
    }
    .logo--link {  
        color: $black;
        font-family: 'Caesar Dressing', cursive;
    }
    .login {
        @extend %basic;
        &:hover {
        background-color: $black;
        color: $white
      }
    }
    .nav-text{
        font-weight: 500;
        @extend %basic;
        &:hover {
      background-color: $black;
      color: $white
      }
    }
    .icon{
      color: $black;
      transition: all .5s;
      &:hover {
      color: rgb(50, 118, 220);
    }
    }
    .fa-times{
      color: $white;
    }
    .fa-bars {
      color: $black
    }
    .number {
        color:$white;
        border-radius:50%;
    }
}
 
.aside {
  transition: all .2s ease-in;  
  z-index: 10000;
}

</style>