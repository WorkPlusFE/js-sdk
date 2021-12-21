"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 震动
 * @param {} [options]
 * @module util
 * @returns {Promise<VibrateRes>}
 */
function vibrate(options) {
    return core.exec(constants_1.WORKPLUS_DEVICE, 'vibrate', [], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail, false);
}
exports.default = vibrate;
