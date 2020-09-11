import { ExecOptions } from '../types/core';
import { LocationRes } from '../types/location';
export declare type LocationOptions = ExecOptions<LocationRes, void>;
/**
 * 获取定位信息
 * @description 返回手机设备当前的地理位置信息
 * @param {LocationOptions} [options]
 * @module location
 * @returns 定位信息
 */
export default function getLocation(options?: LocationOptions): Promise<LocationRes>;
