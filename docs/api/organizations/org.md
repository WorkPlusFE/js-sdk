# 组织

## 组织信息

```js
GET http://{host}:{port}/v1/admin/organizations/{org_code}?access_token={access_token}
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

**响应示例：**

```json
{
  "status": 0,
  "message": "ok",
  "result": {
    "id": "组织id",
    "domain_id": "域标识",
    "org_code": "组织标识(org_code)",
    "type": "根结点为CORP,其他节点为CORP或DEPT",
    "path": "组织路径",
    "name": "组织名称",
    "en_name": "组织英文名称",
    "tw_name": "组织繁体名称",
    "logo": "组织logo,媒体ID",
    "sort_order": 1,
    "level": 1,
    "uuid": "唯一编码",
    "owner_id": "拥有者userId",
    "owner": "拥有者userId",
    "owner_name": "拥有者",
    "created": 1534829681346, // 创建时间,13位时间戳
    "last_modified": 1564998633361, // 最后修改时间,13位时间戳
    "disabled": false, // 使用禁用,false为有效组织
    "employee_count": 0, // 当前节点雇员数
    "all_employee_count": 0, // 总雇员数
    "employees": [
    ],
    "children": [
    ]
  }
}
```

## 组织架构列表

```
GET http://{host}:{port}/v1/admin/organizations/{code}/page-orgs?access_token={access_token}&kw={kw}&refresh_time={refresh_time}&skip={skip}&limit={limit}
```

**请求头部：**

| 请求头 | 说明 |
| - | - |
| Content-Type |application/json |

**请求参数：**

| 字段 | 类型 | 是否必填 | 说明 |
| - | - | - | - |
| domain_id | String | Y | 域信息 |
| code | String | Y | 组织标识 |
| kw | String | N | 搜索条件 |
| refresh_time | Long | N | 更新时间,用于增量获取 |
| skip | Integer | N | 分页查询条件 |
| limit | Integer | N | 分页查询条件 |

**请求示例：**

```js
/v1/admin/organizations/xxxx/page-orgs?access_token=xxxx&skip=0&limit=1
```

**响应示例：**

```json
{
  "status": 0,
  "message": "ok",
  "result": {
    "total_count": 56,
    "records": [
      {
        "id": "bbb",
        "domain_id": "xxx",
        "org_code": "xxxxx",
        "parent_org_id": "aaa",
        "type": "DEPT",
        "path": "/aaa/bbb/",
        "name": "bbbName",
        "sort_order": 1,
        "level": 2,
        "uuid": "bbb",
        "sn": "1",
        "owner_id": "xxxx",
        "owner": "xxxx",
        "owner_name": "xxxx",
        "created": 1576578664410,
        "last_modified": 1576578664410,
        "disabled": false,
        "employee_count": 0,
        "all_employee_count": 0,
        "employees": [
        ],
        "children": [
        ]
      }
    ]
  }
}
```

## 组织架构视图

```js
GET http://{host}:{port}/v1/admin/organizations/{code}/view?access_token={access_token}&org_id={org_id}&employee_skip={employee_skip}&employee_limit={employee_limit}&org_skip={org_skip}&org_limit={org_limit}&counting={counting}
```

**请求头部：**

| 请求头 | 说明 |
| - | - |
| Content-Type |application/json |

**请求参数：**

| 字段 | 类型 | 是否必填 | 说明 |
| - | - | - | - |
| domain_id | String | Y | 域信息 |
| code | String | Y | 组织标识 |
| org_id | String | N | 节点ID,不传则查根节点 |
| employee_skip | Integer | N | 雇员分页查询条件 |
| employee_limit | Integer | N | 雇员分页查询条件 |
| org_skip | Integer | N | 组织分页查询条件 |
| org_limit | Integer | N | 组织分页查询条件 |
| counting | Boolean | N | 是否统计雇员树,默认true |

**请求示例：**

```js
/v1/admin/organizations/xxxxx/view?access_token=xxxxx&org_id=bbb&employee_skip=0&employee_limit=1&org_skip=0&org_limit=1
```

**响应示例：**

```json
{
  "status": 0, 
  "message": "ok", 
  "result": [
    {
      "id": "bbb", 
      "domain_id": "xxx", 
      "org_code": "xxx", 
      "parent_org_id": "aaa", 
      "type": "CORP", 
      "path": "/aaa/bbb/", 
      "name": "部门11", 
      "sort_order": 2, 
      "level": 2, 
      "uuid": "bbb", 
      "sn": "2", 
      "owner_id": "xxx", 
      "owner": "xxx", 
      "owner_name": "xxx", 
      "created": 1536828491327, 
      "last_modified": 1559113350544, 
      "disabled": false, 
      "employee_count": 15, 
      "all_employee_count": 17, 
      "parent_org_name": "xxxx", 
      "directly_corp": {
        "id": "aaa", 
        "name": "xxx", 
        "type": "O", 
        "path": "/aaa/", 
        "display": true
      }, 
      "employees": [
        {
          "id": "xxx", 
          "type": "EMPLOYEE", 
          "domain_id": "xxx", 
          "org_code": "xxx", 
          "display_name": "xxxx", 
          "name": "xxx", 
          "pinyin": "xxx", 
          "initial": "xxx", 
          "mobile": "xxx", 
          "email": "xxx@xxx.com", 
          "status": "ACTIVATED", 
          "user_id": "xxx", 
          "username": "xxx", 
          "nickname": "xxx", 
          "avatar": "xxx", 
          "sort_order": 2, 
          "senior": false, 
          "locked": false, 
          "employee_rank": 0, 
          "tags": [ ], 
          "tag_names": [ ], 
          "positions": [
            {
              "id": "xxxx", 
              "domain_id": "xxx", 
              "code": "xxx", 
              "employee_id": "xxx", 
              "org_id": "bbb", 
              "path": "/aaa/bbb/", 
              "type": "CORP", 
              "job_title": "xxxx", 
              "level": 2, 
              "primary": true, 
              "chief": false, 
              "display_nodes": [
                {
                  "id": "aaa", 
                  "name": "xxxx", 
                  "type": "CORP", 
                  "path": "/aaa/", 
                  "display": true
                }, 
                {
                  "id": "bbb", 
                  "name": "xxx", 
                  "type": "CORP", 
                  "path": "/aaa/bbb/", 
                  "display": true
                }
              ], 
              "full_name_path": "/xxx/xxx/", 
              "org_name": "xxx"
            }
          ], 
          "data_schemas": [ ], 
          "properties": [ ], 
          "created": 1554085163675, 
          "last_modified": 1590636295123, 
          "root_org_info": {
            "id": "", 
            "name": "", 
            "type": "", 
            "path": "", 
            "display": true
          }, 
          "platforms": [ ]
        }
      ], 
      "children": [
        {
          "id": "ccc", 
          "domain_id": "xxxx", 
          "org_code": "xxx", 
          "parent_org_id": "bbb", 
          "type": "DEPT", 
          "path": "/aaa/bbb/ccc/", 
          "name": "部门1-1", 
          "sort_order": 999, 
          "level": 3, 
          "uuid": "ccc", 
          "owner_id": "xxx", 
          "owner": "xxx", 
          "owner_name": "xxx", 
          "created": 1537412001987, 
          "last_modified": 1537412001987, 
          "disabled": false, 
          "employee_count": 2, 
          "all_employee_count": 2, 
          "parent_org_name": "xxxx", 
          "directly_corp": {
            "id": "bbb", 
            "name": "xxx", 
            "type": "O", 
            "path": "/aaa/bbb/", 
            "display": true
          }, 
          "employees": [ ], 
          "children": [ ], 
          "full_name_path": "/aaa/bbb/ccc/"
        }
      ], 
      "full_name_path": "/aaaName/bbbName/"
    }
  ]
}
```


## 获取指定机构信息

```js
GET http://{host}:{port}/v1/admin/organizations/{org_code}/{id}?access_token={access_token}
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
| id | String | Y | 组织id |

