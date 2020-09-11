import { ExecOptions } from '../types/core';
import { BiometricRes } from '../types/auth';
export declare type BiometricOptions = ExecOptions<BiometricRes, void>;
/**
 * 生物认证
 * @description 需要设备具备指纹或者FACE_ID解锁功能，解锁后触发回调，适用于对安全性要求较高的操作。
 * @param {BiometricOptions} [options]
 * @module auth
 * @version 3.15.0
 * @returns code
 */
export default function biometric(options?: BiometricOptions): Promise<BiometricRes>;
