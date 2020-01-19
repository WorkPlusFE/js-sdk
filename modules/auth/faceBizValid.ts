import * as core from '../core';
import { WORKPLUS_AUTH } from '../constants';
import { ExecOptions } from '../types/core';

export type FaceBioAuthOptions = ExecOptions<void, void>;

/**
 * 人脸识别(需商务确定人脸识别方案)
 * @description 唤起人脸识别验证(具体 sdk 根据当前打包配置)
 * @param {FaceBioAuthOptions} [options]
 * @module auth
 * @returns 无
 */
export default function faceBioAuth(options?: FaceBioAuthOptions): Promise<void> {
  return core.exec<[], void, void>(
    WORKPLUS_AUTH,
    'faceBioAuth',
    [],
    options?.success,
    options?.fail,
  );
}
