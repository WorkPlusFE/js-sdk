"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 本地打开文件
 * @description 原生打开文件(pdf, excel, word, ppt 等)
 * @param {FilePathParams} [options]
 * @returns {void}
 */
function readFile(options) {
    return core.execSync(constants_1.WORKPLUS_FILE, 'readFile', [options]);
}
exports.default = readFile;
