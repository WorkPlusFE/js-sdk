# 单点登录

第三方应用在接入 WorkPlus 平台时，往往需要和 WorkPlus 用户系统集成。

目前 WorkPlus 实现单点登录的机制如下：

1. 客户端打开第三方应用时，先以当前登录用户生成用户 Ticket，之后在跳转时会带上该 Ticket 参数；
2. 第三方应用根据 Ticket 参数，验证该 Ticket，如该 Ticket 有效，会返回关联的用户信息。

::: tip 提示
`access_token`的获取方式，请查看 [接入流程-获取 AccessToken](/api/getStart.md#获取-accesstoken)。
:::

## 验证用户 Ticket

```js
GET /v1/tickets/{ticket}?access_token={access_token}
```

**请求头部：**

|请求头|说明 |
|---|---|
| Content-Type |application/json|

**请求参数：**

| 字段| 类型 | 是否必填|说明|
|---|---|---|---|
|ticket |String|Y|用户ticket|
|access_token|String|Y|访问令牌|

**返回数据：**

| 字段        | 类型     | 说明             |
| --------- | ------ | -------------- |
| client_id | String | 该ticket所属的用户标识 |
| domain_id | String | 该ticket所属的域标识  |
| org_id    | String | 该ticket所属的组织标识 |
| device_id | String | 该ticket所属的设备标识 |

**成功返回值：**
```json
{
  "status": 0, 
  "message": "Everything is ok.", 
  "result": {
    "domain_id": "atwork", 
    "client_id": "a86e83a26bee5d5c", 
    "org_id": "85df0e64", 
    "device_id": "test10fdfd0111"
  }
}
```

**错误返回值：**

| status | message |说明|
|---|---|---|
| 10015 |ticket expired.|ticket已过期.|
| 10016 |ticket not found.|ticket不存在.|