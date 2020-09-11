"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 打开邮件附件
 * @description 打开指定路径的文件, 并预览
 * @param {FileOptions<OpenEmailAttachment[], void>} [options]
 * @returns {Promise<void>}
 */
function openEmailAttachment(options) {
    var _a;
    return core.exec(constants_1.WORKPLUS_FILE, 'openEmailAttachment', (_a = options === null || options === void 0 ? void 0 : options.data) !== null && _a !== void 0 ? _a : [], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail);
}
exports.default = openEmailAttachment;
