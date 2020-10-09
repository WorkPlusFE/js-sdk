import { ContactOption, CurrentUserInfoParams, CurrentUserInfoRes } from '../types/contact';
/**
 * 获取当前登录用户详细信息
 *
 * @export
 * @param {CurrentUserInfoParams & ContactOption<CurrentUserInfoRes>} [options]
 * @returns {Promise<CurrentUserInfoRes>}
 */
export default function getCurrentUserInfo(options: CurrentUserInfoParams & ContactOption<CurrentUserInfoRes>): Promise<CurrentUserInfoRes>;
