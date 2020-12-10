# 开发者接口回调

## 消息回调

```js
POST http://XXXXXX?signature={signature}&timestamp={timestamp}&nonce={nonce}
```

**请求头部：**

| 请求头 | 说明 |
| - | - |
| Content-Type | application/json |

**请求参数：**

| 字段	| 类型	| 是否必填	| 说明 |
| -	| -	| -	| - |
| http://XXXXXX	| String| 	Y	| 回调地址 |
| signature	| String	| Y	| 签名,明文模式下,用message计算签名,其余情况用encrypt计算 |
| timestamp	| String	| Y	| 时间戳 |
| nonce	| String	| Y	| 随机数 |
| encrypt	| String	| Y	| 密文,安全模式及兼容模式下,返回该字段 |
| message	| String	| Y	| 明文,明文模式及兼容模式下,返回该字段 |
| to_user_name	| String	| Y	| 消息接收对象 |
| from_user_name	| String	| Y 	| 消息发送对象 |
| create_time	| String	| Y	| 回调消息时间 |
| msg_type	| String| 	Y	| 消息类型,text/image/voice/video/file/location/link/event |
| content	| String	| N	| 文本消息内容 |
| media_id	| String	| N	| 媒体类消息的媒体ID |
| event	| String | N	| 事件类型,SUBSCRIBE, SCAN, LOCATION, CLICK, VIEW |
| event_key	| String	| N	| 事件标识 |

**请求示例：**

```json
{
  "encrypt": "YN4w4Kudkm-6p1y8AATO6V",
  "message": "38-9izmiUlNo37wPV8dPQV"
}
```

**响应数据：**

Map 的 JSON，推荐返回格式如下:

```json
// application/json
{
  "status": 0, 
  "message": "Everything is ok."
}
```

**加密说明：**

* 计算签名：signature=sha1(sort(token、timestamp、nonce、echoStr))。sort的含义是将参数按照字母字典排序，然后从小到大拼接成一个字符串, echoStr:明文模式下,等于message,其余为encrypt;
* encrypt = Base64_Encode( AES_Encrypt[random(16B) + msg_len(4B) + msg + $appKey] )，是对明文消息msg加密处理后的Base64编码。 其中random为16字节的随机字符串；msg_len为4字节的msg长度，网络字节序；msg为消息体明文；$appKey为APP的标识

**解密说明：**

* 对密文BASE64解码：aes_msg=Base64_Decode(encrypt)
* 使用AESKey做AES解密：rand_msg=AES_Decrypt(aes_msg)
* 验证解密后$appKey、msg_len
* 去掉rand_msg头部的16个随机字节，4个字节的msg_len,和尾部的$appKey即为最终的消息体原文msg

**回调消息示例（明文格式化结果）**

文本消息：

```json
{
  "to_user_name": "abbd71f0-e213-481d-81f1-fcd143230e46", 
  "from_user_name": "a86e83a26be44eb59806901cc8be5d5c", 
  "create_time": 1487642989572, 
  "msg_type": "text", 
  "content": "test message"
}
```

语音消息：

```json
{
  "to_user_name": "abbd71f0-e213-481d-81f1-fcd143230e46", 
  "from_user_name": "a86e83a26be44eb59806901cc8be5d5c", 
  "create_time": 1487643037326, 
  "msg_type": "voice", 
  "media_id": "Z3JvdXAxL00wMC8wMC8wMy9yQkFCRzFpcm9aeUFIbUZ1QUFBSXhqbVlpQXczNzkudG1w"
}
```

文件消息：

```json
{
  "to_user_name": "abbd71f0-e213-481d-81f1-fcd143230e46", 
  "from_user_name": "a86e83a26be44eb59806901cc8be5d5c", 
  "create_time": 1487643081302, 
  "msg_type": "file", 
  "media_id": "Z3JvdXAxL00wMC8wMC8wMy9yQkFCRjFpcm92ZUFia0ZhQUFlc25sSGZMRVE5NTYuanBn"
}
```

图片消息：

```json
{
  "to_user_name": "abbd71f0-e213-481d-81f1-fcd143230e46", 
  "from_user_name": "a86e83a26be44eb59806901cc8be5d5c", 
  "create_time": 1487643104435, 
  "msg_type": "image", 
  "media_id": "Z3JvdXAxL00wMC8wMC8wMy9yQkFCRzFpcm9kLUFWUG9PQUFDNlJGRW0wWWM5MTEuanBn"
}
```

视频消息：

```json
{
  "to_user_name": "abbd71f0-e213-481d-81f1-fcd143230e46", 
  "from_user_name": "a86e83a26be44eb59806901cc8be5d5c", 
  "create_time": 1487643141486, 
  "msg_type": "video", 
  "media_id": "Z3JvdXAxL00wMC8wMC8wMy9yQkFCRjFpcm96T0FTT2d6QUFGbTkyYVppemc1NzMubXA0"
}
```

订阅事件：

```json
{
  "to_user_name": "abbd71f0-e213-481d-81f1-fcd143230e46", 
  "from_user_name": "a86e83a26be44eb59806901cc8be5d5c", 
  "create_time": 1487643267580, 
  "msg_type": "event", 
  "event": "SUBSCRIBE", 
  "event_key": "subscribe"
}
```
