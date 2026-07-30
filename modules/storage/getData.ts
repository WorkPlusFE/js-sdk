import * as core from '../core';
import { WORKPLUS_DATA } from '../constants';
import { ExecOptions } from '../types/core';
import { DataParams, GetDataRes } from '../types/data';

export type DataOptions = DataParams & ExecOptions<GetDataRes, unknown>;

/**
 * GetData
 * @description 轻应用存储轻量,非结构化的数据
 * @param {DataParams}
 * @module data
 * @returns {GetDataRes}
 */
export function getData(options: DataOptions): Promise<GetDataRes> {
  const { success, fail, ...args } = options;
  return core.exec<DataParams, GetDataRes, unknown>(
    WORKPLUS_DATA,
    'getData',
    [args],
    success,
    fail,
  );
}
