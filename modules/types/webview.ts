export interface WebviewOption<D, R> {
  data: D[];
  success: (res: R) => void;
  fail: (err: unknown) => void;
}

export interface OpenLocalURLParams {
  /** 打开本地所在的html文件地址 */
  localURL: string;
}

export interface OpenWebViewParams {
  url: string;
  title: string;
  /** 是否使用 android 原生 webview 打开, 否则使用workplus 订制的 webview */
  use_android_webview: boolean;
  /** 全屏打开 webview(即不包含原生标题栏), 默认非全屏 */
  display_mode?: string;
}

export type NavigationParams = 'lock' | 'unlock';

export interface RightButtonsParams {
  disable: string;
  icon: string;
  title: string;
  action: string;
  value: string;
}

export interface ShareParams {
  url: string;
  title: string;
  cover_media_id: string;
  /** 该字段是用于显示范围, 0 只显示内部分享的操作, 包括"发送给", "分享到圈子", 1则显示全部 */
  scope: 0 | 1;
  /** 分享链接的摘要 */
  summary: string;
  /** 直接执行分享操作, w6s_contact对应"分享弹出窗"的"发送给", 为App内部的联系人等列表, 后期扩展更多直接分享的类型, 敬请期待;当dicrectly存在值时, scope参数无意义, 请忽略, 默认dicrectly为空, 也即该接口会显示"分享弹出框"*/
  dicrectly: string;
}

export interface ToActivityParams {
  activity: string;
  client_id: string;
  next_url: string;
  access_token: string;
  username: string;
  name: string;
}

export interface VisibleLeftButtonParams {
  showBack: 'true' | 'false';
  showClose: 'true' | 'false';
}

export interface ChangeLeftButtonParams {
  disable: string;
  icon: string;
  title: string;
  action: string;
  value: string;
}

export interface ChangeOrientationParams {
  /** 表示横屏或者竖屏(可不传) */
  landscape?: boolean;
  /** true 表示锁定当前横屏或者竖屏的状态, false 表示 app 随用户系统设置来控制旋转, 该参数默认为 false */
  lock?: boolean;
}

export interface AddWaterMaskParams {
  /** 字体颜色 */
  textColor: string;
  /** 组织id，传值则以这个组织下的雇员名显示内容，可不传，默认当前组织 */
  orgId?: string;
  /** 水印文字透明度 0-1.0之间，可不传， 默认1.0 */
  alpha?: number;
  /** 水印文字上下的垂直高度（密度），可不传，默认40 */
  verticalPadding?: number;
  /** 字体大小，可不传，默认16 */
  fontSize?: number;
}

export interface WxShareParams {
  /** 微信的AppId */
  app_id: string;
  /** 分享的标题 */
  title: string;
  /** 分享的消息类型，webpage(网页链接), image(图片) */
  type: 'webpage' | 'image';
  /** 描述 */
  description: string;
  /** 缩略图数据 */
  thumb: string;
  /** 0 为聊天界面 1为朋友圈 */
  scene: number;
  data: WxShareData;
}

interface WxShareData {
  url?: string;
  image?: string;
}

export interface VoiceToTextRes {
  /**语音转出的文本 */
  message: string;
}
