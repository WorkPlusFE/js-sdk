import * as core from '../core';
import { WORKPLUS_AUTH } from '../constants';
import { ExecOptions } from '../types/core';
import { GetUserTicketRes } from '../types/auth';

export type UserTicketOptions = ExecOptions<GetUserTicketRes, void>;

/**
 * 获取临时ticket
 * @description 为当前登录用户获取一个临时性的ticket
 * @param {UserTicketOptions} [options]
 * @module auth
 * @returns ticket
 */
export default function getUserTicket(options?: UserTicketOptions): Promise<GetUserTicketRes> {
  return core.exec<[], GetUserTicketRes, void>(
    WORKPLUS_AUTH,
    'getUserTicket',
    [],
    options?.success,
    options?.fail,
  );
}
