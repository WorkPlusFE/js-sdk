"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showActionSheet = void 0;
var core = require("../core");
var constants_1 = require("../constants");
/**
 * ActionSheet
 * @description 弹出 ActionSheet，可以自定义每个item的名字
 * @param {Options}
 * @module dialog
 * @returns {ActionSheetRes}
 */
function showActionSheet(options) {
    return core.exec(constants_1.WORKPLUS_DIALOG, 'showActionSheet', [options], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail, false);
}
exports.showActionSheet = showActionSheet;
