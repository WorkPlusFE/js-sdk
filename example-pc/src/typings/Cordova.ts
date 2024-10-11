export interface Cordova {
  exec(success: (data: any) => any, fail: (err: any) => any, service: string, action: string, args?: any[]): void
  platformId: string
  /** Gets Cordova framework version */
  version: string
  /** Defines custom logic as a Cordova module. Other modules can later access it using module name provided. */
  define(moduleName: string, factory: (require: any, exports: any, module: any) => any): void
  /** Access a Cordova module by name. */
  require(moduleName: string): any
  logs(data: any, realTime: number): void
}

export enum Environment {
  DEV = 'dev',
  TEST = 'test',
  RELEASE = 'release',
}

/**
 * app 配置数据
 */
export interface AppConfigData {
  shakeUrl?: string // 摇一摇地址
  colleagueCircleUrl?: string // 同事圈地址
  _ApiUrl?: string // _ApiUrl
  _AdminUrl?: string // 管理平台地址
  scheduleUrl?: string // 日程管理地址
  _Environment?: Environment // 环境变量 dev, test, release
}

/**
 * 拍照参数
 */
export interface TakePictureOptions {
  autoUpload?: boolean // 是否自动上传
  editable?: boolean // 是否进行裁剪，适用于设置头像
}

/**
 * 选择图片参数
 */
export interface ChooseImagesOptions {
  autoUpload?: boolean // 是否上传
  editable?: boolean // 是否进行裁剪，适用于设置头像
  maxSelectCount?: number // 多选时数量的限制，默认为 9
  multiple?: boolean // 是否为图片多选
  imageKeys?: string[] // 图片在本机的地址，用于图片复选
  singleSelectSize?: number // 单个文件选择大小限制(byte), -1表示不限制，默认为-1
  totalSelectSize?: number // 所有文件选择大小限制(byte), -1表示不限制，默认为-1
  medias?: number // 相册选择时, 支持的类型. 1表示需支持视频选择. 可不填, 不填则默认只选择图片
}

/**
 * 选择图片参数
 */
export interface LOGS_DATA {
  projectName?: string // 项目名称
  page?: string // 页面名称
  url?: string // 当前页面访问地址
  hash?: string // 链接的 hash
  version?: string // 版本
  title: string // 标题
  data: any // 日志数据
}
