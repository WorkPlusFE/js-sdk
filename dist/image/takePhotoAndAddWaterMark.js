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
 * 调起拍照，并添加水印
 * @description 拍照生成水印图片返回
 * @param {WaterMarkOptions} options
 * @module image
 * @returns 带有mediaId的图片信息
 * @version 3.6.0版本以上使用
 */
function takePhotoAndAddWaterMark(options) {
    var success = options.success, fail = options.fail, data = __rest(options, ["success", "fail"]);
    var params = {
        content: data.content,
        font_size: data.fontSize,
        color: data.color,
        mark_disable: data.markDisable,
        time_enable: data.timeEnable,
        location_enable: data.locationEnable,
    };
    return core.exec(constants_1.WORKPLUS_IMAGE, 'takePhotoAndAddWaterMark', [params], success, fail, false);
}
exports.default = takePhotoAndAddWaterMark;
