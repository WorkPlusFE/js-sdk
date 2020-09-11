"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 长按图片弹出框
 * @description 弹出框包括"识别二维码", "保存图片"等选项
 * @param {ImageDataItem} options
 * @module image
 * @returns 无
 */
function actionForLongPressImage(options) {
    return core.execSync(constants_1.WORKPLUS_IMAGE, 'actionForLongPressImage', [options]);
}
exports.default = actionForLongPressImage;
