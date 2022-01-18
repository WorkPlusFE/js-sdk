import * as core from '../core';
import { ExecOptions, CommonApiRes } from '../types/core';
import { WORKPLUS_NETWORK } from '../constants';

export interface AssembleAuthUrlParams {
  /** WorkPlus 媒体id */
  media_ids?: [string];
  /** 普通的url */
  urls?: [string];
}

export interface AssembleAuthUrlRes {
  code: number;
  message: string;
  result: AssembleAuthUrlParams;
}

export type AssembleAuthUrlOptions = AssembleAuthUrlParams &
  ExecOptions<AssembleAuthUrlRes, CommonApiRes>;

/**
 * url 鉴权处理
 * @description 该接口主要用于 url 做签名参数处理, 使 WorkPlus 平台的 url 可以合法访问。
 * @param {AssembleAuthUrlParams} [options]
 * @module network
 * @returns 转换后的链接
 */
function assembleAuthUrl(options: AssembleAuthUrlOptions): Promise<AssembleAuthUrlRes> {
  return core.exec<AssembleAuthUrlParams, AssembleAuthUrlRes, CommonApiRes>(
    WORKPLUS_NETWORK,
    'assembleAuthUrl',
    [options],
    options?.success,
    options?.fail,
  );
}

export default assembleAuthUrl;
