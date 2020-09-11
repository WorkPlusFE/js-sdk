"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 通过调用原生选人界面，选择人员，创建群组，并且返回相关群组信息
 *
 * @export
 * @param {ContactOption<[], unknown>} [options]
 * @returns {Promise<unknown>}
 */
function createDiscussionChat(options) {
    var _a;
    return core.exec(constants_1.WORKPLUS_CONTACT, 'createDiscussionChat', (_a = options === null || options === void 0 ? void 0 : options.data) !== null && _a !== void 0 ? _a : [], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail);
}
exports.default = createDiscussionChat;
