# 接入流程

WorkPlus 平台作为企业移动应用的统一入口，提供了用户身份集成，应用接入等基础能力接口。第三方应用主动调用接口时，需带上AccessToken 参数。AccessToken 参数由 DomainId，OrgId，AppKey，AppSecret 获取。

具体需要以下步骤：

1. 以组织管理员身份登录后台创建应用，并获取 DomainId，OrgId，AppKey 及A ppSecret 等信息；
2. 通过 DomainId，OrgId，AppKey 及 AppSecret 获取 AccessToken；
3. 通过 AccessToken 调用相关接口。

## 获取 AppKey 及 AppSecret

登录管理后台并创建应用。创建成功后，可以在应用管理列表，找到对应的应用，点击会弹出下图的信息框，AppKey 及 AppSecret 分别对应图中的`应用KEY`及`应用SECRET`。

<p class="w6s-image">
  <img :src="$withBase('/api/appKeys.png')" alt="获取 AppKey 及 AppSecret" width="60%">
</p>

## 获取 AccessToken

通过 DomainId，OrgId，AppKey 及 AppSecret 调用以下接口获取 AccessToken:

```js
POST https://demo-api.workplus.io/v1/token
```

> 实际 API 接口地址，以所部署环境为准。

**请求头部：**

| 请求头 | 说明 |
| - | - |
| Content-Type | application/json |

**请求格式：**

```json
{
  "grant_type": "client_credentials",
  "scope": "app",
  "domain_id": "DomainId",
  "org_id": "OrgId",
  "client_id": "AppKey",
  "client_secret": "5tAkUIt1rrnP0WNLg7BWYuuqwzn3xRoO"
}
```

| 参数 | 类型 | 说明|
| - | - | - |
| grant_type |  String | 固定值 `client_credentials` |
| scope | String | 固定值 `app` | 
| domain_id | String | 应用所在域的域id | 
| org_id | String | 应用所在组织的组织id | 
| client_id | String | 应用的 appKey | 
| client_secret | String | 应用的 appSecret | 

**返回数据：**

```json
{
  "status": 0, 
  "message": "Everything is ok.", 
  "result": {
    "access_token": "7447497d58de4d55879ce1e441a101c4", 
    "refresh_token": "02a639c9bffc4640aa5045ded3902a31", 
    "issued_time": 1484882719965, 
    "expire_time": 1487474719965, 
    "client_id": "92bc3faa-12bd-4afc-9962-01f2410f0bee"
  }
}
```

**成功返回字段说明：**

| 字段 | 类型 | 说明|
| - | - | - |
| client_id	| String	| 当前登录用户的标识 |
| access_token	| String	| 应用的身份凭证 |
| refresh_token	| String	| 更新身份凭证 |
| issued_time	| String	| access_token的生效时间 |
| expire_time	| String	| access_token的过期时间 |

**错误返回值：**

| 状态码 | 说明|
| - | - |
| 202102 |	没有对应的应用 |
| 202104 |	应用认证失败	|
