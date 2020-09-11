"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 图片预览
 * @description 传输图片地址，预览图片，支持传入 position 表示从第几张开始预览
 * @param {ShowImagesItem} options
 * @module image
 * @version 3.1.3版本以上
 */
function showImages(options) {
    return core.execSync(constants_1.WORKPLUS_IMAGE, 'showImages', [options]);
}
exports.default = showImages;
