import * as core from '../core';
import { WORKPLUS_WEBVIEW } from '../constants';
import { AddWaterMaskParams } from '../types/webview';

/**
 * 添加水印
 * @description 给页面添加水印
 * @param {AddWaterMaskParams} options
 * @module webview
 * @returns 无
 */
function addWaterMask(options: AddWaterMaskParams): void {
  return core.execSync<AddWaterMaskParams>(WORKPLUS_WEBVIEW, 'addWaterMask', [options]);
}

export default addWaterMask;
