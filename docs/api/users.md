# 用户

## 用户查询

```js
GET /v1/users?access_token={access_token}&query={query}&type={type}&matching={matching}
```

**请求参数：**

| 字段| 类型 | 是否必填 |说明|
|--|--|-|-----|
|access_token|String|Y|访问令牌|
| query |String|Y|查询条件,当matching =true,代表匹配用户名或用户标识,当matching =false,代表完全匹配用户名或模糊匹配用户姓名，拼音，简拼字段|
|type|String|Y|查询类型，当type=id查询条件query为用户标识，当type=username查询条件query为用户名|
| matching |String|Y|是否匹配query，当matching =true时，query可以多条件查询，以[,]分隔开多条件，如query=id1,id2|

**请求示例：**

1. 模糊匹配查询
```js
/v1/users?access_token=8e0d7b9e4e4a49b888d6b0b5f882b7cd&query=136
```

2. 匹配查询用户标识
```js
/v1/users?access_token=8e0d7b9e4e4a49b888d6b0b5f882b7cd&query=92353e192ef4492f8d2772fef98f29be&matching=true&type=id
```

3. 匹配查询用户名
```js
/v1/users?access_token=8e0d7b9e4e4a49b888d6b0b5f882b7cd&query=13610117012&matching=true&type=username
```

**返回数据：**

```json
{
	"status": 0,
	"message": "Everything is ok.",
	"result":{
		"total_count": 1,
		"users":[
			{
				"user_id": "92353e192ef4492f8d2772fef98f29be",
				"domain_id": "atwork",
				"status": "ACTIVATED",
				"state": "NORMAL",
				"username": "13610117012",
				"name": "13610117012",
				"pinyin": "13610117012",
				"initial": "13610117012",
				"nickname": "13610117012",
				"phone": "13610117012",
				"email": "13610117012@qq.com",
				"gender": "MALE",
				"birthday": 1472601600000,
				"disabled": false
			}
		]
	}
}
```

**错误返回值：**

| status | message |说明|
|---|---|---|
| 10011 |token not found.|访问令牌不存在|



## 指定用户标识或用户名查询

```js
GET /v1/users/{query}?access_token={access_token}&type={type}
```

**请求参数：**

| 字段| 类型 | 是否必填|说明|
|---|---|---|---|
|access_token|String|Y|访问令牌|
| query |String|Y|查询条件，根据type判断|
|type|String|Y|查询类型，当type=id查询条件query为用户标识，当type=username查询条件query为用户名|

**请求示例：**

1. 匹配查询用户名
```js
/v1/users/13610117012?access_token=8e0d7b9e4e4a49b888d6b0b5f882b7cd&type=username
```

2. 匹配查询用户标识
```js
/v1/users/92353e192ef4492f8d2772fef98f29be?access_token=8e0d7b9e4e4a49b888d6b0b5f882b7cd&type=id
```

**返回数据：**
```json
{
	"status": 0,
	"message": "Everything is ok.",
	"result":{
		"user_id": "92353e192ef4492f8d2772fef98f29be",
		"domain_id": "atwork",
		"status": "ACTIVATED",
		"state": "NORMAL",
		"username": "13610117012",
		"name": "13610117012",
		"pinyin": "13610117012",
		"initial": "13610117012",
		"nickname": "13610117012",
		"phone": "13610117012",
		"email": "13610117012@qq.com",
		"gender": "MALE",
		"birthday": 1472601600000,
		"disabled": false
	}
}
```

**错误返回值：**

| status | message |说明|
|---|---|---|
| 10011 |token not found.|访问令牌不存在|

## 分页查询

```js
GET /v1/users?access_token={access_token}&skip={skip}&limit={limit}&refresh_time={refresh_time}
```

**请求参数：**

| 字段| 类型 | 是否必填|说明|
|---|---|---|---|
|access_token|String|Y|访问令牌|
| skip |String| N |开始记录数，默认值 0|
| limit |String| N |最大记录数，默认值 10|
| refresh_time |String| N |刷新时间戳，获取刷新时间以后的记录，默认值 -1|

**示例：**

```js
/v1/users?access_token=8e0d7b9e4e4a49b888d6b0b5f882b7cd&skip=0&limit=10&refresh_time=-1
```

**返回数据：**

```json
{
	"status": 0,
	"message": "Everything is ok.",
	"result":{
		"total_count": 1,
		"users":[
			{
				"user_id": "92353e192ef4492f8d2772fef98f29be",
				"domain_id": "atwork",
				"status": "ACTIVATED",
				"state": "NORMAL",
				"username": "13610117012",
				"name": "13610117012",
				"pinyin": "13610117012",
				"initial": "13610117012",
				"nickname": "13610117012",
				"phone": "13610117012",
				"email": "13610117012@qq.com",
				"gender": "MALE",
				"birthday": 1472601600000,
				"disabled": false
			}
		]
	}
}
```

**错误返回值：**

| status | message |说明|
|---|---|---|
| 10011 |token not found.|访问令牌不存在|
