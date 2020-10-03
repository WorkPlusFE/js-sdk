"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 打开文件详情
 * @description 通过指定 mediaId, fileName 等参数, 打开文件详情界面
 * @param {ShowFileParams} [options]
 * @returns {void}
 */
function openFileDetail(options) {
    return core.execSync(constants_1.WORKPLUS_FILE, 'showFile', [options]);
}
exports.default = openFileDetail;
