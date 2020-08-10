# 全局返回值

返回结果类型若无特殊说明，均为`application/json`。

| 字段	| 类型	| 说明| 
|- | -| - |
| status	| Int	| 状态码；0表示正常，非0表示错误，错误请参考[全局错误码](/api/errorCode.md)| 
| message	| String	| 状态码说明| 
| result	| 对象或数组	| 返回结果| 

**对象类型返回示例：**

```json
{
  "status": 0,
  "message": "Everything is ok.",
  "result": {
    "key" : "value"
  }
}
```

**数组类型返回示例：**

```json
{
  "status": 0,
  "message": "Everything is ok.",
  "result": [
    {"key" : "value"},
    {"key" : "value"}
  ]
}
```