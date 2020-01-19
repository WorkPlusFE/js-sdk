import * as core from '../core';
import { WORKPLUS_WEBVIEW } from '../constants';
import { ExecOptions } from '../types/core';
import { ChangeOrientationParams } from '../types/webview';

export type ChangeOrientationOptions = ChangeOrientationParams & ExecOptions<void, void>;

/**
 * 控制屏幕旋转
 * @description 根据参数控制屏幕横屏显示或者竖屏显示
 * @param {ChangeOrientationOptions} options
 * @module webview
 * @version 3.1.3+
 * @returns {Promise<void>}
 */
function changeOrientation(options: ChangeOrientationOptions): Promise<void> {
  const { success, fail, ...params } = options;
  return core.exec<ChangeOrientationParams, void, void>(
    WORKPLUS_WEBVIEW,
    'changeOrientation',
    [params],
    success,
    fail,
  );
}

export default changeOrientation;
