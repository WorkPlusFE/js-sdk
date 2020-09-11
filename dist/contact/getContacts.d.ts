import { ContactOption, ContactsParams, ContactsRes } from '../types/contact';
/**
 * 打开当前组织的联系人列表，选择多个联系人
 *
 * @export
 * @param {ContactOption<ContactsParams, ContactsRes>} [options]
 * @returns {Promise<ContactsRes>}
 */
export default function getContacts(options?: ContactOption<ContactsParams, ContactsRes>): Promise<ContactsRes>;
