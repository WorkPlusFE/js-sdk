# 通用

## 扫一扫

调用相机扫描二维码。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="util.scanner">

```js
w6s.util.scanner({
  success: function(res) {},
  fail: function(err) {},
});
```
</CodeWrapper>


## 语音转文本

执行时会弹出原生界面，录音完毕后，返回文本信息。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="util.voiceToText">

```js
w6s.util.voiceToText({
  success: function(res) {},
  fail: function(err) {},
});
```
</CodeWrapper>

**返回数据**

| 参数 | 说明 |
| - | - | 
| message | 语音转出的文本 |


## 复制文本

把文本内容复制到粘贴板中。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="util.copyText">

```js
w6s.util.copyText('open.workplus.io');
```
</CodeWrapper>

> 该方法没有回调，若要提示复制成功信息，在方法执行后提示即可。
