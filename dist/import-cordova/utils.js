"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scriptGenerator = exports.inWorkPlus = exports.getCordovaJsUriByPlatform = exports.isX5Webview = exports.isAndroidPlatform = exports.isiOSPlatform = exports.inIframe = exports.isHttpsProtocol = void 0;
// 是否为 https 模式
exports.isHttpsProtocol = function () { return window.location.protocol === 'https:'; };
// 是否在 iframe 中打开
exports.inIframe = function () {
    return self.frameElement ? self.frameElement.tagName === 'IFRAME' : false;
};
exports.isiOSPlatform = function (userAgent) { return userAgent.indexOf('iphone') > -1; };
exports.isAndroidPlatform = function (userAgent) { return userAgent.indexOf('android') > -1; };
exports.isX5Webview = function (userAgent) {
    return /x5webkit|mqqbrowser|tbs/.test(userAgent);
};
exports.getCordovaJsUriByPlatform = function (config, platform) { return config.cordovajs[platform]; };
exports.inWorkPlus = function () { return navigator.userAgent.indexOf('workplus') > -1; };
exports.scriptGenerator = function (uri) {
    var cordovaScriptElement = document.createElement('script');
    cordovaScriptElement.setAttribute('type', 'text/javascript');
    cordovaScriptElement.setAttribute('src', uri);
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(cordovaScriptElement);
};
