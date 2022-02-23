"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * url 鉴权处理
 * @description 该接口主要用于 url 做签名参数处理, 使 WorkPlus 平台的 url 可以合法访问。
 * @param {AssembleAuthUrlParams} [options]
 * @module network
 * @returns 转换后的链接
 */
function assembleAuthUrl(options) {
    return core.exec(constants_1.WORKPLUS_NETWORK, 'assembleAuthUrl', [options], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail);
}
exports.default = assembleAuthUrl;
