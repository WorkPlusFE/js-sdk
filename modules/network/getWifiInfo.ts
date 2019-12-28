import * as core from '../core';
import { WORKPLUS_NETWORK } from '../constants';
import { NetworkOptions, WifiRes } from '../types/network';

/**
 * 获取当前连接Wifi信息
 * @description 获取当前连接Wifi信息, 包括 bssid, 名字等
 * @param {NetworkOptions<[], WifiRes>} [options]
 * @returns {Promise<WifiRes>}
 */
export default function getWifiInfo(options?: NetworkOptions<[], WifiRes>): Promise<WifiRes> {
  return core.exec<[], WifiRes, unknown>(
    WORKPLUS_NETWORK,
    'getWifiInfo',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
