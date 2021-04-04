<template>
 <div class="wrapper row pa-mt-16 pa-mb-10 pa-mx-auto pa-w-full">
   <Banner>Checkout</Banner>
   <section class="pa-px-48 pa-w-full xl:pa-px-2 xs:pa-px-2">
    <v-stepper v-model="el">
      <v-stepper-header>
        <v-stepper-step
          :complete="el > 1"
          step="1"
          color="black"
          class="pa-text-xl"
        >
        <span class="pa-inline-block">Check Cart</span>
        </v-stepper-step>

        <v-divider></v-divider>
  
        <v-stepper-step
          :complete="el > 2"
          step="2"
          color="black"
          class="pa-text-xl"
        >
          Information
        </v-stepper-step>
  
        <v-divider></v-divider>
  
        <v-stepper-step 
        step="3" 
        color="black">
          Finished!
        </v-stepper-step>
      </v-stepper-header>
  
      <v-stepper-items>
        <v-stepper-content step="1">
          <router-view name='Cart'/>
        </v-stepper-content>
  
        <v-stepper-content step="2">
         <router-view name="Info"></router-view>
        <div class="pa-flex pa-justify-end">
          <a  href="#" @click="setEl(1)"  class="pa-block pa-text-center pa-font-semibold pa-w-20 black--text pa-bg-gray-100  pa-p-3 hover:pa-bg-gray-300 pa-transition pa-duration-500" >
            BACK
          </a>
         </div>
        </v-stepper-content>
  
        <v-stepper-content step="3">
           <router-view name="Fin"></router-view>

          <div class="pa-flex pa-justify-center">
          <v-btn
             tile
             color="pink darken-3"
             @click="setEl(1)"
             height="60"
             class="white--text pa-p-6"
          >
            Check order
          </v-btn>
          </div>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>

   </section>
 </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import Banner from '@/components/Header-banner'

export default {
  components: {
    Banner,
  },
  computed: {
    ...mapGetters('order',['el'])
  },
  methods: {
    ...mapMutations('order',['setEl'])
  },
  created() {
    this.setEl(1)
  }
   
}
</script>

<style lang="scss" scoped>

</style>