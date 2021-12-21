"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * SDK 鉴权
 * @description 所有接口都需要先经过鉴权才能够使用
 * @param {ConfigOptions} [options]
 * @module config
 * @returns {ConfigAuthRes}
 */
function config(options) {
    return core.exec(constants_1.WORKPLUS_CONFIG, 'config', [options], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail, false);
}
exports.default = config;
