"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = exports.getUserCouponList = exports.redeemCoupon = exports.applyCode = void 0;

var _axios = _interopRequireDefault(require("./axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//apply coupon code
var applyCode = function applyCode(data) {
  return _axios["default"].post('/applycoupon', data);
}; //redeem coupon


exports.applyCode = applyCode;

var redeemCoupon = function redeemCoupon(data) {
  return _axios["default"].post('/coupon/redeem', data);
}; // get user's couponList


exports.redeemCoupon = redeemCoupon;

var getUserCouponList = function getUserCouponList() {
  return _axios["default"].get('/user/couponList');
};

exports.getUserCouponList = getUserCouponList;

var init = function init() {
  return _axios["default"].get('/test');
};

exports.init = init;