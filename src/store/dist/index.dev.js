"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _vuexPersist = _interopRequireDefault(require("vuex-persist"));

var _auth = _interopRequireDefault(require("./modules/auth"));

var _product = _interopRequireDefault(require("./modules/product"));

var _address = _interopRequireDefault(require("./modules/address"));

var _order = _interopRequireDefault(require("./modules/order"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);

var vuexLocalStorage = new _vuexPersist["default"]({
  storage: window.localStorage
});
var store = new _vuex["default"].Store({
  modules: {
    auth: _auth["default"],
    product: _product["default"],
    address: _address["default"],
    order: _order["default"]
  },
  plugins: [vuexLocalStorage.plugin]
});
var _default = store;
exports["default"] = _default;