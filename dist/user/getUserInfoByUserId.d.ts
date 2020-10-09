import { ContactOption, GetUserInfoByUserIdParams, GetUserInfoByUserIdRes } from '../types/contact';
/**
 * 通过用户域id和用户id获取这个用户的详细信息
 *
 * @export
 * @param {GetUserInfoByUserIdParams & ContactOption<GetUserInfoByUserIdRes>} [options]
 * @returns {Promise<GetUserInfoByUserIdRes>}
 */
export default function getUserInfoByUserId(options: GetUserInfoByUserIdParams & ContactOption<GetUserInfoByUserIdRes>): Promise<GetUserInfoByUserIdRes>;
