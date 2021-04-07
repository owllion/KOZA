<template>
<section class="pa-my-10 ">
    <Loading :active.sync="isLoading">
    <fingerprint-spinner :animation-duration="2000" :size="100" color="#22c1c3" />
    </Loading>

    <h3 class="animate__animated animate__heartBeat pa-font-normal pa-p-4 pa-rounded-md black--text pa-text-6xl pa-my-6 pa-text-center ">Change Password</h3>

    <div class="pa-flex pa-justify-center pa-items-center">
    <div class="pa-w-96 pa-border-2 pa-border-solid pa-p-6 pa-border-black xs:pa-w-full ">
    <label for="" class="pa-block pa-mb-3 pa-font-semibold pa-text-3xl"> Old Password</label>
    <input type="text" placeholder="Password" class="pa-block pa-w-full pa-p-3 pa-border-2 pa-border-black pa-border-solid pa-mb-5">

    <label for="" class="pa-block pa-mb-3 pa-font-semibold pa-text-3xl"> New Password</label>
    <input type="text" placeholder="Password" class="pa-block pa-w-full pa-p-3 pa-border-2 pa-border-black pa-border-solid pa-mb-5" v-model='password'>

    <!-- errmsg -->
    <div class="pa-flex-shrink-0 pa-max-w-sm pa-w-full pa-flex pa-justify-start pa-flex-col pa-mt-3 ">
        <span class=" pa-text-red-500 pa-font-black " v-if="$v.$dirty && !$v.password.required">Please enter password</span>

        <span class=" pa-text-red-500 pa-font-black "   v-if=" $v.$dirty && !$v.password.minLength ||
        !$v.password.maxLength">  
        Password must be at least 7 characters and less than 14 characters                         
        </span>
        </div>
          <!-- errmsg -->
  <!-- confirm -->
    <label for="" class="pa-block pa-mb-3 pa-font-semibold pa-text-3xl">Confirm Password</label>
    <input type="text" placeholder="Confirm Password" class="pa-block pa-w-full pa-p-3 pa-border-2 pa-border-black pa-border-solid pa-mb-5" v-model="confirm">
   <!-- confirm -->

    <!-- errmsg -->
   <div class="pa-max-w-sm pa-w-full pa-flex pa-justify-start pa-flex-col pa-pt-2 pa-mb-5">
            <span class=" pa-text-red-500 pa-font-black " v-if="$v.$dirty && !$v.confirm.required">Please enter password</span>

            <span class=" pa-text-red-500 pa-font-black" v-if="$v.$dirty && !$v.confirm.matchText">
              Your password and confirmation password do not match.            
            </span>
          </div>
   <!-- errmsg -->
    <button class="pa-block pa-bg-black white--text pa-p-3 pa-w-full pa-transform hover:pa-scale-95 pa-duration-500 pa-text-xl" @click='checkForm'>Submit</button>
    </div>

   </div> 
  </section>
</template>

<script>
import { required, minLength, maxLength, sameAs } from 'vuelidate/lib/validators'
import { FingerprintSpinner } from 'epic-spinners'
export default {
    components: {
      FingerprintSpinner
    },
   data() {
      return {
          isLoading:false,
          email:'',
          password:'',
          confirm:'',
          token:''
      } 
   },
   validations: {
         password: {
             required,
             minLength: minLength(7),
             maxLength: maxLength(12)
        },
         confirm: { 
             required,
             matchText: sameAs(function() {
                 return this.password
             })
            }
        },
   methods: {
       async checkForm() {
         this.$v.$touch()
         if (!this.$v.confirm.$invalid) {
           try {
              this.isLoading = true

              await this.$axios.post(`${process.env.VUE_APP_AXIOS_BASE_URL}/reset-password/${this.token}`, { password: this.confirm })

              this.isLoading = false
              this.$swal({
                  icon:"success",
                  title:'Success!',
                  text:'Your password has been reset successfully! '
              })
              this.$router.push('/')
           }catch(err) {
              this.isLoading = false
              if(err.response) {
                  const error = err.response.data.msg
                  this.$swal({
                      icon:'error',
                      title:'Oops!',
                      text:error
                  })
              }
           }
       }
    }   
   },
   created() {
       this.token = this.$route.params.token
   }
}
</script>

<style lang="scss" scoped>
h3 {
  font-family: 'Caesar Dressing', cursive;
}


</style>