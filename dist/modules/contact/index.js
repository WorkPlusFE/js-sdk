"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sdk_1 = require("../sdk");
var SERVICE_KEY = 'WorkPlus_Contact';
function getSingleContact(options) {
    var _a, _b, _c, _d;
    return sdk_1.default.sendEvent(SERVICE_KEY, 'getContact', (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.data, (_b !== null && _b !== void 0 ? _b : [])), (_c = options) === null || _c === void 0 ? void 0 : _c.success, (_d = options) === null || _d === void 0 ? void 0 : _d.fail);
}
exports.getSingleContact = getSingleContact;
function getContacts(options) {
    var _a, _b, _c, _d;
    return sdk_1.default.sendEvent(SERVICE_KEY, 'getContacts', (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.data, (_b !== null && _b !== void 0 ? _b : [])), (_c = options) === null || _c === void 0 ? void 0 : _c.success, (_d = options) === null || _d === void 0 ? void 0 : _d.fail);
}
exports.getContacts = getContacts;
function getEmployeesFromCurrentOrg(options) {
    var _a, _b, _c, _d;
    return sdk_1.default.sendEvent(SERVICE_KEY, 'getEmployeesFromCurrentOrg', (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.data, (_b !== null && _b !== void 0 ? _b : [])), (_c = options) === null || _c === void 0 ? void 0 : _c.success, (_d = options) === null || _d === void 0 ? void 0 : _d.fail);
}
exports.getEmployeesFromCurrentOrg = getEmployeesFromCurrentOrg;
function getCurrentUserInfo(options) {
    var _a, _b, _c, _d;
    return sdk_1.default.sendEvent(SERVICE_KEY, 'getCurrentUserInfo', (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.data, (_b !== null && _b !== void 0 ? _b : [])), (_c = options) === null || _c === void 0 ? void 0 : _c.success, (_d = options) === null || _d === void 0 ? void 0 : _d.fail);
}
exports.getCurrentUserInfo = getCurrentUserInfo;
function getCurrentEmployeeInfo(options) {
    var _a, _b, _c, _d;
    return sdk_1.default.sendEvent(SERVICE_KEY, 'getCurrentEmployeeInfo', (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.data, (_b !== null && _b !== void 0 ? _b : [])), (_c = options) === null || _c === void 0 ? void 0 : _c.success, (_d = options) === null || _d === void 0 ? void 0 : _d.fail);
}
exports.getCurrentEmployeeInfo = getCurrentEmployeeInfo;
function showUserChatViewByUser(options) {
    var _a, _b, _c, _d;
    return sdk_1.default.sendEvent(SERVICE_KEY, 'showUserChatViewByUser', (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.data, (_b !== null && _b !== void 0 ? _b : [])), (_c = options) === null || _c === void 0 ? void 0 : _c.success, (_d = options) === null || _d === void 0 ? void 0 : _d.fail);
}
exports.showUserChatViewByUser = showUserChatViewByUser;
function getMobileContacts(options) {
    var _a, _b, _c, _d;
    return sdk_1.default.sendEvent(SERVICE_KEY, 'getMobileContacts', (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.data, (_b !== null && _b !== void 0 ? _b : [])), (_c = options) === null || _c === void 0 ? void 0 : _c.success, (_d = options) === null || _d === void 0 ? void 0 : _d.fail);
}
exports.getMobileContacts = getMobileContacts;
function getUserInfoByUserId(options) {
    var _a, _b, _c, _d;
    return sdk_1.default.sendEvent(SERVICE_KEY, 'getUserInfoByUserId', (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.data, (_b !== null && _b !== void 0 ? _b : [])), (_c = options) === null || _c === void 0 ? void 0 : _c.success, (_d = options) === null || _d === void 0 ? void 0 : _d.fail);
}
exports.getUserInfoByUserId = getUserInfoByUserId;
function showUserInfoByUsername(options) {
    var _a, _b, _c, _d;
    return sdk_1.default.sendEvent(SERVICE_KEY, 'showUserInfoByUsername', (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.data, (_b !== null && _b !== void 0 ? _b : [])), (_c = options) === null || _c === void 0 ? void 0 : _c.success, (_d = options) === null || _d === void 0 ? void 0 : _d.fail);
}
exports.showUserInfoByUsername = showUserInfoByUsername;
function openDiscussionById(options) {
    var _a, _b, _c, _d;
    return sdk_1.default.sendEvent(SERVICE_KEY, 'openDiscussionById', (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.data, (_b !== null && _b !== void 0 ? _b : [])), (_c = options) === null || _c === void 0 ? void 0 : _c.success, (_d = options) === null || _d === void 0 ? void 0 : _d.fail);
}
exports.openDiscussionById = openDiscussionById;
function createDiscussionChat(options) {
    var _a, _b, _c, _d;
    return sdk_1.default.sendEvent(SERVICE_KEY, 'createDiscussionChat', (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.data, (_b !== null && _b !== void 0 ? _b : [])), (_c = options) === null || _c === void 0 ? void 0 : _c.success, (_d = options) === null || _d === void 0 ? void 0 : _d.fail);
}
exports.createDiscussionChat = createDiscussionChat;
function showAppChatViewById(options) {
    var _a, _b, _c, _d;
    return sdk_1.default.sendEvent(SERVICE_KEY, 'showAppChatView', (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.data, (_b !== null && _b !== void 0 ? _b : [])), (_c = options) === null || _c === void 0 ? void 0 : _c.success, (_d = options) === null || _d === void 0 ? void 0 : _d.fail);
}
exports.showAppChatViewById = showAppChatViewById;
function searchInApp(options) {
    var _a, _b, _c, _d;
    return sdk_1.default.sendEvent(SERVICE_KEY, 'searchInApp', (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.data, (_b !== null && _b !== void 0 ? _b : [])), (_c = options) === null || _c === void 0 ? void 0 : _c.success, (_d = options) === null || _d === void 0 ? void 0 : _d.fail);
}
exports.searchInApp = searchInApp;
function showAppListById(options) {
    var _a, _b, _c, _d;
    return sdk_1.default.sendEvent(SERVICE_KEY, 'showAppListById', (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.data, (_b !== null && _b !== void 0 ? _b : [])), (_c = options) === null || _c === void 0 ? void 0 : _c.success, (_d = options) === null || _d === void 0 ? void 0 : _d.fail);
}
exports.showAppListById = showAppListById;
function selectContacts(options) {
    var _a, _b, _c, _d;
    return sdk_1.default.sendEvent(SERVICE_KEY, 'selectContacts', (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.data, (_b !== null && _b !== void 0 ? _b : [])), (_c = options) === null || _c === void 0 ? void 0 : _c.success, (_d = options) === null || _d === void 0 ? void 0 : _d.fail);
}
exports.selectContacts = selectContacts;
function selectDiscussionMembers(options) {
    var _a, _b, _c, _d;
    return sdk_1.default.sendEvent(SERVICE_KEY, 'selectDiscussionMembers', (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.data, (_b !== null && _b !== void 0 ? _b : [])), (_c = options) === null || _c === void 0 ? void 0 : _c.success, (_d = options) === null || _d === void 0 ? void 0 : _d.fail);
}
exports.selectDiscussionMembers = selectDiscussionMembers;
function selectContactsCache(options) {
    var _a, _b, _c, _d;
    return sdk_1.default.sendEvent(SERVICE_KEY, 'selectContactsCache', (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.data, (_b !== null && _b !== void 0 ? _b : [])), (_c = options) === null || _c === void 0 ? void 0 : _c.success, (_d = options) === null || _d === void 0 ? void 0 : _d.fail);
}
exports.selectContactsCache = selectContactsCache;
