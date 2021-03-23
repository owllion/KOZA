"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var state = {
  //使用者目前所選縣市，此為預設
  currCity: '台北市',
  //目前所選行政區
  currDistrict: '北投區',
  //api回傳的縣市、行政區資訊
  location: []
};
var getters = {
  cityList: function cityList(state) {
    return state.location.map(function (item) {
      return item.name;
    });
  },
  //districtList: state =>state.location.find(item=> item.name === state.currCity)?.districts || []
  districtList: function districtList(state) {
    return state.location.filter(function (item) {
      if (item.name === state.currCity) {
        return item.name === state.currCity;
      }
    }).map(function (d) {
      return d.districts;
    });
  }
};
var actions = {
  getLocations: function getLocations(_ref) {
    var commit, api, _ref2, data;

    return regeneratorRuntime.async(function getLocations$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            commit = _ref.commit;
            api = 'https://raw.githubusercontent.com/kurotanshi/mask-map/master/raw/area-location.json';
            _context.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get(api));

          case 4:
            _ref2 = _context.sent;
            data = _ref2.data;
            commit('setAreaLoction', data);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};
var mutations = {
  setcurrCity: function setcurrCity(state, value) {
    state.currCity = value;
  },
  setcurrDistrict: function setcurrDistrict(state, value) {
    state.currDistrict = value;
  },
  setAreaLoction: function setAreaLoction(state, value) {
    state.location = value;
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