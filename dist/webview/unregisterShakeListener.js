"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 注销摇一摇监听
 * @description 注销摇一摇监听
 * @param {NotResOptions} [options]
 * @module webview
 * @returns {Promise<void>}
 */
function unregisterShakeListener(options) {
    return core.exec(constants_1.WORKPLUS_WEBVIEW, 'unregisterShakeListener', [], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail);
}
exports.default = unregisterShakeListener;
