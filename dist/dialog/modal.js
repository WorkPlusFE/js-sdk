"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showModal = void 0;
var core = require("../core");
var constants_1 = require("../constants");
/**
 * Modal
 * @description 弹出确认框，可以只定义标题和按钮
 * @param {Options}
 * @module dialog
 * @returns {ModalRes}
 */
function showModal(options) {
    return core.exec(constants_1.WORKPLUS_DIALOG, 'showModal', [options], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail, false);
}
exports.showModal = showModal;
