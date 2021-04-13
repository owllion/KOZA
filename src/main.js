import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import './assets/tailwind.css';
import vuetify from './plugins/vuetify';
import '@/assets/font-icon/style.css';
import '@/assets/css/global.css';
import ScrollAnimation from '@/directive/scrollAnimation';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import JwPagination from 'jw-vue-pagination';
Vue.component('jw-pagination', JwPagination);
import VueToast from 'vue-toast-notification';
import moment from 'moment'
import VueMeta from 'vue-meta'
Vue.use(VueMeta)

//leadflet
import { LMap, LTileLayer, LMarker,LPopup, LIcon  } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.component("l-popup", LPopup);
Vue.component("l-icon", LIcon);


import { Icon } from "leaflet";
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});
//leadflet






import 'vue-toast-notification/dist/theme-sugar.css';
Vue.use(VueToast, {
	position: 'top'
  })

import VueTilt from 'vue-tilt.js'
Vue.use(VueTilt)
Vue.use(VueSweetalert2);

Vue.directive('scrollAnimation', ScrollAnimation);

import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);

Vue.use(VueAxios, axios);
Vue.use(Loading, {
	canCancel: false,
	width: 100,
	height: 100,
	backgroundColor: '#FFD485',
	isFullPage: true,
	opacity: 0.7
});

Vue.component('Loading', Loading);

Vue.config.productionTip = false;

Vue.prototype.$axios = axios;
Vue.prototype.$moment = moment

router.beforeEach((to,from,next) => {
	const isLogin = store.getters['auth/token']
	if(to.matched.some(res => res.meta.requireAuth)) {
		if(isLogin) {
			next()
		}else {	
			Vue.swal({
				imageUrl:'https://upload.cc/i1/2021/04/10/u0e6iX.png',
				title: 'You need to login!',
			})
			next({
				path:'/login',
				query: {
					redirect:to.fullPath
				}
			})
			
		}
	}else {
		next();
	}
})


new Vue({
	router,
	store,
	vuetify,
	
	render: (h) => h(App)
}).$mount('#app');
