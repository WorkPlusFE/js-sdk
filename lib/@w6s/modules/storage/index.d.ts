import { StorageOptions } from '../types/storage';
declare class WorkPlusStorage {
    /**
     * storage 前缀，默认 "workplus"
     * @private
     * @memberof WorkPlusStorage
     */
    private _prefix;
    /**
     * storage 前缀连接符，默认 "."
     * @private
     * @memberof WorkPlusStorage
     */
    private _connector;
    /**
     * storage 实例，localStorage 或者 sessionStorage
     * @private
     * @memberof WorkPlusStorage
     */
    private _storage;
    /**
     * Storage 构造函数
     * @param {StorageOptions} options 配置项
     * @memberof WorkPlusStorage
     */
    constructor(options: StorageOptions);
    /**
     * Get the full prefix.
     * @readonly
     * @memberof WorkPlusStorage
     */
    get _fullPrefix(): string;
    /**
     * 获取完整的 key
     * @param {string} key
     * @returns
     * @memberof WorkPlusStorage
     */
    private _getFullKey;
    /**
     * 获取 item
     * @param {string} key
     * @returns
     * @memberof WorkPlusStorage
     */
    get(key: string): any;
    /**
     * 检测 key 是否存在
     * @param {string} key
     * @returns {boolean}
     * @memberof WorkPlusStorage
     */
    hasKey(fullkey: string): boolean;
    /**
     * 添加 item
     * @param {string} key
     * @param {*} source
     * @memberof WorkPlusStorage
     */
    add(key: string, source: any): void;
    /**
     * 删除 item
     * @param {string} key 要删除的key
     * @memberof WorkPlusStorage
     */
    remove(key: string): void;
    /**
     * 清空 storage
     * @memberof WorkPlusStorage
     */
    clear(): void;
    /**
     * 获取 item 的数量
     * @returns {number}
     * @memberof WorkPlusStorage
     */
    count(): number;
    /**
     * 遍历所有 item
     * @param {(key: string, value: any) => void} callback
     * @memberof WorkPlusStorage
     */
    forEach(callback: (key: string, value: any) => void): void;
}
export default WorkPlusStorage;
