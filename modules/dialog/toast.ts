import * as core from '../core';
import { WORKPLUS_DIALOG } from '../constants';
import { ToastParams } from '../types/dialog';

/**
 * Toast
 * @description 显示 Toast 小提示框，可以控制显示的标题和时长
 * @param {ToastParams}
 * @module dialog
 */
export function showToast(options: ToastParams): void {
  if (!options.duration) {
    options.duration = 3000;
  }
  return core.execSync(WORKPLUS_DIALOG, 'showToast', [options]);
}
