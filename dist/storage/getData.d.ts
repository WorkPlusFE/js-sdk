import { DataParams, GetDataRes } from '../types/data';
/**
 * GetData
 * @description 轻应用存储轻量,非结构化的数据
 * @param {DataParams}
 * @module data
 * @returns {GetDataRes}
 */
export declare function getData(options: DataParams): Promise<GetDataRes>;
