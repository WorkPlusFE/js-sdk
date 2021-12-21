"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 生成条形码
 * @param {GenerateBarcodeParams} [options]
 * @module util
 * @returns {Promise<GenerateBarcodeRes>}
 */
function generateBarcode(options) {
    return core.exec(constants_1.WORKPLUS_SCAN, 'generateBarcode', [options], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail, false);
}
exports.default = generateBarcode;
