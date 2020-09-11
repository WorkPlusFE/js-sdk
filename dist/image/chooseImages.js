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
    var success = options.success, fail = options.fail, data = __rest(options, ["success", "fail"]);
    var params = {
        multiple: data.multiple,
        imageKeys: data.imageKeys,
        file_limit: {
            max_select_count: ((_a = data.fileLimit) === null || _a === void 0 ? void 0 : _a.maxSelectCount) || 9,
            single_select_size: ((_b = data.fileLimit) === null || _b === void 0 ? void 0 : _b.singleSelectSize) || -1,
            total_select_size: ((_c = data.fileLimit) === null || _c === void 0 ? void 0 : _c.totalSelectSize) || -1,
        },
    };
    return core.exec(constants_1.WORKPLUS_IMAGE, 'chooseImages', [params], success, fail, false);
}
exports.default = chooseImages;
