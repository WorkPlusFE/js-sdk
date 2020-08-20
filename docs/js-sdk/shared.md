# 通用

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


## 获取当前的租户 ID

获取当前租户 id，即域 id。

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
