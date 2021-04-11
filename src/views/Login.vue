<template>
  <section class="pa-relative pa-min-w-screen pa-min-h-screen  pa-flex pa-justify-center pa-items-center  pa-my-16 "> 
    <EmailPop/>
  <!-- container -->
  <div class="pa-shadow-lg pa-relative pa-w-120 pa-h-100 pa-bg-green-100 pa-overflow-hidden pa-rounded-3xl lg:pa-max-w-md sm:pa-min-w-full">
         <!-- use flex to seperate img and form -->
            <div class=" signinBx pa-w-full pa-h-full pa-flex ">

            <!-- img -->
            <div class="imgBx pa-relative pa-w-2/4 pa-h-full lg:pa-hidden" >
            <img src="@/assets/svg/signin-bg.svg" alt="" class="pa-absolute pa-top-0 pa-left-0 pa-w-full pa-h-full pa-object-cover pa-object-left-top">
            </div>
           <!-- img -->
           
            <div class=" formBx pa-relative pa-w-2/4 pa-h-full pa-bg-white pa-flex pa-justify-center pa-items-center pa-p-10  lg:pa-w-full s:pa-pt-0 s:pa-px-8 " >  

              <form  class=" pa-relative  pa-w-full pa-h-full  pa-flex pa-justify-center pa-items-center pa-flex-col pa-transition pa-transform pa-duration-1000 pa-ease-in-out" >
                   <div class="pa-w-full pa-h-1 pa-flex pa-justify-center pa-items-center pa-mb-20 pa-pt-10 s:pa-pt-16 xxs:pa-pt-0 xs:pa-pt-0">  
                   <img src="@/assets/svg/avatar.svg" alt="avatar"  >
                  </div>

                  <h2 class=" pa-text-4xl pa-tracking-widest pa-w-full pa-text-center pa-font-black pa-pt-2.5 s:pa-pt-6 xxs:pa-pt-7 xs:pa-pt-6 ">Sign In</h2>
                  
                      <my-input 
                       class_div='pa-relative pa-overflow-hidden pa-max-w-sm pa-w-full pa-h-16  pa-my-2.5 ' 

                       class_input='pa-tracking-widest pa-transition pa-duration-200 pa-ease-in pa-outline-none  pa-mb-2 pa-w-full pa-h-full pa-pt-2.5 pa-border-0 pa-bg-transparent focus:pa-bg-transparent'

                       class_label='pa-absolute pa-bottom-0 pa-left-0 pa-w-full pa-h-full pa-pointer-events-none pa-border-b-2  pa-border-yellow-200' 

                       class_span='content pa-text-gray-300 pa-absolute pa-bottom-2.5 pa-left-0 pa-transition pa-duration-500 pa-ease pa-tracking-wider'

                       name='email' 
                       type='text'
                       :data= loginData.email
                       @input = 'updateEmail'
                       >Email</my-input>
                       <!-- email -->

                       <!-- errorMessage -->
                       <div class="pa-max-w-sm pa-w-full pa-flex pa-flex-col">
                       <span class="pa-text-red-500 pa-font-black " v-if="$v.$dirty && !$v.loginData.email.required" >Please enter your email</span>
                       <span class="pa-text-red-500 pa-font-black " v-if='error === "No"'>No user with that email</span>
                       </div>
                       <!-- errorMessage -->

                       <!-- password -->
                       <password  
                       class_div='pa-relative pa-overflow-hidden pa-max-w-sm pa-w-full pa-h-16  pa-my-2.5'           
                       class_input='pa-tracking-widest pa-transition pa-duration-200 pa-ease-in pa-outline-none  pa-mb-2 pa-w-full pa-h-full pa-pt-2.5 pa-border-0 pa-bg-transparent  focus:pa-bg-transparent'
                       class_label='pa-absolute pa-bottom-0 pa-left-0 pa-w-full pa-h-full pa-pointer-events-none pa-border-b-2 pa-border-yellow-200' 
                       class_span='pa-text-gray-300 content pa-absolute pa-bottom-2.5 pa-left-0 pa-transition pa-duration-500 ease pa-tracking-widest' name='password'  type='password'
                       :data= loginData.password
                       @input = 'updateLoginPassword'
                       > Password
                       </password>
                         <!-- password -->

                       <!-- errorMessage -->
                      <div class="pa-max-w-sm pa-w-full s:pa-mb-3 xs:pa-block">
                       <span class="pa-text-red-500 pa-font-black pa-block " v-if="$v.$dirty && !$v.loginData.password.required" >Please enter your password </span>
                       <span class="pa-text-red-500 pa-font-black pa-block" v-if='error==="incorrect"'>Wrong password</span>
                       </div>
                        <!-- errorMessage -->

                      <a href="#" @click.prevent='toggleEmailBox(true)' class="pa-font-black pa-text-blue-500 pa-mb-3 pa-transition pa-duration-900 hover:pa-text-red-500 pa-ml-52 pa-tracking-wider xs:pa-ml-36 xxs:pa-ml-20 s:pa--ml-6 " >Forgot password?</a>

                     <!--captcha -->
                     <div class="pa-flex s:pa-block pa-justify-around  pa-max-w-sm pa-w-full pa-h-14 pa-my-0 s:pa-mb-10 xs:pa-mt-5">         
                      <div v-html='img' class='pa-mr-5 s:pa-ml-10' ></div>

                      <my-input 
                       class_div='pa-relative pa-overflow-hidden pa-max-w-sm pa-w-full pa-h-16 s:pa-mt-1' 

                       class_input='pa-tracking-widest pa-transition pa-duration-200 pa-ease-in pa-outline-none pa-h-16  pa-w-full pa-border-0 pa-bg-transparent  focus:pa-bg-transparent'

                       class_label='pa-absolute pa-bottom-3 pa-left-0 pa-w-full pa-h-full pa-pointer-events-none pa-border-b-2  pa-border-yellow-200' 

                       class_span='pa-text-gray-300 content pa-absolute pa-bottom-1 pa-left-0 pa-transition pa-duration-500 pa-ease pa-tracking-widest'

                       name='captcha' 
                       type='text'
                       :data= loginData.captchaText
                       @input = 'updateCapText'
                       >Captcha</my-input>
                  </div>        
                     <!--captcha -->

                       <!-- errorMessage -->
                      <div class="pa-max-w-sm pa-w-full pa-flex pa-items-end pa-flex-col  pa-my-3">

                       <span class=" pa-text-red-500 pa-font-black  s:pa-pt-2" v-if="$v.$dirty && !$v.loginData.captchaText.required" >Please enter captcha</span>

                       <span class=" pa-text-red-500 pa-font-black" v-if='error==="captcha"'>Wrong Captcha</span>
                       </div>
                        <!-- errorMessage -->
                      <my-button class_btn=' pa-w-full pa-rounded-lg pa-p-3  pa-text-white  pa-transition pa-duration-300 pa-ease-in-out pa-bg-gradient-to-r pa-from-red-300 pa-to-yellow-500 hover:pa-from-yellow-300 hover:pa-to-green-300 pa-transform 
                      hover:pa--translate-y-1 pa-tracking-widest pa-text-2xl' @updateParent='checkLoginForm(loginData)'><span class="pa-text-white">Login</span>
                      </my-button>

                      <p class="signup xxs:pa-ml-14 pa-ml-32 pa-mt-3 md:pa-ml-28 xs:pa-ml-2 s:pa-ml-10">Don't have an account?
                          <router-link to='/register' class=" xxs:pa-ml-14 s:pa-ml-14 pa-text-blue-500 pa-ml-3 pa-transition pa-duration-900 hover:pa-text-green-500 pa-font-black" >Sign up</router-link>
                      </p>
                 </form>
             </div>   
         </div>
        </div>
