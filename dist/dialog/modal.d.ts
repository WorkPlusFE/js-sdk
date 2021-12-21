import { ExecOptions } from '../types/core';
import { ModalParams, ModalRes } from '../types/dialog';
export declare type Options = ModalParams & ExecOptions<ModalRes, void>;
/**
 * Modal
 * @description 弹出确认框，可以只定义标题和按钮
 * @param {Options}
 * @module dialog
 * @returns {ModalRes}
 */
export declare function showModal(options: Options): Promise<ModalRes>;
