import { ContactOption, ShowUserInfoByUsernameParams } from '../types/contact';
/**
 * 通过用户username展示这个用户的详情页面
 *
 * @export
 * @param {ContactOption<ShowUserInfoByUsernameParams, unknown>} [options]
 * @returns {Promise<unknown>}
 */
export default function showUserInfoByUsername(options?: ContactOption<ShowUserInfoByUsernameParams, unknown>): Promise<unknown>;
