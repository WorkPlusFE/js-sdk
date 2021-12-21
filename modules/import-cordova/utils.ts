import { ImportCordovaConfig, Platform } from '../types/import-cordova';

// 是否为 https 模式
export const isHttpsProtocol = (): boolean => window.location.protocol === 'https:';

// 是否在 iframe 中打开
export const inIframe = (): boolean =>
  self.frameElement ? self.frameElement.tagName === 'IFRAME' : false;

export const isiOSPlatform = (userAgent: string): boolean => userAgent.indexOf('iphone') > -1;
export const isAndroidPlatform = (userAgent: string): boolean => userAgent.indexOf('android') > -1;
export const isX5Webview = (userAgent?: string): boolean =>
  /x5webkit|mqqbrowser|tbs/.test(userAgent as string);

export const getCordovaJsUriByPlatform = (
  config: ImportCordovaConfig,
  platform: Platform,
): string => config.cordovajs[platform];

export const inWorkPlus = (): boolean => navigator.userAgent.indexOf('workplus') > -1;

export const scriptGenerator = (uri: string): void => {
  const cordovaScriptElement = document.createElement('script');
  cordovaScriptElement.setAttribute('type', 'text/javascript');
  cordovaScriptElement.setAttribute('src', uri);
  const head = document.getElementsByTagName('head')[0];
  head.appendChild(cordovaScriptElement);
};
