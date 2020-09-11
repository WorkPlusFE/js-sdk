"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.off = exports.on = void 0;
/**
 * 添加Cordova监听事件
 * @param {CordovaListener} type
 * @param {(ev: Event) => {}} listener
 * @param {boolean} [useCapture]
 */
function on(type, listener, useCapture) {
    document.addEventListener(type, listener, useCapture);
}
exports.on = on;
/**
 * 取消Cordova监听事件
 * @export
 * @param {CordovaListener} type
 * @param {(ev: Event) => {}} listener
 * @param {boolean} [useCapture]
 */
function off(type, listener, useCapture) {
    document.removeEventListener(type, listener, useCapture);
}
exports.off = off;
