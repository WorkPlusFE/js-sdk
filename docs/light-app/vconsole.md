# vConsole

[vConsole](https://github.com/Tencent/vConsole/blob/dev/README_CN.md) 是腾讯开源的一个轻量、可拓展、针对手机网页的前端开发者调试面板。

它具备以下特性：

* 查看 console 日志
* 查看网络请求
* 查看页面 element 结构
* 查看 Cookies、localStorage 和 SessionStorage
* 手动执行 JS 命令行
* 自定义插件

### 安装使用

你可在线下载最新版本的[vConsole](https://github.com/Tencent/vConsole/releases/latest)，或者使用 npm 进行安装。

```bash
npm install vconsole
```

引入 dist/vconsole.min.js 到项目中：

```html
<script src="path/to/vconsole.min.js"></script>
<script>
  // 初始化
  var vConsole = new VConsole();
  console.log('Hello world');
</script>
```

对于 TypeScript，可引入 d.ts 文件：

```ts
import 'path/to/vconsole.min.d.ts';
```

详细使用方法请参阅[使用教程](https://github.com/Tencent/vConsole/blob/dev/doc/tutorial_CN.md)。

