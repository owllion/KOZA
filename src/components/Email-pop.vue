<template>
 <div>
   <div 
    class="backdrop pa-w-full pa-h-full pa-fixed pa-top-0 pa-left-0 " v-show='showEmailBox'
     @click="toggleEmailBox(false)"
    ></div>
  <transition name='pop'>  
    <div class="container xs:pa-w-72 pa-w-96 pa-h-56 pa-border-2 pa-border-solid pa-p-6 pa-border-black pa-bg-white "  v-show='showEmailBox'>

   <label for="" class="pa-block pa-mb-3 pa-font-semibold pa-text-3xl"> Your Email<i class="fas fa-envelope pa-inline-block pa-ml-3"></i></label>
   <input type="text" placeholder="email" class="pa-font-semibold pa-block pa-w-full pa-p-3 pa-border-2 pa-border-black pa-border-solid pa-mb-5 " v-model='email'>

  <button class="pa-block pa-bg-black white--text pa-p-3 pa-w-full pa-transform hover:pa-scale-95 pa-duration-500 pa-text-xl" @click='forgotEmail(email);toggleEmailBox(false);clear()'>Submit</button>
     </div> 
   </transition>
  </div>   
</template>

<script>
import { forgotPassword  } from '@/api/user'
import { mapGetters, mapMutations} from 'vuex'
export default {
   data() {
      return {
          email:''
      } 
   },
   computed: {
     ...mapGetters('auth',['showEmailBox'])
   },
   methods: {
     ...mapMutations('auth',['toggleEmailBox']),
     clear() {
       this.email = ''
     },
     async forgotEmail(email) {
           try {
             await forgotPassword({email})
             this.$swal({
                 icon:'success',
                 title:'We have sent you an email!'
             })
           }catch(err) {
               if(err.response) {
                  const error =err.response.data.msg
                  this.$swal({
                    icon:'error',
                    title:'Oops!',
                    text:error
                  })
               }
           }
       }
   }
}
</script>

<style lang="scss" scoped>
.backdrop {
   z-index: 1000;
   background-color: rgba(0, 0, 0, 0.7)
 }
.container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  z-index: 10000;
}
.pop-enter-active {
   opacity: 1;
   transition: all 0.3s ease-out;
   animation: jackInTheBox; 
   animation-duration: .9s; 
}
.pop-leave-active {
   animation: zoomOutUp; 
   animation-duration: .5s; 
}
.pop-enter,
.pop-leave-to {
  opacity: 0;
}

input {
  &:focus {
    outline: black;
  }
}
label::after {
  content: none !important;
}

</style>