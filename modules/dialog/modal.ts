import * as core from '../core';
import { WORKPLUS_DIALOG } from '../constants';
import { ExecOptions } from '../types/core';
import { ModalParams, ModalRes } from '../types/dialog';

export type Options = ModalParams & ExecOptions<ModalRes, void>;

/**
 * Modal
 * @description 弹出确认框，可以只定义标题和按钮
 * @param {Options}
 * @module dialog
 * @returns {ModalRes}
 */
export function showModal(options: Options): Promise<ModalRes> {
  return core.exec<ModalParams, ModalRes, void>(
    WORKPLUS_DIALOG,
    'showModal',
    [options],
    options?.success,
    options?.fail,
    false,
  );
}
