"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.install = exports.error = exports.execSync = exports.exec = exports.checkApi = exports.ready = exports.config = exports.deviceready = exports.init = exports.video = exports.record = exports.storage = exports.dialog = exports.event = exports.auth = exports.email = exports.network = exports.file = exports.eventlog = exports.device = exports.location = exports.util = exports.header = exports.webview = exports.app = exports.session = exports.user = exports.contact = exports.image = exports.native = exports.version = void 0;
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
var Config = require("./config");
var Dialog = require("./dialog");
var Storage = require("./storage");
var record_1 = require("./record");
var video_1 = require("./video");
/** WorkPlus SDK 版本 */
exports.version = '2.0.0-beta.2';
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
/** Dialog */
exports.dialog = Dialog;
/** Storage */
exports.storage = Storage;
/** Record */
exports.record = record_1.default;
/** Video */
exports.video = video_1.default;
/** WrokPlus SDK 初始化配置 */
exports.init = core.init;
exports.deviceready = core.deviceready;
/** 鉴权完成 */
exports.config = Config.config;
/** 鉴权完成 */
exports.ready = Config.ready;
/** 检测接口 */
exports.checkApi = Config.checkApi;
/** Cordova 执行事件（异步） */
exports.exec = core.exec;
/** Cordova 执行事件（同步） */
exports.execSync = core.execSync;
/** WorkPlus SDK 监听错误回调 */
exports.error = core.error;
/** Vue Plugin install function */
/*eslint @typescript-eslint/no-explicit-any: 0*/
exports.install = function (Vue, options, globalMode) {
    if (!globalMode) {
        core.init(options);
    }
    /* eslint no-param-reassign: 0 */
    Vue.prototype.$w6s = {
        version: exports.version,
        image: exports.image,
        contact: exports.contact,
        user: exports.user,
        session: exports.session,
        app: exports.app,
        webview: exports.webview,
        header: exports.header,
        util: exports.util,
        location: exports.location,
        device: exports.device,
        eventlog: exports.eventlog,
        file: exports.file,
        network: exports.network,
        email: exports.email,
        auth: exports.auth,
        event: exports.event,
        ready: exports.ready,
        config: exports.config,
        deviceready: exports.deviceready,
        exec: exports.exec,
        execSync: exports.execSync,
        error: exports.error,
        checkApi: exports.checkApi,
        dialog: exports.dialog,
        storage: exports.storage,
        record: exports.record,
        video: exports.video,
    };
    if (globalMode) {
        Vue.prototype.$w6s.init = exports.init;
    }
};
/* @ts-ignore */
if (typeof window !== 'undefined' && window.Vue) {
    /* @ts-ignore */
    exports.install(window.Vue, null, true);
}
