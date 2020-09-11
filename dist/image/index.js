"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var takePicture_1 = require("./takePicture");
var takePhotoAndAddWaterMark_1 = require("./takePhotoAndAddWaterMark");
var saveImages_1 = require("./saveImages");
var showImages_1 = require("./showImages");
var chooseImages_1 = require("./chooseImages");
var actionForLongPressImage_1 = require("./actionForLongPressImage");
var cleanCompressImage_1 = require("./cleanCompressImage");
var toBase64_1 = require("./toBase64");
exports.default = {
    /** 拍照返回接口 */
    takePicture: takePicture_1.default,
    /** 图片添加水印接口 */
    takePhotoAndAddWaterMark: takePhotoAndAddWaterMark_1.default,
    /** 传输图片地址，保存图片 */
    saveImages: saveImages_1.default,
    /** 批量预览图片 */
    showImages: showImages_1.default,
    /** 新增选择图片接口 */
    chooseImages: chooseImages_1.default,
    /** 长按图片弹出框 */
    actionForLongPressImage: actionForLongPressImage_1.default,
    /** 清除压缩后的图片 */
    cleanCompressImage: cleanCompressImage_1.default,
    /** 图片转 base64 */
    toBase64: toBase64_1.default,
};
