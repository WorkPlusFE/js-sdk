import * as core from '../core';
import { WORKPLUS_SCAN } from '../constants';
import { ExecOptions } from '../types/core';
import { GenerateBarcodeRes, GenerateBarcodeParams } from '../types/util';

export type Options = GenerateBarcodeParams & ExecOptions<GenerateBarcodeRes, void>;

/**
 * 生成条形码
 * @param {GenerateBarcodeParams} [options]
 * @module util
 * @returns {Promise<GenerateBarcodeRes>}
 */
function generateBarcode(options: Options): Promise<GenerateBarcodeRes> {
  return core.exec<GenerateBarcodeParams, GenerateBarcodeRes, void>(
    WORKPLUS_SCAN,
    'generateBarcode',
    [options],
    options?.success,
    options?.fail,
    false,
  );
}

export default generateBarcode;
