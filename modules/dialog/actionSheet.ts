import * as core from '../core';
import { WORKPLUS_DIALOG } from '../constants';
import { ExecOptions } from '../types/core';
import { ActionSheetParams, ActionSheetRes } from '../types/dialog';

export type Options = ActionSheetParams & ExecOptions<ActionSheetRes, void>;

/**
 * ActionSheet
 * @description 弹出 ActionSheet，可以自定义每个item的名字
 * @param {Options}
 * @module dialog
 * @returns {ActionSheetRes}
 */
export function showActionSheet(options: Options): Promise<ActionSheetRes> {
  return core.exec<ActionSheetParams, ActionSheetRes, void>(
    WORKPLUS_DIALOG,
    'showActionSheet',
    [options],
    options?.success,
    options?.fail,
    false,
  );
}
