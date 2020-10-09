import { ContactOption, ShowUserInfoByUsernameParams } from '../types/contact';
/**
 * 通过用户username展示这个用户的详情页面
 *
 * @export
 * @param {ShowUserInfoByUsernameParams & ContactOption<unknown>} [options]
 * @returns {Promise<unknown>}
 */
export default function showUserInfoByUsername(options: ShowUserInfoByUsernameParams & ContactOption<unknown>): Promise<unknown>;
