import * as core from '../core';
import { LocationOptions } from '../types/location';

/**
 * 开启自动签到
 * @description 仅适用于移动考勤开启外勤，调用此接口，开启的组织为当前用户选择的组织
 * @param {LocationOptions<[], void>} [options]
 * @returns
 */
export default function takePhoto(options?: LocationOptions<[], void>): Promise<void> {
  return core.exec<[], void, never>(
    'WorkPlus_Location',
    'enableOrgSignIn',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}