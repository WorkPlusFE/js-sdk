# 雇员

## 雇员列表

```js
GET http://{host}:{port}/v1/admin/organizations/{code}/employees?access_token={access_token}
```

**请求参数：**

| 字段 | 类型 | 是否必填 | 说明 |
| - | - | -- | --- |
| domain_id | String | Y | 域信息 |
| code | String | Y | 组织标识 |
| type | String | N | 默认值为"id",为"username"时,query为用户名查询 |
| query | String | N | 查询条件 |
| path | String | N | 组织路径,非空时, 查该路径下, 符合query查询条件的雇员 |
| matching | boolean | N | 为true时, 根据type类型不同, 按`,`隔开查雇员列表, 为false时, 模糊查询该机构下的雇员信息 |


**请求示例：**

1. 根据userid批量查询雇员信息
```js
/v1/admin/organizations/{code}/employees?access_token={access_token}&matching=true&query=userId1,userId2,userId3
```

2. 根据username批量查询雇员信息
```js
/v1/admin/organizations/{code}/employees?access_token={access_token}&matching=true&type=username&query=username1,username2,username3
```

3. 指定组织节点查询雇员信息
```js
/v1/admin/organizations/{code}/employees?access_token={access_token}&org_id=999&recursion=true
```

4. 指定路径查询雇员信息,path每个节点均为为orgId,query匹配雇员名
```js
/v1/admin/organizations/{code}/employees?access_token={access_token}&path=/111/222/333&query=aaa
```

**响应示例：**

<details>
<summary>点击查看响应数据</summary>

```json
{
  "status": 0, 
  "message": "ok", 
  "result": [
    {
      "id": "xxxx", // 雇员ID
      "type": "EMPLOYEE", // 雇员类型,固定值
      "domain_id": "xxx", // 域标识
      "org_code": "xxx",  //组织标识
      "display_name": "李四", //名称
      "name": "李四", // 名称
      "pinyin": "lisi", //拼音
      "initial": "ls", //拼音首字母
      "gender": "MALE", //姓名
      "email": "1231414324@qq.com", //邮箱
      "status": "ACTIVATED", //状态,已激活
      "sn": "IMPL00001", // 工号
      "user_id": "xxx", // 用户ID
      "username": "****", // 账号
      "nickname": "1", // 昵称
      "sort_order": 999, //排序号
      "senior": false, //是否高管
      "locked": false, //是否离职
      "employee_rank": 0, //职级ID
      "tags": [
        1 // 雇员标签
      ], 
      "tag_names": [
        "分组1-标签1" //标签名称
      ], 
      "positions": [
        {
          "id": "xxxxxx", //职位ID
          "domain_id": "xxx", //域标识
          "code": "xxxx", //组织标识
          "employee_id": "fdf82464bba34dc5a86f7af9ee20b3db", //雇员ID
          "org_id": "abc", // 组织节点ID
          "path": "/aaa/abc/", //组织path
          "type": "CORP", 
          "job_title": "xxxx", // 职位
          "level": 2,  // 组织层级
          "primary": true, // 是否主职位
          "chief": false,  // 是否首要职位
          "display_nodes": [
            {
              "id": "aaa", //节点ID
              "name": "xxxx", //节点名称
              "type": "CORP", //节点类型
              "path": "/aaa/", //节点path
              "display": true //是否显示
            }, 
            {
              "id": "abc", //节点ID
              "name": "xxxx", //节点名称
              "type": "CORP", //节点类型
              "path": "/aaa/abc/", //节点path
              "display": true //是否显示
            }
          ], 
          "full_name_path": "/xxxx/xxxx/", //中文全路径
          "org_name": "xxxx" //节点名称
        }
      ], 
      "data_schemas": [
        {
          "domain_id": "xxxx", //域标识
          "org_code": "xxxxx", //组织标识
          "id": "xx", //ID
          "property": "xxx", //名称
          "type": "TEXT", //类型
          "name": "xxx", //显示名称
          "alias": "姓名", //显示昵称
          "en_alias": "Name", //英文昵称
          "tw_alias": "姓名", //繁体昵称
          "options": [ ], 
          "min": -1, 
          "max": -1, 
          "visible_range": "ALL", //可见范围
          "ops_range": "FINAL", //操作类型
          "opsable": false, //是否可操作
          "privacy": false,  //是否隐私字段
          "sort_order": 4 // 排序
        }
      ], 
      "properties": [ ], 
      "created": 1539154556491, //创建时间
      "last_modified": 1591095956291, //修改时间
      "root_org_info": {
        "id": "xxxx", //根节点ID
        "name": "xxxxxx", //根节点名称
        "type": "O", //根节点类型
        "path": "/zcQ7KReg0Xe7sfCI5nZvkY/", //根节点路径
        "display": true // 是否显示
      }, 
      "platforms": [ ]
    }
  ]
}
```
</details>

