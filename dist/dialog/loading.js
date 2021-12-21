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
exports.hideLoading = exports.showLoading = void 0;
var core = require("../core");
var constants_1 = require("../constants");
/**
 * Loading
 * @description 显示 loading 提示框，可以添加文本
 * @param LoadingParams
 * @module dialog
 * @returns 无
 */
function showLoading(options) {
    return core.execSync(constants_1.WORKPLUS_DIALOG, 'showLoading', [__assign({}, options)]);
}
exports.showLoading = showLoading;
function hideLoading() {
    return core.execSync(constants_1.WORKPLUS_DIALOG, 'hideLoading', []);
}
exports.hideLoading = hideLoading;
