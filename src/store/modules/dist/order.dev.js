"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var state = {
  order_item: [],
  subtotal: null,
  //without shipping
  delivery_address: '',
  discount: null,
  discount_code: '',
  total_price: null,
  //final,includes shipping
  payment_method: ''
};
var getters = {
  order_item: function order_item(state) {
    return state.order_item;
  },
  subtotal: function subtotal(state) {
    return state.subtotal;
  },
  address: function address(state) {
    return state.delivery_address;
  },
  discountPercent: function discountPercent(state) {
    return state.discount;
  },
  discount_code: function discount_code(state) {
    return state.discount_code;
  },
  total_price: function total_price(state) {
    return state.total_price;
  },
  payment_method: function payment_method(state) {
    return state.payment_method;
  }
};
var mutations = {
  setCheckedItem: function setCheckedItem(state, value) {
    console.log("setitem\u7684\u503C-->".concat(value));
    state.order_item = value;
  }
};
var actions = {};
var _default = {
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations,
  namespaced: true
};
exports["default"] = _default;