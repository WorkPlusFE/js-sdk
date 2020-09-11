import { SingleContactRes, ContactOption, SingleContactParams } from '../types/contact';
/**
 * 单选联系人
 *
 * @export
 * @param {ContactOption<SingleContactParams, SingleContactRes>} [options]
 * @returns {Promise<SingleContactRes>}
 */
export default function getSingleContact(options?: ContactOption<SingleContactParams, SingleContactRes>): Promise<SingleContactRes>;
