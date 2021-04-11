<template>
<div class="pa-my-24  pa-w-full pa-h-96 pa-px-10 lg:pa-h-99">
   <div class="pa-flex pa-justify-evenly pa-w-full pa-h-full  md:pa-block">

     <div class="about pa-mr-5 pa-w-96 md:pa-mb-16 md:pa-w-full">
       <div>
        <h3 class="popTitle pa-text-7xl pa-mb-8 md:pa-text-center xs:pa-text-4xl">OUR STORE</h3>
        <ul class="pa-border-2 pa-border-solid pa-border-black pa-w-full pa-p-6 pa-tracking-widest xs:pa-pt-8 ">

        <li class="pa-text-xl pa-mb-4 xs:pa-text-base s:pa-text-xs" v-for="(item,i) in info" :key ='i'>
            <v-icon small class="pa-mr-2"
            :color=item.color>
            {{`mdi-${item.icon}`}}
            </v-icon> 
             {{item.text}}
          </li>
        </ul>
      </div>
     </div>

     <l-map    
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      id="mapContainer"
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />
      <l-marker :lat-lng="withPopup">
        <l-popup>
          <div>
            <h4 class="popTitle pa-text-3xl pa-pb-5">KOZA</h4>           
            <span v-show="showParagraph" class="" >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora recusandae asperiores illo qui quo? Id aliquam, ut sit libero voluptatibus dicta recusandae ipsa et laborum cum veritatis incidunt architecto iste.
            </span>
        </div>  
        <l-icon
          icon-url="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png"
        />     
        </l-popup>
      </l-marker>
    </l-map>
   </div>
    
  </div>
</template>

<script>
import { latLng } from "leaflet";
export default {
  data() {
    return {
      zoom: 13,
      center: latLng(68.3, 14.66),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      withPopup: latLng(68.3, 14.66), 
      currentZoom: 11.5,
      currentCenter: latLng(68.3, 14.66),
      showParagraph: true,
      mapOptions: {
        zoomSnap: 0.5
      },
      showMap: true,
      info:[
        { 
          color:'brown darken-1',
          icon:'clock-time-five',
          text:'M-F - 10AM To 10PM'
        },
        { 
          color:'lime darken-2',
          icon:'phone',
          text:'+3545758400'
        },
        { 
          color:'red darken-3',
          icon:'map-marker-radius',
          text:'Klapparstígur 25-27 Iceland'
        }
      ]
    };
  },
  methods: {
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
  }
}
</script>

<style lang="scss" scoped>
 .popTitle {
  font-family: 'Train One', cursive;
}
 #mapContainer {
   height:50vh;
   width: 50%;
}
@media(max-width:769px) {
  #mapContainer {
    width:100%;
    height: 50%;
}
   
}


</style>