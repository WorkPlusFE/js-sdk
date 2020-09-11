"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 扫描二维码
 * @description 调用相机扫描二维码
 * @param {UitlOptions<ScannerParams[], void>} [options]
 * @returns {Promise<void>}
 */
function scanner(options) {
    var _a;
    return core.exec(constants_1.WORKPLUS_BARCODE_SCANNER, 'scanner', (_a = options === null || options === void 0 ? void 0 : options.data) !== null && _a !== void 0 ? _a : [], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail);
}
exports.default = scanner;
