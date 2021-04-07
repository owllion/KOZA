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

console.log(token);

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
    var status = err.response.status; //const originalReq = err.config

    if (status === 401) {
      //get new tokens    
      var refresh = _jsCookie["default"].get('refreshToken');

      if (!refresh) {
        console.log('Please login again!');
        return _router["default"].push('/login');
      }

      return instance.post('/getNewToken', {
        refresh: refresh
      }).then(function (res) {
        console.log(res); //  Cookies.set('token', token)
        //  Cookies.set('refreshToken',refreshToken)
        //  originalReq.headers['Authorization'] = `Bearer ${token}`;
        // //original request already have one, no need to add it again
        //  originalReq.baseURL = '';
        //  return instance(originalReq)
      })["catch"](function (err) {
        return console.log("Refresh error:".concat(err));
      });
    }
  }

  return Promise.reject(err);
});
var _default = instance;
exports["default"] = _default;