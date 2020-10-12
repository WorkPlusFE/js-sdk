import * as core from '../core';
import { ContactOption, CurrentEmployeeInfoParams, CurrentEmployeeInfoRes } from '../types/contact';

import { WORKPLUS_CONTACT } from '../constants';

/**
 * 获取当前登录用户的某个组织里的雇员信息
 *
 * @export
 * @param {CurrentEmployeeInfoParams & ContactOption<CurrentEmployeeInfoRes>} [options]
 * @returns {Promise<CurrentEmployeeInfoRes>}
 */
export default function getCurrentEmployeeInfo(
  options?: CurrentEmployeeInfoParams & ContactOption<CurrentEmployeeInfoRes>,
): Promise<CurrentEmployeeInfoRes> {
  const args: CurrentEmployeeInfoParams = {
    orgCode: options?.orgCode || '',
  };
  return core.exec<CurrentEmployeeInfoParams, CurrentEmployeeInfoRes, unknown>(
    WORKPLUS_CONTACT,
    'getCurrentEmployeeInfo',
    [args],
    options?.success,
    options?.fail,
  );
}
