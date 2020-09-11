import { UitlOptions, ScannerParams } from '../types/util';
/**
 * 扫描二维码
 * @description 调用相机扫描二维码
 * @param {UitlOptions<ScannerParams[], void>} [options]
 * @returns {Promise<void>}
 */
export default function scanner(options?: UitlOptions<ScannerParams[], void>): Promise<void>;
