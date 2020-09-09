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

可以通过`w6s.init`方法进行初始化参数设置，具体可设置参数如何：

```js
w6s.init({
  // 是否开启调试模式
  debug: true,
  
  // 配置 cordovajs 不同平台的访问地址
  cordovajs: {
    iOS: 'https://xxx',
    android: 'https://xxx',
  },

  // 若为true， 将强制以 http 的方式注入 cordovajs
  useHttp: false,

  // 接口超时时间，单位毫秒
  timeout: 5000,

  // 是否开启接口数据模拟功能
  mock: false,

  // Mock 数据 
  mockData: {},
});
```

#### 参数说明：

**debug**

默认为 false。开启后，将会在控制台打印调用接口的相关信息。

**cordovajs**

用于设置 iOS 及 Android 两端的 cordovajs 的加载地址，相关资源说明，请查看[此处](/js-sdk/overview/demo)。

在 js-sdk 内部，会根据具体的环境来决定使用`applocal://`还是`http(s)://`的方式注入 cordovajs。

::: tip 为什么要设置 cordovajs
过去，我们通过`applocal://`的特定协议来加载本地的 cordovajs，但某些情况可能会导致失败或移动端无法监听到加载请求，从而应用无法正常使用，例如在 iframe 中加载应用。而使用 http 的加载方式，即可避免这些问题，只是会额外增加了资源的请求。
:::

**useHttp**

默认为 false。如设置为 true，即强制使用 http 的方式加载 cordovajs，若未设置，将会给出警告。

**mock**

开启 js-sdk 接口的数据模拟功能，该开关可通过`process.env.NODE`环境变量来控制。

**mockData**

接口的模拟数据定义，格式如下：

```js
w6s.init({
  // 启用 Mock 服务
  mock: true                      
  mockData: {     
    // 服务类名                
    auth: {         
      // 具体执行方法的回调              
      getUserTicket() {           
        return { user_ticket: 'testmock' };
      }
    }
  }
});

w6s.auth.getUserTicket().then(res => {
  console.log(res.user_ticket);   // testmock
});
```

## 错误信息

js-sdk 在调用失败会触发 error 函数，错误信息可在返回的 error 参数中参看，下面为示例:

```js
w6s.error(function(error){
  alert('sdk error: ' + JSON.stringify(error));
});
```