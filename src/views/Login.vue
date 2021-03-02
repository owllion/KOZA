<template>
   <section class="relative min-w-screen min-h-screen  flex justify-center items-center bg-hero-lg  ">

      <!-- container -->
         <div class="shadow-lg relative w-110 h-99 bg-green-100 overflow-hidden rounded-3xl lg:max-w-md sm:min-w-full" >

         <!-- loginData singinBx -->
         <!-- use flex to seperate img and form -->
            <div class=" signinBx w-full h-full flex ">

            <!-- img -->
            <div class="imgBx relative w-2/4 h-full lg:hidden" :class ="[ active ?'-left-full':'left-0']">
            <img src="@/assets/svg/signin-bg.svg" alt="" class="absolute top-0 left-0 w-full h-full object-cover object-left-top">
            </div>
           <!-- img -->
           
            <div class=" formBx relative w-2/4 h-full bg-white flex justify-center items-center p-10  lg:w-full " :class ="[ active ?'left-full':'left-0']">  

              <form  class=" relative  w-full h-full  flex justify-center items-center flex-col transition transform duration-1000 ease-in-out" >
                   <div class="hide w-full h-1 flex justify-center items-center mb-20 pt-10">  
                   <img src="@/assets/svg/avatar.svg" alt="avatar" class="" >
                  </div>
                  <h2 class=" text-4xl tracking-widest w-full text-center font-black">Sign In</h2>

                      <div class="relative overflow-hidden max-w-sm w-full h-14  my-2.5 ">
                          <input type="text" name='email'  
                          class="tracking-widest transition duration-200 ease-in outline-none  mb-2 w-full h-full pt-2.5 border-0 bg-transparent focus:bg-transparent" v-model='loginData.email' required>

                          <label for="email" class="absolute bottom-0 left-0 w-full h-full pointer-events-none border-b-2  border-yellow-200">
                              <span class="content text-gray-300 absolute bottom-2.5 left-0 transition duration-500 ease tracking-wider">Email</span>
                          </label>
                      </div>

                      <div class="relative overflow-hidden max-w-sm w-full h-14  my-2.5 ">
                          <input v-model='loginData.password' type="password" name='password'  
                          class="tracking-widest transition duration-200 ease-in outline-none  mb-2 w-full h-full pt-2.5 border-0 bg-transparent  focus:bg-transparent " required>

                          <label for="password" class="absolute bottom-0 left-0 w-full h-full pointer-events-none border-b-2  border-yellow-200 " >
                              <span class="text-gray-300 content absolute bottom-2.5 left-0 transition duration-500 ease tracking-widest">Password</span>
                          </label>                        
                      </div>
                      <router-link to='/reset' class="font-black text-blue-500 mb-3 transition duration-900 hover:text-red-500 ml-52 tracking-wider md:ml-52 xs:ml-28 xxs:ml-24 s:ml-1" >Forgot password?</router-link>

                     <!--captcha -->
                     <div class="flex s:block justify-around  max-w-sm w-full h-14 my-3 s:mb-16">         
                      <div v-html='img' class='mr-5 s:ml-9' ></div>
                      <div class="relative overflow-hidden max-w-sm w-full h-16 s:mt-2">
                      <input type="text" name='captcha' v-model="loginData.captchaText"  class=" tracking-widest transition duration-200 ease-in outline-none h-16  w-full border-0 bg-transparent  focus:bg-transparent " required>
                      <label for="captcha" class="absolute bottom-3 left-0 w-full h-full pointer-events-none border-b-2  border-yellow-200" >
                        <span class="text-gray-300 content absolute bottom-2.5 left-0 transition duration-500 ease tracking-widest">Captcha</span>
                     </label> 
                    </div>  
                  </div>        
                     <!--captcha -->

                      <div class=" max-w-sm w-full">
                      <button @click.prevent='signIn(loginData)' type="submit" class="
                       w-full
                       rounded-lg 
                       p-3     
                       text-white             
                       transition duration-300 ease-in-out 
                       bg-gradient-to-r 
                       from-red-300 
                       to-yellow-500  
                       hover:from-yellow-300 
                       hover:to-green-300 
                       transform 
                       hover:-translate-y-1
                       tracking-widest
                       text-2xl
                       ">Login
                      </button>   
                      </div>
                      <p class="signup xxs:ml-16 ml-32 mt-3 md:ml-28 xs:ml-2 s:ml-7">Don't have an account?<a href="#" class=" xxs:ml-28 s:ml-28 text-blue-500 ml-3 transition duration-900 hover:text-green-500 font-black" @click='toggleForm'>Sign up</a></p>
                 </form>
             </div>   
         </div>

         <!-- signup -->
            <div class="signupBx pointer-events-none absolute top-0 left-0 w-full h-full flex" :class="[active? 'pointer-events-auto':'pointer-events-none']">
                

            <div class="formBx relative w-2/4 h-full bg-white flex justify-center items-center p-10 lg:w-full" :class ="[ active ?'left-0':'left-full']">        
              <form class=" relative  w-full h-full  flex justify-center items-center flex-col transition transform duration-1000 ease-in-out">
                  <div class="hide w-full h-1 flex justify-center items-center mb-22 pt-12
                  s:pt-5 ">  
                   <img src="@/assets/svg/avatar.svg" alt="avatar" class="" >
                  </div>
                  
                  <h2 class=" text-4xl tracking-widest w-full text-center font-black">Sign Up</h2>
                    <!-- name -->
                         <div class="relative overflow-hidden max-w-sm w-full h-28 sm:h-20">
                          <input v-model='registerData.name' type="text" name='name'  
                          class="mb-4 pt-10  tracking-widest transition duration-200 ease-in outline-none w-full h-full border-0 bg-transparent focus:bg-transparent" required>

                          <label for="name" class="absolute bottom-0 left-0 w-full h-full pointer-events-none border-b-2  border-yellow-200">
                              <span class=" content text-gray-300 absolute bottom-1 left-0 transition duration-500 ease tracking-widest">Name</span>
                          </label>
                      </div>
                 <!-- name -->

               <!-- email -->
                      <div class="relative overflow-hidden max-w-sm w-full h-28  sm:h-20">
                          <input v-model='registerData.email' type="text" name='email'  
                          class=" tracking-widest transition duration-200 ease-in outline-none mb-4 pt-10 w-full h-full border-0 bg-transparent focus:bg-transparent" required>

                          <label for="email" class="absolute bottom-0 left-0 w-full h-full pointer-events-none border-b-2  border-yellow-200">
                              <span class=" text-gray-300 content absolute bottom-1 left-0 transition duration-500 ease">Email</span>
                          </label>
                      </div>
                      <!-- email -->

                      <!-- password -->
                      <div class="relative overflow-hidden max-w-sm w-full h-28 sm:h-20">
                          <input  type="password" name='password'  
                          class="mb-4 pt-10 tracking-widest transition duration-200 ease-in outline-none w-full h-full border-0 bg-transparent  focus:bg-transparent " required>

                          <label for="password" class="absolute bottom-0 left-0 w-full h-full pointer-events-none border-b-2  border-yellow-200 " >
                              <span class="tracking-widest text-gray-300 content absolute bottom-1 left-0 transition duration-500 ease">Password</span>
                          </label>                        
                      </div>
                       <!-- password -->

                      <!-- confirm password -->
                       <div class="relative overflow-hidden w-full max-w-sm  h-28 sm:h-20 mb-5">
                          <input v-model='registerData.password' type="password" name='password'  
                          class="tracking-widest transition duration-200 ease-in outline-none h-full w-full mb-4 pt-10  border-0 bg-transparent  focus:bg-transparent " required>

                          <label for="password" class="absolute bottom-0 left-0 w-full h-full pointer-events-none border-b-2  border-yellow-200 " >
                              <span class="tracking-widest text-gray-300 content absolute bottom-1 left-0 transition duration-500 ease">Confirm Password</span>
                          </label>                        
                      </div>
                    <!-- confirm password -->

                    <!-- button -->
                      <div class=" max-w-sm w-full">
                      <button  @click.prevent='signUp(registerData)' type="submit" class="
                       w-full
                       rounded-lg 
                       p-3     
                       text-white                
                       transition duration-300 ease-in-out 
                       bg-gradient-to-r 
                       from-red-300 
                       to-yellow-500  
                       hover:from-yellow-300 
                       hover:to-green-300 
                       transform 
                       hover:-translate-y-1
                       text-2xl
                       tracking-widest
                       ">Register
                      </button>   
                      </div>
                       <!-- button -->

                      <p class="signup mt-3 ml-20 tracking-wider xs:ml-16 xxs:ml-6 s:ml-3 s:text-sm">Already have an account ?<a href="#" class="s:ml-32 xxs:mr-3 xxs:ml-36 xs:ml-36 text-blue-500 ml-3 transition duration-900 hover:text-green-500 font-black " @click='toggleForm'>Sign in</a></p>
                 </form>
             </div>  
              <!-- img -->
            <div class="imgBx relative w-2/4 h-full lg:hidden " :class ="[ active ?'left-0':'-left-full']">
            <img src="@/assets/svg/signup-bg.svg" alt="" class="absolute top-0 left-0 w-full h-full object-cover object-right">
            </div> 
            <!-- img -->

        </div>  <!--  loginDatabox -->
     </div>
    </section>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
      return {
        active: false,
        error:'',
        registerData: {
            name:'',
            email:'',
            password:'',
        },
        loginData: {
            email:'',
            password:'',
            captchaText:'',
        }      
      }
  },
//   async asyncData() {
//      const { data: { img , token } } = await axios.get(`${process.env.axios_baseUrl}/captcha`)
//       return { img , token }
//   },
  methods: {
      toggleForm() {
          this.active = !this.active
      },

      ...mapActions('auth',['register','login']) ,

       async signUp() {
           const rd = this.registerData
         await this.register(rd).catch(err=> { 
              this.error = err   
               if(this.error.includes('duplicate')){
                    alert('Email already exists')
               }
            
         })   
      },
      async signIn() {
          await this.login(this.loginData).catch(err=> {
              console.log(err)
            this.error = err
            alert(`錯誤${this.error}`)
          })
      }    
  },
//   created() {
//    this.loginData.captchaToken = this.token
  
//   }
}
</script>

<style scoped lang='scss' >
  @import '../assets/css/input.css';
  .formBx,.imgBx {
      transition: .5s ease-in-out;
  }
 @media (min-width: 312px) and (max-width: 415px) {
     .hide {
         display: none
     }
}
     

</style>