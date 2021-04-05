<template>
<section class="pa-w-full pa-p-10 md:pa-p-0">
  <div class="pa-flex pa-justify-center pa-items-center pa-w-full">
    <Card :pageItems=favList />       
        <!-- <div v-for='(item,i) in favList' :key='i' class="pa-flex pa-w-48">
            <div>
            <h2 class="brown--text pa-text-sm">{{item.productName}}</h2>
            <img :src=item.image[0] alt="">
            </div>

            </div>--> 

       </div> 
      </section>     
</template>

<script>
import Card from '@/components/Card'
export default {
  components: {
    Card
  },
   data() {
     return{
       favList:this.$store.state.auth.favList
     }
   },
}
</script>

<style>

</style>