## 新增雇员

```js
POST http://{host}:{port}/v1/admin/organizations/{code}/employees?access_token={access_token}
```

**请求头部：**

| 请求头 | 说明 |
| - | - |
| Content-Type |application/json |

**请求参数：**

| 字段 | 类型 | 是否必填 | 说明 |
| - | - | - | - |
| access_token | String | Y | 访问token |
| org_code | String | Y | 组织标识 |
| name | String | Y | 雇员名 |
| en_name | String | N | 雇员名 |
| mobile | String | N | 手机号 |
| email | String | N | 邮件 |
| extension_id | String | N | 第三方序列号 |
| serial_no | String | N | 第三方序列号,优先取extension_id |
| sort_order | Integer | N | 排序号 |
| senior | Boolean | N | 是否高管 |
| sn | String | N | 工号 |
| province | String | N | 省份 |
| city | String | N | 城市 |
| tel | String | N | 座机号 |
| fax | String | N | 传真号 |
| workPhone | String | N | 工作电话 |
| otherPhone | String | N | 其他号码 |
| otherEmail | String | N | 其他邮箱 |
| industry | String | N | 行业 |
| region | String | N | 区域 |
| label | String | N | 标签 |
| extended1 | String | N | 扩展字段1 |
| extended2 | String | N | 扩展字段2 |
| extended3 | String | N | 扩展字段3 |
| username | String | Y | 账号 |
| source_id | String | N | 认证源 |
| user_id | String | N | 用户ID |
| id_card | String | N | 身份证号码 |
| password | String | N | 用户密码(仅用户新增时使用) |
| gender | String | N | 性别 |
| birthday | Long | N | 生日,13为时间戳 |
| source_credentials | String | N | 第三方认证码 |
| source_identifiers | Map[String, String] | N | 第三方认证信息 |
| tags | Seq[Long] | N | 雇员标签,优先读取 |
| tag_names | Seq[Tag] | N | 雇员标签信息 |
| Tag.group | String | Y | 标签分组 |
| Tag.tag | String | Y | 标签名称 |
| Tag.group_property | String | N | 标签分组标识 |
| Tag.tag_property | String | N | 标签标识 |
| rank | Long | N | 雇员职级,优先读取 |
| employee_rank_name | String | N | 雇员职级 |
| positions | Seq[Position] | Y | 职位 |
| Position.org_id | Long | N | 节点ID |
| Position.org_path | String | N | 节点path,与org_id不能同时为空 |
| Position.job_title | String | N | 职位 |
| Position.primary | Boolean | N | 是否主职位 |
| Position.chief | Boolean | N | 是否首要 |
| Position.source_type | String | N | 职位分组 |
| properties | Seq[Property] | N | 雇员扩展字段 |
| Property.data_schema_id | Long | Y | 扩展ID |
| Property.values | Seq[String] | Y | 扩展内容 |

**请求示例：**

```json
{
  "username": "xxxxxxx",
  "name": "xxxxxxx",
  "sn": "IMPL00001",
  "mobile": "",
  "email": "1231414324@qq.com",
  "positions":[{
    "job_title": "测试",
    "org_path": "/xx节点1/xxx部门/"
  }]
}
```

**响应示例：**
<details>
<summary>点击查看响应数据</summary>

```json
{
  "status": 0,
  "message": "ok",
  "result": {
    "employee_id": {
      "domain_id": "xxx",
      "code": "xxx",
      "id": "雇员ID"
    },
    "name": "xxxxxxx",
    "pinyin": "xxxxxxx",
    "initial": "xxxxxxx",
    "sn": "IMPL00001",
    "email": "1231414324@qq.com",
    "sort_order": 999,
    "senior": false,
    "user": {
      "id": "用户ID",
      "username": "xxxxxxx",
      "name": "xxxxxxx",
      "id_card": "1231414324@qq.com",
      "gender": "male",
      "status": "confirmed"
    },
    "extension_profiles": {
    },
    "positions": [
      {
        "position_id": {
          "domain_id": "xxx",
          "code": "xxx",
          "id": "possitionID"
        },
        "employee_id": "雇员ID",
        "org_id": "节点ID",
        "path": "/aaa/bbb/",
        "type": "O",
        "job_title": "测试",
        "primary": false,
          "chief": false
      }
    ],
    "properties": [
    ],
    "rank": 0,
    "tags": [
    ],
    "disabled": false,
    "deleted": false,
    "create_time": 1592284154154,
    "modify_time": 1592284154154
  }
}
```
</details>

## 查询雇员信息

```js
GET http://{host}:{port}/v1/admin/organizations/{code}/employees/{employeeId}?access_token={access_token}
```

**请求头部：**
| 请求头 | 说明 |
| - | - |
| Content-Type |application/json |

