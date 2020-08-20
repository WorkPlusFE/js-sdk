# 设备

## 获取 IP 地址
<!-- OK -->
获取手机设备当前连接网络的 IP 地址。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="device.getIpAddress">

```js
w6s.device.getIpAddress({
  success: function(res) {},
  fail: function(err) {},
});
```
</CodeWrapper>

**返回数据**

| 参数 | 说明 |
| - | - | 
| result | 接口状态  |
| ipAddress | 手机连接网络的ip地址  |

## 获取设备信息
<!-- OK -->
获取当前设备和 WorkPlus 的一些信息。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="device.getDeviceInfo">

```js
w6s.device.getDeviceInfo({
  success: function(res) {},
  fail: function(err) {},
});
```
</CodeWrapper>

**返回数据**

| 参数 | 说明 |
| - | - | 
| device_id | 设备id  |
| platform | 平台（Android/iOS）  |
| domain_id | 域id  |
| product_version | 当前应用的 versionCode |
| system_version | 使用的系统版本（如 iOS9、Android 6.0） |
| system_model | 使用的手机型号（如 iPhone7、Android sumsang） |
| channel_id | 应用的包名  |
| channel_vendor | Apple or ？|


## 获取运动数据 <Badge text="v3.12.1+" type="warning" />
<!-- OK -->
获取设备当天凌晨 0 点至当前时间的运动数据。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="device.getPedometerData">

```js
w6s.device.getPedometerData({
  success: function(res) {},
  fail: function(err) {},
});
```
</CodeWrapper>

**返回数据**

| 参数 | 说明 |
| - | - | 
| steps | 步数  |
| distances | 距离，单位米  |

::: warning 提示
该接口无法获取其他设备的步数，例如运动手环。
:::

