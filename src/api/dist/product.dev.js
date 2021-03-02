"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSubItem = exports.getProductByCate = exports.getProduct = exports.getBestSeller = exports.getNewestItem = void 0;

var _axios = _interopRequireDefault(require("./axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//get the newest products
var getNewestItem = function getNewestItem() {
  return _axios["default"].get('/product/newest');
}; //get best seller from all category


exports.getNewestItem = getNewestItem;

var getBestSeller = function getBestSeller() {
  return _axios["default"].get('/product/feature/best_seller');
}; //get a product


exports.getBestSeller = getBestSeller;

var getProduct = function getProduct(data) {
  return _axios["default"].post('/product/detail', data);
}; //get productList by category


exports.getProduct = getProduct;

var getProductByCate = function getProductByCate(data) {
  return _axios["default"].post('/product/category/list', data);
};

exports.getProductByCate = getProductByCate;

var getSubItem = function getSubItem(data) {
  return _axios["default"].post('/product/subCategory', data);
};

exports.getSubItem = getSubItem;