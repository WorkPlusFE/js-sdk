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