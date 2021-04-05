<template>
  <div>
     <Loading :active.sync="isLoading">
    <fingerprint-spinner :animation-duration="2000" :size="100" color="#22c1c3" />
    </Loading>
    <h3>My Profile</h3>
     <div class="pa-relative pa-w-64 pa-h-64">
      <img :src="`data:image/jpg;base64,${avatar}`" alt="avatar" class="pa-w-full pa-h-full pa-object-contain pa-rounded-full">
       <v-btn
        color="brown lighten-3"
        class="ma-2 white--text focus:pa-outline-none pa-absolute pa-bottom-16 pa-left-48"
        fab
        @click='$refs.avatar.click()'
      >
        <v-icon dark>
          mdi-cloud-upload
        </v-icon>
      </v-btn>
     </div>
     <input type="file" name="image" ref="avatar" class='pa-hidden' @change='uploadAvatar'>
  </div>
</template>

<script>
import { upload } from '@/api/user'
import { FingerprintSpinner } from 'epic-spinners'
export default {
  components: {
   FingerprintSpinner
  },
  data() {
    return {
      isLoading:false,
    }
  },
   methods: {
     async uploadAvatar(){
       try{
            this.isLoading = true
            const uploadFile = this.$refs.avatar.files[0]

            const formData =new FormData()

            formData.append("avatar" , uploadFile);
        
            const { data: { base64 } } = await upload(formData)
            this.$store.commit('auth/setAvatar',base64)     
            this.avatar = this.$store.state.auth.avatar64               
            this.isLoading = false

              }catch(err) {   
                this.isLoading = false    
                if(err.response) {
                  const error = err.response.data.msg
                  this.$swal({
                    icon:'error',
                    text:error,
                    title:'something wrong'
                  })
                }
            }
      },
      },
      created() {
           this.avatar = this.$store.state.auth.avatar64 
      }
}
</script>

<style>

</style>