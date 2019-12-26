"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 批量预览图片(新增 position请求参数，在workplus3.1.3版本后使用)
 * @description 传输图片地址，预览图片
 * @param {ImageOptions<ShowImagesItem[], void>} options
 * @returns {Promise<void>}
 */
function showImages(options) {
    var _a, _b;
    return core.exec(constants_1.WORKPLUS_IMAGE, 'showImages', options.data, (_a = options) === null || _a === void 0 ? void 0 : _a.success, (_b = options) === null || _b === void 0 ? void 0 : _b.fail);
}
exports.default = showImages;
