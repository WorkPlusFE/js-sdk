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
 * 获取文件目录路径
 * @description 获取设备的文件存在目录，包括下载文件夹及网盘（如果有）及用户自定义目录。
 * @param {FileExistOptions} [options]
 * @returns {Promise<unknown>}
 */
function isFileExist(options) {
    var success = options.success, fail = options.fail, args = __rest(options, ["success", "fail"]);
    return core.exec(constants_1.WORKPLUS_FILE, 'getUserFilePath', [args], success, fail);
}
exports.default = isFileExist;
