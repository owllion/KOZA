"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: '/',
  name: 'Home',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/Home'));
    });
  }
}, {
  path: '/login',
  name: 'Login',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/Login'));
    });
  }
}, {
  path: '/register',
  name: 'Register',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/Register'));
    });
  }
}, {
  path: '/allproducts',
  name: 'Products',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/Products'));
    });
  }
}, {
  path: '/item/:id',
  name: 'SingleItem',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/Detail'));
    });
  }
}, {
  path: '/products/:category',
  name: 'Category',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/Category'));
    });
  }
}, {
  path: '/reset-pass/:token',
  name: 'Reset',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/Reset-pass'));
    });
  }
}, {
  path: '/userprofile',
  name: 'UserProfile',
  meta: {
    requireAuth: true
  },
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/UserProfile'));
    });
  },
  children: [{
    path: 'profile',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/Profile'));
      });
    }
  }, {
    path: 'order',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/Order'));
      });
    }
  }, {
    path: 'coupon',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/Coupon'));
      });
    }
  }, {
    path: 'password',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/Modi_pass'));
      });
    }
  }, {
    path: 'favlist',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/Favlist'));
      });
    }
  }]
}, {
  path: '/checkout',
  name: 'Checkout',
  meta: {
    requireAuth: true
  },
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/Checkout'));
    });
  },
  redirect: '/checkout/check',
  children: [{
    path: 'check',
    components: {
      Cart: function Cart() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('../views/Cart'));
        });
      },
      Info: function Info() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('../views/Information'));
        });
      },
      Fin: function Fin() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('../views/Finish'));
        });
      }
    }
  }]
}, {
  path: '/order/detail',
  name: 'OrderDetail',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/Order_detail'));
    });
  }
}, {
  path: '/admin',
  name: 'Admin',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/Admin'));
    });
  }
}, {
  path: '/error',
  name: 'error',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/Error'));
    });
  }
}, {
  path: '*',
  redirect: '/error'
}];
var router = new _vueRouter["default"]({
  routes: routes,
  linkActiveClass: 'active',
  scrollBehavior: function scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
});
var _default = router;
exports["default"] = _default;