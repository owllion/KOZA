"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sort = exports.getByKeyword = exports.getByOrigin = exports.getByCategory = exports.filterByPrice = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var filterByPrice = function filterByPrice(list, price) {
  if (!price) return list;
  return list.filter(function (item) {
    if (price.indexOf("<100") > -1) {
      return item.price > 1 && item.price <= 100;
    }

    if (price.indexOf("100_300") > -1) {
      return item.price >= 100 && item.price <= 300;
    }

    if (price.indexOf(">300") > -1) {
      return item.price > 300;
    }

    return list;
  });
};

exports.filterByPrice = filterByPrice;

var getByCategory = function getByCategory(list, category) {
  if (!category) return list;
  return list.filter(function (item) {
    return item.category === category;
  });
};

exports.getByCategory = getByCategory;

var getByOrigin = function getByOrigin(list, origin) {
  if (!origin) return list;
  return list.filter(function (item) {
    return item.origin === origin;
  });
};

exports.getByOrigin = getByOrigin;

var getByKeyword = function getByKeyword(list, keyword) {
  var search = keyword.trim().toLowerCase();
  if (!search.length) return list;
  return list.filter(function (item) {
    return item.productName.toLowerCase().indexOf(search) > -1;
  });
};

exports.getByKeyword = getByKeyword;

var sort = function sort(list, type) {
  if (!type) return list;

  if (type === "a_z") {
    return _toConsumableArray(list).sort(function (a, b) {
      return a.productName.localeCompare(b.productName);
    });
  }

  if (type === "z_a") {
    return _toConsumableArray(list).sort(function (a, b) {
      return b.productName.localeCompare(a.productName);
    });
  }

  if (type === "high_low") {
    return _toConsumableArray(list).sort(function (a, b) {
      return b.price - a.price;
    });
  }

  if (type === "low_high") {
    return _toConsumableArray(list).sort(function (a, b) {
      return a.price - b.price;
    });
  }

  if (type === "new_old") {
    return _toConsumableArray(list).sort(function (a, b) {
      return new Date(a.createdAt) - new Date(b.createdAt);
    });
  }

  if (type === "old_new") {
    return _toConsumableArray(list).sort(function (a, b) {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
  }
};

exports.sort = sort;