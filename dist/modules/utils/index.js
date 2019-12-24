"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./shared/is"));
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
