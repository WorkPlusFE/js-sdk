import { on } from './bind';
import { isFunction } from '../shared/is';
import { isIPhone, detectInWorkPlus, isAndroid } from '../shared/platform';

import { CordovaListener } from '../types/eventlistener';
interface Channel {
  action: CordovaListener;
}

/**
 * 页面不可见时触发事件
 * @description 该方法只需要执行一次，一旦绑定，原始事件将失效，然后返回逻辑都需要在回调方法中处理
 * @param {Function} callback
 */
export function bindPauseEvent(callback: Function): void {
  if (!detectInWorkPlus()) return;

  const action: CordovaListener = 'pause';
  const pauseEvent = (channel: Channel): void => {
    if (channel.action === action && isFunction(callback)) {
      callback();
    }
  };

  if (isIPhone()) {
    on(
      action,
      (ev: Event) => {
        if (isFunction(callback)) return callback(ev);
      },
      false,
    );
  }

  if (isAndroid()) {
    /* eslint @typescript-eslint/no-empty-function: 0 */
    cordova.exec(pauseEvent, () => {}, 'CoreAndroid', 'messageChannel', []);
  }
}
