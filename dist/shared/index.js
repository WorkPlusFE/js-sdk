"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadScript = exports.sleep = void 0;
__exportStar(require("./is"), exports);
/**
 * 休眠函数
 * @param time 时间，单位毫秒
 */
exports.sleep = function (time) {
    return new Promise(function (resolve) {
        setTimeout(function () { return resolve(); }, time);
    });
};
/**
 * 加载Script
 * @export
 * @param {string} url
 */
exports.loadScript = function (url) {
    return new Promise(function (resolve, reject) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        script.addEventListener('load', function () { return resolve(script); }, false);
        script.addEventListener('error', function () { return reject(script); }, false);
        document.head.appendChild(script);
    });
};
