"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 调起拍照，返回mediaId的图片
 * @description 拍照返回，根据传入参数决定是否可以进行裁剪编辑, 同时会将图片上传后台，返回mediaId
 * @param {PictureOptions} options
 * @module image
 * @version 3.1.3以上版本支持
 * @returns 带有mediaId的图片信息
 */
function takePicture(options) {
    var args = {
        editable: (options === null || options === void 0 ? void 0 : options.editable) || false,
    };
    return core.exec(constants_1.WORKPLUS_IMAGE, 'takePicture', [args], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail, false);
}
exports.default = takePicture;
