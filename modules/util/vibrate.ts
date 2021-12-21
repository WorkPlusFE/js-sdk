import * as core from '../core';
import { WORKPLUS_DEVICE } from '../constants';
import { ExecOptions } from '../types/core';
import { VibrateRes } from '../types/util';

export type Options = ExecOptions<VibrateRes, void>;

/**
 * 震动
 * @param {} [options]
 * @module util
 * @returns {Promise<VibrateRes>}
 */
function vibrate(options?: Options): Promise<VibrateRes> {
  return core.exec<void, VibrateRes, void>(
    WORKPLUS_DEVICE,
    'vibrate',
    [],
    options?.success,
    options?.fail,
    false,
  );
}

export default vibrate;
