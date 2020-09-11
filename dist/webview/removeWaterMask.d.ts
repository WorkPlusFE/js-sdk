import { ExecOptions } from '../types/core';
export declare type RemoveWaterMask = ExecOptions<void, void>;
/**
 * 移除水印
 * @description 移除水印
 * @param {RemoveWaterMask} [options]
 * @module webview
 * @returns 无
 */
declare function removeWaterMask(options?: RemoveWaterMask): Promise<void>;
export default removeWaterMask;
