"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execSync = exports.exec = exports.logger = exports.error = exports.ready = exports.init = void 0;
var platform_1 = require("../shared/platform");
var is_1 = require("../shared/is");
var import_cordova_1 = require("../import-cordova");
var logger_1 = require("./logger");
var mock_services_1 = require("./mock-services");
var EXEC_TIME_OUT = 5000;
var Core = /** @class */ (function () {
    function Core() {
        var _this = this;
        /** cordova is loaded */
        this._ready = false;
        /** cordova is inject */
        this._inject = false;
        /** logger */
        this._logger = new logger_1.default();
        /** timeout */
        this._timeout = EXEC_TIME_OUT;
        /** mock 配置 */
        this._mock = false;
        /** mock 数据 */
        this._mockData = Object.create(null);
        /**
         * 初始化配置项
         * @param {CoreOptions} [options]
         * @returns {boolean}
         * @memberof Core
         */
        this.init = function (options) {
            // 配置 logger
            if (!_this._logger) {
                _this._logger = new logger_1.default();
            }
            if (options === null || options === void 0 ? void 0 : options.debug) {
                _this._logger.enable();
                _this._logger.warn('当前 SDK 已开启调试模式');
            }
            if (!platform_1.isBrowser()) {
                _this._logger.error('SDK 不支持非浏览器环境');
                return;
            }
            if (!window.cordova && !_this.isReday && !_this._inject) {
                // 注入 Cordova
                import_cordova_1.default(options === null || options === void 0 ? void 0 : options.cordovajs, options === null || options === void 0 ? void 0 : options.useHttp);
                _this._inject = true;
            }
            // 设置超时
            _this._timeout = (options === null || options === void 0 ? void 0 : options.timeout) || EXEC_TIME_OUT;
            _this._logger.warn("\u5F53\u524D SDK \u8BBE\u7F6E\u7684\u8D85\u65F6\u65F6\u95F4\u4E3A: " + _this._timeout + "ms");
            // 设置 Mock 服务
            if (options === null || options === void 0 ? void 0 : options.mock) {
                _this._mock = options === null || options === void 0 ? void 0 : options.mock;
                if (options === null || options === void 0 ? void 0 : options.mockData) {
                    _this._mockData = options === null || options === void 0 ? void 0 : options.mockData;
                }
            }
            else if (!platform_1.detectInWorkPlus()) {
                _this._logger.error('请在 WorkPlus APP 下打开页面');
                return;
            }
        };
        /**
         * 在 Cordova 准备就绪时触发，api的调用需要保证在该回调函数触发后调用
         * @param {Function} [fn] 回调函数
         * @memberof Core
         */
        this.ready = function (fn) {
            return new Promise(function (resolve) {
                var run = function () { return fn && is_1.isFunction(fn) && fn(); };
                console.log(run);
                if (_this.isReday) {
                    resolve();
                    run();
                }
                else {
                    document.addEventListener('deviceready', function () {
                        _this._logger.warn('Cordova 注入成功');
                        _this._setReady(true);
                        resolve();
                        run();
                    }, false);
                }
            });
        };
        /**
         * 注册error函数, 在SDK发生错误/异常时执行
         * @param {Function} [fn] 回调函数
         * @memberof Core
         */
        this.error = function (fn) {
            if (!is_1.isFunction(fn)) {
                _this._logger.error('错误监听回调仅支持函数参数');
                return;
            }
            _this._errorCallback = fn;
        };
        this.init();
    }
    /**
     * 执行error回调函数
     * @param {unknown} error 错误对象
     * @memberof Core
     */
    Core.prototype.onError = function (error) {
        if (this._errorCallback && is_1.isFunction(this._errorCallback)) {
            this._errorCallback(error);
        }
    };
    Core.prototype._setReady = function (val) {
        this._ready = val;
    };
    Object.defineProperty(Core.prototype, "isReday", {
        get: function () {
            return this._ready;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Core.prototype, "logger", {
        get: function () {
            return this._logger;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Core.prototype, "timeout", {
        get: function () {
            return this._timeout;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Core.prototype, "mock", {
        get: function () {
            return this._mock;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Core.prototype, "mockData", {
        get: function () {
            return this._mockData;
        },
        enumerable: false,
        configurable: true
    });
    return Core;
}());
var core = new Core();
exports.init = core.init;
exports.ready = core.ready;
exports.error = core.error;
exports.logger = core.logger;
/**
 * 执行 Mock 调用
 * @param {string} service 调用的服务类名
 * @param {string} action 调用的方法名
 * @returns {boolean}
 */
function execByMock(service, action) {
    var serviceName = mock_services_1.services[service];
    var mockService = core.mockData[serviceName];
    if (mockService && mockService[action] && is_1.isFunction(mockService[action])) {
        var res = Object.create(null);
        exports.logger.warn("\u6267\u884C " + service + "." + action + " Mock \u8C03\u7528");
        try {
            res = mockService[action]();
            exports.logger.warn("\u6267\u884C " + service + "." + action + " Mock \u8FD4\u56DE\u7ED3\u679C: " + JSON.stringify(res, null, 4));
        }
        catch (error) {
            exports.logger.error("\u6267\u884C " + service + "." + action + " Mock \u53D1\u751F\u9519\u8BEF: " + JSON.stringify(error, null, 4));
        }
        return res;
    }
    return false;
}
/* eslint-disable */
var jsonParser = function (res) {
    try {
        return JSON.parse(res);
    }
    catch (error) {
        return { result: res };
    }
};
/* eslint-enable */
/**
 * 以异步的方式执行 Cordova 的事件，用于获取数据类型的 API
 * @template A 参数类型
 * @template S 成功回调的返回类型
 * @template F 失败回调的返回类型
 * @param {string} service 调用的服务类名
 * @param {string} action 调用的方法名
 * @param {Array<A>} args 调用的参数
 * @param {(data: S) => void} [success] 成功回调
 * @param {(err: F) => void} [failed] 失败回调
 * @param {boolean} setTimer 是否启用超时
 * @returns {Promise<S>}
 */
function exec(service, action, args, success, fail, setTimer) {
    if (setTimer === void 0) { setTimer = true; }
    return new Promise(function (resolve, reject) {
        var callAPI = service + "." + action;
        var timer = setTimer
            ? setTimeout(function (err) {
                if (err === void 0) { err = '接口调用超时'; }
                exports.logger.warn(callAPI + " \u63A5\u53E3\u8C03\u7528\u54CD\u5E94\u8D85\u65F6\uFF0C\u8BF7\u91CD\u8BD5");
                if (fail && is_1.isFunction(fail)) {
                    fail(err);
                }
                reject(err);
            }, core.timeout)
            : 0;
        var removeTimer = function () {
            timer && clearTimeout(timer);
        };
        var execFn = function () {
            exports.logger.warn("\u51C6\u5907\u8C03\u7528 " + callAPI);
            cordova.exec(function (res) {
                removeTimer();
                console.log(res);
                var response = jsonParser(res);
                exports.logger.warn(callAPI + " \u8C03\u7528\u6210\u529F: " + JSON.stringify(response, null, 4));
                if (success && is_1.isFunction(success)) {
                    success(response);
                }
                return resolve(response);
            }, function (err) {
                removeTimer();
                exports.logger.error(callAPI + " \u63A5\u53E3\u8C03\u7528\u5931\u8D25");
                core.onError(callAPI + " \u8C03\u7528\u5931\u8D25: " + err);
                if (fail && is_1.isFunction(fail)) {
                    fail(err);
                }
                return reject(err);
            }, service, action, args);
        };
        try {
            // 优先执行 mock
            if (core.mock) {
                var mockRes = execByMock(service, action);
                if (mockRes) {
                    removeTimer();
                    resolve(mockRes);
                    return;
                }
            }
            core.ready(execFn);
        }
        catch (error) {
            core.onError(error);
        }
    });
}
exports.exec = exec;
/**
 * 以同步的方式执行 Cordova 的事件, 用于没有回调的API
 * @export
 * @template A
 * @param {string} service 调用的服务类名
 * @param {string} action 调用的方法名
 * @param {Array<A>} args 调用的参数
 * @returns {void}
 */
function execSync(service, action, args) {
    var callAPI = service + "." + action;
    exports.logger.warn("\u540C\u6B65\u8C03\u7528 " + callAPI);
    var execSyncFn = function () {
        cordova.exec(function (data) {
            exports.logger.warn(JSON.stringify(data, null, 4));
        }, function (err) {
            exports.logger.error(JSON.stringify(err, null, 4));
            core.onError(callAPI + " \u8C03\u7528\u5931\u8D25: " + err);
        }, service, action, args);
    };
    core.ready(execSyncFn);
}
exports.execSync = execSync;
