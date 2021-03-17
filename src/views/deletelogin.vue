<template>

   <section class="pa-relative pa-min-w-screen pa-min-h-screen  pa-flex pa-justify-center pa-items-center  pa-my-16 ">     
    <Loading :active.sync="isLoading">
      <fingerprint-spinner
        :animation-duration="2000"
        :size="100"
        color="#22c1c3"
        />
    </Loading>
      <!-- container -->
         <div class="pa-shadow-lg pa-relative pa-w-120 pa-h-100 pa-bg-green-100 pa-overflow-hidden pa-rounded-3xl lg:pa-max-w-md sm:pa-min-w-full" >
             
         <!-- loginData singinBx -->
         <!-- use flex to seperate img and form -->
            <div class=" signinBx pa-w-full pa-h-full pa-flex ">

            <!-- img -->
            <div class="imgBx pa-relative pa-w-2/4 pa-h-full lg:pa-hidden" :class ="[ active ?'pa--left-full':'pa-left-0']">
            <img src="@/assets/svg/signin-bg.svg" alt="" class="pa-absolute pa-top-0 pa-left-0 pa-w-full pa-h-full pa-object-cover pa-object-left-top">
            </div>
           <!-- img -->
           
            <div class=" formBx pa-relative pa-w-2/4 pa-h-full pa-bg-white pa-flex pa-justify-center pa-items-center pa-p-10  lg:pa-w-full s:pa-pt-0 s:pa-px-8 " :class ="[ active ?'pa-left-full':'pa-left-0']">  

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
                       <span class="pa-text-red-500 pa-font-black xs:pa-block " v-if="$v.$dirty && !$v.loginData.password.required" >Please enter your password </span>
                       <span class="pa-text-red-500 pa-font-black xs:pa-block" v-if='error==="incorrect"'>Wrong password</span>
                       </div>
                        <!-- errorMessage -->

                      <router-link to='/reset' class="pa-font-black pa-text-blue-500 pa-mb-3 pa-transition pa-duration-900 hover:pa-text-red-500 pa-ml-52 pa-tracking-wider xs:pa-ml-36 xxs:pa-ml-20 s:pa--ml-6 " >Forgot password?</router-link>

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
                          <a href="#" class=" xxs:pa-ml-14 s:pa-ml-14 pa-text-blue-500 pa-ml-3 pa-transition pa-duration-900 hover:pa-text-green-500 pa-font-black" @click='toggleForm'>Sign up</a>
                      </p>
                 </form>
             </div>   
         </div>

         <!-- signup -->
            <div class="signupBx pa-pointer-events-none pa-absolute pa-top-0 pa-left-0 pa-w-full pa-h-full pa-flex" :class="[active? 'pa-pointer-events-auto':'pa-pointer-events-none']">
                

            <div class="formBx pa-relative pa-w-2/4 pa-h-full pa-bg-white pa-flex pa-justify-center pa-items-center pa-p-10 lg:pa-w-full" :class ="[ active ?'pa-left-0':'pa-left-full']">        
              <form class=" pa-relative  pa-w-full pa-h-full  pa-flex pa-justify-center pa-items-center pa-flex-col pa-transition pa-transform pa-duration-1000 pa-ease-in-out">
                  
                  <h2 class="  pa-text-4xl pa-tracking-widest pa-w-full pa-text-center pa-font-black  pa-pb-9 xxs:pa-pt-8 xxs:pa-pt-0">Sign Up</h2>

                    <!-- name -->
                    <my-input 
                       class_div='pa-flex-shrink-0 pa-relative pa-overflow-hidden pa-max-w-sm pa-w-full pa-h-16  xxs:pa-pt-5  s:pa-pt-7' 

                       class_input='xxs:pa-pt-5 xxs:pa-pb-3 xxs:pa-mb-0 pa-mb-4 pa-pt-6  pa-tracking-widest pa-transition pa-duration-200 pa-ease-in pa-outline-none pa-w-full pa-h-full pa-border-0 pa-bg-transparent focus:pa-bg-transparent'

                       class_label='pa-absolute pa-bottom-0 pa-left-0 pa-w-full pa-h-full pa-pointer-events-none pa-border-b-2  pa-border-yellow-200' 

                       class_span='content pa-text-gray-300 pa-absolute pa-bottom-1 pa-left-0 pa-transition pa-duration-500 pa-ease pa-tracking-widest'

                       :data= registerData.name
                       @input = 'updateRegName'

                       name='name' 
                       type='text'

                       >Name
                       </my-input>
                 <!-- name -->
                    <!-- errorMessage -->
                      <div class="pa-max-w-sm pa-w-full pa-flex pa-justify-start pa-flex-col pa-mt-3  ">

                       <span class=" pa-text-red-500 pa-font-black " v-if="$v.$dirty && !$v.registerData.name.required" >Please enter your name</span>
                       <span class=" pa-text-red-500 pa-font-black " v-if="$v.$dirty && !$v.registerData.name.minLength" >Your name must be at least 3 characters</span>
                       </div>
                    <!-- errorMessage -->

                    <!-- email -->
                    <my-input 
                       class_div='pa-flex-shrink-0 pa-relative pa-overflow-hidden pa-max-w-sm pa-w-full pa-h-16 xxs:pa-h-16 xxs:pa-pt-3 s:pa-h-20 s:pa-pt-8' 

                       class_input='xxs:pa-pt-5 xxs:pa-pb-3 pa-tracking-widest pa-transition pa-duration-200 pa-ease-in pa-outline-none  pa-pt-6  pa-w-full pa-h-full pa-border-0 pa-bg-transparent focus:pa-bg-transparent'

                       class_label='pa-absolute pa-bottom-0 pa-left-0 pa-w-full pa-h-full pa-pointer-events-none pa-border-b-2  pa-border-yellow-200' 

                       class_span='pa-text-gray-300 content pa-absolute pa-bottom-1 pa-left-0 pa-transition pa-duration-500 pa-ease'

                       :data= registerData.email
                       @input = 'updateRegEmail'

                       name='email' 
                       type='text'
                       >Email
                       </my-input>
                      <!-- email -->

                        <!-- errorMessage -->
                      <div class="pa-max-w-sm pa-w-full pa-flex pa-justify-start pa-flex-col pa-mt-3 ">

                       <span class=" pa-text-red-500 pa-font-black " v-if="$v.$dirty && !$v.registerData.email.required" >Please enter your email</span>
                       <span class=" pa-text-red-500 pa-font-black " v-if="$v.$dirty && !$v.registerData.email.email" >Invalid Email :(</span>

                       <span class=" pa-text-red-500 pa-font-black " v-if="error ==='duplicate'">Email already exists</span>
                       </div>
                    <!-- errorMessage -->

                      <!-- password -->
                      <password
                       class_div='pa-flex-shrink-0 pa-relative pa-overflow-hidden pa-max-w-sm pa-w-full pa-h-16  xxs:pa-pt-5 s:pa-h-20 ' 

                       class_input='xxs:pa-pt-3 s:pa-pt-8 xxs:pa-pb-3 pa-mb-4 pa-pt-6 pa-tracking-widest pa-transition pa-duration-200 pa-ease-in pa-outline-none pa-w-full pa-h-full pa-border-0 pa-bg-transparent  focus:pa-bg-transparent'

                       class_label='pa-absolute pa-bottom-0 pa-left-0 pa-w-full pa-h-full pa-pointer-events-none pa-border-b-2  pa-border-yellow-200' 

                       class_span='pa-tracking-widest pa-text-gray-300 content pa-absolute pa-bottom-0 pa-left-0 pa-transition pa-duration-500 ease'
 
                       name='password' 
                       type='password'
                       :data = registerPass
                       @input = 'updateRegPass'>
                       Password
                       </password>
                       <!-- password -->
                        
                        <!-- errorMessage -->
                      <div class="pa-flex-shrink-0 pa-max-w-sm pa-w-full pa-flex pa-justify-start pa-flex-col pa-mt-3 ">
                       <span class=" pa-text-red-500 pa-font-black " v-if="$v.$dirty && !$v.registerPass.required" >Please enter password</span>

                       <span class=" pa-text-red-500 pa-font-black " 
                       v-if="
                       $v.$dirty &&                 
                       !$v.registerPass.minLength ||
                       !$v.registerPass.maxLength">
                         Password must be at least 7 characters and less than 14 characters 
                        </span>
                       </div>
                    <!-- errorMessage -->

                      <!-- confirm password -->
                      <password 
                      class_div='pa-flex-shrink-0  pa-relative pa-overflow-hidden pa-w-full pa-max-w-sm  pa-h-16  xxs:pa-pt-5 s:pa-h-20' 

                       class_input='s:pa-pt-8 xxs:pa-pt-2 xxs:pa-pb-3 pa-tracking-widest pa-transition pa-duration-200 pa-ease-in pa-outline-none pa-h-full pa-w-full pa-mb-4 pa-pt-8  pa-border-0 pa-bg-transparent  focus:pa-bg-transparent'

                       class_label='pa-absolute pa-bottom-0 pa-left-0 pa-w-full pa-h-full pa-pointer-events-none pa-border-b-2  pa-border-yellow-200' 
                       class_span='pa-tracking-widest pa-text-gray-300 content pa-absolute pa-bottom-1 pa-left-0 pa-transition pa-duration-500 pa-ease'
                       name='password' 
                       type='password'
                       :data= registerData.password
                       @input = 'updateConfirmPass'
                       >
                       Confirm Password
                       </password>
                    <!-- confirm password -->

                         <!-- errorMessage -->
                      <div class="pa-max-w-sm pa-w-full pa-flex pa-justify-start pa-flex-col pa-pt-2 pa-mb-5">
                       <span class=" pa-text-red-500 pa-font-black " v-if="$v.$dirty && !$v.registerData.password.required" >Please enter password</span>

                       <span class=" pa-text-red-500 pa-font-black" 
                       v-if="
                       $v.$dirty &&                   
                       !$v.registerData.password.matchText">
                        Your password and confirmation password do not match.
                        </span>
                       </div>
                    <!-- errorMessage -->
                    <!-- button -->
                     <my-button  class_btn='pa-w-full pa-rounded-lg pa-p-3  pa-text-gray-50   pa-transition pa-duration-300 pa-ease-in-out pa-bg-gradient-to-r pa-from-red-300 pa-to-yellow-500  hover:pa-from-yellow-300 hover:pa-to-green-300  pa-transform hover:pa--translate-y-1 pa-text-2xl
                     pa-tracking-widest' @updateParent='checkRegForm(registerData)'><span class="pa-text-white">Register</span>
                      </my-button>
        
                      <p class="signup pa-mt-3 pa-ml-20 pa-tracking-wider xs:pa-ml-16 xxs:pa-ml-8 s:pa-ml-6 s:pa-text-sm">Already have an account ?<a href="#" class="s:pa-ml-32 xxs:pa-mr-3 xxs:pa-ml-20 xs:pa-ml-16 pa-text-blue-500 pa-ml-3 pa-transition pa-duration-900 hover:pa-text-green-500 pa-font-black " @click='toggleForm'>Sign in</a></p>
                 </form>
             </div>  
              <!-- img -->
            <div class="imgBx pa-relative pa-w-2/4 pa-h-full lg:pa-hidden " :class ="[ active ?'pa-left-0':'pa--left-full']">
            <img src="@/assets/svg/signup-bg.svg" alt="" class="pa-absolute pa-top-0 pa-left-0 pa-w-full pa-h-full pa-object-cover pa-object-right">
            </div> 
            <!-- img -->

        </div>  <!--  loginDatabox -->
     </div>
    </section>
</template>

<script>

import MyInput from '@/components/Input.vue'
import MyButton from '@/components/Button.vue'
import Password from '@/components/Password.vue'

import { loginCaptcha ,userLogin, userRegister} from '@/api/user'
import { required, minLength, maxLength,email,sameAs } from 'vuelidate/lib/validators'
import { mapMutations } from 'vuex'
import { FingerprintSpinner } from 'epic-spinners'
export default {   
    components: {
        FingerprintSpinner,
        MyInput,
        MyButton,
        Password
    },
  data() {
      return {
        img:'',
        active: false,
        isLoading:false,
        error:'',
        registerPass:'',
        //can't be sent to backend,so write it outside the registerData 
        registerData: {
            name:'',
            email:'',
            password:'',
        },
        loginData: {
            email:'',
            password:'',
            captchaText:'',
            captchaToken:''
        }      
      }
  },
    validations: {
         registerPass: {
             required,
             minLength: minLength(7),
             maxLength: maxLength(12)
        },
        registerData:{
            name: {
             required,
             minLength: minLength(3)
            },
            email: {
             required,
             email
            },
            password: { //sent to backend
             required,
             matchText: sameAs(function() {
                 return this.registerPass
             })
            }
        },
       loginData: {
          email: { required },
          password: { required },
          captchaText: { required }       
       }
  },

  methods: {...mapMutations('auth',['setToken','setRefreshToken','setUserData','setCartLength']) ,

       async signUp(data) {
          try {
          this.isLoading =true
          const { data: { result } } = await userRegister(data)
          const { token, refreshToken , user } = result
          
          this.$cookie.set('token', token, { expires: 7 })
          this.$cookie.set('refreshToken', refreshToken, { expires: 30 })
          
          this.setToken(token)
          this.setRefreshToken(refreshToken)
          this.setUserData(user)
          this.setCartLength(user.cartList.length)

          this.isLoading = false

           this.$swal({
              icon:'success',
              title:'Success',
              text:'You have successfully registered!'
           })
          this.$router.push('/')
       
          }catch(err) {
              console.log(err.response.data.msg)
              const msg = err.response.data.msg

              if( msg.includes('duplicate')) {
                  this.error = 'duplicate'
              } 
          }    
      },
      async signIn(data) {
          try {
          this.isLoading =true
          const { data: { result } } = await userLogin(data)
          
          const { token, refreshToken , user } = result

          this.$cookie.set('token', token, { expires: 7 })
          this.$cookie.set('refreshToken', refreshToken, { expires: 30 })
          
          this.setToken(token)
          this.setRefreshToken(refreshToken)
          this.setUserData(user)
          this.setCartLength(user.cartList.length)

          this.isLoading =false

          this.$swal({
              icon:'success',
              title:'Success',
              text:'You have successfully logged in!'
           })
          this.$router.push('/')
       
          }catch(err) {
              console.log(err.response.data.msg)
              const msg = err.response.data.msg

              if(msg.includes('No')) {
                  this.error = 'No'
              }else if (msg.includes('captcha')) {
                  this.error = 'captcha'
              }else if(msg.includes('Incorrect')){
                  this.error = 'incorrect'
              }
      } 
    },   
     checkLoginForm(data) {
         this.$v.$touch()
         if (!this.$v.loginData.$invalid) {
            this.signIn(data)
        }
     },
     checkRegForm(data) {
         this.$v.$touch()
         if (!this.$v.registerData.$invalid) {
         this.signUp(data)
  }
     },
      toggleForm() {
          this.active = !this.active
      },
      updateRegPass(value) {
          this.registerPass = value
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
      updateRegName(value) {
          this.registerData.name = value
      },
      updateRegEmail(value) {
          this.registerData.email = value
      },
      updateConfirmPass(value) {
          this.registerData.password = value
      },
  },
   async created() {
    const { data: { img , token } } = await loginCaptcha()
    this.img = img
    this.loginData.captchaToken = token
   }
}
</script>

<style scoped lang='scss' >
  @import '../assets/css/input.css';
  body {
     font-family: 'Josefin Sans', sans-serif;
     font-weight: 500;
  }
  .formBx,.imgBx {
      transition: .5s ease-in-out;
  }

     

</style>