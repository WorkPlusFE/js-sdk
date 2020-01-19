export interface GetUserTicketRes {
  /** 申请到的用户ticket */
  user_ticket: string;
}

export interface GetAccessTokenRes {
  /** 用户登陆的access_token */
  access_token: string;
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

export interface GetLoginUserInfoRes {
  /** 当前登陆的accessToken信息 */
  login_token: LoginToken;
  /** 当前登录的用户信息 */
  login_user: LoginUser;
}

interface LoginUser {
  /** 用户注册username */
  username: string;
  /** 用户名 */
  name: string;
  /** 用户头像 */
  avatar: string;
}

interface LoginToken {
  /** 当前登陆的access_token */
  access_token: string;
  /** 刷新token */
  refresh_token: string;
  /** 生效时间 */
  issued_time: string;
  /** 过期时间 */
  expire_time: string;
  /** 所持有的用户的用户id */
  client_id: string;
}
