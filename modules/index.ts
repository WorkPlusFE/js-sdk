import WPStorage from './storage';
import * as core from './core';
import Image from './image';
import Contact from './contact';
import Location from './location';
import Device from './device';
import EventLog from './eventlog';
import File from './file';
import Network from './network';
import Util from './util';
import Email from './email';
import * as Auth from './auth';
import Webview from './webview';

export * from './eventlistener';

/** WorkPlus SDK 版本 */
export const version = '0.0.1';
export const native = {};
/** WorkPlus SDK 提供的 Storage */
export const Storage = WPStorage;

/** 图像接口 */
export const image = Image;
/** 联系人接口 */
export const contact = Contact;
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
/** 工具类接口 */
export const util = Util;
/** 邮箱接口 */
export const email = Email;
/** 认证接口 */
export const auth = Auth;
/** 网页接口 */
export const webview = Webview;

/** WrokPlus SDK 初始化配置 */
export const init = core.init;
/** Cordova 首次注入时的触发事件 */
export const ready = core.ready;
/** Cordova 执行事件（异步） */
export const exec = core.exec;
/** Cordova 执行事件（同步） */
export const execSync = core.execSync;
/** WorkPlus SDK 监听错误回调 */
export const error = core.error;
