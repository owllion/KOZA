<template>

    <div :class='class_div'>
       <input :type="type" :name='name'  
        :class="class_input" :value='data' @input="update" required>
          <label :for="name" :class="class_label" >
            <span :class="class_span"><slot/>
         </span>
      </label>

  </div>

</template>

<script>
export default {
  props:[
      'class_div',
      'class_input',
      'class_label',
      'class_span',
      'name',
      'type',
      'data'
        ],
  methods: {
            update(e) {
                this.$emit('input', e.target.value);
            }
        }
}
</script>

<style>

</style>