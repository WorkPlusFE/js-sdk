# 联系人

## 单选联系人

打开当前组织的联系人列表，单选一个联系人(兼容2.0数据)。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="contact.getSingleContact">

```js
w6s.contact.getSingleContact({
  hideMe: true,
  filterSenior: 1,
  success: function(res) {},
  fail: function(err) {},
});
```
</CodeWrapper>

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| hideMe |  Boolean | 表示在选择联系人的时候，是否显示自己 |
| filterSenior | Number | 1 表示过滤高管, 0 表示不过滤 | 

## 多选联系人

打开当前组织的联系人列表，单选一个联系人(兼容2.0数据)。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="contact.getContacts">

```js
w6s.contact.getContacts({
  hideMe: true,
  filterSenior: 1,
  selectedContacts: ['联系人列表信息，用于复选'],
  success: function(res) {},
  fail: function(err) {},
});
```
</CodeWrapper>

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| hideMe |  Boolean | 表示在选择联系人的时候，是否显示自己 |
| filterSenior | Number | 1 表示过滤高管, 0 表示不过滤 | 
| selectedContacts | Array | 非必须，雇员列表信息，用于复选 | 


## 多选当前组织的雇员列表

打开`当前组织`的联系人列表，选择多个联系人，返回雇员信息。


## 获取登录用户详情

获取当前登录用户详细信息，包括某个组织下的雇员信息。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="contact.getCurrentUserInfo">

```js
w6s.contact.getCurrentUserInfo({
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

<CodeWrapper fn="contact.getCurrentEmployeeInfo">

```js
w6s.contact.getCurrentEmployeeInfo({
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


## 打开用户聊天页面

传入`userId`、`domianId`，打开到 WorkPlus 与该用户的聊天页面。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="contact.showUserChatViewByUser">

```js
w6s.contact.showUserChatViewByUser({
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


## 获取手机通讯录

获取手机通讯录联系人的列表。

::: tip 提示
首次访问会提示是否允许设备访问手机通讯录，请允许，否则无法获取通讯录信息。
:::

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="contact.getMobileContacts">

```js
w6s.contact.getMobileContacts();
```
</CodeWrapper>

## 获取用户信息

通过用户的`domainId`和`userId`获取该用户的详细信息。

::: tip 用户和雇员的区别
用户简单理解就是一个账号，而雇员就是这个用户可能存在于多个组织或部门中，作为一个雇员的角色。
:::

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="contact.getUserInfoByUserId">

```js
w6s.contact.getUserInfoByUserId({
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

<CodeWrapper fn="contact.showUserInfoByUsername">

```js
w6s.contact.showUserInfoByUsername({
  username: '用户的username',
});
```
</CodeWrapper>

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| username |  String | 用户的username |


## 打开群组聊天页面 WIP <Badge text="v3.1.4+" type="warning" />

通过`群组id`打开该群组的聊天页面，并且可以自定义发送应用所支持的消息。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="contact.openDiscussionById">

```js
w6s.contact.openDiscussionById({
  discussionId: '0629aad170784c9e810985c443fb0bd6',
  body_type : 'SHARE',
  body: {
    display_avatar: "媒体id",
    share_type: 'LINK',
    share_message: {
      avatar: 'http://www.icon',
      digest: '这里显示摘要',
      url: 'www.baidu.com'
    },
  },
});
```
</CodeWrapper>

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| discussionId |  String | 群组的id |


## 创建群组

通过调用原生选人界面，选择人员，创建群组，并且返回相关群组信息。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="contact.createDiscussionChat">

```js
w6s.contact.createDiscussionChat();
```
</CodeWrapper>


## 打开应用聊天界面 WIP <Badge text="v3.4.1+" type="warning" />

通过`应用id`和`orgId`，打开该组织下某个应用聊天界面。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="contact.showAppChatViewById">

```js
w6s.contact.showAppChatViewById({
  appId: 'eb66ba3d-1d83-4104-8119-c6fc3b12cdca',
  domainId: 'workplus',
  orgId: '37a2ef9f-8683-4369-ae7b-121cea149d05',
  sessionType : 'service'
});
```
</CodeWrapper>

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| appId |  String | 当前应用所在域的id |
| domainId |  String | 前应用所在组织的id |
| orgId |  String | 当前应用的id |
| sessionType |  String | 当前应用的类型：主要类型有`service`及`lightApp` |

> service 是服务号，lightApp 是轻应用。


## 打开搜索页面 <Badge text="v3.4.1+" type="warning" />

打开 WorkPlus 的搜索页面。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="contact.searchInApp">

```js
w6s.contact.searchInApp();
```
</CodeWrapper>


## 打开App列表页面 <Badge text="v3.4.1+" type="warning" />

根据`组织id`打开该组织下的应用列表页面。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="contact.showAppListById">

```js
w6s.contact.showAppListById({
  orgId: '37a2ef9f-8683-4369-ae7b-121cea149d05',
});
```
</CodeWrapper>

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| orgId |  String | 需要显示应用列表的组织id，若为空，将自动打开当前用户所在组织下的应用列表 |

## 打开通用选择人员界面 <Badge text="v3.6.0+" type="warning" />

该接口打开通用的选择界面，此界面能选择组织内的雇员信息, 用户的星标联系人等。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="contact.selectContacts">

```js
w6s.contact.selectContacts({
  filterSenior: 1,
  maxCount: 9,
  selectedUsers: [{..}, {..}], // 已选择的users
  selectedEmployees: [{..}, {..}], // 已选择的employees
  success: function(res) {},
  fail: function(err) {},
});
```
</CodeWrapper>

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| filterSenior |  Number | 1 表示过滤高管, 0 表示不过滤，默认为 1 |
| maxCount |  Number | 选人最大数量, 最小为1, 默认不限制数量 |
| selectedUsers |  Array | 回传已选人员，用于复选 |
| selectedEmployees |  Array | 回传已选雇员，用于复选  |

**返回数据**

| 参数 | 说明|
| - | - |
| user | 所选用户 |
| employee | 所选雇员 |


## 打开群组选人界面 <Badge text="v3.6.0+" type="warning" /> 

根据`群组id`, 打开群组成员界面, 并进行选择。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="contact.selectDiscussionMembers">

```js
w6s.contact.selectDiscussionMembers({
  discussionId: '7e41cf3691344b28a9dd2035bac47',
  membersSelected: [{...}, {...}],
  success: function(res) {},
  fail: function(err) {},
});
```
</CodeWrapper>

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| discussionId |  String | 群组 id |
| membersSelected |  Array | 已选的群成员数据 |

**返回数据**

| 参数 | 说明|
| - | - |
| members | 返回群成员数据 |

## 获取选人缓存数据 <Badge text="v4.1.0+" type="warning" />

适用于由原生选人界面跳转到 H5 端，然后 H5 端获取选人数据的场景。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="contact.selectContactsCache">

```js
w6s.contact.selectContactsCache();
```
</CodeWrapper>

**返回数据**

| 参数 | 说明|
| - | - |
| user | 所选用户 |
| employee | 所选雇员 |

> 该缓存数据在 WebView 关闭时, 自动做清除处理。

## 选择范围 WIP