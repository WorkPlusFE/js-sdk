"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 本地打开文件
 * @description 原生打开文件(pdf, excel, word, ppt 等)
 * @param {FileOptions<FilePathParams[], void>} [options]
 * @returns {Promise<void>}
 */
function readFile(options) {
    var _a;
    return core.exec(constants_1.WORKPLUS_FILE, 'readFile', (_a = options === null || options === void 0 ? void 0 : options.data) !== null && _a !== void 0 ? _a : [], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail);
}
exports.default = readFile;
