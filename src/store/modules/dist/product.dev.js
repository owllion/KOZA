"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _product = require("@/api/product");

var state = {
  products: ''
};
var actions = {
  getAllItems: function getAllItems(_ref) {
    var commit, _ref2, allProduct;

    return regeneratorRuntime.async(function getAllItems$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            commit = _ref.commit;
            _context.prev = 1;
            _context.next = 4;
            return regeneratorRuntime.awrap((0, _product.getAllProducts)());

          case 4:
            _ref2 = _context.sent;
            allProduct = _ref2.data.allProduct;
            commit('setAllProducts', allProduct);
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);

            if (_context.t0.response) {
              this._vm.$swal({
                icon: 'error',
                title: 'Oops',
                text: 'Something wrong!'
              });
            }

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, null, this, [[1, 9]]);
  }
};
var getters = {
  allItems: function allItems(state) {
    return state.products;
  }
};
var mutations = {
  setAllProducts: function setAllProducts(state, data) {
    state.products = data;
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