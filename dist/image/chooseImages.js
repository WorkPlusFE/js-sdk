"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 调用图片相册，选择图片
 * @description 调用图片相册，根据用户参数决定是否选择多张图片或单张图片，
 * 支持编辑剪裁(编辑剪裁功能仅仅限于单张图片功能),并且支持选过图片的传输,
 * 选择完后会进行后台上传，返回值中带有上传后的mediaId
 * @param {ChooseImagesOptions>} options
 * @module image
 * @version 3.1.3版本以上
 * @returns 带有mediaId的图片信息
 */
function chooseImages(options) {
    var _a, _b, _c;
    var params = {
        multiple: (options === null || options === void 0 ? void 0 : options.multiple) || true,
        imageKeys: (options === null || options === void 0 ? void 0 : options.imageKeys) || [],
        file_limit: {
            max_select_count: ((_a = options === null || options === void 0 ? void 0 : options.fileLimit) === null || _a === void 0 ? void 0 : _a.maxSelectCount) || 9,
            single_select_size: ((_b = options === null || options === void 0 ? void 0 : options.fileLimit) === null || _b === void 0 ? void 0 : _b.singleSelectSize) || -1,
            total_select_size: ((_c = options === null || options === void 0 ? void 0 : options.fileLimit) === null || _c === void 0 ? void 0 : _c.totalSelectSize) || -1,
        },
    };
    return core.exec(constants_1.WORKPLUS_IMAGE, 'chooseImages', [params], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail, false);
}
exports.default = chooseImages;
