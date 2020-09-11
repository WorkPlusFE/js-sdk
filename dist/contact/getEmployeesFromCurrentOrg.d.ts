import { ContactOption, EmployeesFromOrgParams, CurrentEmployeeInfoRes } from '../types/contact';
/**
 * 打开当前组织的联系人列表，选择多个联系人
 *
 * @export
 * @param {ContactOption<EmployeesFromOrgParams, CurrentEmployeeInfoRes>} [options]
 * @returns {Promise<CurrentEmployeeInfoRes>}
 */
export default function getEmployeesFromCurrentOrg(options?: ContactOption<EmployeesFromOrgParams, CurrentEmployeeInfoRes>): Promise<CurrentEmployeeInfoRes>;
