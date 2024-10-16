import { DeviceOptions, DeviceInfoRes } from '../types/device';
/**
 * 获取设备信息
 * @description 获取当前设备和 APP 的一些信息
 * @param {DeviceOptions<[], DeviceInfoRes>} [options]
 * @returns {Promise<DeviceInfoRes>}
 */
export default function getDeviceInfo(options?: DeviceOptions<[], DeviceInfoRes>): Promise<DeviceInfoRes>;
