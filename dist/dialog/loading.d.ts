export interface LoadingParams {
    /** loading的描述文字，非必需 */
    title?: string;
    /** 锁住屏幕，默认为 false */
    block?: boolean;
}
/**
 * Loading
 * @description 显示 loading 提示框，可以添加文本
 * @param LoadingParams
 * @module dialog
 * @returns 无
 */
declare function showLoading(options?: LoadingParams): void;
declare function hideLoading(): void;
export { showLoading, hideLoading };
