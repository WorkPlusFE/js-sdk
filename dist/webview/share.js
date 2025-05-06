"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 分享
 * @description 弹出分享对话框，跳转分享
 * @param {Share} options 传参
 * @module webview
 * @returns 无
 */
function share(options) {
    var args = {
        url: options.url,
        title: options.title,
        cover_media_id: (options === null || options === void 0 ? void 0 : options.coverMediaId) || '',
        cover_url: (options === null || options === void 0 ? void 0 : options.coverUrl) || '',
        scope: options.scope,
        summary: options.summary,
        directly: (options === null || options === void 0 ? void 0 : options.directly) || '',
        direct_session: options === null || options === void 0 ? void 0 : options.directSession,
    };
    return core.execSync(constants_1.WORKPLUS_WEBVIEW, 'share', [args]);
}
exports.default = share;
