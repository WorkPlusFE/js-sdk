"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showToast = void 0;
var core = require("../core");
var constants_1 = require("../constants");
/**
 * Toast
 * @description 显示 Toast 小提示框，可以控制显示的标题和时长
 * @param {ToastParams}
 * @module dialog
 */
function showToast(options) {
    if (!options.duration) {
        options.duration = 3000;
    }
    return core.execSync(constants_1.WORKPLUS_DIALOG, 'showToast', [options]);
}
exports.showToast = showToast;
