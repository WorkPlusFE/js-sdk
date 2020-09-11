import { ContactOption, CurrentUserInfoParams, CurrentUserInfoRes } from '../types/contact';
/**
 * 获取当前登录用户详细信息
 *
 * @export
 * @param {ContactOption<CurrentUserInfoParams, CurrentUserInfoRes>} [options]
 * @returns {Promise<CurrentUserInfoRes>}
 */
export default function getCurrentUserInfo(options?: ContactOption<CurrentUserInfoParams, CurrentUserInfoRes>): Promise<CurrentUserInfoRes>;
