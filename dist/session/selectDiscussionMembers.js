"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 根据群组 id, 打开群组成员界面, 并进行选择
 *
 * @export
 * @param {ContactOption<SelectDiscussionMembersParams, SelectDiscussionMembersRes>} [options]
 * @returns {Promise<SelectDiscussionMembersRes>}
 */
function selectDiscussionMembers(options) {
    var _a;
    return core.exec(constants_1.WORKPLUS_CONTACT, 'selectDiscussionMembers', (_a = options === null || options === void 0 ? void 0 : options.data) !== null && _a !== void 0 ? _a : [], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail);
}
exports.default = selectDiscussionMembers;
