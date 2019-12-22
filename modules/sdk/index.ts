import { SDKOptions } from '../types/sdk';
import { detectInWorkPlus } from '../utils/platform';
import { isFunction } from '../utils/is';

class SDK {
  private _isReady = false;

  constructor(options: SDKOptions) {
    const initSuccess = this.init(options);
    if (initSuccess) {
      this._ready();
    }
  }

  init(options: SDKOptions): boolean {
    if (!detectInWorkPlus()) {
      console.warn('当前非workplus环境，请检查重试');
      return false;
    }
    if (this._isReady) {
      console.warn('已注入Cordova，无需重新实例化');
      return false;
    }
    if (options.debug) {
      // logger info
    }
    return true;
  }

  _ready(fn?: Function) {
    document.addEventListener(
      'deviceready',
      () => {
        this._isReady = true;
        console.info('Cordova 注入成功');
        fn && fn();
      },
      false,
    );
  }

  static sendEvent<S, F>(
    service: string,
    action: string,
    data?: any[],
    successFn?: (data: S) => void,
    failedFn?: (data: F) => void,
  ) {
    if (successFn && failedFn && isFunction(successFn) && isFunction(failedFn)) {
      cordova.exec(successFn, failedFn, service, action, data || []);
    } else {
      return new Promise((resolve: (res: S) => void, reject: (err: F) => any) => {
        cordova.exec(resolve, reject, service, action);
      });
    }
  }

  get isReday() {
    return this._isReady;
  }
}

export default SDK;
