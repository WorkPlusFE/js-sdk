"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBrowser = exports.isIPhone = exports.isAndroid = exports.detectInWorkPlus = void 0;
/**
 * 检测当前是否在 WorkPlus 环境下
 * @export
 * @returns {boolean}
 */
function detectInWorkPlus() {
    var _a;
    return (_a = window === null || window === void 0 ? void 0 : window.navigator) === null || _a === void 0 ? void 0 : _a.userAgent.includes('workplus');
}
exports.detectInWorkPlus = detectInWorkPlus;
/**
 * 检测当前是否为 Android 平台
 * @export
 * @returns {boolean}
 */
function isAndroid() {
    var _a;
    return (_a = window === null || window === void 0 ? void 0 : window.navigator) === null || _a === void 0 ? void 0 : _a.userAgent.includes('android');
}
exports.isAndroid = isAndroid;
/**
 * 检测当前是否为 IPhone 平台
 * @export
 * @returns {boolean}
 */
function isIPhone() {
    var _a;
    return (_a = window === null || window === void 0 ? void 0 : window.navigator) === null || _a === void 0 ? void 0 : _a.userAgent.includes('iPhone');
}
exports.isIPhone = isIPhone;
/**
 * 检测当前是否在浏览器环境
 * @export
 * @returns {boolean}
 */
function isBrowser() {
    return (typeof window !== 'undefined' && Object.prototype.toString.call(window) === '[object Window]');
}
exports.isBrowser = isBrowser;
