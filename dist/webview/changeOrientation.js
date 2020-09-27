"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 控制屏幕旋转
 * @description 根据参数控制屏幕横屏显示或者竖屏显示
 * @param {ChangeOrientationParams} options
 * @module webview
 * @version 3.1.3+
 * @returns {Promise<void>}
 */
function changeOrientation(options) {
    return core.execSync(constants_1.WORKPLUS_WEBVIEW, 'changeOrientation', [options]);
}
exports.default = changeOrientation;