**响应示例：**

```json
{
  "status": 0,
  "message": "ok",
  "result": {
    "id": "节点ID",
    "domain_id": "域",
    "org_code": "组织code",
    "parent_org_id": "父节点ID",
    "type": "CORP",
    "path": "/aaa/bbb/",
    "name": "导入组1",
    "sort_order": 3,
    "level": 2,
    "uuid": "节点ID",
    "sn": "节点编号",
    "owner_id": "拥有者ID",
    "owner": "拥有者ID",
    "owner_name": "拥有者",
    "created": 1554085163677, // 创建时间,13位时间戳
    "last_modified": 1555145213090, // 修改时间,13位时间戳
    "disabled": false, // 使用禁用,false为有效节点
    "employee_count": 0, // 当前节点雇员数
    "all_employee_count": 0, // 总雇员数
    "employees": [
    ],
    "children": [
    ]
  }
}
```

## 根据 serialNo 获取机构信息

```js
GET http://{host}:{port}/v1/admin/organizations/{code}/serial/{serialNo}?access_token={access_token}
```

**请求头部：**

| 请求头 | 说明 |
| - | - |
| Content-Type |application/json |

**请求参数：**

| 字段 | 类型 | 是否必填 | 说明 |
| - | - | - | - |
| domain_id | String | Y | 域信息 |
| code | String | Y | 组织标识 |
| serialNo | String | Y | 第三方序列号 |

