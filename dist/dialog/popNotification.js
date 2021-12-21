"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.popNotification = void 0;
var core = require("../core");
var constants_1 = require("../constants");
/**
 * @description 消息通知
 * @param {Options}
 * @module dialog
 * @returns {PopNotificationRes}
 */
function popNotification(options) {
    return core.exec(constants_1.WORKPLUS_NOTIFICATION, 'pop', [options], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail, false);
}
exports.popNotification = popNotification;
