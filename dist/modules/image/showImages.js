"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 批量预览图片(新增 position请求参数，在workplus3.1.3版本后使用)
 * @description 传输图片地址，预览图片
 * @param {ExecSyncOptions<ShowImagesItem[]>} options
 * @returns {void}
 */
function showImages(options) {
    return core.execSync(constants_1.WORKPLUS_IMAGE, 'showImages', options.data);
}
exports.default = showImages;
