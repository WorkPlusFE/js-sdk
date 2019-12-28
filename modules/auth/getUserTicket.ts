import * as core from '../core';
import { WORKPLUS_AUTH } from '../constants';
import { AuthOption, GetUserTicketRes } from '../types/auth';

/**
 * 获取临时ticket接口
 *
 * @export
 * @param {AuthOption<void, GetUserTicketRes>} [options]
 * @returns
 */
export default function getUserTicket(
  options?: AuthOption<void, GetUserTicketRes>,
): Promise<GetUserTicketRes> {
  return core.exec<void, GetUserTicketRes, unknown>(
    WORKPLUS_AUTH,
    'getUserTicket',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
