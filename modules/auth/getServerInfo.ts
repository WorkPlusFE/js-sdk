import * as core from '../core';
import { WORKPLUS_AUTH } from '../constants';
import { AuthOption, GetServerInfoRes } from '../types/auth';

/**
 * 获取当前app请求后台api地址
 *
 * @export
 * @param {AuthOption<void, GetServerInfoRes>} [options]
 * @returns
 */
export default function getServerInfo(
  options?: AuthOption<void, GetServerInfoRes>,
): Promise<getServerInfoRes> {
  return core.exec<void, GetServerInfoRes, unknown>(
    WORKPLUS_AUTH,
    'getServerInfo',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
