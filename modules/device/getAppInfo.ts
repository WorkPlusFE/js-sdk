import * as core from '../core';
import { WORKPLUS_PUBLIC_CLOUND } from '../constants';
import { DeviceOptions, AppInfoRes } from '../types/device';

/**
 * 获取设备信息
 * @description 获取当前设备和 APP 的一些信息
 * @param {DeviceOptions<[], AppInfoRes>} [options]
 * @returns {Promise<AppInfoRes>}
 */
export default function getDeviceInfo(
  options?: DeviceOptions<[], AppInfoRes>,
): Promise<AppInfoRes> {
  return core.exec<[], AppInfoRes, never>(
    WORKPLUS_PUBLIC_CLOUND,
    'getAppInfo',
    [],
    options?.success,
    options?.fail,
  );
}
