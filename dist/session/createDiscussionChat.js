"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 通过调用原生选人界面，选择人员，创建群组，并且返回相关群组信息
 *
 * @export
 * @param {boolean} [newWindow] 仅对 PC 客户端有效
 * @returns {void}
 */
function createDiscussionChat(_a) {
    var newWindow = _a.newWindow;
    var options = core.isPCPlatform && typeof newWindow !== 'undefined' ? [{ newWindow: newWindow }] : [];
    return core.execSync(constants_1.WORKPLUS_CONTACT, 'createDiscussionChat', options);
}
exports.default = createDiscussionChat;
