# 快速开始

`JS-SDK`支持`script`标签及以`模块`的形式引入；初始化时，可以设置日志输出、数据模拟等配置。

## 引入及使用

**一、基于`npm`包的方式引入：**

使用`npm`或`yarn`安装模块：

```sh
npm install @w6s/sdk --save

# 使用 yarn 
yarn add @w6s/sdk
```

安装成功后，使用`es module`或`commonjs`模块规范引入，支持全量及按模块引入：

```js
// 全量引入
import * as w6s from '@w6s/sdk';

// 按模块引入
import auth from '@w6s/sdk/auth';
```

所有接口支持`promise`及`callback`的调用方式：

```js
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

**二、`script`标签引入：**

```html
<script src=""></script>  
```

::: warning 关于 JS-SDK 资源
基于 WorkPlus 部分客户网络环境的特殊性，推荐自行部署`js-sdk`的相关资源，以供自家平台轻应用访问。

相关资源说明，请查看[此处](/js-sdk/overview/demo)。
:::


## 配置