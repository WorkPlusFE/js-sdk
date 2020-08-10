# 认证

## 获取临时 Ticket

为当前登录用户获取一个临时性的 Ticket。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="auth.getUserTicket">

```js
w6s.auth.getUserTicket({
  success: function(res) {},
  fail: function(err) {},
});
```
</CodeWrapper>

**返回数据**

| 参数 | 说明 |
| - | - | 
| user_ticket | 申请到的用户 Ticket |

## 获取 Api 地址

获取当前 App 请求的后台 api 地址。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="auth.getServerInfo">

```js
w6s.auth.getServerInfo({
  success: function(res) {},
  fail: function(err) {},
});
```
</CodeWrapper>

**返回数据**

| 参数 | 说明 |
| - | - | 
| api_url | App 后台 api 地址 |

## 退出登录

通过轻应用告知当前 accessToken 过期，WorkPlus 将退出当前登录状态。

::: warning 警告
从 H5 的角度，强制退出登录，是属于比较容易让用户产生误解的行为，请慎用该方法！！
:::

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="auth.onAccessTokenOverdue">

```js
w6s.auth.onAccessTokenOverdue();
```
</CodeWrapper>

## 获取当前的租户id

获取当前租户id，即域id。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="auth.getTenantID">

```js
w6s.auth.getTenantID({
  success: function(res) {},
  fail: function(err) {},
});
```
</CodeWrapper>

**返回数据**

| 参数 | 说明 |
| - | - | 
| domain_id | 当前的域id |
| tenant_id | 当前的域id(2.0版本的字段) |

## 人脸识别

唤起人脸识别验证，具体 SDK 以应用的打包配置为准

> 非默认功能，需要定制

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="auth.faceBizValid">

```js
w6s.auth.faceBizValid();
```
</CodeWrapper>


## 获取签名信息

针对特定的平台获取签名信息。

> 非默认功能，需要定制

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="auth.getSignature">

```js
w6s.auth.getSignature({
  success: function(res) {},
  fail: function(err) {},
});
```
</CodeWrapper>

**返回数据**

| 参数 | 说明 |
| - | - | 
| channel_id |  |
| signature |  |
| nonce |  |
| timestamp |  |

