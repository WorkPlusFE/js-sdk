export interface AuthOption<D, R> {
  data: D[];
  success: (res: R) => void;
  fail: (err: unknown) => void;
}

export interface GetUserTicketRes {
  user_ticket: string;
}

export interface GetAccessTokenRes {
  access_token: string;
}

export interface GetServerInfoRes {
  api_url: string;
}

export interface GetTenantIDRes {
  tenant_id: string;
}

export interface GetLoginUserInfoRes {
  login_token: Logintoken;
  login_user: Loginuser;
}

interface Loginuser {
  username: string;
  name: string;
  avatar: string;
}

interface Logintoken {
  access_token: string;
  refresh_token: string;
  issued_time: string;
  expire_time: string;
  client_id: string;
}
