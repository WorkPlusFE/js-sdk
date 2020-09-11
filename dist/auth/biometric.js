"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 生物认证
 * @description 需要设备具备指纹或者FACE_ID解锁功能，解锁后触发回调，适用于对安全性要求较高的操作。
 * @param {BiometricOptions} [options]
 * @module auth
 * @version 3.15.0
 * @returns code
 */
function biometric(options) {
    return core.exec(constants_1.WORKPLUS_LIGHT_APP, 'routeBiometricAuthenticationLock', [], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail);
}
exports.default = biometric;
