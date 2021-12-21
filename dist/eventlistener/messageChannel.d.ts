export interface ChanelActionResType {
    /** 返回的事件类型 */
    action: 'pause' | 'resume' | 'back';
}
/**
 * 页面事件监听
 * @description ios/android 统一 resume/pause/back 事件的监听方式
 */
export declare function bindMessageChannel(callback: Function): void;
