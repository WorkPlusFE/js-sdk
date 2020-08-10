# 媒体转换

## 媒体转换

```
GET /v1/medias/{media_id}/translate?access_token={access_token}&source_type={source_type}&dest_type={dest_type}
```
**请求头部：**

|请求头|说明 |
|---|---|
| Content-Type |application/json|

**请求参数：**

| 字段| 类型 | 是否必填|说明|
|---|---|---|---|
|access_token|String|Y|访问令牌|
| media_id |String|Y|待转换的媒体标识|
| source_type |String|Y|源类型|
| dest_type |String|Y|目标类型|


::: tip 支持的转换类型
目前只支持：office 转 pdf  pdf 转图片  office 转图片  amr 转 Mp3  其它转换不支持，请注意！！！
:::

**请求示例：**

```js
office转图片：source_type=office&dest_type=jpg
```

```js
/v1/medias/Z3JvdXAxL00wMC8wMi9FQi9yQkFDLUZoLTBibUVOWFluQUFBQUFBQUFBQUE0NjYudG1w/translate?source_type=office&dest_type=jpg&access_token=06bcdf9d4dab437ab46d35128a60b491
```

**返回数据：**

<details>
<summary>点击查看响应数据</summary>

```json
{
  "status": 0,
  "message": "Everything is ok.",
  "result": {
    "media_id": "Z3JvdXAxL00wMC8wMC81Ni9yQkFDLUZmQUFuZUFlR1ZvQUF4RmNLS2xwQXMzNi5wcHR4",
    "dest_ids": [
      "Z3JvdXAxL00wMC8wMC9FMi9yQkFDLUZncXB2T0FhSWFrQUFCNVZpSkdEdXMzOTkuanBn",
      "Z3JvdXAxL00wMC8wMC9FMi9yQkFDLUZncXB2T0FPR01QQUFCeUxWcXhURWs2NDYuanBn",
      "Z3JvdXAxL00wMC8wMC9FMi9yQkFDLUZncXB2T0FZdml0QUFCOFJ5dmZnaVE1NDEuanBn",
      "Z3JvdXAxL00wMC8wMC9FMi9yQkFDLUZncXB2T0FTN25kQUFDVjU2QzMzb0ExMTguanBn",
      "Z3JvdXAxL00wMC8wMC9FMi9yQkFDLUZncXB2T0FHQ3FpQUFDVWw4bjVWdXMyMDUuanBn",
      "Z3JvdXAxL00wMC8wMC9FMi9yQkFDLUZncXB2T0FlVHNBQUFCODBLOVBBRU05NDQuanBn",
      "Z3JvdXAxL00wMC8wMC9FMi9yQkFDLUZncXB2T0FFLXRNQUFDVWpPT3Zkcm84NzYuanBn",
      "Z3JvdXAxL00wMC8wMC9FMi9yQkFDLUZncXB2T0FVem5yQUFDSHFOM05BdUEyNzAuanBn",
      "Z3JvdXAxL00wMC8wMC9FMi9yQkFDLUZncXB2T0FQeDkzQUFDU2x3OUU4Ums2MDIuanBn",
      "Z3JvdXAxL00wMC8wMC9FMi9yQkFDLUZncXB2T0FiNmZFQUFDVEhKNjFIV2MxNjAuanBn",
      "Z3JvdXAxL00wMC8wMC9FMi9yQkFDLUZncXB2T0FIYzBWQUFDVzRpdF91UVExOTUuanBn",
      "Z3JvdXAxL00wMC8wMC9FMi9yQkFDLUZncXB2T0FHUHBsQUFDSzhna2g5RE03NzMuanBn",
      "Z3JvdXAxL00wMC8wMC9FMi9yQkFDLUZncXB2T0FJaG4tQUFDRm1GelpzRE0wNTMuanBn",
      "Z3JvdXAxL00wMC8wMC9FMi9yQkFDLUZncXB2T0FjX1JrQUFDZDFhdTNNd1kwNzMuanBn",
      "Z3JvdXAxL00wMC8wMC9FMi9yQkFDLUZncXB2T0FRSENqQUFCbEY4ZThBQlkzNDQuanBn"
    ],
    "name": "新版atwork技术架构.pptx",
    "source_type": "office",
    "dest_type": "jpg",
    "create_time": 1479190247137,
    "expire_time": 0
  }
}
```
</details>

