<p align="center">
  <a href="https://workplusfe.github.io/sdk.js/" target="_blank">
    <img width="160" src="https://github.com/WorkPlusFE/sdk.js/blob/master/design/sdk-logo@2x.png?raw=true" alt="logo">
  </a>
</p>

<p align="center">
  <img src="https://travis-ci.org/WorkPlusFE/sdk.js.svg?branch=master">
</p>

<h2 align="center">WorkPlusFE JavaScript SDK</h2>

<h2 align="center">Usage</h2>

# 概述

WorkPlus SDK 为轻应用提供了 H5 调用原生控件的能力，帮助开发者高效使用拍照、定位等手机系统的能力，同时可以直接使用扫一扫、分享等特有的能力，带给轻应用接近原生代码的体验。此文档面向开发者介绍 WorkPlus
SDK 如何使用及相关注意事项。

## 准备工作

使用 npm 安装:

```sh
# npm
npm install @w6s/sdk --save

# yarn
yarn add @w6s/sdk
```

## 调用接口

WorkPlus SDK 分为整体加载和按需加载两种方式，并支持 callback 和 promise 的调用：

```ts
import * as w6s from '@w6s/sdk';  // 此方式为整体加载

// promise 形式调用
w6s.auth.getUserTicket().then(res => {
  console.log(res.ticket);        // 获取 ticket
}).catch();

// 支持按需加载方式
import getUserTicket from '@w6s/sdk/dist/modules/auth/getUserTicket';

// callback 形式调用
getUserTicket({
  success: res => {
    console.log(res.ticket);      // 获取 ticket
  },
  fail: err => {
    console.log(err);             // 调用失败
  }
});
```

## 通过 error 接口处理失败验证

WorkPlus SDK 在调用失败会执行 error 函数，错误信息可以在返回的 error 参数中参看，下面为示例:

```ts
w6a.error(function(error){
  alert('sdk error: ' + JSON.stringify(error));
});
```

## 通过 exec 和 execSync 执行 Cordova 调用

```ts
// exec 适用于获取数据类的调用，属异步操作，它支持 callback 和 promise 的方式
w6a.exec(
  /** 调用服务类名 */
  'WorkPlus_Auth',
  /** 调用方法名 */
  'getUserTicket',
  /** 调用传参 */
  [],
  /** 成功回调事件 */
  function (res) {},
  /** 失败回调事件 */
  function (err) {}
);

// execSync 适用于无数据返回类的调用，属同步操作
w6a.execSync(
  /** 调用服务类名 */
  'WorkPlus_Auth',
  /** 调用方法名 */
  'getUserTicket',
  /** 调用传参 */
  []
);
```
