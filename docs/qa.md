---
sidebar: auto
---

# 常见问题

## JS-SDK

### 回调使用 alert 输出结果没反应

部分接口是会弹出原生选择界面，例如选择组织架构人员。选择人员后，在点击确认时，会关闭这个页面，此时回调方法马上执行 alert，由于 UiWebView 的 bug，会导致 CPU 飙高，出现页面卡死的情况。

而 WkWebView 不存在该问题。

所以，尽可能不要使用 alert 来检验接口返回值，可以使用 [VConsole](/light-app/vconsole.html) 等调试工具。

### 可以多次注入 cordovajs 吗？

不可以。

如果你是使用原始 Cordova API，请确保一个 webview 只注入一次。如果使用 js-sdk，则无需考虑该问题，因为 sdk 内部会自动处理。
