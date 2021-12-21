"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showInputView = void 0;
var core = require("../core");
var constants_1 = require("../constants");
/**
 * inputView
 * @description 弹出带输入框的确认弹窗，可以传入默认值
 * @param {Options}
 * @module dialog
 * @returns {ModalRes}
 */
function showInputView(options) {
    return core.exec(constants_1.WORKPLUS_DIALOG, 'showInputView', [options], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail, false);
}
exports.showInputView = showInputView;
