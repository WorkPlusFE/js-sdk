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
    {
      title: '开启自动签到',
      description: '仅适用于移动考勤开启外勤，调用此接口，开启的组织为当前用户选择的组织',
      action: 'openSignIn',
      params: {},
    },
    {
      title: '关闭自动签到',
      description: '仅适用于移动考勤关闭外勤，调用此接口，关闭的组织为当前用户选择的组织',
      action: 'closeSignIn',
      params: {},
    },
  ],
};
