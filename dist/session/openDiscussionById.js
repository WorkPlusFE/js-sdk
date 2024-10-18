"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 通过群组id打开该群组的聊天页面，并且可以自定义发送应用所支持的消息
 *
 * @export
 * @param {OpenDiscussionByIdParams} [options]
 * @returns {Promise<unknown>}
 */
function openDiscussionById(options) {
    if (!core.isPCPlatform) {
        delete options.newWindow;
    }
    return core.execSync(constants_1.WORKPLUS_CONTACT, 'openDiscussionById', [options]);
}
exports.default = openDiscussionById;
