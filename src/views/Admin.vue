<template>
  <div class="pa-h-full pa-w-full">
      <div class="pa-my-48">
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" fab dark color="indigo">
            <v-icon dark>
              mdi-plus
            </v-icon>

          </v-btn>

        </template>
        <v-card>
          <v-card-title>
            <span class="headline">Products</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="productName*"  v-model='item.productName' required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="price" v-model='item.price'></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="sale-price" v-model='item.sale_price' persistent-hint required></v-text-field>
                </v-col>
               
                <v-col cols="12"  sm="6" md="4">
                  <v-text-field label="sub-category" v-model='item.sub_category' required></v-text-field>
                </v-col>


                <v-col cols="12"  sm="6" md="4">
                  <v-select :items="['BREAD', 'VEG','FRUITS','CHEESE','MEAT', 'SEAFOOD']" label="Category"  v-model='item.category' required></v-select>
                </v-col>

                 <v-col cols="12"  sm="6" md="4">
                  <v-select :items="['Yum Yum!', 'Delicious!', 'splendid!']" label="Description"  v-model='item.description' required></v-select>
                </v-col>

                <v-col cols="12"  sm="6" md="4">
                  <v-select :items="['Chile', 'Colombia', 'USA','Netherlands','Canada','Mexico','Norway']" label="Origin"  v-model='item.origin' required></v-select>
                </v-col>

                 <v-col cols="12"  sm="6" md="4">
                  <v-select :items="['IN STOCK','OUT OF STOCK']" label="Availability"  v-model='item.availability' required></v-select>
                </v-col>

                 <v-col cols="12"  sm="6" md="4">
                  <v-text-field label="Stock" v-model='item.stock' required></v-text-field>
                </v-col>

                  <v-col cols="12"  sm="6" md="4">
                  <v-text-field label="Sales" v-model='item.sales' required></v-text-field>
                </v-col>
                
                
                
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="toggleDialog()">
              Close
            </v-btn>
            <v-btn color="blue darken-1" text @click="toggleDialog(); addItem()">
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
          item:{},
          dialog: false,   
      }
    },
    methods: {
        toggleDialog() {
            this.dialog = !this.dialog
        },
        async addItem() {
            try{
               const res = await this.$axios.post(`${process.env.VUE_APP_AXIOS_BASE_URL}/admin/create-product`,this.item)
                this.$swal({
                    icon:'success',
                    title:'Success',
                    text: res.data.msg
                })

                 
            }catch(e) {
                const msg =e.response.data.msg
                this.$swal({
                    icon:'error',
                    title:'Oops...',
                    text:msg
                })
                
            }
           
        }
    },
    
  }

</script>

<style>

</style>
