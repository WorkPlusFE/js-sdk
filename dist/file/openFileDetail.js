"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 打开文件详情
 * @description 通过指定 mediaId, fileName 等参数, 打开文件详情界面
 * @param {FileOptions<ShowFileParams[], void>} [options]
 * @returns {Promise<void>}
 */
function openFileDetail(options) {
    var _a;
    return core.exec(constants_1.WORKPLUS_FILE, 'showFile', (_a = options === null || options === void 0 ? void 0 : options.data) !== null && _a !== void 0 ? _a : [], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail);
}
exports.default = openFileDetail;
