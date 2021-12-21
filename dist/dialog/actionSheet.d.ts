import { ExecOptions } from '../types/core';
import { ActionSheetParams, ActionSheetRes } from '../types/dialog';
export declare type Options = ActionSheetParams & ExecOptions<ActionSheetRes, void>;
/**
 * ActionSheet
 * @description 弹出 ActionSheet，可以自定义每个item的名字
 * @param {Options}
 * @module dialog
 * @returns {ActionSheetRes}
 */
export declare function showActionSheet(options: Options): Promise<ActionSheetRes>;
