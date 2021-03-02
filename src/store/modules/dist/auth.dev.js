"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _user = require("@/api/user");

var state = {
  token: null,
  refreshToken: null,
  userData: '',
  cartList: null,
  cartLength: null,
  test: '測試'
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
            _res$data$result = res.data.result, token = _res$data$result.token, refreshToken = _res$data$result.refreshToken, user = _res$data$result.user; //   Cookies.set('token', token, { expires: 7 })
            //   Cookies.set('refreshToken', refreshToken, {expires: 30 })

            commit('setToken', token);
            commit('setRefreshToken', refreshToken);
            commit('setUserData', user);
            alert('註冊成功');
            this.$router.push('/');
            _context.next = 18;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](1);
            error = _context.t0.response.data.msg;
            console.log(error);
            throw error;

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, null, this, [[1, 13]]);
  },
  login: function login(_ref2, data) {
    var commit, _ref3, result, token, refreshToken, user, error;

    return regeneratorRuntime.async(function login$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            commit = _ref2.commit;
            _context2.prev = 1;
            _context2.next = 4;
            return regeneratorRuntime.awrap((0, _user.userLogin)(data));

          case 4:
            _ref3 = _context2.sent;
            result = _ref3.data.result;
            token = result.token, refreshToken = result.refreshToken, user = result.user; //   Cookies.set('token', token, { expires: 7 })
            //   Cookies.set('refreshToken', refreshToken, { expires: 30 })

            commit('setToken', token);
            commit('setRefreshToken', refreshToken);
            commit('setUserData', user);
            alert('login successfully');
            this.$router.push('/');
            _context2.next = 18;
            break;

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](1);
            error = _context2.t0.response.data.msg;
            throw error;

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, null, this, [[1, 14]]);
  },
  refresh: function refresh(_ref4, _refresh) {
    var commit, _ref5, result, token, refreshToken;

    return regeneratorRuntime.async(function refresh$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            commit = _ref4.commit;
            _context3.prev = 1;
            _context3.next = 4;
            return regeneratorRuntime.awrap((0, _user.getNewToken)(_refresh));

          case 4:
            _ref5 = _context3.sent;
            result = _ref5.data.result;
            token = result.token, refreshToken = result.refreshToken;
            commit('setToken', token);
            commit('setRefreshToken', refreshToken);
            _context3.next = 14;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](1);

            //if refreshToken also expired
            if (_context3.t0.response.data.status === 401) {
              alert('Please login again!');
              this.$router.push({
                path: '/'
              });
            }

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, null, this, [[1, 11]]);
  },
  logout: function logout(_ref6) {
    var commit;
    return regeneratorRuntime.async(function logout$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            commit = _ref6.commit;
            commit("clearToken"); //   Cookies.remove("token")
            //   Cookies.remove("refreshToken")

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    });
  },
  getUserInfo: function getUserInfo(_ref7) {
    var commit, _ref8, data, error;

    return regeneratorRuntime.async(function getUserInfo$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            commit = _ref7.commit;
            _context5.prev = 1;
            _context5.next = 4;
            return regeneratorRuntime.awrap((0, _user.userInfo)());

          case 4:
            _ref8 = _context5.sent;
            data = _ref8.data;
            commit('setUserData', data);
            _context5.next = 14;
            break;

          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5["catch"](1);
            console.log(_context5.t0.response.data.msg);
            error = _context5.t0.response.data.msg;
            throw error;

          case 14:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, [[1, 9]]);
  },
  getCartList: function getCartList(_ref9) {
    var commit, _ref10, _ref10$data, cartList, count, error;

    return regeneratorRuntime.async(function getCartList$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            commit = _ref9.commit;
            _context6.prev = 1;
            _context6.next = 4;
            return regeneratorRuntime.awrap((0, _user.getCart)());

          case 4:
            _ref10 = _context6.sent;
            _ref10$data = _ref10.data;
            cartList = _ref10$data.cartList;
            count = _ref10$data.count;
            commit('setCart', cartList);
            commit('setCartLength', count);
            _context6.next = 17;
            break;

          case 12:
            _context6.prev = 12;
            _context6.t0 = _context6["catch"](1);
            console.log(_context6.t0.response.data.msg);
            error = _context6.t0.response.data.msg;
            throw error;

          case 17:
          case "end":
            return _context6.stop();
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