| 字段| 类型 |说明|
|---|---|---|
| media_id |String|待转换的媒体标识|
| dest_ids |List[String]|转换后的媒体标识集合|
| name |String|媒体名称|

**错误返回值：**

| status | message |说明|
|---|---|---|
| 10011 |token not found.|访问令牌不存在|

---

## 图片压缩

```js
POST /v1/medias/compress?access_token={access_token}&width={width}&height={height}&quality={quality}&format={format}&thumb={thumb}&thumb_width={thumb_width}&thumb_height={thumb_height}&thumb_size={thumb_size}&original={original}
```
**请求头部：**

|请求头|说明 |
|---|---|
| Content-Type |multipart/form-data|

**请求参数：**

| 字段| 类型 | 是否必填|说明|
|---|---|---|---|
|access_token|String|Y|访问令牌|
| media |Stream|Y|待压缩的图片流（multipart/form-data）|
| width |Int|N|压缩后的图片宽度（默认值：800）|
| height |Int|N|压缩后的图片高度（默认值：800）|
| quality |Float|N|压缩后的图片质量（取值范围：0-1）（默认值：1）|
| format |String|N|压缩后的图片类型（默认值：JPG）|
| thumb |Boolean|N|是否需要缩略图（默认值：false）|
| thumb_width | Int |N|缩略图宽度（默认值：180）|
| thumb_height | Int |N|缩略图高度（默认值：180）|
| thumb_size | Int |N|缩略图大小（默认值：20480字节）|
| original | Boolean | N | 是否保存原文件（默认值：false）|
| digest | String | N | 文件签名,一般采用MD5码即可 |

**请求示例：**

```js
/v1/medias/compress?access_token=299abb50111349c5a347b510a4ab9ee1&thumb=true&original=true&digest=999
```

**返回数据：**

<details>
<summary>点击查看响应数据</summary>

```json
{
  "message": "Everything is ok.", 
  "result": {
    "original_media": {
      "media_id": "Z3JvdXAxL00wMC8wMC8wRS9yQkFCR1ZrLU8tbUFhMWZsQUFHODJTNURYMGszODAuanBn", 
      "size": 113881, 
      "width": 0, 
      "height": 0
    }, 
    "media": {
      "height": 208, 
      "media_id": "Z3JvdXAxL00wMC8wMC8wMC9yQkFCR1ZoSGlGeUFkNWowQUFENXFPZDZ6LW8wMDguZ2lm", 
      "size": 63912, 
      "width": 208
    }, 
    "thumb_media": {
      "blob": "Base64 encode data", 
      "height": 180, 
      "media_id": "Z3JvdXAxL00wMC8wMC8wMC9yQkFCRzFoSGgydUFMZnhzQUFBWDBCeEJlbUUxMjcuanBn", 
      "size": 6096, 
      "width": 180
    }
  }, 
  "status": 0
}
```
</details>

| 字段| 类型 |说明|
|---|---|---|
| media.height |Int|图片高度|
| media.width | Int |图片宽度|
| media.size | Int |图片大小|
| media.media_id | String |图片媒体标识|
| thumb_media.height |Int|缩略图片高度|
| thumb_media.width | Int |缩略图片宽度|
| thumb_media.size | Int |缩略图片大小|
| thumb_media.media_id | String |缩略图片媒体标识|
| thumb_media. blob | String |缩略图片(经Base64编码的二进制流)|

**错误返回值：**

| status | message |说明|
|---|---|---|
| 10011 |token not found.|访问令牌不存在|
