import { ExecOptions } from '../types/core';
import { GenerateQrcodeRes, GenerateQrcodeParams } from '../types/util';
export declare type Options = GenerateQrcodeParams & ExecOptions<GenerateQrcodeRes, void>;
/**
 * 生成条形码
 * @param {GenerateQrcodeParams} [options]
 * @module util
 * @returns {Promise<GenerateQrcodeRes>}
 */
declare function generateQrcode(options: Options): Promise<GenerateQrcodeRes>;
export default generateQrcode;
