"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var state = {
  lang: null
};
var getters = {};
var actions = {};
var mutations = {
  setLang: function setLang(state, value) {
    state.lang = value;
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