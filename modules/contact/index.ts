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
  return SDK.sendEvent<SingleContactParams, SingleContactRes, any>(
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
  return SDK.sendEvent<ContactsParams, ContactsRes, any>(
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
  return SDK.sendEvent<EmployeesFromOrgParams, CurrentEmployeeInfoRes, any>(
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
  return SDK.sendEvent<CurrentUserInfoParams, CurrentUserInfoRes, any>(
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
  return SDK.sendEvent<CurrentEmployeeInfoParams, CurrentEmployeeInfoRes, any>(
    SERVICE_KEY,
    'getCurrentEmployeeInfo',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}

export function showUserChatViewByUser(
  options?: ContactOption<ShowUserChatViewByUserParams, any>,
): Promise<any> {
  return SDK.sendEvent<ShowUserChatViewByUserParams, any, any>(
    SERVICE_KEY,
    'showUserChatViewByUser',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}

export function getMobileContacts(options?: ContactOption<[], any>): Promise<any> {
  return SDK.sendEvent<[], any, any>(
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
  return SDK.sendEvent<GetUserInfoByUserIdParams, GetUserInfoByUserIdRes, any>(
    SERVICE_KEY,
    'getUserInfoByUserId',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}

export function showUserInfoByUsername(
  options?: ContactOption<ShowUserInfoByUsernameParams, any>,
): Promise<any> {
  return SDK.sendEvent<ShowUserInfoByUsernameParams, any, any>(
    SERVICE_KEY,
    'showUserInfoByUsername',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}

export function openDiscussionById(
  options?: ContactOption<OpenDiscussionByIdParams, any>,
): Promise<any> {
  return SDK.sendEvent<OpenDiscussionByIdParams, any, any>(
    SERVICE_KEY,
    'openDiscussionById',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}

export function createDiscussionChat(options?: ContactOption<[], any>): Promise<any> {
  return SDK.sendEvent<[], any, any>(
    SERVICE_KEY,
    'createDiscussionChat',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}

export function showAppChatViewById(
  options?: ContactOption<ShowAppChatViewParams[], any>,
): Promise<any> {
  return SDK.sendEvent<ShowAppChatViewParams[], any, any>(
    SERVICE_KEY,
    'showAppChatView',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}

export function searchInApp(options?: ContactOption<[], any>): Promise<any> {
  return SDK.sendEvent<[], any, any>(
    SERVICE_KEY,
    'searchInApp',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}

export function showAppListById(options?: ContactOption<ShowAppListByIdParams, any>): Promise<any> {
  return SDK.sendEvent<ShowAppListByIdParams, any, any>(
    SERVICE_KEY,
    'showAppListById',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}

export function selectContacts(options?: ContactOption<SelectContactsParams, any>): Promise<any> {
  return SDK.sendEvent<SelectContactsParams, any, any>(
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
  return SDK.sendEvent<SelectDiscussionMembersParams, SelectDiscussionMembersRes, any>(
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
  return SDK.sendEvent<[], SelectContactsCacheRes, any>(
    SERVICE_KEY,
    'selectContactsCache',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
