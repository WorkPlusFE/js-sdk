# 邮箱

## 写邮件
<!-- OK -->
跳转到写邮件的页面。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="email.writeEmail">

```js
w6s.email.writeEmail({
  emails: 'xxx.163.com,xxx.foreverht.com',
  success: function(res) {},
  fail: function(err) {},
});
```
</CodeWrapper>

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| emails |  String | 要发送的邮箱地址, 支持多地址, 使用逗号`,`进行分割|

## 打开邮箱
<!-- OK -->
跳转到我的邮箱，未登录就跳转到登录页。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="email.openEmail">

```js
// 该方法没有回调
w6s.email.openEmail();
```
</CodeWrapper>
