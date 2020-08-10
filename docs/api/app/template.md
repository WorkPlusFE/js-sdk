# 模板消息

## 获取模板列表

```js
GET /v1/templates?access_token={access_token}&kw={kw}&skip={skip}&limit={limit}
```

**请求头部：**

|请求头|说明 |
|---|---|
| Content-Type |application/json|

**请求参数：**

| 字段| 类型 | 是否必填|说明|
|---|---|---|---|
| access_token | String | Y | 访问令牌 |
| kw | String | N | 关键字查询,检索模板标题,tags |
| skip | int | N | 分页参数,默认值0 |
| limit | int | N | 分页参数,默认值10 |

**请求示例：**

```js
/v1/templates?access_token=9e37bbc45be34cd8be8bc3fa31149b88
```

**返回数据：**

::: v-pre
```json
{
  "status": 0, 
  "message": "Everything is ok.", 
  "result": {
    "total_count": 1, 
    "records": [
      {
        "id": "32790e3d-2ce2-45ad-b9c2-c562f39882c3", 
        "domain_id": "atwork", 
        "org_id": "85939199-6424-4f28-84d4-fce2aedf0e64", 
        "app_id": "DEFAULT", 
        "title": "标题", 
        "sample": "消息示例", 
        "operator": "a86e83a26be44eb59806901cc8be5d5c", 
        "create_time": 1502336857426, 
        "refresh_time": 1502336857426, 
        "actions": [
          {
            "name": "查看详情", 
            "value": "https://baidu.com"
          }, 
          {
            "name": "投诉", 
            "value": "https://baidu.com"
          }
        ], 
        "contents": [
          [
            {
              "content": "我是第一行:{{data1.DATA}}", 
              "align": "center"
            }
          ], 
          [
            {
              "content": "2-1", 
              "align": "right"
            }, 
            {
              "content": "2-2", 
              "align": "left"
            }
          ], 
          [
            {
              "content": "第三行信息", 
              "align": "center"
            }
          ]
        ]
      }
    ]
  }
}
```
:::

**错误返回值：**

| status | message |说明|
|---|---|---|
| 10011 |token not found.|访问令牌不存在|

## 新增模板

```js
POST /v1/templates?access_token={access_token}&app_id={app_id}&source_type={source_type}
```

**请求头部：**

|请求头|说明 |
|---|---|
| Content-Type |application/json|

**请求参数：**
::: v-pre
| 字段| 类型 | 是否必填|说明|
|---|---|---|---|
| access_token | String | Y | 访问令牌 |
| app_id | String | Y | 应用标识 |
| source_type | String | N | 枚举,NATIVE/ISV,默认值为NATIVE,ISV应用时传ISV |
| tags | String | N | 标签信息,用于检索 |
| title | String | N | 模板标题 |
| actions | String | N | 模板动作,name为显示名称,value为点击动作,格式请参考样例 |
| contents | String | N | 模板内容,格式请参考样例 |
| contents.align | String | N | 对其方式: left/right/center |
| contents.content | String | N | 变量格式为:{XXX.DATA}}",其中XXX为自定义变量名 |
:::
**请求示例：**

```js
/v1/templates?access_token=9e37bbc45be34cd8be8bc3fa31149b88&app_id=dafc2d03-3991-4de0-91d6-de3135c1fb4f&source_type=NATIVE
```
::: v-pre
```json
{
  "title": "接口模板2", 
  "tags": "标签信息", 
  "sample": "消息示例", 
  "actions": [
    {
      "name": "查看详情", 
      "value": "https://baidu.com"
    }, 
    {
      "name": "投诉", 
      "value": "https://baidu.com"
    }
  ], 
  "contents": [
    [
      {
        "content": "我是第一行:{{data1.DATA}}", 
        "align": "center"
      }
    ]
  ]
}
```
:::

**返回数据：**

::: v-pre
```json
{
  "status": 0, 
  "message": "Everything is ok.", 
  "result": {
    "id": "86007b6c-5cd1-4a9d-a5a6-f85ba8fdd03f", 
    "domain_id": "atwork", 
    "org_id": "85939199-6424-4f28-84d4-fce2aedf0e64", 
    "app_id": "dafc2d03-3991-4de0-91d6-de3135c1fb4f", 
    "type": "DEFAULT", 
    "title": "接口模板2", 
    "sample": "消息示例", 
    "operator": "dafc2d03-3991-4de0-91d6-de3135c1fb4f", 
    "create_time": 0, 
    "refresh_time": 0, 
    "actions": [
      {
        "name": "查看详情", 
        "value": "https://baidu.com"
      }, 
      {
        "name": "投诉", 
        "value": "https://baidu.com"
      }
    ], 
    "contents": [
      [
        {
          "content": "我是第一行:{{data1.DATA}}", 
          "align": "center"
        }
      ]
    ], 
    "tags": "标签信息"
  }
}
```
:::

