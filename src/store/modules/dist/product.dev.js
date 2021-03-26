"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _product = require("@/api/product");

var state = {
  products: '',
  keyword: '',
  category: '',
  price: [],
  sort: '',
  showFilter: false,
  origin: ''
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
  },
  keyword: function keyword(state) {
    return state.keyword;
  },
  category: function category(state) {
    return state.category;
  },
  price: function price(state) {
    return state.price;
  },
  sort: function sort(state) {
    return state.sort;
  },
  origin: function origin(state) {
    return state.origin;
  }
};
var mutations = {
  clear: function clear(state) {
    state.price = [], state.category = '', state.origin = '';
  },
  closeFilter: function closeFilter(state) {
    state.showFilter = false;
  },
  setAllProducts: function setAllProducts(state, data) {
    state.products = data;
  },
  setKeyword: function setKeyword(state, data) {
    state.keyword = data;
  },
  setCategory: function setCategory(state, data) {
    state.category = data;
  },
  setPrice: function setPrice(state, data) {
    state.price = data;
  },
  setSortType: function setSortType(state, data) {
    state.sort = data;
  },
  setOrigin: function setOrigin(state, data) {
    state.origin = data;
  },
  setShowFilter: function setShowFilter(state, data) {
    state.showFilter = data;
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