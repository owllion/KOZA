"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _user = require("@/api/user");

var _router = _interopRequireDefault(require("@/router"));

var _jsCookie = _interopRequireDefault(require("js-cookie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var state = {
  token: null,
  refreshToken: null,
  userData: '',
  cartList: [],
  cartLength: '',
  favList: [],
  showEmailBox: false
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
  cartList: function cartList(state) {
    return state.cartList;
  },
  cartLength: function cartLength(state) {
    return state.cartLength;
  },
  favList: function favList(state) {
    return state.favList;
  },
  showEmailBox: function showEmailBox(state) {
    return state.showEmailBox;
  }
};
var actions = {
  signInOrUp: function signInOrUp(_ref, data) {
    var commit, alertText, res, _res$data$result, token, refreshToken, user, error;

    return regeneratorRuntime.async(function signInOrUp$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            commit = _ref.commit;
            _context.prev = 1;
            alertText = data.captchaText ? 'logged in!' : 'registered';

            if (!data.captchaText) {
              _context.next = 9;
              break;
            }

            _context.next = 6;
            return regeneratorRuntime.awrap((0, _user.userLogin)(data));

          case 6:
            _context.t0 = _context.sent;
            _context.next = 12;
            break;

          case 9:
            _context.next = 11;
            return regeneratorRuntime.awrap((0, _user.userRegister)(data));

          case 11:
            _context.t0 = _context.sent;

          case 12:
            res = _context.t0;
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
            commit('setCart', user.cartList);
            commit('setCartLength', user.cartList.length);
            commit('setFavList', user.favList);

            this._vm.$swal({
              icon: 'success',
              title: 'Success',
              text: "You have successfully ".concat(alertText)
            });

            _router["default"].push('/');

            _context.next = 31;
            break;

          case 26:
            _context.prev = 26;
            _context.t1 = _context["catch"](1);

            if (!_context.t1.response) {
              _context.next = 31;
              break;
            }

            error = _context.t1.response.data.msg;
            throw error;

          case 31:
          case "end":
            return _context.stop();
        }
      }
    }, null, this, [[1, 26]]);
  },
  logout: function logout(_ref2) {
    var commit;
    return regeneratorRuntime.async(function logout$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            commit = _ref2.commit;
            commit("clearAll");

            _jsCookie["default"].remove("token");

            _jsCookie["default"].remove("refreshToken");

            this._vm.$swal({
              icon: 'success',
              title: 'SUCCESS!',
              text: 'You have been successfully logged out! '
            });

            _router["default"].push('/');

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, null, this);
  }
};
var mutations = {
  toggleEmailBox: function toggleEmailBox(state, data) {
    state.showEmailBox = data;
  },
  setToken: function setToken(state, token) {
    state.token = token;
  },
  setRefreshToken: function setRefreshToken(state, refreshToken) {
    state.refreshToken = refreshToken;
  },
  setUserData: function setUserData(state, userData) {
    state.userData = userData;
  },
  clearAll: function clearAll(state) {
    state.token = null;
    state.cartList = [];
    state.cartLength = '';
    state.favList = [];
    state.refreshToken = null;
    state.userData = null;
  },
  setCart: function setCart(state, cart) {
    state.cartList = cart;
  },
  setCartLength: function setCartLength(state, length) {
    state.cartLength = length;
  },
  setFavList: function setFavList(state, data) {
    state.favList = data;
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