export interface OpenLocalURLParams {
    /** 打开本地所在的html文件地址 */
    localURL: string;
}
export interface OpenWebViewParams {
    /** 打开的网址url */
    url: string;
    /** 打开网页的标题 */
    title: string;
    /** 是否使用 android 原生 webview 打开, 否则使用 workplus 订制的 webview，3.1.3以上版本支持 */
    use_android_webview?: boolean;
    /** 等同于 useAndroidWebview，只是该参数能用于 iOS 以及 android 平台 */
    use_system_webview?: boolean;
    /** 全屏打开 webview(即不包含原生标题栏), 默认非全屏 */
    display_mode?: 'FULL_SCREEN' | '';
    /** 通用配置 */
    mute_config?: string[];
}
export interface OpenWebView {
    /** 打开的网址url */
    url: string;
    /** 打开网页的标题 */
    title: string;
    /** 是否使用 android 原生 webview 打开, 否则使用 workplus 订制的 webview，3.1.3以上版本支持 */
    useAndroidWebview?: boolean;
    /** 等同于 useAndroidWebview，只是该参数能用于 iOS 以及 android 平台 */
    useSystemWebview?: boolean;
    /** 全屏打开 webview(即不包含原生标题栏), 默认非全屏 */
    displayMode?: 'FULL_SCREEN' | '';
    /** 通用配置 */
    muteConfig?: string[];
}
/** 锁定网页顶部栏的传参 */
export declare type NavigationParams = 'lock' | 'unlock';
/** 更换右侧的按钮动作 */
export interface ButtonsItem {
    /** 按钮是否可用, 3.1.3版本以上支持 */
    disable: string;
    /** 图标 */
    icon: string;
    /** 标题 */
    title: string;
    /** 动作 list等 */
    action: string;
    /** 某个可在全局范围使用的js方法 */
    value: string;
}
export interface ShareParams {
    /** 链接 */
    url: string;
    /** 标题 */
    title: string;
    /** 分享图标mediaId */
    cover_media_id?: string;
    /** 分享图标的网络访问地址 */
    cover_url?: string;
    /** 该字段是用于显示范围, 0 只显示内部分享的操作, 包括"发送给", "分享到圈子", 1则显示全部 */
    scope: 0 | 1;
    /** 分享链接的摘要 */
    summary: string;
    /** 直接执行分享操作, w6s_contact对应"分享弹出窗"的"发送给", 为App内部的联系人等列表, 后期扩展更多直接分享的类型, 敬请期待;当dicrectly存在值时, scope参数无意义, 请忽略, 默认dicrectly为空, 也即该接口会显示"分享弹出框"*/
    dicrectly?: 'w6s_contact' | 'w6s_current_session' | '';
    /** 会话参数 */
    direct_session?: {
        /** 会话的id */
        id: string;
        /** 会话的类型 */
        type: string;
    };
}
export interface Share {
    /** 链接 */
    url: string;
    /** 标题 */
    title: string;
    /** 分享图标mediaId */
    coverMediaId?: string;
    /** 分享图标的网络访问地址 */
    coverUrl?: string;
    /** 该字段是用于显示范围, 0 只显示内部分享的操作, 包括"发送给", "分享到圈子", 1则显示全部 */
    scope: 0 | 1;
    /** 分享链接的摘要 */
    summary: string;
    /** 直接执行分享操作, w6s_contact对应"分享弹出窗"的"发送给", 为App内部的联系人等列表, 后期扩展更多直接分享的类型, 敬请期待;当dicrectly存在值时, scope参数无意义, 请忽略, 默认dicrectly为空, 也即该接口会显示"分享弹出框"*/
    dicrectly?: 'w6s_contact' | 'w6s_current_session' | '';
    /** 会话参数 */
    directSession?: {
        /** 会话的id */
        id: string;
        /** 会话的类型 */
        type: string;
    };
}
export interface ToActivityParams {
    /** 原生activity */
    activity: string;
    /** 用户id */
    client_id: string;
    /** 跳转地址 */
    next_url: string;
    /** 访问token */
    access_token: string;
    /** 用户注册username */
    username: string;
    /** 用户名字 */
    name: string;
}
export interface VisibleLeftButtonParams {
    /** 是否显示返回图标 */
    showBack: boolean;
    /** 是否显示关闭图标 */
    showClose: boolean;
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
    /** 分享内容 */
    data: WxShareData;
}
export interface WxShare {
    /** 微信的AppId */
    appId: string;
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
    /** 分享内容 */
    data: WxShareData;
}
interface WxShareData {
    /** 分享的链接 */
    url?: string;
    /** 分享的图片链接或者是base64 */
    image?: string;
}
export interface VoiceToTextRes {
    /** 语音转出的文本 */
    message: string;
}
export interface CopyTextParams {
    /** 要复制的文本 */
    text: string;
}
export interface ShowSearchBarParams {
    hint: string;
    cancel_mode: 'reset' | 'back' | 'custom';
    visible: boolean;
}
export interface ShowSearch {
    /** 搜索时，输入框的 placeholder */
    hint?: string;
    /** 取消按钮的行为，可不传，默认为 reset。可选值：reset|back|custom */
    cancelMode?: 'reset' | 'back' | 'custom';
}
export interface ShowSearchRes {
    /** 搜索栏输入的内容 */
    content: string;
    /** 表示用户的动作，包括以下行为：input、search 及 cancel */
    action: 'input' | 'search' | 'cancel';
}
export interface ConfigPullRefreshRes {
    [key: string]: unknown;
}
export interface ConfigPullRefreshParams {
    enable: boolean;
    mode: string;
}
export interface OnPullRefreshRes {
    [key: string]: unknown;
}
export interface StartPullRefreshRes {
    [key: string]: unknown;
}
export interface EndPullRefreshRes {
    [key: string]: unknown;
}
export {};
