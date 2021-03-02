"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import store from '../store'
// console.log( `store--> ${store}`)
// const token = store.getters['auth/token']
// const refreshToken =store.getters['auth/refreshToken']
var instance = _axios["default"].create({
  baseURL: 'http://localhost:5000/api' //'Authorization': token
  // }

}); // instance.interceptors.response.use( res => res ,
//     err => {
//        if( err && err.response  ) {
//            const status = err.response.status
//            const originalReq = err.config
//            if( status=== 401 ) {
//                //get new tokens
//                store.dispatch('auth/refresh', refreshToken);
//                originalReq.headers['Authorization'] = `Bearer ${token}`;
//                //original request already have one, no need to add it again
//                originalReq.baseURL = '';
//                return instance(originalReq)
//            }        
//        }
//        return Promise.reject(err)
//     })


var _default = instance;
exports["default"] = _default;