import { deviceready } from '../core';
import { WORKPLUS_WEBVIEW } from '../constants';

export interface ChanelActionResType {
  /** 返回的事件类型 */
  action: 'pause' | 'resume' | 'back';
}

/**
 * 页面事件监听
 * @description ios/android 统一 resume/pause/back 事件的监听方式
 */
export function bindMessageChannel(callback: Function): void {
  deviceready().then(() => {
    cordova.exec(
      (result: ChanelActionResType) => {
        callback && callback(result);
      },
      () => {},
      WORKPLUS_WEBVIEW,
      'messageChannel',
      [],
    );
  });
}
