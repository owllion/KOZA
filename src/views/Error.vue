<template>
<div class=" pa-w-full pa-my-20 xs:pa-my-32">
    <div class="pa-flex pa-flex-wrap pa-w-full pa-p-10 pa-justify-center pa-items-center">
        
        <div class="pa-w-1/2 md:pa-w-full ">
        <img src="@/assets/svg/error.svg" alt="" class="pa-w-full pa-h-full pa-object-contain">
         </div>
         <div class="text pa-w-full pa-flex pa-justify-center pa-flex-col pa-items-center xs:pa-mb-14">
            <span class="pa-font-bold pa-text-5xl  md:pa-text-lg pa-block md:pa-mb-2">Don't know where you are?</span>          
            <span class="pa-block pa-mb-6 pa-font-semibold pa-text-xl md:pa-text-sm md:pa-mb-5">We really have no idea either...</span>
            <router-link to='/' class="pa-block pa-p-3 pa-bg-black pa-font-bold pa-text-md pa-text-center white--text pa-w-32">GO HOME              
            </router-link>           
        </div>
    </div>
</div>

</template>

<script>
export default {
     
}
</script>

<style lang="scss" scoped>
.img-container {
    width: 35%;
}


</style>