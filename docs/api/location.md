# 地理位置

## 获取定位信息
<!-- OK -->
返回地理位置信息。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="location.getLocation">

```js
w6s.location.getLocation({
  success: function(res) {},
  fail: function(err) {},
});
```
</CodeWrapper>

**返回数据**

| 参数 | 说明 |
| - | - | 
| latitude | 纬度  |
| longitude | 经度  |
| address | 具体地址信息  |
| city | 所在城市  |
| district | 所在的区  |
| street | 所在街道  |
| aoiName | 推测的建筑名称 |

::: tip 提示
地理位置信息是通过`高德地图SDK`返回。
:::