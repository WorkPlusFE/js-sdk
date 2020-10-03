"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 通过调用原生选人界面，选择人员，创建群组，并且返回相关群组信息
 *
 * @export
 * @param {[]} [options]
 * @returns {void}
 */
function createDiscussionChat() {
    return core.execSync(constants_1.WORKPLUS_CONTACT, 'createDiscussionChat', []);
}
exports.default = createDiscussionChat;
