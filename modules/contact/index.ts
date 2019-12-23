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
} from '../types/contact';

const SERVICE_KEY = 'WorkPlus_Contact';

export function getSingleContact(options?: ContactOption<SingleContactParams, SingleContactRes>) {
  return SDK.sendEvent<SingleContactRes, any>(
    SERVICE_KEY,
    'getContact',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}

export function getContacts(options?: ContactOption<ContactsParams, ContactsRes>) {
  return SDK.sendEvent<ContactsRes, any>(
    SERVICE_KEY,
    'getContacts',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}

export function getEmployeesFromCurrentOrg(
  options?: ContactOption<EmployeesFromOrgParams, ContactsRes>,
) {
  return SDK.sendEvent<SingleContactRes, any>(
    SERVICE_KEY,
    'getEmployeesFromCurrentOrg',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}

export function getCurrentUserInfo(
  options?: ContactOption<CurrentUserInfoParams, CurrentUserInfoRes>,
) {
  return SDK.sendEvent<CurrentUserInfoRes, any>(
    SERVICE_KEY,
    'getCurrentUserInfo',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}

export function getCurrentEmployeeInfo(
  options?: ContactOption<CurrentEmployeeInfoParams, CurrentEmployeeInfoRes>,
) {
  return SDK.sendEvent<CurrentEmployeeInfoRes, any>(
    SERVICE_KEY,
    'getCurrentEmployeeInfo',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}

export function showUserChatViewByUser(
  options?: ContactOption<ShowUserChatViewByUserParams, undefined>,
) {
  return SDK.sendEvent<undefined, any>(
    SERVICE_KEY,
    'showUserChatViewByUser',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}

export function getMobileContacts(options?: ContactOption<[], any>) {
  return SDK.sendEvent<any, any>(
    SERVICE_KEY,
    'getMobileContacts',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}

export function getUserInfoByUserId(
  options?: ContactOption<GetUserInfoByUserIdParams, GetUserInfoByUserIdRes>,
) {
  return SDK.sendEvent<GetUserInfoByUserIdRes, any>(
    SERVICE_KEY,
    'getUserInfoByUserId',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}

export function showUserInfoByUsername(options?: ContactOption<ShowUserInfoByUsernameParams, any>) {
  return SDK.sendEvent<undefined, any>(
    SERVICE_KEY,
    'showUserInfoByUsername',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}

export function openDiscussionById(options?: ContactOption<OpenDiscussionByIdParams, any>) {
  return SDK.sendEvent<undefined, any>(
    SERVICE_KEY,
    'openDiscussionById',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}

export function createDiscussionChat(options?: ContactOption<[], any>) {
  return SDK.sendEvent<undefined, any>(
    SERVICE_KEY,
    'createDiscussionChat',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}

export function showAppChatViewById(options?: ContactOption<ShowAppChatViewParams[], any>) {
  return SDK.sendEvent<undefined, any>(
    SERVICE_KEY,
    'showAppChatView',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}

export function searchInApp(options?: ContactOption<[], any>) {
  return SDK.sendEvent<undefined, any>(
    SERVICE_KEY,
    'searchInApp',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}

export function showAppListById(options?: ContactOption<ShowAppListByIdParams[], any>) {
  return SDK.sendEvent<undefined, any>(
    SERVICE_KEY,
    'showAppListById',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}

export function selectContacts(options?: ContactOption<SelectContactsParams[], any>) {
  return SDK.sendEvent<undefined, any>(
    SERVICE_KEY,
    'selectContacts',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}

export function selectDiscussionMembers(
  options?: ContactOption<SelectDiscussionMembersParams[], SelectDiscussionMembersRes>,
) {
  return SDK.sendEvent<SelectDiscussionMembersRes, any>(
    SERVICE_KEY,
    'selectDiscussionMembers',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}

export function selectContactsCache(options?: ContactOption<[], SelectContactsCacheRes>) {
  return SDK.sendEvent<SelectContactsCacheRes, any>(
    SERVICE_KEY,
    'selectContactsCache',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
