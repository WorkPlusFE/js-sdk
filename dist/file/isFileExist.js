"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 判断文件是否存在
 * @description 判断指定路径的文件是否存在
 * @param {FileOptions<FilePathParams[], FileExistRes>} [options]
 * @returns {Promise<FileExistRes>}
 */
function isFileExist(options) {
    var _a;
    return core.exec(constants_1.WORKPLUS_FILE, 'isFileExist', (_a = options === null || options === void 0 ? void 0 : options.data) !== null && _a !== void 0 ? _a : [], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail);
}
exports.default = isFileExist;
