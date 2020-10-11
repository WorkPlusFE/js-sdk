import * as core from '../core';
import { SingleContactRes, ContactOption, SingleContactParams } from '../types/contact';
import { WORKPLUS_CONTACT } from '../constants';

/**
 * 单选联系人
 *
 * @export
 * @param {SingleContactParams & ContactOption<SingleContactRes>} [options]
 * @returns {Promise<SingleContactRes>}
 */
export default function getSingleContact(
  options?: SingleContactParams & ContactOption<SingleContactRes>,
): Promise<SingleContactRes> {
  const args: SingleContactParams = {
    hideMe: options?.hideMe || false,
    filterSenior: options?.filterSenior || 1,
  };
  return core.exec<SingleContactParams, SingleContactRes, unknown>(
    WORKPLUS_CONTACT,
    'getContact',
    [args],
    options?.success,
    options?.fail,
    false,
  );
}
