<template>
<section class="pa-w-full pa-p-10 md:pa-p-0">
  <div class="pa-flex pa-justify-center pa-items-center pa-w-full">
    <Card :pageItems=favList />       
       </div> 
      </section>     
</template>

<script>
import Card from '@/components/Card'
import {mapGetters} from 'vuex'
export default {
  components: {
    Card
  },
  computed: {
    ...mapGetters('auth',['favList'])
  }
}
</script>

<style>

</style>