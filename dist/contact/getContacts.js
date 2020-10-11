"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 打开当前组织的联系人列表，选择多个联系人
 *
 * @export
 * @param {ContactsOptions} [options]
 * @returns {Promise<ContactsRes>}
 */
function getContacts(options) {
    var args = {
        selectedContacts: (options === null || options === void 0 ? void 0 : options.selectedContacts) || [],
        hideMe: (options === null || options === void 0 ? void 0 : options.hideMe) || false,
        filterSenior: (options === null || options === void 0 ? void 0 : options.filterSenior) || 1,
    };
    return core.exec(constants_1.WORKPLUS_CONTACT, 'getContacts', [args], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail, false);
}
exports.default = getContacts;
