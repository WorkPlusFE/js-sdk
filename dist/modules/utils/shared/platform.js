"use strict";
/** 环境检测 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.detectInWorkPlus = function () {
    var _a;
    return (_a = window) === null || _a === void 0 ? void 0 : _a.navigator.userAgent.includes('workplus');
};
exports.isAndroid = function () {
    var _a;
    return (_a = window) === null || _a === void 0 ? void 0 : _a.navigator.userAgent.includes('android');
};
exports.isiPhone = function () {
    var _a;
    return (_a = window) === null || _a === void 0 ? void 0 : _a.navigator.userAgent.includes('iPhone');
};
