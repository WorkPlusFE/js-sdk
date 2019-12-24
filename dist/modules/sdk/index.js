"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_1 = require("../utils/shared/platform");
var is_1 = require("../utils/shared/is");
var SDK = /** @class */ (function () {
    function SDK(options) {
        this._isReady = false;
        var initSuccess = this.init(options);
        if (initSuccess) {
            this._ready();
        }
    }
    SDK.prototype.init = function (options) {
        if (!platform_1.detectInWorkPlus()) {
            console.warn('当前非workplus环境，请检查重试');
            return false;
        }
        if (this._isReady) {
            console.warn('已注入Cordova，无需重新实例化');
            return false;
        }
        if (options.debug) {
            // logger info
        }
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
                if (success && is_1.isFunction(success)) {
                    success(res);
                }
                return resolve(res);
            }, function (err) {
                if (failed && is_1.isFunction(failed)) {
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
exports.default = SDK;
