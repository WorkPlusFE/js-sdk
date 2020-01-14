import { ImportCordovaConfig, Platform } from '../types/import-cordova';
import config from './config';
import {
  getCordovaJsUriByPlatform,
  inIframe,
  isHttpsProtocol,
  isAndroidPlatform,
  isX5Webview,
  isiOSPlatform,
} from './utils';

export default class CordovaImportInstance {
  private config: ImportCordovaConfig;
  constructor(host?: string) {
    this.config = JSON.parse(JSON.stringify(config));
    this.config.SDK_HOST = host || config.SDK_HOST;
  }

  get userAgent(): string {
    return window.navigator.userAgent.toLowerCase();
  }

  /**
   * 返回注入的地址
   *
   * 默认使用 local模式，当检测到是 https协议 (安卓) 或在 iframe 中打开时，强制使用 http 模式
   */
  getImportUri(): string {
    // 以 es模块 初始化的情况下，不传人 SDK_HOST，默认只需要支持 local
    if (this.mustUseHttpModel() && this.config.SDK_HOST) {
      const platform = this.getCurrentPlatformByUserAgent();

      return getCordovaJsUriByPlatform(this.config, platform);
    }

    return this.config.cordovajs.local;
  }

  mustUseHttpModel(): boolean {
    if (inIframe()) return true;
    if (isHttpsProtocol() && isAndroidPlatform(this.userAgent) && !isX5Webview()) return true;
    return false;
  }

  getCurrentPlatformByUserAgent(): Platform {
    if (isiOSPlatform(this.userAgent)) {
      return 'iOS';
    }
    if (isAndroidPlatform(this.userAgent)) {
      return 'android';
    }
    return 'local';
  }
}