**请求参数：**

| 字段 | 类型 | 是否必填 | 说明 |
| - | - | - | - |
| access_token | String | Y | 访问token |
| org_code | String | Y | 组织标识 |
| employeeId | String | Y | 雇员ID |


**请求示例：**
```js
/v1/admin/organizations/xxx/employees/xxx?access_token=xxx
```

**响应示例：**
<details>
<summary>点击查看响应数据</summary>

```json
{
  "status": 0,
  "message": "ok",
  "result": {
    "employee_id": {
      "domain_id": "xxx",
      "code": "xxx",
      "id": "雇员ID"
    },
    "name": "xxxxxxx",
    "pinyin": "xxxxxxx",
    "initial": "xxxxxxx",
    "sn": "IMPL00001",
    "email": "1231414324@qq.com",
    "sort_order": 999,
    "senior": false,
    "user": {
      "id": "用户ID",
      "username": "xxxxxxx",
      "name": "xxxxxxx",
      "id_card": "1231414324@qq.com",
      "gender": "male",
      "status": "confirmed"
    },
    "extension_profiles": {
    },
    "positions": [
      {
        "position_id": {
            "domain_id": "xxx",
            "code": "xxx",
            "id": "possitionID"
        },
        "employee_id": "雇员ID",
        "org_id": "节点ID",
        "path": "/aaa/bbb/",
        "type": "O",
        "job_title": "测试",
        "primary": false,
        "chief": false
      }
    ],
    "properties": [
    ],
    "rank": 0,
    "tags": [
    ],
    "disabled": false,
    "deleted": false,
    "create_time": 1592284154154,
    "modify_time": 1592284154154
  }
}
```
</details>

## 修改雇员信息

```js
POST http://{host}:{port}/v1/admin/organizations/{code}/employees/{employeeId}?access_token={access_token}
```

**请求头部：**
| 请求头 | 说明 |
| - | - |
| Content-Type |application/json |

**请求参数：**

| 字段 | 类型 | 是否必填 | 说明 |
| - | - | - | - |
| access_token | String | Y | 访问token |
| org_code | String | Y | 组织标识 |
| employeeId | String | Y | 雇员ID |
| name | String | Y | 雇员名 |
| en_name | String | N | 雇员名 |
| mobile | String | N | 手机号 |
| email | String | N | 邮件 |
| extension_id | String | N | 第三方序列号 |
| serial_no | String | N | 第三方序列号,优先取extension_id |
| sort_order | Integer | N | 排序号 |
| senior | Boolean | N | 是否高管 |
| sn | String | N | 工号 |
| province | String | N | 省份 |
| city | String | N | 城市 |
| tel | String | N | 座机号 |
| fax | String | N | 传真号 |
| workPhone | String | N | 工作电话 |
| otherPhone | String | N | 其他号码 |
| otherEmail | String | N | 其他邮箱 |
| industry | String | N | 行业 |
| region | String | N | 区域 |
| label | String | N | 标签 |
| extended1 | String | N | 扩展字段1 |
| extended2 | String | N | 扩展字段2 |
| extended3 | String | N | 扩展字段3 |
| id_card | String | N | 身份证号码 |
| gender | String | N | 性别 |
| birthday | Long | N | 生日,13为时间戳 |
| tags | Seq[Long] | N | 雇员标签,优先读取 |
| tag_names | Seq[Tag] | N | 雇员标签信息 |
| Tag.group | String | Y | 标签分组 |
| Tag.tag | String | Y | 标签名称 |
| Tag.group_property | String | N | 标签分组标识 |
| Tag.tag_property | String | N | 标签标识 |
| rank | Long | N | 雇员职级,优先读取 |
| employee_rank_name | String | N | 雇员职级 |
| positions | Seq[Position] | Y | 职位 |
| Position.org_id | Long | N | 节点ID |
| Position.org_path | String | N | 节点path,与org_id不能同时为空 |
| Position.job_title | String | N | 职位 |
| Position.primary | Boolean | N | 是否主职位 |
| Position.chief | Boolean | N | 是否首要 |
| Position.source_type | String | N | 职位分组 |
| properties | Seq[Property] | N | 雇员扩展字段 |
| Property.data_schema_id | Long | Y | 扩展ID |
| Property.values | Seq[String] | Y | 扩展内容 |

**请求示例：**

```json
{
  "name": "xxxxxxx1",
  "sn": "IMPL00001",
  "mobile": "",
  "email": "1231414324@qq.com",
  "positions":[{
    "job_title": "测试",
    "org_path": "/开发的小分队/部门11/"
  }]
}
```

**响应示例：**
<details>
<summary>点击查看响应数据</summary>

