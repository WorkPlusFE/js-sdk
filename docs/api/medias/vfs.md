# 媒体操作

## 图片上传(json)
####
```
POST /v1/medias/images?access_token={access_token}
```
**请求头部：**
|请求头|说明 |
|---|---|
| Content-Type |application/json|

**请求参数：**

| 字段| 类型 | 是否必填|说明|
|---|---|---|---|
| access_token | String | Y | 访问令牌 |
| file_name | String| Y | 文件名称 |
| file_content | byte[] | Y | 文件内容(BASE64)|
| file_digest | String | N | 文件摘要,用于标记文件 |
| file_type | String | N | 图片类型（例如:image/jpeg）|
| width | Int | N | 图片宽度 |
| height | Int | N | 图片高度 |
| quality | Float | N | 图片质量（取值范围：0-1）（默认值：1）|
| rotate | Float | N | 图片旋转角度,默认0.0 |
| format | String | N | 图片输入格式(默认jpg) |

**请求示例：**
```
/v1/medias/images?access_token=b646339e2f4f4234af6bae5f72db9879
```
```
{
    "file_name" : "文件名称",
    "file_type" : "图片格式用于读取时响应的Content-Type"
    "file_digest" : "文件摘要",
    "file_content" : "文件内容",
    "width" : 100,
    "height" : 100,
    "rotate" : 0,
    "quality" : 0.6,
    "format" : "jpg"
}
```

**返回数据：**

```
{
  "status": 0,
  "message": "Everything is ok.",
  "result": {
    "Z3JvdXAxL00wMC8wMC8wMC9yQkFCR1ZoSGlGeUFkNWowQUFENXFPZDZ6LW8wMDguZ2lm"
  }
}
```

**错误返回值：**

| status | message |说明|
|---|---|---|
| 10011 |token not found.|访问令牌不存在|



## 图片上传(multipart/form-data)

```js
POST /v1/medias/images?access_token={access_token}&file_digest={file_digest}&file_size={file_size}&width={width}&heigh={heigh}&rotate={heigh}&quality={quality}&format={format}
```

**请求参数：**

| 字段| 类型 | 是否必填|说明|
|---|---|---|---|
| access_token | String | Y | 访问令牌 |
| filename | String | Y | 文件名称 |
| file_content | Stream | Y | 文件流 |
| file_digest | String | N | 文件摘要,用于标记文件 |
| file_type | String | N | 图片类型（例如:image/jpeg）|
| width | Int | N | 图片宽度 |
| height | Int | N | 图片高度 |
| quality | Float | N | 图片质量（取值范围：0-1）（默认值：1）|
| rotate | Float | N | 图片旋转角度,默认0.0 |
| format | String | N | 图片输入格式(默认jpg) |

```json
POST /medias/images?access_token={access_token}&file_digest=文件摘要&file_size=文件大小&width=图片剪裁的宽度&heigh=图片剪裁的高度&rotate=图片旋转角度&quality=图片压缩率(0~1)&format=图片输入格式(默认jpg)
Content-Type: multipart/form-data
Accept: application/json

------------boundary
Content-Disposition:form-data; name="file";filename=""
Content-Type: {content-type}

file content...
```

**返回数据：**

```json
{
  "status": 0,
  "message": "Everything is ok.",
  "result": "Z3JvdXAxL00wMC8wMC8xMi9yQkFCR1ZuSWkxU0FINl9LQUFGeTNEQzlfYUEyOTQuanBn"
}
```

**错误返回值：**

| status | message |说明|
|---|---|---|
| 10011 |token not found.|访问令牌不存在|


## 文件上传(json)

```js
POST /v1/medias?access_token={access_token}
```

**请求头部：**

|请求头|说明 |
|---|---|
| Content-Type |application/json|

**请求参数：**

| 字段| 类型 | 是否必填|说明|
|---|---|---|---|
| access_token | String | Y | 访问令牌 |
| file_name | String| Y | 文件名称 |
| file_content | byte[] | Y | 文件内容 |
| file_digest | String | N | 文件摘要,用于标记文件 |

**请求示例：**

```js
/v1/medias?access_token=b646339e2f4f4234af6bae5f72db9879
```

```json
{
  "file_name" : "文件名称",
  "file_digest" : "文件摘要",
  "file_content" : "文件流",
  "file_metadata" : {
    "key1" : "value1"
  }
}
```

**返回数据：**

```json
{
  "status": 0, 
  "message": "Everything is ok.", 
  "result": "Z3JvdXAxL00wMC8wMC8xMi9yQkFCRzFuSWpkdUFJVmE2QUFBQ0ZPcVh3eXM0MjMubXA0"
}
```

**错误返回值：**

| status | message |说明|
|---|---|---|
| 10011 |token not found.|访问令牌不存在|


## 文件上传(multipart/form-data)

```js
POST /v1/medias?access_token={access_token}&file_digest={file_digest}&file_size={file_size}
```

**请求参数：**

| 字段| 类型 | 是否必填|说明|
|---|---|---|---|
| access_token | String | Y | 访问令牌 |
| file | Stream | Y | 文件流（multipart/form-data） |
| file_digest | String | Y | 文件摘要,用于标记文件 |
| file_size | long | Y | 文件大小 |
| filename | String| Y | 文件名称 |

```json
POST /medias?access_token={access_token}&file_digest=文件摘要&file_size=文件大小
Content-Type: multipart/form-data
Accept: application/json

------------boundary
Content-Disposition:form-data; name="file";filename=""
Content-Type: {content-type}

file content...
```

**返回数据：**

```json
{
  "status": 0, 
  "message": "Everything is ok.", 
  "result": "Z3JvdXAxL00wMC8wMC8xMi9yQkFCRzFuSWpkdUFJVmE2QUFBQ0ZPcVh3eXM0MjMubXA0"
}
```

**错误返回值：**

| status | message |说明|
|---|---|---|
| 10011 |token not found.|访问令牌不存在|
