"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteMultiItem = exports.deleteItemInCart = exports.clearCart = exports.addToCart = exports.getCart = exports.removeFromFav = exports.addOrRemoveFromFav = exports.userPasswordModify = exports.userInfoModify = exports.userLogoutAll = exports.userInfo = exports.forgotPassword = exports.deleteAvatar = exports.upload = exports.userLogout = exports.getNewToken = exports.userRegister = exports.loginCaptcha = exports.userLogin = void 0;

var _axios = _interopRequireDefault(require("./axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//login
var userLogin = function userLogin(data) {
  return _axios["default"].post('/login', data);
}; //login captcha


exports.userLogin = userLogin;

var loginCaptcha = function loginCaptcha() {
  return _axios["default"].get('/captcha');
}; //register


exports.loginCaptcha = loginCaptcha;

var userRegister = function userRegister(data) {
  return _axios["default"].post('/register', data);
}; //get new token 


exports.userRegister = userRegister;

var getNewToken = function getNewToken(data) {
  return _axios["default"].post('/getNewToken', data);
}; //logout


exports.getNewToken = getNewToken;

var userLogout = function userLogout(data) {
  return _axios["default"].post('/logout', data);
}; //upload avatar


exports.userLogout = userLogout;

var upload = function upload(data) {
  return _axios["default"].post('/user/upload', data);
}; //deleteAvatar


exports.upload = upload;

var deleteAvatar = function deleteAvatar(data) {
  return _axios["default"].post('/user/upload', data);
}; //forgotPassword


exports.deleteAvatar = deleteAvatar;

var forgotPassword = function forgotPassword(data) {
  return _axios["default"].post('/forgot-password', data);
}; //get userInfo


exports.forgotPassword = forgotPassword;

var userInfo = function userInfo() {
  return _axios["default"].get('/user/me');
}; //log out all devices 


exports.userInfo = userInfo;

var userLogoutAll = function userLogoutAll() {
  return _axios["default"].get('/user/logoutAll');
}; //modify uesr info


exports.userLogoutAll = userLogoutAll;

var userInfoModify = function userInfoModify(data) {
  return _axios["default"].patch('/user/info-modify', data);
}; //modify user password 


exports.userInfoModify = userInfoModify;

var userPasswordModify = function userPasswordModify(data) {
  return _axios["default"].patch('/user/password-modify', data);
}; // add & remove the product to the favorite list if users click the button when they're in the product list


exports.userPasswordModify = userPasswordModify;

var addOrRemoveFromFav = function addOrRemoveFromFav(data) {
  return _axios["default"].post('/user/favlist/add_remove', data);
}; //remove the product if users click the button when they're in their own profile's favorite list


exports.addOrRemoveFromFav = addOrRemoveFromFav;

var removeFromFav = function removeFromFav(data) {
  return _axios["default"].post('/user/favlist/delete', data);
}; //get the cartList


exports.removeFromFav = removeFromFav;

var getCart = function getCart(data) {
  return _axios["default"].get('/cartList', data);
}; //add product(s) to cart


exports.getCart = getCart;

var addToCart = function addToCart(data) {
  return _axios["default"].post('/addToCart', data);
}; //clear cart


exports.addToCart = addToCart;

var clearCart = function clearCart() {
  return _axios["default"]["delete"]('/clearCart');
}; //delete item in cart


exports.clearCart = clearCart;

var deleteItemInCart = function deleteItemInCart(data) {
  return _axios["default"].post('/cart/delete', data);
};

exports.deleteItemInCart = deleteItemInCart;

var deleteMultiItem = function deleteMultiItem(data) {
  return _axios["default"].post('/cart/deleteMany', data);
};

exports.deleteMultiItem = deleteMultiItem;