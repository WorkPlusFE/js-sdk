import { ExecOptions } from '../types/core';
import { AddWaterMaskParams } from '../types/webview';
export declare type AddWaterMaskOptions = AddWaterMaskParams & ExecOptions<void, void>;
/**
 * 添加水印
 * @description 给页面添加水印
 * @param {AddWaterMaskOptions} options
 * @module webview
 * @returns 无
 */
declare function addWaterMask(options: AddWaterMaskOptions): Promise<void>;
export default addWaterMask;
