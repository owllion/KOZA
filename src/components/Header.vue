<template>
<header class="pa-fixed pa-top-0 pa-left-0  pa-bg-white pa-w-full pa-z-50" >
    <!-- bar -->
  <div class=" pa-hidden md:pa-block">
   <i class="fas fa-bars pa-cursor-pointer pa-text-3xl pa-absolute pa-top-4 pa-left-7" @click="$emit('sideNavToggle')"></i>
    </div>

        <!-- nav -->
   <nav class="pa-h-5  pa-flex pa-justify-around  pa-items-center pa-p-8 xs:pa-justify-end xxs:pa-justify-end md:pa-justify-between pa-w-screen">   
    
      <div class="md:pa-pl-16 xs:pa-hidden">
        <h1>
        <router-link class="logo--link pa-text-3xl "  :to="{name:'Home'}">KOZA</router-link>
      </h1>  
      </div>
  
      <div class="pa-flex pa-items-center ">
         <ul class=" pa-flex md:pa-hidden pa-w-full"> 
            <li v-for="(item,i) in navText" :key='i'>
              <router-link  :to="{name:`${item.name}` }" class=" pa-p-3 pa-rounded-sm nav-text">{{item.link}}</router-link></li>
      </ul>

      <!-- icon -->
      <ul class="pa-flex  pa-items-center pa-w-full ">
      
          <li class="pa-p-2">
            <router-link  v-if="!$store.getters['auth/token']" to="/login" class="login  pa-font-semibold pa-p-3 pa-inline-block xs:pa-text-xs xs:pa-p-0">
             LOG IN
          </router-link>
          <a  href='#' v-if="$store.getters['auth/token']"  class="pa-text-3xl " @click.prevent='dropShow = !dropShow'>
             <v-avatar size="43" class="avatar pa-pb-2 pa-relative">
               <img
                :src=switchAvatar
                alt="avatar"
              > 
            </v-avatar>
            <ul class="drop-down pa-rounded-lg pa-overflow-hidden pa-absolute  pa-w-44 pa-z-50 pa-bg-white md:pa-right-3 xs:pa-right-20 " v-show='dropShow'>
              <li v-for='(item,i) in profileText' :key='i'>
                <router-link :to="`/userprofile/${item.path}`" class="pa-block  pa-p-5 black--text pa-font-semibold pa-text-left">
                {{item.name}}
                </router-link>
                </li>             
              <li>
                <a href="#" @click='logout' class="logout pa-p-5 black--text pa-font-semibold pa-block pa-text-left">
                  <i class="fas fa-sign-out-alt pa-pr-3"></i>Sign Out
                </a>
              </li>
            </ul>
          </a>
        </li>
       <li class="pa-p-2 pa-relative">
         <router-link  :to="{name:'Checkout'}" class="pa-text-3xl ">   
          <i class="fas fa-shopping-bag black--text"></i>
        
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
        avatar:'',
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
             name:'About',
             link:'ABOUT'
           },
        ]
    }
  },
  methods: {
    ...mapActions('auth',['logout'])
  },
  computed: {
      ...mapGetters('auth', ['cartLength','token','userData','avatar64']),
       switchAvatar() {     
        if(this.avatar64) {
          return `data:image/jpg;base64,${this.avatar64}`
        }
        if(this.avatar) {
          return `data:image/jpg;base64,${this.avatar}`
        }  
          return this.$store.state.auth.userData.avatarDefault
              
    },
  },
  created() {

     const id = this.$store.state.auth.userData?.userId
     const base64 = localStorage.getItem(id)
     this.avatar = base64
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
  
  
     ul {
       padding-left: 0;
     }
    .avatar {
      transition: all .3s ease-in;
      &:hover {
        transform: scale(1.1);
      }
    } 
    .drop-down {
      padding-left: 0;
      top:3.9rem;
      box-shadow: 2px 1px 10px rgba(0, 0, 0,0.5);
      a {
        transition:all .3s ease-in-out;
        font-size: 1.3rem;
        &:hover {
          background: #000;
          color: white !important;;
        }
      }
      .logout {
        border-top:1px solid gray ;
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