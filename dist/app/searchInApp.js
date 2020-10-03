"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 打开搜索页面
 * @returns {void}
 */
function searchInApp() {
    return core.execSync(constants_1.WORKPLUS_CONTACT, 'searchInApp', []);
}
exports.default = searchInApp;
