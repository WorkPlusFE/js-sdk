"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = exports.execSync = exports.exec = exports.ready = exports.init = exports.event = exports.auth = exports.email = exports.network = exports.file = exports.eventlog = exports.device = exports.location = exports.util = exports.header = exports.webview = exports.app = exports.session = exports.user = exports.contact = exports.image = exports.native = exports.version = void 0;
var core = require("./core");
var image_1 = require("./image");
var Contact = require("./contact");
var Location = require("./location");
var device_1 = require("./device");
var eventlog_1 = require("./eventlog");
var file_1 = require("./file");
var Network = require("./network");
var util_1 = require("./util");
var Email = require("./email");
var Auth = require("./auth");
var Eventlistener = require("./eventlistener");
var App = require("./app");
var Session = require("./session");
var User = require("./user");
var Header = require("./header");
var Webview = require("./webview");
/** WorkPlus SDK 版本 */
exports.version = 'v1.0.0-alpha.5';
exports.native = {};
/** 图像接口 */
exports.image = image_1.default;
/** 联系人接口 */
exports.contact = Contact;
/** 用户接口 */
exports.user = User;
/** 聊天会话接口 */
exports.session = Session;
/** 应用 */
exports.app = App;
/** 网页接口 */
exports.webview = Webview;
/** 网页头部接口 */
exports.header = Header;
/** 工具类接口 */
exports.util = util_1.default;
/** 地理位置接口 */
exports.location = Location;
/** 设备信息接口 */
exports.device = device_1.default;
/** 事件日志接口 */
exports.eventlog = eventlog_1.default;
/** 文件接口 */
exports.file = file_1.default;
/** 网络信息接口 */
exports.network = Network;
/** 邮箱接口 */
exports.email = Email;
/** 认证接口 */
exports.auth = Auth;
/** 网页事件 */
exports.event = Eventlistener;
/** WrokPlus SDK 初始化配置 */
exports.init = core.init;
/** Cordova 首次注入时的触发事件 */
exports.ready = core.ready;
/** Cordova 执行事件（异步） */
exports.exec = core.exec;
/** Cordova 执行事件（同步） */
exports.execSync = core.execSync;
/** WorkPlus SDK 监听错误回调 */
exports.error = core.error;
