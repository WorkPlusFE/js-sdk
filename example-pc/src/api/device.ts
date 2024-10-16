/** 设备 */

export default {
  title: '设备',
  module: 'device',
  active: false,
  icon: 'device',
  apis: [
    {
      title: '获取设备信息',
      description: '获取当前设备和 WorkPlus 的一些信息。',
      action: 'getDeviceInfo',
      params: {},
    },
  ],
};
