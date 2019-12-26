"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config");
var utils_1 = require("./utils");
var CordovaImportLib = /** @class */ (function () {
    function CordovaImportLib(host) {
        this.config = JSON.parse(JSON.stringify(config_1.default));
        this.config.SDK_HOST = host || config_1.default.SDK_HOST;
    }
    Object.defineProperty(CordovaImportLib.prototype, "userAgent", {
        get: function () {
            return window.navigator.userAgent.toLowerCase();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 返回注入的地址
     *
     * 默认使用 local模式，当检测到是 https协议 (安卓) 或在 iframe 中打开时，强制使用 http 模式
     */
    CordovaImportLib.prototype.getImportUri = function () {
        // 以 es模块 初始化的情况下，不传人 SDK_HOST，默认只需要支持 local
        if (this.mustUseHttpModel() && this.config.SDK_HOST) {
            var platform = this.getCurrentPlatformByUserAgent();
            return utils_1.getCordovaJsUriByPlatform(this.config, platform);
        }
        return this.config.cordovajs.local;
    };
    CordovaImportLib.prototype.mustUseHttpModel = function () {
        if (utils_1.inIframe())
            return true;
        if (utils_1.isHttpsProtocol() && utils_1.isAndroidPlatform(this.userAgent) && !utils_1.isX5Webview())
            return true;
        return false;
    };
    CordovaImportLib.prototype.getCurrentPlatformByUserAgent = function () {
        if (utils_1.isiOSPlatform(this.userAgent)) {
            return 'iOS';
        }
        if (utils_1.isAndroidPlatform(this.userAgent)) {
            return 'android';
        }
        return 'local';
    };
    return CordovaImportLib;
}());
exports.default = CordovaImportLib;
