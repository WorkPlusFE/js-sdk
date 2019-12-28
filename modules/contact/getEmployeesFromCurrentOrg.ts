import * as core from '../core';

import { ContactOption, EmployeesFromOrgParams, CurrentEmployeeInfoRes } from '../types/contact';

import { WORKPLUS_CONTACT } from '../constants';

/**
 * 打开当前组织的联系人列表，选择多个联系人
 *
 * @export
 * @param {ContactOption<EmployeesFromOrgParams, CurrentEmployeeInfoRes>} [options]
 * @returns {Promise<CurrentEmployeeInfoRes>}
 */
export default function getEmployeesFromCurrentOrg(
  options?: ContactOption<EmployeesFromOrgParams, CurrentEmployeeInfoRes>,
): Promise<CurrentEmployeeInfoRes> {
  return core.exec<EmployeesFromOrgParams, CurrentEmployeeInfoRes, unknown>(
    WORKPLUS_CONTACT,
    'getEmployeesFromCurrentOrg',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
