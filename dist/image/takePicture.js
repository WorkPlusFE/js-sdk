"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
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
    var success = options.success, fail = options.fail, data = __rest(options, ["success", "fail"]);
    return core.exec(constants_1.WORKPLUS_IMAGE, 'takePicture', [data], success, fail, false);
}
exports.default = takePicture;
