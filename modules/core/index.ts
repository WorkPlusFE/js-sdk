import { SDKOptions } from '../types/sdk';
import { detectInWorkPlus } from '../utils/shared/platform';
import { isFunction } from '../utils/shared/is';

const TIME_OUT = 10000;

class Core {
  /** cordova is loaded */
  private _ready = false;

  constructor() {
    this.init();
  }

  /**
   * 初始化配置项
   * @param {SDKOptions} [options]
   * @returns {boolean}
   * @memberof Core
   */
  init(options?: SDKOptions): boolean {
    if (!detectInWorkPlus()) {
      console.warn('当前非workplus环境，请检查重试');
      return false;
    }
    if (sessionStorage.get('ready')) {
      console.warn('已注入Cordova，无需重新实例化');
      return false;
    }
    if (options && options.debug) {
      // logger info
    }
    return true;
  }

  /**
   * The event fires when Cordova is fully loaded.
   * @export
   * @param {Function} [fn]
   * @returns
   */
  ready(fn?: Function): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.isReday) {
        resolve();
      } else {
        const timer = setTimeout(() => {
          console.warn('Cordova 注入异常');
          reject();
        }, TIME_OUT);
        document.addEventListener(
          'deviceready',
          () => {
            console.info('Cordova 注入成功');
            if (fn && isFunction(fn)) {
              fn();
            }
            this._isReday();
            clearTimeout(timer);
            resolve();
          },
          false,
        );
      }
    });
  }

  _isReday(): void {
    this._ready = true;
  }

  get isReday(): boolean {
    return this._ready;
  }
}

const core = new Core();

export const init = core.init;
export const ready = core.ready;

/**
 * 执行 Cordova 的事件调用
 * @template A 参数类型
 * @template S 成功回调的返回类型
 * @template F 失败回调的返回类型
 * @param {string} service 调用的服务类名
 * @param {string} action 调用的方法名
 * @param {Array<A>} args 调用的参数
 * @param {(data: S) => void} [success] 成功回调
 * @param {(err: F) => void} [failed] 失败回调
 * @returns {Promise<S>}
 */
export const exec = function<A, S, F>(
  service: string,
  action: string,
  args: Array<A>,
  success?: (data: S) => void,
  fail?: (err: F) => void,
): Promise<S> {
  return new Promise((resolve: (res: S) => void, reject: (err: F) => void) => {
    const execFn = (): void => {
      cordova.exec(
        function(res: S) {
          if (success && isFunction(success)) {
            success(res);
          }
          return resolve(res);
        },
        function(err: F) {
          if (fail && isFunction(fail)) {
            fail(err);
          }
          return reject(err);
        },
        service,
        action,
        args,
      );
    };
    core.ready(execFn);
  });
};