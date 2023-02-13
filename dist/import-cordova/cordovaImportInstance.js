"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config");
var utils_1 = require("./utils");
var CordovaImportInstance = /** @class */ (function () {
    function CordovaImportInstance(options, useHttp) {
        this.config = Object.assign(JSON.parse(JSON.stringify(config_1.default)), {
            cordovajs: __assign(__assign({}, options), { local: config_1.default.cordovajs.local }),
            useHttp: useHttp,
        });
    }
    Object.defineProperty(CordovaImportInstance.prototype, "userAgent", {
        get: function () {
            return window.navigator.userAgent.toLowerCase();
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 返回注入的地址
     *
     * 默认使用 local模式，
     * 当检测到是 https协议 (安卓) 或在 iframe 中打开时，
     * 若iOS或安卓的 cordovajs 地址存在，强制使用 http 模式
     */
    CordovaImportInstance.prototype.getImportUri = function () {
        var platform = this.getCurrentPlatformByUserAgent();
        if (this.mustUseHttpModel() || this.config.useHttp) {
            var httpUri = utils_1.getCordovaJsUriByPlatform(this.config, platform);
            if (!httpUri) {
                console.warn('当前应用环境适合使 http(s):// 方式加载 cordova.js，请设置对应平台的 cordova.js 访问地址！');
            }
            if (httpUri)
                return httpUri;
        }
        return this.config.cordovajs.local;
    };
    CordovaImportInstance.prototype.mustUseHttpModel = function () {
        if (utils_1.inIframe())
            return true;
        if (utils_1.isHttpsProtocol() && utils_1.isAndroidPlatform(this.userAgent) && !utils_1.isX5Webview())
            return true;
        return false;
    };
    CordovaImportInstance.prototype.getCurrentPlatformByUserAgent = function () {
        if (utils_1.isiOSPlatform(this.userAgent)) {
            return 'iOS';
        }
        if (utils_1.isAndroidPlatform(this.userAgent)) {
            return 'android';
        }
        return 'local';
    };
    return CordovaImportInstance;
}());
exports.default = CordovaImportInstance;
