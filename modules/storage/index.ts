import { StorageOptions } from '../types/storage';
import { isPrimitive, isArray, isPlainObject } from '../utils/shared/is';

class WorkPlusStorage {
  /**
   * storage 前缀，默认 "workplus"
   * @private
   * @memberof WorkPlusStorage
   */
  private _prefix = 'workplus';

  /**
   * storage 前缀连接符，默认 "."
   * @private
   * @memberof WorkPlusStorage
   */
  private _connector = '.';

  /**
   * storage 实例，localStorage 或者 sessionStorage
   * @private
   * @memberof WorkPlusStorage
   */
  private _storage!: Storage;

  /**
   * Storage 构造函数
   * @param {StorageOptions} options 配置项
   * @memberof WorkPlusStorage
   */
  constructor(options: StorageOptions) {
    if (window?.localStorage && window?.sessionStorage) {
      this._prefix = options.prefix || this._prefix;
      this._connector = options.connector || this._connector;
      this._storage = window[options.type];
    } else {
      throw new Error('当前环境不支持 storage.');
    }
  }

  /**
   * Get the full prefix.
   * @readonly
   * @memberof WorkPlusStorage
   */
  get _fullPrefix() {
    return this._prefix + ':';
  }

  /**
   * 获取完整的 key
   * @param {string} key
   * @returns
   * @memberof WorkPlusStorage
   */
  private _getFullKey(key: string) {
    return this._fullPrefix + key;
  }

  /**
   * 获取 item
   * @param {string} key
   * @returns
   * @memberof WorkPlusStorage
   */
  get(key: string) {
    const fullKey = this._getFullKey(key);
    const value = this._storage.getItem(fullKey) ?? '';
    if (!this.hasKey(fullKey)) {
      throw Error('不存在的 key');
    }
    return JSON.parse(value);
  }

  /**
   * 检测 key 是否存在
   * @param {string} key
   * @returns {boolean}
   * @memberof WorkPlusStorage
   */
  hasKey(fullkey: string): boolean {
    const storage = this._storage;
    let exist = false;
    for (let i = 0; i < storage.length; i++) {
      const curKey = storage.key(i) ?? '';
      if (curKey && curKey === fullkey) {
        exist = true;
      }
    }
    return exist;
  }

  /**
   * 添加 item
   * @param {string} key
   * @param {*} source
   * @memberof WorkPlusStorage
   */
  add(key: string, source: any) {
    const fullKey = this._getFullKey(key);
    let value = source;
    if (isArray(source) || isPlainObject(source)) {
      value = JSON.stringify(source);
    } else if (!isPrimitive(source)) {
      throw Error('storage 不支持的数据类型');
    }
    try {
      this._storage.setItem(fullKey, value);
    } catch (error) {
      throw Error('storage 添加失败');
    }
  }

  /**
   * 删除 item
   * @param {string} key 要删除的key
   * @memberof WorkPlusStorage
   */
  remove(key: string) {
    const fullKey = this._getFullKey(key);
    this._storage?.removeItem(fullKey);
  }

  /**
   * 清空 storage
   * @memberof WorkPlusStorage
   */
  clear(): void {
    this.forEach((key, value) => this.remove(key));
  }

  /**
   * 获取 item 的数量
   * @returns {number}
   * @memberof WorkPlusStorage
   */
  count(): number {
    const storage = this._storage;
    const fullPrefix = this._fullPrefix;
    let count = 0;
    for (let i = 0; i < storage.length; i++) {
      const key = storage.key(i) ?? '';
      if (key.indexOf(fullPrefix) === 0) {
        count++;
      }
    }
    return count;
  }

  /**
   * 遍历所有 item
   * @param {(key: string, value: any) => void} callback
   * @memberof WorkPlusStorage
   */
  forEach(callback: (key: string, value: any) => void) {
    const storage = this._storage;
    const fullPrefix = this._fullPrefix;
    for (let i = 0; i < storage.length; i++) {
      const key = storage.key(i) ?? '';
      if (key.indexOf(fullPrefix) === 0) {
        callback(key, this.get(key));
      }
    }
  }
}

export default WorkPlusStorage;