**请求示例：**

```js
/v1/admin/organizations/xxxx/serial/xxx?access_token=xxxx
```

**响应示例：**

```json
{
  "status": 0,
  "message": "ok",
  "result": {
    "id": "节点ID",
    "domain_id": "域",
    "org_code": "组织code",
    "parent_org_id": "父节点ID",
    "type": "CORP",
    "path": "/aaa/bbb/",
    "name": "导入组1",
    "sort_order": 3,
    "serial_no": "xxx",
    "level": 2,
    "uuid": "节点ID",
    "sn": "节点编号",
    "owner_id": "拥有者ID",
    "owner": "拥有者ID",
    "owner_name": "拥有者",
    "created": 1554085163677, // 创建时间,13位时间戳
    "last_modified": 1555145213090, // 修改时间,13位时间戳
    "disabled": false, // 使用禁用,false为有效节点
    "employee_count": 0, // 当前节点雇员数
    "all_employee_count": 0, // 总雇员数
    "employees": [
    ],
    "children": [
    ]
  }
}
```

## 新增机构信息

```js
POST http://{host}:{port}/v1/admin/organizations?access_token={access_token}
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
| type | String | Y | 节点类型,DEPT或者CORP |
| parent_path | String | N | 父节点path |
| parent_id | String | N | 父节点ID,与parent_path不能同时为空 |
| name | String | Y | 节点名称 |
| logo | String | N | logo媒体ID |
| tel | String | N | 电话 |
| contact | String | N | 联系人 |
| sn | String | N | 节点编号 |
| serial_no | String | N | 第三方序列号,唯一 |
| sort_order | Integer | N | 排序号 |


**请求示例：**

```json
{
  "name": "节点名", 
  "type": "CORP", 
  "parent_id": "xxx"
}
```

```json
{
  "name": "节点名", 
  "type": "CORP", 
  "parent_path": "/节点名字1/节点名字2/"
}
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

## 修改机构信息

```js
POST http://{host}:{port}/v1/admin/organizations/{org_code}/{id}?access_token={access_token}
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
| id | String | Y | 组织id |
| name | String | N | 节点name |
| logo | String | N | 节点logo |
| tel | String | N | 节点tel |
| contact | String | N | 节点联系人 |
| serial_no | String | N | 节点第三方序列号 |
| sort_order | String | N | 排序号 |
| sn | String | N | 节点编号 |
| type | String | N | 节点类型 |
| new_parentId | String | N | 父节点id |

**请求示例：**

```json
{
  "name": "新名字"
}
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

## 删除机构信息

