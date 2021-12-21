"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 接口检测
 * @description 检验是否存在 Cordova 插件和方法，该方面不能直接检查 SDK 的方法，需要使用原始 Cordova 接口文档的接口命名参数。
 * @param {ConfigOptions} [options]
 * @module config
 * @returns {CommonApiRes}
 */
function checkApi(options) {
    return core.exec(constants_1.WORKPLUS_CONFIG, 'checkApi', [options], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail);
}
exports.default = checkApi;
