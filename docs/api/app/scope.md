
# 应用范围

## 获取应用范围

```js
GET /v1/apps/{appId}/scope-views?access_token={access_token}&org_id={org_id}&source_type={source_type}
```

**请求头部：**

|请求头|说明 |
|---|---|
| Content-Type |application/json|

**请求参数：**

| 字段| 类型 | 是否必填|说明|
|---|---|---|---|
| access_token | String | Y | 访问令牌 |
| appId | String | Y | 应用标识 |
| org_id | String | N | 组织标识 |
| source_type | String | N | 枚举,NATIVE/ISV,默认值为NATIVE,ISV应用时传ISV |

**请求示例：**

```js
/v1/apps/92bc3faa-12bd-4afc-9962-01f2410f0bee/scope-views?access_token=ac2a8470c0fb4ad2a27edd7459c6c770&org_id=312
```

**返回数据：**

<details>
<summary>点击查看返回数据</summary>

```json
{
  "status": 0, 
  "message": "Everything is ok.", 
  "result": [
    {
      "id": 312, 
      "path": "/232/312/", 
      "name": "研发中心(导入)", 
      "children": [
        {
          "id": 315, 
          "path": "/232/312/315/", 
          "name": "研发二部(导入)", 
          "children": [ ]
        }, 
        {
          "id": 313, 
          "path": "/232/312/313/", 
          "name": "研发一部(导入)", 
          "children": [ ]
        }
      ]
    }
  ]
}
```
</details>

**错误返回值：**

| status | message |说明|
|---|---|---|
| 10011 |token not found.|访问令牌不存在|

## 应用管理员信息

```js
GET /v1/apps/{appId}/admins?access_token={access_token}&name={name}&source_type={source_type}
```

**请求头部：**

|请求头|说明 |
|---|---|
| Content-Type |application/json|

**请求参数：**

| 字段| 类型 | 是否必填|说明|
|---|---|---|---|
| access_token | String | Y | 访问令牌 |
| appId | String | Y | 应用标识 |
| name | String | N | 雇员名称（支持模糊查询,名称、昵称、拼音、拼音首字母等） |
| source_type | String | N | 枚举,NATIVE/ISV,默认值为NATIVE,ISV应用时传ISV |

**请求示例：**

```js
/v1/apps/dafc2d03-3991-4de0-91d6-de3135c1fb4f/admins?access_token=e62970d58f6a40c7b68040dabe50f678
```

**返回数据：**

<details>
<summary>点击查看返回数据</summary>

```json
{
  "status": 0, 
  "message": "Everything is ok.", 
  "result": {
    "records": [
      {
        "domain_id": "atwork", 
        "org_code": "85939199-6424-4f28-84d4-fce2aedf0e64", 
        "display_name": "XXX", 
        "employee_type_id": 125, 
        "employee_type": "正式员工", 
        "id": 829, 
        "name": "XXX", 
        "type": "EMPLOYEE", 
        "sort_order": 999, 
        "user_id": "53419de6c13a494b85187f20116338f1", 
        "username": "lizj", 
        "nickname": "XXX", 
        "status": "ACTIVATED", 
        "senior": false, 
        "gender": "MALE", 
        "birthday": 1477612800000, 
        "pinyin": "zhijun", 
        "initial": "zj", 
        "more_info": { }, 
        "settings": { }, 
        "mobile": "", 
        "email": "123@test.com", 
        "created": 0, 
        "last_modified": 0, 
        "expired": 0, 
        "disabled": false, 
        "root_org_info": {
          "id": 144, 
          "name": "研发部"
        }, 
        "positions": [
          {
            "employee_id": 829, 
            "org_id": 332, 
            "org_name": "财经管理部", 
            "corp_id": 144, 
            "corp_name": "研发部", 
            "job_title": "测试", 
            "path": "/144/332/", 
            "type": "DEPT", 
            "primary": true, 
            "chief": false
          }
        ]
      }
    ], 
    "total_counts": 1
  }
}
```
</details>

**错误返回值：**

| status | message |说明|
|---|---|---|
| 10011 |token not found.|访问令牌不存在|


## 超级应用管理员信息

```js
GET /v1/apps/{appId}/super-admins?access_token={access_token}&name={name}&source_type={source_type}
```

**请求头部：**

|请求头|说明 |
|---|---|
| Content-Type |application/json|

**请求参数：**

| 字段| 类型 | 是否必填|说明|
|---|---|---|---|
| access_token | String | Y | 访问令牌 |
| appId | String | Y | 应用标识 |
| name | String | N | 雇员名称（支持模糊查询） |
| source_type | String | N | 枚举,NATIVE/ISV,默认值为NATIVE,ISV应用时传ISV |

**请求示例：**

```js
/v1/apps/dafc2d03-3991-4de0-91d6-de3135c1fb4f/super-admins?access_token=e62970d58f6a40c7b68040dabe50f678
```

**返回数据：**

<details>
<summary>点击查看返回数据</summary>

```json
{
  "status": 0, 
  "message": "Everything is ok.", 
  "result": {
    "records": [
      {
        "domain_id": "atwork", 
        "org_code": "85939199-6424-4f28-84d4-fce2aedf0e64", 
        "display_name": "XXX", 
        "employee_type_id": 125, 
        "employee_type": "正式员工", 
        "id": 829, 
        "name": "XXX", 
        "type": "EMPLOYEE", 
        "sort_order": 999, 
        "user_id": "53419de6c13a494b85187f20116338f1", 
        "username": "lizj", 
        "nickname": "XXX", 
        "status": "ACTIVATED", 
        "senior": false, 
        "gender": "MALE", 
        "birthday": 1477612800000, 
        "pinyin": "zhijun", 
        "initial": "zj", 
        "more_info": { }, 
        "settings": { }, 
        "mobile": "", 
        "email": "123@test.com", 
        "created": 0, 
        "last_modified": 0, 
        "expired": 0, 
        "disabled": false, 
        "root_org_info": {
          "id": 144, 
          "name": "研发部"
        }, 
        "positions": [
          {
            "employee_id": 829, 
            "org_id": 332, 
            "org_name": "财经管理部", 
            "corp_id": 144, 
            "corp_name": "研发部", 
            "job_title": "测试", 
            "path": "/144/332/", 
            "type": "DEPT", 
            "primary": true, 
            "chief": false
          }
        ]
      }
    ], 
    "total_counts": 1
  }
}
```
</details>

**错误返回值：**

| status | message |说明|
|---|---|---|
| 10011 |token not found.|访问令牌不存在|