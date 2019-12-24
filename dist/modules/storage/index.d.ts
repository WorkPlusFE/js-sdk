import { StorageOptions } from '../types/storage';
declare class WorkPlusStorage {
    /**
     * Storage 前缀，默认 "workplus"
     * @private
     * @memberof WorkPlusStorage
     */
    private _prefix;
    /**
     * Storage 前缀连接符，默认 "."
     * @private
     * @memberof WorkPlusStorage
     */
    private _connector;
    /**
     * Storage 实例，localStorage 或者 sessionStorage
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
     * 获取key前缀
     * @readonly
     * @type {string}
     * @memberof WorkPlusStorage
     */
    get _fullPrefix(): string;
    /**
     * 获取完整的key
     * @private
     * @param {string} key
     * @returns {string}
     * @memberof WorkPlusStorage
     */
    private _getFullKey;
    /**
     * 获取item
     * @param {string} key
     * @returns
     * @memberof WorkPlusStorage
     */
    get(key: string): unknown;
    /**
     * 检测key是否存在
     * @param {string} key
     * @returns {boolean}
     * @memberof WorkPlusStorage
     */
    hasKey(fullkey: string): boolean;
    /**
     * 添加item
     * @param {string} key
     * @param {*} source
     * @memberof WorkPlusStorage
     */
    add(key: string, source: string): void;
    /**
     * 删除item
     * @param {string} key
     * @memberof WorkPlusStorage
     */
    remove(key: string): void;
    /**
     * 清空Storage
     * @memberof WorkPlusStorage
     */
    clear(): void;
    /**
     * 获取item总数量
     * @returns {number}
     * @memberof WorkPlusStorage
     */
    count(): number;
    /**
     * 遍历所有 item
     * @param {(key: string, value: unknown) => void} callback
     * @memberof WorkPlusStorage
     */
    forEach(callback: (key: string, value: unknown) => void): void;
}
export default WorkPlusStorage;
