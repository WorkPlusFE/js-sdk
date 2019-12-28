import * as core from '../core';
import { WORKPLUS_AUTH } from '../constants';
import { AuthOption, GetTenantIDRes } from '../types/auth';

/**
 * 获取当前租户id，即域id
 *
 * @export
 * @param {AuthOption<void, GetTenantIDRes>} [options]
 * @returns
 */
export default function getTenantID(
  options?: AuthOption<void, GetTenantIDRes>,
): Promise<GetTenantIDRes> {
  return core.exec<void, GetTenantIDRes, unknown>(
    WORKPLUS_AUTH,
    'getTenantID',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
