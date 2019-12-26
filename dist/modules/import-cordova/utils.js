"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = require("../utils/shared/is");
var config_1 = require("./config");
// 是否为 https 模式
exports.isHttpsProtocol = function () { return window.location.protocol === 'https:'; };
// 是否在 iframe 中打开
exports.inIframe = function () { return self.frameElement && self.frameElement.tagName == 'IFRAME'; };
exports.isiOSPlatform = function (userAgent) { return userAgent.indexOf('iphone') > -1; };
exports.isAndroidPlatform = function (userAgent) { return userAgent.indexOf('android') > -1; };
exports.isX5Webview = function (userAgent) {
    return /x5webkit|mqqbrowser|tbs/.test(userAgent);
};
exports.getCordovaJsUriByPlatform = function (config, platform) {
    return "" + config.SDK_HOST + config.cordovajs[platform];
};
exports.inWorkPlus = function () { return navigator.userAgent.indexOf('workplus') > -1; };
exports.scriptGenerator = function (uri) {
    var cordovaScriptElement = document.createElement('script');
    cordovaScriptElement.setAttribute('type', 'text/javascript');
    cordovaScriptElement.setAttribute('src', uri);
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(cordovaScriptElement);
};
exports.isValidHost = function (uri) {
    if (!is_1.isString(uri))
        return false;
    if (uri.indexOf('http') === 0)
        return false;
    if (uri.indexOf('//') !== 0)
        return false;
    if (uri.indexOf('.') === -1)
        return false;
    if (uri[uri.length - 1] !== '/')
        return false;
    return true;
};
exports.getSDKScriptTagSrc = function () {
    var scripts = document.getElementsByTagName('script');
    var matchScriptSrc = '';
    for (var i = 0; i < scripts.length; i += 1) {
        var script = scripts[i];
        if (script.src && script.src.indexOf("/" + config_1.default.SDK_NAME) > -1) {
            matchScriptSrc = script.src;
            break;
        }
    }
    return matchScriptSrc;
};
exports.getAssetDomainUrl = function () {
    var currentScriptSrc = exports.getSDKScriptTagSrc();
    if (currentScriptSrc) {
        return currentScriptSrc.split(config_1.default.SDK_NAME)[0];
    }
};
