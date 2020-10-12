import * as core from '../core';
import { ContactOption, CurrentUserInfoParams, CurrentUserInfoRes } from '../types/contact';
import { WORKPLUS_CONTACT } from '../constants';

/**
 * 获取当前登录用户详细信息
 *
 * @export
 * @param {CurrentUserInfoParams & ContactOption<CurrentUserInfoRes>} [options]
 * @returns {Promise<CurrentUserInfoRes>}
 */
export default function getCurrentUserInfo(
  options?: CurrentUserInfoParams & ContactOption<CurrentUserInfoRes>,
): Promise<CurrentUserInfoRes> {
  const args: CurrentUserInfoParams = {
    needEmpInfo: options?.needEmpInfo || false,
  };
  return core.exec<CurrentUserInfoParams, CurrentUserInfoRes, unknown>(
    WORKPLUS_CONTACT,
    'getCurrentUserInfo',
    [args],
    options?.success,
    options?.fail,
  );
}
