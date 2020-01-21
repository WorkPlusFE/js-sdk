import * as core from '../core';
import { ExecOptions } from '../types/core';
import { WifiRes } from '../types/network';
import { WORKPLUS_NETWORK } from '../constants';

export type GetWifiOptions = ExecOptions<WifiRes, void>;

/**
 * 获取当前连接Wifi信息
 * @description 获取当前连接Wifi信息, 包括 bssid, 名字等
 * @param {GetWifiOptions>} [options]
 * @module network
 * @returns 当前连接的Wifi信息
 */
function getWifiInfo(options?: GetWifiOptions): Promise<WifiRes> {
  return core.exec<[], WifiRes, void>(
    WORKPLUS_NETWORK,
    'getWifiInfo',
    [],
    options?.success,
    options?.fail,
  );
}

export default getWifiInfo;
