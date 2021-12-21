import * as core from '../core';
import { WORKPLUS_DATA } from '../constants';
import { DataParams } from '../types/data';

/**
 * PutData
 * @description 轻应用存储轻量,非结构化的数据
 * @param {DataParams}
 * @module data
 */
export function putData(options: DataParams): void {
  return core.execSync(WORKPLUS_DATA, 'putData', [{ ...options }]);
}