```js
DELETE http://{host}:{port}/v1/admin/organizations/{org_code}/{id}?access_token={access_token}
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
| id | String | Y | 组织id |

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

**错误返回值：**

| status | message |
| - | - |
| 208507 | 组织下已存在雇员 |
| 208502 | 没有对应的组织 |


## 导入机构信息

```js
POST http://{host}:{port}/v1/admin/organizations/{org_code}/import-orgs?access_token={access_token}
```

**请求头部：**

| 请求头 | 说明 |
| - | - |
| Content-Type |application/json |

**请求参数：**

字段与新增一致。

| 字段 | 类型 | 是否必填 | 说明 |
| - | - | - | - |
| access_token | String | Y | 访问token |
| org_code | String | Y | 组织标识 |

**请求示例：**

```json
[
  {
    "name": "CCC", 
    "type": "CORP", 
    "parent_path": "AAA/BBB"
  }, 
  {
    "name": "DDD", 
    "type": "CORP", 
    "parent_path": "AAA/BBB"
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
      "AAA/BBB/CCC": 2699
    }, 
    "failures": {
      "AAA/BBB/DDD": "错误信息"
    }
  }
}
```

## 组织架构树

*不推荐使用!!*

```js
GET http://{host}:{port}/v1/admin/organizations/{code}/tree?access_token={access_token}&org_id={org_id}
```

**请求头部：**

| 请求头 | 说明 |
| - | - |
| Content-Type |application/json |

**请求参数：**

| 字段 | 类型 | 是否必填 | 说明 |
| - | - | - | - |
| domain_id | String | Y | 域信息 |
| code | String | Y | 组织标识 |
| org_id | String | N | 节点ID,不传则查根节点 |


**请求示例：**

```js
/v1/admin/organizations/{code}/tree?access_token={token}
```

**响应示例：**

```json
{
  "status": 0, 
  "message": "ok", 
  "result": {
    "id": "aaa", 
    "domain_id": "xxx", 
    "org_code": "xxx", 
    "type": "CORP", 
    "path": "/aaa/", 
    "name": "xxx", 
    "en_name": "xxx", 
    "tw_name": "xxx", 
    "logo": "xxx", 
    "sort_order": 1, 
    "level": 1, 
    "uuid": "aaa", 
    "owner_id": "xxxx", 
    "owner": "xxxx", 
    "created": 1534829681346, 
    "last_modified": 1564998633361, 
    "disabled": false, 
    "children": [
      {
        "id": "bbb", 
        "domain_id": "xxx", 
        "org_code": "xxx", 
        "parent_org_id": "aaa", 
        "type": "DEPT", 
        "path": "/aaa/bbb/", 
        "name": "xxx", 
        "sort_order": 1, 
        "level": 2, 
        "uuid": "bbb", 
        "sn": "1", 
        "owner_id": "xxx", 
        "owner": "xxx", 
        "created": 1576578664410, 
        "last_modified": 1576578664410, 
        "disabled": false, 
        "children": [ ]
      }
    ]
  }
}
```

## 组织架构列表

*不推荐使用!!*

```js
GET http://{host}:{port}/v1/admin/organizations/{code}/list-all?access_token={access_token}&org_id={org_id}
```

**请求头部：**

| 请求头 | 说明 |
| - | - |
| Content-Type |application/json |

**请求参数：**

| 字段 | 类型 | 是否必填 | 说明 |
| - | - | - | - |
| domain_id | String | Y | 域信息 |
| code | String | Y | 组织标识 |
| org_id | String | N | 节点ID,不传则查根节点 |


**请求示例：**

```js
/v1/admin/organizations/{code}/list-all?access_token={token}
```

**响应示例：**

```json
{
  "status": 0, 
  "message": "ok", 
  "result": [
    {
      "id": "aaa", 
      "domain_id": "xxx", 
      "org_code": "xxx", 
      "type": "CORP", 
      "path": "/aaa/", 
      "name": "xxx", 
      "en_name": "xxx", 
      "tw_name": "xxx", 
      "logo": "xxx", 
      "sort_order": 1, 
      "level": 1, 
      "uuid": "aaa", 
      "owner_id": "xxx", 
      "owner": "xxx", 
      "owner_name": "xxx", 
      "created": 1534829681346, 
      "last_modified": 1564998633361, 
      "disabled": false, 
      "employee_count": 0, 
      "all_employee_count": 0, 
      "employees": [ ], 
      "children": [ ]
    }
  ]
}
```
