import { CoreOptions } from '../types/core';
import { detectInWorkPlus } from '../shared/platform';
import { isFunction } from '../shared/is';

const TIME_OUT = 10000;

class Core {
  /** cordova is loaded */
  private _ready = false;

  /** error 回调函数 */
  private _errorCallback!: Function;

  constructor() {
    this.init();
  }

  /**
   * 初始化配置项
   * @param {CoreOptions} [options]
   * @returns {boolean}
   * @memberof Core
   */
  init(options?: CoreOptions): boolean {
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
            this._isReday();
            if (fn && isFunction(fn)) {
              fn();
            }
            clearTimeout(timer);
            resolve();
          },
          false,
        );
      }
    });
  }

  /**
   * 注册error函数, 在SDK发生错误/异常时执行
   * @param {(err: unknown) => void} fn 回调函数
   * @returns
   * @memberof Core
   */
  error(fn: (err: unknown) => void): void {
    if (!isFunction(fn)) {
      console.error('error的传参必须是函数类型');
      return;
    }
    this._errorCallback = fn;
  }

  /**
   * 执行error回调函数
   * @param {unknown} error 错误对象
   * @memberof Core
   */
  onError(error: unknown): void {
    if (this._errorCallback && isFunction(this._errorCallback)) {
      this._errorCallback(error);
    }
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
export const error = core.error;

/**
 * 以异步的方式执行 Cordova 的事件，用于获取数据类型的 API
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
export function exec<A, S, F>(
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
          core.onError(`${service}.${action} 调用失败: ${err}`);
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

    try {
      core.ready(execFn);
    } catch (error) {
      core.onError(error);
    }
  });
}

/**
 * 以同步的方式执行 Cordova 的事件, 用于某些永不触发回调的 API
 * @template A
 * @param {string} service 调用的服务类名
 * @param {string} action  调用的方法名
 * @param {Array<A>} args  调用的参数
 */
export function execSync<A>(service: string, action: string, args: Array<A>): void {
  cordova.exec(
    function(data) {
      console.info(data);
    },
    function(err) {
      core.onError(`${service}.${action} 调用失败: ${err}`);
    },
    service,
    action,
    args,
  );
}
