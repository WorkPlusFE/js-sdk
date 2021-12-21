import sha1 from 'crypto-js/sha1';
import * as sdk from '../../../dist';

const authDataObj: any = {
  // 测试环境鉴权参数
  dev: {
    access_key: '6374106c5eb449a4ad6c2430f30796e6',
    access_secret: 'defb3f69277340d5a0b55dc4831b5edb',
  },
};

export default {
  /**
   * @param authMode 是否开启鉴权
   * @description 初始化鉴权 和 ready
   * @returns Promise
   */
  init(authMode: boolean): Promise<any> {
    return new Promise((resolve, reject) => {
      const authData: any = authDataObj.dev;
      let result: any = null; // 鉴权成功返回的数据
      const nonce: string = this.getRandomStr(6); // 随机字符串
      const timestamp = `${new Date().getTime()}`; // 时间戳
      const params = {
        access_key: authData.access_key,
        nonce,
        timestamp,
        signature: this.getSignature(authData.access_secret, nonce, timestamp),
        debug: false,
      };

      // 开启日志
      sdk.init({ debug: true, auth: authMode, useHttp: false });

      // 非鉴权模式自动返回成功
      if (!authMode) {
        resolve({ code: 0 });
      }

      // 开始鉴权
      sdk
        .config(params)
        .then((data: any) => {
          const { result: res } = data;
          result = res;
          if (res && res.code !== 0) {
            reject(new Error('Authentication failed'));
          }
        })
        .catch((err: any) => {
          reject(err);
        });

      // 监听sdk异常
      sdk.error((error: any) => {
        console.log('SDK API 异常', error);
      });
      /**
       * 如果调用时，授权并未完成，则会在授权完成时触发；
       * 如果调用时，授权已经完成，则会马上被触发；
       */
      sdk.ready(() => {
        resolve(result || { code: 0, message: '鉴权成功' }); // 走了ready 必定已经鉴权成功
      });
    });
  },

  /**
   * @description 获取签名
   * @param accessSecret
   * @param nonce
   * @param timestamp
   * @returns string
   */
  getSignature(accessSecret: string, nonce: string, timestamp: string): string {
    const content: string = [accessSecret, nonce, timestamp]
      .sort()
      .reduce((str: string, item: string): string => {
        const all = str + item;
        return all;
      }, '');
    // 最终还需要转成全小写
    const signature = sha1(content)
      .toString()
      .toLowerCase();
    return signature;
  },

  /**
   * @description 获取0-9随机数字符串
   * @param n 随机数位数
   */
  getRandomStr(n: number): string {
    return Math.random()
      .toFixed(n)
      .slice(-n);
  },
};
