"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 打开通用选择人员界面, 多选用户或者雇员
 *
 * @export
 * @param {SelectContactsParams & ContactOption<unknown>} [options]
 * @returns {Promise<unknown>}
 */
function selectContacts(options) {
    var args = {
        filterSenior: (options === null || options === void 0 ? void 0 : options.filterSenior) || 1,
        maxCount: (options === null || options === void 0 ? void 0 : options.maxCount) || -1,
        selectedUsers: (options === null || options === void 0 ? void 0 : options.selectedUsers) || [],
        selectedEmployees: (options === null || options === void 0 ? void 0 : options.selectedEmployees) || [],
    };
    return core.exec(constants_1.WORKPLUS_CONTACT, 'selectContacts', [args], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail, false);
}
exports.default = selectContacts;
