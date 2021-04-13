<template>
<section class="pa-my-10 ">

    <h3 class="animate__animated animate__heartBeat pa-font-normal pa-p-4 pa-rounded-md black--text pa-text-6xl pa-my-6 pa-text-center ">Change Password</h3>

    <div class="pa-flex pa-justify-center pa-items-center">
    <div class="pa-w-96 pa-border-2 pa-border-solid pa-p-6 pa-border-black xs:pa-w-full ">
    <label for="" class="pa-block pa-mb-3 pa-font-semibold pa-text-3xl"> Old Password</label>
    <input type="text" placeholder="Password" class="pa-block pa-w-full pa-p-3 pa-border-2 pa-border-black pa-border-solid pa-mb-2" v-model="password">

     <!-- errmsg -->
    <div class="pa-flex-shrink-0 pa-max-w-sm pa-w-full pa-flex pa-justify-start pa-flex-col ">
        <span class=" pa-text-red-500 pa-font-black " v-if="$v.$dirty && !$v.password.required">Required!</span>
    </div>
    <!-- errmsg -->

    <label for="" class="pa-block pa-mb-3 pa-font-semibold pa-text-3xl"> New Password</label>
    <input type="text" placeholder="Password" class="pa-block pa-w-full pa-p-3 pa-border-2 pa-border-black pa-border-solid pa-mb-2" v-model='newPass'>

    <!-- errmsg -->
    <div class="pa-flex-shrink-0 pa-max-w-sm pa-w-full pa-flex pa-justify-start pa-flex-col">
        <span class=" pa-text-red-500 pa-font-black " v-if="$v.$dirty && !$v.newPass.required">Required!</span>

        <span class=" pa-text-red-500 pa-font-black "   v-if=" $v.$dirty && !$v.newPass.minLength ||
        !$v.newPass.maxLength">  
        Password must be at least 7 characters and less than 14 characters                         
        </span>
        </div>
  <!-- errmsg -->

  <!-- confirm -->
    <label for="" class="pa-block pa-mb-3 pa-font-semibold pa-text-3xl">Confirm Password</label>
    <input type="text" placeholder="Confirm Password" class="pa-block pa-w-full pa-p-3 pa-border-2 pa-border-black pa-border-solid pa-mb-2" v-model="confirm">
   <!-- confirm -->

    <!-- errmsg -->
   <div class="pa-max-w-sm pa-w-full pa-flex pa-justify-start pa-flex-col  pa-mb-5">
        <span class=" pa-text-red-500 pa-font-black " v-if="$v.$dirty && !$v.confirm.required">Required!</span>
        <span class=" pa-text-red-500 pa-font-black" v-if="$v.$dirty && !$v.confirm.matchText">
         Your password and confirmation password do not match.            
        </span>
    </div>
   <!-- errmsg -->
    <button class="pa-block pa-bg-black white--text pa-p-3 pa-w-full pa-transform hover:pa-scale-95 pa-duration-500 pa-text-xl" @click='checkForm(confirm)'>Submit</button>
    </div>

   </div> 
  </section>
</template>

<script>
import { required, minLength, maxLength, sameAs } from 'vuelidate/lib/validators'
import { mapGetters } from 'vuex'
import { userPasswordModify } from '@/api/user'
export default {
  computed: {
    ...mapGetters('auth', ['isLoading']),
    loading: {
      get() {
         return this.isLoading
      },
      set(value) {
        return this.$store.commit('auth/setLoading', value)
      }
    }
  },
   data() {
      return {
          password:'',
          newPass:'',
          confirm:'',
      } 
   },
   validations: {
         password: {
             required,            
        },
        newPass : {
             required,
             minLength: minLength(7),
             maxLength: maxLength(14)
        },
        confirm: { 
             required,
             matchText: sameAs(function() {
                 return this.newPass
             })
            }
        },
   methods: {
       async checkForm(password) {
         this.$v.$touch()
         if (!this.$v.$invalid) {
           try {
              this.loading = true
              const payload = { password }
              await userPasswordModify(payload)
              this.loading = false

              this.$swal({
                  icon:'success',
                  title:'Your password has been reset successfully!'               
              })
           }catch(err) {
              this.loading = false
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
   }
}
</script>

<style lang="scss" scoped>
h3 {
  font-family: 'Caesar Dressing', cursive;
}


</style>