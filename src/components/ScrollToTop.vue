<template>
  <a href="#" class="backToTop pa-text-center white--text pa-leading-loose pa-fixed pa-w-16 pa-h-16  pa-bg-black  pa-rounded-full pa-bottom-5 pa-right-5 pa-z-10 pa-opacity-0 " @click.prevent='scrollToTop' :class="{'showBtn':show}">
    <i class="fas fa-arrow-up"></i>
      </a>
</template>

<script>
export default {
    data() {
        return{
            show:false,
        }
    },
   methods: {
       scrollToTop() {
           window.scrollTo({
               top:0,
               behavior: 'smooth'
           })
       },
       handelScroll() {
           if( window.pageYOffset >100 ) {
               this.show = true
           } else {
               this.show = false
           }       
       },
   },
   mounted() {    
       window.addEventListener('scroll',this.handelScroll);
   },
} 
</script>

<style lang="scss" scoped>
 .backToTop {
     font-size: 19px;
     line-height: 62px;
     transition: all .5s;
     transform: translateY(100px);
 }
 .showBtn {
     opacity: 1;
     transform: translateY(0);
 }
 

</style>