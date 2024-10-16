import { CoreOptions } from './types/core';
import * as core from './core';
import Image from './image';
import * as Contact from './contact';
import * as Location from './location';
import Device from './device';
import EventLog from './eventlog';
import File from './file';
import * as Network from './network';
import Util from './util';
import * as Email from './email';
import * as Auth from './auth';
import * as Eventlistener from './eventlistener';
import * as App from './app';
import * as Session from './session';
import * as User from './user';
import * as Header from './header';
import * as Webview from './webview';
import * as Config from './config';
import * as Dialog from './dialog';
import * as Storage from './storage';
import Record from './record';
import Video from './video';
import Pay from './pay';

/** WorkPlus SDK 版本 */
export const version = '__VERSION__';
export const native = {};

/** 图像接口 */
export const image = Image;

/** 联系人接口 */
export const contact = Contact;

/** 用户接口 */
export const user = User;

/** 聊天会话接口 */
export const session = Session;

/** 应用 */
export const app = App;

/** 网页接口 */
export const webview = Webview;

/** 网页头部接口 */
export const header = Header;

/** 工具类接口 */
export const util = Util;

/** 地理位置接口 */
export const location = Location;
/** 设备信息接口 */
export const device = Device;
/** 事件日志接口 */
export const eventlog = EventLog;
/** 文件接口 */
export const file = File;
/** 网络信息接口 */
export const network = Network;
/** 邮箱接口 */
export const email = Email;
/** 认证接口 */
export const auth = Auth;
/** 网页事件 */
export const event = Eventlistener;
/** Dialog */
export const dialog = Dialog;
/** Storage */
export const storage = Storage;
/** Record */
export const record = Record;
/** Video */
export const video = Video;
/** Pay */
export const pay = Pay;
/** pc */

/** WrokPlus SDK 初始化配置 */
export const init = core.init;
export const deviceready = core.deviceready;

/** 鉴权完成 */
export const config = Config.config;
/** 鉴权完成 */
export const ready = Config.ready;
/** 检测接口 */
export const checkApi = Config.checkApi;

/** Cordova 执行事件（异步） */
export const exec = core.exec;
/** Cordova 执行事件（同步） */
export const execSync = core.execSync;
/** WorkPlus SDK 监听错误回调 */
export const error = core.error;

export const isPCPlatform = core.isPCPlatform;

/** Vue Plugin install function */
/*eslint @typescript-eslint/no-explicit-any: 0*/
export const install = (Vue: any, options?: CoreOptions, globalMode?: boolean) => {
  if (!globalMode) {
    core.init(options);
  }

  const w6s = {
    version,
    image,
    contact,
    user,
    session,
    app,
    webview,
    header,
    util,
    location,
    device,
    eventlog,
    file,
    network,
    email,
    auth,
    event,
    ready,
    config,
    deviceready,
    exec,
    execSync,
    error,
    checkApi,
    dialog,
    storage,
    record,
    video,
    pay,
    isPCPlatform,
  };

  /* eslint no-param-reassign: 0 */
  if (Vue.prototype) {
    /** Vue2 */
    Vue.prototype.$w6s = w6s;
    if (globalMode) {
      Vue.prototype.$w6s.init = init;
    }
  } else if (Vue.config.globalProperties) {
    /** Vue3 */
    Vue.config.globalProperties.$w6s = w6s;
    if (globalMode) {
      Vue.config.globalProperties.$w6s.init = init;
    }
  }
};

/* @ts-ignore */
if (typeof window !== 'undefined' && window.Vue) {
  /* @ts-ignore */
  const version = window.Vue.version.split('.').shift();

  if (version === '2') {
    /* @ts-ignore */
    install(window.Vue, null, true);
  } else if (version === '3') {
    /* @ts-ignore */
    window.w6s = { install };
  }
}
