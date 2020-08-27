# 页面事件绑定

`JS-SDK`提供方法用于绑定设备的一些场景操作事件，例如安卓设备特有的物理返回按钮（或虚拟按钮），绑定后，可以在回调方法内处理特定的逻辑。

## 安卓物理返回按钮

绑定安卓设备的物理返回按钮，绑定后，原始返回动作将无效。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 不支持 |

<CodeWrapper :qrcode="false" fn="event.bindBackButtonEvent">

```js
// 单个 WebView 中只需要绑定一次
w6s.event.bindBackButtonEvent(() => {
  // 此处处理返回的逻辑
});
```

</CodeWrapper>

::: tip 关于返回
在 WebView 中，物理返回按钮会以标准的浏览器访问记录进行页面退回，但是往往在开发单页面应用(SPA)时，返回事件可能会让整个应用退出，此时可以通过绑定物理返回按钮事件，正确地处理页面切换。
:::

## 页面离开

当页面不可见时，WorkPlus 会产生回调，开发者可以监听此`pause事件`，并处理特定的业务逻辑。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper :qrcode="false" fn="event.bindPauseEvent">

```js
w6s.event.bindPauseEvent(() => {
  // 此处执行特定逻辑
});
```

</CodeWrapper>

## 页面返回

当页面重新可见并可交互时，WorkPlus 会产生回调，开发者可监听此`resume事件`，并处理特定的业务逻辑。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper :qrcode="false" fn="event.bindResumeEvent">

```js
w6s.event.bindResumeEvent(() => {
  // 此处执行特定逻辑
});
```

</CodeWrapper>