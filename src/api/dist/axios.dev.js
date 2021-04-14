"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _jsCookie = _interopRequireDefault(require("js-cookie"));

var _router = _interopRequireDefault(require("@/router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var token = _jsCookie["default"].get('token');

var instance = _axios["default"].create({
  baseURL: process.env.VUE_APP_AXIOS_BASE_URL,
  headers: {
    Authorization: token
  }
});

instance.interceptors.response.use(function (res) {
  return res;
}, function (err) {
  if (err && err.response) {
    var status = err.response.status;

    if (status === 401) {
      console.log('Please login again!');

      _router["default"].push('/login');
    }
  }

  return Promise.reject(err);
});
var _default = instance;
exports["default"] = _default;