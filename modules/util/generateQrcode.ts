import * as core from '../core';
import { WORKPLUS_SCAN } from '../constants';
import { ExecOptions } from '../types/core';
import { GenerateQrcodeRes, GenerateQrcodeParams } from '../types/util';

export type Options = GenerateQrcodeParams & ExecOptions<GenerateQrcodeRes, void>;

/**
 * 生成条形码
 * @param {GenerateQrcodeParams} [options]
 * @module util
 * @returns {Promise<GenerateQrcodeRes>}
 */
function generateQrcode(options: Options): Promise<GenerateQrcodeRes> {
  return core.exec<GenerateQrcodeParams, GenerateQrcodeRes, void>(
    WORKPLUS_SCAN,
    'generateQrcode',
    [options],
    options?.success,
    options?.fail,
    false,
  );
}

export default generateQrcode;
