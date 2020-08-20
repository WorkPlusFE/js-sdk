export interface GetUserTicketRes {
  /** 申请到的用户ticket */
  user_ticket: string;
}

export interface GetServerInfoRes {
  /** app后台地址 */
  api_url: string;
}

export interface GetTenantIDRes {
  /** 当前的域id */
  domain_id?: string;
  /** 当前的域id, v2数据 */
  tenant_id?: string;
}

export interface BiometricRes {
  /** 0 表示生物认证成功, 2 表示用户取消了设置 */
  code: number;
  /** 描述信息 */
  message: string;
}
