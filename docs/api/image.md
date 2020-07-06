# 图片

## 拍照

打开手机相机进行拍照，并返回照片地址，包括压缩后的。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |


<CodeWrapper fn="image.takePhoto">

```js
// normal
w6s.image.takePhoto({
  success: function(res) {},
  fail: function(err) {},
});

// promise
w6s.image.takePhoto().then(function success() {}, function fail() {});
```
</CodeWrapper>

**返回数据**

| 参数 | 说明 |
| - | - | 
| imageURL | 压缩后图像存在本地的地址  |
| key | 原图像存在本地的地址  |
| imageInfo | 图片的基本信息，包括 height（高度）、width（宽度） 及 size（大小）  |

## 拍照并编辑

拍照后可对图片进行编辑，例如涂鸦或裁剪。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持    | 支持 |

```js
// normal
w6s.image.takePhotoWithEdit({
  success: function(res) {},
  fail: function(err) {},
});

// promise
w6s.image.takePhotoWithEdit().then(function success() {}, function fail() {});
```

**返回数据**

| 参数 | 说明 |
| - | - | 
| imageURL | 压缩后图像存在本地的地址  |
| key | 原图像存在本地的地址  |
| imageInfo | 图片的基本信息，包括 height（高度）、width（宽度） 及 size（大小）  |


## 选择单张图片

调用图片相册，选择图片（单张）并压缩返回。 

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持    | 支持 |

```js
// normal
w6s.image.selectImage({
  success: function(res) {},
  fail: function(err) {},
});

// promise
w6s.image.selectImage().then(function success() {}, function fail() {});
```

**返回数据**

| 参数 | 说明 |
| - | - | 
| imageURL | 压缩后图像存在本地的地址  |
| key | 原图像存在本地的地址  |
| imageInfo | 图片的基本信息，包括 height（高度）、width（宽度） 及 size（大小）  |


## 选择单张图片并截图返回

调用图片相册，选择图片并截取返回。 

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持    | 支持 |

```js
// normal
w6s.image.selectImageWithEdit({
  success: function(res) {},
  fail: function(err) {},
});

// promise
w6s.image.selectImageWithEdit().then(function success() {}, function fail() {});
```

**返回数据**

| 参数 | 说明 |
| - | - | 
| imageURL | 压缩后图像存在本地的地址  |
| key | 原图像存在本地的地址  |
| imageInfo | 图片的基本信息，包括 height（高度）、width（宽度） 及 size（大小）  |

## 选择多张图片

调用图片相册，选择多张图片并压缩返回，并且支持传入已选图片进行复选。 

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持    | 支持 |

```js
// normal
w6s.image.selectImages({
  imageKeys: ['file://本机的地址'],
  medias: 1,
  success: function(res) {},
  fail: function(err) {},
});

// promise
w6s.image.selectImages({
  imageKeys: ['file://本机的地址'],
  medias: 1,
}).then(function success() {}, function fail() {});
```

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| imageKeys |  Array[String] | 非必须，图片在本机的地址，用于图片复选 |
| medias | Number | 非必须，相册选择时，默认只可选择图片， 传入 1 表示需支持视频选择 |

**返回数据**

| 参数 | 说明 |
| - | - | 
| imageURL | 压缩后图像存在本地的地址  |
| key | 原图像存在本地的地址  |
| imageInfo | 图片的基本信息，包括 height（高度）、width（宽度） 及 size（大小）  |

## 清除压缩后的图片

拍照或选择照片后都会生成压缩图片，调用这个方法去清除。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持    | 支持 |

```js
// normal
w6s.image.cleanCompressImage({
  success: function(res) {},
  fail: function(err) {},
});

// promise
w6s.image.cleanCompressImage().then(function success() {}, function fail() {});
```

## 图片预览 <Badge text="v3.1.3+" type="warning" />

传输图片地址，预览图片，支持传入 position 表示从第几张开始预览。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持    | 支持 |

```js
// normal
w6s.image.showImages({
  success: function(res) {},
  fail: function(err) {},
});

// promise
w6s.image.showImages().then(function success() {}, function fail() {});
```

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| urls |  Array[String] | 图片在本机的地址 |
| medias | Array[String] | 图片的 mediaId |
| position | Number | 非必须，表示从第几张图片开始预览，0 为第一张 |


## 图片保存

传入图片地址，保存到手机本地。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持    | 支持 |

```js
// normal
w6s.image.saveImages({
  success: function(res) {},
  fail: function(err) {},
});

// promise
w6s.image.saveImages().then(function success() {}, function fail() {});
```

**参数说明**

> mediaId、url、imageData 都是选填参数, 请根据具体的业务场景, 进行选择。

| 参数 | 类型 | 说明|
| - | - | - |
| mediaId |  String | 图片mediaId |
| url | String | 图片的 url 访问地址 |
| imageData | String | base64数据 |


## 长按图片弹出框

弹出框包括`识别二维码`，`保存图片`等选项。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持    | 支持 |

```js
// normal
w6s.image.actionForLongPressImage({
  success: function(res) {},
  fail: function(err) {},
});

// promise
w6s.image.actionForLongPressImage().then(function success() {}, function fail() {});
```

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| imageData | String | base64数据 |


## 拍照并自动上传 <Badge text="v3.1.3+" type="warning" />

根据传入参数，决定是否对拍照后照片进行裁剪编辑, 同时会将图片上传到媒体中心并返回 mediaId。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持    | 支持 |

```js
// normal
w6s.image.takePicture({
  success: function(res) {},
  fail: function(err) {},
});

// promise
w6s.image.takePicture().then(function success() {}, function fail() {});
```

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| editable | Boolean | 是否进行裁剪，true 表示需要裁剪，false 即反之 |

**返回数据**

| 参数 | 说明 |
| - | - | 
| mediaId | 上传媒体中心后返回的媒体id |
| imageURL | 压缩后图像存在本地的地址  |
| key | 原图像存在本地的地址  |
| imageInfo | 图片的基本信息，包括 height（高度）、width（宽度） 及 size（大小）  |