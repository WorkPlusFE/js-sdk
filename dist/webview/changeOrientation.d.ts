import { ChangeOrientationParams } from '../types/webview';
/**
 * 控制屏幕旋转
 * @description 根据参数控制屏幕横屏显示或者竖屏显示
 * @param {ChangeOrientationParams} options
 * @module webview
 * @version 3.1.3+
 * @returns {Promise<void>}
 */
declare function changeOrientation(options: ChangeOrientationParams): void;
export default changeOrientation;
