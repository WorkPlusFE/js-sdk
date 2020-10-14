# 文件

::: warning 关于文件本地路径
文件相关的接口，若需传入本地文件路径，都需要去掉`file://`开头。

例如，通常我们获取到的本地图片路径为：`file:///var/mobile/xxxx/test.xlsx`，需去掉`file://`，变成`/var/mobile/xxxx/test.xlsx`。
:::

## 选择文件

打开 WorkPlus 文件选择管理器，支持单选或多选，并自动上传文件到后台媒体中心，返回对应 mediaId。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="file.chooseFiles">

```js
w6s.file.chooseFiles({
  multiple: true,
  fileKeys: ['已选文件本地地址'],
  fileLimit: {
    maxSelectCount: 9,
    singleSelectSize: -1,
    totalSelectSize: -1,
  },
  success: function(res) {},
  fail: function(err) {},
});
```
</CodeWrapper>

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| multiple | Boolean | 是否为多选 |
| fileKeys | Array[String] | 已选文件本地地址数组，用于复选 |
| fileLimit.maxSelectCount | Number | 非必须，多选时数量的限制，默认为 9 |
| fileLimit.singleSelectSize | Number | 非必须，单个文件选择大小限制(byte),-1表示不限制，默认为 -1 |
| fileLimit.totalSelectSize | Number | 非必须，所有文件选择大小限制(byte),-1表示不限制，默认为 -1 |

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

<CodeWrapper custom-link="file/openFileDetail">

```js
// 该方法没有回调
w6s.file.openFileDetail({
  filePath: '文件地址',
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
  path: '文件地址'
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
  path: '文件地址',
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

## 文件下载
下载文件到本地，可以在 WorkPlus 文件选择器中看到。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper :qrcode="false" fn="file.download">

```js
w6s.file.download({
  source: 'https://demo.com/xx.file',
  target: 'file:///var/mobile/xx/files/xxx.file',
  trustAllHosts: false,
  options: {
    headers: {},
  },
  success: function(res) {},
  fail: function(res) {},
});
```
</CodeWrapper>

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| source | string | 文件的下载地址，需做 encodeURI 处理  |
| target | string | 文件下载后存放在本级的地址 |
| trustAllHosts | boolean | 可选参数，默认为false。 如果设置为true，则它接受所有安全证书。 这很有用，因为Android拒绝自签名安全证书。 不建议用于生产。 |
| options | object | 通常用于设置头部信息 |

具体接口参数说明，请查看[官方文档](https://cordova.apache.org/docs/en/6.x/reference/cordova-plugin-file-transfer/index.html#download)。

**返回数据**

下载成功后，将会执行`success`回调方法，并返回一个`FileEntry`对象。若失败，将触发`fail`回调方法，返回一个`FileTransferError`错误对象。

::: tip 关于 target 参数
通常情况下，我们无法得知设备本地存储文件的具体位置，可以通过[获取文件目录路径](/js-sdk/file.html#获取文件目录路径)获取。
:::

## 文件上传

上传本地文件到服务器，通常用于选择图片或者文件后上传到第三方服务器。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper :qrcode="false" fn="file.upload">

```js
w6s.file.upload({
  fileURL: '文件本地地址',
  server: '上传媒体的服务器地址',
  trustAllHosts: false,
  success: function(res) {
    // 上传成功回调
  },
  fail: function(err) {
    // 上传失败回调
  },
  progress: function(loaded, total) {
    // loaded：已经上传的，tottal：文件总大小
    // 可在此处处理文件上传的进度计算
  },
});
```
</CodeWrapper>

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| fileURL | string | 文件在设备中的本地地址 |
| server | string | 上传文件的服务器地址 |
| trustAllHosts | boolean | 可选参数，默认为false。 如果设置为true，则它接受所有安全证书。 这很有用，因为Android拒绝自签名安全证书。 不建议用于生产。 |

具体接口参数说明，请查看[官方文档](https://cordova.apache.org/docs/en/6.x/reference/cordova-plugin-file-transfer/index.html#upload)。

## 获取文件目录路径

获取设备的文件存在目录，包括下载文件夹及网盘（如果有）及用户自定义目录。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="file.getFilePath">

```js
w6s.file.getFilePath({
  system: 'file',
  custom: 'test',
  success: function(res) {},
  fail: function(err) {},
});
```
</CodeWrapper>

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| system | string | 表示 WorkPlus 定义的路径，目前支持`file`, `dropbox`类型, 分别获取下载文件目录, 跟网盘目录 |
| custom | string | 轻应用自定义的用户目录，如传入参数`"custom" : "abc"`, app 将创建`sdcard_root/app_file/username/abc`的文件目录, 并返回路径给调用者 |

注意，以上参数`system`优先级较高, 即两个类型同时传入时, 以`system`为准。

