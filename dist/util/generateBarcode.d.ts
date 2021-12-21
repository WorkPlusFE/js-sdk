import { ExecOptions } from '../types/core';
import { GenerateBarcodeRes, GenerateBarcodeParams } from '../types/util';
export declare type Options = GenerateBarcodeParams & ExecOptions<GenerateBarcodeRes, void>;
/**
 * 生成条形码
 * @param {GenerateBarcodeParams} [options]
 * @module util
 * @returns {Promise<GenerateBarcodeRes>}
 */
declare function generateBarcode(options: Options): Promise<GenerateBarcodeRes>;
export default generateBarcode;
