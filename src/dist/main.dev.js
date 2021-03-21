"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

require("./registerServiceWorker");

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

var _axios = _interopRequireDefault(require("axios"));

var _vueAxios = _interopRequireDefault(require("vue-axios"));

var _lottieWeb = _interopRequireDefault(require("lottie-web"));

var _vueLoadingOverlay = _interopRequireDefault(require("vue-loading-overlay"));

require("vue-loading-overlay/dist/vue-loading.css");

require("./assets/tailwind.css");

var _vuetify = _interopRequireDefault(require("./plugins/vuetify"));

require("@/assets/font-icon/style.css");

require("@/assets/css/global.css");

var _scrollAnimation = _interopRequireDefault(require("@/directive/scrollAnimation"));

var _vueSweetalert = _interopRequireDefault(require("vue-sweetalert2"));

require("sweetalert2/dist/sweetalert2.min.css");

var _vueTilt = _interopRequireDefault(require("vue-tilt.js"));

var _vuelidate = _interopRequireDefault(require("vuelidate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueTilt["default"]);

_vue["default"].use(_vueSweetalert["default"]);

_vue["default"].directive('scrollAnimation', _scrollAnimation["default"]);

_vue["default"].use(_vuelidate["default"]);

_vue["default"].use(_vueAxios["default"], _axios["default"]);

_vue["default"].use(_vueLoadingOverlay["default"], {
  canCancel: false,
  width: 100,
  height: 100,
  backgroundColor: '#FFD485',
  isFullPage: true,
  opacity: 0.7
});

_vue["default"].component('Loading', _vueLoadingOverlay["default"]);

_vue["default"].config.productionTip = false;
_vue["default"].prototype.$lottie = _lottieWeb["default"];
_vue["default"].prototype.$axios = _axios["default"];

_router["default"].beforeEach(function (to, from, next) {
  var isLogin = _store["default"].getters['auth/token'];

  if (to.matched.some(function (res) {
    return res.meta.requireAuth;
  })) {
    if (isLogin) {
      next();
    } else {
      _vue["default"].swal({
        icon: 'warning',
        title: 'Oops...',
        text: 'You need to login'
      });

      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      });
    }
  } else {
    next();
  }
});

new _vue["default"]({
  router: _router["default"],
  store: _store["default"],
  vuetify: _vuetify["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');