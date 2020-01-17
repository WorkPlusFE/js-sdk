import { CoreOptions, MockOptions } from '../types/core';
import { detectInWorkPlus, isBrowser } from '../shared/platform';
import { isFunction } from '../shared/is';
import injectCordova from '../import-cordova';
import Logger from './logger';
import { services as mockServiceNames } from './mock-services';

const EXEC_TIME_OUT = 5000;

class Core {
  /** cordova is loaded */
  private _ready = false;

  /** logger */
  private _logger: Logger = new Logger();

  /** timeout */
  private _timeout: number = EXEC_TIME_OUT;

  /** mock 配置 */
  private _mock = false;

  /** mock 数据 */
  private _mockData: MockOptions = Object.create(null);

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
  public init = (options?: CoreOptions): void => {
    // 配置 logger
    if (!this._logger) {
      this._logger = new Logger();
    }
    if (options?.debug) {
      this._logger.enable();
      this._logger.warn('当前 SDK 已开启调试模式');
    }

    if (!isBrowser()) {
      this._logger.error('SDK 不支持非浏览器环境');
      return;
    }

    if (!window.cordova && !this.isReday) {
      // 注入 Cordova
      injectCordova(options?.host);
    }

    // 设置超时
    this._timeout = options?.timeout || EXEC_TIME_OUT;
    this._logger.warn(`当前 SDK 设置的超时时间为: ${this._timeout}ms`);

    // 设置 Mock 服务
    if (options?.mock) {
      this._mock = options?.mock;
      if (options?.mockData) {
        this._mockData = options?.mockData;
      }
    } else if (!detectInWorkPlus()) {
      this._logger.error('请在 WorkPlus APP 下打开页面');
      return;
    }
  };

  /**
   * 在 Cordova 准备就绪时触发，api的调用需要保证在该回调函数触发后调用
   * @param {Function} [fn] 回调函数
   * @memberof Core
   */
  public ready = (fn?: Function): Promise<void> => {
    return new Promise(resolve => {
      const run = () => fn && isFunction(fn) && fn();
      if (this.isReday) {
        resolve();
        run();
      } else {
        document.addEventListener(
          'deviceready',
          () => {
            this._logger.warn('Cordova 注入成功');
            this._setReady(true);
            resolve();
            run();
          },
          false,
        );
      }
    });
  };

  /**
   * 注册error函数, 在SDK发生错误/异常时执行
   * @param {Function} [fn] 回调函数
   * @memberof Core
   */
  public error = (fn: (err: unknown) => void): void => {
    if (!isFunction(fn)) {
      this._logger.error('错误监听回调仅支持函数参数');
      return;
    }
    this._errorCallback = fn;
  };

  /**
   * 执行error回调函数
   * @param {unknown} error 错误对象
   * @memberof Core
   */
  public onError(error: unknown): void {
    if (this._errorCallback && isFunction(this._errorCallback)) {
      this._errorCallback(error);
    }
  }

  private _setReady(val: boolean): void {
    this._ready = val;
  }

  get isReday(): boolean {
    return this._ready;
  }

  get logger(): Logger {
    return this._logger;
  }

  get timeout(): number {
    return this._timeout;
  }

  get mock(): boolean {
    return this._mock;
  }

  get mockData(): MockOptions {
    return this._mockData;
  }
}

const core = new Core();
export const init = core.init;
export const ready = core.ready;
export const error = core.error;
export const logger = core.logger;

/**
 * 执行 Mock 调用
 * @param {string} service 调用的服务类名
 * @param {string} action 调用的方法名
 * @returns {boolean}
 */
function execByMock<S>(service: string, action: string): boolean | S {
  const serviceName = mockServiceNames[service];
  const mockService = core.mockData[serviceName];
  if (mockService && mockService[action] && isFunction(mockService[action])) {
    let res = Object.create(null);
    logger.warn(`执行 ${service}.${action} Mock 调用`);
    try {
      res = mockService[action]();
      logger.warn(`执行 ${service}.${action} Mock 返回结果: ${JSON.stringify(res, null, 4)}`);
    } catch (error) {
      logger.error(`执行 ${service}.${action} Mock 发生错误: ${JSON.stringify(error, null, 4)}`);
    }
    return res;
  }
  return false;
}

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
    const callAPI = `${service}.${action}`;
    const timer = setTimeout((err: F) => {
      logger.warn(`${callAPI} 接口调用响应超时，请重试`);
      reject(err);
    }, core.timeout);
    const execFn = (): void => {
      logger.warn(`准备调用 ${callAPI}`);
      cordova.exec(
        function(res: S) {
          clearTimeout(timer);
          logger.warn(`${callAPI} 调用成功: ${JSON.stringify(res, null, 4)}`);
          if (success && isFunction(success)) {
            success(res);
          }
          return resolve(res);
        },
        function(err: F) {
          clearTimeout(timer);
          logger.error(`${callAPI} 接口调用失败`);
          core.onError(`${callAPI} 调用失败: ${err}`);
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
      // 优先执行 mock
      if (core.mock) {
        const mockRes = execByMock(service, action) as S;
        if (mockRes) {
          clearTimeout(timer);
          resolve(mockRes);
          return;
        }
      }

      core.ready(execFn);
    } catch (error) {
      core.onError(error);
    }
  });
}

/**
 * 以同步的方式执行 Cordova 的事件, 用于没有回调的API
 * @export
 * @template A
 * @param {string} service 调用的服务类名
 * @param {string} action 调用的方法名
 * @param {Array<A>} args 调用的参数
 * @returns {void}
 */
export function execSync<A>(service: string, action: string, args: Array<A>): void {
  const callAPI = `${service}.${action}`;
  logger.warn(`同步调用 ${callAPI}`);
  cordova.exec(
    function(data) {
      logger.warn(JSON.stringify(data, null, 4));
    },
    function(err) {
      logger.error(JSON.stringify(err, null, 4));
      core.onError(`${service}.${action} 调用失败: ${err}`);
    },
    service,
    action,
    args,
  );
}
