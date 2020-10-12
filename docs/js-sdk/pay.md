# 支付

## 微信支付

提供微信支付的能力。

::: tip 提示
WorkPlus 应用已默认集成`微信支付SDK`，但相关`app_id`信息需要自行申请。
:::

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持    | 支持 |

<CodeWrapper fn="pay.wxPay" :qrcode="false">

```js
w6s.pay.wxPay({
  appId: 'id',
  requestData: 'demo-data',
  success: function(res) {},
  fail: function(err) {},
});
```
</CodeWrapper>

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| appId | String | sdk appId |
| requestData | String | sdk请求所需要参数, 包括具体商户 id, 金额, 数据加密等, 格式参考微信文档PayReq类 |

**返回数据**

| 参数 | 说明 |
| - | - | 
| code | 微信支付回调结果 |
| message | 结果描述  |