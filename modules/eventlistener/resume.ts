import { on } from './bind';
import { isFunction } from '../shared/is';
import { isIPhone, detectInWorkPlus, isAndroid } from '../shared/platform';

import { CordovaListener } from '../types/eventlistener';
interface Channel {
  action: CordovaListener;
}

/**
 * 页面返回
 * @description 当页面重新可见并可交互时，WorkPlus 会产生回调，开发者可监听此resume事件，并处理特定的业务逻辑
 * @param {Function} callback
 */
export function bindResumeEvent(callback: Function): void {
  if (!detectInWorkPlus()) return;

  const action: CordovaListener = 'resume';
  const resumeEvent = (channel: Channel): void => {
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
    cordova.exec(resumeEvent, () => {}, 'CoreAndroid', 'messageChannel', []);
  }
}
