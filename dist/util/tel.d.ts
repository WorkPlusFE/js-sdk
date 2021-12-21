import { ExecOptions } from '../types/core';
export interface TelParams {
    number: string | number;
}
export declare type TelOptions = TelParams & ExecOptions<TelParams, void>;
/**
 * 打电话
 * @param {Options} [options]
 * @returns {void}
 */
export default function tel(options: TelOptions): void;
