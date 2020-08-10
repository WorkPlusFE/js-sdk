# 媒体查询

## 图片查看

```
GET /v1/medias/images/{fileId}?access_token={access_token}&domain_id={domain_id}&type=获取文件方式(ID/DIGEST,默认ID)&width=图片剪裁的宽度&heigh=图片剪裁的高度&rotate=图片旋转角度(默认0.0)&quality=图片压缩率(0~1,默认1)&default_thumbnail=是否缩略图(默认false)
```

**请求参数：**

| 字段| 类型 | 是否必填|说明|
|---|---|---|---|
| access_token | String | Y | 访问令牌 |
| domain_id | String | Y | 域标识 |
| fileId | String | Y | 图片标识 |

**请求示例：**

```js
/v1/medias/images/Z3JvdXAxL00wMC8wMC8wMS9yQkFCR1ZoX0xnZUFMaFN5QUFBaUxtMGx2b2szMTEuanBn?access_token=111&width=200&heigh=100
```

**返回数据：**

```json
Content-Type: image/jpeg
// ......
```

**错误返回值：**

| status | message |说明|
|---|---|---|
| 10011 |token not found.|访问令牌不存在|


## 文件下载

```js
GET /v1/medias/{fileId}?access_token={access_token}&domain_id={domain_id}&type=获取文件方式(ID/DIGEST,默认ID)
```
**请求头部：**

|请求头|说明 |
|---|---|
| Content-Type |application/json|

**请求参数：**

| 字段| 类型 | 是否必填|说明|
|---|---|---|---|
| access_token | String | Y | 访问令牌 |
| domain_id | String | Y | 域标识 |
| fileId | String | Y | 文件标识 |
| type | String | N | 获取文件方式(ID/DIGEST,默认ID) |

**请求示例：**

```js
/v1/medias/Z3JvdXAxL00wMC8wMC8wMi9yQkFCR1ZpQ3VOaUFRdkx1QUFBTFgwUW9fVXM4MDMucG5n?access_token=ac2a8470c0fb4ad2a27edd7459c6c770
```

**返回数据：**

```json
Content-Disposition:attachment; filename="%E8%93%9D%E5%A4%A9.png"
Content-Length: 2911
Content-Type: image/jpeg
// ......
```

## 获取文件信息

```js
GET /v1/medias/{fileId}/info?access_token={access_token}&type=获取文件方式(ID/DIGEST,默认ID)
```

**请求头部：**

|请求头|说明 |
|---|---|
| Content-Type |application/json|

**请求参数：**

| 字段| 类型 | 是否必填|说明|
|---|---|---|---|
|access_token|String|Y|访问令牌|
| fileId |String|Y|文件标识|
| type |String|N|获取文件方式(ID/DIGEST,默认ID)|

**请求示例：**

```js
/v1/medias/Z3JvdXAxL00wMC8wMC8wMi9yQkFCR1ZpQ3VOaUFRdkx1QUFBTFgwUW9fVXM4MDMucG5n/info?access_token=ac2a8470c0fb4ad2a27edd7459c6c770
```

**返回数据：**

```json
{
  "status": 0, 
  "message": "Everything is ok.", 
  "result": {
    "id": "Z3JvdXAxL00wMC8wMC8wMi9yQkFCR1ZpQ3VOaUFRdkx1QUFBTFgwUW9fVXM4MDMucG5n", 
    "name": "蓝天.png", 
    "digest": "", 
    "state": 0, 
    "size": 2911, 
    "timestamp": 1484962008275, 
    "metadata": { }
  }
}
```

**错误返回值：**

| status | message |说明|
|---|---|---|
| 10011 |token not found.|访问令牌不存在|