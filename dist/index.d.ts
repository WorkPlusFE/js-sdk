import * as core from './core';
import * as Contact from './contact';
import * as Location from './location';
import * as Network from './network';
import * as Email from './email';
import * as Auth from './auth';
import * as Eventlistener from './eventlistener';
import * as App from './app';
import * as Session from './session';
import * as User from './user';
import * as Header from './header';
import * as Webview from './webview';
/** WorkPlus SDK 版本 */
export declare const version = "v1.0.0-alpha.5";
export declare const native: {};
/** 图像接口 */
export declare const image: {
    takePicture: typeof import("./image/takePicture").default;
    takePhotoAndAddWaterMark: typeof import("./image/takePhotoAndAddWaterMark").default;
    saveImages: typeof import("./image/saveImages").default;
    showImages: typeof import("./image/showImages").default;
    chooseImages: typeof import("./image/chooseImages").default;
    actionForLongPressImage: typeof import("./image/actionForLongPressImage").default;
    cleanCompressImage: typeof import("./image/cleanCompressImage").default;
    toBase64: typeof import("./image/toBase64").default;
};
/** 联系人接口 */
export declare const contact: typeof Contact;
/** 用户接口 */
export declare const user: typeof User;
/** 聊天会话接口 */
export declare const session: typeof Session;
/** 应用 */
export declare const app: typeof App;
/** 网页接口 */
export declare const webview: typeof Webview;
/** 网页头部接口 */
export declare const header: typeof Header;
/** 工具类接口 */
export declare const util: {
    scanner: typeof import("./util/scanner").default;
    voiceToText: typeof import("./util/voiceToText").default;
    copyText: typeof import("./util/copyText").default;
};
/** 地理位置接口 */
export declare const location: typeof Location;
/** 设备信息接口 */
export declare const device: {
    getDeviceInfo: typeof import("./device/getDeviceInfo").default;
    getIpAddress: typeof import("./device/getIpAddress").default;
    getPedometerData: typeof import("./device/getPedometerData").default;
    getAppInfo: typeof import("./device/getAppInfo").default;
};
/** 事件日志接口 */
export declare const eventlog: {
    getEventLogs: typeof import("./eventlog/getEventLogs").default;
    getTodayUseDuration: typeof import("./eventlog/getTodayUseDuration").default;
};
/** 文件接口 */
export declare const file: {
    chooseFiles: typeof import("./file/chooseFiles").default;
    isFileExist: typeof import("./file/isFileExist").default;
    openFileDetail: typeof import("./file/openFileDetail").default;
    readFile: typeof import("./file/readFile").default;
    download: typeof import("./file/download").default;
};
/** 网络信息接口 */
export declare const network: typeof Network;
/** 邮箱接口 */
export declare const email: typeof Email;
/** 认证接口 */
export declare const auth: typeof Auth;
/** 网页事件 */
export declare const event: typeof Eventlistener;
/** WrokPlus SDK 初始化配置 */
export declare const init: (options?: import("./types/core").CoreOptions | undefined) => void;
/** Cordova 首次注入时的触发事件 */
export declare const ready: (fn?: Function | undefined) => Promise<void>;
/** Cordova 执行事件（异步） */
export declare const exec: typeof core.exec;
/** Cordova 执行事件（同步） */
export declare const execSync: typeof core.execSync;
/** WorkPlus SDK 监听错误回调 */
export declare const error: (fn: (err: unknown) => void) => void;
