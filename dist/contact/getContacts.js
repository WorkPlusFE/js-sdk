"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 打开当前组织的联系人列表，选择多个联系人
 *
 * @export
 * @param {ContactOption<ContactsParams, ContactsRes>} [options]
 * @returns {Promise<ContactsRes>}
 */
function getContacts(options) {
    var _a;
    return core.exec(constants_1.WORKPLUS_CONTACT, 'getContacts', (_a = options === null || options === void 0 ? void 0 : options.data) !== null && _a !== void 0 ? _a : [], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail);
}
exports.default = getContacts;
