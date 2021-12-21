import { ExecOptions } from '../types/core';
export interface TelParams {
  number: string | number;
}
export type TelOptions = TelParams & ExecOptions<TelParams, void>;

/**
 * 打电话
 * @param {Options} [options]
 * @returns {void}
 */
export default function tel(options: TelOptions) {
  window.location.href = `tel:${options.number}`;
}
