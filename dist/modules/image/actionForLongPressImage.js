"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 长按图片弹出框
 * @description 弹出框包括"识别二维码", "保存图片"等选项
 * @param {ImageOptions<ImageDataItem[], any>} [options]
 * @returns {Promise<void>}
 */
function actionForLongPressImage(options) {
    var _a, _b;
    return core.exec(constants_1.WORKPLUS_IMAGE, 'actionForLongPressImage', options.data, (_a = options) === null || _a === void 0 ? void 0 : _a.success, (_b = options) === null || _b === void 0 ? void 0 : _b.fail);
}
exports.default = actionForLongPressImage;
