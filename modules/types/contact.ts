export interface SingleContactParams {
  hideMe?: false;
  filterSenior?: 1 | 0;
}

export interface ContactOption<R> {
  success?: (res: R) => void;
  fail?: (err: unknown) => void;
}

export interface SingleContactRes {
  identifier: string;
  accountName: string;
  tenantId: string;
  post: string;
  job_title: string;
  org_name: string;
  com_name: string;
  user_id: string;
  domain_id: string;
  username: string;
  name: string;
  userId: string;
  domainId: string;
  avatar: string;
  mobile: string;
  email: string;
  gender: string;
  firstNameLetter: string;
  status: string;
  sort: string;
  jobTitle: string;
  orgName: string;
  corpName: string;
  positions: { [key: string]: unknown }[];
}

export interface ContactsParams {
  selectedContacts?: SelectedContact[];
  hideMe?: boolean;
  filterSenior?: 1 | 0;
}

export interface SelectedContact {
  identifier: string;
  accountName: string;
  tenantId: string;
  post: string;
  job_title: string;
  org_name: string;
  com_name: string;
  user_id: string;
  domain_id: string;
  username: string;
  name: string;
  userId: string;
  domainId: string;
  avatar: string;
  mobile: string;
  email: string;
  gender: string;
  firstNameLetter: string;
  status: string;
  sort: string;
  jobTitle: string;
  orgName: string;
  corpName: string;
  positions: { [key: string]: unknown }[];
}

export interface ContactsRes {
  identifier: string;
  accountName: string;
  tenantId: string;
  post: string;
  job_title: string;
  org_name: string;
  com_name: string;
  user_id: string;
  domain_id: string;
  username: string;
  name: string;
  userId: string;
  domainId: string;
  avatar: string;
  mobile: string;
  email: string;
  gender: string;
  firstNameLetter: string;
  status: string;
  sort: string;
  jobTitle: string;
  orgName: string;
  corpName: string;
  positions: { [key: string]: unknown }[];
}

export interface EmployeesFromOrgParams {
  selectedEmpList?: SelectedEmpList[];
  hideMe?: boolean;
  filterSenior?: 1 | 0;
}

interface SelectedEmpList {
  username: string;
  name: string;
  domainId: string;
  userId: string;
  avatar: string;
  mobile: string;
  email: string;
  gender: string;
  firstNameLetter: string;
  status: string;
  sort: string;
  post: string;
  jobTitle: string;
  orgName: string;
}

export interface CurrentUserInfoParams {
  needEmpInfo?: boolean;
}

export interface CurrentUserInfoRes {
  user_id: string;
  domain_id: string;
  username: string;
  name: string;
  nickname: string;
  initial: string;
  avatar: string;
  phone: string;
  email: string;
  gender: string;
  birthday: string;
  status: string;
  first_letter: string;
  more_info: string;
  employee: Employee;
}

interface Employee {
  domain_id: string;
  org_code: string;
  employee_type_id: string;
  employee_type: string;
  id: string;
  name: string;
  avatar: string;
  status: string;
  type: string;
  sort_order: string;
  user_id: string;
  senior: string;
  nickname: string;
  username: string;
  display_name: string;
  gender: string;
  pinyin: string;
  initial: string;
  mobile: string;
  created: string;
  last_modified: string;
  expired: string;
  disabled: string;
  positions: string;
  more_info: string;
  settings: string;
  properties: string;
  data_schemas: string;
  industry: string;
  email: string;
  sn: string;
  label: string;
  region: string;
  location: string;
  other_email: string;
  other_phone: string;
  work_phone: string;
  fax: string;
  tel: string;
  birthday: string;
}

export interface CurrentEmployeeInfoParams {
  orgCode?: string;
}

export interface CurrentEmployeeInfoRes {
  username: string;
  name: string;
  tenantId: string;
  userId: string;
  avatar: string;
  mobile: string;
  email: string;
  gender: string;
  firstNameLetter: string;
  status: string;
  sort: string;
  post: string;
  jobTitle: string;
  orgName: string;
}

export interface ShowUserChatViewByUserParams {
  userId: string;
  domainId: string;
  newWindow?: boolean;
}

export interface GetUserInfoByUserIdParams {
  user_id: string;
  domain_id: string;
}

export interface GetUserInfoByUserIdRes {
  user_id: string;
  domain_id: string;
  username: string;
  name: string;
  nickname: string;
  initial: string;
  avatar: string;
  phone: string;
  email: string;
  gender: string;
  birthday: string;
  status: string;
  first_letter: string;
  more_info: string;
}

export interface ShowUserInfoByUsernameParams {
  username: string;
}

export interface OpenDiscussionByIdParams {
  discussionId: string;
  newWindow?: boolean;
  body_type?: string;
  body?: Body;
}

export interface ShowAppChatViewParams {
  app_id: string;
  domain_id: string;
  org_id: string;
  session_type: string;
}

export interface ShowAppChatView {
  appId: string;
  domainId: string;
  orgId: string;
  sessionType: string;
}

export interface ShowAppListByIdParams {
  org_id: string;
}

export interface ShowAppListById {
  orgId: string;
}

export interface SelectContactsParams {
  filterSenior?: 1 | 0;
  maxCount?: number;
  selectedUsers?: unknown[];
  selectedEmployees?: unknown[];
}

export interface SelectContactsRes {
  user: unknown[];
  employee: unknown[];
}

export interface SelectDiscussionMembersParamsOrigin {
  discussion_id: string;
  members_selected?: unknown[];
}

export interface SelectDiscussionMembersParams {
  discussionId: string;
  membersSelected?: unknown[];
}

export interface SelectDiscussionMembersRes {
  members: unknown[];
}

export interface SelectContactsCacheRes {
  user: unknown[];
  employee: unknown[];
}
