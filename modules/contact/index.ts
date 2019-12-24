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

export function getMobileContacts(options?: ContactOption<[], unknown>): Promise<unknown> {
  return SDK.sendEvent<[], unknown, unknown>(
    SERVICE_KEY,
    'getMobileContacts',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}

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

export function createDiscussionChat(options?: ContactOption<[], unknown>): Promise<unknown> {
  return SDK.sendEvent<[], unknown, unknown>(
    SERVICE_KEY,
    'createDiscussionChat',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}

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

export function searchInApp(options?: ContactOption<[], unknown>): Promise<unknown> {
  return SDK.sendEvent<[], unknown, unknown>(
    SERVICE_KEY,
    'searchInApp',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}

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
