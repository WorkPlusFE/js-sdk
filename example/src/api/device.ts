/** 设备 */

export default {
  title: '设备',
  module: 'device',
  active: false,
  icon: 'device',
  apis: [
    {
      title: '获取IP地址',
      description: '获取手机设备当前连接网络的IP地址。',
      action: 'getIpAddress',
      params: {},
    },
    {
      title: '获取设备信息',
      description: '获取当前设备和 WorkPlus 的一些信息。',
      action: 'getDeviceInfo',
      params: {},
    },
    {
      title: '获取运动数据',
      description: '获取设备当天凌晨0点至当前时间的运动数据。',
      action: 'getPedometerData',
      params: {},
    },
  ],
};
