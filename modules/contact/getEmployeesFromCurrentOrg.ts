import * as core from '../core';
import { ContactOption, EmployeesFromOrgParams, CurrentEmployeeInfoRes } from '../types/contact';
import { WORKPLUS_CONTACT } from '../constants';

/**
 * 打开当前组织的联系人列表，选择多个联系人
 *
 * @export
 * @param {EmployeesFromOrgParams & ContactOption<CurrentEmployeeInfoRes>} [options]
 * @returns {Promise<CurrentEmployeeInfoRes>}
 */
export default function getEmployeesFromCurrentOrg(
  options?: EmployeesFromOrgParams & ContactOption<CurrentEmployeeInfoRes>,
): Promise<CurrentEmployeeInfoRes> {
  const args: EmployeesFromOrgParams = {
    selectedEmpList: options?.selectedEmpList || [],
    hideMe: options?.hideMe || false,
    filterSenior: options?.filterSenior || 1,
  };
  return core.exec<EmployeesFromOrgParams, CurrentEmployeeInfoRes, unknown>(
    WORKPLUS_CONTACT,
    'getEmployeesFromCurrentOrg',
    [args],
    options?.success,
    options?.fail,
    false,
  );
}
