import { ContactOption, ShowAppListByIdParams } from '../types/contact';
/**
 * 根据组织id打开该组织下的应用列表页面
 *
 * @export
 * @param {ContactOption<ShowAppListByIdParams, unknown>} [options]
 * @returns {Promise<unknown>}
 */
export default function showAppListById(options?: ContactOption<ShowAppListByIdParams, unknown>): Promise<unknown>;
