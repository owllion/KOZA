<template>
  <div class="header pa-flex pa-justify-center  pa-items-center pa-bg-hero-lg pa-bg-cover pa-h-96 pa-mb-14" >
         <div class="title">
           <h2 class="pa-rounded-lg pa-text-5xl pa-text-center pa-p-16 white--text pa-bg-green-600 pa-w-full xs:pa-p-6 xs:pa-text-4xl ">
               <slot/>
           </h2>
         </div>
       </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@mixin animation ($opacity, $trans) {
  opacity: $opacity;
  transform: $trans;
}
.before-enter {
  @include animation(0, translateX(-1000px));
  transition: all .3s ease-in-out;
}

.enter {
  @include animation(1, translateX(0px));
}
.header {
   .title h2{
     font-family: 'Schoolbell', cursive;
   }
}

</style>