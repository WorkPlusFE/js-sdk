# 网页

## 打开本地页面

传入相对地址，打开 WorkPlus 里已有的网页。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="webview.openLocalURL">

```js
w6s.webview.openLocalURL({
  localURL: '资源本地地址',
});
```
</CodeWrapper>

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| localURL | String | html 文件本地所在地址 |

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


## 锁定网页顶部栏 WIP

锁定顶部栏，使得顶部栏按钮无效。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="webview.openWebView">

```js
// 锁定
w6s.webview.navigation.lock();

// 解锁
w6s.webview.navigation.unlock();
```
</CodeWrapper>

## 设置左侧按钮动作

更换左侧的按钮动作。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="webview.leftButton">

```js
w6s.webview.leftButton(
  method: 'goBack',
});
```
</CodeWrapper>

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| method | String | 点击左边返回按钮需要执行的方法名 |

::: tip 提示
传入的方法名，必须在全局上能找到，否则无法触发。通常我们把方法挂在`window`对象下，如果使用`webpack`构建工具来开发，要特别注意这个问题。
:::

## 设置右侧按钮动作 WIP

更换右侧的按钮动作。

## 设置标题

更换头部title。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="webview.setTitle">

```js
w6s.webview.setTitle('test title');
```
</CodeWrapper>

## 清除左侧按钮

清除左侧按钮事件和显示。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="webview.clearLeftButton">

```js
w6s.webview.clearLeftButton();
```
</CodeWrapper>

## 清除右侧按钮

清除右侧按钮事件和显示。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="webview.clearRightButtons">

```js
w6s.webview.clearRightButtons();
```
</CodeWrapper>

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


## 跳转到特定页面

跳转到 WorkPlus 特定页面。

## 设置左侧的按钮和关闭

是否隐藏或显示左侧的按钮和关闭字样。

## 更换左侧侧按钮和定义动作 ？？？

## 控制屏幕旋转

根据参数控制屏幕横屏显示或者竖屏显示。

## 添加水印

给页面添加水印。

## 移除水印

## 注册摇一摇监听

## 注销摇一摇监听

## 微信分享(会话/朋友圈)

根据接口直接调起微信分享页面。

## 修改顶部栏颜色

## 语音转文本

## 获取分享弹出时显示的数据

## 复制文本


