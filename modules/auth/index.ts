import faceBizValid from './faceBizValid';
import getAccessToken from './getAccessToken';
import getLoginUserInfo from './getLoginUserInfo';
import getServerInfo from './getServerInfo';
import getTenantID from './getTenantID';
import getUserTicket from './getUserTicket';
import onAccessTokenOverdue from './onAccessTokenOverdue';

export {
  /** 人脸识别 */
  faceBizValid,
  /** 获取accessToken */
  getAccessToken,
  /** 获取当前登录用户最基本详情 */
  getLoginUserInfo,
  /** 获取当前app请求后台api地址 */
  getServerInfo,
  /** 获取当前的租户id */
  getTenantID,
  /** 获取临时ticket */
  getUserTicket,
  /** 退出当前账号 */
  onAccessTokenOverdue,
};
