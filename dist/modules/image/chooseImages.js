"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
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
    return core.exec(constants_1.WORKPLUS_IMAGE, 'chooseImages', options.data, (_a = options) === null || _a === void 0 ? void 0 : _a.success, (_b = options) === null || _b === void 0 ? void 0 : _b.fail);
}
exports.default = chooseImages;
