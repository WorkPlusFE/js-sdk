# 文件

## 单选文件

打开 WorkPlus 文件选择管理器，选择单个文件并返回。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="file.selectFile">

```js
w6s.file.selectFile({
  success: function(res) {},
  fail: function(err) {},
});
```
</CodeWrapper>

**返回数据**

| 参数 | 说明 |
| - | - | 
| filePath | 文件在本机的路径  |

## 多选文件

打开 WorkPlus 文件选择管理器，选择多个文件并返回。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="file.selectFiles">

```js
w6s.file.selectFiles({
  success: function(res) {},
  fail: function(err) {},
});
```
</CodeWrapper>

**返回数据**

| 参数 | 说明 |
| - | - | 
| filePath | 文件在本机的路径  |

## 文件选择并自动上传

打开 WorkPlus 文件选择管理器，根据参数状态决定单选或多选文件，并上传该文件到后台，返回值带 mediaId。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="file.chooseFiles">

```js
w6s.file.chooseFiles({
  multiple: true,
  file_keys: ['已选文件本地地址'],
  file_limit: {
    max_select_count: 9,
    single_select_size: -1,
    total_select_size: -1,
  },
  success: function(res) {},
  fail: function(err) {},
});
```
</CodeWrapper>

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| multiple | Boolean | 单选或多选 |
| file_keys | Array[String] | 已选文件本地地址数组，用于复选 |
| file_limit.max_select_count | Number | 多选时数量的限制，默认为 9 |
| file_limit.single_select_size | Number | 单个文件选择大小限制(byte),-1表示不限制，默认为 -1 |
| file_limit.total_select_size | Number | 所有文件选择大小限制(byte),-1表示不限制，默认为 -1 |

**返回数据**

| 参数 | 说明 |
| - | - | 
| filePath | 文件在本机的路径  |
| mediaId | 该文件在媒体中心的 mediaId  |
| name | 文件名字 |

## 打开文件详情

通过指定 mediaId, fileName 等参数, 打开文件详情界面。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="file.openFileDetail">

```js
// 该方法没有回调
w6s.file.openFileDetail({
  filePath: 'file://xxx.png',
  fileName: 'demo',
  fileSize: 100 * 1024,
  mediaId: 'demo-mediaId',
  isImage: true,
});
```
</CodeWrapper>

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| filePath | String | 可选参数，文件路径, 若传入该参数, 则优先以该路径为主; 支持本地以及http url 地址 |
| fileName | String | 文件名 |
| fileSize | Number | 非必须，文件大小，单位 byte |
| mediaId | String | 可选参数，传入媒体id，详见`filePath`参数说明 |
| isImage | Boolean | 必须，指定文件是否是图片, 若为 true, 客户端则强制打开图片预览界面, false 则通过 fileName后缀来判断文件类型, 非图片则使用文件详情界面 |

## 本地打开文件

原生打开文件，pdf、excel、word 及 ppt 等。

::: tip 与"打开文件详情"的区别
该方法是直接通过系统的方式去打开本地文件，而`打开文件详情`则是打开一个 WorkPlus 的文件预览页面，该页面具备下载或预览的功能。
:::

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="file.readFile">

```js
// 该方法没有回调
w6s.file.readFile({
  path: 'file://文件地址'
});
```
</CodeWrapper>

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| path | String | 文件访问地址 |

## 判断文件是否存在

判断指定路径的文件是否存在。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="file.isFileExist">

```js
w6s.file.isFileExist({
  path: 'file://文件地址',
  success: function(res) {},
  fail: function(err) {},
});
```
</CodeWrapper>

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| path | String | 文件访问地址 |

**返回数据**

| 参数 | 说明 |
| - | - | 
| exist | Boolean, 表示文件是否存在  |

## 文件上传 wip


## 文件下载 wip


## 转 Base64

将本地图片转换成 Base64字符串。

::: tip 提示
通常我们通过拍照或者打开相册来获取图片，而图片的访问地址都是本地绝对路径，基于 Webview 的安全机制，本地路径放到 `<img>` src 里，并不能显示出来，此时可以通过该方法把图片转换成 Base64 来使用。
:::

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="file.toBase64">

```js
w6s.file.toBase64({
  filePath: 'file://图片本地地址',
  success: function(res) {},
  fail: function(err) {},
});
```
</CodeWrapper>

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| filePath | String | 图片本地地址 |

**返回数据**

| 参数 | 说明 |
| - | - | 