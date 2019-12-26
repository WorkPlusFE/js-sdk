import { LocationOptions, getLocationRes } from '../types/location';
/**
 * 获取定位信息
 * @description 返回手机设备当前的地理位置信息
 * @param {LocationOptions<[], getLocationRes>} [options]
 * @returns
 */
export default function takePhoto(options?: LocationOptions<[], getLocationRes>): Promise<getLocationRes>;
