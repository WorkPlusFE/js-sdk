"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Logger = /** @class */ (function () {
    function Logger(enabled) {
        if (enabled === void 0) { enabled = false; }
        this._PREFIX = 'WorkPlus JS-SDK ';
        this._enabled = enabled;
    }
    Logger.prototype.disable = function () {
        this._enabled = false;
    };
    Logger.prototype.enable = function () {
        this._enabled = true;
    };
    Logger.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this._enabled) {
            return;
        }
        console.log(this._PREFIX + "[Log]: " + args.join(' '));
    };
    Logger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this._enabled) {
            return;
        }
        console.warn(this._PREFIX + "[Warn]: " + args.join(' '));
    };
    Logger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this._enabled) {
            return;
        }
        console.error(this._PREFIX + "[Error]: " + args.join(' '));
    };
    return Logger;
}());
exports.default = Logger;
