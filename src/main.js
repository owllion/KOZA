import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';
import lottie from 'lottie-web';
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
Vue.prototype.$lottie = lottie;
Vue.prototype.$axios = axios;

router.beforeEach((to,from,next) => {
	const isLogin = store.getters['auth/token']
	if(to.matched.some(res => res.meta.requireAuth)) {
		if(isLogin) {
			next()
		}else {	
			Vue.swal({
				icon: 'warning',
				title: 'Oops...',
				text: 'You need to login',
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
