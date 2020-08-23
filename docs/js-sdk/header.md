# 网页头部

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


## 设置左侧的按钮和关闭

是否隐藏或显示左侧的按钮和关闭字样。

## 更换左侧侧按钮和定义动作 ？？？


## 修改顶部栏颜色