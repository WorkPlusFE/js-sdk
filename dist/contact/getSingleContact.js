"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 单选联系人
 *
 * @export
 * @param {ContactOption<SingleContactParams, SingleContactRes>} [options]
 * @returns {Promise<SingleContactRes>}
 */
function getSingleContact(options) {
    var _a;
    return core.exec(constants_1.WORKPLUS_CONTACT, 'getContact', (_a = options === null || options === void 0 ? void 0 : options.data) !== null && _a !== void 0 ? _a : [], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail);
}
exports.default = getSingleContact;
