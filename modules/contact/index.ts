import SDK from '../sdk';
import {
  SingleContactRes,
  ContactOption,
  SingleContactParams,
  ContactsParams,
  ContactsRes,
  EmployeesFromOrgParams,
  CurrentUserInfoParams,
  CurrentUserInfoRes,
  CurrentEmployeeInfoParams,
  CurrentEmployeeInfoRes,
  ShowUserChatViewByUserParams,
  ShowUserInfoByUsernameParams,
  OpenDiscussionByIdParams,
  SelectDiscussionMembersParams,
  SelectDiscussionMembersRes,
  SelectContactsCacheRes,
  GetUserInfoByUserIdParams,
  GetUserInfoByUserIdRes,
  ShowAppChatViewParams,
  ShowAppListByIdParams,
  SelectContactsParams,
} from '../types/contact';

const SERVICE_KEY = 'WorkPlus_Contact';

/**
 * 单选联系人
 *
 * @export
 * @param {ContactOption<SingleContactParams, SingleContactRes>} [options]
 * @returns {Promise<SingleContactRes>}
 */
export function getSingleContact(
  options?: ContactOption<SingleContactParams, SingleContactRes>,
): Promise<SingleContactRes> {
  return SDK.sendEvent<SingleContactParams, SingleContactRes, unknown>(
    SERVICE_KEY,
    'getContact',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}

/**
 * 打开当前组织的联系人列表，选择多个联系人
 *
 * @export
 * @param {ContactOption<ContactsParams, ContactsRes>} [options]
 * @returns {Promise<ContactsRes>}
 */
export function getContacts(
  options?: ContactOption<ContactsParams, ContactsRes>,
): Promise<ContactsRes> {
  return SDK.sendEvent<ContactsParams, ContactsRes, unknown>(
    SERVICE_KEY,
    'getContacts',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}

/**
 * 打开当前组织的联系人列表，选择多个联系人
 *
 * @export
 * @param {ContactOption<EmployeesFromOrgParams, CurrentEmployeeInfoRes>} [options]
 * @returns {Promise<CurrentEmployeeInfoRes>}
 */
export function getEmployeesFromCurrentOrg(
  options?: ContactOption<EmployeesFromOrgParams, CurrentEmployeeInfoRes>,
): Promise<CurrentEmployeeInfoRes> {
  return SDK.sendEvent<EmployeesFromOrgParams, CurrentEmployeeInfoRes, unknown>(
    SERVICE_KEY,
    'getEmployeesFromCurrentOrg',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}

/**
 * 获取当前登录用户详细信息
 *
 * @export
 * @param {ContactOption<CurrentUserInfoParams, CurrentUserInfoRes>} [options]
 * @returns {Promise<CurrentUserInfoRes>}
 */
export function getCurrentUserInfo(
  options?: ContactOption<CurrentUserInfoParams, CurrentUserInfoRes>,
): Promise<CurrentUserInfoRes> {
  return SDK.sendEvent<CurrentUserInfoParams, CurrentUserInfoRes, unknown>(
    SERVICE_KEY,
    'getCurrentUserInfo',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}

/**
 * 获取当前登录用户的某个组织里的雇员信息
 *
 * @export
 * @param {ContactOption<CurrentEmployeeInfoParams, CurrentEmployeeInfoRes>} [options]
 * @returns {Promise<CurrentEmployeeInfoRes>}
 */
export function getCurrentEmployeeInfo(
  options?: ContactOption<CurrentEmployeeInfoParams, CurrentEmployeeInfoRes>,
): Promise<CurrentEmployeeInfoRes> {
  return SDK.sendEvent<CurrentEmployeeInfoParams, CurrentEmployeeInfoRes, unknown>(
    SERVICE_KEY,
    'getCurrentEmployeeInfo',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}

/**
 * 轻应用输入userId，domianId, 跳转到workplus与该用户的聊天页面
 *
 * @export
 * @param {ContactOption<ShowUserChatViewByUserParams, unknown>} [options]
 * @returns {Promise<unknown>}
 */
export function showUserChatViewByUser(
  options?: ContactOption<ShowUserChatViewByUserParams, unknown>,
): Promise<unknown> {
  return SDK.sendEvent<ShowUserChatViewByUserParams, unknown, unknown>(
    SERVICE_KEY,
    'showUserChatViewByUser',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}

/**
 * 获取手机通讯录联系人的列表
 *
 * @export
 * @param {ContactOption<[], unknown>} [options]
 * @returns {Promise<unknown>}
 */
export function getMobileContacts(options?: ContactOption<[], unknown>): Promise<unknown> {
  return SDK.sendEvent<[], unknown, unknown>(
    SERVICE_KEY,
    'getMobileContacts',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}

/**
 * 通过用户域id和用户id获取这个用户的详细信息
 *
 * @export
 * @param {ContactOption<GetUserInfoByUserIdParams, GetUserInfoByUserIdRes>} [options]
 * @returns {Promise<GetUserInfoByUserIdRes>}
 */
export function getUserInfoByUserId(
  options?: ContactOption<GetUserInfoByUserIdParams, GetUserInfoByUserIdRes>,
): Promise<GetUserInfoByUserIdRes> {
  return SDK.sendEvent<GetUserInfoByUserIdParams, GetUserInfoByUserIdRes, unknown>(
    SERVICE_KEY,
    'getUserInfoByUserId',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}

/**
 * 通过用户username展示这个用户的详情页面
 *
 * @export
 * @param {ContactOption<ShowUserInfoByUsernameParams, unknown>} [options]
 * @returns {Promise<unknown>}
 */
export function showUserInfoByUsername(
  options?: ContactOption<ShowUserInfoByUsernameParams, unknown>,
): Promise<unknown> {
  return SDK.sendEvent<ShowUserInfoByUsernameParams, unknown, unknown>(
    SERVICE_KEY,
    'showUserInfoByUsername',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}

/**
 * 通过群组id打开该群组的聊天页面，并且可以自定义发送应用所支持的消息
 *
 * @export
 * @param {ContactOption<OpenDiscussionByIdParams, unknown>} [options]
 * @returns {Promise<unknown>}
 */
export function openDiscussionById(
  options?: ContactOption<OpenDiscussionByIdParams, unknown>,
): Promise<unknown> {
  return SDK.sendEvent<OpenDiscussionByIdParams, unknown, unknown>(
    SERVICE_KEY,
    'openDiscussionById',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}

/**
 * 通过调用原生选人界面，选择人员，创建群组，并且返回相关群组信息
 *
 * @export
 * @param {ContactOption<[], unknown>} [options]
 * @returns {Promise<unknown>}
 */
export function createDiscussionChat(options?: ContactOption<[], unknown>): Promise<unknown> {
  return SDK.sendEvent<[], unknown, unknown>(
    SERVICE_KEY,
    'createDiscussionChat',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}

/**
 * 通过应用id和orgId的，打开改组织下某个应用聊天界面
 *
 * @export
 * @param {ContactOption<ShowAppChatViewParams[], unknown>} [options]
 * @returns {Promise<unknown>}
 */
export function showAppChatViewById(
  options?: ContactOption<ShowAppChatViewParams[], unknown>,
): Promise<unknown> {
  return SDK.sendEvent<ShowAppChatViewParams[], unknown, unknown>(
    SERVICE_KEY,
    'showAppChatView',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}

/**
 * 打开搜索页面
 *
 * @export
 * @param {ContactOption<[], unknown>} [options]
 * @returns {Promise<unknown>}
 */
export function searchInApp(options?: ContactOption<[], unknown>): Promise<unknown> {
  return SDK.sendEvent<[], unknown, unknown>(
    SERVICE_KEY,
    'searchInApp',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}

/**
 * 根据组织id打开该组织下的应用列表页面
 *
 * @export
 * @param {ContactOption<ShowAppListByIdParams, unknown>} [options]
 * @returns {Promise<unknown>}
 */
export function showAppListById(
  options?: ContactOption<ShowAppListByIdParams, unknown>,
): Promise<unknown> {
  return SDK.sendEvent<ShowAppListByIdParams, unknown, unknown>(
    SERVICE_KEY,
    'showAppListById',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}

/**
 * 打开通用选择人员界面, 多选用户或者雇员
 *
 * @export
 * @param {ContactOption<SelectContactsParams, unknown>} [options]
 * @returns {Promise<unknown>}
 */
export function selectContacts(
  options?: ContactOption<SelectContactsParams, unknown>,
): Promise<unknown> {
  return SDK.sendEvent<SelectContactsParams, unknown, unknown>(
    SERVICE_KEY,
    'selectContacts',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}

/**
 * 根据群组 id, 打开群组成员界面, 并进行选择
 *
 * @export
 * @param {ContactOption<SelectDiscussionMembersParams, SelectDiscussionMembersRes>} [options]
 * @returns {Promise<SelectDiscussionMembersRes>}
 */
export function selectDiscussionMembers(
  options?: ContactOption<SelectDiscussionMembersParams, SelectDiscussionMembersRes>,
): Promise<SelectDiscussionMembersRes> {
  return SDK.sendEvent<SelectDiscussionMembersParams, SelectDiscussionMembersRes, unknown>(
    SERVICE_KEY,
    'selectDiscussionMembers',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}

/**
 * 获取选人缓存数据
 *
 * @export
 * @param {ContactOption<[], SelectContactsCacheRes>} [options]
 * @returns {Promise<SelectContactsCacheRes>}
 */
export function selectContactsCache(
  options?: ContactOption<[], SelectContactsCacheRes>,
): Promise<SelectContactsCacheRes> {
  return SDK.sendEvent<[], SelectContactsCacheRes, unknown>(
    SERVICE_KEY,
    'selectContactsCache',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