</section>
</template>

<script>
import MyInput from '@/components/Input.vue'
import MyButton from '@/components/Button.vue'
import Password from '@/components/Password.vue'
import { loginCaptcha  } from '@/api/user'
import { required } from 'vuelidate/lib/validators'
import { mapActions, mapMutations, mapGetters } from 'vuex'
import EmailPop from '@/components/Email-pop'
export default {
    components: {
        MyInput,MyButton,Password,
        EmailPop
    },
     data() {
      return {
        isLoading:false,
        img:'',        
        error:'',
        loginData: {
            email:'',
            password:'',
            captchaText:'',
            captchaToken:''
        }      
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
    },
  },
    validations: {
       loginData: {
          email: { required },
          password: { required },
          captchaText: { required }       
       }
  },
    methods: { 
     ...mapActions('auth',['signInOrUp']),
     ...mapMutations('auth',['toggleEmailBox']),
     async checkLoginForm(data) {
          this.$v.$touch()
          if (!this.$v.loginData.$invalid) {
            try {
              await this.signInOrUp(data)
           }catch(err) {
              this.loading = false
              if(err) {
                console.log(err)
                const msg = err             
                if(msg.includes('No')) {
                  this.error = 'No'
                 }else if (msg.includes('captcha')) {
                  this.error = 'captcha'
                 }else if(msg.includes('Incorrect')){
                  this.error = 'incorrect'
                 }
              }
              
           }
        }
     },
     updateLoginPassword(value) {
          this.loginData.password = value
      },
      updateCapText(value) {
          this.loginData.captchaText = value
      },
      updateEmail(value) {
          this.loginData.email = value
      },
   },
   async created() {
    const { data: { img , token } } = await loginCaptcha()
    this.img = img
    this.loginData.captchaToken = token
   }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/input.css';
.formBx,.imgBx {
      transition: .5s ease-in-out;
  }
</style>