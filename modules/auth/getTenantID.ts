import * as core from '../core';
import { WORKPLUS_AUTH } from '../constants';
import { ExecOptions } from '../types/core';
import { GetTenantIDRes } from '../types/auth';

export type TenantIdOptions = ExecOptions<GetTenantIDRes, void>;

/**
 * 获取当前租户id，即域id
 * @description 获取当前租户id，即域id
 * @param {TenantIdOptions} [options]
 * @module auth
 * @returns 域ID
 */
export default function getTenantID(options?: TenantIdOptions): Promise<GetTenantIDRes> {
  return core.exec<void, GetTenantIDRes, void>(
    WORKPLUS_AUTH,
    'getTenantID',
    [],
    options?.success,
    options?.fail,
  );
}
