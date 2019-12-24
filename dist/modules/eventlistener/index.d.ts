import { CordovaListener } from '../types/eventlistener';
/**
 * 添加Cordova监听事件
 * @param {CordovaListener} type
 * @param {(ev: Event) => {}} listener
 * @param {boolean} [useCapture]
 */
export declare function on(type: CordovaListener, listener: (ev: Event) => {}, useCapture?: boolean): void;
/**
 * 取消Cordova监听事件
 * @export
 * @param {CordovaListener} type
 * @param {(ev: Event) => {}} listener
 * @param {boolean} [useCapture]
 */
export declare function off(type: CordovaListener, listener: (ev: Event) => {}, useCapture?: boolean): void;
