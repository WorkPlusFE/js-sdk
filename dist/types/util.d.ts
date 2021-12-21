export interface UitlOptions<S> {
    /** 成功回调 */
    success?: (res: S) => void;
    /** 失败回调 */
    fail?: (err: unknown) => void;
}
export interface ScannerParams {
    /** 扫码是否需要考虑处理内部业务, 如扫码登录pc 端, 扫码进群等,
     * 若不传则默认只关注二维码内容, 直接返回扫码结果
     * */
    type?: 'native';
}
export interface VibrateRes {
    [key: string]: unknown;
}
export interface GenerateBarcodeRes {
    [key: string]: unknown;
}
export interface GenerateBarcodeParams {
    content: string;
    width: number;
    height: number;
}
export interface GenerateQrcodeRes {
    [key: string]: unknown;
}
export interface GenerateQrcodeParams {
    content: string;
    width: number;
    height: number;
}
