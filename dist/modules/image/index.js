"use strict";
/** 图像相关 API */
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var ServiceKey = 'WorkPlus_Image';
/**
 * 拍照返回
 * @description 拍照，压缩图片后直接返回图片
 * @param {ImageOptions<[], TakePhoto>} [options]
 * @returns
 */
function takePhoto(options) {
    var _a, _b, _c, _d;
    return core.exec(ServiceKey, 'takePhoto', (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.data, (_b !== null && _b !== void 0 ? _b : [])), (_c = options) === null || _c === void 0 ? void 0 : _c.success, (_d = options) === null || _d === void 0 ? void 0 : _d.fail);
}
exports.takePhoto = takePhoto;
/**
 * 拍照返回并且可编辑
 * @description 拍照，截图返回
 * @param {ImageOptions<[], TakePhoto>} [options]
 * @returns
 */
function takePhotoWithEdit(options) {
    var _a, _b, _c, _d;
    return core.exec(ServiceKey, 'takePhotoWithEdit', (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.data, (_b !== null && _b !== void 0 ? _b : [])), (_c = options) === null || _c === void 0 ? void 0 : _c.success, (_d = options) === null || _d === void 0 ? void 0 : _d.fail);
}
exports.takePhotoWithEdit = takePhotoWithEdit;
/**
 * 选择图片（单张）
 * @description 调用图片相册，选择图片并压缩返回
 * @param {ImageOptions<[], TakePhoto>} [options]
 * @returns
 */
function selectImage(options) {
    var _a, _b, _c, _d;
    return core.exec(ServiceKey, 'selectImage', (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.data, (_b !== null && _b !== void 0 ? _b : [])), (_c = options) === null || _c === void 0 ? void 0 : _c.success, (_d = options) === null || _d === void 0 ? void 0 : _d.fail);
}
exports.selectImage = selectImage;
/**
 * 选择图片并截图返回（单张）
 * @description 调用图片相册，选择图片并截取返回
 * @param {ImageOptions<[], TakePhoto>} [options]
 * @returns
 */
function selectImageWithEdit(options) {
    var _a, _b, _c, _d;
    return core.exec(ServiceKey, 'selectImageWithEdit', (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.data, (_b !== null && _b !== void 0 ? _b : [])), (_c = options) === null || _c === void 0 ? void 0 : _c.success, (_d = options) === null || _d === void 0 ? void 0 : _d.fail);
}
exports.selectImageWithEdit = selectImageWithEdit;
/**
 * 选择多张图片
 * @description 调用图片相册，选择多张图片并压缩返回，并且支持选过图片的传输
 * @param {ImagesOptions} [options]
 * @returns
 */
function selectImages(options) {
    var _a, _b;
    return core.exec(ServiceKey, 'selectImages', [{ imageKeys: options.data }], (_a = options) === null || _a === void 0 ? void 0 : _a.success, (_b = options) === null || _b === void 0 ? void 0 : _b.fail);
}
exports.selectImages = selectImages;
/**
 * 清除压缩后的图片
 * @description 拍照或选择照片后都会生成压缩图片，调用这个方法去清除
 * @param {ImageOptions<[], void>} [options]
 * @returns {Promise<void>}
 */
function cleanCompressImage(options) {
    var _a, _b, _c, _d;
    return core.exec(ServiceKey, 'cleanCompressImage', (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.data, (_b !== null && _b !== void 0 ? _b : [])), (_c = options) === null || _c === void 0 ? void 0 : _c.success, (_d = options) === null || _d === void 0 ? void 0 : _d.fail);
}
exports.cleanCompressImage = cleanCompressImage;
/**
 * 批量预览图片(新增 position请求参数，在workplus3.1.3版本后使用)
 * @description 传输图片地址，预览图片
 * @param {ImageOptions<ShowImagesItem[], void>} options
 * @returns {Promise<void>}
 */
function showImages(options) {
    var _a, _b;
    return core.exec(ServiceKey, 'showImages', options.data, (_a = options) === null || _a === void 0 ? void 0 : _a.success, (_b = options) === null || _b === void 0 ? void 0 : _b.fail);
}
exports.showImages = showImages;
/**
 * 保存图片
 * @description 传输图片地址，保存图片
 * @param {ImageOptions<SaveImageItem[], void>} options
 * @returns {Promise<void>}
 */
function saveImages(options) {
    var _a, _b;
    return core.exec(ServiceKey, 'saveImages', options.data, (_a = options) === null || _a === void 0 ? void 0 : _a.success, (_b = options) === null || _b === void 0 ? void 0 : _b.fail);
}
exports.saveImages = saveImages;
/**
 * 长按图片弹出框
 * @description 弹出框包括"识别二维码", "保存图片"等选项
 * @param {ImageOptions<ImageDataItem[], any>} [options]
 * @returns {Promise<void>}
 */
function actionForLongPressImage(options) {
    var _a, _b;
    return core.exec(ServiceKey, 'actionForLongPressImage', options.data, (_a = options) === null || _a === void 0 ? void 0 : _a.success, (_b = options) === null || _b === void 0 ? void 0 : _b.fail);
}
exports.actionForLongPressImage = actionForLongPressImage;
/**
 * 新增拍照返回接口(返回带mediaId方式) (Workplus 3.1.3版本以上使用)
 * @description 新增接口，拍照返回，根据传入参数决定是否可以进行裁剪编辑, 同时会将图片上传后台，返回mediaId
 * @param {ImageOptions<[TakePicture], TakePictureItem>} [options]
 * @returns
 */
function takePicture(options) {
    var _a, _b;
    return core.exec(ServiceKey, 'takePicture', options.data, (_a = options) === null || _a === void 0 ? void 0 : _a.success, (_b = options) === null || _b === void 0 ? void 0 : _b.fail);
}
exports.takePicture = takePicture;
/**
 * 新增选择图片接口(返回带mediaId方式)(Workplus 3.1.3版本以上使用)
 * @description 调用图片相册，根据用户参数决定是否选择多张图片或单张图片，
 * 支持编辑剪裁(编辑剪裁功能仅仅限于单张图片功能),并且支持选过图片的传输,
 * 选择完后会进行后台上传，返回值中带有上传后的mediaId
 * @param {ImageOptions<[ChooseImages], TakePicture[]>} options
 * @returns {Promise<TakePicture[]>}
 */
function chooseImages(options) {
    var _a, _b;
    return core.exec(ServiceKey, 'chooseImages', options.data, (_a = options) === null || _a === void 0 ? void 0 : _a.success, (_b = options) === null || _b === void 0 ? void 0 : _b.fail);
}
exports.chooseImages = chooseImages;
/**
 * 图片添加水印接口(Workplus 3.6.0版本以上使用)
 * @description 拍照，生成水印图片返回
 * @param {ImageOptions<[WaterMark], void>} options
 * @returns {Promise<void>}
 */
function takePictureAddWatermark(options) {
    var _a, _b;
    return core.exec(ServiceKey, 'takePictureAddWatermark', options.data, (_a = options) === null || _a === void 0 ? void 0 : _a.success, (_b = options) === null || _b === void 0 ? void 0 : _b.fail);
}
exports.takePictureAddWatermark = takePictureAddWatermark;
