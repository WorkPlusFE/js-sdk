"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 通过应用id和orgId的，打开改组织下某个应用聊天界面
 *
 * @export
 * @param {ShowAppChatViewParams} [options]
 * @returns {void}
 */
function showAppChatViewById(options) {
    return core.execSync(constants_1.WORKPLUS_CONTACT, 'showAppChatView', [options]);
}
exports.default = showAppChatViewById;
