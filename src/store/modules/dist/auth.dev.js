"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _user = require("@/api/user");

var _jsCookie = _interopRequireDefault(require("js-cookie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var state = {
  token: null,
  refreshToken: null,
  userData: '',
  cartList: null,
  cartLength: ''
};
var getters = {
  isAuthenticated: function isAuthenticated(state) {
    return state.token !== null;
  },
  token: function token(state) {
    return state.token;
  },
  refreshToken: function refreshToken(state) {
    return state.refreshToken;
  },
  userData: function userData(state) {
    return state.userData;
  },
  cartLength: function cartLength(state) {
    return state.cartLength;
  }
};
var actions = {
  register: function register(_ref, data) {
    var commit, res, _res$data$result, token, refreshToken, user, error;

    return regeneratorRuntime.async(function register$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            commit = _ref.commit;
            _context.prev = 1;
            _context.next = 4;
            return regeneratorRuntime.awrap((0, _user.userRegister)(data));

          case 4:
            res = _context.sent;
            _res$data$result = res.data.result, token = _res$data$result.token, refreshToken = _res$data$result.refreshToken, user = _res$data$result.user;

            _jsCookie["default"].set('token', token, {
              expires: 7
            });

            _jsCookie["default"].set('refreshToken', refreshToken, {
              expires: 30
            });

            commit('setToken', token);
            commit('setRefreshToken', refreshToken);
            commit('setUserData', user);
            alert('註冊成功');
            this.$router.push('/');
            _context.next = 20;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](1);
            error = _context.t0.response.data.msg;
            console.log(error);
            throw error;

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, null, this, [[1, 15]]);
  },
  login: function login(_ref2, data) {
    var commit, res, _res$data$result2, token, refreshToken, user, error;

    return regeneratorRuntime.async(function login$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            commit = _ref2.commit;
            _context2.prev = 1;
            _context2.next = 4;
            return regeneratorRuntime.awrap((0, _user.userLogin)(data));

          case 4:
            res = _context2.sent;
            _res$data$result2 = res.data.result, token = _res$data$result2.token, refreshToken = _res$data$result2.refreshToken, user = _res$data$result2.user;

            _jsCookie["default"].set('token', token, {
              expires: 7
            });

            _jsCookie["default"].set('refreshToken', refreshToken, {
              expires: 30
            });

            commit('setToken', token);
            commit('setRefreshToken', refreshToken);
            commit('setUserData', user);
            alert('Login Successfully');
            this.$router.push('/');
            _context2.next = 20;
            break;

          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](1);
            error = _context2.t0.response.data.msg;

            if (!error) {
              _context2.next = 20;
              break;
            }

            throw error;

          case 20:
          case "end":
            return _context2.stop();
        }
      }
    }, null, this, [[1, 15]]);
  },
  logout: function logout(_ref3) {
    var commit;
    return regeneratorRuntime.async(function logout$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            commit = _ref3.commit;
            commit("clearToken");

            _jsCookie["default"].remove("token");

            _jsCookie["default"].remove("refreshToken");

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    });
  },
  getUserInfo: function getUserInfo(_ref4) {
    var commit, _ref5, data, error;

    return regeneratorRuntime.async(function getUserInfo$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            commit = _ref4.commit;
            _context4.prev = 1;
            _context4.next = 4;
            return regeneratorRuntime.awrap((0, _user.userInfo)());

          case 4:
            _ref5 = _context4.sent;
            data = _ref5.data;
            commit('setUserData', data);
            _context4.next = 14;
            break;

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](1);
            console.log(_context4.t0.response.data.msg);
            error = _context4.t0.response.data.msg;
            throw error;

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[1, 9]]);
  },
  getCartList: function getCartList(_ref6) {
    var commit, _ref7, _ref7$data, cartList, count, error;

    return regeneratorRuntime.async(function getCartList$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            commit = _ref6.commit;
            _context5.prev = 1;
            _context5.next = 4;
            return regeneratorRuntime.awrap((0, _user.getCart)());

          case 4:
            _ref7 = _context5.sent;
            _ref7$data = _ref7.data;
            cartList = _ref7$data.cartList;
            count = _ref7$data.count;
            commit('setCart', cartList);
            commit('setCartLength', count);
            _context5.next = 17;
            break;

          case 12:
            _context5.prev = 12;
            _context5.t0 = _context5["catch"](1);
            console.log(_context5.t0.response.data.msg);
            error = _context5.t0.response.data.msg;
            throw error;

          case 17:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, [[1, 12]]);
  }
};
var mutations = {
  setToken: function setToken(state, token) {
    state.token = token;
  },
  setRefreshToken: function setRefreshToken(state, refreshToken) {
    state.refreshToken = refreshToken;
  },
  setUserData: function setUserData(state, userData) {
    state.userData = userData;
  },
  clearToken: function clearToken(state) {
    state.token = null;
  },
  setCart: function setCart(state, cart) {
    state.cartList = cart;
  },
  setCartLength: function setCartLength(state, length) {
    state.cartLength = length;
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