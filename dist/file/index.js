"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chooseFiles_1 = require("./chooseFiles");
var isFileExist_1 = require("./isFileExist");
var openFileDetail_1 = require("./openFileDetail");
var readFile_1 = require("./readFile");
var download_1 = require("./download");
var upload_1 = require("./upload");
var getUserFilePath_1 = require("./getUserFilePath");
exports.default = {
    /** 选择文件 */
    chooseFiles: chooseFiles_1.default,
    /** 判断文件是否存在 */
    isFileExist: isFileExist_1.default,
    /** 打开文件详情 */
    openFileDetail: openFileDetail_1.default,
    /** 本地打开文件 */
    readFile: readFile_1.default,
    /** 文件下载 */
    download: download_1.default,
    /** 文件上传 */
    upload: upload_1.default,
    /** 获取文件目录 */
    getFilePath: getUserFilePath_1.default,
};
