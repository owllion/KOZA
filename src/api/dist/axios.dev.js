"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _jsCookie = _interopRequireDefault(require("js-cookie"));

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import store from '../store'
// console.log( `store--> ${store}`)
// const token = store.getters['auth/token']
// const refreshToken =store.getters['auth/refreshToken']
var token = _jsCookie["default"].get('token');

var instance = _axios["default"].create({
  baseURL: process.env.VUE_APP_AXIOS_BASE_URL,
  headers: {
    'Authorization': token
  }
});

instance.interceptors.response.use(function (res) {
  return res;
}, function (err) {
  if (err && err.response) {
    var status = err.response.status;
    var originalReq = err.config;

    if (status === 401) {
      //get new tokens
      var refresh = _jsCookie["default"].get(refreshToken);

      if (!refresh) {
        alert('Please login again!');

        _this.$router.push('/');
      }

      var res = instance.post('/getNewToken', refreshToken);
      var _token = res.data.result.token;
      var refreshToken = res.data.result.refreshToken;

      _jsCookie["default"].set('token', _token);

      _jsCookie["default"].set('refreshToken', refreshToken);

      originalReq.headers['Authorization'] = "Bearer ".concat(_token); //original request already have one, no need to add it again

      originalReq.baseURL = '';
      return instance(originalReq);
    }
  }

  return Promise.reject(err);
});
var _default = instance;
exports["default"] = _default;