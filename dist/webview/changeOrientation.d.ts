import { ExecOptions } from '../types/core';
import { ChangeOrientationParams } from '../types/webview';
export declare type ChangeOrientationOptions = ChangeOrientationParams & ExecOptions<void, void>;
/**
 * 控制屏幕旋转
 * @description 根据参数控制屏幕横屏显示或者竖屏显示
 * @param {ChangeOrientationOptions} options
 * @module webview
 * @version 3.1.3+
 * @returns {Promise<void>}
 */
declare function changeOrientation(options: ChangeOrientationOptions): Promise<void>;
export default changeOrientation;
