<template>
<div>
  <div class='card-wrapper pa-mt-6 '></div>
<form>
    <h4 class="pa-text-xl pa-font-semibold pa-mt-14"><i class="pa-mr-2 fas fa-pencil-alt"></i>Card information</h4>
     <v-text-field
      v-for="(item,i) in field" :key='i'
        class="pa-mb-3"
        color="green darken-1"
        :label=item.label
        :prepend-icon="`mdi-${item.icon}`"
        clearable
        :name=item.name
        :hint=item.hint 
        persistent-hint     
        ></v-text-field>
   </form>
  </div>
</template>

<script>
import * as Card from "card";
export default {
    name: "CreditCard",
    data()  {
      return  {
        field:[
          {
            label:'Number',
            name:'number',
            hint:'Please start with 4 , 51 to 9 and 62. (e.g. 5399 9999 9999 9999)',
            icon:'numeric',
          },
          {
            label:'Name',
            name:'name',
            hint:'',
            icon:'account-edit',
          },
          {
            label:'Expiry',
            name:'expiry',
            hint:'',
            icon:'calendar-range',
          },
          {
            label:'CVC',
            name:'cvc',
            hint:'',
            icon:'shield-lock',
          }        
        ]
      }
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