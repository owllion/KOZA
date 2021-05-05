<template>
 <section class="pa-border-2 pa-border-solid pa-border-gray-100 pa-shadow-2xl  pa-rounded-lg">
  <div class="xs:pa-flex-col pa-flex pa-p-6 pa-items-center pa-justify-center pa--mt-36 pa-mx-auto pa-mb-0 "> 

  <!-- profile -->
    <div class="pa-w-full pa-p-6 pa-mt-10 xs:pa-w-full">
    
    <div class="pa-relative pa-w-56 pa-h-56 pa-mx-auto  pa-mb-10">
      <img :src='switchAvatar' alt="avatar" class="pa-w-full pa-h-full pa-object-contain pa-rounded-full ">
       <v-btn
        small
        color="brown lighten-3"
        class="ma-2 white--text focus:pa-outline-none pa-absolute pa-bottom-10 pa-left-32"
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
        class="pa-font-bold "
       
        color="black"
        clearable
        :value =$store.state.auth.userData.name
        prepend-icon="mdi-account-edit"
        v-model='name'
        ></v-text-field>
    <!-- errmsg -->
    <div class="pa-w-full pa-flex pa-justify-start pa-flex-col  pa-pl-6 pa-mb-3">
      <span class=" pa-text-red-500 pa-font-black " v-if="$v.$dirty && !$v.name.required">Please enter your name</span>
      <span class=" pa-text-red-500 pa-font-black" v-if=" $v.$dirty && !$v.name.minLength || !$v.name.maxLength">      
       Name must be at least 3 characters and less than 20 characters  </span>                               
   </div> 
   <!-- errmsg -->

   <!-- email-->
    <label for="" class="pa-block pa-mb-3 pa-font-semibold pa-text-3xl">Email</label>
     <v-text-field
        class="pa-font-bold"
        color="black"
        clearable
        :value =$store.state.auth.userData.email
        prepend-icon="mdi-gmail"
        v-model='email'
        ></v-text-field>
   <!-- email -->
   <!-- errorMessage -->
      <div class="pa-w-full pa-flex pa-justify-start pa-flex-col  pa-pl-6 pa-mb-3">
        <span class=" pa-text-red-500 pa-font-black " v-if="$v.$dirty && !$v.email.required">Please enter your email</span>
        <span class=" pa-text-red-500 pa-font-black " v-if="$v.$dirty && !$v.email.email">Invalid Email :(</span>
       <span class=" pa-text-red-500 pa-font-black " v-if="error ==='duplicate'">Email already exists</span>
     </div>
    <!-- errorMessage -->

   <!-- address -->
    <label class="pa-block  pa-font-semibold pa-text-3xl">County </label>        
         <v-select
            color="red darken-2"
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
            color="red darken-2"
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
              color="red darken-2"
             
              prepend-icon="mdi-map-marker"
              clearable
              v-model='proAddress'
            ></v-text-field> 
      <!-- address -->
    <button class="pa-block pa-bg-black white--text pa-p-3 pa-w-full pa-transform hover:pa-scale-95 pa-duration-500 pa-text-xl" @click='checkForm'>Submit</button>
   </div> 
    
     <!-- profile -->

   </div> <!--flex-->
  </section>
</template>

<script>
import { upload, userInfoModify } from '@/api/user'
import { required, minLength, maxLength,email } from 'vuelidate/lib/validators'
import { mapGetters,mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters('auth', ['isLoading','userAddress','userCity','userDistrict','avatar64','cityList','districtList']),
    loading: {
      get() {
         return this.isLoading
      },
      set(value) {
        return this.$store.commit('auth/setLoading', value)
      }
    },
    switchAvatar() {     
        if(this.avatar64) {
          return `data:image/jpg;base64,${this.avatar64}`
        }
        if(this.avatar) {
          return `data:image/jpg;base64,${this.avatar}`
        }  
          return this.$store.state.auth.userData.avatarDefault
              
    },
    dis() {
      return this.districtList.map(dis=> dis.name)
     },
    currCity: {
      get() {
        return this.$store.state.auth.userCity
      },set(value) {
        return this.setUserCity(value)
      }
      
    },
    currDistrict: {
      get() {     
        return this.$store.state.auth.userDistrict
         
      },set(value) {
        return this.setUserDistrict(value)
      }
    },
    proAddress: {
      get() {
        if(this.userAddress) {
          return this.userAddress
        }else {
          return ''
        }
      },
      set(value) {
        return this.setUserAddress(value)
      }
    },
    userEmail() {
      if(this.email === this.$store.state.auth.userData.email) {
        return ''
      }
      return this.email
    }
  },
  data() {
    return {
      error:'',
      avatar:'',
      name:this.$store.state.auth.userData.name,
      email:this.$store.state.auth.userData.email,
  }
  },
  validations: {
           name: {
             required,
             minLength: minLength(3),
             maxLength: maxLength(20)
         },
           email: { required, email },
    },
  metaInfo: {
        title:'Profile'
    },
  methods: {
     ...mapMutations('auth',['setUserDistrict','setUserCity','setUserAddress']),
     async checkForm() {
         this.$v.$touch()
         if (!this.$v.$invalid) {
           try {
             
               this.loading = true
               const payload = {
                  name:this.name,
                  email:this.userEmail,
                  county:this.currCity,
                  district:this.currDistrict,
                  road:this.proAddress
               }
                console.log(payload)
                const { data: {user, county, district, road } } = await userInfoModify(payload)

                this.$store.commit('auth/setUserData', user)
                this.$store.commit('auth/setUserCity', county)
                this.$store.commit('auth/setUserDistrict', district)
                this.$store.commit('auth/setUserAddress', road)             
                this.loading = false
                this.error = ''
                this.$swal({
                   imageUrl:'https://upload.cc/i1/2021/04/13/LJbpP8.png',
                   title:'Successfully Update!',
               })
              
           }catch(err) {        
              this.loading = false
              if(err.response) {
                  const error = err.response.data.msg
                   if( error.includes('duplicate')) {
                   this.error = 'duplicate'
                 } 
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
            this.loading = true
            const uploadFile = this.$refs.avatar.files[0]

            const formData =new FormData()

            formData.append("avatar" , uploadFile)
          
            const { data: { base64 } } = await upload(formData)

            this.$store.commit('auth/setAvatar',base64)
            const id = this.$store.state.auth.userData.userId
            localStorage.setItem(id,base64)
            this.loading = false

              }catch(err) {   
                this.loading = false    
                if(err.response) {
                  const error = err.response.data.msg
                  this.$swal({
                    icon:'error',                  
                    title:'Oh No!',
                    text:error,
                  })
                }
            }
      },
      },
      watch: {
        districtList(districts) {
        const [ first ] = districts;
        this.currDistrict = first?.name
     }
   },
   created() {
     const id = this.$store.state.auth.userData.userId
     const base64 = localStorage.getItem(id)
     this.avatar = base64
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