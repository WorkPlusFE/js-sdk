import { ContactOption } from '../types/contact';
/**
 * 获取手机通讯录联系人的列表
 *
 * @export
 * @param {ContactOption<[], unknown>} [options]
 * @returns {Promise<unknown>}
 */
export default function getMobileContacts(options?: ContactOption<[], unknown>): Promise<unknown>;
