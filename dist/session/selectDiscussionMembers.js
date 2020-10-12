"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 根据群组 id, 打开群组成员界面, 并进行选择
 *
 * @export
 * @param {SelectDiscussionMembersParams & ContactOption<SelectDiscussionMembersRes>} [options]
 * @returns {Promise<SelectDiscussionMembersRes>}
 */
function selectDiscussionMembers(options) {
    var args = {
        discussion_id: options.discussionId,
        members_selected: (options === null || options === void 0 ? void 0 : options.membersSelected) || [],
    };
    return core.exec(constants_1.WORKPLUS_CONTACT, 'selectDiscussionMembers', [args], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail, false);
}
exports.default = selectDiscussionMembers;
