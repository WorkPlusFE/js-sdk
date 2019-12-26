# 图片

## 拍照

打开相机拍照，并返回照片地址，包括压缩后的

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持    | 支持 |
| 版本要求 | 4.5     | 4.5  |

### 使用

```js
// normal
w6s.image.takePhoto({
  success: function(res) {},
  fail: function(err) {},
});

// promise
w6s.image.takePhoto().then(function success() {}, function fail() {});
```

### 参数说明

| 属性  | 类型   | 是否必须 | 说明       |
| ----- | ------ | -------- | ---------- |
| title | string | 否       | 显示的标题 |



## 拍照并编辑

## 打开相册