"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 打电话
 * @param {Options} [options]
 * @returns {void}
 */
function tel(options) {
    window.location.href = "tel:" + options.number;
}
exports.default = tel;
