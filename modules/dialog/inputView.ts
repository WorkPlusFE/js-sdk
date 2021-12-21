import * as core from '../core';
import { WORKPLUS_DIALOG } from '../constants';
import { ExecOptions } from '../types/core';
import { ModalParams, ModalRes } from '../types/dialog';

export type Options = ModalParams & ExecOptions<ModalRes, void>;

/**
 * inputView
 * @description 弹出带输入框的确认弹窗，可以传入默认值
 * @param {Options}
 * @module dialog
 * @returns {ModalRes}
 */
export function showInputView(options: Options): Promise<ModalRes> {
  return core.exec<ModalParams, ModalRes, void>(
    WORKPLUS_DIALOG,
    'showInputView',
    [options],
    options?.success,
    options?.fail,
    false,
  );
}
