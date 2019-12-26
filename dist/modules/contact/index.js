"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var SERVICE_KEY = 'WorkPlus_Contact';
/**
 * 单选联系人
 *
 * @export
 * @param {ContactOption<SingleContactParams, SingleContactRes>} [options]
 * @returns {Promise<SingleContactRes>}
 */
function getSingleContact(options) {
    var _a, _b, _c, _d;
    return core.exec(SERVICE_KEY, 'getContact', (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.data, (_b !== null && _b !== void 0 ? _b : [])), (_c = options) === null || _c === void 0 ? void 0 : _c.success, (_d = options) === null || _d === void 0 ? void 0 : _d.fail);
}
exports.getSingleContact = getSingleContact;
/**
 * 打开当前组织的联系人列表，选择多个联系人
 *
 * @export
 * @param {ContactOption<ContactsParams, ContactsRes>} [options]
 * @returns {Promise<ContactsRes>}
 */
function getContacts(options) {
    var _a, _b, _c, _d;
    return core.exec(SERVICE_KEY, 'getContacts', (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.data, (_b !== null && _b !== void 0 ? _b : [])), (_c = options) === null || _c === void 0 ? void 0 : _c.success, (_d = options) === null || _d === void 0 ? void 0 : _d.fail);
}
exports.getContacts = getContacts;
/**
 * 打开当前组织的联系人列表，选择多个联系人
 *
 * @export
 * @param {ContactOption<EmployeesFromOrgParams, CurrentEmployeeInfoRes>} [options]
 * @returns {Promise<CurrentEmployeeInfoRes>}
 */
function getEmployeesFromCurrentOrg(options) {
    var _a, _b, _c, _d;
    return core.exec(SERVICE_KEY, 'getEmployeesFromCurrentOrg', (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.data, (_b !== null && _b !== void 0 ? _b : [])), (_c = options) === null || _c === void 0 ? void 0 : _c.success, (_d = options) === null || _d === void 0 ? void 0 : _d.fail);
}
exports.getEmployeesFromCurrentOrg = getEmployeesFromCurrentOrg;
/**
 * 获取当前登录用户详细信息
 *
 * @export
 * @param {ContactOption<CurrentUserInfoParams, CurrentUserInfoRes>} [options]
 * @returns {Promise<CurrentUserInfoRes>}
 */
function getCurrentUserInfo(options) {
    var _a, _b, _c, _d;
    return core.exec(SERVICE_KEY, 'getCurrentUserInfo', (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.data, (_b !== null && _b !== void 0 ? _b : [])), (_c = options) === null || _c === void 0 ? void 0 : _c.success, (_d = options) === null || _d === void 0 ? void 0 : _d.fail);
}
exports.getCurrentUserInfo = getCurrentUserInfo;
/**
 * 获取当前登录用户的某个组织里的雇员信息
 *
 * @export
 * @param {ContactOption<CurrentEmployeeInfoParams, CurrentEmployeeInfoRes>} [options]
 * @returns {Promise<CurrentEmployeeInfoRes>}
 */
function getCurrentEmployeeInfo(options) {
    var _a, _b, _c, _d;
    return core.exec(SERVICE_KEY, 'getCurrentEmployeeInfo', (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.data, (_b !== null && _b !== void 0 ? _b : [])), (_c = options) === null || _c === void 0 ? void 0 : _c.success, (_d = options) === null || _d === void 0 ? void 0 : _d.fail);
}
exports.getCurrentEmployeeInfo = getCurrentEmployeeInfo;
/**
 * 轻应用输入userId，domianId, 跳转到workplus与该用户的聊天页面
 *
 * @export
 * @param {ContactOption<ShowUserChatViewByUserParams, unknown>} [options]
 * @returns {Promise<unknown>}
 */
function showUserChatViewByUser(options) {
    var _a, _b, _c, _d;
    return core.exec(SERVICE_KEY, 'showUserChatViewByUser', (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.data, (_b !== null && _b !== void 0 ? _b : [])), (_c = options) === null || _c === void 0 ? void 0 : _c.success, (_d = options) === null || _d === void 0 ? void 0 : _d.fail);
}
exports.showUserChatViewByUser = showUserChatViewByUser;
/**
 * 获取手机通讯录联系人的列表
 *
 * @export
 * @param {ContactOption<[], unknown>} [options]
 * @returns {Promise<unknown>}
 */
function getMobileContacts(options) {
    var _a, _b, _c, _d;
    return core.exec(SERVICE_KEY, 'getMobileContacts', (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.data, (_b !== null && _b !== void 0 ? _b : [])), (_c = options) === null || _c === void 0 ? void 0 : _c.success, (_d = options) === null || _d === void 0 ? void 0 : _d.fail);
}
exports.getMobileContacts = getMobileContacts;
/**
 * 通过用户域id和用户id获取这个用户的详细信息
 *
 * @export
 * @param {ContactOption<GetUserInfoByUserIdParams, GetUserInfoByUserIdRes>} [options]
 * @returns {Promise<GetUserInfoByUserIdRes>}
 */
function getUserInfoByUserId(options) {
    var _a, _b, _c, _d;
    return core.exec(SERVICE_KEY, 'getUserInfoByUserId', (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.data, (_b !== null && _b !== void 0 ? _b : [])), (_c = options) === null || _c === void 0 ? void 0 : _c.success, (_d = options) === null || _d === void 0 ? void 0 : _d.fail);
}
exports.getUserInfoByUserId = getUserInfoByUserId;
/**
 * 通过用户username展示这个用户的详情页面
 *
 * @export
 * @param {ContactOption<ShowUserInfoByUsernameParams, unknown>} [options]
 * @returns {Promise<unknown>}
 */
