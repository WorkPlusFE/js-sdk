# 网络

## 当前连接Wifi信息
<!-- OK -->
获取当前连接 Wifi 信息, 包括 bssid、名字等。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="network.getWifiInfo">

```js
w6s.network.getWifiInfo({
  success: function(res) {},
  fail: function(err) {},
});
```
</CodeWrapper>

**返回数据**

| 参数 | 说明 |
| - | - | 
| bssid | wifi 接入点标识  |
| name | wifi 名称  |

::: warning 提示
同一个路由设备，`bssid`可能会有多个不同的值。
:::