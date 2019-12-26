"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 选择多张图片
 * @description 调用图片相册，选择多张图片并压缩返回，并且支持选过图片的传输
 * @param {ImageOptions<string[], TakePhoto[]>} options
 * @returns {Promise<TakePhoto[]>}
 */
function selectImages(options) {
    var _a, _b;
    return core.exec(constants_1.WORKPLUS_IMAGE, 'selectImages', [{ imageKeys: options.data }], (_a = options) === null || _a === void 0 ? void 0 : _a.success, (_b = options) === null || _b === void 0 ? void 0 : _b.fail);
}
exports.default = selectImages;
