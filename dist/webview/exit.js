"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 退出webview
 * @description 关闭整个webview
 * @param {ExitOptions} [options]
 * @module webview
 * @returns 无
 */
function exit(options) {
    return core.exec(constants_1.WORKPLUS_WEBVIEW, 'exit', [], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail);
}
exports.default = exit;
