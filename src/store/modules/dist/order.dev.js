"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _coupon = require("@/api/coupon");

var _order = require("@/api/order");

var state = {
  el: 1,
  order_item: [],
  subTotal: null,
  //without shipping
  delivery_address: [],
  discount: null,
  discount_code: '',
  total_price: null,
  //final,includes shipping
  payment_method: 'Credit Card',
  orderList: []
};
var getters = {
  el: function el(state) {
    return state.el;
  },
  order_item: function order_item(state) {
    return state.order_item;
  },
  subTotal: function subTotal(state) {
    return state.subtotal;
  },
  delivery_address: function delivery_address(state) {
    return state.delivery_address;
  },
  discount: function discount(state) {
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
  },
  orderList: function orderList(state) {
    return state.orderList;
  }
};
var mutations = {
  setCheckedItem: function setCheckedItem(state, value) {
    state.order_item = value;
  },
  setEl: function setEl(state, value) {
    state.el = value;
  },
  setSubTotal: function setSubTotal(state, value) {
    state.subTotal = value;
  },
  setPaymethod: function setPaymethod(state, value) {
    state.payment_method = value;
  },
  setCode: function setCode(state, value) {
    state.discount_code = value;
  },
  setTotalPrice: function setTotalPrice(state, value) {
    state.total_price = value;
  },
  setDiscount: function setDiscount(state, value) {
    state.discount = value;
  },
  setAddress: function setAddress(state, value) {
    state.delivery_address = value;
  },
  setOrderList: function setOrderList(state, value) {
    state.orderList = value;
  }
};
var actions = {
  applyCoupon: function applyCoupon(_ref, value) {
    var commit, _ref2, _ref2$data$result, _final, discount, error;

    return regeneratorRuntime.async(function applyCoupon$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            commit = _ref.commit;
            _context.prev = 1;
            _context.next = 4;
            return regeneratorRuntime.awrap((0, _coupon.applyCode)(value));

          case 4:
            _ref2 = _context.sent;
            _ref2$data$result = _ref2.data.result;
            _final = _ref2$data$result["final"];
            discount = _ref2$data$result.discount;
            commit('setTotalPrice', _final);
            commit('setDiscount', discount);
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](1);

            if (_context.t0.response) {
              error = _context.t0.response.data.msg;
              console.log(error);

              this._vm.$swal({
                icon: 'error',
                title: 'Oops!',
                text: error
              });
            }

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, null, this, [[1, 12]]);
  },
  placeOrderAction: function placeOrderAction(_ref3, value) {
    var commit, _ref4, _ref4$data, cartList, user, order, error;

    return regeneratorRuntime.async(function placeOrderAction$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            commit = _ref3.commit;
            _context2.prev = 1;
            commit('auth/setLoading', true, {
              root: true
            });
            _context2.next = 5;
            return regeneratorRuntime.awrap((0, _order.createOrder)(value));

          case 5:
            _ref4 = _context2.sent;
            _ref4$data = _ref4.data;
            cartList = _ref4$data.cartList;
            user = _ref4$data.user;
            order = _ref4$data.order;
            commit('auth/setCart', cartList, {
              root: true
            });
            commit('auth/setCartLength', cartList.length, {
              root: true
            });
            commit('auth/setUserData', user, {
              root: true
            });
            commit('setOrderList', order);
            commit('auth/setLoading', false, {
              root: true
            });

            this._vm.$swal({
              icon: 'success',
              title: 'Yeah!',
              text: 'Successfully place an order'
            });

            commit('setEl', 3);
            _context2.next = 23;
            break;

          case 19:
            _context2.prev = 19;
            _context2.t0 = _context2["catch"](1);
            commit('auth/setLoading', false, {
              root: true
            });

            if (_context2.t0.response) {
              error = _context2.t0.response.data.msg;

              this._vm.$swal({
                icon: "error",
                title: 'Oops!',
                text: error
              });
            }

          case 23:
          case "end":
            return _context2.stop();
        }
      }
    }, null, this, [[1, 19]]);
  }
};
var _default = {
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations,
  namespaced: true
};
exports["default"] = _default;