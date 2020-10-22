"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 隐藏搜索栏
 * @description 针对 "显示搜索栏" 接口，用于隐藏搜索栏。
 * @module webview
 * @version 4.10.0+
 */
function hideSearchBar() {
    var args = {
        visible: false,
    };
    return core.execSync(constants_1.WORKPLUS_WEBVIEW, 'searchBar', [args]);
}
exports.default = hideSearchBar;
