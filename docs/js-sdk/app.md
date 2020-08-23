# 应用

## 路由跳转

根据参数跳转到指定的 App。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="app.route">

```js
w6s.app.route({
  schemeUrl: 'workplus://voip',
  success: function(res) {},
  fail: function(err) {},
});
```
</CodeWrapper>

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| scheme_url |  String | 除了原生应用的`schema_url`规则, 也支持内部的应用协议, 例如`workplus://openApp?id=abc&domainId=abc` |


## 打开应用聊天界面 WIP <Badge text="v3.4.1+" type="warning" />

通过`应用id`和`orgId`，打开该组织下某个应用聊天界面。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="app.showAppChatViewById">

```js
w6s.app.showAppChatViewById({
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

<CodeWrapper fn="app.searchInApp">

```js
w6s.app.searchInApp();
```
</CodeWrapper>


## 打开App列表页面 <Badge text="v3.4.1+" type="warning" />

根据`组织id`打开该组织下的应用列表页面。

**使用说明**

| 客户端   | Android | iOS  |
| -------- | ------- | ---- |
| 支持情况 | 支持  | 支持 |

<CodeWrapper fn="app.showAppListById">

```js
w6s.app.showAppListById({
  orgId: '37a2ef9f-8683-4369-ae7b-121cea149d05',
});
```
</CodeWrapper>

**参数说明**

| 参数 | 类型 | 说明|
| - | - | - |
| orgId |  String | 需要显示应用列表的组织id，若为空，将自动打开当前用户所在组织下的应用列表 |
