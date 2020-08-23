# 用户


## 获取登录用户详情

获取当前登录用户详细信息，包括某个组织下的雇员信息。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="user.getCurrentUserInfo">

```js
w6s.user.getCurrentUserInfo({
  needEmpInfo: true,
  success: function(res) {},
  fail: function(err) {},
});
```
</CodeWrapper>

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| needEmpInfo |  Boolean | 返回用户资料是否带上当前组织的雇员信息 |

## 获取用户的雇员信息

通过传入组织id，获取当前用户的雇员信息，默认为当前所在组织。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="user.getCurrentEmployeeInfo">

```js
w6s.user.getCurrentEmployeeInfo({
  orgCode: '组织id',
  success: function(res) {},
  fail: function(err) {},
});
```
</CodeWrapper>

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| orgCode |  Boolean | 组织`org_id`或`org_code` 表示用户所在的组织 |

## 获取用户信息

通过用户的`domainId`和`userId`获取该用户的详细信息。

::: tip 用户和雇员的区别
用户简单理解就是一个账号，而雇员就是这个用户可能存在于多个组织或部门中，作为一个雇员的角色。
:::

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="user.getUserInfoByUserId">

```js
w6s.user.getUserInfoByUserId({
  userId: '用户的userId',
  domainId: '用户的domainId',
});
```
</CodeWrapper>

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| userId |  String | 用户的 userId |
| domainId |  String | 用户的 domainId |

## 打开用户详情页面

通过用户`username`打开该用户信息的详情页面。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="user.showUserInfoByUsername">

```js
w6s.user.showUserInfoByUsername({
  username: '用户的username',
});
```
</CodeWrapper>

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| username |  String | 用户的username |
