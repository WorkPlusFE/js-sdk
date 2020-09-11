import { ExecOptions } from '../types/core';
import { GetTenantIDRes } from '../types/auth';
export declare type TenantIdOptions = ExecOptions<GetTenantIDRes, void>;
/**
 * 获取当前租户id，即域id
 * @description 获取当前租户id，即域id
 * @param {TenantIdOptions} [options]
 * @module auth
 * @returns 域ID
 */
export default function getTenantID(options?: TenantIdOptions): Promise<GetTenantIDRes>;
