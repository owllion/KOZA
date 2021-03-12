<template>
    <div :class='class_div'>
       <!-- eyes svg -->
        
         <img :src="seen ? seenImg : unseenImg " @click='changeType()'   alt="eye" class=" pa-absolute pa-top-6 pa-left-4/5 pa-cursor-pointer s:pa-top-10
         
         "> 
         <!-- xxs:pa-left-56 xxs:pa-top-6
         xs:pa-left-64 xs:pa-top-6
         s:pa-left-44 -->
        <!--show the password -->
       <input type="text" :name='name'  v-if='pwdShow'
        :class="class_input" :value='data' @input="update" required>

         <!-- hide the password -->
       <input :type="type" :name='name'  v-else
        :class="class_input" :value='data' @input="update" required>

        

          <label :for="name" :class="class_label" >
            <span :class="class_span"><slot/>
         </span>
      </label>
     
  </div>

</template>

<script>
export default {
    data() {
      return {
        seen: true,
        unseenImg: require("@/assets/svg/closeEye.svg"), 
        seenImg: require("@/assets/svg/openEye.svg"),   
        pwdShow: true   
      }
    },
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
            },
            changeType() {
                this.seen = !this.seen
                this.pwdShow = !this.pwdShow
            },
            outEye() {
                this.seen = !this.seen
            }
        }
}
</script>

