import * as core from "../core";
import { WORKPLUS_DEVICE } from "../constants";
import { DeviceOptions, PedometerDataRes } from "../types/device";

/**
 * 获取设备的运动数据
 * @description 获取设备当天凌晨0点至当前时间的运动数据 (从版本3.12.1起提供)
 * @param {DeviceOptions<[], PedometerDataRes>} [options]
 * @returns {Promise<PedometerDataRes>}
 */
export default function getPedometerData(options?: DeviceOptions<[], PedometerDataRes>): Promise<PedometerDataRes> {
  return core.exec<[], PedometerDataRes, never>(
    WORKPLUS_DEVICE,
    'getPedometerData',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
