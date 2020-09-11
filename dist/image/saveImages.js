"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 保存图片
 * @description 传输图片地址，保存图片
 * @param {SaveImageItem} options
 * @module image
 * @returns 无
 */
function saveImages(options) {
    return core.execSync(constants_1.WORKPLUS_IMAGE, 'showImages', [options]);
}
exports.default = saveImages;
