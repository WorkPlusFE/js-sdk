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
 * 保存图片
 * @description 传输图片地址，保存图片
 * @param {SaveImagesOptions} options
 * @module image
 * @returns 无
 */
function saveImages(options) {
    var success = options.success, fail = options.fail, arg = __rest(options, ["success", "fail"]);
    return core.exec(constants_1.WORKPLUS_IMAGE, 'saveImages', [arg], success, fail, false);
}
exports.default = saveImages;
