"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 图片添加水印接口(Workplus 3.6.0版本以上使用)
 * @description 拍照，生成水印图片返回
 * @param {ImageOptions<[WaterMark], void>} options
 * @returns {Promise<void>}
 */
function takePictureAddWatermark(options) {
    var _a, _b;
    return core.exec(constants_1.WORKPLUS_IMAGE, 'takePictureAddWatermark', options.data, (_a = options) === null || _a === void 0 ? void 0 : _a.success, (_b = options) === null || _b === void 0 ? void 0 : _b.fail);
}
exports.default = takePictureAddWatermark;
