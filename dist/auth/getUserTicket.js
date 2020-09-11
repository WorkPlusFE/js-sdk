"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 获取临时ticket
 * @description 为当前登录用户获取一个临时性的ticket
 * @param {UserTicketOptions} [options]
 * @module auth
 * @returns ticket
 */
function getUserTicket(options) {
    return core.exec(constants_1.WORKPLUS_AUTH, 'getUserTicket', [], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail);
}
exports.default = getUserTicket;
