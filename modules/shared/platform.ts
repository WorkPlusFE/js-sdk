/** 环境检测 */

export const detectInWorkPlus = (): boolean => {
  return window?.navigator.userAgent.includes('workplus');
};

export const isAndroid = (): boolean => {
  return window?.navigator.userAgent.includes('android');
};

export const isiPhone = (): boolean => {
  return window?.navigator.userAgent.includes('iPhone');
};
