import { SingleContactRes, ContactOption, SingleContactParams } from '../types/contact';
/**
 * 单选联系人
 *
 * @export
 * @param {SingleContactParams & ContactOption<SingleContactRes>} [options]
 * @returns {Promise<SingleContactRes>}
 */
export default function getSingleContact(options?: SingleContactParams & ContactOption<SingleContactRes>): Promise<SingleContactRes>;
