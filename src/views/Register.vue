<template>
  <section class="pa-relative pa-min-w-screen pa-min-h-screen  pa-flex pa-justify-center pa-items-center pa-my-16 ">
    
  <!-- container -->
  <div class="pa-shadow-lg pa-relative pa-w-120 pa-h-100 pa-bg-green-100 pa-overflow-hidden pa-rounded-3xl lg:pa-max-w-md sm:pa-min-w-full">
    <div class="signupBx pa-absolute pa-top-0 pa-left-0 pa-w-full pa-h-full pa-flex">

      <div class="formBx pa-relative pa-w-2/4 pa-h-full pa-bg-white pa-flex pa-justify-center pa-items-center pa-p-10 lg:pa-w-full" >
        <form class=" pa-relative  pa-w-full pa-h-full  pa-flex pa-justify-center pa-items-center pa-flex-col pa-transition pa-transform pa-duration-1000 pa-ease-in-out">

          <h2 class="  pa-text-4xl pa-tracking-widest pa-w-full pa-text-center pa-font-black  pa-pb-9 xxs:pa-pt-8 xxs:pa-pt-0">Sign Up</h2>

          <!-- name -->
          <my-input class_div='pa-flex-shrink-0 pa-relative pa-overflow-hidden pa-max-w-sm pa-w-full pa-h-16  xxs:pa-pt-5  s:pa-pt-7' class_input='xxs:pa-pt-5 xxs:pa-pb-3 xxs:pa-mb-0 pa-mb-4 pa-pt-6  pa-tracking-widest pa-transition pa-duration-200 pa-ease-in pa-outline-none pa-w-full pa-h-full pa-border-0 pa-bg-transparent focus:pa-bg-transparent' class_label='pa-absolute pa-bottom-0 pa-left-0 pa-w-full pa-h-full pa-pointer-events-none pa-border-b-2  pa-border-yellow-200' class_span='content pa-text-gray-300 pa-absolute pa-bottom-1 pa-left-0 pa-transition pa-duration-500 pa-ease pa-tracking-widest' :data=registerData.name @input='updateRegName' name='name' type='text'>Name
          </my-input>
          <!-- name -->
          <!-- errorMessage -->
          <div class="pa-max-w-sm pa-w-full pa-flex pa-justify-start pa-flex-col pa-mt-3  ">

            <span class=" pa-text-red-500 pa-font-black " v-if="$v.$dirty && !$v.registerData.name.required">Please enter your name</span>
            <span class=" pa-text-red-500 pa-font-black " v-if="$v.$dirty && !$v.registerData.name.minLength">Your name must be at least 3 characters</span>
          </div>
          <!-- errorMessage -->

          <!-- email -->
          <my-input class_div='pa-flex-shrink-0 pa-relative pa-overflow-hidden pa-max-w-sm pa-w-full pa-h-16 xxs:pa-h-16 xxs:pa-pt-3 s:pa-h-20 s:pa-pt-8' class_input='xxs:pa-pt-5 xxs:pa-pb-3 pa-tracking-widest pa-transition pa-duration-200 pa-ease-in pa-outline-none  pa-pt-6  pa-w-full pa-h-full pa-border-0 pa-bg-transparent focus:pa-bg-transparent' class_label='pa-absolute pa-bottom-0 pa-left-0 pa-w-full pa-h-full pa-pointer-events-none pa-border-b-2  pa-border-yellow-200' class_span='pa-text-gray-300 content pa-absolute pa-bottom-1 pa-left-0 pa-transition pa-duration-500 pa-ease' :data=registerData.email @input='updateRegEmail' name='email' type='text'>Email
          </my-input>
          <!-- email -->

          <!-- errorMessage -->
          <div class="pa-max-w-sm pa-w-full pa-flex pa-justify-start pa-flex-col pa-mt-3 ">

            <span class=" pa-text-red-500 pa-font-black " v-if="$v.$dirty && !$v.registerData.email.required">Please enter your email</span>
            <span class=" pa-text-red-500 pa-font-black " v-if="$v.$dirty && !$v.registerData.email.email">Invalid Email :(</span>

            <span class=" pa-text-red-500 pa-font-black " v-if="error ==='duplicate'">Email already exists</span>
          </div>
          <!-- errorMessage -->

          <!-- password -->
          <password class_div='pa-flex-shrink-0 pa-relative pa-overflow-hidden pa-max-w-sm pa-w-full pa-h-16  xxs:pa-pt-5 s:pa-h-20 ' class_input='xxs:pa-pt-3 s:pa-pt-8 xxs:pa-pb-3 pa-mb-4 pa-pt-6 pa-tracking-widest pa-transition pa-duration-200 pa-ease-in pa-outline-none pa-w-full pa-h-full pa-border-0 pa-bg-transparent  focus:pa-bg-transparent' class_label='pa-absolute pa-bottom-0 pa-left-0 pa-w-full pa-h-full pa-pointer-events-none pa-border-b-2  pa-border-yellow-200' class_span='pa-tracking-widest pa-text-gray-300 content pa-absolute pa-bottom-0 pa-left-0 pa-transition pa-duration-500 ease' name='password' type='password' :data=registerPass @input='updateRegPass'>
            Password
          </password>
          <!-- password -->

          <!-- errorMessage -->
          <div class="pa-flex-shrink-0 pa-max-w-sm pa-w-full pa-flex pa-justify-start pa-flex-col pa-mt-3 ">
            <span class=" pa-text-red-500 pa-font-black " v-if="$v.$dirty && !$v.registerPass.required">Please enter password</span>

            <span class=" pa-text-red-500 pa-font-black " v-if="
                    $v.$dirty &&                 
                    !$v.registerPass.minLength ||
                    !$v.registerPass.maxLength">
              Password must be at least 7 characters and less than 14 characters
            </span>
          </div>
          <!-- errorMessage -->

          <!-- confirm password -->
          <password class_div='pa-flex-shrink-0  pa-relative pa-overflow-hidden pa-w-full pa-max-w-sm  pa-h-16  xxs:pa-pt-5 s:pa-h-20' class_input='s:pa-pt-8 xxs:pa-pt-2 xxs:pa-pb-3 pa-tracking-widest pa-transition pa-duration-200 pa-ease-in pa-outline-none pa-h-full pa-w-full pa-mb-4 pa-pt-8  pa-border-0 pa-bg-transparent  focus:pa-bg-transparent' class_label='pa-absolute pa-bottom-0 pa-left-0 pa-w-full pa-h-full pa-pointer-events-none pa-border-b-2  pa-border-yellow-200' class_span='pa-tracking-widest pa-text-gray-300 content pa-absolute pa-bottom-1 pa-left-0 pa-transition pa-duration-500 pa-ease' name='password' type='password' :data=registerData.password @input='updateConfirmPass'>
            Confirm Password
          </password>
          <!-- confirm password -->

          <!-- errorMessage -->
          <div class="pa-max-w-sm pa-w-full pa-flex pa-justify-start pa-flex-col pa-pt-2 pa-mb-5">
            <span class=" pa-text-red-500 pa-font-black " v-if="$v.$dirty && !$v.registerData.password.required">Please enter password</span>

            <span class=" pa-text-red-500 pa-font-black" v-if="
                    $v.$dirty &&                   
                    !$v.registerData.password.matchText">
              Your password and confirmation password do not match.
            </span>
          </div>
          <!-- errorMessage -->
          <!-- button -->
          <my-button class_btn='pa-w-full pa-rounded-lg pa-p-3  pa-text-gray-50   pa-transition pa-duration-300 pa-ease-in-out pa-bg-gradient-to-r pa-from-red-300 pa-to-yellow-500  hover:pa-from-yellow-300 hover:pa-to-green-300  pa-transform hover:pa--translate-y-1 pa-text-2xl
                    pa-tracking-widest' @updateParent='checkRegForm(registerData)'><span class="pa-text-white">Register</span>
          </my-button>

          <p class="signup pa-mt-3 pa-ml-20 pa-tracking-wider xs:pa-ml-16 xxs:pa-ml-8 s:pa-ml-6 s:pa-text-sm">Already have an account ?<router-link to='/login' class="s:pa-ml-32 xxs:pa-mr-3 xxs:pa-ml-20 xs:pa-ml-16 pa-text-blue-500 pa-ml-3 pa-transition pa-duration-900 hover:pa-text-green-500 pa-font-black" >Sign in</router-link></p>
        </form>
      </div>
      <!-- img -->
      <div class="imgBx pa-relative pa-w-2/4 pa-h-full lg:pa-hidden " >
        <img src="@/assets/svg/signup-bg.svg" alt="" class="pa-absolute pa-top-0 pa-left-0 pa-w-full pa-h-full pa-object-cover pa-object-right">
      </div>
      <!-- img -->
    </div>
  </div>
</section>
</template>

<script>
import MyInput from '@/components/Input.vue'
import MyButton from '@/components/Button.vue'
import Password from '@/components/Password.vue'
import { required, minLength, maxLength,email,sameAs } from 'vuelidate/lib/validators'
import { mapActions, mapGetters } from 'vuex'

export default {
    components: {
        MyInput,MyButton,Password
    },
    data() {
        return {
            error:'',
            registerPass:'',
            //can't be sent to backend,so write it outside the registerData 
            registerData: {
                name:'',
                email:'',
                password:'',
            },
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
  methods: {
     ...mapActions('auth',['signInOrUp']),

    async checkRegForm(data) {
         this.$v.$touch()
         if (!this.$v.registerData.$invalid) {
           try {
              await this.signInOrUp(data)
              
           }catch(err) {
              this.loading = false
              if(err) {
               const msg = err             
               if( msg.includes('duplicate')) {
                  this.error = 'duplicate'
               } 
              }             
           }
       }
    },    
    updateRegPass(value) {
          this.registerPass = value
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
}
</script>

<style lang="scss" scoped>
@import '../assets/css/input.css';
.formBx,.imgBx {
      transition: .5s ease-in-out;
  }
</style>