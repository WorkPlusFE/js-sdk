"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
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
    var success = options.success, fail = options.fail, args = __rest(options, ["success", "fail"]);
    return core.exec(constants_1.WORKPLUS_DIALOG, 'showInputView', [args], success, fail, false);
}
exports.showInputView = showInputView;
