"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 新增拍照返回接口(返回带mediaId方式) (Workplus 3.1.3版本以上使用)
 * @description 新增接口，拍照返回，根据传入参数决定是否可以进行裁剪编辑, 同时会将图片上传后台，返回mediaId
 * @param {ImageOptions<[TakePictureArgs], TakePicture>} options
 * @returns {Promise<TakePicture>}
 */
function takePicture(options) {
    var _a, _b;
    return core.exec(constants_1.WORKPLUS_IMAGE, 'takePicture', options.data, (_a = options) === null || _a === void 0 ? void 0 : _a.success, (_b = options) === null || _b === void 0 ? void 0 : _b.fail);
}
exports.default = takePicture;
