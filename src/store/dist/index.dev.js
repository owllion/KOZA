"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _vuexPersist = _interopRequireDefault(require("vuex-persist"));

var _auth = _interopRequireDefault(require("./modules/auth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]); //Vue.use(VueAxios, axios)
//Vue.use(Cookies)
//import axios from 'axios'
//import VueAxios from 'vue-axios'
//import Cookies from 'js-cookie'


var vuexLocalStorage = new _vuexPersist["default"]({
  storage: window.localStorage
});
var store = new _vuex["default"].Store({
  modules: {
    auth: _auth["default"]
  },
  strict: true,
  plugins: [vuexLocalStorage.plugin]
});
var _default = store;
exports["default"] = _default;