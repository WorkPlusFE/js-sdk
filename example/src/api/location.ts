/** 地理位置 */

export default {
  title: '地理位置',
  module: 'location',
  active: false,
  icon: 'location',
  apis: [
    {
      title: '获取定位信息',
      description: '返回手机设备当前的地理位置信息',
      action: 'getLocation',
      params: {},
    },
  ],
};
