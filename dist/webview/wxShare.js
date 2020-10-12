"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 微信分享(会话/朋友圈)
 * @description 根据接口直接调起微信分享页面
 * @param {WxShare} options
 * @module webview
 * @returns 无
 */
function wxShare(options) {
    var args = {
        app_id: options.appId,
        title: options.title,
        type: options.type,
        description: options.description,
        thumb: options.thumb,
        scene: options.scene,
        data: options.data,
    };
    return core.execSync(constants_1.WORKPLUS_WEBVIEW, 'wxShare', [args]);
}
exports.default = wxShare;
