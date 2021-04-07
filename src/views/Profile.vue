<template>
 <section class="pa-border-2 pa-border-solid pa-border-gray-100 pa-shadow-2xl">
  <div class="xs:pa-flex-col pa-flex pa-p-6 pa-items-center pa-justify-center"> 
     <Loading :active.sync="isLoading">
    <fingerprint-spinner :animation-duration="2000" :size="100" color="#22c1c3" />
    </Loading>

  <!-- profile -->
    <div class="pa-w-full pa-border-2 pa-border-solid pa-p-6 pa-border-black xs:pa-w-full">
    
    <div class="pa-relative pa-w-64 pa-h-64 pa-m-auto xs:pa-mr-0 pa-mb-10">
      <img :src=switchAvatar alt="avatar" class="pa-w-full pa-h-full pa-object-contain pa-rounded-full">
       <v-btn
        small
        color="brown lighten-3"
        class="ma-2 white--text focus:pa-outline-none pa-absolute pa-bottom-14 pa-left-48"
        fab
        @click='$refs.avatar.click()'
      >
        <v-icon dark>
          mdi-cloud-upload
        </v-icon>
      </v-btn>
      <input type="file" name="image" ref="avatar" class='pa-hidden' @change='uploadAvatar'>
     </div>
     <!--avatar-->

    <label for="" class="pa-block pa-mb-3 pa-font-semibold pa-text-3xl">NAME</label>  
        <v-text-field
        class="pa-font-bold"
        color="black"
        clearable
         loading
        :rules="[rules.required, rules.counter]"
        :value =$store.state.auth.userData.name
        prepend-icon="mdi-account-edit"
        v-model='name'
        ></v-text-field>
    <!-- errmsg -->
    <!-- <div class="pa-flex-shrink-0 pa-max-w-sm pa-w-full pa-flex pa-justify-start pa-flex-col pa-mt-3 ">
      <span class=" pa-text-red-500 pa-font-black " v-if="$v.$dirty && !$v.name.required">Please enter your name</span>

        <span class=" pa-text-red-500 pa-font-black" v-if=" $v.$dirty && !$v.name.minLength ||
        !$v.name.maxLength">  
        Name must be at least 3 characters and less than 6 characters                         
        </span>
        </div> -->
          <!-- errmsg -->
  <!-- email-->
    <label for="" class="pa-block pa-mb-3 pa-font-semibold pa-text-3xl">Email</label>
     <v-text-field
        class="pa-font-bold"
        color="black"
        clearable
        :rules="[rules.required, rules.email]"
        :value =$store.state.auth.userData.email
        prepend-icon="mdi-gmail"
        v-model='email'
        ></v-text-field>
   <!-- email -->
   <!-- address -->
    <label class="pa-block  pa-font-semibold pa-text-3xl">County </label>        
         <v-select
            color="black"
            class="pa-mb-6"
            v-model="currCity"
            :items="cityList"
            menu-props="auto"
            label="Select"
            hide-details
            prepend-icon="mdi-map-marker"
            single-line
          ></v-select>

      <label class="pa-block pa-font-semibold pa-text-3xl"> District </label>
          <v-select
            color="black"
            class="pa-mb-5"
            v-model="currDistrict"
            :items="dis"
            menu-props="auto"
            label="Select"
            hide-details
            prepend-icon="mdi-map-marker"
            single-line
          ></v-select>
          <label class="pa-block pa-font-semibold pa-text-3xl">Address</label>
           <v-text-field
              color="black"
              label="Address"
              prepend-icon="mdi-map-marker"
              clearable
              v-model='de_address'
            ></v-text-field> 
      <!-- address -->
    <button class="pa-block pa-bg-black white--text pa-p-3 pa-w-full pa-transform hover:pa-scale-95 pa-duration-500 pa-text-xl" @click='checkForm'>Submit</button>
   </div> 
     
     <!-- profile -->

   </div> <!--flex-->
  </section>
</template>

<script>
import { upload } from '@/api/user'
import { FingerprintSpinner } from 'epic-spinners'
import { required, minLength, maxLength,  } from 'vuelidate/lib/validators'
import { mapGetters } from 'vuex'
export default {
  components: {
   FingerprintSpinner
  },
  computed: {
    switchAvatar() {
        if(this.$store.state.auth.avatar64) { 
          return `data:image/jpg;base64,${this.$store.state.auth.avatar64}`
        }
        return this.$store.state.auth.userData.avatarDefault
      },
    dis() {
       return this.districtList[0].map(dis=> dis.name)
     },
       currCity: {
         get() {
           return this.$store.state.address.currCity
         },
         set(value) {
           this.$store.commit('address/setcurrCity', value)
         }
       },
       currDistrict: {
         get() {
           return this.$store.state.address.currDistrict
         },
         set(value) {
           this.$store.commit('address/setcurrDistrict', value)
         }
       },
       ...mapGetters('address',['cityList','districtList']),
  },
  data() {
    return {
      isLoading:false,
      name:this.$store.state.auth.userData.name,
      email:this.$store.state.auth.userData.email,
       rules: {
          required: value => !!value || 'Required.',
          counter: value => value.length <= 6 || 'Max 6 characters',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },
    },
  }
  },
  validations: {
           name: {
             required,
             minLength: minLength(3),
             maxLength: maxLength(6)
         },
           email: { required },
    },
   methods: {
     async checkForm() {
         this.$v.$touch()
         if (!this.$v.$invalid) {
           try {
              // this.isLoading = true
              console.log('成功')
             
              // this.isLoading = false
              // this.$swal({
              //     icon:"success",
              //     title:':)',
              //     text:'success '
              // })
              // this.$router.push('/')
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
    },  
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
      watch: {
        districtList(districts) {
        const [ first ] = districts[0];
       this.currDistrict = first.name
     }
   },
      created() {
        this.avatar = this.$store.state.auth.avatar64 
      }
}
</script>

<style lang="scss" scoped>
section { 
  margin:50px 0;  
  min-width: 320px;
  width: 650px;
}

</style>