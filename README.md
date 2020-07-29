
# WorkPlus JS-SDK

[![npm version](https://badge.fury.io/js/%40w6s%2Fsdk.svg)](https://badge.fury.io/js/%40w6s%2Fsdk) [![Build Status](https://travis-ci.org/WorkPlusFE/js-sdk.svg?branch=master)](https://travis-ci.org/WorkPlusFE/js-sdk)

WorkPlus JS-SDK 为`H5轻应用`提供了调用原生控件的能力，帮助开发者高效使用拍照、定位等手机系统的能力，同时可以直接使用扫一扫、分享等特有的能力，带给轻应用接近原生代码的体验。

[点击查看文档](https://js-sdk.workplus.io/)

特性：

* 📦 开箱即用，`cordova.js`智能注入，支持模拟数据；
* 📎 所有方法无须等待`deviceready`，支持`Promise`及`callback`的调用方式;
* ⚙️ 支持直接`script`标签引入，支持基于`webpack`等工具的按需引入；
* 🔒 基于`TypeScript`编写，质量优良、提示完善；
* 🎉 10+个模块，基本满足绝大部分场景；


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

二、如果是以`script`标签引入，可以使用下方官方CDN链接，也可以下载[SDK资源]()自行进行部署。

```html
<script src=""></script>
```

[相关资源说明请看这里]()

## License

MIT. 最终解析权归[恒拓高科](http://foreverht.com/)所有。

🐛 若文档内容有错漏或在线例子无法正常运行，欢迎给我们提[issues](https://github.com/WorkPlusFE/js-sdk/issues/new)，我们会尽快修复！