"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 清除压缩后的图片
 * @description 拍照或选择照片后都会生成压缩图片，调用这个方法去清除
 * @param {ImageOptions<[], void>} [options]
 * @returns {Promise<void>}
 */
function cleanCompressImage(options) {
    var _a, _b, _c, _d;
    return core.exec(constants_1.WORKPLUS_IMAGE, 'cleanCompressImage', (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.data, (_b !== null && _b !== void 0 ? _b : [])), (_c = options) === null || _c === void 0 ? void 0 : _c.success, (_d = options) === null || _d === void 0 ? void 0 : _d.fail);
}
exports.default = cleanCompressImage;
