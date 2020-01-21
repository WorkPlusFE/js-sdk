/** 网络连接信息 */

export default {
  title: '网络连接信息',
  module: 'network',
  active: false,
  icon: 'info',
  apis: [
    {
      title: '获取当前连接Wifi信息',
      description: '获取当前连接Wifi信息, 包括 bssid, 名字等',
      action: 'getWifiInfo',
      params: {},
    },
  ],
};