**错误返回值：**

| status | message |说明|
|---|---|---|
| 10011 |token not found.|访问令牌不存在|

## 修改模板

```js
POST /v1/templates/{templateId}?access_token={access_token}&app_id={app_id}&source_type={source_type}
```

**请求头部：**

|请求头|说明 |
|---|---|
| Content-Type |application/json|

**请求参数：**

::: v-pre
| 字段| 类型 | 是否必填|说明|
|---|---|---|---|
| access_token | String | Y | 访问令牌 |
| templateId | String | Y | 模板标识 |
| app_id | String | Y | 应用标识 |
| source_type | String | N | 枚举,NATIVE/ISV,默认值为NATIVE,ISV应用时传ISV |
| tags | String | N | 标签信息,用于检索 |
| title | String | N | 模板标题 |
| actions | String | N | 模板动作,name为显示名称,value为点击动作,格式请参考样例 |
| contents | String | N | 模板内容,格式请参考样例 |
| contents.align | String | N | 对其方式:left/right/center |
| contents.content | String | N | 变量格式固定为:{{data1.DATA}} |
:::

**请求示例：**

```js
/v1/templates/a624d18d-98a3-4bec-a854-b279d260b478?access_token=9e37bbc45be34cd8be8bc3fa31149b88
```

::: v-pre
```json
{
  "title": "接口模板3", 
  "tags": "标签信息", 
  "sample": "消息示例", 
  "actions": [
    {
      "name": "查看详情", 
      "value": "https://baidu.com"
    }, 
    {
      "name": "投诉", 
      "value": "https://baidu.com"
    }
  ], 
  "contents": [
    [
      {
        "content": "我是第一行:{{data1.DATA}}", 
        "align": "center"
      }
    ]
  ]
}
```
:::

**返回数据：**

::: v-pre
```json
{
  "status": 0, 
  "message": "Everything is ok.", 
  "result": {
    "id": "86007b6c-5cd1-4a9d-a5a6-f85ba8fdd03f", 
    "domain_id": "atwork", 
    "org_id": "85939199-6424-4f28-84d4-fce2aedf0e64", 
    "app_id": "dafc2d03-3991-4de0-91d6-de3135c1fb4f", 
    "type": "DEFAULT", 
    "title": "接口模板3", 
    "sample": "消息示例", 
    "operator": "dafc2d03-3991-4de0-91d6-de3135c1fb4f", 
    "create_time": 0, 
    "refresh_time": 0, 
    "actions": [
      {
        "name": "查看详情", 
        "value": "https://baidu.com"
      }, 
      {
        "name": "投诉", 
        "value": "https://baidu.com"
      }
    ], 
    "contents": [
      [
        {
          "content": "我是第一行:`{{data1.DATA}}`", 
          "align": "center"
        }
      ]
    ], 
    "tags": "标签信息"
  }
}
```
:::

**错误返回值：**

| status | message |说明|
|---|---|---|
| 10011 |token not found.|访问令牌不存在|

## 获取模板详情

```js
GET /v1/templates/{templateId}?access_token={access_token}
```
**请求头部：**

|请求头|说明 |
|---|---|
| Content-Type |application/json|

**请求参数：**

::: v-pre
| 字段| 类型 | 是否必填|说明|
|---|---|---|---|
| access_token | String | Y | 访问令牌 |
| templateId | String | Y | 模板标识 |
| appId | String | Y | 应用标识 |
| source_type | String | N | 枚举,NATIVE/ISV,默认值为NATIVE,ISV应用时传ISV |
| category_id | String | N | 模板分类标识,可为空 |
| title | String | N | 模板标题 |
| actions | String | N | 模板动作,name为显示名称,value为点击动作,格式请参考样例 |
| contents | String | N | 模板内容,格式请参考样例 |
| contents.align | String | N | 对其方式:left/right/center |
| contents.content | String | N | 变量格式固定为:{{data1.DATA}} |
:::

**请求示例：**

```js
/v1/templates/a624d18d-98a3-4bec-a854-b279d260b478?access_token=9e37bbc45be34cd8be8bc3fa31149b88
```

**返回数据：**

