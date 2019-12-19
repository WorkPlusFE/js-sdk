/*!
 * @w6s/sdk.js v0.0.1
 * (c) 2019 WorkPlusFE
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.WorkPlus = {}));
}(this, (function (exports) { 'use strict';

  /**
   * Checks whether given value's type is a string
   * @param wat A value to be checked.
   * @returns A boolean representing the result.
   */
  /**
   * Checks whether given value's is a primitive (undefined, null, number, boolean, string)
   * @param wat A value to be checked.
   * @returns A boolean representing the result.
   */
  function isPrimitive(wat) {
      return wat === null || (typeof wat !== 'object' && typeof wat !== 'function');
  }
  /**
   * Checks whether given value's type is an object literal
   * @param wat A value to be checked.
   * @returns A boolean representing the result.
   */
  function isPlainObject(wat) {
      return Object.prototype.toString.call(wat) === '[object Object]';
  }
  /**
   * Checks whether given value's type is an object literal
   * @param wat A value to be checked.
   * @returns A boolean representing the result.
   */
  function isArray(wat) {
      return Object.prototype.toString.call(wat) === '[object Array]';
  }

  var WorkPlusStorage = /** @class */ (function () {
      /**
       * Storage 构造函数
       * @param {StorageOptions} options 配置项
       * @memberof WorkPlusStorage
       */
      function WorkPlusStorage(options) {
          var _a, _b;
          /**
           * storage 前缀，默认 "workplus"
           * @private
           * @memberof WorkPlusStorage
           */
          this._prefix = 'workplus';
          /**
           * storage 前缀连接符，默认 "."
           * @private
           * @memberof WorkPlusStorage
           */
          this._connector = '.';
          if (((_a = window) === null || _a === void 0 ? void 0 : _a.localStorage) && ((_b = window) === null || _b === void 0 ? void 0 : _b.sessionStorage)) {
              this._prefix = options.prefix || this._prefix;
              this._connector = options.connector || this._connector;
              this._storage = window[options.type];
          }
          else {
              throw new Error('当前环境不支持 storage.');
          }
      }
      Object.defineProperty(WorkPlusStorage.prototype, "_fullPrefix", {
          /**
           * Get the full prefix.
           * @readonly
           * @memberof WorkPlusStorage
           */
          get: function () {
              return this._prefix + ':';
          },
          enumerable: true,
          configurable: true
      });
      /**
       * 获取完整的 key
       * @param {string} key
       * @returns
       * @memberof WorkPlusStorage
       */
      WorkPlusStorage.prototype._getFullKey = function (key) {
          return this._fullPrefix + key;
      };
      /**
       * 获取 item
       * @param {string} key
       * @returns
       * @memberof WorkPlusStorage
       */
      WorkPlusStorage.prototype.get = function (key) {
          var _a;
          var fullKey = this._getFullKey(key);
          var value = (_a = this._storage.getItem(fullKey), (_a !== null && _a !== void 0 ? _a : ''));
          if (!this.hasKey(fullKey)) {
              throw Error('不存在的 key');
          }
          return JSON.parse(value);
      };
      /**
       * 检测 key 是否存在
       * @param {string} key
       * @returns {boolean}
       * @memberof WorkPlusStorage
       */
      WorkPlusStorage.prototype.hasKey = function (fullkey) {
          var _a;
          var storage = this._storage;
          var exist = false;
          for (var i = 0; i < storage.length; i++) {
              var curKey = (_a = storage.key(i), (_a !== null && _a !== void 0 ? _a : ''));
              if (curKey && curKey === fullkey) {
                  exist = true;
              }
          }
          return exist;
      };
      /**
       * 添加 item
       * @param {string} key
       * @param {*} source
       * @memberof WorkPlusStorage
       */
      WorkPlusStorage.prototype.add = function (key, source) {
          var fullKey = this._getFullKey(key);
          var value = source;
          if (isArray(source) || isPlainObject(source)) {
              value = JSON.stringify(source);
          }
          else if (!isPrimitive(source)) {
              throw Error('storage 不支持的数据类型');
          }
          try {
              this._storage.setItem(fullKey, value);
          }
          catch (error) {
              throw Error('storage 添加失败');
          }
      };
      /**
       * 删除 item
       * @param {string} key 要删除的key
       * @memberof WorkPlusStorage
       */
      WorkPlusStorage.prototype.remove = function (key) {
          var _a;
          var fullKey = this._getFullKey(key);
          (_a = this._storage) === null || _a === void 0 ? void 0 : _a.removeItem(fullKey);
      };
      /**
       * 清空 storage
       * @memberof WorkPlusStorage
       */
      WorkPlusStorage.prototype.clear = function () {
          var _this = this;
          this.forEach(function (key, value) { return _this.remove(key); });
      };
      /**
       * 获取 item 的数量
       * @returns {number}
       * @memberof WorkPlusStorage
       */
      WorkPlusStorage.prototype.count = function () {
          var _a;
          var storage = this._storage;
          var fullPrefix = this._fullPrefix;
          var count = 0;
          for (var i = 0; i < storage.length; i++) {
              var key = (_a = storage.key(i), (_a !== null && _a !== void 0 ? _a : ''));
              if (key.indexOf(fullPrefix) === 0) {
                  count++;
              }
          }
          return count;
      };
      /**
       * 遍历所有 item
       * @param {(key: string, value: any) => void} callback
       * @memberof WorkPlusStorage
       */
      WorkPlusStorage.prototype.forEach = function (callback) {
          var _a;
          var storage = this._storage;
          var fullPrefix = this._fullPrefix;
          for (var i = 0; i < storage.length; i++) {
              var key = (_a = storage.key(i), (_a !== null && _a !== void 0 ? _a : ''));
              if (key.indexOf(fullPrefix) === 0) {
                  callback(key, this.get(key));
              }
          }
      };
      return WorkPlusStorage;
  }());

  var version = '0.0.1';
  var native = {};
  var Storage = WorkPlusStorage;

  exports.Storage = Storage;
  exports.native = native;
  exports.version = version;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
