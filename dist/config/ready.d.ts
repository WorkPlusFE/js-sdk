import { ConfigAuthRes } from '../types/config';
/**
 * 鉴权 ready
 * @description 返回当前鉴权状态, 让前端用以判断是否可以正常调用方法
 * @param {callback} [options]
 * @module config
 * @returns {ConfigAuthRes}
 */
export default function ready(callback: Function): Promise<ConfigAuthRes>;
