<template>
<div>
  <div class='card-wrapper pa-mt-6 '></div>
<form>
    <h4 class="pa-text-xl pa-font-semibold pa-mt-14"><i class="pa-mr-2 fas fa-pencil-alt"></i>Card information</h4>
     <v-text-field
        class="pa-mb-3"
        color="black"
        label='Number'
        prepend-icon="mdi-numeric"
        clearable
        name='number'
        hint='Please start with 4 , 51 to 9 and 62. (e.g. 5399 9999 9999 9999)' 
        persistent-hint
        v-model='number'  
        ></v-text-field>
        <v-text-field
        class="pa-mb-3"
        color="black"
        label='Name'
        prepend-icon="mdi-account-edit"
        clearable
        name='Name'
        v-model='name'  
        ></v-text-field>
        <v-text-field
        class="pa-mb-3"
        color="black"
        label='Expiry'
        prepend-icon="mdi-calendar-range"
        clearable
        name='expiry'
        persistent-hint
        v-model='expiry'  
        ></v-text-field>
        <v-text-field
        class="pa-mb-3"
        color="black"
        label='CVC'
        prepend-icon="mdi-shield-lock"
        clearable
        name='cvc'
        v-model='cvc'
        maxlength='3'  
        ></v-text-field>
         <!-- errmsg -->
    <div class="pa-w-full pa-flex pa-justify-start pa-flex-col  pa-pl-6 pa-mb-3">
      <span class=" pa-text-red-500 pa-font-black " v-if="$v.$dirty && !$v.cvc.required">Please enter your name</span>              
   </div> 
   <!-- errmsg -->
   </form>
  </div>
</template>

<script>
import * as Card from "card";
import { helpers,required } from 'vuelidate/lib/validators'
const numAndValidator = helpers.regex('numeric', /\b(4\d{3}(?:[\s._-]*\d{4}){3})\b/);

export default {
    name: "CreditCard",
    data()  {
      return  {
        name:'',
        number:'',
        expiry:'',
        cvc:'',
      }
    },
     validations: {
           name: { required },         
           number: { required,numAndValidator },
           expiry: { required },
           cvc: { required },
    },
    mounted() {
    new Card({ 
      form: "form",
      container: ".card-wrapper",
      formSelectors: { 
        numberInput: "input[name='number']",
        expiryInput:  "input[name='expiry']",
        cvcInput: "input[name='cvc']",
        nameInput: "input[name='name']"
      },
      width: 320,
      formatting: true,
      placeholders: {
        number: "•••• •••• •••• ••••",
        name: "Name On Card",
        expiry: "••/••",
        cvc: "•••"
      }
    });
  },
}
</script>

<style lang="scss" scoped>

.v-input .v-input__icon--prepend .v-icon { 
    color: purple;
}
</style>