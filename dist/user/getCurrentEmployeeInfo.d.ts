import { ContactOption, CurrentEmployeeInfoParams, CurrentEmployeeInfoRes } from '../types/contact';
/**
 * 获取当前登录用户的某个组织里的雇员信息
 *
 * @export
 * @param {CurrentEmployeeInfoParams & ContactOption<CurrentEmployeeInfoRes>} [options]
 * @returns {Promise<CurrentEmployeeInfoRes>}
 */
export default function getCurrentEmployeeInfo(options: CurrentEmployeeInfoParams & ContactOption<CurrentEmployeeInfoRes>): Promise<CurrentEmployeeInfoRes>;
