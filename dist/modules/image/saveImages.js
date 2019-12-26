"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 保存图片
 * @description 传输图片地址，保存图片
 * @param {ImageOptions<SaveImageItem[], void>} options
 * @returns {Promise<void>}
 */
function saveImages(options) {
    var _a, _b;
    return core.exec(constants_1.WORKPLUS_IMAGE, 'saveImages', options.data, (_a = options) === null || _a === void 0 ? void 0 : _a.success, (_b = options) === null || _b === void 0 ? void 0 : _b.fail);
}
exports.default = saveImages;
