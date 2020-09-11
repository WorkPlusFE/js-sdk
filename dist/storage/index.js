"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = require("../shared/is");
var WorkPlusStorage = /** @class */ (function () {
    /**
     * Storage 构造函数
     * @param {StorageOptions} options 配置项
     * @memberof WorkPlusStorage
     */
    function WorkPlusStorage(options) {
        /**
         * Storage 前缀，默认 "workplus"
         * @private
         * @memberof WorkPlusStorage
         */
        this._prefix = 'workplus';
        /**
         * Storage 前缀连接符，默认 "."
         * @private
         * @memberof WorkPlusStorage
         */
        this._connector = '.';
        if ((window === null || window === void 0 ? void 0 : window.localStorage) && (window === null || window === void 0 ? void 0 : window.sessionStorage)) {
            this._prefix = options.prefix || this._prefix;
            this._connector = options.connector || this._connector;
            this._storage = window[options.type];
        }
        else {
            throw new Error('当前环境不支持 storage.');
        }
    }
    Object.defineProperty(WorkPlusStorage.prototype, "_fullPrefix", {
        /**
         * 获取key前缀
         * @readonly
         * @type {string}
         * @memberof WorkPlusStorage
         */
        get: function () {
            return this._prefix + ':';
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 获取完整的key
     * @private
     * @param {string} key
     * @returns {string}
     * @memberof WorkPlusStorage
     */
    WorkPlusStorage.prototype._getFullKey = function (key) {
        return this._fullPrefix + key;
    };
    /**
     * 获取item
     * @param {string} key
     * @returns
     * @memberof WorkPlusStorage
     */
    WorkPlusStorage.prototype.get = function (key) {
        var _a;
        var fullKey = this._getFullKey(key);
        var value = (_a = this._storage.getItem(fullKey)) !== null && _a !== void 0 ? _a : '';
        if (!this.hasKey(fullKey)) {
            throw Error('不存在的 key');
        }
        return JSON.parse(value);
    };
    /**
     * 检测key是否存在
     * @param {string} key
     * @returns {boolean}
     * @memberof WorkPlusStorage
     */
    WorkPlusStorage.prototype.hasKey = function (fullkey) {
        var _a;
        var storage = this._storage;
        var exist = false;
        for (var i = 0; i < storage.length; i++) {
            var curKey = (_a = storage.key(i)) !== null && _a !== void 0 ? _a : '';
            if (curKey && curKey === fullkey) {
                exist = true;
            }
        }
        return exist;
    };
    /**
     * 添加item
     * @param {string} key
     * @param {*} source
     * @memberof WorkPlusStorage
     */
    WorkPlusStorage.prototype.add = function (key, source) {
        var fullKey = this._getFullKey(key);
        var value = source;
        if (is_1.isArray(source) || is_1.isPlainObject(source)) {
            value = JSON.stringify(source);
        }
        else if (!is_1.isPrimitive(source)) {
            throw Error('storage 不支持的数据类型');
        }
        try {
            this._storage.setItem(fullKey, value);
        }
        catch (error) {
            throw Error('storage 添加失败');
        }
    };
    /**
     * 删除item
     * @param {string} key
     * @memberof WorkPlusStorage
     */
    WorkPlusStorage.prototype.remove = function (key) {
        var _a;
        var fullKey = this._getFullKey(key);
        (_a = this._storage) === null || _a === void 0 ? void 0 : _a.removeItem(fullKey);
    };
    /**
     * 清空Storage
     * @memberof WorkPlusStorage
     */
    WorkPlusStorage.prototype.clear = function () {
        var _this = this;
        this.forEach(function (key) { return _this.remove(key); });
    };
    /**
     * 获取item总数量
     * @returns {number}
     * @memberof WorkPlusStorage
     */
    WorkPlusStorage.prototype.count = function () {
        var _a;
        var storage = this._storage;
        var fullPrefix = this._fullPrefix;
        var count = 0;
        for (var i = 0; i < storage.length; i++) {
            var key = (_a = storage.key(i)) !== null && _a !== void 0 ? _a : '';
            if (key.indexOf(fullPrefix) === 0) {
                count++;
            }
        }
        return count;
    };
    /**
     * 遍历所有 item
     * @param {(key: string, value: unknown) => void} callback
     * @memberof WorkPlusStorage
     */
    WorkPlusStorage.prototype.forEach = function (callback) {
        var _a;
        var storage = this._storage;
        var fullPrefix = this._fullPrefix;
        for (var i = 0; i < storage.length; i++) {
            var key = (_a = storage.key(i)) !== null && _a !== void 0 ? _a : '';
            if (key.indexOf(fullPrefix) === 0) {
                callback(key, this.get(key));
            }
        }
    };
    return WorkPlusStorage;
}());
exports.default = WorkPlusStorage;
