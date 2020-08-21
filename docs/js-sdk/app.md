# 应用

## 路由跳转

根据参数跳转到指定的 App。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="app.route">

```js
w6s.app.route({
  schemeUrl: 'workplus://voip',
  success: function(res) {},
  fail: function(err) {},
});
```
</CodeWrapper>

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| scheme_url |  String | 除了原生应用的`schema_url`规则, 也支持内部的应用协议, 例如`workplus://openApp?id=abc&domainId=abc` |

