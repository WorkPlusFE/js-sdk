import { ExecOptions } from '../types/core';
import { WifiRes } from '../types/network';
export declare type GetWifiOptions = ExecOptions<WifiRes, void>;
/**
 * 获取当前连接Wifi信息
 * @description 获取当前连接Wifi信息, 包括 bssid, 名字等
 * @param {GetWifiOptions>} [options]
 * @module network
 * @returns 当前连接的Wifi信息
 */
declare function getWifiInfo(options?: GetWifiOptions): Promise<WifiRes>;
export default getWifiInfo;
