import * as core from '../core';
import { WORKPLUS_CONFIG } from '../constants';
import { ConfigAuthRes } from '../types/config';

/**
 * 鉴权 ready
 * @description 返回当前鉴权状态, 让前端用以判断是否可以正常调用方法
 * @param {callback} [options]
 * @module config
 * @returns {ConfigAuthRes}
 */
export default function ready(callback: Function): Promise<ConfigAuthRes> {
  return core.exec<[], ConfigAuthRes, ConfigAuthRes>(
    WORKPLUS_CONFIG,
    'ready',
    [],
    (res: ConfigAuthRes) => {
      core.logger.warn('SDK 已就绪！（ready 事件被触发）');
      callback(res);
    },
    () => {},
    false,
  );
}