::: v-pre
```json
{
  "status": 0, 
  "message": "Everything is ok.", 
  "result": {
    "id": "86007b6c-5cd1-4a9d-a5a6-f85ba8fdd03f", 
    "domain_id": "atwork", 
    "org_id": "85939199-6424-4f28-84d4-fce2aedf0e64", 
    "app_id": "dafc2d03-3991-4de0-91d6-de3135c1fb4f", 
    "type": "DEFAULT", 
    "title": "接口模板3", 
    "sample": "消息示例", 
    "operator": "dafc2d03-3991-4de0-91d6-de3135c1fb4f", 
    "create_time": 0, 
    "refresh_time": 0, 
    "actions": [
      {
        "name": "查看详情", 
        "value": "https://baidu.com"
      }, 
      {
        "name": "投诉", 
        "value": "https://baidu.com"
      }
    ], 
    "contents": [
      [
        {
          "content": "我是第一行:{{data1.DATA}}", 
          "align": "center"
        }
      ]
    ], 
    "tags": "标签信息"
  }
}
```
:::

**错误返回值：**

| status | message |说明|
|---|---|---|
| 10011 |token not found.|访问令牌不存在|


## 模板消息推送

```js
POST /v1/apps/mbox?access_token={access_token}
```

**请求头部：**

|请求头|说明 |
|---|---|
| Content-Type |application/json|

**请求参数：**

| 字段| 类型 | 是否必填|说明|
|---|---|---|---|
| access_token | String | Y | 访问令牌 |
| type | String | Y | 消息类型,模板消息类型固定为template |
| client_ids | List&lt;String&gt; | N | 消息推送的用户标识 |
| scopes | List&lt;String&gt; | N | 发送范围,组织路径,例如/122/234/ |
| platforms | List | N | 枚举,ANDROID/IOS/PC,默认值为IOS和ANDROID |
| body |Map|Y|推送消息体|
| body.template_id | String | N | 模板ID,模板消息必填 |
| body.data | String | N | 模板数据,模板消息必填,value为变量值,color为颜色,font_size为字号大小 |
| body.top_color | String | N | 顶部颜色 |
| body.top_avatar | String | N | 顶部图标 |
| body.top_title | String | N | 顶部标题 |
| body.data.text_style | String | N | normal(正常)bold(粗体) |

**请求示例：**

```js
/v1/apps/mbox?access_token=b646339e2f4f4234af6bae5f72db9879
```

**模板消息：**

```json
{
  "type": "TEMPLATE", 
  "body": {
    "template_id": "152891af-1bec-4a18-8201-a58e08a7afad", 
    "top_color": "#00ff00",
    "top_avatar": "Z3JvdXAxL00wMC8wMC80MC9yQkFCR1ZkWDQ0ZUFRY21LQUFBZXVHZDBHS0U4MTkuanBn",
    "top_title": "流程大师",
    "data": [
      {
        "key": "keyword1", 
        "value": "339208499", 
        "color": "#00ff00", 
        "font_size": "12", 
        "text_style": "normal"
      }, 
      {
        "key": "keyword2", 
        "value": "2016年01月05日", 
        "color": "#00ff00", 
        "font_size": "12", 
        "text_style": "normal"
      }, 
      {
        "key": "keyword3", 
        "value": "830138013810", 
        "color": "#00ff00", 
        "font_size": "12", 
        "text_style": "normal"
      }, 
      {
        "key": "keyword4", 
        "value": "8310380131", 
        "color": "#00ff00", 
        "font_size": "12", 
        "text_style": "bold"
      }
    ]
  }, 
  "client_ids": [
    "a86e83a26be44eb59806901cc8be5d5c"
  ], 
  "platforms": [
    "ANDROID"
  ]
}
```

**返回数据：**

| 字段| 类型 |说明|
|---|---|---|
| id | String | 推送计划ID |
| material_id | String | 推送的素材ID |
| app_id | String | 推送者ID |
| expects | int | 目标推送数 |
| fails | int | 推送失败数 |
| oks | int | 成功推送数 |
| scopes | List&lt;String&gt; | 发送范围,组织路径,例如/122/234/ |
| client_ids | List&lt;String&gt; | 消息推送的对象标记 |

**返回示例：**

```json
{
  "status": 0, 
  "message": "Everything is ok.", 
  "result": {
    "domain_id": "atwork", 
    "org_id": "a918d8a6-67e9-4e76-8503-baa73d3c6fd2", 
    "id": "f3b9250c-96d4-414b-be7f-308f2fdeca99", 
    "app_id": "92bc3faa-12bd-4afc-9962-01f2410f0bee", 
    "material_id": "52dec89a-04a0-4127-99b5-a3d136c638a4", 
    "expects": 0, 
    "fails": 0, 
    "oks": 0, 
    "create_time": 1485053077748, 
    "refresh_time": 0, 
    "expect_time": 1485054877748, 
    "scopes": [ ], 
    "client_ids": [
      "/232/301/c24b6a94cfb14b79af12a1399edc9e31"
    ]
  }
}
```

**错误返回值：**

| status | message |说明|
|---|---|---|
| 10011 |token not found.|访问令牌不存在|
| 202012 |没有对应的雇员|没有对应的雇员|
