import { ExecOptions } from '../types/core';
import { GetUserTicketRes } from '../types/auth';
export declare type UserTicketOptions = ExecOptions<GetUserTicketRes, void>;
/**
 * 获取临时ticket
 * @description 为当前登录用户获取一个临时性的ticket
 * @param {UserTicketOptions} [options]
 * @module auth
 * @returns ticket
 */
export default function getUserTicket(options?: UserTicketOptions): Promise<GetUserTicketRes>;
