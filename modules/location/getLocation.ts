import * as core from '../core';
import { WORKPLUS_LOCATION } from '../constants';
import { LocationOptions, LocationRes } from '../types/location';

/**
 * 获取定位信息
 * @description 返回手机设备当前的地理位置信息
 * @param {LocationOptions<[], LocationRes>} [options]
 * @returns
 */
export default function PhotoInfo(
  options?: LocationOptions<[], LocationRes>,
): Promise<LocationRes> {
  return core.exec<[], LocationRes, never>(
    WORKPLUS_LOCATION,
    'getLocation',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
