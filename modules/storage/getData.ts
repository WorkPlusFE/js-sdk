import * as core from '../core';
import { WORKPLUS_DATA } from '../constants';
import { DataParams, GetDataRes } from '../types/data';

/**
 * GetData
 * @description 轻应用存储轻量,非结构化的数据
 * @param {DataParams}
 * @module data
 * @returns {GetDataRes}
 */
export function getData(options: DataParams): Promise<GetDataRes> {
  return core.exec(WORKPLUS_DATA, 'getData', [{ ...options }]);
}
