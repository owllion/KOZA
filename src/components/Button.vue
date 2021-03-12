<template>
   <div class=" pa-max-w-sm pa-w-full">
    <button @click.prevent='update' type="submit" :class="class_btn">
    <slot ></slot>
    </button>  

    </div>
</template>

<script>
export default {
    props:['class_btn'],
  methods: {
      update() {
          this.$emit('updateParent')
      }
  }
}
</script>

<style>
 button:focus {
  outline:none;
  box-shadow: none;
}
</style>