```json
{
  "status": 0,
  "message": "ok",
  "result": {
    "employee_id": {
      "domain_id": "xxx",
      "code": "xxx",
      "id": "雇员ID"
    },
    "name": "xxxxxxx",
    "pinyin": "xxxxxxx",
    "initial": "xxxxxxx",
    "sn": "IMPL00001",
    "email": "1231414324@qq.com",
    "sort_order": 999,
    "senior": false,
    "user": {
      "id": "用户ID",
      "username": "xxxxxxx",
      "name": "xxxxxxx",
      "id_card": "1231414324@qq.com",
      "gender": "male",
      "status": "confirmed"
    },
    "extension_profiles": {
    },
    "positions": [
      {
        "position_id": {
            "domain_id": "xxx",
            "code": "xxx",
            "id": "possitionID"
        },
        "employee_id": "雇员ID",
        "org_id": "节点ID",
        "path": "/aaa/bbb/",
        "type": "O",
        "job_title": "测试",
        "primary": false,
        "chief": false
      }
    ],
    "properties": [
    ],
    "rank": 0,
    "tags": [
    ],
    "disabled": false,
    "deleted": false,
    "create_time": 1592284154154,
    "modify_time": 1592284154154
  }
}
```
</details>

## 雇员离职

```js
POST http://{host}:{port}/v1/admin/organizations/{code}/employees/{employeeId}/disable|lock?access_token={access_token}
```

**请求头部：**
| 请求头 | 说明 |
| - | - |
| Content-Type |application/json |

**请求参数：**

| 字段 | 类型 | 是否必填 | 说明 |
| - | - | - | - |
| access_token | String | Y | 访问token |
| org_code | String | Y | 组织标识 |
| employeeId | String | Y | 雇员ID |


**请求示例：** 

> V3 版本接口仅支持 lock, V4 版本接口两者均支持。

```js
/v1/admin/organizations/xxx/employees/xxx/disable?access_token=xxx
```
```js
/v1/admin/organizations/xxx/employees/xxx/lock?access_token=xxx
```

**响应示例：**

```json
{
  "status": 0,
  "message": "ok",
  "result": {
    // result
  }
}
```

## 雇员复职

```js
POST http://{host}:{port}/v1/admin/organizations/{code}/employees/{employeeId}/enable|unlock?access_token={access_token}
```

**请求头部：**
| 请求头 | 说明 |
| - | - |
| Content-Type |application/json |

**请求参数：**

| 字段 | 类型 | 是否必填 | 说明 |
| - | - | - | - |
| access_token | String | Y | 访问token |
| org_code | String | Y | 组织标识 |
| employeeId | String | Y | 雇员ID |


**请求示例：**

> V3 版本接口仅支持 unlock，V4 版本接口两者均支持。

```js
/v1/admin/organizations/xxx/employees/xxx/enable?access_token=xxx
```

```js
/v1/admin/organizations/xxx/employees/xxx/unlock?access_token=xxx
```

**响应示例：**

```json
{
  "status": 0,
  "message": "ok",
  "result": {
    // result
  }
}
```

## 雇员删除

```js
DELETE http://{host}:{port}/v1/admin/organizations/{code}/employees/{employeeId}?access_token={access_token}
```

**请求头部：**
| 请求头 | 说明 |
| - | - |
| Content-Type |application/json |

**请求参数：**

| 字段 | 类型 | 是否必填 | 说明 |
| - | - | - | - |
| access_token | String | Y | 访问token |
| org_code | String | Y | 组织标识 |
| employeeId | String | Y | 雇员ID |


**请求示例：**

```js
/v1/admin/organizations/xxx/employees/xxx?access_token=xxx
```

**响应示例：**

```json
{
  "status": 0,
  "message": "ok",
  "result": {
    // result
  }
}
```

## 雇员导入

```js
POST http://{host}:{port}/v1/admin/organizations/{code}/import-employees?access_token={access_token}
```

**请求头部：**
| 请求头 | 说明 |
| - | - |
| Content-Type |application/json |

**请求参数：**

> 雇员字段与新增接口一致。

| 字段 | 类型 | 是否必填 | 说明 |
| - | - | - | - |
| access_token | String | Y | 访问token |
| org_code | String | Y | 组织标识 |
| ops | String | N | 默认新增/更新,为REMOVE为删除雇员 |

**请求示例：**

```json
[
  {
    "ops": "REMOVE", 
    "username": "xxx", 
    "name": "xxx", 
    "sn": "xxx", 
    "mobile": "", 
    "email": "xxx@qq.com", 
    "positions": [
      {
        "jobTitle": "测试", 
        "org_path": "AAA/BBB/CCC"
      }
    ]
  }
]
```

**响应示例：**

```json
{
  "status": 0, 
  "message": "Everything is ok.", 
  "result": {
    "successes": {
      "username1": 31718
    }, 
    "failures": { 
      "username1": "异常信息"
    }
  }
}
```
