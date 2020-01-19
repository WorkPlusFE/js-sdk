import * as core from '../core';
import { WORKPLUS_AUTH } from '../constants';
import { ExecOptions } from '../types/core';
import { GetLoginUserInfoRes } from '../types/auth';

export type LoginUserInfoOptions = ExecOptions<GetLoginUserInfoRes, void>;

/**
 * 获取当前登录用户最基本详情
 * @description 获取当前登录用户最基本详情，包括token，用户信息
 * @param {LoginUserInfoOptions} [options]
 * @module auth
 * @returns {Promise<GetLoginUserInfoRes>}
 */
export default function getLoginUserInfo(
  options?: LoginUserInfoOptions,
): Promise<GetLoginUserInfoRes> {
  return core.exec<[], GetLoginUserInfoRes, void>(
    WORKPLUS_AUTH,
    'getLoginUserInfo',
    [],
    options?.success,
    options?.fail,
  );
}
