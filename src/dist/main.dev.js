"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

require("./registerServiceWorker");

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

var _axios = _interopRequireDefault(require("axios"));

var _vueAxios = _interopRequireDefault(require("vue-axios"));

var _vueLoadingOverlay = _interopRequireDefault(require("vue-loading-overlay"));

require("vue-loading-overlay/dist/vue-loading.css");

require("./assets/tailwind.css");

var _vuetify = _interopRequireDefault(require("./plugins/vuetify"));

require("@/assets/font-icon/style.css");

require("@/assets/css/global.css");

var _scrollAnimation = _interopRequireDefault(require("@/directive/scrollAnimation"));

var _vueSweetalert = _interopRequireDefault(require("vue-sweetalert2"));

require("sweetalert2/dist/sweetalert2.min.css");

var _jwVuePagination = _interopRequireDefault(require("jw-vue-pagination"));

var _vueToastNotification = _interopRequireDefault(require("vue-toast-notification"));

var _moment = _interopRequireDefault(require("moment"));

var _vueMeta = _interopRequireDefault(require("vue-meta"));

var _vue2Leaflet = require("vue2-leaflet");

require("leaflet/dist/leaflet.css");

var _leaflet2 = require("leaflet");

require("vue-toast-notification/dist/theme-sugar.css");

var _vueTilt = _interopRequireDefault(require("vue-tilt.js"));

var _vuelidate = _interopRequireDefault(require("vuelidate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].component('jw-pagination', _jwVuePagination["default"]);

_vue["default"].use(_vueMeta["default"]); //leadflet


_vue["default"].component('l-map', _vue2Leaflet.LMap);

_vue["default"].component('l-tile-layer', _vue2Leaflet.LTileLayer);

_vue["default"].component('l-marker', _vue2Leaflet.LMarker);

_vue["default"].component("l-popup", _vue2Leaflet.LPopup);

_vue["default"].component("l-icon", _vue2Leaflet.LIcon);

delete _leaflet2.Icon.Default.prototype._getIconUrl;

_leaflet2.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
}); //leadflet


_vue["default"].use(_vueToastNotification["default"], {
  position: 'top'
});

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
_vue["default"].prototype.$axios = _axios["default"];
_vue["default"].prototype.$moment = _moment["default"];

_router["default"].beforeEach(function (to, from, next) {
  var isLogin = _store["default"].getters['auth/token'];

  if (to.matched.some(function (res) {
    return res.meta.requireAuth;
  })) {
    if (isLogin) {
      next();
    } else {
      _vue["default"].swal({
        imageUrl: 'https://upload.cc/i1/2021/04/10/u0e6iX.png',
        title: 'You need to login!'
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