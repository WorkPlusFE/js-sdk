import { ExecOptions } from '../types/core';
import { VibrateRes } from '../types/util';
export declare type Options = ExecOptions<VibrateRes, void>;
/**
 * 震动
 * @param {} [options]
 * @module util
 * @returns {Promise<VibrateRes>}
 */
declare function vibrate(options?: Options): Promise<VibrateRes>;
export default vibrate;
