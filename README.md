
# WorkPlus JS-SDK

[![npm version](https://badge.fury.io/js/%40w6s%2Fsdk.svg)](https://badge.fury.io/js/%40w6s%2Fsdk) [![Build Status](https://travis-ci.org/WorkPlusFE/js-sdk.svg?branch=master)](https://travis-ci.org/WorkPlusFE/js-sdk)

通过使用 WorkPlus JS-SDK，轻应用开发者可高效地使用拍照、选择照片、位置等手机系统的能力，同时可以直接使用分享、扫一扫及选择人员等定制能力，为用户提供更优质的应用使用体验。

[点击查看文档](https://open.workplus.io/v4/js-sdk/)

特性：

* 📦 开箱即用，`cordova.js`智能注入，支持模拟数据；
* 📎 所有方法无须等待`deviceready`，支持`Promise`及`callback`的调用方式;
* ⚙️ 支持直接`script`标签引入，支持基于`webpack`等工具的按需引入；
* 🔒 基于`TypeScript`编写，质量优良、提示完善；
* 🎉 10+个模块，轻松应付各种业务需求。

## 安装及使用

一、基于`npm`包的方式引入：

```sh
npm install @w6s/sdk --save
```

使用：

```js
import * as w6s from '@w6s/sdk';

// Promise
w6s.auth.getUserTicket().then(res => {
  console.log(res.user_ticket); 
}).catch();

// CallBack
w6s.auth.getUserTicket({
  success(res) {
    console.log(res.user_ticket); 
  },
  fail(err) {},
});
```

如果需要以`script`标签直接引入，相关资源说明请看[这里]()

## License

MIT. 

最终解析权归[恒拓高科](http://foreverht.com/)所有。
