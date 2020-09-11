"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 根据组织id打开该组织下的应用列表页面
 *
 * @export
 * @param {ContactOption<ShowAppListByIdParams, unknown>} [options]
 * @returns {Promise<unknown>}
 */
function showAppListById(options) {
    var _a;
    return core.exec(constants_1.WORKPLUS_CONTACT, 'showAppListById', (_a = options === null || options === void 0 ? void 0 : options.data) !== null && _a !== void 0 ? _a : [], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail);
}
exports.default = showAppListById;
