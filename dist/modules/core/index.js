"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_1 = require("../utils/shared/platform");
var is_1 = require("../utils/shared/is");
var TIME_OUT = 10000;
var Core = /** @class */ (function () {
    function Core() {
        /** cordova is loaded */
        this._ready = false;
        this.init();
    }
    /**
     * 初始化配置项
     * @param {SDKOptions} [options]
     * @returns {boolean}
     * @memberof Core
     */
    Core.prototype.init = function (options) {
        if (!platform_1.detectInWorkPlus()) {
            console.warn('当前非workplus环境，请检查重试');
            return false;
        }
        if (sessionStorage.get('ready')) {
            console.warn('已注入Cordova，无需重新实例化');
            return false;
        }
        if (options && options.debug) {
            // logger info
        }
        return true;
    };
    /**
     * The event fires when Cordova is fully loaded.
     * @export
     * @param {Function} [fn]
     * @returns
     */
    Core.prototype.ready = function (fn) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.isReday) {
                resolve();
            }
            else {
                var timer_1 = setTimeout(function () {
                    console.warn('Cordova 注入异常');
                    reject();
                }, TIME_OUT);
                document.addEventListener('deviceready', function () {
                    console.info('Cordova 注入成功');
                    if (fn && is_1.isFunction(fn)) {
                        fn();
                    }
                    _this._isReday();
                    clearTimeout(timer_1);
                    resolve();
                }, false);
            }
        });
    };
    Core.prototype._isReday = function () {
        this._ready = true;
    };
    Object.defineProperty(Core.prototype, "isReday", {
        get: function () {
            return this._ready;
        },
        enumerable: true,
        configurable: true
    });
    return Core;
}());
var core = new Core();
exports.init = core.init;
exports.ready = core.ready;
/**
 * 执行 Cordova 的事件调用
 * @template A 参数类型
 * @template S 成功回调的返回类型
 * @template F 失败回调的返回类型
 * @param {string} service 调用的服务类名
 * @param {string} action 调用的方法名
 * @param {Array<A>} args 调用的参数
 * @param {(data: S) => void} [success] 成功回调
 * @param {(err: F) => void} [failed] 失败回调
 * @returns {Promise<S>}
 */
exports.exec = function (service, action, args, success, fail) {
    return new Promise(function (resolve, reject) {
        var execFn = function () {
            cordova.exec(function (res) {
                if (success && is_1.isFunction(success)) {
                    success(res);
                }
                return resolve(res);
            }, function (err) {
                if (fail && is_1.isFunction(fail)) {
                    fail(err);
                }
                return reject(err);
            }, service, action, args);
        };
        core.ready(execFn);
    });
};
