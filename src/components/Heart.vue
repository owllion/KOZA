<template>
  <a class="heart"
   @click="addToFav(id)" v-html='icon' >
  </a>
  
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
      ...mapGetters('auth',['favList']),
      icon() {
        const solid = '<i class="fas fa-heart"></i>'
        const line = ' <i class="far fa-heart"></i>'
        const index = this.favList.findIndex(i=> i.productId ===this.id)
        return index === -1 ? line : solid
      },
    },
    props:['id'],
    methods: { 
       addToFav(id){
          const payload = { productId : id }    
          const index = this.favList.findIndex(i=> i.productId === id)
          if(index === -1){         
            this.$store.dispatch('product/addToFavActions',payload)   
            this.$toast.open({
              message: 'Add favorites',
              type:'success',
              pauseOnHover:true,
              duration:2000             
              });
          }else {
            this.$store.dispatch('product/removeFromFav',payload)
            this.$toast.open({
              message: 'Remove favorites',
              type:'info',
              pauseOnHover:true, 
              duration:2000               
              });
        }
   }
  } 
}
</script>

<style lang="scss" scoped>
$iconColor:rgb(201, 11, 11) !important;

.heart {
    position :absolute;
    font-size: 2rem;
    color:$iconColor;
    top: -1.2rem !important;
    left: -.6rem;
    transform: translateX(0) !important;
    &:hover {
        color:$iconColor;
    }
}
</style>