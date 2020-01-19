import * as core from '../core';
import { WORKPLUS_WEBVIEW } from '../constants';
import { ExecOptions } from '../types/core';
import { AddWaterMaskParams } from '../types/webview';

export type AddWaterMaskOptions = AddWaterMaskParams & ExecOptions<void, void>;

/**
 * 添加水印
 * @description 给页面添加水印
 * @param {AddWaterMaskOptions} options
 * @module webview
 * @returns 无
 */
function addWaterMask(options: AddWaterMaskOptions): Promise<void> {
  const { success, fail, ...params } = options;
  return core.exec<AddWaterMaskParams, void, void>(
    WORKPLUS_WEBVIEW,
    'addWaterMask',
    [params],
    success,
    fail,
  );
}

export default addWaterMask;
