import { SDKOptions } from '../types/sdk';
import { detectInWorkPlus } from '../utils/shared/platform';
import { isFunction } from '../utils/shared/is';

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

  _ready(fn?: Function): void {
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

  static sendEvent<A, S, F>(
    service: string,
    action: string,
    args: Array<A>,
    success?: (data: S) => void,
    failed?: (err: F) => void,
  ): Promise<S> {
    return new Promise((resolve: (res: S) => void, reject: (err: F) => void) => {
      cordova.exec(
        function(res: S) {
          if (success && isFunction(success)) {
            success(res);
          }
          return resolve(res);
        },
        function(err: F) {
          if (failed && isFunction(failed)) {
            failed(err);
          }
          return reject(err);
        },
        service,
        action,
        args,
      );
    });
  }

  get isReday(): boolean {
    return this._isReady;
  }
}

export default SDK;
