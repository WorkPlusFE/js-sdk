import { DeviceOptions, IpAddressRes } from "../types/device";
/**
 * 获取IP地址
 * @description 获取当前连接状态下的IP地址
 * @param {DeviceOptions<[], IpAddressRes>} [options]
 * @returns {Promise<IpAddressRes>}
 */
export default function getIpAddress(options?: DeviceOptions<[], IpAddressRes>): Promise<IpAddressRes>;
