import { CordovaListener } from '../types/eventlistener';

/**
 * 添加Cordova监听事件
 * @param {CordovaListener} type
 * @param {(ev: Event) => {}} listener
 * @param {boolean} [useCapture]
 */
export function on(type: CordovaListener, listener: (ev: Event) => {}, useCapture?: boolean): void {
  document.addEventListener(type, listener, useCapture);
}

/**
 * 取消Cordova监听事件
 * @export
 * @param {CordovaListener} type
 * @param {(ev: Event) => {}} listener
 * @param {boolean} [useCapture]
 */
export function off(
  type: CordovaListener,
  listener: (ev: Event) => {},
  useCapture?: boolean,
): void {
  document.removeEventListener(type, listener, useCapture);
}
