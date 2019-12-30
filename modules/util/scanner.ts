import * as core from '../core';
import { WORKPLUS_BARCODE_SCANNER } from '../constants';
import { UitlOptions, ScannerParams } from '../types/util';

/**
 * 扫描二维码
 * @description 调用相机扫描二维码
 * @param {UitlOptions<ScannerParams[], void>} [options]
 * @returns {Promise<void>}
 */
export default function scanner(options?: UitlOptions<ScannerParams[], void>): Promise<void> {
  return core.exec<ScannerParams, void, unknown>(
    WORKPLUS_BARCODE_SCANNER,
    'scanner',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
