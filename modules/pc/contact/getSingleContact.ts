import * as core from '../../core';
import { ContactOption, SingleContactRes, SingleContactParams } from '../types/contact';
import { WORKPLUS_CONTACT } from '../../constants';

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
  };
  return core.exec<SingleContactParams, SingleContactRes, unknown>(
    WORKPLUS_CONTACT,
    'getSingleContact',
    [args],
    options?.success,
    options?.fail,
    false,
  );
}