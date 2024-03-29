
# WorkPlus JS-SDK

[![npm version](https://badge.fury.io/js/%40w6s%2Fsdk.svg)](https://badge.fury.io/js/%40w6s%2Fsdk) [![Build Status](https://travis-ci.org/WorkPlusFE/js-sdk.svg?branch=master)](https://travis-ci.org/WorkPlusFE/js-sdk)

通过使用 WorkPlus JS-SDK，轻应用开发者可高效地使用拍照、选择照片、位置等手机系统的能力，同时可以直接使用分享、扫一扫及选择人员等定制能力，为用户提供更优质的应用使用体验。

[查看开放平台文档](https://open.workplus.io/js-sdk/)

特性：

* 📦 开箱即用，支持数据模拟、全局异常监听；
* 🌊 所有异步接口均支持`Promise`及`callback`的调用方式；
* 🔧 支持`script`标签直接引入，支持基于`webpack`等工具的按需引入；
* 💪 基于`TypeScript`编写，质量优良、提示完善；
* 🎉 内含 10+ 个功能模块，轻松应付各种业务需求。

## 安装及使用

基于`npm`包的方式引入：

```sh
npm install @w6s/sdk --save 
# yarn add @w6s/sdk
```

使用：

```js
import * as w6s from '@w6s/sdk';

// 初始化 sdk
w6s.init({
  auth: false, // 非鉴权模式
  debug: true,
  timeout: 10 * 1000,
});

// 获取用户 Ticket
w6s.auth.getUserTicket().then(res => {
  console.log(res.user_ticket); 
}).catch();
```

如果需要以`script`标签直接引入，相关资源说明请看[这里](https://open.workplus.io/js-sdk/overview/demo.html#资源文件)。

## License

MIT. 

最终解析权归[恒拓高科](http://foreverht.com/)所有。
