/**
 * 检测当前是否在 WorkPlus 环境下
 * @export
 * @returns {boolean}
 */
export function detectInWorkPlus(): boolean {
  return window?.navigator?.userAgent.includes('workplus');
}

/**
 * 检测当前是否为 Android 平台
 * @export
 * @returns {boolean}
 */
export function isAndroid(): boolean {
  return window?.navigator?.userAgent.includes('android');
}

/**
 * 检测当前是否为 IPhone 平台
 * @export
 * @returns {boolean}
 */
export function isIPhone(): boolean {
  return window?.navigator?.userAgent.includes('iPhone');
}

/**
 * 检测当前是否在浏览器环境
 * @export
 * @returns {boolean}
 */
export function isBrowser(): boolean {
  return (
    typeof window !== 'undefined' && Object.prototype.toString.call(window) === '[object Window]'
  );
}
