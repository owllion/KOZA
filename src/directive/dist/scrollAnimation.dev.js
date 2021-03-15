"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    // if(entry.isIntersecting) {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('enter');
      observer.unobserve(entry.target);
    }
  });
});
var _default = {
  bind: function bind(el) {
    el.classList.add('before-enter');
    observer.observe(el);
  }
};
exports["default"] = _default;