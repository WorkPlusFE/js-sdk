/*!
 * @w6s/sdk.js v0.0.1
 * (c) 2019 WorkPlusFE
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.WorkPlus = factory());
}(this, (function () { 'use strict';

  var SDK = {
      version: "0.0.1",
      native: {}
  };

  return SDK;

})));
