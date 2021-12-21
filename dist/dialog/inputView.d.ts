import { ExecOptions } from '../types/core';
import { ModalParams, ModalRes } from '../types/dialog';
export declare type Options = ModalParams & ExecOptions<ModalRes, void>;
/**
 * inputView
 * @description 弹出带输入框的确认弹窗，可以传入默认值
 * @param {Options}
 * @module dialog
 * @returns {ModalRes}
 */
export declare function showInputView(options: Options): Promise<ModalRes>;
