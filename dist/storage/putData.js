"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putData = void 0;
var core = require("../core");
var constants_1 = require("../constants");
/**
 * PutData
 * @description 轻应用存储轻量,非结构化的数据
 * @param {DataParams}
 * @module data
 */
function putData(options) {
    return core.execSync(constants_1.WORKPLUS_DATA, 'putData', [__assign({}, options)]);
}
exports.putData = putData;
