import * as core from '../core';
import { WORKPLUS_CONFIG } from '../constants';
import { ExecOptions } from '../types/core';
import { ConfigAuthParams, ConfigAuthRes } from '../types/config';

export type ConfigOptions = ConfigAuthParams & ExecOptions<ConfigAuthRes, ConfigAuthRes>;

/**
 * SDK 鉴权
 * @description 所有接口都需要先经过鉴权才能够使用
 * @param {ConfigOptions} [options]
 * @module config
 * @returns {ConfigAuthRes}
 */
export default function config(options: ConfigOptions): Promise<ConfigAuthRes> {
  return core.exec<ConfigAuthParams, ConfigAuthRes, ConfigAuthRes>(
    WORKPLUS_CONFIG,
    'config',
    [options],
    options?.success,
    options?.fail,
    false,
  );
}
