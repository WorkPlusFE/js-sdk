"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 根据组织id打开该组织下的应用列表页面
 *
 * @export
 * @param {ShowAppListById} [options]
 * @returns {void}
 */
function showAppListById(options) {
    var args = {
        org_id: options.orgId,
    };
    return core.execSync(constants_1.WORKPLUS_APP_STORE, 'showAppListById', [args]);
}
exports.default = showAppListById;
