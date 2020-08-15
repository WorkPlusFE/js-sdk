# 安装及使用

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