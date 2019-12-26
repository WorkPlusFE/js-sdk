"use strict";
/** 图像相关 API */
Object.defineProperty(exports, "__esModule", { value: true });
var takePhoto_1 = require("./takePhoto");
var takePhotoWithEdit_1 = require("./takePhotoWithEdit");
var takePicture_1 = require("./takePicture");
var takePictureAddWatermark_1 = require("./takePictureAddWatermark");
var selectImage_1 = require("./selectImage");
var selectImages_1 = require("./selectImages");
var selectImageWithEdit_1 = require("./selectImageWithEdit");
var saveImages_1 = require("./saveImages");
var showImages_1 = require("./showImages");
var chooseImages_1 = require("./chooseImages");
var actionForLongPressImage_1 = require("./actionForLongPressImage");
var cleanCompressImage_1 = require("./cleanCompressImage");
exports.default = {
    takePhoto: takePhoto_1.default,
    takePhotoWithEdit: takePhotoWithEdit_1.default,
    takePicture: takePicture_1.default,
    takePictureAddWatermark: takePictureAddWatermark_1.default,
    selectImage: selectImage_1.default,
    selectImages: selectImages_1.default,
    selectImageWithEdit: selectImageWithEdit_1.default,
    saveImages: saveImages_1.default,
    showImages: showImages_1.default,
    chooseImages: chooseImages_1.default,
    actionForLongPressImage: actionForLongPressImage_1.default,
    cleanCompressImage: cleanCompressImage_1.default,
};
