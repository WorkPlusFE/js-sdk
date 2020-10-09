"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 扫描二维码
 * @description 调用相机扫描二维码
 * @param {UitlOptions<void>} [options]
 * @returns {Promise<void>}
 */
function scanner(options) {
    return core.exec(constants_1.WORKPLUS_BARCODE_SCANNER, 'scanner', [], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail, false);
}
exports.default = scanner;