function showUserInfoByUsername(options) {
    var _a, _b, _c, _d;
    return core.exec(SERVICE_KEY, 'showUserInfoByUsername', (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.data, (_b !== null && _b !== void 0 ? _b : [])), (_c = options) === null || _c === void 0 ? void 0 : _c.success, (_d = options) === null || _d === void 0 ? void 0 : _d.fail);
}
exports.showUserInfoByUsername = showUserInfoByUsername;
/**
 * 通过群组id打开该群组的聊天页面，并且可以自定义发送应用所支持的消息
 *
 * @export
 * @param {ContactOption<OpenDiscussionByIdParams, unknown>} [options]
 * @returns {Promise<unknown>}
 */
function openDiscussionById(options) {
    var _a, _b, _c, _d;
    return core.exec(SERVICE_KEY, 'openDiscussionById', (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.data, (_b !== null && _b !== void 0 ? _b : [])), (_c = options) === null || _c === void 0 ? void 0 : _c.success, (_d = options) === null || _d === void 0 ? void 0 : _d.fail);
}
exports.openDiscussionById = openDiscussionById;
/**
 * 通过调用原生选人界面，选择人员，创建群组，并且返回相关群组信息
 *
 * @export
 * @param {ContactOption<[], unknown>} [options]
 * @returns {Promise<unknown>}
 */
function createDiscussionChat(options) {
    var _a, _b, _c, _d;
    return core.exec(SERVICE_KEY, 'createDiscussionChat', (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.data, (_b !== null && _b !== void 0 ? _b : [])), (_c = options) === null || _c === void 0 ? void 0 : _c.success, (_d = options) === null || _d === void 0 ? void 0 : _d.fail);
}
exports.createDiscussionChat = createDiscussionChat;
/**
 * 通过应用id和orgId的，打开改组织下某个应用聊天界面
 *
 * @export
 * @param {ContactOption<ShowAppChatViewParams[], unknown>} [options]
 * @returns {Promise<unknown>}
 */
function showAppChatViewById(options) {
    var _a, _b, _c, _d;
    return core.exec(SERVICE_KEY, 'showAppChatView', (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.data, (_b !== null && _b !== void 0 ? _b : [])), (_c = options) === null || _c === void 0 ? void 0 : _c.success, (_d = options) === null || _d === void 0 ? void 0 : _d.fail);
}
exports.showAppChatViewById = showAppChatViewById;
/**
 * 打开搜索页面
 *
 * @export
 * @param {ContactOption<[], unknown>} [options]
 * @returns {Promise<unknown>}
 */
function searchInApp(options) {
    var _a, _b, _c, _d;
    return core.exec(SERVICE_KEY, 'searchInApp', (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.data, (_b !== null && _b !== void 0 ? _b : [])), (_c = options) === null || _c === void 0 ? void 0 : _c.success, (_d = options) === null || _d === void 0 ? void 0 : _d.fail);
}
exports.searchInApp = searchInApp;
/**
 * 根据组织id打开该组织下的应用列表页面
 *
 * @export
 * @param {ContactOption<ShowAppListByIdParams, unknown>} [options]
 * @returns {Promise<unknown>}
 */
function showAppListById(options) {
    var _a, _b, _c, _d;
    return core.exec(SERVICE_KEY, 'showAppListById', (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.data, (_b !== null && _b !== void 0 ? _b : [])), (_c = options) === null || _c === void 0 ? void 0 : _c.success, (_d = options) === null || _d === void 0 ? void 0 : _d.fail);
}
exports.showAppListById = showAppListById;
/**
 * 打开通用选择人员界面, 多选用户或者雇员
 *
 * @export
 * @param {ContactOption<SelectContactsParams, unknown>} [options]
 * @returns {Promise<unknown>}
 */
function selectContacts(options) {
    var _a, _b, _c, _d;
    return core.exec(SERVICE_KEY, 'selectContacts', (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.data, (_b !== null && _b !== void 0 ? _b : [])), (_c = options) === null || _c === void 0 ? void 0 : _c.success, (_d = options) === null || _d === void 0 ? void 0 : _d.fail);
}
exports.selectContacts = selectContacts;
/**
 * 根据群组 id, 打开群组成员界面, 并进行选择
 *
 * @export
 * @param {ContactOption<SelectDiscussionMembersParams, SelectDiscussionMembersRes>} [options]
 * @returns {Promise<SelectDiscussionMembersRes>}
 */
function selectDiscussionMembers(options) {
    var _a, _b, _c, _d;
    return core.exec(SERVICE_KEY, 'selectDiscussionMembers', (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.data, (_b !== null && _b !== void 0 ? _b : [])), (_c = options) === null || _c === void 0 ? void 0 : _c.success, (_d = options) === null || _d === void 0 ? void 0 : _d.fail);
}
exports.selectDiscussionMembers = selectDiscussionMembers;
/**
 * 获取选人缓存数据
 *
 * @export
 * @param {ContactOption<[], SelectContactsCacheRes>} [options]
 * @returns {Promise<SelectContactsCacheRes>}
 */
function selectContactsCache(options) {
    var _a, _b, _c, _d;
    return core.exec(SERVICE_KEY, 'selectContactsCache', (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.data, (_b !== null && _b !== void 0 ? _b : [])), (_c = options) === null || _c === void 0 ? void 0 : _c.success, (_d = options) === null || _d === void 0 ? void 0 : _d.fail);
}
exports.selectContactsCache = selectContactsCache;
