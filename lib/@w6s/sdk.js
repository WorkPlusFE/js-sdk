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
  function isString(wat) {
      return Object.prototype.toString.call(wat) === '[object String]';
  }
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
   * Checks whether given value's type is an array
   * @param wat A value to be checked.
   * @returns A boolean representing the result.
   */
  function isArray(wat) {
      return Object.prototype.toString.call(wat) === '[object Array]';
  }
  /**
   * Checks whether given value's type is a function
   * @param wat A value to be checked.
   * @returns A boolean representing the result.
   */
  function isFunction(wat) {
      return Object.prototype.toString.call(wat) === '[object Function]';
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
           * Storage 前缀，默认 "workplus"
           * @private
           * @memberof WorkPlusStorage
           */
          this._prefix = 'workplus';
          /**
           * Storage 前缀连接符，默认 "."
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
           * 获取key前缀
           * @readonly
           * @type {string}
           * @memberof WorkPlusStorage
           */
          get: function () {
              return this._prefix + ':';
          },
          enumerable: true,
          configurable: true
      });
      /**
       * 获取完整的key
       * @private
       * @param {string} key
       * @returns {string}
       * @memberof WorkPlusStorage
       */
      WorkPlusStorage.prototype._getFullKey = function (key) {
          return this._fullPrefix + key;
      };
      /**
       * 获取item
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
       * 检测key是否存在
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
       * 添加item
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
       * 删除item
       * @param {string} key
       * @memberof WorkPlusStorage
       */
      WorkPlusStorage.prototype.remove = function (key) {
          var _a;
          var fullKey = this._getFullKey(key);
          (_a = this._storage) === null || _a === void 0 ? void 0 : _a.removeItem(fullKey);
      };
      /**
       * 清空Storage
       * @memberof WorkPlusStorage
       */
      WorkPlusStorage.prototype.clear = function () {
          var _this = this;
          this.forEach(function (key) { return _this.remove(key); });
      };
      /**
       * 获取item总数量
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
       * @param {(key: string, value: unknown) => void} callback
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

  /**
   * 休眠函数
   * @param time 时间，单位毫秒
   */
  var sleep = function (time) {
      return new Promise(function (resolve) {
          setTimeout(function () { return resolve(); }, time);
      });
  };
  /**
   * 加载Script
   * @export
   * @param {string} url
   */
  var loadScript = function (url) {
      return new Promise(function (resolve, reject) {
          var script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = url;
          script.addEventListener('load', function () { return resolve(script); }, false);
          script.addEventListener('error', function () { return reject(script); }, false);
          document.head.appendChild(script);
      });
  };

  var WPUtils = /*#__PURE__*/Object.freeze({
    __proto__: null,
    sleep: sleep,
    loadScript: loadScript,
    isString: isString,
    isPrimitive: isPrimitive,
    isPlainObject: isPlainObject,
    isArray: isArray,
    isFunction: isFunction
  });

  /** 环境检测 */
  var detectInWorkPlus = function () {
      var _a;
      return (_a = window) === null || _a === void 0 ? void 0 : _a.navigator.userAgent.includes('workplus');
  };

  var SDK = /** @class */ (function () {
      function SDK(options) {
          this._isReady = false;
          var initSuccess = this.init(options);
          if (initSuccess) {
              this._ready();
          }
      }
      SDK.prototype.init = function (options) {
          if (!detectInWorkPlus()) {
              console.warn('当前非workplus环境，请检查重试');
              return false;
          }
          if (this._isReady) {
              console.warn('已注入Cordova，无需重新实例化');
              return false;
          }
          if (options.debug) ;
          return true;
      };
      SDK.prototype._ready = function (fn) {
          var _this = this;
          document.addEventListener('deviceready', function () {
              _this._isReady = true;
              console.info('Cordova 注入成功');
              fn && fn();
          }, false);
      };
      SDK.sendEvent = function (service, action, args, success, failed) {
          return new Promise(function (resolve, reject) {
              cordova.exec(function (res) {
                  if (success && isFunction(success)) {
                      success(res);
                  }
                  return resolve(res);
              }, function (err) {
                  if (failed && isFunction(failed)) {
                      failed(err);
                  }
                  return reject(err);
              }, service, action, args);
          });
      };
      Object.defineProperty(SDK.prototype, "isReday", {
          get: function () {
              return this._isReady;
          },
          enumerable: true,
          configurable: true
      });
      return SDK;
  }());

  /** 图像相关 API */
  var ServiceKey = 'WorkPlus_Image';
  /**
   * 拍照返回
   * @description 拍照，压缩图片后直接返回图片
   * @param {ImageOptions<[], TakePhoto>} [options]
   * @returns
   */
  function takePhoto(options) {
      var _a, _b, _c, _d;
      return SDK.sendEvent(ServiceKey, 'takePhoto', (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.data, (_b !== null && _b !== void 0 ? _b : [])), (_c = options) === null || _c === void 0 ? void 0 : _c.success, (_d = options) === null || _d === void 0 ? void 0 : _d.fail);
  }
  /**
   * 拍照返回并且可编辑
   * @description 拍照，截图返回
   * @param {ImageOptions<[], TakePhoto>} [options]
   * @returns
   */
  function takePhotoWithEdit(options) {
      var _a, _b, _c, _d;
      return SDK.sendEvent(ServiceKey, 'takePhotoWithEdit', (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.data, (_b !== null && _b !== void 0 ? _b : [])), (_c = options) === null || _c === void 0 ? void 0 : _c.success, (_d = options) === null || _d === void 0 ? void 0 : _d.fail);
  }
  /**
   * 选择图片（单张）
   * @description 调用图片相册，选择图片并压缩返回
   * @param {ImageOptions<[], TakePhoto>} [options]
   * @returns
   */
  function selectImage(options) {
      var _a, _b, _c, _d;
      return SDK.sendEvent(ServiceKey, 'selectImage', (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.data, (_b !== null && _b !== void 0 ? _b : [])), (_c = options) === null || _c === void 0 ? void 0 : _c.success, (_d = options) === null || _d === void 0 ? void 0 : _d.fail);
  }
  /**
   * 选择图片并截图返回（单张）
   * @description 调用图片相册，选择图片并截取返回
   * @param {ImageOptions<[], TakePhoto>} [options]
   * @returns
   */
  function selectImageWithEdit(options) {
      var _a, _b, _c, _d;
      return SDK.sendEvent(ServiceKey, 'selectImageWithEdit', (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.data, (_b !== null && _b !== void 0 ? _b : [])), (_c = options) === null || _c === void 0 ? void 0 : _c.success, (_d = options) === null || _d === void 0 ? void 0 : _d.fail);
  }
  /**
   * 选择多张图片
   * @description 调用图片相册，选择多张图片并压缩返回，并且支持选过图片的传输
   * @param {ImagesOptions} [options]
   * @returns
   */
  function selectImages(options) {
      var _a, _b;
      return SDK.sendEvent(ServiceKey, 'selectImages', [{ imageKeys: options.data }], (_a = options) === null || _a === void 0 ? void 0 : _a.success, (_b = options) === null || _b === void 0 ? void 0 : _b.fail);
  }
  /**
   * 清除压缩后的图片
   * @description 拍照或选择照片后都会生成压缩图片，调用这个方法去清除
   * @param {ImageOptions<[], void>} [options]
   * @returns {Promise<void>}
   */
  function cleanCompressImage(options) {
      var _a, _b, _c, _d;
      return SDK.sendEvent(ServiceKey, 'cleanCompressImage', (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.data, (_b !== null && _b !== void 0 ? _b : [])), (_c = options) === null || _c === void 0 ? void 0 : _c.success, (_d = options) === null || _d === void 0 ? void 0 : _d.fail);
  }
  /**
   * 批量预览图片(新增 position请求参数，在workplus3.1.3版本后使用)
   * @description 传输图片地址，预览图片
   * @param {ImageOptions<ShowImagesItem[], void>} options
   * @returns {Promise<void>}
   */
  function showImages(options) {
      var _a, _b;
      return SDK.sendEvent(ServiceKey, 'showImages', options.data, (_a = options) === null || _a === void 0 ? void 0 : _a.success, (_b = options) === null || _b === void 0 ? void 0 : _b.fail);
  }
  /**
   * 保存图片
   * @description 传输图片地址，保存图片
   * @param {ImageOptions<SaveImageItem[], void>} options
   * @returns {Promise<void>}
   */
  function saveImages(options) {
      var _a, _b;
      return SDK.sendEvent(ServiceKey, 'saveImages', options.data, (_a = options) === null || _a === void 0 ? void 0 : _a.success, (_b = options) === null || _b === void 0 ? void 0 : _b.fail);
  }
  /**
   * 长按图片弹出框
   * @description 弹出框包括"识别二维码", "保存图片"等选项
   * @param {ImageOptions<ImageDataItem[], any>} [options]
   * @returns {Promise<void>}
   */
  function actionForLongPressImage(options) {
      var _a, _b;
      return SDK.sendEvent(ServiceKey, 'actionForLongPressImage', options.data, (_a = options) === null || _a === void 0 ? void 0 : _a.success, (_b = options) === null || _b === void 0 ? void 0 : _b.fail);
  }
  /**
   * 新增拍照返回接口(返回带mediaId方式) (Workplus 3.1.3版本以上使用)
   * @description 新增接口，拍照返回，根据传入参数决定是否可以进行裁剪编辑, 同时会将图片上传后台，返回mediaId
   * @param {ImageOptions<[TakePicture], TakePictureItem>} [options]
   * @returns
   */
  function takePicture(options) {
      var _a, _b;
      return SDK.sendEvent(ServiceKey, 'takePicture', options.data, (_a = options) === null || _a === void 0 ? void 0 : _a.success, (_b = options) === null || _b === void 0 ? void 0 : _b.fail);
  }
  /**
   * 新增选择图片接口(返回带mediaId方式)(Workplus 3.1.3版本以上使用)
   * @description 调用图片相册，根据用户参数决定是否选择多张图片或单张图片，
   * 支持编辑剪裁(编辑剪裁功能仅仅限于单张图片功能),并且支持选过图片的传输,
   * 选择完后会进行后台上传，返回值中带有上传后的mediaId
   * @param {ImageOptions<[ChooseImages], TakePicture[]>} options
   * @returns {Promise<TakePicture[]>}
   */
  function chooseImages(options) {
      var _a, _b;
      return SDK.sendEvent(ServiceKey, 'chooseImages', options.data, (_a = options) === null || _a === void 0 ? void 0 : _a.success, (_b = options) === null || _b === void 0 ? void 0 : _b.fail);
  }
  /**
   * 图片添加水印接口(Workplus 3.6.0版本以上使用)
   * @description 拍照，生成水印图片返回
   * @param {ImageOptions<[WaterMark], void>} options
   * @returns {Promise<void>}
   */
  function takePictureAddWatermark(options) {
      var _a, _b;
      return SDK.sendEvent(ServiceKey, 'takePictureAddWatermark', options.data, (_a = options) === null || _a === void 0 ? void 0 : _a.success, (_b = options) === null || _b === void 0 ? void 0 : _b.fail);
  }

  var WPImage = /*#__PURE__*/Object.freeze({
    __proto__: null,
    takePhoto: takePhoto,
    takePhotoWithEdit: takePhotoWithEdit,
    selectImage: selectImage,
    selectImageWithEdit: selectImageWithEdit,
    selectImages: selectImages,
    cleanCompressImage: cleanCompressImage,
    showImages: showImages,
    saveImages: saveImages,
    actionForLongPressImage: actionForLongPressImage,
    takePicture: takePicture,
    chooseImages: chooseImages,
    takePictureAddWatermark: takePictureAddWatermark
  });

  /**
   * 添加Cordova监听事件
   * @param {CordovaListener} type
   * @param {(ev: Event) => {}} listener
   * @param {boolean} [useCapture]
   */
  function on(type, listener, useCapture) {
      document.addEventListener(type, listener, useCapture);
  }
  /**
   * 取消Cordova监听事件
   * @export
   * @param {CordovaListener} type
   * @param {(ev: Event) => {}} listener
   * @param {boolean} [useCapture]
   */
  function off(type, listener, useCapture) {
      document.removeEventListener(type, listener, useCapture);
  }

  var version = '0.0.1';
  var native = {};
  var Storage = WorkPlusStorage;
  var utils = WPUtils;
  var image = WPImage;

  exports.Storage = Storage;
  exports.image = image;
  exports.native = native;
  exports.off = off;
  exports.on = on;
  exports.utils = utils;
  exports.version = version;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
