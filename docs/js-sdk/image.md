# 图片

## 拍照
根据传入参数，决定是否对拍照后照片进行裁剪编辑, 同时会将图片上传到媒体中心并返回 mediaId。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持    | 支持 |

<CodeWrapper fn="image.takePicture">

```js
w6s.image.takePicture({
  editable: true,
  success: function(res) {},
  fail: function(err) {},
});
```
</CodeWrapper>

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| editable | Boolean | 是否进行裁剪，适用于设置头像 |

**返回数据**

| 参数 | 说明 |
| - | - | 
| mediaId | 上传媒体中心后返回的媒体id |
| imageURL | 压缩后图像存在本地的地址  |
| key | 原图像存在本地的地址  |
| imageInfo | 图片的基本信息，包括 height（高度）、width（宽度） 及 size（大小）  |


## 选择照片
调用手机相册，支持图片多选及单选，支持编辑剪裁(仅限于单选)，并且支持图片复选，选择完后会自动上传到媒体中心并返回相应的 mediaId。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持    | 支持 |

<CodeWrapper fn="image.chooseImages">

```js
w6s.image.chooseImages({
  multiple: false,
  imageKeys: ['file://图片本机地址'],
  editable: true,
  fileLimit: {
    maxSelectCount: 10,
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
| multiple | Boolean | 是否为图片多选 |
| imageKeys | Array[string] | 非必须，图片在本机的地址，用于图片复选 |
| editable | Boolean | 是否可对图片进行裁剪，仅在单选`multiple: false`时有效，默认为 true |
| fileLimit.maxSelectCount | Number |  非必须，多选时数量的限制，默认为 9 |
| fileLimit.singleSelectSize | Number | 非必须，单个文件选择大小限制(byte), -1表示不限制，默认为-1 |
| fileLimit.totalSelectSize | Number | 非必须，所有文件选择大小限制(byte), -1表示不限制，默认为-1 |

**返回数据**

| 参数 | 说明 |
| - | - | 
| mediaId | 上传媒体中心后返回的媒体id |
| imageURL | 压缩后图像存在本地的地址  |
| key | 原图像存在本地的地址  |
| imageInfo | 图片的基本信息，包括 height（高度）、width（宽度） 及 size（大小）  |


## 清除缓存
拍照或选择照片后都会生成压缩图片，可调用该方法进行清除。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持    | 支持 |

<CodeWrapper fn="image.cleanCompressImage">

```js
// 该方法没有返回
w6s.image.cleanCompressImage();
```
</CodeWrapper>

## 图片预览
传入图片地址进行图片预览，支持传入 position 表示从第几张开始预览。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持    | 支持 |

<CodeWrapper fn="image.showImages">

```js
// 该方法没有回调
w6s.image.showImages({
  urls: ['https://media.io/demo.png'],
  medias: ['媒体id'],
  position: 0,
});
```
</CodeWrapper>

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| urls |  Array[String] | 图片在本机的地址或图片的http(s)访问地址 |
| medias | Array[String] | 图片的 mediaId |
| position | Number \| String | 非必须，表示从第几张图片开始预览，0 为第一张 |

> `urls`和`medias`参数，只能二选一，如果同时传入，优先读取`urls`。

## 图片保存
传入图片地址，保存到手机本地。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持    | 支持 |

<CodeWrapper fn="image.saveImages">

```js
// 该方法没有回调
w6s.image.saveImages({
  url: '图片的 url 访问地址',
  mediaId: '图片mediaId',
  imageData: 'base64数据',
});
```
</CodeWrapper>

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| url | String | 图片的 url 访问地址 |
| mediaId |  String | 图片mediaId |
| imageData | String | base64数据 |

> mediaId、url、imageData 都是选填参数, 请根据具体的业务场景, 进行选择，三者只能选其一。

## 长按图片弹出框
弹出框包括`识别二维码`，`保存图片`等选项。

::: warning 该功能的常用场景描述
例如需要识别页面图片上的二维码，通用的交互都是需要长按图片，然后会弹出一个`Action Sheet`提示框，然后用户进行选择操作。但这里的`长按`需要调用者自行实现，并且需要把被长按的图片转换成`base64`作为传参。
:::

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持    | 支持 |

<CodeWrapper fn="image.actionForLongPressImage">

```js
// 该方法没有回调
w6s.image.actionForLongPressImage({
  imageData: 'base64数据',
});
```
</CodeWrapper>

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| imageData | String | base64数据 |

## * 转 Base64

将本地图片转换成 Base64字符串。

::: tip 提示
通常我们通过拍照或者打开相册来获取图片，而图片的访问地址都是本地绝对路径，基于 Webview 的安全机制，本地路径放到 `<img>` src 里，并不能显示出来，此时可以通过该方法把图片转换成 Base64 来使用。
:::

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="image.toBase64">

```js
w6s.image.toBase64({
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


## 图片添加水印

调起手机相册进行拍照，生成水印图片并返回。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持    | 支持 |

<CodeWrapper fn="image.takePhotoAndAddWaterMark">

```js
w6s.image.takePhotoAndAddWaterMark({
  content: 'test',
  fontSize: 14,
  color: '#FF5858',
  markDisable: false,
  timeEnable: true,
  locationEnable: true,
  success: function(res) {},
  fail: function(err) {},
});
```
</CodeWrapper>

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| content | String | 水印内容 |
| fontSize | Number \| String | 水印字号大小 |
| color | String | 水印字体颜色，仅支持[HEX](https://www.color-hex.com/)颜色码 |
| markDisable | Boolean | 非必须，屏蔽水印 |
| timeEnable | Boolean | 非必须，水印添加时间 |
| locationEnable | Boolean | 非必须，水印添加位置信息 |

**返回数据**

| 参数 | 说明 |
| - | - | 
| mediaId | 上传媒体中心后返回的媒体id |
| imageURL | 压缩后图像存在本地的地址  |
| key | 原图像存在本地的地址  |
| imageInfo | 图片的基本信息，包括 height（高度）、width（宽度） 及 size（大小）  |