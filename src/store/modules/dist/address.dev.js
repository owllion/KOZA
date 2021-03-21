"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
//api--> https://raw.githubusercontent.com/kurotanshi/mask-map/master/raw/area-location.json
var state = {
  //使用者目前所選縣市，此為預設
  currCity: '台北市',
  //目前所選行政區
  currDistrict: '北投區',
  //api回傳的縣市、行政區資訊
  location: []
};
var getters = {
  isAuthenticated: function isAuthenticated(state) {
    return state.token !== null;
  }
};
var actions = {};
var mutations = {
  sercurrCity: function sercurrCity(state, value) {
    state.currCity = value;
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