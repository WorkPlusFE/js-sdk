import * as core from '../core';
import { WORKPLUS_WEBVIEW } from '../constants';
import { ExecOptions } from '../types/core';

export type RemoveWaterMask = ExecOptions<void, void>;

/**
 * 移除水印
 * @description 移除水印
 * @param {RemoveWaterMask} [options]
 * @module webview
 * @returns 无
 */
function removeWaterMask(options?: RemoveWaterMask): Promise<void> {
  return core.exec<[], void, void>(
    WORKPLUS_WEBVIEW,
    'removeWaterMask',
    [],
    options?.success,
    options?.fail,
  );
}

export default removeWaterMask;
