"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 鉴权 ready
 * @description 返回当前鉴权状态, 让前端用以判断是否可以正常调用方法
 * @param {callback} [options]
 * @module config
 * @returns {ConfigAuthRes}
 */
function ready(callback) {
    return core.exec(constants_1.WORKPLUS_CONFIG, 'ready', [], function (res) {
        callback(res);
    }, function () { }, false);
}
exports.default = ready;
