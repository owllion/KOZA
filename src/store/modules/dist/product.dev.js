"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _product = require("@/api/product");

var _user = require("@/api/user");

var _user2 = require("../../api/user");

var state = {
  products: '',
  keyword: '',
  category: '',
  price: [],
  sort: '',
  showFilter: false,
  origin: ''
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
var actions = {
  getAllItems: function getAllItems(_ref) {
    var commit, _ref2, allProduct, error;

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
              error = _context.t0.response.data.message;

              this._vm.$swal({
                icon: 'error',
                title: "Something wrong!",
                text: error
              });
            }

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, null, this, [[1, 9]]);
  },
  addActions: function addActions(_ref3, value) {
    var commit, _ref4, cartList, error;

    return regeneratorRuntime.async(function addActions$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            commit = _ref3.commit;
            _context2.prev = 1;
            commit('auth/setLoading', true, {
              root: true
            });
            _context2.next = 5;
            return regeneratorRuntime.awrap((0, _user.addToCart)(value));

          case 5:
            _ref4 = _context2.sent;
            cartList = _ref4.data.cartList;
            commit('auth/setCart', cartList, {
              root: true
            });
            commit('auth/setCartLength', cartList.length, {
              root: true
            });
            commit('auth/setLoading', false, {
              root: true
            });

            this._vm.$toast.open({
              message: 'ADD TO CART!',
              type: 'success',
              pauseOnHover: true,
              duration: 2000
            });

            _context2.next = 17;
            break;

          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](1);
            commit('auth/setLoading', false, {
              root: true
            });

            if (_context2.t0.response) {
              error = _context2.t0.response.data.msg;

              this._vm.$swal({
                icon: 'warning',
                title: "Oops",
                text: error
              });
            }

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, null, this, [[1, 13]]);
  },
  addToFavActions: function addToFavActions(_ref5, value) {
    var commit, _ref6, favList, error;

    return regeneratorRuntime.async(function addToFavActions$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            commit = _ref5.commit;
            _context3.prev = 1;
            _context3.next = 4;
            return regeneratorRuntime.awrap((0, _user.addToFav)(value));

          case 4:
            _ref6 = _context3.sent;
            favList = _ref6.data.favList;
            commit('auth/setFavList', favList, {
              root: true
            });
            _context3.next = 12;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](1);

            if (_context3.t0.response) {
              error = _context3.t0.response.data.message;

              this._vm.$swal({
                icon: 'error',
                title: "Something wrong!",
                text: error
              });
            }

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, null, this, [[1, 9]]);
  },
  removeFromFav: function removeFromFav(_ref7, value) {
    var commit, _ref8, favList, error;

    return regeneratorRuntime.async(function removeFromFav$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            commit = _ref7.commit;
            _context4.prev = 1;
            _context4.next = 4;
            return regeneratorRuntime.awrap((0, _user2.removeFromFav)(value));

          case 4:
            _ref8 = _context4.sent;
            favList = _ref8.data.favList;
            commit('auth/setFavList', favList, {
              root: true
            });
            _context4.next = 12;
            break;

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](1);

            if (_context4.t0.response) {
              error = _context4.t0.response.data.message;

              this._vm.$swal({
                icon: 'error',
                title: "Something wrong!",
                text: error
              });
            }

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, null, this, [[1, 9]]);
  },
  clearActions: function clearActions(_ref9) {
    var commit, error;
    return regeneratorRuntime.async(function clearActions$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            commit = _ref9.commit;
            _context5.prev = 1;
            _context5.next = 4;
            return regeneratorRuntime.awrap((0, _user.clearCart)());

          case 4:
            commit('auth/setCart', [], {
              root: true
            });
            commit('auth/setCartLength', 0, {
              root: true
            });
            _context5.next = 11;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](1);

            if (_context5.t0.response) {
              error = _context5.t0.response.data.message;

              this._vm.$swal({
                icon: 'error',
                title: "Something wrong!",
                text: error
              });
            }

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, null, this, [[1, 8]]);
  },
  adjustQty: function adjustQty(_ref10, value) {
    var commit, _ref11, cartList, error;

    return regeneratorRuntime.async(function adjustQty$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            commit = _ref10.commit;
            _context6.prev = 1;
            commit('auth/setLoading', true, {
              root: true
            });
            _context6.next = 5;
            return regeneratorRuntime.awrap((0, _user.updateQty)(value));

          case 5:
            _ref11 = _context6.sent;
            cartList = _ref11.data.cartList;
            commit('auth/setCart', cartList, {
              root: true
            });
            commit('auth/setLoading', false, {
              root: true
            });
            _context6.next = 15;
            break;

          case 11:
            _context6.prev = 11;
            _context6.t0 = _context6["catch"](1);
            commit('auth/setLoading', false, {
              root: true
            });

            if (_context6.t0.response) {
              error = _context6.t0.response.data.message;

              this._vm.$swal({
                icon: 'error',
                title: "Something wrong!",
                text: error
              });
            }

          case 15:
          case "end":
            return _context6.stop();
        }
      }
    }, null, this, [[1, 11]]);
  },
  deleteItemActions: function deleteItemActions(_ref12, value) {
    var commit, _ref13, cartList, error;

    return regeneratorRuntime.async(function deleteItemActions$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            commit = _ref12.commit;
            _context7.prev = 1;
            _context7.next = 4;
            return regeneratorRuntime.awrap((0, _user.deleteItemInCart)(value));

          case 4:
            _ref13 = _context7.sent;
            cartList = _ref13.data.cartList;
            commit('auth/setCart', cartList, {
              root: true
            });
            commit('auth/setCartLength', cartList.length, {
              root: true
            });
            _context7.next = 13;
            break;

          case 10:
            _context7.prev = 10;
            _context7.t0 = _context7["catch"](1);

            if (_context7.t0.response) {
              error = _context7.t0.response.data.message;

              this._vm.$swal({
                icon: 'error',
                title: "Something wrong!",
                text: error
              });
            }

          case 13:
          case "end":
            return _context7.stop();
        }
      }
    }, null, this, [[1, 10]]);
  }
};
var mutations = {
  clear: function clear(state) {
    state.price = [], state.category = '', state.origin = '', state.keyword = '';
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