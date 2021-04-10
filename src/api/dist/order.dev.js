"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOrderDetail = exports.cancelOrder = exports.getOrder = exports.orderModify = exports.createOrder = void 0;

var _axios = _interopRequireDefault(require("./axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//create order 
var createOrder = function createOrder(data) {
  return _axios["default"].post('/create_order', data);
}; //modify order 


exports.createOrder = createOrder;

var orderModify = function orderModify(data) {
  return _axios["default"].patch('/user/order/modify', data);
}; //get order list 


exports.orderModify = orderModify;

var getOrder = function getOrder() {
  return _axios["default"].get('/user/orderList');
}; //cancel order(change order status)


exports.getOrder = getOrder;

var cancelOrder = function cancelOrder(data) {
  return _axios["default"].post('/order/cancel', data);
}; //get an order


exports.cancelOrder = cancelOrder;

var getOrderDetail = function getOrderDetail(data) {
  return _axios["default"].post('/order/detail', data);
};

exports.getOrderDetail = getOrderDetail;