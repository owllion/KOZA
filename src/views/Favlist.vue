<template>
  <div class="pa-flex pa-justify-center pa-items-center">       
        <p>FAV</p> 
          <div v-for='(item,i) in favList' :key='i' class="pa-flex pa-w-48">

            <div>
            <h2 class="brown--text pa-text-sm">{{item.productName}}</h2>
            <img :src=item.image[0] alt="">
            </div>

            </div> 

       </div>     
</template>

<script>
export default {
   data() {
     return{
       favList:this.$store.state.auth.favList
     }
   },
}
</script>

<style>

</style>