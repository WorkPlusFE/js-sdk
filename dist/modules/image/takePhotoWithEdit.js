"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 拍照返回并且可编辑
 * @description 拍照，截图返回
 * @param {ImageOptions<[], TakePhoto>} [options]
 * @returns {Promise<TakePhoto>}
 */
function takePhotoWithEdit(options) {
    var _a, _b, _c, _d;
    return core.exec(constants_1.WORKPLUS_IMAGE, 'takePhotoWithEdit', (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.data, (_b !== null && _b !== void 0 ? _b : [])), (_c = options) === null || _c === void 0 ? void 0 : _c.success, (_d = options) === null || _d === void 0 ? void 0 : _d.fail);
}
exports.default = takePhotoWithEdit;
