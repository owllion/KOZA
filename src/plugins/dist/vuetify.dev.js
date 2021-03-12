"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _framework = _interopRequireDefault(require("vuetify/lib/framework"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_framework["default"]);

var _default = new _framework["default"]({});

exports["default"] = _default;