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

require("@/assets/global.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueAxios["default"], _axios["default"]);

_vue["default"].use(_vueLoadingOverlay["default"], {
  canCancel: false,
  width: 100,
  height: 100,
  backgroundColor: '#FFD485',
  isFullPage: true,
  opacity: 0.7
});

_vue["default"].component("Loading", _vueLoadingOverlay["default"]);

_vue["default"].config.productionTip = false;
_vue["default"].prototype.$lottie = _lottieWeb["default"];
_vue["default"].prototype.$axios = _axios["default"];
new _vue["default"]({
  router: _router["default"],
  store: _store["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');