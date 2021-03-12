<template>
<div>
    <p>this is <strong>{{params}}'s</strong> page</p>
    
</div>
</template>

<script>

export default {
   components: {
      
   },
   data() {
       return {
           params:this.$route.params.category,
   }
   }
 }
</script>

<style>

</style>