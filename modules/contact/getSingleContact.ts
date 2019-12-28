import * as core from '../core';
import { SingleContactRes, ContactOption, SingleContactParams } from '../types/contact';
import { WORKPLUS_CONTACT } from '../constants';

/**
 * 单选联系人
 *
 * @export
 * @param {ContactOption<SingleContactParams, SingleContactRes>} [options]
 * @returns {Promise<SingleContactRes>}
 */
export default function getSingleContact(
  options?: ContactOption<SingleContactParams, SingleContactRes>,
): Promise<SingleContactRes> {
  return core.exec<SingleContactParams, SingleContactRes, unknown>(
    WORKPLUS_CONTACT,
    'getContact',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
