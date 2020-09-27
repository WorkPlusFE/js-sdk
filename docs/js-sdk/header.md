# 网页头部

通常我们访问一个非全屏的轻应用，往往需要对头部功能进行设置，该模块提供自定义标题及左右按钮的能力。

::: tip 提示
当访问一个轻应用时，移动端仅打开一个 WebView，也就是头部只会有一个，此时所有的设置都是作用在同一个头部上。例如常见的单页面应用（SPA）开发，前端页面的切换时，都需要修改标题。且为了确保应用的可用性，设置返回按钮事件时请谨慎处理。
:::

## 设置标题

更换头部 title。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="header.setTitle">

```js
w6s.header.setTitle('test title');
```
</CodeWrapper>

## WIP 设置返回按钮动作

更换左侧的返回按钮动作。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="header.leftButton">

```js
w6s.header.leftButton(
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

## WIP 还原返回按钮事件

清除左侧按钮事件和显示。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="header.clearLeftButton">

```js
w6s.header.clearLeftButton();
```
</CodeWrapper>

## WIP 锁定网页顶部栏

锁定顶部栏，使得顶部栏按钮无效。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="header.openWebView">

```js
// 锁定
w6s.header.navigation.lock();

// 解锁
w6s.header.navigation.unlock();
```
</CodeWrapper>

## WIP 设置右侧按钮动作

自定义右侧按钮，最多允许在右边定义三个按钮，每个按钮允许定义成下拉类型，下拉没有数量限制，但建议不超过 5 个。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |


**右键导航功能格式：**

```json
[
  {
    "icon": "1",
    "title": "更多",
    "action": "list",
    "value": ""
  },
  {
    "icon": "2",
    "title": "拍照",
    "action": "js",
    "value": "photo"
  },
  {
    "icon": "1",
    "title": "下一步",
    "action": "js",
    "value": "next"
  },
  {
    "icon": "3",
    "title": "刷新",
    "action": "system",
    "value": "refresh"
  }
]
```

上述为定义一个按钮的 JSON 格式，是由一个数组组成；格式采用**流水式布局**， 即数组中的第一个定义，为按钮本身的定义，它可以`List`，`Js`，`System`三者之一。

可定义包含三种行为：

1. List 下拉组件，表示点击会弹出一个 popview，只能在一级菜单中定义，在二级菜单中无效；
2. JS 调用 HTML 页面中的 JS 全局方法；可在一级，二级菜单中定义；
3. System 系统事件；内置的一些系统行为，比如刷新，分享等，可在一级，二级菜单中定义；

调用方法，每个按钮为一个数组:

<CodeWrapper fn="header.rightButtons">

```js
w6s.header.rightButtons({
  items: [
    [
      {"icon": "1", "title": "更多", "action": "list", "value": ""},
      {"icon": "2", "title": "aaa", "action": "js", "value": "aaa"},
      {"icon": "1", "title": "bbb", "action": "js", "value": "bbb"}
    ],
    [ 
      {"icon": "1", "title": "下一步", "action": "js", "value": "next"} 
    ]
  ],
});
```
</CodeWrapper>

如上，定义了两个右键按钮，第一个为更多，它是一个下拉式按钮，用户点击时，会出现 aaa、bbb 两个选项， 用户点击 aaa 时,会调用页面的 aaa 方法，点击 bbb 时，用调用 bbb 方法。

另一个是`下一步`按钮，这是个 JS 事件按钮，用户点击下一步时，会直接调用页面中的 JS（next）方法。

### 系统默认行为事件

系统行为有自己的默认图标，如用户未指定文字或图标，使用默认图标，否则使用用户指定的图标或文字（图片优先）。

| Action | 行为 |
|- | - |
| Refresh	| 刷新当前页面 |
| Share |	分享 |
| Close |	关闭 |

### 按钮图标规则

目前支持两种规则：

1. 使用系统内置图标，如下表；
2. 使用 base64，此时 icon 取值为 "icon": "base64:xxxxxx"。

**以下为系统内置图标：**

| 图标编号 | 图标  | 图标编号 |  图标 |
|--------|-----------| --------|-----------|
| 1 | <img :src="$withBase('/header/ICON_1.png')" alt="icon1" width="40px">  | 2 | <img :src="$withBase('/header/ICON_2.png')" alt="icon2" width="40px">  |
| 3 | <img :src="$withBase('/header/ICON_3.png')" alt="icon3" width="40px">  | 4 | <img :src="$withBase('/header/ICON_4.png')" alt="icon4" width="40px">  |
| 5 | <img :src="$withBase('/header/ICON_5.png')" alt="icon5" width="40px">  | 6 | <img :src="$withBase('/header/ICON_6.png')" alt="icon6" width="40px">  |
| 7 | <img :src="$withBase('/header/ICON_7.png')" alt="icon7" width="40px">  | 8 | <img :src="$withBase('/header/ICON_8.png')" alt="icon8" width="40px">  |
| 9 | <img :src="$withBase('/header/ICON_9.png')" alt="icon9" width="40px">  | 10 | <img :src="$withBase('/header/ICON_10.png')" alt="icon10" width="40px">  |
| 11 | <img :src="$withBase('/header/ICON_11.png')" alt="icon11" width="40px">  | 12 | <img :src="$withBase('/header/ICON_12.png')" alt="icon12" width="40px">  |
| 13 | <img :src="$withBase('/header/ICON_13.png')" alt="icon13" width="40px">  | 14 | <img :src="$withBase('/header/ICON_14.png')" alt="icon14" width="40px">  |
| 15 | <img :src="$withBase('/header/ICON_15.png')" alt="icon15" width="40px">  | 16 | <img :src="$withBase('/header/ICON_16.png')" alt="icon16" width="40px">  |
| 17 | <img :src="$withBase('/header/ICON_17.png')" alt="icon17" width="40px">  | |

以上图片均为白色，透明背景（为显示效果做了灰色背景处理）。

```json
{
  "icon": "3",
  "title": "刷新",
  "action": "system",
  "value": "refresh"
}
```

如上述定义，表示将使用图标3，也就是 <img :src="$withBase('/header/ICON_3.png')" alt="icon3" width="40px"> 

## 清除右侧按钮

清除右侧按钮事件和显示。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="header.clearRightButtons">

```js
w6s.header.clearRightButtons();
```
</CodeWrapper>


## 设置左侧的按钮和关闭

是否隐藏或显示左侧的按钮和关闭字样。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="header.visibleLeftButton">

```js
w6s.header.visibleLeftButton({
  showBack: false,
  showClose: false,
});
```
</CodeWrapper>

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| showBack | Boolean | 是否显示`返回`按钮图标 |
| showClose | Boolean | 是否显示`关闭`文字 |


## 修改顶部栏颜色

时间和电量的那一栏（最顶上），而`Header`部分的颜色，需要在后台添加应用的时候设置。

该方法无需调用接口，在 html 页面的`<head>`标签里添加该标签即可，其中 content 的内容必须为 HEX 格式（以井号开头）。

```html
<meta name="_navigation_color" content="#194c7b" />
```