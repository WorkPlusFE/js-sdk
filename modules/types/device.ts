export interface DeviceOptions<D, S> {
  /** 传参 */
  data: D;
  /** 成功回调 */
  success?: (res: S) => void;
  /** 失败回调 */
  fail?: (err: void) => void;
}

export interface IpAddressRes {
  /** 状态码 */
  result: string;
  /** 手机连接网络的ip地址 */
  ipAddress: string;
}

export interface DeviceInfoRes {
  /** 设备 id */
  device_id: string;
  /** 平台 android|iOS */
  platform: string;
  /** 域 id */
  domain_id: string;
  /** 当前应用的 versionCode */
  product_version: string;
  /** 使用的系统版本 */
  system_version: string;
  /** 使用的手机型号 */
  system_model: string;
  /** 应用的包名 */
  channel_id: string;
  /** Apple or */
  channel_vendor: string;
}

export interface PedometerDataRes {
  /** 步数 */
  steps: number;
  /** 距离，单位米 */
  distances: number;
  /** 如果当前设备计步器不可用，返回-10001 */
  code?: number;
}

export interface AppInfoRes {
  /** 应用当前版本 version code */
  version_code: string;
  /** 应用当前版本名称 */
  version_name: string;
  /** 应用名 */
  app_name: string;
  /** 应用包名/bundleId */
  bundle_id: string;
  /** 应用图标 */
  app_icon: string;
}
