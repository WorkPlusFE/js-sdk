import getDeviceInfo from './getDeviceInfo';
import getIpAddress from './getIpAddress';
import getPedometerData from './getPedometerData';
import getAppInfo from './getAppInfo';
declare const _default: {
    /** 获取设备信息 */
    getDeviceInfo: typeof getDeviceInfo;
    /** 获取 IP 地址 */
    getIpAddress: typeof getIpAddress;
    /** 获取运动数据 */
    getPedometerData: typeof getPedometerData;
    /** 获取 App 信息 */
    getAppInfo: typeof getAppInfo;
};
export default _default;
