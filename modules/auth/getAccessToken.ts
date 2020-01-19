import * as core from '../core';
import { WORKPLUS_AUTH } from '../constants';
import { ExecOptions } from '../types/core';
import { GetAccessTokenRes } from '../types/auth';

export type AccessTokenOptions = ExecOptions<GetAccessTokenRes, void>;

/**
 * 获取accessToken
 * @description 当前登录用户的accessToken
 * @param {AuthOption<void, GetAccessTokenRes>} [options]
 * @module auth
 * @returns accesstoken
 */
export default function getAccessToken(options?: AccessTokenOptions): Promise<GetAccessTokenRes> {
  return core.exec<[], GetAccessTokenRes, void>(
    WORKPLUS_AUTH,
    'getAccessToken',
    [],
    options?.success,
    options?.fail,
  );
}
