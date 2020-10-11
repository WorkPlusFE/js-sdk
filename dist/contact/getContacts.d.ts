import { ContactOption, ContactsParams, ContactsRes } from '../types/contact';
export declare type ContactsOptions = ContactsParams & ContactOption<ContactsRes>;
/**
 * 打开当前组织的联系人列表，选择多个联系人
 *
 * @export
 * @param {ContactsOptions} [options]
 * @returns {Promise<ContactsRes>}
 */
export default function getContacts(options?: ContactsOptions): Promise<ContactsRes>;
