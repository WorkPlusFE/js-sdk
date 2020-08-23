# 网页

## 打开一个网页

传入地址，新窗口打开网页。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="webview.openWebView">

```js
w6s.webview.openWebView({
  url: 'http://网页地址',
  title: 'Test',
  useAndroidWebview: true,
  useSystemWebview: true,
  displayMode: 'FULL_SCREEN'
});
```
</CodeWrapper>

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| url | String | 要打开的网址 url |
| title | String | 显示的标题 |
| useAndroidWebview | Boolean | 是否使用 android 原生 webview 打开, 否则使用 workplus 订制的 webview |
| useSystemWebview | Boolean | 等同于 useAndroidWebview，只是该参数能用于ios以及android平台 |
| displayMode | String | 全屏打开 webview(即不包含原生标题栏)，默认非全屏 |

## 退出

关闭整个 WebView。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="webview.exit">

```js
w6s.webview.exit();
```
</CodeWrapper>

## 弹出分享对话框

弹出分享对话框，跳转分享。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="webview.share">

```js
w6s.webview.share({
  url: 'https://www.workplus.io'
  title: 'WorkPlus'
  coverMediaId: '分享图标mediaId',
  coverUrl: '分享图标 url', 
  scope: 0 
  summary : '这是一段摘要',
  directly: 'w6s_contact',
  directSession: {
    id: 'id',
    type: 'discussion',
  },
});
```
</CodeWrapper>

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| url | String | 要分享的网页地址 |
| title | String | 分享后显示的标题 |
| coverMediaId | String | 分享后显示的图标，媒体id |
| coverUrl | String | 分享后显示的图标，网络地址 |
| scope | Number | 用于显示范围，0 只显示内部分享的操作，包括"发送给"，"分享到圈子"；1则显示全部 |
| summary | String | 分享的内容摘要，一般会放到分享后的描述位置 |
| directly | String | 可选值：w6s_contact、w6s_current_session，具体说明请看下方描述 |
| directSession.id | String |  |
| directSession.type | String |  |


::: tip directly 参数
直接执行分享操作支持: `w6s_contact`对应“分享弹出窗”的“发送给”，为App内部的联系人等列表；`w6s_current_session`表示直接分享给指定会话，无任何弹出窗或者选择界面。当`directly`存在值时，`scope`参数无意义，请忽略, 默认`directly`为空，也即该接口会显示”分享弹出框“。
:::

## 控制屏幕旋转

根据参数控制屏幕横屏显示或者竖屏显示。

## 添加水印

给页面添加水印。

## 移除水印

## 注册摇一摇监听

## 注销摇一摇监听

## 微信分享(会话/朋友圈)

根据接口直接调起微信分享页面。

