# 认证

## 获取临时 Ticket
为当前登录用户获取一个临时性的 Ticket。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="auth.getUserTicket">

```js
w6s.auth.getUserTicket({
  success: function(res) {},
  fail: function(err) {},
});
```
</CodeWrapper>

**返回数据**

| 参数 | 说明 |
| - | - | 
| user_ticket | 申请到的用户 Ticket |

## 生物认证 <badge type="success" text="v3.15.0+" />
需要设备具备`指纹`或者`FACE_ID`解锁功能，解锁后触发回调，适用于对安全性要求较高的操作。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="auth.biometric">

```js
w6s.auth.biometric({
  success: function(res) {},
  fail: function(err) {},
});
```
</CodeWrapper>

**返回数据**

| 参数 | 说明 |
| - | - | 
| code | 0 表示生物认证成功, 2 表示用户取消了设置 |
| message | 描述信息 |
