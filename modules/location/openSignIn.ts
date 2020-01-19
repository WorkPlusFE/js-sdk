import * as core from '../core';
import { WORKPLUS_LOCATION } from '../constants';
import { NotResOptions } from '../types/core';

/**
 * 开启自动签到
 * @description 仅适用于移动考勤开启外勤，调用此接口，开启的组织为当前用户选择的组织
 * @param {NotResOptions} [options]
 * @module location
 * @returns 无
 */
export default function openSignIn(options?: NotResOptions): Promise<void> {
  return core.exec<[], void, void>(
    WORKPLUS_LOCATION,
    'enableOrgSignIn',
    [],
    options?.success,
    options?.fail,
  );
}
