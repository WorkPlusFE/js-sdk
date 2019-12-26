import { SingleContactRes, ContactOption, SingleContactParams, ContactsParams, ContactsRes, EmployeesFromOrgParams, CurrentUserInfoParams, CurrentUserInfoRes, CurrentEmployeeInfoParams, CurrentEmployeeInfoRes, ShowUserChatViewByUserParams, ShowUserInfoByUsernameParams, OpenDiscussionByIdParams, SelectDiscussionMembersParams, SelectDiscussionMembersRes, SelectContactsCacheRes, GetUserInfoByUserIdParams, GetUserInfoByUserIdRes, ShowAppChatViewParams, ShowAppListByIdParams, SelectContactsParams } from '../types/contact';
/**
 * 单选联系人
 *
 * @export
 * @param {ContactOption<SingleContactParams, SingleContactRes>} [options]
 * @returns {Promise<SingleContactRes>}
 */
export declare function getSingleContact(options?: ContactOption<SingleContactParams, SingleContactRes>): Promise<SingleContactRes>;
/**
 * 打开当前组织的联系人列表，选择多个联系人
 *
 * @export
 * @param {ContactOption<ContactsParams, ContactsRes>} [options]
 * @returns {Promise<ContactsRes>}
 */
export declare function getContacts(options?: ContactOption<ContactsParams, ContactsRes>): Promise<ContactsRes>;
/**
 * 打开当前组织的联系人列表，选择多个联系人
 *
 * @export
 * @param {ContactOption<EmployeesFromOrgParams, CurrentEmployeeInfoRes>} [options]
 * @returns {Promise<CurrentEmployeeInfoRes>}
 */
export declare function getEmployeesFromCurrentOrg(options?: ContactOption<EmployeesFromOrgParams, CurrentEmployeeInfoRes>): Promise<CurrentEmployeeInfoRes>;
/**
 * 获取当前登录用户详细信息
 *
 * @export
 * @param {ContactOption<CurrentUserInfoParams, CurrentUserInfoRes>} [options]
 * @returns {Promise<CurrentUserInfoRes>}
 */
export declare function getCurrentUserInfo(options?: ContactOption<CurrentUserInfoParams, CurrentUserInfoRes>): Promise<CurrentUserInfoRes>;
/**
 * 获取当前登录用户的某个组织里的雇员信息
 *
 * @export
 * @param {ContactOption<CurrentEmployeeInfoParams, CurrentEmployeeInfoRes>} [options]
 * @returns {Promise<CurrentEmployeeInfoRes>}
 */
export declare function getCurrentEmployeeInfo(options?: ContactOption<CurrentEmployeeInfoParams, CurrentEmployeeInfoRes>): Promise<CurrentEmployeeInfoRes>;
/**
 * 轻应用输入userId，domianId, 跳转到workplus与该用户的聊天页面
 *
 * @export
 * @param {ContactOption<ShowUserChatViewByUserParams, unknown>} [options]
 * @returns {Promise<unknown>}
 */
export declare function showUserChatViewByUser(options?: ContactOption<ShowUserChatViewByUserParams, unknown>): Promise<unknown>;
/**
 * 获取手机通讯录联系人的列表
 *
 * @export
 * @param {ContactOption<[], unknown>} [options]
 * @returns {Promise<unknown>}
 */
export declare function getMobileContacts(options?: ContactOption<[], unknown>): Promise<unknown>;
/**
 * 通过用户域id和用户id获取这个用户的详细信息
 *
 * @export
 * @param {ContactOption<GetUserInfoByUserIdParams, GetUserInfoByUserIdRes>} [options]
 * @returns {Promise<GetUserInfoByUserIdRes>}
 */
export declare function getUserInfoByUserId(options?: ContactOption<GetUserInfoByUserIdParams, GetUserInfoByUserIdRes>): Promise<GetUserInfoByUserIdRes>;
/**
 * 通过用户username展示这个用户的详情页面
 *
 * @export
 * @param {ContactOption<ShowUserInfoByUsernameParams, unknown>} [options]
 * @returns {Promise<unknown>}
 */
export declare function showUserInfoByUsername(options?: ContactOption<ShowUserInfoByUsernameParams, unknown>): Promise<unknown>;
/**
 * 通过群组id打开该群组的聊天页面，并且可以自定义发送应用所支持的消息
 *
 * @export
 * @param {ContactOption<OpenDiscussionByIdParams, unknown>} [options]
 * @returns {Promise<unknown>}
 */
export declare function openDiscussionById(options?: ContactOption<OpenDiscussionByIdParams, unknown>): Promise<unknown>;
/**
 * 通过调用原生选人界面，选择人员，创建群组，并且返回相关群组信息
 *
 * @export
 * @param {ContactOption<[], unknown>} [options]
 * @returns {Promise<unknown>}
 */
export declare function createDiscussionChat(options?: ContactOption<[], unknown>): Promise<unknown>;
/**
 * 通过应用id和orgId的，打开改组织下某个应用聊天界面
 *
 * @export
 * @param {ContactOption<ShowAppChatViewParams[], unknown>} [options]
 * @returns {Promise<unknown>}
 */
export declare function showAppChatViewById(options?: ContactOption<ShowAppChatViewParams[], unknown>): Promise<unknown>;
/**
 * 打开搜索页面
 *
 * @export
 * @param {ContactOption<[], unknown>} [options]
 * @returns {Promise<unknown>}
 */
export declare function searchInApp(options?: ContactOption<[], unknown>): Promise<unknown>;
/**
 * 根据组织id打开该组织下的应用列表页面
 *
 * @export
 * @param {ContactOption<ShowAppListByIdParams, unknown>} [options]
 * @returns {Promise<unknown>}
 */
export declare function showAppListById(options?: ContactOption<ShowAppListByIdParams, unknown>): Promise<unknown>;
/**
 * 打开通用选择人员界面, 多选用户或者雇员
 *
 * @export
 * @param {ContactOption<SelectContactsParams, unknown>} [options]
 * @returns {Promise<unknown>}
 */
export declare function selectContacts(options?: ContactOption<SelectContactsParams, unknown>): Promise<unknown>;
/**
 * 根据群组 id, 打开群组成员界面, 并进行选择
 *
 * @export
 * @param {ContactOption<SelectDiscussionMembersParams, SelectDiscussionMembersRes>} [options]
 * @returns {Promise<SelectDiscussionMembersRes>}
 */
export declare function selectDiscussionMembers(options?: ContactOption<SelectDiscussionMembersParams, SelectDiscussionMembersRes>): Promise<SelectDiscussionMembersRes>;
/**
 * 获取选人缓存数据
 *
 * @export
 * @param {ContactOption<[], SelectContactsCacheRes>} [options]
 * @returns {Promise<SelectContactsCacheRes>}
 */
export declare function selectContactsCache(options?: ContactOption<[], SelectContactsCacheRes>): Promise<SelectContactsCacheRes>;
