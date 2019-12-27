import * as core from '../core';
import { WORKPLUS_LOCATION } from '../constants';
import { LocationOptions } from '../types/location';

/**
 * 关闭自动签到
 * @description 仅适用于移动考勤关闭外勤，调用此接口，关闭的组织为当前用户选择的组织
 * @param {LocationOptions<[], void>} [options]
 * @returns
 */
export default function takePhoto(options?: LocationOptions<[], void>): Promise<void> {
  return core.exec<[], void, never>(
    WORKPLUS_LOCATION,
    'disableOrgSignIn',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
