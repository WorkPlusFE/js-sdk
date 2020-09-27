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
function exit() {
    return core.execSync(constants_1.WORKPLUS_WEBVIEW, 'exit', []);
}
exports.default = exit;
