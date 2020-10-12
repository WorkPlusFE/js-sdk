"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 通过应用id和orgId的，打开改组织下某个应用聊天界面
 *
 * @export
 * @param {ShowAppChatView} [options]
 * @returns {void}
 */
function showAppChatViewById(options) {
    var args = {
        app_id: options.appId,
        domain_id: options.domainId,
        org_id: options.orgId,
        session_type: options.sessionType,
    };
    return core.execSync(constants_1.WORKPLUS_CONTACT, 'showAppChatView', [args]);
}
exports.default = showAppChatViewById;
