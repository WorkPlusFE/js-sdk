"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 通过群组id打开该群组的聊天页面，并且可以自定义发送应用所支持的消息
 *
 * @export
 * @param {ContactOption<OpenDiscussionByIdParams, unknown>} [options]
 * @returns {Promise<unknown>}
 */
function openDiscussionById(options) {
    var _a;
    return core.exec(constants_1.WORKPLUS_CONTACT, 'openDiscussionById', (_a = options === null || options === void 0 ? void 0 : options.data) !== null && _a !== void 0 ? _a : [], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail);
}
exports.default = openDiscussionById;
